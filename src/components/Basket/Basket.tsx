import React, {FC, useState} from 'react';
import {Box} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import "./basket.css"

interface BasketProps {
    count: number
}

const Basket:FC = () => {

    const {basket} = useTypedSelector(state => state.products)

    const [counter, setCounter] = useState<number>(1)

    const [price, setPrice] = useState(0)

    const filteredBasket = basket.filter((item, index) => {
        return basket.indexOf(item) === index
    })

    const increase = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('increase')
        setCounter(counter + 1)
    }

    const decrease = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('decrease')
        if (counter !== 1) return setCounter(counter - 1)
    }

    console.log('filteredBasket', filteredBasket)

    console.log('counter', counter)

    return (
        <>

            <Box className="basket">
                <h3 className="basket-head">Корзина заказов</h3>
                {filteredBasket.map(el =>
                    <div key={el.id} className="basket-box">
                        <div className="basket-box__descriptions">
                            <img src={el.img} alt="" className="basket-box__img" />
                            <h5 className="basket-box__head">{el.name}</h5>
                            <span className="basket-box__price">{el.price}&#8381;</span>
                        </div>
                        <div className="basket-counter">
                            <button onClick={decrease}>-</button>
                            <span>{counter}</span>
                            <button onClick={increase}>+</button>
                        </div>
                    </div>
                )}
            </Box>
        </>

    );
};

export default Basket;