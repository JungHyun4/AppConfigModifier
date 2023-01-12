package com.example.hhhard.dto;

import lombok.*;
import com.example.hhhard.entity.ConfigEntity;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Dto {
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

    public ConfigEntity dtoToEntity(){
        return (new ConfigEntity(this.appName,this.appPath,this.userId,this.userName,this.managerName, this.managerEmail));
    }

}
