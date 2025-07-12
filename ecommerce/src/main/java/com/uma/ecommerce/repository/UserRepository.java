package com.uma.ecommerce.repository;

import com.uma.ecommerce.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    User findFirstByEmail(String email);
    Optional<User> findByUsername(String username);
}
