<#assign bodyclass = "page-search">
<#include "header.ftl">

<div class="zg-wrap zu-main clearfix" role="main">
    <div class="zu-main-content">
        <div class="zu-main-content-inner">
            <ul class="list contents navigable">
                <div class="nk-main clearfix">
                    <!--主体内容-->
                    <div class="nk-content">
                        <div class="module-box">
                            <div class="module-head clearfix">
                                <h2>搜索结果</h2>
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

                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </#list>
                                </ul>


                            </div>
                        </div>
                    </div>
                    <!--主体内容结束-->

                </div>
            </ul>
        </div>
    </div>
</div>



<#include "js.ftl">
<#include "footer.ftl">