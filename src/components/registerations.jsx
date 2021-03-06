import React, { useState, useEffect } from "react";
import NotFound from "./common/notFound";
import Table from "./common/table";

const popupItems = [
  {
    iconName: "create-outline",
    label: "Edit",
    hoverBgColor: "orange-100",
    hoverTextColor: "orange-500",
  },
  {
    iconName: "trash-outline",
    label: "Delete",
    hoverBgColor: "red-100",
    hoverTextColor: "red-500",
  },
  {
    iconName: "document-text-outline",
    label: "View PDF",
    hoverBgColor: "green-100",
    hoverTextColor: "green-500",
  },
  {
    iconName: "trending-up-outline",
    label: "View More",
    hoverBgColor: "ingido-100",
    hoverTextColor: "indigo-500",
  },
];

const tableHeaders = [
  "No",
  "Name",
  "NRC",
  "Visiting Date",
  "Phone",
  "Status",
  "",
];

const Registerations = ({ values }) => {
  const [data, setData] = useState(values);

  useEffect(() => {
    setData(values);
  }, [values]);

  if (data.length === 0)
    return <NotFound subTitle="There are no registerations til now." />;

  return (
    <div className="container mx-auto px-5 sm:px-10 pb-5">
      <Table
        description="Patient Registerations"
        tableHeaders={tableHeaders}
        items={data}
        popupItems={popupItems}
      />
    </div>
  );
};

export default Registerations;
