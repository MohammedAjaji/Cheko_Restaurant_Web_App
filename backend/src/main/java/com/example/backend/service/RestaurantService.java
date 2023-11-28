package com.example.backend.service;

import com.example.backend.middleware.ApiException;
import com.example.backend.model.Restaurant;
import com.example.backend.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;

    public List<Restaurant> getAllRestaurant(){
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(Integer restaurantId){
        Restaurant restaurant = restaurantRepository.findRestaurantById(restaurantId);
        if (restaurant == null){
            throw new ApiException("restaurant not found");
        }
        return restaurant;
    }

    public List<Restaurant> searchRestaurants(String searchWord){
        List<Restaurant> restaurants = restaurantRepository.findAllByNameContainsIgnoreCase(searchWord);
        if (restaurants.isEmpty()){
            throw new ApiException("Restaurant not found");
        }
        return restaurants;
    }

    public List<Restaurant> getAll24Hours() {
        return restaurantRepository.findAllByHours24IsTrue();
    }


    public List<Restaurant> getAllRatingIsGreater(Integer number) {
        return restaurantRepository.findAllByRatingGreaterThanEqual(number);
    }
}
