import React from "react";
import logo from "../images/Logo.svg";
import * as svg from "../images/svg";

const Footer = () => {
  return (
    <footer className="p-8">
      <div className="flex flex-col pb-2 justify-between md:flex-row flex-wrap content-end">
        <div className="flex flex-col justify-between px-2 pb-2  md:basis-1/3 lg:basis-1/5">
          <img
            src={logo}
            alt="RoadTripPlanner"
            className="w-10 sm:w-16 md:w-24 lg:w-28"
          />
          <p className="text-xs sm:text-xs md:text-sm lg:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            libero, rem exercitationem odit totam eos hic vitae repellat fuga.
          </p>
          <ul className="flex flex-row ">
            <li className="w-2 sm:w-3 md:w-5 mx-1">{svg.LinkedInSvg()}</li>
            <li className="w-2 sm:w-3 md:w-5 mx-1">{svg.TwitterSvg()}</li>
            <li className="w-2 sm:w-3 md:w-5 mx-1">{svg.SlackSvg()}</li>
            <li className="w-2 sm:w-3 md:w-5 mx-1">
              <a href="https://github.com/poollooo/roadtrip-planner-front">
                {svg.GithubSvg()}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:basis-1/3 pl-0 lg:basis-1/5  xl:pl-17 ">
          <h4>
            <strong className="text-xs sm:text-xs md:text-sm lg:text-base">
              Company
            </strong>
          </h4>
          <ul className="leading-1 text-xs whitespace-nowrap sm:text-xs md:text-sm lg:text-base">
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className=" md:basis-1/3 lg:basis-1/5">
          <h4>
            <strong className="text-xs sm:text-xs md:text-sm lg:text-base">
              Business Resources
            </strong>
          </h4>
          <ul className="text-xs leading-1 sm:text-xs  md:text-sm  lg:text-base">
            <li>How it Works</li>
            <li>Proposal Trips programmes</li>
            <li>Invoice</li>
            <li>B2B Guide</li>
          </ul>
        </div>
        <div className="w-min:20  lg:basis-2/5">
          <h4 className="leading-8 sm:text-xs md:text-sm lg:text-base">
            <strong>Join our News Letter</strong>
          </h4>
          <form>
            <input
              type="text"
              name="email"
              className="bg-gray-100 align-middle h-4 text-xs md:h-8 lg:h-10 "
              placeholder="Email"
            />
            <button className="px-1 align-middle text-xs h-4 md:h-8 lg:h-10 bg-[#07232c] text-white">
              Subscribe
            </button>
          </form>
          <p className="mt-1 text-xs sm:text-xs md:text-sm lg:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            molestias facere repudiandae error eveniet minima nam numquam nihil
            excepturi natus odit officia quis deleniti, tenetur exercitationem
            tempora magni ea nisi.
          </p>
        </div>
      </div>
      <div className="border-t-2 border-grey flex justify-between mt-4">
        <p className="mt-1 text-xs md:text-sm text-green-pine">
          Copyright &copy;RoadTripPlanner. All Rights Reserved.
        </p>
        <p className="mt-1 text-xs md:text-sm text-green-pine">
          DesignBy: Yu-Se-Potard
        </p>
      </div>
    </footer>
  );
};

export default Footer;
