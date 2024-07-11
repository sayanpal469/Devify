import facebook from "../assets/footer/facebook.png"
import twitter from "../assets/footer/twitter.png"
import linkedin from "../assets/footer/linkedin.png"
import logo from "../assets/Logo.png"
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-[100%] h-[100%] bg-[#1E1E1E] flex flex-col px-4 md:px-28 gap-6 py-4">

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 justify-center">
        <div className="flex flex-row gap-2 items-center">
        <a href="#">
                <img src={logo} alt="Logo" className="w-12"/>
            </a>
            <h1 className="text-white font-semibold text-2xl">Devify</h1>
        </div>
        <div className="flex ">
            <ul className="flex flex-row gap-4 text-white flex-wrap items-center justify-center">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Process</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
            </ul>
        </div>
        <div className="flex flex-row text-white gap-2 items-center justify-center">
            <h1>Stay Connected</h1>
            <a href="#">
                <img src={facebook} alt="facebook" className="w-12"/>
            </a>
            <a href="#">
                <img src={twitter} alt="twitter" className="w-12"/>
            </a>
            <a href="#">
                <img src={linkedin} alt="linkedin" className="w-12"/>
            </a>

        </div>
      </div>

     <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-4">
      <div className="flex flex-col md:flex-row gap-4 text-sm">
       <div className="flex items-center justify-center gap-2">
        <p className="text-[#9EFF00] text-xl"><IoMail/></p>
        <p className="text-white">DeviFy2022@gmail.com</p>
        </div>
        <div className="flex items-center justify-center gap-2">
        <p className="text-[#9EFF00] text-xl"><BsFillTelephoneFill/></p>
        <p className="text-white">+919236547891</p>
        </div>
        <div className="flex items-center justify-center gap-2">
        <p className="text-[#9EFF00] text-xl"><FaLocationDot/></p> 
        <p className="text-white">Kolkata</p>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="text-[#98989A] text-sm">© 2022 Devify. All rights reserved.</p>
      </div>
    </div>

    </div>
  )
}

export default Footer
