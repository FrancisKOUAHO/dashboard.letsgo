"use client"

import LayoutCustom from "@/app/layouts/layoutCustom";
import {isAuthorized} from "@/app/utils/auth";

const Page = () => {
  const authorized = isAuthorized("admin");

  if (!authorized) return <div>Not Authorized</div>

  return (
    <LayoutCustom>
      <div className="c-reservations">
        <h2>Tous les reservations</h2>
      </div>
    </LayoutCustom>
  )
}

export default Page
