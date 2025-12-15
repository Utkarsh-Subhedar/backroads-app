import React from "react";
import about from "../assets/about.jpeg";

const About = () => {
  return (
    <div className="">
      <section className="*:text-grey-dark-1 text-center space-y-5" id="about">
        <div className="my-10 md:my-16">
          <h2 className="uppercase text-4xl md:text-5xl font-bold">
            about <span className="text-primary-dark-4">us</span>
          </h2>
        </div>
        <div className="px-4 space-y-5 md:space-y-0 md:flex justify-around ">
          <div className="">
            <img src={about} className="max-w-[470px]" alt="awesome beach" />
          </div>
          <article className="text-grey-dark-4 text-xs md:text-base text-start space-y-3">
            <h3 className="text-grey-dark-1 capitalize text-xl md:text-3xl tracking-wider w-50 md:w-full font-bold">
              explore the difference
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <div className="my-6">
              <a
                href="#"
                className="tracking-[5px] font-normal uppercase text-white px-3 py-3 bg-primary-dark-4 hover:text-grey-dark-2 hover:bg-primary-light-1 mt-10"
              >
                read more
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
