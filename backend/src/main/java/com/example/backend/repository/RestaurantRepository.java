package com.example.backend.repository;

import com.example.backend.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;


@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {

    List<Restaurant> findAllByNameContainsIgnoreCase(String name);

    Restaurant findRestaurantById(Integer id);

//    List<Restaurant> findAllByHours_24(Boolean hours);
    List<Restaurant> findAllByHours24IsTrue();

    @Query("SELECT new map(m.category as category, COUNT(m) as count) FROM Menu m WHERE m.restaurant.id = :restaurant_id GROUP BY m.category")
    List<Map<String, Integer>> countMenuItemsByCategory( Integer restaurant_id);

    List<Restaurant> findAllByRatingGreaterThanEqual(Integer number);


    //Todo find location


}
