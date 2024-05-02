"use client";
import React from 'react'
import IconButton from './elements/IconButton'
import { FiMoreVertical } from 'react-icons/fi'
import { getRandomElementFromArray } from '@/lib/utils';
import Image from 'next/image';
import WhiteButton from '@/components/elements/WhiteButton';
import DarkButton from '@/components/elements/DarkButton';
import { FiFolderPlus } from "react-icons/fi";
import { FiPlay } from "react-icons/fi";

const PlayListHead = ({playlist = {}} = {}) => {
  const { playlistName, owner, songList } = playlist;
  const randomSong = getRandomElementFromArray(songList);

  return (
    <section className='m-4'>
      <div className='flex gap-[50px] flex-row'>
        <div className=' relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]' >
          <Image alt="songList" fill src={randomSong?.imageSrc}/>
        </div>
        <article className='flex flex-col justify-center'>
          <div className='font-bold text-[28px]'>{playlistName}</div>
          <div className=' text-neutral-400 mt-4 text-[14px]'>
            <div>{`앨범 ${owner} 2019`}</div>
            <div>{`${songList.length} 곡 15분`}</div>
          </div>
          <ul className='hidden lg:flex flex-row gap-4 mt-4'>          
            <WhiteButton className={"w-[85px] text-[14px]"} icon={<FiPlay />} label="재생"/>
            <DarkButton className={'w-[150px] text-[14px]'} icon={<FiFolderPlus />} label={"보관함에 저장"}/>
            <IconButton icon={<FiMoreVertical size={24}/>} />
          </ul>
        </article>
      </div>
      <ul className='flex flex-row gap-4 mt-4 lg:hidden'>          
          <WhiteButton className={"w-[85px] text-[14px]"} icon={<FiPlay />} label="재생"/>
          <DarkButton className={'w-[150px] text-[14px]'} icon={<FiFolderPlus />} label={"보관함에 저장"}/>
          <IconButton icon={<FiMoreVertical size={24}/>} />
        </ul>
    </section>
  )
}

export default PlayListHead