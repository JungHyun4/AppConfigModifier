package com.example.hhhard.service;

import com.example.hhhard.dto.Dto;
import com.example.hhhard.repository.ConfigRepository;
import org.springframework.stereotype.Service;

@Service
public class FileRegisterService {
    private final ConfigRepository configRepository;

    //생성자가 한개뿐이면 @Autowired 생략 가능.
    FileRegisterService(ConfigRepository c){
        this.configRepository = c;
    }

    public void FileSave(Dto dto){
        configRepository.save(dto.toEntity());
    }

}