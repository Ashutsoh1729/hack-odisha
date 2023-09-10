'use client'
import Image from 'next/image'
import React from 'react'
import map from "../../../public/Image/Screenshot 2023-09-10 at 00.43.05.png"
import { AiOutlineArrowUp } from "react-icons/ai"
import { BsXCircle } from "react-icons/bs"
import { GrDirections } from "react-icons/gr"

const Navigation = () => {
    return (
        <>
            <div className=" bg-gray h-[693px] w-[425px] py-10 overflow-hidden flex flex-col p-2.5 gap-3 ">
                <div className=' h-[20%] rounded-3xl w-full flex  p-4 bg-slate-200 '>
                    <div className=' w-3/12 h-full flex justify-center items-center'>
                        <AiOutlineArrowUp size="40px"/>
                    </div>
                    <div className=' w-full flex  flex-col'>
                        <h3 className=' pl-4 pt-3 text-3xl font-medium'>
                            Appolo Pharmacy
                        </h3>
                        <p className=' text-lg font-normal'> 0.7 mile</p>
                    </div>
               </div>
                <div className=' h-[60%] rounded-3xl w-full bg-slate-300 p-4'>
                    <Image
                        alt=''
                        src={map}
                        className=' w-full h-full rounded-2xl'
                    />
               </div>
                <div className=' h-[20%] rounded-3xl w-full bg-slate-200'>
                    <div className=' flex w-full h-full'>
                        <div className=' w-[60%] h-full flex justify-start items-start flex-col p-8'>
                            <h3 className=' text-4xl font-medium'>13 min</h3>
                            <p className='pl-2'>0.3 mile</p>
                        </div>
                        <div className=' w-[40%] h-full flex p-5 justify-center items-center'>
                            <div className='flex justify-center items-center pr-4'>
                                <BsXCircle size="40px"/>
                            </div>
                            <div className='flex justify-center items-center pl-5'>
                                <GrDirections size="40px" />
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}

export default Navigation