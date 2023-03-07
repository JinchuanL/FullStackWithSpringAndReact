package com.fullstackdemo.fullstackdemo.service;

import com.fullstackdemo.fullstackdemo.model.User;

import java.util.List;

public interface UserService
{
    User saveUser(User user);
    List<User> getAllUsers();
}
