package com.grupo1.post_microservice.repository;
import com.grupo1.post_microservice.model.Post;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository<Post, String> {
}
