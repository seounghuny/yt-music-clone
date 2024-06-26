import { TopSong } from '@/types';
import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PlayListCard from './PlayListCard';
import { chunkArray } from '@/lib/utils';
import SongCard from './SongCard';


interface SongListCarouseProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode; 
  songListTop10: TopSong[];
}

const SongColumn = ({songList = []} : {songList: TopSong[]}) => {
  return (
    <div className='flex flex-col agp-4'>
      { songList.map((song, index) => {
        return <SongCard key={index} song={song}/>;
      })}
    </div>
  );
}

//const PlayListCarousel = ({ title, subTitle, Thumnail, palylistArray}: PlayListCarouseProps) => {
const SongListCarousel:React.FC<SongListCarouseProps> = ({
  title,
  subTitle,
  Thumbnail,
  songListTop10,
}) => {
    const chunkedTop10SongList = chunkArray(songListTop10, 4) as TopSong[][];

  return (
    <div className=' w-full'>
      <Carousel>
      <div className=' flex flex-row justify-between items-end my-2'>
        <article className='flex flex-row gap-3'>
          {Thumbnail}
          <div className=' flex flex-col justify-center'>
            <div>{subTitle && <div className=' text-neutral-500'>{subTitle}</div>}</div>
            <div className=' text-[34px] font-bold leading-34'>{title}</div>
          </div>
        </article>
        <div className=' relative left-[-45px]'>
          <div className=' absolute bottom-[20px]'>
            <CarouselPrevious className=' right-2'/>
            <CarouselNext className=' left-2'/>
          </div>          
        </div>
      </div>
      <CarouselContent>
        {
          chunkedTop10SongList?.map((songList, index) => {
            return  (
              <CarouselItem key={index} 
                className="lg:basis-1/2">
            <SongColumn songList={songList}/>
          </CarouselItem>
            )
          })
        }

      </CarouselContent>
      
    </Carousel>
    </div>
  )
}

export default SongListCarousel;