package com.uma.ecommerce.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document("orders")
@Data
public class Order {
    @Id
    private String id;
    private String userId;
    private List<OrderItem> items;
    private double total;
}
