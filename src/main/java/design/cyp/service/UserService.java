package design.cyp.service;

import design.cyp.dao.LoginTicketDAO;
import design.cyp.dao.UserDAO;
import design.cyp.model.LoginTicket;
import design.cyp.model.User;
import design.cyp.util.QAUtil;
import freemarker.template.utility.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    UserDAO userDAO;

    @Autowired
    LoginTicketDAO loginTicketDAO;

    public User getUser(int id) {
        return userDAO.selectById(id);
    }
    //定义map来存键值对数据
    public Map<String, String> register(String username, String password) {

        Map<String, String> map = new HashMap<String, String>();
        //用户名为空
        if (StringUtils.isEmpty(username)){
            map.put("msg","username can not be empty");
            return map;
        }
        //密码为空
        if (StringUtils.isEmpty(password)){
            map.put("msg","password can not be empty");
            return map;
        }
        //用户名重复
        User user = userDAO.selectByName(username);
        if (user != null){
            map.put("msg","username is exits");
            return map;
        }

        //设置新用户的初始属性
        user = new User();
        user.setName(username);
        user.setSalt(UUID.randomUUID().toString().substring(0,5));
        long time = new Date().getTime();
        if (username.contains("@qq.com")){
            user.setHeadUrl("https://q.qlogo.cn/g?b=qq&nk="+username+"&s=40");

        }else{
            user.setHeadUrl("https://cdn.v2ex.co/gravatar//"+time+"?s=50&d=monsterid&r=g");
        }

        user.setPassword(QAUtil.MD5(password+user.getSalt()));
        userDAO.addUser(user);

        String ticket = addLoginTicket(user.getId());
        map.put("ticket",ticket);

        return map;

    }

    public Map<String, String> login(String username, String password) {

        Map<String, String> map = new HashMap<String, String>();
        //用户名为空
        if (StringUtils.isEmpty(username)){
            map.put("msg","username can not be empty");
            return map;
        }
        //密码为空
        if (StringUtils.isEmpty(password)){
            map.put("msg","password can not be empty");
            return map;
        }
        //用户名重复
        User user = userDAO.selectByName(username);
        if (user == null){
            map.put("msg","username is not exits");
            return map;
        }

        if (!QAUtil.MD5(password+user.getSalt()).equals(user.getPassword())){
            map.put("msg","密码错误");
            return map;
        }


        String ticket = addLoginTicket(user.getId());
        map.put("ticket",ticket);
        return map;



    }

    //ticket的添加操作
    public String addLoginTicket(int userId){
        LoginTicket loginTicket = new LoginTicket();
        loginTicket.setUserId(userId);
        Date now = new Date();
        now.setTime(3600*24*100+now.getTime());
        loginTicket.setExpired(now);
        loginTicket.setStatus(0);
        loginTicket.setTicket(UUID.randomUUID().toString().replaceAll("-",""));
        loginTicketDAO.addTicket(loginTicket);
        return loginTicket.getTicket();

    }

    public void logout(String ticket){
        loginTicketDAO.updateStatus(ticket,1);
    }
}
