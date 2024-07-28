package com.app.HRApp.service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.HRApp.exception.EntityNotFoundException;
import com.app.HRApp.repository.UserRepository;
import com.app.HRApp.user.User;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
	private BCryptPasswordEncoder bCryptPasswordEncoder;
    private EmailService emailService;

    @Override
    public User getUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        return unwrapUser(user, id);
    }

    @Override
    public User saveUser(User user) {
        if(userRepository.existsByUsername(user.getUsername())){
            throw new RuntimeException("Email already exist!");
        }else{
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setToken(UUID.randomUUID().toString());
        emailService.sendSimpleMailMessage(user.getLastName(), user.getUsername(), user.getToken());
        user.setTimestamp(LocalDateTime.now());
        return userRepository.save(user);
        }
    }

    static User unwrapUser(Optional<User> entity, Long id) {
        if (entity.isPresent()) return entity.get();
        else throw new EntityNotFoundException(id, User.class);
    }

    @Override
    public User getUser(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return unwrapUser(user, 404L);
    }

    @Override
    public User verifyToken(String token) {
        Optional<User> optionalUser = userRepository.findByToken(token);
        User user = optionalUser.get();
        user.setEnabled(true);
        return userRepository.save(user);
    }

    
}
