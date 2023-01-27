package com.example.hhhard;
import com.example.hhhard.controller.FileController;
import com.example.hhhard.dto.Dto;
import org.junit.*;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

//@RunWith(SpringRunner.class)
//@WebMvcTest(controllers = FileController.class)
public class FileControllerTest {

//    @Autowired
//    private MockMvc mvc;
//
//    @Test
//    public void getDBTest() throws Exception {
//        mvc.perform(get("/application.yaml")).andExpect(status().isOK()).andExpect(1);
//    }

    @Test
    public void test() {
        //Given
        String name = "jh";
        String content = "abcdefg";
        Dto dto = new Dto(name, content);
        assertThat(dto.getAppName()).isEqualTo(name);
        assertThat(dto.getContent()).isEqualTo(content);
    }
}