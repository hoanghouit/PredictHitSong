package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"controller"})
public class RecommendHitSong1Application {

	public static void main(String[] args) {
		SpringApplication.run(RecommendHitSong1Application.class, args);
	}
}
