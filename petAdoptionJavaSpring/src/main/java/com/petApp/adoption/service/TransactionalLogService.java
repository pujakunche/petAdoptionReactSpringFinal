package com.petApp.adoption.service;

import com.petApp.adoption.models.TransactionalLog;
import com.petApp.adoption.repository.TransactionalLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionalLogService {

    TransactionalLogRepository transactionalLogRepository;

    @Autowired
    public TransactionalLogService(TransactionalLogRepository transactionalLogRepository) {
        this.transactionalLogRepository = transactionalLogRepository;
    }

    public TransactionalLog createTransactionalLog(TransactionalLog transactionalLog) throws Exception {
        try{
            TransactionalLog writingTransaction = new TransactionalLog();
            writingTransaction.setPet(transactionalLog.getPet());
            writingTransaction.setUsername(transactionalLog.getUsername());
            writingTransaction.setDescription(transactionalLog.getDescription());

            TransactionalLog saveLog = transactionalLogRepository.save(writingTransaction);
            return saveLog;
        } catch (Exception ex) {
            throw new Exception("Error  creating translog");
        }

    }


}
