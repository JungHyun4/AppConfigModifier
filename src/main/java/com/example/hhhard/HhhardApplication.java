package com.example.hhhard;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class HhhardApplication {

    public static void main(String[] args) {
        SpringApplication.run(HhhardApplication.class, args);

    }

}
