import {AiOutlineHome} from "react-icons/ai";
import {FaBlogger, FaRegUser} from "react-icons/fa";
import {CgNotes} from "react-icons/cg";
import {FiCodesandbox} from "react-icons/fi";
import {RiContactsBookLine} from "react-icons/ri";

module.exports = [
    {
        id: "01",
        name: "Home",
        routePath: "/home",
        icon: <AiOutlineHome/>,
    },
    {
        id: "02",
        name: "About",
        routePath: "/about",
        icon: <FaRegUser/>,
    },
    {
        id: "06",
        name: "Resume",
        routePath: "/resume",
        icon: <CgNotes/>,
    },
    {
        id: "03",
        name: "Works",
        routePath: "/works",
        icon: <FiCodesandbox/>,
    },
    {
        id: "05",
        name: "Contact",
        routePath: "/contact",
        icon: <RiContactsBookLine/>,
    },
];
