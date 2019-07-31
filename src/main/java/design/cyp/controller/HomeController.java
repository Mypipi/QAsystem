package design.cyp.controller;

import design.cyp.aspect.LogAspect;
import design.cyp.model.*;
import design.cyp.service.CommentService;
import design.cyp.service.FollowService;
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

    @Autowired
    FollowService followService;

    @Autowired
    CommentService commentService;

    //用户个人页面
    @RequestMapping(path = {"/user/{userId}"}, method = {RequestMethod.GET,RequestMethod.POST})
    public String userIndex(Model model, @PathVariable("userId") int userId) {

        model.addAttribute("vos", getQuestions(userId, 0, 10));

        User user = userService.getUser(userId);
        ViewObject vo = new ViewObject();
        vo.set("user",user);
        vo.set("commentConunt",commentService.getUserCommentCount(userId));
        vo.set("followerCount",followService.getFollowerCount(EntityType.ENTITY_USER,userId));
        vo.set("followeeCount",followService.getFolloweeCount(userId,EntityType.ENTITY_USER));
        if (hostHolder.getUser() != null) {
            vo.set("followed",followService.isFollower(hostHolder.getUser().getId(),EntityType.ENTITY_USER,userId));

        }else {
            vo.set("followed",false);
        }
        model.addAttribute("profileUser",vo);
        return "profile";
    }

    //主页面
    @RequestMapping(path = {"/index", "/"}, method = {RequestMethod.POST,RequestMethod.GET})
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
            vo.set("followCount", followService.getFollowerCount(EntityType.ENTITY_QUESTION, question.getId()));
            vo.set("user", userService.getUser(question.getUserId()));//通过question的user_id查找userid
            vos.add(vo);
        }

        return vos;

    }
}
