import React, { useEffect, useState } from 'react'
import AdminHeader from '../header/AdminHeader'
import AdminActiveTable from './AdminActiveTable'
import { Button } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Pet } from '../../../interfaces/Pet'
import AddPetButton from './buttons/AddPetButton'
import ArchivePetButton from './buttons/ArchivePetButton'
import RemovePetButton from './buttons/RemovePetButton'
import { jwtDecode } from 'jwt-decode'

function AdminActive() {

  const navigate = useNavigate(); // Initialize navigate hook

  // Redirect to login page if no token is found
  const checkAuth = () => {
    const token = localStorage.getItem("authorization");
    console.log(token)
    if (!token) {
      console.error("No JWT token found, redirecting to login...");
      navigate("/login"); // Redirect to login page
      return false;
    }

    try {
        const decoded: any = jwtDecode(token);
        
        // Check if the 'pet-admin' role exists
        const roles = decoded?.resource_access?.["pet-app"]?.roles || [];
        if (!roles.includes("pet-admin")) {
          console.error("User does not have pet-admin role, redirecting to login...");
          navigate("/login");
          return false;
        }
      } catch (error) {
        console.error("Invalid JWT token, redirecting to login...");
        navigate("/login");
        return false;
      }
    
      // Token is valid, and user has 'pet-admin' role
      return true;
    };

    useEffect(() => {
    
      checkAuth()
    }, []);
  

  const [selectedPetId, setSelectedPetId] = useState(-1);
  const [allPets, setAllPets] = useState<Pet[]>([])

  useEffect(() => {
    axios.get<Pet[]>("http://localhost:8080/api/pet/public/fetchAll")
    .then((res) => {
        setAllPets(res.data)
    })
}, [])

  return (
    <div>
      <AdminHeader>
      </AdminHeader>
      <div style={{margin: '20px auto', textAlign: 'center'}}>
        <AddPetButton checkAuth={checkAuth} setAllPets={setAllPets}></AddPetButton>
        <ArchivePetButton 
          selectedPetId={selectedPetId}
          setAllPets={setAllPets} 
          checkAuth={checkAuth}>
        </ArchivePetButton>
        <RemovePetButton selectedPetId={selectedPetId} checkAuth={checkAuth} setAllPets={setAllPets}></RemovePetButton>
      </div>
      <AdminActiveTable 
        selectedPetId={selectedPetId} 
        setSelectedPet={setSelectedPetId}
        allPets={allPets}
        setAllPets={setAllPets}></AdminActiveTable>
      
    </div>
    
  )

  
}




export default AdminActive
