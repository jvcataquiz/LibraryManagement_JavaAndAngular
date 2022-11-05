package com.example.LibraryManagement.Controller;

import com.example.LibraryManagement.Model.Library;
import com.example.LibraryManagement.Repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/library/management")
public class LibraryController {
    @Autowired
    private LibraryRepository libraryRepository;
    @GetMapping("/list")
    public List<Library> displayAllBooks(){
        return libraryRepository.findAll();
    }
    @PostMapping("/list")
    public Library createNewBookRecord(@RequestBody Library library){
        return libraryRepository.save(library);

    }

}
