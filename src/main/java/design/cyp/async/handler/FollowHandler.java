package design.cyp.async.handler;

import design.cyp.async.EventHandler;
import design.cyp.async.EventModel;
import design.cyp.async.EventType;
import design.cyp.model.EntityType;
import design.cyp.model.Message;
import design.cyp.model.User;
import design.cyp.service.MessageService;
import design.cyp.service.UserService;
import design.cyp.util.QAUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.UsesSunMisc;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Component
public class FollowHandler implements EventHandler {
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
        if (eventModel.getEntityType() == EntityType.ENTITY_QUESTION) {
            message.setContent("用户" +user.getName()+
                    "关注了你的问题，http://127.0.0.1:8080/question/"+eventModel.getEntityId());
        }else if (eventModel.getEntityType() == EntityType.ENTITY_USER) {
            message.setContent("用户"+ user.getName()+
                    "关注了你，http://127.0.0.1:8080/user/" + eventModel.getActorId());
        }
        messageService.addMessage(message);
    }

    @Override
    public List<EventType> getSupportEventTypes() {
        return Arrays.asList(EventType.FOLLOW);
    }
}
