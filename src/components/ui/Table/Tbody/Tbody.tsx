
import { TFood } from "@types";
import { assets } from "@assets";
import styles from "../style.module.css";
type TBody = {
  data: TFood[];
  handleRemoveFood: (id: number | string) => void;
};

const { tbody_remove, tbody_price } = styles;

function Tbody({ data, handleRemoveFood }: TBody) {
  return (
    <tbody>
      {data.map((item) => {
        return (
          <tr key={item.id}>
            <td>
              <img src={item.image} alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td className={tbody_price}>
              <span>{item.price.toFixed(2)}$</span>
            </td>
            <td>{item.quantity}</td>
            <td>{(item.price * (item.quantity || 1)).toFixed(2)}$</td>
            <td
              className={tbody_remove}
              onClick={() => handleRemoveFood(item.id)}>
              <img src={assets.cross_icon} alt="cross icon" />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default Tbody;
