import {FunctionComponent} from "react";
import CardStatsProps from "../../../../app/types/CardStatsProps";
const CardStats: FunctionComponent<CardStatsProps> = ({className, icon, number, numberofpourcents, titleCards}) => {
    return (
        <div className={className}>
            <div>
                {icon}
                <div>
                    {numberofpourcents}%
                </div>
            </div>
            <div>
                <p>{number}</p>
                <span>{titleCards}</span>
            </div>
        </div>
    )
}

export default CardStats
