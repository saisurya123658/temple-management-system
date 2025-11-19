// // // // import { useEffect, useRef, useState } from 'react';
// // // // import { motion } from 'framer-motion';
// // // // import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
// // // // import { newsItems } from '../../Constants/newsItems'; 
// // // // import MobileNews from './MobileNews';
// // // // import { Helmet } from "react-helmet";
// // // // import PaginationDot from './PaginationDot'; 
// // // // import Modal from 'react-modal'; 

// // // // const News = () => {
// // // //   const carouselRef = useRef(null);
// // // //   const [currentPage, setCurrentPage] = useState(0);
// // // //   const [isModalOpen, setIsModalOpen] = useState(false); 
// // // //   const [modalVideoSrc, setModalVideoSrc] = useState(null); 
// // // //   const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); 
// // // //   const itemsPerPage = 4;
// // // //   const totalItems = newsItems.length;

// // // //   useEffect(() => {
   
// // // //     const handleResize = () => {
// // // //       setIsDesktop(window.innerWidth >= 768);
// // // //     };

// // // //     window.addEventListener('resize', handleResize);
// // // //     return () => window.removeEventListener('resize', handleResize);
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const scrollInterval = setInterval(() => {
// // // //       setCurrentPage((prev) => (prev + 1) % Math.ceil(totalItems / itemsPerPage));
// // // //     }, 3000); 

// // // //     return () => clearInterval(scrollInterval); 
// // // //   }, [totalItems, itemsPerPage]);

// // // //   useEffect(() => {
// // // //     if (carouselRef.current) {
// // // //       const items = carouselRef.current.children;
// // // //       for (let i = 0; i < items.length; i++) {
// // // //         items[i].style.transform = `translateX(-${currentPage * 100}%)`;
// // // //       }
// // // //     }
// // // //   }, [currentPage, itemsPerPage, totalItems]);

// // // //   const handlePageChange = (page) => {
// // // //     setCurrentPage(page);
// // // //   };

  
// // // //   const openModal = (videoSrc) => {
// // // //     setModalVideoSrc(videoSrc);
// // // //     setIsModalOpen(false);
// // // //   };

  
// // // //   const closeModal = () => {
// // // //     setIsModalOpen(false);
// // // //     setModalVideoSrc(null);
// // // //   };

// // // //   return (
// // // //     <div className="relative px-4 sm:px-8 md:px-16 lg:px-28 mt-8 md:mt-16">
// // // //       <Helmet>
// // // //         <title>What is datta-mandir? | Video Tutorial</title>
// // // //         <meta
// // // //           name="description"
// // // //           content="Watch our insightful video exploring the fundamentals of Buddhism and its beliefs. Discover the essence of Buddhist teachings and practices."
// // // //         />
// // // //         <meta
// // // //           name="keywords"
// // // //           content="datta-mandir, video tutorial, Buddhist beliefs, spiritual teachings, mindfulness"
// // // //         />
// // // //       </Helmet>
// // // //       <h2 className="hidden md:block text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 text-[#9f572a]">Latest Videos</h2>
      
// // // //       {/* Carousel Section */}
// // // //       <Carousel className="w-full overflow-hidden mt-8 md:mt-12 hidden md:block">
// // // //         <CarouselContent ref={carouselRef} className="flex">
// // // //           {newsItems.map((item) => (
// // // //             <CarouselItem key={item.id} className={`flex-shrink-0 w-1/4 h-[400px] mx-0`}> 
// // // //               <motion.div 
// // // //                 className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full cursor-pointer"
// // // //                 whileHover={{ scale: 1.05 }} 
// // // //                 transition={{ duration: 0.3 }}
// // // //                 onClick={() => openModal(item.localVideoSrc)} 
// // // //               >
// // // //                 <iframe
// // // //                   width="100%"
// // // //                   height="100%"
// // // //                   src={item.localVideoSrc}
// // // //                   title="Embedded YouTube video"
// // // //                   frameBorder="0"
// // // //                   allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// // // //                   referrerPolicy="strict-origin-when-cross-origin"
// // // //                   allowFullScreen
// // // //                   controls
// // // //                 ></iframe>
// // // //               </motion.div>
// // // //             </CarouselItem>
// // // //           ))}
// // // //         </CarouselContent>
// // // //       </Carousel>

      
// // // //       {isDesktop && (
// // // //         <PaginationDot 
// // // //           curPage={currentPage} 
// // // //           maxPage={Math.ceil(totalItems / itemsPerPage)} 
// // // //           onPageChange={handlePageChange} 
// // // //         />
// // // //       )}

// // // //       {/* Mobile News Section */}
// // // //       <div className='block md:hidden'>
// // // //            <MobileNews/>
// // // //       </div>
      
      
// // // //       <Modal
// // // //         isOpen={isModalOpen}
// // // //         onRequestClose={closeModal}
// // // //         className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-white rounded-lg shadow-lg outline-none max-w-3xl w-full h-auto"
// // // //         overlayClassName="fixed inset-0 bg-black bg-opacity-75"
// // // //         contentLabel="Video Modal"
// // // //         ariaHideApp={false} 
// // // //       >
// // // //         <div className="relative w-full h-[70vh]">
// // // //           <button 
// // // //             className="absolute top-0 right-0 text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full z-10"
// // // //             onClick={closeModal}
// // // //           >
// // // //             ✕
// // // //           </button>
// // // //           {modalVideoSrc && (
// // // //             <iframe
// // // //               className="w-full h-full"
// // // //               src={modalVideoSrc}
// // // //               controls
// // // //               title="Embedded YouTube video"
// // // //               frameBorder="0"
// // // //               allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// // // //               referrerPolicy="strict-origin-when-cross-origin"
// // // //               allowFullScreen
// // // //             ></iframe>
// // // //           )}
// // // //         </div>
// // // //       </Modal>
// // // //     </div>
// // // //   );
// // // // };
// // // // export default News;
// // // // import React from 'react';
// // // // import { newsItems } from '../../Constants/newsItems';

// // // // const News = () => {
// // // //   return (
// // // //     <div>
// // // //       {newsItems.map((item) => (
// // // //         <div key={item.id}>
// // // //           <h3>Video {item.id}</h3>
// // // //           <video width="100%" height="auto" controls>
// // // //             <source src={item.localVideoSrc} type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default News;
// // // // import React, { useEffect, useState } from 'react';
// // // // import { newsItems } from '../../Constants/newsItems';

// // // // const News = () => {
// // // //   const [currentScroll, setCurrentScroll] = useState(0);
// // // //   const scrollInterval = 3000; // Time interval for auto-scroll (in milliseconds)

// // // //   // Auto scroll logic
// // // //   useEffect(() => {
// // // //     const intervalId = setInterval(() => {
// // // //       setCurrentScroll((prevScroll) => (prevScroll + 1) % newsItems.length); // Loop through the videos
// // // //     }, scrollInterval);

// // // //     return () => clearInterval(intervalId); // Clean up the interval on unmount
// // // //   }, []);

// // // //   return (
// // // //     <div>
// // // //       <div
// // // //         className="flex overflow-x-scroll space-x-4 py-4"
// // // //         style={{
// // // //           scrollBehavior: 'smooth',
// // // //         }}
// // // //       >
// // // //         {newsItems.map((item, index) => (
// // // //           <div
// // // //             key={item.id}
// // // //             className={`flex-shrink-0 w-80`} // Adjust the width as needed
// // // //             style={{
// // // //               transform: `translateX(-${currentScroll * 100}%)`,
// // // //               transition: 'transform 1s ease',
// // // //             }}
// // // //           >
// // // //             <h3 className="text-center mb-2">Video {item.id}</h3>
// // // //             <video width="100%" height="auto" controls>
// // // //               <source src={item.localVideoSrc} type="video/mp4" />
// // // //               Your browser does not support the video tag.
// // // //             </video>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default News;
// // // import React, { useEffect, useState } from 'react';
// // // import { newsItems } from '../../Constants/newsItems';

// // // const News = () => {
// // //   const [currentScroll, setCurrentScroll] = useState(0);
// // //   const scrollInterval = 3000; // Time interval for auto-scroll (in milliseconds)

// // //   // Auto scroll logic
// // //   useEffect(() => {
// // //     const intervalId = setInterval(() => {
// // //       setCurrentScroll((prevScroll) => (prevScroll + 1) % newsItems.length); // Loop through the videos
// // //     }, scrollInterval);

// // //     return () => clearInterval(intervalId); // Clean up the interval on unmount
// // //   }, []);

// // //   return (
// // //     <div className="relative bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 py-8">
// // //       <div
// // //         className="flex overflow-x-scroll space-x-6 py-4 justify-start items-center"
// // //         style={{
// // //           scrollBehavior: 'smooth',
// // //         }}
// // //       >
// // //         {newsItems.map((item, index) => (
// // //           <div
// // //             key={item.id}
// // //             className="flex-shrink-0 w-80 h-64 bg-white rounded-lg shadow-xl overflow-hidden flex justify-center items-center"
// // //             style={{
// // //               transform: `translateX(-${currentScroll * 100}%)`,
// // //               transition: 'transform 1s ease',
// // //             }}
// // //           >
// // //             <div className="relative w-full h-full bg-black bg-opacity-40">
// // //               <h3 className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold z-10">
// // //                 Video {item.id}
// // //               </h3>
// // //               <video width="100%" height="100%" controls className="rounded-lg">
// // //                 <source src={item.localVideoSrc} type="video/mp4" />
// // //                 Your browser does not support the video tag.
// // //               </video>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default News;
// // import React, { useEffect, useState } from 'react';
// // import { newsItems } from '../../Constants/newsItems';

// // const News = () => {
// //   const [currentScroll, setCurrentScroll] = useState(0);
// //   const scrollInterval = 3000; // Time interval for auto-scroll (in milliseconds)

// //   // Auto scroll logic
// //   useEffect(() => {
// //     const intervalId = setInterval(() => {
// //       setCurrentScroll((prevScroll) => (prevScroll + 1) % newsItems.length); // Loop through the videos
// //     }, scrollInterval);

// //     return () => clearInterval(intervalId); // Clean up the interval on unmount
// //   }, []);

// //   return (
// //     <div className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 py-10">
// //       <div
// //         className="flex overflow-x-scroll space-x-4 py-4 justify-start items-center"
// //         style={{
// //           scrollBehavior: 'smooth',
// //         }}
// //       >
// //         {newsItems.map((item, index) => (
// //           <div
// //             key={item.id}
// //             className="flex-shrink-0 w-96 h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex justify-center items-center transition-transform duration-1000 ease-in-out transform hover:scale-105"
// //             style={{
// //               transform: `translateX(-${currentScroll * 100}%)`,
// //               transition: 'transform 1s ease, scale 0.3s ease',
// //             }}
// //           >
// //             <div className="relative w-full h-full bg-gradient-to-t from-black via-transparent to-black bg-opacity-40 rounded-3xl">
// //               <h3 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold z-10 drop-shadow-lg">
// //                 Video {item.id}
// //               </h3>
// //               <video width="100%" height="100%" controls className="rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
// //                 <source src={item.localVideoSrc} type="video/mp4" />
// //                 Your browser does not support the video tag.
// //               </video>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <style jsx>{`
// //         /* Smooth scrolling for flexbox */
// //         .scroll-container {
// //           scroll-snap-type: x mandatory;
// //           overflow-x: scroll;
// //           display: flex;
// //         }

// //         .scroll-container::-webkit-scrollbar {
// //           display: none;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default News;
// import React, { useState, useEffect } from 'react';
// import { newsItems } from '../../Constants/newsItems';

// const News = () => {
//   const [currentScroll, setCurrentScroll] = useState(0);
//   const [activeVideo, setActiveVideo] = useState(null); // Track the currently active video
//   const [bgColor, setBgColor] = useState('bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500'); // Default background color
//   const scrollInterval = 3000; // Time interval for auto-scroll (in milliseconds)

//   // Auto scroll logic
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentScroll((prevScroll) => (prevScroll + 1) % newsItems.length); // Loop through the videos
//     }, scrollInterval);

//     return () => clearInterval(intervalId); // Clean up the interval on unmount
//   }, []);

//   const handleVideoClick = (videoId, videoSrc, videoBgColor) => {
//     setActiveVideo(videoId); // Set the clicked video as active
//     setBgColor(videoBgColor); // Change background color based on the video
//   };

//   return (
//     <div className={`relative py-10 ${bgColor}`}>
//       <div
//         className="flex overflow-x-scroll space-x-4 py-4 justify-start items-center"
//         style={{
//           scrollBehavior: 'smooth',
//         }}
//       >
//         {newsItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex-shrink-0 w-96 h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden flex justify-center items-center transition-transform duration-1000 ease-in-out transform hover:scale-105"
//             style={{
//               transform: `translateX(-${currentScroll * 100}%)`,
//               transition: 'transform 1s ease, scale 0.3s ease',
//             }}
//           >
//             <div className="relative w-full h-full bg-gradient-to-t from-black via-transparent to-black bg-opacity-40 rounded-3xl">
//               <h3 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold z-10 drop-shadow-lg">
//                 Video {item.id}
//               </h3>
//               <video
//                 width="100%"
//                 height="100%"
//                 controls
//                 className="rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
//                 onClick={() => handleVideoClick(item.id, item.localVideoSrc, item.bgColor)} // Change background color on video click
//                 autoPlay={activeVideo === item.id} // Only autoplay if this video is active
//               >
//                 <source src={item.localVideoSrc} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         ))}
//       </div>
//       <style jsx>{`
//         /* Smooth scrolling for flexbox */
//         .scroll-container {
//           scroll-snap-type: x mandatory;
//           overflow-x: scroll;
//           display: flex;
//         }

//         .scroll-container::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default News;
import React, { useState, useEffect, useRef } from 'react';
import { newsItems } from '../../Constants/newsItems';

const News = () => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [bgColor, setBgColor] = useState('bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500');
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  const videoRefs = useRef([]);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScrollEnabled) return;

    const intervalId = setInterval(() => {
      setCurrentScroll((prev) => (prev + 1) % newsItems.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [autoScrollEnabled]);

  const handleVideoClick = (id, color, index) => {
    // Pause all other videos
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== index) {
        video.pause();
      }
    });

    // Set state
    setActiveVideo(id);
    setBgColor(color);
    setAutoScrollEnabled(false); // stop auto-scroll when a video plays
  };

  const handleVideoPause = () => {
    // Resume auto-scroll if no videos are playing
    const anyPlaying = videoRefs.current.some(video => video && !video.paused);
    if (!anyPlaying) {
      setAutoScrollEnabled(true);
    }
  };

  return (
    <div className={`relative min-h-screen py-10 ${bgColor} transition-all duration-700`}>
      <div className="flex overflow-x-scroll space-x-4 py-4 px-6 snap-x snap-mandatory">
        {newsItems.map((item, index) => (
          <div
            key={item.id}
            className="snap-center flex-shrink-0 w-80 h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden flex justify-center items-center"
            style={{
              transform: `translateX(-${currentScroll * 100}%)`,
              transition: 'transform 0.8s ease',
            }}
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <h3 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold z-10 drop-shadow">
               
              </h3>
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                width="100%"
                height="100%"
                className="w-full h-full object-cover"
                controls
                onPlay={() => handleVideoClick(item.id, item.bgColor, index)}
                onPause={handleVideoPause}
              >
                <source src={item.localVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
