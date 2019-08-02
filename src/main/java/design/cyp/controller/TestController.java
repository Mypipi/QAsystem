package design.cyp.controller;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import design.cyp.dao.TestDAO;
import design.cyp.model.Question;
import design.cyp.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;


@Controller
public class TestController {
    @Autowired
    TestDAO test;

    @Autowired
    QuestionService questionService;
    @RequestMapping({"/testDemo"})
    public String list(Model model,
                       @RequestParam(value = "start", defaultValue = "0") int start,
                       @RequestParam(value = "size", defaultValue = "5") int size) throws Exception {
        PageHelper.startPage(start,size,"id desc");
        List<Question> cs=test.findAll();
        PageInfo<Question> page = new PageInfo<>(cs);
        model.addAttribute("page", page);
        System.out.println(page.getTotal());

        return "testDemo";
    }
}
