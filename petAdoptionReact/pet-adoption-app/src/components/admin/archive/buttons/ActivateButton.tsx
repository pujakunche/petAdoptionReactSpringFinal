import React from 'react'
import { Pet } from '../../../../interfaces/Pet';
import axios from 'axios';
import { Button } from '@mui/material';

interface ArchivePetButtonProps {
    selectedPetId: number;
    setAllPets: React.Dispatch<React.SetStateAction<Pet[]>>;
    checkAuth: () => boolean;
  }

function ActivatePetButton({selectedPetId, setAllPets, checkAuth} : ArchivePetButtonProps) {
    const handleActivate = async (petId: number) => {
        try {
            await axios.patch(`http://localhost:8080/api/pet/protected/activate/${petId}`,
            {},
            {
                headers: {
                Authorization: `Bearer ${localStorage.getItem("authorization")}`
                }, 
            }
            );
            setAllPets(prevPets => prevPets.filter(pet => pet.petId !== petId));
            
        } catch (error) {
            console.error('Error archiving pet:', error);
        }
    };
  return (
    <>
      <Button variant="contained" color="success" style={{ margin: '5px' }}
          onClick={() => checkAuth() && handleActivate(selectedPetId)}>Activate</Button>
    </>
  )
}

export default ActivatePetButton
