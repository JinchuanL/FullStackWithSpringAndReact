package com.fullstackdemo.fullstackdemo.service;

import com.fullstackdemo.fullstackdemo.model.User;
import com.fullstackdemo.fullstackdemo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

// Method 2: Add Service annotation here
// Hotkey: Ctrl + o to generate override method
@Service
public class  UserServiceImple implements UserService
{
    @Autowired
    private UserRepo userRepo;

    @Override
    public User saveUser(User user) {
        return userRepo.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}
