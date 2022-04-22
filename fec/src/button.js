import React, { useState, Fragment } from "react";
import AccordionInfo from "./buttonInfo";


const CollapseButtons = () => {
    
  const [isActive, setIsActive] = useState(false);

  return (
     
      <div id="accordionTabs" className="accordion accordion-p md-none">
      {/* {!isActive && <div className="accordion accordion-p md-none"> */}
    {AccordionInfo.map(({ divId, header, dataTarget }) => (
      <>
        <button
          key={header}
          aria-expanded={isActive}
          className="btn l-btn b-btn accordion-btn collapse"
          data-target={dataTarget}
          data-toggle="collapse"
          type="button"
        //   onClick={() => setIsActive(!isActive)}
        >
          <span className="btnText">{header}</span>
          <span className="btn-accordion-icon">
            <i className="fas fa"></i>
          </span>
        </button>
        <div className="accordion-c collapse">
          <div className="links">
            {AccordionInfo.map(({ link, name }) => (
              <p className="n-font">
                <a href={link}>{name}</a>
              </p>
            ))}
          </div>
        </div>
      </>
    ))}

    </div>
);
};



export default CollapseButtons;
