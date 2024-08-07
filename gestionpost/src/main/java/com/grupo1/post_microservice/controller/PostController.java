package com.grupo1.post_microservice.controller;

import com.grupo1.post_microservice.model.Post;
import com.grupo1.post_microservice.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    @Autowired
    private PostRepository postRepository;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Post> getPostById(@PathVariable String id) {
        return postRepository.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post createPost(@RequestBody Post post) {
        return postRepository.save(post);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Post updatePost(@PathVariable String id, @RequestBody Post post) {
        post.setId(id);
        return postRepository.save(post);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable String id) {
        postRepository.deleteById(id);
    }
}
