package design.cyp.util;

import freemarker.template.Configuration;
import freemarker.template.Template;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class MailUtil {
    private static final Logger logger = LoggerFactory.getLogger(MailUtil.class);

    @Autowired
    private Configuration configuration;

    @Autowired
    private JavaMailSender jms;

    public void send(){
        MimeMessage message =jms.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper( message,true);
            helper.setFrom("cyp@cyp.design");
            helper.setTo("277832294@qq.com");
            helper.setSubject("使用模板");

            Map<String, Object> model = new HashMap<>();
            model.put("UserName", "yao");

            try {
                Template template = configuration.getTemplate("mail.ftl");
                String html = FreeMarkerTemplateUtils.processTemplateIntoString(template,model);

                helper.setText(html,true);
            } catch (Exception e) {
                e.printStackTrace();
            }


        } catch (MessagingException e) {
            e.printStackTrace();
        }

        jms.send(message);
    }

    public String checkCode(){
        String str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz0123456789";//设置可以随机的数
        Random ran = new Random();
        //随机把数字画在图片中
        String code = "";
        for (int i = 0; i < 4; i++) {
            char c = str.charAt(ran.nextInt(str.length()));
            code = code+c;
        }
        System.out.println(code);
        return code;
    }

}
