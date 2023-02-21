import {FunctionComponent} from "react";
import CardUsersProps from "@/app/types/CardUsersProps";
import Link from "next/link";

const CardUsers:FunctionComponent<CardUsersProps> = ({className, name, role, children}) => {
    return(
        <div className={className}>
            <div>
                <div>
                    {children}
                </div>
                <div>
                    <a>
                        {name}
                    </a>
                    <div className="c-role">
                        {role}
                    </div>
                </div>
                <div>
                    <Link className="c-a-button" href="#">
                        Message
                    </Link>
                    <a className="c-a2-button" href="#">
                        Profil
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardUsers
