import { IoBarChartSharp } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";

import { ImProfile } from "react-icons/im";
import { FaTasks } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";

const links = [
  /*{ id: 1, text: "statistiques", path: "/", icon: <IoBarChartSharp /> },*/
  { id: 2, text: "vos projets", path: "projects", icon: <FaProjectDiagram /> },
  {
    id: 3,
    text: "taches reçues ",
    path: "tasks",
    icon: <FaTasks />,
  },
  { id: 4, text: "profile", path: "profile", icon: <ImProfile /> },
  /*{
    id: 5,
    text: 'creer projet',
    path: 'add-project',
    icon: <MdOutlineAddBox />,
  },*/
];

export default links;
