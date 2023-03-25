// Sidebar imports
import {
  UilEstate,
  UilChart,
 
} from "@iconscout/react-unicons";



// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },

  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "room",
    statu: "safe",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    
    time: '23 minutes',
    value: 1,
    period: "week 1",
    series: [
      {
        name: "alerts",
        data: [2, 5, 0, 1, 2, 4, 3],
        
      },
    ],
  },
  
  {
    title: "room",
    statu: "safe",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    value: 2,
    time: '23 minutes',
    period: "week 1",
    series: [
      {
        name: "alerts",
        data: [2, 5, 0, 1, 2, 4, 3],
        sound: "fall",

      },
    ],
  },
  {
    title: "room",
    statu: "safe",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    value: 3,
    time: '23 minutes',
    period: "week 1",
    series: [
      {
        name: "alerts",
        data: [2, 5, 0, 1, 2, 4, 3],
        sound: "fall",
      },
    ],
  },
  {
    title: "room",
    statu: "safe",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    value: 4,
    time: '23 minutes',
    period: "week 1",
    series: [
      {
        name: "alerts",
        data: [2, 5, 0, 1, 2, 4, 3],
        sound: "fall",
      },
    ],
  },
];

