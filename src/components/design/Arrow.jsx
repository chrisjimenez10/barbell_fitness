const Arrow = ({className}) => {
    return (
      <svg className={`ml-2 fill-n-1 translate-y-1 ${className || ""}`} width="24" height="24">
        <path d="M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414z" />
      </svg>
    );
  };
  
  export default Arrow;