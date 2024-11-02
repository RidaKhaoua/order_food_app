import  { Fragment } from 'react'
import styles from "./style.module.css";
import { LottieHandler } from '@components/Feedback';
type TGridList<T> = {
    data: T[],
    renderData: (item: T) => React.ReactNode;
    message: string,
    style: React.CSSProperties
}
type hasId = {
    id?: string | number
}

const {grid_list} = styles;

function GridList<T extends hasId>({data, renderData, message, style}:TGridList<T>) {
    const displayData = data.length > 0 ? data.map(item => {
        return <Fragment key={item.id}>
            {renderData(item)}
        </Fragment>
    }) : <LottieHandler type='empty' message={message}/>
    return (
        <div className={grid_list} style={data.length > 0 ? style :{} }>{displayData}</div>
    )
}

export default GridList