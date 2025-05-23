'use client'
import { useGSAP } from "@gsap/react"
import TitleHeader from "../components/TitleHeader"
import TechIcon from "../components/models/techlogos/TechIcon"
import { techStackIcons } from "../constants"
// import { techStackImgs } from "../constants"
import { gsap }from "gsap"


const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card',
            { y: 50, opacity: 0 },
            {   y: 0, 
                opacity: 1, 
                duration: 1,
                stagger: 0.2, 
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center',
                     toggleActions: "play none none reset",
                }
             }
        )
    }, [])

  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title='Tech Stack' sub='🛠️  My Toolbox'/>
            <div className="tech-grid">
                {techStackIcons.map((icon)=> (
                    <div key={icon.name} className="card-border tech-card overflow-hidden group rounded-xl relative">
                        <div className="tech-card-animated-bg" />
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <TechIcon model={icon}/>
                            </div>
                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* {techStackImgs.map((img)=> (
                    <div key={img.name} className="card-border tech-chard overflow-hidden group rounded-lg xl:rounded-xl">
                        <div className="tech-chard-animated-bg">
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <img src={img.imgPath} alt={img.name} />
                                </div>
                                <div className="padding-x w-full">
                                    <p>{img.name}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    ))} */}
            </div>
        </div>
    </div>
  )
}

export default TechStack