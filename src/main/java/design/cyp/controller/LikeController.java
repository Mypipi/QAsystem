package design.cyp.controller;


import design.cyp.async.EventModel;
import design.cyp.async.EventProducer;
import design.cyp.async.EventType;
import design.cyp.model.Comment;
import design.cyp.model.EntityType;
import design.cyp.model.HostHolder;
import design.cyp.service.CommentService;
import design.cyp.service.LikeService;
import design.cyp.service.MessageService;
import design.cyp.util.QAUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by nowcoder on 2016/7/30.
 */
@Controller
public class LikeController {
    @Autowired
    LikeService likeService;

    @Autowired
    HostHolder hostHolder;

    @Autowired
    CommentService commentService;

    @Autowired
    EventProducer eventProducer;



    //点赞功能
    @RequestMapping(path = {"/like"}, method = {RequestMethod.POST})
    @ResponseBody
    public String like(@RequestParam("commentId") int commentId) {
        if (hostHolder.getUser() == null) {
            return QAUtil.getJSONString(999);
        }

        Comment comment = commentService.getCommentById(commentId);

        eventProducer.fireEvent(new EventModel(EventType.LIKE)
                .setActorId(hostHolder.getUser().getId()).setEntityId(commentId)
                .setEntityType(EntityType.ENTITY_COMMENT).setEntityOwnerId(comment.getUserId())
                .setExt("questionId", String.valueOf(comment.getEntityId())));


        long likeCount = likeService.like(hostHolder.getUser().getId(), EntityType.ENTITY_COMMENT, commentId);
        return QAUtil.getJSONString(0, String.valueOf(likeCount));
    }


    //点踩功能
    @RequestMapping(path = {"/dislike"}, method = {RequestMethod.POST})
    @ResponseBody
    public String dislike(@RequestParam("commentId") int commentId) {
        if (hostHolder.getUser() == null) {
            return QAUtil.getJSONString(999);
        }

        long likeCount = likeService.disLike(hostHolder.getUser().getId(), EntityType.ENTITY_COMMENT, commentId);
        return QAUtil.getJSONString(0, String.valueOf(likeCount));
    }
}
