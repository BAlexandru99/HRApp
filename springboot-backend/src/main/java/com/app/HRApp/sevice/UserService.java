package com.app.HRApp.sevice;

import com.app.HRApp.user.User;

public interface UserService {
    User getUser(Long id);
    User getUser(String username);
    User saveUser(User user);
}
