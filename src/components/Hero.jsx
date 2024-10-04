import { heroText } from "../constants"
import Section from "./Utils/Section"


const Hero = () => {
  return (
    <Section normal id={"hero"}>
        <div className="z-1 flex flex-col items-center w-full">
            <h5 className="h5 flex flex-col flex-nowrap w-36 uppercase font-mont font-semibold">
                {heroText.title}
            </h5>
            <div className="font-code text-xs w-36 mt-3 uppercase">
                {heroText.content}
            </div>
        </div>
    </Section>
  
  )
}

export default Hero