
import fisrtLoading from "@assets/lottieFiles/first-loading.json";
import empty from "@assets/lottieFiles/empty.json";
import loading from "@assets/lottieFiles/loading.json";
import Lottie from "lottie-react";

import styles from "./style.module.css";

const lottieFileMap = {
  fisrtLoading,
  empty,
  loading,
};

type TLottieHandler = {
  type: keyof typeof lottieFileMap;
  message?: string;
};

const { lottie_file } = styles;

function LottieHandler({ type, message }: TLottieHandler) {
  const lottie = lottieFileMap[type];

  return (
    <div className={lottie_file}>
      <Lottie
        animationData={lottie}
        style={{ width: "190px", marginBottom: "10px" }}
      />
      {message && <h3>{message}</h3>}
    </div>
  );
}

export default LottieHandler;
