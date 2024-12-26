import React, { useEffect, useState } from 'react'
import AdminHeader from '../header/AdminHeader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Pet } from '../../../interfaces/Pet'
import AdoptedTable from './AdoptedTable'
import { jwtDecode } from "jwt-decode";

function AdminAdopted() {

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
    axios.get<Pet[]>("http://localhost:8080/api/pet/protected/fetchAdopted", 
        {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("authorization")}`
        }, 
    })
    .then((res) => {
        setAllPets(res.data)
    })
}, [])



  return (
    <div>
      <AdminHeader>
      </AdminHeader>
      <AdoptedTable
        selectedPetId={selectedPetId} 
        setSelectedPet={setSelectedPetId}
        allPets={allPets}
        setAllPets={setAllPets}></AdoptedTable>
    </div>
  )
}

export default AdminAdopted
