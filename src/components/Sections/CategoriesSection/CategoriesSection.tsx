import { Categories } from '@components/E-food'
import useCategorie from '@hooks/useCategorie';


function CategoriesSection() {
  const {categories, status, error} = useCategorie();

  return (
    <>
        <Categories data={categories} status={status} error={error}/>
    </>
  )
}

export default CategoriesSection