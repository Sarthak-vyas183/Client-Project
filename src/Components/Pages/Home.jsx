import React from "react";
import { Link } from "react-router-dom";
import Video from "../../assets/videos/titleVideo.mp4";
import img1 from "../../assets/Images/TempImages/image.png"
import img2 from "../../assets/Images/TempImages/img2.png"
import img3 from "../../assets/Images/TempImages/img3.png"
function Home() {
  return (
    <div className="">
      <section className="bg-gradient-radial  from-cyan-500 via-transparent to-primaryBg min-h-screen flex flex-col items-center justify-center text-white font-sans">
        <h1 className="text-4xl">
          <span className="pb-4">
            हमारे साथ करें हर&nbsp;
            <span className="text-[#2DD4BF]">शुभ&nbsp;</span>
            कार्य का प्रारंभ,{" "}
          </span>

          <span className=" flex justify-center pt-4">
            <span className="text-[#2DD4BF]">पवित्र मंत्रों&nbsp;</span>
            और <span className="text-[#2DD4BF]">&nbsp;विधि-विधान&nbsp;</span> के
            साथ।
          </span>
        </h1>

        <span className="w-[60%] h-auto  flex justify-end">
          <p className="w-[20%]  h-auto flex flex-wrap text-[0.7em] justify-start items-center">
            <span className="text-[#2DD4BF] underline">
              <Link to="/">पं. हर्षित व्यास</Link>
            </span>
            त्रिवेणी शनि मंदिर उज्जैन संपर्क करे सभी मांगलिक कर्मकांड हेतु ।{" "}
          </p>
        </span>

        <button className="mt-6 px-6 py-3 bg-teal-400 text-black font-semibold rounded-full">
          <span className="underline">Explore Services</span> - नवग्रह शांति
          पुजा
        </button>

        {/* Stats Section */}
        <div className="flex justify-center pt-16 space-x-10 text-lg">
          <div className="text-center">
            <p className="text-2xl font-semibold">10k+</p>
            <p>खुश यजमान</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold">100+</p>
            <p>पंडित सलाहकार</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold">50K+</p>
            <p>संपन्न पूजा</p>
          </div>
        </div>
      </section>

      <section className="w-full min-h-[100vh] bg-dual-gradient">
        <div>
          <div className="w-full flex  justify-center items-center">
            <h1 className="text-4xl">
              <span className="text-[#2DD4BF] flex justify-center underline pb-2">
                पंडित हर्षित व्यास
              </span>
              <span className="text-white">
                नवग्रह त्रिवेणी शनि मंदिर उज्जैन
              </span>{" "}
            </h1>
          </div>

          <div className="titlevideo flex justify-center items-center py-4">
            <iframe
              width="860"
              height="515"
              src="https://www.youtube.com/embed/60SRAWmMXyc?start=6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="info flex justify-center items-center">
            <button className="my-6 px-6 py-3 bg-teal-400 text-black font-semibold rounded-full ">
              पंडित जी का परिचय
            </button>
          </div>
        </div> 



        <div className="w-full min-h-[100vh] mb-4">
             <h1 className="text-3xl text-teal-400 flex justify-center py-6 font-semibold"><span>प्रमुख पुजाये</span></h1>
          <div className="flex flex-wrap gap-1">

          <div className="max-w-[25%]  mx-auto bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={img1} // Placeholder image
                alt="Course"
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-1 right-2 bg-teal-400 text-black text-xs font-bold px-2 py-1 rounded">
              वैदिक पद्धति 
              </span>
            </div>

            <div className=" ">
              <h2 className="text-xl font-bold text-white p-4">
                नवग्रह शांति पुजा : त्रिवेणी शनि मंदिर उज्जैन 
              </h2>

              <p className="text-gray-300 mt-2 p-2">
              सभी ग्रह दोषों का निवारण और सौभाग्य प्राप्ति के लिए नवग्रह पूजा कराएं...।
              </p>

              <div className="flex flex-wrap gap-2 p-2">
                <span className="bg-teal-400 text-black text-xs font-semibold px-2.5 py-0.5 rounded">
                  ग्रह दोष निवारण
                </span>
                <span className="bg-teal-400 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                  सौभाग्य 
                </span>
                <span className="bg-teal-400 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                 शांति
                </span>
              </div>

              <div className="flex justify-between items-center p-2  bg-black w-full">
                <span className="text-white">आचार्य पं. हर्षित व्यास </span>
                <span className="text-teal-400 font-bold">विशेषज्ञ</span>
              </div>
              <div className="p-2">
                <button className="w-full bg-teal-400 text-black font-bold py-2 mb-2 rounded">
                  Book Puja
                </button>
                <button className="w-full bg-teal-400 text-black font-bold py-2 rounded">
                  Explore Puja
                </button>
                
              </div>
            </div>
          </div> 
          
          <div className="max-w-[25%]  mx-auto bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={img2} // Placeholder image
                alt="Course"
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-1 right-2 bg-teal-400 text-black text-xs font-bold px-2 py-1 rounded">
              वैदिक पद्धति
              </span>
            </div>

            <div className=" ">
              <h2 className="text-xl font-bold text-white p-4">
               कालसर्प दोष पुजा : काल सर्प दोष निवारण
              </h2>

              <p className="text-gray-300 mt-2 p-2">
              जीवन की बाधाओं को दूर कर सुख-समृद्धि के लिए काल सर्प दोष निवारण अनुष्ठान कराएं।
              </p>

              <div className="flex flex-wrap gap-2 p-2">
                <span className="bg-teal-400 text-black text-xs font-semibold px-2.5 py-0.5 rounded">
                बाधा निवारण
                </span>
                <span className="bg-teal-400 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                शांति और सफलता 
                </span>
                <span className="bg-teal-400 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                दोष मुक्ति
                </span>
              </div>

              <div className="flex justify-between items-center p-2  bg-black w-full">
                <span className="text-white">आचार्य पं. हर्षित व्यास </span>
                <span className="text-teal-400 font-bold">विशेषज्ञ</span>
              </div>
              <div className="p-2">
                <button className="w-full bg-teal-400 text-black font-bold py-2 mb-2 rounded">
                  Book Puja
                </button>
                <button className="w-full bg-teal-400 text-black font-bold py-2 rounded">
                  Explore Puja
                </button>
                
              </div>
            </div>
          </div> 


          <div className="max-w-[25%]  mx-auto bg-[#2C2C2C] rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={img3} // Placeholder image
                alt="Course"
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-1 right-2 bg-teal-400 text-black text-xs font-bold px-2 py-1 rounded">
              वैदिक पद्धति
              </span>
            </div>

            <div className=" ">
              <h2 className="text-xl font-bold text-white p-4">
              रुद्राभिषेक : भगवान शिव का अभिषेक 
              </h2>

              <p className="text-gray-300 mt-2 p-2">
              भगवान शिव की कृपा से शांति, समृद्धि और कल्याण के लिए रुद्राभिषेक करवाएं।
              </p>

              <div className="flex flex-wrap gap-2 p-2">
                <span className="bg-teal-400 text-black text-xs font-semibold px-2.5 py-0.5 rounded">
                शिव कृपा 
                </span>
                <span className="bg-teal-400 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                सकारात्मक ऊर्जा 
                </span>
                <span className="bg-teal-400 text-black text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                सुख-समृद्धि
                </span>
              </div>

              <div className="flex justify-between items-center p-2  bg-black w-full">
                <span className="text-white">आचार्य पं. हर्षित व्यास </span>
                <span className="text-teal-400 font-bold">विशेषज्ञ</span>
              </div>
              <div className="p-2">
                <button className="w-full bg-teal-400 text-black font-bold py-2 mb-2 rounded">
                  Book Puja
                </button>
                <button className="w-full bg-teal-400 text-black font-bold py-2 rounded">
                  Explore Puja
                </button>
                
              </div>
            </div>
          </div>
          </div>
        </div> 



      </section>
    </div>
  );
}

export default Home;
