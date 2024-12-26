package com.petApp.adoption.service;

import com.petApp.adoption.models.Pet;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.BadRequestException;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CheckValidation {

    public Boolean checkRegisterValdiation(Pet pet) throws Exception {

        Boolean passesValidation = false;

        if((pet.getAge() ==null) ||
            (pet.getBreed() ==null) ||
                (pet.getName() ==null) ||
                (pet.getGender() ==null) ){
            log.info("Pet registration failed");
            throw new IllegalArgumentException("Failed Validation");
        } else {
            log.info("Pet registration form validation passed");
            passesValidation = true;
            return passesValidation;
        }

    }

    public Boolean checkUpdateValdiation(Pet pet) throws Exception {

        Boolean passesValidation = false;

        if(pet.getPetId() == null ||
                (pet.getAge() ==null) ||
                (pet.getBreed() ==null) ||
                (pet.getName() ==null) ||
                (pet.getGender() ==null) ){
            log.info("Pet registration failed");
            throw new IllegalArgumentException("Failed Validation");
        } else {
            log.info("Pet registration form validation passed");
            passesValidation = true;
            return passesValidation;
        }

    }

}
