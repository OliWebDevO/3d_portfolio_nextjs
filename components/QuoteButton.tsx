'use client'
import Image from "next/image"

// Same look as ProjectButton; opens the navbar contact form with the subject preselected.
// The mailto link stays as a fallback when JavaScript is unavailable.
const QuoteButton = ({ className, text, subject, fallbackHref }: { className?: string; text: string; subject: string; fallbackHref: string }) => {
  return (
    <a
      className={`${className ?? ''} cta-wrapper`}
      href={fallbackHref}
      onClick={(e) => {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('open-contact', { detail: { subject } }))
      }}
    >
      <div className='cta-button group'>
        <div className='bg-circle'/>
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
          <Image src="/images/arrow-right.svg" width={30} height={30} alt="" />
        </div>
      </div>
    </a>
  )
}

export default QuoteButton
