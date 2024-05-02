
"use client";
import { TopSong } from '@/types';
import React from 'react'
import Image from 'next/image';
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { MdMoreVert } from "react-icons/md";
import IconButton from './elements/IconButton';

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({song}) => {
  return (
    <article className='flex flex-row gap-4 h-[48px] w-full items-center
      relative group
    '>
      <div className=' w-[48px] h-[48px] relative'>
        <Image src={song.imageSrc} alt='img' fill className=' object-cover'/>
        <section className='hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black cursor-pointer'> 
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className='flex flex-row items-center gap-4'>
       <div>
        {
            song.rank === song.prevRank ? <FaCircle size={10}/> : 
              song.rank > song.prevRank ? <AiOutlineCaretUp size={10} color='#3CA63F'/> : 
                <AiOutlineCaretDown size={10} color='#FF0000'/>
          }
       </div>
       <div>{song.rank + 1}</div>
      </div>
      <div>
        <div>{song.name}</div>
      </div>
      <section className=' hidden group-hover:flex absolute right-0 flex-row h=[48px] justify-end items-center w-1/2 bg-[rgba[0,0,0,0.7]]'>
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<MdMoreVert size={20} />} />
      </section>
    </article>
  )
}

export default SongCard