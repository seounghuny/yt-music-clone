"use client";
import React from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/navigation';
import IconButton from './IconButton';
import { MdOutlineClose } from "react-icons/md";

const Logo = ({isInDrawer = false, onClickClose = () => {} }) => {

  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };

  const onClickMenu = () => {};

  return (
    <section className='flex flex-row items-center gap-3'>
      {isInDrawer ? (
        <IconButton 
        onClickIcon={onClickClose} 
        icon={<MdOutlineClose size={30}/>} />  
      ) : (
      <IconButton 
        onClickIcon={onClickMenu} 
        icon={<RxHamburgerMenu size={24}/>} />
      )}
      <div className=' cursor-pointer' onClick={onClickLogo}>
        <Image src={"/main-logo.svg"} width={100} height={30} alt='logo'/>
      </div>
    </section>
  );
}

export default Logo