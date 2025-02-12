import { FaFacebook, FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";

const FollowMe = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Follow Me</h2>
        <p className="mb-6 dark:text-gray-300">Stay connected with my work and updates!</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/ebrahim-worke-01b979303?otpToken=MTMwNjFlZTExMTJlY2FjNmIxMmIwZmViNDExZGVmYmQ4N2M4ZDY0OTkwYWY4NjZiN2JjZjA4NmQ0ZTVlNTVmYmZlZDJkMmU5N2FjMmM4ZjA0NjhkZmVjMjEzZDdhNjg0NjQ2ODlmN2ZmZjNjMWQyNjE3ODRiZmY4LDEsMQ%3D%3D&midSig=3iYvWUFY17fXE1&eid=lirg0n-m6vnq2pt-de&midToken=AQEmusnkSyzLWg&trkEmail=eml-email_pymk_02-header-0-profile_glimmer-null-lirg0n~m6vnq2pt~de-null-null&lipi=urn%3Ali%3Apage%3Aemail_email_pymk_02%3B8qAAX5DITHyVrHnmP3uv0w%3D%3D&trk=eml-email_pymk_02-header-0-profile_glimmer&originalSubdomain=et"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white p-4 rounded-full hover:bg-blue-800 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100032032441480"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/ebrahimwo?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://t.me/ebro_graphics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-400 text-white p-4 rounded-full hover:bg-blue-500 transition"
          >
            <FaTelegram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FollowMe;