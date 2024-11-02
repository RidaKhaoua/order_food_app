import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsShema, TContactUsShema } from "@validation/contactUsShema";
import { SubmitHandler, useForm } from "react-hook-form";

const useContactus = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<TContactUsShema>({
        resolver:zodResolver(contactUsShema),
        mode: "onBlur"
    })

    const onSubmitForm: SubmitHandler<TContactUsShema> = async(data) => {
        console.log(data);
    }


    return {
        onSubmitForm,
        register,
        handleSubmit,
        errors
    }
}

export default useContactus;