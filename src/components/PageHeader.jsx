import React from "react";
import Header from "../assets/header2.jpg";
import { Link } from "react-router-dom";

const PageHeader = ({pageTitle}) => {
  return (
    <div className="h-[50vh] text-white" style={{ backgroundImage: `url(${Header})`, objectFit: 'contain', backgroundRepeat: 'no-repeat' }}>
      <div className="flex items-center justify-between mx-auto px-6 py-12">
        <h2 className="font-bold text-[30px]">{pageTitle}</h2>
        <div className="text-sm breadcrumbs flex-end">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              {pageTitle}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
