
import {assets} from "@assets"

import styles from "./style.module.css";

type TWarning = {
    text : string
}

const {warning} =styles 

function Warning({text}: TWarning) {
  return (
    <div className={warning}>
      {text}
      <img src={assets.warning_icon} alt="warning icon" />
    </div>
  )
}

export default Warning