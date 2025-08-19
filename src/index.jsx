import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/sidebar";
import TextCard from "./components/TextCard";
import { BsStars } from "react-icons/bs";
import Icons from "./components/icons";
import TextIcons from "./components/TextIcons";
("./components/Header");

function App() {
  return (
    <>
      <Sidebar />

      <div className="bg-white flex flex-col gap-10 ">
        <div>
          <Header />
        </div>
        <div className="flex md:flex-row sm:flex-col xs: gap-30 sm:gap-30 xs: flex-col justify-around">
          <div className="flex flex-col  flex-wrap  gap-30">
            <TextCard
              index={1}
              Title="Upload a Service Image"
              Text={
                <div>
                  <li>Add a clear photo of your service this could be a </li>
                  flyer, business card, work photo, or tools in use.
                </div>
              }
            />
            <TextCard
              index={2}
              Title="Provide a Brief Overview "
              Text={
                <div>
                  <li>Add a short note explaining what you service</li>
                  includes, offers, or entails
                  <li>This helps us better understand your service</li>
                </div>
              }
            />
          </div>
          <div className="flex flex-col flex-wrap gap-30 sm: ">
            <TextCard
              index={3}
              Title="AI Creates Your Service Description "
              Text={
                <div>
                  <li>
                    Our AI has automatically generate a service description
                  </li>
                  based on your input
                </div>
              }
            />

            <TextCard
              index={4}
              Title=" Boost with Lead Genius"
              Text={
                <div>
                  <li>Promote your service using smart targeting to reach</li>
                  <span>the right people or customize your own audience</span>
                </div>
              }
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center bg-[#11A38A] rounded-lg px-20 py-3 mt-[80px]  items-center">
          <TextIcons Header="Get Leads" Image={<BsStars />} />
        </div>
      </div>
    </>
  );
}

export default App;
