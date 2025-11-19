// import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
// import { Helmet } from "react-helmet";
// const Footer = () => {
//   return (
//     <div className="bg-[#451a03] text-white py-8 mt-4">
//      <Helmet>
//         <title>Sri Raghavendra Swami Mutt ,Mantralayam| Footer</title>
//         <meta
//           name="description"
//           content="Stay connected with Datta Mandir Bijalpur, Indore for spiritual blessings."
//         />
//         <meta
//           name="keywords"
//           content="Datta Mandir, Bijalpur, Indore, footer, contact details, social media"
//         />
//       </Helmet>
//       <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between px-4">
//         <div className="flex flex-col items-center mb-6 md:mb-0">
//           <h4 className="text-lg font-semibold mb-1 mt-4">About Sri Raghavedra Swami mutt</h4>
//           <p className="text-center mb-2 px-4">
//           A serene temple dedicated  <br />
//           to Lord Sri Raghavendra Swami
//             <br />
//           Reach out us
//           </p>
//           <div className="flex space-x-4">
//             <a
//               href="https://www.facebook.com/share/1AP7dSKzef/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaFacebookF className="text-xl hover:text-[#ca8a04] transition duration-300" />
//             </a>
//             <a
//               href="https://wa.me/yourwhatsappnumber"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaWhatsapp className="text-xl hover:text-[#ca8a04] transition duration-300" />
//             </a>
//             <a
//               href="https://www.instagram.com/mantralaya_rayaru?igsh=MWt5eDFqcHVrZHIyNA=="
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaInstagram className="text-xl hover:text-[#ca8a04] transition duration-300" />
//             </a>
          
//           </div>
//         </div>

//         <div className="flex flex-col items-center mb-6 md:mb-0">
//           <img
//             src="./images/logo.png"
//             alt="Logo"
//             className="h-12 mb-2"
//             loading="lazy"
//           />
//           <p className="text-center px-4">
//           Join us for spiritual growth and community
//             <br />
//             at Sri Raghavendra swami mutt. Experience<br />
//             peace and divine blessings
//             <br />in our serene temple.
//           </p>
//         </div>

//         <div className="flex flex-col items-center">
//           <h3 className="text-lg mb-2 mt-4">Contact Us</h3>
//           <a href="mailto:sriraghavendraswami@gmail.com" className="hover:text-[#ca8a04] transition duration-300">
//   <p className="text-center">Email: sriraghavendraswami@gmail.com</p>
// </a>
// <a href="tel: +91 90141 26121" className="hover:text-[#ca8a04] transition duration-300">
//           <p className="text-center">Phone: +91 9985097228</p>
//           </a>
//         </div>
//       </div>

//       <div className="text-center mt-8">
//         <p className="text-sm">
//         &copy; {new Date().getFullYear()} Sri Raghavendra Swami Mutt, Mantralayam. All rights reserved.
          
//           <a href="/terms">
//             <span className="ml-4 cursor-pointer hover:text-[#5ed1c4] transition duration-300">
//               Terms of Service
//             </span>{" "}
//           </a>
//           <a href="/privacy">
//             <span className="ml-4 cursor-pointer hover:text-[#8d794f] transition duration-300">
//               Privacy Policy
//             </span>
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-[#2e0d0d] to-[#4e2606] text-white py-10 mt-10 relative shadow-inner border-t border-[#9f7e45]">
      <Helmet>
        <title>Sri Raghavendra Swami Mutt, Mantralayam | Footer</title>
        <meta
          name="description"
          content="Stay connected with Sri Raghavendra Swami Mutt, Mantralayam for spiritual blessings and updates."
        />
        <meta
          name="keywords"
          content="Sri Raghavendra Swami Mutt, Mantralayam, footer, contact details, social media"
        />
      </Helmet>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
        {/* About */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-[#fcd34d]">About the Mutt</h4>
          <p className="text-sm leading-relaxed text-[#f9fafb]">
            A serene and sacred temple dedicated to Lord Sri Raghavendra Swami.
            <br />
            Connect with us for blessings and spiritual peace.
          </p>
          <div className="flex justify-center md:justify-start gap-5 pt-2">
            <a
              href="https://www.facebook.com/share/1AP7dSKzef/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 text-[#fcd34d]"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 text-[#fcd34d]"
            >
              <FaWhatsapp size={22} />
            </a>
            <a
              href="https://www.instagram.com/mantralaya_rayaru?igsh=MWt5eDFqcHVrZHIyNA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 text-[#fcd34d]"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src="./images/logo.png"
            alt="Mutt Logo"
            className="h-16 drop-shadow-lg"
            loading="lazy"
          />
          <p className="text-sm text-[#f3f4f6] leading-relaxed">
            Join us for divine experiences, spiritual growth, and peaceful moments at the holy Sri Raghavendra Swami Mutt.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl text-[#fcd34d]">Contact Us</h3>
          <p>
            <a
              href="mailto:sriraghavendraswami@gmail.com"
              className="hover:text-[#facc15] transition-colors duration-300"
            >
              Email: sriraghavendraswami@gmail.com
            </a>
          </p>
          <p>
            <a
              href="tel:+919985097228"
              className="hover:text-[#facc15] transition-colors duration-300"
            >
              Phone: +91 99850 97228
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#9f7e45] pt-4 text-center text-sm text-[#f3f4f6]">
        &copy; {new Date().getFullYear()} Sri Raghavendra Swami Mutt, Mantralayam. All rights reserved.

        <div className="mt-2">
          <a
            href="/terms"
            className="hover:text-[#5ed1c4] transition-colors duration-300 mx-2"
          >
            Terms of Service
          </a>
          |
          <a
            href="/privacy"
            className="hover:text-[#8d794f] transition-colors duration-300 mx-2"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
