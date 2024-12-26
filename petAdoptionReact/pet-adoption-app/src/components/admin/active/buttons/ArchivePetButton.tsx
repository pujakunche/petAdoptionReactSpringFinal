import React from 'react'
import { Pet } from '../../../../interfaces/Pet';
import axios from 'axios';
import { Button } from '@mui/material';

interface ArchivePetButtonProps {
    selectedPetId: number;
    setAllPets: React.Dispatch<React.SetStateAction<Pet[]>>;
    checkAuth: () => boolean;
  }

function ArchivePetButton({selectedPetId, setAllPets, checkAuth} : ArchivePetButtonProps) {
    const handleArchive = async (petId: number) => {
        try {
            await axios.patch(`http://localhost:8080/api/pet/protected/archive/${petId}`,
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
      <Button variant="contained" color="secondary" style={{ margin: '5px' }}
          onClick={() => checkAuth() && handleArchive(selectedPetId)}>Archive</Button>
    </>
  )
}

export default ArchivePetButton
