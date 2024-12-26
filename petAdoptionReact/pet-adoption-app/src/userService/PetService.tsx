import axios from "axios";

class PetService {

    async getAllPets(){
        // get all active pets
        return await axios.get("http://localhost:8080/api/pet/public/fetchAll");
    }

}


export default PetService;