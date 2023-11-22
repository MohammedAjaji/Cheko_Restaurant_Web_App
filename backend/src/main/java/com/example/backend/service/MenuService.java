package com.example.backend.service;

import com.example.backend.middleware.ApiException;
import com.example.backend.model.Menu;
import com.example.backend.repository.MenuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;

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
}
