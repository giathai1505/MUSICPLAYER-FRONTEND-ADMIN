import { HiUserGroup } from "react-icons/hi";
import { TiSortAlphabetically } from "react-icons/ti";
import { AiFillQuestionCircle, AiFillSound } from "react-icons/ai";

export const listSidebars = [
  {
    title: "User Management",
    path: "/user-management",
    icon: <HiUserGroup />,
  },
  {
    title: "Keyword Management",
    path: "/keyword-management",
    icon: <TiSortAlphabetically />,
  },
  {
    title: "Question Management",
    path: "/question-management",
    icon: <AiFillQuestionCircle />,
  },
  {
    title: "Sound Management",
    path: "/sound-management",
    icon: <AiFillSound />,
  },
];
