package design.cyp;

import freemarker.template.Configuration;
import freemarker.template.Template;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.HashMap;
import java.util.Map;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MailServiceTestDAO {

    @Autowired
    private Configuration configuration;

    @Autowired
    private JavaMailSender jms;

//    @Test
//    public void send(){
//        MimeMessage message =jms.createMimeMessage();
//        try {
//            MimeMessageHelper helper = new MimeMessageHelper( message,true);
//            helper.setFrom("cyp@cyp.design");
//            helper.setTo("277832294@qq.com");
//            helper.setSubject("使用模板");
//
//            Map<String, Object> model = new HashMap<>();
//            model.put("UserName", "yao");
//
//            try {
//                Template template = configuration.getTemplate("mail.ftl");
//                String html = FreeMarkerTemplateUtils.processTemplateIntoString(template,model);
//
//                helper.setText(html,true);
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//
//
//        } catch (MessagingException e) {
//            e.printStackTrace();
//        }
//
//        jms.send(message);
//    }


}