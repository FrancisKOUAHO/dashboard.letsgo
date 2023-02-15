import {FunctionComponent} from "react";
import {AiOutlineTeam, AiOutlineEuroCircle,AiOutlineCheckSquare} from "react-icons/ai";
const iconText = () => {
    return(
        <div className="c-iconText">
            <div>
                <h2>Accrobranche</h2>
            </div>
            <div>
                <AiOutlineEuroCircle className="allicon"/>
                <p>Prix : <span>17 $</span></p>
            </div>
            <div>
                <AiOutlineTeam className="allicon"/>
                <p>Place disponible : <span>55</span></p>
            </div>
            <div>
                <AiOutlineCheckSquare className="allicon"/>
                <p>Satuts : <span>Active</span></p>
            </div>
        </div>
    )
}

export default iconText
