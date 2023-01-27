package com.example.hhhard.service;

import com.example.hhhard.entity.ConfigEntity;
import com.example.hhhard.repository.ConfigRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AllConfigLoadService {

    private final ConfigRepository configRepository;

    AllConfigLoadService(ConfigRepository c){
        this.configRepository = c;
    }

    public ArrayList<String > LoadAllName(){

        List<ConfigEntity> names = configRepository.findAll();
        ArrayList<String> names1 = new ArrayList<String>();
        for(int i=0; i< names.size(); i++){
            names1.add(names.get(i).getAppName());
        }
        return names1;
    }

}
