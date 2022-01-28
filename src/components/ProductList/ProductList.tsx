import React, {FC, useEffect, useState} from 'react';
import {fetchProduct} from "../../redux/action-creators/product";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Box, CardActions, Button} from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "./product.css"
import {ProductActionTypes} from "../../redux/reducers/productReducer";

const ProductList: FC = () => {

    const [burger, setBurger] = useState({})
    console.log('setBurger', burger)
    const dispatch = useDispatch()

    const {products} = useTypedSelector(state => state.products)
    const getProduct = useTypedSelector(state => state.products)
    console.log('getProduct', getProduct)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const getCardBurger = (burger:object) => {
        setBurger(burger)

    }

    return (
        <Grid sx={{ display: 'flex'}}>
            <Box className="product">
                {products.map(product =>
                    <Card sx={{ maxWidth: 320, margin: '0 15px 15px 0' }} key={product.id} onClick={() => dispatch({type: ProductActionTypes.GET_PRODUCT, payload: product})}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="320"
                                image={product.img}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className="product__description">
                                    {product.description}
                                </Typography>
                                <Typography variant="body2">
                                    {product.price} &#8381;
                                </Typography>
                                <div>click</div>
                            </CardContent>
                        </CardActionArea>

                    </Card>
                )}
            </Box>
            <Box className="basket">
                коризна пуста
            </Box>
        </Grid>
    );
};

export default ProductList;