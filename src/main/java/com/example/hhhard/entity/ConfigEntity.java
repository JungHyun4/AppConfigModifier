package com.example.hhhard.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@ToString
@Entity(name = "app")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ConfigEntity {
    @Id
    private String appName;
    @jakarta.persistence.Column(nullable = false)
    private String appPath;
    @jakarta.persistence.Column
    private  String userId;
    @jakarta.persistence.Column
    private String userName;
    @jakarta.persistence.Column
    private String managerName;
    @jakarta.persistence.Column
    private String managerEmail;

    ConfigEntity(String appName , String appPath)
    {
        this.appName = appName;
        this.appPath = appPath;
    }


}
