import {FunctionComponent} from "react";
import CardUsersProps from "@/app/types/CardUsersProps";

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
                    <a>
                        <button className="c-a-button">Message</button>
                    </a>
                    <a>
                        <button className="c-a2-button">Profil</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CardUsers
