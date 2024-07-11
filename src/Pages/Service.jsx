import userExLogo1 from "../assets/service/userExperience/Icon1.png";
import userExLogo2 from "../assets/service/userExperience/Icon2.png";
import userExLogo3 from "../assets/service/userExperience/Icon3.png";
import userExLogo4 from "../assets/service/userExperience/Icon4.png";
import userInLogo1 from "../assets/service/userInterface/Icon1.png";
import userInLogo2 from "../assets/service/userInterface/Icon2.png";
import userInLogo3 from "../assets/service/userInterface/Icon3.png";
import userInLogo4 from "../assets/service/userInterface/Icon4.png";
import brandingLogo1 from "../assets/service/branding/Icon1.png";
import brandingLogo2 from "../assets/service/branding/Icon2.png";
import brandingLogo3 from "../assets/service/branding/Icon3.png";
import brandingLogo4 from "../assets/service/branding/Icon4.png";
import webDevLogo1 from "../assets/service/webDev/Icon1.png";
import webDevLogo2 from "../assets/service/webDev/Icon2.png";
import webDevLogo3 from "../assets/service/webDev/Icon3.png";
import webDevLogo4 from "../assets/service/webDev/Icon4.png";
import appDevLogo1 from "../assets/service/appDev/Icon1.png";
import appDevLogo2 from "../assets/service/appDev/Icon2.png";
import appDevLogo3 from "../assets/service/appDev/Icon3.png";
import appDevLogo4 from "../assets/service/appDev/Icon4.png";
import softDevLogo1 from "../assets/service/softDev/Icon1.png";
import softDevLogo2 from "../assets/service/softDev/Icon2.png";
import softDevLogo3 from "../assets/service/softDev/Icon3.png";
import softDevLogo4 from "../assets/service/softDev/Icon4.png";
import projectPlanLogo1 from "../assets/service/projectPlan/Icon1.png";
import projectPlanLogo2 from "../assets/service/projectPlan/Icon2.png";
import projectPlanLogo3 from "../assets/service/projectPlan/Icon3.png";
import projectPlanLogo4 from "../assets/service/projectPlan/Icon4.png";
import agileLogo1 from "../assets/service/agile/Icon1.png";
import agileLogo2 from "../assets/service/agile/Icon2.png";
import agileLogo3 from "../assets/service/agile/Icon3.png";
import agileLogo4 from "../assets/service/agile/Icon4.png";
import qatLogo1 from "../assets/service/qat/Icon1.png";
import qatLogo2 from "../assets/service/qat/Icon2.png";
import qatLogo3 from "../assets/service/qat/Icon3.png";
import qatLogo4 from "../assets/service/qat/Icon4.png";
import logo from "../assets/Logo.png"
import ContactFormModal from "../commponents/ContactFormModal";
import { useState } from "react";

const Service = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleModalOpen = ()=>{
   setOpenModal(true);
  }
  const handleModalClose= ()=>{
   setOpenModal(false);
  }
  return (
    <main>

 { openModal ? 
(<ContactFormModal
close = {handleModalClose}
/>) : null}

      <section className="hero flex justify-center items-center text-white text-center p-5">
        <div>
          <h1 className="text-4xl lf:text-5xl font-semibold mb-5">Our Services</h1>
          <p className="text-sm lg:text-lg">
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </p>
        </div>
      </section>

      <section className="design p-5 lg:p-14 border-b border-b-gray-800">
        <h1 className="text-white text-4xl font-semibold">Design</h1>
        <p className="text-white my-5">
          At Squareup, our design team is passionate about creating stunning,
          user-centric designs that captivate your audience and elevate your
          brand. We believe that great design is not just about aesthetics;{" "}
          {`it's`}
          about creating seamless and intuitive user experiences.{" "}
        </p>

        <div className="text-white bg-gray-800 p-2 w-[55%] lg:w-[16%]">
          <p className="text-sm flex justify-center">
            Our design services include:
          </p>
        </div>
      </section>

      <section className="userExperience p-5 lg:px-14">
        <h2 className="text-gray-400 text-lg ">User Experience (UX) Design</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 border border-gray-800">
          <div className="border border-gray-800 p-10">
            <img src={userExLogo1} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              User Research and Personal Development
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={userExLogo2} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Information Architecture and Wireframing
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={userExLogo3} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Interactive Prototyping and User Testing
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={userExLogo4} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              UI Design and Visual Branding
            </p>
          </div>
        </div>
      </section>

      <section className="userInterface p-5 lg:px-14">
        <h2 className="text-gray-400 text-lg ">User Interface (UI) Design</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 border border-gray-800">
          <div className="border border-gray-800 p-10">
            <img src={userInLogo1} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Intuitive and Visually Appealing Interface Design
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={userInLogo2} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Custom Iconography and Illustration
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={userInLogo3} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Typography and Color Palette Selection
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={userInLogo4} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Responsive Design for Various Devices
            </p>
          </div>
        </div>
      </section>

      <section className="branding p-5 lg:px-14">
        <h2 className="text-gray-400 text-lg ">Branding and Identity</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 border border-gray-800">
          <div className="border border-gray-800 p-10">
            <img src={brandingLogo1} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Logo Design and Visual Identity Development
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={brandingLogo2} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Brand Strategy and Positioning
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={brandingLogo3} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Brand Guidelines and Style Guides
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={brandingLogo4} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Marketing Collateral Design (Brochures, Business Cards, etc.)
            </p>
          </div>
        </div>
      </section>

      <section className="engineering p-5 lg:p-14 border-b border-b-gray-800">
        <h1 className="text-white text-4xl font-semibold">Engineering</h1>
        <p className="text-white my-5">
          Our engineering team combines technical expertise with a passion for
          innovation to build robust and scalable digital solutions. We leverage
          the latest technologies and best practices to deliver high-performance
          applications tailored to your specific needs.
        </p>

        <div className="text-white bg-gray-800 p-2 w-[75%] lg:w-[20%]">
          <p className="text-sm flex justify-center">
            Our engineering services include:
          </p>
        </div>
      </section>

      <section className="webDev p-5 lg:px-14">
        <h2 className="text-gray-400 text-lg ">Web Development</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 border border-gray-800">
          <div className="border border-gray-800 p-10">
            <img src={webDevLogo1} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Front-End Development (HTML, CSS, JavaScript, React, Next)
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={webDevLogo2} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Back-End Development (Node, Express, GraphQl)
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={webDevLogo3} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Content Management System (CMS) Development (WordPress, Drupal)
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={webDevLogo4} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              E-Commerce Platform Development (Magento, Shopify)
            </p>
          </div>
        </div>
      </section>

      <section className="appDev p-5 lg:px-14">
        <h2 className="text-gray-400 text-lg ">Mobile App Development</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 border border-gray-800">
          <div className="border border-gray-800 p-10">
            <img src={appDevLogo1} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Native iOS and Android App Development
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={appDevLogo2} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Cross-Platform App Development (React Native, Flutter)
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={appDevLogo3} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              App Prototyping and UI/UX Design Integration
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={appDevLogo4} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              App Testing, Deployment, and Maintenance
            </p>
          </div>
        </div>
      </section>

      <section className="softDev p-5 lg:px-14">
        <h2 className="text-gray-400 text-lg ">Custom Software Development</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 border border-gray-800">
          <div className="border border-gray-800 p-10">
            <img src={softDevLogo1} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Enterprise Software Development
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={softDevLogo2} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Custom Web Application Development
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={softDevLogo3} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Integration with Third-Party APIs and Systems
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={softDevLogo4} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Legacy System Modernization and Migration
            </p>
          </div>
        </div>
      </section>

      <section className="management p-5 lg:p-14 border-b border-b-gray-800">
        <h1 className="text-white text-4xl font-semibold">
          Project Management
        </h1>
        <p className="text-white my-5">
          Our experienced project management team ensures that your projects are
          delivered on time, within budget, and according to your
          specifications. We follow industry-standard methodologies and employ
          effective communication and collaboration tools to keep you informed
          throughout the development process.
        </p>

        <div className="text-white bg-gray-800 p-2 w-[80%] lg:w-[25%]">
          <p className="text-sm flex justify-center">
            Our project management services include:
          </p>
        </div>
      </section>

      <section className="projectPlan p-5 lg:px-14">
        <h2 className="text-gray-400 text-lg ">Project Planning and Scoping</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 border border-gray-800">
          <div className="border border-gray-800 p-10">
            <img src={projectPlanLogo1} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Requirements Gathering and Analysis
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={projectPlanLogo2} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Project Roadmap and Timeline Development
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={projectPlanLogo3} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Resource Allocation and Task Assignment
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={projectPlanLogo4} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Risk Assessment and Mitigation Strategies
            </p>
          </div>
        </div>
      </section>

      <section className="agile p-5 lg:px-14">
        <h2 className="text-gray-400 text-lg ">Agile Development</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 border border-gray-800">
          <div className="border border-gray-800 p-10">
            <img src={agileLogo1} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Iterative Development and Sprints
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={agileLogo2} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Scrum or Kanban Methodology Implementation
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={agileLogo3} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Regular Progress Updates and Demos
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={agileLogo4} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Continuous Improvement and Feedback Incorporation
            </p>
          </div>
        </div>
      </section>

      <section className="qat p-5 lg:px-14">
        <h2 className="text-gray-400 text-lg ">
          Quality Assurance and Testing
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 border border-gray-800">
          <div className="border border-gray-800 p-10">
            <img src={qatLogo1} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Test Planning and Execution
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={qatLogo2} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Functional and Usability Testing
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={qatLogo3} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Performance and Security Testing
            </p>
          </div>
          <div className="border border-gray-800 p-10">
            <img src={qatLogo4} className="h-16 w-16" alt="" />
            <p className="text-white mt-5 text-sm">
              Bug Tracking and Issue Resolution
            </p>
          </div>
        </div>
      </section>

      <section className="last p-10 mt-10 bg-[#181A14]">
        <div className="flex flex-col justify-center text-center">
          <img src={logo} className="h-20 w-20 mx-auto" alt="" />
          <div className="text-white w-full lg:w-[50%] mx-auto mt-10">
            <h1 className="text-2xl font-semibold mb-2">Let us Bring your Ideas to Life in the Digital World.</h1>
            <p className="text-sm">
              No matter which services you choose, we are committed to
              delivering exceptional results that exceed your expectations. Our
              multidisciplinary team works closely together to ensure seamless
              collaboration and a unified vision for your digital product.
            </p>
          </div>
          <button onClick={handleModalOpen}
          className="rounded-sm p-2 text-black bg-[#9EFF00] mx-auto text-sm font-semibold w-full lg:w-28 mt-5">
            Start Project
          </button>
        </div>
      </section>
    </main>
  );
};

export default Service;
