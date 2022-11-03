package com.example.LibraryManagement.Controller;

import com.example.LibraryManagement.Model.Library;
import com.example.LibraryManagement.Repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/library/management")
public class LibraryController {
    @Autowired
    private LibraryRepository libraryRepository;
    @GetMapping("/list")
    public List<Library> displayAllBooks(){
        return libraryRepository.findAll();
    }


}
