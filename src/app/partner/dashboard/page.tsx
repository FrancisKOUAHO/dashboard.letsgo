'use client'

import {IsAuthorized} from "@/app/utils/auth";
import LayoutCustom from "@/app/layouts/layoutCustom";

const page = () => {
  const authorized = IsAuthorized('partner');

  if (!authorized) {
    return <div>Not Authorized</div>;
  }

  return (
    <LayoutCustom>
      <h1>dashboard partner</h1>
    </LayoutCustom>
  )
}

export default page
