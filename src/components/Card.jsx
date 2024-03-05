import React from 'react'
import { LuDownload, LuFileLineChart } from "react-icons/lu";
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"




const Card = ({data, Reference, className}) => {
  return (
    <>
     <motion.div drag dragConstraints={Reference} className='bg-zinc-900/90 w-60 h-72 flex-shrink-0 rounded-[45px] text-white py-10 px-8 relative overflow-hidden'>
    <LuFileLineChart />
    <p className='text-xs mt-5 font-semibold leading-tight'> {data.desc} </p>
    <footer className='footer absolute bottom-0 left-0 w-full'>
    <div className='flex justify-between items-center mb-3 py-3 px-8'> 
        <h5>{data.filesize}</h5>
        <span className='w-7 h-7  bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff' /> }


        </span>
    </div>
    {
        data.tag.isOpen && (
            <div className={`tag w-full ${className} py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
        )
    }
   
    </footer>

     </motion.div>
    </>
  )
}

export default Card