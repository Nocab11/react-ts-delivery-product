import React, {FC, useEffect} from 'react';
import {fetchProduct} from "../../redux/action-creators/product";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Box} from "@mui/material";
import "./product.css"
import {ProductActionTypes} from "../../redux/reducers/productReducer";
import Basket from "../Basket/Basket";
import Button from "@mui/material/Button";

const ProductList: FC = () => {

    const dispatch = useDispatch()

    const {products} = useTypedSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])




    return (
        <Grid>
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
                                    {product.priceEnd} &#8381;
                                </Typography>
                                <Button variant="contained">Добавить в корзину</Button>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )}
            </Box>
            <Basket />
        </Grid>
    );
};

export default ProductList;