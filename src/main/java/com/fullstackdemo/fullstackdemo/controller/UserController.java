package com.fullstackdemo.fullstackdemo.controller;

import com.fullstackdemo.fullstackdemo.model.User;
import com.fullstackdemo.fullstackdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController
{
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user)
    {
        userService.saveUser(user);
        return "New user added";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers()
    {
        return userService.getAllUsers();
    }

}
