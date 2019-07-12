package design.cyp.dao;

import design.cyp.model.Comment;
import design.cyp.model.Question;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

//在mapper文件上加注解@Repository，这是从spring2.0新增的一个注解，用于简化 Spring 的开发，实现数据访问,防止test里的错误提示
@Repository
@Mapper//和mybatis关联
public interface CommentDAO {
    String TABLE_NAME = " comment ";//两边加空格防止拼接出现问题
    String INSERT_FIELDS = " user_id, content, created_date, entity_id, entity_type, status ";
    String SELECT_FIELDS = " id ," + INSERT_FIELDS;

    //加了{}后，好像可以当加号用
    @Insert({"insert into ", TABLE_NAME, " (", INSERT_FIELDS, ") values (#{userId},#{content},#{createdDate},#{entityId},#{entityType},#{status})"})
//从User的对应属性中读取
//用+拼接，与用，拼接的问题？
    int addComment(Comment comment);

    //通过id查询问题详情
    @Select({"select count(id) from", TABLE_NAME, "where entity_id = #{entityId} and entity_type=#{entityType}"})
    int getCommentCount(@Param("entityId") int entityId,
                        @Param("entityType") int entityType);

    @Select({"select", SELECT_FIELDS, "from", TABLE_NAME, "where entity_id = #{entityId} and entity_type=#{entityType} order by ",
            " created_date desc "})
    List<Comment> selectCommentByEntity(@Param("entityId") int entityId,
                                        @Param("entityType") int entityType);

    @Update({"update comment set status = #{status} where entity_id=#{entityId} and entity_type=#{entityType}"})
    void updateStatus(@Param("entityId") int entityId, @Param("entityType") int entityType, @Param("status") int status);

}