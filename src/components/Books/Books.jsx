import { Link } from "react-router-dom";
import { bookData } from "../../Constants/bookData";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Books = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Helmet>
        <title>Seva Booking</title>
        <meta
          name="description"
          content="Book divine sevas like Ksheerabhishekam, Archana, and more at Mantralayam."
        />
      </Helmet>

      {/* Particles Animated Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="fixed top-0 left-0 w-full h-full z-0"
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: "#1e1b18" }, // Dark earthy tone
          },
          particles: {
            number: { value: 40 },
            color: { value: "#facc15" }, // golden yellow
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 0.8,
              outModes: { default: "bounce" },
            },
          },
        }}
      />

      {/* Gradient Glow Background */}
      <div className="relative z-10 min-h-screen px-4 sm:px-10 py-20 bg-gradient-to-br from-[#331f0c] via-[#1c0e07] to-[#4b2e20]">
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-yellow-300 mb-12 drop-shadow">
          🕉️ Seva Collection
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {bookData.map((book, index) => (
            <motion.div
              key={book.id}
              className="cursor-pointer text-center bg-white/90 backdrop-blur-md rounded-xl shadow-2xl p-4 hover:shadow-yellow-300 transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link to={book.link} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={book.image}
                  alt={book.title}
                  className="w-40 h-56 object-cover rounded-md shadow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  {book.title}
                </h3>
                {book.description && (
                  <p className="text-sm text-gray-600">{book.description}</p>
                )}
                {book.cost && (
                  <p className="text-sm text-green-700 font-medium">{book.cost}</p>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;
