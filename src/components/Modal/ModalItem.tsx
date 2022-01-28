import React, {FC} from 'react';
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    interface ProductItem {
        id?: number,
        name?: string,
        description?: string,
        img?: string,
        price?: number,
        ingredients?: any[]
    }

    const obj = useTypedSelector(state => state.products)

    const product:ProductItem = obj.product


    return (
        <div>
            {obj.modal &&
            <div style={{background: 'red', width: 300, height: 300}}
                 onClick={() => dispatch({type: ProductActionTypes.CLOSE_MODAL, payload: false})}>
                {product.id}
            </div>
            }

            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={obj.modal}
                onClose={() => dispatch({type: ProductActionTypes.CLOSE_MODAL, payload: false})}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {product.id}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        {product.id}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};


export default ModalItem;