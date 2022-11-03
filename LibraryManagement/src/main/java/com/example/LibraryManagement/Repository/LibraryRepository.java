package com.example.LibraryManagement.Repository;

import com.example.LibraryManagement.Model.Library;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibraryRepository extends JpaRepository<Library, Long>{
}
