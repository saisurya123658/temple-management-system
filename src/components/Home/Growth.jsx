// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet"; 

// const Growth = () => {
  
//   const containerVariant = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   const imageVariant = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
//   };

//   const textVariant = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Growth| Sri Raghvendra Swami MUtt,Mantralayam</title>
//         <meta
//           name="description"
//           content="Explore the spiritual significance of Datta Mandir in Bijalpur and the divine presence of Lord Dattatreya."
//         />
//         <meta name="keywords" content="Datta Mandir, Bijalpur, Lord Dattatreya, Temple, Spirituality" />
//       </Helmet>

//       <motion.div
//         className="flex flex-col md:flex-row max-w-screen-xl mx-auto p-5 gap-8 bg-white mt-16"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariant}
//       >
//         <motion.div
//           className="flex items-center justify-center w-full md:w-1/2"
//           variants={imageVariant}
//           whileHover={{ scale: 1.05 }} 
//         >
//           <motion.img
//             src="./images/img-homes.jpg" loading="lazy" 
//             alt="Growth"
//             className="w-full h-[400px] md:h-[500px] object-cover rounded" 
//           />
//         </motion.div>

//         <motion.div
//           className="flex flex-col items-start w-full md:w-1/2 mt-8 md:mt-0"
//           variants={textVariant}
//         >
//           <p className="mb-4 text-base md:text-lg">Welcome to Sri Raghavendra Swami Mutt, a sacred place of worship.</p>
//           <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#9f572a]">
//             Discover the Divine Presence of Sri Rayaru 
//           </h2>

//           <p className="mb-4 text-sm md:text-base">
//           Mantralayam Temple—the sacred Sri Raghavendra Swamy Mutt—is a spiritual sanctuary perched on the banks of the Tungabhadra River in Andhra Pradesh. Dedicated to the great 17th‑century Madhwa saint Sri Raghavendra Swamy, who entered samādhi here, the temple draws devotees seeking solace, guidance, and divine grace. Pilgrims from across India come to circumambulate the Brindāvana (samādhi monument), offer chandan (sandalwood paste) and tulasi leaves, and chant the Raghavendra Stotra, believing the saint’s blessings help overcome life’s challenges.
//           </p>

//           <p className="mb-4 text-sm md:text-base">
//  Mantralayam Temple’s architecture is a harmonious blend of traditional Dravidian design and the practical needs of a riverside monastic complex. Though relatively simple compared to grand South Indian gopuram‑temples, its layout and detailing are perfectly suited to honor the Brindāvana (samādhi) of Sri Raghavendra Swamy while accommodating thousands of daily pilgrims.
//           </p>

//           <div className="flex items-start mb-4">
//             <motion.img
//               src="./images/compassion-img-1.png" loading="lazy" 
//               alt="Phone Icon"
//               className="w-12 h-12 md:w-16 md:h-16 mr-4"
//               whileHover={{ scale: 1.1 }} 
//             />
//             <div className="flex flex-col">
//               <h3 className="text-lg font-semibold text-[#9f572a]">
//                 Contact Us
//               </h3>
//               <p className="mt-1 text-sm md:text-base">
//                 Feel free to reach out for more information or assistance regarding temple activities.
//               </p>
//             </div>
//           </div>

//           <motion.button
//             className="bg-[#ca8a04] text-white py-2 px-4 rounded mt-4"
//             whileHover={{ scale: 1.05 }} 
//             whileTap={{ scale: 0.95 }} 
//           >
//      <a href="#contact">
//     Learn More
//   </a>
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// export default Growth;
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeLeftVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const zoomVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const buttonGlow = {
  initial: { boxShadow: "0 0 0px rgba(0,0,0,0)" },
  animate: {
    boxShadow: [
      "0 0 0px rgba(202, 138, 4, 0)",
      "0 0 10px rgba(202, 138, 4, 0.5)",
      "0 0 20px rgba(202, 138, 4, 0.7)",
    ],
    transition: { duration: 2, repeat: Infinity, repeatType: "mirror" },
  },
};

const Growth = () => {
  return (
    <>
      <Helmet>
        <title>Growth | Sri Raghavendra Swami Mutt, Mantralayam</title>
        <meta
          name="description"
          content="Explore the spiritual significance of Datta Mandir in Bijalpur and the divine presence of Lord Dattatreya."
        />
        <meta name="keywords" content="Datta Mandir, Bijalpur, Lord Dattatreya, Temple, Spirituality" />
      </Helmet>

      <motion.div
        className="flex flex-col md:flex-row max-w-screen-xl mx-auto p-5 gap-8 mt-16 rounded-3xl bg-gradient-to-br from-yellow-50 via-white to-orange-100 shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.div
          className="flex items-center justify-center w-full md:w-1/2"
          variants={zoomVariant}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src="./images/img-homes.jpg"
            loading="lazy"
            alt="Growth"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-md"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-start w-full md:w-1/2 mt-8 md:mt-0"
          variants={fadeLeftVariant}
        >
          <motion.p className="mb-4 text-base md:text-lg text-gray-700" variants={fadeUpVariant}>
            Welcome to Sri Raghavendra Swami Mutt, a sacred place of worship.
          </motion.p>

          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-4 text-[#9f572a]"
            variants={fadeUpVariant}
          >
            Discover the Divine Presence of Sri Rayaru
          </motion.h2>

          <motion.p className="mb-4 text-sm md:text-base text-gray-600" variants={fadeUpVariant}>
            Mantralayam Temple—the sacred Sri Raghavendra Swamy Mutt—is a spiritual sanctuary
            perched on the banks of the Tungabhadra River. Pilgrims from across India come
            to offer prayers, chant the Raghavendra Stotra, and seek divine blessings.
          </motion.p>

          <motion.p className="mb-4 text-sm md:text-base text-gray-600" variants={fadeUpVariant}>
            The temple’s architecture blends traditional Dravidian design with the serenity
            of a riverside monastery, honoring Sri Raghavendra Swamy’s Brindāvana while
            accommodating thousands of daily visitors.
          </motion.p>

          <motion.div className="flex items-start mb-4" variants={fadeUpVariant}>
            <motion.img
              src="./images/compassion-img-1.png"
              loading="lazy"
              alt="Contact Icon"
              className="w-12 h-12 md:w-16 md:h-16 mr-4"
              whileHover={{ scale: 1.1 }}
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-[#9f572a]">Contact Us</h3>
              <p className="mt-1 text-sm md:text-base text-gray-700">
                Reach out for details about events, bookings, and darshan timings.
              </p>
            </div>
          </motion.div>

          <motion.button
            className="bg-[#ca8a04] text-white py-2 px-6 rounded-lg mt-4 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={buttonGlow}
            initial="initial"
            animate="animate"
          >
            <a href="#contact">Learn More</a>
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Growth;

