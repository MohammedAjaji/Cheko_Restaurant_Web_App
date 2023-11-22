package com.example.backend.controller;

import com.example.backend.model.Menu;
import com.example.backend.service.MenuService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/menu")
@RequiredArgsConstructor
public class MenuController {

    private final MenuService menuService;

    @GetMapping("/")
    public ResponseEntity getAllMenus(){
        List<Menu> menus = menuService.getAllMenu();
        return ResponseEntity.status(200).body(menus);
    }

    @GetMapping("/{id}")
    public ResponseEntity getMenuById(@PathVariable Integer id){
        Menu menu = menuService.getMenuById(id);
        return ResponseEntity.status(200).body(menu);
    }

    @GetMapping("/search/{searchWord}")
    public ResponseEntity searchMenu(@PathVariable String searchWord){
        List<Menu> menus = menuService.searchMenus(searchWord);
        return ResponseEntity.status(200).body(menus);
    }

    @GetMapping("/category")
    public ResponseEntity getAllCategories() {
        List<String> categories = menuService.getAllCategories();
        return ResponseEntity.status(200).body(categories);
    }
}