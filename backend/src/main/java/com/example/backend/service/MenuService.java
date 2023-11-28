package com.example.backend.service;

import com.example.backend.middleware.ApiException;
import com.example.backend.model.Menu;
import com.example.backend.model.Restaurant;
import com.example.backend.repository.MenuRepository;
import com.example.backend.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;
    private final RestaurantRepository restaurantRepository;

    public List<Menu> getAllMenu(){
        return menuRepository.findAll();
    }

    public Menu getMenuById(Integer menuId){
        Menu menu = menuRepository.findMenuById(menuId);
        if (menu == null){
            throw new ApiException("menu not found");
        }
        return menu;
    }

    public List<Menu> searchMenus(String searchWord){
        List<Menu> menus = menuRepository.findAllByCategoryContainsIgnoreCaseOrDescriptionContainsIgnoreCase(searchWord,searchWord);
        if (menus.isEmpty()){
            throw new ApiException("Menu not found");
        }
        return menus;
    }

    public List<String> getAllCategories() {
        return menuRepository.findDistinctCategory();
    }

    //Todo findAllByCategory
    public List<Menu> getAllByCategory(String category){
        return menuRepository.findAllByCategory(category);
    }

    public List<Map<String, Long>>  countMenuItemsByCategory(){
        return menuRepository.countMenuItemsByCategory();
    }


}
