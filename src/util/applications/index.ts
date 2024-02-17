'use server';

import { getAccessToken } from '../authentication';
import axios from 'axios';

const API_URL = process.env.PUBLIC_API_URL as string;

export const getApplications = async () => {
    const token = await getAccessToken();

    if (!token) {
        return null;
    }
    
    const response = await axios.get(`${API_URL}/applications/`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    return response.data;
};