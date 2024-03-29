<#include "header.ftl">


<#macro comment_question vo>
<div class="feed-item folding feed-item-hook feed-item-2
                        " feed-item-a="" data-type="a" id="feed-2" data-za-module="FeedItem" data-za-index="">
    <meta itemprop="ZReactor" data-id="389034" data-meta="{&quot;source_type&quot;: &quot;promotion_answer&quot;, &quot;voteups&quot;: 4168, &quot;comments&quot;: 69, &quot;source&quot;: []}">
    <div class="feed-item-inner">
        <div class="avatar">
            <a title="${vo.userName!}" data-tip="p$t$amuro1230" class="zm-item-link-avatar" target="_blank" href="/user/${vo.userId}">
                <img src="${vo.userHead!}" class="zm-item-img-avatar"></a>
        </div>
        <div class="feed-main">
            <div class="feed-content" data-za-module="AnswerItem">
                <meta itemprop="answer-id" content="389034">
                <meta itemprop="answer-url-token" content="13174385">
                <!--
                <h2 class="feed-title">
                    <a class="question_link" target="_blank" href="/question/$!{vo.questionId}">$!{vo.questionTitle}</a></h2>
                <div class="feed-question-detail-item">
                    <div class="question-description-plain zm-editable-content"></div>
                </div>
                -->
                <div class="expandable entry-body">
                    <!--
                    <div class="zm-item-vote">
                        <a class="zm-item-vote-count js-expand js-vote-count" href="javascript:;" data-bind-votecount="">${vo.followCount}</a></div>
                        -->
                    <div class="zm-item-answer-author-info">
                        <a class="author-link" data-tip="p$b$amuro1230" target="_blank" href="/user/${vo.userId!}">${vo.userName!}</a>
                        评论了该问题 ，${(vo.createdDate?string("yyyy-MM-dd HH:mm:ss"))!}</div>
                    <!--
                    <div class="zm-item-vote-info" data-votecount="4168" data-za-module="VoteInfo">
                        <span class="voters text">
                            <a href="#" class="more text">
                                <span class="js-voteCount">4168</span>&nbsp;人赞同</a></span>
                    </div>
                    -->
                    <div class="zm-item-rich-text expandable js-collapse-body" data-resourceid="123114" data-action="/answer/content" data-author-name="李淼" data-entry-url="/question/19857995/answer/13174385">
                        <a href="/question/${vo.questionId}"><div class="zh-summary summary clearfix">${vo.questionTitle}</div></a>
                    </div>
                </div>
                <!--
                <div class="feed-meta">
                    <div class="zm-item-meta answer-actions clearfix js-contentActions">
                        <div class="zm-meta-panel">
                            <a data-follow="q:link" class="follow-link zg-follow meta-item" href="javascript:;" id="sfb-123114">
                                <i class="z-icon-follow"></i>关注问题</a>
                            <a href="#" name="addcomment" class="meta-item toggle-comment js-toggleCommentBox">
                                <i class="z-icon-comment"></i> 条评论</a>


                            <button class="meta-item item-collapse js-collapse">
                                <i class="z-icon-fold"></i>收起</button>
                        </div>
                    </div>

                </div>
                -->
            </div>
        </div>
    </div>
</div>
</#macro>


<#macro follow_question vo>
<div class="feed-item folding feed-item-hook feed-item-2
                        " feed-item-a="" data-type="a" id="feed-2" data-za-module="FeedItem" data-za-index="">
    <meta itemprop="ZReactor" data-id="389034" data-meta="{&quot;source_type&quot;: &quot;promotion_answer&quot;, &quot;voteups&quot;: 4168, &quot;comments&quot;: 69, &quot;source&quot;: []}">
    <div class="feed-item-inner">
        <div class="avatar">
            <a title="${vo.userName!}" data-tip="p$t$amuro1230" class="zm-item-link-avatar" target="_blank" href="/user/${vo.userId}">
                <img src="${vo.userHead!}" class="zm-item-img-avatar"></a>
        </div>
        <div class="feed-main">
            <div class="feed-content" data-za-module="AnswerItem">
                <meta itemprop="answer-id" content="389034">
                <meta itemprop="answer-url-token" content="13174385">
                <!--
                <h2 class="feed-title">
                    <a class="question_link" target="_blank" href="/question/$!{vo.questionId}">$!{vo.questionTitle}</a></h2>
                <div class="feed-question-detail-item">
                    <div class="question-description-plain zm-editable-content"></div>
                </div>
                -->
                <div class="expandable entry-body">
                    <!--
                    <div class="zm-item-vote">
                        <a class="zm-item-vote-count js-expand js-vote-count" href="javascript:;" data-bind-votecount="">${vo.followCount}</a></div>
                        -->
                    <div class="zm-item-answer-author-info">
                        <a class="author-link" data-tip="p$b$amuro1230" target="_blank" href="/user/${vo.userId!}">${vo.userName!}</a>
                        关注了该问题 ，${(vo.createdDate?string("yyyy-MM-dd HH:mm:ss"))!}</div>
                    <!--
                    <div class="zm-item-vote-info" data-votecount="4168" data-za-module="VoteInfo">
                        <span class="voters text">
                            <a href="#" class="more text">
                                <span class="js-voteCount">4168</span>&nbsp;人赞同</a></span>
                    </div>
                    -->
                    <div class="zm-item-rich-text expandable js-collapse-body" data-resourceid="123114" data-action="/answer/content" data-author-name="李淼" data-entry-url="/question/19857995/answer/13174385">
                        <a href="/question/${vo.questionId}"><div class="zh-summary summary clearfix">${vo.questionTitle}</div></a>
                    </div>
                </div>
                <!--
                <div class="feed-meta">
                    <div class="zm-item-meta answer-actions clearfix js-contentActions">
                        <div class="zm-meta-panel">
                            <a data-follow="q:link" class="follow-link zg-follow meta-item" href="javascript:;" id="sfb-123114">
                                <i class="z-icon-follow"></i>关注问题</a>
                            <a href="#" name="addcomment" class="meta-item toggle-comment js-toggleCommentBox">
                                <i class="z-icon-comment"></i>条评论</a>


                            <button class="meta-item item-collapse js-collapse">
                                <i class="z-icon-fold"></i>收起</button>
                        </div>
                    </div>

                </div>
                -->
            </div>
        </div>
    </div>
</div>
</#macro>




    <div class="zg-wrap zu-main clearfix " role="main">
        <div class="zu-main-content">
            <div class="zu-main-content-inner">
                <div class="zg-section" id="zh-home-list-title">
                    <i class="zg-icon zg-icon-feedlist"></i>最新动态
                    <input type="hidden" id="is-topstory">
                    <span class="zg-right zm-noti-cleaner-setting" style="list-style:none">
                        <a href="https://nowcoder.com/settings/filter" class="zg-link-gray-normal">
                            <i class="zg-icon zg-icon-settings"></i>设置</a></span>
                </div>
                <div class="zu-main-feed-con navigable" data-feedtype="topstory" id="zh-question-list" data-widget="navigable" data-navigable-options="{&quot;items&quot;:&quot;&gt; .zh-general-list .feed-content&quot;,&quot;offsetTop&quot;:-82}">
                    <a href="javascript:;" class="zu-main-feed-fresh-button" id="zh-main-feed-fresh-button" style="display:none"></a>
                    <div id="js-home-feed-list" class="zh-general-list topstory clearfix" data-init="{&quot;params&quot;: {}, &quot;nodename&quot;: &quot;TopStory2FeedList&quot;}" data-delayed="true" data-za-module="TopStoryFeedList">


                        <#list page.list as vo>

                            <#if vo.type == 1>

                              <@comment_question vo=vo></@comment_question>
                                <#elseif vo.type == 4>
                                    <@follow_question vo=vo></@follow_question>
                               
                            </#if>
                        </#list>
                    </div>
                    <div class="pagination">
                        <ul data-total="100">
                            <li class="txt-pager js-first-pager"><a data-page="1" href="?start=${page.navigateFirstPage}">首页</a></li>

                            <#if page.isFirstPage>
                                <li class="txt-pager disabled js-pre-pager"><a data-page="1" href="javascript:void(0)">上一页</a></li>
                            <#else >
                                <li class="txt-pager js-pre-pager"><a data-page="1" href="?start=${page.pageNum-1}">上一页</a></li>
                            </#if>

                            <#list page.navigatepageNums as num>
                                <#if page.pageNum = num>
                                    <li class="active js-1-pager"><a href="?start=${num}" data-page="1">${num}</a></li>
                                <#else >
                                    <li class="js-1-pager"><a href="?start=${num}" data-page="1">${num}</a></li>
                                </#if>
                            </#list>



                            <#if page.isLastPage>
                                <li class="txt-pager js-next-pager disabled"><a href="javascript:void(0)" data-page="2" ">下一页</a></li>
                            <#else >
                                <li class="txt-pager js-next-pager"><a href="?start=${page.pageNum+1}">下一页</a></li>
                            </#if>


                            <li class="txt-pager js-last-pager"><a data-page="100" href="?start=${page.pages}">末页</a></li>


                        </ul>
                    </div>
            </div>
        </div>
    </div>
<#include "js.ftl">
<script type="text/javascript" src="//cdn.jsdelivr.net/gh/Mypipi/static@v3.0/scripts/main/site/detail.js"></script>
<#include "footer.ftl">