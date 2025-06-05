type ButtonProps = {
  className?: string;
  id?: string;
  text?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  children?: React.ReactNode;
};

const Button = ({ className, id, text, href, onClick, children }: ButtonProps) => {
  return (
    <a
      className={`${className ?? ''} cta-wrapper`}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
          return;
        }
        e.preventDefault();
        if (href) {
          const target = document.querySelector(`${href}`) as HTMLElement;
          if (target && id) {
            const offset = window.innerWidth * 0.15;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
              top: top,
              behavior: 'smooth'
            });
          }
        }
      }}
    >
      <div className='cta-button group'>
        <div className='bg-circle' />
        <p className='text'>{children ?? text}</p>
        <div className='arrow-wrapper'>
          <img src="/images/arrow-down.svg" width={30} height={30} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;