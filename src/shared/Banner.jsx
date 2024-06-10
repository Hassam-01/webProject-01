import {motion} from "framer-motion";
import {fadeIn} from "../variants";

export default function Banner({banner, heading, subHeading, btn1, btn2}) {
  return (
    <div>
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28">
        <div className=" gradientBG rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 ">
          <div className="flex flex-col justify-between items-center gap-10 md:flex-row-reverse">
          <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView ={"show"}
          viewport={{once:false, amount:0.7}}
          >
            <img src="" alt="" />
            {banner}
          </motion.div>
          <motion.div className="space-y-2 md:w-3/5"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView ={"show"}
            viewport={{once:false, amount:0.7}}>
            <div className="text-white">
              <h2 className="md:text-7xl font-bold text-4xl mb-6 leading-relaxed">
                {heading}
              </h2>
              <p className="text-2xl text-[#EBEBEB] mb-8">
               {subHeading}
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="btnprimary ">
                {btn1}
              </button>
              <button className={`btnprimary ${btn2 === "" ?" hidden": ""}`}>
                {btn2}
              </button>
            </div>
          </motion.div>
        </div>
          </div>
      </div>

    </div>
  )
}
