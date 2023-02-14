import Input from "./sidebar";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";

export const LinkSideBar = () => <Link href="#"> <AiOutlineHome/> Tableau de bord</Link>

export default {
  title: "Atoms/Input",
  component: Input,
}
