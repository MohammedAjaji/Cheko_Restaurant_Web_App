package com.example.backend.repository;

import com.example.backend.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer> {

    Menu findMenuById(Integer id);
    List<Menu> findAllByNameContainsIgnoreCaseOrDescriptionContainsIgnoreCaseAndCategory(String name, String description, String Category);

    List<Menu> findAllByNameContainsIgnoreCaseOrDescriptionContainsIgnoreCase(String name, String description);

    List<Menu> findAllByNameContains(String name);

    @Query("SELECT m FROM Menu m WHERE (LOWER(m.name) LIKE LOWER(CONCAT('%',:search,'%')) OR LOWER(m.description) LIKE LOWER(CONCAT('%',:search,'%'))) AND m.category = :category")
    List<Menu> findByNameOrDescriptionContainingIgnoreCaseAndCategory(@Param("search") String search, @Param("category") String category);


//    @Query("SELECT m.category, COUNT(m) FROM Menu m GROUP BY m.category")
//    List<Object[]> countByCategory();

    @Query("SELECT new map(m.category as category, COUNT(m) as count) FROM Menu m GROUP BY m.category")
    List<Map<String, Integer>>  countMenuItemsByCategory();

    List<Menu> findAllByCategory(String category);

    @Query("SELECT DISTINCT m.category FROM Menu m")
    List<String> findDistinctCategory();

}
