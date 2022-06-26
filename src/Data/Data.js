//Sidebar icons import
import {
  UilHome,
  UilEstate,
  UilTag,
  UilShop,
  UilShoppingBag,
  UilStore,
} from "@iconscout/react-unicons";

//Sidebar Data
export const SidebarData = [
  {
    icon: UilHome,
    heading: "Dashboard",
  },
  {
    icon: UilTag,
    heading: "Orders",
  },
  {
    icon: UilShop,
    heading: "Customers",
  },
  {
    icon: UilShoppingBag,
    heading: "Products",
  },
  {
    icon: UilStore,
    heading: "Analytics",
  },
];

export const CardData = [
  {
    title: "sales",
    color: {
      backGround: "hsl(0, 0%, 95%)",
      boxShadow: "0px 5px 5px 0px #c3c3c3",
    },
    barValue: 70,
    value: "111",
    png: UilTag,
    series: [
      {
        name: "Sales",
        data: [11, 14, 44, 77, 22, 45, 33],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "hsl(0,0%,95%)",
      boxShadow: "0px 5px 5px 0px #c3c3c3",
    },
    barValue: 90,
    value: "66,22",
    png: UilShoppingBag,
    series: [
      {
        name: "Revenue",
        data: [2, 4, 12, 22, 33, 44, 88],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "hsl(0, 0%, 95%)",
      boxShadow: "0px 5px 5px 0px #c3c3c3",
    },
    barValue: 50,
    value: "28,22",
    png: UilStore,
    series: [
      {
        name: "sales",
        data: [11, 22, 44, 88, 66, 44, 4],
      },
    ],
  },
];

// update reviews

import img1 from "../TrackShopApp/imgs/img1.jpg";
import img2 from "../TrackShopApp/imgs/img2.jpg";
import img3 from "../TrackShopApp/imgs/img3.jpg";
export const UpdateReview = [
  {
    img: img1,
    note: "orderd Apple Iphone12",
    name: "Tom cruiz ",
    time: "10 minutes ago",
  },

  {
    img: img2,
    note: "orderd Samsung Galaxy s22",
    name: "Keanu Reeves ",
    time: "1 hour ago",
  },

  {
    img: img3,
    note: "orderd MacBook",
    name: "Johnny Depp",
    time: "1 hour ago",
  },
];
