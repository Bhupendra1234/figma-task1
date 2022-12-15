import Image from 'next/image';
import ArrowLeft from '../assets/leftArrow.svg'
import Main from '../components/Main.jsx'
import { profileData } from '../data';
export default function Home() {
  return (
    <div className='flex  items-center justify-center bg-slate-300'>
      <div className='flex flex-col shadow-xl bg-neutral-50 p-4 rounded-tr-lg'>
        <div className='flex items-center space-x-24'>
          <Image src={ArrowLeft} alt="ArrowLeft" />
          <p className='font-semibold'>UPCOMIMG ASSIGNMENTS</p>
        </div>
        <div className='flex justify-between items-center rounded-xl mt-8 px-5 py-6 bg-gradient-to-tr from-[#0037C5] to-[#08005F] space-x-4'>
          <p className='text-white font-semibold text-xl'>New Booking in 2 Minutes</p>
          <button className='px-3 py-2 text-white font-normal text-lg border-2 rounded-full bg-gradient-to-tr from-[#FF8412] via-[#D23758] to-[#B1008A]'>Book Now</button>
        </div>
        {profileData.map((data, index) => {
          return <Main key={index} {...data} />
        })}
        <button className='w-full mt-3 shadow-xl bg-[#F7F7F7] p-4 rounded-xl'>Back</button>
      </div>
    </div>
  )
}
