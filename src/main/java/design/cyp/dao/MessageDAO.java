package design.cyp.dao;

import design.cyp.model.Comment;
import design.cyp.model.Message;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

//在mapper文件上加注解@Repository，这是从spring2.0新增的一个注解，用于简化 Spring 的开发，实现数据访问,防止test里的错误提示
@Repository
@Mapper//和mybatis关联
public interface MessageDAO {
    String TABLE_NAME = " message ";//两边加空格防止拼接出现问题
    String INSERT_FIELDS = " from_id, to_id, content, created_date, has_read, conversation_id ";
    String SELECT_FIELDS = " id ," + INSERT_FIELDS;

    //加了{}后，好像可以当加号用
    @Insert({"insert into ", TABLE_NAME, " (", INSERT_FIELDS, ") values (#{fromId},#{toId},#{content},#{createdDate},#{hasRead},#{conversationId})"})
//从User的对应属性中读取
//用+拼接，与用，拼接的问题？
    int addMessage(Message message);

    //通过id查询问题详情
    @Select({"select ", SELECT_FIELDS,"from", TABLE_NAME,"where conversation_id=#{conversationId} order by id desc limit #{offset},#{limit}"})
    List<Message> getConversationDetail(@Param("conversationId") String conversationId,
                                        @Param("offset") int offset,
                                        @Param("limit") int limit);

    @Select({"select count(id) from ", TABLE_NAME, "where has_read = 0 and to_id = #{userId} and conversation_id=#{conversationId}"})
    int getConversationUnreadCount(@Param("userId") int userId,
                                   @Param("conversationId") String conversationId);


    @Select({"select ", INSERT_FIELDS, " ,count(id) as id from ( select * from ", TABLE_NAME, " where from_id=#{userId} or to_id=#{userId} order by id desc) tt group by conversation_id  order by created_date desc limit #{offset}, #{limit}"})
    List<Message> getConversationList(@Param("userId") int userId,
                                        @Param("offset") int offset,
                                        @Param("limit") int limit);

    @Update({"update",TABLE_NAME,"set has_read = 1 where conversation_id=#{conversationId}"})
    void updateStatus(@Param("conversationId") String conversationId);


}