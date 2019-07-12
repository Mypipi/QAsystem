package design.cyp.dao;

import design.cyp.model.User;
import freemarker.template.utility.StringUtil;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

//在mapper文件上加注解@Repository，这是从spring2.0新增的一个注解，用于简化 Spring 的开发，实现数据访问,防止test里的错误提示
@Repository
@Mapper//和mybatis关联
public interface UserDAO {
    String TABLE_NAME = " user ";//两边加空格防止拼接出现问题
    String INSERT_FIELDS = " name,password,salt,head_url ";
    String SELECT_FIELDS = " id ," + INSERT_FIELDS;

    @Insert({"insert into ", TABLE_NAME, " (", INSERT_FIELDS, ") values (#{name},#{password},#{salt},#{headUrl})"})
//从User的对应属性中读取
//用+拼接，与用，拼接的问题？
    int addUser(User user);

    @Select({"select", SELECT_FIELDS, "from", TABLE_NAME, "where id = #{id}"})
//这贱东西害我浪费快一个小时debug
    User selectById(int id);


    @Select({"select", SELECT_FIELDS, "from", TABLE_NAME, "where name = #{name}"})

    User selectByName(String name);

    @Update({"update", TABLE_NAME, "set password=#{password} where id=#{id}"})
    void updatePassword(User user);

    @Delete({"delete", TABLE_NAME, "where id=#{id}"})
    void deleteById(int id);

}
