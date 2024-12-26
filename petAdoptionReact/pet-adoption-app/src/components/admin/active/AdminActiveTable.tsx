import { useEffect, useState } from "react"

import axios from "axios"
import { Box, Radio, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import { Pet } from "../../../interfaces/Pet"
import NewPetForm from "./NewPetForm";

interface AdminActiveTableProps {
    selectedPetId: number;
    setSelectedPet: (petId: number) => void;
    allPets: Pet[];
    setAllPets: (pets : Pet[]) => void;
  }

function AdminActiveTable({ selectedPetId, setSelectedPet, allPets, setAllPets}: AdminActiveTableProps) {
    
  return (
    <div>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    fontSize: '2rem'
                }}
            >
                Active Pets
            </Typography>
        </Box>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Select</TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Breed</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Gender</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                
                {allPets.map((pet) => {
                    return (
                        <TableRow key={pet.petId}>
                            <TableCell>
                                <Radio
                                    checked={selectedPetId === pet.petId}
                                    onChange={() => setSelectedPet(pet.petId)}
                                    value={pet.petId}
                                />
                            </TableCell>
                            <TableCell>{pet.petId}</TableCell>
                            <TableCell>{pet.name}</TableCell>
                            <TableCell>{pet.breed}</TableCell>
                            <TableCell>{pet.age}</TableCell>
                            <TableCell>{pet.gender}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
        
    </div>
  )
}

export default AdminActiveTable