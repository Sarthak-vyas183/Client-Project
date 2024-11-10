import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/Images/TempImages/image.png";
import img2 from "../../assets/Images/TempImages/img2.png";
import img3 from "../../assets/Images/TempImages/img3.png";

function Home() {
  return (
    <div className="max-sm:overflow-x-hidden">
      {/* Header Section */}
      <section className="bg-gradient-radial from-cyan-500 via-transparent to-primaryBg  min-h-screen max-sm:min-h-[100vh] flex flex-col items-center justify-center text-white font-sans p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center leading-snug">
          <span className="pb-2 sm:pb-4">
            हमारे साथ करें हर&nbsp;
            <span className="text-[#2DD4BF]">शुभ&nbsp;</span>
            कार्य का प्रारंभ,{" "}
          </span>
          <span className="flex justify-center pt-2 max-sm:pt-4">
            <span className="text-[#2DD4BF]">पवित्र मंत्रों&nbsp;</span>
            और <span className="text-[#2DD4BF]">&nbsp;विधि-विधान&nbsp;</span> के
            साथ।
          </span>
        </h1>

        <div className="w-full sm:w-[60%] flex justify-center items-center flex-col sm:flex-row mt-4">
          <p className="text-[0.8em] text-center sm:w-[40%] sm:text-left">
            <span className="text-[#2DD4BF] underline">
              <Link to="/">पं. हर्षित व्यास</Link>
            </span>{" "}
            त्रिवेणी शनि मंदिर उज्जैन संपर्क करे सभी मांगलिक कर्मकांड हेतु।
          </p>
        </div>

        <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-teal-400 text-black font-semibold rounded-full text-sm sm:text-base">
          <span className="underline">Explore Services</span> - नवग्रह शांति पुजा
        </button>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center pt-10 space-x-4 sm:space-x-10 text-base sm:text-lg">
          <div className="text-center px-4">
            <p className="text-xl sm:text-2xl font-semibold">10k+</p>
            <p>खुश यजमान</p>
          </div>
          <div className="text-center px-4">
            <p className="text-xl sm:text-2xl font-semibold">100+</p>
            <p>पंडित सलाहकार</p>
          </div>
          <div className="text-center px-4">
            <p className="text-xl sm:text-2xl font-semibold">50K+</p>
            <p>संपन्न पूजा</p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="w-full min-h-[100vh] bg-dual-gradient p-4 max-sm:p-0">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#2DD4BF] underline pb-2">
            पंडित हर्षित व्यास
          </h1>
          <p className="text-white text-lg sm:text-xl">
            नवग्रह त्रिवेणी शनि मंदिर उज्जैन
          </p>
        </div>

        <div className="flex justify-center py-4">
          <iframe
            width="100%"
            height="200%"
            className="max-sm:w-[90vw] max-sm:h-auto md:w-[860px] md:h-[515px]"
            src="https://www.youtube.com/embed/kM3cPShpaXo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex justify-center items-center">
          <button className="my-4 sm:my-6 px-4 sm:px-6 py-2 sm:py-3 bg-teal-400 text-black font-semibold rounded-full text-sm sm:text-base">
            पंडित जी का परिचय
          </button>
        </div>

        {/* Puja Cards Section */}
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl text-teal-400 flex justify-center p-4">
            प्रमुख पुजाये
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {[img1, img2, img3].map((img, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[24%] bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden m-2"
              >
                <div className="relative">
                  <img
                    src={img}
                    alt="Course"
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-teal-400 text-black text-xs font-bold px-2 py-1 rounded">
                    वैदिक पद्धति
                  </span>
                </div>
                <div className="p-4">
                  <h2 className="text-lg sm:text-xl font-bold text-white">
                    नवग्रह शांति पुजा : त्रिवेणी शनि मंदिर उज्जैन
                  </h2>
                  <p className="text-gray-300 mt-2 text-sm sm:text-base">
                    सभी ग्रह दोषों का निवारण और सौभाग्य प्राप्ति के लिए नवग्रह
                    पूजा कराएं...।
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="bg-teal-400 text-black text-xs font-semibold px-2.5 py-0.5 rounded">
                      ग्रह दोष निवारण
                    </span>
                    <span className="bg-teal-400 text-black text-xs font-semibold px-2.5 py-0.5 rounded">
                      सौभाग्य
                    </span>
                    <span className="bg-teal-400 text-black text-xs font-semibold px-2.5 py-0.5 rounded">
                      शांति
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-2 mt-4 bg-black rounded-lg">
                    <span className="text-white">आचार्य पं. हर्षित व्यास</span>
                    <span className="text-teal-400 font-bold">विशेषज्ञ</span>
                  </div>
                  <div className="pt-4">
                    <button className="w-full bg-teal-400 text-black font-bold py-2 mb-2 rounded">
                      Book Puja
                    </button>
                    <button className="w-full bg-teal-400 text-black font-bold py-2 rounded">
                      Explore Puja
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h1 className="flex justify-center py-6 pt-8">
            <span className="bg-teal-500 text-black py-2 px-4 rounded-md">
              Explore More Puja
            </span>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
