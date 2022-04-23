import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {

  const [legal, setLegal] = useState([]);
  const [partners, setPartners] = useState([]);
  const [service, setService] = useState([]);
  
  const handleAccordion = () => {
    document.querySelectorAll(".accordion-btn").forEach((item) => {
      item.addEventListener("click", (event) => {
        if (!item.classList.contains("open")) {
          item.nextElementSibling.classList = "accordion-collapse collapsing";
          setTimeout(() => {
            item.nextElementSibling.classList = "accordion-collapse open";
          }, 300);
        } else {
          item.nextElementSibling.classList = "accordion-collapse collapsing";
          setTimeout(() => {
            item.nextElementSibling.classList = "accordion-collapse collapse";
          }, 300);
        }
        item.classList.toggle("open");
      });
    });
  };
  
  const getLegal = async () => {
    try {
      const res = await fetch("http://localhost:3001/legal");
      const jsonLegal = await res.json();
      setLegal(jsonLegal);
    } catch (err) {
      console.log(err.message);
    }
  };
  
  const getPartners = async () => {
    try {
      const res = await fetch("http://localhost:3001/partner");
      const jsonPartners = await res.json();
      setPartners(jsonPartners);
    } catch (err) {
      console.log(err.message);
    }
  }
  
  const getService = async () => {
    try {
      const res = await fetch("http://localhost:3001/service");
      const jsonService = await res.json();
      setService(jsonService);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    handleAccordion();
    getLegal();
    getPartners();
    getService();    
  }, []);
  
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <div className="col">
            <div className="footerTop">
              <div className="footerTopImg">
                <a href="https://www.mynavyexchange.com/account/digitalflyer">
                  <img src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-WEEKLYAD.svg"></img>
                </a>
              </div>
              <div className="footerTopImg">
                <a href="https://www.mynavyexchange.com/giftcards/browse/giftcard.jsp">
                  <img
                    className="imgTop"
                    src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-GIFTCARDS.svg"
                  ></img>
                </a>
              </div>
              <div className="footerTopImg">
                <a href="https://www.mynavyexchange.com/storelocator/storesearch.jsp">
                  <img
                    className="imgTop"
                    src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-FINDSTORE.svg"
                  ></img>
                </a>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <img
                  className="blueLine"
                  src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-COLOR.svg"
                ></img>
                <div className="row2 col2">
                  <a href="https://www.mynavyexchange.com/nex/customer-service/store-policies">
                    <img
                      className="footerMidImg"
                      src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-2-SHIPPING.svg"
                    ></img>
                  </a>
                </div>
                <div className="row2 col2">
                  <a href="https://www.mynavyexchange.com/nex/customer-service/store-policies">
                    <img
                      className="footerMidImg"
                      src="	https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-2-TAXFREE.svg"
                    ></img>
                  </a>
                </div>
                <div className="row2 col2">
                  <a href="https://www.mynavyexchange.com/nex/customer-service/store-policies">
                    <img
                      className="footerMidImg"
                      src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-2-PRICEMATCH.svg"
                    ></img>
                  </a>
                </div>
                <div className="row2 col2">
                  <img
                    className="footerMidImg"
                    src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-2-MWR.svg"
                  ></img>
                </div>

                <img
                  className="blueLine"
                  src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-COLOR.svg"
                ></img>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row md-row">
          <div className="col3 col">
            <div className="col4 md-col">
              <p>
                <strong>Legal</strong>
              </p>

              {legal.map((e) => (
                <p key={e.id}>
                  <a href={e.url}>
                    {e.name}
                  </a>
                </p>
              ))}

            </div>
          </div>
          <div className="col3 col">
            <div className="col4 md-col">
              <p>
                <strong>Our Partners</strong>
              </p>

              {partners.map((e) => (
                <p key={e.id}>
                  <a href={e.url}>
                    {e.name}
                  </a>
                </p>
              ))}

            </div>
          </div>
          <div className="col3 col">
            <div className="col4 md-col">
              <p>
                <strong>Customer Service</strong>
              </p>

              {service.map((e) => (
                <p key={e.id}>
                  <a href={e.url}>
                    {e.name}
                  </a>
                </p>
              ))}

            </div>
          </div>

          {/* This needs to be active upon window resize */}
          <div
            id="accordionTabs"
            className="accordion accordion-primay md-none"
          >
            {/* Legal Button */}
            <button
              className="accordion-btn"
              target="#collapse-legal"
              type="button"
              // onClick={() => {
              //   console.log("hi");
              // }}
            >
              Legal
            </button>

            {/* Legal List Collapse */}
            <div id="collapse-legal" className="accordion-collapse collapse">
              <div className="links accordion-content">
                {/* <p className="n-font"> */}

                {legal.map((e) => (
                <p key={e.id} className="n-font">
                  <a href={e.url}>
                    {e.name}
                  </a>
                </p>
              ))}                
              </div>
            </div>

            {/* Our Partners Button */}
            <button
              className="accordion-btn"
              target="#collapse-OurPartners"
              type="button"
              onClick={() => {
                // console.log("hi");
              }}
            >
              Our Partners
            </button>

            {/* Our Partners List Collapse */}
            <div
              id="collapse-OurPartners"
              className="accordion-collapse collapse"
            >
              <div className="links accordion-content">
              {partners.map((e) => (
                <p key={e.id}>
                  <a href={e.url}>
                    {e.name}
                  </a>
                </p>
              ))}
              </div>
            </div>

            {/* Customer Service Button */}
            <button
              className="accordion-btn"
              target="#collapse-CustomerService"
              type="button"
              onClick={() => {
                console.log("hi");
              }}
            >
              Customer Service
            </button>

            {/* Customer Service List Collapse */}
            <div
              id="collapse-CustomerService"
              className="accordion-collapse collapse"
            >
              <div className="links accordion-content">
              {service.map((e) => (
                <p key={e.id}>
                  <a href={e.url}>
                    {e.name}
                  </a>
                </p>
              ))}
              </div>
            </div>
          </div>

          <div className="row imgB1 imgB2">
            <div className="img-bt md-ibc1 md-ibc2 md-ibc3 justify-center flex">
              <img
                className="imgBottomStyle ims"
                src="https://www.mynavyexchange.com/assets/Global/Footer/TakingCareofOurOwn.svg"
              ></img>
            </div>
            <div className="socialMediaLinks md-sm1 md-sm2 align justify-around flex">
              <a
                className="social"
                href="https://www.facebook.com/NavyExchange"
              >
                <img
                  className="social"
                  src="https://www.mynavyexchange.com/assets/Global/Footer/Social-Facebook.png"
                ></img>
              </a>
              <a
                className="social"
                href="https://www.pinterest.comnavyexchange"
              >
                <img
                  className="social"
                  src="https://www.mynavyexchange.com/assets/Global/Footer/Social-Pinterest.png"
                ></img>
              </a>
              <a className="social" href="https://twitter.com/navyexchange">
                <img
                  className="social"
                  src="	https://www.mynavyexchange.com/assets/Global/Footer/Social-Twitter.png"
                ></img>
              </a>
              <a
                className="social social1 align-text md-social1"
                href="https://instagram.com/navyexchange"
              >
                <img
                  className="social"
                  src="https://www.mynavyexchange.com/assets/Global/Footer/Social-Instagram.png"
                ></img>
              </a>
            </div>
            <div className="col-bc md-bc1 md-bc2 md-bc4 align-text">
              <strong>
                <span className="tinyFont align-text">
                  ©2021 Navy Exchange Service Command all rights reserved. Navy
                  Exchange Service Command, 3280 Virginia Beach Blvd, VA
                  23452-5724. This is an Official U.S. Navy Web Site. NEXCOM
                  claims ownership in its trademarks regardless of the format in
                  which they appear on this website and related pages or links.
                </span>
              </strong>
            </div>
            <div className="col-crisis flex justify-center mt-crisis md-crisis1 md-crisis2 md-crisis3 align">
              <a href="https://www.veteranscrisisline.net">
                <img
                  className="crisis"
                  src="https://www.mynavyexchange.com/assets/Global/Footer/VeteransCrisisLineLogo.png"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
