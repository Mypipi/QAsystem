package design.cyp.util;

import ch.qos.logback.core.encoder.EchoEncoder;
import freemarker.template.Configuration;
import freemarker.template.Template;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeUtility;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class MailSender implements InitializingBean {
    private static final Logger logger = LoggerFactory.getLogger(MailSender.class);

    private JavaMailSenderImpl mailSender;



    @Autowired
    private Configuration configuration;

    public void send(){
        MimeMessage message =mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper( message,true);
            helper.setFrom("xxxx@126.com");
            helper.setTo("xxxx@qq.com");
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

        mailSender.send(message);
    }



    @Override
    public void afterPropertiesSet() throws Exception {

        mailSender = new JavaMailSenderImpl();
        mailSender.setUsername("cyp@cyp.design");
        mailSender.setPassword("Qq6571828");
        mailSender.setHost("smtp.exmail.qq.com");
        //mailSender.setHost("smtp.qq.com");
        mailSender.setPort(465);
        mailSender.setProtocol("smtps");
        mailSender.setDefaultEncoding("utf8");
        Properties javaMailProperties = new Properties();
        javaMailProperties.put("mail.smtp.ssl.enable", true);
        //javaMailProperties.put("mail.smtp.auth", true);
        //javaMailProperties.put("mail.smtp.starttls.enable", true);
        mailSender.setJavaMailProperties(javaMailProperties);

    }
}
