import React, {FC, useState} from 'react';
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

const ModalItem: FC = () => {

    const dispatch = useDispatch();

    const obj = useTypedSelector(state => state.products)

    const [totalCount, setTotalCount] = useState(obj.total)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, num: number, str: string) => {
        let checked = event.target.checked;
        console.log(str)
        if (checked) {
            setTotalCount(prev => prev + num)
        } else {
            setTotalCount(prev => prev - num)
        }
    };



    interface ProductItem {
        id?: number,
        name?: string,
        description?: string,
        img?: string,
        priceStart?: number | 0,
        ingredients?: any[]
    }

    const product: ProductItem = obj.product


    const [num, setNum] = useState(0)



    const [base, setBase] = useState({})

    const addDataBasket = () => {
        setBase({...base, ...product})
        dispatch({
            type: ProductActionTypes.SET_BASKET,
            payload: {
                ...product,
                count: 1
            }
        })
    }

    console.log('base', base)

    return (
        <>
            <Button>Open modal</Button>
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
                        {product.ingredients?.map((el, index) =>
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
                        Цена: {product.priceStart}  &#8381;
                    </Typography>
                    <Button variant="contained" onClick={addDataBasket}>Добавить в корзину</Button>
                </Box>
            </Modal>
        </>
    );
};


export default ModalItem;