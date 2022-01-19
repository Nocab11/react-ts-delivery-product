import React, {useEffect} from 'react';

import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../redux/action-creators/user";

const UserList = () => {

    const dispatch = useDispatch()

    const dataUsers = useTypedSelector(state => state.user)
    console.log('dataUsers', dataUsers.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <h1>Список Пользователей</h1>
            {/*{users.map(user =>*/}
            {/*    <div key={user.id}>*/}
            {/*        <div>{user.name}</div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default UserList;