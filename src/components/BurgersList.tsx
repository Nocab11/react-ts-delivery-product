import React, {FC, useEffect} from 'react';
import {fetchBurger} from "../redux/action-creators/burger";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../redux/action-creators/user";


const BurgersList: FC = () => {
    const dispatch = useDispatch()

    const dataUsers = useTypedSelector(state => state.burger)
    console.log('dataUsers', dataUsers.burgers)

    useEffect(() => {
        dispatch(fetchBurger())
    }, [])

    return (
        <div>
            <h1>Список Бургеров</h1>

            {dataUsers.burgers.map(user =>
                <div key={user.id}>
                    <div>{user.name}</div>
                </div>
            )}
        </div>
    );
};

export default BurgersList;