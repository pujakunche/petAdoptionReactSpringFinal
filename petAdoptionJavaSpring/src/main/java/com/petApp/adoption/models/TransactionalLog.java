package com.petApp.adoption.models;

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
@Table(name = "transaction_log")
public class TransactionalLog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer transactionalId;
    private String username;
    private String pet;
    private String description;

}
