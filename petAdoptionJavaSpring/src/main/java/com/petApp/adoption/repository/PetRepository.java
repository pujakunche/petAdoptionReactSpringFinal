package com.petApp.adoption.repository;

import com.petApp.adoption.models.Pet;
import com.petApp.adoption.models.enums.PetStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet,Integer> {
    List<Pet> findByStatus(PetStatus status);

}
