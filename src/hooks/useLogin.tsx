import { zodResolver } from "@hookform/resolvers/zod";
import { actLogin, resetUi } from "@store/auth/authSlice";
import { useAppDispatch, useAppSelectore } from "@store/hooks";
import { singInShema, TSingInShema } from "@validation/singInShema";
import { useEffect } from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";


type TUseLogin = {
   showLoginPopUp?: () => void
}

const useLogin = ({showLoginPopUp}: TUseLogin) => {
    const {status, error, accessToken} = useAppSelectore(state => state.auth)
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useAppDispatch();
    const {
        handleSubmit, 
        register,
        formState: {errors}
    } = useForm<TSingInShema>({
        resolver: zodResolver(singInShema),
        mode: "onBlur"
    })

    useEffect(() => {
        return () => {
            dispatch(resetUi());
        }
    },[dispatch])

    useEffect(() => {
        if(status === "fullfield") {
           const timeOut = setTimeout(() => {
                dispatch(resetUi());
            },1000)

            return () => {
                clearTimeout(timeOut)
            }
        }
      },[dispatch, status])
    
    const submitLoginForm: SubmitHandler<TSingInShema> = async(data) => {
        dispatch(actLogin(data))
        .unwrap()
        .then(() => {
            if(showLoginPopUp) {
                showLoginPopUp();
            }
            toast("Login with Successfuly", {
                icon:"🥳",
                style:{
                    backgroundColor:"green",
                    color:"white"
                }
            })
        })
    }
    
    return {
        handleSubmit,
        register,
        submitLoginForm,
        setSearchParams,
        dispatch,
        searchParams,
        errors,
        status,
        error,
        accessToken,
    }
}

export default useLogin;