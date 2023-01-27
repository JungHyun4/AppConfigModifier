package com.example.hhhard;
import com.example.hhhard.controller.FileController;
import com.example.hhhard.dto.Dto;
import com.example.hhhard.service.FileOpenService;
import org.junit.*;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = FileController.class)
public class FileControllerTest {


    @Autowired
    private FileOpenService fileopenservice;

    @Test
    public void FileOpenTest() {
        String AppName = "123123123213123";

        System.out.println(fileopenservice.openFile(AppName).get(AppName));


    }
}