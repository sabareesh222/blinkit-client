import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://blinkit-server-tppv.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
