import React from "react";
import { Link } from "react-router-dom";
import banner from "../../public/Banner.png";
import ncujunkimage from "../../public/ncujunkimage.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Give Your College Items a New Home at TheNcuJunkyard –{" "}
              <span className="text-pink-500">Buy, Sell, and Save!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              TheNcuJunkyard is your go-to marketplace for buying and selling gently used college essentials. Whether you're looking to pass on your old books, notes, drafters, lab coats, or supplies, or find affordable study materials, we've got you covered. Join the community, save money, and give your items a second life!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <Link to="/Login">
            <button className="btn mt-6 btn-secondary">Get Started</button>
          </Link>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={ncujunkimage}
            className="md:w-[550px] md:h-[460px] md:ml-12 rounded-md rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-2 hover:scale-105"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
