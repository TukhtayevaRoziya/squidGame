import React, { useState } from 'react'

import Controls from './Controls'
import VideosLine from './videosLine/VideosLine'

// import t1Img from '../../../../assets/images/thumbnails/thumbnail-1.jpg'
// import t2Img from '../../../../assets/images/thumbnails/thumbnail-2.jpg'
// import t3Img from '../../../../assets/images/thumbnails/thumbnail-3.jpg'
// // import t4Img from '../../../../assets/images/thumbnails/thumbnail-4.jpg'
// import t5Img from '../../../../assets/images/thumbnails/thumbnail-5.jpg'
// import t6Img from '../../../../assets/images/thumbnails/thumbnail-6.jpg'
import { useSeries } from './../../../../hooks/useSeries';

// const initialSlide = [
//   {
//     _id: 'wef2we',
//     thumbnailPath: t1Img,
//     videoUrl: 'https://youtube.com/watch?v=oqxAJKy0ii4',
//   },
//   {
//     _id: '123fqw',
//     thumbnailPath: t2Img,
//     videoUrl: 'https://youtube.com/watch?v=iAFqS8uxImo',
//   },
//   {
//     _id: '43gsw',
//     thumbnailPath: t3Img,
//     videoUrl: 'https://youtube.com/watch?v=Ch0RwN424Ns',
//   },
//   // {
//   //   _id:'wef2we',
//   //   thumbnailPath: t4Img,
//   //   videoUrl: 'https://youtube.com/watch?v=oqxAJKy0ii4'
//   // },
//   {
//     _id: '53uyi5k',
//     thumbnailPath: t5Img,
//     videoUrl: 'https://youtube.com/watch?v=k98IihPUl6Q',
//   },
//   {
//     _id: 'w*#fgr',
//     thumbnailPath: t6Img,
//     videoUrl: 'https://youtube.com/watch?v=HGcPu8qdqL4',
//   },
// ]

const Carousel = () => {
  const [series] = useSeries()

  const [currentIdx, setCurrentIdx] = useState(0)

  return (
    <div className="mt-24">
      <div className="flex items-center mb-5">
        <div className="text-white opacity-90 text-lg font-medium mr-20">
          1 series
        </div>
        <Controls
          slidesLength={series.length}
          setCurrentIdx={setCurrentIdx}
          currentIdx={currentIdx}
        />
      </div>
      <VideosLine
        slides={series}
        setCurrentIdx={setCurrentIdx}
        currentIdx={currentIdx}
      />
    </div>
  )
}

export default Carousel
