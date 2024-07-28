import Reveal from "../utils/Reveal";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function ContactForm() {
  return (
    <>
      <section
        id="contact"
        className="font-light flex justify-center px-6 text-white text-[clamp(16px,2vw,36px)] py-[4vh]"
      >
        <div className="w-[80vw] lg:w-[40vw] flex flex-wrap justify-center xxl:w-[30vw]">
          <div className="flex justify-items-end justify-end px-16 ">
            <Reveal direction={"left"} delay={0.35}>
              <h1 className="inline text-[clamp(26px,10vw,48px)] max-xs:text-[1.5rem] font-semibold">
                Get in touch!
              </h1>
            </Reveal>
          </div>
          <div className="w-[80vw] lg:w-[60vw] h-[1px] bg-white rounded-sm"></div>
          <p className="font-['Poppins'] justify-self-center py-6 text-[1.5rem] max-xs:text-[1rem]">
            If you'd like to connect for a chat, please feel free to send
            through a message!
          </p>
          <form
      action="https://formsubmit.co/tomloo222@gmail.com"
      method="POST"
      className="text-black text-[1.5rem] max-xs:text-[1rem] w-full max-w-lg mx-auto p-4"
    >
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          className="mx-2 px-2 py-2 mb-4 sm:mb-0 flex-1"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="mx-2 px-2 py-2 flex-1"
        />
      </div>
      <div className="flex justify-center mt-4">
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          className="mx-2 px-2 py-2 w-full h-[200px] sm:h-[150px] md:h-[200px] align-top"
        ></textarea>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          type="submit"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg hover:opacity-[0.8] transition-opacity duration-300 rounded-full px-8 py-2"
        >
          Send
        </Button>
      </div>
    </form>
        </div>
      </section>
    </>
  );
}
