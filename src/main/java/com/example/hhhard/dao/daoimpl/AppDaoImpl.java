package com.example.hhhard.dao.daoimpl;

import com.example.hhhard.dao.AppDao;
import com.example.hhhard.entity.ConfigEntity;
import com.example.hhhard.repository.ConfigRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppDaoImpl implements AppDao {
    ConfigRepository configRepository;

    @Autowired
    public AppDaoImpl(ConfigRepository configRepository){
        this.configRepository = configRepository;
    }
    @Override
    public ConfigEntity saveConfigEntity(ConfigEntity configEntity) {
        ConfigEntity config1 = configRepository.save(configEntity);
        return config1;
    }

    @Override
    public ConfigEntity getConfigEntity(String appName) {
        ConfigEntity config = configRepository.getById(appName);
        return config;
    }
}
