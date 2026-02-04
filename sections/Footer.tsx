import Image from "next/image"
import { socialImgs } from "../constants"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="flex flex-col justify-center">
            <a href="/">Visit my blog</a>
        </div> */}
        <div className="socials">
            {socialImgs.map((img) => (
                <a key={img.url} href={img.url} target="_blank">
                    <Image src={img.imgPath} alt={img.name} width={24} height={24} />
                </a>
            ))}
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="text-center md:text-end">
                © {new Date().getFullYear()} Oliver Van Droogenbroeck. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer