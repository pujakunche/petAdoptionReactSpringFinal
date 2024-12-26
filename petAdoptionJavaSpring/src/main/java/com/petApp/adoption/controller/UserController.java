package com.petApp.adoption.controller;

import com.petApp.adoption.dto.LoggedInDTO;
import com.petApp.adoption.dto.LoginDTO;
import com.petApp.adoption.dto.RegisterDTO;
import com.petApp.adoption.models.User;
import com.petApp.adoption.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;


    @Autowired
    public UserController(UserService userService) {

        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoggedInDTO> loginUser(@RequestBody LoginDTO loginDTO) {
        LoggedInDTO loggedInUser = userService.loginUser(loginDTO);
        if (loggedInUser == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + loggedInUser.getJwt());
        return new ResponseEntity(loggedInUser, headers, HttpStatus.OK);
    }

    // http://localhost:9090/realms/revature/protocol/openid-connect/auth?client_id=pet-app&response_type=code&redirect_uri=http://localhost:8080
    @PostMapping("/register")
    public ResponseEntity<LoggedInDTO> registerUser(@RequestBody RegisterDTO registerDTO){
        try {
            LoggedInDTO newUser = userService.registerUser(registerDTO);
            if (newUser == null) return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            HttpHeaders headers = new HttpHeaders();
            headers.set("Authorization", "Bearer " + newUser.getJwt());
            return new ResponseEntity(newUser, headers, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }
}