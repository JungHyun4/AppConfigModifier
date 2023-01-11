package com.example.hhhard.repository;

import com.example.hhhard.entity.ConfigEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfigRepository extends JpaRepository<ConfigEntity,String>{
//List<ConfigEntity> findByappName(String appName);
//boolean existsByappName(String appName);


}
