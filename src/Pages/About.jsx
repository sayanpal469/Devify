import square from "../assets/about/square.png";
import logo from "../assets/Logo.png"
import ContactFormModal from "../commponents/ContactFormModal";
import { useState } from "react";

const About = () => {
  const [openModal, setOpenModal] = useState(false)

 const handleModalOpen = ()=>{
  setOpenModal(true);
 }
 const handleModalClose= ()=>{
  setOpenModal(false);
 }

  return (
    <main className="main">

{ openModal ? 
(<ContactFormModal
close = {handleModalClose}
/>) : null}

      <section className="hero flex justify-center items-center text-white text-center">
        <div>
          <h1 className="text-5xl font-semibold mb-5">About Us</h1>
          <p className="text-lg">
            Welcome to Devify, where collaboration, expertise, and
            client-centricity intersect to shape the future of digital
            innovation.
          </p>
        </div>
      </section>
      <section className="about mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center p-5 lg:p-14 gap-5 my-10 border-b border-b-gray-400 ">
        <div className="text-white">
          <h1 className="text-4xl font-semibold mb-3">About DeviFy</h1>
          <p>
            SquareUp is a digital product agency that is passionate about
            crafting exceptional digital experiences. We specialize in design,
            engineering, and project management, helping businesses thrive in
            the digital landscape. At SquareUp, we follow a structured and
            collaborative process to ensure the successful delivery of
            exceptional digital products. Our process combines industry best
            practices, creative thinking, and a client-centric approach.
          </p>
        </div>
        <div>
          <img
            className="h-full w-full lg:h-[80%] lg:w-[80%] mx-auto"
            src={square}
            alt=""
          />
        </div>
      </section>

      <section className="story p-5 lg:p-14">
        <h1 className="text-4xl text-white font-semibold">Our Story</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-14">
          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-[#D8FF99] mb-2">
              <h1 className="text-8xl font-bold">01</h1>
              <h2 className="text-xl font-semibold">Design</h2>
            </div>
            <hr />
            <div className="mt-5">
              <p className="text-gray-400">
                Once upon a time, in a world driven by technology, a group of
                talented designers came together with a shared vision. They
                believed that design could shape the way people interacted with
                digital products. With their passion for aesthetics and
                usability, they founded SquareUp Digital Product {`Agency's`}{" "}
                design department. Their mission was to create visually stunning
                and user-friendly interfaces that would leave a lasting
                impression.
              </p>
            </div>
          </div>
          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-[#D8FF99] mb-2">
              <h1 className="text-8xl font-bold">02</h1>
              <h2 className="text-xl font-semibold">Engineering</h2>
            </div>
            <hr />
            <div className="mt-5">
              <p className="text-gray-400">
                Meanwhile, a team of brilliant engineers was busy crafting the
                backbone of digital innovation. With their expertise in coding
                and development, they founded the engineering division of
                SquareUp. They believed that technology had the power to
                transform ideas into reality. Their mission was to build robust,
                scalable, and cutting-edge digital solutions that would push the
                boundaries of what was possible.
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-[#D8FF99] mb-2">
              <h1 className="text-8xl font-bold">03</h1>
              <h2 className="text-xl font-semibold">Project Management</h2>
            </div>
            <hr />
            <div className="mt-5">
              <p className="text-gray-400">
                In the midst of the creative and technical minds, a group of
                project managers emerged as the glue that held everything
                together. They understood the importance of effective
                communication, organization, and efficient execution. With their
                skills in planning and coordination, they founded {`SquareUp's`}
                project management team. Their mission was to ensure that every
                project ran smoothly, on time, and within budget.
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-[#D8FF99] mb-2">
              <h1 className="text-8xl font-bold">04</h1>
              <h2 className="text-xl font-semibold">Collaboration</h2>
            </div>
            <hr />
            <div className="mt-5">
              <p className="text-gray-400">
                At SquareUp, these three departments came together to form a
                cohesive and collaborative unit. They embraced the power of
                collaboration and recognized that their combined expertise would
                result in truly exceptional digital products. They believed that
                by working closely with their clients, understanding their
                needs, and involving them in the creative process, they could
                deliver solutions that surpassed expectations.
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-[#D8FF99] mb-2">
              <h1 className="text-8xl font-bold">05</h1>
              <h2 className="text-xl font-semibold">Client-Centric Approach</h2>
            </div>
            <hr />
            <div className="mt-5">
              <p className="text-gray-400">
                {`SquareUp's`} success was not solely measured by their
                technical prowess or design skills but by their unwavering
                commitment to their clients. They placed their clients at the
                center of everything they did. They took the time to listen,
                understand their unique challenges, and tailor their services to
                meet their specific requirements. Their mission was to become
                trusted partners, guiding businesses on their digital journey.
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-[#D8FF99] mb-2">
              <h1 className="text-8xl font-bold">06</h1>
              <h2 className="text-xl font-semibold">Driving Success</h2>
            </div>
            <hr />
            <div className="mt-5">
              <p className="text-gray-400">
                With each project, {`SquareUp's`} reputation grew. Their
                portfolio expanded to include a diverse range of industries and
                their impact was felt far and wide. From startups to established
                enterprises, businesses sought out SquareUp for their expertise
                in creating digital products that delivered tangible results.
                {`SquareUp's`} success was driven by their passion for
                innovation, their dedication to quality, and their commitment to
                helping their clients succeed in the digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="last w-[100%] mx-auto p-14 border border-gray-800">
        <div className="flex flex-col lg:flex-row gap-5">
          <img src={logo} className="h-20 w-20 mx-auto" alt="" />
          <div className="text-gray-400 text-center lg:text-start">
            <h1 className="text-2xl mb-2">
              Today, SquareUp Continues to Thrive as a Leading Digital Product
              Agency.....
            </h1>
            <p>
              Combining the power of design, engineering, and project management
              to create transformative digital experiences. They invite you to
              join them on their journey and discover how they can help bring
              your digital ideas to life.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-8 p-5 border border-gray-800">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
            <h1 className="text-gray-400">Welcome to SquareUp</h1>
            <p className="text-sm text-white bg-[#262626] p-5 lg:p-2 text-center lg:text-start">
              Where collaboration, Expertise, and Client-Centricity Intersect to
              Shape the Future of Digital Innovation.
            </p>
          </div>
          <button onClick={handleModalOpen}
           className="rounded-md p-2 text-black bg-[#9EFF00] text-sm font-semibold w-full lg:w-24">
            Start Project
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;
