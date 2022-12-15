import React from 'react'
import Image from 'next/image';
import View from '../assets/view.svg'
import Photo from '../assets/photo.svg'
const Main = (props) => {
    return (
        <div className='shadow-xl bg-[#F7F7F7] mt-3 py-5 px-3 rounded-xl space-y-8'>
            <div className='flex items-center justify-between'>
                <button className='bg-gradient-to-tr from-[#FF8412] via-[#D23758] to-[#B1008A] btn text-white'>Clinic</button>
                <button className={`btn ${!!props?.test?'bg-gradient-to-tr from-[#FF8412] via-[#D23758] to-[#B1008A] text-white':''}`}>Test</button>
                <button className='btn'>Surgery</button>
                <button className='btn'>Medicine</button>
            </div>
            <div className='flex items-center justify-between'>
                <Image src={Photo} alt="ArrowLeft" className='w-[84px] h-[84px] object-contain' />
                <div className='flex flex-col text-sm'>
                    <p >{props?.time}</p>
                    <p className=' text-[#E97000]'>{props?.name}</p>
                    <p >{props?.location}</p>
                    {!!props?.test && <p>Test: {props.test}</p> }
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <button className='bg-gradient-to-tr from-[#B1008A]  to-[#060D67] btn text-white'>RESCHEDULE</button>
                <button className='btn bg-gradient-to-tr from-[#B1008A]  to-[#060D67] text-white'>CANCEL</button>
                <button className='btn'>
                    <div className='flex space-x-2'>
                        <Image src={View} alt="view" />
                        <p>View</p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Main