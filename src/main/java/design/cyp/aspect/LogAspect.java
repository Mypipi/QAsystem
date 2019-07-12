package design.cyp.aspect;



import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
//这里要在pom里配置AOP才可以生效，不知道为什么springboot里没有aop可以选，还有报错原因是改了版本号改成2.1.6就可以了，不知道是什么鬼。。
@Aspect//表示切面
@Component//用组件模式构建出来
public class LogAspect {
    private static final Logger logger = LoggerFactory.getLogger(LogAspect.class);//打印日志用的

    //执行包之前执行这个
    @Before("execution(* design.cyp.controller.IndexController.*(..))")
    public void beforeMethod(){

        logger.info("before method hh");

    }
    //执行包后执行这个
    @After("execution(* design.cyp.controller.IndexController.*(..))")
    public void afterMethod(){
        logger.info("after method jj");

    }
}
