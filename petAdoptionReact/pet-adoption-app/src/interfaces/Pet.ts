import { User } from "./User";

export interface Pet {
    petId: number;
    name: string;
    breed: string;
    age: number;
    gender: string;
    status: string;
    adopter: User;
}