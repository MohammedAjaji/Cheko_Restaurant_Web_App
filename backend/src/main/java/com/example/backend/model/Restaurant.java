package com.example.backend.model;

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
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Double rating;
    private Long rating_count;
    private String url;
    private Boolean hours24;
    private Double lng;
    private Double lat;

    @OneToMany(mappedBy = "restaurant", cascade = CascadeType.DETACH)
    @PrimaryKeyJoinColumn
    private Set<Menu> menuSet;
}
