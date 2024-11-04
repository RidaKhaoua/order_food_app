
import { memo } from 'react';
import styles from './style.module.css';

const {spinner} = styles;

function Spinner() {
  return (
    <div className={spinner}></div>
  )
}

export default memo(Spinner)