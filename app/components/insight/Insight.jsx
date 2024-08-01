import React from "react";

const Insight = () => {
  return (
    <div className="my-10 px-10 h-screen">
      <div className="text-white px-5 my-10">● Insight</div>
      <div className="grid grid-cols-3 gap-2 text-white">
        <div className="group">
          <img src="/image 231.png" alt="" className="rounded-lg" />
          <div className="flex gap-3 py-5">
            <span>SEP 23, 2023</span>{" "}
            <div>
              {" "}
              <span className="px-1 opacity-0 group-hover:opacity-100">
                ●
              </span>{" "}
              <span className="opacity-50">BRANDING</span>{" "}
            </div>
          </div>
          <p className="text-[23px] w-[70%]">
            Hãy cung cấp những thông tin dưới dây chúng tôi sẽ liên hệ bạn sớm
            nhất!
          </p>
        </div>
        <div className="group">
          <img src="/image 230.png" alt="" className="rounded-lg" />
          <div className="flex gap-3 py-5">
            <span>SEP 23, 2023</span>{" "}
            <div>
              {" "}
              <span className="px-1 opacity-0 group-hover:opacity-100">
                ●
              </span>{" "}
              <span className="opacity-50">BRANDING</span>{" "}
            </div>
          </div>
          <p className="text-[23px] w-[70%]">
            Hãy cung cấp những thông tin dưới dây chúng tôi sẽ liên hệ bạn sớm
            nhất!
          </p>
        </div>
        <div className="group">
          <img src="/image 232.png" alt="" className="rounded-lg" />
          <div className="flex gap-3 py-5">
            <span>SEP 23, 2023</span>{" "}
            <div>
              {" "}
              <span className="px-1 opacity-0 group-hover:opacity-100">
                ●
              </span>{" "}
              <span className="opacity-50">BRANDING</span>{" "}
            </div>
          </div>
          <p className="text-[23px] w-[70%]">
            Hãy cung cấp những thông tin dưới dây chúng tôi sẽ liên hệ bạn sớm
            nhất!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insight;
