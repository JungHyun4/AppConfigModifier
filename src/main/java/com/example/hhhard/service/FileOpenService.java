package com.example.hhhard.service;

import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.Yaml;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

@Service
public class FileOpenService {
    public Map<String,String> openFile(String appName)
    {
        try {
            String path = "/Users/junghyun/IdeaProjects/hhhard/src/main/java/com/example/hhhard/apps/"+appName;
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
