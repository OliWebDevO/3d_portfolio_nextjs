import TitleHeader from "@/components/TitleHeader"
import { logoIconsList } from "../constants"


const LogoIcon = ({icon} : {icon: LogoIconType}) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.imgPath} />
        </div>
    )
}


const LogoSection = () => {
  return (
    <section id="skills" className=" section-padding md:pb-20 pb-10">
     <TitleHeader title='Skills' sub='⚙️ My field of expertise'/>
     <div className="md:my-15 my-25 relative overflow-hidden">
        <div className="gradient-edge"></div>
        <div className="gradient-edge"></div>
        <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
                {logoIconsList.map((icon) => (
                    <LogoIcon key={icon.id} icon={icon} />
                ))}
            </div>
        </div>
    </div>
    </section>

  )
}

export default LogoSection