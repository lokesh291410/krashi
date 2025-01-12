package krashi.server.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

public interface SignUpService {
    ResponseEntity<?> signUp(String username, String name, String email, String password);
}
