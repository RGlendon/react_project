import s from "./Paginator.module.css";
import React, {useState} from "react";

const Paginator = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return (
        <div>
            <button onClick={() => { setPortionNumber(1) }}>to the start</button>
            {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Back</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        className={`${s.pageNumber} ${props.currentPage === p ? s.selectedPage : null}`}
                        onClick={() => { props.setCurrentPage(p) }} key={p}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
            <button onClick={() => { setPortionNumber(portionCount) }}>to the end</button>
        </div>
    );
};

export default Paginator;