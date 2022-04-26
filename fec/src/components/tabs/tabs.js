import React from 'react';
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import styles from "./styles/reactTabs.module.css"
import GetProductFeature from "./getProductFeature";
import ListShipping from "./getShipping";
import Reviews from "../../reviews.js";

const GetTabs = () => {

  return (
    <div className={styles.tabs}>
        <div className={styles.productInfoTabs}>
            <div>
                <Tabs>
                    <TabList  className={styles.ulTabs}>
                        <Tab className={styles.reacttab}>OVERVIEW</Tab>
                        <Tab className={styles.reacttab}>REVIEWS</Tab>
                        <Tab className={styles.reacttab}>SHIPPING & RETURNS</Tab>
                    </TabList>
                    <TabPanel>
                        <GetProductFeature></GetProductFeature>
                    </TabPanel>
                    <TabPanel>
                    <Reviews/>
                    </TabPanel>
                    <TabPanel> 
                        <ListShipping></ListShipping>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    </div>
  );
};

export default GetTabs;