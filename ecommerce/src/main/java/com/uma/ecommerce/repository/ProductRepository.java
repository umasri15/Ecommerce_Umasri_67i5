package com.uma.ecommerce.repository;

import com.uma.ecommerce.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
    // custom queries can be added later
}
