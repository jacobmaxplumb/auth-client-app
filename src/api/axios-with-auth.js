import axios from "axios";

export const axiosWithAuth = () => {
    const token = `Bearer ${localStorage.getItem('token')}`;

    return axios.create({
        headers: {
            Authorization: token,
        }
    })
}