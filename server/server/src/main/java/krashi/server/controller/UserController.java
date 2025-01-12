package krashi.server.controller;

import krashi.server.dto.UserInfoDto;
import krashi.server.service.SignUpService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    SignUpService signUpService;

    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }

    @GetMapping("/secure")
    public String secure() {
        return "Secure";
    }

    @GetMapping("/")
    public String home() {
        return "Home";
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody UserInfoDto userInfoDto) {
        return signUpService.signUp(
                userInfoDto.getUsername(),
                userInfoDto.getName(),
                userInfoDto.getEmail(),
                userInfoDto.getPassword()
        );
    }
}
