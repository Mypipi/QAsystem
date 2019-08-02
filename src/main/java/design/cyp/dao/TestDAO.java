package design.cyp.dao;

import design.cyp.model.Question;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface TestDAO {
    @Select("select * from question ")
    List<Question> findAll();
}
