import {FunctionComponent} from "react";
import CardCategoryProps from "@/app/types/CardCategoryProps";
import {ButtonIcon} from "@/app/components/atoms/button/button";
import {AiOutlineDelete, AiOutlineEye, AiOutlineForm, AiOutlineBook} from "react-icons/ai";
import {color} from "@storybook/theming";

const cardCategory: FunctionComponent<CardCategoryProps> = ({className, image, name, slug, status, action, children}) => {
    return(
        <div className={className}>
            <table className={className}>
                <thead className="thead-1">
                <tr>
                    <th>
                        Image
                    </th>
                    <th>
                        {"Nom de la catégorie"}
                    </th>
                    <th>
                        Slug
                    </th>
                    <th className="th-last">
                        Statut
                    </th>
                    <th className="th-last">
                        Actions
                    </th>
                </tr>
                </thead>
                <thead>
                <tr className="tr-content">
                    <td className="td-first">
                        <div className="td-flex">
                            <div className="div-zoomin">
                                {children}
                            </div>
                        </div>
                    </td>
                    <td className="td-second">
                        <a className="a-second">
                            {name}
                        </a>
                    </td>
                    <td className="td-third">
                        <a className="a-third">
                            <ButtonIcon className="c-button-icon"  color="greyC"><AiOutlineBook className="all-icon"/> /{slug}/</ButtonIcon>
                        </a>
                    </td>
                    <td className="td-beforelast">
                        <div className="td-beforelast-button">
                            <ButtonIcon  className="c-button-icon" color="danger" name={status}><AiOutlineForm className="all-icon"/></ButtonIcon>
                        </div>
                    </td>
                    <td className="td-last">
                        <div className="td-last-button">
                            <a className="a-last-button">
                                <ButtonIcon  className="c-button-icon" color="secondary" name="Modifier"><AiOutlineForm className="all-icon"/></ButtonIcon>
                            </a>
                            <a className="a-last-button-2">
                                <ButtonIcon  className="c-button-icon" color="danger" name="Supprimer"><AiOutlineDelete className="all-icon"/></ButtonIcon>
                            </a>
                        </div>
                    </td>
                </tr>
                </thead>
            </table>
        </div>
    )
}

export default cardCategory
