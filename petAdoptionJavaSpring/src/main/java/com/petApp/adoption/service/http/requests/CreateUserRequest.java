package com.petApp.adoption.service.http.requests;

import lombok.Data;

import java.util.List;

@Data
public class CreateUserRequest {
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private boolean emailVerified;
    private boolean enabled;
    private List<Credential> credentials;

    // Getters and Setters

    @Data
    public static class Credential {
        private String type;
        private String value;
        private boolean temporary;

        // Getters and Setters
    }
}
