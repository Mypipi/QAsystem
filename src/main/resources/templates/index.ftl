<#include "header.ftl">
<link rel="stylesheet" href="../styles/index.css">
<link rel="stylesheet" href="../styles/detail.css">
<link rel="stylesheet" href="//static.nowcoder.com/nc/style/0.0.22/fontcustom/global/global.css">
<link rel="stylesheet" href="//static.nowcoder.com/nc/style/0.0.22/common/global.css">
<link rel="stylesheet" href="//static.nowcoder.com/nc/style/0.0.22/common/ui.css">
<link rel="stylesheet" href="//static.nowcoder.com/nowcoder/1.2.1269/stylesheets/common/base.css">
<link rel="stylesheet" href="//static.nowcoder.com/nowcoder/1.2.1269/stylesheets/pages/discuss/discuss.css">


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

            <div class="nk-main clearfix">

                <!--主体内容-->
                <div class="nk-content">
                    <div class="module-box">
                        <div class="module-head clearfix">
                            <div class="module-head-oprt">
                                <a class="btn btn-primary btn-b-publish nc-req-auth" href="/discuss/v2/post?type=0">
                                    <i class="ico-submit"></i>
                                    我要发布
                                </a>
                            </div>
                            <h2>分享与求助</h2>
                        </div>

                        <div class="discuss-tab-wrap">
                            <a href="/discuss?type=0&order=0" class="discuss-tab selected">全部</a>

                        </div>
                        <div class="menu-txt-box">
                            <ul class="menu-txt clearfix">
                                <li class="selected">
                                    <a href="/discuss?order=0&type=0&expTag=0">最新回复</a>
                                </li>

                                <li class="selected">
                                    <a href="/discuss?order=3&type=0&expTag=0">最新发表</a>
                                </li>
                                <li class="menu-pipe">|</li>
                                <li>
                                    <a href="/discuss?order=1&type=0&expTag=0">最热</a>
                                </li>
                                <li class="menu-pipe">|</li>
                                <li>
                                    <a href="/discuss?order=4&type=0&expTag=0">精华</a>
                                </li>
                            </ul>
                        </div>
                        <div class="module-body">

                            <ul class="common-list">
                                <#list vos as vo>
                                    <li class="clearfix">
                                        <a class="head-pic js-nc-card" data-card-uid="63"
                                           href="/user/${vo.user.id!}"><img alt="头像"
                                                                   src="${vo.user.headUrl!}"></a>
                                        <div class="discuss-detail">
                                            <div class="discuss-main clearfix">
                                                <a href="/question/${vo.question.id!}"
                                                   target="_blank">${vo.question.title!}
                                                </a>
                                                <a href="/discuss/208036?type=0&order=0&pos=1&page=6" target="_blank">
                                                </a>
                                            </div>
                                            <div class="feed-foot">
                                                <div class="feed-origin">
                                                    <p class="feed-tip">
                                                        <a class="d-name level-color-8 js-nc-card"
                                                           data-card-uid="63" href="/user/${vo.user.id!}">${vo.user.name!}</a>

                                                        ${(vo.question.createdDate?string("yyyy-MM-dd HH:mm:ss"))!}发表
                                                    </p>
                                                </div>
                                                <div class="feed-legend">
                                                    <span>回复<span class="feed-legend-num">${vo.question.commentCount}</span></span>
                                                    <span class="feed-legend-pipe">|</span>
                                                    <span>赞<span class="feed-legend-num">9</span></span>
                                                    <span class="feed-legend-pipe">|</span>
                                                    <span>浏览<span class="feed-legend-num">3100</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </#list>
                            </ul>

                            <div class="pagination">
                                <ul data-total="100">
                                    <li class="txt-pager disabled js-first-pager"><a data-page="1"
                                                                                     href="javascript:void(0)">首页</a>
                                    </li>
                                    <li class="txt-pager disabled js-pre-pager"><a data-page="1"
                                                                                   href="javascript:void(0)">上一页</a>
                                    </li>
                                    <li class="active js-1-pager"><a href="javascript:void(0)" data-page="1">1</a></li>
                                    <li class="js-2-pager"><a href="/discuss?type=0&order=0&pageSize=30&expTag=0&page=2"
                                                              data-page="2">2</a></li>
                                    <li class="js-3-pager"><a href="/discuss?type=0&order=0&pageSize=30&expTag=0&page=3"
                                                              data-page="3">3</a></li>
                                    <li class="js-4-pager"><a href="/discuss?type=0&order=0&pageSize=30&expTag=0&page=4"
                                                              data-page="4">4</a></li>
                                    <li class="js-5-pager"><a href="/discuss?type=0&order=0&pageSize=30&expTag=0&page=5"
                                                              data-page="5">5</a></li>
                                    <li class="js-6-pager"><a href="/discuss?type=0&order=0&pageSize=30&expTag=0&page=6"
                                                              data-page="6">6</a></li>
                                    <li class="js-7-pager"><a href="/discuss?type=0&order=0&pageSize=30&expTag=0&page=7"
                                                              data-page="7">7</a></li>
                                    <li class="js-8-pager"><a href="/discuss?type=0&order=0&pageSize=30&expTag=0&page=8"
                                                              data-page="8">8</a></li>
                                    <li class="txt-pager js-next-pager"><a data-page="2"
                                                                           href="/discuss?type=0&order=0&pageSize=30&expTag=0&page=2">下一页</a>
                                    </li>
                                    <li class="txt-pager js-last-pager"><a data-page="100"
                                                                           href="/discuss?type=0&order=0&pageSize=30&expTag=0&page=100">末页</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!--主体内容结束-->

            </div>


            <div class="zu-main-feed-con navigable" data-feedtype="topstory" id="zh-question-list"
                 data-widget="navigable"
                 data-navigable-options="{&quot;items&quot;:&quot;&gt; .zh-general-list .feed-content&quot;,&quot;offsetTop&quot;:-82}">
                <a href="javascript:;" class="zu-main-feed-fresh-button" id="zh-main-feed-fresh-button"
                   style="display:none"></a>
                <div id="js-home-feed-list" class="zh-general-list topstory clearfix"
                     data-init="{&quot;params&quot;: {}, &quot;nodename&quot;: &quot;TopStory2FeedList&quot;}"
                     data-delayed="true" data-za-module="TopStoryFeedList">


                    <#list vos as vo>
                        <div class="feed-item folding feed-item-hook feed-item-2
                        " feed-item-a="" data-type="a" id="feed-2" data-za-module="FeedItem" data-za-index="">
                            <meta itemprop="ZReactor" data-id="389034"
                                  data-meta="{&quot;source_type&quot;: &quot;promotion_answer&quot;, &quot;voteups&quot;: 4168, &quot;comments&quot;: 69, &quot;source&quot;: []}">
                            <div class="feed-item-inner">
                                <div class="avatar">
                                    <a title="${vo.user.name!}" data-tip="p$t$amuro1230" class="zm-item-link-avatar"
                                       target="_blank" href="https://nowcoder.com/people/amuro1230">
                                        <img src="${vo.user.headUrl!}" class="zm-item-img-avatar"></a>
                                </div>
                                <div class="feed-main">
                                    <div class="feed-content" data-za-module="AnswerItem">
                                        <meta itemprop="answer-id" content="389034">
                                        <meta itemprop="answer-url-token" content="13174385">
                                        <h2 class="feed-title">
                                            <a class="question_link" target="_blank"
                                               href="/question/${vo.question.id!}">${vo.question.title!}</a></h2>
                                        <div class="feed-question-detail-item">
                                            <div class="question-description-plain zm-editable-content"></div>
                                        </div>
                                        <div class="expandable entry-body">
                                            <div class="zm-item-vote">
                                                <a class="zm-item-vote-count js-expand js-vote-count"
                                                   href="javascript:;" data-bind-votecount="">${vo.followCount}</a>
                                            </div>
                                            <div class="zm-item-answer-author-info">
                                                <a class="author-link" data-tip="p$b$amuro1230" target="_blank"
                                                   href="/user/${vo.user.id!}">${vo.user.name!}</a>
                                                ，${(vo.question.createdDate?string("yyyy-MM-dd HH:mm:ss"))!}</div>
                                            <div class="zm-item-vote-info" data-votecount="4168"
                                                 data-za-module="VoteInfo">
                                                <span class="voters text">
                                                    <a href="#" class="more text">
                                                        <span class="js-voteCount">4168</span>&nbsp;人赞同</a></span>
                                            </div>
                                            <div class="zm-item-rich-text expandable js-collapse-body"
                                                 data-resourceid="123114" data-action="/answer/content"
                                                 data-author-name="李淼"
                                                 data-entry-url="/question/19857995/answer/13174385">
                                                <div class="zh-summary summary clearfix">${vo.question.content}</div>
                                            </div>
                                        </div>
                                        <div class="feed-meta">
                                            <div class="zm-item-meta answer-actions clearfix js-contentActions">
                                                <div class="zm-meta-panel">
                                                    <a data-follow="q:link" class="follow-link zg-follow meta-item"
                                                       href="javascript:;" id="sfb-123114">
                                                        <i class="z-icon-follow"></i>关注问题</a>
                                                    <a href="#" name="addcomment"
                                                       class="meta-item toggle-comment js-toggleCommentBox">
                                                        <i class="z-icon-comment"></i>${vo.question.commentCount}
                                                        条评论</a>


                                                    <button class="meta-item item-collapse js-collapse">
                                                        <i class="z-icon-fold"></i>收起
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </#list>

                </div>
                <a href="javascript:;" id="zh-load-more" data-method="next" class="zg-btn-white zg-r3px zu-button-more"
                   style="">更多</a></div>
        </div>
    </div>
</div>



<nav aria-label="Page navigation">
    <ul class="pagination">
        <li>
            <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
        </li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li>
            <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
        </li>
    </ul>
</nav>

<#include "js.ftl">
<script type="text/javascript" src="/scripts/main/site/detail.js"></script>
<#include "footer.ftl">