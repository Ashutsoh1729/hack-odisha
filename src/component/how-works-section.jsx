'use client'
import icon from "../../public/Image/Relume.svg"
import Image from "next/image";

const CarManagementStepsContainer = () => {
    return (
        <div className="bg-white w-[90rem] overflow-hidden mx-auto flex flex-col pt-[3.69rem] px-[4rem] pb-[7rem] box-border items-center justify-start gap-[5rem] text-center text-[1rem] text-black font-text-regular-normal">
            <div className="w-[48rem] flex flex-col items-center justify-start gap-[1rem]">
                <div className="relative leading-[150%] font-semibold">How we work</div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] text-[3rem]">
                    <b className="self-stretch relative leading-[120%]">
                        Manage your Cars in These steps
                    </b>
                    <div className="self-stretch relative text-[1.13rem] leading-[150%]">
                        Our World Class Services at your door step
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[5rem] text-left">
                <div className="flex-1 flex flex-col items-start justify-start gap-[2rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                        <div className="relative leading-[150%] font-semibold">Tagline</div>
                        <b className="self-stretch relative text-[3rem] leading-[120%]">
                            Medium length section heading goes here
                        </b>
                    </div>
                    <div className="flex flex-row pt-[1rem] px-[0rem] pb-[0rem] items-center justify-start gap-[1.5rem]">
                        <div className="rounded-smi flex flex-row py-[0.75rem] px-[1.5rem] items-center justify-center border-[1px] border-solid border-black">
                            <div className="relative leading-[150%]">Button</div>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-[0.5rem]">
                            <div className="relative leading-[150%]">Button</div>
                            <img
                                className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
                                alt=""
                                src="/icon--chevron-right.svg"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] text-[1.25rem]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2.5rem]">
                        <div className="flex flex-col items-center justify-start gap-[1rem]">
                            <Image
                                className="relative w-[3rem] h-[3rem] overflow-hidden shrink-0"
                                alt=""
                                src={icon}
                            />
                            <div className="relative box-border w-[0.13rem] h-[6.38rem] border-r-[2px] border-solid border-black" />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[0.63rem]">
                            <b className="self-stretch relative leading-[140%]">
                                Dashboard 
                            </b>
                            <div className="self-stretch relative text-[1rem] leading-[150%]">
                                Sign In to our system to connect your devices to manage all your electronic veichles.
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2.5rem]">
                        <div className="flex flex-col items-center justify-start gap-[1rem]">
                            <Image
                                className="relative w-[3rem] h-[3rem] overflow-hidden shrink-0"
                                alt=""
                                src={icon}
                            />
                            <div className="relative box-border w-[0.13rem] h-[6.38rem] border-r-[2px] border-solid border-black" />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[0.63rem]">
                            <b className="self-stretch relative leading-[140%]">
                                Connect
                            </b>
                            <div className="self-stretch relative text-[1rem] leading-[150%]">
                                Connect your Devices here and manage and monitor their activities form here and keep track of them.
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2.5rem]">
                        <div className="flex flex-col items-center justify-start gap-[1rem]">
                            <Image
                                className="relative w-[3rem] h-[3rem] overflow-hidden shrink-0"
                                alt=""
                                src={icon}
                            />
                            {/* <div className="relative box-border w-[0.13rem] h-[6.38rem] border-r-[2px] border-solid border-black" /> */}
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[0.63rem]">
                            <b className="self-stretch relative leading-[140%]">
                                Rent Out
                            </b>
                            <div className="self-stretch relative text-[1rem] leading-[150%]">
                                Rent out your Veichles in your free time and earn some money on it.
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CarManagementStepsContainer;