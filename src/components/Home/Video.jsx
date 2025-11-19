
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import { useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: "smooth", block: "center" });
      videoElement.play();
    }
  };

  return (
    <motion.div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-yellow-100 via-orange-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>SRI RAGAVENDRA SWAMI MUTT, MANTRALAYAM | Video Tutorial</title>
        <meta
          name="description"
          content="Discover the sacred Datta Mandir in Bijalpur, Indore, dedicated to Lord Dattatreya. Learn about its significance and spiritual ambiance."
        />
        <meta
          name="keywords"
          content="Datta Mandir, Bijalpur, Indore, Lord Dattatreya, spiritual teachings, pilgrimage"
        />
      </Helmet>

      {/* Glowing animated background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 174, 0, 0.05), transparent 70%)",
          backgroundSize: "200% 200%",
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col md:flex-row px-4 md:px-8 py-16">
        {/* Text Content */}
        <motion.div
          className="flex-1 p-4 md:p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#9f572a] mb-4 leading-tight">
            SRI RAGHAVENDRA SWAMI MUTT - MANTRALAYAM
          </h1>
          <p className="text-md md:text-lg mt-4 text-gray-700 leading-relaxed">
            The Mantralayam Temple is a revered spiritual destination dedicated to Sri Raghavendra Swamy. This sacred mutt is the final resting place of the saint, believed to continue blessing devotees in his subtle form.
          </p>
          <p className="text-md md:text-lg mt-2 text-gray-700 leading-relaxed">
            Devotees come seeking blessings, peace, and divine grace. The peaceful ambiance and traditional rituals elevate the spiritual experience.
          </p>
          <p className="text-md md:text-lg mt-2 text-gray-700 leading-relaxed">
            A visit to Mantralayam is a connection to devotion, dharma, and inner peace – embracing the essence of Sanatana Dharma.
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={handlePlayVideo}
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-[#9f572a] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#7a3f1d] transition"
          >
            📺 Watch the Spiritual Video Below
          </motion.button>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="flex-1 relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-8 md:mt-0"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div style={{ paddingBottom: "56.25%" }} className="relative w-full h-full rounded-lg shadow-xl">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full rounded-lg border-4 border-[#9f572a]"
              controls
              src="./videos/last.mp4"
              title="Discovering Datta Mandir Bijalpur, Indore"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Video;
