import React, {FC, useEffect, useMemo, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {ProductActionTypes} from "../../redux/reducers/productReducer";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ModalItemProps {
    id?: number,
    name?: string,
    description?: string,
    img?: string,
    priceStart?: number | 0,
    priceEnd?: number | 0,
    ingredients?: any[]
}

const ModalItem: FC<ModalItemProps> = () => {

    const dispatch = useDispatch();

    const {product}: any = useTypedSelector(state => state.products)

    const obj = useTypedSelector(state => state.products)

    const [totalCount, setTotalCount] = useState<number>(product.priceStart)

    const [base, setBase] = useState<ModalItemProps>({})



    useEffect(() => {
        setBase({
            ...product,

        })
        setTotalCount(product.priceStart)
    }, [product])


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, num: number, str: string) => {

        let checked = event.target.checked;
        if (checked) {
            setTotalCount(totalCount + num)
        } else {
            setTotalCount(totalCount - num)
        }
        setBase({
            ...base,
            ingredients: base?.ingredients?.map((element:any) => ({
                ...element,
                checked: element.name === str ? event.target.checked : element.checked
            })),
            priceEnd: checked ? totalCount + num : totalCount - num
        })
    };

    console.log('totalCount', totalCount)

    const addDataBasket = () => {
        setBase({...base, ...product})
        dispatch({
            type: ProductActionTypes.SET_BASKET,
            payload: {
                ...base,
                count: 1
            }
        })
        dispatch({
            type: ProductActionTypes.CLOSE_MODAL,
            payload: false
        })
        setTotalCount(product.priceStart)
    }

    console.log('basebase', base)

    return (
        <>
            <Modal
                open={obj.modal}
                onClose={() => dispatch({type: ProductActionTypes.CLOSE_MODAL, payload: false})}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <img src={product.img} alt=""/>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}} variant="h6">
                        {product.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}} variant="body2">
                        {product.description}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}} variant="body2">
                        {product.ingredients?.map((el: any, index: number) =>
                            <span key={index}>
                                <label htmlFor={el.name}>{el.name} {el.value}</label>
                                <input type="checkbox"
                                       name={el.name}
                                       id={el.name}
                                       onChange={(event) => handleChange(event, el.value, el.name)}
                                />
                            </span>
                        )}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Цена: {totalCount}  &#8381;
                    </Typography>
                    <Button variant="contained" onClick={addDataBasket}>Добавить в корзину</Button>
                </Box>
            </Modal>
        </>
    );
};


export default ModalItem;