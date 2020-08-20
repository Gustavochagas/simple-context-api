import React, { useCallback } from 'react';
import { getUsers } from '../services/api';
 
const Users = ({ showLoading, hideLoading }) => {
    const getAllUsers = useCallback(async () => {
        showLoading('Loading users...');
 
        const response = await getUsers().then(response => {
            hideLoading();
            return response;
        });
        console.log({ response });
    }, [showLoading, hideLoading]);
 
    return (
        <button onClick={getAllUsers}>Buscar usuários</button>
    )
}
 
export default Users;