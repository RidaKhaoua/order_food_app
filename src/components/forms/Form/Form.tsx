
import styles from "./style.module.css"

type TForm = {
  onSubmit : () => void,
    children: React.ReactNode
}

const {form} = styles

function Form({children, onSubmit}: TForm) {
  return (
    <form className={form} onSubmit={onSubmit}>
        {children}
    </form>
  )
}

export default Form