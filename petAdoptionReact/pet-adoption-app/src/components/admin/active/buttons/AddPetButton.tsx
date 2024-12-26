import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { Pet } from '../../../../interfaces/Pet';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  interface AddPetButtonProps {
    checkAuth: () => boolean;
    setAllPets: React.Dispatch<React.SetStateAction<Pet[]>>;
  }

function AddPetButton(
    {checkAuth, setAllPets} : AddPetButtonProps
) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // form state
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    const handleAddPet = async () => {
        try {
            const petData = { name, breed, age, gender };
            await axios.post(`http://localhost:8080/api/pet/protected/create`,
            petData,
            {
                headers: {
                Authorization: `Bearer ${localStorage.getItem("authorization")}`
                }, 
            }
            );
            handleClose();
            axios.get<Pet[]>("http://localhost:8080/api/pet/public/fetchAll")
            .then((res) => {
                setAllPets(res.data)
            })
        } catch (error) {
            console.error('Error archiving pet:', error);
        }
    };

  return (
    <>
        <Button variant="contained" color="success" style={{ margin: '5px' }}
          onClick={handleOpen}>Add pet</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add New Pet
                </Typography>
                {/* We need to add in some inputs for the values */}
                <TextField label="Name" variant="outlined" margin="normal" value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <TextField label="Breed" variant="outlined"margin="normal"value={breed}
                    onChange={(e) => setBreed(e.target.value)} 
                />
                <TextField label="Age" variant="outlined" margin="normal" type="number" value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <TextField label="Gender" variant="outlined" margin="normal" value={gender}
                    onChange={(e) => setGender(e.target.value)} // Update gender state
                />
                <Button variant="contained" color="success" style={{ margin: '5px' }}
                onClick={(() => checkAuth() && handleAddPet())}>Submit</Button>
            </Box>
        </Modal>
    </>
  )
}

export default AddPetButton
