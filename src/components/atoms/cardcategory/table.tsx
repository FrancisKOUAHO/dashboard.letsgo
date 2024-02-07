import { FunctionComponent } from "react";
import { AiOutlineDelete, AiOutlineForm, AiOutlineBook } from "react-icons/ai";
import Link from "next/link";
import {
  CategoriesProps,
  ReservationContentProps,
  TitleTableProps,
} from "@/src/types/CardCategoryProps";
import { ButtonIcon } from "@/src/components/atoms/button/button";

export const TitleTable: FunctionComponent<TitleTableProps> = ({
  title,
  title_2,
  title_3,
  title_4,
  title_5,
  className,
  children,
}) => {
  return (
    <div className={className}>
      <table className={className}>
        <thead className="thead-1">
          <tr>
            <th>{title}</th>
            <th>{title_2}</th>
            <th>{title_3}</th>
            <th className="th-last">{title_4}</th>
            <th className="th-last">{title_5}</th>
          </tr>
        </thead>
        <thead>{children}</thead>
      </table>
    </div>
  );
};

export const CategoryContent: FunctionComponent<CategoriesProps> = ({
  image,
  name,
  slug,
  status,
  action,
}) => {
  return (
    <tr className="tr-content">
      <td className="td-first">
        <div className="td-flex">
          <div className="div-zoomin">
            <img className="card-Image" src={image} alt={name} />
          </div>
        </div>
      </td>
      <td className="td-second">
        <a className="a-second">{name}</a>
      </td>
      <td className="td-third">
        <a className="a-third">
          <ButtonIcon className="c-button-icon" color="greyC">
            <AiOutlineBook className="all-icon" /> /{slug}/
          </ButtonIcon>
        </a>
      </td>
      <td className="td-beforelast">
        <div className="td-beforelast-button">
          <ButtonIcon className="c-button-icon" color="danger" name={status}>
            <AiOutlineForm className="all-icon" />
          </ButtonIcon>
        </div>
      </td>
      <td className="td-last">
        <div className="td-last-button">
          <a className="a-last-button">
            <ButtonIcon
              className="c-button-icon"
              color="secondary"
              name="Modifier"
            >
              <AiOutlineForm className="all-icon" />
            </ButtonIcon>
          </a>
          <a className="a-last-button-2">
            <ButtonIcon
              className="c-button-icon"
              color="danger"
              name="Supprimer"
            >
              <AiOutlineDelete className="all-icon" />
            </ButtonIcon>
          </a>
        </div>
      </td>
    </tr>
  );
};

export const ReservationContent: FunctionComponent<ReservationContentProps> = ({
  reference,
  activite,
  montant,
  acheteur,
}) => {
  return (
    <tr className="tr-content">
      <td className="td-first">
        <Link href="#" className="a-second text-sm">
          {`${reference?.slice(0, 10)}...`}
        </Link>
      </td>
      <td className="td-second">
        <a className="a-second">{acheteur}</a>
      </td>
      <td className="td-third">
        <p className="a-third">{activite}</p>
      </td>
      <td className="td-beforelast">
        <p>{montant}</p>
      </td>
      <td className="td-last">
        <div className="td-last-button">
          <a className="a-last-button">
            <ButtonIcon
              className="c-button-icon"
              color="secondary"
              name="Modifier"
            >
              <AiOutlineForm className="all-icon" />
            </ButtonIcon>
          </a>
          <a className="a-last-button-2">
            <ButtonIcon
              className="c-button-icon"
              color="danger"
              name="Supprimer"
            >
              <AiOutlineDelete className="all-icon" />
            </ButtonIcon>
          </a>
        </div>
      </td>
    </tr>
  );
};
