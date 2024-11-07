import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { singUpShema, singUpType } from "@validation/singUpShema";
import useEmailCheckAvailable from "./useEmailCheckAvailable";
import { useAppDispatch, useAppSelectore } from "@store/hooks";
import { actRegister } from "@store/auth/authSlice";
// import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


type TUseRegister = {
  closeLoginPopUp : () => void
}

const useRegister = ({closeLoginPopUp}:TUseRegister) => {
  const {status, user, jwt, error} = useAppSelectore(state => state.auth)
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
    const {
    statusAvailableEmail,
    checkEmailAvailable,
    enterdEmail,
    resetCheckEmailAvailable,
  } = useEmailCheckAvailable();

  const {
    handleSubmit,
    register,
    formState: { errors },
    trigger,
    getFieldState
  } = useForm<singUpType>({
    resolver: zodResolver(singUpShema),
    mode: "onBlur",
  });



  const onBlurCheckEmailAvailable = async(e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const {isDirty, invalid} = getFieldState("email");
    if(isDirty && !invalid && enterdEmail !== e.target.value) {
        checkEmailAvailable(e.target.value)
    }
    if(isDirty && invalid && enterdEmail) {
        resetCheckEmailAvailable()
    }
  }

  const submitFormRegister : SubmitHandler<singUpType> = async(data) => {
    const {username, password, email} = data;
    dispatch(actRegister({username, password, email})).
    unwrap()
    .then(()=> {
      closeLoginPopUp();
      toast("You are Register with Success", {
        icon:"👌",
        style:{
          backgroundColor:"green",
          color:"white"
        }
      })
      navigate("/")

    })  
    .catch((error) => {
        console.log(error)
    })
  }

  return {
    status,
    error,
    user,
    jwt,
    handleSubmit,
    register,
    errors,
    statusAvailableEmail,
    enterdEmail,
    submitFormRegister,
    checkEmailAvailable,
    resetCheckEmailAvailable,
    onBlurCheckEmailAvailable
  };
};

export default useRegister;
