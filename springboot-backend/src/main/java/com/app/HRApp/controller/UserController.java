package com.app.HRApp.controller;



import java.net.URI;
import java.net.http.HttpResponse;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.NoSuchElementException;

import javax.swing.text.StyledEditorKit.BoldAction;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.HRApp.exception.EntityNotFoundException;
import com.app.HRApp.security.filter.AccountNotActivatedException;
import com.app.HRApp.service.UserService;
import com.app.HRApp.user.User;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;


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
	    public ResponseEntity<Void> confirmUserAccount(@RequestParam("token") String token) {
        userService.verifyToken(token);
        return ResponseEntity.status(HttpStatus.FOUND)
							 .location(URI.create("http://localhost:5173/verified"))
							 .build();
	}

	@PostMapping("/changePassword")
		public ResponseEntity<String> passwordChange(@RequestParam("username") String username, @RequestParam ("password") String password, @RequestParam ("newPassword") String newPassword){
			userService.updatePassword(password, username, newPassword);
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}

	@PostMapping("/reset")
	public ResponseEntity<String> resetPassword(@RequestParam("username") String username){
		userService.sendResetPassword(username);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@GetMapping("/reset")
	public ResponseEntity<Void> showResetPassordPage(@RequestParam("token") String token){
		userService.verifyResetToken(token);
		return ResponseEntity.status(HttpStatus.FOUND)
							 .location(URI.create("http://localhost:5173/reset-password?token=" + token))
							 .build();
	}
	

	@PostMapping("/reset-password")
	public ResponseEntity<String> updatePassword(@RequestParam("token") String token, 
                                             @RequestParam("newPassword") String newPassword) {
    	userService.resetPassword(newPassword, token);
    	return new ResponseEntity<>(HttpStatus.OK);
	}


	@ExceptionHandler(AccountNotActivatedException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
	public ResponseEntity<String> handleAccountNotActivatedException(AccountNotActivatedException ex){
		return new ResponseEntity<>(ex.getMessage(), HttpStatus.UNAUTHORIZED);
	}

	@ExceptionHandler(EntityNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public ResponseEntity<String> handleEntityNotFoundException(EntityNotFoundException ex) {
		return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(NoSuchElementException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ResponseEntity<String> handleNoSuchElementException(NoSuchElementException ex) {
    	return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
}
}
