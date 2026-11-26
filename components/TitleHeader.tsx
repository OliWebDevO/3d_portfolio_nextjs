const TitleHeader = ({title, cn} : TitleHeaderProps) => {
  return (
    <div className={`flex flex-col items-center gap-5 ${cn}`}>
      <h2 className="font-semibold text-3xl md:text-5xl text-center">
        {title}
      </h2>
    </div>
  )
}

export default TitleHeader