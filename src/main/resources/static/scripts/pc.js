define("/nc/1.03.04/plugin/pc/pc", ["./base/banner", "nc", "./base/config", "./base/env", "./base/localization", "./base/win", "./action/action", "./action/ajax", "cpn", "./base/bridge", "./bll/launch/index", "./bll/launch/action/tips", "./bll/launch/action/rightNav", "./bll/launch/action/inIframe", "./bll/launch/action/liveTips", "./bll/launch/action/navActiveEmail", "./bll/launch/action/navLogin", "./bll/launch/action/navSearch", "./bll/launch/action/docWrite", "./bll/launch/action/copy", "./bll/launch/action/copyright", "./bll/launch/action/checkLogin", "./bll/launch/action/checkMessage", "./bll/launch/action/contentShowHalf", "./bll/launch/action/action", "./bll/auth", "./component/popupSub/popupLogin", "./bll/loginUtil", "./component/popupSub/popupCompleteInfo", "./component/popupSub/popupCommon", "./component/popupSub/popupMsg", "./component/attachSub/attachEmoji", "./component/popupSub/popupReport", "./bll/launch/action/oAuth", "./bll/launch/action/hijack", "./bll/launch/action/profileCard", "./component/profileCard", "./bll/bll", "./bll/uploadRemote", "./bll/launch/action/fuckAdBlock", "./bll/atList", "./bll/captcha", "./bll/code", "./bll/selection", "./bll/util", "./component/cmt/index", "./component/cmt/item/item", "./component/cmt/item/sub", "./component/cmt/cpn/reply", "./component/cmt/item/bbs", "./component/popupSub/popupAuthPhone", "./component/popupSub/popupCaptcha", "./component/popupSub/popupCollect", "./component/tagInput", "./component/popupSub/popupCompleteAuth", "./component/popupSub/popupGtCode", "./component/popupSub/popupPhoneApply", "./component/popupSub/popupSchool", "./component/popupSub/popupAddSchool", "./component/popupSub/popupVote", "./component/select", "./component/vote"], function (p, o, n) {
    var t = p("./base/banner"), c = p("./base/config"), l = p("./base/env"), e = p("./base/localization"),
        u = p("./base/win"), a = p("./action/action"), b = p("./action/ajax"), i = p("./bll/launch/index"),
        m = p("./bll/atList"), h = p("./bll/auth"), S = p("./bll/bll"), s = p("./bll/captcha"), C = p("./bll/code"),
        d = p("./bll/loginUtil"), r = p("./bll/selection"), g = p("./bll/uploadRemote"), P = p("./bll/util"),
        A = p("./component/attachSub/attachEmoji"), f = p("./component/cmt/index"), v = p("./component/cmt/item/item"),
        L = p("./component/cmt/item/sub"), I = p("./component/cmt/item/bbs"),
        x = p("./component/popupSub/popupAuthPhone"), j = p("./component/popupSub/popupCaptcha"),
        y = p("./component/popupSub/popupCollect"), R = p("./component/popupSub/popupCommon"),
        k = p("./component/popupSub/popupCompleteAuth"), w = p("./component/popupSub/popupCompleteInfo"),
        E = p("./component/popupSub/popupGtCode"), U = p("./component/popupSub/popupLogin"),
        B = p("./component/popupSub/popupMsg"), M = p("./component/popupSub/popupPhoneApply"),
        V = p("./component/popupSub/popupSchool"), z = p("./component/popupSub/popupAddSchool"),
        G = p("./component/popupSub/popupVote"), T = p("./component/popupSub/popupReport"),
        W = p("./component/profileCard"), H = p("./component/select"), N = p("./component/tagInput"),
        q = p("./component/vote");
    window.tempc = n.exports = {
        Banner: t,
        Config: c,
        Env: l,
        Localization: e,
        Win: u,
        Action: a,
        Ajax: b,
        Launch: i,
        AtList: m,
        Auth: h,
        Bll: S,
        Captcha: s,
        Code: C,
        LoginUtil: d,
        Selection: r,
        UploadRemote: g,
        Util: P,
        AttachEmoji: A,
        Cmt: f,
        CmtItem: v,
        CmtItemSub: L,
        CmtItemBbs: I,
        PopupAuthPhone: x,
        PopupCaptcha: j,
        PopupCollect: y,
        PopupCommon: R,
        PopupCompleteAuth: k,
        PopupCompleteInfo: w,
        PopupGtCode: E,
        PopupLogin: U,
        PopupMsg: B,
        PopupPhoneApply: M,
        PopupSchool: V,
        PopupAddSchool: z,
        PopupVote: G,
        PopupReport: T,
        ProfileCard: W,
        Select: H,
        TagInput: N,
        Vote: q
    }
});
define("/nc/1.03.04/plugin/pc/action/action", ["./ajax", "nc", "cpn", "../base/env", "../base/bridge", "../base/localization"], function (e, t, a) {
    var o = e("./ajax"), s = e("../base/env").isInMainSite();
    a.exports = {
        domain: s ? "" : "www.nowcoder.com",
        domainDev: s ? "" : "d.nowcoder.com",
        urlPrefix: "/nccommon",
        url: {
            searchSuggest: "/suggest",
            queryUnreadCount: "/sns/message/count",
            checkLoginOtherPlace: "/token/login-other-place",
            getLoginPublicKey: "/environment/config",
            getOauthState: "/register/oauthState",
            login: "/login/do",
            logout: "/logout/do",
            register: "/register/new",
            getSMSSupportCountries: "/helper/sms/supported_countries",
            checkEmail: "/register/check-email-available",
            checkPhone: "/register/check-phone-available",
            checkNickName: "/register/check-nickname-available",
            validatePhone: "/register/validate-phone-v2",
            validateEmail: "/register/validate-email",
            activePhone: "/register/active-phone",
            activeOAuthPhone: "/register/active-phone-oauth",
            activeEmail: "/register/active-email",
            updateEmail: "/profile/update-email",
            completeness: "/completeness/connect",
            getBasicInfo: "/completeness/user-info",
            getUserNameCard: "/profile/#{uid}/card",
            saveHead: "/saveHead",
            unbindAccount: "/account/unbind",
            unbindAccountResult: "/account/previous",
            sendMessage: "/sns/message/send-msg",
            queryUsers: "/sns/message/query-users",
            queryRecentlyUsers: "/sns/message/recently-sent-users",
            atSuggest: "/at/suggest",
            follow: "/sns/follow",
            unfollow: "/sns/unfollow",
            like: "/sns/like",
            unlike: "/sns/del_like",
            blackUser: "/sns/black",
            unblackUser: "/sns/unblack",
            getFollowData: "/sns/followdata",
            codeBigDataRun: "/bigdata/submit",
            codeBigDataStatus: "/bigdata/status",
            codeSubmit: "/submit_cd",
            codeRun: "/submit",
            codeStatus: "/status",
            codeSelfTest: "/submit_cd_selftest_withoutdata",
            codeSelfTestStatus: "/status-self-test",
            codeDmRun: "/submit_dm_in_terminal",
            codeDmStatus: "/new_dmstatus",
            codeGetLastSubmission: "/practice/latestSubmission",
            codeGetLastAcceptSubmission: "/practice/latestAcceptSubmission",
            emojiGetMenu: "/emoji/menu",
            emojiGetData: "/emoji/data",
            voteCreate: "/vote/create",
            voteEdit: "/vote/edit",
            voteInfo: "/vote/info",
            vote: "/vote/do-vote",
            uploadImageOnline: "/upload-image-online",
            getGtData: "/captcha/geetest/#{type}",
            getCaptcha: "/captcha/#{type}",
            getAllSchool: "//static.nowcoder.com/nc/school.jsonp",
            getSchool: "/school/query",
            getSchoolBrief: "/school/brief",
            addSchool: "/school/add/customize",
            systemTime: "/common/system-time",
            addReport: "/report/add",
            isReported: "/report/isReported",
            cmtMarkSpam: "/admin/mark-comment-spam",
            cmtMarkUserAllSpam: "/admin/delete-all-ugc",
            cmtAdd: "/comment/create",
            cmtDel: "/comment/delete",
            cmtAccept: "/comment/accept",
            cmtGetPageNum: "/comment/pageNum",
            cmtGetAcceptedList: "/comment/accepted/list",
            cmtGetWonderfulList: "/comment/woderful/list",
            cmtAddWonderful: "/comment/wonderful",
            cmtDelWonderful: "/comment/unwonderful",
            cmtAddLitigant: "/comment/litigant",
            cmtDelLitigant: "/comment/un-litigant",
            cmtGetByPageV2: "/comment/list-by-page-v2",
            adNotInterest: "/ad/uninterest"
        }
    }, o.add(a.exports, a.exports.url)
});
define("/nc/1.03.04/plugin/pc/action/ajax", ["nc", "cpn", "../base/env", "../base/bridge", "../base/localization"], function (p, e, n) {
    var t = p("nc"), a = p("cpn"), i = p("../base/env"), o = p("../base/bridge"), c = p("../base/localization"),
        s = (t.Str, t.$), r = t.Cookie, l = t.Base, f = t.Ajax, d = (a.Popup, c.val());
    n.exports = {
        _ajaxIframeCache: {iframe: {}, cb: {}}, request: function y(u) {
            function i(e) {
                f.request({
                    $: e,
                    methodName: u.methodName,
                    sync: !!u.sync,
                    type: f.getRequestType(u),
                    url: u.url,
                    body: u.body,
                    query: l.extend({token: r.get("csrf_token"), lang: d}, u.query),
                    params: u.params,
                    timeout: u.timeout,
                    dataType: u.dataType,
                    json: u.json,
                    jsonpCallback: u.jsonpCallback,
                    cache: u.cache,
                    beforeSend: u.beforeSend,
                    complete: u.complete,
                    callCode: n,
                    call: u.call,
                    error: u.error,
                    always: u.always
                })
            }

            function n(e, n) {
                var t = +e.code;
                if (999 == t && !u.noDealAuth) return function o(e, n, t) {
                    p.async("../bll/auth", function (e) {
                        e.showLogin()
                    })
                }(), !1;
                if (1012 == t) return function c(e, n, t) {
                    p.async("../component/popupSub/popupAuthPhone", function (e) {
                        e.show({
                            ok: function () {
                                i(s)
                            }
                        })
                    })
                }(), !1;
                var a = u.captcha;
                return a && a.type && l.id(a.code || 1125) === l.id(t) ? (function r(o, n, t) {
                    var a = o.captcha;
                    p.async("../component/popupSub/popupGtCode", function (e) {
                        e.show({
                            type: a.type, call: function (e) {
                                var n = o.captchaHandler, t = "get" === f.getRequestType(o).toLowerCase(),
                                    a = t ? "query" : "body";
                                n && n(o, e), !n && (o[a] = l.extend({}, o[a], e)), i(s)
                            }, cancel: function () {
                                o.error && o.error(n, t)
                            }
                        })
                    })
                }(u, e, n), !1) : void 0
            }

            "jsonp" === u.dataType ? i(s) : o.create(u.url, i)
        }, add: function h(e, n, o, t) {
            var c = this, r = e.urlPrefix || "";
            n = n || e.url, o = o || e.domain, t = t || e.domainDev;
            var u = i.isInHttps(), a = i.isInDev();
            o = a && t ? t : o && a ? "d." + o : o, l.forEach(n, function (t, a) {
                l.isString(t) && (t = r + t, t = o && !/^(?:http|\/\/)/.test(t) ? (u ? "https://" : "http://") + o + t : t, e[a] = function (e) {
                    e = f.getConfParam(e, t, a), c.request(e)
                }, e[a + "Url"] = function (e) {
                    var n = f.getConfUrl(e, t, a);
                    return n
                })
            })
        }
    }
});
define("/nc/1.03.04/plugin/pc/base/banner", ["nc"], function (n, i, t) {
    var e = n("nc"), c = e.$, d = e.Limit, l = e.Base, a = e.Clazz, o = t.exports = a.create();
    l.extend(o.prototype, {
        initialize: function r(n) {
            var i = this;
            i.duration = +n.duration || 5e3, i.fadeDuration = +n.fadeDuration || 300, i.change = n.change;
            var t = c(n.ulEl);
            i.items = [].slice.call(t.children(), 0), i.index = 0, i.ulHeight = t.outerHeight(), i.initDot(n), i.initArrow(n), i.initHover(n), i.launch(), i.loadBannerImage(i.index, i.index + 1)
        }, initDot: function s(n) {
            var e = this, i = c(n.dotEl), t = e.items.length;
            i.html(t <= 1 ? "" : new Array(t + 1).join('<li class="dot"></li>')), e.dots = i.find("li.dot"), e.activeDot(e.index), i.on("click", "li.dot", function (n) {
                var i = c(n.currentTarget), t = i.index();
                e.loadBanner(t)
            })
        }, initArrow: function u(n) {
            var e = this, i = (c(n.wrapperEl), e.items.length), t = c(n.arrowPre), a = c(n.arrowNext);
            1 < i ? (t.on("click", l.bind(o, null, !1)), a.on("click", l.bind(o, null, !0))) : function r(n) {
                t[!1 === n ? "hide" : "show"](), a[!1 === n ? "hide" : "show"]()
            }(!1);

            function o(n, i) {
                var t = c(i.currentTarget);
                d.mark(t) || (e.loadBanner(e.index + (n ? 1 : -1)), window.setTimeout(function () {
                    d.clear(t)
                }, e.fadeDuration + 50))
            }
        }, initHover: function h(n) {
            var i = this, t = c(n.wrapperEl);
            t.on("mouseenter", function () {
                i.stop(), i.isHover = !0
            }), t.on("mouseleave", function () {
                i.isHover = !1, i.launch()
            })
        }, stop: function f() {
            window.clearTimeout(this._timer), this._timer = null
        }, activeDot: function v(n) {
            this.dots.removeClass("active"), c(this.dots[n]).addClass("active")
        }, launch: function m() {
            var n = this;
            n.stop(), 1 < n.items.length && !n.isHover && (n._timer = window.setTimeout(function () {
                n.loadBanner()
            }, n.duration))
        }, loadBanner: function g(n) {
            var i = this, t = i.items, e = t.length;
            if (0 === e || i._change || n === i.index) return;
            var a = n || (0 === n ? 0 : i.index + 1);
            e <= a && (a = 0), a < 0 && (a = e - 1), i.loadBannerImage(a, a + 1), i.stop(), i.activeDot(a);
            var o = c(t[i.index]), r = c(t[a]).hide();
            o.after(r), r.css("marginTop", -1 * i.ulHeight + "px"), o.fadeOut(i.fadeDuration - 50, function () {
                r.css("marginTop", 0), o.hide()
            }), r.fadeIn(i.fadeDuration, function () {
                r.css("marginTop", 0), i._change = !1, i.launch()
            }), i.index = a, i.change && i.change(a, e)
        }, loadBannerImage: function p(n, i) {
            var t = this.items, e = t.length, a = e <= n ? null : c(t[n]), o = e <= i ? null : c(t[i]);

            function r(n) {
                if (n) {
                    var i = n.find("a"), t = i.attr("data-src");
                    if (t) {
                        t.indexOf("nowcoder.com/") && (t = t.replace(/^https?\:/, ""));
                        var e = i.css("backgroundColor");
                        i.css("background", e + " url(" + t + ") top center no-repeat"), i.removeAttr("data-src")
                    }
                }
            }

            r(a), window.setTimeout(function () {
                r(o)
            }, 500)
        }
    })
});
define("/nc/1.03.04/plugin/pc/base/bridge", ["nc", "cpn", "./env"], function (e, n, t) {
    var o = e("nc"), i = e("cpn"), l = e("./env"), m = o.$, s = (o.Limit, o.Base), r = (o.Clazz, i.Popup);
    t.exports = {
        cacheCb: {}, cache: {}, create: function p(e, n) {
            var o = this, i = o.cache, r = o.cacheCb, t = l.isInHttps(), c = o.getDomain(window.location.href),
                a = o.getDomain(e);
            if (c === a || /api\.nowcoder\.com/.test(a) || /m\.(d\.)?nowcoder\.com/.test(a)) return n && n(m, window);
            document.domain = o.getDomain(e, !0);
            var d = (t ? "https://" : "http://") + a + "/crossDomain.html", u = d, f = i[u];
            if (f) return n && n(f.$, f);
            if (r[u] = r[u] || [], r[u].push(n), 1 < r[u].length) return;
            var h = m('<iframe src="' + d + '" frameborder="0" style="display:block;width:0;height:0;overflow:hidden;"></iframe>');
            h.on("load", function () {
                h.unbind("load");
                var n = o.getWin(h), t = (n || {}).$;
                t && (s.forEach(r[u], function (e) {
                    e && e(t, n)
                }), i[u] = n, r[u].length = 0)
            }), m(document.body).append(h)
        }, getDomain: function c(e, n) {
            var t = document.createElement("A");
            t.href = e;
            var o = t.href.split("/")[2];
            if (n) {
                var i = o.split(".").reverse();
                i.length = 2, o = i.reverse().join(".")
            }
            return o
        }, getWin: function a(e) {
            try {
                var n = (e = m(e).get(0)).contentDocument || e.contentWindow.document,
                    t = n.defaultView || n.parentWindow;
                return t
            } catch (o) {
                r.alert("数据保存模块加载出错，请刷新页面重试，避免数据丢失。如有疑问，请致电：010-60728802", function () {
                    window.location.reload()
                })
            }
        }
    }
});
define("/nc/1.03.04/plugin/pc/base/config", [], function (e, o, r) {
    r.exports = {
        captcha: {
            login: "login",
            register: "register",
            refAnswer: "ref_answer_query",
            runCode: "run_code",
            sysRightAnswer: "get_right_option",
            postComment: "post_comment",
            sendMessage: "send_message",
            offerChoose: "show_offer_choose",
            offerNormal: "show_offer_normal",
            sendVerifyCode: "send_verify_code"
        },
        type: {
            user: 1,
            comment: 2,
            problem: 3,
            topic: 4,
            feed: 5,
            paper: 6,
            recommendAnswer: 7,
            post: 8,
            live: 11,
            note: 14,
            clockRecord: 15,
            ctsTest: 19,
            schoolCalendar: 28,
            stack: 41,
            learningMaterial: 42,
            stackCompany: 50,
            campus: 1201,
            community: 1301,
            liveCourse: 1501,
            liveChapter: 1502,
            liveSection: 1503,
            liveLive: 1504,
            vodCourse: 1401,
            vodChapter: 1402,
            vodSection: 1403
        },
        uploadType: {none: 0, image: 1, doc: 2, data: 3, resume: 4, file: 5, screenShot: 7, learningMaterial: 11},
        FEInput: {1: "html", 2: "css", 3: "javascript"},
        FELib: {1: {text: "jquery (2.1.4)", value: "jquery"}, 2: {text: "underscore (1.8.2)", value: "underscore"}},
        eduNames: ["博士后", "博士", "硕士", "本科", "专科", "高中", "初中", "小学"],
        jobs: {
            "Java工程师": "639",
            "C++工程师": "640",
            "iOS工程师": "641",
            "安卓工程师": "642",
            "运维工程师": "643",
            "前端工程师": "644",
            "算法工程师": "645",
            "PHP工程师": "649",
            "测试工程师": "680",
            "安全工程师": "682",
            "C#工程师": "683",
            "数据库工程师": "684",
            "数据分析师": "894",
            "产品": "891",
            "运营": "892",
            "其它": "685"
        }
    }
});
define("/nc/1.03.04/plugin/pc/base/env", ["nc"], function (n, t, i) {
    var e = n("nc"), r = e.Base, a = e.Str;
    i.exports = {
        data: window.globalInfo || {}, getUser: function o() {
            return this.data
        }, getUid: function s() {
            return r.id(this.data.ownerId)
        }, isLogin: function d() {
            return !!r.id(this.data.ownerId)
        }, isActive: function c() {
            return "0" === r.id(this.data.status)
        }, isAdmin: function u() {
            return "3" === r.id(this.data.ownerType)
        }, isCompleteInfo: function f() {
            return !!this.data.isCompleteInfo
        }, isInDev: function w() {
            return 0 <= (((window.seajs || {}).data || {}).base || "").indexOf("javascripts")
        }, isInHttps: function I() {
            return a.isHttps(window.location.href)
        }, isInMainSite: function p() {
            return !!window.ncIsInNowcoderMainSite
        }, canInIframe: function h() {
            return "true" === this.data.canLoadInIframe
        }, getMainDomain: function m(n) {
            var t = this;
            if (t.isInMainSite()) return "";
            var i = t.isInDev() ? "d.nowcoder.com" : "www.nowcoder.com";
            return (n ? t.isInHttps() ? "https://" : "http://" : "") + i
        }
    }
});
define("/nc/1.03.04/plugin/pc/base/localization", ["nc"], function (n, a, i) {
    var e = n("nc"), t = (e.$, e.Base, e.Uri);
    i.exports = {
        val: function r(n) {
            if (0 === arguments.length) return t.getParam("lang");
            (n = this.fix(n)) && n !== this.val() && (window.location.href = t.addParam({lang: n}))
        }, fix: function c(n) {
            return n && {zh: "zh", en: "en"}[n] || ""
        }
    }
});
define("/nc/1.03.04/plugin/pc/base/win", ["nc"], function (n, i, o) {
    var c = n("nc").Base;
    o.exports = {
        _poll: {}, _index: 1, open: function r(n) {
            c.isString(n) && (n = {url: n});
            var i = "openWin_" + this._index++, o = n.url || "", e = n.width || 600, t = n.height || 380,
                l = window.open(o, i, ["width=", e, ",height=", t, ",left=", 400, "px,top=", 200, "px,toolbar=no,menubar=no,directories=no"].join(""));
            return this._poll[i] = l
        }, close: function t(n) {
            var i, o = this;
            if (n) {
                c.isString(n) ? i = o._poll[n] : n = (i = n).id;
                try {
                    i && i.close && i.close(), n && delete o._poll[n]
                } catch (e) {
                }
            } else c.forEach(o._poll, function (n) {
                o.close(n)
            })
        }
    }
});
define("/nc/1.03.04/plugin/pc/bll/atList", ["nc", "cpn", "../action/action", "../action/ajax", "../base/env", "../base/bridge", "../base/localization"], function (t, e, n) {
    var i = t("nc"), o = t("cpn"), s = i.$, r = i.Base, a = i.Clazz, c = i.Event, u = i.Dom, l = i.Str,
        p = o.AttachSuggest, f = t("../action/action"), d = n.exports = a.create();
    r.extend(d, c, {
        _pool: {}, input: function h(t) {
            return new d({input: t})
        }, showList: function g(t, n) {
            var i = this._pool[t] = this._pool[t] || {}, o = i.listMenu;
            if (!r.isObject(n)) return i.isListMenuShow = !1, o && o.attach && o.attach.fire("forceHide");
            i.bakInput || (i.bakInput = s('<input type="input" style="position:absolute;left:-999999px;top:-999999px;" />'), s(document.body).append(i.bakInput));
            o || ((o = i.listMenu = p.show({
                input: i.bakInput,
                focusIpt: n.ipt,
                needSame: !0,
                noHover: !0,
                noEnterLeave: !0,
                selectCls: "hover",
                reqList: function (t, e) {
                    t = s.trim(t), f.atSuggest({
                        body: {query: t}, call: function (t) {
                            e(t.data)
                        }, error: function (t) {
                            e([])
                        }
                    })
                },
                getItemStr: function (t) {
                    return l.execTpl(['<li class="js-item suggest-user" data-id="#{_sid}">', '<img class="list-head" src="#{head}">', '<span class="list-name" title="#{nickname}">#{nickname}</span>', "</li>"].join(""), {
                        _sid: t._sid,
                        head: t.head || "//static.nowcoder.com/images/head.png",
                        nickname: t.nickname
                    })
                },
                ok: function (t) {
                    n.ok && n.ok(t), o.attach.fire("forceHide")
                }
            })).listen("hideList", function (t) {
                t && i.isListMenuShow && (i.isListMenuShow = !1)
            }), o.attach.listen("attachHide", function () {
                i.isListMenuShow = !1
            }));
            i.bakInput.val(n.text);
            var e = o.attach, a = e.getEl();
            e.one("attachShow", function () {
                i.isListMenuShow = !0;
                var t = n.pos || {}, e = n.ext || {};
                o.getEl().addClass("letter-content"), a.css("left", (t.left || 0) + (e.left || 0)), a.css("top", (t.top || 0) + (e.top || 0)), o.getEl().outerWidth(220)
            }), e.fire("forceShow")
        }, getPool: function w(t) {
            return this._pool[t] = this._pool[t] || {}
        }
    }), r.extend(d.prototype, c, {
        initialize: function m(t) {
            var e = this;
            e.ipt = t.input, e.id = r.ascId(), e.lineHeight = 0, e.initIpt()
        }, initIpt: function v() {
            var n, t = this, e = t.ipt, i = d.getPool(t.id);

            function o() {
                window.clearTimeout(n), n = window.setTimeout(function () {
                    t.analyze()
                }, 50)
            }

            e.on("click", o), e.on("focus", o), e.on("propertychange", o), e.on("blur", function a() {
                window.clearTimeout(n), n = window.setTimeout(function () {
                    d.showList(t.id)
                }, 150)
            }), e.on("keydown", function s(t) {
                window.clearTimeout(n);
                var e = +t.keyCode;
                if (!{38: 1, 40: 1, 13: 1}[e]) return o();
                13 == e && i.isListMenuShow && t.preventDefault()
            })
        }, analyze: function b() {
            var i = this, o = i.ipt, t = i.getAtInfo();
            if (!t) return d.showList(i.id);
            var e = u.getCursorPos({
                el: o, index: t.range.start, beforeRemove: i.lineHeight ? null : function (t, e) {
                    i.lineHeight = s(e).outerHeight()
                }
            }), n = u.getPosLeft(o), a = u.getPosTop(o);
            d.showList(i.id, {
                ipt: o,
                text: t.text,
                pos: e,
                ext: {top: i.lineHeight + a - o.scrollTop() + 2, left: n},
                ok: function (t) {
                    var e = i.getAtInfo().range, n = "@" + t.nickname + " ";
                    o.range(e.start, e.end), o.range(n), o.caret(e.start + n.length)
                }
            })
        }, getAtInfo: function k() {
            var t, e = this.ipt.val(), n = this.ipt.range(), i = n.start - 1, o = -1;
            for (; 0 <= i && ("@" === (t = e[i]) && (o = i), "@" !== t && !/\s/.test(t));) i--;
            if (-1 === o) return null;
            if (0 < o && /[1-9a-z]/gi.test(e[o - 1])) return null;
            return {
                index: o,
                text: e.substring(o + 1, n.start),
                full: e.substring(o, n.start),
                range: {start: o, end: n.end}
            }
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/auth", ["nc", "cpn", "../base/env", "../action/action", "../action/ajax", "../base/bridge", "../base/localization", "../component/popupSub/popupLogin", "../base/config", "./loginUtil", "../component/popupSub/popupCompleteInfo", "../component/popupSub/popupCommon"], function (n, o, c) {
    var i = n("nc"), t = n("cpn"), e = i.$, p = i.Base, l = t.Popup, a = n("../base/env"),
        u = (n("../action/action"), n("../component/popupSub/popupLogin")),
        s = n("../component/popupSub/popupCompleteInfo");
    c.exports = {
        showLogin: function r(n) {
            var o = this, c = (n = n || {}).href;
            return u.show({
                href: c, loginCb: function () {
                    if (!c || window.location.href === c) return window.location.reload();
                    window.location.href = c
                }, registerCb: function () {
                    o.showCompleteInfo({
                        close: function () {
                            window.location.reload()
                        }
                    })
                }
            })
        }, showActive: function f() {
            var n = a.getUser();
            return n && n.ownerId && new l({
                title: "帐号激活提醒",
                hasNoFooter: !0,
                content: ['<div class="pop-account-content">', '<p class="pop-tip">亲爱的用户</p>', '<p class="pop-tip">你的帐号还没激活，为保障安全暂时无法进行此操作。</p>', '<div class="submit-btnbox">', '<a class="btn btn-primary confirm-btn" href="' + a.getMainDomain(!0) + "/profile/" + n.ownerId + '/account">去设置</a>', "</div>", "</div>"].join("")
            })
        }, showCompleteInfo: function h(n) {
            n = n || {};
            return s.show({
                callCb: n.call || function () {
                    window.location.reload()
                }, closeCb: n.close
            })
        }, click: function b(i) {
            var t = this, n = e(i.el);

            function o(n) {
                var o = e(n.currentTarget);
                i.click && i.click(n, o), function c(n, o) {
                    !i.needLogin && o && o(), i.needLogin && t.checkLogin(n, o)
                }(o, function () {
                    !function c(n, o) {
                        !i.needActive && o && o(), i.needActive && t.checkActive(n, o)
                    }(o, function () {
                        i.call && i.call(n, o)
                    })
                })
            }

            n = n.get(0) ? n : e(document), i.cls ? n.on("click", i.cls, o) : n.on("click", o)
        }, checkLogin: function d(n, o) {
            p.isFunction(n) && (o = n, n = null);
            if (a.isLogin()) return o && o(n);
            (n = n ? e(n) : null) && !n.hasClass("nc-req-auth") && this.showLogin()
        }, checkActive: function w(n, o) {
            var c = this;
            p.isFunction(n) && (o = n, n = null);
            c.checkLogin(n, function () {
                if (a.isActive()) return o && o(n);
                (n = n ? e(n) : null) && !n.hasClass("nc-req-active") && c.showActive()
            })
        }
    }
});
define("/nc/1.03.04/plugin/pc/bll/bll", ["nc", "cpn", "../base/config", "../action/action", "../action/ajax", "../base/env", "../base/bridge", "../base/localization", "./uploadRemote"], function (l, a, c) {
    var o = l("nc"), p = l("cpn"), n = o.$, t = o.Base, e = (o.Uri, p.Popup), i = p.AttachUpload, u = p.PopupFormula,
        r = l("../base/config"), s = l("../action/action");
    l("./uploadRemote");
    c.exports = {
        black: function f(a) {
            var c = a.id, o = a.name, l = !1 !== a.black, p = a.call, n = c && o;

            function t() {
                s[l ? "blackUser" : "unblackUser"]({
                    body: {blackUserId: c}, call: p, error: function (a) {
                        e.alert(a.msg)
                    }
                })
            }

            n && l && new e({
                title: "确定要拉黑" + o + "？",
                content: ['<div class="pop-account-content">', '<p class="pop-tip">拉黑后，对方将不能</p>', '<p class="pop-tip">—关注你（如果已关注将自动取消）</p>', '<p class="pop-tip">—私信你</p>', '<p class="pop-tip">—在你的帖子、回答或评论留言</p>', '<p class="pop-tip">—@你，和你互动</p>', '<p class="pop-tip">确定把' + o + "加入黑名单？</p>", "</div>"].join(""),
                ok: t,
                cancel: function () {
                }
            }), n && !l && e.confirm("是否把" + o + "移除你的黑名单？", t)
        }, avatar: function b(o) {
            var a = n(o.el);
            t.forEach(a, function (a) {
                var c = i.show({
                    target: a,
                    url: "/uploadImage?type=1" + r.uploadType.image,
                    fileType: "*.jpg;*.JPG;*.png;*.PNG;*.gif;*.GIF;*.bmp;*.BMP;*.jpeg;*.JPEG",
                    call: function (c) {
                        c.url && l.async("../component/popupSub/popupAvatar", function (a) {
                            a.show({
                                src: c.url, call: function (a) {
                                    var c = a.url;
                                    c && o.call && o.call(c)
                                }, error: o.error
                            })
                        })
                    }
                });
                o.attach && o.attach(c, n(a))
            })
        }, formula: function v(l) {
            u.show({
                useLaTex: !!l.useLaTex, value: l.value, valueLaTex: l.valueLaTex, uploadBatch: function (l, a, c) {
                    var p = {};
                    t.forEach(a, function (a, c) {
                        var o = l[c];
                        p[o] = a
                    }), c && c(p)
                }, callLaTex: function (a) {
                    n.trim(a) && l.callLaTex && l.callLaTex(a)
                }, upload: function (a, c, o) {
                    l.call && l.call(c), o && o()
                }
            })
        }
    }
});
define("/nc/1.03.04/plugin/pc/bll/captcha", ["nc", "../action/action", "../action/ajax", "cpn", "../base/env", "../base/bridge", "../base/localization"], function (t, e, n) {
    var a = t("nc"), c = a.$, i = a.Base, o = a.Clazz, r = a.Event, l = a.Time, u = t("../action/action"),
        d = n.exports = o.create();
    i.extend(d.prototype, r, {
        initialize: function s(e) {
            var n = this;
            n.netease = !!window.useNeteaseCaptcha, n.errorCount = 0, n.cbName = "ncGt" + (new Date).getTime() + i.ascId(), n.initEvent(), n.getData({
                type: e.type,
                call: function (t) {
                    n[n.netease ? "initNetease" : "initGt"](e, t)
                }
            })
        }, initEvent: function f() {
            var e = this;
            e.gt = null, e.listen("getGtCode", function (t) {
                e.gt = t
            })
        }, initGt: function g(n, a) {
            var i = this, c = i.cbName;
            window[c] = null, t.async("//api.geetest.com/getfrontlib.php?callback=" + c + "&gt=" + a.captchaId), window[c] = function () {
                window[c] = null;
                var t = new window.Geetest({
                    gt: a.captchaId,
                    challenge: a.challenge,
                    product: n.product || "float",
                    offline: !a.success
                }), e = i.getElId(n, c);
                e && t.appendTo("#" + e), i.fire("getGtCode", t)
            }
        }, initNetease: function p(n, a) {
            var i = this, c = i.cbName;
            t.async("//cstaticdun.126.net/load.min.js", function () {
                l.waitUtil({
                    times: 250, condition: function () {
                        return !!window.initNECaptcha
                    }, call: function () {
                        var t = i.getElId(n, c), e = n.product || "float";
                        t && window.initNECaptcha({
                            captchaId: a.captchaId,
                            element: "#" + t,
                            mode: e,
                            width: 260,
                            onVerify: function (t, e) {
                                !t && e && (i.neteaseValidateResult = e.validate)
                            }
                        }, function (t) {
                            i.fire("getGtCode", t)
                        }, function (t) {
                            i.fire("getGtCodeError", t)
                        })
                    }
                })
            })
        }, check: function h() {
            var t = this, e = t.gt;
            if (t.netease) {
                var n = t.neteaseValidateResult || (e && e.getValidate ? e.getValidate() : null);
                return n ? {netease_validate: n} : null
            }
            return e ? e.getValidate() : null
        }, refresh: function w() {
            var t = this;
            try {
                t.gt && t.gt.refresh && t.gt.refresh()
            } catch (e) {
            }
        }, getData: function v(e) {
            var n = this, t = !!n.netease;
            u.getGtData({
                query: {t: (new Date).getTime(), source: t ? "netease" : "gt"},
                params: {type: e.type},
                call: function (t) {
                    n.errorCount = 0, e.call && e.call(t.data)
                },
                error: function () {
                    if (n.errorCount++, n.errorCount < 5) return window.setTimeout(i.bind(n.getData, n, e.call), 250);
                    n.errorCount = 0
                }
            })
        }, getElId: function m(t, e) {
            var n = c(t.el), a = n.get(0);
            if (a && (!document.contains || document.contains(a))) {
                var i = n.attr("id");
                return !i && n.attr("id", e), n.attr("id")
            }
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/code", ["nc", "cpn", "../base/env", "../action/action", "../action/ajax", "../base/bridge", "../base/localization"], function (n, e, t) {
    var i = n("nc"), a = n("cpn"), m = i.$, C = i.Limit, v = i.Base, b = i.CodeLang, E = i.Time, S = a.Popup,
        T = n("../base/env"), x = n("../action/action");
    t.exports = {
        onlineJudgeHelp: function o(e) {
            var t = this;
            m(e.el).on("click", function (e) {
                e.preventDefault(), t.showOnlineJudgeHelp()
            })
        }, showOnlineJudgeHelp: function r() {
            var t = '<div style="font-size:14px;line-height:26px;">';
            v.forEach([{
                title: "为什么代码在我本机可以通过，提交到牛客网总是提示答案错误",
                content: '牛客网的每个编程题都有10-50组测试数据，你的代码在本机可以通过仅仅是通过了样例数据，可能存在边界条件考虑不周导致更多的测试数据没有通过，所以会返回答案错误。还有一种可能是你的代码没有处理多个测试用例，例如A+B的代码需要while循环处理<br/><pre class="prettyprint">#include &lt;stdio.h&gt;<br/>int main() {<br/>    int a,b;<br/>    while(scanf("%d %d",&a, &b) != EOF)<br/>        printf("%d",a+b);<br/>    return 0;<br/>}</pre>'
            }, {
                title: "为什么Java代码在我本机运行正常，提交到牛客网报编译错误",
                content: "因为Java文件名和类名需要保持一致。<br />1、如果编程题已经提供了类和要编写代码的方法，请不要擅自给方法加上static，也不要擅自修改类的名字。也不要给代码增加任何package信息。<br/>2、对于没有提供任何辅助代码的编程题，请确认类的名字是Main"
            }, {
                title: "为什么我的代码在本机运行正常，提交到牛客网总是报运行超时",
                content: "牛客网对每个编程题的运行时间都有限制，一般是限制在1秒，牛客网后台判题的机器显然不如的你的台式机强劲，所以碰到超时请尽量优化你的代码效率。当然也有可能是你代码对某个测试用例死循环了"
            }, {
                title: "为什么代码会提示答案正确（提交异常）",
                content: "这种情况代码本题你的结果是已AC，但是有点小问题：<br />1、牛客网对提交的代码会做相似度的判断，如果发现你的代码通过的测试用例同时和已有代码相似度过高则会给出答案正确（提交异常）的提示<br />2、根据题目的难易程度会对通过代码的提交频率进行控制，如果你提交通过代码的间隔太小，我们也认为有作弊可能，也会提示提交异常"
            }, {title: "运行错误是什么情况", content: "运行错误一般都是数组越界非法访问，野指针乱访问，空指针乱访问等情况造成代码奔溃"}], function (e) {
                t += '<div style="margin-bottom:20px"><div style="font-weight:bold;">Q：' + e.title + "</div><div>A：" + e.content + "</div></div>"
            }), new S({
                title: "代码提交常见问题",
                width: 960,
                content: t += "</div>",
                okTxt: "问题解决",
                cancelTxt: "还有问题",
                listeners: {
                    render: function () {
                        var e = this.cancelBtn;
                        e.attr("href", "https://www.nowcoder.com/discuss/276"), e.attr("target", "_blank"), n.async("ncPlugin/highlighter/highlighter", function (e) {
                            e.init()
                        })
                    }
                }
            })
        }, initCodeEditor: function w(e, i) {
            var t = E.frequency(1e3), a = !1, n = {};
            v.forEach(["questionId", "pid", "tid", "qid", "tagId", "subTagId"], function (e) {
                e in i && (n[e] = i[e])
            });
            var o, r, c = e.getLastLangue() || v.id(b.langCpp);
            i.submitCode && (i.submitCode.code || i.submitCode.language) && (o = !0, r = i.submitCode.code, c = v.id(i.submitCode.language || c));
            var l = v.id(i.codeJudgeType), u = i.langTpl || b.getTpl(), s = b.checkTpl(l, u),
                d = v.map(s, function (e) {
                    var t = v.id(e.id), n = c === t;
                    return {value: t, checked: n, code: o && n ? r : "", tplCode: m.trim(e.tpl.val() || "")}
                }), g = new e({
                    renderTo: m(i.codeEl),
                    noAutoSize: !!i.noAutoSize,
                    noCacheCode: !!i.noCacheCode,
                    codeHint: i.codeHint || "keyword",
                    tipEl: m(i.runInfoEl),
                    runCode: n,
                    options: d,
                    height: i.autoFixHeight ? null : 320,
                    maxStatusDelay: i.maxStatusDelay,
                    runExtParam: i.runExtParam,
                    statusExtParam: i.statusExtParam,
                    captchaUrl: i.captchaUrl,
                    getUrlSubmitCode: i.getUrlSubmitCode,
                    getUrlGetCodeStatus: i.getUrlGetCodeStatus,
                    noSelfTest: "0" !== l || !!i.noSelfTest,
                    selfTestType: i.selfTestType || 9,
                    selfTestRunExtParam: i.selfTestRunExtParam,
                    selfTestSystemCase: i.selfTestSystemCase,
                    selfTestWarning: i.selfTestWarning,
                    listeners: {
                        render: function () {
                            if (i.autoFixHeight) {
                                var e = Math.max((window.screen.availHeight || 900) - 320, 180);
                                this.resize(null, e)
                            }
                        }, runCodeFinish: function (e) {
                            a = !1
                        }, runCodeSuccess: function (e) {
                            a = !1
                        }, runCodeDanger: function (e) {
                            a = !1
                        }, runCodeError: function (e) {
                            a = !1
                        }, langueChange: function () {
                        }
                    }
                }), f = m(i.runCodeEl);
            if (0 < f.length) {
                f.on("click", function () {
                    t(function () {
                        a = !0, g.runCode()
                    })
                });
                var h = f.html();
                g.listen("enterSelfTest", function () {
                    f.html("自测调试")
                }), g.listen("exitSelfTest", function () {
                    f.html(h)
                })
            }
            var p = [{el: m(i.loadCodeEl), name: "codeGetLastSubmission"}, {
                el: m(i.loadAcceptCodeEl),
                name: "codeGetLastAcceptSubmission"
            }];
            return v.forEach(p, function (e) {
                var t = e.el, n = e.name;
                t.addClass("nc-req-auth"), t.on("click", function () {
                    if (T.isLogin()) return a ? S.alert("代码提交运行中，请稍后重试") : void(C.mark(t) || x[n]({
                        query: {questionId: i.questionId},
                        call: function (e) {
                            var t = e.data;
                            t && t.language && g.val(t.language, t.content)
                        },
                        error: function (e) {
                            S.alert(e.msg)
                        },
                        always: function () {
                            C.clear(t)
                        }
                    }))
                })
            }), g
        }, initFECodeEditor: function l(e, n) {
            var t = {};
            v.forEach(["questionId", "pid", "tid", "qid"], function (e) {
                e in n && (t[e] = n[e])
            });
            var a = !1, i = n.langTpl || b.getTplFE(), o = new e({
                renderTo: m(n.codeEl),
                noAutoSize: !!n.noAutoSize,
                openPreview: !0,
                tipEl: m(n.runInfoEl),
                runCode: t,
                supportLang: n.supportLang,
                statusExtParam: n.statusExtParam,
                captchaUrl: n.captchaUrl,
                getUrlSubmitCode: n.getUrlSubmitCode,
                getUrlGetCodeStatus: n.getUrlGetCodeStatus,
                languages: v.map(i, function (e) {
                    return {text: e.id, code: m.trim(m(e.tpl).val()), checked: "javascript" === e.id}
                }),
                listeners: {
                    render: function () {
                        if (n.autoFixHeight) {
                            var e = Math.max((window.screen.availHeight || 900) - 320, 180);
                            this.resize("100%", e), this.height = e
                        }
                    }, runCodeFinish: function (e) {
                        a = !1
                    }, runCodeSuccess: function (e) {
                        a = !1
                    }, runCodeDanger: function (e) {
                        a = !1
                    }, runCodeError: function (e) {
                        a = !1
                    }, langueChange: function () {
                    }
                }
            }), r = m(n.runCodeEl);
            r.length && r.on("click", function () {
                a = !0, o.runCode()
            });
            var c = [{el: m(n.loadCodeEl), name: "codeGetLastSubmission"}, {
                el: m(n.loadAcceptCodeEl),
                name: "codeGetLastAcceptSubmission"
            }];
            return v.forEach(c, function (e) {
                var t = e.el, i = e.name;
                t.addClass("nc-req-auth"), t.on("click", function () {
                    if (T.isLogin()) return a ? S.alert("代码提交运行中，请稍后重试") : void(C.mark(t) || x[i]({
                        query: {questionId: n.questionId},
                        call: function (e) {
                            var t = e.data, n = v.json(t.content, {});
                            "codeGetLastSubmission" === i ? o.resetCode(n) : "codeGetLastAcceptSubmission" === i && t.language && (o.langueSelect && o.langueSelect.val(t.language + ""), o.resetCode(n))
                        },
                        error: function (e) {
                            S.alert(e.msg)
                        },
                        always: function () {
                            C.clear(t)
                        }
                    }))
                })
            }), o
        }
    }
});
define("/nc/1.03.04/plugin/pc/bll/loginUtil", ["nc", "cpn", "../action/action", "../action/ajax", "../base/env", "../base/bridge", "../base/localization", "../base/config"], function (s, e, t) {
    var n = s("nc"), r = s("cpn"), u = n.$, p = n.Base, f = n.Str, h = n.Time, d = r.Popup, a = r.Select,
        v = s("../action/action"), m = s("../base/config");
    t.exports = {
        initPhoneZip: function l(n) {
            u(n.renderTo).html("加载中...");
            var r = !!n.showNow, i = null, s = new a({
                renderTo: n.renderTo,
                renderBy: n.renderBy || "replaceWith",
                options: [{text: "中国+86", value: "+86", checked: !0}]
            });
            s.getEl().css("margin-bottom", 0);
            var o = s.attachSel;
            return o.noneEl.html("加载中...").show(), o.attach.listen("attachShow", c), r && c(), s;

            function c() {
                !function e(n) {
                    if (i) return n && n(null, i);
                    v.getSMSSupportCountries({
                        type: "GET", call: function (e) {
                            var t = p.map(e.data, function (e) {
                                return {text: e.name + e.code, value: e.code, checked: "+86" === e.code}
                            });
                            i = t, n && n(null, t)
                        }, error: function (e) {
                            n && n(e)
                        }
                    })
                }(function (e, t) {
                    if (e) return o.attach.forceHide(), void d.alert(e.msg);
                    o.attach.unlisten("attachShow", c), s.rawConfig.needSearch = !0, s.replaceOptions(t), !r && s.attachSel.attach.forceShow(), n.zipOptionChange && n.zipOptionChange(), s.fire("zipOptionChange")
                })
            }
        }, initEduSchool: function o(e) {
            var r = e.edu, i = e.school;
            r.listen("change", function () {
                i.val("")
            }), i.listen("focus", function () {
                var e = r.val();
                if (!e) return i.blur(), d.alert("请先选择学历");
                var t = e && {"博士后": 1, "博士": 1, "硕士": 1, "本科": 1, "专科": 1}[e], n = e && {"高中": 1, "初中": 1}[e];
                (t || n) && (i.blur(), s.async("../component/popupSub/popupSchool", function (e) {
                    e.show({
                        noUnique: !0, isMiddle: n, call: function (e, t) {
                            t && i.val(t)
                        }
                    })
                }))
            })
        }, initCaptcha: function E(t) {
            var r = u(t.btn), e = t.cpn, n = !!t.isPhone, i = t.check, s = t.val, o = !1, c = 0;
            return r.on("click", function (e) {
                e.preventDefault(), a()
            }), e && e.listen("destroy", l), e && e.listen("STOP_CAPTCHA_COUNTING", l), {send: a};

            function a() {
                p.isFunction(t.isPhone) && (n = t.isPhone()), function e() {
                    o || (o = !0, i(function (e) {
                        if (e) {
                            var t = s();
                            v[n ? "validatePhone" : "validateEmail"]({
                                body: n ? {phone: u.trim(t)} : {email: u.trim(t)},
                                captcha: {type: m.captcha.sendVerifyCode},
                                call: function (e) {
                                    o = !1, function n(t) {
                                        o || (o = !0, r.addClass("btn-default").removeClass("btn-primary"), h.countDown({
                                            second: 60,
                                            call: function (e) {
                                                return c === t && r.html(e + "秒后重新获取"), c !== t
                                            },
                                            end: function () {
                                                c === t && (o = !1, r.html("重新获取验证码"), r.addClass("btn-primary").removeClass("btn-default"))
                                            }
                                        }))
                                    }(++c)
                                },
                                error: function (e) {
                                    o = !1, d.alert(e.msg)
                                }
                            })
                        } else o = !1
                    }))
                }()
            }

            function l() {
                c++, o = !1
            }
        }, checkEmail: function c(e) {
            var t = e.needRegister, n = e.email, r = e.call, i = this.emailMap = this.emailMap || {},
                s = u.trim(n.val()), o = i[s];
            if (!f.isEmail(s)) return n.setErrorTips("请输入正确的邮箱"), r && r(!1);
            if (!0 === o) return t ? n.setSuccess() : n.setErrorTips("该邮箱已经被注册"), r && r(!!t);
            if (!1 === o) return t ? n.setErrorTips("该邮箱尚未注册") : n.setSuccess(), r && r(!t);
            v.checkEmail({
                query: {email: s}, call: function () {
                    i[s] = !1, s === u.trim(n.val()) && (t ? n.setErrorTips("该邮箱尚未注册") : n.setSuccess()), r && r(!t)
                }, error: function () {
                    i[s] = !0, s === u.trim(n.val()) && (t ? n.setSuccess() : n.setErrorTips("该邮箱已经被注册")), r && r(!!t)
                }
            })
        }, checkPhone: function S(e) {
            var t = e.needRegister, n = e.zip, r = e.phone, i = e.call, s = this.phoneMap = this.phoneMap || {},
                o = u.trim(n.val()), c = u.trim(r.val()), a = o + c, l = s[a];
            if ("+86" === o ? !f.isPhone(c) : !/^\d{3,}$/.test(c)) return r.setErrorTips("请输入正确的手机号码"), i && i(!1, {isError: !0});
            if (!0 === l) return t ? r.setSuccess() : r.setErrorTips("该手机号码已经被注册"), i && i(!!t, {isRegister: !0});
            if (!1 === l) return t ? r.setErrorTips("该手机号码尚未注册") : r.setSuccess(), i && i(!t, {isRegister: !1});
            v.checkPhone({
                query: {phone: a}, call: function () {
                    s[a] = !1, c === u.trim(r.val()) && (t ? r.setErrorTips("该手机号码尚未注册") : r.setSuccess()), i && i(!t, {isRegister: !1})
                }, error: function () {
                    s[a] = !0, c === u.trim(r.val()) && (t ? r.setSuccess() : r.setErrorTips("该手机号码已经被注册")), i && i(!!t, {isRegister: !0})
                }
            })
        }, checkPwd: function T(e) {
            var t = e.ipt1, n = e.ipt2, r = e.iptOld, i = e.isSubmit, s = u.trim(t.val()), o = u.trim(n.val()),
                c = u.trim(r ? r.val() : "");
            if (t.setNone(), n.setNone(), r && r.setNone(), !s || !o) return i & !s && t.setErrorTips("密码不能为空"), i && !o && n.setErrorTips("密码不能为空"), !1;
            if (s !== o) return t.setErrorTips("密码不一致"), n.setErrorTips("密码不一致"), !1;
            if (s.length < 6) return t.setErrorTips("密码不能少于6位"), !1;
            return r ? c ? c !== s ? (t.setSuccess(), n.setSuccess(), r.setSuccess(), !0) : (t.setErrorTips("新旧密码不能相同"), r.setErrorTips("新旧密码不能相同"), !1) : (i && r.setErrorTips("密码不能为空"), !1) : (t.setSuccess(), n.setSuccess(), !0)
        }, popupBindError: function i(e) {
            var t = e.isEmail ? "邮箱" : "手机", n = new d({
                noUnique: !!e.noUnique,
                hasNoTitle: !0,
                hasNoMove: !0,
                okTxt: "不，我想保留数据",
                cancelTxt: "清空此号数据",
                content: '<div class="confirm-content"><div class="poptip-word"><span class="warning-ico"></span><span class="warning-word">该' + t + "已注册，验证通过后将绑定新账号，现在的账号数据将清空，也无法再登录。确定清空当前账号数据吗？</span></div></div>",
                width: 520,
                hasNoMask: !1,
                cancel: e.remove,
                ok: e.retain
            });
            return n.getEl().find(".pop-footer .btn").addClass("btn-auto"), n
        }
    }
});
define("/nc/1.03.04/plugin/pc/bll/selection", ["nc", "cpn"], function (n, e, t) {
    var o = n("nc"), m = (n("cpn"), o.$), i = o.Base, c = o.Clazz, r = (o.Time, o.Str, t.exports = c.create());
    i.extend(r, {isSupport: !!window.getSelection}), i.extend(r.prototype, {
        initialize: function l(n) {
            var e = this;
            e.rawConfig = n, e.currentSelection = "", e.el = m(n.el), r.isSupport && e.initSelect()
        }, initSelect: function f() {
            var r = this, l = r.rawConfig, u = r.el, a = !1, s = !1;

            function g() {
                s = !0, u.unbind("mousemove", g)
            }

            function d() {
                u.unbind("mousemove", g), u.unbind("mouseup", d);
                var n = a && s;
                if (s = a = !1, n) {
                    var e = window.getSelection(), t = m.trim(e.toString()), o = r.getSelectionEndPosition();
                    if (2 < t.length && o) {
                        r.currentSelection = t;
                        var i = o.x + window.scrollX, c = o.y + window.scrollY;
                        l.call && l.call({val: t, x: i, y: c})
                    }
                }
            }

            u.on("mousedown", function () {
                s = !(a = !0), u.unbind("mousemove", g), u.unbind("mouseup", d), u.on("mousemove", g), u.on("mouseup", d)
            }), m(document).on("mousedown", function (n) {
                var e = m(n.target);
                (!l.canCancel || l.canCancel(e)) && l.cancel && l.cancel()
            })
        }, val: function u() {
            return this.currentSelection
        }, getSelectionEndPosition: function a() {
            var n = this.getSelectionRange();
            if (n && !this.isSelectionInForm()) {
                var e = n.endContainer, t = document.createRange();
                t.setStart(e, 0), t.setEnd(e, n.endOffset);
                var o = t.getClientRects(), i = o.length;
                if (0 < i) {
                    var c = o[i - 1], r = 1 < i ? o[i - 2] : null, l = c.left === c.right && r ? r : c;
                    return {x: l.right, y: l.bottom}
                }
            }
        }, getSelectionRange: function s() {
            var n = window.getSelection();
            return n.rangeCount ? n.getRangeAt(0).cloneRange() : null
        }, isSelectionInForm: function g() {
            var n = document.activeElement, e = n ? (n.tagName || "").toLowerCase() : "";
            return !(!e || !{input: 1, textarea: 1, select: 1, button: 1}[e])
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/uploadRemote", ["nc", "../action/action", "../action/ajax", "cpn", "../base/env", "../base/bridge", "../base/localization"], function (e, t, n) {
    var a = e("nc"), i = a.$, r = a.Base, o = a.Db.create("RemoteImage"), c = e("../action/action");
    n.exports = {
        a: document.createElement("A"), upload: function u(n, a) {
            var r = this;
            r.a;
            if (!(n = i.trim(n)) || r.isLocal(n)) return a && a(n);
            var o = r.getMap();
            if (o[n]) return a && a(o[n]);
            r.actionUpload({
                source: n, type: 0, call: function (e) {
                    var t = i.trim(e.url);
                    o[n] = t || n, r.saveMap(), a && a(t || n)
                }, error: function () {
                    o[n] = n, r.saveMap(), a && a(n)
                }
            })
        }, canUpload: function l(e) {
            var t = this, n = r.isArray(e) ? e : [e];
            return 0 < n.length && !!r.find(n, function (e) {
                return (e = i.trim(e)) && !t.isLocal(e)
            })
        }, isUploaded: function s(e) {
            var t = this, n = t.getMap(), a = r.isArray(e) ? e : [e];
            return 0 === a.length || r.every(a, function (e) {
                return !(e = i.trim(e)) || t.isLocal(e) || n[e]
            })
        }, isLocal: function p(e) {
            var t = this.a;
            if (!(e = i.trim(e))) return !1;
            t.href = e;
            var n = t.hostname;
            return !!r.find(["nowcoder.com", "nowcoder.net", "aliyuncs.com"], function (e) {
                return 0 <= n.indexOf(e)
            })
        }, actionUpload: function f(e) {
            c.uploadImageOnline({body: {source: e.source, type: e.type || 0}, call: e.call, error: e.error})
        }, getMap: function d() {
            return this._remoteMap = this._remoteMap || o.get("data") || {}
        }, saveMap: function m() {
            o.set("data", this._remoteMap)
        }
    }
});
define("/nc/1.03.04/plugin/pc/bll/util", ["nc", "../base/env"], function (r, t, e) {
    var i = r("nc"), d = i.Base, s = i.$, n = i.Time, u = i.Dom, o = i.Uri;
    r("../base/env");
    e.exports = {
        getEditor: function a(t, e) {
            var n = {
                codeEditor: "/codeEditor/index",
                codeDataEditor: "/codeDataEditor",
                codeFEEditor: "/codeFEEditor",
                codeHadoopEditor: "/codeHadoopEditor",
                mdEditor: "/mdEditor/index",
                hEditor: "/hEditor/index"
            };
            if (!t || d.isString(t)) {
                var i = t ? n[t] : "";
                return void(i && r.async("../component/editorSub" + i, function (t) {
                    e && e(t)
                }))
            }
            var o = {};
            d.forEachAsync(t, function (e, i) {
                var t = e ? n[e] : "";
                !t && i && i(), t && r.async("../component/editorSub" + t, function (t) {
                    o[e] = t, i && i()
                })
            }, function () {
                e && e(o)
            })
        }, loadEcharts: function c(t, e) {
            r.async(e || "//static.nowcoder.com/lib/echarts.3.7.2.min.js", function () {
                n.waitUtil({
                    times: 250, condition: function () {
                        return !!window.echarts
                    }, call: t
                })
            })
        }, getSiteNav: function l() {
            var t = s(".nowcoder-header");
            return !t.get(0) && (t = s(".js-site-global-nav")), t
        }, getNavHeight: function f() {
            return (this.getSiteNav().height() || 0) + (s(".email-validate").height() || 0)
        }, getUploadUrl: function g(t) {
            return o.addParam({type: t}, "/uploadImage")
        }, fixEl: function v(o) {
            if (!(o = o || {}).target || !o.fixCls) return;
            var r = o.target = s(o.target), a = s("<div></div>"), c = 0, t = n.frequency(16);

            function e() {
                t(function () {
                    var t = c ? a : r, e = s(u.getScrollParent(t) || window), i = u.getPosTop(t, e), n = e.scrollTop();
                    if (n > i - (o.redress || 0)) return r.addClass(o.fixCls), r.after(a), 1 === c || d.isFunction(o.change) && o.change(!0), void(c = 1);
                    r.removeClass(o.fixCls), a.remove(), 0 === c || d.isFunction(o.change) && o.change(!1), c = 0
                })
            }

            a.outerHeight(r.outerHeight()), a.css("margin", r.css("margin")), s(document).on("scroll", e), e()
        }
    }
});
define("/nc/1.03.04/plugin/pc/component/profileCard", ["nc", "cpn", "../base/env", "../base/config", "../action/action", "../action/ajax", "../base/bridge", "../base/localization", "../bll/bll", "../bll/uploadRemote", "./popupSub/popupMsg", "./attachSub/attachEmoji", "./popupSub/popupReport"], function (i, e, t) {
    var n = i("nc"), a = i("cpn"), f = n.$, m = n.Time, o = n.Component, s = n.Clazz, c = n.Limit, d = n.Str,
        v = n.Base, u = n.Dom, r = a.Popup, l = i("../base/env"), p = i("../base/config"), h = i("../action/action"),
        g = i("../bll/bll"), w = i("./popupSub/popupMsg"), b = i("./popupSub/popupReport"), k = t.exports = s.create(),
        j = {6484283: 1}, x = "profile-card-new";
    s.mix(k, o, {
        _template: '<div class="' + x + '"></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var i = this;
                i.rawConfig;
                i.initAction(), i.uid && i.getUser()
            }
        }],
        cache: {},
        index: 1,
        go: function C(a, o) {
            var s, c, r = this, l = {}, d = k._commonCard = k._commonCard || new k({noRender: !0}), u = 500, p = 100;
            if (a = f.trim(a), o = o || {}, !a) return;
            if (a = a.replace(/^\.+/, ""), t(), o.keep) {
                var i = m.frequency(1e3), e = function () {
                    i(t)
                };
                return f(document).on("mousemove", e), function () {
                    f(document).unbind("mousemove", e)
                }
            }

            function t() {
                var i = f("." + a);
                v.forEach(i, function (e) {
                    e = f(e);
                    var i = f.trim(e.attr("data-card-index")), t = f.trim(e.attr("data-card-uid"));
                    if (!(!t || +t <= 0 || i && l[i])) {
                        e.removeAttr("title");
                        var n = f.trim(r.index++);
                        e.attr("data-card-index", n), l[n] = !0, !o.keepCls && e.removeClass(a), e.on("mouseenter", function (i) {
                            window.clearTimeout(c), c = window.setTimeout(function () {
                                d.rawConfig.uid || (d.rawConfig.uid = t), window.clearTimeout(s), d.listen("render", function () {
                                    var i = d.getEl();
                                    i.on("mouseenter", function () {
                                        window.clearTimeout(s)
                                    }), i.on("mouseleave", function () {
                                        window.clearTimeout(s), s = window.setTimeout(function () {
                                            d.hide()
                                        }, p)
                                    })
                                }), d.unlisten("userChange"), d.listen("userChange", function () {
                                    d.fixPosition(e, o.attachConf), d.getEl().css("visibility", "visible")
                                }), d.render(), d.show(), d.getEl().css("visibility", "hidden"), d.changeUser(t)
                            }, u)
                        }).on("mouseleave", function () {
                            window.clearTimeout(c), window.clearTimeout(s), s = window.setTimeout(function () {
                                d.hide()
                            }, p)
                        })
                    }
                })
            }
        }
    }, {
        initialize: function T(i) {
            this.uid = v.id(i.uid), i.renderTo = i.renderTo || f(document.body)
        }, initAction: function y() {
            var a = this, i = a.getEl();
            a.rawConfig;
            i.on("click", ".js-follow", function (i) {
                var e = f(i.currentTarget);
                if (l.isLogin()) {
                    if (!c.mark(e)) {
                        var t = a.data, n = !!t.isFollowed;
                        h[n ? "unfollow" : "follow"]({
                            body: {id: a.uid, type: p.type.user}, call: function () {
                                t.isFollowed = !n, e.html(n ? "关注" : "已关注"), e.removeClass("icon-ok icon-plus"), e.addClass(n ? "icon-plus" : "icon-ok")
                            }, error: function (i) {
                                r.alert(i.msg)
                            }, always: function () {
                                c.pause(e)
                            }
                        })
                    }
                } else a.hide()
            }), i.on("click", ".js-send-msg", function (i) {
                a.hide(), l.isActive() && l.isLogin() && w.show({
                    title: "发私信",
                    content: "Hi",
                    receiver: {id: a.uid, name: (a.data || {}).name || "牛客人"}
                })
            }), i.on("click", ".js-black", function (i) {
                a.hide();
                var e = f(i.currentTarget);
                l.isLogin() && g.black({
                    id: e.attr("data-id"),
                    name: e.attr("data-name"),
                    black: !a.data.isBlacked,
                    call: function () {
                        r.tips("操作成功", v.bind(location.reload, location))
                    }
                })
            }), i.on("click", ".js-report", function (i) {
                a.hide();
                var e = f(i.currentTarget);
                l.isLogin() && b.show({type: p.type.user, entityId: e.attr("data-id")})
            })
        }, attachTo: function S(i, e) {
            var t = this.getEl();
            if (!(i = f(i)).get(0)) return;
            var n = u.attachTo(v.extend({}, e, {el: this.getEl(), target: i, extOffset: {top: 5, reverseTop: -5}}));
            this.topArrow(!!n.verReverse);
            var a = t.find("div.arrow"), o = i.outerWidth(), s = t.outerWidth(), c = parseInt(t.css("left"), 10), r = 0;
            if (n.reverse) {
                a.css("left", "50%"), r = 1 + (s - o) / 2;
                var l = parseInt(a.css("left"), 10);
                a.css("left", Math.min(l + r, s - 13))
            } else if ((c -= (s - o) / 2) < 1 && (r = 1 - c, c = 1), t.css("left", c), a.css("left", (s - a.outerWidth()) / 2), 0 < r) {
                var l = parseInt(a.css("left"), 10);
                a.css("left", Math.max(l - r, 13))
            }
        }, topArrow: function I(i) {
            var e = this.getEl("div.profile-card-arrow");
            e.removeClass("bottom"), !0 === i && e.addClass("bottom")
        }, fixPosition: function L(i, e) {
            this.attachTo(i, e)
        }, changeUser: function U(i) {
            var e = this;
            if (!(i = v.id(i)) || e.uid === i) return e.fire("userChange");
            e.getEl();
            e.uid = i, e.getUser()
        }, getUser: function E() {
            var t = this, n = t.uid, a = k.cache;
            if (!n) return;
            if (a[n]) return t.renderUser(a[n]);
            t.renderWait(), h.getUserNameCard({
                query: {}, params: {uid: n}, call: function (i) {
                    if (n === t.uid) {
                        t.getEl();
                        var e = i.data;
                        e && (a[n] = e), t.renderUser(e || {})
                    }
                }, error: function (i) {
                    t.renderWait(i.msg)
                }
            })
        }, renderUser: function R(i) {
            var e = this.getEl(), t = this.uid, n = "女" === i.gender, a = !!i.hasWorked, o = i.isSelf, s = i.honorLevel;
            i.gender = n ? "女" : "男", this.data = i;
            var c = d.execTpl(['<div class="arrow"></div>', '<div class="profile-card-new-info card-bg#{honorLevel} clearfix">', '<a class="profile-card-new-avatar" href="javascript:void(0);"><img src="#{headUrl}"></a>', '<div class="card-info-main no-medal-rank">', "<section>", '<a href="/profile/#{uid}" class="profile-card-new-name target="_blank" title="#{name}">#{name}</a>', n ? '<span class="sex-item js-nc-title-tips sex-female" title="#{gender}"><i class="icon-nc-female"></i></span>' : '<span class="sex-item js-nc-title-tips sex-male" title="#{gender}"><i class="icon-nc-male"></i></span>', "</section>", a ? '<span class="static-now static-work"><i class="icon-briefcase"></i>已工作</span>' : '<span class="static-now"><i class="icon-nc-book3"></i>在上学</span>', '<div class="card-new-identity">#{identity}</div>', "</div>", "</div>", '<div class="card-cont-box">', a ? '<span class="static-item" title="#{workInfo}"><i class="icon-nc-company"></i> <span class="static-item-txt">#{workInfo}</span></span>' : "", a ? '<span class="static-item" title="#{jobInfo}"><i class="icon-briefcase"></i> <span class="static-item-txt">#{jobInfo}</span></span>' : "", '<span class="static-item" title="#{eduInfo}"><i class="icon-nc-hat"></i> <span class="static-item-txt" style="max-width:9em;">#{eduInfo}</span></span>', a ? "" : '<span class="static-item" title="#{workTime}"><i class="icon-time"></i> <span class="static-item-txt">#{workTime}</span></span>', a ? "" : '<span class="static-item" title="#{jobInfo}"><i class="icon-briefcase"></i> <span class="static-item-txt">#{jobInfo}</span></span>', "</div>", '<div class="card-state-box">', '<a href="#{honorLevelUrl}" class="nc-level-tag nc-level#{honorLevel}" target="_blank" style="color:white;"><i class="icon-nc-niu"></i> #{honorLevelName} Lv.#{honorLevelShow}</a>', '<ul class="card-state">', '<li class="js-nc-title-tips" title="获赞与收藏"><i class="icon-nc-clap"></i> #{likedAndFollowCountStr}</li>', '<li class="js-nc-title-tips" title="题目正确"><i class="icon-ok-sign"></i> #{doneRightCountStr}</li>', '<li class="js-nc-title-tips" title="编程通过"><i class="icon-nc-code"></i> #{codeRightCountStr}</li>', '<li class="js-nc-title-tips" title="产出优质内容"><i class="icon-nc-medal"></i> #{goodUgcScoreStr}</li>', "</ul>", "</div>", '<div class="card-btn-box">', o ? "" : i.isBlacked ? '<a href="javascript:void(0);" class="js-black btn btn-plain" data-name="#{name}" data-id="#{uid}"><i class="icon-ban-circle"></i>已拉黑</a>' : i.isFollowed ? '<a href="javascript:void(0);" class="nc-req-auth js-follow btn btn-plain icon-ok">已关注</a>' : '<a href="javascript:void(0);" class="nc-req-auth js-follow btn btn-plain icon-plus">关注</a>', o || i.isBlacked ? "" : '<a href="javascript:void(0);" class="js-send-msg btn btn-plain fui-chat nc-req-auth nc-req-active">私信</a>', '<a href="/profile/#{uid}" target="_blank" class="btn btn-plain icon-user">个人主页</a>', o || j[t] ? "" : ['<a href="javascript:void(0);" class="icon-reorder link-gray profile-oprt-link">', '<div class="tooltip bottom tooltip-info">', '<div class="tooltip-arrow"><i></i></div>', '<div class="tooltip-inner">', '<ul class="profile-oprt-menu">', '<li class="js-black nc-req-auth" data-name="#{name}" data-id="#{uid}">', i.isBlacked ? "移除黑名单" : "加入黑名单", "</li>", '<li class="js-report nc-req-auth" data-id="#{uid}">举报TA</li>', "</ul>", "</div>", "</div>", "</a>"].join(""), "</div>"].join(""), v.extend({}, i, {
                uid: t,
                livePlace: l(i.livePlace) || "待完善",
                workInfo: l(i.workInfo) || "待完善",
                eduInfo: l(i.eduInfo) || "待完善",
                workTime: l(i.workTime) ? i.workTime + "毕业" : "待完善",
                jobInfo: l(i.jobInfo) || "待完善",
                likedAndFollowCountStr: r(i.likedAndFollowCount),
                doneRightCountStr: r(i.doneRightCount),
                codeRightCountStr: r(i.codeRightCount),
                goodUgcScoreStr: r(i.goodUgcScore),
                honorLevelShow: Math.max(0, (+i.honorLevel || 0) - 1),
                honorLevelUrl: o ? "/profile/" + t + "/honor/detail" : "https://www.nowcoder.com/discuss/455",
                identity: v.map(i.identityLevel, function (i) {
                    return '<img class="' + i.idenClass + '" src="//static.nowcoder.com/nc/image/identity/' + i.level + '.png"><span class="user-name js-nc-title-tips"  title="' + i.name + '">' + i.name + "</span>"
                }).join(" "),
                honorLevelName: {
                    1: "蒟蒻牛",
                    2: "小白牛",
                    3: "进阶牛",
                    4: "出师牛",
                    5: "青出于蓝",
                    6: "飞黄腾达",
                    7: "大橘已定",
                    8: "红名大佬"
                }[s] || (s < 1 ? "蒟蒻牛" : 8 < s ? "红名大佬" : "---")
            }));

            function r(i) {
                return i <= 999 ? i : (i / 1e3).toFixed(1) + "k"
            }

            function l(i) {
                return i && 0 !== i.indexOf("未填写") && "待完善" !== i ? i : ""
            }

            e.html(c), e.get(0).className = x, this.fire("userChange")
        }, renderWait: function A(i) {
            var e = this.getEl();
            i = i || "正在加载中...", e.html(['<div class="profile-card-arrow"></div>', '<div class="card-btn-box" id="jsLoad" style="font-size:14px;text-align:center;padding:20px 0;">', i, "</div>"].join("")), e.get(0).className = x, this.fire("userChange")
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/select", ["nc"], function (e, t, n) {
    var i = e("nc"), f = i.$, o = i.Clazz, r = i.Base, l = i.Component, a = i.Str, s = i.Dom,
        d = n.exports = o.create();
    o.mix(d, l, {
        _template: ['<div role="group" class="btn-group">', '<button class="btn btn-default dropdown-toggle">', '<span class="dropdown-value">#{text}</span>', '<span class="caret"></span>', "</button>", '<ul class="dropdown-menu"></ul>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, n = t.getEl(), e = t.rawConfig;
                t.txtEl = n.find("button.dropdown-toggle .dropdown-value"), t.menu = n.find("ul.dropdown-menu"), "small" !== e.size && "large" !== e.size || t.size(e.size), e.autoWidth && (t.txtEl.removeClass("dropdown-value"), t.menu.addClass("dropdown-auto")), null !== e.zIndex && e.zIndex !== undefined && t.menu.css("z-index", e.zIndex), f(document).click(function (e) {
                    0 < n.length && !f.contains(n.get(0), e.target) && t.open(!1, !0)
                }), t.hoverExpand && s.hover(n, function () {
                    t.isDisabled || (window.clearTimeout(t._hoverTimer), window.clearTimeout(t._hideTimer), t._hoverTimer = window.setTimeout(function () {
                        t.open()
                    }, 250))
                }, function () {
                    t.isDisabled || t.open(!1)
                })
            }
        }, {
            name: "click button.dropdown-toggle", handler: function () {
                var e = this;
                e.isDisabled || e.open(e.hoverExpand || !e.isOpen())
            }
        }, {
            name: "click ul.dropdown-menu li", handler: function (e) {
                var t = f(e.target), n = "a" === t.prop("tagName").toLowerCase() ? f.trim(t.attr("href")) : "";
                n && !a.isJsHref(n) || e.preventDefault();
                var i = this, o = i.rawConfig, r = f(e.currentTarget).index();
                if (o.clickItemNoHide || i.open(!1, !0), i.error(!1), +r !== i.selectedIndex) {
                    i.select(r);
                    try {
                        i.fire("change"), o.change && o.change.call(i)
                    } catch (l) {
                    }
                }
            }
        }],
        transformConf: function u(e) {
            var t = e.find("ul.dropdown-menu li"), i = [], o = "";
            return r.forEach(t, function (e, t) {
                var n = (e = f(e)).hasClass("selected");
                i.push({
                    text: f.trim(e.text()),
                    value: e.attr("data-val") || t,
                    checked: n
                }), n && (o = f.trim(e.text()))
            }), o && e.find("button.dropdown-toggle .dropdown-value").html(o), {text: o, options: i}
        }
    }, {
        initialize: function c(e) {
            var n = this;
            n.hoverExpand = !e.noHover, n.isDisabled = !!e.disabled, r.every(e.options, function (e, t) {
                return !e.checked || (n.selectedIndex = t, !1)
            });
            var t = n.selectedIndex, i = t || 0 === t ? e.options[t] : {};
            n.value = i.value, e.text = i.text || e.text
        }, isOpen: function m() {
            return this.getEl().hasClass("open")
        }, open: function p(e, t) {
            var n = this, i = n.getEl();
            window.clearTimeout(n._hideTimer), window.clearTimeout(n._hoverTimer), !1 === e ? n._hideTimer = window.setTimeout(function () {
                i.removeClass("open")
            }, t ? 0 : 100) : (n._renderOptions(), n.itemElList && 0 !== n.itemElList.length || (n.itemElList = i.find("ul.dropdown-menu li"), i.find("ul.dropdown-menu").scrollTop(0)), i.addClass("open"))
        }, select: function h(e, t) {
            var n = this, i = n.getEl(), o = n.rawConfig, r = o.options;
            if (!e && 0 !== e) return n.selectedIndex;
            if ((e = +e || 0) >= r.length) return;
            var l = r[e], a = r[n.selectedIndex];
            l.text && n.txtEl.html(l.text);
            if (n.menuRendered) {
                var s = n.itemElList;
                s && 0 !== s.length || (s = n.itemElList = i.find("ul.dropdown-menu li"));
                var d = f(s[e]), u = f(s[n.selectedIndex]);
                u.removeClass("selected").find("a").removeClass("active"), d.addClass("selected").find("a").addClass("active"), n.value = l.value, n.selectedIndex = e
            } else a && (a.checked = !1), l && (l.checked = !0), n.value = l.value, n.selectedIndex = e;
            if (t) try {
                n.fire("change"), o.change && o.change.call(n)
            } catch (c) {
            }
        }, val: function v(n, e) {
            var t = this.rawConfig.options;
            if (!n && 0 !== n) return this.value;
            var i = 0;
            r.every(t, function (e, t) {
                return e.value !== n || (i = t, !1)
            }), this.select(i, e)
        }, text: function g() {
            var e = this.selectedIndex, t = this.rawConfig;
            if (null === e || e === undefined) return "";
            var n = t.options[e];
            return n.text ? n.text : n.html ? f(n.html).text() : ""
        }, error: function x(e) {
            this.getEl()[!1 === e ? "removeClass" : "addClass"]("error")
        }, size: function w(e) {
            var t = this.getEl(), n = "small" === e ? "btn-group-sm" : "large" === e ? "btn-group-lg" : "";
            t.removeClass("btn-group-sm btn-group-lg"), n && t.addClass(n)
        }, clear: function C(e) {
            var t = this, n = t.rawConfig;
            e = e || n.text || "请选择";
            var i = t.getEl();
            f(i.find("ul.dropdown-menu li")[t.selectedIndex]).removeClass("selected").find("a").removeClass("active"), t.value = null, t.selectedIndex = null, t.txtEl.html(e)
        }, disabled: function E(e) {
            this.isDisabled = !1 !== e
        }, _renderOptions: function b() {
            if (this.menuRendered) return;
            var e = this.getEl(), n = "", t = this.rawConfig;
            r.forEach(t.options, function (e, t) {
                n += "<li " + (e.checked ? ' class="selected"' : "") + ' ><a href="javascript:void(0);">' + e.text + "</a></li>"
            }), e.find("ul.dropdown-menu").html(n), this.menuRendered = !0
        }, _getData: function I(e) {
            return {text: e.text}
        }, replaceOptions: function T(e) {
            var t = this;
            if (t.rawConfig.options = e, !t.menuRendered) return;
            t.menuRendered = !1, t._renderOptions(), t.itemElList.length = 0, t.selectedIndex = null, t.clear()
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/tagInput", ["nc", "cpn"], function (t, i, n) {
    var e = t("nc"), a = t("cpn"), l = e.$, g = e.Base, s = e.Clazz, c = e.Dom, o = e.Component, d = e.Time,
        r = a.AttachSuggest, u = a.Tag, f = n.exports = s.create();
    s.mix(f, o, {
        _template: ["<div>", '<div class="tags-input-wrap js-tag-wrap" style="margin:0;display:block;">', '<label class="icon-tag"></label>', '<div class="tags-input-cont" style="cursor:text">', '<div class="tag-label-box js-tag-home">', '<span class="js-input-wrap">', '<input type="text" class="js-input" style="width:5px;padding-left:0;padding-right:0;">', "</span>", "</div>", "</div>", "</div>", '<div class="js-error" style="color:#ff5000;font-size:12px;"></div>', '<div class="pop-common-wrap js-common-wrap" style="display:none;">', "<span>常用:</span>", '<div class="pop-common-label js-common-tag"></div>', "</div>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, i = t.rawConfig;
                t.getEl();
                t.input = t.getEl(".js-input"), t.resize(), t.initIpt(), t.initCommon(), t.initSuggest(), i.value && t.val(i.value)
            }
        }]
    }, {
        initialize: function h(t) {
            this.tagList = [], this.suggestMap = {}, t.maxTagLength = +t.maxTagLength || 20
        }, initIpt: function p() {
            var t, a = this, s = a.rawConfig, i = a.getEl(), n = i.find(".js-tag-wrap"),
                o = (i.find(".js-input-wrap"), a.input), e = d.frequency(20);

            function r() {
                var t = a.tagList, i = t.length;
                if (!o.val() && 0 < i) {
                    var n = t[i - 1];
                    a.delTag(n), a.suggest && a.suggest.attach.fixPosition()
                }
            }

            function u() {
                var t = (a.suggest || {}).keyboardItem;
                if (!(t && 0 <= t.index)) {
                    var i = l.trim(o.val());
                    if (i) {
                        var n = a.suggestMap[i];
                        if (!n) {
                            if (s.noCustom) return a.showError("暂不支持自定义，请选择已有标签");
                            if (i.length > s.maxTagLength) return a.showError("标签最长" + s.maxTagLength + "个字符");
                            var e = !!g.find(s.limitStr, function (t) {
                                return 0 <= i.indexOf(t)
                            });
                            if (e) return a.showError("标签中包含非法字符")
                        }
                        a.addTag(n ? {text: n.text, value: n.value} : {
                            text: i,
                            value: i
                        }), a.input.val(""), a.fixIptWidth(), a.suggest && a.suggest.attach.fixPosition()
                    }
                }
            }

            n.on("click", function () {
                o.focus()
            }), c.bindChange(o, function () {
                e(function () {
                    a.fixIptWidth(), a.showError(!1)
                })
            }), o.on("focus", function () {
                window.clearTimeout(t), n.addClass("focus"), a.showError(!1)
            }), o.on("blur", function () {
                window.clearTimeout(t), t = window.setTimeout(function () {
                    n.removeClass("focus"), a.suggest && a.suggest.attach.forceHide(), a.fixIptWidth()
                }, 200)
            }), o.on("keydown", function (t) {
                var i = t.keyCode + "", n = {8: r, 13: u}[i];
                n && n()
            }), a.listen("change", function () {
                a.fixIptWidth()
            })
        }, initCommon: function v() {
            var n = this, t = n.rawConfig, i = n.getEl(), e = i.find(".js-common-tag"), a = [];
            g.forEach(t.common, function (t) {
                var i = g.isObject(t) ? t : {text: t, value: t};
                l.trim(i.text) && a.push(i)
            });
            var s = a.length;
            if (i.find(".js-common-wrap")[0 === s ? "hide" : "show"](), 0 === s) return;
            var o = g.map(a, function (i) {
                return new u({
                    renderTo: e,
                    text: i.text,
                    value: i.value,
                    needToggle: !0,
                    listeners: {
                        toggle: function () {
                            var t = this.isChecked();
                            t && n.addTag(i), !t && n.delTag(n.getTagByVal(i.text))
                        }
                    }
                })
            });
            n.listen("change", function () {
                var i = g.toMap(n.tagList, function (t) {
                    return {key: t.val(), value: !0}
                });
                g.forEach(o, function (t) {
                    t.checked(!!i[t.val()])
                })
            })
        }, initSuggest: function m() {
            var a = this, n = a.rawConfig, i = a.input;
            a.getEl();
            n.getSuggest && (a.suggest = r.show({
                input: i,
                needReWidth: !0,
                needSame: !0,
                noCache: !1,
                rePositionInList: !0,
                attach: n.attach,
                noLeave: !0,
                defaultIndex: n.noCustom ? 0 : -1,
                reqList: function (t, i) {
                    n.getSuggest(t, function (t) {
                        i && i(t)
                    })
                },
                dealList: function (t) {
                    var i = [], n = a.suggestMap, e = g.toMap(a.tagList, function (t) {
                        return {key: t.val()}
                    });
                    return g.forEach(t, function (t) {
                        n[t.text] = t, !e[t.value] && i.push(t)
                    }), i
                },
                ok: function (t) {
                    i.val(""), a.addTag({text: t.text, value: t.value}), a.fixIptWidth(), a.input.focus()
                }
            }), a.pushChild(a.suggest))
        }, val: function w(t) {
            var i = this;
            if (0 === arguments.length) return g.map(i.tagList, function (t) {
                return t.val()
            });
            g.forEach(i.tagList, function (t) {
                t && t.destroy()
            }), i.tagList.length = 0, g.forEach(t, function (t) {
                t && g.isString(t) && (t = {value: t, text: t}), i.addTag(t)
            })
        }, check: function x() {
            var t = this.input, i = l.trim(t.val());
            i && (t.focus(), this.showError("你还有未保存的收藏标签，请回车生成标签"));
            return !i
        }, addTag: function T(t) {
            var i = this;
            if ((!t || !i.getTagByVal(t.value)) && t && t.value && t.text) {
                var n = new u({
                    renderTo: i.getEl(".js-input-wrap"),
                    renderBy: "before",
                    text: t.text,
                    value: t.value,
                    checked: !0,
                    needDel: !0,
                    listeners: {
                        del: function () {
                            i.delTag(this)
                        }
                    }
                });
                n.getEl().css("margin", "2px"), i.tagList.push(n), i.fire("change", "add", t)
            }
        }, delTag: function E(t) {
            var i = this.tagList;
            if (t && g.contains(i, t)) {
                this.tagList = g.without(i, t), t.destroy();
                var n = t.rawConfig;
                this.fire("change", "del", {text: n.text, value: n.value})
            }
        }, hasVal: function y() {
            return !!(this.input.val() || 0 < this.tagList.length)
        }, getTagByVal: function C(i) {
            return g.find(this.tagList, function (t) {
                return t.val() === i
            })
        }, resize: function L() {
            this.getEl();
            this.fixIptWidth()
        }, fixIptWidth: function j() {
            var o = this, t = o.rawConfig, i = o.getEl(), r = o.input, n = i.find(".tags-input-cont"),
                e = +t.iptMinWidth || 150, a = n.width(), s = o.hasVal();
            s && function u(t) {
                var i = r[0], n = r.val();
                if (n !== o._lastVal) {
                    o._lastVal = n;
                    var e = parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight"));
                    if (r.width(1).css("overflowX", "hidden"), 1 < i.scrollWidth) {
                        var a = t && i.scrollWidth > t, s = a ? t - e : i.scrollWidth - e;
                        r.width(s), r.css("overflowX", a ? "auto" : "hidden")
                    }
                }
            }(a), !s && r.outerWidth(e), !s && (o._lastVal = null), r.attr("placeholder", s ? "" : l.trim(t.placeholder) || "输入标签，回车确定")
        }, showError: function I(t) {
            var i = this.getEl();
            i.find(".js-tag-wrap")[t ? "addClass" : "removeClass"]("error"), i.find(".js-error").html(t || "")
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/vote", ["nc", "cpn", "../bll/auth", "../base/env", "../action/action", "../action/ajax", "../base/bridge", "../base/localization", "./popupSub/popupLogin", "../base/config", "../bll/loginUtil", "./popupSub/popupCompleteInfo", "./popupSub/popupCommon"], function (t, e, o) {
    var n = t("nc"), i = t("cpn"), a = (n.$, n.Base), s = n.Clazz, r = n.Component, p = n.Node, c = i.CheckGroup,
        v = i.CheckBox, d = i.Popup, l = t("../bll/auth"), u = t("../action/action"), f = {1: 7, 2: 30, 3: 90, 4: 180},
        m = o.exports = s.create();
    s.mix(m, r, {
        _template: '<div class="vote-mod"></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                this.tips(), this.refresh()
            }
        }, {
            name: "click .js-vote", handler: function (t) {
                var e = this;
                l.checkLogin(t.currentTarget, function () {
                    e.check() && e.vote(function (t) {
                        e.renderVoted(a.extend(t, {
                            hasVote: !0,
                            voteInfo: e.voteData.voteInfo,
                            voteOptions: e.voteData.voteOptions
                        }))
                    })
                })
            }
        }]
    }, {
        initialize: function h(t) {
            this.voteId = t.voteId
        }, refresh: function b() {
            var o = this;
            o.getInfo(function (t) {
                var e = (o.voteData = t).hasVote || o.ended();
                o[e ? "renderVoted" : "renderVote"](t)
            }, function (t) {
                o.tips(t)
            })
        }, renderVote: function g(t) {
            var e = this, o = t.voteInfo || {},
                n = p.execTpl(['<div class="vote-mod-hd">#{vote.title + type}</div>', '<div class="vote-mod-bd js-vote-option"></div>', '<div class="vote-mod-ft">', '<a href="javascript:void(0);" class="btn btn-primary btn-block js-vote">投票</a>', "</div>"], {
                    vote: o,
                    type: "(" + {1: "单选", 2: "多选"}[o.type] + ")"
                });
            e.getEl().html(n);
            var i = e.getEl(".js-vote-option");
            e.optionCpn = c.mix({
                items: a.map(t.voteOptions, function (t) {
                    var e = new v({
                        renderTo: i,
                        radio: {1: !0, 2: !1}[o.type],
                        text: t.optionTitle,
                        val: a.id(t.optionId)
                    });
                    return e.getEl().css({display: "block", "margin-left": "0", "margin-bottom": "10px"}), e
                })
            })
        }, renderVoted: function I(e) {
            var t = e.voteInfo || {}, o = a.toMap(e.hostVote, function (t) {
                    return {key: t, value: !0}
                }),
                n = p.execTpl(['<div class="vote-mod-hd">#{vote.title + type}</div>', '<div class="vote-mod-bd">', '<div v-for="item in items" class="progress-bar-wrapper">', '<span class="progress-bar-label">#{item.optionTitle}<span v-if="isSelect(item)" class="font-green">(已选)</span></span>', '<span class="progress-bar-text">#{count(item)}票 #{percent(item)}</span>', '<div class="progress-bar-box">', '<div class="progress-bar-bg"><div class="progress-bar-inner" :style="\'width:\' + percent(item)"></div></div>', "</div>", "</div>", "</div>", '<div class="vote-mod-ft">', "<a href=\"javascript:void(0);\" class=\"btn btn-default btn-block\">#{ended ? '投票已结束' : '你已投票'}</a>", "</div>"], {
                    vote: t,
                    type: "(" + {1: "单选", 2: "多选"}[t.type] + ")",
                    items: e.voteOptions,
                    ended: this.ended(),
                    isSelect: function (t) {
                        return !!o[t.optionId]
                    },
                    count: function (t) {
                        return (e.countInfo || {})[t.optionId] || 0
                    },
                    percent: function (t) {
                        return ((e.percentInfo || {})[t.optionId] || 0) + "%"
                    }
                });
            this.getEl().html(n)
        }, vote: function x(e) {
            var t = this.optionCpn.val();
            u.vote({
                body: {voteId: this.voteId, options: t}, call: function (t) {
                    e && e(t.data)
                }, error: function (t) {
                    d.alert(t.msg)
                }
            })
        }, check: function y() {
            var t = this.optionCpn.val();
            return !(!t || 0 === t.length) || (d.alert("请选择一个选项"), !1)
        }, ended: function k() {
            var t = this.voteData.voteInfo, e = 24 * (f[t.expiredAt] || 0) * 3600 * 1e3;
            return t.createdAt + e <= (new Date).getTime()
        }, tips: function C(t) {
            this.getEl().html('<div style="text-align:center;font-size:14px;padding:20px 0;">' + (t || "加载中...") + "</div>")
        }, getInfo: function V(o, e) {
            u.voteInfo({
                query: {voteId: this.voteId}, call: function (t) {
                    var e = t.data || {};
                    o && o(e)
                }, error: function (t) {
                    e && e(t.msg)
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/index", ["nc", "./action/tips", "cpn", "./action/rightNav", "./action/inIframe", "../../base/env", "./action/liveTips", "./action/navActiveEmail", "./action/navLogin", "./action/navSearch", "../../action/action", "../../action/ajax", "../../base/bridge", "../../base/localization", "./action/docWrite", "./action/copy", "./action/copyright", "./action/checkLogin", "./action/checkMessage", "./action/contentShowHalf", "./action/action", "../auth", "../../component/popupSub/popupLogin", "../../base/config", "../loginUtil", "../../component/popupSub/popupCompleteInfo", "../../component/popupSub/popupCommon", "../../component/popupSub/popupMsg", "../../component/attachSub/attachEmoji", "../../component/popupSub/popupReport", "./action/oAuth", "../../base/win", "./action/hijack", "./action/profileCard", "../../component/profileCard", "../bll", "../uploadRemote", "./action/fuckAdBlock"], function (n, c, i) {
    var o = n("nc"), a = o.Base, t = (o.Clazz, n("./action/tips")), e = n("./action/rightNav"),
        p = n("./action/inIframe"), m = n("./action/liveTips"), r = n("./action/navActiveEmail"),
        u = n("./action/navLogin"), l = n("./action/navSearch"), h = n("./action/docWrite"), s = n("./action/copy"),
        v = n("./action/copyright"), g = n("./action/checkLogin"), f = n("./action/checkMessage"),
        k = n("./action/contentShowHalf"), b = n("./action/action"), d = n("./action/oAuth"), C = n("./action/hijack"),
        S = n("./action/profileCard"), A = n("./action/fuckAdBlock");
    i.exports = {};
    var L = [{name: "DocWrite", cpn: h}, {name: "Tips", cpn: t}, {name: "RightNav", cpn: e}, {
        name: "InIframe",
        cpn: p
    }, {name: "LiveTips", cpn: m}, {name: "NavActiveEmail", cpn: r}, {name: "NavLogin", cpn: u}, {
        name: "NavSearch",
        cpn: l
    }, {name: "Copy", cpn: s}, {name: "CopyRight", cpn: v}, {name: "CheckLogin", cpn: g}, {
        name: "CheckMessage",
        cpn: f
    }, {name: "ContentShowHalf", cpn: k}, {name: "Action", cpn: b}, {name: "OAuth", cpn: d}, {
        name: "Hijack",
        cpn: C
    }, {name: "ProfileCard", cpn: S}, {name: "FuckAdBlock", cpn: A}];
    a.forEach(L, function (n) {
        var c = n.name, o = n.cpn, a = "init" + c;
        i.exports[a] = function (n) {
            return new o(n || {})
        }
    }), i.exports.initFuckAdBlock()
});
define("/nc/1.03.04/plugin/pc/component/cmt/index", ["nc", "cpn", "../../base/config", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization"], function (l, t, e) {
    var s, c, n = l("nc"), i = l("cpn"), d = n.$, p = n.Base, r = n.Clazz, o = n.Component, u = n.Limit, a = n.Dom,
        m = n.Num, f = n.Event, g = n.Db, h = i.Pager, y = i.Popup, C = i.CheckBox, v = l("../../base/config"),
        w = l("../../action/action"), I = e.exports = r.create();
    r.mix(I, o, {
        _template: ['<div class="">', '<div class="js-tips"></div>', '<div class="js-content" style="display:none;"></div>', '<div class="js-pager-box" style="display:none;"></div>', '<div class="js-reply-box" style="display:none;"></div>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, t = e.getEl(), n = e.rawConfig;
                e.contentEl = t.find(".js-content"), e.replyEl = t.find(".js-reply-box"), e.tipsEl = t.find(".js-tips"), e.pageEl = t.find(".js-pager-box"), e.showTips("加载中..."), e.initPlugin(function () {
                    if (e.cmtClazz = n.cmtClazz || {
                        bbs: s,
                        wonderful: s,
                        accept: s,
                        sub: c
                    }[n.type], !e.cmtClazz) return e.showTips("缺少评论模板");
                    var t = p.id(n.commentId);
                    t ? w.cmtGetPageNum({
                        query: {
                            pageSize: e.pageSize,
                            order: e.order,
                            entityId: n.entityId,
                            entityType: n.entityType,
                            commentId: n.commentId
                        }, call: function (t) {
                            e.page = +t.data
                        }, always: function () {
                            e.refresh(function () {
                                e.scrollToId(t, !0, !0)
                            })
                        }
                    }) : e.refresh(), e.initReply()
                })
            }
        }]
    }, {
        initialize: function T(t) {
            var e = this;
            t.type = t.type || "bbs", e.isWonderful = "wonderful" === t.type, e.isAccept = "accept" === t.type, e.isSubCmt = !!t.isSubCmt || "sub" === t.type, e.totalCount = -1, e.page = t.page, e.pageSize = t.pageSize || (e.isWonderful || e.isAccept ? 10 : 20), e.cmtList = [], e.order = p.id(t.order) || "1";
            var n = t.extCmts;
            e.extCmts = n ? p.isArray(n) ? n : [n] : []
        }, initPlugin: function x(i) {
            var r = ["./item/bbs", "./item/sub"], o = [], a = 0;
            p.forEach(r, function (t, e) {
                l.async(t, function (t) {
                    o[e] = t, r.length <= ++a && function n(t, e) {
                        s = t, c = e, i && i()
                    }.apply(null, o)
                })
            })
        }, initTheme: function b() {
            var t = this.contentEl;
            o.recycle(t, !1);
            var e = this.cmtClazz._listTemplate || "";
            t.html(e).show(), this.listEl = t.find(".js-list")
        }, initReply: function z() {
            var r = this, o = r.rawConfig, e = r.replyEl;
            if (!o.needReply) return;
            l.async("./cpn/reply", function (t) {
                var i = new t({
                    renderTo: e, listeners: {
                        render: function () {
                            var t = this.ipt;
                            !o.currentUid && t.on("click", function () {
                                t.blur(), f.fire("window:showAuthDialog")
                            })
                        }, goAddCmt: function (t, e) {
                            var n = p.id(o.entityType) === p.id(v.type.comment) ? o.entityId : null;
                            !u.mark(e) && r.createCmt({
                                content: t,
                                toUserId: o.userId || 0,
                                toCommentId: n,
                                call: function (t) {
                                    var e = p.id(t.data);
                                    e && r.scrollToId(e), !e && r.scrollToTop(), i.val("")
                                },
                                always: function () {
                                    u.clear(e)
                                }
                            })
                        }
                    }
                });
                e.show()
            })
        }, changeOrder: function E(t) {
            t = p.id(t) || "1", this.order !== t && (this.order = t, this.renderPage(1))
        }, refresh: function P(t) {
            this.renderPage(this.page, t)
        }, renderPage: function S(i, r) {
            var o = this, a = o.rawConfig;
            o.getListData(i, function (t, e) {
                var n = 0 < (o.extCmts || []).length && 0 < (e.comments || []).length && i === a.page;
                n && (e.comments = o.extCmts.concat(e.comments)), o.renderList(t, e), r && r(t, e)
            })
        }, renderList: function A(t, e) {
            var n = this, i = (n.rawConfig, e.comments);
            if (n.cmtList.length = 0, n.showTips(!1), n.initTheme(), 0 === i.length) n.renderNone(); else {
                var r = 0;
                p.forEach(i, function (t) {
                    n.renderCmtItem(t, r), !t.isFeedAd && r++
                })
            }
            n.renderPager(t, e.totalPage), n.fire("listDataChange", {totalCount: n.totalCount}), l.async("ncPlugin/highlighter/highlighter", function (t) {
                t.init()
            })
        }, renderCmtItem: function L(t, e) {
            var n = this, i = n.rawConfig, r = n.cmtClazz, o = n.order, a = e + (n.page - 1) * n.pageSize,
                l = r.initConf(t, {
                    renderTo: n.listEl,
                    postId: i.postId || i.entityId,
                    parentId: i.entityId,
                    isAdmin: i.isAdmin,
                    isAward: i.isAward,
                    needWonderful: i.needWonderful,
                    needLitigant: i.needLitigant,
                    needSubReport: i.needSubReport,
                    lordUid: i.lordUid,
                    entityUid: i.userId,
                    entityId: i.entityId,
                    entityType: i.entityType,
                    currentUid: i.currentUid,
                    index: "0" === o ? n.totalCount - a - 1 : "1" === o ? a : undefined,
                    extHeight: i.extHeight,
                    clsUserCard: i.clsUserCard || "js-nc-card",
                    clsHonorLevel: i.clsHonorLevel || "level-color-#{honorLevel}",
                    urlProfile: i.urlProfile || "/profile/#{authorId}",
                    extParam: i.extParam,
                    typeStatus: {isSubCmt: n.isSubCmt, isWonderful: n.isWonderful, isAccept: n.isAccept},
                    listeners: {
                        goAddCmt: function (t, e) {
                            t && !u.mark(e) && n.createCmt(p.extend(t, {
                                always: function () {
                                    u.clear(e)
                                }
                            }))
                        }, delCmt: function () {
                            n.totalCount--, n.refresh()
                        }, wonderfulCmt: function () {
                            n.fire("wonderfulChange")
                        }, litigantCmt: function () {
                            n.fire("litigantChange")
                        }, acceptCmt: function () {
                            i.isAward = !1, n.fire("acceptChange")
                        }
                    }
                }), t = new r(l);
            if (n.cmtList.push(t), i.fixCmtItem && i.fixCmtItem(t), i.autoOpenSubCmt && 0 !== l.commentCnt) {
                var s = d(t.getActionEl().find("a.js-cmt-action")[0]);
                u.mark(s) || t.openSubCmt(s)
            }
        }, renderNone: function j() {
            var t = this.rawConfig, e = (this.getEl(), t.noneTips || this.cmtClazz._noneTemplate || "没有数据");
            this.contentEl.html(e)
        }, renderPager: function U(t, e) {
            var n = this, i = (n.getEl(), n.pageEl);
            o.recycle(i, !1), i[1 < e ? "show" : "hide"](), new h({
                renderTo: i,
                renderBy: "html",
                current: t,
                total: e,
                pageChange: function (t) {
                    n.renderPage(t, function () {
                        n.scrollToTop()
                    })
                }
            })
        }, getListData: function W(n, i) {
            var r = this, t = r.rawConfig;
            r.getEl();
            -1 === (n = n || t.page || 1) && 0 <= r.totalCount && (n = m.page(r.totalCount, r.pageSize));
            var e = r.isAccept ? "cmtGetAcceptedList" : r.isWonderful ? "cmtGetWonderfulList" : "cmtGetByPageV2";
            w[e]({
                query: p.extend({
                    pageSize: r.pageSize,
                    page: Math.max(n, 1),
                    order: r.order,
                    entityId: t.entityId,
                    entityType: t.entityType
                }, t.extParam), call: function (t) {
                    var e = t.data;
                    if (-1 === n || 0 !== e.totalCnt && 0 === e.comments.length) return r.renderPage(e.totalPage);
                    r.totalCount = e.totalCnt, r.page = n, r.pageSize = e.pageSize, i(n, e)
                }, error: function (t) {
                    r.showTips(t.msg)
                }
            })
        }, createCmt: function R(e) {
            var i = this, t = i.rawConfig, n = e.content, r = n.replace(/<.*?>/gi, ""), o = /<img.+>/gi.test(n);
            if (o || r) if (!o && r.length < 5 && !g.get("noReplyIrrigationAlert")) {
                var a = y.confirm("灌水的话可能会被管理员删除的，确定现在提交吗？", s, e.always),
                    l = new C({renderTo: a.popupFooter, text: "以后不再提示"});
                l.listen("change", function () {
                    g.set("noReplyIrrigationAlert", this.isChecked())
                })
            } else s(); else y.alert("内容不能为空"), e.always && e.always();

            function s() {
                w.cmtAdd({
                    captcha: {type: v.captcha.postComment},
                    body: {
                        entityType: t.entityType,
                        entityOwnerId: t.entityOwnerId || 0,
                        entityId: t.entityId,
                        commentContent: n,
                        toUserId: e.toUserId,
                        toCommentId: e.toCommentId
                    },
                    call: function (n) {
                        i.page;
                        i.totalCount++, i.renderPage(-1, function (t, e) {
                            !i.isSubCmt && p.id(n.data) ? i.scrollToId(n.data, !1, !0) : i.scrollToTop()
                        }), e.call && e.call(n)
                    },
                    error: function (t) {
                        y.alert(t.msg), e.error && e.error(t)
                    },
                    always: e.always
                })
            }
        }, scrollToTop: function k(t) {
            var e = this.rawConfig, n = e.renderTo;
            a.scrollToEl({el: n, scrollEl: a.getScrollParent(n), animation: !!t, ext: +e.extHeight || 0})
        }, scrollToId: function D(e, t, n) {
            var i = this.rawConfig, r = (this.cmtList, p.find(this.cmtList, function (t) {
                return p.id(t.rawConfig.id) === p.id(e)
            }));
            if (r) {
                var o = r.getEl();
                a.scrollToEl({
                    el: o,
                    scrollEl: a.getScrollParent(o),
                    animation: !!t,
                    ext: +i.extHeight || 0
                }), n && a.highLight({el: o})
            }
        }, showTips: function H(t) {
            this.getEl();
            var e = this.tipsEl;
            if (!t || !d.trim(t)) return e.hide().html("");
            e.html('<div style="padding:20px 0;text-align:center;font-size:14px;">' + t + "</div>").show()
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/attachSub/attachEmoji", ["nc", "cpn", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization"], function (e, d, i) {
    var o = e("nc"), t = e("cpn"), r = o.$, c = o.Base, n = o.Clazz, a = o.Component, s = o.Node, l = (o.Dom, o.Num),
        w = t.Attach, m = e("../../action/action"), p = i.exports = n.create(), u = 45,
        F = {description: "默认", type: "-1"};
    n.mix(p, a, {
        _template: ['<div class="tooltip bottom tooltip-info" style="position:relative;">', '<div class="tooltip-arrow" style="left:50%;margin-left:-9px;"><i></i></div>', '<div class="tooltip-inner layer-emotion-box js-main"></div>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, d = e.rawConfig, i = e.getEl();
                d.verReverse && i.removeClass("bottom").addClass("top"), i.find(".js-main").html(e.getTips()), e.initContent()
            }
        }, {
            name: "click .js-type", handler: function (e) {
                var d = r(e.currentTarget), i = r.trim(d.attr("data-type"));
                this.select(i, 0)
            }
        }, {
            name: "click .js-page", handler: function (e) {
                var d = this, i = r(e.currentTarget), o = "next" === r.trim(i.attr("data-type")),
                    t = p.dataMap[d.currentType];
                l.page(t.length, u);
                d.select(d.currentType, d.currentPage + (o ? 1 : -1))
            }
        }, {
            name: "click .js-emoji-item", handler: function (e) {
                var d = this, i = d.rawConfig, o = d.getEmojiByEl(e.currentTarget).emoji;
                if (o) {
                    var t = !!o.word,
                        r = {isEmoji: t, text: o[t ? "word" : "name"], html: t ? "<span>" + o.word + "</span>" : o.url};
                    i.call && i.call(r), d.fire("select", r)
                }
            }
        }],
        show: function v(e) {
            var d = new p(e = e || {});
            return w.wrap(d, c.extend({
                target: e.target,
                content: d.html(),
                attach: {center: !0, verReverse: !!e.verReverse}
            })), d
        },
        renderInIpt: function f(e, d) {
            try {
                var e = r(e);
                e.caret(e.range().end), e.range(d.text), e.caret(e.range().end)
            } catch (i) {
            }
        },
        menuList: null,
        dataMap: {},
        getMenu: function g(e, i, d) {
            var o = this;
            if (e) return i && i([F]);
            if (o.menuList) return i && i(o.menuList);
            m.emojiGetMenu({
                type: "GET", call: function (e) {
                    var d = (e.data || {}).data || [];
                    d.unshift(F), o.menuList = d, i && i(d)
                }, error: d
            })
        },
        getEmoji: function j(e, i, d) {
            var o = this.dataMap, t = c.id(e);
            t !== F.type || o[t] || (o[t] = p.getDefaultEmoji());
            if (o[t]) return i && i(o[t]);
            m.emojiGetData({
                query: {type: t}, call: function (e) {
                    var d = (e.data || {}).data || [];
                    o[t] = d, i && i(d)
                }, error: d
            })
        },
        getDefaultEmoji: function h() {
            return [{id: 1, code: "1F600", word: "😀"}, {id: 2, code: "1F601", word: "😁"}, {
                id: 3,
                code: "1F602",
                word: "😂"
            }, {id: 4, code: "1F923", word: "🤣"}, {id: 5, code: "1F603", word: "😃"}, {
                id: 6,
                code: "1F604",
                word: "😄"
            }, {id: 7, code: "1F605", word: "😅"}, {id: 8, code: "1F606", word: "😆"}, {
                id: 9,
                code: "1F609",
                word: "😉"
            }, {id: 10, code: "1F60A", word: "😊"}, {id: 11, code: "1F60B", word: "😋"}, {
                id: 12,
                code: "1F60E",
                word: "😎"
            }, {id: 13, code: "1F60D", word: "😍"}, {id: 14, code: "1F618", word: "😘"}, {
                id: 16,
                code: "1F617",
                word: "😗"
            }, {id: 17, code: "1F619", word: "😙"}, {id: 18, code: "1F61A", word: "😚"}, {
                id: 20,
                code: "1F642",
                word: "🙂"
            }, {id: 21, code: "1F917", word: "🤗"}, {id: 22, code: "1F929", word: "🤩"}, {
                id: 23,
                code: "1F914",
                word: "🤔"
            }, {id: 24, code: "1F928", word: "🤨"}, {id: 25, code: "1F610", word: "😐"}, {
                id: 26,
                code: "1F611",
                word: "😑"
            }, {id: 27, code: "1F636", word: "😶"}, {id: 28, code: "1F644", word: "🙄"}, {
                id: 29,
                code: "1F60F",
                word: "😏"
            }, {id: 30, code: "1F623", word: "😣"}, {id: 31, code: "1F625", word: "😥"}, {
                id: 32,
                code: "1F62E",
                word: "😮"
            }, {id: 33, code: "1F910", word: "🤐"}, {id: 34, code: "1F62F", word: "😯"}, {
                id: 35,
                code: "1F62A",
                word: "😪"
            }, {id: 36, code: "1F62B", word: "😫"}, {id: 37, code: "1F634", word: "😴"}, {
                id: 38,
                code: "1F60C",
                word: "😌"
            }, {id: 39, code: "1F61B", word: "😛"}, {id: 40, code: "1F61C", word: "😜"}, {
                id: 41,
                code: "1F61D",
                word: "😝"
            }, {id: 42, code: "1F924", word: "🤤"}, {id: 43, code: "1F612", word: "😒"}, {
                id: 44,
                code: "1F613",
                word: "😓"
            }, {id: 45, code: "1F614", word: "😔"}, {id: 46, code: "1F615", word: "😕"}, {
                id: 47,
                code: "1F643",
                word: "🙃"
            }, {id: 48, code: "1F911", word: "🤑"}, {id: 49, code: "1F632", word: "😲"}, {
                id: 50,
                code: "2639",
                word: "☹"
            }, {id: 51, code: "1F641", word: "🙁"}, {id: 52, code: "1F616", word: "😖"}, {
                id: 53,
                code: "1F61E",
                word: "😞"
            }, {id: 54, code: "1F61F", word: "😟"}, {id: 55, code: "1F624", word: "😤"}, {
                id: 56,
                code: "1F622",
                word: "😢"
            }, {id: 57, code: "1F62D", word: "😭"}, {id: 58, code: "1F626", word: "😦"}, {
                id: 59,
                code: "1F627",
                word: "😧"
            }, {id: 60, code: "1F628", word: "😨"}, {id: 61, code: "1F629", word: "😩"}, {
                id: 62,
                code: "1F92F",
                word: "🤯"
            }, {id: 63, code: "1F62C", word: "😬"}, {id: 64, code: "1F630", word: "😰"}, {
                id: 65,
                code: "1F631",
                word: "😱"
            }, {id: 68, code: "1F633", word: "😳"}, {id: 69, code: "1F92A", word: "🤪"}, {
                id: 70,
                code: "1F635",
                word: "😵"
            }, {id: 71, code: "1F621", word: "😡"}, {id: 72, code: "1F620", word: "😠"}, {
                id: 73,
                code: "1F92C",
                word: "🤬"
            }, {id: 74, code: "1F637", word: "😷"}, {id: 75, code: "1F912", word: "🤒"}, {
                id: 76,
                code: "1F915",
                word: "🤕"
            }, {id: 77, code: "1F922", word: "🤢"}, {id: 78, code: "1F92E", word: "🤮"}, {
                id: 79,
                code: "1F927",
                word: "🤧"
            }, {id: 80, code: "1F607", word: "😇"}, {id: 81, code: "1F920", word: "🤠"}, {
                id: 85,
                code: "1F925",
                word: "🤥"
            }, {id: 86, code: "1F92B", word: "🤫"}, {id: 87, code: "1F92D", word: "🤭"}, {
                id: 88,
                code: "1F9D0",
                word: "🧐"
            }, {id: 89, code: "1F913", word: "🤓"}, {id: 90, code: "1F608", word: "😈"}, {
                id: 91,
                code: "1F47F",
                word: "👿"
            }]
        }
    }, {
        initialize: function y() {
            this.menu = null, this.currentType = null, this.currentPage = 0
        }, initContent: function E() {
            var d = this, e = d.rawConfig;
            p.getMenu(e.onlyDefault, function (e) {
                d.menu = e, d.renderMenu(e), d.initHover(), d.select(e[0].type, 0)
            }, function (e) {
                d.getEl(".js-main").html(d.getTips(e.msg))
            })
        }, initHover: function x() {
            var n = this;
            n.getEl(".js-emoji").on("mouseenter", ".js-emoji-item", function (e) {
                var d = n.previewEl, i = n.getEmojiByEl(e.currentTarget), o = i.index, t = i.emoji;
                if (!t || !t.url && !t.word) return d.hide().html("");
                d.html(t.url || "<span>" + t.word + "</span>").show(), function r(e, d) {
                    d[2 * (e %= 9) < 9 ? "removeClass" : "addClass"]("left")
                }(o, d)
            }).on("mouseleave", ".js-emoji-item", function (e) {
                var d = n.previewEl;
                d.hide().html("")
            })
        }, select: function C(d, i) {
            var o = this, e = o.getEl(), t = (e.find(".js-emoji"), o.getEl(".js-tips"), p.dataMap[d]);
            o.currentType = d, o.currentPage = i, e.find(".js-type").removeClass("selected"), e.find('.js-type[data-type="' + d + '"]').addClass("selected"), t ? o.renderEmoji(t, i) : (o.renderEmoji([], 1), p.getEmoji(d, function (e) {
                d === o.currentType && o.renderEmoji(e, i)
            }, function (e) {
                o.getEl();
                o.tipsEl.html(o.getTips(e.msg)).show(), o.emojiEl.hide()
            }))
        }, renderMenu: function T(e) {
            var d = this, i = d.getEl(),
                o = s.execTpl(['<div class="layer-emotion-label" v-if="hasMenu">', '<a v-for="(item, index) in items" href="javascript:void(0);" class="js-type" :data-type="item.type">#{item.description}</a>', "</div>", '<div class="layer-emotion-content">', '<div class="layer-emotion-hover js-preview-box" style="display:none;"></div>', '<div class="js-emoji" style="display:none;user-select:none;"></div>', '<div class="js-tips">#{tips}</div>', "</div>"], {
                    hasMenu: 1 < e.length,
                    items: e,
                    tips: d.getTips()
                });
            i.find(".js-main").html(o), d.previewEl = i.find(".js-preview-box"), d.tipsEl = i.find(".js-tips"), d.emojiEl = i.find(".js-emoji")
        }, renderEmoji: function b(e, d) {
            var i = this.getEl().find(".js-emoji"), o = this.getEl(".js-tips"), t = l.page(e.length, u);
            if (t < d + 1 || d < 0) return;
            var r = e.slice(d * u, (d + 1) * u);
            c.forCount(u - r.length, function () {
                r.push({})
            });
            var n = u * d,
                a = s.execTpl(['<div class="layer-emotion-wrapper">', '<div v-for="(item, index) in items" class="layer-emotion-item js-emoji-item" :data-index="getIndex(index)" :title="item.name || \'\'">', '<span v-if="item.url">#{item.url}</span>', '<span v-if="item.word">#{item.word}</span>', "</div>", "</div>", '<div class="layer-emotion-ft">', "<div><span>#{page}</span> / <span>#{total}</span></div>", '<div class="layer-emotion-page">', '<a href="javascript:void(0);" data-type="pre" :class="cls()"></a>', '<a href="javascript:void(0);" data-type="next" :class="cls(true)"></a>', "</div>", "</div>"], {
                    items: r,
                    page: d + 1,
                    total: t,
                    getIndex: function (e) {
                        return n + e
                    },
                    cls: function (e) {
                        return e ? ["icon-angle-right", "js-page", t <= d + 1 ? " disabled" : ""] : ["icon-angle-left", "js-page", d <= 0 ? " disabled" : ""]
                    }
                });
            i.html(a).show(), o.hide().html("")
        }, getEmojiByEl: function M(e) {
            var d = +r.trim(r(e).attr("data-index")) || 0, i = p.dataMap[this.currentType];
            return {index: d, emoji: i[d]}
        }, getTips: function D(e) {
            return '<div style="padding:20px;text-align:center;font-size:14px;">' + (e || "加载中...") + "</div>"
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/codeDataEditor", ["nc", "cpn", "../../base/config", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization"], function (e, i, n) {
    var a = e("nc"), o = e("cpn"), s = a.$, t = a.Component, d = a.Limit, l = a.Clazz, r = (a.Base, a.Upload),
        u = e("../../base/config"), c = e("../../action/action"), p = o.Popup, f = n.exports = l.create();
    l.mix(f, t, {
        _template: ['<div class="">', '<div class="subject-upload">', '<div class="subject-upload-inner">', '<span class="js-upload-wrap"><a class="btn-upload2 js-upload-btn" href="javascript:void(0);"></a></span>', '<a class="btn-upload2 js-upload-btn-bak" style="display:none;" href="javascript:void(0);"></a>', '<span class="subject-upload-text">#{desc}</span>', "</div>", '<div class="subject-upload-inner js-upload-progress" style="display:none;"></div>', "</div>", '<div class="subject-info" style="display:none;">', '<div class="alert alert-danger js-run-info"></div>', "</div>", '<div class="subject-action clearfix">', '<div class="subject-next">', '<a href="javascript:void(0);" class="js-submit-code btn btn-primary" style="width:150px;">#{runTxt}</a>', "</div>", "</div>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, i = e.getEl();
                e.uploadFile = null, e.uploadFileId = [], e.progressEl = i.find("div.js-upload-progress"), e.runInfoEl = i.find("div.js-run-info"), e.initUpload()
            }
        }, {
            name: "click .js-submit-code", handler: function (e) {
                this.runCode(e)
            }
        }, {
            name: "click .js-upload-btn-bak", handler: function () {
                p.alert("正在判题中，判题完成后才能再次提交")
            }
        }]
    }, {
        initialize: function m(e) {
            this.fileReset = !1
        }, initUpload: function v() {
            var n = this, e = n.rawConfig, a = n.getEl();
            n.upload = new r({
                target: n,
                holderEl: a.find("a.js-upload-btn"),
                type: u.uploadType.data,
                fileType: e.fileType || "*.txt",
                fileSizeLimit: e.fileSize || 5,
                fileQueueLimit: 1,
                btn: {
                    image: "//uploadfiles.nowcoder.com/images/20170720/56_1500535196899_0D6F0B229817E61B74168FFDD350D585",
                    width: 150,
                    height: 45
                },
                uploadSuccess: function (e, i) {
                    n.uploadFile = i, n.fileReset = !0, a.find("span.subject-upload-text").html("已上传" + i.fileName + "(" + i.fileSize + ")"), n.runInfoEl.parent().hide()
                }
            })
        }, runCode: function b(e) {
            var l = this, i = l.uploadFile, n = l.rawConfig, a = s(e.currentTarget);
            if (!i) return void p.alert("请先提交文件");
            if (l.isRuning) return void p.alert("正在判题中");
            if (!l.fileReset) return void p.alert("请不要重复提交运行同一文件");
            if (d.mark(a)) return;

            function r() {
                l.hideUpload(!1), l.isRuning = !1, d.clear(a)
            }

            l.fileReset = !1, l.isRuning = !0, l.hideUpload(), l.showMemo("正在提交文件...", "info", "submit"), c.codeDmRun({
                body: {
                    qid: n.qid,
                    url: i.url
                }, call: function (e) {
                    l.runTimer && window.clearTimeout(l.runTimer), l.showMemo("正在判题...", "info", "status"), l.runTimer = setTimeout(function () {
                        var t = arguments.callee;
                        c.codeDmStatus({
                            query: {submissionId: e.submissionId}, call: function (e) {
                                var i = (e = e || {}).status, n = e.desc, a = e.memo;
                                if (5 === i) {
                                    var o = n + "\n";
                                    if (e.needDownload) {
                                        var s = e.downloadMemoName ? e.downloadMemoName : "";
                                        o += '<div><a class="link-green" target="_blank" href="/downloadDataMingMemo?submissionId=' + e.submissionId + "&filename=" + s + '">点击下载结果</a></div>'
                                    } else e.isComplete ? o += a : (o += a, o += '<div><a class="link-green" target="_blank" href="/completeDataMiningSubmissionInfo?submissionId=' + e.submissionId + '">查看全部</a></div>');
                                    l.showMemo(o, "info", "complete"), l.runTimer = null, r()
                                } else if (0 === i || 23 === i || 19 === i || 100 === i) l.runTimer = setTimeout(t, 1e3), l.showMemo("正在判题...\n" + (n || "") + "\n" + (a || ""), "info", "wait"); else {
                                    var o = (n || "") + "\n" + (a || "");
                                    l.showMemo(o, "", "complete"), l.runTimer = null, r()
                                }
                            }, error: function (e) {
                                l.showMemo(e.msg || "出现错误，请重试", "", "error"), r()
                            }
                        })
                    }, 1e3)
                }, error: function (e) {
                    l.showMemo(e.msg || "出现错误，请重试", "", "error"), r()
                }
            })
        }, showMemo: function h(e, i, n) {
            var a = this.rawConfig, o = this.runInfoEl, s = "info" === i ? "alert-danger" : "alert-info",
                t = "info" === i ? "alert-info" : "alert-danger";
            o.removeClass(s).addClass(t), a.fixMemo && (e = a.fixMemo(e, i) || e), o.html(e.replace(/\n/g, "<br />")).show(), o.parent().show()
        }, hideUpload: function g(e) {
            var i = s(".js-upload-btn-bak"), n = s(".js-upload-wrap");
            !1 === e ? (i.hide(), n.css("position", "static"), n.css("top", 0)) : (n.css("position", "absolute"), n.css("top", "-100000px"), i.show())
        }, _getData: function w() {
            var e = this.rawConfig;
            return {desc: e.desc || "上传数据结果文件，格式仅限txt文件", runTxt: e.runTxt || "运行"}
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/codeFEEditor", ["ncPlugin/codemirror/style/codemirror.css", "ncPlugin/codemirror/style/theme/monokai.css", "ncPlugin/codemirror/codemirror", "nc", "cpn", "../../base/config", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization", "../popupSub/popupCaptcha", "../select"], function (o, e, t) {
    o("ncPlugin/codemirror/style/codemirror.css"), o("ncPlugin/codemirror/style/theme/monokai.css");
    var i = o("ncPlugin/codemirror/codemirror"), n = o("nc"), r = o("cpn"), s = n.$, l = n.Base, a = n.Component,
        c = n.Clazz, d = n.Dom, u = n.Str, f = n.CodeLang, h = n.CodeSubmit, g = (r.Layer, r.Popup), p = r.Select,
        v = o("../../base/config"), m = o("../../action/action"), b = o("../popupSub/popupCaptcha"),
        S = (p = o("../select"), t.exports = c.create());
    c.mix(S, a, {
        _template: ['<div class="code-editor-wrap">', '<div class="code-editor-head clearfix js-header">', "#{languageStr}", "#{previewStr}", "#{pluginStr}", "</div>", '<div class="code-font js-container">', '<div class="code-font js-editor" style="display:inline-block;"></div>', '<div class="js-iframe-container" style="display:none;background:#fff;border:1px solid #272822;border-top:none;position:relative;">', '<a href="javascript:void(0);" class="self-test-close js-close-preview" style="position:absolute;right:0;top:0;"></a>', '<iframe class="js-iframe" style="width:100%;height:100%;" frameborder="0" hidefocus="true"></iframe>', "</div>", "</div>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, t = e.rawConfig, i = e.getEl();
                e.initPlugin(function () {
                    e.editorEl = i.find(".js-editor"), e.iframe = i.find(".js-iframe"), e.initEditor(), a.setEvents(), e.initTab(), e.changeMode(), e.initAutoSize(), t.openPreview && e.showPreview()
                })
            }
        }, {
            name: "click .js-go-preview", handler: function (e) {
                this.showPreview(!this.isInPreview)
            }
        }, {
            name: "click .js-close-preview", handler: function () {
                this.showPreview(!1)
            }
        }]
    }, {
        initialize: function w(e) {
            var t = this;
            t._fixConf(e), t.initData(e), t.pluginSelected = [], t.isInPreview = !1, t.codeSubmit = new h
        }, initData: function C(e) {
            var i = this;
            i.languageSelected = "", i.codeMap = {
                html: "",
                css: "",
                javascript: ""
            }, l.forEach(e.languages, function (e) {
                var t = e.text;
                e.checked && (i.languageSelected = t), i.codeMap[t] = e.code || ""
            })
        }, initPlugin: function E(t) {
            var i = ["ncPlugin/codemirror/mode/clike/clike", "ncPlugin/codemirror/addon/edit/matchbrackets", "ncPlugin/codemirror/addon/edit/closebrackets"],
                n = 0;
            l.forEach(i, function (e) {
                o.async(e, function () {
                    i.length <= ++n && t && t()
                })
            })
        }, initEditor: function j() {
            this.editor = i(this.editorEl.get(0), {
                theme: "monokai",
                indentUnit: 4,
                lineNumbers: !0,
                mode: "text/javascript",
                matchBrackets: !0,
                autoCloseBrackets: !0,
                extraKeys: {
                    Tab: function (e) {
                        var t = e.somethingSelected();
                        t && e.indentSelection("add"), !t && e.replaceSelection("    ", "end", "+input")
                    }
                }
            })
        }, initTab: function x() {
            var e, o = this, a = o.rawConfig, t = o.getEl().find("ul.js-tabs li"), r = t.find(".js-refresh-code");
            d.tab({
                el: t, change: function (e) {
                    var t = s(e.currentTarget), i = t.attr("data-language");
                    o.codeMap[o.languageSelected] = o.getValue();
                    var n = o.languageSelected === i;
                    o.languageSelected = i, n || (o.changeMode(), r.hide(), t.find(".js-refresh-code").css("display", "inline-block"))
                }
            }), r.on("click", function (e) {
                var t = s(e.currentTarget), i = t.closest("li"), n = i.attr("data-language"),
                    r = l.find(a.languages, function (e) {
                        return e.text === n
                    });
                r && g.confirm("刷新后" + n + "代码框将重置为初始状态，正在编辑的代码将清空，但不会影响已提交的代码，确定刷新吗？", function () {
                    o.codeMap[n] = r.code || "", o.languageSelected = n, o.changeMode()
                })
            }), o.editor.on("changes", function () {
                o.codeMap[o.languageSelected] = o.getValue(), window.clearTimeout(e), e = window.setTimeout(function () {
                    o.updatePreview()
                }, 500)
            })
        }, initAutoSize: function k() {
            var e = this, t = e.rawConfig, i = e.getEl();
            e.height = i.height(), e.toolbarHeight = i.find("div.js-header").outerHeight(), !t.noAutoSize && e.editor.on("changes", function () {
                e.autoSize()
            }), e.autoSize()
        }, bindIframe: function P() {
            var e = this, r = e._bindIframeCb = e._bindIframeCb || {}, t = e.getEl(".js-iframe").get(0),
                i = t.contentDocument || t.contentWindow.document, n = i.parentWindow || i.defaultView;

            function o(e, t, i) {
                var n = e.addEventListener;
                e.removeEventListener && r[t] && e.removeEventListener(t, r[t]), r[t] = i, n && e.addEventListener(t, i, !1), !n && e.attachEvent && e.attachEvent("on" + t, i)
            }

            o(n, "focus", function () {
                e.fire("afterFocusIframe")
            }), o(n, "blur", function () {
                e.fire("afterBlurIframe")
            }), o(i, "click", function () {
                e.fire("afterFocusIframe")
            })
        }, showPreview: function y(e) {
            var t = this, i = t.rawConfig, n = t.getEl(), r = n.find("div.js-iframe-container"),
                o = n.find(".js-go-preview");
            0 < o.length && (e = !1 !== e, t.isInPreview = e, o.html(e ? "收起" : "预览"), o.removeClass(e ? "ico-review-code" : "ico-unfold-review").addClass(e ? "ico-unfold-review" : "ico-review-code"), r.css("display", e ? "inline-block" : "none"), t.updatePreview(), t[i.noAutoSize ? "resize" : "autoSize"]())
        }, updatePreview: function z() {
            if (!this.isInPreview) return;
            var e = this.getEl(), t = this.codeMap, i = e.find(".js-iframe").get(0),
                n = i.contentDocument || i.contentWindow.document,
                r = u.execTpl(["<!DOCTYPE html>", "<html>", "<head>", '<meta charset="utf-8">', "<title>nowcoder preview</title>", "<style>#{css}</style>", "</head>", "<body>", "#{html}", "</body>", "<script>#{javascript}<\/script>", "</html>"].join(""), {
                    css: t.css,
                    html: t.html,
                    javascript: "try {\n" + (t.javascript || "") + "\n} catch(e) {}"
                });
            n.open("text/html", "replace"), n.write(r), n.close(), this.bindIframe()
        }, changeMode: function _(t) {
            var i = this, n = i.editor, r = {
                html: {plugin: "htmlmixed", name: "text/html"},
                javascript: {plugin: "javascript", name: "text/javascript"},
                css: {plugin: "css", name: "text/css"}
            }[t = t || i.languageSelected];
            r && o.async("ncPlugin/codemirror/mode/" + r.plugin + "/" + r.plugin, function () {
                n.setOption("mode", {name: r.name});
                var e = i.codeMap[t];
                n.setValue(e)
            })
        }, valLangue: function I() {
            return f.langFE
        }, valCode: function M() {
            return this.getJsonStr()
        }, getValue: function T() {
            return this.editor.getValue()
        }, getJsonStr: function F() {
            var e = this, i = e.rawConfig.plugins, t = e.codeMap;
            t[e.languageSelected] = e.getValue();
            var n = {css: t.css, js: t.javascript, html: t.html, libs: []};
            return l.forEach(e.pluginSelected, function (e) {
                var t = i[e];
                t && t.value && n.libs.push(t.value)
            }), JSON.stringify(n)
        }, resize: function L(e, t) {
            var i = this.getEl(), n = i.find(".js-header"), r = i.find(".js-container"), o = i.find(".js-editor"),
                a = i.find(".js-iframe-container"), c = (i.find(".js-iframe"), !!this.isInPreview);
            l.id(e) && i.outerWidth(e), l.id(t) && i.outerHeight(t), e = i.width(), t = i.height() - n.outerHeight(), r.outerWidth(e), r.outerHeight(t), e = r.width(), t = r.height(), o.outerWidth(c ? e / 2 : e).outerHeight(t), a.outerWidth(c ? e / 2 : e).outerHeight(t), this.editor.setSize("100%", o.height())
        }, autoSize: function H() {
            var e = this;
            if (e.rawConfig.noAutoSize) return;
            try {
                e._editorScrollEl = e._editorScrollEl || s(e.editor.getScrollerElement()), e._editorSizerEl = e._editorSizerEl || e._editorScrollEl.find("div.CodeMirror-sizer");
                var t = window.parseInt(e._editorSizerEl.css("min-height") || e._editorSizerEl.height(), 10);
                t = Math.max(e.height, t + e.toolbarHeight), e.resize("100%", t)
            } catch (i) {
            }
        }, runCode: function U() {
            var i = this, e = (t = i.rawConfig).runCode;
            if (1e5 < i.getJsonStr().length) return void g.alert("啊，代码不要这么长嘛，人家受不了了~");
            var t = i.rawConfig, n = !!(e = t.runCode || {}).questionId,
                r = t.getUrlSubmitCode ? t.getUrlSubmitCode(n) : "",
                o = t.getUrlGetCodeStatus ? t.getUrlGetCodeStatus(n) : "";
            i.codeSubmit[n ? "submitSelfCode" : "submitTestCode"]({
                urlSubmitCode: r || m[n ? "codeSubmitUrl" : "codeRunUrl"](),
                urlGetCodeStatus: o || m.codeStatusUrl(),
                data: {
                    pid: e.pid,
                    tid: e.tid,
                    qid: e.qid,
                    questionId: e.questionId,
                    content: i.getJsonStr(),
                    language: f.langFE
                },
                extCodeParam: t.runExtParam,
                extStatusParam: t.statusExtParam,
                feedback: function (e, t) {
                    i.showResult(e, t)
                },
                cbGetCaptcha: function (e) {
                    b.show({type: v.captcha.runCode, url: t.captchaUrl, call: e, cancel: e})
                },
                cbGetCaptchaError: function (e) {
                    i.fire("runCodeError", e)
                },
                cbSubmitCodeBefore: function (e) {
                    i.fire("beforeRunCode")
                },
                cbSubmitCodeComplete: function (e) {
                    i.fire("runCodeSubmit", e)
                },
                cbSubmitCodeError: function (e) {
                    i.fire("runCodeError", e)
                },
                cbStatusCodeBefore: function () {
                    i.fire("beforeReqStatus")
                },
                cbStatusCodeSuccess: function (e) {
                    i.fire("runCodeSuccess", e), i.fire("runCodeFinish", e)
                },
                cbStatusCodeFail: function (e) {
                    i.fire("runCodeDanger", e), i.fire("runCodeFinish", e)
                },
                cbStatusCodeError: function (e) {
                    i.fire("runCodeError", e)
                }
            })
        }, showResult: function D(e, t) {
            var i = this.rawConfig.tipEl;
            if (!e || !s.trim(e)) return i.html(""), void i.parent().hide();
            i.removeClass(t ? "alert-info" : "alert-danger").addClass(t ? "alert-danger" : "alert-info"), i.html(e.replace(/\n/g, "<br />")).show(), i.parent().show()
        }, resetCode: function R(e) {
            var t = this, i = t.rawConfig, n = t.getEl(), r = t.codeMap;
            r.html = e.html, r.css = e.css, r.javascript = e.js;
            var o = [], a = n.find(".js-header ul.dropdown-menu li label.checkbox"), c = l.toMap(e.libs, function (e) {
                return {key: e, value: !0}
            });
            l.forEach(i.plugins, function (e, t) {
                var i = !!c[e.value];
                (e.checked = i) && o.push(t), s(a[t])[i ? "addClass" : "removeClass"]("checked")
            }), t.pluginSelected = o, t.showPreview(!!t.isInPreview), t.changeMode()
        }, _getData: function B(e) {
            return {languageStr: this._getTabStr(), previewStr: this._getPreviewStr(), pluginStr: this._getPluginStr()}
        }, _getTabStr: function V() {
            var e = this.rawConfig, t = '<ul class="edit-tabs js-tabs clearfix">', i = {};
            return l.forEach(e.languages, function (e) {
                i[e.text] = !0, t += u.execTpl(['<li data-language="#{text}" class="edit-tab-item #{cls}">', '<a href="javascript:void(0);" class="edit-tab-value">#{text}</a>', '<a href="javascript:void(0);" class="ico-fresh js-refresh-code" title="还原模板代码" style="#{style}"></a>', "</li>"].join(""), {
                    text: e.text,
                    cls: e.checked ? "selected" : "",
                    style: e.checked ? "" : "display:none;"
                })
            }), t += "</ul>"
        }, _getPreviewStr: function W() {
            var e = this.rawConfig;
            return l.find(e.languages, function (e) {
                return {html: 1, css: 1}[e.text]
            }) ? '<a href="javascript:void(0);" class="ico-review-code js-go-preview">预览</a>' : ""
        }, _getPluginStr: function q() {
            var r = this, e = r.rawConfig, t = e.plugins = e.plugins || [v.FELib[1], v.FELib[2]];
            if (0 === t.length) return "";
            var i = new p({
                text: "前端插件",
                size: "small",
                cls: "fixed-right",
                options: t,
                clickItemNoHide: !0,
                listeners: {
                    render: function () {
                        var e = this.getEl().find(".dropdown-toggle");
                        e.css("paddingTop", 5).css("paddingBottom", 5)
                    }
                }
            });
            return i._renderOptions = function () {
                if (!this.menuRendered) {
                    var e = this.getEl(), t = l.map(this.rawConfig.options, function (e, t) {
                        return e.checked && r.pluginSelected.push(t), u.execTpl('<li><label class="checkbox #{cls}"><span class="icons"></span> <input type="checkbox" /> #{text}</label></li>', {
                            cls: e.checked ? "checked" : "",
                            text: e.text
                        })
                    }).join("");
                    e.find("ul.dropdown-menu").html(t), this.menuRendered = !0
                }
            }, i.select = function (e) {
                var t = this.rawConfig.options;
                if ((e = l.id(e)) && !(+e >= t.length)) {
                    e = +e;
                    var i = r.pluginSelected, n = !l.contains(i, e);
                    if (n && i.push(e), !n && (i = l.without(i, e)), r.pluginSelected = i, this.menuRendered) return l.forEach(this.itemElList, function (e, t) {
                        s(e).find("label.checkbox")[l.contains(i, t) ? "addClass" : "removeClass"]("checked")
                    });
                    t[e].checked = !n
                }
            }, i.html()
        }, _fixConf: function A(a) {
            var e = l.json(a.supportLang, {}), t = e.input || [], i = e.libs;
            (function n() {
                if (0 < t.length) {
                    var i = l.toMap(a.languages, function (e) {
                        return {key: e.text, value: e}
                    }), e = l.map(t, function (e) {
                        var t = v.FEInput[e];
                        return i[t] || {text: t}
                    });
                    a.languages = e
                }
            })(), function c() {
                var t = ["html", "css", "javascript"], i = {}, n = !1, r = !1;
                l.forEach(a.languages, function (e) {
                    l.contains(t, e.text) && (n = !0, r = r || !!e.checked, i[e.text] = e)
                }), n || (i = l.toMap(t, function (e) {
                    return {key: e, value: {text: e, checked: "javascript" === e}}
                }));
                var o = [];
                l.forEach(t, function (e) {
                    var t = i[e];
                    t && (!r && (t.checked = !0), o.push(t), r = !0)
                }), a.languages = o
            }(), function r() {
                if (i) {
                    var t = [];
                    l.forEach(i, function (e) {
                        v.FELib[e] && t.push(v.FELib[e])
                    }), a.plugins = t
                }
            }()
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/codeHadoopEditor", ["nc", "cpn", "../../base/config", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization"], function (e, i, a) {
    var n = e("nc"), o = e("cpn"), t = n.$, s = n.Component, d = n.Limit, l = n.Clazz, u = n.Base, r = n.Upload,
        c = e("../../base/config"), p = e("../../action/action"), f = o.Popup, m = a.exports = l.create();
    l.mix(m, s, {
        _template: ['<div class="">', '<div class="subject-upload">', '<div class="subject-upload-inner">', '<span class="js-upload-wrap"><a class="btn-upload2 js-upload-btn" href="javascript:void(0);"></a></span>', '<a class="btn-upload2 js-upload-btn-bak" style="display:none;" href="javascript:void(0);"></a>', '<span class="subject-upload-text">上传数据结果文件,仅限 5M 以内的 jar 文件</span>', "</div>", '<div class="subject-upload-inner js-upload-progress" style="display:none;"></div>', "</div>", '<div class="subject-info" style="display:none;">', '<div class="alert alert-danger js-run-info"></div>', "</div>", '<div class="subject-action clearfix">', '<div class="subject-next">', '<a href="javascript:void(0);" class="js-submit-code btn btn-primary">运行</a>', "</div>", "</div>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, i = e.getEl();
                e.uploadFile = null, e.uploadFileId = [], e.progressEl = i.find("div.js-upload-progress"), e.runInfoEl = i.find("div.js-run-info"), e.initUpload()
            }
        }, {
            name: "click .js-submit-code", handler: function (e) {
                this.runCode(e)
            }
        }, {
            name: "click .js-upload-btn-bak", handler: function () {
                f.alert("正在判题中，判题完成后才能再次提交")
            }
        }]
    }, {
        initialize: function b(e) {
            this.fileReset = !1
        }, initUpload: function v() {
            var a = this, n = a.getEl();
            a.upload = new r({
                target: a,
                holderEl: n.find("a.js-upload-btn"),
                type: c.uploadType.data,
                fileType: "*.jar",
                fileSizeLimit: 5,
                fileQueueLimit: 1,
                btn: {
                    image: "//uploadfiles.nowcoder.com/images/20170720/56_1500535196899_0D6F0B229817E61B74168FFDD350D585",
                    width: 150,
                    height: 45
                },
                uploadSuccess: function (e, i) {
                    a.uploadFile = i, a.fileReset = !0, n.find("span.subject-upload-text").html("已上传" + i.fileName + "(" + i.fileSize + ")"), a.runInfoEl.parent().hide()
                }
            })
        }, runCode: function h(e) {
            var l = this, i = l.uploadFile, a = l.rawConfig, n = t(e.currentTarget);
            if (!i) return void f.alert("请先提交文件");
            if (l.isRuning) return void f.alert("正在判题中");
            if (!l.fileReset) return void f.alert("请不要重复提交运行同一文件");
            if (d.mark(n)) return;

            function r() {
                l.hideUpload(!1), l.isRuning = !1, d.clear(n)
            }

            l.fileReset = !1, l.isRuning = !0, l.hideUpload(), l.showMemo("正在提交文件...", "info"), p.codeBigDataRun({
                body: {
                    qid: a.qid,
                    url: i.url
                }, call: function (e) {
                    l.runTimer && window.clearTimeout(l.runTimer), l.showMemo("正在判题...", "info");
                    var s = 0;
                    l.runTimer = setTimeout(function () {
                        var t = arguments.callee;
                        p.codeBigDataStatus({
                            query: {submissionId: e.submissionId}, call: function (e) {
                                var i = e.data || {}, a = i.status;
                                if (3 === a) {
                                    var n = "判题完成\n" + i.memo, o = i.outputUrl;
                                    o && 0 < o.length && (n += "\n\n", u.forEach(o, function (e, i) {
                                        n += '<a href="' + e + '" target="_blank">点击下载输出结果' + (1 < o.length ? i + 1 : "") + "</a>\n"
                                    })), l.showMemo(n, "info"), l.runTimer = null, r()
                                } else l.runTimer = setTimeout(t, 1e3), l.showMemo(0 === s ? "正在选择计算资源..." : "正在判题...\n" + (i.memo || ""), "info"), s++
                            }, error: function () {
                                l.showMemo("出现错误，请重试"), r()
                            }
                        })
                    }, 1e3)
                }, error: function (e) {
                    l.showMemo("出现错误，请重试"), r()
                }
            })
        }, showMemo: function j(e, i) {
            var a = this.runInfoEl, n = "info" === i ? "alert-danger" : "alert-info",
                o = "info" === i ? "alert-info" : "alert-danger";
            a.removeClass(n).addClass(o), a.html(e.replace(/\n/g, "<br />")).show(), a.parent().show()
        }, hideUpload: function g(e) {
            !1 === e ? (t(".js-upload-btn-bak").hide(), t(".js-upload-wrap").css({
                position: "static",
                top: 0
            })) : (t(".js-upload-wrap").css({position: "absolute", top: "-100000px"}), t(".js-upload-btn-bak").show())
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/editorStyle", [], function (o, e, l) {
    l.exports = {css: ['body{font-size:14px;background-color:transparent;font-family:arial,STHeiti,"Microsoft YaHei";line-height:1.8;word-break:break-word;}', "body.show-placeholder::before{color:#ddd;content:attr(data-placeholder);pointer-events:none;position:absolute;white-space:pre;}", "a{color:#25bb9b;text-decoration: none;}", "a:hover{color:#333}", "img{max-width:100%;cursor:-moz-zoom-in;cursor:-webkit-zoom-in;cursor:zoom-in;cursor:url(//static.zhihu.com/static/img/zoom-in.cur)}", "img[data-vote-id]{display:block;margin:10px 0;}", "h1,h2,h3,h4,h5,h6{margin-top:24px;margin-bottom:16px;font-weight:600;line-height:1.25}", "h1{padding-bottom:.3em;font-size:2em;border-bottom:1px solid #eaecef}", "h2{padding-bottom:.3em;font-size:1.5em;border-bottom:1px solid #eaecef}", "h3{font-size:1.25em}", "h4{font-size:1em}", "h6{font-size:.85em;color:#6a737d}", "blockquote,dl,ol,p,pre,table,ul{margin:12px 0}", "ol,ul{padding-left:2em}", "ul{list-style-type:disc}", "li+li{margin-top:.25em}", "ol{list-style-type:decimal}", "ol ol ul,ol ul ul,ul ol ul,ul ul ul{list-style-type:square}", "ol ol,ol ul,ul ol,ul ul{margin-top:0;margin-bottom:0;list-style-type:circle}", "ol ol,ul ol{list-style-type:lower-roman}", "ol ol ol,ol ul ol,ul ol ol,ul ul ol{list-style-type:lower-alpha}", "blockquote{padding:0.25em 1em;color:#6a737d;border-left:2px solid #1abc9c}", "pre{padding:0.25em 1em;overflow:auto;line-height:1.45;background-color:#f6f8fa;border-radius:0 3px 3px 0;border:none;border-left:2px solid #1abc9c}", "em{font-weight:inherit;font-style:italic}", "body>:last-child{margin-bottom:0!important}", "pre{word-wrap:normal}", "pre>code{padding:0;margin:0;font-size:100%;word-break:normal;white-space:pre;background:0 0;border:0}", "pre code,pre tt{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}", "code,tt{padding:.2em .4em;margin:0;font-size:85%;background-color:rgba(27,31,35,.05);border-radius:3px}", "table{display:block;overflow:auto;width:auto;border:none;max-width:none;border-collapse:collapse;}", "table tr{background-color:#fff;border-top:1px solid #c6cbd1}", "table td,table th{padding:6px 13px;border:1px solid #dfe2e5}", "table th{font-weight:600}", "table tr:nth-child(2n){background-color:#f6f8fa}"].join("")}
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupAddSchool", ["nc", "cpn", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization"], function (n, t, e) {
    var i = n("nc"), o = n("cpn"), r = i.$, p = i.Clazz, a = i.Base, c = i.Component, l = i.Limit, u = (i.Str, o.Popup),
        s = o.Select, d = o.Input, v = n("../../action/action"), f = e.exports = p.create();
    p.mix(f, c, {
        _template: '<div><div style="padding:20px 0;text-align:center;font-size:14px;">加载中...</div></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var n = this, t = n.rawConfig;
                n.isMiddle = !!t.isMiddle, n.getCity(function () {
                    n.initContainer(), n.initCpns(), t.val && n.val(t.val), n.popup && n.popup.fixPosition()
                })
            }
        }],
        show: function h(n) {
            var t = new f(n = n || {});
            u.wrap(t, {
                title: "添加学校信息",
                content: t.html(),
                width: 700,
                noUnique: !!n.noUnique,
                okTxt: "提交",
                ok: function () {
                    return t.check() && t.submit(), !0
                },
                cancel: function () {
                },
                close: function () {
                    t.fire("close")
                }
            });
            return t
        }
    }, {
        initContainer: function C() {
            var n = this;
            n.getEl().html(['<div class="pop-authorize-tip" style="width:auto;font-size:14px;">', "提交学校信息后，管理员将于3个工作日内审核，审核期间将不影响简历的正常投递。</br>", "如有以下情况，则该申请将会被拒绝，且除简历以外涉及学校的个人资料将需重新填写学校信息：</br>", "1.重复添加学校信息</br>", "2.新增学校名称不完整或名称错误", "</div>", '<div class="pop-filter-wrap js-filter-box"></div>'].join("")), n.headerEl = n.getEl(".js-filter-box")
        }, initCpns: function m() {
            var e = this, n = e.headerEl, t = function i() {
                return e.cityMap = {}, a.map(e.cityData, function (n, t) {
                    return {text: (e.cityMap[n.name] = n).name, value: n.name, checked: 0 === t}
                })
            }();
            e.countryCpn = new s({
                renderTo: n,
                text: "请选择国家",
                needSearch: 5 < t.length,
                options: t,
                listeners: {
                    change: function () {
                        e.fixCity()
                    }
                }
            }), e.provCpn = new s({
                renderTo: n,
                text: "请选择省份",
                needSearch: !0,
                options: []
            }), e.provCpn.hide(), e.iptCpn = new d({
                cls: "inline-block",
                renderTo: n,
                placeholder: "请输入学校全称"
            }), e.fixCity()
        }, val: function y(n) {
            var t = this;
            if (0 === arguments.length) return {
                country: t.countryCpn.val() || "中国",
                prov: t.provCpn.hidden ? undefined : t.provCpn.val() || "北京",
                name: r.trim(t.iptCpn.val())
            };
            n = n || {}, t.countryCpn.val(n.country || "中国"), t.provCpn.val(n.prov || "北京"), t.iptCpn.val(r.trim(n.name)), t.fixCity()
        }, check: function x() {
            var n = this, t = n.val();
            if (!t.name) return n.iptCpn.errorTips("学校名称不能为空"), !1;
            if (250 < t.name.length) return n.iptCpn.errorTips("学校名称不能超过250个字符"), !1;
            return !0
        }, submit: function g() {
            var t = this, e = t.val(), n = t.getEl();
            if (l.mark(n)) return;
            v.addSchool({
                body: a.extend({isMiddle: t.isMiddle}, e), call: function (n) {
                    t.fire("ok", e), t.popup && t.popup.close()
                }, error: function (n) {
                    t.iptCpn.errorTips(n.msg)
                }, always: function () {
                    l.clear(n)
                }
            })
        }, fixCity: function b() {
            var n = this, t = n.countryCpn.val(), e = n.cityMap[t];
            if (!e) return;
            if (e.provs && 0 < e.provs.length) {
                var i = [];
                a.forEach(e.provs, function (n, t) {
                    i.push({text: n.name, value: n.name})
                }), n.provCpn.replaceOptions(i), n.provCpn.select(0), n.provCpn.show()
            } else n.provCpn.hide()
        }, getCity: function w(e) {
            var i = this;
            v.getSchoolBrief({
                query: {isMiddle: i.isMiddle}, call: function (n) {
                    var t = i.cityData = n.data || [];
                    e && e(t)
                }, error: function (n) {
                    u.alert(n.msg), i.popup.close()
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupAuthPhone", ["nc", "cpn", "../../base/config", "../../bll/loginUtil", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization"], function (t, n, i) {
    var c = t("nc"), a = t("cpn"), e = c.$, o = c.Base, r = c.Clazz, s = c.Component, l = c.Str, p = c.Time,
        u = c.Limit, h = a.Popup, d = a.Input, f = t("../../base/config"), v = t("../../bll/loginUtil"),
        b = t("../../action/action"), m = i.exports = r.create();
    r.mix(m, s, {
        _template: ["<div>", '<p class="pop-verify-tip" style="text-align:center;">#{alertContent}</p>', '<div style="width:400px;margin:0 auto;">', '<div class="form-group">', '<label class="control-label">手机号码</label>', '<div class="control-group form-phone-fill js-account">', '<div class="btn-group js-country"></div>', '<input type="text" placeholder="请输入手机号码">', "</div>", "</div>", '<div class="form-group">', '<label class="control-label">验证码</label>', '<div class="btn-group phone-code">', '<div class="control-group js-captcha"><input type="text" placeholder="请输入验证码"></div>', '<span class="input-group-btn">', '<button class="btn btn-primary js-btn-captcha" style="padding:0 5px;">获取验证码</button>', "</span>", "</div>", "</div>", "</div>", '<div class="pop-phone-tips">', '<div style="text-align:right;">', '<a href="javascript:void(0);" class="link-gray js-phone-used"><i class="icon-question-sign"></i>手机号码已被注册？</a>', "</div>", "</div>", '<a href="javascript:void(0);" class="btn btn-primary btn-lg js-verify" style="display:block;margin:50px auto 0;">确定</a>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this;
                t.initCpn(), t.initCaptcha(), t.initPhoneTips()
            }
        }, {
            name: "click .js-verify", handler: function (t) {
                this.submit()
            }
        }],
        show: function g(t) {
            var n = new m(t = t || {});
            h.wrap(n, {title: "验证手机", content: n.html(), width: 550, hasNoFooter: !0});
            return n
        }
    }, {
        initCpn: function y() {
            var t = this, n = t.getEl(), i = t.cpn = {};
            i.zip = v.initPhoneZip({renderTo: n.find(".js-country")}), i.account = d.transform(n.find(".js-account")), i.captcha = d.transform(n.find(".js-captcha")), i.zip.listen("change", o.bind(t.checkAccount, t)), i.account.listen("blur", o.bind(t.checkAccount, t))
        }, initCaptcha: function j() {
            var t = this, c = t.getEl(".js-btn-captcha"), a = !1, o = 0;

            function n() {
                if (!a) {
                    a = !0;
                    var n = e.trim(t.cpn.zip.val()), i = e.trim(t.cpn.account.val());
                    t.checkAccount(function (t) {
                        !t && (a = !1), t && b.validatePhone({
                            body: {phone: n + i},
                            captcha: {type: f.captcha.sendVerifyCode},
                            call: function (t) {
                                a = !1, function i(n) {
                                    a || (a = !0, c.addClass("btn-default").removeClass("btn-primary"), p.countDown({
                                        second: 60,
                                        call: function (t) {
                                            return o === n && c.html(t + "秒后重新获取"), o !== n
                                        },
                                        end: function () {
                                            o === n && (c.html("重新获取验证码"), c.addClass("btn-primary").removeClass("btn-default"))
                                        }
                                    }))
                                }(++o)
                            },
                            error: function (t) {
                                a = !1, h.alert(t.msg)
                            }
                        })
                    })
                }
            }

            c.on("click", function (t) {
                t.preventDefault(), n()
            }), t.listen("destroy", function i() {
                o++
            })
        }, initPhoneTips: function k() {
            this.getEl().find(".js-phone-used").on("click", function () {
                t.async("./popupPhoneApply", function (t) {
                    t.show({})
                })
            })
        }, val: function C() {
            var t = this.cpn, n = e.trim(t.zip.val()) || "+86", i = e.trim(t.account.val());
            return {phone: n + i, code: e.trim(this.cpn.captcha.val())}
        }, submit: function x() {
            var i = this, c = i.cpn, a = i.rawConfig, o = i.getEl(".js-verify");
            i.check(function (t) {
                if (t && !u.mark(o)) {
                    var n = i.val();
                    b.activePhone({
                        body: n, call: function () {
                            i.popup.close(), h.tips("验证成功"), a.ok && a.ok(n.phone)
                        }, error: function (t) {
                            var n = t.msg || "";
                            -1 !== n.indexOf("验证码") ? c.captcha.setErrorTips(n) : h.alert(t.msg)
                        }, always: function () {
                            u.clear(o)
                        }
                    })
                }
            })
        }, check: function P(n) {
            var t = this.val(), i = this.cpn, c = !0;
            t.code || (i.captcha.setErrorTips("验证码不能为空"), c = !1);
            this.checkAccount(function (t) {
                n && n(c && t)
            })
        }, checkAccount: function w(t) {
            var n = this.accountMap = this.accountMap || {}, i = this.cpn.account, c = e.trim(this.cpn.zip.val()),
                a = e.trim(i.val()), o = n[a];
            if ("+86" === c ? !l.isPhone(a) : !/^\d{3,}$/.test(a)) return i.setErrorTips("请输入正确的手机号码"), t && t(!1);
            if (!0 === o) return i.setErrorTips("该手机号码已经被注册"), t && t(!1);
            if (!1 === o) return i.setSuccess(), t && t(!0);
            b.checkPhone({
                query: {phone: c + a}, call: function () {
                    n[a] = !1, a === e.trim(i.val()) && i.setSuccess(), t && t(!0)
                }, error: function () {
                    n[a] = !0, a === e.trim(i.val()) && i.setErrorTips("该手机号码已经被注册"), t && t(!1)
                }
            })
        }, _getData: function E(t) {
            return {alertContent: t.alertContent || "应国家法律要求，使用该功能时需完成手机号验证。<br />感谢您的支持和理解 ⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄. "}
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupAvatar", ["nc", "cpn", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization"], function (t, i, a) {
    var e = t("nc"), n = t("cpn"), o = e.$, r = e.Component, s = e.DragDrop, d = e.Clazz, l = e.Sys,
        h = (e.Base, n.Popup), c = t("../../action/action"), g = a.exports = d.create();
    d.mix(g, r, {
        _template: ['<div class="change-pop clearfix">', '<div class="avarta-box">', '<div style="position:relative;width:100%;height:100%;overflow:hidden" class="avatar-container">头像加载中</div>', "</div>", '<div class="mini-big clearfix">', '<span class="mini-ico"></span>', '<div class="js-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">', '<div class="ui-slider-segment" style="margin-left: 25%;"></div>', '<div class="ui-slider-segment" style="margin-left: 25%;"></div>', '<div class="ui-slider-segment" style="margin-left: 25%;"></div>', '<div class="ui-slider-segment"></div>', '<div class="ui-slider-segment"></div>', '<div class="ui-slider-segment"></div>', '<div class="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min js-bar" style="width: 0;"></div>', '<a class="ui-slider-handle ui-state-default ui-corner-all js-drag" href="javascript:void(0);" style="left: 0;"></a>', "</div>", '<span class="big-ico"></span>', "</div>", '<div class="submit-btnbox">', '<a class="btn btn-default cancle-btn" href="javascript:void(0);">取消</a>', '<a class="btn btn-primary confirm-btn" href="javascript:void(0);">保存</a>', "</div>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, i = t.info, a = t.rawConfig, e = t.getEl(), n = e.find("div.avatar-container"),
                    r = document.createElement("IMG");
                t.dragEl = e.find(".js-drag"), t.barEl = e.find(".js-bar"), i.bar.width = e.find(".js-slider").width(), r.onload = function () {
                    t.avatarLoaded = !0, i.avatar.width = this.width, i.avatar.height = this.height, t.fixInfo(), t.fixPosition(), n.html("").append(r), t.fire("setScale"), t.fire("setDrag")
                }, r.onerror = function () {
                    alert("头像加载出错，请重试"), t.popup.close()
                }, r.src = a.src, t.avatarEl = r = o(r).css({position: "absolute", left: 0, top: 0})
            }
        }, {
            name: "click a.cancle-btn", type: "bind", handler: function () {
                this.popup.close()
            }
        }, {
            name: "click a.confirm-btn", type: "bind", handler: function () {
                var i = this, a = i.rawConfig;
                if (i.avatarLoaded) {
                    if (!i.avatarSaving) {
                        i.avatarSaving = !0;
                        var t = i.getResult();
                        t.source = a.src, l.out(t), c.saveHead({
                            body: t, call: function (t) {
                                a.call && a.call(t), i.popup.close()
                            }, error: function () {
                                alert("头像保存失败"), i.avatarSaving = !1
                            }
                        })
                    }
                } else alert("请等待头像加载完成")
            }
        }, {
            name: "setScale", type: "custom", handler: function () {
                var i = this, a = i.info;
                if (i.avatarLoaded && !i.setScaled) {
                    i.setScaled = !0;
                    var t = i.getEl();
                    t.find(".js-drag"), t.find(".js-bar");
                    i.scaleDrag = new s({
                        drag: i.dragEl, listeners: [{
                            name: "drag", handler: function () {
                                var t = this._left = a.bar.left + this._moveX - this._downX;
                                t > a.bar.width ? t = a.bar.width : t <= 0 && (t = 0), i.dragEl.css({left: t}), i.barEl.width(t), a.scale = t / a.bar.width, i.fixPosition()
                            }
                        }, {
                            name: "drop", handler: function () {
                                a.bar.left = this._left
                            }
                        }]
                    })
                }
            }
        }, {
            name: "setDrag", type: "custom", handler: function () {
                var t = this, n = t.info;
                if (t.avatarLoaded && !t.setDraged) {
                    t.setDraged = !0;
                    var r = t.avatarEl;
                    t.dragdrop = new s({
                        drag: r, listeners: [{
                            name: "start", handler: function () {
                                var t = 1 + n.scale;
                                this._avatarWidth = n.min.width * t, this._avatarHeight = n.min.height * t
                            }
                        }, {
                            name: "drag", handler: function () {
                                var t = this._avatarWidth, i = this._avatarHeight,
                                    a = n.position.left + this._moveX - this._downX,
                                    e = n.position.top + this._moveY - this._downY;
                                a + t < n.dialog.width && (a = n.dialog.width - t), 0 < a && (a = 0), e + i < n.dialog.height && (e = n.dialog.height - i), 0 < e && (e = 0), r.css({
                                    left: a,
                                    top: e
                                }), this._avatarLeft = a, this._avatarTop = e
                            }
                        }, {
                            name: "drop", handler: function () {
                                n.position.left = this._avatarLeft, n.position.top = this._avatarTop, n.center.left = t.getCenter(this._avatarLeft, this._avatarWidth), n.center.top = t.getCenter(this._avatarTop, this._avatarHeight)
                            }
                        }]
                    })
                }
            }
        }],
        show: function f(i) {
            var a = new g(i);
            h.wrap(a, {
                title: "修改头像", content: a.html(), width: 390, listeners: {
                    close: function () {
                        try {
                            i.close && i.close(), a.fire("close")
                        } catch (t) {
                            l.out(t)
                        }
                    }, destroy: function () {
                        a.scaleDrag = null, a.dragdrop = null, a.info = null
                    }
                }
            });
            return a
        }
    }, {
        initialize: function v(t) {
            this.info = {
                scale: 0,
                dialog: {width: 300, height: 300},
                avatar: {width: 0, height: 0},
                center: {left: 0, top: 0},
                position: {left: 0, top: 0},
                bar: {left: 0, width: 0}
            }
        }, fixInfo: function p() {
            var t = this, i = t.info;
            if (!t.avatarLoaded) return;
            var a = i.avatar.width, e = i.avatar.height, n = i.dialog.width, r = i.dialog.height, o = {}, s = {};
            "width" == (a / n < e / r ? "width" : "height") ? (o.width = n, o.height = o.width * e / a) : (o.height = r, o.width = o.height * a / e);
            s.width = 2 * o.width, s.height = 2 * o.height, i.min = o, i.max = s, i.position.left = (i.dialog.width - o.width) / 2, i.position.top = (i.dialog.height - o.height) / 2, i.center.left = t.getCenter(i.position.left, o.width), i.center.top = t.getCenter(i.position.top, o.height)
        }, fixPosition: function u() {
            var t = this;
            if (!t.avatarLoaded) return;
            var i = t.info, a = 1 + i.scale, e = i.min.width * a, n = i.min.height * a,
                r = i.dialog.width / 2 - i.center.left * e, o = i.dialog.height / 2 - i.center.top * n;
            r + e < i.dialog.width && (r = i.dialog.width - e, i.center.left = t.getCenter(r, e));
            0 < r && (r = 0, i.center.left = t.getCenter(r, e));
            o + n < i.dialog.height && (o = i.dialog.height - n, i.center.top = t.getCenter(o, n));
            0 < o && (o = 0, i.center.top = t.getCenter(o, n));
            t.avatarEl.css({left: r, top: o, width: e, height: n}), i.position.left = r, i.position.top = o
        }, getCenter: function w(t, i) {
            return this.avatarLoaded ? (this.info.dialog.width / 2 - t) / i : void 0
        }, getResult: function m() {
            var t = this.info;
            return {
                scale: (1 + t.scale) * t.min.width / t.avatar.width,
                x: -t.position.left,
                y: -t.position.top,
                width: t.dialog.width,
                height: t.dialog.height
            }
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupCaptcha", ["nc", "cpn", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization", "../../base/config"], function (a, t, e) {
    var c = a("nc"), i = a("cpn"), n = c.$, p = c.Component, r = c.Limit, o = c.Clazz, l = (c.Base, c.Uri), s = i.Popup,
        u = a("../../action/action"), f = a("../../base/config"), v = e.exports = o.create();
    o.mix(v, p, {
        _template: ['<div class="wrapper-content clearfix">', '<div class="form-group verify-box">', '<label class="control-label">验证码</label>', '<div class="control-group">', '<input type="text" class="popupcaptcha-val" />', "</div>", '<img class="verify-pic" alt="验证码图片" src="#{src}" />', '<a href="javascript:void(0);" class="change-verify">看不清，换一张</a>', "</div>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var a = this, t = a.getEl();
                a.ipt = t.find("input.popupcaptcha-val"), a.image = t.find("img.verify-pic"), a.ipt.focus()
            }
        }, {
            name: "click a.change-verify", handler: function (a) {
                var t = this, e = n(a.currentTarget);
                if (!r.mark(e)) {
                    var c = n('<img class="verify-pic" alt="验证码图片" src="' + t.getImgSrc() + '" />');
                    t.image.replaceWith(c), t.image = c, t.ipt.val("").focus(), r.pause(e)
                }
            }
        }, {
            name: "keydown input.popupcaptcha-val", type: "bind", handler: function (a) {
                13 === a.keyCode && this.popup && this.popup.ok()
            }
        }],
        show: function g(t) {
            var e = new v(t = t || {});
            s.wrap(e, {
                title: t.title || "请输入验证码",
                content: e.html(),
                width: 400,
                okTxt: "确定",
                cancelTxt: "取消",
                ok: function () {
                    var a = n.trim(e.ipt.val());
                    if (!a) return e.ipt.focus(), !0;
                    t.call && t.call({code: a})
                },
                cancel: function () {
                    t.cancel && t.cancel()
                }
            });
            return e
        }
    }, {
        getImgSrc: function m() {
            var a = this.rawConfig, t = a.type || f.captcha.refAnswer,
                e = a.url || u.getCaptchaUrl({params: {type: t}});
            return l.addParam({t: (new Date).getTime()}, e)
        }, _getData: function d(a) {
            return {src: this.getImgSrc()}
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupCollect", ["nc", "cpn", "../tagInput", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization"], function (t, n, i) {
    var a = t("nc"), e = t("cpn"), c = (a.$, a.Component), o = a.Clazz, s = a.Base, p = a.Str, r = e.Popup,
        l = t("../tagInput"), u = t("../../action/action"), d = i.exports = o.create();
    o.mix(d, c, {
        _template: '<div><div style="font-size:14px;text-align:center;">数据加载中...</div></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var i = this, a = i.getEl();
                i.fetchTags(function (t, n) {
                    a.html(""), i.initCpn(t, n), i.initBtn(), i.popup.fixPosition()
                })
            }
        }],
        show: function f(n) {
            var i = new d(n = n || {});
            r.wrap(i, {
                title: n.isEdit ? "修改收藏" : "收藏成功",
                content: i.html(),
                width: 630,
                hasNoFooter: !!n.isEdit,
                ok: function () {
                    if (!i.tagInput.check()) return !0;
                    var t = s.uniq(i.tagInput.val());
                    n.ok && n.ok(t)
                },
                cancel: function () {
                },
                listeners: {cancel: n.cancel, close: n.close}
            });
            return i
        }
    }, {
        initCpn: function v(t, n) {
            var i = this, a = i.getEl();
            i.tagInput = new l({
                renderTo: a, common: s.map(n, function (t) {
                    return {text: t, value: t}
                }), value: s.map(t, function (t) {
                    return {text: t, value: t}
                }), listeners: {
                    change: function () {
                        i.fire("change")
                    }
                }
            })
        }, initBtn: function g() {
            var t = this.rawConfig, n = this.getEl();
            t.isEdit && n.append(['<div class="pop-collect-tag" style="margin-top:20px;">', '<a href="javascript:void(0);" class="btn btn-primary confirm-btn">修改收藏标签</a>', '<div class="cut-line"><span class="cut-txt">或者</span></div>', '<a href="javascript:void(0);" class="btn btn-warn cancle-btn">删除收藏</a>', "</div>"].join(""))
        }, fetchTags: function h(a) {
            var n = this, i = n.rawConfig, t = {id: i.entityId, type: i.entityType};
            i.isEdit && (t.isEdit = !0), u.getFollowData({
                query: t, call: function (t) {
                    var n = p.split(t.data.allTags, ","), i = p.split(t.data.draftTags, ",");
                    a && a(i, n)
                }, error: function (t) {
                    i.isEdit && (n.popup.close(), r.alert(t.msg))
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupCommon", ["nc", "cpn", "../../base/config"], function (t, e, n) {
    var a = t("nc"), i = t("cpn"), r = a.$, o = a.Base, c = i.Popup, s = i.Input, l = t("../../base/config");
    n.exports = {
        wx: function d(t, e) {
            if (t) return new c({
                title: "分享到微信",
                noUnique: e,
                width: 320,
                content: ['<div class="avarta-box">', '<img height="200px" style="display:block;margin:0 auto;" src="', t, '" />', '<div style="text-align:center;font-size:14px;margin-top:20px;">微信扫一扫，点击手机屏幕右上角分享</div>', "<div>"].join("")
            })
        }, ac: function p(t) {
            var e = this, n = t.nextUrl || "";
            t.share;
            return new c({
                title: "恭喜通过本题",
                content: ['<div class="pop-content clearfix">', '<div class="pop-course">', '<div class="pop-c-main"><img src="//static.nowcoder.com/images/res/course/add-jy.png" >', '<span class="pop-c-tip">恭喜你通过本题</span>', '<div class="pop-c-result">', "<p>运行时间：", t.seconds, "ms</p>", "<p>占用内存：", t.memory, "k</p>", " </div>", '<dl class="pop-clock-share">', "<dt>同步到：</dt>", '<dd><a href="/share?from=question&to=weibo&id=', t.uuid, '" class="share-wb" target="_blank"></a></dd>', '<dd><a href="/share?from=question&to=qq&id=', t.uuid, '" class="share-tx" target="_blank"></a></dd>', '<dd><a href="javascript:void(0);" class="share-wx"></a></dd>', " </dl>", "</div>", "" !== n ? '<a href="' + n + '" class="btn btn-primary js-go-next">进入下一题</a>' : "", '<a href="', t.answerUrl, '" class="btn btn-primary" target="_blank">分享解题思路</a>', "</div>", "</div>"].join(""),
                listeners: {
                    "click a.share-wx": {
                        handler: function () {
                            e.wx("//www.nowcoder.com/qr/question/" + t.uuid)
                        }
                    }
                }
            })
        }, ipt: function u(t, e, n, a, i) {
            return new c({
                title: t || "提示",
                width: 530,
                content: ['<div class="pop-recovery-content">', e ? '<p class="pop-tip">' + e + "</p>" : "", '<div class="control-group js-ipt" style="width:100%;"><textarea class="pop-recovery-txt"', n ? " placeHolder=" + n : "", ' style="width:97%;padding:0.5% 1%;height:120px;margin:10px auto;resize:none;"></textarea></div>', "</div>"].join(""),
                render: function () {
                    var t = this.ipt = s.transform(this.getEl("div.js-ipt"));
                    i && t.listen("change", function () {
                        i(t, t.val())
                    })
                },
                ok: function () {
                    var t = this.ipt, e = t.val();
                    return !(!i || i(t, e)) || (i || e) && a && a.call(this, e, t)
                },
                close: function () {
                }
            })
        }, selectJob: function h(t, e) {
            var s = l.jobs, n = o.toMap(t, function (t) {
                return {key: t, value: !0}
            }), a = "";
            o.forEach(s, function (t, e) {
                a += '<a class="tag-label ' + (n[t] ? "selected" : "") + '" href="javascript:void(0);" data-name="' + e + '">' + e + "</a> "
            }), new c({
                title: "职业方向", content: a, noUnique: !0, render: function () {
                    var t = this.getEl();
                    t.on("click", "a.tag-label", function (t) {
                        var e = r(t.currentTarget);
                        e[e.hasClass("selected") ? "removeClass" : "addClass"]("selected")
                    })
                }, ok: function () {
                    var t = this.getEl(), a = [], i = [];
                    if (o.forEach(t.find("a.selected"), function (t) {
                        var e = r.trim(r(t).attr("data-name")), n = s[e];
                        n && a.push(n), n && i.push(e)
                    }), 0 === i.length) return c.error("请选择职业方向"), !0;
                    e && e(a, i)
                }, cancel: function () {
                }
            })
        }
    }
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupCompleteAuth", ["nc", "cpn", "../../bll/loginUtil", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization", "../../base/config", "../../bll/bll", "../../bll/uploadRemote"], function (c, t, n) {
    var a = c("nc"), i = c("cpn"), p = a.$, e = a.Component, o = a.Limit, s = a.Clazz, l = (a.Base, a.Str), r = i.Popup,
        h = i.Input, u = c("../../bll/loginUtil"), v = c("../../bll/bll"), d = c("../../action/action"),
        f = n.exports = s.create();
    s.mix(f, e, {
        _template: ["<div>", "#{avatar}", '<ul class="complete-tabs js-tab">', '<li class="selected">注册新账号</li>', "<li>绑定已有账号</li>", "</ul>", '<div class="account-form clearfix">', '<div class="control-group form-phone-fill js-phone">', '<div class="btn-group js-country">', '<button class="btn btn-default dropdown-toggle">中国+86</button>', "</div> ", '<input type="text" placeholder="请输入手机号码">', "</div>", '<div class="form-group">', '<div class="control-group js-account"><input type="text" placeholder="请输入邮箱/手机号码"></div>', "</div>", '<div class="form-group" style="text-align:left;">', '<div class="btn-group phone-code">', '<div class="control-group js-captcha"><input type="text" placeholder="请输入验证码"></div>', '<span class="input-group-btn"><button class="btn btn-primary js-btn-captcha" style="padding:0 5px;">获取验证码</button></span>', "</div>", "</div>", '<div class="form-group change-account js-change-type">', '<a href="javascript:void(0);" class="link-green">海外手机号</a>', "</div>", "</div>", '<a href="javascript:void(0);" class="btn btn-primary btn-lg js-submit">保存</a>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, n = t.rawConfig;
                t.initCpn(), t.initCaptcha(), t.initChangeType(), p.trim(n.avatar) && t.initAvatar(), t.changeType(n.type)
            }
        }, {
            name: "click .js-submit", handler: function () {
                this.submit()
            }
        }],
        show: function m(t) {
            var n = new f(t = t || {}), a = r.wrap(n, {
                title: "10s补全资料，解锁全部功能。",
                width: 550,
                content: n.html(),
                hasNoFooter: !0,
                cancel: t.cancelCb,
                close: t.closeCb
            });
            return a.popupContent.addClass("pop-complete").css("padding", "20px"), a.fixPosition(), n
        }
    }, {
        initialize: function b(t) {
        }, initCpn: function g() {
            var t = this.getEl(), n = this.cpn = {};
            n.zip = u.initPhoneZip({renderTo: t.find(".js-country")}), n.phone = h.transform(p(".js-phone")), n.account = h.transform(p(".js-account")), n.captcha = h.transform(p(".js-captcha"))
        }, initCaptcha: function y() {
            var a = this, n = (a.getEl(), a.cpn);
            u.initCaptcha({
                cpn: a, btn: p(".js-btn-captcha"), isPhone: function () {
                    return a.isPhone()
                }, check: function (t) {
                    var n = a.isNew();
                    n && a.checkPhone(t), !n && t && t(a.checkBind(!0))
                }, val: function () {
                    a.isPhone();
                    var t = "bind" !== a.type;
                    return t ? p.trim(n.zip.val()) + p.trim(n.phone.val()) : p.trim(n.account.val())
                }
            })
        }, initChangeType: function C() {
            var i = this, t = i.getEl();
            t.on("click", ".js-tab li", function (t) {
                var n = p(t.currentTarget), a = n.index();
                i.changeType(0 === a ? "" : "bind")
            }), t.on("click", ".js-change-type a", function (t) {
                i.changeType("oversea" === i.type ? "bind" : "oversea")
            })
        }, initAvatar: function j() {
            var n = p(".js-avatar");
            v.avatar({
                el: n, call: function (t) {
                    n.find("img").attr("src", t), p("div.nowcoder-header div.img-box img").attr("src", t)
                }
            })
        }, changeType: function w(t) {
            var n = this;
            if (t = p.trim(t) || "new", n.type === t) return;
            n.type = t;
            var a = n.getEl(), i = n.cpn, e = n.isNew(), c = "bind" !== t, o = a.find(".js-tab").find("li");
            o.removeClass("selected"), p(o[e ? 0 : 1]).addClass("selected");
            var s = a.find(".js-change-type"), r = s.find("a");
            s[e ? "hide" : "show"](), r.html("oversea" === n.type ? "国内账号" : "海外手机号"), n.clear(), i.phone.getEl()[c ? "show" : "hide"](), i.account.getEl().parent()[c ? "hide" : "show"](), n.stopCapcha()
        }, val: function P() {
            var t = this.cpn, n = this.isPhone(), a = "bind" !== this.type, i = {code: p.trim(t.captcha.val())};
            return i[n ? "phone" : "email"] = a ? p.trim(t.zip.val()) + p.trim(t.phone.val()) : p.trim(t.account.val()), i
        }, submit: function T() {
            var a = this, t = a.rawConfig, n = (a.cpn, p(".js-submit"));

            function i() {
                t.callCb && t.callCb(a.type), !t.callCb && window.location.reload()
            }

            a.clear(), function e(t) {
                var n = a.isNew();
                n && a.checkNew(t), !n && t && t(a.checkBind())
            }(function (t) {
                t && !o.mark(n) && d[a.isPhone() ? "activeOAuthPhone" : "activeEmail"]({
                    body: a.val(),
                    call: function (t) {
                        a.popup.close();
                        var n = (t.data || {}).isNew;
                        r.tips("操作成功", function () {
                            n ? c.async("./popupCompleteInfo", function (t) {
                                t.show({closeCb: i})
                            }) : i()
                        })
                    },
                    error: function (t) {
                        var n = t.msg || "";
                        -1 !== n.indexOf("验证码") ? a.cpn.captcha.setErrorTips(n) : r.alert(n)
                    },
                    always: function () {
                        o.clear(n)
                    }
                })
            })
        }, checkNew: function k(n) {
            var t = this.cpn, a = !0;
            p.trim(t.captcha.val()) || (t.captcha.setErrorTips("验证码不能为空"), a = !1);
            this.checkPhone(function (t) {
                n && n(a && t)
            })
        }, checkBind: function x(t) {
            var n = this.cpn, a = this.isPhone(), i = "oversea" === this.type, e = i ? p.trim(n.zip.val()) : "",
                c = p.trim(n.account.val()), o = p.trim(n.phone.val()), s = !0;
            if (c || i) {
                var r = "";
                i ? r = ("+86" !== e ? /^\d{3,}$/.test(o) : l.isPhone(o)) ? "" : "请输入正确的手机号码" : (a && (r = l.isPhone(c) ? "" : "请输入正确的手机号码"), !a && (r = l.isEmail(c) ? "" : "请输入正确的邮箱")), n[i ? "phone" : "account"][r ? "setErrorTips" : "setNone"](r), s = s && !r
            } else n.account.setErrorTips("请输入正确的邮箱或手机号码"), s = !1;
            if (t) return s;
            p.trim(n.captcha.val()) || (n.captcha.setErrorTips("验证码不能为空"), s = !1);
            return s
        }, checkPhone: function E(t) {
            var n = this.cpn;
            u.checkPhone({zip: n.zip, phone: n.phone, call: t})
        }, stopCapcha: function N() {
            var t = this.getEl(".js-btn-captcha");
            this.fire("STOP_CAPTCHA_COUNTING"), t.removeClass("btn-default").addClass("btn-primary").html("获取验证码")
        }, clear: function z() {
            var t = this.cpn;
            t.phone.setNone(), t.account.setNone(), t.captcha.setNone()
        }, isNew: function A() {
            return "bind" !== this.type && "oversea" !== this.type
        }, isPhone: function B() {
            var t = p.trim(this.cpn.account.val());
            return "bind" !== this.type || /^\d+$/.test(t)
        }, _getData: function O(t) {
            var n = p.trim(t.avatar);
            return {avatar: n ? ['<div class="complete-avatar">', '<a class="avatar-pic js-avatar" href="javascript:void(0);">', '<img src="' + n + '" height="80" width="80">', '<div class="change-photo"></div>', "</a>", "</div>"].join("") : ""}
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupCompleteInfo", ["nc", "cpn", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization", "../../base/config", "../../bll/loginUtil", "./popupCommon"], function (i, o, e) {
    var n = i("nc"), t = i("cpn"), a = n.$, r = n.Component, l = n.Limit, s = n.Clazz, c = n.Base, m = n.Str,
        u = t.Popup, p = t.Input, d = t.Select, f = i("../../action/action"), v = i("../../base/config"),
        h = i("../../bll/loginUtil"), b = i("./popupCommon"), j = e.exports = s.create();
    s.mix(j, r, {
        _template: '<div><div style="font-size:14px;padding:20px;text-align:center;">加载中...</div></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var o = this;
                o.fetchData(function (i) {
                    o.initContainer(), o.initCpn(), o.popup.fixPosition(), o.val(i)
                })
            }
        }, {
            name: "click .js-submit", handler: function () {
                this.submit()
            }
        }],
        show: function g(i) {
            var o = new j(i = i || {});
            u.wrap(o, {title: "10s补全资料，解锁全部功能。", width: 520, content: o.html(), hasNoFooter: !0, close: i.closeCb});
            return o
        }
    }, {
        initialize: function E(i) {
            this.showEmail = !!i.showEmail, this.jobIds = []
        }, initContainer: function w() {
            this.getEl().html(['<div class="pop-info-complete clearfix">', '<div class="form-group"><div class="control-group js-name"><input type="text" placeholder="昵称" /></div></div>', this.showEmail ? '<div class="form-group"><div class="control-group js-email"><input type="text" placeholder="邮箱" /></div></div>' : "", '<div class="form-group js-edu"></div>', '<div class="form-group"><div class="control-group js-school"><input type="text" placeholder="你的学校"></div></div>', '<div class="form-group js-workTime"></div>', '<div class="form-group"><div class="control-group js-job"><input type="text" placeholder="感兴趣的职业方向"></div></div>', '<a href="javascript:void(0);" class="btn btn-primary btn-lg js-submit">确定</a>', "</div>"].join(""))
        }, initCpn: function k() {
            var e = this, i = e.getEl(), n = e.cpn = {};
            n.name = p.transform(i.find(".js-name")), e.showEmail && (n.email = p.transform(i.find(".js-email"))), n.school = p.transform(i.find(".js-school")), n.edu = new d({
                renderTo: i.find(".js-edu"),
                text: "最高学历",
                options: c.map(v.eduNames, function (i) {
                    return {text: i, value: i}
                })
            });
            var o = (new Date).getFullYear();
            n.workTime = new d({
                renderTo: i.find(".js-workTime"),
                text: "毕业年份",
                options: c.map(c.range(4, 1980 - o, -1), function (i) {
                    return {text: o + i, value: o + i}
                })
            }), n.job = p.transform(i.find(".js-job")), n.name.listen("blur", c.bind(e.checkName, e)), n.job.getEl().on("click", function () {
                b.selectJob(e.jobIds, function (i, o) {
                    e.jobIds = i, n.job.val(o.join("、"))
                })
            }), h.initEduSchool({edu: n.edu, school: n.school})
        }, val: function T(i) {
            var o = this, e = o.cpn;
            if (0 === arguments.length) return {
                name: a.trim(e.name.val()),
                eduLevel: a.trim(e.edu.val()),
                school: a.trim(e.school.val()),
                workTime: a.trim(e.workTime.val()),
                job: o.jobIds.join(",")
            };
            e.name.val(a.trim(i.name)), e.school.val(a.trim(i.school)), e.edu.val(a.trim(i.eduLevel)), +i.workTime && e.workTime.val(+i.workTime), o.jobIds = m.split(i.job, ",");
            var n = {};
            c.forEach(v.jobs, function (i, o) {
                n[i] = o
            });
            var t = c.map(o.jobIds, function (i) {
                return n[i]
            });
            e.job.val(t.join("、"))
        }, submit: function x() {
            var e = this, n = e.cpn, o = e.getEl(".js-submit");
            e.check(function (i) {
                i && !l.mark(o) && f.completeness({
                    body: e.val(), call: function (i) {
                        var o = e.rawConfig;
                        if (!e.showEmail) return o.callCb && o.callCb(), void e.popup.close();
                        f.updateEmail({
                            body: {email: a.trim(n.email.val())}, call: function () {
                                o.callCb && o.callCb(), e.popup.close()
                            }, error: function (i) {
                                n.email.setErrorTips(i.name || i.msg)
                            }
                        })
                    }, error: function (i) {
                        n.name.setErrorTips(i.name || i.msg)
                    }, always: function () {
                        l.clear(o)
                    }
                })
            })
        }, fetchData: function I(n) {
            var o = this.getEl();
            f.getBasicInfo({
                type: "GET", call: function (i) {
                    var o = i.data, e = o.basicInfo.educationInfo || "";
                    n && n({
                        name: o.basicInfo.nickname,
                        school: /填写/.test(e) ? "" : e,
                        eduLevel: o.additionInfo.eduLevel,
                        workTime: o.additionInfo.workTime,
                        job: o.additionInfo.job
                    })
                }, error: function (i) {
                    o.html('<div style="font-size:14px;padding:20px;text-align:center;">' + i.msg + "</div>")
                }
            })
        }, check: function C(o) {
            var e = this, i = e.cpn, n = e.val(), t = !0;
            e.showEmail && !m.isEmail(a.trim(i.email.val())) && (i.email.setErrorTips("请填写正确的邮箱"), t = !1);
            n.eduLevel || (i.edu.error(), t = !1);
            n.school || (i.school.setErrorTips("学校不能为空"), t = !1);
            n.workTime || (i.workTime.error(), t = !1);
            0 === e.jobIds.length && (i.job.setErrorTips("感兴趣的职业不能为空"), t = !1);
            e.checkName(function (i) {
                (!t || !i) && o && o(!1), t && i && e.checkEmail(function (i) {
                    o && o(i)
                })
            })
        }, checkName: function y(e) {
            var n = this.cpn.name, t = this.nameMap = this.nameMap || {}, r = a.trim(n.val()), i = t[r];
            if (!r) return n.setErrorTips("起一个响亮的名字吧"), e && e(!1);
            if (25 < r.length) return n.setErrorTips("昵称不能大于25字符"), e && e(!1);
            if (!0 === i) return n.setErrorTips("昵称已经被占用"), e && e(!1);
            if (!1 === i) return e && e(!0);
            f.checkNickName({
                query: {nickname: r}, call: function () {
                    t[r] = !1, e && e(!0)
                }, error: function (i) {
                    var o = 2 === i.code;
                    o && n.setErrorTips("昵称已经被占用"), t[r] = o || undefined, !o && e && e(!0)
                }
            })
        }, checkEmail: function N(e) {
            if (!this.showEmail) return e && e(!0);
            var i = this.cpn.email, n = this.emailMap = this.emailMap || {}, t = a.trim(i.val()), o = n[t];
            if (!m.isEmail(t)) return i.setErrorTips("请填写正确的邮箱"), e && e(!1);
            if (!0 === o) return r(e);
            if (!1 === o) return e && e(!0);

            function r(i) {
                h.popupBindError({
                    isEmail: !0, noUnique: !0, remove: function () {
                        i && i(!0)
                    }, retain: function () {
                        i && i(!1)
                    }
                })
            }

            f.checkEmail({
                query: {email: t}, call: function () {
                    n[t] = !1, e && e(!0)
                }, error: function (i) {
                    var o = 1 === i.code;
                    n[t] = o || undefined, o && r(e), !o && e && e(!0)
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupGtCode", ["nc", "cpn", "../../bll/captcha", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization"], function (e, t, n) {
    var c = e("nc"), i = e("cpn"), o = (c.$, c.Component), a = c.Clazz, p = (c.Base, i.Popup),
        l = e("../../bll/captcha"), r = n.exports = a.create();
    a.mix(r, o, {
        _template: '<div><div style="margin:0 auto;width:300px;" class="js-gt-code"></div></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, t = e.getEl();
                e.gt = new l({el: t.find("div.js-gt-code"), type: e.rawConfig.type, product: "embed"}), e.checkGt()
            }
        }],
        show: function s(e) {
            var t = new r(e = e || {});
            p.wrap(t, {
                title: e.title || "请完成验证",
                content: t.html(),
                width: 500,
                height: 220,
                noUnique: !0,
                hasNoFooter: !0,
                listeners: {
                    destroy: function () {
                        window.clearTimeout(t.checkGtTimer), !t.isInputCode && e.cancel && e.cancel()
                    }
                }
            });
            return t
        }
    }, {
        checkGt: function u() {
            var t = this, n = t.gt, c = t.rawConfig;
            t.checkGtTimer = window.setTimeout(function () {
                var e = n.check();
                e ? window.setTimeout(function () {
                    t.isInputCode = !0, t.popup && t.popup.close(), c.call && c.call(e)
                }, 500) : t.checkGtTimer = window.setTimeout(arguments.callee, 1e3)
            }, 1500)
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupLogin", ["nc", "cpn", "../../base/config", "../../base/env", "../../action/action", "../../action/ajax", "../../base/bridge", "../../base/localization", "../../bll/loginUtil"], function (e, t, i) {
    var n = e("nc"), a = e("cpn"), s = n.$, c = (n.Sys, n.Base), o = n.Component, r = n.Limit, l = n.Clazz, p = n.Str,
        d = n.Uri, u = n.Time, h = a.Popup, g = a.Input, v = n.Dom, f = e("../../base/config"), b = e("../../base/env"),
        m = e("../../action/action"), w = e("../../bll/loginUtil"), y = i.exports = l.create();
    l.mix(y, o, {
        _template: '<div><div style="padding:20px;text-align:center;font-size:14px;">加载中...</div></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, i = t.rawConfig, e = t.getEl();
                t.initEnv(function () {
                    t.initContainer(), t.loginDv = e.find(".js-login"), t.registerDv = e.find(".js-register"), t.remberChk = e.find(".js-rember"), t.initCpn(i), t.initMode(i), t.initAuthMore(i), t.initCaptcha(), t.initSubmit()
                })
            }
        }, {
            name: "click .js-login-type", handler: function (t) {
                var i = s(t.currentTarget), e = s.trim(i.attr("data-type"));
                this.changeLoginType(e)
            }
        }],
        show: function j(i) {
            var e = new y(i);
            h.wrap(e, {
                title: e.toRegister ? "注册" : "登录",
                content: e.html(),
                width: 770,
                listeners: {
                    close: function () {
                        try {
                            i.close && i.close(), e.fire("close")
                        } catch (t) {
                        }
                    }
                }
            });
            return e
        }
    }, {
        initEnv: function C(t) {
            var e = this;
            t && t(), e.getPublicKey(null, !0), e.getOAuthUrl(function () {
                if (e.oauthStatus) {
                    var t = e.getEl(".nc-js-action-oauth.login-wb"), i = s.trim(t.attr("data-href"));
                    i = d.addParam({state: e.oauthStatus}, i), t.attr("data-href", i)
                }
            })
        }, initContainer: function P() {
            var t = this.getEl(), i = this.getContainerHtml();
            t.html(i)
        }, initCpn: function k(t) {
            var i = this, e = i.getEl(), n = i.loginDv, a = i.registerDv, o = i.loginCpn = {}, r = i.registerCpn = {};
            o.account = g.transform(n.find(".js-account")), o.pwd = g.transform(n.find(".js-pwd")), o.zip = w.initPhoneZip({renderTo: n.find(".js-country")}), o.accountPhone = g.transform(n.find(".js-account-phone")), o.captcha = g.transform(n.find(".js-captcha")), r.zip = w.initPhoneZip({
                renderTo: e.find(".js-country"),
                showNow: !0
            }), r.account = g.transform(a.find(".js-account")), r.captcha = g.transform(a.find(".js-captcha")), r.pwd = g.transform(a.find(".js-pwd")), r.pwd2 = g.transform(a.find(".js-pwd-repeat")), r.zip.listen("change", c.bind(i.checkRegisterAccount, i)), r.account.listen("blur", c.bind(i.checkRegisterAccount, i)), r.pwd.listen("blur", c.bind(i.checkRegisterPwd, i)), r.pwd2.listen("blur", c.bind(i.checkRegisterPwd, i))
        }, initMode: function E(t) {
            var e = this, i = e.getEl();
            e.changeMode(!1 === t.register ? "login" : "register"), e.changeLoginType("password"), i.on("click", ".js-mode", function (t) {
                var i = s(t.currentTarget);
                e.changeMode(s.trim(i.attr("data-type")))
            })
        }, initAuthMore: function T() {
            var t = this.getEl("div.js-auth-more");
            v.hoverToggle({
                el: t, duration: 250, enter: function () {
                    t.addClass("open")
                }, leave: function () {
                    t.removeClass("open")
                }
            })
        }, initCaptcha: function x() {
            var a = this, o = a.registerCpn, r = a.loginCpn;
            a.registerAuthCaptcha = w.initCaptcha({
                btn: a.registerDv.find(".js-btn-captcha"),
                cpn: a,
                isPhone: !0,
                check: c.bind(a.checkRegisterAccount, a),
                val: function () {
                    var t = s.trim(o.zip.val()), i = s.trim(o.account.val());
                    return t + i
                }
            }), w.initCaptcha({
                btn: a.loginDv.find(".js-btn-captcha"), cpn: a, isPhone: !0, check: function (n) {
                    w.checkPhone({
                        zip: r.zip, phone: r.accountPhone, needRegister: !0, call: function (t, i) {
                            if (i.isError || i.isRegister) return n && n(!i.isError);
                            r.accountPhone.setNone();
                            var e = h.confirm("该手机还没注册，是否立即注册？", function () {
                                a.changeMode("register"), o.zip.val(r.zip.val()), o.account.val(r.accountPhone.val()), o.captcha.val(""), a.registerAuthCaptcha && a.registerAuthCaptcha.send(), n && n(!1)
                            }, function () {
                                n && n(!1)
                            });
                            e.okBtn.html("立即注册"), e.cancelBtn.html("暂不注册")
                        }
                    })
                }, val: function () {
                    var t = s.trim(r.zip.val()), i = s.trim(r.accountPhone.val());
                    return t + i
                }
            })
        }, initSubmit: function z() {
            var i = this;
            i.getEl().find("form").on("submit", function (t) {
                t.preventDefault(), i[i.isRegister ? "submitRegister" : "submitLogin"]()
            }), i.loginDv.find(".js-btn-submit").on("click", c.bind(i.submitLogin, i)), i.registerDv.find(".js-btn-submit").on("click", c.bind(i.submitRegister, i))
        }, val: function _(t) {
            var i = this, e = i.loginCpn, n = i.registerCpn;
            if (i.isRegister) {
                var a = s.trim(n.zip.val()) || "+86", o = s.trim(n.account.val()), r = {
                    zip: a,
                    phone: (t ? a : "") + o,
                    code: s.trim(n.captcha.val()),
                    password: s.trim(n.pwd.val()),
                    pwd2: s.trim(n.pwd2.val())
                };
                return t && (r.cipherPwd = i.encrypt(r.password), delete r.zip, delete r.password, delete r.pwd2), r
            }
            var c = "password" === i.loginType, a = s.trim(e.zip.val()) || "+86",
                o = s.trim(e[c ? "account" : "accountPhone"].val()), r = {
                    zip: a,
                    email: t && !c ? (a || "") + o : o,
                    code: s.trim(e.captcha.val()),
                    pwd: s.trim(e.pwd.val()),
                    remember: i.remberChk.prop("checked") ? "true" : "false"
                };
            t && (c && (r.cipherPwd = i.encrypt(r.pwd), delete r.code), delete r.zip, delete r.pwd);
            return r
        }, submitLogin: function R() {
            var e = this, i = e.loginDv.find(".js-btn-submit"), n = "password" === e.loginType;
            e.clear(), e.check(function (t) {
                e.getPublicKey(function () {
                    t && !r.mark(i) && m.login({
                        body: e.val(!0), captcha: {type: f.captcha.login}, call: function (t) {
                            var i = e.rawConfig;
                            i.loginCb && i.loginCb(), !i.loginCb && window.location.reload()
                        }, error: function (t) {
                            if (n) {
                                var i = 4 === t.code;
                                i && e.loginCpn.pwd.setErrorTips(t.msg || "密码不正确，请重试！"), !i && e.loginCpn.account.setErrorTips(t.msg)
                            } else e.loginCpn.accountPhone.setErrorTips(t.msg)
                        }, always: function () {
                            r.clear(i)
                        }
                    })
                })
            })
        }, submitRegister: function S() {
            var e = this, i = e.registerDv.find(".js-btn-submit");
            e.clear(), e.check(function (t) {
                e.getPublicKey(function () {
                    t && !r.mark(i) && m.register({
                        body: e.val(!0), call: function (t) {
                            var i = e.rawConfig;
                            i.registerCb && i.registerCb(), !i.registerCb && window.location.reload()
                        }, error: function (t) {
                            var i = t.msg || "";
                            -1 !== i.indexOf("密码") ? (e.registerCpn.pwd.setErrorTips(i), e.registerCpn.pwd2.setErrorTips(i)) : -1 !== i.indexOf("验证码") ? e.registerCpn.captcha.setErrorTips(i) : h.alert(i)
                        }, always: function () {
                            r.clear(i)
                        }
                    })
                })
            })
        }, stopCapcha: function D() {
            this.fire("STOP_CAPTCHA_COUNTING")
        }, changeMode: function H(t) {
            var i = this, e = "register" == (t = "login" !== t ? "register" : "login");
            e !== i.isRegister && (i.isRegister = e, i.loginDv[e ? "hide" : "show"](), i.registerDv[e ? "show" : "hide"](), i.popup.changeTitle(e ? "注册" : "登录"), i.clear(), i.popup.fixPosition())
        }, changeLoginType: function A(t) {
            var i = this.loginCpn, e = "sms" !== t, n = this.getEl();
            t = this.loginType = e ? "password" : "sms";
            var a = [{cpn: i.account, show: e}, {cpn: i.pwd, show: e}, {cpn: i.accountPhone, show: !e}, {
                cpn: i.captcha,
                show: !e
            }];
            c.forEach(a, function (t) {
                t.cpn.getEl().closest(".form-group")[t.show ? "show" : "hide"]()
            }), n.find(".js-login-type").hide(), n.find(".js-login-type[data-type=" + (e ? "sms" : "password") + "]").show(), this.popup.fixPosition()
        }, clear: function N() {
            c.forEach(this.loginCpn, function (t) {
                t.setNone && t.setNone()
            }), c.forEach(this.registerCpn, function (t) {
                t.setNone && t.setNone()
            })
        }, check: function K(i) {
            var t = this, e = t.val(), n = t.loginCpn, a = t.registerCpn, o = t.isRegister,
                r = "password" === t.loginType, c = !0;
            if (o) return e.code || (a.captcha.setErrorTips("验证码不能为空"), c = !1), c = t.checkRegisterPwd(!0) && c, t.checkRegisterAccount(function (t) {
                i && i(c && t)
            });
            r ? (p.isEmail(e.email) || p.isPhone(e.email) || /^\+\d+$/.test(e.email) || (n.account.setErrorTips("请输入正确的邮箱或手机"), c = !1), e.pwd || (n.pwd.setErrorTips("密码不能为空"), c = !1)) : (("+86" === e.zip ? p.isPhone(e.email) : /\d+$/.test(e.email)) || (n.accountPhone.setErrorTips("请输入正确的手机"), c = !1), e.code || (n.captcha.setErrorTips("验证码不能为空"), c = !1));
            i && i(c)
        }, checkRegisterAccount: function q(t) {
            w.checkPhone({zip: this.registerCpn.zip, phone: this.registerCpn.account, call: t})
        }, checkRegisterPwd: function L(t) {
            var i = this.registerCpn;
            return w.checkPwd({ipt1: i.pwd, ipt2: i.pwd2, isSubmit: t})
        }, encrypt: function M(t) {
            var i = new window.NCJSEncrypt;
            return i.setPublicKey(this.publicKey || ""), i.encrypt(s.trim(t))
        }, getContainerHtml: function O() {
            var t = this.rawConfig, i = this._getData(t);
            return p.execTpl(['<div class="wrapper-content clearfix js-register">', '<div class="input-section">', "<form>", '<div class="form-group">', '<label class="control-label">手机号码</label>', '<div class="control-group form-phone-fill js-account">', '<div class="btn-group js-country"></div>', '<input type="text" placeholder="请输入手机号码">', "</div>", "</div>", '<div class="form-group">', '<label class="control-label">验证码</label>', '<div class="btn-group phone-code">', '<div class="control-group js-captcha"><input type="text" placeholder="请输入验证码"></div>', '<span class="input-group-btn">', '<button class="btn btn-primary js-btn-captcha" style="padding:0 5px;">获取验证码</button>', "</span>", "</div>", "</div>", '<div class="form-group">', '<label class="control-label">密码</label>', '<div class="control-group js-pwd"><input type="password" placeholder="请输入密码"></div>', "</div>", '<div class="form-group">', '<label class="control-label">重输密码</label>', '<div class="control-group js-pwd-repeat"><input type="password" placeholder="请重复输入密码"></div>', "</div>", '<div class="form-group">', '<div class="col-input-login">', '<a class="btn btn-primary btn-block js-btn-submit" href="javascript:void(0);">立即注册</a>', '<input type="submit" class="nk-invisible" />', "</div>", "</div>", "</form>", '<div class="login-tips">已有牛客网账号？ <a href="javascript:void(0);" class="js-mode" data-type="login">立即登录</a></div>', "</div>", "#{authStr}", "</div>", '<div class="wrapper-content clearfix js-login" style="display:none;">', '<div class="input-section">', "<form>", '<div class="form-group">', '<label class="control-label">邮箱/手机</label>', '<div class="control-group js-account"><input type="text" placeholder="请输入邮箱/手机号码"></div>', "</div>", '<div class="form-group">', '<label class="control-label">密码</label>', '<div class="control-group js-pwd"><input type="password" placeholder="请输入密码"></div>', "</div>", '<div class="form-group">', '<label class="control-label">手机号码</label>', '<div class="control-group form-phone-fill js-account-phone">', '<div class="btn-group js-country"></div>', '<input type="text" placeholder="请输入手机号码">', "</div>", "</div>", '<div class="form-group">', '<label class="control-label">验证码</label>', '<div class="btn-group phone-code">', '<div class="control-group js-captcha"><input type="text" placeholder="请输入验证码"></div>', '<span class="input-group-btn">', '<button class="btn btn-primary js-btn-captcha" style="padding:0 5px;">获取验证码</button>', "</span>", "</div>", "</div>", '<div class="form-group about-pwd clearfix">', '<div class="keep-pwd"><label><input type="checkbox" checked class="js-rember"> 记住登录</label></div>', '<a href="/forgot-pwd" class="forget-pwd"> 忘记密码？</a>', "</div>", '<div class="form-group">', '<div class="col-input-login">', '<a class="btn btn-primary btn-block js-btn-submit" href="javascript:void(0);">立即登录</a>', '<input type="submit" class="nk-invisible" />', "</div>", "</div>", "</form>", '<div class="login-tips">', '<div><a href="javascript:void(0);" class="js-login-type" data-type="password">账号密码登录</a></div>', '<div><a href="javascript:void(0);" class="js-login-type" data-type="sms">短信验证登录</a></div>', '<div>还没有牛客网账号？ <a href="javascript:void(0);" class="js-mode" data-type="register">极速注册</a></div>', "</div>", "</div>", "#{authStr}", "</div>"].join(""), i)
        }, getOAuthUrl: function U(t) {
            var i = this;
            m.getOauthState({
                type: "GET", call: function (t) {
                    i.oauthStatus = t.data
                }, always: t
            })
        }, getPublicKey: function B(t, n) {
            var a = this;
            !function i(e) {
                a.publicKey && e && e(), !a.publicKey && m.getLoginPublicKey({
                    type: "GET", call: function (t) {
                        var i = (t.data || {}).rsaPublicKey;
                        if (!i) return !n && h.alert("获取公钥出错，请联系牛客工作人员");
                        a.publicKey = i, e && e()
                    }, error: function (t) {
                        return !n && h.alert(t.msg)
                    }
                })
            }(function () {
                !function i(t) {
                    window.NCJSEncrypt && t && t(), !window.NCJSEncrypt && e.async("//static.nowcoder.com/nc/jslib/jsencrypt.min.js", function () {
                        u.waitUtil({
                            times: 250, condition: function () {
                                return !!window.NCJSEncrypt
                            }, call: t, error: function () {
                                return !n && h.alert("获取加密文件出错，请重试")
                            }
                        })
                    })
                }(t)
            })
        }, _getData: function J(t) {
            var i = t.href, e = {};
            if (i = i && i !== window.location.href ? i : "") {
                var n = document.createElement("A");
                n.href = i, e.callBack = n.href
            }
            var a = window.location.hostname;
            "www.nowcoder.com" !== a && (e.callBackHostName = a);
            var o = b.isInHttps() ? "https://" : "http://", r = {
                wxHref: d.addParam({callBack: window.location.href}, "/oauth2/login/wechat_mp_index"),
                qqHref: "https://graph.qq.com/oauth2.0/authorize?client_id=101003590&response_type=code&state=web&redirect_uri=" + d.addParam(e, o + "www.nowcoder.com/oauth2/qqconfig"),
                wbHref: "https://api.weibo.com/oauth2/authorize?client_id=3023520088&response_type=code&state=" + (this.oauthStatus || "web") + "&scope=follow_app_official_microblog&redirect_uri=" + d.addParam(e, o + "www.nowcoder.com/oauth2/sinaconfig"),
                rrHref: "https://graph.renren.com/oauth/authorize?client_id=33356a41ddac4028a9ad64925e68c0e0&redirect_uri=http://www.nowcoder.com/oauth2/rrconfig&response_type=code&state=web",
                dbHref: "https://www.douban.com/service/auth2/auth?client_id=075c6b46242f18c8161541d26c8d4a58&redirect_uri=http://www.nowcoder.com/oauth2/dbconfig&response_type=code&state=web",
                gitHref: "https://github.com/login/oauth/authorize?client_id=1c539827b9400016d0c9&scope=user:email&redirect_uri=" + d.addParam(e, "http://www.nowcoder.com/oauth2/gitconfig") + "&response_type=code&state=web"
            };
            return {authStr: p.execTpl(['<div class="other-login-way">', '<span class="separate-line">或</span>', '<div class="login-way">', '<a href="javascript:void(0);" data-href="#{qqHref}" class="nc-js-action-oauth login-qq">QQ账号登录</a>', '<a href="javascript:void(0);" data-href="#{wbHref}" class="nc-js-action-oauth login-wb">微博账号登录</a>', '<a href="javascript:void(0);" data-href="#{wxHref}" class="nc-js-action-oauth login-wx">微信账号登录</a>', '<div class="login-fold js-auth-more">', '<a href="javascript:void(0);" class="login-more">更多三方账号</a>', '<div class="login-unfold-icons">', '<a href="javascript:void(0);" data-href="#{dbHref}" class="nc-js-action-oauth login-db"></a>', '<a href="javascript:void(0);" data-href="#{rrHref}" class="nc-js-action-oauth login-rr"></a>', "</div>", "</div>", "</div>", "</div>"].join(""), r)}
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupMsg", ["nc", "cpn", "../../base/env", "../../base/bridge", "../../base/config", "../../action/action", "../../action/ajax", "../../base/localization", "../attachSub/attachEmoji"], function (e, t, i) {
    var n = e("nc"), a = e("cpn"), r = n.$, s = n.Component, l = n.Clazz, c = n.Str, p = n.Base, u = n.Dom,
        v = n.Upload, o = a.Input, d = a.Popup, f = a.PopupUploadTips, h = a.AttachSuggest, g = a.AttachUpload,
        m = e("../../base/env"), b = e("../../base/bridge"), j = e("../../base/config"), w = e("../../action/action"),
        y = e("../attachSub/attachEmoji"), E = i.exports = l.create();
    l.mix(E, s, {
        _template: ['<div class="letter-content clearfix">', '<div class="letter-item js-letter-name">', '<label class="letter-label">发给</label>', '<div class="btn-group"></div>', "</div>", '<div class="letter-item" style="margin-bottom:0;">', '<label class="letter-label">内容</label>', '<div class="btn-group js-ipt"></div>', "</div>", '<div class="letter-item letter-msg-box">', '<div class="letter-pic-box">', '<a href="javascript:void(0);" class="icon-emotion js-emoji-btn"></a>', '<a href="javascript:void(0);" class="icon-pic js-upload-btn"></a>', "</div>", "</div>", '<div class="letter-msg-box">', '<div class="letter-pic-box js-upload"></div>', "</div>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this;
                e.getEl();
                e.initReceiver(), e.initContent(), e.initEmoji(), e.initImage(), e.popup.fixPosition()
            }
        }],
        show: function C(e) {
            var t = new E(e);
            d.wrap(t, {
                title: e.title, content: t.html(), width: 600, listeners: {
                    close: function () {
                        e.close && e.close(), t.fire("close")
                    }
                }, okTxt: "发送", ok: function () {
                    return t.check() && t.sendMessage(), !0
                }, cancel: function () {
                }
            });
            return t
        }
    }, {
        initialize: function x(e) {
            this.receiver = e.receiver && e.receiver.id ? e.receiver : null, this.images = []
        }, initReceiver: function I() {
            var e = this, t = (e.rawConfig, e.receiver), i = e.getEl().find(".js-letter-name .btn-group");
            t && t.id ? i.html('<span class="recipient">' + (t.name || "未知姓名") + "</span>") : (e.receiverIpt = new o({
                renderTo: i,
                renderBy: "replaceWith",
                cls: "btn-group",
                placeholder: "请输入对方姓名，从下拉菜单中选择"
            }), e.initSuggest(), e.initRecent())
        }, initSuggest: function k() {
            var t = this, i = t.receiverIpt, n = h.show({
                input: i.inputEl, needSame: !0, selectCls: "hover", reqList: function (e, t) {
                    if (!(e = r.trim(e))) return t([]);
                    w.queryUsers({
                        body: {o: 0, c: 10, query: e}, call: function (e) {
                            t(e.data)
                        }, error: function (e) {
                            t([])
                        }
                    })
                }, getItemStr: function (e) {
                    return c.execTpl(['<li class="js-item suggest-user" data-id="#{_sid}">', '<img class="list-head" src="#{head}">', '<span class="list-name" title="#{nickname}">#{nickname}</span>', "</li>"].join(""), {
                        _sid: e._sid,
                        head: e.head || "//static.nowcoder.com/images/head.png",
                        nickname: e.nickname
                    })
                }, ok: function (e) {
                    t.receiver = {id: e.id, name: e.nickname}, i.val(e.nickname)
                }
            });
            n.attach.listen("attachShow", function () {
                i.setNone();
                var e = n.getEl();
                e.addClass("letter-content"), e.outerWidth(i.getEl().outerWidth())
            }), n.attach.listen("attachHide", function () {
                t.receiver && t.receiver.name !== i.val() && (t.receiver = null)
            }), t.pushChild(n)
        }, initRecent: function M() {
            var a = this, s = a.getEl().find(".js-letter-name");
            w.queryRecentlyUsers({
                call: function (e) {
                    var t = e.data || [], i = "";
                    if (p.forEach(t, function (e) {
                        i += e.id ? c.execTpl('<dd><a class="feed-head" data-id="#{id}" title="#{name}" href="javascript:void(0);"><img src="#{head}" /></a></dd>', e) : ""
                    }), i) {
                        var n = r('<div class="letter-item"><label class="letter-label">最近发送</label><dl class="recently-sent" style="margin-left:0;padding-left:0;">' + i + "</dl></div>");
                        s.after(n), n.find("dd a").on("click", function (e) {
                            var t = r(e.currentTarget), i = t.attr("data-id"), n = r.trim(t.attr("title"));
                            i && (a.receiver = {id: i, name: n}, a.receiverIpt.val(n || "未知姓名"))
                        }), a.popup.fixPosition()
                    }
                }
            })
        }, initContent: function T() {
            var e = this.rawConfig, t = this.getEl();
            this.contentIpt = new o({
                renderTo: t.find(".js-ipt"), type: "textarea", render: function () {
                    var e = this.inputEl;
                    e.addClass("letter-txt"), e.css("resize", "none").css("line-height", "1.6"), this.getEl().outerWidth(Math.max(426, e.outerWidth()))
                }
            }), this.contentIpt.val(e.content)
        }, initEmoji: function S() {
            var t = this, e = t.getEl(), i = y.show({
                target: e.find(".js-emoji-btn"), call: function (e) {
                    y.renderInIpt(t.contentIpt.inputEl, e)
                }
            });
            i.pushChild(i)
        }, initImage: function P() {
            var c = this, e = c.getEl();
            if (!v.support) return void e.find(".js-upload-btn").remove();
            var o = m.getMainDomain(!0) + "/uploadImage?type=1",
                i = r(['<div class="letter-pic-box">', '<ul class="js-upload-list clearfix">', '<li class="add-more-pic js-upload" title="上传图片" style="display:none;"><i class="icon-plus"></i></li>', "</ul>", "</div>"].join(""));
            e.find(".js-upload").append(i);
            i.find(".js-upload-list");
            var n = e.find(".js-upload-btn"), d = i.find("li.js-upload");
            b.create(o, function (s, a) {
                p.forEach([n, d], function (e) {
                    var t = g.show({
                        target: e,
                        url: o,
                        XMLHttpRequest: a.XMLHttpRequest,
                        fileType: "*.jpg;*.JPG;*.png;*.PNG;*.gif;*.GIF;*.bmp;*.BMP;*.jpeg;*.JPEG",
                        call: function (e) {
                            r(e.url)
                        }
                    });
                    c.pushChild(t)
                });
                var e, t = u.bindPaste(document, c.contentIpt.inputEl, function (e) {
                    var t = p.find(e, function (e) {
                        return "file" === e.kind && /image/.test(e.type || "")
                    }), i = t ? t.getAsFile() : null;
                    if (i) {
                        var n = new v({
                            url: o, XMLHttpRequest: a.XMLHttpRequest, progress: function (e) {
                                var t = l();
                                t.showProgress("正在上传：" + e + "%", e)
                            }, error: function () {
                                var e = l();
                                e.showError("上传失败")
                            }, call: function (e) {
                                var t = l();
                                t.close(), r(e.url)
                            }
                        });
                        n.uploadBlob(i, (new Date).getTime() + "." + i.type.split("/").pop())
                    }
                });

                function r(e) {
                    (e = s.trim(e)) && (c.images.push(e), d[0 < c.images.length ? "show" : "hide"](), d.before(["<li>", '<a href="javascript:void(0);" class="js-upload-del icon-remove-circle"></a>', '<div class="mask"></div>', '<img style="width:80px;height:80px;" src="' + e + '" />', "</li>"].join("")))
                }

                function l() {
                    return e || (e = f.show({})).popup.listen("close", function () {
                        e = null
                    }), e
                }

                c.listen("destroy", function () {
                    t()
                }), i.on("click", "li .js-upload-del", function (e) {
                    var t = s(e.currentTarget), i = t.closest("li"), n = s.trim(i.find("img").attr("src")),
                        a = c.images.indexOf(n);
                    0 <= a && c.images.splice(a, 1), d[0 < c.images.length ? "show" : "hide"](), i.remove()
                })
            })
        }, val: function q() {
            var e = this.rawConfig;
            return {
                type: 0,
                title: "",
                content: r.trim(this.contentIpt.val()),
                receiver: (this.receiver || {}).id,
                images: this.images,
                majiaSender: p.isObject(e.sender) ? e.sender.id : e.sender
            }
        }, check: function R() {
            var e = this.val();
            return e.receiver ? !(!e.content && 0 === e.images.length && (this.contentIpt.setErrorTips("内容不能为空"), 1)) : (this.receiverIpt && this.receiverIpt.setErrorTips("收信人不能为空"), !1)
        }, sendMessage: function z() {
            var i = this;
            i.needCode ? e.async("./popupGtCode", function (e) {
                e.show({
                    type: j.captcha.sendMessage, call: function (e) {
                        i.needCode = !1, t(e)
                    }, cancel: function () {
                        i.needCode = !1, d.alert("验证码错误")
                    }
                })
            }) : t();

            function t(e) {
                i.val();
                w.sendMessage({
                    body: i.val(), query: e || {}, call: function (e) {
                        var t = i.rawConfig;
                        i.popup.close(), !t.sentCb && d.tips("发送成功"), t.sentCb && t.sentCb()
                    }, error: function (e) {
                        if (1125 === e.code) return i.needCode = !0, void i.sendMessage();
                        d.alert(e.msg || "发送失败，请重试")
                    }
                })
            }
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupPhoneApply", ["nc", "cpn", "../../bll/loginUtil", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization", "../../base/config"], function (n, t, i) {
    var a = n("nc"), c = n("cpn"), o = a.$, s = a.Base, e = a.Clazz, l = a.Component, r = a.Str, p = a.Limit,
        d = c.Popup, u = c.Input, v = n("../../bll/loginUtil"), h = n("../../base/env"), b = n("../../action/action"),
        m = i.exports = e.create(), f = "申请成功，我们将于72小时内审核你的改绑申请，结果将以系统通知的形式告知";
    e.mix(m, l, {
        _template: '<div><div style="padding:20px;text-align:center;font-size:14px;">加载中...</div></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, i = t.popup;
                b.unbindAccountResult({
                    type: "GET", call: function (n) {
                        n.data ? (i.close(), d.ok(f)) : (t.initHtml(), t.initCpn(), i.fixPosition())
                    }, error: function (n) {
                        i.close(), d.alert(n.msg)
                    }
                })
            }
        }, {
            name: "click .js-submit", handler: function () {
                this.submit()
            }
        }],
        show: function g(n) {
            var t = new m(n = n || {});
            d.wrap(t, {title: "更改绑定的手机号", content: t.html(), width: 600, hasNoFooter: !0})
        }
    }, {
        initHtml: function j() {
            this.getEl().html(r.execTpl(['<div class="pop-bind-phone">', '<div class="form-group">', '<label class="control-label">当前账号ID</label>', '<div class="control-group">#{uid}</div>', "</div>", '<div class="form-group">', '<label class="control-label">原账号ID</label>', '<div class="js-id"><input type="text" placeholder="请输入原账号ID" /></div>', '<a href="https://www.nowcoder.com/discuss/157931" target="_blank" class="pop-check-account link-gray"><i class="icon-question-sign"></i> 如何查看原账户ID？</a>', "</div>", '<div class="form-group">', '<label class="control-label">手机号码</label>', '<div class="control-group form-phone-fill js-account">', '<div class="btn-group js-country"></div>', '<input type="text" placeholder="请输入手机号码" />', "</div>", "</div>", '<div class="form-group">', '<label class="control-label">验证码</label>', '<div class="btn-group phone-code">', '<div class="control-group js-captcha"><input type="text" placeholder="请输入验证码" /></div>', '<span class="input-group-btn"><button class="btn btn-primary js-btn-captcha" style="padding:0;">获取验证码</button></span>', "</div>", "</div>", '<div class="form-group">', '<label class="control-label">改绑理由</label>', '<div class="control-group js-reason"><input type="text" placeholder="请输入改绑理由" /></div>', "</div>", '<div class="warning-tips"><i class="icon-warning-sign"></i>注意！手机号改绑完成后，原账号将不能用该手机号登录</div>', "</div>", '<div class="pop-btn-wrapper">', '<a href="javascript:void(0);" class="btn btn-primary js-submit">确定申请</a>', "</div>"].join(""), {uid: (h.getUser() || {}).ownerId}))
        }, initCpn: function y() {
            var n = this, i = n.cpn = {}, t = n.getEl();
            i.uid = u.transform(t.find(".js-id")), i.zip = v.initPhoneZip({renderTo: t.find(".js-country")}), i.account = u.transform(t.find(".js-account")), i.captcha = u.transform(t.find(".js-captcha")), i.reason = u.transform(t.find(".js-reason")), v.initCaptcha({
                btn: t.find(".js-btn-captcha"),
                isPhone: !0,
                check: s.bind(n.checkAccount, n),
                val: function () {
                    var n = o.trim(i.zip.val()), t = o.trim(i.account.val());
                    return n + t
                }
            })
        }, checkAccount: function k(n) {
            v.checkPhone({zip: this.cpn.zip, phone: this.cpn.account, needRegister: !0, call: n})
        }, val: function w(n) {
            var t = this.cpn;
            if (0 === arguments.length) return {
                uid: o.trim(t.uid.val()),
                phone: o.trim(t.zip.val()) + o.trim(t.account.val()),
                code: o.trim(t.captcha.val()),
                reason: o.trim(t.reason.val())
            }
        }, check: function x() {
            var n = this.cpn, t = this.val(), i = "+86" === o.trim(n.zip.val()), a = o.trim(n.account.val()), c = !0;
            t.uid || (n.uid.setErrorTips("原账号ID不能为空"), c = !1);
            a || (n.account.setErrorTips("手机号码不能为空"), c = !1);
            (i && !r.isPhone(a) || !i && !/^\d+$/.test(a)) && (n.account.setErrorTips("请填写正确的手机号码"), c = !1);
            t.code || (n.captcha.setErrorTips("验证码不能为空"), c = !1);
            t.reason || (n.reason.setErrorTips("改绑理由不能为空"), c = !1);
            return c
        }, submit: function z() {
            var t = this, i = t.getEl();
            t.check() && !p.mark(i) && b.unbindAccount({
                body: t.val(), call: function (n) {
                    t.popup.close(), d.tips(f)
                }, error: function (n) {
                    d.alert(n.msg), p.clear(i)
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupReport", ["nc", "cpn", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization", "../../base/config"], function (e, t, n) {
    var a = e("nc"), o = e("cpn"), i = (a.$, a.Component), r = a.Limit, c = a.Clazz, p = a.Base, l = o.Popup,
        s = o.CheckGroup, d = e("../../action/action"), u = e("../../base/config"),
        v = (o.Input, n.exports = c.create());
    c.mix(v, i, {
        _template: ['<div class="review-comment pop-review-comment">', "<h4>举报类型</h4>", '<div class="review-class-wrap">#{reportTypeOption}</div>', '<div class="pop-tip">举报说明</div>', '<textarea class="pop-area"></textarea>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, t = e.getEl();
                e.violationTypeCheckBox = s.mix({el: t.find("div.review-class-wrap label.radio")}), e.violationInfoTextArea = t.find("textarea")
            }
        }],
        show: function f(n) {
            n = n || {};
            d.isReported({
                body: {type: n.type, entityId: n.entityId}, call: function (e) {
                    e.data ? l.ok('举报我们已经收到，根据<a class="link-green" href="/discuss/91947">《牛客讨论区版规》</a>，您的举报将由管理员审核判定后进行处理。') : function t(o) {
                        var i = new v(o);
                        l.wrap(i, {
                            title: "举报", content: i.html(), width: 560, okTxt: "提交", ok: function () {
                                var e = i, t = e.violationTypeCheckBox.val() || "";
                                if ("" === t) return l.alert("请输入举报类型", 2e3), !0;
                                var n = e.violationInfoTextArea.val() || "";
                                if ("其他" === t && "" === n) return l.alert("请输入举报说明", 2e3), !0;
                                var a = i.getEl();
                                r.mark(a) || d.addReport({
                                    body: {
                                        type: o.type,
                                        entityId: o.entityId,
                                        mainCommentEntryId: o.mainCommentEntryId || 0,
                                        violationType: t,
                                        violationInfo: n
                                    }, call: function (e) {
                                        l.ok('举报我们已经收到，根据<a class="link-green" href="/discuss/91947">《牛客讨论区版规》</a>，您的举报将由管理员审核判定后进行处理。')
                                    }, error: function (e) {
                                        2 === e.code ? l.ok("您已经举报过该" + function t(e) {
                                            return e === u.type.user ? "用户" : e === u.type.post ? "帖子" : "评论"
                                        }(o.type) + "，请耐心等待管理员处理。") : l.alert(e.msg)
                                    }, always: function () {
                                        r.clear(a)
                                    }
                                })
                            }, cancel: function () {
                            }
                        });
                        return i
                    }(n)
                }, error: function (e) {
                    l.alert(e.msg)
                }
            })
        }
    }, {
        _getData: function y(e) {
            var t = p.id(e.type) === p.id(u.type.user) ? ["垃圾营销", "传播色情/低俗内容", "传播违法信息", "抄袭或涉嫌侵权", "其他"] : ["广告及垃圾信息", "抄袭或涉嫌侵权", "不友善/色情/低俗内容", "政治敏感", "其他"],
                n = "";
            return p.forEach(t, function (e, t) {
                n += ['<label class="radio">', '<span class="icons"></span>', '<input type="radio" data-toggle="radio" value="', e, '">', e, "</label>"].join("")
            }), {reportTypeOption: n}
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupSchool", ["nc", "cpn", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization", "./popupAddSchool"], function (n, e, t) {
    var i = n("nc"), o = n("cpn"), s = i.$, r = (i.Db, i.Clazz), h = i.Base, a = i.Component, c = (i.Limit, i.Str),
        p = i.Time, u = o.Popup, l = o.Select, d = o.Input, v = n("../../action/action"), f = n("./popupAddSchool"),
        C = t.exports = r.create();
    r.mix(C, a, {
        _template: '<div class=""><div style="padding:20px 0;text-align:center;font-size:14px;">数据加载中...</div></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this;
                t.isMiddle = !!t.rawConfig.isMiddle, h.forEachAsync(["getCity", "searchSchool"], function (n, e) {
                    t[n](h.bind(e, null, null))
                }, function () {
                    t.initContainer(), t.initCpns(), t.renderList(t.schoolData), t.popup && t.popup.fixPosition()
                })
            }
        }, {
            name: "click a.pop-school-item", handler: function (n) {
                var e = this, t = e.rawConfig, i = s(n.currentTarget), o = i.attr("data-id"), r = i.attr("data-name");
                t.call && t.call(o, r), e.popup && e.popup.close()
            }
        }, {
            name: "click .js-add-school", handler: function (n) {
                var e = this;
                e.popup && e.popup.hide(), f.show({
                    noUnique: !0,
                    isMiddle: e.isMiddle,
                    val: {country: e.countryCpn.val(), prov: e.provCpn.val(), name: e.searchCpn.val()},
                    listeners: {
                        ok: function (n) {
                            e.countryCpn.val(n.country), e.fixCity(), !e.provCpn.hidden && e.provCpn.val(n.prov), e.searchCpn.val(n.name), e.refresh(!0)
                        }, close: function (n) {
                            e.popup && e.popup.show()
                        }
                    }
                })
            }
        }],
        show: function m(n) {
            var e = new C(n = n || {});
            u.wrap(e, {
                title: n.isMiddle ? "选择你的中学" : "选择你的大学",
                content: e.html(),
                width: 960,
                hasScroll: !0,
                hasNoFooter: !0,
                noUnique: !!n.noUnique
            });
            return a.setEvents(), e
        }
    }, {
        initContainer: function y() {
            var n = this;
            n.getEl().html(['<div class="pop-filter-wrap js-filter-box"></div>', '<div class="pop-school-box js-school-box"></div>']), n.headerEl = n.getEl(".js-filter-box"), n.contentEl = n.getEl(".js-school-box")
        }, initCpns: function g() {
            var t = this, n = t.headerEl, e = function o() {
                return t.cityMap = {}, h.map(t.cityData, function (n, e) {
                    return {text: (t.cityMap[n.name] = n).name, value: n.name, checked: 0 === e}
                })
            }();
            t.countryCpn = new l({
                renderTo: n,
                text: "请选择国家",
                needSearch: 5 < e.length,
                options: e,
                listeners: {
                    change: function () {
                        t.fixCity()
                    }
                }
            }), t.provCpn = new l({renderTo: n, text: "请选择省份", needSearch: !0, options: []}), t.provCpn.hide();
            var i = p.frequency(750);
            t.searchCpn = new d({
                cls: "inline-block",
                renderTo: n,
                placeholder: "输入关键词查找学校",
                listeners: {
                    change: function () {
                        var e = this;
                        i(function () {
                            var n = s.trim(e.val());
                            if (!n) return t.selectAll(t.countryCpn.val(), t.provCpn.val());
                            t.searchSchool(function (n) {
                                t.renderList(n)
                            })
                        })
                    }
                }
            }), t.fixCity(!0)
        }, refresh: function x(n) {
            var e = this;
            e.searchSchool(function (n) {
                n && 0 !== n.length ? e.renderList(n) : e.contentEl.html('<h3 style="text-align:center">请先选择筛选条件</h3>')
            }, n)
        }, fixCity: function E(n) {
            var e = this, t = e.countryCpn.val(), i = e.cityMap[t];
            if (!i) return;
            if (i.provs && 0 < i.provs.length) {
                var o = [];
                h.forEach(i.provs, function (n, e) {
                    o.push({text: n.name, value: n.name})
                }), e.provCpn.unlisten("change"), e.provCpn.listen("change", function () {
                    e.selectAll(t, this.val())
                }), e.provCpn.replaceOptions(o), e.provCpn.select(0), e.provCpn.show(), n || e.provCpn.fire("change")
            } else e.provCpn.hide(), e.selectAll(t)
        }, selectAll: function S(n, e) {
            var t = this;
            if (t.searchCpn.val(""), !n) return void t.contentEl.html('<h3 style="text-align:center">请先选择筛选条件</h3>');
            if (!t.cityMap[n]) return void t.contentEl.html('<h3 style="text-align:center">请先选择筛选条件</h3>');
            t.refresh()
        }, renderList: function b(n) {
            var t = "";
            h.forEach(n, function (n) {
                var e = +n.type;
                t += c.execTpl('<a href="javascript:void(0);" data-id="#{id}" data-name="#{name}" class="pop-school-item" title="#{name}#{tip}">#{name}#{tip}</a>', {
                    id: n.id,
                    name: n.name,
                    tip: 3 == e || 5 == e ? "(审核中)" : ""
                })
            });
            var e = ['<p style="text-align:center;padding:20px;font-size:14px;">', '请输入学校全名或者关键词进行搜索，如仍未查找到你的学校，<a href="javascript:void(0);" class="link-green js-add-school">点此帮助牛客完善学校信息</a>', "</p>"].join("");
            this.contentEl.html(t || e)
        }, getCity: function w(t) {
            var i = this;
            v.getSchoolBrief({
                type: "GET", query: {isMiddle: i.isMiddle}, call: function (n) {
                    var e = i.cityData = n.data || [];
                    t && t(e)
                }, error: function (n) {
                    i.popup && i.popup.close(), u.alert(n.msg)
                }
            })
        }, searchSchool: function M(o, n) {
            var r = this, a = r.schoolCache = r.schoolCache || {}, e = p(), c = l(e);
            if (!n && a[c]) return o && o(a[c]);

            function p() {
                var n = (r.countryCpn ? s.trim(r.countryCpn.val()) : "中国") || undefined,
                    e = (r.provCpn ? r.provCpn.hidden ? "" : s.trim(r.provCpn.val()) : "北京") || undefined,
                    t = (r.searchCpn ? s.trim(r.searchCpn.val()) : "") || undefined;
                return {country: t ? undefined : n, province: t ? undefined : e, query: t, limit: 250}
            }

            function l(n) {
                return [n.country || "", n.province || "", n.query || ""].join("$$$$")
            }

            v.getSchool({
                query: h.extend({isMiddle: r.isMiddle}, e), call: function (n) {
                    var e = r.schoolData = n.data || [];
                    a[c] = e;
                    var t = p(), i = l(t);
                    c === i && o && o(e)
                }, error: function (n) {
                    u.alert(n.msg), r.popup && r.popup.close()
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/popupSub/popupVote", ["nc", "cpn", "../../action/action", "../../action/ajax", "../../base/env", "../../base/bridge", "../../base/localization"], function (t, i, e) {
    var o = t("nc"), n = t("cpn"), r = o.$, s = o.Base, a = o.Clazz, l = o.Component, c = o.Limit, p = n.Popup,
        d = n.Input, v = n.Select, f = n.Tips, u = t("../../action/action"), h = {1: 7, 2: 30, 3: 90, 4: 180},
        g = e.exports = a.create();
    a.mix(g, l, {
        _template: '<div class="pop-vote"><div style="font-size:14px;text-align:center">加载中...</div></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this;
                if (!e.isEdit) return e.initContainer();
                e.getInfo(function (t) {
                    var i = (e.voteData = t).voteInfo || {};
                    e.initContainer(), e.val({
                        title: i.title,
                        type: i.type,
                        expiredAt: i.expiredAt,
                        options: s.map(t.voteOptions, function (t) {
                            return t.optionTitle
                        })
                    }), 0 < (t.totalVoteCount || 0) && e.disabled()
                })
            }
        }, {
            name: "click .js-del-option", handler: function (t) {
                var i = this.optionBox, e = r(t.currentTarget).closest(".form-group"), o = e.index();
                i[o] && (l.recycle(e), i.splice(o, 1), this.fixOption())
            }
        }, {
            name: "click .js-add-option", handler: function (t) {
                this.addOption()
            }
        }, {
            name: "click .js-submit", handler: function (t) {
                this.check() && this.submit()
            }
        }],
        show: function m(t) {
            var i = new g(t = t || {});
            return p.wrap(i, {title: i.isEdit ? "编辑投票" : "投票", content: i.html(), width: 630}), i
        }
    }, {
        initialize: function x(t) {
            var i = this;
            i.cpn = {}, i.optionBox = [], i.isEdit = !!t.voteId, i.maxOption = +t.maxOption || 15
        }, initContainer: function b() {
            var t = this;
            t.getEl().html(['<div class="form-group">', '<label class="control-label">标题</label>', '<div class="js-title"></div>', "</div>", '<div class="form-group no-margin">', '<label class="control-label">投票选项</label>', '<div class="control-group">最多25个字</div>', "</div>", '<div class="js-option-box"></div>', '<div class="form-group">', '<label class="control-label"></label>', '<div class="control-group">', '<a href="javascript:void(0);" class="pop-addoption-btn js-add-option">+ 添加选项</a>', "</div>", "</div>", '<div class="form-group">', '<label class="control-label">单选/多选</label>', '<div class="js-choice"></div>', "</div>", '<div class="form-group">', '<label class="control-label">结束时间</label>', '<div class="js-end-time"></div>', "</div>", '<div class="form-group fn-center">', '<a href="javascript:void(0);" class="btn btn-primary js-submit">发起投票</a>', "</div>"].join("")), t.initCpns(), t.addOption(), t.addOption(), t.popup.fixPosition()
        }, initCpns: function j() {
            var t = this, i = t.cpn;
            i.title = new d({
                renderTo: t.getEl(".js-title"),
                renderBy: "replaceWith",
                placeholder: "最多支持20个字符",
                listeners: {
                    change: function () {
                        var t = r.trim(this.val());
                        this.errorTips(20 < t.length ? "最多支持20个字符" : "")
                    }
                }
            }), i.choice = new v({
                renderTo: t.getEl(".js-choice"),
                renderBy: "replaceWith",
                options: [{text: "单选", value: "1", checked: !0}, {text: "多选", value: "2"}]
            }), i.choice.getEl().css("margin-bottom", 0), i.expiredAt = new v({
                renderTo: t.getEl(".js-end-time"),
                renderBy: "replaceWith",
                options: [{text: "一周", value: "1", checked: !0}, {text: "一个月", value: "2"}, {
                    text: "三个月",
                    value: "3"
                }, {text: "半年", value: "4"}]
            })
        }, addOption: function y() {
            var t = this,
                i = r(['<div class="form-group">', '<label class="control-label"></label>', '<div class="control-group pop-with-oprt-icon">', '<a href="javascript:void(0);" class="icon-minus-sign js-del-option"></a>', "</div>", "</div>"].join(""));
            t.getEl(".js-option-box").append(i);
            var e = d.transform(i.find(".control-group"), {
                listeners: {
                    change: function () {
                        var t = r.trim(this.val());
                        this.errorTips(25 < t.length ? "最多支持25个字符" : "")
                    }
                }
            });
            return t.optionBox.push(e), t.fixOption(), e
        }, fixOption: function E() {
            var n = this.optionBox;
            s.forEach(n, function (t, i) {
                var e = t.getEl().closest(".form-group"), o = t.isDisabled();
                e.find(".control-label").html(i + 1), !o && e.find(".js-del-option")[2 < n.length ? "show" : "hide"]()
            }), this.getEl(".js-add-option")[n.length >= this.maxOption ? "hide" : "show"]()
        }, disabled: function w(o) {
            var n = this, t = n.cpn;
            o = !1 !== o, t.title.disabled(o), t.choice.disabled(o), s.forEach(n.optionBox, function (t) {
                var i = t.getEl().closest(".form-group");
                if (t.disabled(o), i.find(".js-del-option")[!1 === o ? "show" : "hide"](), t.tips && t.tips.destroy && t.tips.destroy(), o) {
                    var e = t.tips = f.show({
                        target: t.getEl(),
                        autoWidth: !0,
                        content: '<span>注意：编辑此选项，会清空全部投票！<a href="javascript:void(0);" class="font-green js-edit">确认编辑</a></span>'
                    });
                    t.pushChild(e), e.getEl().on("click", ".js-edit", function () {
                        n.hasChangeOptions = !0, n.disabled(!1)
                    })
                }
            }), !o && n.fixOption()
        }, val: function O(t) {
            var o = this, i = o.rawConfig, e = o.cpn, n = o.isEdit;
            if (0 === arguments.length) return {
                voteId: n ? i.voteId : undefined,
                entityId: n ? undefined : i.entityId,
                entityType: n ? undefined : i.entityType,
                hasChangeOptions: !!o.hasChangeOptions,
                title: r.trim(e.title.val()),
                type: e.choice.val(),
                expiredAt: e.expiredAt.val(),
                options: s.map(o.optionBox, function (t) {
                    return r.trim(t.val())
                })
            };
            t = t || {}, e.title.val(r.trim(t.title)), e.choice.val({
                1: 1,
                2: 1
            }[t.type] ? s.id(t.type) : "1"), e.expiredAt.val({
                1: 1,
                2: 1,
                3: 1,
                4: 1
            }[t.expiredAt] ? s.id(t.expiredAt) : "1");
            var a = o.optionBox;
            s.forEach(t.options, function (t, i) {
                var e = a[i] || o.addOption();
                e.val(r.trim(t))
            }), o.fixOption()
        }, check: function T() {
            var r = this, i = r.val(), t = r.cpn, l = (r.rawConfig, !0);
            i.title ? 20 < i.title.length && (t.title.errorTips("最多支持20个字符"), l = !1) : (t.title.errorTips("请填写内容"), l = !1);
            i.type || (t.choice.error(), l = !1);
            i.expiredAt || (t.expiredAt.error(), l = !1);
            if (s.forEach(i.options, function (o, n) {
                var a = r.optionBox[n];
                if (o) if (25 < o.length) a && a.errorTips("最多支持25个字符"), l = !1; else {
                    var t = i.options.slice(n + 1);
                    s.forEach(t, function (t, i) {
                        if (t === o) {
                            a && a.errorTips("重复的选项");
                            var e = r.optionBox[n + i + 1];
                            e && e.errorTips("重复的选项"), l = !1
                        }
                    })
                } else a && a.errorTips("请填写内容"), l = !1
            }), r.isEdit) {
                var e = r.isValid(r.voteData, i.expiredAt);
                e || (t.expiredAt.error(), p.alert("请延长结束时间"), l = !1)
            }
            return l
        }, submit: function C() {
            var i = this, e = i.rawConfig, o = i.getEl(), n = i.isEdit;
            if (c.mark(o)) return;
            u[n ? "voteEdit" : "voteCreate"]({
                type: "POST", body: i.val(), call: function (t) {
                    p.tips("操作成功"), i.callback("call", n ? e.voteId : t.data.voteId), i.popup && i.popup.close()
                }, error: function (t) {
                    p.alert(t.msg)
                }, always: function (t) {
                    c.clear(o)
                }
            })
        }, isValid: function I(t, i) {
            var e = (t || {}).voteInfo || {}, o = 24 * (h[i] || 0) * 3600 * 1e3;
            return e.createdAt + o > (new Date).getTime()
        }, getInfo: function A(o) {
            var n = this, t = n.rawConfig;
            if (t.info) return o && o(t.info);

            function a(t) {
                n.getEl().html('<div style="font-size:14px;text-align:center">' + t + "</div>")
            }

            u.voteInfo({
                query: {voteId: t.voteId}, call: function (t) {
                    var i = t.data, e = n.isValid(i, "4");
                    if (!e) return a("投票已截止，不能编辑");
                    o && o(t.data)
                }, error: function (t) {
                    a(t.msg)
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/action", ["nc", "cpn", "../../../base/env", "../../../action/action", "../../../action/ajax", "../../../base/bridge", "../../../base/localization", "../../auth", "../../../component/popupSub/popupLogin", "../../../base/config", "../../loginUtil", "../../../component/popupSub/popupCompleteInfo", "../../../component/popupSub/popupCommon", "../../../component/popupSub/popupMsg", "../../../component/attachSub/attachEmoji", "../../../component/popupSub/popupReport"], function (t, n, o) {
    var i = t("nc"), e = t("cpn"), a = i.Base, c = i.$, r = i.Clazz, p = i.Str, u = i.Event, s = i.Uri,
        l = (e.Popup, e.PopupImage), g = t("../../../base/env"), f = t("../../../action/action"), m = t("../../auth"),
        h = t("../../../component/popupSub/popupMsg"), d = t("../../../component/popupSub/popupReport"),
        v = o.exports = r.create();
    a.extend(v.prototype, {
        initialize: function b(t) {
            t = t || {};
            var n = this;
            n.bind("click", "a", "actionA"), n.bind("click", ".js-nc-pop-image img", "actionImage"), !t.noAuth && n.bind("click", ".nc-req-auth", "actionLogin"), !t.noLogout && n.bind("click", ".nc-logout", "actionLogout"), !t.noActive && n.bind("click", ".nc-req-active", "actionActive"), !t.noComplete && n.bind("click", ".nc-req-complete", "actionComplete"), !t.noMessage && n.bind("click", ".js-send-message", "actionMessage"), !t.noReport && n.bind("click", ".js-nc-report", "actionReport"), u.listen("window:showAuthDialog", function () {
                !g.isLogin() && m.showLogin()
            })
        }, actionA: function w(t) {
            var n = c(t.currentTarget).attr("href");
            n && p.isJsHref(n) && t.preventDefault()
        }, actionImage: function L(t) {
            t.stopPropagation(), t.preventDefault();
            var n = c(t.currentTarget), o = c.trim(n.attr("src"));
            !n.attr("data-card-emoji") && o && l.show(o)
        }, actionLogin: function k(t) {
            if (g.isLogin()) return;
            t.stopPropagation(), t.preventDefault();
            var n = c(t.currentTarget), o = n.prop("tagName").toLowerCase(),
                i = "a" === o ? c.trim(n.attr("href")) : "";
            if ((i = i && !p.isJsHref(i) ? i : "") && /\/login$|\/login\?|\/login#|\/login\/$/.test(i)) {
                var e = s.getParam("callBack", i);
                i = e || window.location.href
            }
            if (i = i || window.location.href, "textarea" === o || "input" === o && "text" === n.attr("type")) try {
                n.blur()
            } catch (a) {
            }
            m.showLogin({href: i})
        }, actionLogout: function A(t) {
            f.logout({
                type: "POST", call: function () {
                    window.location.reload()
                }, error: function () {
                }
            })
        }, actionActive: function C(t) {
            this.checkLogin(t, function () {
                g.isActive() || (t.stopPropagation(), t.preventDefault(), m.showActive())
            })
        }, actionComplete: function S(t) {
            this.checkLogin(t, function () {
                g.isCompleteInfo() || (t.stopPropagation(), t.preventDefault(), m.showCompleteInfo({
                    call: function () {
                        window.location.reload()
                    }
                }))
            })
        }, actionMessage: function y(t) {
            t.preventDefault(), this.checkActive(t, function (t) {
                var n = c.trim(t.attr("data-receiver-id")), o = c.trim(t.attr("data-receiver-name"));
                h.show({title: "发私信", content: "", receiver: n ? {id: n, name: o || "牛客用户"} : undefined})
            })
        }, actionReport: function I(t) {
            this.checkLogin(t, function (t) {
                var n = c.trim(t.attr("data-id")), o = c.trim(t.attr("data-main-id")), i = c.trim(t.attr("data-type"));
                n && i && d.show({type: i, entityId: n, mainCommentEntryId: o})
            })
        }, checkLogin: function P(t, n) {
            var o = c(t.currentTarget);
            if (g.isLogin()) return n && n(o);
            !o.hasClass("nc-req-auth") && this.actionLogin(t)
        }, checkActive: function D(t, n) {
            var o = c(t.currentTarget);
            if (g.isActive()) return n && n(o);
            !o.hasClass("nc-req-active") && this.actionActive(t)
        }, bind: function j(t, n, o) {
            var i = this, e = c(document), a = i[o];
            a && e.on(t, n, function (t) {
                a.call(i, t)
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/checkLogin", ["nc", "cpn", "../../../base/env", "../../../action/action", "../../../action/ajax", "../../../base/bridge", "../../../base/localization"], function (n, c, e) {
    var i = n("nc"), o = n("cpn"), t = n("../../../base/env"), a = n("../../../action/action"), r = o.Popup, l = i.Base,
        u = (i.$, i.Clazz), h = e.exports = u.create();
    l.extend(h.prototype, {
        initialize: function d(n) {
            this.check()
        }, check: function p(n) {
            var e = this;
            if (!t.isLogin()) return;
            window.clearTimeout(e.checkLoginTimer), e.checkLoginTimer = window.setTimeout(function () {
                a.checkLoginOtherPlace({
                    type: "GET", noDealAuth: !0, call: function (n) {
                        e.check(3e4)
                    }, error: function (n) {
                        var c = +n.code || 0;
                        998 === c ? r.alert("您的账号已在其他地方登录，您被迫下线。如果并非您本人的操作，那么您的密码可能已泄露，请尽快重新登录并更改密码。", function () {
                            window.location.reload()
                        }) : 999 === c ? window.location.reload() : e.check(3e4)
                    }
                })
            }, n || 5e3)
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/checkMessage", ["nc", "cpn", "../../../base/env", "../../../action/action", "../../../action/ajax", "../../../base/bridge", "../../../base/localization"], function (t, e, a) {
    var n = t("nc"), i = (t("cpn"), n.Base), c = n.$, m = n.Uri, o = n.Clazz, r = n.Event, p = t("../../../base/env"),
        d = t("../../../action/action"), s = a.exports = o.create();
    i.extend(s.prototype, {
        initialize: function l() {
            var t = this;
            t.title = c.trim(document.title), t.check(), r.listen("NOWCODER_MESSAGE_CHANGE", function () {
                t.check()
            })
        }, check: function f(t) {
            var r = this, e = p.isLogin(), s = c("li.nav-msg a");
            if (!e || !s.get(0)) return;
            var l = r.title, u = s.attr("href");
            d.queryUnreadCount({
                type: "get", call: function (t) {
                    var e = t.data || {}, a = +e.unreadMsgCount || 0, n = +e.unreadNotifyCount || 0, i = a - n;
                    if (a <= 0) s.html("消息"), s.attr("href", m.removeParam("type", u)), r.updateTitle(l); else {
                        var c = 0 < i, o = c ? 99 < i ? "99+" : i : 99 < n ? "99+" : n;
                        s.html((c ? '<span class="nav-msg-num">' + o + "</span>" : '<span class="nav-msg-num msg-dot"></span>') + "消息"), s.attr("href", c ? m.removeParam("type", u) : m.addParam({type: 1}, u)), r.updateTitle("(" + o + "条" + (c ? "未读私信" : "未读通知") + ") " + l)
                    }
                }, always: function () {
                    window.setTimeout(function () {
                        r.check()
                    }, 9e4)
                }
            })
        }, updateTitle: function u(t) {
            var e = c.trim(document.title);
            (t = c.trim(t)) !== e && (document.title = t)
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/contentShowHalf", ["nc", "cpn"], function (n, e, t) {
    var c = n("nc"), o = (n("cpn"), c.Base), i = c.$, a = c.Clazz, h = t.exports = a.create();
    o.extend(h.prototype, {
        initialize: function f(n) {
            var e = i(".js-nc-half");
            o.forEach(e, function (n) {
                var e = (n = i(n)).find(".js-nc-half-content"), t = n.find(".js-nc-half-hide-box");
                if (0 < e.length && 0 < t.length) {
                    var c = e.outerHeight();
                    360 < c && (e.outerHeight(300).css("overflow", "hidden"), t.show(), t.on("click", function () {
                        e.css("overflow", "auto").height("auto"), t.hide()
                    }))
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/copy", ["nc", "cpn"], function (n, e, t) {
    var c = n("nc"), o = n("cpn"), a = c.Base, i = c.$, r = c.Clazz, l = c.Time, p = c.Dom, u = o.Popup,
        f = t.exports = r.create();
    a.extend(f.prototype, {
        initialize: function d(n) {
            document.createElement("div");
            var e = l.frequency(2e3);

            function t() {
                var n = i(".js-clipboard");
                0 !== n.length && (n.removeClass("js-clipboard"), a.forEach(n, function (n) {
                    var e = i(n), t = e.attr("data-clipboard-text") || "";
                    t = (t = a.map(t.split(""), function (n) {
                        return 160 === n.charCodeAt(0) ? " " : n
                    }).join("")).replace(/^\n+|\n+$/g, ""), p.copy({
                        el: e, content: t, call: function () {
                            u.tips("复制成功")
                        }, error: function () {
                            u.alert("复制失败，请手动复制")
                        }
                    })
                }))
            }

            t(), i(document).on("mousemove", function () {
                e(t)
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/copyright", ["nc", "cpn"], function (n, t, e) {
    var a = n("nc"), o = (n("cpn"), a.Base), r = a.$, i = a.Clazz, c = a.Html, p = e.exports = i.create();
    o.extend(p.prototype, {
        initialize: function l(n) {
            var t = (window.location.href || "").split("?")[0];
            if (n.need && !n.need(t)) return;
            c.copy({
                el: document, max: 100, dealContent: function (n, t, e) {
                    var a = [], o = window.location.href,
                        i = r.trim(r(n).closest(".js-copy-mark").attr("data-mark-info"));
                    return i && a.push(i), a.push("链接：" + (e ? '<a target="_blank" href="' + o + '">' + o + "</a>" : o)), a.push("来源：牛客网"), a.push(""), a.push(t), a.join(e ? "<br />" : "\n")
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/docWrite", ["nc", "cpn"], function (n, c, e) {
    var t = n("nc"), i = (n("cpn"), t.Base), o = t.$, a = t.Clazz, p = e.exports = a.create();
    i.extend(p.prototype, {
        initialize: function r(n) {
            document.write;
            document.write = function () {
                var c = o(document.body);
                i.forEach(arguments, function (n) {
                    n && c.append(n)
                })
            }
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/fuckAdBlock", ["nc", "cpn"], function (n, c, t) {
    var l = n("nc"), r = (n("cpn"), l.Base), p = l.Str, u = l.$, e = l.Clazz, i = l.Sys, d = l.Num,
        o = t.exports = e.create();
    r.extend(o.prototype, {
        initialize: function a(n) {
            var c = this;
            i.checkAdBlock(function (n) {
                n && c.initFuckAdBlock()
            })
        }, initFuckAdBlock: function m() {
            var n = {
                all: [{
                    cls: ".mini-banner",
                    style: "#{cls}{margin-bottom:10px;} #{cls} img{display:block;width:100%;}"
                }],
                "/contestRoom": [{
                    cls: ".mini-banner",
                    style: ".topic-banner-mini #{cls}{margin: 0 auto;width:1200px} #{cls} img{display:block}"
                }]
            }, c = window.location.pathname, t = c && n[c], l = n.all, o = {}, a = "", s = function e() {
                var c = "abcdefghijklmnopqrstuvwxyz", t = c.length - 1, l = "";
                return r.forCount(8, function (n) {
                    l += c[d.random(0, t)] || ""
                }), l
            }();
            r.forEach((l || []).concat(t || []), function (n) {
                var c = n.cls, t = !!o[c], l = t ? null : u(c);
                if (n.style && (t || 0 < (l || []).length)) {
                    var e = o[c] || "." + s + r.key(), i = p.execTpl(n.style, {cls: e});
                    !t && l.removeClass(c.replace(".", "")).addClass(e.replace(".", "")), o[c] = e, a += i + " "
                }
            }), a && u(document.body).append('<style type="text/css">' + a + "</style>")
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/hijack", ["nc", "cpn", "../../../base/env"], function (n, e, t) {
    var c = n("nc"), f = (n("cpn"), c.Base), p = c.$, a = c.Clazz, s = (c.Str, n("../../../base/env")),
        o = t.exports = a.create();
    f.extend(o.prototype, {
        initialize: function h(n) {
            if (s.isInDev() || s.isInHttps()) return;
            var o = document.createElement("a"), e = p("script"),
                r = ["nowcoder\\.com", "nowcoder\\.net", "cnzz\\.com", "hm\\.baidu\\.com"], i = !0;
            f.forEach(e, function (n) {
                var e = p.trim(p(n).attr("src"));
                if (i && e) {
                    o.href = e;
                    var t = o.hostname, c = !1;
                    if (f.forEach(r, function (n) {
                        var e = new RegExp(n);
                        c = c || e.test(t)
                    }), !(i = i && c)) {
                        var a = window.location.href.replace(/^http:/, "https:");
                        window.location.href = a
                    }
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/inIframe", ["nc", "cpn", "../../../base/env"], function (n, e, i) {
    var o = n("nc"), a = (n("cpn"), n("../../../base/env")), c = o.Base, t = (o.$, o.Clazz), l = i.exports = t.create();
    c.extend(l.prototype, {
        initialize: function p(n) {
            a.canInIframe() || window.self === window.top || (top.location = window.location)
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/liveTips", ["nc", "cpn"], function (e, i, n) {
    var o = e("nc"), t = (e("cpn"), o.Base), c = o.$, a = o.Clazz, r = o.Cookie, l = n.exports = a.create();
    t.extend(l.prototype, {
        initialize: function s(e) {
            if (r.get("show_live_tips")) return;
            var i = c(".js-global-tips");
            if (!i.get(0)) return;
            var n = i.find("a.ad-close");
            !n.get(0) && (n = i.find("a.icon-nc-cancel"));
            var o = i.find("a.js-global-tips-href").attr("href") || "", t = window.location.href;
            o && -1 === t.indexOf(o) && -1 === o.indexOf(t) && i.show(250);
            n.on("click", function () {
                r.set("show_live_tips", "1", {domain: "nowcoder.com", path: "/", expires: 1}), i.remove()
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/navActiveEmail", ["nc", "cpn"], function (e, n, a) {
    var i = e("nc"), t = (e("cpn"), i.Base), c = i.$, r = i.Clazz, o = i.Str, l = a.exports = r.create();
    t.extend(l.prototype, {
        initialize: function p(e) {
            var a = c("a#send-active-mail");
            a.on("click", function (e) {
                var n = a.prop("tagName").toLowerCase();
                ("a" !== n || o.isJsHref(a.attr("href"))) && window.open("/register/send-activited-email")
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/navLogin", ["nc", "cpn"], function (a, n, i) {
    var e = a("nc"), o = (a("cpn"), e.Base), l = e.$, t = e.Clazz, d = e.Uri, r = i.exports = t.create();
    o.extend(r.prototype, {
        initialize: function p(a) {
            var n = a.domain || "", i = l("a#nav-login"), e = l("a#jsNavRegister"), o = window.location.pathname;
            if (o && "" !== o && "/" !== o && "/login" !== o && "/register" !== o) {
                var t = window.location.href.split("#")[0];
                t = window.decodeURIComponent(t);
                var r = d.addParam({callBack: t}, n + "/login"), c = d.addParam({callBack: t}, n + "/register");
                i.attr("href", r), e.attr("href", c)
            }
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/navSearch", ["nc", "cpn", "../../../action/action", "../../../action/ajax", "../../../base/env", "../../../base/bridge", "../../../base/localization"], function (n, t, e) {
    var a = n("nc"), o = n("cpn"), l = a.$, p = a.Base, d = a.Time, c = a.Clazz, h = a.Uri, v = o.AttachSuggest,
        g = n("../../../action/action"), i = e.exports = c.create(),
        w = {paper: "paper", question: "question", topic: "topic", post: "post", user: "user"};
    p.extend(i.prototype, {
        initialize: function b(n) {
            var t = l(".nowcoder-navbar.nowcoder-other-nav"), e = t.find(".js-search-btn"),
                a = t.find(".newnav-search-wrap"), o = t.find("input[name=query]"), c = t.find("input[name=type]"),
                i = t.find(".js-close-search-btn");
            if (!e.get(0) || !o.get(0)) return;
            e.on("click", function () {
                a.show(), e.css("background-color", "#31363d"), o.focus()
            }), i.on("click", function () {
                a.hide(), e.css("background-color", ""), o.val("")
            });
            var r = v.show({
                input: o,
                defaultIndex: -1,
                attach: {extOffset: {left: -30, top: 12}},
                needSame: !0,
                reqList: function (n, t) {
                    g.searchSuggest({
                        query: {query: n}, call: function (n) {
                            t(p.map(n.data, function (n) {
                                return {text: n}
                            }) || [])
                        }, error: function () {
                            t([])
                        }
                    })
                },
                ok: function (n) {
                    o.val(n.text), o.closest("form").submit()
                }
            });
            r.getEl().css("min-width", t.outerWidth() + 2);
            var s = d.frequency(10);
            l(window).on("scroll", function () {
                s(function () {
                    var n = r.attach;
                    n.isShow() && n.fixPosition()
                })
            }), o.attr("autocomplete", "off");
            var u = window.location.pathname || "";
            if (/^\/search/.test(u)) {
                var f = h.getParam("type");
                f && w[f] && c.val(f)
            }
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/oAuth", ["nc", "cpn", "../../../base/win"], function (c, n, i) {
    var t = c("nc"), o = c("cpn"), a = t.Base, l = t.$, e = t.Clazz, u = t.Browser, r = o.Popup,
        p = c("../../../base/win"), s = i.exports = e.create(), f = !0;
    a.extend(s.prototype, {
        initialize: function d(n) {
            this.initCallback(), this.initBind()
        }, initCallback: function w() {
            function e(n) {
                n && n.split("#")[0] !== window.location.href.split("#")[0] ? window.location.href = n : window.location.reload()
            }

            window.loginCallBack = function (i, n, t) {
                f = !1, p.close(), i = (i = l.trim(i)) && !/^javascript/gi.test(i) ? i : window.location.href;
                var o = window.location.href;
                "true" !== n || /\/register/.test(o) || /\/login/.test(o) ? e(i) : c.async("../../../component/popupSub/popupCompleteAuth", function (n) {
                    n.show({callCb: a.bind(e, null, i), cancelCb: a.bind(e, null, i)})
                })
            }
        }, initBind: function h() {
            l(document).on("click", ".nc-js-action-oauth", function (n) {
                n.preventDefault();
                var i = l(n.currentTarget), t = i.attr("data-href");
                if (t) {
                    var o = p.open(t);
                    o && !u.safari() && setTimeout(function () {
                        o.onunload = function () {
                            setTimeout(function () {
                                f && (p.close(), window.location.reload())
                            }, 1e3)
                        }
                    }, 1e3), r.hide()
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/profileCard", ["nc", "cpn", "../../../component/profileCard", "../../../base/env", "../../../base/config", "../../../action/action", "../../../action/ajax", "../../../base/bridge", "../../../base/localization", "../../bll", "../../uploadRemote", "../../../component/popupSub/popupMsg", "../../../component/attachSub/attachEmoji", "../../../component/popupSub/popupReport"], function (o, e, n) {
    var p = o("nc"), a = (o("cpn"), p.Base), c = (p.$, p.Clazz), t = o("../../../component/profileCard"),
        i = n.exports = c.create();
    a.extend(i.prototype, {
        initialize: function r(o) {
            t.go(".js-nc-card", {attachConf: {verReverse: !1}, keep: !0})
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/rightNav", ["nc", "cpn"], function (n, o, e) {
    var i = n("nc"), t = (n("cpn"), i.Base), c = i.$, r = i.Dom, a = i.Browser, d = i.Db, l = i.Clazz,
        u = e.exports = l.create();
    t.extend(u.prototype, {
        initialize: function p(n) {
            var o = this, e = c(n.el);
            o.el = e.get(0) ? e : c("div.fixed-menu"), o.initGoTop(), o.initQrCode()
        }, initGoTop: function f(n) {
            c(document).on("click", ".js-nav-go-top", function (n) {
                n.preventDefault(), r.scrollTo({top: 0, animation: !0})
            })
        }, initQrCode: function s(n) {
            var o = this.el;
            if (a.mobile() || !o.get(0)) return void o.hide();
            var e = null, i = o.find("div.phone-qrcode"), t = +d.get("phoneQrCodeDuration"), c = (new Date).getTime();
            (!t || 6048e5 <= c - t) && (i.show(), i.find("a.qrcode-close").on("click", function () {
                i.hide(), d.set("phoneQrCodeDuration", c), e && e()
            }));
            o.show(), e = r.fixedPos(o, function (n, o, e) {
                n.css("bottom", Math.max(0, (e - o) / 2))
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/bll/launch/action/tips", ["nc", "cpn"], function (t, e, i) {
    var n = t("nc"), o = t("cpn"), c = n.Base, r = n.$, s = n.Clazz, p = n.Time, a = o.Tips, d = o.Attach,
        l = i.exports = s.create();
    c.extend(l.prototype, {
        initialize: function u(t) {
            var e = this, i = p.frequency(2e3);
            r(document).on("mousemove", function () {
                i(function () {
                    e.initTips(), e.initQrCode()
                })
            })
        }, initTips: function m() {
            a.title(".js-nc-title-tips")
        }, initQrCode: function f() {
            c.forEach(r(".js-app-item"), function (t) {
                (t = r(t)).removeClass("js-app-item");
                var e = r.trim(t.attr("data-url")), i = !!r.trim(t.attr("data-reverse"));
                e && (!/^https?:\/\//.test(e) && (e = window.decodeURIComponent(e)), new d({
                    target: t,
                    needClick: !1,
                    attach: {center: !0, verReverse: i, extOffset: {top: i ? -10 : 10}},
                    content: ['<div style="border:1px solid #e0e0e0;">', '<img src="https://www.nowcoder.com/qr/to?size=150&url=' + window.encodeURIComponent(e) + '" style="width:150px;height:150px;display:block;" />', "</div>"].join("")
                }))
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/cmt/item/bbs", ["nc", "cpn", "./item", "../../popupSub/popupReport", "../../../action/action", "../../../action/ajax", "../../../base/env", "../../../base/bridge", "../../../base/localization", "../../../base/config"], function (a, t, e) {
    var i = a("nc"), s = (a("cpn"), i.$, i.Base, i.Clazz), n = a("./item"), c = e.exports = s.create();
    s.mix(c, n, {
        _template: ['<div class="answer-list-item clearfix js-copy-mark" data-mark-info="作者：#{authorName}">', '<div class="answer-content clearfix">', '<a class="answer-head #{clsUserCard}" data-card-uid="#{authorId}" href="#{urlProfile}" target="_blank">', '<img alt="#{authorName}头像" src="#{headImg}">', "</a>", '<div class="answer-detail">', "<p>", '<a title="#{authorName}" href="#{urlProfile}" target="_blank" data-card-uid="#{authorId}" class="js-copy-tip #{clsUserCard} #{clsHonorLevel} answer-name">#{authorName}</a>', " #{identityStr}", " #{entityOwnerStr}", "#{floorStr}", "#{acceptStr}", "#{litigantStr}", "</p>", '<div class="answer-brief nc-post-content">#{content}</div>', '<div class="answer-legend js-action">', '<span class="answer-time">发表于 #{createTime}</span>', '<a href="javascript:void(0);" class="js-cmt-action" data-action="reply">回复(#{commentCnt})</a>', '<a href="javascript:void(0);" class="js-cmt-action" data-action="like">#{likeTxt}(#{likes})</a>', "</div>", '<div class="reply-box js-sub-cmt-list" style="display:none;"></div>', "</div>", "</div>", "</div>"].join(""),
        _listTemplate: '<div class="answer-list discuss-topic-answers js-list"></div>',
        _noneTemplate: ['<div class="blank-box">', '<div class="blank-img"><img src="//static.nowcoder.com/images/sofa.png"></div>', "<p>帖子还没人回复，快来抢沙发！</p>", "</div>"].join("")
    }, {
        getActionEl: function r() {
            return this.getEl().find(".js-action")
        }, getSubCmtEl: function l() {
            return this.getEl().find(".js-sub-cmt-list")
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/cmt/item/item", ["nc", "cpn", "../../popupSub/popupReport", "../../../action/action", "../../../action/ajax", "../../../base/env", "../../../base/bridge", "../../../base/localization", "../../../base/config"], function (t, i, e) {
    var n = t("nc"), a = t("cpn"), m = n.$, g = n.Base, o = n.Component, r = n.Time, s = n.Clazz, c = n.Dom,
        d = n.Limit, l = n.Html, p = a.Popup, u = a.PopupImage, f = a.Attach, y = t("../../popupSub/popupReport"),
        h = t("../../../action/action"), v = t("../../../base/config"), C = e.exports = s.create();
    s.mix(C, o, {
        _template: '<div class=""></div>',
        _listTemplate: '<div class="js-list"></div>',
        _noneTemplate: "没有数据",
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, i = t.getEl();
                t.isFeedAd && i.find(".js-cmt-action").remove(), t.isFeedAd && t.initAdBtn(), !t.isFeedAd && t.initExtAction()
            }
        }, {
            name: "click .js-cmt-action", handler: function (t) {
                t.stopPropagation();
                var i = this, e = m(t.currentTarget), n = m.trim(e.attr("data-action")),
                    a = "action" + n.slice(0, 1).toUpperCase() + n.slice(1);
                !i.isFeedAd && i[a] && i[a](e)
            }
        }, {
            name: "click .answer-brief img", handler: function (t) {
                var i = m(t.currentTarget), e = m.trim(i.attr("src"));
                e && !i.attr("data-identity") && u.show(e)
            }
        }],
        initConf: function b(t, i) {
            var e = !!t.isFeedAd;
            return t.headImg = t.headImg || v.avatar.small, g.extend({}, i, {
                item: t,
                floor: e ? "广告" : g.id(i.index) ? +i.index + 1 : ""
            }, t)
        }
    }, {
        initialize: function w(t) {
            this.isFeedAd = !!t.isFeedAd
        }, initAdBtn: function A() {
            var i = this, e = i.getEl(), t = e.find(".js-ad-tag"), n = 70, a = new f({
                target: t,
                content: ['<div class="tooltip bottom tooltip-info" style="width:', n, 'px;">', '<div class="tooltip-arrow"><i></i></div>', '<div class="tooltip-inner"><a href="javascript:void(0);" class="js-not-interest" style="color:#888">不感兴趣</a></div>', "</div>"].join(""),
                noHover: !0,
                needClick: !0,
                attach: {extOffset: {left: (t.outerWidth() - n) / 2}}
            });
            i.pushChild(a), a.getEl(".tooltip-arrow").css("left", n / 2 + "px"), a.getEl().on("click", ".js-not-interest", function () {
                h.adNotInterest({
                    body: {adId: i.rawConfig.id}, call: function (t) {
                        e.slideUp(150, function () {
                            i.destroy()
                        })
                    }, error: function (t) {
                        p.alert(t.msg)
                    }
                })
            })
        }, initExtAction: function k() {
            var t = this, i = t.rawConfig, e = i.item, n = (t.getEl(), m(t.getActionEl())), a = i.typeStatus,
                o = i.isWonderful, r = i.isAward, s = i.isLitigant,
                c = i.entityUid && g.id(i.entityUid) === g.id(i.currentUid), d = t.isAdmin(), l = t.isSelf(),
                p = a.isSubCmt;
            if (0 < n.length) {
                var u = [{
                    title: "举报",
                    action: "report",
                    need: !l && (!p || i.needSubReport),
                    cls: "click-del"
                }, {title: "当事人回复", action: "litigant", need: d && !p && !s && i.needLitigant}, {
                    title: "取消当事人回复",
                    action: "litigant",
                    need: d && !p && s && i.needLitigant
                }, {title: "设置精彩", action: "wonderful", need: d && !p && !o && i.needWonderful}, {
                    title: "取消精彩",
                    action: "wonderful",
                    need: d && !p && o && i.needWonderful
                }, {
                    title: "采纳回答",
                    action: "accept",
                    need: !p && r && c && (d || g.id(e.authorId) !== g.id(i.entityUid))
                }, {title: "标记为垃圾", action: "spam", need: d}, {
                    title: "删除",
                    action: "del",
                    cls: "click-del",
                    need: (d || l) && !e.isAccepted
                }], f = g.map(u, function (t) {
                    return t.need ? '<a href="javascript:void(0);" class="js-cmt-action ' + (t.cls || "") + '" data-action="' + t.action + '">' + t.title + "</a>" : ""
                }).join("");
                n.append(f)
            }
        }, actionLike: function x(i) {
            var e = this.rawConfig, n = e.isLiked;
            d.mark(i) || h[n ? "unlike" : "like"]({
                body: {id: e.id, type: v.type.comment}, call: function (t) {
                    e.isLiked = !n, e.likes = t.count, i.text((n ? "赞" : "已赞") + "(" + t.count + ")")
                }, error: function (t) {
                    p.alert(t.msg)
                }, always: function () {
                    d.pause(i)
                }
            })
        }, actionDel: function S(t) {
            var i = this, e = i.rawConfig, n = i.getEl();
            p.confirm("确定删除评论？", function () {
                h.cmtDel({
                    body: {id: e.id}, call: function (t) {
                        n.slideUp(150, function () {
                            i.subCmtList && i.subCmtList.destroy(), i.fire("delCmt", t), i.destroy(), p.tips("操作成功")
                        })
                    }, error: function (t) {
                        p.alert(t.msg)
                    }
                })
            })
        }, actionReply: function E(t) {
            var i = this, e = i.getSubCmtEl();
            if (0 === e.length) return;
            if (d.mark(t)) return;
            if (i.subCmtList) return e.slideUp(150, function () {
                e.hide(), i.subCmtList.destroy(), i.subCmtList = null, e.html(""), d.pause(t)
            });
            i.openSubCmt()
        }, actionWonderful: function I(i) {
            var e = this, n = e.getEl(), a = e.rawConfig, o = a.isWonderful;
            p.confirm(o ? "你确定将此评论取消精彩吗" : "你确定要将评论设为精彩吗", function () {
                !d.mark(i) && h[o ? "cmtDelWonderful" : "cmtAddWonderful"]({
                    body: {commentId: a.id},
                    call: function (t) {
                        a.isWonderful = !o, c.cls(n.find(".post-floor-green,.post-floor"), {
                            "post-floor": o,
                            "post-floor-green": !o
                        }), i.text(o ? "设置精彩" : "取消精彩"), e.fire("wonderfulCmt")
                    },
                    error: function (t) {
                        p.alert(t.msg)
                    },
                    always: function () {
                        d.pause(i)
                    }
                })
            })
        }, actionLitigant: function j(i) {
            var e = this, n = e.getEl(), a = e.rawConfig, o = a.isLitigant;
            p.confirm(o ? "你确定将此评论取消当事人评论吗" : "你确定要将评论设为当事人评论吗", function () {
                !d.mark(i) && h[o ? "cmtDelLitigant" : "cmtAddLitigant"]({
                    body: {commentId: a.id}, call: function (t) {
                        a.isLitigant = !o, o && n.find(".lz-reply").remove(), !o && n.find(".answer-detail p").append('<span class="lz-reply"><span class="lz-reply-txt">当事人回复</span></span>'), i.text(o ? "当事人回复" : "取消当事人回复"), e.fire("litigantCmt")
                    }, error: function (t) {
                        p.alert(t.msg)
                    }, always: function () {
                        d.pause(i)
                    }
                })
            })
        }, actionAccept: function L(i) {
            var e = this, n = e.getEl(), a = e.getActionEl(), t = e.rawConfig;
            p.confirm("采纳本楼为最佳回答后，你悬赏的牛币将直接打入对方账户，你将无法撤销本操作，是否确定采纳？", function () {
                !d.mark(i) && h.cmtAccept({
                    body: {commentId: t.id, entityId: t.entityId, entityType: t.entityType},
                    call: function (t) {
                        n.find(".post-floor").after('<span class="plusFine accept-mini-tag float-right">已采纳</span>'), a.find(".js-cmt-action[data-action=del]").remove(), i.remove(), e.fire("acceptCmt")
                    },
                    error: function (t) {
                        p.alert(t.msg)
                    },
                    always: function () {
                        d.pause(i)
                    }
                })
            })
        }, actionReport: function U() {
            y.show({type: v.type.comment, entityId: this.rawConfig.id, mainCommentEntryId: this.rawConfig.postId})
        }, actionSpam: function T() {
            var n = this, a = n.rawConfig;
            new p({
                title: "提示",
                content: ['<div style="text-align:center;">', '<a href="javascript:void(0);" class=" btn btn-primary btn-lg js-close-popup" data-type="1" style="margin-bottom:20px;">这条回帖是垃圾</a>', '<a href="javascript:void(0);" class="btn btn-warn btn-lg js-close-popup">TA的回帖都是垃圾</a>', "</div>"].join("")
            }).getEl().on("click", "a.btn-lg", function (t) {
                var i = m(t.currentTarget), e = "1" === m.trim(i.attr("data-type"));
                p.confirm(e ? "确定将这条评论标记为垃圾吗？" : "确定将这个用户的所有评论标记为垃圾，并拉黑TA吗？", function () {
                    h[e ? "cmtMarkSpam" : "cmtMarkUserAllSpam"]({
                        body: e ? {cid: a.id} : {uid: a.authorId, type: 2},
                        call: function () {
                            n.fire("delCmt")
                        },
                        error: function (t) {
                            p.alert(t.msg)
                        }
                    })
                })
            })
        }, openSubCmt: function z() {
            var i = this, e = i.rawConfig, n = i.getSubCmtEl(), a = m(i.getActionEl().find("a.js-cmt-action")[0]);
            0 < n.length && !i.isFeedAd && t.async("../index", function (t) {
                n.show(), i.subCmtList = new t({
                    renderTo: n,
                    type: "sub",
                    cmtClazz: i.constructor.subCmtClazz,
                    isAdmin: e.isAdmin,
                    isSubCmt: !0,
                    needSubReport: !!e.needSubReport,
                    lordUid: e.lordUid,
                    needReply: !0,
                    entityId: e.id,
                    entityOwnerId: e.authorId,
                    entityType: v.type.comment,
                    currentUid: e.currentUid,
                    userId: e.authorId,
                    pageSize: 10,
                    page: 1,
                    order: 1,
                    extHeight: e.extHeight,
                    clsUserCard: e.clsUserCard,
                    clsHonorLevel: e.clsHonorLevel,
                    urlProfile: e.urlProfile,
                    extParam: e.extParam,
                    postId: e.parentId,
                    listeners: {
                        listDataChange: function (t) {
                            a.text("回复(" + (t.totalCount || 0) + ")")
                        }
                    }
                }), d.pause(a)
            })
        }, getSubCmtEl: function F() {
        }, getActionEl: function W() {
        }, isSelf: function D() {
            var t = this.rawConfig, i = g.id(t.currentUid);
            return i && i === g.id(t.authorId)
        }, isAdmin: function _() {
            return !!this.rawConfig.isAdmin
        }, _getData: function H(t) {
            var i = this, e = t.typeStatus, n = t.item, a = g.map(t.identity, i._getIdentityStr).join(""),
                o = g.extend({}, t, {
                    id: t.id,
                    createTime: r.relate(new Date(t[t.isEdited ? "updateTime" : "createTime"]), "yyyy-MM-dd HH:mm:ss"),
                    likeTxt: t.isLiked ? "已赞" : "赞",
                    likeType: t.isLiked ? "unlike" : "like",
                    floorStr: e.isWonderful || e.isAccept || !t.floor ? "" : '<span class="' + (t.isWonderful ? "post-floor-green" : i.isFeedAd ? "post-ad-tag js-ad-tag" : "post-floor") + '">' + t.floor + (i.isFeedAd ? "" : "#") + (i.isFeedAd ? '<i class="icon-angle-down"></i>' : "") + "</span>",
                    acceptStr: e.isWonderful || e.isAccept || !n.isAccepted ? "" : '<span class="plusFine accept-mini-tag float-right">已采纳</span>',
                    litigantStr: t.isLitigant ? '<span class="lz-reply"><span class="lz-reply-txt">当事人回复</span></span>' : "",
                    identityStr: a,
                    entityOwnerStr: t.lordUid && t.lordUid === n.authorId ? '<a href="javascript:void(0);"><img class="identity-icon" src="//uploadfiles.nowcoder.com/images/20190708/56_1562592127316_5889949873E3E23C8A0EC0CC8F6042A8" /></a>' : ""
                }, i.getExtData && i.getExtData());
            return o.content && (o.content = l.replaceLink(o.content)), o
        }, _getIdentityStr: function R(t) {
            return '<a title="' + t.name + '" href="/user/authentication" class="js-nc-title-tips" target="_blank"><img class="' + t.idenClass + ' js-nc-title-tips" data-identity="1" src="//static.nowcoder.com/nc/image/identity/' + t.level + '.png"></a>'
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/cmt/item/sub", ["nc", "cpn", "./item", "../../popupSub/popupReport", "../../../action/action", "../../../action/ajax", "../../../base/env", "../../../base/bridge", "../../../base/localization", "../../../base/config", "../cpn/reply", "../../../bll/atList", "../../attachSub/attachEmoji"], function (e, t, r) {
    var a = e("nc"), n = (e("cpn"), a.$, a.Base), i = a.Clazz, s = a.Str, l = a.Limit, o = e("./item"),
        c = e("../cpn/reply"), d = r.exports = i.create();
    i.mix(d, o, {
        _template: ['<div class="reply-list-item js-copy-mark" data-mark-info="作者：#{authorName}">', '<div class="reply-main clearfix">', '<div class="reply-person" style="margin-right:5px;">', '<a href="#{urlProfile}" target="_blank" data-card-uid="#{authorId}" class="js-copy-tip #{clsUserCard} #{clsHonorLevel}">#{authorName}</a>', " #{identityStr}", " #{entityOwnerStr}", "#{authorExt}", "</div>", '<div class="reply-content">#{content}</div>', "</div>", '<div class="answer-legend reply-info js-sub-action">', '<span class="reply-time">#{createTime}</span>', '<a href="javascript:void(0);" class="reply-answer js-cmt-action" data-action="reply">回复</a>', '<a href="javascript:void(0);" class="reply-like js-cmt-action" data-action="like">#{likeTxt}(#{likes})</a>', "</div>", '<div class="js-sub-reply" style="display:none;"></div>', "</div>"].join(""),
        _listTemplate: '<div class="reply-list js-list"></div>',
        _noneTemplate: " "
    }, {
        actionReply: function p(e) {
            var r = this, a = r.rawConfig, t = r.getEl().find(".js-sub-reply");
            if (l.mark(e)) return;
            if (r.replyCpn) return t.slideUp(150, function () {
                t.hide(), r.replyCpn.destroy(), r.replyCpn = null, t.html(""), l.clear(e)
            });
            r.replyCpn = new c({
                renderTo: t, placeholder: "回复" + a.authorName, listeners: {
                    render: function () {
                        var e = this.getEl();
                        e.prepend('<div class="toparrow"></div>').css("margin-top", 0)
                    }, goAddCmt: function (e, t) {
                        r.fire("goAddCmt", {content: e, toUserId: a.authorId, toCommentId: a.id}, t)
                    }
                }
            }), t.slideDown(150, function () {
                l.clear(e), r.replyCpn.focus()
            })
        }, getActionEl: function u() {
            return this.getEl().find(".js-sub-action")
        }, getExtData: function m() {
            var e = this.rawConfig, t = "：";
            if (e.toUserId && n.id(e.toCommentId) !== n.id(e.parentId)) {
                var r = n.map(e.toUserIdentity, this._getIdentityStr).join(""), a = n.id(e.toUserHonorLevel);
                t = s.execTpl(' 回复 <a href="/profile/#{uid}" target="_blank" data-card-uid="#{uid}" class="#{clsUserCard} #{cls}">#{userName}</a> #{toIdentityStr}#{entityOwnerStr}：', {
                    uid: e.toUserId,
                    userName: e.toUserName,
                    clsUserCard: e.clsUserCard || "js-nc-card",
                    cls: a ? s.execTpl(e.clsHonorLevel || "level-color-#{honorLevel}", {honorLevel: a}) : "",
                    toIdentityStr: r,
                    entityOwnerStr: e.lordUid && e.lordUid === e.toUserId ? '<a href="javascript:void(0);"><img class="identity-icon" src="//uploadfiles.nowcoder.com/images/20190708/56_1562592127316_5889949873E3E23C8A0EC0CC8F6042A8" /></a>' : ""
                })
            }
            var i = (e.content || "").replace(/\n/gi, "<br />");
            return i = i.replace(/\s+([^<>]+)(?=<)|\s+([^<>]+)$/g, function (e) {
                return e.replace(/\s/g, "&nbsp;")
            }), {authorExt: t, content: i}
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/cmt/cpn/reply", ["nc", "../../../bll/atList", "cpn", "../../../action/action", "../../../action/ajax", "../../../base/env", "../../../base/bridge", "../../../base/localization", "../../attachSub/attachEmoji"], function (t, i, e) {
    var a = t("nc"), n = a.$, r = (a.Base, a.Clazz), l = a.Component, o = a.Dom, c = t("../../../bll/atList"),
        s = t("../../attachSub/attachEmoji"), p = e.exports = r.create();
    r.mix(p, l, {
        _template: ['<div class="reply-editbox clearfix" style="margin-top:10px;">', '<div class="reply-write">', '<textarea placeholder="#{placeholder}" class="reply-input reply-input-textarea js-ipt"></textarea>', "</div>", '<div class="reply-action clearfix">', '<a href="javascript:void(0);" class="icon-emotion js-reply-emoji"></a>', '<a class="btn btn-primary reply-btn js-reply" href="javascript:void(0);">回复</a>', "</div>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, i = t.getEl();
                t.ipt = i.find(".js-ipt"), t.initInput(), t.initEmoji()
            }
        }, {
            name: "click a.js-reply", handler: function (t) {
                var i = this, e = n(t.currentTarget), a = (i.rawConfig, i.val());
                if (!a) return i.focus();
                i.fire("goAddCmt", a, e)
            }
        }]
    }, {
        initInput: function u() {
            var t = this.getEl(), i = this.ipt;
            i.on("focus", function () {
                t.addClass("reply-focus")
            }).on("blur", function () {
                t.removeClass("reply-focus")
            }), window.setTimeout(function () {
                i.outerWidth(t.width())
            }, 0), o.txtAutoHeight({el: i}), c.input(i)
        }, initEmoji: function d() {
            var i = this, t = i.getEl(), e = s.show({
                target: t.find(".js-reply-emoji"), call: function (t) {
                    s.renderInIpt(i.ipt, t)
                }
            });
            i.pushChild(e)
        }, val: function f(t) {
            var i = this.ipt;
            if (0 === arguments.length) return n.trim(i.val());
            (t = n.trim(t)) !== n.trim(i.val()) && (i.val(t), i.trigger("change"))
        }, focus: function h() {
            this.ipt.focus()
        }, _getData: function m(t) {
            return {placeholder: t.placeholder || "请输入你的观点"}
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/codeEditor/index", ["ncPlugin/codemirror/style/codemirror.css", "ncPlugin/codemirror/style/theme/monokai.css", "ncPlugin/codemirror/codemirror", "nc", "cpn", "../../../base/config", "../../../base/bridge", "../../../base/env", "../../../action/action", "../../../action/ajax", "../../../base/localization", "../../popupSub/popupCaptcha", "../../select"], function (a, e, i) {
    a("ncPlugin/codemirror/style/codemirror.css"), a("ncPlugin/codemirror/style/theme/monokai.css");
    var o = a("ncPlugin/codemirror/codemirror"), t = a("nc"), n = a("cpn"), p = t.$, r = t.Component, l = t.Clazz,
        v = t.Base, c = t.Db, s = t.Dom, u = t.Str, d = t.CodeLang, f = t.CodeSubmit, g = n.Layer, C = n.Popup,
        h = a("../../../base/config"), m = a("../../../base/bridge"), S = a("../../../action/action"),
        b = a("../../popupSub/popupCaptcha"), E = a("../../select"), w = i.exports = l.create(), y = "codeEditorCache";
    l.mix(w, r, {
        _template: ['<div class="subject-eidt-box" style="position:relative;">', '<div class="subject-eidt-header">', '<a href="javascript:void(0);" class="ico-fresh js-fresh-code" title="还原模板代码">' + v.lang("重置") + "</a>", '<a href="javascript:void(0);" class="ico-computer js-self-test" title="代码自测">自测</a>', '<div class="subject-edit-oprt js-head-tool">', '<a href="javascript:void(0);" class="icon-fullscreen js-full-screen"></a>', "</div>", "</div>", '<div class="js-editor-body code-font"></div>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, i = e.rawConfig, t = e.getEl();
                i.noRefresh && t.find(".js-fresh-code").remove(), i.noSelfTest && t.find(".js-self-test").remove(), i.selfTestWarning = i.selfTestWarning || "注意：自测用例通过仅代表自测时使用的数据通过，不代表题目的测试用例均能通过。", e.initCMPlugin(function () {
                    e.headerEl = t.find("div.subject-eidt-header"), e.editorEl = t.find("div.js-editor-body"), e.initHeader(), e.initEditor(), e.originalHeight = t.height(), e.toolbarHeight = t.find("div.subject-eidt-header").outerHeight(), (i.width || i.height) && e.resize(i.width, i.height), e.initAutoSize(), e.initPlugin(function () {
                        e.initEvent(), e.execPlugin("cache", "initCacheCode")
                    })
                })
            }
        }, {
            name: "click a.js-full-screen", handler: function () {
                var e = this, i = e.rawConfig, t = v.isFunction(i.goFullScreen);
                t && i.goFullScreen.call(e), !t && e.goFullScreen()
            }
        }, {
            name: "click a.js-fresh-code", handler: function () {
                var e = this;
                e.rawConfig.noRefresh || C.confirm(v.lang("刷新后代码框将重置为初始状态，正在编辑的代码将清空，但不会影响已提交的代码，确定刷新吗？"), function () {
                    e.execPlugin("cache", "restoreTpl")
                })
            }
        }, {
            name: "click div.js-editor-mask", handler: function () {
                var e = this.rawConfig;
                this._disabled && e.clickMask && e.clickMask.call(this)
            }
        }],
        saveLastLangue: function k(e) {
            var i = window.localStorage, t = c.create(y);
            e && t.set("NC_Code_Langue", e), e && i && i.removeItem && i.removeItem("NC_Code_Langue")
        },
        getLastLangue: function T() {
            var e = window.localStorage, i = c.create(y).get("NC_Code_Langue");
            !i && e && (i = e.NC_Code_Langue, this.saveLastLangue(i));
            return i
        }
    }, {
        initialize: function z(e) {
            this.codeSubmit = new f, this._disabled = !1, this._createdQueue = []
        }, initCMPlugin: function _(i) {
            var t = ["ncPlugin/codemirror/mode/clike/clike", "ncPlugin/codemirror/addon/edit/matchbrackets", "ncPlugin/codemirror/addon/edit/closebrackets", "ncPlugin/codemirror/addon/hint/showhint", "ncPlugin/codemirror/addon/invisible/invisible"],
                n = 0;
            v.forEach(t, function (e) {
                a.async(e, function () {
                    t.length <= ++n && i && i()
                })
            })
        }, initHeader: function x() {
            var t = this, e = t.rawConfig.options, n = -1;
            v.forEach(e, function (e, i) {
                n = e.checked && n < 0 ? i : n, e.text = d.getNameById(e.value) || "", e.value = v.id(e.value)
            }), e[Math.min(Math.max(0, n), e.length - 1)].checked = !0, t.langueSelect = new E({
                options: e,
                renderTo: t.headerEl,
                renderBy: "prepend",
                change: function () {
                    var e = t.valLangue();
                    w.saveLastLangue(e);
                    var i = d.getCMById(e);
                    i && a.async("ncPlugin/codemirror/mode/" + i.plugin + "/" + i.plugin, function () {
                        t.editor.setOption("mode", {name: i.name})
                    }), t.execPlugin("cache", "restoreCode"), t.fire("langueChange")
                }
            })
        }, initEditor: function P() {
            var i = this, e = i.rawConfig, t = (i.getEl(), c.create("codeEditorCache")), n = v.extend({
                theme: "monokai",
                indentUnit: r(),
                lineNumbers: !0,
                showInvisibles: !0,
                mode: "text/x-csrc",
                matchBrackets: !0,
                autoCloseBrackets: !0,
                hintOptions: {completeSingle: !1, closeOnUnfocus: !0},
                extraKeys: {
                    Tab: function (e) {
                        var i = e.somethingSelected();
                        i && e.indentSelection("add"), !i && e.replaceSelection(new Array(r() + 1).join(" "), "end", "+input")
                    }
                }
            }, e.codeMirrorConf);

            function r() {
                return {2: 2, 4: 4, 8: 8}[t.get("settingSpaceCount")] || 4
            }

            i.editor = o(i.editorEl.get(0), n), !!e.readOnly && i.disable(), v.forEach(i._createdQueue, function (e) {
                e && e.call(i)
            }), i._createdQueue.length = 0
        }, initPlugin: function j(t) {
            var n = this, e = [{name: "cache", path: "./plugin/cache"}, {name: "hint", path: "./plugin/hint"}, {
                name: "setting",
                path: "./plugin/setting"
            }, {name: "selfTest", path: "./plugin/selfTest"}], r = e.length, o = 0;
            n.plugin = {}, v.forEach(e, function (i) {
                a.async(i.path, function (e) {
                    n.plugin[i.name] = new e({parent: n, editor: n.editor}), r <= ++o && t && t()
                })
            })
        }, initEvent: function L() {
            var e = this, i = e.rawConfig, t = e.getEl(), n = e.editor;
            n.on("changes", function () {
                e.fire("codeChange")
            }), n.on("cursorActivity", function () {
                e._disabled && (window.setTimeout(function () {
                    t.find(".CodeMirror-cursor").hide()
                }, 0), i.clickMask && i.clickMask())
            })
        }, initAutoSize: function M() {
            var e = this;
            e.rawConfig.noAutoSize || (e.editor.on("changes", function () {
                e.autoSize()
            }), e.autoSize())
        }, disable: function H(e) {
            var i = this;
            if ((e = !1 !== e) !== i._disabled) {
                var t = i.getEl();
                t.find(".CodeMirror-cursor")[e ? "hide" : "show"](), i._disabled = e, i.editor.setOption("readOnly", e), i.langueSelect.disabled(e)
            }
        }, val: function I(e, i) {
            2 <= arguments.length && (this.valLangue(e), this.valCode(i))
        }, valCode: function F(e) {
            if (0 === arguments.length) return (this.editor.getValue() || "").replace(/ /gi, " ");
            this.editor.setValue(e || "")
        }, valLangue: function U(e, i) {
            if (0 === arguments.length) return this.langueSelect.val();
            (e = v.id(e)) && this.langueSelect.val(e, i)
        }, resize: function q(t, n, r) {
            var o = this;
            o.waitCreated(function () {
                var e = o.getEl();
                t && e.outerWidth(t), n ? (n = parseInt(n, 10), e.outerHeight(n), !r && (o.originalHeight = e.height())) : n = e.outerHeight();
                var i = o.toolbarHeight = e.find("div.subject-eidt-header").outerHeight();
                o.editor.setSize("100%", n - i), o.autoSize(), o.execPlugin("selfTest", "resize")
            })
        }, autoSize: function B() {
            var e = this;
            if (!e.rawConfig.noAutoSize && !e.isFullScreen) try {
                e._editorScrollEl = e._editorScrollEl || p(e.editor.getScrollerElement()), e._editorSizerEl = e._editorScrollEl.find("div.CodeMirror-sizer");
                var i = window.parseInt(e._editorSizerEl.css("min-height") || e._editorSizerEl.height(), 10);
                e.editor.setSize("100%", Math.max(e.originalHeight - e.toolbarHeight, i)), e.getEl().height("auto")
            } catch (t) {
            }
        }, goFullScreen: function D() {
            var e = this, i = e.rawConfig, t = e.getEl(), n = p(window);
            if (s.cls(t.find(".js-full-screen"), {
                "icon-fullscreen": e.isFullScreen,
                "icon-resize-small": !e.isFullScreen
            }), e.isFullScreen) return e.isFullScreen = !1, i.renderTo.append(t), e.layer.hide(), e.resize(i.width, e.originalHeight, !0), void e.fire("fullScreen", !1);
            e.isFullScreen = !0, e.layer = new g({
                showContent: !0, clickToHide: !1, listeners: {
                    render: function () {
                        this.contentEl.addClass("nk-body"), this.append(t), e.resize("100%", n.height(), !0)
                    }, winresize: function () {
                        e.resize("100%", n.height(), !0)
                    }
                }
            }), e.fire("fullScreen", !0)
        }, getLangueData: function R(e) {
            var i = this.rawConfig, t = v.toMap(i.options, function (e) {
                return {key: e.value, value: e}
            });
            return e ? t[e] : t
        }, checkCode: function O(i) {
            var e = this.valLangue(), t = this.valCode(),
                n = p.trim(t) ? 1e5 < t.length ? "啊，代码不要这么长嘛，人家受不了了~" : e ? "" : "错误的代码语言" : "代码不能为空";
            if (n) return m(n);
            if ("1" === e || "2" === e || "22" === e) {
                if (/%I64/.test(t) && !/%ll/.test(t)) {
                    var r = C.confirm("在提交的代码中发现%I64，牛客OJ后台是Linux系统，64位long long请使用%lld，unsigned long long请使用 %llu", v.bind(i, null, !1), v.bind(i, null, !0));
                    return r.okBtn.html("返回修改"), void r.cancelBtn.html("强制提交")
                }
            } else if ("4" === e) {
                var o = this.getLangueData(), a = o[e];
                if (!a.tplCode) {
                    for (var l = p.trim(t).split("\n"), c = !1, s = !1, u = 0, d = l.length; u < d; u++) {
                        var f = l[u];
                        if (!c) {
                            var g = f.split("//")[0] || "";
                            if (/\bpackage\b/.test(g)) return m("请删除代码开头的package信息")
                        }
                        var h = /public\s+class\s+(\w+)/.exec(f);
                        if (h && !s && (c = !0, !(s = "Main" === h[1]))) return m("请修改类名为Main")
                    }
                    if (!c) return m("找不到类名，请修改类名为Main")
                }
            }

            function m(e) {
                C.alert(e), i && i(!1)
            }

            i && i(!0)
        }, runCode: function A() {
            var l = this, c = l.execPlugin("selfTest", "val") || {}, s = !!c.inTest;

            function i(e) {
                var n = l.rawConfig, i = n.runCode || {}, t = !!i.questionId, r = {
                    pid: i.pid,
                    tid: i.tid,
                    qid: i.qid,
                    questionId: i.questionId || i.qid,
                    tagId: i.tagId,
                    subTagId: i.subTagId,
                    content: l.valCode(),
                    language: l.valLangue()
                };
                s && v.extend(r, {input: c.input, output: c.output, selfType: n.selfTestType || 9});
                var o = n.getUrlSubmitCode ? n.getUrlSubmitCode(t, s) : "",
                    a = n.getUrlGetCodeStatus ? n.getUrlGetCodeStatus(t, s) : "";
                l.codeSubmit[s ? "submitDiyCode" : t ? "submitSelfCode" : "submitTestCode"]({
                    $: e,
                    urlSubmitCode: o || S[s ? "codeSelfTestUrl" : t ? "codeSubmitUrl" : "codeRunUrl"](),
                    urlGetCodeStatus: a || S[s ? "codeSelfTestStatusUrl" : "codeStatusUrl"](),
                    data: r,
                    maxStatusDelay: n.maxStatusDelay,
                    extCodeParam: n[s ? "selfTestRunExtParam" : "runExtParam"],
                    extStatusParam: n.statusExtParam,
                    feedback: function (e, i, t) {
                        e = e.replace(/^\n+|\n+$/gi, ""), s && (e = u.encodeHTML(e.replace(/所有的?测试用例/gi, "你的自测数据")).replace(/\n/g, "<br />")), s && !1 === i && (e += '\n<span style="color:#ff6547">' + n.selfTestWarning + "</span>"), l.showResult(e, i, s, t || {})
                    },
                    cbGetCaptcha: function (e) {
                        b.show({type: h.captcha.runCode, url: n.captchaUrl, call: e, cancel: e})
                    },
                    cbGetCaptchaError: function () {
                        l.fire("runCodeError")
                    },
                    cbSubmitCodeBefore: function () {
                        l.fire("beforeRunCode")
                    },
                    cbSubmitCodeComplete: function (e) {
                        e && (e.isSelfTest = s), l.fire("runCodeSubmit", e)
                    },
                    cbSubmitCodeError: function (e) {
                        e && (e.isSelfTest = s), l.fire("runCodeError", e)
                    },
                    cbStatusCodeBefore: function () {
                        l.fire("beforeReqStatus")
                    },
                    cbStatusCodeSuccess: function (e) {
                        e && (e.isSelfTest = s), !s && l.fire("runCodeSuccess", e), l.fire("runCodeFinish", e)
                    },
                    cbStatusCodeFail: function (e) {
                        e && (e.isSelfTest = s), l.fire("runCodeDanger", e), l.fire("runCodeFinish", e)
                    },
                    cbStatusCodeError: function (e) {
                        e && (e.isSelfTest = s), l.fire("runCodeError", e)
                    }
                })
            }

            l.checkCode(function (e) {
                e && l.getJquery(i), !e && l.fire("runCodeError", {code: -1, msg: "代码不符合规范", isSelfTest: s})
            })
        }, showResult: function J(e, i) {
            var t = this.rawConfig.tipEl;
            if (p.trim(e)) return t.removeClass(i ? "alert-info" : "alert-danger").addClass(i ? "alert-danger" : "alert-info"), t.html(e.replace(/\n/g, "<br />")).show(), void t.parent().show();
            t.html("").hide()
        }, waitCreated: function N(e) {
            this.editor ? e && e.call(this) : this._createdQueue.push(e)
        }, exactHeight: function G() {
            var e = this;
            return e._editorScrollEl = e._editorScrollEl || p(e.editor.getScrollerElement()), e._editorSizerEl = e._editorScrollEl.find("div.CodeMirror-sizer"), window.parseInt(e._editorSizerEl.css("min-height") || e._editorSizerEl.height(), 10) + (e.toolbarHeight || 0)
        }, execPlugin: function Q(e, i) {
            var t = (this.plugin || {})[e], n = [].slice.call(arguments, 2);
            if (t && t[i]) return t[i].apply(t, n)
        }, getJquery: function W(i) {
            var t = this;
            if (t.tempJquery) return i && i(t.tempJquery);
            var e = S.codeSubmitUrl();
            m.create(e, function (e) {
                t.tempJquery = e, i && i(e)
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/index", ["ncPlugin/kindeditor/kindeditor", "ncPlugin/kindeditor/kindeditor/themes/nowcoder/nowcoder.css", "nc", "cpn", "../../../base/config", "../editorStyle", "./util"], function (i, t, e) {
    i("ncPlugin/kindeditor/kindeditor"), i("ncPlugin/kindeditor/kindeditor/themes/nowcoder/nowcoder.css");
    var n = window.KindEditor, o = i("nc"), h = (i("cpn"), o.$), a = o.Cookie, r = o.Component, l = o.Clazz,
        c = (o.Browser, o.Base), u = o.Dom, d = i("../../../base/config"), s = i("../editorStyle"), g = i("./util"),
        f = e.exports = l.create();
    l.mix(f, r, {
        _template: '<div style="position:relative;"></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, e = t.rawConfig;
                t.getEl();
                t.initEvent(), t.initPlugin(), e.disabled && t.disable(), t.resize(e.width, e.height), t.initKe()
            }
        }, {
            name: "destroy", type: "custom", handler: function () {
                try {
                    this.keEditor.remove()
                } catch (t) {
                }
            }
        }],
        create: function p(t, e) {
            if (0 === (t = h(t)).length) return;
            var i = (t.prop("tagName") || "").toLowerCase(), o = "input" === i || "textarea" === i;
            return new f(c.extend({
                renderTo: t,
                renderBy: "replaceWith",
                content: o ? t.val() : "",
                height: Math.max(t.outerHeight(), 200)
            }, e))
        }
    }, {
        initialize: function m(t) {
            this._createdQueue = []
        }, initKe: function k() {
            this._initKePlugin();
            var t = this.getEl(), e = h("<div></div>");
            t.append(e);
            var i = this.keEditor = n.create(e.get(0), this._getConf()), o = i.html;
            i.html = function (t) {
                return t ? (t = t.replace(/\u00A0/g, "&nbsp;"), o.call(this, t)) : o.apply(this, arguments)
            }
        }, initPlugin: function v() {
            var e = this;
            e.waitCreated(function () {
                var t = "toolbar,md,autoLink,imageBar,placeholder,uploadPaste,uploadRemote,codeName,defaultAction,monitContent,autoHeight,at".split(",");
                c.forEach(t, function (t) {
                    i.async("./plugin/" + t, function (t) {
                        new t(e)
                    })
                })
            })
        }, initEvent: function b() {
            var r = this, n = r.rawConfig, t = r.getEl();
            if (r._initEvent) return;
            r._initEvent = !0, r.listen("afterCreate", function () {
                r._afterCreate || (r._afterCreate = !0, n.content && r.val(n.content), c.forEach(r._createdQueue, function (t) {
                    t && t.call(r)
                }), r._createdQueue.length = 0, t.on("click", "div.js-editor-mask", function () {
                    try {
                        n.clickMask && n.clickMask.call(r)
                    } catch (t) {
                    }
                }), n.afterCreate && n.afterCreate.call(r))
            }), r.listen("afterChange", function () {
                var t = r.keEditor, e = t.edit.cmd.range,
                    i = r.isInTagNode(e.startContainer, "blockquote") || r.isInTagNode(e.endContainer, "blockquote");
                i ? t.toolbar.select("bockquote") : t.toolbar.unselect("bockquote");
                var o = r.isInTagNode(e.startContainer, "pre") || r.isInTagNode(e.endContainer, "pre");
                t.edit.designMode && (o ? (t.toolbar.disableAll(!0, ["source", "codeblock"]), t.toolbar.select("codeblock")) : (t.toolbar.disableAll(!1), t.toolbar.unselect("codeblock"))), n.afterChange && n.afterChange.call(r)
            }), r.listen("afterBlur", function () {
                n.afterBlur && n.afterBlur.call(r)
            }), r.listen("afterFocus", function () {
                n.afterFocus && n.afterFocus.call(r)
            })
        }, val: function E() {
            return this.keEditor.html.apply(this.keEditor, arguments)
        }, text: function w() {
            return this.keEditor.text.apply(this.keEditor, arguments)
        }, count: function C() {
            return this.keEditor.count("text")
        }, blur: function y() {
            try {
                this.keEditor.blur()
            } catch (t) {
            }
        }, focus: function x() {
            try {
                this.keEditor.focus()
            } catch (t) {
            }
        }, disable: function T(e) {
            var i = this.getEl();
            this.waitCreated(function () {
                var t = i.find(".js-editor-mask");
                if (!1 === e) return t.hide();
                0 === t.length && (t = h('<div class="js-editor-mask" style="background:#fff;opacity:0;filter:alpha(opacity=0);position:absolute;width:100%;height:100%;top:0;left:0;z-index:999;"></div>'), i.append(t)), t.show()
            })
        }, isEmpty: function P() {
            return this.keEditor.isEmpty()
        }, resize: function _(r, n) {
            var a = this, l = a.rawConfig, c = a.getEl();
            a.waitCreated(function () {
                var t = a.keEditor;
                if (r && c.outerWidth(r), a.getEditorEl().width("auto"), n) {
                    var e = a.getToolbarEl(), i = e.outerHeight(), o = !l.noAutoHeight;
                    n = Math.max(n - i - 2, 0), o && (t.edit._editHeight = n + "px"), o && a.autoHeight(), !o && t.edit.setHeight(n)
                }
            })
        }, autoHeight: function H(t) {
            var e = this, i = e.rawConfig, o = e.keEditor, r = e.getEditorDoc();
            if (i.noAutoHeight) return;
            if (!t) {
                var n = e.getEditorEl();
                t = u.getScrollParent(n), t = h(t || window)
            }
            var a = t.scrollTop();
            o.edit.setHeight(1);
            var l = r.body.scrollHeight;
            h(e.getEditorDoc().body).css("overflow", "hidden"), e.getEditorEditEl().css("overflow", "hidden").height(1), l = Math.max(l, r.body.scrollHeight);
            var c = e._lastHeight ? l - e._lastHeight : 0;
            e._lastHeight = l;
            var d = parseInt(o.edit._editHeight || 0, 10) || 0;
            l = Math.max(l, d), o.edit.setHeight(l), t.scrollTop(a + (l === d ? 0 : c))
        }, waitCreated: function N(t) {
            var e = this.keEditor;
            e && e.isCreated ? t && t.call(this) : this._createdQueue.push(t)
        }, getEditor: function B() {
            return this.keEditor
        }, getEditorDoc: function q() {
            return this.keEditor.edit.doc
        }, getEditorWin: function A() {
            return this.keEditor.edit.win
        }, getEditorEl: function F() {
            return h(this.keEditor.container[0])
        }, getEditorEditEl: function M() {
            return h(this.keEditor.edit.div)
        }, getToolbarEl: function I() {
            return h(this.keEditor.toolbar.div.get(0))
        }, getCmdClosestEl: function z() {
            var t = this.keEditor.cmd.range.startContainer;
            for (; t && 1 !== t.nodeType;) t = t.parentNode;
            return t
        }, isInTagNode: function D(t, e) {
            if (!t || !e) return !1;
            var i = !1;
            e = e.toLowerCase();
            try {
                for (; t;) {
                    var o = (t.tagName || "").toLowerCase();
                    if (o && o === e) {
                        i = !0;
                        break
                    }
                    t = t.parentNode
                }
            } catch (r) {
            }
            return i
        }, removePlaceHolder: function K() {
            h(this.getEditorDoc()).find("#kePlaceholder").remove()
        }, getElPos: function L(t) {
            var e = this.getEl(), i = this.getEditorDoc(), o = h(i.body), r = u.getPosTop(t, o), n = u.getPosLeft(t, o),
                a = u.getPosTop(e), l = u.getPosLeft(e), c = this.getToolbarEl().outerHeight(), d = o.scrollTop(),
                s = o.scrollLeft();
            return {top: r + a + c - d, left: n + l - s}
        }, _getConf: function j() {
            var t = this, e = t.rawConfig, i = c.clone(a.get());
            i.type = d.uploadType.image, i.token = a.get("csrf_token");
            var o = {
                allowNCFileUpload: !0,
                allowFileManager: !0,
                filterMode: !e.noFilterHtml,
                themeType: "nowcoder",
                uploadJson: "/uploadImage",
                extraFileUploadParams: i,
                resizeType: 0,
                height: (e.height || 300) + "px",
                newlineTag: "div",
                cssData: s.css,
                items: g.getToolItems({isAdmin: e.isAdmin, isVote: !!e.cbEditVote}),
                htmlTags: {
                    span: ".color,.font-weight,.vertical-align".split(","),
                    div: "id,align,.text-align,.color,.vertical-align".split(","),
                    table: "border,cellspacing,cellpadding,height,align,bordercolor,.padding,.margin,.border,bgcolor,.text-align,.color,.background-color,.font-weight,.text-decoration,.background,.height,.border-collapse".split(","),
                    "td,th": "align,valign,width,height,colspan,rowspan,bgcolor,.text-align,.color,.background-color,.font-weight,.text-decoration,.vertical-align,.background,.border".split(","),
                    a: "href,target,name,data-card-uid".split(","),
                    embed: "src,width,height,wmode,name,allowfullscreen,flashvars,type,loop,autostart,quality,.width,.height,align,allowscriptaccess".split(","),
                    object: "classid,width,height,id".split(","),
                    param: "name,value".split(","),
                    video: "autoplay,controls,height,loop,muted,poster,preload,src,playsinline,.width,.margin".split(","),
                    img: "id,src,width,height,border,alt,title,align,data-card-emoji,data-vote-id,.width,.height,.border".split(","),
                    "p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6": "align,.text-align,.color,.font-weight,.vertical-align,.text-indent".split(","),
                    pre: ["class"],
                    hr: "class,.page-break-after".split(","),
                    iframe: "frameborder,width,height,src,allowfullscreen".split(","),
                    "br,tbody,tr,strong,b,sub,sup,em,i,u,strike,s,del": []
                }
            }, r = c.extend(o, e.keConf, {
                placeholder: e.placeholder, afterCreate: function () {
                    t.keEditor = t.keEditor || this, t.fire("afterCreate")
                }, afterChange: function () {
                    t.keEditor = t.keEditor || this, t.waitCreated(function () {
                        t.fire("afterChange")
                    })
                }, afterBlur: function () {
                    t.keEditor = t.keEditor || this, t.fire("afterBlur")
                }, afterFocus: function () {
                    t.keEditor = t.keEditor || this, t.fire("afterFocus")
                }
            });
            e.noCodeSelect || c.forReverse(r.items, function (t, e) {
                "codeblock" === t && r.items.splice(e, 1)
            });
            return r
        }, _initKePlugin: function S() {
            var r = this;
            if (f._initKePlugin) return;
            f._initKePlugin = !0, n.plugin("bockquote", function () {
                var o = this;
                o.clickToolbar("bockquote", function () {
                    h("#kePlaceholder", o.edit.doc).remove(), o.select();
                    var t = o.cmd.commonNode({blockquote: "*"});
                    if (t) {
                        var e = o.cmd.range.createBookmark();
                        t.remove(!0), o.cmd.range.moveToBookmark(e)
                    } else {
                        o.cmd.indent();
                        var t = o.cmd.commonNode({blockquote: "*"});
                        if (t) {
                            try {
                                o.cmd.range.selectNodeContents(t), o.cmd.removeformat()
                            } catch (i) {
                            }
                            t.removeAttr("style"), !t.next() && t.after("<br />")
                        }
                    }
                    o.select(), r.fire("afterChange")
                })
            }), n.plugin("codeblock", function () {
                var o = this;
                o.clickToolbar("codeblock", function () {
                    h("#kePlaceholder", o.edit.doc).remove(), o.select();
                    var t = o.cmd.commonNode({pre: "*"});
                    if (t) {
                        var e = o.cmd.range.createBookmark();
                        t.remove(!0), o.cmd.range.moveToBookmark(e)
                    } else {
                        o.exec("formatblock", "<pre>");
                        var t = o.cmd.commonNode({pre: "*"});
                        if (t) {
                            try {
                                o.cmd.range.selectNodeContents(t), o.cmd.removeformat()
                            } catch (i) {
                            }
                            t.addClass("prettyprint"), !t.next() && t.after("<br />")
                        }
                    }
                    o.select(), r.fire("afterChange")
                })
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/util", ["nc"], function (e, o, r) {
    var t = e("nc").Base;
    r.exports = {
        getToolItems: function i(e) {
            var o = "source,|,bold,italic,underline,forecolor,|,formatblock,bockquote,codeblock,insertorderedlist,insertunorderedlist,link,|,image,emoji,vote,|,table,subscript,superscript,math,removeformat";
            !e.isAdmin && (o = o.replace("forecolor", "").replace("link", "")), !e.isVote && (o = o.replace("vote", ""));
            var r = o.split(",");
            return t.filter(r, function (e) {
                return !!e
            })
        }
    }
});
define("/nc/1.03.04/plugin/pc/component/editorSub/mdEditor/index", ["ncPlugin/kindeditor/kindeditor/themes/nowcoder/nowcoder.css", "nc", "cpn", "../editorStyle", "./util/util", "ncPlugin/md/markdown", "ncPlugin/md/to-markdown", "./util/selection", "./util/cmd", "../../../bll/bll", "../../../base/config", "../../../action/action", "../../../action/ajax", "../../../base/env", "../../../base/bridge", "../../../base/localization", "../../../bll/uploadRemote", "./util/history"], function (i, t, e) {
    i("ncPlugin/kindeditor/kindeditor/themes/nowcoder/nowcoder.css");
    var n = i("nc"), s = (i("cpn"), n.$), o = n.Component, r = (n.Limit, n.Clazz), h = (n.Str, n.Time), a = n.Base,
        f = n.Dom, l = i("../editorStyle"), d = i("./util/util"), c = i("./util/selection"), u = i("./util/cmd"),
        v = i("./util/history"), g = e.exports = r.create();

    function m(t) {
        return d.md2html(t)
    }

    r.mix(g, o, {
        _template: ['<div class="editor-box ke-container ke-container-nowcoder">', '<div style="display:block;width:auto;top:54px;" class="ke-toolbar"></div>', '<div style="background:#ffffff;overflow:hidden;" class="ke-edit clearfix">', '<textarea class="ke-edit-textarea ke-md-textarea js-ipt" style="resize:none;"></textarea>', '<textarea class="ke-edit-textarea ke-md-textarea js-bak-ipt" style="position:absolute;top:0;left:0;resize:none;display:none;height:0;overflow:hidden;"></textarea>', '<div class="ke-md-edit-preview" style="float:right;background:#f7f7f7;"><iframe hidefocus="true" allowtransparency="true" frameborder="0" style="width:100%;height:100%;"></iframe></div>', '<div class="js-fold unfold-textarea"></div>', '<div class="js-fold fold-textarea"></div>', "</div>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, e = t.rawConfig;
                t.getEl();
                t.initEl(), t.iptEl.attr("placeholder", s.trim(e.placeholder) || "请使用gfm规范"), t.iptEl.val(e.content || ""), t.initPreview(), t.initAutoHeight(), t.initToolBar(), t.showPreview(!e.noPreivew), t.initContentChange(), t.initEvent(), e.disabled && t.disable(), e.content && t.fire("afterChange"), t.history.record(), t.initPlugin()
            }
        }],
        html2md: function p(t) {
            return d.html2md(t)
        },
        md2html: m
    }, {
        initialize: function w() {
            this.isMd = !0
        }, initEl: function E() {
            var t = this, e = t.getEl();
            t.toolbarEl = e.find("div.ke-toolbar"), t.bodyEl = e.find("div.ke-edit"), t.iptEl = e.find("textarea.js-ipt"), t.bakIptEl = e.find("textarea.js-bak-ipt"), t.previewEl = e.find("div.ke-md-edit-preview"), t.iframeEl = t.previewEl.find("iframe"), t.iframeDoc = t.iframeEl.get(0).contentDocument || t.iframeEl.get(0).contentWindow.document, t.iframeWin = t.iframeEl[0].contentWindow, t.unfoldEl = e.find("div.unfold-textarea"), t.foldEl = e.find("div.fold-textarea"), t.selection = new c({input: t.iptEl}), t.cmd = new u({editor: t}), t.history = new v({editor: t})
        }, initEvent: function b() {
            var i = this, t = i.rawConfig, e = i.getEl(), n = i.iptEl, o = (i.cmd, i.history);
            e.on("click", "div.js-editor-mask", function () {
                t.clickMask && t.clickMask.call(i)
            }), n.on("keydown", function (t) {
                var e = t.keyCode;
                9 === e ? (t.preventDefault(), i.selection.insert("    ")) : (t.ctrlKey || t.metaKey) && (89 === e || t.shiftKey && 90 === e ? (t.preventDefault(), o.redo()) : 90 === e && (t.preventDefault(), o.undo()))
            })
        }, initPlugin: function k(t) {
            var e = this;
            a.forEach(["uploadRemote", "uploadPaste", "toolbar", "html"], function (t) {
                i.async("./plugin/" + t, function (t) {
                    new t(e)
                })
            })
        }, initPreview: function y() {
            var i = this, t = i.getEl(), e = i.rawConfig, n = h.frequency(500), o = i.iframeDoc;

            function r() {
                n(function () {
                    if (i.isInPreview) {
                        var t = i.iptEl.val(), e = i.getMdHtml(t);
                        i.iframeDoc.body.innerHTML = e || ""
                    }
                })
            }

            o.open(), o.write('<html><head><meta charset="utf-8" /><title>预览</title><style>' + l.css + '</style></head><body style="overflow-y:' + (e.noAutoHeight ? "auto" : "hidden") + '"></body></html>'), o.close(), i.listen("afterChange", r), i.listen("showPreview", r), t.find(".js-fold").on("click", function (t) {
                var e = s(t.currentTarget);
                i.showPreview(e.hasClass("fold-textarea"))
            })
        }, initAutoHeight: function H() {
            var t = this, e = t.rawConfig, i = t.iptEl, n = h.frequency(100);

            function o() {
                n(function () {
                    t.reWidth((t.lastSize || {}).width), t.autoHeight()
                })
            }

            t.listen("afterChange", o), i.on("keyup", o), i.on("keydown", o), !e.noAutoHeight && i.css("overflow", "hidden")
        }, initContentChange: function x() {
            var e, t, i = this, n = i.rawConfig, o = i.iptEl, r = i.history, a = h.frequency(800, !0);
            i.listen("destroy", function () {
                window.clearInterval(t)
            });
            var l = o.val();

            function d() {
                a(function () {
                    var t = i.val();
                    e !== t && (e = t, i.fire("draftChange"), n.draftChange && n.draftChange.call(i, t))
                })
            }

            f.bindChange(o, function () {
                var t = o.val();
                t !== l && (l = t, r.record(), d(), i.fire("afterChange"))
            }), n.draftChange && (t = window.setInterval(d, 1600))
        }, initToolBar: function C(t) {
            var n = this, e = n.rawConfig, i = n.toolbarEl, o = n.history, r = n.cmd;
            t = t || "preview,|,bold,italic,|,codeblock,bockquote,insertorderedlist,insertunorderedlist,link,|,image,|,math,removeformat".split(","), t = e.isAdmin ? t : "preview,|,bold,italic,|,codeblock,bockquote,insertorderedlist,insertunorderedlist,|,image,|,math,removeformat".split(",");
            var a = d.getToolbarHtml(t);
            i.append(a), i.on("click", ".ke-toolbar-icon", function (t) {
                t.preventDefault();
                var e = s(t.currentTarget), i = e.attr("data-name");
                i && r[i] && r[i](), n.fire("afterChange"), o.record(!0)
            })
        }, val: function P(t) {
            if (0 === arguments.length) {
                var e = this.iptEl.val();
                return this.getMdHtml(e)
            }
            var i = g.html2md(t);
            this.text(i)
        }, text: function z(t) {
            if (0 === arguments.length) return this.iptEl.val();
            this.iptEl.val(t || ""), this.fire("afterChange")
        }, blur: function T() {
            this.iptEl.blur()
        }, focus: function j() {
            this.iptEl.focus(), this.selection.focus()
        }, disable: function I(t) {
            var e = this.getEl(), i = e.find(".js-editor-mask");
            if (!(t = !1 !== t)) return i.hide();
            0 === i.length && (i = s('<div class="js-editor-mask" style="background:#fff;opacity:0;filter:alpha(opacity=0);position:absolute;width:100%;height:100%;top:0;left:0;z-index:999;"></div>'), e.append(i));
            i.show()
        }, isEmpty: function W() {
            return !s.trim(this.text())
        }, showPreview: function D(t) {
            var e = this, i = e.rawConfig;
            e.getEl();
            t = !1 !== t, e.isInPreview = t, e.unfoldEl[t ? "show" : "hide"](), e.foldEl[t ? "hide" : "show"](), e.previewEl[t ? "show" : "hide"](), e.selectToolbarItem("preview", t), e.fire("showPreview", t);
            var n = e.lastSize || {}, o = n.width || i.width || "auto", r = n.height || Math.max(+i.height || 0, 150);
            e.resize(o, r)
        }, resize: function M(t, e) {
            var i = this, n = i.rawConfig;
            i.getEl();
            if (i.lastSize = {width: t, height: e}, i.reWidth(t), e) {
                var o = i.toolbarEl.outerHeight(), r = Math.max(e - o - 2, 0);
                if (i._editHeight = r, n.noAutoHeight) {
                    i.bodyEl.outerHeight(r);
                    var a = i.bodyEl.height();
                    i.iptEl.outerHeight(a), i.previewEl.outerHeight(a)
                } else i.autoHeight()
            }
        }, reWidth: function S(t) {
            var e = this, i = e.getEl();
            if (e.lastSize && (e.lastSize.width = t), t) {
                i.outerWidth(t);
                var n = i.width();
                e.toolbarEl.outerWidth(n), e.isInPreview ? (t = (n - 16) / 2, e.iptEl.outerWidth(t), e.previewEl.outerWidth(t), e.unfoldEl.css("left", t)) : e.iptEl.outerWidth(n - 16)
            }
        }, autoHeight: function A() {
            var t = this, e = t.rawConfig, i = t.getEl();
            if (e.noAutoHeight) return;
            var n = f.getScrollParent(i), o = (n = s(n || window)).scrollTop(),
                r = t.isInPreview ? t.getIframeHeight() : 0, a = t.getTxtHeight(), l = Math.max(r, a, t._editHeight);
            if (t._lastHeight === l) return;
            t.bodyEl.outerHeight(l), t.iptEl.outerHeight(l), t.previewEl.outerHeight(l), t.iframeEl.outerHeight(l);
            var d = t._lastHeight ? l - t._lastHeight : 0;
            t._lastHeight = l, n.scrollTop(o + d)
        }, selectToolbarItem: function _(t, e) {
            var i = this.toolbarEl.find("a[data-name=" + t + "]").parent();
            i[(e = !1 !== e) ? "addClass" : "removeClass"]("ke-on"), i[e ? "attr" : "removeAttr"]("data-on", 1)
        }, getTxtHeight: function q() {
            var t = this.bakIptEl;
            t.width(this.iptEl.width()), t.val(this.iptEl.val()).show();
            var e = t.get(0).scrollHeight;
            return t.hide(), e
        }, getIframeHeight: function B() {
            var t = this.iframeEl.height(), e = this.iframeDoc.body;
            this.iframeEl.height(1);
            var i = e.scrollHeight;
            return this.iframeEl.height(t), i
        }, getMdHtml: m
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/codeEditor/plugin/cache", ["nc"], function (e, o, t) {
    var a = e("nc"), C = a.$, g = a.Base, n = a.Clazz, i = (a.Event, a.Db), r = t.exports = n.create(),
        d = "codeEditorCache", c = window.localStorage;
    g.extend(r.prototype, {
        initialize: function u(e) {
            var o = this;
            o.editor = e.editor, o.parent = e.parent, o.autoCacheCode()
        }, initCacheCode: function h() {
            var e = this, o = e.parent, t = o.rawConfig, a = e._memoryCode = {}, n = !!t.noCacheCode,
                r = e.getStorageCode(), i = n ? {} : r.code || {}, d = n ? o.valLangue() : r.langue || o.valLangue(),
                c = o.getLangueData();
            g.forEach(c, function (e, o) {
                var t = C.trim(i[o] || "");
                t = (t ? i[o] : "") || e.code || e.tplCode, a[o] = t
            }), d && o.valLangue(d, !0)
        }, autoCacheCode: function v() {
            var e = this;
            e.editor.on("changes", function () {
                e.cacheCode2Memory()
            })
        }, cacheCode2Memory: function f(e, o) {
            var t = this, a = t.parent, n = t._memoryCode = t._memoryCode || {};
            arguments.length < 2 && (e = a.valLangue(), o = a.valCode());
            e && (n[e] = o, t.cacheCode2Storage())
        }, cacheCode2Storage: function l() {
            var e = this, o = e.parent, t = o.rawConfig, a = e.getCacheId(t.runCode), n = e._memoryCode;
            if (t.noCacheCode) return void(a && e.delStorageCode());
            if (a && c && n) {
                e.delStorageCode(!0);
                var r = i.create(d);
                r.set(a, {code: n, langue: o.valLangue()})
            }
        }, delStorageCode: function s(e) {
            var o = this.parent.rawConfig, t = this.getCacheId(o.runCode);
            if (t && c && (c[t] = "", c.removeItem(t), !e)) {
                var a = i.create(d);
                a.remove(t)
            }
        }, getMemoryCode: function m(e) {
            var o = this._memoryCode || {};
            return e && o[e] || ""
        }, getStorageCode: function p() {
            var e, o = this.parent.rawConfig, t = this.getCacheId(o.runCode);
            if (t) {
                var a = i.create(d);
                !(e = a.get(t)) && c && (e = g.json(c[t])) && (a.set(t, e), c.removeItem(t))
            }
            return e || {}
        }, getCacheId: function y(e) {
            if (e) {
                var o = e.questionId || [e.pid || "", e.tid || "", e.qid || ""].join("_");
                if (o && !/^_+$/.test(o)) return o = "NC_Code_Cache_" + o
            }
        }, restoreTpl: function _() {
            var e = this.parent, o = e.valLangue(), t = (e.getLangueData()[o] || {}).tplCode || "";
            e.valCode(t), this.cacheCode2Memory(o, t)
        }, restoreCode: function L() {
            var e = this.parent, o = e.valLangue(), t = this.getMemoryCode(o);
            e.valCode(t)
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/codeEditor/plugin/hint", ["nc"], function (t, e, i) {
    var n = t("nc"), g = n.$, m = n.Base, r = n.Clazz, a = n.Event, s = n.Ws, c = n.CodeLang, o = window.CodeMirror,
        l = o.Pos, d = {
            xcsrc: {
                keyword: "main;include;define;std;break;case;continue;default;do;else;for;goto;if;_Pragma;return;switch;while;catch;operator;try;throw;using;asm;__asm__;auto;bool;_Bool;char;_Complex;double;enum;float;_Imaginary;int;long;short;signed;struct;typedef;union;unsigned;void;class;wchar_t;template;char16_t;char32_t;const;extern;register;restrict;static;volatile;inline;private;protected;public;friend;explicit;virtual;export;mutable;typename;constexpr;new;delete;alignas;alignof;decltype;noexcept;thread_local;and;and_eq;bitand;bitor;compl;not;not_eq;or;or_eq;typeid;xor;xor_eqconst_cast;dynamic_cast;reinterpret_cast;static_cast;sizeof;namespace;NULL;true;false;TRUE;FALSE;nullptr",
                header: "cstdlib;csignal;cstdarg;typeinfo;bitset;functional;utility;ctime;cstddef;new;memory;climits;cfloat;limits;exception;stdexcept;cassert;cerrno;cctype;cwctype;cstring;cwchar;string;vector;deque;list;set;map;stack;queue;algorithm;iterator;cmath;complex;valarray;numeric;iosfwd;ios;istream;ostream;iostream;fstream;sstream;iomanip;streambuf;cstdio;locale;clocale",
                func: "isascii(int c)>int;isdigit(int c)>int;isspace(int c)>int;isupper(int c)>int;isxdigit(int c)>int;gcvt(double number, size_t ndigits, char *buf)>char*;toascii(int c)>int;tolower(int c)>int;toupper(int c)>int;getpagesize(void)>size_t;mmap(void *start, size_t length, int prot, int flags, int fd, off_t offsize)>void*;munmap(void *start, size_t length)>int;asctime(const struct tm * timeptr)>char*;ctime(const time_t *timep)>char*;gettimeofday(struct timeval * tv, struct timezone * tz)>int;tm *gmtime(const time_t *timep)>struct;tm *localtime(const time_t * timep)>struct;mktime(strcut tm * timeptr)>time_t;settimeofday(const struct timeval *tv, const struct timezone *tz)>int;time(time_t *t)>time_t;index(const char *s, int c)>char*;memccpy(void *dest, const void * src, int c, size_t n)>void*;memchr(const void *s, char c, size_t n)>void*;memcmp(const void *s1, const void *s2, size_t n)>int;rindex(const char *s, int c)>char*;strcasecmp(const char *s1, const char *s2)>int;strcpy(char *dest, const char *src)>char*;strdup(const char *s)>char*;strncasecmp(const char *s1, const char *s2, size_t n)>int;strtok(char *s, const char *delim)>char*;abs(int j)>int;asin(double x)>double;atan(double x)>double;atan2(double y, double x)>double;endgrent(void)>void;endpwent(void)>void;endutent(void)>void;getgrent(FILE * stream)>struct group*;fgetpwent(FILE * stream)>struct passwd*;getegid(void)>gid_t;geteuid(void)>uid_t;getgid(void)>gid_t;getgrent(void)>struct group*;getgrgid(gid_t gid)>struct group*;getgrnam(const char * name)>struct group*;getgroups(int size, gid_t list[])>int;getpw(uid_t uid, char *buf)>int;getpwent(void)>struct passwd*;getpwnam(const char * name)>struct passwd*;getpwuid(uid_t uid)>struct passwd*;getuid(void)>uid_t;getutent(void)>struct utmp*;getutid(strcut utmp *ut)>struct utmp*;getutline(struct utmp *ut)>struct utmp*;initgroups(const char *user, gid_t group)>int;pututline(struct utmp *ut)>void;seteuid(uid_t euid)>int;setfsgid(uid_t fsgid)>int;setfsuid(uid_t fsuid)>int;setgid(gid_t gid)>int;setgrent(void)>void;setgroups(size_t size, const gid_t * list)>int;setpwent(void)>void;setregid(gid_t rgid, gid_t egid)>int;setreuid(uid_t ruid, uid_t euid)>int;setuid(uid_t uid)>int;setutent(void)>void;utmpname(const char * file)>void;close(int fd)>int;creat(const char * pathname, mode_tmode)>int;dup(int oldfd)>int;dup2(int odlfd, int newfd)>int;flock(int fd, int operation)>int;fsync(int fd)>int;lseek(int fildes, off_t offset, int whence)>off_t;mkstemp(char * template)>int;read(int fd, void * buf, size_t count)>ssize_t;sync(void)>int;write(int fd, const void * buf, size_t count)>ssize_t;clearerr(FILE * stream)>void;fclose(FILE * stream)>int;fdopen(int fildes, const char * mode)>FILE*;feof(FILE * stream)>int;fflush(FILE* stream)>int;fgetc(FILE * stream)>int;fgets(char * s, int size, FILE * stream)>har*;fileno(FILE * stream)>int;fputc(int c, FILE * stream)>int;fputs(const char * s, FILE * stream)>int;fread(void * ptr, size_t size, size_t nmemb, FILE * stream)>size_t;freopen(const char * path, const char * mode, FILE * stream)>FILE*;fseek(FILE * stream, long offset, int whence)>int;ftell(FILE * stream)>long;fwrite(const void * ptr, size_t size, size_t nmemb, FILE * stream)>size_t;mktemp(char * template)>char*;setbuffer(FILE * stream, char * buf, size_t size)>void;setlinebuf(FILE * stream)>void;atexit(void (*function) (void))>int;execl(const char * path, const char * arg, ...)>int;execlp(const char * file, const char * arg, ...)>int;execv(const char * path, char * const argv[])>int;execve(const char * filename, char * const argv[], char * const envp[])>int;execvp(const char *file, char * const argv [])>int;exit(int status)>void;_exit(int status)>void;getpgid(pid_t pid)>pid_t;getpgrp(void)>pid_t;getpid(void)>pid_t;getppid(void)>pid_t;getpriority(int which, int who)>int;nice(int inc)>int;on_exit(void (* function) (int void*), void *arg)>int;setpgid(pid_t pid, pid_t pgid)>int;setpgrp(void)>int;setpriority(int which, int who, int prio)>int;system(const char * string)>int;wait(int * status)>pid_t;waitpid(pid_t pid, int * status, int options)>pid_t;fprintf(FILE * stream, const char * format, ...)>int;fscanf(FILE * stream, const char *format, ...)>int;scanf(const char * format, ...)>int;vfprintf(FILE *stream, const char * format, va_list ap)>int;vfscanf(FILE * stream, const char * format, va_list ap)>int;vprintf(const char * format, va_list ap)>int;vscanf(const char * format, va_list ap)>int;vsprintf(char * str, const char * format, va_list ap)>int;vsscanf(const char * str, const char * format, va_list ap)>int;access(const char * pathname, int mode)>int;alphasort(const struct dirent **a, const struct dirent **b)>int;chdir(const char * path)>int;chmod(const char * path, mode_t mode)>int;chown(const char * path, uid_t owner, gid_t group)>int;chroot(const char * path)>int;closedir(DIR *dir)>int;fchdir(int fd)>int;fchmod(int fildes, mode_t mode)>int;fchown(int fd, uid_t owner, gid_t group)>int;fstat(int fildes, struct stat *buf)>int;ftruncate(int fd, off_t length)>int;getcwd(char * buf, size_t size)>char*;link(const char * oldpath, const char * newpath)>int;lstat(const char * file_name, struct stat * buf)>int;opendir(const char * name)>DIR*;readdir(DIR * dir)>struct dirent*;readlink(const char * path, char * buf, size_t bufsiz)>int;rewinddir(DIR *dir)>void;seekdir(DIR * dir, off_t offset)>void;stat(const char * file_name, struct stat *buf)>int;symlink(const char * oldpath, const char * newpath)>int;telldir(DIR *dir)>off_t;truncate(const char * path, off_t length)>int;umask(mode_t mask)>mode_t;unlink(const char * pathname)>int;utime(const char * filename, struct utimbuf * buf)>int;utimes(char * filename, struct timeval *tvp)>int;alarm(unsigned int seconds)>unsigned int;kill(pid_t pid, int sig)>int;pause(void)>int;sigaddset(sigset_t *set, int signum)>int;sigdelset(sigset_t * set, int signum)>int;sigemptyset(sigset_t *set)>int;sigfillset(sigset_t * set)>int;sigismember(const sigset_t *set, int signum)>int;(*signal(int signum, void(* handler)(int)))(int)>void;sigpending(sigset_t *set)>int;sigprocmask(int how, const sigset_t *set, sigset_t * oldset)>int;sleep(unsigned int seconds)>unsigned int;ferror(FILE *stream)>int;strerror(int errnum)>char*;mkfifo(const char * pathname, mode_t mode)>int;pclose(FILE * stream)>int;popen(const char * command, const char * type)>FILE*;accept(int s, struct sockaddr * addr, int * addrlen)>int;bind(int sockfd, struct sockaddr * my_addr, int addrlen)>int;connect(int sockfd, struct sockaddr * serv_addr, int addrlen)>int;endprotoent(void)>void;endservent(void)>void;getsockopt(int s, int level, int optname, void* optval, socklen_t* optlen)>int;htonl(unsigned long int hostlong)>unsigned long int;htons(unsigned short int hostshort)>unsigned short int;inet_addr(const char *cp)>unsigned long int;inet_aton(const char * cp, struct in_addr *inp)>int;inet_ntoa(struct in_addr in)>char*;listen(int s, int backlog)>int;ntohl(unsigned long int netlong)>unsigned long int;ntohs(unsigned short int netshort)>unsigned short int;recv(int s, void *buf, int len, unsigned int flags)>int;recvfrom(int s, void *buf, int len, unsigned int flags, struct sockaddr *from,int *fromlen)>int;recvmsg(int s, struct msghdr *msg, unsigned int flags)>int;send(int s, const void * msg, int len, unsigned int falgs)>int;sendmsg(int s, const strcut msghdr *msg, unsigned int flags)>int;sendto(int s, const void * msg, int len, unsigned int flags, const struct&nbsp>sockaddr * to, int tolen);setprotoent(int stayopen)>void;setsockopt(int s, int level, int optname, const void * optval, ,socklen_toptlen)>int;shutdown(int s, int how)>int;socket(int domain, int type, int protocol)>int;getenv(const char *name)>char*;putenv(const char * string)>int;getopt(int argc, char * const argv[], const char * optstring)>int;isatty(int desc)>int;select(int n, fd_set * readfds, fd_set * writefds, fd_set * exceptfds, struct&nbsp>timeval * timeout);ttyname(int desc)>char*"
            },
            xjava: {
                keyword: "abstract;assert;boolean;break;byte;case;catch;char;class;const;continue;default;do;double;else;enum;extends;final;finally;float;for;goto;if;implements;import;instanceof;int;interface;long;native;new;package;private;protected;public;return;short;static;strictfp;super;switch;synchronized;this;throw;throws;transient;try;void;volatile;while",
                extra: "Enum;MONTH;WEEK_OF_MONTH;DECEMBER;OutputStream;ArrayList;String;Math;WEDNESDAY;NEGATIVE_INFINITY;LONG_STANDALONE;YEAR;WEEK_OF_YEAR;TreeSet;CASE_INSENSITIVE;SATURDAY;Vector;TYPE;LITERAL;LONG_FORMAT;in;SIZE;AM;DOTALL;Float;UNICODE_CASE;ERA;SortedMap;Byte;JULY;Object;DAY_OF_WEEK;Arrays;Map;DAY_OF_YEAR;Set;MAY;DAY_OF_MONTH;Matcher;E;FRIDAY;AM_PM;FEBRUARY;COMMENTS;Reader;MAX_VALUE;SortedSet;out;ZONE_OFFSET;StringWriter;UNDECIMBER;StringReader;Queue;MIN_EXPONENT;LONG;PrintWriter;JUNE;Pattern;err;Hashtable;Calendar;NOVEMBER;IOException;TreeMap;UNIX_LINES;StringBuffer;Runnable;MARCH;OutputStreamWriter;MILLISECOND;Writer;LinkedHashSet;BYTES;Comparable;THURSDAY;HashMap;NARROW_STANDALONE;DAY_OF_WEEK_IN_MONTH;NARROW_FORMAT;Comparator;FIELD_COUNT;Random;MINUTE;List;Collections;Short;HashSet;JANUARY;DST_OFFSET;EMPTY_MAP;SUNDAY;UNICODE_CHARACTER_CLASS;TUESDAY;CANON_EQ;SEPTEMBER;Double;LinkedList;Stack;POSITIVE_INFINITY;DATE;MAX_EXPONENT;ByteArrayInputStream;EMPTY_SET;Long;AUGUST;Collection;MULTILINE;CASE_INSENSITIVE_ORDER;Scanner;Dictionary;HOUR;ALL_STYLES;MatchResult;System;Number;MIN_NORMAL;HOUR_OF_DAY;Iterator;NaN;APRIL;PrintStream;SHORT_STANDALONE;InputStreamReader;OCTOBER;InputStream;Error;ByteArrayOutputStream;MIN_VALUE;Date;Exception;SHORT;Integer;MONDAY;EMPTY_LIST;PI;SECOND;PM;SHORT_FORMAT",
                header: "java.util.Collections;java.util.Comparator;java.util.Date;java.util.List;java.util.Locale;java.util.regex.Pattern;java.util.regex.Matcher;java.util.regex.MatchResult;java.io.BufferedOutputStream;java.io.BufferedInputStream;java.io.FileOutputStream;java.io.FileInputStream;java.io.StringReader;java.io.StringWriter;java.util.regex.Matcher;java.util.regex.MatchResult;java.util.Arrays;java.util.Collections;java.util.Arrays;java.util.ArrayList;java.util.Set;java.util.Map;java.util.HashMap;java.util.HashSet;java.util.Dictionary;java.util.Iterator;java.util.LinkedHashMap;java.util.LinkedHashSet;java.util.LinkedList;",
                method: "nextFloat;newSetFromMap;setSecurityManager;toUnsignedLong;asList;offer;unmodifiableCollection;quote;trim;disjoint;getSuppressed;getMonth;removeAllElements;getAvailableLocales;setTime;emptyEnumeration;printStackTrace;subMap;divideUnsigned;useDelimiter;concat;contains;size;toBinaryString;endsWith;listIterator;lowerKey;pollFirst;headMap;usePattern;emptySet;compare;roll;nextAfter;lineSeparator;setLenient;removeLast;appendCodePoint;search;nanoTime;setTimeZone;after;close;getenv;setMonth;synchronizedMap;set;toHexString;doubleToRawLongBits;getTimezoneOffset;abs;setTimeInMillis;floorDiv;toString;bitCount;toUnsignedString;hasNextBigDecimal;unmodifiableSortedSet;retainAll;byteValue;emptyIterator;navigableKeySet;higherEntry;longBitsToDouble;getLast;empty;compute;checkedNavigableSet;toMatchResult;getStackTrace;addSuppressed;getFirst;decrementExact;enumeration;add;list;ioException;setStackTrace;ulp;asLifoQueue;fillInStackTrace;reverseBytes;hasTransparentBounds;getTime;notifyAll;regionMatches;runFinalizersOnExit;locale;replaceAll;remove;random;tanh;emptyList;setHours;load;hashCode;elementAt;subSet;sin;end;gc;useRadix;hasNextBoolean;codePointCount;floorEntry;toIntExact;isEmpty;setFirstDayOfWeek;parse;subSequence;nextLong;hasNextShort;nextGaussian;parseByte;offerLast;print;insertElementAt;computeIfPresent;getFirstDayOfWeek;clone;asin;emptySortedSet;hasNextLong;append;charAt;numberOfTrailingZeros;deleteCharAt;copyOfRange;getWeekYear;headSet;codePointAt;setMinimalDaysInFirstWeek;containsValue;parseUnsignedLong;identityHashCode;sqrt;higherKey;setSeconds;toArray;parallelStream;findInLine;join;codePointBefore;write;compareToIgnoreCase;atan2;spliterator;lower;getTimeInMillis;regionEnd;hasNext;peekFirst;toDegrees;peekLast;ceil;doubleToLongBits;getExponent;ceilingKey;toGMTString;writeTo;exit;compareUnsigned;getDisplayName;setWeekDate;mapLibraryName;hasNextDouble;tailMap;synchronizedSortedMap;wait;ceilingEntry;getLocalizedMessage;intBitsToFloat;skip;notify;addLast;checkedMap;stream;parseShort;copyValueOf;comparingDouble;trimToSize;synchronizedSet;nextLine;max;getActualMinimum;getMessage;hasAnchoringBounds;peek;IEEEremainder;getLong;comparator;getSeconds;unmodifiableSortedMap;parseLong;equals;currentTimeMillis;setDate;nullsFirst;shuffle;rotate;getTimeZone;UTC;cos;expm1;offerFirst;compareTo;decode;setOut;floatToRawIntBits;nextUp;split;find;removeFirst;indexOf;emptyNavigableMap;read;comparingLong;entrySet;swap;getLeastMaximum;toLowerCase;sort;acos;fill;synchronizedNavigableSet;removeIf;lastIndexOfSubList;addElement;requireEnd;getBuffer;keys;getMaximum;delete;substring;parallelSort;parseDouble;getHours;println;setSize;putAll;nextBoolean;floor;keySet;console;getCalendarType;forEach;contentEquals;nextInt;toRadians;setYear;getDay;getMinutes;appendReplacement;lastEntry;removeElement;reversed;toCharArray;firstElement;setProperties;rint;setCharAt;iterator;removeAll;getWeeksInWeekYear;deepHashCode;merge;equalsIgnoreCase;exp;element;floorKey;tailSet;nextBigDecimal;synchronizedSortedSet;checkedCollection;getProperties;initCause;toUnsignedInt;addExact;lowerEntry;nextByte;log10;descendingIterator;replaceFirst;sum;checkError;pollLast;isFinite;pop;parseUnsignedInt;getDeclaringClass;min;thenComparing;isInfinite;setElementAt;ints;arraycopy;hypot;removeElementAt;pow;synchronizedList;checkedSet;getDisplayNames;subList;intern;unmodifiableNavigableMap;getChars;singletonList;parallelSetAll;nextDouble;radix;addAll;emptyListIterator;hasNextLine;incrementExact;comparingInt;addFirst;chars;ordinal;getOrDefault;emptyNavigableSet;thenComparingDouble;markSupported;log1p;available;indexOfSubList;run;isNaN;getCause;getBytes;frequency;compile;getActualMaximum;quoteReplacement;checkedSortedSet;singletonMap;nextShort;getMinimum;toUpperCase;shortValue;forEachRemaining;unmodifiableNavigableSet;removeLastOccurrence;codePoints;synchronizedNavigableMap;last;sinh;copyInto;floatValue;setMinutes;unmodifiableMap;numberOfLeadingZeros;pollLastEntry;getSecurityManager;firstKey;lastElement;name;ensureCapacity;region;toLocaleString;higher;next;thenComparingInt;computeIfAbsent;useTransparentBounds;descendingSet;synchronizedCollection;multiplyExact;binarySearch;toOctalString;printf;cbrt;flush;negateExact;lastKey;singleton;valueOf;start;nextDown;parseInt;lastIndexOf;appendTail;isWeekDateSupported;toByteArray;checkedQueue;getInstance;putIfAbsent;mark;useLocale;deepToString;copySign;put;getEncoding;floatToIntBits;delimiter;asPredicate;nextBigInteger;hasNextBigInteger;signum;isSet;doubleValue;matcher;matches;push;getYear;groupCount;doubles;setProperty;reset;hasNextInt;useAnchoringBounds;hitEnd;runFinalization;parseFloat;getMinimalDaysInFirstWeek;naturalOrder;parallelPrefix;log;reverseOrder;pattern;flags;rotateLeft;longValue;capacity;longs;remainderUnsigned;get;emptyMap;getDate;firstEntry;copy;hasNextByte;containsAll;copyOf;reverse;toInstant;checkedList;nCopies;elements;first;descendingKeySet;getClass;getAvailableCalendarTypes;before;replace;splitAsStream;getInteger;poll;atan;clearProperty;lookingAt;checkedSortedMap;checkedNavigableMap;inheritedChannel;from;group;tan;setErr;loadLibrary;setIn;deepEquals;containsKey;format;comparing;unmodifiableList;setLength;nullsLast;removeFirstOccurrence;setSeed;hasNextFloat;getGreatestMinimum;scalb;floorMod;isLenient;descendingMap;values;insert;findWithinHorizon;regionStart;nextBytes;pollFirstEntry;unmodifiableSet;ready;setAll;lowestOneBit;subtractExact;ceiling;getProperty;rotateRight;intValue;clear;match;cosh;emptySortedMap;thenComparingLong;round;highestOneBit;offsetByCodePoints;startsWith"
            },
            xpython: {keyword: "and;as;assert;break;class;continue;def;del;elif;else;except;exec;finally;for;from;global;if;import;in;is;lambda;not;or;pass;print;raise;return;try;while;with;yield"},
            xjs: {keyword: "break;case;catch;continue;default;delete;do;else;finally;for;function;if;in;instanceof;new;return;switch;this;throw;try;typeof;var;void;while;with;abstract;boolean;byte;char;class;const;debugger;double;enum;export;extends;final;float;goto;implements;import;int;interface;long;native;package;private;protected;public;short;static;super;synchronized;throws;transient;volatile"},
            xcsharp: {keyword: "abstract;as;base;bool;break;byte;case;catch;char;checked;class;const;continue;decimal;default;delegate;do;double;else;enum;ecent;explicit;extern;false;finally;fixed;float;for;foreach;get;goto;if;implicit;in;int;interface;internal;is;lock;long;namespace;new;null;object;out;override;partial;private;protected;public;readonly;ref;return;sbyte;sealed;set;short;sizeof;stackalloc;static;struct;switch;this;throw;true;try;typeof;uint;ulong;unchecked;unsafe;ushort;using;value;virtual;volatile;volatile;void;where;while;yield"},
            xphp: {keyword: "__halt_compiler;abstract;and;array;as;break;callable;case;catch;class;clone;const;continue;declare;default;die;do;echo;else;elseif;empty;enddeclare;endfor;endforeach;endif;endswitch;endwhile;eval;exit;extends;final;finally;for;foreach;function;global;goto;if;implements;include;include_once;instanceof;insteadof;interface;isset;list;namespace;new;or;print;private;protected;public;require;require_once;return;static;switch;throw;trait;try;unset;use;var;while;xor;yield"}
        }, u = i.exports = r.create();
    m.extend(u.prototype, a, {
        codeIndex: 1, lastHintList: null, currentHintList: null, initialize: function p(t) {
            var e = this, i = (e.editor = t.editor, (e.parent = t.parent).rawConfig.codeHint);
            if (!{keyword: 1, all: 1}[i || ""]) return;
            e.useRemote = "all" === i, e.initHint(), e.initEvent(), e.canUse = !0
        }, initHint: function h() {
            var r, a = this, t = a.editor;
            m.forEach({
                "text/x-csrc": "hintCSRC",
                "text/x-c++hdr": "hintCSRC",
                "text/x-c++src": "hintCSRC",
                "text/x-java": "hintJava",
                python: "hintPython",
                "text/x-python": "hintPython",
                javascript: "hintJs",
                "text/javascript": "hintJs",
                "text/x-csharp": "hintCSharp",
                php: "hintPhp",
                "application/x-httpd-php": "hintPhp"
            }, function (t, e) {
                o.registerHelper("hint", e, a.wrapHint(a[t]))
            }), t.on("change", function (t, e) {
                var i = t.getValue(), n = r === i;
                if (r = i, !n) {
                    if (a.codeIndex++, !e || "+input" !== e.origin) return a.closeMenu();
                    a.showHint()
                }
            });
            var e = m.bind(a.getHintList, a);
            e.async = !0, m.extend(t.options.hintOptions, {hint: e})
        }, initEvent: function f() {
            var t = this;
            t.listen("codeHintClose", function () {
                t.lastHintList = null
            }), t.listen("codeHintShown", function () {
            })
        }, start: function v(t) {
            this.canUse = !1 !== t
        }, showHint: function y() {
            if (!this.canHint()) return;
            this.currentHintList = this.lastHintList, this.editor.showHint()
        }, hintCSRC: function _(t) {
            return this.hintCommonAction(t, [".", "->"], "xcsrc")
        }, hintJava: function E(t) {
            return this.hintCommonAction(t, ["."], "xjava")
        }, hintPython: function x(t) {
            return this.hintCommonAction(t, null, "xpython")
        }, hintJs: function S(t) {
            return this.hintCommonAction(t, null, "xjs")
        }, hintCSharp: function b(t) {
            return this.hintCommonAction(t, null, "xcsharp")
        }, hintPhp: function L(t) {
            return this.hintCommonAction(t, null, "xphp")
        }, hintCommonAction: function I(e, t, i) {
            var a = this, n = a.getInfo() || {}, r = n.token, s = n.cur;
            if (!r || !s) return e && e();
            var o = r.string, c = [];
            if (t && m.contains(t, o)) return a.currentHintList = null, r.start = s.ch, r.end = s.ch, void a.server(r, s, function (t) {
                m.isArray(t) && 0 !== t.length && (m.forEach(t, function (t) {
                    var e = t.name, i = g.trim(e.split("(")[0]), n = t.type,
                        r = 20 < e.length ? e.substr(0, 20) + "..." : e;
                    c.push(a.wrapListItem({text: i, display: r, ext: n, method: !0}))
                }), e && e(a.wrapResult(c, r, s)))
            });
            if ("xcsrc" === i && /^#[^#]+$/.test(o)) {
                var l = o.substr(r.start, s.ch - r.start);
                if (/^#[^#]+$/.test(l)) if (/\s/g.test(l)) {
                    var d = l.split(/\s+/);
                    if (2 === d.length && /^<[^<]+$/.test(d[1])) {
                        var u = l.indexOf(d[1]);
                        o = d[1].replace(/</gi, ""), r.start = u + 1
                    }
                } else o = l.replace("#", ""), r.start += 1, /\s/.test(l) ? r.end = l.indexOf(" ") : r.end = Math.min(l.length, r.end)
            }
            if (a.hintHistory(o, r, s, e)) return;
            var p = a.getHintData(i);
            m.forEach(["keyword", "header", "extra"], function (e) {
                m.forEach(p[e], function (t) {
                    a.isStartWith(t, o) && c.push(a.wrapListItem({text: t, display: t, ext: e}))
                })
            }), m.forEach(p.method, function (t) {
                a.isStartWith(t, o) && c.push(a.wrapListItem({text: t + "()", display: t, ext: "function"}))
            }), m.forEach(p.func, function (t) {
                a.isStartWith(t.text, o) && c.push(a.wrapListItem({
                    text: t.text,
                    display: t.display,
                    ext: t.type,
                    method: !0
                }))
            });
            var h = a.wrapResult(c, r, s);
            e && e(h)
        }, hintHistory: function w(e, t, i, n) {
            var r = this;
            if (!r.currentHintList) return !1;
            var a = m.filter(r.currentHintList.list, function (t) {
                return r.isStartWith(t.text, e)
            });
            return n && n(r.wrapResult(a, t, i)), !0
        }, getHintList: function A(t, e) {
            var i = t.getCursor(), n = (t.getHelpers(i, "hint") || [])[0];
            if (n) return n && n(e);
            var r = o.hint.auto.resolve(t, i)(t);
            e && e(r)
        }, getSocket: function k(t) {
            var n = this;
            if (!s.isSupport || !n.useRemote) return;
            if (n.ws) t && t(n.ws); else {
                var e = n.ws = new s({url: "wss://101.37.169.225:9012/suggest"});
                e.listen("open", function () {
                    t && t(e)
                }), e.listen("error", function () {
                    n.ws = null, m.out("出现错误")
                }), e.listen("close", function () {
                    n.ws = null
                }), e.listen("message", function (t) {
                    var e = m.id(t.id), i = n.getSocketEventName(e);
                    if (e !== m.id(n.codeIndex)) return n.unlisten(i);
                    n.fire(i, t.data)
                }), e.connect()
            }
        }, getInfo: function M() {
            if (!this.canHint()) return;
            var t = this.editor, e = t.getCursor(), i = t.getTokenAt(e);
            return i.state = o.innerMode(t.getMode(), i.state).state, {token: i, cur: e}
        }, getHintData: function C(t) {
            var e = this._cacheHintData = this._cacheHintData || {};
            e[t] || (e[t] = {}, e[t] = {
                keyword: (d[t].keyword || "").split(";"),
                header: (d[t].header || "").split(";"),
                extra: (d[t].extra || "").split(";"),
                method: (d[t].method || "").split(";"),
                func: m.map((d[t].func || "").split(";"), function (t) {
                    var e = t.split(">"), i = e.pop(), n = e.join(">"),
                        r = (g.trim(n.split("(")[0]), 50 < n.length ? n.substr(0, 50) + "..." : n);
                    return {display: r, text: n, type: i}
                })
            });
            return e[t]
        }, getSocketEventName: function T(t) {
            return "NC_CODEMIRROR_CODE_HINT" + t
        }, closeMenu: function N() {
            var t = this.editor;
            try {
                t.state.completionActive && t.state.completionActive.close()
            } catch (e) {
            }
        }, canHint: function O() {
            var t = this.parent, e = this.editor, i = e.getCursor(), n = e.getTokenAt(i);
            if (!this.canUse) return;
            {
                var r = m.id(t.valLangue()), a = c.getHintLang();
                if (!r || !m.contains(a, r)) return
            }
            var s = n.type, o = n.string;
            if (/\b(?:string|comment)\b/.test(s)) return;
            return !!g.trim(o) || void 0
        }, fireEditor: function F() {
            var t = this.parent;
            this.fire.apply(this, arguments), t.fire.apply(t, arguments)
        }, isStartWith: function R(t, e) {
            return 0 === t.indexOf(e)
        }, server: function D(t, i, n) {
            var r = this, a = r.parent, s = r.codeIndex;
            r.getSocket(function (t) {
                if (t && s === r.codeIndex) {
                    var e = r.getSocketEventName(s);
                    r.one(e, n), t.clearSendList(), t.send({
                        code: r.editor.getValue(),
                        line: i.line + 1,
                        col: i.ch + 1,
                        lang: a.valLangue(),
                        id: s
                    })
                }
            })
        }, wrapListItem: function H(t) {
            return {
                text: t.text + (t.method, ""), displayText: t.display, ext: t.ext, render: function (t, e, i) {
                    t.innerHTML = (i.ext ? '<span style="float:right;margin-left:20px;">' + i.ext + "</span>" : "") + i.displayText
                }
            }
        }, wrapResult: function z(t, e, i) {
            var n = this;
            return m.isArray(t) && 0 !== t.length ? {
                list: t,
                from: l(i.line, e.start),
                to: l(i.line, e.end),
                _handlers: {
                    shown: [function () {
                        n.fireEditor("codeHintShown")
                    }], select: [function () {
                        n.fireEditor("codeHintSelect")
                    }], pick: [function () {
                        n.fireEditor("codeHintPick")
                    }], close: [function () {
                        n.fireEditor("codeHintClose")
                    }]
                }
            } : null
        }, wrapHint: function B(t) {
            var n = this;
            return function (e) {
                var i;
                m.isFunction(e);
                return m.bind(t, n)(function (t) {
                    i = t, m.isFunction(e) && (n.lastHintList = t, e(t))
                }), n.lastHintList = i
            }
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/codeEditor/plugin/selfTest", ["nc", "cpn"], function (t, e, i) {
    var s = t("nc"), n = t("cpn"), a = s.$, o = s.Base, p = s.Clazz, r = n.Popup, l = i.exports = p.create();
    o.extend(l.prototype, {
        initialize: function d(t) {
            var e = this;
            e.editor = t.editor, e.parent = t.parent, e.systemCase = t.parent.rawConfig.selfTestSystemCase || [], e.elMap = {}, e.isInTest = !1, e.hasSystemCase = 0 < e.systemCase.length, e.parent.rawConfig.noSelfTest || e.initAction()
        }, initAction: function u() {
            var i = this, t = i.parent.getEl();
            t.on("click", ".js-self-test", function () {
                i.enterTest()
            }), t.on("click", ".js-exit-self-test", function () {
                i.exitTest()
            }), t.on("click", ".js-more-self-test", function () {
                i.popupExplain()
            }), t.on("click", ".js-system-list a.test-tag", function (t) {
                var e = +a(t.currentTarget).attr("data-index") || 0;
                i.fillCase(e)
            })
        }, val: function c() {
            var t = this.elMap;
            return {
                inTest: !!this.isInTest,
                input: t.inputIpt ? t.inputIpt.val() : "",
                output: t.outputIpt ? t.outputIpt.val() : ""
            }
        }, enterTest: function h() {
            var t = this, e = t.parent, i = e.getEl(), s = t.elMap;
            if (!t.isInTest) {
                if (!s.content) {
                    var n = t._createMask(), a = t._createContent();
                    i.append(n), i.append(a), s.mask = n, s.content = a, s.head = a.find(".js-head"), s.body = a.find(".js-body"), s.input = a.find(".js-input"), s.output = a.find(".js-output"), s.inputIpt = a.find(".js-input textarea"), s.outputIpt = a.find(".js-output textarea"), s.listDv = a.find(".js-system-list")
                }
                t.isInTest = !0, s.mask.show(), s.content.show(), s.inputIpt.focus(), t.resize(), e.fire("enterSelfTest")
            }
        }, exitTest: function f() {
            var t = this, e = t.parent, i = t.elMap;
            i.mask && i.mask.hide(), i.content && i.content.hide(), t.isInTest && e.fire("exitSelfTest"), t.isInTest = !1
        }, resize: function v() {
            var t = this;
            if (t.isInTest) {
                var e = t.elMap, i = e.content, s = e.head, n = e.body, a = e.input, o = e.output, p = e.inputIpt,
                    r = e.outputIpt, l = e.listDv;
                n.outerHeight(i.height() - s.outerHeight());
                var d = n.height() - (t.hasSystemCase ? l.outerHeight() : ""), u = n.width();
                a.outerWidth(u).outerHeight(d / 2), o.outerWidth(u).outerHeight(d / 2), p.outerWidth(a.width()).outerHeight(a.height()), r.outerWidth(o.width()).outerHeight(o.height())
            }
        }, fillCase: function g(t) {
            var e = this.systemCase[t], i = this.elMap;
            e && (i.inputIpt.val(e.input || ""), i.outputIpt.val(e.output || ""))
        }, popupExplain: function m() {
            var t = this.parent.rawConfig;
            new r({
                title: "代码自测功能使用提示",
                hasNoFooter: !0,
                width: 600,
                content: ['<div class="pop-code-notice">', '<div class="pop-info-tips">' + t.selfTestWarning + "</div>", "<p>1.填写输入数据和你期待的结果</p>", "<p>2.点击“自测调试”，如果你输入的数据得到的实际输出与你期待的输出一致，则表示你的测试数据通过，会有如下提示：</p>", '<img src="//uploadfiles.nowcoder.com/images/20180823/56_1535005008976_AD4F6DE9FF11BCC9697747A2B50BC911" style="width:550px;height:100px;" />', "<p>如果你输入的数据得到的实际输出与你期待的输出不一致，则表示你的测试数据不通过，会有如下提示：</p>", '<img src="//uploadfiles.nowcoder.com/images/20180823/56_1535005392947_E44F06C1B49DDAE84EB477856E41381F" style="width:550px;height:100px;" />', "</div>", '<div class="submit-btnbox"><a href="javascript:void(0);" class="btn btn-primary js-close-popup">关闭提示</a></div>'].join("")
            })
        }, _createMask: function y() {
            return a('<div style="position:absolute;z-index:9;left:0;top:0;background:#000;width:100%;height:100%;filter:alpha(opacity:30);opacity:0.3;"></div>')
        }, _createContent: function x() {
            var t = this.hasSystemCase ? '<div class="self-test-tags js-system-list">使用示例自测' + o.map(this.systemCase, function (t, e) {
                return '<a class="test-tag" href="javascript:void(0);" data-index="' + e + '">示例' + (e + 1) + "</a>"
            }).join("") + "</div>" : "";
            return a(['<div class="self-test-main" style="position:absolute;z-index:10;left:0;top:0;width:100%;height:100%;font-size:14px;overflow:hidden;">', '<div class="js-head self-test-hd">', '<span>根据本题要求输入你自测的用例，<a href="javascript:void(0);" class="link-green js-more-self-test">点击了解更多</a></span>', '<a href="javascript:void(0);" class="link-green float-right js-exit-self-test">返回代码编辑器</a>', "</div>", '<div class="js-body self-test-bd">', '<div class="js-input self-test-item" style="padding:0 0 5px 0;display:block;">', '<textarea style="resize:none;" placeholder="输入数据"></textarea>', "</div>", '<div class="js-output self-test-item" style="padding:5px 0 0 0;display:block;">', '<textarea style="resize:none;" placeholder="你期待的输出结果"></textarea>', "</div>", t, "</div>", "</div>"].join(""))
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/codeEditor/plugin/setting", ["nc", "cpn"], function (t, e, n) {
    var a = t("nc"), i = t("cpn"), l = a.$, u = a.Base, c = a.Clazz, s = a.Db, r = i.CheckBox,
        o = n.exports = c.create();
    u.extend(o.prototype, {
        initialize: function d(t) {
            var e = this;
            e.editor = t.editor, e.parent = t.parent, e.initDb(), e.initSwitch()
        }, initDb: function p() {
            var t = this.db = s.create("codeEditorCache"), e = s.get("codeEditorHintStatus"),
                n = s.get("codeEditorTabSpaceStatus");
            e !== undefined && null !== e && (t.set("settingHint", e), s.remove("codeEditorHintStatus"));
            n !== undefined && null !== n && (t.set("settingTabSpace", n), s.remove("codeEditorTabSpaceStatus"))
        }, initSwitch: function h() {
            var t = this,
                e = l(['<div class="format-setting">', '<a href="javascript:void(0);" class="icon-cog"></a>', '<ul class="dropdown-menu js-switch"></ul>', "</div>"].join(""));
            t.getEl().append(e);
            var n = e.find(".js-switch");
            t.createHint(n), t.createTab(n), t.createSpaceCount(n)
        }, createHint: function g(t) {
            var e = this, n = e.parent, a = n.rawConfig, i = e.db;
            if ({keyword: 1, all: 1}[a.codeHint || ""]) {
                var c = i.get("settingHint");
                c = !(c !== undefined && !c);
                var s = e.createSwitch(t, "代码自动补全", c);
                s.listen("change", function () {
                    r(s.isChecked())
                }), r(c)
            }

            function r(t) {
                i.set("settingHint", !!t), n.execPlugin("hint", "start", !!t)
            }
        }, createTab: function f(t) {
            var e = this, n = e.parent, a = (n.rawConfig, n.getEl()), i = e.db, c = i.get("settingTabSpace");
            c = !(c !== undefined && !c);
            var s = e.createSwitch(t, "空格tab提示", c);

            function r(t) {
                i.set("settingTabSpace", !!t), a[t ? "removeClass" : "addClass"]("cm-nc-tab-space-close")
            }

            s.listen("change", function () {
                r(s.isChecked())
            }), r(c)
        }, createSpaceCount: function v(t) {
            var r = this.parent, o = this.db,
                e = l(['<li style="width:180px;">', '<div class="code-typography-item">', '<span class="code-typography-txt">Tab长度</span>', '<span class="code-typography-oprt"><a href="javascript:void(0);" class="typography-oprt js-space-action" data-type="-">-</a><span class="js-result">' + p() + '</span><a href="javascript:void(0);" class="typography-oprt js-space-action" data-type="+">+</span></span>', "</div>", "</li>"].join("")),
                d = e.find(".js-result");

            function p() {
                return {2: 2, 4: 4, 8: 8}[o.get("settingSpaceCount")] || 4
            }

            t.append(e), e.on("click", ".js-space-action", function (t) {
                var e = l(t.currentTarget), n = l.trim(e.attr("data-type")), a = p(), i = [2, 4, 8],
                    c = u.indexOf(i, a) + ("-" === n ? -1 : 1);
                c = Math.min(Math.max(0, c), i.length - 1);
                var s = i[c];
                d.html(s), s !== a && (o.set("settingSpaceCount", s), r.editor.setOption("indentUnit", s))
            })
        }, createSwitch: function S(t, e, n) {
            var a = l('<li style="width:180px;"><a href="javascript:void(0);"></a></li>');
            return t.append(a), new r({renderTo: a.find("a"), text: e, checked: n})
        }, getEl: function b() {
            return this.parent.getEl().find(".js-head-tool")
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/at", ["nc", "../../../../base/env", "../../../../bll/atList", "cpn", "../../../../action/action", "../../../../action/ajax", "../../../../base/bridge", "../../../../base/localization"], function (t, e, n) {
    var o = t("nc"), u = o.$, i = o.Base, r = (o.Dom, o.Clazz), c = t("../../../../base/env"),
        g = t("../../../../bll/atList"), a = n.exports = r.create();
    i.extend(a.prototype, {
        initialize: function d(t) {
            var e = this;
            if (!(e.editor = t).rawConfig.needAt) return;
            e.id = i.ascId(), e.initIpt(t)
        }, initIpt: function p(t) {
            var o, i = this, e = 150, r = g.getPool(i.id), n = u(t.getEditorDoc()), a = u(t.getEditorWin()),
                d = u(n).find("body");

            function s() {
                window.clearTimeout(o), o = window.setTimeout(function () {
                    i.analyze()
                }, e)
            }

            function c(t) {
                i.cancelAt() && t.preventDefault()
            }

            n.on("click", s), n.on("focus", s), n.on("keydown", function f(t) {
                window.clearTimeout(o);
                var e = +t.keyCode, n = {
                    37: "left",
                    38: "top",
                    39: "right",
                    40: "down",
                    16: "shift",
                    17: "ctrl",
                    18: "option",
                    91: "cmd"
                };
                if (!n[e] && i.cancelAt()) return void t.preventDefault();
                if (!{38: 1, 40: 1, 13: 1}[e]) return s();
                if (13 == e && r.isListMenuShow) return t.preventDefault()
            }), a.on("blur", function l() {
                window.clearTimeout(o), o = window.setTimeout(function () {
                    g.showList(i.id)
                }, e)
            }), d.on("paste", c), d.on("cut", c), d.on("copy", c)
        }, analyze: function f() {
            var a = this, d = a.editor, s = d.keEditor, t = a.getAtInfo();
            if (!t) return g.showList(a.id);
            var e = a.getPos(t.range);
            g.showList(a.id, {
                ipt: d.getEditorDoc(), text: t.text, pos: e, ext: {top: 5}, ok: function (t) {
                    var e = d.getEditorDoc(), n = a.getAtInfo().range;
                    c.isInDev(), t.id;
                    s.insertHtml('​<a data-card-uid="' + t.id + '" href="javascript:void(0);">@' + t.nickname + '</a>&nbsp;<span id="jsNcAtTmpSpan"></span>'), n.deleteContents();
                    try {
                        var o = e.getElementById("jsNcAtTmpSpan");
                        (n = e.createRange()).selectNodeContents(o), n.collapse(!1);
                        var i = d.getEditorWin().getSelection();
                        i.removeAllRanges(), i.addRange(n), o.parentNode.removeChild(o)
                    } catch (r) {
                    }
                }
            })
        }, getAtInfo: function s() {
            var t = this.editor.keEditor.cmd.range;
            if (!t.collapsed) return;
            if (this.getAtNodeByRange(t)) return;
            var e, n = t.shrink().down().startContainer.data || "", o = t.startOffset - 1, i = -1;
            for (; 0 <= o && ("@" === (e = n[o]) && (i = o), "@" !== e && !/\s/.test(e));) o--;
            if (-1 === i) return;
            if (0 < i && /[1-9a-z]/gi.test(n[i - 1])) return;
            var r = t.cloneRange();
            return r.setStart(t.startContainer, i), {
                index: i,
                text: n.substring(i + 1, t.startOffset),
                full: n.substring(i, t.startOffset),
                range: r
            }
        }, getPos: function l(t) {
            var e = this.editor, n = t.doc, o = n.createDocumentFragment(), i = n.getElementById("ncAtTmpHockSpan");
            i || ((i = n.createElement("span")).id = "ncAtTmpHockSpan");
            i.innerHTML = "@", o.appendChild(i), t.insertNode(o);
            var r = e.getElPos(i), a = u(i).outerHeight();
            return i.parentNode.removeChild(i), {top: r.top + a, left: r.left}
        }, cancelAt: function v() {
            var t = this, e = t.editor.keEditor;
            e.cmd.selection();
            var n = e.cmd.range, o = n.collapsed, i = t.getAtNodeByRange(n), r = o ? i : t.getAtNodeByRange(n, !0);
            if (!i && !r) return;
            var a = i, d = i !== r && r ? r : null, s = n.createBookmark();
            return a && t.removeNode(a, !0), d && t.removeNode(d, !0), n.moveToBookmark(s), e.select(), !0
        }, getAtNodeByRange: function m(t, e) {
            var n = t[e ? "endContainer" : "startContainer"], o = t[e ? "endOffset" : "startOffset"];
            if (1 === n.nodeType) {
                var i = n.childNodes;
                if (o = 0 < o ? o - 1 : 0, i.length > o) return this.getAtNode(i[o])
            }
            return this.getAtNode(n)
        }, getAtNode: function h(t) {
            for (; t;) {
                var e = (t.nodeName || "").toLowerCase(),
                    n = (t.className, t.getAttribute ? t.getAttribute("data-card-uid") : "");
                if ("a" === e && (n || "" === n)) break;
                t = t.parentNode
            }
            return t
        }, removeNode: function N(t, e) {
            var n, o = (t || {}).parentNode;
            if (o) {
                if (e && t.hasChildNodes()) for (; n = t.firstChild;) o.insertBefore(n, t);
                o.removeChild(t)
            }
            return t
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/autoHeight", ["nc"], function (t, n, e) {
    var i = t("nc"), a = i.$, o = i.Base, r = i.Dom, c = i.Clazz, u = e.exports = c.create();
    o.extend(u.prototype, {
        initialize: function g(e) {
            if (e.rawConfig.noAutoHeight) return;
            var t = e.getEditorEl(), i = r.getScrollParent(t);
            i = a(i || window);
            var o = e.val();
            e.listen("afterChange", function () {
                var t = e.val();
                if (o !== t) {
                    o = t;
                    try {
                        e.autoHeight(i)
                    } catch (n) {
                    }
                }
            }), o && a(e.getEditorDoc()).one("click", function () {
                e.autoHeight(i)
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/autoLink", ["nc"], function (e, t, n) {
    var i = e("nc"), r = i.$, o = i.Base, a = i.Clazz, c = i.Browser, l = (i.Str, i.Html), u = n.exports = a.create();
    o.extend(u.prototype, {
        initialize: function p(n) {
            if (c.ie()) return;
            var e = n.getEditorDoc(), e = (n.keEditor, r(e));
            n.listen("afterBlur", function () {
                var e = n.val(), t = l.replaceLink(e);
                t !== e && n.val(t)
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/codeName", ["nc"], function (e, a, n) {
    var t = e("nc"), h = t.$, u = t.Base, l = t.Clazz, o = n.exports = l.create(), y = window.KindEditor;
    u.extend(o.prototype, {
        initialize: function i(s) {
            var v, d = s.keEditor, m = s.getEditorDoc(), p = s.getEditorWin();
            h(m).on("click", "pre", function (e) {
                if (e.shiftKey) {
                    var a = h(e.target), n = a.attr("class") || "", t = /lang-(.*)/.exec(n), l = t && t[1] || "",
                        o = y(s.getEditorEditEl().get(0)).pos(), i = y(a.get(0)).pos(),
                        c = h(p).scrollTop() || h(m.body).scrollTop(), r = o.y + (i.y < c ? 0 : i.y - c);
                    v = d.menu = new y.MenuClass({
                        name: "codename",
                        width: 150,
                        centerLineMode: !1,
                        x: o.x + i.x,
                        y: r,
                        z: 50
                    }), h(v.div).css({"max-height": "200px", "overflow-y": "auto"});
                    u.forEach([{name: "ASP/VB", val: "vb"}, {name: "C/C++", val: "cpp"}, {
                        name: "CSS",
                        val: "css"
                    }, {name: "C#", val: "cs"}, {name: "HTML", val: "html"}, {
                        name: "Java",
                        val: "java"
                    }, {name: "JavaScript", val: "js"}, {name: "Perl", val: "pl"}, {
                        name: "PHP",
                        val: "php"
                    }, {name: "Python", val: "py"}, {name: "Ruby", val: "rb"}, {
                        name: "Shell",
                        val: "bsh"
                    }, {name: "XML", val: "xml"}, {name: "Other", val: ""}], function (e) {
                        v.addItem({
                            title: '<span unselectable="on">' + e.name + "</span>",
                            checked: l === e.val,
                            click: function () {
                                e.val ? a.removeClass().addClass("prettyprint lang-" + e.val) : a.removeClass().addClass("prettyprint"), d.hideMenu()
                            }
                        })
                    })
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/defaultAction", ["nc", "cpn", "../../../../bll/bll", "../../../../base/config", "../../../../action/action", "../../../../action/ajax", "../../../../base/env", "../../../../base/bridge", "../../../../base/localization", "../../../../bll/uploadRemote"], function (t, i, a) {
    var o = t("nc"), n = t("cpn"), c = o.$, e = o.Base, r = o.Clazz, l = o.Uri, d = (n.Popup, t("../../../../bll/bll")),
        u = a.exports = r.create();
    e.extend(u.prototype, {
        initialize: function f(t) {
            var i = this, a = i.action = (t.rawConfig || {}).toolAction || {};
            i.initMath(t), i.initEmoji(t), i.initVote(t);
            var o = t.getEditor();
            e.forEach(a, function (t, i) {
                o._handlers[i] = [t]
            })
        }, initMath: function s(n) {
            this.action.clickToolbarmath = function () {
                d.formula({
                    useLaTex: !0, call: function (t) {
                        n.getEditor().exec("insertimage", t)
                    }, callLaTex: function (t) {
                        n.getEditor().insertHtml(t)
                    }
                })
            }, c(n.getEditorDoc()).on("click", "img", function (t) {
                var i = c(t.currentTarget), a = i.attr("src"), o = l.getParam("tex", a);
                o && d.formula({
                    useLaTex: !0, value: o, valueLaTex: "$ " + o + " $", eidtor: n, call: function (t) {
                        i.attr("src", t).attr("data-ke-src", t)
                    }, callLaTex: function (t) {
                        i.replaceWith(t)
                    }
                })
            })
        }, initEmoji: function g(a) {
            this.action.clickToolbaremoji = function () {
            };
            var o = a.getEditor(), n = o && o.toolbar ? o.toolbar.get("emoji") : null;
            n && n.get(0) && t.async("../../../attachSub/attachEmoji", function (t) {
                var i = t.show({
                    target: n.get(0), call: function (t) {
                        o.insertHtml(t.html)
                    }
                });
                a.pushChild(i)
            })
        }, initVote: function v(n) {
            var o = n.rawConfig;
            if (!o.cbEditVote) return;
            var e = c(n.getEditorDoc());
            this.action.clickToolbarvote = function () {
                o.cbEditVote({
                    call: function (t) {
                        !function o(t) {
                            var i = e.find("img[data-vote-id]");
                            if (t && i.get(0)) i.attr("data-vote-id", t); else if (t) {
                                var a = "https://static.nowcoder.com/images/vote-placeholder.png";
                                t && n.getEditor().insertHtml('<img src="' + a + '" data-vote-id="' + t + '" data-ke-src="' + a + '" /><div><br /></div>')
                            }
                        }(t)
                    }
                })
            }, e.on("click", "img[data-vote-id]", function (t) {
                var i = c(t.currentTarget), a = c.trim(i.attr("data-vote-id"));
                a && o.cbEditVote({
                    voteId: a, call: function (t) {
                        i.attr("data-vote-id", t)
                    }
                })
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/imageBar", ["nc"], function (t, i, o) {
    var e = t("nc"), s = e.$, n = e.Base, a = e.Clazz, l = e.Dom, c = e.Uri, r = o.exports = a.create();
    n.extend(r.prototype, {
        initialize: function g(t) {
            var o, i = this, d = t.getEl(),
                h = s(['<div class="js-editor-img-bar editor-img-bar" style="display:none;width:60px;">', '<a href="javascript:void(0);" title="放大" class="icon-zoom-in"></a>', '<a href="javascript:void(0);" title="缩小" class="icon-zoom-out"></a>', "</div>"].join(""));
            s(document.body).append(h), t.listen("destroy", function () {
                h.remove()
            });
            var u = t.getEditorDoc();
            s(u).on("keydown", function (t) {
                window.clearTimeout(o), h.unbind("click").hide()
            }), s(u).on("click", function (t) {
                window.clearTimeout(o), h.unbind("click").hide();
                var r = t.target;
                i.canEdit(r) && (o = window.setTimeout(function () {
                    var t = r.width, i = r.height;
                    if (t && i) {
                        var o = l.getPosTop(r, u.body), e = l.getPosLeft(r, u.body), n = l.getPosTop(d),
                            a = l.getPosLeft(d);
                        h.css("top", n + o + 40).css("left", a + e + 1).show();
                        var c = null;
                        h.on("click", "a.icon-zoom-in", function (t) {
                            var i = s(r).width();
                            s(r).removeAttr("width height").height("auto"), c = c || s(r).width("auto").width();
                            var o = (Math.round(10 * i / c) + 1) / 10;
                            s(r).width(5 < o ? i : c * o)
                        }), h.on("click", "a.icon-zoom-out", function (t) {
                            var i = s(r).width();
                            s(r).removeAttr("width height").height("auto"), c = c || s(r).width("auto").width();
                            var o = (Math.round(10 * i / c) - 1) / 10;
                            s(r).width(o < .1 ? i : c * o)
                        })
                    }
                }, 25))
            }), s(document.body).on("click", function (t) {
                var i = t.target;
                i === h.get(0) || s.contains(h.get(0), i) || (window.clearTimeout(o), h.unbind("click").hide())
            })
        }, canEdit: function d(t) {
            var i = s(t), o = s.trim(i.attr("src"));
            return o && i.get(0) && "img" === (i.get(0).tagName || "").toLowerCase() && !c.getParam("tex", o) && !i.attr("data-card-emoji") && !i.attr("data-vote-id")
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/md", ["nc", "cpn", "../../editorStyle"], function (e, t, n) {
    var i = e("nc"), o = e("cpn"), r = i.$, a = i.Base, d = i.Clazz, c = o.Popup, l = e("../../editorStyle"),
        h = n.exports = d.create();
    a.extend(h.prototype, {
        initialize: function f(e) {
            var t = this;
            if (!(t.editor = e).rawConfig.needChangeEditor) return;
            var n = r('<a class="ico-to-html js-2-md">MD编辑器</a>');
            e.getToolbarEl().prepend(n), n.on("click", function () {
                t.changeEditor()
            })
        }, changeEditor: function g() {
            var n = this.editor, i = n.rawConfig, o = n.getEl(), d = n.val();
            if (a.isFunction(i.changeEditor)) return i.changeEditor();
            if (n.isEmpty()) return e.async("../../mdEditor/index", function (e) {
                t(e)
            });

            function t(e) {
                var t = new e({
                    renderTo: o,
                    renderBy: "after",
                    isAdmin: i.isAdmin,
                    content: e.html2md(d),
                    needChangeEditor: !0,
                    needAt: !!i.needAt,
                    afterChangeEditor: i.afterChangeEditor,
                    width: i.width,
                    height: i.height,
                    draftChange: i.draftChange,
                    disabled: i.disabled,
                    clickMask: i.clickMask,
                    noToolbarFixed: i.noToolbarFixed,
                    toolbarFixedTop: i.toolbarFixedTop,
                    noAutoHeight: i.noAutoHeight,
                    render: function () {
                        n.destroy()
                    }
                });
                i.afterChangeEditor && i.afterChangeEditor.call(n, t), n.fire("changeEditor", t), o.hide()
            }

            e.async("../../mdEditor/index", function (r) {
                var e = c.confirm('切换到 MarkDown 编辑器可能会丢失部分内容格式，确认切换？<a class="link-green" href="javascript:void(0);">预览转换后的效果</a>', function () {
                    t(r)
                });
                e && e.getEl().find("a.link-green").on("click", function (e) {
                    var t = r.html2md(d), n = r.md2html(t), i = window.open(), o = i.document;
                    o.open("text/html", "replace"), o.write("<html><head><title>预览</title><style>" + l.css + "</style></head><body>" + n + "</body></html>"), o.close()
                })
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/monitContent", ["nc"], function (n, e, t) {
    var a = n("nc"), c = a.$, i = a.Base, r = a.Clazz, o = t.exports = r.create();
    i.extend(o.prototype, {
        initialize: function l(i) {
            var r, o, f = i.rawConfig;
            if (f.draftChange) {
                var n = window.setInterval(e, 1600);
                i.listen("destroy", function () {
                    window.clearInterval(n)
                })
            }

            function e() {
                i.waitCreated(function () {
                    try {
                        var n = (new Date).getTime();
                        if (r) {
                            if (800 < n - r) {
                                var e = o || "", t = c.trim(i.val());
                                r = n, (o = t) !== e && (i.fire("draftChange"), f.draftChange && f.draftChange.call(i, t))
                            }
                        } else r = n
                    } catch (a) {
                    }
                })
            }

            i.listen("afterChange", e)
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/placeholder", ["nc"], function (e, t, o) {
    var a = e("nc"), l = a.$, n = a.Base, r = a.Clazz, i = o.exports = r.create();
    n.extend(i.prototype, {
        initialize: function c(e) {
            var t = e.rawConfig, o = e.getEditorDoc(), a = l(o.body), n = e.getEditor(), r = t.placeholder;
            r && (a.attr("data-placeholder", r), e.listen("afterChange", i), i());

            function i() {
                var e = n.isEmpty();
                a[e ? "addClass" : "removeClass"]("show-placeholder")
            }
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/toolbar", ["nc", "cpn", "../../../select"], function (e, t, i) {
    var n = e("nc"), o = e("cpn"), p = n.$, r = n.Base, a = n.Clazz, f = n.Dom, x = n.Time, l = o.Tips,
        s = e("../../../select"), c = i.exports = a.create();
    r.extend(c.prototype, {
        initialize: function d(e) {
            var t = this;
            t.editor = e, t.initFullScreen(), t.initTips(), t.initFix(), t.initCodeSelect()
        }, initFullScreen: function u() {
            var e = this.editor, t = e.rawConfig;
            if (t.fullScreen) {
                var i = p('<a href="javaScript:void(0);" class="full-ico"></a>');
                e.getToolbarEl().append(i), i.on("click", t.fullScreen)
            }
        }, initTips: function v() {
            var t = this.editor, e = (t.rawConfig, t.getToolbarEl().find("span.ke-outline"));
            l.titleEl(e, {verReverse: !0}, function (e) {
                t.pushChild(e)
            })
        }, initFix: function h() {
            var e = this.editor, t = e.rawConfig;
            if (t.noToolbarFixed) return;
            var n, o, r = p(window), a = +t.toolbarFixedTop || 0, l = e.getEditorEl(), c = e.getToolbarEl(),
                i = x.frequency(10), s = 0, d = !0;

            function u() {
                (0 === s && d || 0 < s) && (d && window.setTimeout(v, 1200), !d && v(), d = !1)
            }

            function v() {
                i(function () {
                    s++;
                    var e = l.outerHeight(), t = r.scrollTop(), i = f.getPosTop(l);
                    i < t + a && t + a + o < i + e ? (n || (n = c.width() || 0), c.css("width", n), l.addClass("fixed-eidt-header"), c.css("top", a)) : (l.removeClass("fixed-eidt-header"), c.css("top", null), c.css("width", "auto"))
                })
            }

            o = c.outerHeight(), r.on("scroll", u), e.listen("destroy", function () {
                r.unbind("scroll", u)
            })
        }, initCodeSelect: function m() {
            var a = this.editor;
            if (a.rawConfig.noCodeSelect) return;
            var l = a.keEditor, c = function t(n) {
                var e = a.getToolbarEl();
                return new s({
                    renderTo: e,
                    renderBy: "prepend",
                    size: "small",
                    text: "代码语言",
                    options: [{text: "ASP/VB", value: "vb"}, {text: "C/C++", value: "cpp"}, {
                        text: "CSS",
                        value: "css"
                    }, {text: "C#", value: "cs"}, {text: "HTML", value: "html"}, {
                        text: "Java",
                        value: "java"
                    }, {text: "JavaScript", value: "js"}, {text: "Perl", value: "pl"}, {
                        text: "PHP",
                        value: "php"
                    }, {text: "Python", value: "py"}, {text: "Ruby", value: "rb"}, {
                        text: "Shell",
                        value: "bsh"
                    }, {text: "XML", value: "xml"}, {text: "其他", value: ""}],
                    change: function () {
                        var e = this.val();
                        a.removePlaceHolder(), n.cmd.selection(), n.select();
                        var t = n.cmd.commonNode({pre: "*"});
                        if (!t && (n.exec("formatblock", "<pre>"), t = n.cmd.commonNode({pre: "*"}))) {
                            try {
                                n.cmd.range.selectNodeContents(t), n.cmd.removeformat()
                            } catch (i) {
                            }
                            t.addClass("prettyprint"), t.next() || t.after("<br />")
                        }
                        p(t).removeClass().addClass("prettyprint " + (e ? "lang-" + e : "")), n.select(), a.fire("afterChange")
                    }
                })
            }(l);
            a.listen("afterChange", function () {
                var e = l.edit.cmd.range,
                    t = a.isInTagNode(e.startContainer, "pre") || a.isInTagNode(e.endContainer, "pre");
                if (t) {
                    var i = l.cmd.commonNode({pre: "*"});
                    if (i) {
                        var n = i.attr("class") || "", o = /lang-(.*)/.exec(n), r = o && o[1] || "";
                        c.val(r)
                    }
                } else c.clear()
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/uploadPaste", ["nc", "cpn"], function (e, n, t) {
    var a = e("nc"), o = e("cpn"), l = (a.$, a.Base), r = a.Clazz, u = a.Dom, i = t.exports = r.create();
    l.extend(i.prototype, {
        initialize: function c(e) {
            if (e.rawConfig.noPasteUpload) return;
            var n, i = e.getEditor(), t = e.getEditorDoc();

            function p() {
                return n || (n = o.PopupUploadTips.show({})).popup.listen("close", function () {
                    n = null
                }), n
            }

            u.bindPaste(t, t.body, function (e, n) {
                var t = l.find(e, function (e) {
                    return "file" === e.kind && /image/.test(e.type || "")
                }), o = t ? t.getAsFile() : null;
                if (o) {
                    n && n.preventDefault && n.preventDefault();
                    var r = new a.Upload({
                        url: "/uploadImage?type=1", progress: function (e) {
                            var n = p();
                            n.showProgress("正在上传：" + e + "%", e)
                        }, error: function () {
                            var e = p();
                            e.showError("上传失败")
                        }, call: function (e) {
                            var n = p();
                            n.close(), i.exec("insertimage", e.url)
                        }
                    });
                    r.uploadBlob(o, (new Date).getTime() + "." + (o.type || "").split("/").pop())
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/hEditor/plugin/uploadRemote", ["nc", "cpn", "../../../../bll/uploadRemote", "../../../../action/action", "../../../../action/ajax", "../../../../base/env", "../../../../base/bridge", "../../../../base/localization"], function (t, n, e) {
    var o = t("nc"), a = t("cpn"), d = o.$, p = o.Base, i = o.Clazz, u = a.Popup, f = t("../../../../bll/uploadRemote"),
        r = e.exports = i.create();
    p.extend(r.prototype, {
        initialize: function s(c) {
            if (c.rawConfig.noUploadRemote) return;
            var l = !1;

            function t() {
                if (!l) {
                    var t = c.getEditorDoc(), n = d(t.body).find("img"), o = n.length;
                    if (0 !== o) {
                        var e = p.map(n, function (t) {
                            return d.trim(d(t).attr("src"))
                        });
                        if (f.canUpload(e)) {
                            var a = f.isUploaded(e) ? null : function r() {
                                return new u({
                                    hasNoTitle: !0,
                                    hasNoFooter: !0,
                                    noUnique: !0,
                                    content: '<div style="font-size:14px;text-align:center;">图片上传中...</div>'
                                })
                            }();
                            l = !0;
                            var i = 0;
                            p.forEach(n, function (n) {
                                n = d(n);
                                var e = d.trim(n.attr("src"));
                                f.upload(e, function (t) {
                                    t && t !== e && (n.attr("src", t), n.attr("data-ke-src", t)), o <= ++i && (l = !1, a && a.close())
                                })
                            })
                        }
                    }
                }
            }

            c.listen("draftChange", t), t()
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/mdEditor/plugin/html", ["nc", "cpn", "../../editorStyle"], function (e, t, i) {
    var n = e("nc"), o = e("cpn"), r = n.$, a = n.Base, d = n.Clazz, c = n.Limit,
        h = (o.Popup, e("../../editorStyle"), i.exports = d.create());
    a.extend(h.prototype, {
        initialize: function l(e) {
            var t = this;
            if (!(t.editor = e).rawConfig.needChangeEditor) return;
            var i = r('<a class="ico-to-html">HTML编辑器</a>');
            e.toolbarEl.prepend(i), i.on("click", function () {
                !c.mark(i) && t.changeEditor(), c.pause(i)
            })
        }, changeEditor: function g() {
            var i = this.editor, n = i.rawConfig, o = i.getEl();
            if (a.isFunction(n.changeEditor)) return n.changeEditor();
            e.async("../../hEditor/index", function (e) {
                var t = new e({
                    renderTo: o,
                    renderBy: "after",
                    isAdmin: n.isAdmin,
                    content: i.val(),
                    needChangeEditor: !0,
                    needAt: n.needAt,
                    afterChangeEditor: n.afterChangeEditor,
                    width: n.width,
                    height: n.height,
                    draftChange: n.draftChange,
                    disabled: n.disabled,
                    clickMask: n.clickMask,
                    noToolbarFixed: n.noToolbarFixed,
                    toolbarFixedTop: n.toolbarFixedTop,
                    noAutoHeight: n.noAutoHeight,
                    render: function () {
                        i.destroy()
                    }
                });
                n.afterChangeEditor && n.afterChangeEditor.call(i, t), i.fire("changeEditor", t)
            }), o.hide()
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/mdEditor/plugin/toolbar", ["nc", "cpn", "../../../select"], function (t, e, i) {
    var o = t("nc"), n = t("cpn"), c = o.$, r = o.Base, s = o.Clazz, d = (o.Dom, o.Time), a = n.Tips,
        l = (t("../../../select"), i.exports = s.create());
    r.extend(l.prototype, {
        initialize: function u(t) {
            var e = this;
            e.editor = t, e.initHover(), e.initTips(), e.initFix()
        }, initHover: function f() {
            this.editor.toolbarEl.find("span.ke-outline").mouseenter(function (t) {
                c(t.currentTarget).addClass("ke-on")
            }).mouseleave(function (t) {
                var e = c(t.currentTarget);
                !e.attr("data-on") && e.removeClass("ke-on")
            })
        }, initTips: function p() {
            var e = this.editor, t = e.toolbarEl.find("span.ke-outline");
            a.titleEl(t, {verReverse: !0}, function (t) {
                e.pushChild(t)
            })
        }, initFix: function v() {
            var t = this.editor, e = t.getEl(), i = t.rawConfig;
            if (i.noToolbarFixed) return;
            var r = c(window), s = +i.toolbarFixedTop || 0, o = t.toolbarEl, a = o.outerHeight(), l = d.frequency(10);

            function n() {
                !function t(o, n) {
                    l(function () {
                        var t = o.outerHeight(), e = r.scrollTop(), i = o.offset();
                        i.top < e + s && i.top + t > e + s + a ? (n.outerWidth(n.outerWidth()), o.addClass("fixed-eidt-header"), n.css("top", s)) : (o.removeClass("fixed-eidt-header"), n.css("top", null), n.css("width", "auto"))
                    })
                }(e, o)
            }

            r.on("scroll", n), n(), t.listen("destroy", function () {
                r.unbind("scroll", n)
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/mdEditor/plugin/uploadPaste", ["nc", "cpn"], function (e, n, o) {
    var p = e("nc"), t = e("cpn"), a = (p.$, p.Base), i = p.Clazz, l = p.Dom, r = o.exports = i.create();
    a.extend(r.prototype, {
        initialize: function u(i) {
            var e;
            if (i.rawConfig.noPasteUpload) return;

            function r() {
                return e || (e = t.PopupUploadTips.show({})).popup.listen("close", function () {
                    e = null
                }), e
            }

            l.bindPaste(document, i.iptEl, function (e) {
                var n = a.find(e, function (e) {
                    return "file" === e.kind && /image/.test(e.type || "")
                }), o = n ? n.getAsFile() : null;
                if (o) {
                    var t = new p.Upload({
                        url: "/uploadImage?type=1", progress: function (e) {
                            var n = r();
                            n.showProgress("正在上传：" + e + "%", e)
                        }, error: function () {
                            var e = r();
                            e.showError("上传失败")
                        }, call: function (e) {
                            var n = r();
                            n.close(), i.selection.image(e.url), i.record(), i.fire("afterChange")
                        }
                    });
                    t.uploadBlob(o, (new Date).getTime() + "." + o.type.split("/").pop())
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/mdEditor/plugin/uploadRemote", ["nc", "cpn", "../../../../bll/uploadRemote", "../../../../action/action", "../../../../action/ajax", "../../../../base/env", "../../../../base/bridge", "../../../../base/localization"], function (e, n, t) {
    var i = e("nc"), o = e("cpn"), p = i.$, u = i.Base, a = i.Clazz, d = o.Popup, f = e("../../../../bll/uploadRemote"),
        r = t.exports = a.create();
    u.extend(r.prototype, {
        initialize: function s(l) {
            if (l.rawConfig.noUploadRemote) return;
            var c = !1;

            function e() {
                if (!c) {
                    var e = l.text(), t = [];
                    e.replace(/\!\[.*?\]\((.*?)\)/gi, function (e, n) {
                        return n = p.trim(n), (n = p.trim(n.split(/\s+/)[0])) && t.push(n), e
                    });
                    var o = (t = u.uniq(t)).length;
                    if (f.canUpload(t)) {
                        var a = 0, r = f.isUploaded(t) ? null : function n() {
                            return new d({
                                hasNoTitle: !0,
                                hasNoFooter: !0,
                                noUnique: !0,
                                content: '<div style="font-size:14px;text-align:center;">图片上传中...</div>'
                            })
                        }();
                        c = !0, u.forEach(t, function (i) {
                            f.upload(i, function (t) {
                                if (t && i !== t) {
                                    var e = l.text(), n = e.replace(/\!\[.*?\]\((.*?)\)/gi, function (e, n) {
                                        return 0 <= (n = p.trim(n)).indexOf(i) && (e = e.replace(i, t)), e
                                    });
                                    e !== n && l.text(n)
                                }
                                o <= ++a && (c = !1, r && r.close())
                            })
                        })
                    }
                }
            }

            l.listen("draftChange", e), e()
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/mdEditor/util/cmd", ["nc", "cpn", "./util", "ncPlugin/md/markdown", "ncPlugin/md/to-markdown", "../../../../bll/bll", "../../../../base/config", "../../../../action/action", "../../../../action/ajax", "../../../../base/env", "../../../../base/bridge", "../../../../base/localization", "../../../../bll/uploadRemote"], function (i, e, t) {
    var n = i("nc"), o = i("cpn"), a = n.$, l = n.Clazz, r = n.Base, s = o.Popup, c = o.Input, u = o.AttachUpload,
        d = i("./util"), p = i("../../../../bll/bll"), f = i("../../../../base/config"), m = t.exports = l.create();
    r.extend(m.prototype, {
        initialize: function g(i) {
            var e = this;
            e.editor = i.editor, e.selection = e.editor.selection
        }, preview: function h() {
            var i = this.editor;
            i.showPreview(!i.isInPreview)
        }, bold: function v() {
            this.selection.strong()
        }, italic: function b() {
            this.selection.em()
        }, codeblock: function w() {
            this.selection.blockCode()
        }, bockquote: function k() {
            this.selection.quote()
        }, insertorderedlist: function y() {
            this.selection.ol()
        }, insertunorderedlist: function x() {
            this.selection.ul()
        }, removeformat: function P() {
            var i = this.editor, e = i.val(), t = 0, n = "";
            for (; t < 5;) {
                e = e.replace(/(\s*)<(\/)?([\w\-:]+)((?:\s+|(?:\s+[\w\-:]+)|(?:\s+[\w\-:]+=[^\s"'<>]+)|(?:\s+[\w\-:"]+="[^"]*")|(?:\s+[\w\-:"]+='[^']*'))*)(\/)?>(\s*)/g, function (i, e, t, n, o, l, r) {
                    return {strong: 1, em: 1, ul: 1, ol: 1}[n = a.trim(n).toLowerCase()] ? "" : "li" === n ? "<p>" : i
                }), n = d.html2md(e), e = i.getMdHtml(n), t++
            }
            i.text(n)
        }, link: function j() {
            this.selection.link("http://www.nowcoder.com")
        }, image: function I() {
            var e = this.editor;
            new s({
                title: "插入图片",
                content: ['<div class="form-group">', '<label class="control-label">图片链接</label>', '<div class="control-group"><input type="text"/></div>', '<div style="position:relative;display:inline-block;line-height:42px;font-size:14px;margin-left:15px;">', '<a style="display:block;" href="javascript:void(0);" class="link-green js-md-image-upload">上传图片</a>', "</div>", "</div>"].join(""),
                render: function () {
                    var i = this.getEl(), e = this.urlIpt = c.transform(i.find("div.control-group"));
                    u.show({
                        target: i.find(".js-md-image-upload"),
                        url: "/uploadImage?type=1",
                        type: f.uploadType.image,
                        fileType: "*.jpg;*.JPG;*.png;*.PNG;*.gif;*.GIF;*.bmp;*.BMP;*.jpeg;*.JPEG",
                        fileSize: 5,
                        call: function (i) {
                            e.val(i.url)
                        }
                    })
                },
                ok: function () {
                    var i = a.trim(this.urlIpt.val());
                    if (!i) return this.urlIpt.setErrorTips("请输入图片链接"), !0;
                    e.selection.image(i), e.fire("afterChange")
                },
                cancel: function () {
                }
            })
        }, math: function z() {
            var e = this, t = e.editor;
            p.formula({
                useLaTex: !1, call: function (i) {
                    e.selection.image(i), t.fire("afterChange")
                }
            })
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/mdEditor/util/history", ["nc", "cpn"], function (e, t, n) {
    var i = e("nc"), o = (e("cpn"), i.$, i.Clazz), c = i.Base, r = n.exports = o.create();
    c.extend(r.prototype, {
        initialize: function s(e) {
            var t = this, n = t.editor = e.editor;
            t.selection = n.selection, t.list = [], t.index = 0, t.canRecord = !0, n.listen("destroy", function () {
                t.list.length = 0, t.index = 0
            })
        }, record: function l(e) {
            var t = this, n = t.editor;
            if (!t.canRecord) return;
            var i = t.list, o = n.text();
            i.length = Math.min(t.index + 1, i.length);
            var c = i[t.index];
            if (!c || c.content !== o && (e || 3 < Math.abs(c.content.length - o.length))) {
                var r = t.selection.getSelection();
                i.push({content: o, selection: r}), t.index = i.length - 1
            }
        }, redo: function d() {
            var n = this, i = n.editor, e = n.list, o = n.index + 1;
            if (o >= e.length) return;
            n.disable(function () {
                var e = n.list[o];
                i.text(e.content || ""), n.index = o;
                var t = e.selection;
                t && n.selection.setSelection(t.start || 0, t.end || 0), n.selection.focus()
            })
        }, undo: function a() {
            var n = this, i = n.editor, o = n.index - 1;
            if (o < 0) return;
            n.disable(function () {
                var e = n.list[o];
                i.text(e.content || ""), n.index = o;
                var t = e.selection;
                t && n.selection.setSelection(t.start || 0, t.end || 0), n.selection.focus()
            })
        }, disable: function u(e) {
            var t = this, n = t.editor;
            t.canRecord = !1, e && e.call(n), t.canRecord = !0
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/mdEditor/util/selection", ["nc"], function (t, e, n) {
    var r = t("nc"), s = r.$, a = r.Clazz, m = r.Base, i = n.exports = a.create(), c = document.createElement("INPUT"),
        l = "createTextRange" in c || "selection" in document;
    c = null;
    var p = l ? "\r\n" : "\n", g = /^(?:\r|\n)/, f = /(?:\r|\n)$/, h = {
            strong: /^__([\s\S]+?)__(?!_)$|^\*\*([\s\S]+?)\*\*(?!\*)$/,
            strongPart: /__([\s\S]+?)__(?!_)|\*\*([\s\S]+?)\*\*(?!\*)/g,
            em: /^\b_((?:__|[\s\S])+?)_\b$|^\*((?:\*\*|[\s\S])+?)\*(?!\*)$/,
            emPart: /\b_((?:__|[\s\S])+?)_\b|\*((?:\*\*|[\s\S])+?)\*(?!\*)/g,
            del: /^~~(?=\S)([\s\S]*?\S)~~$/,
            delPart: /~~(?=\S)([\s\S]*?\S)~~/g,
            link: /^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)$/,
            linkPart: /\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/g,
            image: /^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)$/,
            imagePart: /!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/g,
            lineCode: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)$/,
            lineCodePart: /(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/g,
            heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)$/,
            list: /^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n+(?=\1?(?:[-*_] *){3,}(?:\n+|$))|\n+(?= *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$))|\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) )\n*|\s*$)/,
            quote: /^( *>[^\n]+(\n(?! *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$))[^\n]+)*\n*)+/,
            quotePart: /^ *> ?/gm,
            code: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/
        }, o = "粗体内容", u = "斜体内容", d = "删除内容", S = "链接说明", v = "图片说明", y = "请在这里输入代码", x = "请在这里输入标题", R = "无序列表内容",
        L = "有序列表内容", b = "请在这里输入引用内容";
    m.extend(i.prototype, {
        initialize: function P(t) {
            this.input = s(t.input)
        }, isIE: l, CANCEL: "cancel", ADD: "add", focus: function I(t) {
            var e = this, n = e.getSelection();
            !0 === t ? e.input.caret(n.start) : !1 === t ? e.input.caret(n.end) : e.input.range(n.start, n.end)
        }, getSelection: function M() {
            return this.input.range()
        }, setSelection: function $(t, e) {
            var n = this, r = arguments.length;
            1 === r ? n.input.caret(t) : 2 === r && (n.input.focus(), n.input.range(t, e))
        }, replaceSelection: function _(t, e) {
            var n = this;
            if (null === (t = n.filterText(t))) return;
            var r = n.getSelection().start;
            n.input.range(t), e ? n.setSelection(r, n.getSelection().end) : n.focus(!1)
        }, getContent: function k() {
            return this.input.val()
        }, insert: function C(t, e) {
            var n = this;
            if (!(t = n.filterText(t))) return;
            "before" === e ? n.input.caret(n.range().start) : "after" === e && n.input.caret(n.range().end);
            n.replaceSelection(t)
        }, enlarge: function D(g) {
            var t = g.content, e = g.reg, n = g.start, r = g.end, a = t.length, i = c(t, e, n, r, t.length);
            i.match || g.noCross || ((i = c(t, e, n, n, a)).match ? i.end = Math.max(r, i.end) : (i = c(t, e, r, r, a)).match && (i.start = Math.min(n, i.start)), i.crossMatch = i.match);
            return i;

            function c(t, e, n, r, a) {
                var i, c, l, s, o, u, p;
                for (i = n; 0 <= i; i--) {
                    for (c = r; c <= a; c++) if (l = t.substr(i, c - i), e.test(l)) {
                        if (s = i, o = c, u = !0, !g.greedMatch) break
                    } else if (u) {
                        p = !0;
                        break
                    }
                    if (u && !g.greedMatch || p) break
                }
                return {start: s, end: o, match: u}
            }
        }, enlargeBlock: function A(g) {
            var t = g.content, e = g.reg, n = g.start, r = g.end, a = t.length, i = c(t, e, n, r, t.length);
            i.match || g.noCross || ((i = c(t, e, n, n, a)).match ? i.end = Math.max(r, i.end) : (i = c(t, e, r, r, a)).match && (i.start = Math.min(n, i.start)), i.crossMatch = i.match);
            return i;

            function c(t, e, n, r, a) {
                var i, c, l, s, o, u, p;
                for (i = n; 0 <= i; i--) for (c = r; c <= a; c++) if (l = t.substr(i, c - i), p = e.exec(l)) {
                    if (i + p[0].length < g.start || i > g.end) break;
                    o = (s = i) + p[0].length, u = !0
                }
                if (u) {
                    for (; "\n" === t[s] || "\r" === t[s];) s++;
                    for (; "\n" === t[o - 1] || "\r" === t[o - 1];) o--
                }
                return {start: s, end: o, match: u}
            }
        }, enlargeLine: function B(t) {
            var e, n, r, a = t.content, i = t.start, c = t.end;
            for (; g.test(a.substr(i, c - i)) && i < c;) i += 1;
            for (e = i; 0 <= e; e--) {
                if (r = a.substr(e, c - e), g.test(r)) {
                    i = e + 1;
                    break
                }
                i = e
            }
            for (e = c, n = a.length; e <= n; e++) {
                if (r = a.substr(i, e - i), f.test(r)) {
                    c = e - 1;
                    break
                }
                c = e
            }
            return {start: Math.min(i, t.start), end: Math.max(c, t.end)}
        }, applyInline: function T(t) {
            var e, n, r, a, i, c = this, l = t.typeReg, s = (t.tips, t.content), o = t.selection,
                u = c.enlarge({content: s, reg: l, start: o.start, end: o.end, greedMatch: t.greedMatch});
            u.crossMatch && (u.match = !1, o.start = Math.min(u.start, o.start), o.end = Math.max(u.end, o.end), o.length = Math.max(0, o.end - o.start), o.text = s.substr(o.start, o.end - o.start));
            r = u.match ? (a = u.start, i = u.end, e = s.substr(a, i - a), l.exec(e), n = e.replace(t.partReg, t.replace), e = c.replace(s, a, i, n), c.CANCEL) : (a = o.start, i = o.end, e = 0 < o.length ? o.text.replace(t.partReg, t.replace) : m.isFunction(t.tips) ? t.tips(o) : t.tips || t.normal, n = t.parse(e), e = c.replace(s, a, i, n), c.ADD);
            return {content: e, text: n, start: a, end: a + n.length, length: n.length, type: r}
        }, applyInBlock: function q(t) {
            var e, n, r, a, i = t.content,
                c = this.enlargeBlock({content: i, reg: t.typeReg, start: t.start, end: t.end});
            n = c.match ? (e = c.start, c.end) : (e = t.start, t.end);
            var l = this.enlargeLine({content: i, start: e, end: n}), s = i.substr(e, n - e), o = s;
            g.test(s) || e === l.start || (o = p + p + s, r = !0);
            f.test(s) || n === l.end || (o += p + p, a = !0);
            var u = r || a;
            i = u ? this.replace(i, e, n, o) : i, r && (e += 2 * p.length, n += 2 * p.length);
            return {change: u, content: i, start: e, end: n, match: c.match && !c.crossMatch}
        }, eachLine: function E(t) {
            var e = this, n = e.getSelection().text.replace(/\r\n|\r/g, "\n"), i = t.filter, r = t.call;
            e.replaceSelection(n, !0);
            var a = e.getContent(), c = e.getSelection(), l = e.enlargeLine({content: a, start: c.start, end: c.end});
            t.fullLine && e.setSelection(l.start, l.end);
            c = e.getSelection();
            var s = a.substr(l.start, l.end - l.start).split("\n"), o = [], u = c.start - l.start,
                p = s[s.length - 1].length + c.end - l.end;
            if (i) var o = m.map(s, function (t, e) {
                var n = 0 === e ? Math.max(u, 0) : 0, r = e + 1 == s.length ? p : t.length, a = i(s, t, e, n, r);
                return a
            });
            var g = m.map(o, function (t) {
                return t.content
            }).join("\n");
            a = e.replace(a, l.start, l.end, g), e.input.val(a);
            for (var f = 0, h = o.length - 1; 0 <= h && !t.noIgnoreLine && 0 === o[h].end; h--) f++;
            var d = c.start - (u - o[0].start), S = o[o.length - 1],
                v = l.start + g.length - (S.content.length - S.end) - f;
            r && r(d, v, o)
        }, strong: function z() {
            var i = this;
            i.eachLine({
                filter: function (t, e, n, r, a) {
                    return "" === s.trim(e) && 1 < t.length ? i.createSelection(e, r, a) : i.applyInline({
                        content: e,
                        selection: i.createSelection(e, r, a),
                        tips: o,
                        typeReg: h.strong,
                        partReg: h.strongPart,
                        replace: function (t, e, n, r, a) {
                            return (n = e || n) === o ? "" : n
                        },
                        parse: function (t) {
                            return "**" + t + "**"
                        }
                    })
                }, call: function (t, e, n) {
                    var r = i.fixPos(t, t + 2, e, e - 2, n);
                    i.setSelection(r.start, r.end)
                }
            })
        }, em: function N() {
            var i = this;
            i.eachLine({
                filter: function (t, e, n, r, a) {
                    return "" === s.trim(e) && 1 < t.length ? i.createSelection(e, r, a) : i.applyInline({
                        content: e,
                        selection: i.createSelection(e, r, a),
                        tips: u,
                        typeReg: h.em,
                        partReg: h.emPart,
                        replace: function (t, e, n, r, a) {
                            return (n = e || n) === u ? "" : n
                        },
                        parse: function (t) {
                            return "*" + t + "*"
                        }
                    })
                }, call: function (t, e, n) {
                    var r = i.fixPos(t, t + 1, e, e - 1, n);
                    i.setSelection(r.start, r.end)
                }
            })
        }, del: function j() {
            var i = this;
            i.eachLine({
                filter: function (t, e, n, r, a) {
                    return "" === s.trim(e) && 1 < t.length ? i.createSelection(e, r, a) : i.applyInline({
                        content: e,
                        selection: i.createSelection(e, r, a),
                        tips: d,
                        typeReg: h.del,
                        partReg: h.delPart,
                        replace: function (t, e, n, r, a) {
                            return (n = e || n) === d ? "" : n
                        },
                        parse: function (t) {
                            return "~~" + t + "~~"
                        }
                    })
                }, call: function (t, e, n) {
                    var r = i.fixPos(t, t + 2, e, e - 2, n);
                    i.setSelection(r.start, r.end)
                }
            })
        }, link: function F(i) {
            var c = this;
            if ("" === (i = s.trim(c.filterText(i) || ""))) return;
            var l = "";
            c.eachLine({
                filter: function (t, e, n, r, a) {
                    return "" === s.trim(e) && 1 < t.length ? c.createSelection(e, r, a) : c.applyInline({
                        content: e,
                        selection: c.createSelection(e, r, a),
                        tips: S,
                        typeReg: h.link,
                        partReg: h.linkPart,
                        replace: function (t, e, n, r, a, i) {
                            return e === S ? "" : e
                        },
                        parse: function (t) {
                            return 0 === n && (l = t), "[" + t + "](" + i + ") "
                        }
                    })
                }, call: function (t, e, n) {
                    var r = n[0], a = r.type === c.ADD ? t + 1 : t;
                    c.setSelection(a, l ? a + l.length : e)
                }
            })
        }, image: function U(i) {
            var c = this;
            if ("" === (i = s.trim(c.filterText(i) || ""))) return;
            var l = "";
            c.eachLine({
                filter: function (t, e, n, r, a) {
                    return "" === s.trim(e) && 1 < t.length ? c.createSelection(e, r, a) : c.applyInline({
                        content: e,
                        selection: c.createSelection(e, r, a),
                        tips: v,
                        typeReg: h.image,
                        partReg: h.imagePart,
                        replace: function (t, e, n, r, a, i) {
                            return e === v ? "" : e
                        },
                        parse: function (t) {
                            return 0 === n && (l = t), "![" + t + "](" + i + ' "图片标题") '
                        }
                    })
                }, call: function (t, e, n) {
                    var r = n[0], a = r.type === c.ADD ? t + 2 : t;
                    c.setSelection(a, l ? a + l.length : e)
                }
            })
        }, lineCode: function w() {
            var i = this;
            i.eachLine({
                filter: function (t, e, n, r, a) {
                    return "" === s.trim(e) && 1 < t.length ? i.createSelection(e, r, a) : i.applyInline({
                        content: e,
                        selection: i.createSelection(e, r, a),
                        tips: y,
                        typeReg: h.lineCode,
                        partReg: h.lineCodePart,
                        replace: function (t, e, n, r, a) {
                            return n === y ? "" : n
                        },
                        parse: function (t) {
                            return "`" + t + "`"
                        }
                    })
                }, call: function (t, e, n) {
                    var r = i.fixPos(t, t + 1, e, e - 1, n);
                    i.setSelection(r.start, r.end)
                }
            })
        }, heading: function G() {
            var i, c = this, l = x;
            c.eachLine({
                fullLine: !0, noIgnoreLine: !0, filter: function (t, e, n, r, a) {
                    return 0 === n && (i = m.every(t, function (t) {
                        return "" === s.trim(t)
                    })), "" === s.trim(e) ? i && 0 === n ? {
                        content: "### " + l,
                        text: "### " + l,
                        start: r,
                        end: r + 4 + l.length,
                        length: 4 + l.length
                    } : c.createSelection(e, r, a) : c.applyInline({
                        content: e,
                        selection: c.createSelection(e, r, a),
                        tips: l,
                        typeReg: h.heading,
                        partReg: h.heading,
                        greedMatch: !0,
                        replace: function (t, e, n, r, a) {
                            return n === l || " " === n ? "" : n
                        },
                        parse: function (t) {
                            return "### " + t
                        }
                    })
                }, call: function (t, e, n) {
                    var r = n[0], a = r.type === c.ADD || i ? t + 4 : t;
                    c.setSelection(a, e)
                }
            })
        }, ul: function H() {
            var o, i = this, t = i.getSelection(), e = i.getContent(),
                n = i.applyInBlock({content: e, typeReg: h.list, start: t.start, end: t.end});
            n.match && (n.change && i.input.val(n.content), i.setSelection(n.start, n.end));
            i.eachLine({
                fullLine: !0, noIgnoreLine: !0, filter: function (t, e, n, r, a) {
                    return 0 === n && (o = m.every(t, function (t) {
                        return h.list.test(t)
                    })), i.applyInline({
                        content: e,
                        selection: i.createSelection(e, r, a),
                        tips: R,
                        typeReg: h.list,
                        partReg: h.list,
                        greedMatch: !0,
                        replace: function (t, e, n, r, a, i, c, l) {
                            return o ? s = /^ *(\d+\.) +/.test(t) ? "- " + ((s = t.replace(/^ *(\d+\.) +/, "")) === L ? R : s) : (s = t.replace(/^ *([*+-]) +/, "")) === R ? "" : s : "- " + t.replace(/^ *([*+-]) +/, "");
                            var s
                        },
                        parse: function (t) {
                            return "- " + t
                        }
                    })
                }, call: function (t, e, n) {
                    var r = i.fixPos(t, t + 2, e, e, n);
                    i.setSelection(r.start, r.end)
                }
            })
        }, ol: function J() {
            var u, a = this, t = a.getSelection(), e = a.getContent(),
                n = a.applyInBlock({content: e, typeReg: h.list, start: t.start, end: t.end});
            n.match && (n.change && a.input.val(n.content), a.setSelection(n.start, n.end));
            a.eachLine({
                fullLine: !0, noIgnoreLine: !0, filter: function (t, e, o, n, r) {
                    return 0 === o && (u = m.every(t, function (t) {
                        return h.list.test(t)
                    })), a.applyInline({
                        content: e,
                        selection: a.createSelection(e, n, r),
                        tips: L,
                        typeReg: h.list,
                        partReg: h.list,
                        greedMatch: !0,
                        replace: function (t, e, n, r, a, i, c, l) {
                            return u ? s = /^ *([*+-]) +/.test(t) ? (s = t.replace(/^ *([*+-]) +/, ""), o + 1 + ". " + (s === R ? L : s)) : (s = t.replace(/^ *(\d+\.) +/, "")) === R || s === L ? "" : s : (/^ *([*+-]) +/.test(t) ? t = t.replace(/^ *([*+-]) +/, "") : /^ *(\d+\.) +/.test(t) && (t = t.replace(/^ *(\d+\.) +/, "")), o + 1 + ". " + t);
                            var s
                        },
                        parse: function (t) {
                            return o + 1 + ". " + t
                        }
                    })
                }, call: function (t, e, n) {
                    var r = a.fixPos(t, t + 3, e, e, n);
                    a.setSelection(r.start, r.end)
                }
            })
        }, blockCode: function K() {
            var t, e, n = this, r = n.getSelection(), a = n.getContent(),
                i = n.applyInBlock({content: a, typeReg: h.code, start: r.start, end: r.end});
            if (i.match) {
                i.change && n.input.val(i.content), n.setSelection(i.start, i.end), r = n.getSelection();
                var c = h.code.exec(r.text), l = c[3];
                /^\n+|\n+$/g.test(l) && (l = l.replace(/^\n+|\n+$/g, "")), n.replaceSelection(l, !0)
            } else {
                var s = n.enlargeLine({content: a, start: r.start, end: r.end});
                n.setSelection(s.start, s.end), r = n.getSelection(), t = r.start + 4, e = "```\n" + (r.text || "") + "\n```", n.replaceSelection(e), n.setSelection(t, t + e.length - 8)
            }
        }, quote: function O() {
            var i = this;
            i.eachLine({
                fullLine: !0, noIgnoreLine: !0, filter: function (t, e, n, r, a) {
                    return i.applyInline({
                        content: e,
                        selection: i.createSelection(e, r, a),
                        tips: b,
                        typeReg: h.quote,
                        partReg: h.quotePart,
                        replace: function (t) {
                            return ""
                        },
                        parse: function (t) {
                            return "> " + t
                        }
                    })
                }, call: function (t, e, n) {
                    var r = i.fixPos(t, t + 2, e, e, n);
                    i.setSelection(r.start, r.end)
                }
            })
        }, filterText: function Q(t) {
            return t || "" === t ? t + "" : null
        }, fixPos: function V(t, e, n, r, a) {
            return t = a[0].type === this.ADD ? e : t, n = a[a.length - 1].type === this.ADD ? r : n, {start: t, end: n}
        }, createSelection: function W(t, e, n) {
            return {content: t, start: e, end: n, length: n - e, text: n === e ? "" : t.substr(e, n - e)}
        }, replace: function X(t, e, n, r) {
            var a = t.split("");
            return a.splice(e, n - e, r), r = a.join(""), a.length = 0, r
        }
    })
});
define("/nc/1.03.04/plugin/pc/component/editorSub/mdEditor/util/util", ["nc", "ncPlugin/md/markdown", "ncPlugin/md/to-markdown"], function (e, n, t) {
    var r = e("nc"), i = r.Base, a = r.$, l = r.Str, o = e("ncPlugin/md/markdown"), c = e("ncPlugin/md/to-markdown");
    t.exports = {
        html2md: function m(e) {
            var n = (e = a.trim(e)) ? c(e, {
                gfm: !0, converters: [{
                    filter: "pre", replacement: function (e) {
                        return ("```\n" + e + "\n```").replace(/\n+/gi, "\n")
                    }
                }, {
                    filter: "em", replacement: function (e) {
                        return "*" + e + "*"
                    }
                }, {
                    filter: "address|center|dir|div|dl|fieldset|form|isindex|iframe|menu|table|thead|tbody|tr".split("|"),
                    replacement: function (e) {
                        return e + "\n\n"
                    }
                }, {
                    filter: "td", replacement: function (e) {
                        return e + " "
                    }
                }]
            }) : "";
            return n = n.replace(/<.*?>/gi, "")
        }, md2html: function d(e) {
            if (!this._initMd && o.setOptions({
                gfm: !0,
                breaks: !0,
                tables: !0,
                sanitize: !0,
                langPrefix: "lang-"
            }), this._initMd = !0, a.trim(e)) {
                var n = o(e);
                return n
            }
            return e
        }, getToolbarHtml: function s(e) {
            var t = {
                preview: "预览",
                bold: "粗体",
                italic: "斜体",
                codeblock: "代码",
                bockquote: "引用",
                insertorderedlist: "编号",
                insertunorderedlist: "项目符号",
                link: "超级链接",
                image: "图片",
                table: "表格",
                math: "插入公式",
                removeformat: "清除全部格式"
            };
            return i.map(e, function (e, n) {
                return e = a.trim(e), l.execTpl("|" === e ? '<span class="ke-inline-block ke-separator"></span>' : '<span class="ke-outline" data-title="#{name}"><a href="javascript:void(0);" data-name="#{key}" class="ke-toolbar-icon ke-toolbar-icon-url ke-icon-#{key}"></a></span>', {
                    key: e,
                    name: t[e]
                })
            })
        }
    }
});