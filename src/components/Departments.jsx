import React, { useCallback } from 'react';
 
import { getDepartments } from '../services/api';
 

const Departments = ({ showLoading, hideLoading }) => {
    const getAllDepartments = useCallback(async () => {
        showLoading('Loading departments...');
 
        const response = await getDepartments().then(response => {
            hideLoading();
            return response;
        })
        console.log({ response })
    }, [showLoading, hideLoading]);

    return (
        <button onClick={getAllDepartments}>Buscar departamentos</button>
    )
};
 
export default Departments