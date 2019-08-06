package design.cyp.service;

import design.cyp.dao.QuestionDAO;
import design.cyp.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.util.HtmlUtils;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    QuestionDAO questionDAO;

    @Autowired
    SensitiveService sensitiveService;

    public Question selectById(int id) {
        return questionDAO.selectById(id);
    }

    //拦截器的具体使用
    public int addQuestion(Question question) {
        question.setContent(HtmlUtils.htmlEscape(question.getContent()));
        question.setTitle(HtmlUtils.htmlEscape(question.getTitle()));
        question.setTitle(sensitiveService.filter(question.getTitle()));
        question.setContent(sensitiveService.filter(question.getContent()));

        return questionDAO.addQuestion(question) > 0 ? question.getUserId() : 0;
    }

    public List<Question> getLatestQuestions(int userId, int offset, int limit) {
        return questionDAO.selectLatestQuestions(userId, offset, limit);//获取查询结果
    }

    public List<Question> getAllQuestions() {
        return questionDAO.getAllQuestions();//获取查询结果
    }

    public List<Question> getHotQuestions(){
        return questionDAO.getHOtQuestions();
    }

    public int updateCommentCount(int id, int count) {
        return questionDAO.updateCommentCount(id, count);
    }

    public Question getById(int id){
        return questionDAO.getById(id);

    }
}
