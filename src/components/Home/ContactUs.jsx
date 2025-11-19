// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet";
// const ContactUs = () => {
//   const containerVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const imageVariant = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.6, delay: 0.3 },
//     },
//   };

//   const formVariant = {
//     hidden: { opacity: 0, x: 20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.5 } },
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Contact Us | Your Business</title>
//         <meta
//           name="description"
//           content="Get in touch with us for inquiries, support, or feedback. We are here to help you."
//         />
//         <meta
//           name="keywords"
//           content="Contact, Support, Inquiry, Customer Service"
//         />
//       </Helmet>
//       <motion.div
//         className="max-w-screen-xl mx-auto p-5 flex flex-col md:flex-row mt-16 bg-gray-100"
//         initial="hidden"
//         animate="visible"
//         variants={containerVariant}
//       >
//         <motion.div
//           className="flex-1 flex items-center justify-center mb-5 md:mb-0"
//           variants={imageVariant}
//         >
//           <img
//             src="./images/img-subu.jpg"
//             loading="lazy"
//             alt="Contact Us"
//             className="w-full h-full object-cover rounded shadow"
//           />
//         </motion.div>

//         <motion.div
//           className="flex-1 flex justify-center items-center bg-white rounded shadow"
//           variants={formVariant}
//         >
//           <div className="w-full max-w-lg p-5">
//             <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center mt-4 text-[#9f572a]">
//               Reach Out and Connect
//             </h2>
//             <p className="mb-4 text-center text-sm md:text-base">
//               We would love to hear from you!
//             </p>

//             <div className="flex flex-col md:flex-row justify-between mb-4 mt-4">
//               <div className="flex flex-col items-center mb-4 md:mb-0">
//                 <h3 className="text-lg font-semibold">Address</h3>
//                 <a href="https://maps.app.goo.gl/RhYksPFgW17iu51T8">
//                   <p className="text-center text-sm md:text-base hover:underline hover:underline-[#9f572a] hover:text-[#9f572a] transition-colors duration-200">
//                     Mantralayam,
//                     Andhra Pradesh 
//                   </p>
//                 </a>
//               </div>&nbsp;&nbsp;
//               <div className="flex flex-col items-center mb-4 md:mb-0">
//                 <h3 className="text-lg font-semibold">Email</h3>
//                 <a href="mailto:info@epoojastore.com">
//   <p className="text-center text-sm md:text-base hover:underline hover:underline-[#9f572a] hover:text-[#9f572a] transition-colors duration-200">
//     sriraghavendraswami@gmail.com
//   </p>
// </a>

//               </div>
//               <div className="flex flex-col items-center">
//                 <h3 className="text-lg font-semibold">Book</h3>
//                 <a href="tel:+91 84669 32224">
//                 <p className="text-center text-sm md:text-base hover:underline hover:underline-[#9f572a] hover:text-[#9f572a] transition-colors duration-200">+91 84669 32224</p>
//                 </a>
//               </div>
//             </div>

//             <form className="flex flex-col mt-4">
//               <div className="flex flex-col md:flex-row justify-between mb-4">
//                 <div className="flex-1 mb-4 md:mb-0 md:mr-2">
//                   <label className="mb-2 block" htmlFor="first-name">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     id="first-name"
//                     placeholder="Your First Name"
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </div>
//                 <div className="flex-1 md:ml-2">
//                   <label className="mb-2 block" htmlFor="last-name">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     id="last-name"
//                     placeholder="Your Last Name"
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </div>
//               </div>

//               <label className="mb-2 block" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Your Email"
//                 className="mb-4 p-2 border border-gray-300 rounded"
//               />

//               <label className="mb-2 block" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 placeholder="Your Message"
//                 rows="4"
//                 className="mb-4 p-2 border border-gray-300 rounded"
//               ></textarea>

//               <motion.button
//                 className="bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Send
//               </motion.button>
//             </form>
//           </div>
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// export default ContactUs;
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  const formVariant = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.5 } },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Your Business</title>
        <meta
          name="description"
          content="Get in touch with us for inquiries, support, or feedback. We are here to help you."
        />
        <meta
          name="keywords"
          content="Contact, Support, Inquiry, Customer Service"
        />
      </Helmet>
      <motion.div
        className="max-w-screen-xl mx-auto p-5 flex flex-col md:flex-row mt-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 rounded-xl shadow-xl"
        initial="hidden"
        animate="visible"
        variants={containerVariant}
      >
        <motion.div
          className="flex-1 flex items-center justify-center mb-5 md:mb-0 p-4"
          variants={imageVariant}
        >
          <img
            src="./images/img-subu.jpg"
            loading="lazy"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center bg-white rounded-xl shadow-md"
          variants={formVariant}
        >
          <div className="w-full max-w-lg p-6">
            <h2 className="text-3xl font-extrabold text-center text-[#9f572a] mb-2">
              Reach Out and Connect
            </h2>
            <p className="text-center text-gray-600 mb-6">
              We would love to hear from you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Address</h3>
                <a href="https://maps.app.goo.gl/RhYksPFgW17iu51T8">
                  <p className="text-sm text-gray-500 hover:text-[#9f572a] transition">
                    Mantralayam, Andhra Pradesh
                  </p>
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
                <a href="mailto:sriraghavendraswami@gmail.com">
                  <p className="text-sm text-gray-500 hover:text-[#9f572a] transition">
                    sriraghavendraswami@gmail.com
                  </p>
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Call</h3>
                <a href="tel:+91 84669 32224">
                  <p className="text-sm text-gray-500 hover:text-[#9f572a] transition">
                    +91 84669 32224
                  </p>
                </a>
              </div>
            </div>

            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label htmlFor="first-name" className="block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Your First Name"
                    className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="last-name" className="block text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Your Last Name"
                    className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                  className="mt-1 w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#9f572a] text-white py-2 px-4 rounded shadow hover:bg-[#b06b3a] transition duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactUs;