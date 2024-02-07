"use client";

import React from "react";
import { useUsers } from "@/src/hooks/useUsers";
import CardUsers from "@/src/components/atoms/cardusers/cardUsers";
import useIsAuthorized from "@/src/utils/auth";

const Page = () => {
  const isAuthorized = useIsAuthorized("partner");

  const { data, status, error } = useUsers();

  return (
    <div className="c-users o-padding">
      <h2>{"Tous les utilisateurs"}</h2>

      <div className="c-users__users mt-12">
        <div>
          <div className="container-card">
            {data &&
              data.data.map((user: any, index: number) => {
                return (
                  <CardUsers
                    className="c-cardUsers"
                    key={index}
                    name={user.full_name}
                    role={user.role}
                  >
                    <img
                      className="cardUsers-Image"
                      src={user.photo}
                      alt={user.full_name}
                      width="100"
                      height="100"
                    />
                  </CardUsers>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
