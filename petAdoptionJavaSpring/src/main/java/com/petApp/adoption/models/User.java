package com.petApp.adoption.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer userId;
    private String sub;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    @OneToMany(mappedBy = "adopter")
    @JsonIgnoreProperties("adopter")
    private List<Pet> adoptedPets;
}

