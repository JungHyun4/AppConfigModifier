package com.example.hhhard.controller;

import com.example.hhhard.dto.Dto;
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
    @Autowired
    private ConfigRepository configRepository;
    @Autowired
    private FileOpenService f_open;
    @Autowired
    private FileWriteService f_write;

    @GetMapping("/{appName}")
    public String getDB(@PathVariable("appName") String appName)
    {
        Logger logger = LoggerFactory.getLogger(FileController.class);
//        logger.info(headers.toString());
        String name = configRepository.findById(appName).get().getAppName();
//        logger.info();
        return(f_open.openFile(name).get("Name"));
    }
    @PostMapping("/{appName}")
    public void PostMethod(@RequestBody Dto dto){
        System.out.println(dto.toString());
        Dto Doc = new Dto(dto.getAppName(), dto.getContent());
        f_write.write(Doc);
    }
}

