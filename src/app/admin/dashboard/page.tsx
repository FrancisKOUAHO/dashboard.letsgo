"use client"

import {IsAuthorized} from "@/app/utils/auth";
import LayoutCustom from "@/app/layouts/layoutCustom";

const Page = () => {
  const authorized = IsAuthorized('admin');

  if (!authorized) {
    return <div>Not Authorized</div>;
  }

  return (
    <LayoutCustom>
      <h1>dashboard admin</h1>
    </LayoutCustom>
  )
}

export default Page
