import { AiOutlineTeam, AiOutlineEuroCircle, AiOutlineCheckSquare } from "react-icons/ai";
import { FunctionComponent, useState } from "react";

const IconText = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="c-iconText">
            <div>
                <h2>
                    {isExpanded
                        ? "Visite guidée et dégustation de Champagne à Pierry (51)"
                        : "Visite guidée et..."}
                    <button onClick={handleToggleExpand}>
                        {isExpanded ? "Voir moins" : "Voir plus"}
                    </button>
                </h2>
            </div>
            <div>
                <AiOutlineEuroCircle className="all-icon" />
                <p>Prix : <span>17 $</span></p>
            </div>
            <div>
                <AiOutlineTeam className="all-icon" />
                <p>Place disponible : <span>55</span></p>
            </div>
            <div>
                <AiOutlineCheckSquare className="all-icon" />
                <p>Statut : <span>Active</span></p>
            </div>
        </div>
    );
};

export default IconText;
