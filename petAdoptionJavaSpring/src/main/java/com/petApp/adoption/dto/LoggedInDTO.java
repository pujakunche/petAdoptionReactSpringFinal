package com.petApp.adoption.dto;

import com.petApp.adoption.models.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoggedInDTO {
    private User user;
    private String jwt;
}
