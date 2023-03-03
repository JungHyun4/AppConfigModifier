# AppConfigModifier

## 제목입니다

- 이건 목록

1. 이건 

''' java

  package com.example.capstone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@SpringBootApplication
public class CapstoneApplication {

	public static void main(String[] args) {
		SpringApplication.run(CapstoneApplication.class, args);
	}

	@RestController
	@RequestMapping("/image")
	public static class FileController {
		@GetMapping(value = "/{imageName}")
		public String showImage(@PathVariable("imageName") String imageName){
			System.out.println("method called");

			return "Name";
		}


		@GetMapping("/images")
		public ResponseEntity<InputStreamResource> getImage() throws IOException {
			// 이미지 파일 로드
			File file = new File("/Users/junghyun/Desktop/연습합시다/Capstone/src/main/java/com/example/capstone/Image/bag.jpeg");
			InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

			// HTTP 응답 생성
			HttpHeaders headers = new HttpHeaders();
			headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=image.jpg");
			headers.add(HttpHeaders.CONTENT_TYPE, "image/jpeg");

			// 이미지 파일과 HTTP 응답을 합쳐서 ResponseEntity로 반환
			return ResponseEntity.ok().headers(headers).body(resource);
		}
	}

}


'''
