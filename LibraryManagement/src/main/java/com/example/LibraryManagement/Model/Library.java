package com.example.LibraryManagement.Model;

import javax.persistence.*;

@Entity
@Table(name = "library")
public class Library {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
   @Column(name = "title_book")
    private String titleOfBook;
    @Column(name = "author_book")
    private String author;
    @Column(name = "genre_book")
    private String genre;
    @Column(name = "date_published_book")
    private String datePublished;
    @Column(name = "description_book")
    private String description;

    public Library() {
    }

    public Library(String titleOfBook, String author, String genre, String datePublished, String description) {
        this.titleOfBook = titleOfBook;
        this.author = author;
        this.genre = genre;
        this.datePublished = datePublished;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitleOfBook() {
        return titleOfBook;
    }

    public void setTitleOfBook(String titleOfBook) {
        this.titleOfBook = titleOfBook;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDatePublished() {
        return datePublished;
    }

    public void setDatePublished(String datePublished) {
        this.datePublished = datePublished;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
