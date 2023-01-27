package com.example.hhhard.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.relational.core.mapping.Column;

import java.time.LocalDateTime;

@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "app")

public class ConfigEntity extends BaseTimeEntity{
    @Id
    @Column
    private String appName;
    @jakarta.persistence.Column(nullable = false)
    private String appPath;
    @jakarta.persistence.Column
    private String userId;
    @jakarta.persistence.Column
    private String userName;
    @jakarta.persistence.Column
    private String managerName;
    @jakarta.persistence.Column
    private String managerEmail;

    public ConfigEntity(String appName, String appPath)
    {
        this.appName = appName;
        this.appPath = appPath;
    }
}
