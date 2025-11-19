import { Helmet } from 'react-helmet';

const Terms = () => {
  return (
    <div className="mx-auto px-4 py-8 p-6 md:p-10">
      <Helmet>
        <title>Terms</title>
        <meta name="description" content="Terms and conditions of the official website of Sri Raghavendra Swamy Mutt, Mantralayam." />
      </Helmet>

      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-gray-600 mb-4">Last updated: April 18, 2025</p>
      <p className="mb-8">
        Please read these terms and conditions carefully before using the official website of Sri Raghavendra Swamy Mutt, Mantralayam.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Usage Guidelines</h2>
      <p className="mb-4">
        By accessing or using this website, you agree to be bound by the following terms and conditions. These terms are meant to ensure the sanctity, security, and peaceful experience of all visitors.
      </p>

      <ul className="list-disc pl-6 mb-8">
        <li className="mb-3">
          This website is intended for spiritual, devotional, and informational purposes only.
        </li>
        <li className="mb-3">
          You agree not to misuse the content, images, or information available on this website for commercial or non-devotional purposes.
        </li>
        <li className="mb-3">
          The information provided (including darshan timings, sevas, events, and updates) is accurate to the best of our knowledge, but may change based on temple activities or festivals.
        </li>
        <li className="mb-3">
          Users must not post or transmit any content that is disrespectful, defamatory, or offensive toward the temple, the mutt, or its devotees.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
      <p className="mb-8">
        All images, videos, content, and design elements related to Sri Raghavendra Swamy Mutt – Mantralayam available on this website are the intellectual property of the temple or its respective content providers. Unauthorized usage or reproduction is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Spiritual Services</h2>
      <p className="mb-8">
        Any donations, pooja bookings, or seva offerings made through this website are considered as contributions to the temple's spiritual activities. Refunds are not applicable unless a transaction fails due to technical reasons.
      </p>

      <h2 className="text-2xl font-semibold mb-4">External Links</h2>
      <p className="mb-8">
        This website may contain links to trusted third-party portals for donation or booking services. We are not responsible for any loss or misuse occurring on such platforms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Privacy and Respect</h2>
      <p className="mb-8">
        We respect your privacy. Any personal information collected for seva bookings or donations is used only for temple records and will not be shared or misused.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
      <p className="mb-8">
        Sri Raghavendra Swamy Mutt – Mantralayam reserves the right to modify or update these Terms and Conditions at any time. Changes will be posted on this page with an updated date.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p>If you have any questions or need assistance, you may contact us through:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Email: info@srsmatha.org</li>
        <li>Phone: +91-xxx-xxx-xxxx</li>
        <li>Or visit the official website: <a href="https://www.srsmatha.org" target="_blank" className="text-[#ca8a04]">srsmatha.org</a></li>
      </ul>
    </div>
  );
};

export default Terms;
