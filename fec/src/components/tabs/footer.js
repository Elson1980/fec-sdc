import React, { Component, useEffect, useState } from "react";

import styles from "./styles/footer.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  
  const [legal, setLegal] = useState([]);
  const [partners, setPartners] = useState([]);
  const [service, setService] = useState([]);

  const handleAccordion = () => {
    document.querySelectorAll(".accordionbtn").forEach((item) => {
      item.addEventListener("click", (event) => {        
        if (!item.classList.contains("open")) {
          item.nextElementSibling.classList = "accordioncollapse collapsing";
          setTimeout(() => {
            item.nextElementSibling.classList = "accordioncollapse open";
          }, 300);
        } else {
          item.nextElementSibling.classList = "accordioncollapse collapsing";
          setTimeout(() => {
            item.nextElementSibling.classList = "accordioncollapse collapse";
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
  };

  const getService = async () => {
    try {
      const res = await fetch("http://localhost:3001/service");
      const jsonService = await res.json();
      setService(jsonService);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    // handleAccordion();
    getLegal();
    getPartners();
    getService();
  }, []);

  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.footerTop}>
              <div className={styles.footerTopImg}>
                <a href="https://www.mynavyexchange.com/account/digitalflyer">
                  <img src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-WEEKLYAD.svg"></img>
                </a>
              </div>
              <div className={styles.footerTopImg}>
                <a href="https://www.mynavyexchange.com/giftcards/browse/giftcard.jsp">
                  <img
                    className={styles.imgTop}
                    src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-GIFTCARDS.svg"
                  ></img>
                </a>
              </div>
              <div className={styles.footerTopImg}>
                <a href="https://www.mynavyexchange.com/storelocator/storesearch.jsp">
                  <img
                    className={styles.imgTop}
                    src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-FINDSTORE.svg"
                  ></img>
                </a>
              </div>
            </div>

            <img
              className={styles.blueLine}
              src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-COLOR.svg"
            ></img>

            {/* <div className={styles.col}> */}
            <div className={styles.footerTop}>
              <div className={styles.col2}>
                <a href="https://www.mynavyexchange.com/nex/customer-service/store-policies">
                  <img
                    className={styles.footerMidImg}
                    src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-2-SHIPPING.svg"
                  ></img>
                </a>
              </div>
              <div className={styles.col2}>
                <a href="https://www.mynavyexchange.com/nex/customer-service/store-policies">
                  <img
                    className={styles.footerMidImg}
                    src="	https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-2-TAXFREE.svg"
                  ></img>
                </a>
              </div>
              <div className={styles.col2}>
                <a href="https://www.mynavyexchange.com/nex/customer-service/store-policies">
                  <img
                    className={styles.footerMidImg}
                    src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-2-PRICEMATCH.svg"
                  ></img>
                </a>
              </div>
              <div className={styles.col2}>
                <img
                  className={styles.footerMidImg}
                  src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-2-MWR.svg"
                ></img>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        <img
          className={styles.blueLine}
          src="https://www.mynavyexchange.com/assets/Global/Footer/FOOTER-LINE-COLOR.svg"
        ></img>

        <div className={styles.row + " " + styles.mdrow}>
          <div className={styles.col3 + " " + styles.mdrowlinks}>
            <div>
              <p>
                <strong>Legal</strong>
              </p>

              {legal.map((e) => (
                <p key={e.id}>
                  <a href={e.url}>{e.name}</a>
                </p>
              ))}
            </div>
          </div>
          <div className={styles.col3 + " " + styles.mdrowlinks}>
            <div>
              <p>
                <strong>Our Partners</strong>
              </p>

              {partners.map((e) => (
                <p key={e.id}>
                  <a href={e.url}>{e.name}</a>
                </p>
              ))}
            </div>
          </div>
          <div className={styles.col3 + " " + styles.mdrowlinks}>
            <div>
              <p>
                <strong>Customer Service</strong>
              </p>

              {service.map((e) => (
                <p key={e.id}>
                  <a href={e.url}>{e.name}</a>
                </p>
              ))}
            </div>
          </div>

          {/* This needs to be active upon window resize */}
          <div
            id="accordionTabs"
            className={
              styles.accordion + " " + styles.mdnone + " " + styles.btn
            }
          >
            {/* Legal Button */}
            <button
              className={`accordionbtn ${styles.accordionbtn}`}
              target="#collapse-legal"
              type="button"
              onClick={(e) => {
                handleAccordion();                
              }}
            >
              Legal
            </button>

            {/* Legal List Collapse */}
            <div
              id="collapse-legal"
              className={styles.accordioncollapse + " " + "collapse"}
            >
              <div className={styles.links}>
                {legal.map((e) => (
                  <p key={e.id} className={styles.nfont}>
                    <a href={e.url}>{e.name}</a>
                  </p>
                ))}
              </div>
            </div>

            {/* Our Partners Button */}
            <button
              className={`accordionbtn ${styles.accordionbtn}`}
              target="#collapse-OurPartners"
              type="button"
              onClick={(e) => {
                handleAccordion();                
              }}
            >
              Our Partners
            </button>

            {/* Our Partners List Collapse */}
            <div
              id="collapse-OurPartners"
              className={styles.accordioncollapse + " " + "collapse"}
            >
              <div className={styles.links}>
                {partners.map((e) => (
                  <p key={e.id} className={styles.nfont}>
                    <a href={e.url}>{e.name}</a>
                  </p>
                ))}
              </div>
            </div>

            {/* Customer Service Button */}
            <button
              className={`accordionbtn ${styles.accordionbtn}`}
              target="#collapse-CustomerService"
              type="button"
              onClick={(e) => {
                handleAccordion();                
              }}
            >
              Customer Service
            </button>

            {/* Customer Service List Collapse */}
            <div
              id="collapse-CustomerService"
              className={styles.accordioncollapse + " " + "collapse"}
            >
              <div className={styles.links}>
                {service.map((e) => (
                  <p key={e.id} className={styles.nfont}>
                    <a href={e.url}>{e.name}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div
            className={
              styles.row +
              " " +
              styles.imgB1 +
              " " +
              styles.imgB2 +
              " " +
              styles.justifycenter +
              " " +
              styles.col
            }
          >
            <div
              className={
                styles.imgbt +
                " " +
                styles.mdibc1 +
                " " +
                styles.mdibc2 +
                " " +
                styles.justifycenter +
                " " +
                styles.flex
              }
            >
              <img
                className={styles.imgBottomStyle + " " + styles.ims}
                src="https://www.mynavyexchange.com/assets/Global/Footer/TakingCareofOurOwn.svg"
              ></img>
            </div>
            <div className={styles.row2 + " " + styles.justifycenter}>
              <div
                className={
                  styles.socialMediaLinks +
                  " " +
                  styles.mdsm1 +
                  " " +
                  styles.mdsm2 +
                  " " +
                  styles.align +
                  " " +
                  styles.justifyaround +
                  " " +
                  styles.flex +
                  " " +
                  styles.col + 
                  " " +
                  styles.center
                }
              >
                <a
                  className={styles.social}
                  href="https://www.facebook.com/NavyExchange"
                >
                  <img
                    className={styles.social}
                    src="https://www.mynavyexchange.com/assets/Global/Footer/Social-Facebook.png"
                  ></img>
                </a>
                <a
                  className={styles.social}
                  href="https://www.pinterest.comnavyexchange"
                >
                  <img
                    className={styles.social}
                    src="https://www.mynavyexchange.com/assets/Global/Footer/Social-Pinterest.png"
                  ></img>
                </a>
                <a
                  className={styles.social}
                  href="https://twitter.com/navyexchange"
                >
                  <img
                    className={styles.social}
                    src="	https://www.mynavyexchange.com/assets/Global/Footer/Social-Twitter.png"
                  ></img>
                </a>
                <a
                  className={
                    styles.social +
                    " " +
                    styles.social1 +
                    " " +
                    styles.mdsocial1 +
                    " " +
                    styles.col
                  }
                  href="https://instagram.com/navyexchange"
                >
                  <img
                    className={styles.social}
                    src="https://www.mynavyexchange.com/assets/Global/Footer/Social-Instagram.png"
                  ></img>
                </a>
              </div>
              <div
                className={
                  styles.colbc +
                  " " +
                  styles.mdbc1 +
                  " " +
                  styles.mdbc2 +
                  "  " +
                  styles.mdbc4 +
                  " " +
                  styles.aligntext +
                  " " +
                  styles.col +
                  " " +
                  styles.center
                }
              >
                <strong>
                  <span className={styles.tinyFont + " " + styles.aligntext}>
                    ©2021 Navy Exchange Service Command all rights reserved.
                    Navy Exchange Service Command, 3280 Virginia Beach Blvd, VA
                    23452-5724. This is an Official U.S. Navy Web Site. NEXCOM
                    claims ownership in its trademarks regardless of the format
                    in which they appear on this website and related pages or
                    links.
                  </span>
                </strong>
              </div>
              <div
                className={
                  styles.colcrisis +
                  " " +
                  styles.flex +
                  " " +
                  styles.justifycenter +
                  " " +
                  styles.mtcrisis +
                  " " +
                  styles.mdcrisis1 +
                  " " +
                  styles.mdcrisis2 +
                  " " +
                  styles.mdcrisis3 +
                  " " +
                  styles.align +
                  " " +
                  styles.col +
                  " " +
                  styles.center
                }
              >
                <a href="https://www.veteranscrisisline.net">
                  <img
                    className={styles.crisis}
                    src="https://www.mynavyexchange.com/assets/Global/Footer/VeteransCrisisLineLogo.png"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
