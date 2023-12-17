import React from 'react'

const Contacts = () => {
  return (
    <>
      <div className='flex flex-row justify-between w-[800px] h-[300px] bg-zinc-100 m-auto mt-[100px] rounded-md'>
        <div className='flex flex-col text-start m-9 w-[300px]'>
          <div className="font-bold text-[25px]">Get in touch:</div>
          <div className="font-semibold mb-6 mt-3">Fill in the form to start a conservation</div>
          <div className="text-[12px] my-2">BABA JI COMPLEX TILAK NAGAR</div>
          <div className="text-[12px] my-2">+998877665544</div>
          <div className="text-[12px] my-2">info@info.org</div>
        </div>
        <div className='flex flex-col m-9'>
          <input className="my-3 p-2 w-[350px]" type="text" placeholder='Full Name' />
          <input className="my-3 p-2 w-[350px]" type="email" placeholder='Email' />
          <input className="my-3 p-2 w-[350px]" type="number" placeholder='Mob-no..' />
          <button className='p-2 my-3 bg-violet-600 rounded-md text-white hover:bg-violet-500'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Contacts