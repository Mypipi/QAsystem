# 一个微型论坛/社区
- 演示地址：http://qasystem.cyp.design:8080/

## 1.项目环境
- .操作系统macOS 10.13.6(黑苹果)
- 1.IntelliJ IDEA 2019
- 2.git 2.17
- 3.JDK 8
- 4.Python 3.6
- 5.redis 5.05
- 6.MySQL 5.7
- 7.springboot 2.1.6
- 8.Mybatis 1.1.1
- 9.freemarker
- 10.web容器：springboot自带tomcat

## 2.功能
- 1.用户注册登录
- 2.问题发布，敏感词过滤，js过滤，问题广场
- 3.评论中心，站内信（私信）
- 4.点赞功能
- 5.异步框架设计，邮件通知
- 6.关注功能，粉丝列表和关注列表
- 7.timeline 推拉模式，新鲜事功能。推：事件触发后推送给所有粉丝，优缺点：如果粉丝过多对后台压力大，浪费存储空间。 拉：根据登录打开页面动态实现timeline内容，读取压力大，存储占用小。。一般根据用户情况使用推拉结合
- 8.Python爬取数据
- 9.全文搜索
- 10.模板引擎--freemarker

## 3.分层
- 1.controller
- 2.service
- 3.DAO
- 4.Model
- 5.Database

## 4.细节
- 1.ViewObject自定义一个Map集合方便存取和交互数据到前端界面
- 2.注册：
- - 1.密码md5加密，salt提高加密强度
- 3.登录：token关联userid，实现有效期免登录
- 4.拦截器：实现未登录跳转登录，登录后返回原来界面
- 5.敏感词过滤：使用前缀树,时间和空间复杂度低O（n）
- 6.赞为什么选择redis：list 使用与最新，关注列表，Set没有顺序，适合赞，抽奖，已读，共同好友，SortedSet适合排行榜，优先队列，Hash适合不定长属性数
- 7.异步队列发送系统站内信：较慢没有关系，不需要太及时，给系统减轻压力  实现：通过fireEvent()提交事件到EventProducer之后把事件依次放入优先队列中之后利用EventConsumer依次把事件取出利用handle来实现一个事件。
- 8.关注服务：使用redis的zset/list，多对多的一个模型，id与id之间相互关联，有序
- 9.关注问题：异步事件
- 10.排序算法：score = （P-1）/ (T+2)^g  //p回复数，T从发布到现在的时间，g，重力加速度，分值根据时间降低速率
- 11.异步设计思想：
	在当今互联网这种上网人群多,访问量大的情况下,异步编程提供了一个非堵塞的,基于事件驱动的编程模型.这种编程方式可以充分利用计算机的多核来同时执行并行任务,提高资源的利用效率.应用场景在我了解的也不多,可以想象应用场景是很广泛的.举个很简单的例子,我们在网站注册新的社交账号的话,严格一点的网站都是会有验证邮箱地址的邮件.这个就是一个异步的事件,你不可能说直接把邮件验证的流程嵌套在业务逻辑里面.应该是把这个事件发送给一个队列里面,然后队列专门处理这种事件.在一个网站中有各种各样的事情需要进行处理


