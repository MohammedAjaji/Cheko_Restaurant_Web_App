package com.example.backend.repository;

import com.example.backend.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {

    List<Restaurant> findAllByNameContainsIgnoreCase(String name);

    Restaurant findRestaurantById(Integer id);

//    List<Restaurant> findAllByHours_24(Boolean hours);
    List<Restaurant> findAllByHours24IsTrue();


    //Todo find location


}
