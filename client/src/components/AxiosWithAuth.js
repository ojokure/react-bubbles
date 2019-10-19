import axios from 'axios'



export default function axiosWithAuth(){

    const token = localStorage.getItem('token')

    const axiosInstance = axios.create({
            baseURL: 'http://localhost:5000/api',
            headers: {
            'Content-Type': 'application/json',
             Authorization: token,
            }
        })

        return axiosInstance
    
}