import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "RECIPIENT", uid: "recipient", sortable: true},
  {name: "DATE", uid: "date", sortable: true },
  {name: "STATUS", uid: "status", sortable: true},
  {name: "TOTAL AMOUNT", uid: "totalAmount", sortable: true}
];

const statusOptions = [
  {name: "paid", uid: "paid"},
  {name: "failed", uid: "failed"},
  { name: "pending", uid: "pending" },
   {name: "scheduled", uid: "scheduled"},
];

const users = [
  {
    id:1,
    recipient: "Tony Reichert",
    date: "2023-09-02",
    status: "paid",
    totalAmount: "$2970",
    avatar: "https://res.cloudinary.com/lapkinthegod/image/upload/v1632988451/Ellipse_72_hwxejr.png",
  },
  {
    id:2,
    recipient: "Zoey Lang",
    date: "2022-08-16",
    status: "failed",
    totalAmount: "$425",
    avatar: "	https://res.cloudinary.com/lapkinthegod/image/upload/v1632988456/Ellipse_73_zanfs3.png",
  },
  {
    id:3,
    recipient: "Jane Fisher",
    date: "2023-05-19",
    status: "paid",
    totalAmount: "$220",
    avatar: "https://res.cloudinary.com/lapkinthegod/image/upload/v1632988460/Ellipse_73_1_hhfpzj.png",
  },
  {
    id:4,
    recipient: "William Howard",
    date: "2023-11-15",
    status: "pending",
    totalAmount: "$310",
    avatar: "https://res.cloudinary.com/lapkinthegod/image/upload/v1632988456/Ellipse_73_zanfs3.png",
  },
  {
    id:5,
    recipient: "Kristen Copper",
    date: "2023-03-24",
    status: "paid",
    totalAmount: "$650",
    avatar: "https://res.cloudinary.com/lapkinthegod/image/upload/v1632988460/Ellipse_73_1_hhfpzj.png",
  },
  {
    id:6,
    recipient: "Brian Kim",
    date: "2023-12-08",
    totalAmount: "$109",
    avatar: "https://res.cloudinary.com/lapkinthegod/image/upload/v1632988451/Ellipse_72_hwxejr.png",
    status: "paid",
  },
  {
    id:7,
    recipient: "Michael Hunt",
    date: "2023-10-06",
    status: "scheduled",
    totalAmount: "$9800",
    avatar: "https://res.cloudinary.com/lapkinthegod/image/upload/v1632988460/Ellipse_73_1_hhfpzj.png",
  }
];

export {columns, users, statusOptions};
