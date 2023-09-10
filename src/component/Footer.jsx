import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full static bg-gray-800 justify-around">
      <div className="flex-col w-1/3 text-white m-4">
        <div className="font-bold m-3 text-3xl">Tavesol</div>
        <div className="m-3 font-semibold text-2xl">Our Moto:</div>
        <div className=" text-xl m-2">Simplyfy the travel experience with us</div>
      </div>
      <div className="flex-col w-1/4 text-white m-4">
        <div className="font-bold text-2xl m-3">Useful Links</div>
        <div className="text-xl font-semibold m-2">About Us</div>
        <div className="text-xl font-semibold m-2">Membership</div>
        <div className="text-xl font-semibold m-2">Blog</div>
        <div className="text-xl font-semibold m-2">FAQs</div>
        <div className="text-xl font-semibold m-2">Privacy policy</div>
      </div>

      <div className="flex-col w-1/4 text-white m-4">
        <div className="font-bold text-2xl m-3">Follow Us</div>
        <div className="text-xl font-semibold m-2">Facebook</div>
        <div className="text-xl font-semibold m-2">Instagram</div>
        <div className="text-xl font-semibold m-2">Twitter</div>
        <div className="text-xl font-semibold m-2">Linkdin</div>
        <div className="text-xl font-semibold m-2">Mail</div>
      </div>
    </div>
  );
};

export default Footer;
