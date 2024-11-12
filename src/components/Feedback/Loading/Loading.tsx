import { TStatus } from "@types";
// import LottieHandler from "../LottieHandler/LottieHandler";
import CategorieSekelton from "../CategorieSekelton/CategorieSekelton";
import FoodSekelton from "../FoodSekelton/FoodSekelton";

const skeltonTypes = {
  categorie : CategorieSekelton,
  foods: FoodSekelton,
}

type Tloading = {
  status: TStatus;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeltonTypes
};


function Loading({ status, error, children, type='categorie' }: Tloading) {
  const Component = skeltonTypes[type];
  console.log(status)
  return (
    <div>
      {status === "pending" || status === "idle" ? <Component/> : error ? <p>{error}</p> : children}
    </div>
  );
}

export default Loading;
