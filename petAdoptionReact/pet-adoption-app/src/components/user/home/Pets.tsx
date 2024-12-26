import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import Navbar from '../../navbar/Navbar';
import PetService from '../service/PetService';
import { Pet } from '../../../interfaces/Pet';
import axiosInstance from '../../../axios/AxiosInterceptor';


function Pets() {

    let petService = new PetService;

    const [allPets, setAllPets] = useState<any[]>([]);

    // function AdoptPet(petId: number) {
    //     petService.adoptAPet(petId)
    //         .then((res) => {
                // alert("Adoption Attempts was successful")
    //             console.log("Adoption was sucesful")
    //         }).catch(error => {
    //             alert("Adoption attempt failed :  " + error)
    //             console.log("Adoption attempt failed  :  " + error)
    //         })
    // }

   async function AdoptPet(petId: number) {
        try {
        await axiosInstance.patch("http://localhost:8080/api/pet/protected/adopt/"+petId,{},
            {
                headers: {
                Authorization: `Bearer ${localStorage.getItem("authorization")}`
                }, 
            }
            );
            axios.get<Pet[]>("http://localhost:8080/api/pet/public/fetchAll")
            .then((res) => {
                alert("Adoption Attempts was successful")
                setAllPets(res.data)
            })
        } catch (error) {
            console.error('Adopting pet exception', error);
        }
    }

    useEffect(() => {
            petService.getAllPets().then((response) => {
                setAllPets(response.data)
            }).catch(error => {
                console.error('Fetching all pets error', error);
            })
    }, [])

    return (
        <div className='root'>
            <Navbar />
            <Container>
                <h1 className='titles'>Pets</h1>
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Select</th>
                                <th>Breed</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Condition</th>
                                <th>Gender</th>
                                <th>Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allPets.map((item) => (
                                <tr key={item.petId}>
                                    <td>
                                        <Button
                                            type="submit"
                                            onClick={() => AdoptPet(item.petId)}
                                        >
                                            Adopt
                                        </Button>
                                    </td>
                                    <td>{item.breed}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.petCondition}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.status}</td>
                                </tr> 
                            ))}

                        </tbody>
                    </Table>
                </div>
            </Container>

        </div>
    )
}

export default Pets