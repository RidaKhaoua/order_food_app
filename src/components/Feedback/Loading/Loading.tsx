import { TStatus } from "@types";
import LottieHandler from "../LottieHandler/LottieHandler";

type Tloading = {
  status: TStatus;
  error: null | string;
  children: React.ReactNode;
};

function Loading({ status, error, children }: Tloading) {
  return (
    <div>
      {status === "pending" ? <LottieHandler type="loading"/> : error ? <p>{error}</p> : children}
    </div>
  );
}

export default Loading;
