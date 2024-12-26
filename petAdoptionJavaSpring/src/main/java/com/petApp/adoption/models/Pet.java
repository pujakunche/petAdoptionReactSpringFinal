package com.petApp.adoption.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.petApp.adoption.models.enums.Gender;
import com.petApp.adoption.models.enums.PetStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pets")
public class Pet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer petId;

    private String name;
    private String breed;
    private Integer age;
    private Gender gender;
    private PetStatus status;
    @ManyToOne
    @JoinColumn(name = "adopter_id")

    private User adopter;

}
