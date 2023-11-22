package com.example.backend.middleware;

public class ApiException extends RuntimeException{
    public ApiException (String message){
        super(message);
    }
}
