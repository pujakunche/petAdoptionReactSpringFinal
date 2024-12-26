import axios from "axios";
import { RegisterUser } from "../../../interfaces/RegisterUser";

class UserService {

    async registerUsers(register : RegisterUser){
        return await axios.post("http://localhost:8080/user/register", register)
    }
}

export default UserService;