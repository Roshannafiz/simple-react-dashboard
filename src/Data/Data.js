// Sidebar Imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilMoneyWithdraw,
    UilUsdSquare,
} from "@iconscout/react-unicons";

import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'



// Sidebar Data
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },

    {
        icon: UilChart,
        heading: "Analytics",
    },
];

export const CardsData = [

    // Seal Card
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25, 970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100]
            },
        ],
    },

    // Revenue Card
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14, 970",
        png: UilMoneyWithdraw,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40]
            },
        ],
    },

    // Expensive
    {
        title: "Expensive",
        color: {
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4, 270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expensive",
                data: [10, 25, 15, 30, 12, 15, 20]
            },
        ],
    },
]

// Recent Update Card Data
export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "Has ordered Apple smart watch",
        time: "25 second ago",
    },
    {
        img: img2,
        name: "Jone Deo",
        noti: "Has recived Samsung smart phone",
        time: "50 minute ago",
    },
    {
        img: img3,
        name: "Jeckey Jein",
        noti: "Has ordered Vivo V20 Pro",
        time: "55 second ago",
    },
];












