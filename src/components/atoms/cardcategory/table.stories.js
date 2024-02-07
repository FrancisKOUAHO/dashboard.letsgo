import CardCategory from "./table";
import Image from "next/image";
import Are from "@/src/assets/pexel.jpg";

export const table = () => {
  return (
    <CardCategory
      className="c-cardCategory"
      name="Ateliers"
      slug="category"
      status="Active"
    >
      <Image className="card-Image" src={Are} width="100" height="100" />
    </CardCategory>
  );
};

export default {
  title: "Atoms/table",
  component: table,
};
