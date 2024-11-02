
import { assets } from '@assets'
import styles from "./style.module.css";

const {app_download, app_download_platforms} = styles;

function AppDownload() {
  return (
    <div className={app_download}>
        <p>for better experience download <br /> Tomato App</p>
        <div className={app_download_platforms}>
            <img src={assets.app_store} alt="appstore" />
            <img src={assets.play_store} alt="playstore" />
        </div>
    </div>
  )
}

export default AppDownload