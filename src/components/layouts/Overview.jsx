import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Flex from "../Flex";
import Image from "../Image";
import overviewImage from "../../assets/Vector (7).png";
import overviewImage1 from "../../assets/Vector (8).png";
import overviewImage2 from "../../assets/Vector (9).png";
import overviewImage3 from "../../assets/Vector (10).png";
import overviewImage4 from "../../assets/FAQ.png";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import badgeImage from "../../assets/Badge.png";
import { CiClock2 } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
const Overview = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={`text-orange-400 text-[24px]`}>
          <Tab>Overview</Tab>
          <Tab>Itinerary</Tab>
          <Tab>Inclusions</Tab>
          <Tab>Reviews</Tab>
          <Tab>FAQ</Tab>
          <Tab>Essential Info</Tab>
        </TabList>
        <TabPanel>
          <Flex className={`gap-8 px-4 mt-12 w-[600px]`}>
           <div><Image src={overviewImage3} className={`w-[160px]`}/> </div>
           <div>
            <Paragraph text="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex."/>
            <Paragraph text="Show More..." className={``}/>
          
           <Flex className={`mt-6 justify-between `}>
          
            <div>
                <Paragraph text="Duration"/>
                <Flex   className="items-center gap-2 py-3">
                <CiClock2 className="text-teal-400"/>
                    <Paragraph text="2 Days"/>
                </Flex >
                <Paragraph text="Group Size"/>
                <Flex className="items-center gap-2 py-3">
                <FaUsers className="text-teal-400"/>
                    <Paragraph text="8"/>
                </Flex>
            </div>
            <div>
                <Paragraph text="Activity"/>
                <Flex   className="items-center gap-2 py-3">
                <CiClock2 className="text-teal-400"/>
                    <Paragraph text="Walking"/>
                </Flex >
                <Paragraph text="Age"/>
                <Flex className="items-center gap-2 py-3">
                <FaUsers className="text-teal-400"/>
                    <Paragraph text="7+"/>
                </Flex>
            </div>
            <div>
                <Paragraph text="Physical "/>
                <Flex   className="items-center gap-2 py-3">
                <CiClock2 className="text-teal-400"/>
                    <Paragraph text="Strenuous"/>
                </Flex >
                <Paragraph text="Season"/>
                <Flex className="items-center gap-2 py-3">
                <FaUsers className="text-teal-400"/>
                    <Paragraph text="Apr-Sep"/>
                </Flex>
            </div>
          
            
           </Flex>
           </div>
          </Flex>
        </TabPanel>
        <TabPanel>
          <h1>hi</h1>
        </TabPanel>
        <TabPanel>
          <h1>hi</h1>
        </TabPanel>
        <TabPanel>
          <Flex>
            <div>
              <Image src={overviewImage} />{" "}
            </div>
          </Flex>
        </TabPanel>
        {/* faq start here */}
        <TabPanel>
          <Flex className={`gap-8 mt-12 px-4`}>
            <div className="mt-2">
              <Image src={overviewImage4} />
            </div>
            <div>
              <div className="collapse collapse-arrow bg-base-50">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="text-xl font-medium collapse-title">
               <Flex className={`gap-4`}>
                <Image src={badgeImage}/>
                <Heading as="h4" text="What type of clothing are suitable for this trek?"/>
               </Flex>
                </div>
                <div className="collapse-content">
                 <Paragraph text="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do." className={`w-[600px] py-4  px-3`}/>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-50">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="text-xl font-medium collapse-title">
               <Flex className={`gap-4`}>
                <Image src={badgeImage}/>
                <Heading as="h4" text="What type of clothing are suitable for this trek?"/>
               </Flex>
                </div>
                <div className="collapse-content">
                 <Paragraph text="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do." className={`w-[600px] py-4  px-3`}/>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-50">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="text-xl font-medium collapse-title">
               <Flex className={`gap-4`}>
                <Image src={badgeImage}/>
                <Heading as="h4" text="What type of clothing are suitable for this trek?"/>
               </Flex>
                </div>
                <div className="collapse-content">
                 <Paragraph text="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do." className={`w-[600px] py-4  px-3`}/>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-50">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="text-xl font-medium collapse-title">
               <Flex className={`gap-4`}>
                <Image src={badgeImage}/>
                <Heading as="h4" text="What type of clothing are suitable for this trek?"/>
               </Flex>
                </div>
                <div className="collapse-content">
                 <Paragraph text="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do." className={`w-[600px] py-4  px-3`}/>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-50">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="text-xl font-medium collapse-title">
               <Flex className={`gap-4`}>
                <Image src={badgeImage}/>
                <Heading as="h4" text="What type of clothing are suitable for this trek?"/>
               </Flex>
                </div>
                <div className="collapse-content">
                 <Paragraph text="Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do." className={`w-[600px] py-4  px-3`}/>
                </div>
              </div>
              </div>
             
            
          </Flex>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Overview;
