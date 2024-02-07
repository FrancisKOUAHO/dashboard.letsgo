import { FunctionComponent } from "react";
import Link from "next/link";
import CardUsersProps from "@/src/types/CardUsersProps";

const CardUsers: FunctionComponent<CardUsersProps> = ({
  className,
  name,
  role,
  children,
}) => {
  return (
    <div className={className}>
      <div>
        <div>{children}</div>
        <div>
          <a>{name}</a>
          <div className="c-role">{role}</div>
        </div>
        <div>
          <Link className="c-a-button" href="src/components/atoms/cardusers#">
            Message
          </Link>
          <a className="c-a2-button" href="src/components/atoms/cardusers#">
            Profil
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardUsers;
