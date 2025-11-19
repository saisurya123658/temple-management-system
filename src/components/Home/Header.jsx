// import { Helmet } from "react-helmet";

// const Header = () => {
//   return (
//     <div className="bg-gray-100 relative w-full h-[500px] md:h-[600px] flex justify-center items-center">
//       <Helmet>
//         <title>Temple | Welcome</title>
//         <meta
//           name="description"
//           content="Explore our temple and discover the services we offer, including events, activities, and community engagement."
//         />
//         <meta
//           name="keywords"
//           content="temple, community, services, events, activities, spirituality"
//         />
//       </Helmet>
//       <div
//         className="w-[95%] max-w-9xl h-full bg-cover bg-center" loading="lazy" 
//         style={{ backgroundImage: "url('./images/img-a.jpg')" }}
//       >
//         <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-5 text-center">
//           <h1 className="text-4xl md:text-6xl font-normal mb-2"></h1>
//           <p className="text-sm md:text-base mb-4">
      
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const images = [
  "./images/img-a.jpg",
  "./images/img-drone.jpg",
  "./images/img-c.jpg",
  "./images/img-inside.jpg",
  "./images/img-ouside.jpg"
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // change image every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="bg-gray-100 relative w-full h-[500px] md:h-[600px] flex justify-center items-center overflow-hidden">
      <Helmet>
        <title>Temple | Welcome</title>
        <meta
          name="description"
          content="Explore our temple and discover the services we offer, including events, activities, and community engagement."
        />
        <meta
          name="keywords"
          content="temple, community, services, events, activities, spirituality"
        />
      </Helmet>

      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />

      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-5 text-center">
        <h1 className="text-4xl md:text-6xl font-normal mb-2">
          Welcome to Our Temple
        </h1>
        <p className="text-sm md:text-base mb-4">
          Experience the divine and explore our community services.
        </p>
      </div>
    </div>
  );
};

export default Header;





