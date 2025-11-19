// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";

// const Compassion = () => {
//   const containerVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const imageVariant = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Compassion | Your Business</title>
//         <meta
//           name="description"
//           content="Explore the concept of compassion and its importance in personal and social contexts."
//         />
//         <meta
//           name="keywords"
//           content="Compassion, Emotional Response, Self-Improvement, Personal Growth"
//         />
//       </Helmet>
//       <motion.div
//         className="max-w-screen-xl mx-auto p-5 text-center mt-16 bg-gray-100"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariant}
//       >
//         <p className="mb-4 text-base md:text-lg">Exploring the depths of our spiritual journey.</p>

//         <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#9f572a]">
//           The Essence of Compassion in Temples
       
//         </h2>

//         <p className="mb-8 text-sm md:text-base">
//         ಪೂಜ್ಯಾಯ ರಾಘವೇಂದ್ರಾಯ ಸತ್ಯಧರ್ಮರಥಾಯ ಚ 
//         ಭಜತಾಂ ಕಲ್ಪವೃಕ್ಷಾಯ ನಮತಾಂ ಕಾಮಧೇನುವೇ ||
        
//         </p>
//         <p className="mb-8 text-sm md:text-base">

//         Sri Raghavendra Swamy (Rayaru)—every stone and chant resonates with divine compassion. Here, the idol of Rayaru stands not just as a teacher, but as the very embodiment of mercy, guiding devotees toward selfless service (seva) and unwavering faith (shraddha).
//         </p>

//         <p className="mb-8 text-sm md:text-base">
//         Within the temple’s sanctum, we feel an all‑encompassing love that flows from Rayaru’s Brindavana. His teachings remind us that true spirituality is lived through kindness: feeding pilgrims, offering solace to the suffering, and serving our community with humility. Each lamp lit in his honor signifies a vow to extend his compassion beyond these walls.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//           <motion.div
//             className="flex items-center justify-center bg-white rounded shadow h-64"
//             variants={imageVariant}
//             whileHover={{ scale: 1.05 }} 
//           >
//             <motion.img
//               src="./images/images-heavy.jpg" loading="lazy" 
//               alt="Compassion"
//               className="w-full h-full object-cover rounded"
//             />
//           </motion.div>

//           <motion.div
//             className="flex flex-col items-center bg-white p-5 rounded shadow"
//             variants={containerVariant}
//             whileHover={{ scale: 1.05 }} 
//           >
//             <img
//               src="./images/compassion-img-1.png" loading="lazy" 
//               alt="Your Description"
//               className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-4"
//             />
//             <p className="text-sm md:text-base">Caring for the community.</p>
//             <h3 className="text-lg font-semibold mb-2 text-[#9f572a]">
//               Acts of Kindness
//             </h3>
//             <p className="text-sm md:text-base text-center">
//               Engaging in acts of kindness reflects our inner compassion, guiding us to help others and foster community spirit.
//             </p>
//           </motion.div>

//           <motion.div
//             className="flex items-center justify-center bg-white rounded shadow h-64"
//             variants={imageVariant}
//             whileHover={{ scale: 1.05 }} 
//           >
//             <motion.img
//               src="./images/img-inside.jpg" loading="lazy" 
//               alt="Compassion"
//               className="w-full h-full object-cover rounded"
//             />
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <motion.div
//             className="flex flex-col items-center bg-white p-5 rounded shadow"
//             variants={containerVariant}
//             whileHover={{ scale: 1.05 }} 
//           >
//             <img
//               src="./images/compassion-img-1.png" loading="lazy" 
//               alt="Your Description"
//               className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-4"
//             />
//             <p className="text-sm md:text-base">Unity in Diversity.</p>
//             <h3 className="text-lg font-semibold mb-2 text-[#9f572a]">
//               Embracing All Faiths
//             </h3>
//             <p className="text-sm md:text-base text-center">
//               Compassion transcends all religions, inviting us to embrace every individual as a reflection of the divine.
//             </p>
//           </motion.div>

//           <motion.div
//             className="flex items-center justify-center bg-white rounded shadow h-64"
//             variants={imageVariant}
//             whileHover={{ scale: 1.05 }} 
//           >
//             <motion.img
//               src="./images/img-ouside.jpg" loading="lazy" 
//               alt="Compassion"
//               className="w-full h-full object-cover rounded"
//             />
//           </motion.div>

//           <motion.div
//             className="flex flex-col items-center bg-white p-5 rounded shadow"
//             variants={containerVariant}
//             whileHover={{ scale: 1.05 }} 
//           >
//             <img
//               src="./images/compassion-img-1.png" loading="lazy" 
//               alt="Your Description"
//               className="w-12 h-12 md:w-16 md:h-16 mb-2 mt-4"
//             />
//             <p className="text-sm md:text-base">A Spiritual Journey.</p>
//             <h3 className="text-lg font-semibold mb-2 text-[#9f572a]">
//               Seeking the Divine
//             </h3>
//             <p className="text-sm md:text-base text-center">
//               Our spiritual growth is nourished by acts of compassion, allowing us to connect more deeply with ourselves and the divine.
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </>
//   );
// };



// export default Compassion;
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Compassion = () => {
  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Helmet>
        <title>Compassion | Mantralayam Temple</title>
        <meta
          name="description"
          content="Explore the concept of compassion and its importance in personal and spiritual contexts."
        />
        <meta
          name="keywords"
          content="Compassion, Spiritual Values, Sri Raghavendra Swamy, Bhakti, Seva"
        />
      </Helmet>

      <motion.div
        className="max-w-screen-xl mx-auto px-6 py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 rounded-lg shadow-xl"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <p className="mb-4 text-lg text-gray-700">Exploring the depths of our spiritual journey.</p>

        <h2 className="text-4xl font-bold mb-4 text-[#9f572a]">
          The Essence of Compassion in Temples
        </h2>

        <p className="mb-6 text-xl font-medium text-gray-600 italic">
          ಪೂಜ್ಯಾಯ ರಾಘವೇಂದ್ರಾಯ ಸತ್ಯಧರ್ಮರಥಾಯ ಚ <br /> ಭಜತಾಂ ಕಲ್ಪವೃಕ್ಷಾಯ ನಮತಾಂ ಕಾಮಧೇನುವೇ ||
        </p>

        <p className="mb-4 text-gray-800 leading-relaxed">
          At Mantralayam, every stone and chant resonates with divine compassion. Sri Raghavendra Swamy (Rayaru) stands not just as a teacher, but as the embodiment of mercy, guiding us toward selfless service (seva) and unwavering faith (shraddha).
        </p>

        <p className="mb-8 text-gray-800 leading-relaxed">
          Within the temple’s sanctum, we feel an all‑encompassing love that flows from Rayaru’s Brindavana. His teachings remind us that true spirituality is lived through kindness: feeding pilgrims, offering solace to the suffering, and serving our community with humility. Each lamp lit in his honor signifies a vow to extend his compassion beyond these walls.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg bg-white"
            variants={imageVariant}
            whileHover={{ scale: 1.05 }}
          >
            <img src="./images/images-heavy.jpg" alt="Compassion" className="w-full h-64 object-cover" loading="lazy" />
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg"
            variants={containerVariant}
            whileHover={{ scale: 1.05 }}
          >
            <img src="./images/compassion-img-1.png" className="w-16 h-16 mb-4" alt="Icon" loading="lazy" />
            <h3 className="text-xl font-semibold text-[#9f572a] mb-2">Acts of Kindness</h3>
            <p className="text-gray-700">Caring for the community reflects our inner compassion, helping build a better society.</p>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg bg-white"
            variants={imageVariant}
            whileHover={{ scale: 1.05 }}
          >
            <img src="./images/img-inside.jpg" alt="Compassion" className="w-full h-64 object-cover" loading="lazy" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg"
            variants={containerVariant}
            whileHover={{ scale: 1.05 }}
          >
            <img src="./images/compassion-img-1.png" className="w-16 h-16 mb-4" alt="Icon" loading="lazy" />
            <h3 className="text-xl font-semibold text-[#9f572a] mb-2">Embracing All Faiths</h3>
            <p className="text-gray-700">Compassion transcends all religions, reminding us that every soul is sacred.</p>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-lg bg-white"
            variants={imageVariant}
            whileHover={{ scale: 1.05 }}
          >
            <img src="./images/img-ouside.jpg" alt="Compassion" className="w-full h-64 object-cover" loading="lazy" />
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg"
            variants={containerVariant}
            whileHover={{ scale: 1.05 }}
          >
            <img src="./images/compassion-img-1.png" className="w-16 h-16 mb-4" alt="Icon" loading="lazy" />
            <h3 className="text-xl font-semibold text-[#9f572a] mb-2">Seeking the Divine</h3>
            <p className="text-gray-700">Acts of compassion enrich our spiritual path and bring us closer to the divine light.</p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Compassion;

