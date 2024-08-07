package com.grupo1.post_microservice.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "posts")
@Getter
@Setter
@NoArgsConstructor
public class Post {
    private String id;
    private String title;
    private String content;
}
