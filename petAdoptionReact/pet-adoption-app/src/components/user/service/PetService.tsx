import axios from "axios";
// import axiosInstance from '../..//axios/AxiosInterceptor';
import axiosInstance from "../../../axios/AxiosInterceptor";

class PetService {

    async getAllPets(){
        return await axios.get("http://localhost:8080/api/pet/public/fetchAll");
    }

}

export default PetService;