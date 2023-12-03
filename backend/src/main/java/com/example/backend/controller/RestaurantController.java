package com.example.backend.controller;

import com.example.backend.model.Restaurant;
import com.example.backend.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/restaurant")
@RequiredArgsConstructor
@CrossOrigin("*")
public class RestaurantController {

    private final RestaurantService restaurantService;

    @GetMapping("/")
    public ResponseEntity getAllRestaurants(){
        List<Restaurant> restaurants = restaurantService.getAllRestaurant();
        return ResponseEntity.status(200).body(restaurants);
    }

    @GetMapping("/{id}")
    public ResponseEntity getRestaurantById(@PathVariable Integer id){
        Restaurant restaurant = restaurantService.getRestaurantById(id);
        return ResponseEntity.status(200).body(restaurant);
    }

    @GetMapping("/search/{searchWord}")
    public ResponseEntity searchRestaurant(@PathVariable String searchWord){
        List<Restaurant> restaurants = restaurantService.searchRestaurants(searchWord);
        return ResponseEntity.status(200).body(restaurants);
    }

    @GetMapping("/is-24-hours")
    public ResponseEntity getAllCategories() {
        List<Restaurant> restaurants = restaurantService.getAll24Hours();
        return ResponseEntity.status(200).body(restaurants);
    }

    @GetMapping("/rating/{number}")
    public ResponseEntity getAllRatingIsGreater(@PathVariable Integer number) {
        List<Restaurant> restaurants = restaurantService.getAllRatingIsGreater(number);
        return ResponseEntity.status(200).body(restaurants);
    }

    @GetMapping("/menu/category-count/{id}")
    public ResponseEntity countMenuItemsByCategory(@PathVariable Integer id){
        return ResponseEntity.status(200).body(restaurantService.countMenuItemsByCategory(id));
    }
}
