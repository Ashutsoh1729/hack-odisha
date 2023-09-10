"use client"
import React from 'react'
import StationItem from './station-card'
import car_1 from "../../../public/Image/car-1.jpeg"
import car_2 from "../../../public/Image/car-2.jpeg"
import car_3 from "../../../public/Image/car-3.jpeg"

const StationColumn = () => {
    return (
        <>
            <div className=" bg-gray h-[693px] w-[425px] py-10 overflow-hidden flex flex-col p-2.5 gap-3 ">
                <div className=' h-[20%] rounded-3xl w-full bg-slate-300'>
                    <div className=' h-full w-full'>
                        <h3 className=' h-full w-full flex justify-center items-center text-xl font-medium'>
                            Chargin Stations <br/>
                            Nearby

                        </h3>
                    </div>
                </div>
                <div className=' h-[80%] rounded-3xl w-full bg-slate-200'>
                    <StationItem image={ car_1 } head='Station-01' sub='0.2 mil' />
                    <StationItem image={car_2} head='Station-01' sub='0.5 mil' />
                    <StationItem image={car_3} head='Station-01' sub='0.8 mil' />
                </div>
            </div>
        </>
    )
}

export default StationColumn