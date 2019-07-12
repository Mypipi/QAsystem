package design.cyp;

import design.cyp.dao.QuestionDAO;
import design.cyp.dao.UserDAO;
import design.cyp.model.Question;
import design.cyp.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

@RunWith(SpringRunner.class)
@SpringBootTest

public class InitDatabaseTests {

    @Autowired
    UserDAO userDAO;

    @Autowired//要单独导入
    QuestionDAO questionDAO;

    @Test
    //设置数据库插入测试
    public void initDatabase() {
        for (int i=0;i<10;i++){
        User user = new User();
        user.setName(String.valueOf(i));
        user.setPassword("123");
        user.setSalt("");
            long time = new Date().getTime();
            user.setHeadUrl("https://cdn.v2ex.co/gravatar//"+time+"?s=50&d=monsterid&r=g");
//      userDAO.addUser(user);


        Question question = new Question();
        question.setCommentCount(i);
        question.setContent("a");
        Date date = new Date();
        question.setCreatedDate(date);
        question.setTitle("jj");
        question.setUserId(i+1);
        questionDAO.addQuestion(question);

        }

    }

}
