import React, { useState } from "react";
import "./sidebarStyle.css";

const SidebarElement = ({ listHeader, listItems }) => {
  const [Expander, setExpander] = useState("fa fa-angle-down");

  return (
    <>
      <li className='mb-1'>
        <button
          className='btn btn-toggle align-items-center rounded'
          data-bs-toggle='collapse'
          data-bs-target='#home-collapse'
          aria-expanded='true'>
          {listHeader} <i className={Expander}></i>
        </button>
        <div className='collapse show myCollapsMenu' id='home-collapse'>
          <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
            {listItems.map((listItem, index) => {
              return (
                <li className='listItems' key={index}>
                  <a href='google.com' className='link-dark rounded'>
                    {listItem}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    </>
  );
};

export default SidebarElement;
