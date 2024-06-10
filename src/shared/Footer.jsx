import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";


export default function Footer() {
  return (
    <div className="bg-[#010851] mx-auto md:px-14 p-4 max-w-screen-2xl text-white">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8 ">
          <div className="text-primary font-semibold text-md flex items-center space-x-3">
            <span className="bg-secondary py-1 px-2">LOGO</span>
            <span className="text-white">XYZ</span>
          </div>
          <p className="md:w-1/2">Lorem ipsum dolor sit amet.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, fuga!</p>
        <div className="">
            <input type="email" name="email" placeholder="your email" className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none" />
            <input type="submit"value="Subscribe" className="px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all" />
        </div>
        </div>

        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
            <div className="space-y-4 mt-5">
                <h4 className="text-xl font-semibold">Platform</h4>
                <ul className="space-y-3">
                    <a href="/" className="block hover:text-gray-300">Overview</a>
                    <a href="/" className="block hover:text-gray-300">Feature</a>
                    <a href="/" className="block hover:text-gray-300">About</a>
                    <a href="/" className="block hover:text-gray-300">Pricing</a>
                </ul>
            </div>
            <div className="space-y-4 mt-5">
                <h4 className="text-xl font-semibold">Help</h4>
                <ul className="space-y-3">
                    <a href="/" className="block hover:text-gray-300">How does it work?</a>
                    <a href="/" className="block hover:text-gray-300">Where to ask question?</a>
                    <a href="/" className="block hover:text-gray-300">How to play?</a>
                    <a href="/" className="block hover:text-gray-300">What is needed for this?</a>
                </ul>
            </div>
            <div className="space-y-4 mt-5">
                <h4 className="text-xl font-semibold">Contacts</h4>
                <ul className="space-y-3">
                    <p className="block hover:text-gray-300">021-912123</p>
                    <p className="block hover:text-gray-300">123 xyz xyz</p>
                    <p className="block hover:text-gray-300">adress123 street123</p>
                </ul>
            </div>
        </div>
      </div>
      <hr />
        <div className="flex flex-col sm:flex-row justify-between my-8 sm:items-center space-y-4"> 
            <p className="text-tertiary">@All Rights Reserved XYZ 20XX</p>
            <div className="flex space-x-5 ">
            <FaFacebookSquare className="h-6 w-6 hover:-translate-y-4 transition-all duration-300 cursor-pointer"/>
            <FaInstagram className="h-6 w-6 hover:-translate-y-4 transition-all duration-300 cursor-pointer"/>
            <LuTwitter  className="h-6 w-6 hover:-translate-y-4 transition-all duration-300 cursor-pointer"/>
            <CiLinkedin  className="h-6 w-6 hover:-translate-y-4 transition-all duration-300 cursor-pointer"/>
            </div>          
        </div>
    </div>
  );
}
