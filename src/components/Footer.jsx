import { FaInstagram, FaFacebook, FaBandcamp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blanky-yellow text-blanky-grey pt-6 sm:pt-8 md:pt-10 px-3 sm:px-5 pb-2 opacity-100 relative w-full font-custom2">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        {/* Email on the left */}
        <a
          href="mailto:Blanky.band@gmail.com"
          className="text-blanky-grey text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition-all duration-1500 hover:text-blanky-red hover:underline cursor-pointer text-center sm:text-left"
        >
          Blanky.band@gmail.com
        </a>

        {/* Social icons on the right */}
        <div className="flex gap-3 sm:gap-4 md:gap-7">
          <a
            href="https://blanky.bandcamp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blanky-grey text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-1500 hover:text-blanky-red"
          >
            <FaBandcamp />
          </a>
          <a
            href="https://www.instagram.com/blanky.band?igsh=MWc0eTVmbng4YjBhdw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-blanky-grey text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-1500 hover:text-blanky-red"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/Blanky.band/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blanky-grey text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-1500 hover:text-blanky-red"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
