import axios from "axios";
import { useState } from "react"

type TStatus = "idle" | "checking" | "available" |"notAvailable" | "failed";

const useEmailCheckAvailable = () => {
    const [statusAvailableEmail, setStatusAvailableEmail] = useState<TStatus>("idle");
    const [enterdEmail, setEntredEmail] = useState<null | string>(null);

    const checkEmailAvailable = async(email:string) => {
        setStatusAvailableEmail("checking");
        setEntredEmail(email);
        try {
            const response = axios.get(`/users?email=${email}`);
            if(!(await response).data.length) {
                setStatusAvailableEmail("available");
            } else {
                setStatusAvailableEmail("notAvailable");
            }
        } catch (error) {
            setStatusAvailableEmail("failed");
            console.log(error);
        }
    }

    const resetCheckEmailAvailable = () => {
        setStatusAvailableEmail("idle");
        setEntredEmail(null)
    }

    return {
        checkEmailAvailable,
        resetCheckEmailAvailable,
        statusAvailableEmail,
        enterdEmail
    }
}

export default useEmailCheckAvailable