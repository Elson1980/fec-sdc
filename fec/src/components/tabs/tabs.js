import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import GetProductFeature from "./getProductFeature";
import ListShipping from "./getShipping";

const GetTabs = () => {

  return (
    <div className="tabs">
        <div className="productInfoTabs tabWidth">
            <div id="accordionTabs" className="accordion block md-flex flex-c">
                <Tabs>
                    <TabList>
                        <Tab>OVERVIEW</Tab>
                        <Tab>REVIEWS</Tab>
                        <Tab>SHIPPING & RETURNS</Tab>
                    </TabList>
                    <TabPanel>
                        <GetProductFeature></GetProductFeature>
                    </TabPanel>
                    <TabPanel className="tabPanel">
                        Blank
                    </TabPanel>
                    <TabPanel className="tabPanel"> 
                        <ListShipping></ListShipping>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    </div>
  );
};

export default GetTabs;