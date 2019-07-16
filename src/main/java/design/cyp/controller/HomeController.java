package design.cyp.controller;

import design.cyp.aspect.LogAspect;
import design.cyp.model.HostHolder;
import design.cyp.model.Question;
import design.cyp.model.User;
import design.cyp.model.ViewObject;
import design.cyp.service.QuestionService;
import design.cyp.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {
    private static final Logger logger = LoggerFactory.getLogger(LogAspect.class);

    @Autowired
    QuestionService questionService;

    @Autowired
    UserService userService;

    @Autowired
    HostHolder hostHolder;

    //用户个人页面
    @RequestMapping(path = {"/user/{userId}"}, method = {RequestMethod.GET})
    public String userIndex(Model model, @PathVariable("userId") int userId) {

        model.addAttribute("vos", getQuestions(userId, 0, 10));
        return "index";
    }

    //主页面
    @RequestMapping(path = {"/index", "/"}, method = RequestMethod.GET)
    public String index(Model model) {

        model.addAttribute("vos", getQuestions(0, 0, 10));//用来添加到前端
        hostHolder.getUser();
        return "index";
    }


    //问题列表页面
    private List<ViewObject> getQuestions(int userId, int offset, int limit) {
        List<Question> questionList = questionService.getLatestQuestions(userId, offset, limit);//获取10个
        List<ViewObject> vos = new ArrayList<ViewObject>();//通过list存map集合

        for (Question question : questionList) {
            ViewObject vo = new ViewObject();
            vo.set("question", question);
            vo.set("user", userService.getUser(question.getUserId()));//通过question的user_id查找userid
            vos.add(vo);
        }

        return vos;

    }
}
