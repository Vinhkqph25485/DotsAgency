import React from "react";

const Contact = () => {
  return (
    <div className="mb-[200px]">
      <div className="relative h-screen">
        <div className="bg-black text-white p-10 mt-10  h-screen">
          <div className="text-white mb-5 opacity-70">● LIÊN HỆ</div>
          <div className="absolute top-[-50px]">
            <div className="text-white font-bold text-[120px] tracking-tight">
              <div className="flex ml-[120px]">
                <span className="w-[250.27px] font-snell pl-[50px]">
                  <img src="/B.png" className="w-[1800px]" alt="" />
                </span>
                <span className="pt-7 ml-[-20px]">ẮT ĐẦU KIỆN TẠO</span>
              </div>{" "}
              <br />
              <div className="mt-[-190px]">
                <span className="">NHỮNG GIÁ TRỊ CỦA BẠN</span>
                <br />
                <span className="pl-[340px]">NGAY HÔM NAY!</span>
              </div>
            </div>
          </div>
          <div className=" absolute top-[370px] ">
            <img src="/studio.png" alt="" className="rounded-lg h-[95px]" />
          </div>
        </div>
        <div className="mx-10 h-screen absolute top-[600px]">
          <div className="grid grid-cols-3 gap-10">
            <div className="text-white pr-[70px] text-[16px]">
              Hãy cung cấp những thông tin dưới dây chúng tôi sẽ liên hệ bạn sớm
              nhất!
            </div>
            <div className="">
              <form action="" className="w-[400px] pt-1">
                <input
                  className="px-5 py-2 bg-[#383636] rounded-lg w-full placeholder:opacity-40 border-none"
                  type="text"
                  placeholder="Họ và tên..."
                />
                <input
                  className="px-5 py-2 my-3 bg-[#383636] rounded-lg w-full placeholder:opacity-40"
                  type="text"
                  placeholder="Email/SDT..."
                />
                <input
                  className="px-5 py-2 bg-[#383636] rounded-lg w-full placeholder:opacity-40"
                  type="text"
                  placeholder="Nhu cầu cần tư vấn"
                />
                <button className="flex justify-between bg-[#C8D5BB] px-5 py-2 rounded-full w-full mt-3 hover:bg-white hover:text-black  hover:shadow-zinc-400 hover:shadow-lg transition duration-300 delay-100 ease-in-out">
                  Let’s talk now! <span className="text-black">●</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
