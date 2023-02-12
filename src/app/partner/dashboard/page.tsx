"use client"

import {isAuthorized} from "@/app/utils/auth";

const page = () => {
  const authorized = isAuthorized('partner');

  if (!authorized) {
    return <div>Not Authorized</div>;
  }

  return (
    <div>
      <h1>dashboard Dashboard</h1>
    </div>
  )
}

export default page
