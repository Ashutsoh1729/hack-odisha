'use client'

import React from "react";
import Layout from "../../component/Layout";
import Image from "next/image";
import Image1 from "../../../public/Image/Car1.jpg";
import Image2 from "../../../public/Image/car3.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const page = () => {
  const bookRide=()=>{
    toast.success("Ride Bokked Successfully!");
  }
  return (
    <Layout>
      <div className="my-4 w-full overflow-hidden">
        <h1 className="text-5xl font-sans mx-10 ">Share Your Ride</h1>
        <div className="z-0 flex">
          <Image src={Image1} alr="pic" />
          <p className="w-1/2 text-xl mx-8 my-24">"TRAVESOL" is an innovative app designed to assist users in finding reliable mechanics and garages swiftly when facing vehicle issues in unfamiliar places. Whether you're in an unknown town or a remote area, this user-friendly app connects you with trusted nearby services, ensuring a stress-free solution to unexpected breakdowns. Your trusted companion for all vehicle-related needs, "TRAVESOL" eliminates the uncertainty of vehicle troubles in unfamiliar locations.</p>
        </div>
        <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap">
          <div className="inline-flex space-x-4 p-4">
            <div className="w-96 h-96  bg-blue-200 rounded-lg flex-col flex items-center justify-center text-white text-2xl font-semibold">
              <Image src={Image2} height="200" />
              <h4 className="my-2 text-black">Price: ...Rs/hr</h4>
              <button className="border-black border-2 rounded-full text-black hover:bg-blue-300 px-4 py-2 m-4"
              onClick={bookRide}>Book Now</button>
            </div>
            <div className="w-96 h-96 bg-blue-200 nrounded-lg flex flex-col items-center justify-center text-white text-2xl font-semibold">
              <Image src={Image2} height="200" />
              <h4 className="my-2 text-black">Price: ...Rs/hr</h4>
              <button className="border-black border-2 rounded-full text-black hover:bg-blue-300 px-4 py-2 m-4"
              onClick={bookRide}>Book Now</button>
            </div>
            <div className="w-96 h-96 bg-blue-200 rounded-lg flex flex-col items-center justify-center text-white text-2xl font-semibold">
              <Image src={Image2} height="200" />
              <h4 className="my-2 text-black">Price: ... Rs/hr</h4>
              <button className="border-black border-2 rounded-full text-black hover:bg-blue-300 px-4 py-2 m-4"
              onClick={bookRide}>Book Now</button>
            </div>
            <div className="w-96 h-96 bg-blue-200 rounded-lg flex flex-col items-center justify-center text-white text-2xl font-semibold">
              <Image src={Image2} height="200" />
              <h4 className="my-2 text-black">Price: ...Rs/hr</h4>
              <button className="border-black border-2 rounded-full text-black hover:bg-blue-300 px-4 py-2 m-4"
              onClick={bookRide}>Book Now</button>
            </div>
            <div className="w-96 h-96 bg-blue-200 rounded-lg flex flex-col items-center justify-center text-white text-2xl font-semibold">
              <Image src={Image2} height="200" />
              <h4 className="my-2 text-black">Price: ...Rs/hr</h4>
              <button className="border-black border-2 rounded-full text-black hover:bg-blue-300 px-4 py-2 m-4"
              onClick={bookRide}>Book Now</button>
            </div>
            <div className="w-96 h-96 bg-blue-200 rounded-lg flex flex-col items-center justify-center text-white text-2xl font-semibold">
              <Image src={Image2} height="200" />
              <h4 className="my-2 text-black">Price: ...Rs/hr</h4>
              <button className="border-black border-2 rounded-full text-black hover:bg-blue-300 px-4 py-2 m-4"
              onClick={bookRide}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;