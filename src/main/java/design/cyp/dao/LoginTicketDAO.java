package design.cyp.dao;

import design.cyp.model.LoginTicket;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;


//实现ticket的查询
@Repository
@Mapper
public interface LoginTicketDAO {
    String TABLE_NAME = " login_ticket ";//两边加空格防止拼接出现问题
    String INSERT_FIELDS = " user_id,expired,status,ticket ";
    String SELECT_FIELDS = " id ," + INSERT_FIELDS;

    @Insert({"insert into",TABLE_NAME,"(",INSERT_FIELDS,") values (#{userId},#{expired},#{status},#{ticket})"})
    int addTicket(LoginTicket loginTicket);

    @Select({"select",SELECT_FIELDS,"from",TABLE_NAME,"where ticket = #{ticket}"})
    LoginTicket selectByTicket(String ticket);

    @Update({"update",TABLE_NAME,"set status = #{status} where ticket = #{ticket}"})
    void updateStatus(@Param("ticket") String ticket, @Param("status") int status);
}
