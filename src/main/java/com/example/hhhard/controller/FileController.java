package com.example.hhhard.controller;

import com.example.hhhard.dto.Dto;
import com.example.hhhard.service.AllConfigLoadService;
import com.example.hhhard.service.FileOpenService;
import com.example.hhhard.service.FileRegisterService;
import com.example.hhhard.service.FileWriteService;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/db")
@Slf4j
public class FileController {
    private final FileOpenService fileOpenService;
    private final FileWriteService fileWriteService;
    private final AllConfigLoadService allConfigLoadService;
    private final FileRegisterService fileRegisterService;

    FileController( FileOpenService f_o , FileWriteService f_w ,AllConfigLoadService q, FileRegisterService f_r){
        this.fileOpenService = f_o;
        this.fileWriteService = f_w;
        this.fileRegisterService = f_r;
        this.allConfigLoadService = q;
    }
    @GetMapping(value = "/{appName}")
    public String getDB(@PathVariable("appName") String appName)
    {
        return(fileOpenService.openFile(appName).get("Name"));
    }

    //config modify api
    @PostMapping("/{appName}")
    public void PostMethod(@RequestBody Dto dto){
        System.out.println(dto.toString());
        Dto Doc = new Dto(dto.getAppName(), dto.getContent());
        fileWriteService.write(Doc);
    }

    //config regist api
    @PostMapping("/config")
    public void CreateConfig(@RequestBody Dto dto){
        System.out.println(dto.toString());
        // db에 저장
        fileRegisterService.FileSave(dto);
        // 파일 작성
        fileWriteService.write(new Dto(dto.getAppName(), dto.getContent()));
    }


    //all app's name load for dropdown menu
    @GetMapping("/all")
    public ArrayList<String> LoadAllName(){
        return(allConfigLoadService.LoadAllName());
    }
}