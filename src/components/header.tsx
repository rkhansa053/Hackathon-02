import React from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Link from "next/link";


const UpperHeader = () => {
    return (
        <div>
            <div className="h-[36px] w-full bg-white text-black">
                {/* /* logo section */}
                <div className="flex items-center ">
                    <Image className="mt-3"
                       src="/images/Frame (1).png"
                       alt="logo"
                       layout="fixed"
                       height={18}
                       width={19.2}/>
                </div>
                <ul className="flex justify-end items-center gap-14">
                    <li><Link href = "/.">Find a Store</Link></li>
                    <li><Link href="/help">Help</Link></li>
                    <li><Link href="/join-us">Join Us</Link></li>
                    <li><Link href="/login">Sign Up</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default UpperHeader;

export const Header= () => {
    return(
        <div>
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="flex items-center mr-auto mt-16">
        <Image
           src="/images/Frame (2).png"
           alt="logo2"
           height={78.47}
           width={78.47}/>
        </div>    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center mt-16">
      <a className="mr-5 text-black"><Link href="/products">New & Featured</Link></a>
      <a className="mr-5 text-black">Men</a>
      <a className="mr-5 text-black">Women</a>
      <a className="mr-5 text-black">Kids</a>
      <a className="mr-5 text-black">Sale</a>
      <a className="mr-5 text-black">SNKRS</a>

    </nav>
    <input  type="text" placeholder="Search" className="w-[200px] mt-16">
    </input>
    <IoSearch className="text-black size-5 mt-16" />
    <CiHeart className="text-black size-6 mt-16" />
    <LiaShoppingBagSolid className="text-black size-6 mt-16"/>
  </div>
</header>

        </div>
    )
}



