import { useState } from "react";
import { FaCheck } from 'react-icons/fa';
import PropTypes from "prop-types";
const ContactFormModal = ({close}) => {

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    

    const options = ["Web Design", "SEO", "Content Writing", "Support"]; // Example options
  
    const handleToggle = (index) => {
      setSelectedIndex(index === selectedIndex ? null : index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedOption = options[selectedIndex];
        console.log({
            name,
            email,
            selectedOption,
            message
        });
    };

  return (
    <div>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden w-screen h-screen ">
      <div className="relative w-screen h-screen px-2 md:px-40 my-6 bg-opacity-50 backdrop-filter backdrop-blur-md">
        {/* Modal content */}
        {/* <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none"> */}

        <div className="w-full my-4 px-4 flex flex-col justify-center gap-4 md:px-48">
            <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-8">
              <div className="flex flex-col bg-[#262626] px-4 py-8 gap-4 flex-1 rounded-md justify-center">
                <label htmlFor="name" className="text-white text-md">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Type Here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-sm bg-[#262626] border-[#e5eaf2] border-b outline-none focus:border-gray-400 transition-colors duration-300 text-[#9EFF00]"
                />
              </div>
              <div className="flex flex-col bg-[#262626] px-4 py-8 gap-4 flex-1 rounded-md justify-center">
                <label htmlFor="email" className="text-white text-md">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Type Here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm bg-[#262626] border-[#e5eaf2] border-b outline-none focus:border-gray-400 transition-colors duration-300 text-[#9EFF00]"
                />
              </div>
            </div>
    
            <div>
              <div className="flex flex-col bg-[#262626] px-4 py-2 md:py-8 gap-4 flex-1 rounded-md justify-center">
                <label htmlFor="work" className="text-white text-md">Why are you contacting us?</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2 md:my-6">
                  {options.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        checked={selectedIndex === index}
                        onChange={() => handleToggle(index)}
                        className="hidden"
                      />
                      <label
                        htmlFor={`checkbox-${index}`}
                        className={`w-[25px] h-[25px] rounded-md flex items-center justify-center cursor-pointer border-2 ${
                          selectedIndex === index ? 'border-primary bg-[#262626]' : 'border-gray-400'
                        }`}
                      >
                        {selectedIndex === index ? (
                          <FaCheck className="text-[#9EFF00]" />
                        ) : (
                          <div
                            className={`${
                              selectedIndex === index ? 'bg-primary scale-[1]' : 'bg-transparent scale-[0.7]'
                            } w-[15px] h-[15px] transition-all duration-200 rounded-md`}
                          ></div>
                        )}
                      </label>
                      <label
                        htmlFor={`checkbox-${index}`}
                        className="text-sm cursor-pointer text-white"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    
            <div>
              <div className="flex flex-col bg-[#262626] px-4 py-4 md:py-8 gap-4 flex-1 rounded-md justify-center">
                <label htmlFor="message" className="text-white text-md">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Type Here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-sm bg-[#262626] border-[#e5eaf2] border-b outline-none focus:border-gray-400 transition-colors duration-300 text-[#9EFF00] h-24 resize-none"
                ></textarea>
              </div>
            </div>
    
            <div className="flex justify-center flex-row gap-4 items-center">
            <button onClick={close}
               className="bg-[#262626] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 text-black px-6 text-white py-2">Close</button>

              <button onClick={handleSubmit}
               className="bg-[#9EFF00] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 text-black px-4 py-2">Submit</button>
            </div>
          </div>
            </div>
            </div>
        </div>
    
  )
}

export default ContactFormModal;

ContactFormModal.propTypes = {
    close: PropTypes.any.isRequired,
}