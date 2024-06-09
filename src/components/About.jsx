
export default function About() {
  return (
    <div className="space-y-10">
      <div className="mdLmx-14 flex p-4 max-w-3xl  mx-auto md:flex-row flex-col justify-between items-center">
        <div className="md:w-1/2">
            <img src="" alt="" />
            <p>image</p>
        </div>
        <div className="md:w-2/5">
            <h3 className="text-primary md:text-5xl text-3xl  font-bold leading-normal mb-5">We have been improving our product <span className="text-secondary ">for many years</span></h3>
            <p className="text-tertiary text-lg mb-7 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, magni!</p>
            <button className="btnprimary ">Get Started</button>
        </div>
      </div>
      <div className="mdLmx-14 flex p-4 max-w-3xl  mx-auto md:flex-row-reverse flex-col justify-between items-center">
        <div className="md:w-1/2">
            <img src="" alt="" />
            <p>image</p>
        </div>
        <div className="md:w-2/5">
            <h3 className="text-primary md:text-5xl text-3xl  font-bold leading-normal mb-5">We have been improving our product <span className="text-secondary ">for many years</span></h3>
            <p className="text-tertiary text-lg mb-7 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, magni!</p>
            <button className="btnprimary ">Get Started</button>
        </div>
      </div>
    </div>
  )
}

