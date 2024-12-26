package com.petApp.adoption.controller;

import com.petApp.adoption.models.Pet;
import com.petApp.adoption.service.PetService;
import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pet")
public class PetController {
    PetService petService;

    @Autowired
    public PetController(PetService petService) {
        this.petService = petService;
    }

    @PostMapping("/protected/create")
    @PreAuthorize("hasRole('pet-admin')")
    ResponseEntity<Pet> registerPets(@RequestBody Pet pet) throws Exception {
        Pet result = petService.createPet(pet);
        if(result != null){
            return new ResponseEntity<>(result, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/public/fetch/{petId}")
    ResponseEntity<Pet> fetchPetById(@PathVariable Integer petId) throws Exception {
        Pet result = petService.fetchPetById(petId);
        if (result != null){
            return new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/public/fetchAll")
    ResponseEntity<List<Pet>>  fetchAll() throws Exception {
        List <Pet> result = petService.fetchAll();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/protected/fetchArchive")
    @PreAuthorize("hasRole('pet-admin')")
    ResponseEntity<List<Pet>>  fetchArchive() throws Exception {
        List <Pet> result = petService.fetchArchive();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("/protected/fetchAdopted")
    @PreAuthorize("hasRole('pet-admin')")
    ResponseEntity<List<Pet>>  fetchAdopted() throws Exception {
        List <Pet> result = petService.fetchAdopted();
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


    @DeleteMapping("/protected/delete/{petId}")
    @PreAuthorize("hasRole('pet-admin')")
    ResponseEntity<String> deletePetById(@PathVariable Integer petId) throws Exception {
        String result = petService.deletPetById(petId);
        if (result != null){
            return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
        }else {
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
    }
    @PutMapping("/protected/update")
    @PreAuthorize("hasRole('pet-admin')")
    ResponseEntity<Pet> updatePetById(@RequestBody Pet pet) throws Exception {
        Pet result =  petService.updatePetById(pet);
        if (result != null){
            return new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
    }

    @PatchMapping("/protected/adopt/{petId}")
    ResponseEntity<Pet> adoptPetById(@PathVariable Integer petId) throws Exception {
        Pet adoptedPet = petService.adoptPet(petId);
        if (adoptedPet != null) return new ResponseEntity<>(adoptedPet, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PatchMapping("/protected/archive/{petId}")
    @PreAuthorize("hasRole('pet-admin')")
    ResponseEntity<Pet> archivePetById(@PathVariable Integer petId) throws Exception {
        Pet archivedPet = petService.archivePet(petId);
        if (archivedPet != null) return new ResponseEntity<>(archivedPet, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PatchMapping("/protected/activate/{petId}")
    @PreAuthorize("hasRole('pet-admin')")
    ResponseEntity<Pet> activatePetById(@PathVariable Integer petId) throws Exception {
        Pet activatedPet = petService.activatePet(petId);
        if (activatedPet != null) return new ResponseEntity<>(activatedPet, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}
