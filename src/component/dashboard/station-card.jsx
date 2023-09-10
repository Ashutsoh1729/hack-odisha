'use client'
import Image, { StaticImageData } from 'next/image'
import React, { CSSProperties, useMemo } from 'react'




const StationItem = ({ head, sub, image }) => {


    return (
        <>
            <div
                className="  bg-dimgray w-[380px] overflow-hidden flex flex-row py-3 px-[15px] box-border items-center justify-start gap-[28px] text-left text-5xl  bg-slate-400 rounded-2xl m-5 text-black font-inter"
            >
                <div className="relative w-full h-full flex items-center justify-start">
                    <div className="relative text-4xl font-medium ">
                        <Image
                            alt=''
                            src={image}
                            width={150}
                            height={150}
                            className=' rounded-xl'
                            sizes='40px'
                        />
                    </div>
                    <div className=' w-full h-full pl-8 py-2 my-3 flex flex-col justify-start items-start'>

                        <div className="relative text-2xl font-medium ">
                            {head}
                        </div>
                        <div className="relative font-normal text-2xl ">
                            {sub}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StationItem