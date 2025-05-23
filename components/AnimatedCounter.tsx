import { counterItems } from "../constants";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow the trigger to fire multiple times
  });

  return (
    <div ref={ref} id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx:auto grid-3-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {inView && (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2}
                  key={item.label}
                //   suffix={item.suffix}
                />
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;