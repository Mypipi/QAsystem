package design.cyp.controller;

import design.cyp.aspect.LogAspect;
import design.cyp.model.Comment;
import design.cyp.model.EntityType;
import design.cyp.model.HostHolder;
import design.cyp.service.CommentService;
import design.cyp.service.QuestionService;
import design.cyp.service.SensitiveService;
import design.cyp.util.QAUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.util.HtmlUtils;

import java.util.Date;

@Controller
public class CommentController {
    private static final Logger logger = LoggerFactory.getLogger(CommentController.class);
    @Autowired
    HostHolder hostHolder;

    @Autowired
    CommentService commentService;

    @Autowired
    SensitiveService sensitiveService;

    @Autowired
    QuestionService questionService;

    @RequestMapping(path = {"/addComment"}, method = RequestMethod.POST)
    public String addComment(@RequestParam("questionId") int questionId,
                             @RequestParam("content") String content) {
        try {


            content = sensitiveService.filter(content);
            content = HtmlUtils.htmlEscape(content);
            Comment comment = new Comment();
            if (hostHolder.getUser() != null) {
                comment.setUserId(hostHolder.getUser().getId());

            } else {
                comment.setUserId(QAUtil.ANONYMOUS_USERID);

            }
            comment.setCreatedDate(new Date());
            comment.setEntityType(EntityType.ENTITY_QUESTION);
            comment.setContent(content);
            comment.setStatus(0);
            comment.setEntityId(questionId);

            commentService.addComment(comment);

            int count = commentService.getCommentCount(comment.getEntityId(),comment.getEntityType());
            questionService.updateCommentCount(comment.getEntityId(),count);

        }catch (Exception e){
            logger.error("添加评论失败"+e.getMessage());
        }

        return "redirect:/question/"+questionId;


    }
}
