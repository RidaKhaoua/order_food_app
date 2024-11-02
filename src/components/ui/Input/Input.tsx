import { HTMLAttributes } from "react"

type IProps = HTMLAttributes<HTMLInputElement>

function Input({...rest}: IProps) {
  return (
    <Input {...rest}/>
  )
}

export default Input