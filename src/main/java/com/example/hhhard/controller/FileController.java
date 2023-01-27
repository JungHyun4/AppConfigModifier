package com.example.hhhard.controller;

import com.example.hhhard.dto.Dto;
import com.example.hhhard.entity.ConfigEntity;
import com.example.hhhard.repository.ConfigRepository;
import com.example.hhhard.service.FileOpenService;
import com.example.hhhard.service.FileWriteService;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/db")
@Slf4j
public class FileController {



    public ConfigRepository configRepository;
    private FileOpenService fileOpenService;
    private FileWriteService fileWriteService;

    FileController(ConfigRepository R , FileOpenService F_O , FileWriteService F_W){
        this.configRepository = R;
        this.fileOpenService = F_O;
        this.fileWriteService = F_W;
    }


    @GetMapping(value = "/{appName}")
    public String getDB(@PathVariable("appName") String appName)
    {
        Logger logger = LoggerFactory.getLogger(FileController.class);
//        logger.info(headers.toString());
        String name = configRepository.findById(appName).get().getAppName();
//        logger.info();
        return(fileOpenService.openFile(name).get("Name"));
    }

    //파일 수정하는 api
    @PostMapping("/{appName}")
    public void PostMethod(@RequestBody Dto dto){
        System.out.println(dto.toString());
        Dto Doc = new Dto(dto.getAppName(), dto.getContent());
        fileWriteService.write(Doc);
    }

    //
    @PostMapping("/config")
    public void CreateConfig(@RequestBody Dto dto){
        System.out.println(dto.toString());

        // db에 저장
        configRepository.save(dto.toEntity());

        // 파일 작성
        Dto Doc = new Dto(dto.getAppName(), dto.getContent());
        fileWriteService.write(Doc);
    }

    @GetMapping("/all")
    public ArrayList<String > LoadAllData(){
        List<ConfigEntity> names = configRepository.findAll();
        ArrayList<String> names1 = new ArrayList<String>();
        for(int i=0; i< names.size(); i++){
            names1.add(names.get(i).getAppName());
        }
        return names1;
    }
}