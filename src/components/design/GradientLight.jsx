// This component is a light in the background
export const GradientLight = ({opacity}) => {
    return (
        <div className={`absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#e25d5d] to-[#28206C]/0 to-70% pointer-events-none ${opacity ? "opacity-100" : "opacity-50"}`} />
      );
};
