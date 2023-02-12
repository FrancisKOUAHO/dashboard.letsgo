"use client"

import {isAuthorized} from "@/app/utils/auth";

const page = () => {
  const authorized = isAuthorized('admin');

  if (!authorized) {
    return <div>Not Authorized</div>;
  }

  return (
    <div>
      <h1>dashboard Admin</h1>
    </div>
  )
}

export default page
