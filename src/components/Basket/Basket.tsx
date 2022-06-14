import React, {FC, useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import "./basket.css"

const Basket:FC = () => {

    const {basket} = useTypedSelector(state => state.products)

    const [results, setResults] = useState<any []>([])

    useEffect(() => {
        const last = basket[basket.length - 1]

        if(last !== undefined) {
            setResults([...results, last])
        }

    }, [basket])

    const increase = (e: React.MouseEvent<HTMLButtonElement>, num: number, index: number, cost: number) => {
        console.log('increase')
        setResults([...results.map((el: any) => ({
            ...el,
            count: el.id === index ? num + 1 : el.count,
            priceEnd: el.id === index ? el.priceEnd + cost : el.priceEnd
        }))]);
    }

    const decrease = (e: React.MouseEvent<HTMLButtonElement>, num: number, index: number, cost: number) => {
        console.log('decrease')

        console.log('results', results)
        setResults([...results.map((el: any) => ({
            ...el,
            count: (el.id === index && el.count !== 1) ? num - 1 : el.count,
            priceEnd: (el.id === index && el.count !== 1) ? el.priceEnd - cost : el.priceEnd
        }))]);
    }

    return (
        <>
            <Box className="basket">
                <h3 className="basket-head">Корзина заказов</h3>
                {results.reduce((r, i) =>
                        !r.some((j: any) => !Object.keys(i).some(k => i[k] !== j[k])) ? [...r, i] : r
                    , []).map((el: any) =>
                    <div key={el.id} className="basket-box">
                        <div className="basket-box__descriptions">
                            <img src={el.img} alt="" className="basket-box__img" />
                            <h5 className="basket-box__head">{el.name}</h5>
                            <span className="basket-box__price">{el.priceEnd}&#8381;</span>
                        </div>
                        <div className="basket-counter">
                            <button onClick={(e) => decrease(e, el.count, el.id, el.priceStart)}>-</button>
                            <span>{el.count}</span>
                            <button onClick={(e) => increase(e, el.count, el.id, el.priceStart)}>+</button>
                        </div>
                    </div>
                )}
            </Box>
        </>

    );
};

export default Basket;