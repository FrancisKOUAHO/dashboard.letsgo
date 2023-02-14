import {isAuthorized} from "@/app/utils/auth";
import LayoutCustom from "@/app/layouts/layoutCustom";

const page = () => {
  const authorized = isAuthorized('partner');

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
