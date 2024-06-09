export default function Features() {
  return (
    <>
      <div className="my-24 px-4 md:px-14 max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            <div className="lg:w-1/4">
                <h3 className="text-primary text-3xl font-bold lg:w-1/2 mb-3">Why we are better than others</h3>
                <p className="text-base text-tertiary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, quas!</p>
            </div>
            {/* Feature cards */}
            <div className="w-full md:w-3/4">
                <div className="grid md:grid-cols-3 sm:grid-col-2 grid-col-1 md:gap-12 gap-8 items-start ">
                <div className="rounded-[35px] shadow-3xl bg-[rgba(255,255,255,0.04)] h-96 p-8 items-center flex justify-center 
                hover:translate-y-4 transition-all duration-300 ">
                    <div>
                        <p>Image</p>
                        <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventient Study Schedule</h5>
                    </div>
                </div>
                <div className="rounded-[35px] shadow-3xl bg-[rgba(255,255,255,0.04)] h-96 p-8 items-center flex justify-center 
                hover:translate-y-4 transition-all duration-300 md:mt-16 ">
                    <div>
                        <p>Image</p>
                        <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventient Study Schedule</h5>
                    </div>
                </div>
                <div className="rounded-[35px] shadow-3xl bg-[rgba(255,255,255,0.04)] h-96 p-8 items-center flex justify-center 
                hover:translate-y-4 transition-all duration-300 ">
                    <div>
                        <p>Image</p>
                        <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">Conventient Study Schedule</h5>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
