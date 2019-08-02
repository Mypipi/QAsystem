package design.cyp.controller;

import design.cyp.aspect.LogAspect;
import design.cyp.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

//@Controller
public class IndexController {
    private static final Logger logger = LoggerFactory.getLogger(LogAspect.class);

    @RequestMapping(path = {"/", "index"})//指定虚拟路径来访问
    @ResponseBody//返回下面的东西
    public String index() {
        logger.info("Visit home");
        return "hello";
    }


    @RequestMapping(path = {"/profile/{userId}"}, method = {RequestMethod.GET})//指定虚拟路径来访问，指定访问方法
    @ResponseBody
    public String profile(@PathVariable("userId") int userId,
                          @RequestParam(value = "key", defaultValue = "zz", required = false) String key) {//访问的格式，true默认不提供回报错，false则是空

        return String.format("%d  %s", userId, key);
    }
    //以下使用模板来渲染，删除了responsebody

    @RequestMapping(path = {"/vm"}, method = {RequestMethod.GET})//指定虚拟路径来访问

    public String template(Model model) {//model是springui的方法,把参数传递到模板
        model.addAttribute("value", "nihao");//value对应html里的value
        List<String> list = Arrays.asList(new String[]{"red", "bule"});
        Map<String, Integer> map = new HashMap<>();
        map.put("k", 1);
        map.put("j", 2);
        model.addAttribute("list", list);
        model.addAttribute("map", map);
        // model.addAttribute("user", new User("li", "11"));

        return "home";//用名字为home的模板渲染
    }
}
