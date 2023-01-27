package com.example.hhhard;

import com.example.hhhard.controller.FileController;
import com.example.hhhard.entity.ConfigEntity;
import com.example.hhhard.repository.ConfigRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureDataJpa;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Sort;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@RunWith(SpringRunner.class)
@SpringBootTest
public class LoadAllDataTest {


    @Autowired
    private FileController f;
    private ConfigRepository configRepository;
    @Test
    public void 전체데이터_불러오기(){
        ArrayList<String>ans = new ArrayList<String>(Arrays.asList("","123123123","a","aa","abc","abcdefg","application.yaml","asdasdasd,naver-bluebox-dev.yaml","naver-bluebox-prd.yaml","naver-bluebox2.yaml","naver.yaml","wqwoweq"));

        Assert.assertEquals(ans,f.LoadAllData());
    }



}
