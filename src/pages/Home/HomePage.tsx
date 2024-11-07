
import {
  AppDownload,
  Herosection,
  FoodSection,
  CategoriesSection,
} from "@components/Sections";
import { useSearchParams } from "react-router-dom";

import toast from "react-hot-toast";


function HomePage() {
  const [searchParams] = useSearchParams();
  return (
    <>
      {searchParams.get("message") ? toast(searchParams.get("message"),{
        style:{
          backgroundColor: "orangered",
          color:"white"
        }
      }) : ""}
      <Herosection />
      <CategoriesSection />
      <FoodSection />
      <AppDownload />
    </>
  );
}

export default HomePage;
