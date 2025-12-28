import React from "react";
import { FaMap } from "react-icons/fa";

const ToursCard = ({ tour }) => {
  console.log(tour);
  return (
    <article className="max-w-full max-h-full ">
      <div className="max-w-full relative">
        <img src={tour.image} className="" alt="" />
        <p className="absolute bottom-0 right-0 px-2 py-1 capitalize bg-primary-light-4 text-grey-dark-2">
          {tour.date}
        </p>
      </div>
      <div className="bg-primary-light-6/40 p-5 md:space-y-3 space-y-1">
        <div>
          <h4 className="font-bold tracking-[3px]">{tour.title}</h4>
        </div>
        <p className="text-grey-light-5 line-clamp-4">{tour.description}</p>
        <div className="flex justify-between text-primary-light-1 capitalize">
          <p className="flex items-center gap-2">
            <span>
              <FaMap />
            </span>{" "}
            <span>{tour.location}</span>
          </p>
          <p>{tour.duration}</p>
          <p>{tour.price}</p>
        </div>
      </div>
    </article>
  );
};

export default ToursCard;
