import Link from "next/link";
import React from "react";
import Image from "next/image";
import Image1 from "../../public/Image/travesol1.png";

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full opacity-90 z-10">
        <div className="navbar w-full flex items-center justify-between  text-white bg-gray-900 px-4">
          <div className=" mx-4 flex items-center">
            <Image src={Image1} width="70" height="70" />
            <Link href="/" className="text-2xl text-lime-500">Travesol</Link>
          </div>
          <div className="flex justify-around items-center m-4 text-xl ">
            <li className="list-none mx-10">
              <Link href="/service">Mechanic</Link>
            </li>
            <li className="list-none mx-10">
              <Link href="/rent">Rent</Link>
            </li>
            <li className="list-none mx-10">
              <Link href="/share">Share Ride</Link>
            </li>
            <li className="list-none mx-10">
              <Link href="/dashboard">Dash Board</Link>
            </li>
          </div>
          <div>
            <button className="text-lg text-white  border rounded-full border-slate-300 hover:border-slate-400 px-5 py-2 m-4 justify-self-end">Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
