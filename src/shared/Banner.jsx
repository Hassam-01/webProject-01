
export default function Banner({banner, heading, subHeading, btn1, btn2}) {
  return (
    <div>
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-28">
        <div className=" gradientBG rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 ">
          <div className="flex flex-col justify-between items-center gap-10 md:flex-row-reverse">
          <div>
            <img src="" alt="" />
            {banner}
          </div>
          <div className="space-y-2 md:w-3/5">
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
              <button className="btnprimary ">
                {btn2}
              </button>
            </div>
          </div>
        </div>
          </div>
      </div>

    </div>
  )
}
