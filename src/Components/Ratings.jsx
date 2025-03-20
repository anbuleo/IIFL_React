import React from "react";
import rating1 from "../assets/icons/rating1.png";
import rating2 from "../assets/icons/rating2.png";
import rating3 from "../assets/icons/rating3.png";

function Ratings() {
  let ratingCardData = [
    {
      icon: rating1,
      bold: "25+ Years",
      semiBold: "Trust & Service",
    },
    {
      icon: rating2,
      bold: "25 Lakhs+",
      semiBold: "Active Customers",
    },
    {
      icon: rating3,
      bold: "4.4+",
      semiBold: "Average App Rating",
    },
  ];

  return (
    <>
      <div className="ratings  layout_child h-96 md:h-fit flex items-center justify-center">
        <div className="flex flex-col h-full  justify-evenly md:h-fit md:flex-row w-full layout_child md:w-3/4 rounded-lg shadow-xl ">
          {ratingCardData.map((e, i) => {
            return (
              <>
                {" "}
                <div
                  key={i}
                  className=" flex  mx-auto justify-center  md:justify-evenly  gap-4 md:w-96 md:h-20 p-6  md:items-center"
                >
                  <div className="">
                    <img src={e.icon} alt="icons" />
                  </div>
                  <div className="">
                    <p className="text-3xl font-bold">{e.bold}</p>
                    <p className="text-xl md:text-sm">{e.semiBold}</p>
                  </div>
                </div>
                <div
                  className={`divider md:divider-horizontal ${
                    i === 2 ? "hidden" : ""
                  }`}
                ></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Ratings;
