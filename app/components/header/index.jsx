"use client";

export default function Home() {
  return (
    <div className="relative pb-5 h-screen">
      <div className="absolute flex items-center justify-center">
        <img
          className="w-[90%] h-full object-cover object-center"
          src="/image1.png"
          alt="Background Image"
        />
      </div>
      <div className="bg-gradient-to-b from-[#1c1e1d] to-[#7d9f9a] h-screen py-5">
        <div className="">
          <div className="flex justify-between p-10 items-center">
            <div className="flex items-center leading-6 gap-1">
              <img src="/Ellipse 16.png" width={60} alt="" />
              <div className="text-white text-[24px] h-[48px]">
                DOST <br />
                <div className="py-1"/>
                ACGENCY
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex border-none bg-white text-black rounded">
                <div className="p-2">About</div>
                <div className="p-2">Work</div>
                <div className="p-2">Service</div>
                <div className="p-2">Blogs</div>
              </div>
              <div className="p-2 border-none bg-[#8bab88] text-black rounded">
                Let's Talk
              </div>
            </div>
          </div>
        </div>
        <div class="text-white font-bold absolute bottom-0 left-1/2 transform -translate-x-1/2 top-[220px]">
          <h1 class="text-[170px] whitespace-nowrap">
            <span className="text-[420px] font-snell">D</span>OSTS AGENCY
          </h1>
        </div>
      </div>
    </div>
  );
}
