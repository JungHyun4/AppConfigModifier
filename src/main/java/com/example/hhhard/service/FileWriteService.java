package com.example.hhhard.service;
import com.example.hhhard.dto.Dto;
import org.springframework.stereotype.Service;

import java.io.*;

@Service
public class FileWriteService {
    public void write(Dto app)
    {
        File f = new File("/Users/junghyun/IdeaProjects/hhhard/src/main/java/com/example/hhhard/apps/" + app.appName);
        try {
            FileOutputStream out = new FileOutputStream(f,false);
            System.out.println(app.appName + " 파일을 열었습니다.");
            out.write(app.content.getBytes());
            System.out.println(app.appName + " 파일 작성 종료.");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}