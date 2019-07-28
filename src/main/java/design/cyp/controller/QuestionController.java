package design.cyp.controller;

import design.cyp.model.*;
import design.cyp.service.*;
import design.cyp.util.QAUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class QuestionController {
    private static final Logger logger = LoggerFactory.getLogger(QuestionController.class);

    @Autowired
    QuestionService questionService;

    @Autowired
    CommentService commentService;


    @Autowired
    UserService userService;

    @Autowired
    HostHolder hostHolder;

    @Autowired
    LikeService likeService;

    @Autowired
    FollowService followService;

    //添加问题
    @RequestMapping(value = "/question/add", method = {RequestMethod.POST})
    @ResponseBody
    public String addQuestion(@RequestParam("title") String title,
                              @RequestParam("content") String content) {
        try {
            Question question = new Question();
            question.setTitle(title);
            question.setContent(content);
            question.setCreatedDate(new Date());
            question.setCommentCount(0);
            if (hostHolder.getUser() == null) {

                //question.setUserId(QAUtil.ANONYMOUS_USERID);
                return QAUtil.getJSONString(999);//实现没有登录点击提问跳转到登录页面
            } else {
                question.setUserId(hostHolder.getUser().getId());
            }

            if (questionService.addQuestion(question) > 0) {
                return QAUtil.getJSONString(0);
            }

            questionService.addQuestion(question);

        } catch (Exception e) {
            logger.error("增加题目失败" + e.getMessage());

        }

        return QAUtil.getJSONString(1, "失败");

    }

    //实现问题详情界面
    @RequestMapping(value = "/question/{qid}",method = RequestMethod.GET)
    public String questionDetail(Model model,
                                 @PathVariable("qid") int qid) {

        Question question = questionService.selectById(qid);
        model.addAttribute("question", question);
        List<Comment> commentList = commentService.getCommentsByEntity(qid, EntityType.ENTITY_QUESTION);
        List<ViewObject> comments = new ArrayList<ViewObject>();
        for (Comment comment : commentList) {
            ViewObject viewObject = new ViewObject();
            viewObject.set("comment", comment);
            //显示赞的功能
            if (hostHolder.getUser() == null) {
                viewObject.set("liked", 0);
            } else {
                viewObject.set("liked", likeService.getLikeStatus(hostHolder.getUser().getId(), EntityType.ENTITY_COMMENT, comment.getId()));
            }

            viewObject.set("likeCount", likeService.getLikeCount(EntityType.ENTITY_COMMENT, comment.getId()));
            viewObject.set("user", userService.getUser(comment.getUserId()));
            comments.add(viewObject);
        }
        model.addAttribute("comments", comments);
        List<ViewObject> followUsers = new ArrayList<>();
        List<Integer> users = followService.getFollowers(EntityType.ENTITY_QUESTION,qid,20);
        for (Integer userId : users) {
            ViewObject vo = new ViewObject();
            User u = userService.getUser(userId);
            if (u == null) {
                continue;
            }
            vo.set("name", u.getName());
            vo.set("headUrl", u.getHeadUrl());
            vo.set("id",u.getId());
            followUsers.add(vo);

        }

        model.addAttribute("followUsers",followUsers);
        if (hostHolder.getUser() != null) {
            model.addAttribute("followed",followService.isFollower(hostHolder.getUser().getId(), EntityType.ENTITY_QUESTION,qid));

        }else {
            model.addAttribute("followed",false);
        }

        return "detail";

    }


}
