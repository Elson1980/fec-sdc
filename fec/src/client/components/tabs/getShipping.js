import React from "react";
import styles from "./styles/tab.module.css";

const ListShipping = () => {
  return (
    <div id="shipping" className={styles.productTabs}>
      <div className={styles.productShippingInfo}>
        <p className={styles.productInfo}>
          <strong>
            myNavyExchange.com ships to all 50 United States, U.S. territories,
            and APO/FPO /DPO addresses.
          </strong>
          <br></br>
          We also ship OCONUS direct to select stores via DHL for faster
          delivery. For the latest update view the Ship to Store drop-down menu
          in the shipping section of the checkout process.
        </p>
        <p className={styles.productInfo + " " + styles.textColor}>
          Please note that orders must be placed prior to 3pm ET to be processed
          and shipped that day.
        </p>
        <p className={styles.productInfo}>
          <span className={styles.bFont}>Shipping Cost:</span>
          <br></br>
          <span>
            Shipping costs are a flat rate based on the shipping method
            selected.
          </span>
        </p>
        <table className={styles.shiptable + " " + styles.textColor}>
          <tbody>
            <tr className={styles.bgColor}>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgColor
                }
              >
                Shipping Method
              </td>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgColor
                }
              >
                Continental US
              </td>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgColor
                }
              >
                APO/FPO and US Territories
              </td>
            </tr>
            <tr>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                Standard
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                $4.95<br></br>
                <strong>FREE</strong> with Military Star Card or Purchase of
                $49.95 or more
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                $4.95<br></br>
                <strong>FREE</strong> with Military Star Card or Purchase of
                $49.95 or more
              </td>
            </tr>
            <tr>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                Priority
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                $12.95
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                N/A
              </td>
            </tr>
            <tr>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                Express
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                $17.95
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                N/A
              </td>
            </tr>
            <tr>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                Ship to Store
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                <strong>FREE</strong>
                <br></br> Select locations only
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                <strong>FREE</strong>
                <br></br> Select locations only
              </td>
            </tr>
          </tbody>
        </table>
        <p className={styles.productInfo}>
          <span>Delivery Estimates:</span>
          <br></br>
          <span>
            United States including Military Addresses & U.S. Territories*
          </span>
          <br></br>
          <span>
            The times listed are the number of business days it will take for
            merchandise to be shipped from our fulfillment facility and
            delivered to you.
          </span>
          <br></br>
          <span className={styles.tinySpan}>
            *Business days are Monday - Friday, excluding holidays
          </span>
        </p>
        <table className={styles.shiptable + " " + styles.textColor}>
          <tbody>
            <tr className={styles.bgColor}>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgColor
                }
              >
                Shipping Method
              </td>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgColor
                }
              >
                Continental US
              </td>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgColor
                }
              >
                APO/FPO and US Territories
              </td>
            </tr>
            <tr>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                Standard
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                5 - 7 Business Days
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                Up to 45 Business Days
              </td>
            </tr>
            <tr>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                Priority
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                3 - 5 Business Days
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                N/A
              </td>
            </tr>
            <tr>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                Express
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                1 - 2 Business Days
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                N/A
              </td>
            </tr>
            <tr>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                Ship to Store CONUS
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                3 - 5 Business<br></br> Days Select locations only
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                N/A
              </td>
            </tr>
            <tr>
              <td
                className={
                  styles.shipTableHeader +
                  " " +
                  styles.bFont +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                Ship to Store OCONUS
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                N/A
              </td>
              <td
                className={
                  styles.shipTableCell +
                  " " +
                  styles.aText +
                  " " +
                  styles.bgWhite
                }
              >
                7 - 10<br></br> Business Days Select Locations Only
              </td>
            </tr>
          </tbody>
        </table>
        <p className={styles.productInfo}>Order Online & Ship-To-Store</p>
        <p className={styles.productInfo}>
          <a>myNavyExchange.com</a> is happy to offer this service to its
          customers.
        </p>
        <p className={styles.shippingQuestions + " " + styles.textColor}>
          <strong>How does it work?</strong>
        </p>
        <ul className={styles.shippingQuestions + " " + styles.textColor}>
          <li>
            Place your order on{" "}
            <a
              href="http://www.myNavyExchange.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              www.myNavyExchange.com
            </a>{" "}
            as you normally would.
          </li>
          <li>
            During checkout (Shipping), select Ship to Store as your shipping
            option and select a store you would like to pick it up at.
          </li>
          <li>
            When you come to your NEX Customer Service center to pick up your
            order, present your DOD ID and your order confirmation email to the
            NEX associate.
          </li>
          <li>
            If you have listed a designated person to pick up your order, they
            must bring a DOD ID and the order confirmation email.
          </li>
        </ul>
        <p className={styles.shippingQuestions + " " + styles.textColor}>
          <strong>What if I'm not available to pick up my order?</strong>
        </p>
        <ul className={styles.shippingQuestions + " " + styles.textColor}>
          <li>
            That's OK! You can designate someone else to pick up your order
            during the checkout process.
          </li>
          <li>
            The designated person must bring 1) a DOD ID and 2) the order
            confirmation email with them to pick up the order.
          </li>
          <li>
            An alternate pick up person must be identified during the checkout
            process. Failure to do so will require the person placing the order
            to pick up the order.
          </li>
        </ul>
        <p className={styles.shippingQuestions + " " + styles.textColor}>
          <strong>What else should I know?</strong>
        </p>
        <ul className={styles.shippingQuestions + " " + styles.textColor}>
          <li>
            This service is only available for select products - if you do not
            see Ship-To-Store as an option during checkout, you have items in
            your cart that are not eligible.
          </li>
          <li>
            Ineligible items include (but are not limited to) HAZMAT items such
            as perfume and nail polish.
          </li>
          <li>
            Please reference your tracking information in the email you receive
            when your order has shipped. Once it has been delivered, your order
            is eligible for pickup from the designated location
          </li>
          <li>
            Ship-To-Store is only offered at select CONUS and OCONUS NEX
            locations.
          </li>
          <li>
            The Ship-To-Store shipping method is only available on the
            myNavyExchange.com full desktop site and is not available via the
            myNavyExchange.com mobile site.
          </li>
        </ul>
        <p className={styles.shippingQuestions + " " + styles.textColor}>
          <strong>Surcharges</strong>
        </p>
        <ul className={styles.shippingQuestions + " " + styles.textColor}>
          <li>
            A $45 surcharge is applied for items deemed by carrier as over
            weight or over sized
          </li>
          <li>
            Surcharges will be noted on the checkout or information page for
            each item.
          </li>
          <li>
            Surcharges will still apply during all sales, promotions, and
            special purchasing offers.
          </li>
        </ul>
        <p className={styles.shippingQuestions + " " + styles.textColor}>
          <strong>Other Shipping Notes</strong>
        </p>
        <ul className={styles.shippingQuestions + " " + styles.textColor}>
          <li>
            Items identified as HAZMAT by carrier (including fragrances) may
            only be shipped by ground and CANNOT be shipped to APO/FPO/DPO
            addresses.
          </li>
          <li>
            Items that are oversized, weigh over 70 pounds, or contain lithium
            batteries can only be shipped to the 50 United States and U.S.
            territories, NOT to APO/FPO/DPO addresses.
          </li>
        </ul>
        <p className={styles.shippingQuestions + " " + styles.textColor}>
          <strong>Shipping Method:</strong>
        </p>
        <ul className={styles.shippingQuestions + " " + styles.textColor}>
          <li>
            We currently use Federal Express, DHL, and the U.S. Postal Service
            as our shipping providers.
          </li>
          <li>
            The most appropriate delivery method will be used depending on the
            weight, shipping destination, and shipping method for your package.
          </li>
          <li>
            APO/FPO/DPO and U.S. territories orders are shipped via standard
            delivery only (USPS Priority)
          </li>
        </ul>
        <p className={styles.shippingQuestions + " " + styles.textColor}>
          <strong>Returns</strong>
        </p>
        <ul className={styles.shippingQuestions + " " + styles.textColor}>
          <li>Free returns to any NEX store - Fast and Easy!</li>
          <li>
            Mail it back to myNavyExchange.com – simply use the prepaid return
            label included in your order, place it on the box, and drop off at
            your local USPS. If there was an issue with your order, you will not
            be charged for the return shipping. If you simply changed your mind,
            a $7.95 restocking fee will be reduced from your refund.
          </li>
          <li>
            For OCONUS orders, please return items to your local NEX store.
          </li>
          <li>
            Please allow up to 14 days for your return to be processed. Refund
            to your credit card account may take up to 2 billing cycles.
          </li>
          <li>Gift Cards may neither be returned nor redeemed for cash.</li>
        </ul>
        <p className={styles.shippingQuestions + " " + styles.textColor}>
          <strong>Questions?</strong>
        </p>
        <p className={styles.shippingQuestions + " " + styles.textColor}>
          Your NEX Customer Service Representatives are available to help 24/7.
          If you have any questions about our shipping policies or need
          assistance with an order, please contact us by phone from the U.S. at
          1-877-810- 9030, from overseas at 001-877-432-1736 or by{" "}
          <a
            href="https://www.mynavyexchange.com/customerservice/contactUs.jsp"
            target="_blank"
            rel="noreferrer noopener"
          >
            e-mail
          </a>
        </p>
      </div>
    </div>
  );
};

export default ListShipping;
