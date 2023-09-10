'use client'
import Image from 'next/image'
import React from 'react'
// import car from "../../../public/Image/toppng.com-audi-png-image-car-4k-1281x660"
import car from "../../../public/Image/imgbin_2018-honda-cr-v-toyota-fortuner-car-png.png"
import { SlEnergy } from "react-icons/sl"

import { BsSpeedometer2 } from "react-icons/bs"
import { GiRadarSweep } from "react-icons/gi"

const VeichleCard = () => {
    return (
        <>
            <div className="rounded-11xl bg-darkgray w-[425px] h-[693px] overflow-hidden shrink-0 flex flex-col p-2.5 box-border items-center justify-start gap-[10px] text-left text-21xl text-black font-inter">
                <div className="rounded-11xl bg-white w-[403px] overflow-hidden flex flex-col py-[3px] px-[126px] box-border items-center justify-center">
                    <div className="relative text-3xl font-medium ">Toyota</div>
                </div>
                <div className="relative rounded-11xl bg-white w-[405px] h-[455px] overflow-hidden shrink-0">
                    <Image
                        className="absolute top-[98px] left-[0px] w-[405px] h-[282px] object-cover"
                        alt=""
                        width={100}
                        height={100}
                        src={car}
                    />
                </div>

                <div className='w-[405px] h-[130px] bg-slate-200 rounded-3xl flex flex-row items-center justify-between px-10'>
                    <div className='p-7 '>
                        <BsSpeedometer2 size="40px"/>
                        <div className=' w-full mt-2 h-full flex justify-center items-center'>
                            65
                        </div>
                    </div>
                    <div className='p-7  '>
                        <SlEnergy size="40px" />
                        <div className=' w-full mt-2 h-full flex justify-center items-center'>
                            23%
                        </div>
                    </div>
                    <div className='p-7 '>
                        <GiRadarSweep size="40px" />
                        <div className=' w-full mt-2 h-full flex justify-center items-center'>
                            12 mi
                        </div>
                    </div>
                </div>
                {/* <div className=' flex-col flex  items-center'>
                        <BsSpeedometer2/>
                        <div className="absolute top-[71px] left-[49.5px] leading-[150%]">
                            65
                        </div>
                    </div>
                    <div className=' flex-col flex'>
                        <SlEnergy />
                        <div className="absolute top-[71px] left-[184.5px] leading-[150%]">
                            23%
                        </div>
                    </div>
                    <div className=' flex-col flex'>
                        <GiRadarSweep />
                        <div className="absolute top-[74px] left-[319.5px] leading-[150%]">
                            12 mi
                        </div>
                    </div> */}


                {/* <Image
                        className="absolute top-[18px] left-[309.5px] w-14 h-14 object-cover"
                        alt=""
                        width={100}
                        height={100}
                        src="/radar@2x.png"
                    /> */}



            </div>
        </>
    )
}

export default VeichleCard