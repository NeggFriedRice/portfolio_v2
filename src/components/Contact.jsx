
import Reveal from "../utils/Reveal"

export default function Contact() {

  const stackStyle = "h-16 w-16 m-2 transition-all delay-75 animate-float"

  return (
    <>
    <div id="contact" className="font-light flex justify-center px-6 text-white text-[clamp(16px,2vw,36px)] py-[4vh]"> 
      <div className="w-[80vw] lg:w-[40vw] flex flex-wrap justify-center">
      <div className="flex justify-items-end justify-end px-16">
                <Reveal direction={"left"}>
                    <div className="inline text-[clamp(20px,10vw,36px)]">A final note</div>
                </Reveal>
                </div>
          <div className="w-[80vw] lg:w-[60vw] h-[1px] bg-white rounded-sm"></div>
              <p className="font-['Poppins'] justify-self-center py-6 text-[1.5rem]">I am currently in the market for an exciting role and a place to grow, so if you're interested in having a chat please click the ✉️ icon in the top right hand corner of your screen and send over a message!
              <br/><br/>
              Looking forward to hearing from you!
              <br/><br/>
              Yours sincerely,
              <br/>
              Tom</p> 
      </div>
    </div>
    </>
  )
}
