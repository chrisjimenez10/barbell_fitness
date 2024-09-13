
const Section = ({
    id,
    className,
    customPaddings,
    children
}) => {

  return (

    <div
    id={id}
    className={`relative ${className || ""} ${customPaddings || "py-10 lg:py-16 xl:py-20"}`}
    >
        {children}
    </div>

  )
}

export default Section;