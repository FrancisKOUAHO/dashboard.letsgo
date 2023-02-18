'use client'

import LayoutCustom from "@/app/layouts/layoutCustom";
import {IsAuthorized} from "@/app/utils/auth";

const Page = () => {
  const authorized = IsAuthorized("admin");

  if (!authorized) return <div>Not Authorized</div>

  return (
    <LayoutCustom>
      <div className="c-users">
        <h2>{"Tous les utilisateurs"}</h2>

      </div>
    </LayoutCustom>
  )
}

export default Page
