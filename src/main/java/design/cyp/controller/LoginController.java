package design.cyp.controller;


import design.cyp.aspect.LogAspect;
import design.cyp.service.UserService;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

@Controller
public class LoginController {
    private static final Logger logger = LoggerFactory.getLogger(LogAspect.class);

    @Autowired
    UserService userService;

    //注册页面
    @RequestMapping(path = {"/reg/"}, method = RequestMethod.POST)
    public String reg(Model model,
                      @RequestParam("username") String username,
                      @RequestParam("password") String password,
                      @RequestParam(value = "next") String next,
                      @RequestParam(value = "rememberme", defaultValue = "false") boolean rememberme,
                      HttpServletResponse httpServletResponse) {

        try {
            Map<String, String> map = userService.register(username, password);//判断用户名和密码是否正确
            //利用ticket来实现免密登录
            if (map.containsKey("ticket")) {
                Cookie cookie = new Cookie("ticket", map.get("ticket").toString());
                cookie.setPath("/");
                if (rememberme) {
                    cookie.setMaxAge(3600*24*5);
                }
                httpServletResponse.addCookie(cookie);
                //利用next实现登录后的跳转
                if (StringUtils.isNotBlank(next)){
                    return "redirect:"+next;
                }
                return "redirect:/";

            } else {

                //返回错误信息到html
                model.addAttribute("msg", map.get("msg"));
                return "login";
            }
            //注册完自动登录
            //return "redirect:/";

        } catch (Exception e) {
            logger.error("reg error" + e.getMessage());
            return "login";
        }

    }

    //登录界面
    @RequestMapping(path = {"/reglogin"}, method = {RequestMethod.GET})
    public String reg(Model model,
                      @RequestParam(value = "next",required = false) String next) {
        model.addAttribute("next",next);

        return "login";
    }

    //
    @RequestMapping(path = {"/login/"}, method = RequestMethod.POST)
    public String login(Model model,
                        @RequestParam("username") String username,
                        @RequestParam("password") String password,
                        @RequestParam(value = "next",required = false) String next,
                        @RequestParam(value = "rememberme", defaultValue = "false") boolean rememberme,
                        HttpServletResponse httpServletResponse) {

        try {
            Map<String, String> map = userService.login(username, password);
            if (map.containsKey("ticket")) {
                Cookie cookie = new Cookie("ticket", map.get("ticket").toString());
                cookie.setPath("/");
                if (rememberme) {
                    cookie.setMaxAge(3600*24*5);
                }
                httpServletResponse.addCookie(cookie);
                if (StringUtils.isNotBlank(next)){
                    return "redirect:"+next;
                }
                return "redirect:/";

            } else {

                model.addAttribute("msg", map.get("msg"));
                return "login";
            }
            //注册完自动登录
            //return "redirect:/";


        } catch (Exception e) {
            logger.error("login error" + e.getMessage());
            return "login";
        }

    }

    @RequestMapping(path = {"/logout"}, method = {RequestMethod.GET,RequestMethod.POST})
    public String logout(@CookieValue("ticket") String ticket) {
        userService.logout(ticket);
        return "redirect:/";
    }
}
