package com.example.hhhard.dao;

import com.example.hhhard.entity.ConfigEntity;
public interface AppDao {
    ConfigEntity saveConfigEntity(ConfigEntity configEntity);
    ConfigEntity getConfigEntity(String appName);
}
