import { useState } from "react"
// import {green} from "/src/assets/green.png"
import {motion} from "framer-motion";
import {fadeIn} from "../variants";

export default function Pricing() {
    const[isYearly, setIsYearly] = useState(false);
    const packages =[
        {name:"Start", monthlyPrice: 19, yearlyPrice:199, description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, corrupti.",green:"/src/assets/green.png"},
        {name:"Advanced", monthlyPrice: 19, yearlyPrice:199, description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, corrupti.",green:"/src/assets/green.png"},
        {name:"Premium", monthlyPrice: 19, yearlyPrice:199, description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, corrupti.",green:"/src/assets/green.png"},
    ]

  return (
    <motion.div className="mt-16" id="pricing"
    variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView ={"show"}
            viewport={{once:false, amount:0.7}}>
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl text-primary mb-2 font-extrabold">Here are all our plans</h2>
        <p className="text-tertiary md:w-1/3 mx-auto px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, corrupti.</p>
        <div className="mt-16">
            <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                <span className="mr-8 text-2xl font-semibold">Monthly</span>
                <div className={` w-14 h-6 rounded-full transition duration-200 ease-in-out ${isYearly?"bg-secondary": "bg-gray-300"}`}>
                    <div className={`w-6 h-6 rounded-full ${isYearly ? "bg-primary ml-8": "bg-gray-500"} transition duration-200 ease-in-out`}>
                    </div>
                </div>
                <span className="ml-8 text-2xl font-semibold">Yearly</span>
                <input type="checkbox" id="toggle"  className="hidden" checked={isYearly} onChange={() => setIsYearly(!isYearly)}/>
            </label>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-11/12 mx-auto mt-20">
        {
            packages.map((pkg,indx) => 
            <div key={indx} className="border md:px-6 py-10 px-4 shadow-3xl">
                <h3 className="text-3xl text-primary font-bold text-center ">{pkg.name}</h3>
                <p className="text-md font-semibold text-tertiary text-center my-5">{pkg.description}</p>
                <p className="mt-5 text-center text-secondary text-4xl font-bold">
                    ${
                        isYearly? pkg.yearlyPrice: pkg.monthlyPrice
                    }
                    <span className="text-base text-tertiary font-medium">{isYearly?" /year":" /month"}</span>
                </p>
                <ul className="mt-6 space-y-2 px-4 text-primary font-medium">
                    <li className="flex items-center gap-3"><img src={pkg.green} alt="" className="h-4 w-4 rounded-full"/> Videos of lesson</li>
                    <li className="flex items-center gap-3"><img src={pkg.green} alt="" className="h-4 w-4 rounded-full"/>Homework check</li>
                    <li className="flex items-center gap-3"><img src={pkg.green} alt="" className="h-4 w-4 rounded-full"/>Additional practical task</li>
                    <li className="flex items-center gap-3"><img src={pkg.green} alt="" className="h-4 w-4 rounded-full"/>Monthly conferences</li>
                    <li className="flex items-center gap-3"><img src={pkg.green} alt="" className="h-4 w-4 rounded-full"/>Advise from teacher</li>
                </ul>
                <div className="mx-auto w-full flex justify-center mt-5">
                    <button className="btnprimary mt-5">Get Started</button>
                </div>
                </div>)
        }
      </div>
    </motion.div>
  )
}
