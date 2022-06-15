import React, {FC, useEffect, useMemo, useState} from 'react';
import {Box} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import "./basket.css"
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
// @ts-ignore
import decreases from "../../assets/icon/decrease.svg";
// @ts-ignore
import increases from "../../assets/icon/increase.svg";

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

    const deletedItem = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        setResults([...results.filter((el, i) => id !== i)]);
    }

    const totalPrice = useMemo(() => {
        return results.reduce((acc, route) => acc + route.priceEnd, 0)
    }, [results])

    console.log(totalPrice, 'totalPrice')

    console.log('results', results)

    return (
        <>
            <Box className="basket">
                {results.length ? (
                    <>
                        <h3 className="basket-head">Корзина заказов</h3>
                        <div className="basket-content">
                            {results.reduce((r, i) =>
                                    !r.some((j: any) => !Object.keys(i).some(k => i[k] !== j[k])) ? [...r, i] : r
                                , []).map((el: any, index: number) =>
                                <div key={index} className="basket-box">
                                    <div className="basket-box__descriptions">
                                        <img src={el.img} alt="" className="basket-box__img" />
                                        <h5 className="basket-box__head">{el.name}</h5>
                                        <span className="basket-box__price">{el.priceEnd}&#8381;</span>
                                    </div>
                                    <div className="basket-counter">
                                        <button className="decrease" onClick={(e) => decrease(e, el.count, el.id, el.priceStart)}>
                                            <img src={decreases} alt=""/>
                                        </button>
                                        <span className="count">{el.count}</span>
                                        <button className="increase" onClick={(e) => increase(e, el.count, el.id, el.priceStart)}>
                                            <img src={increases} alt=""/>
                                        </button>
                                    </div>
                                    <div className="basket-deleted">
                                        <Button variant="outlined" color="error" onClick={(e => deletedItem(e, index))}>
                                            Удалить товар
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link to="/order" className="basket-btn">Заказать {totalPrice} &#8381;</Link>
                    </>
                ) : (
                    <h3 className="basket-head">Корзина заказов Пуста</h3>
                )}
            </Box>
        </>

    );
};

export default Basket;