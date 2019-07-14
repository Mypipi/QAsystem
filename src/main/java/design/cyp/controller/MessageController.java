package design.cyp.controller;

import design.cyp.model.HostHolder;
import design.cyp.model.Message;
import design.cyp.model.User;
import design.cyp.model.ViewObject;
import design.cyp.service.MessageService;
import design.cyp.service.UserService;
import design.cyp.util.QAUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class MessageController {

    @Autowired
    HostHolder hostHolder;

    @Autowired
    MessageService messageService;

    @Autowired
    UserService userService;

    private static final Logger logger = LoggerFactory.getLogger(MessageController.class);

    @RequestMapping(path = {"/msg/detail"}, method = RequestMethod.GET)
    public String getConversationDetail(Model model,
                                        @RequestParam("conversationId") String conversationId) {
        try {
            messageService.updateHasRead(conversationId);
            List<Message> messageList = messageService.getConversationDetail(conversationId,0,10);
            List<ViewObject> messages = new ArrayList<>();
            for (Message message : messageList){
                ViewObject vo = new ViewObject();
                vo.set("message",message);
                User user = userService.getUser(message.getFromId());
                if (user == null){
                    continue;
                }
                vo.set("headUrl",user.getHeadUrl());
                vo.set("userId",user.getId());
                messages.add(vo);
            }
            model.addAttribute("messages",messages);

        }catch (Exception e){
            logger.error("获取详情失败"+e.getMessage());
        }
        return "letterDetail";
    }

    @RequestMapping(path = {"/msg/list"}, method = RequestMethod.GET)
    public String getConversationlist(Model model) {

        if (hostHolder.getUser() == null){
            return "redirect:/reglogin";
        }
        int localUserId = hostHolder.getUser().getId();
        List<Message> conversationList = messageService.getConversationList(localUserId,0,10);
        List<ViewObject> conversations = new ArrayList<>();
        for (Message message : conversationList){
            ViewObject vo = new ViewObject();
            vo.set("conversation",message);
            int targetId = message.getFromId() == localUserId ? message.getToId() : message.getFromId();
            vo.set("user",userService.getUser(targetId));
            vo.set("unread",messageService.getConversationUnreadCount(localUserId,message.getConversationId()));
            conversations.add(vo);
        }
        model.addAttribute("conversations",conversations);

        return "letter";
    }

    @RequestMapping(path = {"/msg/addMessage"}, method = RequestMethod.POST)
    @ResponseBody
    public String addMessage(@RequestParam("toName") String toName,
                             @RequestParam("content") String content) {
        try {
            if (hostHolder.getUser() == null) {
                return QAUtil.getJSONString(999, "未登录");
            }
            User user = userService.selectByName(toName);
            if (user == null) {
                return QAUtil.getJSONString(1, "用户不存在");

            }

            Message message = new Message();
            message.setContent(content);
            message.setFromId(hostHolder.getUser().getId());
            message.setToId(user.getId());
            message.setCreatedDate(new Date());

            messageService.addMessage(message);
            return QAUtil.getJSONString(0);


        } catch (Exception e) {
            logger.error("addMessage error" + e.getMessage());
            return QAUtil.getJSONString(1, "addMessage fail");
        }
    }
}
