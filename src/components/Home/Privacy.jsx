import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 bg-white rounded-xl shadow-md mt-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      
      <p className="mb-4">
        This Privacy Policy describes how we collect, use, and protect the information you provide when using the Mantralayam Temple website. By accessing or using our website, you agree to the terms outlined in this policy.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Seva Booking Details:</strong> When you book a seva, we collect personal information such as your name, contact number, email address, and seva preferences.</li>
        <li><strong>Device & Usage Data:</strong> We may collect data about your browser, IP address, and how you interact with the website to improve performance and user experience.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To confirm seva bookings and send confirmation messages.</li>
        <li>To manage seva schedules and display booking status on the admin dashboard.</li>
        <li>To respond to your inquiries and offer better support.</li>
        <li>To enhance website functionality and user experience.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We implement appropriate security measures to safeguard your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">4. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell or share your personal information with third parties for marketing purposes. Your details are strictly used for the functioning of temple-related services.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">5. Cookies</h2>
      <p className="mb-4">
        We may use cookies to improve user experience. You can disable cookies through your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy from time to time. Please check this page periodically to stay informed of any changes.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at <strong>support@mantralayamtemple.org</strong> or reach out via the official temple help desk.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
