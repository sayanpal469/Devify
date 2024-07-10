import heroSection from "../assets/landing/heroSection.png"
import heroSection2 from "../assets/landing/heroSection2.png"
import textContainer from "../assets/landing/TextContainer.png"
import textContainer2 from "../assets/landing/textContainer2.png"
import textContainer3 from "../assets/landing/textContainer3.png"
import textContainer4 from "../assets/landing/textContainer4.png"
import textContainer_1 from "../assets/landing/textContainer_1.png"
import textContainer_2 from "../assets/landing/textContainer_2.png"
import textContainer_3 from "../assets/landing/textContainer_3.png"
import textContainer_4 from "../assets/landing/textContainer_4.png"

import Icon1 from "../assets/landing/Icon1.png"
import Icon2 from "../assets/landing/Icon2.png"
import Icon3 from "../assets/landing/Icon3.png"
import Icon4 from "../assets/landing/Icon4.png"
import Icon5 from "../assets/landing/Icon5.png"
import Icon7 from "../assets/landing/Icon7.png"
import Icon6 from "../assets/landing/Icon6.png"
import Profile1 from "../assets/landing/Profile1.png"
import Profile2 from "../assets/landing/Profile2.png"
import { FaPlus } from "react-icons/fa6";
import { useState } from "react"
import ContactForm from "../commponents/ContactForm"
const Home = () => {

  const [isAccordingOpen1, setIsAccordingOpen1] = useState(null);
  const [isAccordingOpen2, setIsAccordingOpen2] = useState(null);
  // accordian data
  const accordingData1 = [
    {
      number:"01",
      title: "What services does Devify provide?",
      description:
        "WebWizard offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    },
    {
      number:"02",
      title: "How can Devify help my business?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      number:"03",
      title: "What industries does Devify work with?",
      description:
        `Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.`,
    },
  
    {
      number:"04",
      title: `How long does it take to complete a project with Devify?.`,
      description:
        `Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.`,
    },
  
  ];
  const accordingData2 = [
    {
      number:"05",
      title: "Do you offer ongoing support and maintenance after the project is completed?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      number:"06",
      title: "Can you work with existing design or development frameworks?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      number:"07",
      title: "How involved will I be in the project development process?",
      description:
        `Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.`,
    },
  
    {
      number:"08",
      title: `Can you help with website or app maintenance and updates?`,
      description:
        `Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.`,
    },
  
  ];
  
  const handleBorderClick1 = (index) =>{
  setIsAccordingOpen1((prevIndex) => (prevIndex === index ? null : index))
  console.log(index);
};
const handleBorderClick2 = (index) =>{
  setIsAccordingOpen2((prevIndex) => (prevIndex === index ? null : index))
  console.log(index);
};

    return (
        <div className="w-[100%] h-[100%] bg-[#1E1E1E] flex flex-col px-0 md:px-28  pb-8">

        <div className="h-full md:h-screen relative">
        <img src={heroSection2} alt="herosection2" className="object-fit w-full h-[90%] relative md:hidden" />
          <img src={heroSection} alt="herosection" className="object-fit w-full h-[90%] relative hidden md:block" />
          <div className="absolute inset-0 flex flex-col items-center justify-start gap-8 py-12">
            <div className="flex-col text-center flex gap-2 text-white text-3xl font-semibold md:text-5xl">
            <h1 >A Digital Product Studio</h1>
            <h1 className="">that will Work</h1>
            </div>
            <div className=" md:bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 text-white px-6 py-4 text-sm my-6   hidden md:block">
               <p>For <span className="px-2 py-1 bg-[#262626] rounded-md mx-1">Startups</span> , <span className="px-2 py-1 bg-[#262626] rounded-md mx-1">Enterprise leaders</span> , <span className="px-2 py-1 bg-[#262626] rounded-md mx-1">Media & Publishers</span> and <span className="px-2 py-1 bg-[#262626] rounded-md mx-1">Social Good</span></p>
               </div>
               <div className="mx-4 bg-[#262626] md:hidden block text-center rounded-md text-white px-6 py-4 text-sm my-6  ">
               <p>For Startups , Enterprise leaders , Media & Publishers and Social Good</p>
            </div>
            <div className="flex gap-2 text-white text-sm">
            <button className="bg-[#262626] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 text-white px-4 py-2 ">Our Works</button>
            <button className="bg-[#9EFF00] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 text-black px-4 py-2">Contact Us</button>
            </div>
          </div>
        </div>

        <div className=" relative ">
          <img src={textContainer} alt="textContainer" className=" object-contain w-full h-full relative hidden md:block" />
          <img src={textContainer_1} alt="textContainer_1" className="object-contain w-full h-full relative md:hidden" />
          <div className="absolute inset-0 flex flex-col items-center justify-center py-12 TextContainer">
            <div className="flex flex-col text-center gap-2 px-4 md:px-0">
            <p className="text-white font-semibold text-2xl md:text-4xl ">Our Services</p>
            <p className="text-white text-xs">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
            </div>
          </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-full justify-center items-center px-6 md:px-0 md:py-4">
  <div className="flex flex-col gap-4 px-6 py-8 flex-1"> 
    <div className="shadow-md w-12 flex flex-row gap-4 items-center">
      <img src={Icon1} alt="Icon1" className="w-full" />
      <h1 className="font-semibold text-xl text-white md:hidden">Design</h1>
    </div>
    <div className="text-white flex flex-col gap-4 mb-4">
      <h1 className="font-semibold text-xl hidden md:block">Design</h1>
     {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p className="text-xs">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences</p>
    </div>
    <div className="text-center mx-0 md:mx-2">
      <button className="w-full py-2 text-center text-white bg-[#262626] rounded-md">Learn More</button>
    </div>
  </div>
  <div className="flex flex-col gap-4 px-6 py-8 flex-1"> 
  <div className="shadow-md w-12 flex flex-row gap-4 items-center">
      <img src={Icon2} alt="Icon2" className="w-full" />
      <h1 className="font-semibold text-xl text-white md:hidden ">Engineering</h1>
    </div>
    <div className="text-white flex flex-col gap-4 mb-4">
      <h1 className="font-semibold text-xl hidden md:block">Engineering</h1>
      <p className="text-xs">Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.</p>
    </div>
    <div className="text-center mx-0 md:mx-2">
      <button className="w-full py-2 text-center text-white bg-[#262626] rounded-md">Learn More</button>
    </div>
  </div>
  <div className="flex flex-col gap-4 px-6 py-8 flex-1"> 
  <div className="shadow-md w-12 flex flex-row gap-4 items-center">
      <img src={Icon3} alt="Icon3" className="w-full" />
      <h1 className="font-semibold text-xl text-white md:hidden nowrap">Project Management</h1>
    </div>
    <div className="text-white flex flex-col gap-4 mb-4">
      <h1 className="font-semibold text-xl hidden md:block">Project Management</h1>
      <p className="text-xs">Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>
    </div>
    <div className="text-center mx-0 md:mx-2">
      <button className="w-full py-2 text-center text-white bg-[#262626] rounded-md">Learn More</button>
    </div>
  </div>
</div>

<div className=" relative ">
          <img src={textContainer2} alt="textContainer2" className=" object-contain w-full h-full relative hidden md:block" />
          <img src={textContainer_2} alt="textContainer_2" className="object-contain w-full h-full relative md:hidden" />
          <div className="absolute inset-0 flex flex-col items-center justify-center py-12 TextContainer">
            <div className="flex flex-col text-center gap-2 px-4 md:px-0">
            <p className="text-white font-semibold text-2xl md:text-4xl ">Why Choose SquareUp?</p>
            <p className="text-white text-xs">Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
            </div>
          </div>
      </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full px-4 md:px-0 items-center">
<div className="flex flex-col gap-4 px-6 py-8 flex-1"> 
  <div className="flex flex-row gap-2 items-center">
  <div className="shadow-md w-12 ">
      <img src={Icon4} alt="Icon4" className="w-full" />
    </div>
    <h1 className="font-semibold text-xl text-white">Expertise</h1>
  </div>
    <div className="text-white ">
    <p className="text-sm">Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>
    </div>
  </div>
  <div className="flex flex-col gap-4 px-6 py-8 flex-1"> 
  <div className="flex flex-row gap-2 items-center">
  <div className="shadow-md w-12 ">
      <img src={Icon5} alt="Icon5" className="w-full" />
    </div>
    <h1 className="font-semibold text-xl text-white">Client-Centric Approach</h1>
  </div>
    <div className="text-white ">
    <p className="text-sm">We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.</p>
    </div>
  </div>
  <div className="flex flex-col gap-4 px-6 py-8 flex-1"> 
  <div className="flex flex-row gap-2 items-center">
  <div className="shadow-md w-12 ">
      <img src={Icon6} alt="Icon6" className="w-full" />
    </div>
    <h1 className="font-semibold text-xl text-white">Results-Driven Solutions</h1>
  </div>
    <div className="text-white ">
    <p className="text-sm">Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.</p>
    </div>
  </div>
  <div className="flex flex-col gap-4 px-6 py-8 flex-1"> 
  <div className="flex flex-row gap-2 items-center">
  <div className="shadow-md w-12 ">
      <img src={Icon7} alt="Icon7" className="w-full" />
    </div>
    <h1 className="font-semibold text-xl text-white">Collaborative Partnership</h1>
  </div>
    <div className="text-white ">
    <p className="text-sm">We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.</p>
    </div>
  </div>
</div>


      <div className=" relative ">
          <img src={textContainer3} alt="textContainer3" className=" object-contain w-full h-full relative hidden md:block" />
          <img src={textContainer_3} alt="textContainer_3" className="object-contain w-full h-full relative md:hidden" />
          <div className="absolute inset-0 flex flex-col items-center justify-center py-12 TextContainer">
            <div className="flex flex-col text-center gap-4 md:gap-2 px-4 md:px-0">
            <p className="text-white font-semibold text-2xl md:text-4xl ">What our Clients say About us</p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-white text-xs">At Devify, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us</p>
            </div>
          </div>
      </div>

      <div className="flex flex-col md:flex-row  mt-4 md:mt-8">
        <div className="flex flex-col flex-1 px-12 py-4 gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#D8FF99] font-semibold">WebWizard has been Instrumental in Transforming our Online Presence. </h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-white">Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.</p>
          </div>
          <div className="flex flex-row gap-4 px-2 py-2 items-center rounded-md bg-[#262626] text-white">
            <img src={Profile1} alt="Profile1" className="w-12" />
            <div className="flex flex-col text-sm">
              <p>Palash Jana</p>
              <p>CEO of OM EPC solution</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-12 py-4 gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#D8FF99] font-semibold">Working with SquareUp was a breeze.</h1>
            
            <p className="text-white">They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. WebWizard is a trusted partner we highly recommend.</p>
          </div>
          <div className="flex flex-row gap-4 px-2 py-2 items-center rounded-md bg-[#262626] text-white">
            <img src={Profile2} alt="Profile2" className="w-12" />
            <div className="flex flex-col text-sm">
              <p>Susmita Chakraborty</p>
              <p>Founder of Watch Your Thoughts.</p>
            </div>
          </div>
        </div>
      </div>


      <div className=" relative ">
          <img src={textContainer4} alt="textContainer4" className=" object-contain w-full h-full relative hidden md:block" />
          <img src={textContainer_4} alt="textContainer_4" className="object-contain w-full h-full relative md:hidden" />
          <div className="absolute inset-0 flex flex-col items-center justify-center py-12 TextContainer">
            <div className="flex flex-col text-center gap-4 md:gap-2 px-4 md:px-0">
            <p className="text-white font-semibold text-2xl md:text-4xl ">Frequently Asked Questions</p>
            <p className="text-white text-xs">Still you have any questions? Contact our Team via hello@squareup.com</p>
            </div>
          </div>
      </div>

    
      <div className="grid gird-cols-1 md:grid-cols-2 gap-4 my-8 px-4 md:px-0">

      <div className="flex flex-col gap-2">
      {accordingData1?.map((according, index) => (
        <div key={index} className="border border-[#e5eaf2] h-fit rounded p-3 flex flex-col">
          <div
            className="flex gap-2 cursor-pointer items-center justify-between w-full"
            onClick={() => handleBorderClick1(index)}
          >
            <div className="flex flex-row items-center gap-2">
            <div className="border border-gray-400 px-2 py-1 rounded-md">
              <p  className={`text-md font-semibold transition-colors duration-300 ${
                isAccordingOpen1 === index ? 'text-[#C5FF66]' : 'text-white'
              }`}
            >{according.number}</p>
            </div>

            <h2
              className={`text-sm font-semibold transition-colors duration-300 ${
                isAccordingOpen1 === index ? 'text-[#C5FF66]' : 'text-white'
              }`}
            >
              {according.title}
            </h2>
            </div>
            <p>
              <FaPlus
                className={`text-[1.3rem] transition-all duration-300 ${
                  isAccordingOpen1 === index ? 'rotate-[45deg] text-[#C5FF66]' : 'text-[#424242]'
                }`}
              />
            </p>
          </div>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isAccordingOpen1 === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-[#424242] text-[0.9rem] px-8">
              {according.description}
            </p>
          </div>
        </div>
      ))}
    </div>

      <div className="flex flex-col gap-2">
      {accordingData2?.map((according, index) => (
        <div key={index} className="border border-[#e5eaf2] h-fit rounded p-3 flex flex-col">
          <div
            className="flex gap-2 cursor-pointer items-center justify-between w-full"
            onClick={() => handleBorderClick2(index)}
          >
            <div className="flex flex-row items-center gap-2">
            <div className="border border-gray-400 px-2 py-1 rounded-md">
              <p  className={`text-md font-semibold transition-colors duration-300 ${
                isAccordingOpen2 === index ? 'text-[#C5FF66]' : 'text-white'
              }`}
            >{according.number}</p>
            </div>

            <h2
              className={`text-sm font-semibold transition-colors duration-300 ${
                isAccordingOpen2 === index ? 'text-[#C5FF66]' : 'text-white'
              }`}
            >
              {according.title}
            </h2>
            </div>
            <p>
              <FaPlus
                className={`text-[1.3rem] transition-all duration-300 ${
                  isAccordingOpen2 === index ? 'rotate-[45deg] text-[#C5FF66]' : 'text-[#424242]'
                }`}
              />
            </p>
          </div>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isAccordingOpen2 === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-[#424242] text-[0.9rem] px-8">
              {according.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>

     <ContactForm/>
      </div>
    );
};

export default Home;