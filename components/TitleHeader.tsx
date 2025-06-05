'use client'

const TitleHeader = ({title, sub, cn} : TitleHeaderProps) => {
  return (
    <div className={`flex flex-col items-center gap-5 ${cn}`}>
       {sub && (
        <div className="hero-badge">
          <p>{sub}</p>
        </div>
      )}
      <div className="font-semibold text-3xl md:text-5xl text-center">
        {title}
      </div>
    </div>
  )
}

export default TitleHeader