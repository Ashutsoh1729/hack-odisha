import Image from "next/image";
import styles from "./page.module.css";
import Image1 from "../../public/Image/Car1.jpg";
import Image2 from "../../public/Image/Car3.jpg";
import Image6 from "../../public/Image/Car6.jpg";
import Layout from "../component/Layout";
import CarManagementStepsContainer from "../component/how-works-section"
export default function Home() {
  return (
    <Layout>
      <div class="bg-[url('/Image/carAnime.jpg')] bg-opacity-25 min-h-screen bg-no-repeat bg-cover ">
        <div className="w-1/3 mx-20 py-40">
          <h2 className="text-5xl font-sans tracking-wide text-black my-6 ">
            All your Travel solutions at One place
          </h2>
          <p className="text-black font-medium ">
            We provice all the solutions you needed to make your travel
            experience smooth and keep you informed about your veichle health.
          </p>
          <button className="border-solid border-2 border-black text-xl text-black rounded-2xl p-2 mx-2 my-2">
            Learn more
          </button>
        </div>
      </div>

      <CarManagementStepsContainer/>

      <div className="flex-col">
        <div><h2 className="text-6xl text-center my-2"> Servises We Provide</h2></div>

       <div className="w-4/5 border-solid border-2 float-left m-3 border-black rounded-3xl bg-blue-200  flex box-border ">
        <div className="w-1/2 flex"> <Image src={Image2} alt="Picture" height="412" width="512" className="px-5 py-2 justify-start"/></div>
         <div className="justify-end w-1/2">
          <h2 className="font-bold font-sans text-5xl px-3 py-6">Mechanic</h2>
          <h4 className="font-normal font-serif text-3xl p-3">Why so Panic, Here is your Mechanic</h4>
          <button className=" p-3 mx-4 my-2 border-solid border-2 border-black rounded-full hover:p-[13px]  hover:bg-sky-300 font-semibold ">Want One?</button>
         </div>
       </div>

       <div className="w-4/5 border-solid border-2 float-right m-3 border-black rounded-3xl bg-yellow-100 flex box-border">
         <div className="justify-START w-1/2">
          <h2 className="font-bold font-sans text-5xl px-3 py-6">Rent Your Ride</h2>
          <h4 className="font-normal font-serif text-3xl p-3">Drive Your Dreams, Rent Your Reality</h4>
          <button className=" p-3 mx-4 my-2 border-solid border-2 border-black rounded-full hover:p-[13px]  hover:bg-yellow-200 font-semibold ">Want One?</button>
         </div>
         <div className="w-1/2 justify-end flex"><Image src={Image2} alt="Picture" height="412" width="512" className="mx-5 py-2 "/> </div>
       </div>

       <div className="w-4/5 border-solid border-2 float-left m-3 border-black rounded-3xl bg-blue-200 flex box-border">
        <div className="w-1/2 flex"> <Image src={Image2} alt="Picture" height="412" width="512" className="px-5 py-2 justify-start"/></div>
         <div className="justify-end w-1/2">
          <h2 className="font-bold font-sans text-5xl px-3 py-6">Share Your Car</h2>
          <h4 className="font-normal font-serif text-3xl p-3">Share your journey, Save your money</h4>
          <button className=" p-3 mx-4 my-2 border-solid border-2 border-black rounded-full hover:p-[13px]  hover:bg-sky-300 font-semibold ">Find One?</button>
         </div>
       </div>

       <div className="w-4/5 border-solid border-2 float-right m-3 border-black rounded-3xl bg-yellow-100 flex box-border">
         <div className="justify-START w-1/2">
          <h2 className="font-bold font-sans text-5xl px-3 py-6">Electric Power Hub</h2>
          <h4 className="font-normal font-serif text-3xl p-3">Empowering Your Journey, Never bother About Charging</h4>
          <button className=" p-3 mx-4 my-2 border-solid border-2 border-black rounded-full hover:p-[13px]  hover:bg-yellow-200 font-semibold ">Know Location!</button>
         </div>
         <div className="w-1/2 justify-end flex"><Image src={Image2} alt="Picture" height="412" width="512" className="mx-5 py-2 "/> </div>
       </div>

       <div className="w-4/5 border-solid border-2 float-left m-3 border-black rounded-3xl bg-blue-200 flex box-border">
        <div className="w-1/2 flex"> <Image src={Image2} alt="Picture" height="412" width="512" className="px-5 py-2 justify-start"/></div>
         <div className="justify-end w-1/2">
          <h2 className="font-bold font-sans text-5xl px-3 py-6">Hire a Driver</h2>
          <h4 className="font-normal font-serif text-3xl p-3">Relax and Ride, Your Trusted Driver Awaits</h4>
          <button className=" p-3 mx-4 my-2 border-solid border-2 border-black rounded-full hover:p-[13px]  hover:bg-sky-300 font-semibold ">Find One?</button>
         </div>
       </div>
        </div>
    </Layout>
  );
}
