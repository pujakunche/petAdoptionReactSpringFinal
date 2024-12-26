package com.petApp.adoption.service;

import com.petApp.adoption.dto.LoggedInDTO;
import com.petApp.adoption.dto.LoginDTO;
import com.petApp.adoption.dto.RegisterDTO;
import com.petApp.adoption.models.User;
import com.petApp.adoption.repository.UserRepository;
import com.petApp.adoption.service.http.requests.CreateUserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtClaimNames;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {

        this.userRepository = userRepository;
    }

    private final String KEYCLOAK_ADMIN_URL = "http://localhost:9090/admin/realms/{realm}/users";
    private final String ADMIN_USERNAME = "admin";
    private final String ADMIN_PASSWORD = "admin";

    public LoggedInDTO loginUser(LoginDTO loginDTO) {
        try {
            String token = getAccessToken(loginDTO.getUsername(), loginDTO.getPassword());

            // Decode the token
            JwtDecoder jwtDecoder = JwtDecoders.fromIssuerLocation("http://localhost:9090/realms/revature"); // Replace with your Keycloak issuer URL
            Jwt jwt = jwtDecoder.decode(token);

            // Extract the "sub" claim
            String subject = jwt.getClaim(JwtClaimNames.SUB);

            // at this point the user exists in keycloak
            Optional<User> foundUser = userRepository.findBySub(subject);
            User res;
            // if user isn't in userdb, create them based on the JWT
            if (foundUser.isEmpty()) {
                User outOfSyncUser = new User();
                outOfSyncUser.setSub(subject);
                outOfSyncUser.setUsername(jwt.getClaim("preferred_username"));
                outOfSyncUser.setEmail(jwt.getClaim("email"));
                outOfSyncUser.setFirstName(jwt.getClaim("given_name"));
                outOfSyncUser.setLastName(jwt.getClaim("family_name"));
                res = userRepository.save(outOfSyncUser);
            } else {
                res = foundUser.get();
            }

            return new LoggedInDTO(res, token);
        } catch (Exception e) {
            return null;
        }
    }
    public LoggedInDTO registerUser(RegisterDTO userToBeRegistered) throws Exception{
        // get admin access_token
        String token = getAccessToken(ADMIN_USERNAME, ADMIN_PASSWORD);
        // attempt to register user in keycloak
        String url = KEYCLOAK_ADMIN_URL.replace("{realm}", "revature");
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + token);
        headers.setContentType(MediaType.APPLICATION_JSON);

        CreateUserRequest request = new CreateUserRequest();
        request.setUsername(userToBeRegistered.getUsername());
        request.setEmail(userToBeRegistered.getEmail());
        request.setFirstName(userToBeRegistered.getFirstName());
        request.setLastName(userToBeRegistered.getLastName());
        request.setEmailVerified(true);
        request.setEnabled(true);

        CreateUserRequest.Credential credential = new CreateUserRequest.Credential();
        credential.setType("password");
        credential.setValue(userToBeRegistered.getPassword());
        credential.setTemporary(false);

        request.setCredentials(Collections.singletonList(credential));

        HttpEntity<CreateUserRequest> entity = new HttpEntity<>(request, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);

        // persist user and return user else return null
        if (response.getStatusCode() == HttpStatus.OK || response.getStatusCode() == HttpStatus.CREATED) {
            // login and set sub, return access token
            LoginDTO loginDTO = new LoginDTO(userToBeRegistered.getUsername(), userToBeRegistered.getPassword());
            LoggedInDTO loggedInDTO = loginUser(loginDTO);
            return loggedInDTO;
        } else {
            throw new Exception("Unsuccessful user registration");
        }
    }

    private static String getAccessToken(String username, String password) {
        RestTemplate restTemplate = new RestTemplate();

        String authUrl = "http://localhost:9090/realms/revature/protocol/openid-connect/token";
        HttpHeaders headers = new org.springframework.http.HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        String body = "client_id=pet-app" +
                "&username=" + username +
                "&password=" + password +
                "&grant_type=password";

        HttpEntity<String> request = new HttpEntity<>(body, headers);
        ResponseEntity<Map> response = restTemplate.exchange(authUrl, HttpMethod.POST, request, Map.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody().get("access_token").toString();
        }
        throw new RuntimeException("Failed to get token from Keycloak");
    }
}