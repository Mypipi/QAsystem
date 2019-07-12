package design.cyp.controller;

import design.cyp.service.QAservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SettingController {
    @Autowired//自动注入节省麻烦
    QAservice qAservice;

    @RequestMapping(path = {"/setting"}, method = {RequestMethod.GET})
    @ResponseBody
    public String setting() {

        return "Setting is Ok" + qAservice.getMessage(1) + qAservice.getMessage(2);
    }
}
