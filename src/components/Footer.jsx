import React from "react";
import logo from "../images/Logo.svg";
import * as svg from "../images/svg";

const Footer = () => {
  return (
    <footer className="p-8">
      <div className="flex pb-2 justify-center">
        <div className="flex flex-col justify-between basis-1/5 px-2 pb-2">
          <img src={logo} alt="RoadTripPlanner" className="w-28" />
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            libero, rem exercitationem odit totam eos hic vitae repellat fuga.
          </p>
          <ul className="flex flex-row ">
            <li className="w-5 mx-1">{svg.LinkedInSvg()}</li>
            <li className="w-5 mx-1">{svg.TwitterSvg()}</li>
            <li className="w-5 mx-1">{svg.SlackSvg()}</li>
            <li className="w-5 mx-1">
              <a href="https://github.com/poollooo/roadtrip-planner-front">
                {svg.GithubSvg()}
              </a>
            </li>
          </ul>
        </div>
        <div className="basis-1/5 pl-24">
          <h4>
            <strong>Company</strong>
          </h4>
          <ul className="leading-8">
            <li>About Three of us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="basis-1/5">
          <h4>
            <strong>Business Resources</strong>
          </h4>
          <ul className="leading-8">
            <li>How it Works</li>
            <li>Proposal Trips programmes</li>
            <li>Invoice</li>
            <li>B2B Guide</li>
          </ul>
        </div>
        <div className="basis-2/5">
          <h4>
            <strong>Join our News Letter</strong>
          </h4>
          <form>
            <input
              type="text"
              name="email"
              className="bg-gray-100 h-10 rounded-tl-lg rounded-bl-lg pl-4"
              placeholder="Email"
            />
            <button className="h-10 w-24 bg-green-night text-white rounded-tr-lg rounded-br-lg">
              Subscribe
            </button>
          </form>
          <p className="mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            molestias facere repudiandae error eveniet minima nam numquam nihil
            excepturi natus odit officia quis deleniti, tenetur exercitationem
            tempora magni ea nisi.
          </p>
        </div>
      </div>
      <div className="border-t-2 border-grey flex justify-between mt-4">
        <p className="mt-2 text-green-pine">
          Copyright &copy;RoadTripPlanner. All Rights Reserved.
        </p>
        <p className="mt-2 text-green-pine">DesignBy: Yu-Se-Potard</p>
      </div>
    </footer>
  );
};

export default Footer;
