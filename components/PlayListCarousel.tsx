import { Playlist } from '@/types';
import React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import PlayListCard from './PlayListCard';


interface PlayListCarouseProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode; 
  palylistArray?: Playlist[];
}

//const PlayListCarousel = ({ title, subTitle, Thumnail, palylistArray}: PlayListCarouseProps) => {
const PlayListCarousel:React.FC<PlayListCarouseProps> = ({
  title,
  subTitle,
  Thumbnail,
  palylistArray,
}) => {
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
          palylistArray?.map((playlist, index) => {
            return  (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
            <PlayListCard playlist={playlist}/>
          </CarouselItem>
            )
          })
        }

      </CarouselContent>
      
    </Carousel>
    </div>
  )
}

export default PlayListCarousel;