<#include "header.ftl">


<div id="main">
    <div class="zg-wrap zu-main clearfix ">
        <ul class="letter-chatlist">

            <#list messages.list as message>

            <li id="msg-item-4009580">
                <a class="list-head">
                    <img alt="头像" src="${message.headUrl!}">
                </a>
                <div class="tooltip fade right in">
                    <div class="tooltip-arrow"></div>
                    <div class="tooltip-inner letter-chat clearfix">
                        <div class="letter-info">
                            <p class="letter-time">${(message.message.createdDate?string("yyyy-MM-dd HH:mm:ss"))!}</p>
                            <a href="javascript:void(0);" id="del-link" name="4009580">删除</a>
                        </div>
                        <p class="chat-content">
                            ${message.message.content!}
                        </p>
                    </div>
                </div>
            </li>

            </#list>
        </ul>
        <div class="pagination">
            <ul data-total="100">
                <li class="txt-pager js-first-pager"><a data-page="1" href="?conversationId=${RequestParameters['conversationId']}&&start=${page.navigateFirstPage}">首页</a></li>

                <#if page.isFirstPage>
                    <li class="txt-pager disabled js-pre-pager"><a data-page="1" href="javascript:void(0)">上一页</a></li>
                <#else >
                    <li class="txt-pager js-pre-pager"><a data-page="1" href="?conversationId=${RequestParameters['conversationId']}&&start=${page.pageNum-1}">上一页</a></li>
                </#if>

                <#list page.navigatepageNums as num>
                    <#if page.pageNum = num>
                        <li class="active js-1-pager"><a href="?conversationId=${RequestParameters['conversationId']}&&start=${num}" data-page="1">${num}</a></li>
                    <#else >
                        <li class="js-1-pager"><a href="?conversationId=${RequestParameters['conversationId']}&&start=${num}" data-page="1">${num}</a></li>
                    </#if>
                </#list>



                <#if page.isLastPage>
                    <li class="txt-pager js-next-pager disabled"><a href="javascript:void(0)" data-page="2" ">下一页</a></li>
                <#else >
                    <li class="txt-pager js-next-pager"><a href="?conversationId=${RequestParameters['conversationId']}&&start=${page.pageNum+1}">下一页</a></li>
                </#if>


                <li class="txt-pager js-last-pager"><a data-page="100" href="?conversationId=${RequestParameters['conversationId']}&&start=${page.pages}">末页</a></li>


            </ul>
        </div>
    </div>

</div>
<#include "js.ftl">
<script type="text/javascript" src="//cdn.jsdelivr.net/gh/Mypipi/static@v3.0/scripts/main/site/detail.js"></script>
<#include "footer.ftl">