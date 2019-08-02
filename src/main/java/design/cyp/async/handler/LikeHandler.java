package design.cyp.async.handler;

import design.cyp.async.EventHandler;
import design.cyp.async.EventModel;
import design.cyp.async.EventType;
import design.cyp.model.Message;
import design.cyp.model.User;
import design.cyp.service.MessageService;
import design.cyp.service.UserService;
import design.cyp.util.QAUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.awt.*;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Component
public class LikeHandler implements EventHandler {
    @Autowired
    MessageService messageService;

    @Autowired
    UserService userService;



    @Override
    public void doHandler(EventModel eventModel) {

        Message message = new Message();
        message.setFromId(QAUtil.SYSTEM_USER);
        message.setToId(eventModel.getEntityOwnerId());
        message.setCreatedDate(new Date());
        User user = userService.getUser(eventModel.getActorId());
        String url = "<a href= http://127.0.0.1:8080/question/" + eventModel.getExt("questionId") + ">点击查看详情</a>";
        message.setContent("用户"+user.getName()+"赞了你的评论"+ url);
        

        messageService.addMessage(message);
    }



    @Override
    public List<EventType> getSupportEventTypes() {
        return Arrays.asList(EventType.LIKE);
    }

}
