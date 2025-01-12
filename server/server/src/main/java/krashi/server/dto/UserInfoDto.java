package krashi.server.dto;

import lombok.Data;
import lombok.Getter;


public class UserInfoDto {
    private String username;
    private String name;
    private String email;
    private String password;

    public String getUsername() {
        return username;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
