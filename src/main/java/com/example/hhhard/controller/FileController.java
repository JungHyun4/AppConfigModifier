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
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/db")
@Slf4j
public class FileController {
    private ConfigRepository configRepository;
    private FileOpenService fileOpenService;
    private FileWriteService fileWriteService;

    @Autowired
    public FileController(ConfigRepository configRepository, FileOpenService fileOpenService, FileWriteService fileWriteService){
        this.configRepository = configRepository;
        this.fileOpenService = fileOpenService;
        this.fileWriteService = fileWriteService;
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
    @PostMapping("/{appName}")
    public void PostMethod(@RequestBody Dto dto){
        System.out.println(dto.toString());
        Dto Doc = new Dto(dto.getAppName(), dto.getContent());
        fileWriteService.write(Doc);
    }

    @PostMapping("/config")
    public void CreateConfig(@RequestBody Dto dto){
        System.out.println(dto.toString());

        // db에 저장
        configRepository.save(dto.toEntity());

        // 파일 작성
        Dto Doc = new Dto(dto.getAppName(), dto.getContent());
        fileWriteService.write(Doc);
    }
}




