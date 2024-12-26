import { Pet } from "./Pet";

export interface User {
    userId: number;
    sub: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    adoptedPets: Pet[];
}

