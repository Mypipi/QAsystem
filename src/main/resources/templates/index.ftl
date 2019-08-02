<#include "header.ftl">
<link rel="stylesheet" href="../styles/index.css">
<link rel="stylesheet" href="../styles/detail.css">
<link rel="stylesheet" href="../styles/globalb.css">
<link rel="stylesheet" href="../styles/global.css">
<link rel="stylesheet" href="../styles/ui.css">
<link rel="stylesheet" href="../styles/base.css">
<link rel="stylesheet" href="../styles/discuss.css">



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

                            <h2>分享与求助</h2>
                        </div>

                        <div class="discuss-tab-wrap">
                            <a href="#" class="discuss-tab selected">全部</a>

                        </div>
                        <div class="menu-txt-box">
                            <ul class="menu-txt clearfix">
                                <li class="selected">
                                    <a href="#">最新回复</a>
                                </li>

                                <li>
                                    <a href="#">最新发表</a>
                                </li>
                                <li class="menu-pipe">|</li>
                                <li>
                                    <a href="#">最热</a>
                                </li>
                                <li class="menu-pipe">|</li>
                                <li>
                                    <a href="#">精华</a>
                                </li>
                            </ul>
                        </div>
                        <div class="module-body">

                            <ul class="common-list">
                                <#list vos.list as vo>
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
                                                           data-card-uid="63"
                                                           href="/user/${vo.user.id!}">${vo.user.name!}</a>

                                                        ${(vo.question.createdDate?string("yyyy-MM-dd HH:mm:ss"))!}发表
                                                    </p>
                                                </div>
                                                <div class="feed-legend">
                                                    <span>回复<span
                                                                class="feed-legend-num">${vo.question.commentCount}</span></span>
                                                    <span class="feed-legend-pipe">|</span>
                                                    <span>关注数<span
                                                                class="feed-legend-num">${vo.followCount}</span></span>
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
                <!--主体内容结束-->

            </div>

        </div>
    </div>
</div>




<#include "js.ftl">

<script type="text/javascript" src="/scripts/main/site/detail.js"></script>
<#include "footer.ftl">