<#include "header.ftl">

    <div id="main">
        <div class="zg-wrap zu-main clearfix ">
            <ul class="letter-list">

                <#list conversations as conversation>
                    <li id="conversation-item-10001_622873">
                        <a class="letter-link"
                           href="/msg/detail?conversationId=${conversation.conversation.conversationId}">
                        </a>
                        <div class="letter-info">
                            <span class="l-time">${(conversation.conversation.createdDate?string("yyyy-MM-dd HH:mm:ss"))!}</span>
                            <div class="l-operate-bar">
                                <!--
                            <a href="javascript:void(0);" class="sns-action-del" data-id="10001_622873">
                            删除
                            </a>
                            -->
                                <a class="return-link" id="return-message" href="javascript:;" role="button">回复 </a>

                                <span class="feed-legend-pipe">|</span>
                                <a href="/msg/detail?conversationId=${conversation.conversation.conversationId}">
                                    共${conversation.conversation.id}条会话
                                </a>

                            </div>
                        </div>
                        <div class="chat-headbox">
                <span class="msg-num">
                    ${conversation.unread}
                </span>
                            <a class="list-head">
                                <img alt="头像" src="${conversation.user.headUrl}">
                            </a>
                        </div>
                        <div class="letter-detail">
                            <a title="${conversation.user.name}" class="letter-name level-color-1">
                                ${conversation.user.name}
                            </a>
                            <p class="letter-brief">
                                <a href="/msg/detail?conversationId=${conversation.conversation.conversationId}">
                                    ${conversation.lastMessage}
                                </a>
                            </p>
                        </div>
                    </li>
                </#list>
            </ul>

        </div>
    </div>
<#include "js.ftl">
<script type="text/javascript" src="//cdn.jsdelivr.net/gh/Mypipi/static@v3.0/scripts/main/site/detail.js"></script>
<#include "footer.ftl">