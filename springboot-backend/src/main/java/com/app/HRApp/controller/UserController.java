package com.app.HRApp.controller;



import java.net.http.HttpResponse;
import java.time.LocalDateTime;
import java.util.Map;

import javax.swing.text.StyledEditorKit.BoldAction;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.HRApp.service.UserService;
import com.app.HRApp.user.User;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;


@AllArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {


    UserService userService;

	@GetMapping("/{id}")
	public ResponseEntity<String> findById(@PathVariable Long id) {
		return new ResponseEntity<>(userService.getUser(id).getUsername() , HttpStatus.OK);
	}

    @PostMapping("/register")
	public ResponseEntity<User> createUser(@Validated @RequestBody User user) {
		User savedUser = userService.saveUser(user);
		return new ResponseEntity<>( HttpStatus.CREATED);
	}

	@GetMapping("/activation")
	    public ResponseEntity<String> confirmUserAccount(@RequestParam("token") String token) {
        userService.verifyToken(token);
        return new ResponseEntity<>( HttpStatus.CREATED);
	}
}
