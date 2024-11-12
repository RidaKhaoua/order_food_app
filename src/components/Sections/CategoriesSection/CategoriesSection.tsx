import { Categories } from '@components/E-food'
import CategorieHeading from '@components/E-food/Categories/CategorieHeading';
import useCategorie from '@hooks/useCategorie';


function CategoriesSection() {
  const {categories, status, error} = useCategorie();

  return (
    <>
        <CategorieHeading />
        <Categories data={categories} status={status} error={error}/>
    </>
  )
}

export default CategoriesSection