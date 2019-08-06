package design.cyp.service;

import design.cyp.dao.LoginTicketDAO;
import design.cyp.dao.UserDAO;
import design.cyp.model.LoginTicket;
import design.cyp.model.User;
import design.cyp.util.QAUtil;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.*;

@Service
public class UserService {
    @Autowired
    UserDAO userDAO;

    @Autowired
    LoginTicketDAO loginTicketDAO;

    public User selectByName(String name) {
        return userDAO.selectByName(name);
    }


    public User getUser(int id) {
        return userDAO.selectById(id);
    }

    //定义map来存键值对数据
    public Map<String, String> register(String username, String password) {

        Map<String, String> map = new HashMap<String, String>();
        //用户名为空
        if (StringUtils.isBlank(username)) {
            map.put("msg", "用户名不能为空！！");
            return map;
        }
        //密码为空
        if (StringUtils.isBlank(password)) {
            map.put("msg", "密码不能为空！！");
            return map;
        }
        //用户名重复
        User user = userDAO.selectByName(username);

        if (user != null) {
            map.put("msg", "用户名已存在！！");
            return map;
        }

        //设置新用户的初始属性
        user = new User();
        user.setName(username);
        user.setSalt(UUID.randomUUID().toString().substring(0, 5));
        String head = String.format("http://images.nowcoder.com/head/%dt.png@0e_40w_40h_0c_1i_1o_90Q_1x.png", new Random().nextInt(1000));
        if (username.contains("@qq.com")) {
            user.setHeadUrl("http://q2.qlogo.cn/headimg_dl?dst_uin=" + username + "&amp;spec=40");

        } else {
            user.setHeadUrl(head);
        }

        user.setPassword(QAUtil.MD5(password + user.getSalt()));
        userDAO.addUser(user);

        String ticket = addLoginTicket(user.getId());
        map.put("ticket", ticket);

        return map;

    }

    public Map<String, String> login(String username, String password) {

        Map<String, String> map = new HashMap<String, String>();
        //用户名为空
        if (StringUtils.isBlank(username)) {
            map.put("msg", "用户名不能为空！！");
            return map;
        }
        //密码为空
        if (StringUtils.isBlank(password)) {
            map.put("msg", "密码不能为空！！");
            return map;
        }
        //用户名重复
        User user = userDAO.selectByName(username);
        if (user == null) {
            map.put("msg", "用户名不能为空！！");
            return map;
        }

        if (!QAUtil.MD5(password + user.getSalt()).equals(user.getPassword())) {
            map.put("msg", "密码错误！！");
            return map;
        }


        String ticket = addLoginTicket(user.getId());
        map.put("ticket", ticket);
        return map;


    }

    //ticket的添加操作
    public String addLoginTicket(int userId) {
        LoginTicket loginTicket = new LoginTicket();
        loginTicket.setUserId(userId);
        Date now = new Date();
        now.setTime(3600 * 24 * 100 + now.getTime());
        loginTicket.setExpired(now);
        loginTicket.setStatus(0);
        loginTicket.setTicket(UUID.randomUUID().toString().replaceAll("-", ""));
        loginTicketDAO.addTicket(loginTicket);
        return loginTicket.getTicket();

    }

    public void logout(String ticket) {
        loginTicketDAO.updateStatus(ticket, 1);
    }
}
