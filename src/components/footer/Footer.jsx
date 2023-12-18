// import React from 'react'
import { CiFacebook,CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import { TiSocialTwitterCircular,TiSocialGooglePlusCircular } from "react-icons/ti";


const Footer = () => {
  return (
    <>
        <div className="bg-slate-900 text-white uppercase flex flex-col">
            <div className="flex flex-row justify-between m-[50px] mx-[80px]">
                <div >
                    <div className='text-[50px] text-orange-400 hover:text-white'>LOGO</div>
                    <div className='text-orange-600 hover:text-white'>SOLOGAN COMPANY</div>
                </div>
                <div>
                    <div className="hover:text-orange-500">weekly themes</div>
                    <div className="hover:text-orange-500">pre sale faqs</div>
                    <div className="hover:text-orange-500">submit a ticket</div>
                </div>
                <div>
                    <div className="hover:text-orange-500">services</div>
                    <div className="hover:text-orange-500">theme tweak</div>
                </div>
                <div>
                    <div className="hover:text-orange-500">showcase</div>
                    <div className="hover:text-orange-500">widgetkit</div>
                    <div className="hover:text-orange-500">support</div>
                </div>
                <div>
                    <div className="hover:text-orange-500">about us</div>
                    <div className="hover:text-orange-500">contact us</div>
                    <div className="hover:text-orange-500">affiliates</div>
                    <div className="hover:text-orange-500">resources</div>
                </div>
            </div>
            <div className="flex flex-col w-[500px] m-auto text-center mb-14">
                <div>
                    <div className="flex flex-row justify-evenly text-[40px] w-[300px] m-auto my-3">
                        <CiFacebook/>
                        <TiSocialTwitterCircular/>
                        <CiLinkedin/>
                        <TiSocialGooglePlusCircular />
                        <FaInstagram/>
                    </div>
                </div>
                <div className="bg-white h-1 m-5 hover:text-orange-500"></div>
                <div className="capitalize hover:text-orange-500">@copyright. all right reserved</div>
            </div>
        </div>
    </>
  )
}

export default Footer