import  { memo } from 'react'
import styles from "./style.module.css";
type TContainer = {
    children: React.ReactNode
}

const {container} = styles

const  Container = memo(({children}: TContainer) => {
  return (
    <div className={container}>
        {children}
    </div>
  )
})

export default Container