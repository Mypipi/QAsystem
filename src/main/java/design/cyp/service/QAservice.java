package design.cyp.service;

import org.springframework.stereotype.Service;

@Service//注解为一个服务大家都可以用
public class QAservice {
    public String getMessage(int userId) {

        return "hello man" + userId;
    }

}
