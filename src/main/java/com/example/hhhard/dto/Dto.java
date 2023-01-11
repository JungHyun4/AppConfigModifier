package com.example.hhhard.dto;

import lombok.*;

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

}
