
import processContainer1 from "../assets/Process/processContainer1.png"
import processContainer2 from "../assets/Process/processContainer2.png"
import ContactForm from "../commponents/ContactForm"

const Process = () => {

  return (
    <div className="w-[100%] h-[100%] bg-[#1E1E1E] flex flex-col px-0 md:px-28  pb-8">
       <div className=" relative ">
          <img src={processContainer1} alt="processContainer1" className=" object-contain w-full h-full relative hidden md:block" />
          <img src={processContainer2} alt="processContainer2" className="object-contain w-full h-full relative md:hidden" />
          <div className="absolute inset-0 flex flex-col items-center justify-center py-12 TextContainer">
            <div className="flex flex-col text-center gap-2 px-4 md:px-0">
            <p className="text-white font-semibold text-2xl md:text-4xl ">Process of Starting the Project</p>
            <p className="text-white text-xs">At SquareUp, we value transparency, collaboration, and delivering exceptional results.</p>
            </div>
          </div>
      </div>

      <div className="flex flex-col gap-4 mt-16 md:w-[80%] text-white flex-1 mb-8 px-8">
        <h1 className="text-3xl font-semibold">At Devify</h1>
        <p className="text-sm">We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
      </div>
    <div className="px-8">
    <div  className="px-2 py-1 bg-[#262626] rounded-md text-white text-md md:text-sm w-fit">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Here's an overview of our typical process:</p>
      </div>
    </div>
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className=" py-5 px-8 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
            <h1 className="text-8xl font-semibold text-[#C5FF66]">01</h1>
            <p className="text-white text-lg">Discovery</p>
        </div>
        <p className="text-white text-sm">We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.</p>
        </div>
        <div className=" py-5 px-8 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
            <h1 className="text-8xl font-semibold text-[#C5FF66]">02</h1>
            <p className="text-white text-lg">Planning and Strategy</p>
        </div>
        <p className="text-white text-sm">Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision.</p>
        </div>
        <div className=" py-5 px-8 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
            <h1 className="text-8xl font-semibold text-[#C5FF66]">03</h1>
            <p className="text-white text-lg">Design</p>
        </div>
        <p className="text-white text-sm">Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel.</p>
        </div>
        <div className=" py-5 px-8 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
            <h1 className="text-8xl font-semibold text-[#C5FF66]">04</h1>
            <p className="text-white text-lg">Development</p>
        </div>
        <p className="text-white text-sm">Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns.</p>
        </div>
        <div className=" py-5 px-8 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
            <h1 className="text-8xl font-semibold text-[#C5FF66]">05</h1>
            <p className="text-white text-lg">Testing and Quality Assurance</p>
        </div>
        <p className="text-white text-sm">We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability.</p>
        </div>
        <div className=" py-5 px-8 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
            <h1 className="text-8xl font-semibold text-[#C5FF66]">06</h1>
            <p className="text-white text-lg">Deployment and Launch</p>
        </div>
        <p className="text-white text-sm">When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations.</p>
        </div>
        <div className=" py-5 px-8 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
            <h1 className="text-8xl font-semibold text-[#C5FF66]">07</h1>
            <p className="text-white text-lg">Post-Launch Support</p>
        </div>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-white text-sm">Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support.</p>
        </div>
        <div className=" py-5 px-8 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
            <h1 className="text-8xl font-semibold text-[#C5FF66]">08</h1>
            <p className="text-white text-lg">Continuous Improvement</p>
        </div>
        <p className="text-white text-sm">We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve.</p>
        </div>
      </div>
      
       <ContactForm/>
    </div>
  )
}

export default Process
