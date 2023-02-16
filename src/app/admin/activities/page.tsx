"use client"

import {isAuthorized} from "@/app/utils/auth";
import LayoutCustom from "@/app/layouts/layoutCustom";

const page = () => {
  const authorized = isAuthorized('admin');

  if (!authorized) {
    return <div>Not Authorized</div>;
  }

  return (
    <LayoutCustom>
      <h1>Activity</h1>
    </LayoutCustom>
  )
}

export default page
