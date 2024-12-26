import { Button } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { Pet } from '../../../../interfaces/Pet';

interface RemovePetButtonProps {
    selectedPetId: number
    setAllPets : React.Dispatch<React.SetStateAction<Pet[]>>;
    checkAuth: () => boolean
}

function RemovePetButton({selectedPetId, checkAuth, setAllPets} : RemovePetButtonProps) {
    const handleRemove = async (petId : number) => {
        try {
          await axios.delete(`http://localhost:8080/api/pet/protected/delete/${petId}`, 
                {
                    headers: {
                    Authorization: `Bearer ${localStorage.getItem("authorization")}`
                    }, 
                }
            );
            console.log(localStorage.getItem("token"))
            setAllPets(prevPets => prevPets.filter(pet => pet.petId !== petId));
        } catch (error) {
          console.error('Error removing pets:', error);
        }
      };
  return (
    <>
        <Button variant="contained" color="error" style={{ margin: '5px' }}
          onClick={(() => checkAuth() && handleRemove(selectedPetId))}>Remove</Button>
    </>
    
  )
}

export default RemovePetButton
