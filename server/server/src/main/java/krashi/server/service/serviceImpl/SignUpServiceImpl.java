package krashi.server.service.serviceImpl;

import krashi.server.entity.UserInfo;
import krashi.server.repository.UserInfoRepository;
import krashi.server.service.SignUpService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignUpServiceImpl implements SignUpService {


    UserInfoRepository userInfoRepository;

    PasswordEncoder passwordEncoder;

    public SignUpServiceImpl(UserInfoRepository userInfoRepository, PasswordEncoder passwordEncoder) {
        this.userInfoRepository = userInfoRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public ResponseEntity<?> signUp(String username, String name, String email, String password) {
        UserInfo user = new UserInfo();
        user.setUserName(username);
        user.setName(name);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole("ROLE_USER");

        userInfoRepository.save(user);

        return ResponseEntity.ok("User registered successfully");
    }
}
