package com.uma.ecommerce.service;

import org.springframework.stereotype.Service;
import com.uma.ecommerce.model.Product;
import com.uma.ecommerce.repository.ProductRepository;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // ✅ Add this method
    public void deleteProduct(String id) {
        productRepository.deleteById(id);
    }
}
