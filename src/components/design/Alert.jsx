import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { companyLogo } from "../../assets";
import { useEffect } from "react";

const Alert = ({formSent, setFormSent}) => {

  const navigate = useNavigate();

  //Create SubClass Object (MySwal) with ALL the same instance and static methods as Swal
  const MySwal = withReactContent(Swal);
  
  //Function
  const showAlert = () => {
    //Documentation to customize Alert Window in README.md
    MySwal.fire({
      title: <h1 className="text-n-8">Thank You!</h1>,
      html: <p className="text-n-8">Message was sent successfully.</p>,
      icon: "success",
      iconColor: "#FF6666",
      confirmButtonColor: "#FF6666",
      background: `url(${companyLogo}) white no-repeat top left / 165px 165px`,
      timer: 3000,
      didClose: ()=> {
        setTimeout(() => navigate("/"), 1000);
      }
    });
  };

  useEffect(()=>{
    if(formSent){
      showAlert();
      setFormSent(false);
    }
  },[formSent]);

  return (
    <></>
  )
}

export default Alert;