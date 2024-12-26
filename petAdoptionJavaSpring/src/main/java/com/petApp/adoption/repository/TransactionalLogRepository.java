package com.petApp.adoption.repository;

import com.petApp.adoption.models.TransactionalLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionalLogRepository extends JpaRepository<TransactionalLog, Integer> {
}
