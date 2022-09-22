import React from "react";
import logo from "../images/Logo.svg";
import * as svg from "../images/svg";

const Footer = () => {
  return (
    <footer className="p-8">
      <div className="gap-y-4 leading-loose md:flex md:flex-wrap md:justify-between">
        <div className="text-xs max-w-xs sm:max-w-sm sm:text-sm md:max-w-md md:text-md lg:max-w-lg">
          <img src={logo} alt="RoadTripPlanner" className="w-1/5 sm:w-2/5" />
          <p className="max-w-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            libero, rem exercitationem odit totam eos hic vitae repellat fuga.
          </p>

          <ul className=" flex ">
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
        <div className="text-xs max-w-xs sm:text-sm md:text-md sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h4>
            <strong>Company</strong>
          </h4>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="text-xs sm:text-sm md:text-md max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <h4>
            <strong>Business Resources</strong>
          </h4>
          <ul>
            <li>How it Works</li>
            <li>Proposal Trips programmes</li>
            <li>Invoice</li>
            <li>B2B Guide</li>
          </ul>
        </div>
        <div className="text-xs sm:text-sm md:text-md max-w-xs sm:max-w-sm md:max-w-md md:self-start lg:max-w-lg">
          <h4>
            <strong>Join our News Letter</strong>
          </h4>
          <form>
            <input
              type="text"
              name="email"
              className="bg-gray-100 align-middle h-4 text-xs md:h-8 lg:h-10 rounded-tl-lg rounded-bl-lg pl-2"
              placeholder="Email"
            />
            <button className="px-1 align-middle text-xs h-4 md:h-8 lg:h-10 bg-[#07232c] text-white rounded-tr-lg rounded-br-lg">
              Subscribe
            </button>
          </form>
          <p className="max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            molestias facere repudiandae error eveniet minima nam numquam nihil
            excepturi natus odit officia quis deleniti, tenetur exercitationem
            tempora magni ea nisi.
          </p>
        </div>
      </div>
      <div className="text-xs border-t-2 border-grey-50 flex justify-between mt-4">
        <p className="mt-1  text-green-pine">
          Copyright &copy;RoadTripPlanner. All Rights Reserved.
        </p>
        <p className="mt-1  text-green-pine">DesignBy: Yu-Se-Potard</p>
      </div>
    </footer>
  );
};

export default Footer;
