package com.example.backend.repository;

import com.example.backend.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer> {

    Menu findMenuById(Integer id);
    List<Menu> findAllByNameContainsIgnoreCaseOrDescriptionContainsIgnoreCase(String name, String description);
    List<Menu> findAllByCategoryContainsIgnoreCaseOrDescriptionContainsIgnoreCase(String category, String description);

    List<Menu> findAllByNameContains(String name);

    @Query("SELECT DISTINCT m.category FROM Menu m")
    List<String> findDistinctCategory();
}
