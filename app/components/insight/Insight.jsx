import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Insight = () => {
  const settings = {
    dots: true,
    infinite: true, // Vòng lặp vô hạn
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "100px", // Khoảng cách giữa các slide
  };

  const item = [
    {
      img: "/image 231.png",
      date: "SEP 23, 2023",
      name: "BRANDING",
      description:
        "Hãy cung cấp những thông tin dưới dây chúng tôi sẽ liên hệ bạn sớm nhất!",
    },
    {
      img: "/image 230.png",
      date: "SEP 23, 2023",
      name: "BRANDING",
      description:
        "Hãy cung cấp những thông tin dưới dây chúng tôi sẽ liên hệ bạn sớm nhất!",
    },
    {
      img: "/image 232.png",
      date: "SEP 23, 2023",
      name: "BRANDING",
      description:
        "Hãy cung cấp những thông tin dưới dây chúng tôi sẽ liên hệ bạn sớm nhất!",
    },
  ];

  return (
    <div className="my-10 px-10 h-screen">
      <Slider {...settings}>
        {item.map((e) => {
          return (
            <>
              <div className="px-5">
                <img src={e.img} alt="" className="rounded-lg" />
                <div className="flex gap-3 py-5">
                  <span>{e.date}</span>{" "}
                  <div>
                    {" "}
                    <span className="px-1 opacity-0 group-hover:opacity-100">
                      ●
                    </span>{" "}
                    <span className="opacity-50">{e.name}</span>{" "}
                  </div>
                </div>
                <p className="text-[23px] w-[70%]">
                  {e.description}
                </p>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Insight;
