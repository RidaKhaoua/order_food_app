
import {
  AppDownload,
  Herosection,
  FoodSection,
  CategoriesSection,
} from "@components/Sections";
import { useSearchParams } from "react-router-dom";
import { Alert } from "@components/Common";


function HomePage() {
  const [searchParams] = useSearchParams();
  return (
    <>
      {searchParams.get("message") && (
        <Alert
          className="warning"
          text={searchParams.get("message") as string}
        />
      )}
      <Herosection />
      <CategoriesSection />
      <FoodSection />
      <AppDownload />
    </>
  );
}

export default HomePage;
