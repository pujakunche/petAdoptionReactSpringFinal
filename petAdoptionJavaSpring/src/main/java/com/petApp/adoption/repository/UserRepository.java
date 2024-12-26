package com.petApp.adoption.repository;

import com.petApp.adoption.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User> findBySub(String sub);
    Optional<User> findByUsername(String username);
}