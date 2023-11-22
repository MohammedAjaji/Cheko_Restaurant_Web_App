package com.example.backend.middleware;

import jakarta.validation.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.InvalidDataAccessResourceUsageException;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.sql.SQLIntegrityConstraintViolationException;

@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(ApiException.class)
    public ResponseEntity ApiException(ApiException exception) {
        String message = exception.getMessage();
        return ResponseEntity.status(400).body(new ApiResponse(message));
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity NullPointerException(NullPointerException exception) {
        String message = exception.getMessage();
        return ResponseEntity.status(400).body(new ApiResponse(message));
    }

    @ExceptionHandler(IllegalStateException.class)
    public ResponseEntity IllegalStateException(IllegalStateException exception) {
        String message = exception.getMessage();
        return ResponseEntity.status(400).body(new ApiResponse(message));
    }
    @ExceptionHandler(HttpMessageNotWritableException.class)
    public ResponseEntity HttpMessageNotWritableException(HttpMessageNotWritableException exception) {
        String message = exception.getMessage();
        return ResponseEntity.status(400).body(new ApiResponse(message));
    }

    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse> MethodArgumentNotValidException(MethodArgumentNotValidException exception) {
        String msg = exception.getFieldError().getDefaultMessage();
        return ResponseEntity.status(400).body(new ApiResponse(msg));
    }

    // Server Validation Exception
    @ExceptionHandler(value = ConstraintViolationException.class)
    public ResponseEntity<ApiResponse> ConstraintViolationException(ConstraintViolationException exception) {
        String msg = exception.getMessage();
        return ResponseEntity.status(400).body(new ApiResponse(msg));
    }


    // SQL Constraint Ex:(Duplicate) Exception
    @ExceptionHandler(value = SQLIntegrityConstraintViolationException.class)
    public ResponseEntity<ApiResponse> SQLIntegrityConstraintViolationException(SQLIntegrityConstraintViolationException exception) {
        String msg = exception.getMessage();
        return ResponseEntity.status(400).body(new ApiResponse(msg));
    }

    // wrong write SQL in @column Exception
    @ExceptionHandler(value = InvalidDataAccessResourceUsageException.class)
    public ResponseEntity<ApiResponse> InvalidDataAccessResourceUsageException(InvalidDataAccessResourceUsageException e) {
        String msg = e.getMessage();
        return ResponseEntity.status(400).body(new ApiResponse(msg));
    }

    // Database Constraint Exception
    @ExceptionHandler(value = DataIntegrityViolationException.class)
    public ResponseEntity<ApiResponse> DataIntegrityViolationException(DataIntegrityViolationException e) {
        String msg = e.getMessage();
        return ResponseEntity.status(400).body(new ApiResponse(msg));
    }
}
