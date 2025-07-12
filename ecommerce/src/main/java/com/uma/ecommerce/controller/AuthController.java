package com.uma.ecommerce.controller;

import com.uma.ecommerce.model.User;
import com.uma.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;

    @Autowired
    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public String login(@RequestBody User loginRequest) {
        Optional<User> userOptional = userRepository.findById(loginRequest.getEmail());

        if (userOptional.isPresent() && userOptional.get().getPassword().equals(loginRequest.getPassword())) {
            return "Login successful";
        } else {
            return "Invalid credentials";
        }
    }
}
