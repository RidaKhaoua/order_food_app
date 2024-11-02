
import { Link } from 'react-router-dom'
import styles from "./styles.module.css";


type TFootercenter = {
    dataLink: string[]
}

const {footer_center, footer_center_title} = styles;

function Footercenter({dataLink}: TFootercenter) {
    const dislayDataLink = dataLink.map(linkItem => {
        return <Link to="/" key={linkItem}>
            <li>{linkItem}</li>
        </Link>
    })
  return (
    <div className={footer_center}>
        <h2 className={footer_center_title}>COMPANY</h2>
        <ul>
            {dislayDataLink}
        </ul>
    </div>
  )
}

export default Footercenter