import React, { Component, useEffect, useState } from "react";
import CollapseButtons from "./button";
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionInfo from "./buttonInfo";
import "bootstrap/js/src/collapse.js";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    handleAccordion();
  });

  const handleAccordion = () => {

    const getButton1 = document.getElementById("a-btn1");
    const getButton2 = document.getElementById("a-btn2");
    const getButton3 = document.getElementById("a-btn3");

    getButton1.addEventListener('click', () => {
      console.log('hi')
    })

    getButton2.addEventListener('click', () => {
      console.log('hi')
    })

    getButton3.addEventListener('click', () => {
      console.log('hi')
    })
  };

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
              <a href="https://www.mynavyexchange.com/nex/sitemap">
                <p>Site Map</p>
              </a>
              <a href="https://www.mynavyexchange.com/nex/privacy">
                <p>Privacy Policy</p>
              </a>
              <a href="https://www.mynavyexchange.com/customerservice/contactUs.jsp">
                <p>Contact Us</p>
              </a>
              <a href="https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx">
                <p>508 Compliance</p>
              </a>
              <a href="https://www.foiaonline.gov/foiaonline/action/public/request">
                <p>FOIA</p>
              </a>
              <a href="https://www.secnav.navy.mil/donhr/Site/Pages/No-Fear-Act.aspx#">
                <p>No FearAct</p>
              </a>
            </div>
          </div>
          <div className="col3 col">
            <div className="col4 md-col">
              <p>
                <strong>Our Partners</strong>
              </p>
              <a href="https://www.navy.com/">
                <p>Navy.com</p>
              </a>
              <a href="https://www.navy.mil/">
                <p>Navy.mil</p>
              </a>
              <a href="https://www.navsup.navy.mil/public/navsup/home">
                <p>NAVSUP</p>
              </a>
              <a href="https://www.navy-lodge.com">
                <p>Navy Lodge</p>
              </a>
              <a href="https://www.mynavyexchange.com/nex/enterprise-info/our-seven-business-lines/ngis">
                <p>Navy Gateway Inns & Suites</p>
              </a>
              <a href="https://www.myecp.com/CustomerAds/Page/Navy">
                <p>Military Star Card</p>
              </a>
              <a href="https://seals.networksolutions.com/siteseal_seek/steseal?v_shortname=NETSB&v_querytype=W&v_search=www.mynavyexchange.com&x=5&y=5">
                <p>Network Solutions</p>
              </a>
              <a href="https://www.usa.gov/">
                <p>USA.gov</p>
              </a>
            </div>
          </div>
          <div className="col3 col">
            <div className="col4 md-col">
              <p>
                <strong>Customer Service</strong>
              </p>
              <a href="https://www.mynavyexchange.com/nex/work-for-us">
                <p>Work For Us</p>
              </a>
              <a href="https://www.mynavyexchange.com/nex/doing-business-with-us">
                <p>Doing Business With Us</p>
              </a>
              <a href="https://www.mynavyexchange.com/NEXtLevelRewards">
                <p>NEXt Level Rewards</p>
              </a>
              <a href="https://www.mynavyexchange.com/take-a-survey">
                <p>Take A Survey</p>
              </a>
              <a href="https://www.mynavyexchange.com/nex/faqs">
                <p>FAQ</p>
              </a>
              <a href="https://www.mynavyexchange.com/nex/enterprise-info">
                <p>NEXCOM Enterprise Information</p>
              </a>
            </div>
          </div>

          {/* This needs to be active upon window resize */}
          <div className="accordion accordion-primay md-none">
            {/* Legal Button */}
            <button
              id="a-btn1"
              aria-expanded={isActive}
              className="accordion btn l-btn a-btn"
              data-toggle="collapse"
              data-target="#collapse-legal"
              type="button"
              onClick={() => {           
                  // console.log('hi')                
              }}
            >
              <span className="btnText btn-accordion-icon">Legal</span>
            </button>

            {/* Legal List Collapse */}
            <div id="collapse-legal" className="accordion-content collapse">
              <div className="links">
                <p className="n-font">
                  <a href="https://www.mynavyexchange.com/nex/sitemap">
                    Site Map
                  </a>
                </p>
                <p className="n-font">
                  <a href="https://www.mynavyexchange.com/nex/privacy">
                    Privacy Policy
                  </a>
                </p>
                <p className="n-font">
                  <a href="https://www.mynavyexchange.com/customerservice/contactUs.jsp">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx">
                    508 Compliance
                  </a>
                </p>
                <p>
                  <a href="https://www.foiaonline.gov/foiaonline/action/public/request">
                    FOIA
                  </a>
                </p>
                <p>
                  <a href="https://www.secnav.navy.mil/donhr/Site/Pages/No-Fear-Act.aspx#">
                    No Fear Act
                  </a>
                </p>
              </div>
            </div>

            {/* Our Partners Button */}
            <button 
              id="a-btn2"
              name="a-btn"
              aria-expanded="false"
              className="accordion btn l-btn a-btn"
              data-toggle="collapse"
              data-target="#collapse-OurPartners"
              type="button"
              onClick={() => {           
                // console.log('hi')                
            }}
            >
              <span>Our Partners</span>
            </button>

            {/* Our Partners List Collapse */}
            <div id="collapse-OurPartners">
              <div className="links"></div>
            </div>

            {/* Customer Service Button */}
            <button
              id="a-btn3"
              name="a-btn"
              aria-expanded="false"
              className="accordion btn l-btn a-btn"
              data-toggle="collapse"
              data-target="#collapse-CustomerService"
              type="button"
              onClick={() => {           
                // console.log('hi')                
            }}
            >
              <span>Customer Service</span>
            </button>

            {/* Customer Service List Collapse */}
            <div id="collapse-CustomerService">
              <div className="links"></div>
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
