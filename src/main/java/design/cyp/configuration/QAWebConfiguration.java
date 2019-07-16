package design.cyp.configuration;

import design.cyp.interceptor.LoginRequiredInterceptor;
import design.cyp.interceptor.PassportInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Component
public class QAWebConfiguration extends WebMvcConfigurerAdapter {
    //两个拦截器
    @Autowired
    PassportInterceptor passportInterceptor;//用来登录的

    @Autowired
    LoginRequiredInterceptor loginRequredInterceptor;//登录跳转的

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        registry.addInterceptor(passportInterceptor);
        registry.addInterceptor(loginRequredInterceptor).addPathPatterns("/user/*");//先前面一个拦截器后这个，因为第二个依赖了第一个的变量变量顺序
        super.addInterceptors(registry);
    }
}
