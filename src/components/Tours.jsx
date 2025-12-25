import React from "react";
import tour1 from "../assets/tour-1.jpeg";
import tour2 from "../assets/tour-2.jpeg";
import tour3 from "../assets/tour-3.jpeg";
import tour4 from "../assets/tour-4.jpeg";
import tour5 from "../assets/tour-5.jpeg";
import tour6 from "../assets/tour-6.jpeg";
import { FaMap } from "react-icons/fa";

const Tours = () => {
  return (
    <div>
      <section className="mt-10" id="tours">
        <div className="text-center mb-10">
          <h2 className="uppercase text-4xl md:text-5xl font-bold">
            featured <span className="text-primary-dark-4">tours</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-20">
          <article className="max-w-full max-h-full ">
            <div className="max-w-full relative">
              <img src={tour1} className="" alt="" />
              <p className="absolute bottom-0 right-0 px-2 py-1 text-base capitalize bg-primary-light-4 text-grey-dark-2">
                august 26th, 2020
              </p>
            </div>
            <div className="bg-primary-light-6/40 p-5 space-y-3">
              <div>
                <h4 className="font-bold tracking-[3px]">Tibet Adventure</h4>
              </div>
              <p className="text-grey-light-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="flex justify-between text-primary-light-1 capitalize">
                <p className="flex items-center gap-2">
                  <span>
                    <FaMap />
                  </span>{" "}
                  <span>china</span>
                </p>
                <p>6 days</p>
                <p>from $2100</p>
              </div>
            </div>
          </article>

          <article className="tour-card">
            <div className="tour-img-container">
              <img src={tour2} className="tour-img" alt="" />
              <p className="tour-date">october 1th, 2020</p>
            </div>
            <div className="tour-info">
              <h4>best of java</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  indonesia
                </p>
                <p>11 days</p>
                <p>from $1400</p>
              </div>
            </div>
          </article>

          <article className="tour-card">
            <div className="tour-img-container">
              <img src={tour3} className="tour-img" alt="" />
              <p className="tour-date">september 15th, 2020</p>
            </div>
            <div className="tour-info">
              <h4>explore hong kong</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  hong kong
                </p>
                <p>8 days</p>
                <p>from $5000</p>
              </div>
            </div>
          </article>

          <article className="tour-card">
            <div className="tour-img-container">
              <img src={tour4} className="tour-img" alt="" />
              <p className="tour-date">december 5th, 2019</p>
            </div>
            <div className="tour-info">
              <h4>kenya highlights</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem fugit, qui corporis.
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  kenya
                </p>
                <p>20 days</p>
                <p>from $3300</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Tours;
