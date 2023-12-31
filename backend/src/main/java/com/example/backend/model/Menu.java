package com.example.backend.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private Double price;
    private String image;
    private Integer calorie;
    private String category;
    private Double lat;
    private Double lng;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "restaurant_id",referencedColumnName = "id")
    private Restaurant restaurant;
}
