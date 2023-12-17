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
                    <div className='text-[50px] text-orange-400'>LOGO</div>
                    <div className='text-orange-600'>SOLOGAN COMPANY</div>
                </div>
                <div>
                    <div>weekly themes</div>
                    <div>pre sale faqs</div>
                    <div>submit a ticket</div>
                </div>
                <div>
                    <div>services</div>
                    <div>theme tweak</div>
                </div>
                <div>
                    <div>showcase</div>
                    <div>widgetkit</div>
                    <div>support</div>
                </div>
                <div>
                    <div>about us</div>
                    <div>contact us</div>
                    <div>affiliates</div>
                    <div>resources</div>
                </div>
            </div>
            <div className="flex flex-col w-[500px] m-auto text-center">
                <div>
                    <div className="flex flex-row justify-evenly text-[40px] w-[300px] m-auto my-3">
                        <CiFacebook/>
                        <TiSocialTwitterCircular/>
                        <CiLinkedin/>
                        <TiSocialGooglePlusCircular />
                        <FaInstagram/>
                    </div>
                </div>
                <div className="bg-white h-1 m-5"></div>
                <div className="capitalize">@copyright. all right reserved</div>
            </div>
        </div>
    </>
  )
}

export default Footer