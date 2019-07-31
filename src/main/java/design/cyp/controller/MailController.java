package design.cyp.controller;

import design.cyp.util.MailUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MailController {
    @Autowired
    MailUtil mailUtil;

    @RequestMapping(path = {"/sendMail"}, method = RequestMethod.GET)
    public String sendMail(Model model) {


        model.addAttribute("code","j");
        mailUtil.send();
        return "mail";

    }

}
