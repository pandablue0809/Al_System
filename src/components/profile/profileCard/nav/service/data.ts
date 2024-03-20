import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "AGENT", uid: "recipient", sortable: true},
  {name: "API KEY", uid: "apiKey", sortable: true},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "pending", uid: "pending"},
  {name: "disable", uid: "disable"},
  {name: "enable", uid: "enable" },
  
];

const users = [
  {
    id:1,
    recipient: "Inventory",
    status: "pending",
    apiKey: "API_KEY_3",
    avatar: "https://res.cloudinary.com/lapkinthegod/image/upload/v1632988451/Ellipse_72_hwxejr.png",
  },
  {
    id:2,
    recipient: "Invoicing",
    status: "enable",
    apiKey: "API_KEY_1",
    avatar: "	https://res.cloudinary.com/lapkinthegod/image/upload/v1632988456/Ellipse_73_zanfs3.png",
  },
  {
    id:3,
    recipient: "Accountant",
    status: "disable",
    apiKey: "API_KEY_2",
    avatar: "https://res.cloudinary.com/lapkinthegod/image/upload/v1632988460/Ellipse_73_1_hhfpzj.png",
  },
  {
    id:4,
    recipient: "Legal",
    status: "pending",
    apiKey: "API_KEY_4",
    avatar: "https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/logos/slack.png",
  },
  {
    id:5,
    recipient: "Local/Regional Legal",
    status: "enable",
    apiKey: "API_KEY_1",
    avatar: "	https://demos.themeselection.com/sneat-mui-react-nextjs-admin-template/demo-1/images/logos/asana.png",
  }
];

export {columns, users, statusOptions};
