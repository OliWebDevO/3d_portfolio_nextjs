import Image from "next/image";

const Button = ({className, id, text} : ButtonProps) => {
  return (
    <a className={`${className ?? ''} cta-wrapper`}
        onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector('#work') as HTMLElement;
            if (target && id) {
                const offset = window.innerWidth * 0.15;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: top,
                    behavior: 'smooth'
                });
            }
        }}>
        <div className='cta-button group'>
            <div className='bg-circle'/>
                <p className='text'>{text}</p>
                <div className='arrow-wrapper'>
                    <Image src="/images/arrow-down.svg" width={30} height={30} alt="arrow" />
                </div>
        </div>
    </a>
  )
}

export default Button