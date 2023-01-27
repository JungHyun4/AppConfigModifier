package com.example.hhhard.service;

import com.example.hhhard.repository.ConfigRepository;
import lombok.Setter;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.Yaml;

import java.io.*;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

@Service
@Setter
public class FileOpenService {

    private final ConfigRepository configRepository;
    String AppName;
    public FileOpenService(ConfigRepository C){
        this.configRepository = C;
    }

    public Map<String,String> openFile(String appName)
    {
        try {
            String name = configRepository.findById(appName).get().getAppName();
            String path = "/Users/junghyun/IdeaProjects/hhhard/src/main/java/com/example/hhhard/apps/"+name;
            File file = new File(path);
            FileReader filereader = new FileReader(file);
            BufferedReader bufferedReader = new BufferedReader(filereader);
            StringBuilder result = new StringBuilder();
            String line;
            while( (line = bufferedReader.readLine()) != null )
            {
                result.append(line).append("\r\n");
            }
            Map<String,String> map = new HashMap<>();

            map.put("Name", result.toString());
            filereader.close();
            bufferedReader.close();
            return map;
        }
        catch (NoSuchElementException e){
            Map<String,String> map1 = new HashMap<>();
            map1.put("Name", "NoSuchElementException");
            return map1;
        }
        catch (FileNotFoundException e)
        {
            Map<String,String> map1 = new HashMap<>();
            map1.put("Name", "FileNotFoundException");

            return map1;
        }
        catch (IOException e)
        {
            Map<String,String> map2 = new HashMap<>();
            map2.put("Name", "IOException");

            return map2;
        }
    }
}
