import {MdOutlineBusinessCenter, MdOutlineSchool} from "react-icons/md";
import {FaAward} from "react-icons/fa";

module.exports = [
    {
        id: 1,
        title: "Education",
        icon: <MdOutlineBusinessCenter/>,
        items: [
            {
                id: 1,
                date: "2007-2011",
                title: "Gymnasium High School",
                place: "Gornji Vakuf, BiH",
                bg: "#FFF4F4",
            },

            {
                id: 2,
                date: "2011 - 2014",
                title: "Faculty of Civil Engineering",
                place: "University Of Sarajevo, Sarajevo, BiH",
                bg: "#FFF1FB",
            },

            {
                id: 3,
                date: "2015-2019",
                title: "Faculty of Information Technology",
                place: "University Džemal Bijedić, Mostar, BiH",
                bg: "#FFF4F4",
            },
        ],
    },
    {
        id: 2,
        title: "Experience",
        icon: <MdOutlineSchool/>,
        items: [
            {
                id: 1,
                date: "2019-2020",
                title: "Freelance",
                place: "Upwork",
                bg: "#EEF5FA",
            },

            {
                id: 2,
                date: "2020-2021",
                title: "Frontend Developer",
                place: "p23 d.o.o",
                bg: "#F2F4FF",
            },

            {
                id: 3,
                date: "2021-Present",
                title: "Frontend Developer",
                place: "ZenDev AB",
                bg: "#EEF5FA",
            },
        ],
    },
    {
        id: 3,
        title: "Awards",
        icon: <FaAward/>,
        items: [
            {
                id: 1,
                date: "2018",
                title: "Hackathon 2nd place",
                place: "BEST Mostar",
                bg: "#FCF4FF",
            },
            {
                id: 3,
                date: "2022",
                title: "ReactJS Coach",
                place: "ZenDev AB",
                bg: "#FCF4FF",
            },
            {
                id: 2,
                date: "2023",
                title: "Best Host",
                place: "ZenDev AB Hackathon",
                bg: "#FCF9F2",
            },
        ],
    },
];
