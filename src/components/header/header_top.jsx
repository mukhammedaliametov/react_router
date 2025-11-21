import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";

const HeaderTop = () => {
    return (
        <div className='bg-backgorund1 h-[35px] flex items-center text-[14px] text-text'>
            <div className='max-w-[1220px] w-full mx-auto px-[16px] xl:px-0 flex justify-between items-center'>
                <p>Welcome to worldwide Megamart!</p>
                <div className='flex items-center gap-[20px]'>
                    <div className='hidden md:flex items-center gap-[8px] cursor-pointer'>
                        <CiLocationOn className='text-primary' />
                        <p>Deliver to 423651</p>
                    </div>
                    <div className='hidden sm:flex items-center gap-[8px] cursor-pointer'>
                        <TbTruckDelivery className='text-primary' />
                        <p>Track your order</p>
                    </div>
                    <div className='flex items-center gap-[8px] cursor-pointer'>
                        <BiSolidOffer className='text-primary' />
                        <p>All Offers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;