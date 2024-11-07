import { TFood } from '@types'
import Theaders from './Theaders/Theaders';
import styles from "./style.module.css"
import Tbody from './Tbody/Tbody';
import { useAppDispatch } from '@store/hooks';
import { removeFoodFromCart } from '@store/Cart/cartSlice';

const {table} = styles

type TTAble = {
    headers: string[],
    data: TFood[];
}

function Table({headers, data}: TTAble) {
  const dispatch = useAppDispatch();
  const handleRemoveFood = (documentId: string) => {
      dispatch(removeFoodFromCart(documentId));
  }
  return (
    <table className={table}>
        <Theaders headers={headers} />
        <Tbody data={data} handleRemoveFood={handleRemoveFood}/>
    </table>
  )
}

export default Table