package design.cyp.dao;

import design.cyp.model.Question;
import design.cyp.model.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

//在mapper文件上加注解@Repository，这是从spring2.0新增的一个注解，用于简化 Spring 的开发，实现数据访问,防止test里的错误提示
@Repository
@Mapper//和mybatis关联
public interface QuestionDAO {
    String TABLE_NAME = " question ";//两边加空格防止拼接出现问题
    String INSERT_FIELDS = " title,content,user_id,created_date,comment_count ";
    String SELECT_FIELDS = " id ," + INSERT_FIELDS;

    //加了{}后，好像可以当加号用
    @Insert({"insert into ", TABLE_NAME, " (", INSERT_FIELDS, ") values (#{title},#{content},#{userId},#{createdDate},#{commentCount})"})
//从User的对应属性中读取
//用+拼接，与用，拼接的问题？
    int addQuestion(Question question);

    //通过id查询问题详情
    @Select({"select", SELECT_FIELDS, "from", TABLE_NAME, "where id = #{id}"})
    Question selectById(int id);

    //利用xml来进行查询
    List<Question> selectLatestQuestions(@Param("userId") int userId,
                                         @Param("offset") int offset,
                                         @Param("limit") int limit);

    @Update({"update ", TABLE_NAME, " set comment_count = #{commentCount} where id=#{id}"})
    int updateCommentCount(@Param("id") int id, @Param("commentCount") int commentCount);


}