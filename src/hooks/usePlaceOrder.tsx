import { zodResolver } from "@hookform/resolvers/zod"
import { useAppSelectore } from "@store/hooks";
import { checkoutShema, checkoutType } from "@validation/checkoutShema"
import { useForm } from "react-hook-form"

const usePlaceOrder = () => {
    const jwt = useAppSelectore(state => state.auth.jwt);
    const { status, error, foodIdAndQuantity, foods } = useAppSelectore(
        (state) => state.cart
      );
      const fullfoodInfo = foods.map((food) => ({
        ...food,
        quantity: foodIdAndQuantity[food.id] || 0,
      }));
    
    const {
        handleSubmit,
        register,
        formState:{errors}
    } = useForm<checkoutType>({
        resolver: zodResolver(checkoutShema),
        mode:"onBlur"
    })


    return {
        status,
        error,
        fullfoodInfo,
        jwt,
        handleSubmit,
        register,
        errors
    }
}

export default usePlaceOrder