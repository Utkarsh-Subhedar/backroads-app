import React from "react";
import toursData from "../ToursData";
import ToursCard from "./ToursCard";

const Tours = () => {
  return (
    <div>
      <section className="my-10" id="tours">
        <div className="text-center mb-10">
          <h2 className="uppercase text-4xl md:text-5xl font-bold">
            featured <span className="text-primary-dark-4">tours</span>
          </h2>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-5 lg:px-20 **:text-sm **:md:text-base">
          {toursData?.map((tour) => (
            <ToursCard tour={tour} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tours;
