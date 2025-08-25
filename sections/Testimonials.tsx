import GlowCard from "../components/GlowCard"
import TitleHeader from "../components/TitleHeader"
import { testimonials } from "../constants"


const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title='Testimonials' sub='💬  What People Say'/>
            <div className="text-center max-w-3xl mx-auto mt-8 mb-12">
                <p className="text-white-50 md:text-lg">
                    Don&apos;t just take my word for it. Here&apos;s what clients and collaborators have to say about working with me on their web development projects.
                </p>
            </div>
            <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                {testimonials.map(({imgPath, name, mentions, review}) => (
                    <GlowCard key={name} card={{review}} index={0}>
                        <div className="flex items-center gap-3">
                            <div>
                                <img src={imgPath} alt={name} />
                            </div>
                            <div>
                                <p className="font-bold">{name}</p>
                                <p className="text-white-50"> {mentions}</p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>
            <div className="text-center mt-12">
                <p className="text-white-50 text-sm md:text-base">
                    Ready to start your project? <span className="text-white font-semibold">Let&apos;s create something amazing together.</span>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Testimonials