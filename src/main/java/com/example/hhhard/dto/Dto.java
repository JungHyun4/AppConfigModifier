package com.example.hhhard.dto;

import jakarta.persistence.Id;
import lombok.*;
import com.example.hhhard.entity.ConfigEntity;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@ToString
public class Dto{

    @Id
    public String appName;
    public String appPath;
    public String managerEmail;
    public String managerName;
    public String userId;
    public String userName;

    public String content;

    public Dto(String appName, String content){
        this.appName = appName;
        this.content = content;
    }

    public ConfigEntity toEntity(){
        return (new ConfigEntity(this.appName,this.appPath,this.userId,this.userName,this.managerName, this.managerEmail));
    }

}
