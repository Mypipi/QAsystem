!function (n, c) {
    var s = n.ncJsVersion || "", e = n.ncJsPluginVersion || "", i = {
        debug: !0,
        alias: {
            nc: "/nc/" + s + "/nc",
            cpn: "/cpn/" + s + "/cpn",
            ncStream: "/nc/" + s + "/plugin/stream/stream",
            ncOss: "/nc/" + s + "/plugin/oss/oss",
            ncpc: "/nc/" + s + "/plugin/pc/pc"
        },
        base: "//static.nowcoder.com/"
    }, a = 0 <= i.base.indexOf("javascripts");
    i.paths = {ncPlugin: "//static.nowcoder.com/nc/plugin/" + e + (a ? "/dev" : "/release")}, seajs.config(i)
}(window);
define("nowcoder/1.2.1261/javascripts/core/siteConfig", [], function (e, o, a) {
    a.exports = {
        questionType: {danxuan: 1, duoxuan: 2, tiankong: 3, biancheng: 4, wenda: 5, bigdata: 6},
        syncType: {ctsTest: 1, discuss: 2, interview: 3},
        type: {
            user: 1,
            comment: 2,
            problem: 3,
            topic: 4,
            feed: 5,
            paper: 6,
            recommendAnswer: 7,
            post: 8,
            message: 9,
            live: 11,
            note: 14,
            clockRecord: 15,
            ctsTest: 19,
            schoolCalendar: 28,
            stack: 41,
            learningMaterial: 42,
            stackCompany: 50,
            book: 52,
            bookOneWord: 55,
            offerData: 56,
            campus: 1201,
            community: 1301,
            liveCourse: 1501,
            liveChapter: 1502,
            liveSection: 1503,
            liveLive: 1504,
            vodCourse: 1401,
            vodChapter: 1402,
            vodSection: 1403,
            aiQuestion: 2301
        },
        draftType: {answer: 1, post: 2, answerPost: 3, note: 4},
        honorLevel: {red: 9, orange: 8, yellow: 7, green: 6, blue: 5, indigo: 4, purple: 3, pink: 2, gray: 1},
        uploadType: {none: 0, image: 1, doc: 2, data: 3, resume: 4, file: 5, screenShot: 7, learningMaterial: 11},
        loginType: {wb: 1, qq: 2, db: 3, rr: 4, git: 5, wx: 6},
        FEInput: {1: "html", 2: "css", 3: "javascript"},
        FELib: {1: {text: "jquery (2.1.4)", value: "jquery"}, 2: {text: "underscore (1.8.2)", value: "underscore"}},
        avatar: {small: "//static.nowcoder.com/images/head.png"},
        captcha: {
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
        activityType: {seattle: 1, xingtai: 2, taipei: 3, ali2015: 4, qihu2016: 5, calenderOj: 14, calenderBigData: 15},
        aodianyun: {
            account: "nowcoder_weekly",
            password: "sub_034da48a83095baef7f0196896b38629",
            topic: "weekly",
            liveAccount: "live_course",
            livePassword: "sub_71b59a68e7a86347ce77eece262de375"
        },
        doSomeThingType: {
            wantAnswer: 1,
            liveCourseSignUp: 2,
            liveAskAnswer: 3,
            loginRecord: 4,
            cheat: 5,
            spring2016InternJava: 6,
            spring2016InternC: 7
        },
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
        },
        userSource: ["牛客网", "微信", "微博", "老师、朋友推荐", "技术社区", "其他"]
    }
});
define("nowcoder/1.2.1261/javascripts/util/bll", ["nc", "cpn", "../action/common", "ncpc"], function (t, n, a) {
    var c = t("nc"), e = t("cpn"), o = c.Base, i = e.AttachSuggest, r = t("../action/common");
    a.exports = {
        bindSuggestCompany: function u(n) {
            var a = n.input;
            i.show({
                input: a.inputEl, attach: {extOffset: {left: -2}}, needSame: !0, reqList: function (t, a) {
                    if (!t) return a([]);
                    r.companySearchName({
                        query: {name: t}, call: function (t) {
                            var n = o.map(t.data, function (t) {
                                return {text: t.name, data: t}
                            });
                            a(n)
                        }, error: function () {
                            a([])
                        }
                    })
                }, ok: function (t) {
                    a.val(t.text), n.call && n.call(t.data)
                }
            }).getEl().css("min-width", a.getEl().outerWidth() + 2)
        }
    }
});
define("nowcoder/1.2.1261/javascripts/util/littleAction", ["nc", "cpn", "ncpc", "../action/contest", "../action/note", "../core/siteConfig"], function (a, t, n) {
    var o = a("nc"), e = a("cpn"), i = a("ncpc"), h = o.$, m = o.Limit, y = o.Base, C = o.Dom,
        w = (o.CodeLang, e.Popup), d = e.Tips, v = i.Env, l = i.Auth, k = i.PopupCollect, g = a("../action/contest"),
        s = a("../action/note");
    a("../core/siteConfig");
    n.exports = {
        publishJob: function r(t) {
            t = t || {}, l.click({
                cls: t.cls || ".js-publish-job", needLogin: !0, call: function (t, n) {
                    t.preventDefault();
                    var o = v.getUser(), e = y.id(o.authenticationUserType);
                    if ("0" !== e && "2" !== e) return a.async("../component/popupSub/popupHrGuideVerify", function (t) {
                        t.show({type: e})
                    });
                    var i = v.isInDev() ? "http://d.hr.nowcoder.com/login-more?autoLoginType=1" : "https://hr.nowcoder.com/login-more?autoLoginType=1";
                    if (0 < +o.relationHrId) return window.open(i);
                    a.async("../component/popupSub/popupHrCreate", function (t) {
                        t.show({
                            listeners: {
                                ok: function (t) {
                                    t.location.href = i, location.reload()
                                }
                            }
                        })
                    })
                }
            })
        }, follow: function S(l) {
            var a = l.followCls || "js-follow", s = l.unfollowCls || "js-unfollow",
                r = "followStr" in l ? l.followStr : "收藏", c = "followedStr" in l ? l.followedStr : "已收藏",
                u = y.id(l.followCount) ? +l.followCount : -1, d = l.followCb || function () {
                }, t = "." + a + ", ." + s, n = h(t);
            if (n.addClass("nc-req-auth"), !v.isLogin()) return;
            l.noHover || C.hover(h(t), function () {
                f(h(this), !0)
            }, function () {
                f(h(this))
            });
            return h(document).on("click", t, function (t) {
                l.stopPropagation && t.stopPropagation();
                var n = h(t.currentTarget);
                if (!m.mark(n)) {
                    var o = {id: l.entityId, type: l.entityType};
                    l.entityCb && (o = l.entityCb(t));
                    var e = n.hasClass(s);
                    e && (l.noPopup ? i() : k.show({
                        entityId: o.id,
                        entityType: o.type,
                        isEdit: !0,
                        ok: y.bind(p, null, !1, o),
                        cancel: i,
                        close: function () {
                            m.clear(n), d("", u)
                        }
                    })), !e && g.follow({
                        body: o, call: function () {
                            n.removeClass(a).addClass(s), 0 <= u && (u += 1), f(n), !l.noPopup && k.show({
                                entityId: o.id,
                                entityType: o.type,
                                isEdit: !1,
                                ok: y.bind(p, null, !0, o),
                                cancel: y.bind(d, null, "new", u),
                                close: y.bind(d, null, "new", u)
                            }), l.noPopup && d("new", u)
                        }, error: function (t) {
                            w.alert(t.msg)
                        }, always: function () {
                            m.pause(n)
                        }
                    })
                }

                function i() {
                    g.unfollow({
                        body: o, call: function () {
                            n.removeClass(s).addClass(a), 0 <= u && (u = Math.max(0, u - 1)), f(n), !l.noTips && w.tips("操作成功"), d("cancel", u)
                        }, error: function (t) {
                            w.alert(t.msg)
                        }, always: function () {
                            m.pause(n)
                        }
                    })
                }
            }), {
                update: function (t) {
                    u = y.id(t) ? +t : -1, f(n)
                }
            };

            function f(t, n) {
                var o = 0 <= u ? "(" + u + ")" : "", e = t.hasClass(s), i = (e ? c : r) + o;
                if (l.renderResult) {
                    var a = e && n;
                    a && t.text("编辑收藏"), !a && l.renderResult(t, e, u, e ? c : r)
                } else e && t.text(n ? "编辑收藏" : i), !e && t.text(i)
            }

            function p(t, n, o) {
                if (!t || 0 < o.length) return g[t ? "createFollowTags" : "editFollowTags"]({
                    body: y.extend(n, {tags: o.join(",")}),
                    call: function () {
                        w.tips("操作成功"), d(t ? "new" : "edit", u)
                    },
                    error: function (t) {
                        w.alert(t.msg)
                    }
                });
                w.tips("操作成功"), d("new", u)
            }
        }, correction: function c(n) {
            var t = h(n.el);
            if (!n.entityType || !n.entityId) return;
            t.on("click", function (t) {
                t.preventDefault(), a.async("../component/popupSub/popupCorrection", function (t) {
                    t.show({entryType: n.entityType, entryId: n.entityId})
                })
            })
        }, note: function u(o) {
            if (!o.entityType || !o.entityId) return;
            var t = y.map(o.editCls, function (t) {
                return "." + t
            }).join(","), n = y.map(o.foldCls, function (t) {
                return "." + t
            }).join(",");
            if (h(t).addClass("nc-req-auth"), !v.isLogin()) return;
            t && h(document).on("click", t, function () {
                a.async("../component/note/popupEdit", function (t) {
                    t.show({defaultTilte: o.defaultTilte, entityId: o.entityId, entityType: o.entityType, ok: o.ok})
                })
            }), n && h(document).on("click", n, function (t) {
                t.preventDefault();
                var n = h(o.container);
                n[n.hasClass("open") ? "removeClass" : "addClass"]("open")
            }), o.delCls && o.noteId && h("." + o.delCls).on("click", function (t) {
                w.confirm("删除了不可恢复，是否确认删除？", function () {
                    s.delNote({
                        params: {noteId: o.noteId}, call: function () {
                            w.tips("操作成功", function () {
                                o.del ? o.del() : window.location.reload()
                            })
                        }, error: function (t) {
                            w.alert(t.msg)
                        }
                    })
                })
            })
        }, clock: function f(i) {
            var n = h(i.el);
            if (n.addClass("nc-req-auth"), !v.isLogin()) return;
            var o = +n.attr("data-count") || 0;
            n.on("click", function (t) {
                a.async("../component/popupSub/popupClock", function (t) {
                    t.show({
                        ok: function (e) {
                            i.ok || (n.closest("div.sign-main").find("div.sign-info a").html(o + 1), n.replaceWith('<a href="/profile/' + window.globalInfo.ownerId + '/clockInfo" class="btn btn-default">已打卡</a>')), a.async("../component/popupSub/popupClockSucc", function (n) {
                                var o = null;
                                window.setTimeout(function () {
                                    o = w.mask("请稍等...")
                                }, 0), window.setTimeout(function () {
                                    o && o.hide();
                                    var t = n.show({data: e});
                                    i.ok && t.popup.listen("close", i.ok)
                                }, 2e3)
                            })
                        }
                    })
                })
            })
        }, shieldQuestion: function p(i) {
            var a = i.shieldCls || "js-shield", l = i.unShieldCls || "js-unshield",
                s = i.shieldStr || "" === i.shieldStr ? "屏蔽本题" : i.shieldStr,
                r = i.shieldedStr || "" === i.shieldedStr ? "取消屏蔽" : i.shieldedStr, c = "屏蔽该题，该题将不会出现在以后的组卷中。",
                u = "取消屏蔽后，该题可能会再次出现在以后的组卷中。", t = "." + a + ", ." + l, n = h(t);
            if (n.addClass("nc-req-auth"), !v.isLogin()) return;
            y.forEach(n, function (t) {
                h(t).attr("title", h(t).hasClass(a) ? c : u)
            }), n.addClass("js-nc-title-tips"), d.title(".js-nc-title-tips"), h(document).on("click", t, function (t) {
                var n = h(t.currentTarget), o = n.hasClass(a);

                function e() {
                    g.questionShield({
                        body: {qid: i.entityId, isShield: o}, call: function () {
                            n.removeClass(o ? a : l).addClass(o ? l : a), n.html(o ? r : s), n.attr("title", o ? u : c), w.tips("操作成功")
                        }, error: function (t) {
                            w.alert(t.msg)
                        }, always: function () {
                            m.pause(n)
                        }
                    })
                }

                o && w.confirm("确定屏蔽该题后，该试题将再也不会出现以后的组卷中。", e), !o && !m.mark(n) && e()
            })
        }, markQuestion: function b(e) {
            var i = e.markCls || "js-mark", a = e.unMarkCls || "js-unmark",
                l = e.markStr || "" === e.markStr ? "标记一下" : e.markStr,
                s = e.markedStr || "" === e.markedStr ? "已标记" : e.markedStr, t = "." + i + ", ." + a, r = "标记该题，着重查看。";
            C.hover(h(t), function () {
                o(h(this), !0)
            }, function () {
                o(h(this))
            });
            var n = h(t);
            if (n.addClass("nc-req-auth"), !v.isLogin()) return;

            function o(t, n) {
                var o = t.hasClass(a);
                o && t.text(n ? "取消标记" : s)
            }

            n.hasClass(i) && n.attr("title", r), n.addClass("js-nc-title-tips"), d.title(".js-nc-title-tips"), h(document).on("click", t, function (t) {
                var n = h(t.currentTarget), o = n.hasClass(i);
                m.mark(n) || g.questionMark({
                    body: {qid: e.entityId, tid: e.testId, isMark: o}, call: function () {
                        o && n.removeClass(i).addClass(a).removeAttr("data-title"), !o && n.removeClass(a).addClass(i).attr("data-title", r), n.html(o ? s : l), y.forEach(e.dtkEls, function (t) {
                            var n = (t = h(t)).attr("data-qid");
                            if (n === e.entityId) return t[o ? "addClass" : "removeClass"]("mark-spot"), y.BREAK
                        })
                    }, error: function (t) {
                        w.alert(t.msg)
                    }, always: function () {
                        m.pause(n)
                    }
                })
            })
        }
    }
});
define("nowcoder/1.2.1261/javascripts/util/log", [], function (i, o, n) {
    n.exports = {
        duration: 250, logs: [], log: function e(o) {
            var t = this, n = t.logs;
            if (!o && 0 === n.length) return;
            o && (o.frontUid = o.uid || (window.globalInfo || {}).ownerId, o.logKey = o.key, o.createdAt = o.createdAt || (new Date).getTime(), n.push(o), delete o.uid, delete o.key);
            window.clearTimeout(t.logsTimer), t.logsTimer = window.setTimeout(function () {
                var n = t.logs;
                if (0 !== n.length) {
                    var e = n.slice(0);
                    n.length = 0, i.async("../action/common", function (o) {
                        o.recordFrontLog({
                            body: {data: JSON.stringify(e)}, call: function () {
                                t.duration = 250
                            }, error: function () {
                                t.duration = 5e3, t.logs = e.concat(n)
                            }, always: function () {
                                t.log()
                            }
                        })
                    })
                }
            }, t.duration)
        }
    }
});
define("nowcoder/1.2.1261/javascripts/util/radar", ["nc", "cpn", "./util", "ncpc"], function (t, e, a) {
    var r = t("nc"), o = t("cpn"), i = r.$, n = r.Str, l = t("./util"), c = o.Select;
    r.Base;
    a.exports = {
        init: function d(t) {
            var e = this;
            if (!(e.config = t).jobs || !t.details) return void e.renderNone();
            if (e.clearData(), 0 === e.selectData.length) return void e.renderNone();
            e.loadEcharts(function () {
                t.loadSucc && t.loadSucc(), e.renderSelect()
            })
        }, clearData: function s() {
            for (var t, e = this, a = e.config, r = a.jobs, o = a.details, i = {}, n = {}, l = [], c = 0, d = r.length; c < d; c++) t = r[c], l.push({
                text: t.tagName,
                value: t.tagId,
                checked: 0 === c
            }), i[t.tagId] = {id: t.tagId, items: [], values: []};
            for (var c = 0, d = o.length; c < d; c++) (t = o[c]).bigTagId && i[t.bigTagId] && (i[t.bigTagId].items.push({
                text: t.tagName,
                max: t.totalScore || 1,
                min: -1 * (t.totalScore || 1)
            }), i[t.bigTagId].values.push(t.score), n[t.tagName] = {
                id: t.tagId,
                text: t.tagName,
                right: t.rightRation,
                complete: t.totalCnt,
                diff: t.avgDiff,
                totalScore: t.totalScore || 1,
                score: t.score,
                ratio: Math.round(t.rightRation),
                maximumScore: t.maximumScore
            });
            e.radarData = i, e.selectData = l, e.dialogData = n
        }, loadEcharts: function m(t) {
            return l.loadEcharts(t, "//static.nowcoder.com/lib/echarts-plain.js")
        }, renderNone: function g() {
            var t = this.config;
            t.parent && i(t.parent).replaceWith('<div class="module-body" style="text-align:center;"><img class="empty" src="//uploadfiles.nowcoder.com/images/20170720/56_1500536151274_9A754C5A4E59E12FFFC313334545F8A4"><div class="empty-tip"><a href="/profile/' + window.globalInfo.ownerId + '/basicinfo" class="link-green">完善职位信息</a>,生成技能图谱</div></div>')
        }, renderSelect: function u() {
            var r = this, a = r.config;
            r.jobSelect = new c({
                size: "small",
                renderTo: a.selectDv,
                options: r.selectData,
                listeners: {
                    render: function () {
                        this.fire("change")
                    }, change: function () {
                        var t = this.val();
                        r.radarData[t] && function e(t) {
                            r.renderRadar({
                                dv: a.radarDv,
                                data: r.radarData[t].items,
                                value: r.radarData[t].values,
                                formatter: function (t, e) {
                                    var a = r.dialogData[t];
                                    return n.execTpl(['<div style="width:150px;">', '<p style="margin-bottom:10px;">#{tagName}</p>', '<p style="margin-bottom:10px;">技能值: #{score} (共#{total})</p>', '<p style="margin-bottom:10px;">已完成题数: #{complete}</p>', '<p style="margin-bottom:10px;">正确率: #{right}</p>', '<p style="margin-bottom:10px;">平均难度: #{diff}</p>', '<p style="margin-bottom:10px;">全站最高技能值: #{maximumScore}</p>', "</div>"].join(""), {
                                        tagName: a.text,
                                        score: a.score,
                                        total: a.totalScore,
                                        complete: a.complete,
                                        right: (a.right || 0) + "%",
                                        diff: {1: "一星", 2: "二星", 3: "三星", 4: "四星", 5: "五星"}[a.diff] || "一星",
                                        maximumScore: a.maximumScore
                                    })
                                }
                            })
                        }(t)
                    }
                }
            })
        }, renderRadar: function p(n) {
            var t = i(n.dv).get(0);
            if (!t || !n.data || 0 === n.data.length) return;
            var e = {
                calculable: !1,
                tooltip: {
                    show: !!n.formatter,
                    trigger: "axis",
                    enterable: !0,
                    hideDelay: 250,
                    borderColor: "#e0e0e0",
                    borderWidth: 1,
                    borderRadius: 2,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    textStyle: {color: "#333"},
                    transitionDuration: .5,
                    padding: 15,
                    formatter: n.formatter ? function (t, e, a) {
                        var r = t[0], o = (r[0], r[1], r[2]), i = r[3];
                        return n.formatter ? n.formatter(i, o) : ""
                    } : "{value}"
                },
                polar: [{
                    indicator: n.data,
                    radius: "50%",
                    splitNumber: 5,
                    type: "circle",
                    name: {formatter: "{value}", textStyle: {color: "#333"}, interval: 0}
                }],
                series: [{
                    name: "技能雷达图",
                    type: "radar",
                    data: [{
                        value: n.value,
                        name: "技能值",
                        itemStyle: {
                            normal: {
                                areaStyle: {color: "rgba(73, 187, 154, 0.5)", type: "default"},
                                color: "#49b89a",
                                lineStyle: {width: 1}
                            }
                        }
                    }]
                }]
            };
            window.echarts.init(t).setOption(e), i(t).children().css("overflow", "visible")
        }
    }
});
define("nowcoder/1.2.1261/javascripts/util/task", ["nc", "../action/api", "ncpc", "../action/admin"], function (e, n, t) {
    var o = e("nc").Base, a = e("../action/api"), s = e("../action/admin");
    t.exports = o.extend({
        getTaskProgress: function i(n, t, o) {
            var s = this;
            s.getAccessCode(function (e) {
                return s.getProgress({id: t, loop: n, isAdmin: !0, query: {accessCode: e}, call: o})
            })
        }, getProgress: function d(s) {
            var i = this, e = s.id, r = s.loop, c = s.call, n = s.query, t = !!s.isAdmin;
            a[t ? "getTaskProgressAdmin" : "getTaskProgress"]({
                params: {id: e}, query: n, call: function (e) {
                    var n = e.data, t = !!n.end, o = !!n.error;
                    c && c(t, n.content, o, n.type), !t && r && window.setTimeout(function () {
                        i.getProgress(s)
                    }, 1e3)
                }, error: function () {
                    r && window.setTimeout(function () {
                        i.getProgress(s)
                    }, 1e3)
                }
            })
        }, getAccessCode: function r(n) {
            s.getAccessCode({
                query: {}, call: function (e) {
                    o.isFunction(n) && n(e.data)
                }, error: function (e) {
                    alert(e.msg)
                }
            })
        }
    })
});
define("nowcoder/1.2.1261/javascripts/util/txtCmd", ["nc"], function (n, t, r) {
    var e = n("nc"), i = e.Event, c = e.Str;
    r.exports = {
        parse: function u(n, e) {
            return n ? n.replace(/\[ncmd:\]([\w\W]*?)\[:ncmd\]/gi, function (n, t) {
                var r = c.trim(t).split("::");
                e && e.apply(null, r)
            }) : void 0
        }, resolve: function o(n) {
            var i = this;
            return n ? n.replace(/\[ncmd:\]([\w\W]*?)\[:ncmd\]/gi, function (n, t) {
                var r = (t = c.trim(t)).split("::"), e = r.shift();
                return e && i[e] ? i[e].apply(i, r) : ""
            }) : ""
        }, isCmd: function d(n) {
            return n && /\[ncmd:\]([\w\W]*?)\[:ncmd\]/gi.test(n)
        }, isTop: function f(n) {
            return n && /\[ncmd:\]top::([\w\W]*?)\[:ncmd\]/gi.test(n)
        }, isAuth: function m(n) {
            return n && /\[ncmd:\]auth\[:ncmd\]/gi.test(n)
        }, isRefresh: function s(n) {
            return n && /\[ncmd:\]refresh\[:ncmd\]/gi.test(n)
        }, isShield: function h(n) {
            return n && /\[ncmd:\]shield::([\w\W]*?)\[:ncmd\]/gi.test(n)
        }, img: function a(n) {
            return n ? '<a href="' + n + '" target="_blank"><img src="' + n + '" /></a>' : ""
        }, img2cmd: function l(n) {
            return n ? this.generCmd("img", n) : ""
        }, href: function g(n, t) {
            return n ? '<a href="' + n + '" target="_blank">' + (t || n) + "</a>" : ""
        }, href2cmd: function p(n, t) {
            return n ? this.generCmd("href", n, t) : ""
        }, auth: function w() {
            (window.globalInfo || {}).ownerId || i.fire("window:showAuthDialog");
            return ""
        }, auth2cmd: function v() {
            return this.generCmd("auth")
        }, refresh: function C() {
            window.location.reload()
        }, refresh2cmd: function W() {
            return this.generCmd("refresh")
        }, top: function b(n) {
            return n
        }, top2cmd: function j(n) {
            return n ? this.generCmd("top", n) : ""
        }, shield: function k(n) {
            return n
        }, shield2cmd: function x(n) {
            return n ? this.generCmd("shield", n) : ""
        }, generCmd: function y() {
            var n = [].slice.call(arguments, 0);
            return 0 !== n.length && n[0] ? "[ncmd:]" + n.join("::") + "[:ncmd]" : ""
        }
    }
});
define("nowcoder/1.2.1261/javascripts/util/upload", ["nc", "cpn", "../kit/swfupload", "./util", "ncpc", "../core/siteConfig"], function (e, l, i) {
    var a = e("nc"), o = e("cpn"), s = a.$, t = a.Cookie, r = a.Clazz, p = a.Sys, u = a.Base, n = a.Num;
    e("../kit/swfupload");
    var d = e("./util"), c = e("../core/siteConfig"), f = o.Popup, _ = r.create();
    i.exports = _, u.extend(_.prototype, {
        initialize: function m(e) {
            var l = this;
            e.fileSizeLimit = e.fileSizeLimit || 5, e.fileQueueLimit = e.fileQueueLimit || 1, (l.rawConfig = e).btn = e.btn || {};
            var i = u.clone(t.get());
            i.type = e.type || c.uploadType.resume, i.token = t.get("csrf_token"), i = u.extend({}, i, e.postParam);
            var a = {
                upload_url: e.url || "/uploadImage" + (i.type ? "?type=" + i.type : ""),
                flash_url: "/swf/swfupload.swf",
                flash9_url: "/swf/swfupload_fp9.swf",
                post_params: i,
                file_post_name: e.postName,
                file_size_limit: e.fileSizeLimit + "MB",
                file_types: e.fileType || "*.doc;*.docx;*.pdf;",
                file_types_description: "文件上传",
                file_queue_limit: e.fileQueueLimit,
                debug: !1,
                prevent_swf_caching: !1,
                button_image_url: e.btn.image || "//uploadfiles.nowcoder.com/images/20160520/56_1463728821615_B856A5CA00C64BEA1A77436F8FE39D5E",
                button_width: e.btn.width || "220",
                button_height: e.btn.height || "45",
                button_placeholder: s(e.holderEl).get(0),
                button_cursor: SWFUpload.CURSOR.HAND,
                button_window_mode: "transparent",
                swfupload_preload_handler: u.bind(l.callback, l, "preload"),
                swfupload_load_failed_handler: u.bind(l.loadFailed, l),
                file_queued_handler: u.bind(l.callback, l, "fileQueued"),
                file_queue_error_handler: u.bind(l.fileQueueError, l),
                file_dialog_start_handler: u.bind(l.callback, l, "fileDialogStart"),
                file_dialog_complete_handler: u.bind(l.fileDialogComplete, l),
                upload_start_handler: u.bind(l.uploadStart, l),
                upload_progress_handler: u.bind(l.uploadProgress, l),
                upload_error_handler: u.bind(l.uploadError, l),
                upload_success_handler: u.bind(l.uploadSuccess, l),
                upload_complete_handler: u.bind(l.callback, l, "uploadComplete"),
                queue_complete_handler: u.bind(l.callback, l, "queueComplete")
            };
            l.swfUpload = new SWFUpload(a)
        }, callback: function g(e) {
            var l = this.rawConfig, i = window.Array.prototype.slice.call(arguments, 1);
            if (l[e]) return l[e].apply(l.target || this, i)
        }, loadFailed: function h() {
            if (!1 === this.callback("loadFailed")) return;
            f.alert("flash 加载失败，请检查您的浏览器是否支持 flash")
        }, fileQueueError: function b(e, l, i) {
            var a = this.rawConfig,
                o = l === SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED ? "一次只能选择" + a.fileQueueLimit + "个文件" : l === SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT ? "上传的文件不能超过" + a.fileSizeLimit + "M" : l === SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE ? "不能上传空文件" : l === SWFUpload.QUEUE_ERROR.INVALID_FILETYPE ? "上传的文件格式不正确" : i || "抱歉，上传发生错误，请稍后";
            if (!1 === this.callback("fileQueueError", e, l, o)) return;
            f.alert(o)
        }, fileDialogComplete: function v(e, l) {
            if (!1 === this.callback("fileDialogComplete", e, l)) return;
            try {
                this.swfUpload.startUpload()
            } catch (i) {
            }
        }, uploadStart: function E(e) {
            return this.callback("uploadStart", e), !0
        }, uploadProgress: function w(e, l, i) {
            var a = this;
            if (p.out(l), !1 === a.callback("uploadProgress", e, l, i)) return;
            var o = (100 * l / (i || 1)).toFixed(2);
            a.popup ? (a.popup.getEl().find("#jsPopupProgressTips").html('<div class="upload-progress-bar"><span class="progress-txt">正在上传：' + o + '%</span><div class="progressing" style="width:' + o + '%;"></div></div>'), l === i && (a.saveTipsTimer = window.setTimeout(function () {
                a.saveTipsTimer = null, a.popup.getEl().find("#jsPopupProgressTips").html('<div class="upload-progress-bar"><span class="progress-txt">正在保存，请稍后</span><div class="progressing" style="width:100%;"></div></div>')
            }, 100))) : a.popup = new f({
                title: "",
                noUnique: !0,
                content: '<div id="jsPopupProgressTips" class="subject-upload-inner" style="margin:0"><div class="upload-progress-bar"><span class="progress-txt">正在上传：' + o + '%</span><div class="progressing" style="width:' + o + '%;"></div></div></div>',
                width: 540,
                hasNoTitle: !0,
                hasNoMove: !0,
                hasNoMargin: !0
            })
        }, uploadError: function T(e, l, i) {
            var a = this;
            a.saveTipsTimer && (window.clearTimeout(a.saveTipsTimer), a.saveTipsTimer = null);
            if (!1 === a.callback("uploadError", e, l, i)) return;
            i = i || "上传失败", a.popup ? (a.popup.getEl().find("#jsPopupProgressTips").html('<a href="javascript:void(0);" class="btn btn-block btn-default"><span class="upload-rusult-ico"><span class="fui-cross"></span></span>' + i + "</a>"), s(document).one("click", function () {
                a.popup.close(), a.popup = null
            })) : f.alert("上传失败，请重试")
        }, uploadSuccess: function S(e, l) {
            var i = this;
            i.saveTipsTimer && (window.clearTimeout(i.saveTipsTimer), i.saveTipsTimer = null);
            var a = u.json(l);
            if (0 !== a.code) return void i.uploadError(e, a.code, a.msg);
            var o = {
                tmpId: (new Date).getTime(),
                url: a.url,
                fileName: d.getFileName(a.url),
                fileSize: n.byte2Size(e.size)
            };
            i.popup && (i.popup.getEl().find("#jsPopupProgressTips").html('<a href="javascript:void(0);" class="btn btn-block btn-primary"><span class="upload-rusult-ico"><span class="fui-check"></span></span>上传完成</a>'), setTimeout(function () {
                i.popup.close(), i.popup = null
            }, 1500));
            i.callback("uploadSuccess", e, o)
        }
    })
});
define("nowcoder/1.2.1261/javascripts/util/util", ["nc", "ncpc"], function (e, t, n) {
    var r = e("nc"), o = e("ncpc"), a = r.$, d = r.Clazz, l = (r.Str, r.Sys), i = r.Base, c = (r.Time, r.Dom, r.Uri),
        p = (o.Env, o.Util);
    n.exports = {
        page: function s(i, c) {
            i = i || {}, c = c || {}, l.ready({
                initialize: function () {
                    var o = d.create();
                    e.async("../component/page", function (e) {
                        if (d.mix(o, e, i, c), o._template) {
                            var t = a(o.renderTo);
                            new o({renderTo: t.get(0) || a(document.body), renderBy: o.renderBy})
                        } else {
                            var n = new o({noRender: !0}), r = a(o.el).get(0) || document.body;
                            n.$el = a(r), n.el = a(n.$el).get(0), n.render()
                        }
                    })
                }
            })
        }, getNavHeight: i.bind(p.getNavHeight, p), getFileName: function u(e) {
            return (e = e || "").split("_").pop() || e
        }, loadEcharts: i.bind(p.loadEcharts, p), fixUrlProtocol: function m(e) {
            if (!(e = a.trim(e))) return e;
            var t = this._tmpA = this._tmpA || document.createElement("A");
            t.href = e;
            var n = t.hostname;
            if (n.indexOf("nowcoder.com") < 0 && n.indexOf("aliyuncs.com") < 0) return e;
            return e.replace(/^https?\:/, "")
        }, getPdfPreviewUrl: function f(e) {
            var t = 0 <= (e || "").split("?")[0].indexOf("qqstatic.nowcoder.com"),
                n = /^https:/.test(window.location.href),
                e = (e || "").replace(/^https:\/\//, "").replace(/^http:\/\//, "").replace("nowcoder.net", "nowcoder.com");
            return e = (n ? "https://" : "http://") + e, (n ? "https:" : "http:") + "//ow365.cn/?i=" + (t ? "17827" : "10072") + (n ? "&ssl=1" : "") + "&furl=" + window.encodeURIComponent(e)
        }, getUploadUrl: function h(e) {
            return c.addParam({type: e}, "/uploadImage")
        }
    }
});
define("nowcoder/1.2.1261/javascripts/action/acm-admin", ["ncpc"], function (e, t, s) {
    var a = e("ncpc").Ajax, n = s.exports = {
        url: {
            conversationList: "/acm/contest/admin/messages/conversations",
            markReplied: "/acm/contest/admin/messages/mark-replied",
            toAllMessage: "/acm/contest/admin/messages/to-all",
            messagesList: "/acm/contest/admin/messages",
            newMessages: "/acm/contest/admin/messages",
            updateDescription: "/admin/acm/update-description",
            getContest: "/acm/contest/admin/contest_info_with_problem",
            createContest: "/acm/contest/admin/create_contest",
            editContest: "/acm/contest/admin/edit_contest_info",
            editContestProblem: "/admin/acm/edit_contest_problem",
            hrIdList: "/acm/contest/admin/hr_id_list",
            hrProblemList: "/acm/contest/admin/hr_problem_list",
            problem: "/admin/acm/problem"
        }
    };
    a.add(s.exports, n.url)
});
define("nowcoder/1.2.1261/javascripts/action/activity", ["ncpc"], function (e, i, t) {
    var o = e("ncpc").Ajax;
    t.exports = {
        url: {
            getLovedTags: "/activity/getLovedTags",
            saveLovedTags: "/activity/saveLovedTags",
            share: "/share/bonus",
            getInviteFriends: "/activity/getInviteFriends",
            getLotteryWinRecords: "/activity/getLotteryWinRecords",
            getBonusRecords: "/activity/getBonusRecords",
            lottery: "/activity/lottery",
            reglotteryinfo: "/activity/reglotteryinfo",
            getRecommendComment: "/activity/recommendComment",
            taipeiSignUp: "/activity/internship2015/signup",
            forwardVillageSignUp: "/activity/189/signup",
            rewardBalanceDetail: "/activity/balance/detail",
            rewardCodeRankDetail: "/activity/coderank/detail",
            getLingziliaoPdf: "/activity/lingziliao/pdf",
            calendarSignUp: "/activity/calendar/signup",
            query2016Time: "/activity/2016time/query",
            recommand: "/recommand/activity",
            recommandStep1: "/recommand/step1",
            recommandSign: "/recommand/sign",
            recommandCancel: "/recommand/cancel",
            recommandV2Step1: "/recommand/v2/step1",
            unrecommandJobApply: "/recommand/unsign/job",
            getRecommandStep1Data: "/recommand/v2/step1-data",
            recommendInternJobApply: "/recommend-intern/sign/job",
            unrecommendInternJobApply: "/recommend-intern/unsign/job",
            updateRecommendInternResume: "/recommend-intern/update/resume",
            getRecommendInternJobList: "/recommend-intern/list",
            ojActivity: "/activity/list/ojtopic",
            mockInterviewSignUp: "/activity/2016interview/signup",
            queryMogujieUser: "/recommand/query/mogujie",
            signUpDirectOffer: "/activity/direct-offer/signup",
            getProjectCourseCoupon: "/activity/project-courses/coupon",
            signUpThoughtWorksPair: "/activity/thoughtworks-pair/signup",
            followCampus: "/activity/campus/follow",
            unfollowCampus: "/activity/campus/unfollow",
            collect2016: "/activity/collect2016/upload",
            collect2016lottery: "/activity/collect2016/lottery",
            getCollect2016Info: "/activity/collect2016/info",
            getPatCode: "/pat/code",
            mockexam2017sign: "/activity/MockExam2017/join",
            iqiyi2017sign: "/activity/iqiyi2017/signup",
            meituan2017sign: "/activity/2017codem/sign",
            meituan2017rankEnd: "/activity/2017codem/index/rank-end",
            meituan2017rankRealTime: "/activity/2017codem/real-time-rank-data",
            lexin2017sign: "/activity/lexin2017/signup",
            lexin2017solve: "/activity/lexin2017/bigdata/solve",
            lexin2017rankEnd: "/activity/lexin2017/index/rank-end",
            offerShowChoose: "/show-offer/choose",
            offerShowChooseResult: "/show-offer/choose-result",
            offerShowStatistic: "/show-offer/statistic",
            offerShowCompareSave: "/show-offer/compare-save",
            offerShowCompareResult: "/show-offer/compare-result",
            offerShowDelOffer: "/show-offer/del-offer",
            nowcoderGirlsRank: "/activity/nowcodergirls/ranks",
            nowcoderGirlsCheckDone: "/activity/nowcodergirls/check_done",
            oversea2018Join: "/activity/2018oversea/join",
            oversea2018CheckDone: "/activity/2018oversea/check_done",
            cmb2018rankEnd: "/activity/2018cmbchina/index/rank-end",
            cmb2018Solve: "/activity/2018cmbchina/bigdata/solve",
            cmb2018sign: "/activity/2018cmbchina/sign",
            cmb2018overseasign: "/activity/2018cmbchina/oversea_sign",
            cmb2018CodeSolve: "/activity/2018cmbchina/bigdata/code/solve",
            mockExamRank: "/mockexam/MockExam/ranks",
            mockExamSign: "/mockexam/MockExam/signup",
            zte2018Two: "/activity/zte2018/2/solve",
            zte2018Three: "/activity/zte2018/3/solve",
            zte2018Four: "/activity/zte2018/4/solve",
            zte2018Seven: "/activity/zte2018/7/solve",
            zte2018Eight: "/activity/zte2018/8/solve",
            gbits2018rankEnd: "/activity/2018g-bits/index/rank-end",
            gbits2018sign: "/activity/2018g-bits/sign",
            tw2018sign: "/activity/2018tw/sign",
            meituan2018sign: "/activity/2018codem/sign",
            meituan2018rankEnd: "/activity/2018codem/index/rank-end",
            recommandjob2019Projects: "/activity/2019recommand/projects",
            recommandjob2019Jobs: "/activity/2019recommand/jobs",
            recommandjob2019Users: "/activity/2019recommand/users",
            recommandjob2019Ranks: "/activity/2019recommand/ranks",
            recommandjob2019Ling: "/activity/2019recommand/ling",
            mockDoneInfo: "/mockexam/MockExam/done/info",
            warmspring2019Projects: "/activity/2019warmspring/projects",
            warmspring2019Jobs: "/activity/2019warmspring/jobs",
            sp2020Projects: "/activity/2020sp/projects",
            sp2020Complaint: "/activity/2020sp/complaint"
        }
    }, o.add(t.exports, t.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/addquestion", ["ncpc"], function (e, t, n) {
    var i = e("ncpc").Ajax;
    n.exports = {
        url: {
            sendAddQuestion: "/userquestion/v3/new",
            searchTip: "/tag/search",
            getTagByParentId: "/tag/parent",
            sendEditQuestion: "/userquestion/v3/edit",
            sendAdminEditQuestion: "/admin/edit/question",
            acceptQuestionByAdmin: "/audit/accept",
            rejectQuestionByAdmin: "/audit/reject",
            changeDesignQuestionByAdmin: "/audit/reEditDesignQ/transform",
            sendAddQuestionV4: "/userquestion/v4/new",
            auditQuestionV4: "/userquestion/v4/finish",
            correctQuestion: "/admin/corrections/#{correctionId}/status"
        }
    }, i.add(n.exports, n.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/admin", ["ncpc"], function (e, a, i) {
    var s = e("ncpc").Ajax;
    i.exports = {
        url: {
            showCtsConversations: "/admin/cts-message/#{paperId}/conversations",
            showMessageList: "/admin/cts-message/#{paperId}/#{conversationId}/messages",
            uploadImg: "/admin/advert/uploadImage",
            designCorrect: "/admin/contest/design/correct",
            markReplied: "/admin/cts-message/#{paperId}/mark-replied",
            getAccessCode: "/admin/hr/account/access_code",
            millionQuestionPushQuestion: "/admin/activity/millonQuestion/question/push",
            millionQuestionPushAnswer: "/admin/activity/millonQuestion/answer/push",
            millionQuestionPushFinal: "/admin/activity/millonQuestion/finalresult/push",
            millionQuestionEndContest: "/admin/activity/millonQuestion/contest/end",
            millionQuestionRestart: "/admin/activity/millonQuestion/restart",
            getAppCourseList: "/admin/app/courses/list",
            saveAppCourses: "/admin/app/courses/save",
            saveAppAndroidReleaseApk: "/admin/app/release/update-android-apk",
            editInformAgainst: "/admin/hr/inform-against/edit",
            markCommentSpam: "/admin/mark-comment-spam",
            markNoteSpam: "/admin/mark-note-spam",
            washNoteWhite: "/admin/spam-note-wash-white",
            markUserAllCommentSpam: "/admin/delete-all-ugc",
            markBookListSpam: "/admin/mark-book-list-spam",
            deleteAllUgc: "/admin/delete-all-ugc",
            whiteBookListSpam: "/admin/spam-book-list-wash-white",
            passReport: "/report/pass",
            rejectReport: "/report/reject",
            addCommunity: "/admin/company/community/add"
        }
    }, s.add(i.exports, i.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/api", ["ncpc"], function (e, t, i) {
    var r = e("ncpc").Ajax, s = "api.nowcoder.com";
    window.isTencentCloud && (s = "qqapi.nowcoder.com");
    var v = i.exports = {
        domain: s,
        url: {
            aiPutRoomData: "/v1/ai/interview/#{roomId}/room_data",
            aiGetQuestion: "/v1/ai/interview/question",
            aiAudio2Text: "/v1/ai/interview/speech-process",
            checkCodeAndGetUrl: "/v1/interviews/#{roomId}/urls/#{identity}",
            getQuestions: "/v1/questions",
            saveEvaluation: "/v1/interviews/#{id}/evaluations",
            getInterviewResult: "/v1/interviews/#{id}/evaluations",
            putRoomData: "/v1/interviews/#{roomId}/room_data",
            putSharedData: "/v1/interviews/#{roomId}/#{type}/shared_data",
            pingInterview: "/v1/interviews/#{id}/ping",
            pingV2Interview: "/v1/user/interviews-v2/#{id}/updateInterviewInfo",
            runCode: "/v2",
            runSelfCode: "/v1/judge/submit_self_test_withoutdata",
            getSelfCodeStatus: "/v1/judge/status",
            submitCode: "/v1/judge/submit_cd",
            submitCodeStatus: "/v1/judge/status",
            saveResumeUrl: "/v1/interviews/#{roomId}/resumeUrl",
            delResumeUrl: "/v1/interviews/#{roomId}/resumeUrl",
            saveTestResultUrl: "/v1/interviews/#{roomId}/testResultUrl",
            delTestResultUrl: "/v1/interviews/#{roomId}/testResultUrl",
            checkInInterview: "/v1/interviews/#{roomId}/check-in",
            checkSuccessInterview: "/v1/interviews/#{roomId}/check-status",
            remindInterviewer: "/v1/interviews/#{roomId}/remind-interviewer",
            prePingInterview: "/v1/user/interviews-v2/#{roomId}/pre-ping",
            preIntervieweePing: "/v1/user/interviews-v2/#{roomId}/interviewee-pre-ping",
            getQuestionTag: "/v1/user/tags",
            getQuestionDraft: "/v1/questions/draft",
            updateQuestionDraft: "/v1/questions/draft",
            testReport: "/v1/user/test-data/test_report",
            getTaskProgressAdmin: "/v1/job-progress/inner-#{id}",
            getTaskProgress: "/v1/job-progress/#{id}",
            createSelfInterview: "/v1/interview/self-service",
            getSelfInterviewNoticeStatus: "/v1/interview/self-service/notice-status",
            sendNoticeSelfInterview: "/v1/interview/self-service/send-notice",
            getInterviewers: "/v1/interview-projects/interviewers",
            getInterviewees: "/v1/interview-projects/interviewees",
            getJobs: "/v1/interview-projects/jobs",
            getIntervieweeResume: "/v1/interviews/#{roomId}/interviewee-resume",
            getIntervieweeTestResult: "/v1/interviews/#{roomId}/interviewee-test-result"
        }
    };
    r.add(i.exports, v.url, v.domain)
});
define("nowcoder/1.2.1261/javascripts/action/blog", ["ncpc"], function (o, n, t) {
    var s = o("ncpc").Ajax;
    t.exports = {
        url: {
            listBlogAnswers: "/blog/answer/list",
            getBlogContent: "/blog/content",
            spamBlog: "/blog/spam"
        }
    }, s.add(t.exports, t.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/books", ["ncpc"], function (n, o, r) {
    var a = n("ncpc").Ajax;
    r.exports = {url: {codingInterviewsRank: "/books/coding-interviews/#{uuid}/rank_data"}}, a.add(r.exports, r.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/campus", ["ncpc"], function (n, p, o) {
    var c = n("ncpc").Ajax;
    o.exports = {
        url: {
            campusSignUp: "/campus/signup",
            getSignUpInfo: "/campus/signupInfo",
            editSignUpInfo: "/campus/signupInfo/edit",
            getJobInfo: "/campus/jobInfo"
        }
    }, c.add(o.exports, o.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/careertalk", ["ncpc"], function (e, a, r) {
    var t = e("ncpc").Ajax;
    r.exports = {
        url: {
            filter: "/careertalk/filter",
            suggest: "/careertalk/suggest",
            subscribe: "/careertalk/subscribe",
            unsubscribe: "/careertalk/un-subscribe",
            getAllProvCandidate: "/careertalk/province-candidate",
            addTalk: "/careertalk/add",
            editTalk: "/careertalk/edit",
            delTalk: "/careertalk/del",
            getTalk: "/careertalk/#{id}"
        }
    }, t.add(r.exports, r.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/clock", ["ncpc"], function (o, c, e) {
    var n = o("ncpc").Ajax;
    e.exports = {
        url: {
            newClockRecord: "/clock/new",
            getTodayClockInfo: "/clock/todayInfo",
            getDayInfo: "/clock/dayInfo",
            getMonthInfo: "/clock/monthInfo",
            getShareImage: "/clock/share-image"
        }
    }, n.add(e.exports, e.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/code", ["ncpc"], function (t, s, e) {
    var a = t("ncpc").Ajax;
    e.exports = {
        url: {
            submitCode: "/submit_cd",
            runCode: "/submit",
            selfTestCode: "/submit_cd_selftest_withoutdata",
            status: "/status",
            selfTestStatus: "/status-self-test",
            bigDataRun: "/bigdata/submit",
            bigDataStatus: "/bigdata/status",
            submitDmInPaper: "/submit_dm_in_paper",
            submitDmInTerminal: "/submit_dm_in_terminal",
            newDmStatus: "/new_dmstatus",
            getOtherDoneInfo: "/test/question/otherdone",
            otherSubmission: "/profile/otherSub/#{baseSubmissionId}"
        }
    }, a.add(e.exports, e.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/coin", ["ncpc"], function (e, c, o) {
    var n = e("ncpc").Ajax;
    o.exports = {
        url: {
            getAddress: "/coin/default-address",
            getDetail: "/coin/products",
            buyVirtual: "/coin/buy-virtual",
            buyReal: "/coin/buy-real",
            getCompleteCoin: "/coin/get-complete-info-money",
            cancelOrder: "/coin/cancel-order"
        }
    }, n.add(o.exports, o.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/common", ["ncpc"], function (e, a, n) {
    var o = e("ncpc").Ajax;
    n.exports = {
        url: {
            uploadImage: "/uploadImage",
            uploadImageOnline: "/upload-image-online",
            faceDetect: "/face-detect",
            recordFrontLog: "/front-log/add",
            syncResult: "/sync/result",
            wyAppeal: "/wangyi/appeal",
            systemTime: "/common/system-time",
            companySearchName: "/company/search-name",
            getConfig: "/environment/config"
        }
    }, o.add(n.exports, n.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/community", ["ncpc"], function (m, e, t) {
    var o = m("ncpc").Ajax;
    t.exports = {
        url: {
            newCommunityComment: "/community/comment/create",
            editCommunityComment: "/community/comment/edit",
            delCommunityComment: "/community/comment/del",
            getColleague: "/community/colleague",
            getBriefExpPost: "/community/brief/exppost/#{id}"
        }
    }, o.add(t.exports, t.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/company", ["ncpc"], function (a, e, t) {
    var n = a("ncpc").Ajax;
    t.exports = {
        url: {
            companySignUp: "/company/signUp",
            companySearchName: "/company/search-name",
            authenticateUserStep1: "/user/authentication/step1",
            authenticateUserStep2: "/user/authentication/step2",
            authenticateUserValidate: "/user/authentication/validate"
        }
    }, n.add(t.exports, t.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/contest", ["ncpc"], function (e, t, n) {
    var s = e("ncpc").Ajax;
    n.exports = {
        url: {
            reserve: "/reserve/#{paperId}/do",
            unReserve: "/reserve/#{paperId}/undo",
            follow: "/sns/follow",
            unfollow: "/sns/unfollow",
            multiFollow: "/sns/multi_follow",
            multiUnfollow: "/sns/multi_unfollow",
            getFollowData: "/sns/followdata",
            createFollowTags: "/sns/followtags/create",
            editFollowTags: "/sns/followtags/edit",
            updateFollowTag: "/sns/followtags/update",
            like: "/sns/like",
            unlike: "/sns/del_like",
            comment: "/comment/create",
            delComment: "/comment/delete",
            getComment: "/comment/list",
            getUserComment: "/comment/self-comment",
            getCommentByPage: "/comment/listByPage",
            getCommentByPageV2: "/comment/list-by-page-v2",
            getCommentPageNum: "/comment/pageNum",
            getWonderfulCommentList: "/comment/woderful/list",
            newWonderfulComment: "/comment/wonderful",
            delWonderfulComment: "/comment/unwonderful",
            getAcceptedList: "/comment/accepted/list",
            acceptComment: "/comment/accept",
            newLitigantComment: "/comment/litigant",
            delLitigantComment: "/comment/un-litigant",
            getRefAnswer: "/comment/recommendComment?questionId=#{questionId}",
            getCaptcha: "/captcha/#{type}",
            correction: "/corrections/v2",
            setRefAnswer: "/audit/setReferAnswerFromCmt",
            unsetRefAnswer: "/audit/unsetReferAnswerFromCmt",
            setRightAnswer: "/audit/setRightAnswer",
            getLikeUsers: "/sns/likeUsers",
            testPing: "/test/updateInfo",
            testRestart: "/test/restart",
            testStop: "/test/stop",
            testContestPing: "/contest/updateInfo",
            saveAnswerDraft: "/answer/draft/save",
            getAnswerDraft: "/answer/draft/get",
            editAnswer: "/comment/editAnswer",
            getQuestionInfo: "/getQuestionInfo",
            wantAnswer: "/want-answer/want",
            cancelWantAnswer: "/want-answer/cancel",
            getQuestionQr: "/qr/question/#{uuid}",
            addLeave: "/contest/addLeave",
            getLatestSubmission: "/practice/latestSubmission",
            getLatestAcceptSubmission: "/practice/latestAcceptSubmission",
            sendCtsPhoneCode: "/cts/phone_code",
            validateCtsPhoneCode: "/cts/validate_phone_code",
            correctPerson: "/test/code/lanuage",
            questionShield: "/question/shield",
            questionMark: "/question/mark",
            blackUser: "/sns/black",
            unblackUser: "/sns/unblack"
        }
    }, s.add(n.exports, n.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/courses", ["ncpc"], function (e, s, t) {
    var o = e("ncpc").Ajax;
    t.exports = {
        url: {
            judgeQuestion: "/judge/question",
            codeDoneRight: "/courses/code_done_right",
            doneVideo: "/courses/video_done",
            getVideoCode: "/courses/get_video_code",
            checkStatus: "/payment/check_status",
            liveCourseDone: "/live/video_done",
            getSignInfo: "/courses/semester/signInfo",
            applyCourseRetest: "/study/#{courseType}/apply/retest",
            applyCourseFeedback: "/study/#{courseType}/#{courseId}/feedback",
            doneOther: "/study/other_done",
            assistantsTestDetail: "/study/assistants/test/detail",
            assistantsIgnoreComment: "/study/assistants/comment/ignore",
            listCoverClassMate: "/courses/cover/#{courseType}/#{courseId}/class-mate",
            buyInstituteCource: "/courses/institute/nccoin/buy"
        }
    }, o.add(t.exports, t.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/deliver", ["ncpc"], function (e, r, c) {
    var a = e("ncpc").Ajax;
    c.exports = {url: {checkReferralSource: "/careers/referral/check-source"}}, a.add(c.exports, c.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/discuss", ["ncpc"], function (s, i, d) {
    var t = s("ncpc").Ajax;
    d.exports = {
        url: {
            createPost: "/discuss/create",
            editPost: "/discuss/edit",
            deletePost: "/discuss/delete",
            saveDiscussDraft: "/discuss/draft/save",
            getDiscussDraft: "/discuss/draft/get",
            top: "/discuss/top",
            untop: "/discuss/untop",
            gild: "/discuss/gild",
            ungild: "/discuss/ungild",
            updateCertify: "/discuss/certify",
            sink: "/discuss/sink",
            unsink: "/discuss/unSink",
            hidden: "/discuss/hidden",
            unhidden: "/discuss/unhidden",
            unWarningPost: "/discuss/unWarningPost",
            hot: "/discuss/hot",
            unhot: "/discuss/unhot",
            getSimilarList: "/search/similar-post",
            getUserRecommend: "/discuss/users/recommend",
            invitedUser: "/discuss/users/invited",
            spam: "/admin/mark-post-spam",
            unspam: "/admin/spam-post-wash-white",
            allspam: "/admin/delete-all-ugc",
            getAllTag: "/discuss/tag/exp",
            predictPostAttr: "/discuss/predict"
        }
    }, t.add(d.exports, d.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/enterprise", ["ncpc"], function (e, r, p) {
    var t = e("ncpc").Ajax;
    p.exports = {
        url: {
            auditQuestion: "/profile/enterprise/score/update",
            addTpl: "/paper/#{userId}/template/new",
            removeTpl: "/paper/#{userId}/template/delete"
        }
    }, t.add(p.exports, p.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/feed", ["ncpc"], function (e, o, d) {
    var n = e("ncpc").Ajax;
    d.exports = {
        domain: "feed.nowcoder.com",
        domainDev: "d.feed.nowcoder.com",
        url: {
            createMoment: "/moment/create",
            deleteMoment: "/moment/delete",
            refresh: "/feed/refresh",
            getMore: "/feed/more",
            hasMore: "/feed/has-more",
            getLinkDetail: "/moment/outer-link",
            getTimeLine: "/feed/timeline",
            shieldFeed: "/feed/shield"
        }
    }, n.add(d.exports)
});
define("nowcoder/1.2.1261/javascripts/action/git", ["ncpc"], function (e, t, o) {
    var s = e("ncpc").Ajax;
    o.exports = {
        domain: "git.nowcoder.com",
        domainDev: "gitd.nowcoder.com",
        url: {
            ownedProject: "/projects/owned",
            getStarProject: "/projects/starred",
            createProject: "/projects/new",
            getProject: "/projects/info",
            updateProject: "/projects/update",
            deleteProject: "/projects/delete",
            getEmail: "/users/info",
            updateAccount: "/users/update",
            startProject: "/projects/square/new",
            myProjectInfo: "/projects/square/info",
            classmateProjectInfo: "/projects/square/classmates/info",
            listSSH: "/users/ssh/list",
            addSSH: "/users/ssh/add",
            deleteSSH: "/users/ssh/delete"
        }
    }, s.add(o.exports)
});
define("nowcoder/1.2.1261/javascripts/action/intern", ["ncpc"], function (o, e, r) {
    var n = o("ncpc").Ajax;
    r.exports = {
        url: {
            newHrAccount: "/job/new-account",
            internCenter: "/job/center",
            delJob: "/job/del",
            getJobs: "/job/list",
            hideJob: "/job/hide",
            revertHideJob: "/job/revert-hide",
            downJob: "/job/down",
            revertDownJob: "/job/revert-down",
            forbidHr: "/job/forbid"
        }
    }, n.add(r.exports, r.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/interview", ["ncpc"], function (e, i, n) {
    var t = e("ncpc").Ajax;
    n.exports = {
        url: {
            aiUpdateTime: "/interview/ai/#{roomId}/updateInterviewInfo",
            aiFinishInterview: "/interview/ai/finish",
            aiCreateInterview: "/interview/ai/create",
            aiSelfEvaluattion: "/interview/ai/self-evaluation",
            aiSaveAnswerText: "/interview/ai/answer-text",
            interviewCenterQuery: "/interview/center/query",
            interviewBookConfirm: "/interview/confirm",
            checkInterviewer: "/interview/scene/#{sceneId}/check",
            checkOutInterview: "/interview/scene/#{sceneId}/check-out",
            nextInterviewer: "/interview/scene/#{sceneId}/next",
            updateAlloc: "/interview/scene/#{sceneId}/update-alloc",
            unCheck: "/interview/scene/interviewee-uncheck",
            pingInterviewer: "/interview/scene/#{sceneId}/updateInfo-interviewer",
            sendAllocMpMsg: "/interview/scene/#{sceneId}/send-alloc-event",
            updateInterviewerTime: "/interview/scene/#{sceneId}/update-interviewer-time",
            getWaitList: "/interview/scene/#{sceneId}/#{interviewerId}/wait-list",
            pingAlloc: "/interview/scene/#{sceneId}/updateInfo-alloc",
            addCall: "/interview/scene/#{sceneId}/call",
            getWindowData: "/interview/scene-window/#{publicSceneId}/all",
            getCalling: "/interview/scene-window/#{publicSceneId}/calling",
            markCallVoiced: "/interview/scene-window/#{publicSceneId}/mark-voiced",
            gotoInterviewInScene: "/interview/scene/#{sceneId}/goto-interview",
            testData: "/test/video/interview/v2/testdata",
            feedback: "/interview/feedback",
            getRemarkParam: "/interview/scene/#{sceneId}/room-code",
            recoverSign: "/interview/scene/#{sceneId}/recover-check"
        }
    }, t.add(n.exports, n.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/library", ["ncpc"], function (o, r, i) {
    var l = o("ncpc").Ajax;
    i.exports = {
        url: {
            like: "/library/books/like",
            follow: "/library/book-list/follow",
            addDouBanBook: "/library/books/add",
            addBook: "/library/books/add-manual",
            getBook: "/library/books/search",
            addBookList: "/library/book-list/do-create",
            editBookList: "/library/book-list/do-edit",
            delBookList: "/library/book-list/delete",
            delBook: "/library/book-list/delete-book",
            getBookListType: "/library/book-list-type",
            getBookType: "/library/book-type",
            getRecentBookList: "/library/book-list/user-list-info",
            searchBookList: "/library/book-list/query",
            addToBookList: "/library/book-list/add-book",
            getCourse: "/library/tutorial",
            getBookInfo: "/library/books/book-info",
            commentRecommend: "/library/books/comment-recommend",
            oneWordInfo: "/library/books/one-word-info",
            oneWordComment: "/library/books/one-word-comment",
            getBookByTitle: "/library/reading-note/by-title",
            gild: "/library/book-list/gild",
            ungild: "/library/book-list/ungild"
        }
    }, l.add(i.exports, i.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/live", ["ncpc"], function (e, s, i) {
    var n = e("ncpc").Ajax;
    i.exports = {
        url: {
            sendLiveMessage: "/live/dms/send_message",
            askQuestion: "/live/weekly/ask_question",
            retrieveHistory: "/live/dms/history",
            signUpLiveCourse: "/live/courses/signup",
            signUpLiveCourseV2: "/live/courses/sign-up-v2",
            resolveQuestion: "/live/weekly/anchor/resolve_question",
            ping: "/live/weekly/updateInfo",
            getQuestions: "/live/weekly/anchor/questions",
            getOnlineData: "/live/weekly/anchor/online_data",
            getLivePublishKey: "/live/front/get_publish_key"
        }
    }, n.add(i.exports, i.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/login", ["ncpc"], function (e, t, a) {
    var o = e("ncpc").Ajax;
    a.exports = {
        url: {
            login: "/login/do",
            register: "/register/new",
            basicInfo: "/completeness/user-info",
            completeness: "/completeness/connect",
            saveCompleteness: "/completeness/save",
            checkEmail: "/register/check-email-available",
            changePwd: "/set-new-password",
            setNewPwd: "/set-new-pwd",
            bridge: "/bridge-to-mobile",
            logout: "/logout/do",
            checkPhone: "/register/check-phone-available",
            activeResetPhone: "active-reset-phone",
            activeResetEmail: "active-reset-email",
            checkNickName: "/register/check-nickname-available",
            checkLoginOtherPlace: "/token/login-other-place",
            getGtData: "/captcha/geetest/#{type}",
            getSMSSupportCountries: "/helper/sms/supported_countries",
            wechatMpLoginStatus: "/oauth2/login/wechat_mp_status",
            wechatMpQrCode: "/oauth2/login/wechat_qr_code",
            getOauthState: "/register/oauthState"
        }
    }, o.add(a.exports, a.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/message", ["ncpc"], function (s, e, n) {
    var a = s("ncpc").Ajax;
    n.exports = {
        url: {
            delMessage: "/sns/message/del-msg",
            delConversation: "/sns/message/del-conversation",
            sendMessage: "/sns/message/send-msg",
            queryUsers: "/sns/message/query-users",
            queryRecentlyUses: "/sns/message/recently-sent-users",
            queryUnreadCount: "/sns/message/count",
            atSuggest: "/at/suggest",
            setAllRead: "/sns/message/#{uid}/all-read",
            getConversationList: "/sns/message/#{uid}/get-conversation-list",
            getMsgList: "/sns/message/#{uid}/get-msg-list"
        }
    }, a.add(n.exports, n.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/note", ["ncpc"], function (e, t, o) {
    var n = e("ncpc").Ajax;
    o.exports = {
        url: {
            newNote: "/note/new",
            editNote: "/note/edit/#{noteId}",
            delNote: "/note/del/#{noteId}",
            saveDraft: "/note/draft/new",
            delDraft: "/note/draft/delete",
            getNoteData: "/note/data",
            newestNotes: "/note/newest",
            queryNotes: "/note/query"
        }
    }, n.add(o.exports, o.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/paper", ["ncpc"], function (e, t, n) {
    var p = e("ncpc").Ajax;
    n.exports = {
        url: {
            judge: "/test/judge",
            getAllQuestion: "/test/get-all-question",
            getCompanyPaperMenu: "/paper/get-company-paper-menu",
            finish: "/test/finish",
            subscribeNewPaper: "/mailing-list"
        }
    }, p.add(n.exports, n.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/pat", ["ncpc"], function (t, e, r) {
    var a = t("ncpc").Ajax;
    r.exports = {url: {getPATResult: "/pat/result"}}, a.add(r.exports, r.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/plan", ["ncpc"], function (n, r, e) {
    var t = n("ncpc").Ajax;
    e.exports = {
        url: {
            registerPlan: "/plan/register",
            unregisterPlan: "/plan/unregister",
            getPlanActivitys: "/plan/activity"
        }
    }, t.add(e.exports, e.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/profile", ["ncpc"], function (e, o, a) {
    var t = e("ncpc").Ajax;
    a.exports = {
        url: {
            updateProfileInfo: "/profile/update-user-profile",
            updateNickname: "/profile/#{uid}/nickname",
            updateWorkInfo: "/profile/#{uid}/work",
            updateEducationInfo: "/profile/#{uid}/school",
            updateAdditionType: "/profile/#{uid}/addition/type",
            updateAdditionJob: "/profile/#{uid}/addition/job",
            updateResumeInfo: "/profile/update-resume-info",
            getUserInfo: "/profile/#{uid}/info",
            saveAllEduaction: "/profile/saveAllEduaction",
            saveAllWork: "/profile/saveAllWork",
            saveAllAttachment: "/profile/saveAllAttachment",
            updateEmail: "/profile/update-email",
            updatePwd: "/profile/change-pwd",
            saveHead: "/saveHead",
            validatePhoneV2: "/register/validate-phone-v2",
            activePhone: "/register/active-phone",
            activePhoneOauth: "/register/active-phone-oauth",
            validateEmail: "/register/validate-email",
            activeEmail: "/register/active-email",
            changeTag: "/changeTag",
            getIntelligentTags: "/intelligentTags",
            getIntelligentNumInfo: "/intelligentNumInfo",
            beginSeries: "/question/series/begin",
            saveNotiSetting: "/profile/saveNotiSetting",
            saveResume: "/profile/add-attachment",
            getMyTests: "/profile/get-my-tests",
            searchSchool: "/school/query",
            getBriefSchool: "/school/brief",
            getAllSchool: "//static.nowcoder.com/nc/school.jsonp",
            saveHomeSetting: "/home/setting/save",
            updateHomeTag: "/home/tag/update",
            updateHomeModuleOrder: "/home/module/order",
            hiddenHomeBoard: "/home/board/hidden",
            searchSuggest: "/suggest",
            unBindToken: "/oauth2/unbind",
            saveReumeSetting: "/profile/save/resumesetting",
            getReumeList: "/resume/list",
            getCodingTags: "/activity/list/ojtag",
            getUserNameCard: "/profile/#{uid}/card",
            getUserCourses: "/profile/#{uid}/courses/info",
            getUserContact: "/profile/user/contact",
            getUserBadge: "/badge/detail",
            getUserBadgeImg: "/badge/img",
            getUserHonorHistory: "/profile/#{uid}/honorhistory",
            getSchoolCalendar: "/school/calendar/list",
            addSchoolCalendar: "/school/calendar/new",
            delSchoolCalendar: "/school/calendar/del",
            editSchoolCalendar: "/school/calendar/edit",
            attendSchoolCalendar: "/school/calendar/attend",
            mockexamSign: "/profile/mockexam/sign",
            walletWithdraw: "/profile/wallet/withdraw",
            openBlog: "/profile/blog/open"
        }
    }, t.add(a.exports, a.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/project", ["ncpc"], function (e, c, r) {
    var o = e("ncpc").Ajax;
    r.exports = {url: {userShuffle: "/project/classmate/shuffle"}}, o.add(r.exports, r.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/purchase", ["ncpc"], function (o, e, n) {
    var p = o("ncpc").Ajax;
    n.exports = {
        url: {
            getCoupon: "/order/coupon/#{couponId}",
            getGenerateCoupon: "/payment/coupon",
            queryWxPay: "/payment/wxpay/query"
        }
    }, p.add(n.exports, n.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/question", ["ncpc"], function (s, t, o) {
    var e = s("ncpc").Ajax;
    o.exports = {
        url: {
            getRightOptions: "/questions/right_option",
            getTaQuestionList: "/practice/question/list",
            suggestKaoyanQuestion: "/kaoyan/suggest",
            suggestFinalExamQuestion: "/finalexam/suggest",
            suggestSchoolBookQuestion: "/schoolbooks/suggest",
            adminDelQuestion: "/admin/edit/question/del"
        }
    }, e.add(o.exports, o.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/quickFill", ["ncpc"], function (i, l, a) {
    var c = i("ncpc").Ajax;
    a.exports = {
        url: {
            updateExt: "/quick-fill/ext/update",
            updateBase: "/quick-fill/basic/update",
            download: "/quick-fill/download",
            all: "/quick-fill/show-edit/info"
        }
    }, c.add(a.exports, a.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/report", ["ncpc"], function (r, o, t) {
    var c = r("ncpc").Ajax;
    t.exports = {url: {submit: "/report/add"}}, c.add(t.exports, t.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/resume", ["ncpc"], function (e, u, a) {
    var m = e("ncpc").Ajax;
    a.exports = {
        url: {
            updateResumeBasic: "/resume/basic/update",
            updateResumeExt: "/resume/ext/update",
            updateResumeHead: "/resume/head/update",
            updateResumeTemplate: "/resume/template/update",
            updateResumeName: "/resume/name/update",
            delResume: "/resume/del",
            newResume: "/resume/new",
            updateResumeDone: "/resume/done/update",
            authorizeDoExclusicePaper: "/resume/authorize",
            openRecommand: "/recommand/open",
            closeRecommand: "/recommand/cancel",
            defaultDeliver: "/recommand/default/deliver",
            getResumeJson: "/resume/json/#{resumeUuid}",
            checkIdCard: "/resume/check-id-card",
            parseResumeUrl: "/resume/parse-resume"
        }
    }, m.add(a.exports, a.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/scan", ["ncpc"], function (n, c, a) {
    var p = n("ncpc").Ajax;
    a.exports = {url: {pingAppScanned: "/scan/updateInfo"}}, p.add(a.exports, a.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/sendmail", ["ncpc"], function (n, t, a) {
    var e = n("ncpc").Ajax;
    a.exports = {
        url: {
            unsubscribeNotiEmail: "/settings/notiEmailSettingV2",
            exchangePdf: "/data/pdf"
        }
    }, e.add(a.exports, a.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/stack", ["ncpc"], function (a, t, s) {
    var c = a("ncpc").Ajax;
    s.exports = {
        url: {
            getSecondList: "/stack/second",
            markUsed: "/stack/#{id}/mark-used",
            markUnused: "/stack/#{id}/mark-unused",
            listCompany: "/stack/#{id}/list-company",
            listMaterial: "/stack/#{id}/list-material",
            listFellow: "/stack/#{id}/list-fellow",
            uploadMaterial: "/stack/#{id}/upload",
            deleteSelfMaterial: "/stack/#{id}/delete",
            addFixInfo: "/stack/#{id}/fix",
            companyValidationInfo: "/stack/#{id}/validate-company",
            validateCompany: "/stack/#{id}/validate-company",
            importStack: "/stack/import",
            addCompany: "/stack/#{id}/add-company",
            getCompanies: "/stack/get-companies",
            listStackCompany: "/stack-company",
            listStacks: "/list-stacks",
            addCompanyStacks: "/stack/company/#{companyId}/add-stack",
            getSecondDir: "/stack/second"
        }
    }, c.add(s.exports, s.exports.url)
});
define("nowcoder/1.2.1261/javascripts/action/studypath", ["ncpc"], function (t, o, e) {
    var r = t("ncpc").Ajax;
    e.exports = {
        url: {
            showMore: "/studypath/#{id}/show-more",
            doneProject: "/studypath/#{id}/done-proj",
            obtainCertificate: "/studypath/#{id}/obtain-cert",
            h5Cert: "/studypath/h5-cert"
        }
    }, r.add(e.exports, e.exports.url)
});
define("nowcoder/1.2.1261/javascripts/component/page", ["nc", "ncpc"], function (n, e, i) {
    var t = n("nc"), r = n("ncpc"), o = t.$, c = t.Component, s = t.Clazz, u = t.Base, f = t.Time, a = r.Env,
        d = i.exports = s.create();
    s.mix(d, c, {_template: ""}, {
        initialize: function p(n) {
            var e = this;
            if (e.user = u.clone(window.globalInfo), !e.isSupport()) return e.renderUpdateBrowser(), void(n.noRender = !0)
        }, initWinResize: function m() {
            var e = this;
            if (!e.__initResize) {
                e.__initResize = !0;
                var i = o(window), n = f.frequency(50);
                i.on("resize", function () {
                    n(function () {
                        try {
                            e.fire("winResize", i, i.width(), i.height())
                        } catch (n) {
                        }
                    })
                })
            }
        }, getUser: function w() {
            return this.user || {}
        }, isLogin: function l() {
            return a.isLogin()
        }, isAdmin: function h() {
            return a.isAdmin()
        }, isInfoComplete: function z() {
            return a.isCompleteInfo()
        }, renderUpdateBrowser: function v() {
            n.async("../component/browserUpdate", function (n) {
                new n({renderTo: o(document.body), renderBy: "html"})
            })
        }, isSupport: function g() {
            return !0
        }
    })
});
define("nowcoder/1.2.1261/javascripts/component/popupSub/popupCommon", ["nc", "cpn"], function (o, n, p) {
    var t = o("nc"), e = o("cpn"), u = t.$;
    t.Base, e.Popup;
    p.exports = {
        tagTest: function c(p) {
            p = p || {}, o.async("./popupStar", function (n) {
                o.async("./popupTagFree", function (o) {
                    o.show({
                        type: p.type, call: function (o) {
                            var c = o.ids, a = (o.leftCount, o.paperType);
                            n.show({
                                tagIds: c, call: function (o, n, p) {
                                    var t = window.encodeURIComponent(c.join(",")),
                                        e = u('<form method="post" action="/makePaper?paperType=' + a + "&source=" + p + "&tagIds=" + t + "&difficulty=" + o + (n ? "&questionCount=" + n : "") + '"></form>');
                                    u(document.body).append(e), e.submit()
                                }
                            })
                        }
                    })
                })
            })
        }
    }
});
define("nowcoder/1.2.1261/javascripts/component/subComment", ["nc", "cpn", "../util/util", "ncpc", "../core/siteConfig", "../action/contest"], function (t, e, a) {
    var i = t("nc"), r = t("cpn"), s = i.$, n = i.Clazz, l = i.Component, o = i.Str, c = i.Base, d = i.Time, m = i.Num,
        p = i.Dom, u = r.Popup, g = r.Pager, f = i.Limit, h = t("../util/util"), y = t("../core/siteConfig"),
        v = t("../action/contest"), C = a.exports = n.create(), I = y.type.comment;
    n.mix(C, l, {
        _template: ['<div class="reply-box">', '<div class="reply-loading-tips js-loading" style="text-align:center;">评论加载中...</div>', '<div class="reply-container js-container" style="display:none;">', '<ul class="reply-list js-list" style="display:none;"></ul>', '<div class="js-pager"></div>', '<div class="reply-editbox clearfix cmt-reply-to-main" style="margin-top:10px;">', '<div class="reply-write">', '<textarea placeholder="请输入你的观点" class="reply-input reply-input-textarea nc-req-auth js-main-ipt"></textarea>', "</div>", '<a class="btn btn-primary reply-btn js-main-reply" href="javascript:void(0);">回复</a>', "</div>", "</div>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, e = t.rawConfig, a = t.getEl();
                t.loadEl = a.find("div.js-loading"), t.containerEl = a.find("div.js-container"), t.listEl = a.find("ul.js-list"), t.mainIpt = a.find("textarea.js-main-ipt"), t.pagerEl = a.find("div.js-pager"), t.lastCommentId = null, e.inputWidth && t.mainIpt.width(e.inputWidth), p.txtAutoHeight({el: t.mainIpt}), t.mainIpt.focus(function () {
                    t.mainIpt.parent().addClass("reply-focus")
                }).blur(function () {
                    t.mainIpt.parent().removeClass("reply-focus")
                }), t.renderPageCmt(0)
            }
        }, {
            name: "click a.js-main-reply", type: "bind", handler: function (t) {
                var e = this, a = e.rawConfig, i = s.trim(e.mainIpt.val());
                i ? e.createCmt({
                    ipt: e.mainIpt,
                    entityId: a.comment.id,
                    content: i,
                    toUserId: a.comment.authorId,
                    toUserName: a.comment.authorName,
                    toCommentId: a.comment.id
                }) : e.mainIpt.focus()
            }
        }, {
            name: "click .js-reply-answer", handler: function (t) {
                var e = this.rawConfig, a = s(t.currentTarget), i = a.closest("li.ui-subcmt-item"),
                    r = i.attr("data-id"), n = this.cmtMap[r];
                if (i.get(0) && r && !a.attr("data-animate")) {
                    a.attr("data-animate", 1);
                    var l = i.find("div.reply-editbox");
                    if (!l.get(0)) {
                        l = s(['<div class="reply-editbox clearfix" style="display:none;">', '<div class="toparrow"></div>', '<div class="reply-write"><textarea placeholder="', n ? "回复" + n.authorName : "请输入你的观点", '" class="reply-input reply-input-textarea js-item-ipt nc-req-auth"></textarea></div>', '<a class="btn btn-primary reply-btn js-item-reply" href="javascript:void(0);">回复</a>', "</div>"].join("")), i.append(l);
                        var o = l.find("textarea.js-item-ipt");
                        e.inputWidth && o.width(e.inputWidth), o.focus(c.bind(l.addClass, l, "reply-focus")).blur(c.bind(l.removeClass, l, "reply-focus")), p.txtAutoHeight({el: o})
                    }
                    "1" === i.attr("data-show") ? l.slideUp(200, function () {
                        i.removeAttr("data-show"), a.removeAttr("data-animate")
                    }) : l.slideDown(200, function () {
                        i.attr("data-show", "1"), a.removeAttr("data-animate")
                    })
                }
            }
        }, {
            name: "click a.js-item-reply", handler: function (t) {
                var e = this, a = e.rawConfig, i = s(t.currentTarget).closest("li.ui-subcmt-item"),
                    r = i.attr("data-id"), n = e.cmtMap[r];
                if (i.get(0) && r && n) {
                    var l = i.find("textarea.js-item-ipt"), o = s.trim(l.val());
                    o ? e.createCmt({
                        ipt: l,
                        entityId: a.comment.id,
                        content: o,
                        toUserId: n.authorId,
                        toUserName: n.authorName,
                        toCommentId: n.id,
                        call: function () {
                            i.find("div.reply-editbox").slideUp(), i.removeAttr("data-show")
                        }
                    }) : l.focus()
                }
            }
        }, {
            name: "click ul.reply-list a.reply-like", handler: function (t) {
                this.rawConfig;
                var e = s(t.currentTarget), a = e.closest("li.ui-subcmt-item"), i = a.attr("data-id"),
                    r = this.cmtMap[i];
                if (a.get(0) && i && r && !f.mark(e)) {
                    var n = r.isLiked;
                    v[n ? "unlike" : "like"]({
                        body: {id: i, type: I}, call: function (t) {
                            r.isLiked = !n, r.likes = t.count, e.html((n ? "赞" : "已赞") + "(" + r.likes + ")")
                        }, error: function (t) {
                            u.alert(t.msg)
                        }, always: function () {
                            f.pause(e)
                        }
                    })
                }
            }
        }, {
            name: "click ul.reply-list a.reply-del", handler: function (t) {
                var i = this, e = (i.rawConfig, s(t.currentTarget)), r = e.closest("li.ui-subcmt-item"),
                    a = r.attr("data-id"), n = i.cmtMap[a];
                r.get(0) && a && n && !f.mark(e) && u.confirm("确定删除评论？", function () {
                    v.delComment({
                        body: {id: a}, call: function (t) {
                            u.tips("操作成功"), r.remove(), i.totalCnt--;
                            var e = i.currentPage, a = m.page(i.totalCnt, i.pageSize);
                            e = a < e ? Math.max(a, 1) : e, i.renderPageCmt(e, e !== i.currentPage), i.fire("delCmt", i.totalCnt)
                        }, error: function (t) {
                            u.alert(t.msg)
                        }, always: function () {
                            f.clear(e)
                        }
                    })
                }, function () {
                    f.clear(e)
                })
            }
        }]
    }, {
        initialize: function w(t) {
            this.currentUser = c.clone(window.globalInfo), this.pageSize = 10, this.cmtMap = {}, this.submitTmpCache = {}
        }, renderPageCmt: function b(i, r) {
            var n = this, l = n.rawConfig;
            n.currentPage = i, n.getPageCmt({
                page: i, call: function (t) {
                    var e = t.comments;
                    n.totalPage = t.totalPage, n.totalCnt = t.totalCnt;
                    var a = "";
                    c.forEach(e, function (t) {
                        a += n.getCmtStr(t)
                    }), n.listEl.html(a)[a ? "show" : "hide"](), n.pagerEl[1 < n.totalPage ? "show" : "hide"](), new g({
                        renderTo: n.pagerEl,
                        renderBy: "html",
                        current: i,
                        total: n.totalPage,
                        pageChange: function (t) {
                            n.renderPageCmt(t, !0)
                        }
                    }), r && p.scrollToEl({
                        el: n.getEl(),
                        ext: -1 * (h.getNavHeight() + 10)
                    }), n._inited || (n._inited = !0, n.loadEl.hide(), l.animation && n.containerEl.slideDown(200), !l.animation && n.containerEl.show())
                }
            })
        }, createCmt: function j(e) {
            var a = this, t = a.rawConfig,
                i = ["submit", t.entityType || I || "", e.entityId || "", e.toUserId || "", e.toCommentId || ""].join("_");
            if (a.submitTmpCache[i]) return;
            a.submitTmpCache[i] = !0, v.comment({
                body: {
                    entityType: t.entityType || I,
                    entityId: e.entityId,
                    commentContent: e.content,
                    toUserId: e.toUserId,
                    toCommentId: e.toCommentId
                }, call: function (t) {
                    e.ipt.val("").focus(), a.totalCnt++, a.totalPage = m.page(a.totalCnt, a.pageSize), a.renderPageCmt(a.totalPage, a.totalPage !== a.currentPage), a.fire("addCmt", a.totalCnt), e.call && e.call()
                }, error: function (t) {
                    u.alert(t.msg)
                }, always: function () {
                    delete a.submitTmpCache[i]
                }
            })
        }, getCmtStr: function x(t) {
            var e = this.rawConfig;
            this.cmtMap[t.id] = t;
            var a = ['<li class="ui-subcmt-item" data-id="#{id}">', '<div class="reply-main clearfix">', '<div class="reply-person" style="margin-right:5px;"><a href="/profile/#{authorId}" data-card-uid="#{authorId}" class="js-nc-card level-color-#{honorLevel}">#{authorName}</a>#{authorExt}</div>', '<div class="reply-content">#{content}</div>', "</div>", '<div class="answer-legend reply-info">', '<span class="reply-time">#{createTime}</span>', '<a href="javascript:void(0);" class="reply-answer js-reply-answer">回复</a>', '<a href="javascript:void(0);" class="reply-like">#{likeName}(#{likes})</a>', e.comment.authorId == this.currentUser.ownerId || t.authorId == this.currentUser.ownerId || e.isAdmin ? '<a href="javascript:void(0);" class="reply-del">删除</a>' : "", "</div>", "</li>"].join(""),
                i = t.toUserId && t.toCommentId !== e.comment.id ? o.execTpl('回复 <a href="/profile/#{uid}" data-card-uid="#{uid}" class="js-nc-card #{cls}">#{userName}</a>：', {
                    uid: t.toUserId,
                    userName: t.toUserName,
                    cls: "toUserHonorLevel" in t ? "level-color-" + t.toUserHonorLevel : ""
                }) : "", r = new Date(t.createTime), n = new Date,
                l = r.getFullYear() === n.getFullYear() && r.getMonth() === n.getMonth() && r.getDate() === n.getDate();
            return o.execTpl(a, {
                id: t.id,
                avatar: t.headImg || y.avatar.small,
                authorName: t.authorName,
                authorExt: i ? "" : "：",
                authorId: t.authorId,
                honorLevel: t.honorLevel,
                content: i + (t.content || "").replace(/\r?\n+$/, "").replace(/\r?\n+/g, "<br />"),
                createTime: l ? "今天 " + d.form(r, "HH:mm:ss") : d.form(r, "yyyy-MM-dd HH:mm:ss"),
                likeName: t.isLiked ? "已赞" : "赞",
                likes: t.likes || 0
            })
        }, getPageCmt: function k(e) {
            var t = this.rawConfig;
            v.getCommentByPageV2({
                query: {
                    pageSize: this.pageSize,
                    page: +e.page || 1,
                    order: 1,
                    entityId: t.comment.id,
                    entityType: t.entityType || I
                }, call: function (t) {
                    e.call && e.call(t.data || {})
                }, error: function (t) {
                    u.alert(t.msg), e.error && e.error()
                }
            })
        }
    })
});
define("nowcoder/1.2.1261/javascripts/component/browserUpdate", ["nc"], function (e, r, t) {
    var s = e("nc"), i = s.$, o = s.Component, n = s.Browser, l = s.Clazz, a = s.Str, c = s.Base,
        p = t.exports = l.create();
    l.mix(p, o, {
        _template: ['<div class="#{boxCls}" style="padding:85px 0 85px 0;text-align:center">', '<h2 class="js-title"></h2>', '<p style="margin:30px 0;color:#747474;font-size:14px;" class="js-desc"></p>', '<ul class="js-browser">', '<li style="display:inline-block;">', '<img style="width:64px;height:64px;" src="//uploadfiles.nowcoder.com/images/20160303/56_1456989507104_CD25B09FE067A549953AA39965170C89">', '<p style="color: #888;margin:10px 0 20px;font-size:14px;">chrome浏览器</p>', '<a href="https://www.nowcoder.com/discuss/3793" target="_blank" class="btn btn-primary">下载</a>', "</li>", '<li style="display:inline-block;margin-left:60px;">', '<img style="width:64px;height:64px;" src="//uploadfiles.nowcoder.com/images/20160303/56_1456989516332_5882D3A23B5C8B55A0041088E05288D4">', '<p style="color: #888;margin:10px 0 20px;font-size:14px;">firefox浏览器</p>', '<a href="https://www.nowcoder.com/discuss/3793" target="_blank" class="btn btn-primary">下载</a>', "</li>", "</ul>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this;
                e.initDefault();
                var r = e.rawConfig;
                e.val(r)
            }
        }]
    }, {
        initDefault: function d() {
            var e = this.rawConfig, r = this.getBrowserInfo();
            e.title = (i.trim(e.title) || "非常抱歉，你正在使用的浏览器版本暂不支持本页面") + (r ? '<br /><span style="color:#ff5400;">当前浏览器内核: ' + r + "</span>" : ""), e.desc = i.trim(e.desc) || '建议你使用以下浏览器的最新版本打开本页面，或者返回<a href="/" class="link-green">牛客网</a>', e.browsers && 0 !== e.browsers.length || (e.browsers = [{
                logo: "//uploadfiles.nowcoder.com/images/20160303/56_1456989507104_CD25B09FE067A549953AA39965170C89",
                name: "Chrome浏览器",
                url: "http://www.nowcoder.com/discuss/3793"
            }, {
                logo: "//uploadfiles.nowcoder.com/images/20160303/56_1456989516332_5882D3A23B5C8B55A0041088E05288D4",
                name: "firefox浏览器",
                url: "http://www.nowcoder.com/discuss/3793"
            }])
        }, val: function m(e) {
            var r = this;
            r.renderTitle(e.title), r.renderDesc(e.desc), r.renderBrowser(e.browsers)
        }, renderTitle: function f(e) {
            this.getEl().find("h2.js-title").html(i.trim(e))
        }, renderDesc: function w(e) {
            this.getEl().find("p.js-desc").html(i.trim(e))
        }, renderBrowser: function g(e) {
            var r = this.getEl(), t = "";
            c.forEach(e, function (e, r) {
                t += a.execTpl(['<li style="display:inline-block;margin-left:', 0 < r ? 60 : 0, 'px;">', '<img style="width:64px;height:64px;" src="#{logo}">', '<p style="color: #888;margin:10px 0 20px;font-size:14px;">#{name}</p>', '<a href="#{url}" target="_blank" class="btn btn-primary">下载</a>', "</li>"].join(""), e)
            }), r.find("ul.js-browser").html(t)
        }, getBrowserInfo: function h() {
            var e = n.getBrowser(), r = (e.appName || "") + " " + (e.version || "");
            return i.trim(r)
        }, _getData: function x(e) {
            return {boxCls: e.needBoxCls ? "module-box" : ""}
        }
    })
});
define("nowcoder/1.2.1261/javascripts/site/common/cpn/action", ["nc", "cpn", "ncpc", "../../../action/resume", "../../../action/login", "../../../action/admin"], function (c, t, n) {
    var a = c("nc"), e = c("cpn"), o = c("ncpc"), d = a.$, s = a.Base, p = (a.Browser, a.Uri), l = e.Popup, i = o.Env,
        r = c("../../../action/resume"), m = c("../../../action/login"), u = c("../../../action/admin");

    function f(t) {
        this.newResume(t)
    }

    function b(t) {
        this.newResume(t, !0)
    }

    function w(t) {
        t.preventDefault();
        var n = d(t.currentTarget), a = n.closest("form"), e = "";
        if (0 === a.length) e = n.attr("data-id"); else {
            var o = a.attr("action");
            e = p.getParam("tagIds", o)
        }
        var i = (e || "").split(",");
        if (0 !== (i = s.filter(i, function (t) {
            return d.trim(t)
        })).length) {
            var r = +n.attr("data-papertype") || 0;
            c.async("../../../component/popupSub/popupStar", function (t) {
                t.show({
                    tagIds: i, call: function (t, n, a) {
                        var e = window.encodeURIComponent(i.join(",")),
                            o = d('<form method="post" action="/makePaper?source=' + a + "&tagIds=" + e + "&difficulty=" + t + (n ? "&questionCount=" + n : "") + "&paperType=" + r + '"></form>');
                        d(document.body).append(o), o.submit()
                    }
                })
            })
        }
    }

    function g(t) {
        m.bridge({
            query: {pcUrl: window.location.href}, call: function (t) {
                window.location.href = t.data.url
            }, error: function (t) {
            }
        })
    }

    function v(t) {
        i.isLogin() && c.async("../../../component/coin/popupRecharge", function (t) {
            t.show({})
        })
    }

    function h(t) {
        var n = d(t.currentTarget), c = d.trim(n.attr("data-id")), s = d.trim(n.attr("data-uid")),
            a = d.trim(n.attr("data-status"));
        if (c) {
            var e = "3" === a, o = "4" === a;
            new l({
                title: "提示",
                content: ['<div style="text-align:center;">', !e && !o ? "" : '<a href="javascript:void(0);" class="btn btn-info btn-lg js-close-popup" data-type="cancel" style="margin-bottom:20px;">恢复为正常状态</a>', o ? "" : '<a href="javascript:void(0);" class="btn btn-primary btn-lg js-close-popup" data-type="hide" style="margin-bottom:20px;">隐藏这篇笔记</a>', e ? "" : '<a href="javascript:void(0);" class="btn btn-primary btn-lg js-close-popup" data-type="spamOne" style="margin-bottom:20px;">这篇笔记是垃圾</a>', '<a href="javascript:void(0);" class="btn btn-warn btn-lg js-close-popup" data-type="spamAll">TA的笔记都是垃圾</a>', "</div>"].join("")
            }).getEl().on("click", "a.btn-lg", function (t) {
                var n = d(t.currentTarget), a = d.trim(n.attr("data-type")),
                    e = (d.trim(n.attr("data-status")), "cancel" === a), o = "hide" === a, i = "spamOne" === a,
                    r = e ? "确定将这篇笔记恢复为正常状态吗？" : o ? "确定隐藏这篇笔记吗？" : i ? "确定将这篇笔记标记为垃圾吗？" : "确定将这个用户的所有笔记标记为垃圾吗？";
                l.confirm(r, function () {
                    u[e ? "washNoteWhite" : o || i ? "markNoteSpam" : "markUserAllCommentSpam"]({
                        body: e ? {pid: c} : o || i ? {
                            pid: c,
                            hide: o
                        } : {uid: s, type: 4}, call: function () {
                            window.location.reload()
                        }, error: function (t) {
                            l.alert(t.msg)
                        }
                    })
                })
            })
        }
    }

    n.exports = {
        init: function j() {
            var t = this;
            t.bind("click", ".nc-js-new-resume", f), t.bind("click", ".nc-js-new-attachment-resume", b), t.bind("click", ".nc-js-make-paper", w), t.bind("click", ".js-mobile-btn", g), t.bind("click", ".js-recharge-coin", v), t.bind("click", ".js-spam-note", h)
        }, newResume: function y(t, n) {
            t.preventDefault();
            var a = d(t.currentTarget), e = "true" === p.getParam("fromIntern") ? 0 : +a.attr("data-jobid") || 0;
            r.newResume({
                body: s.extend({jobId: e}, n ? {attachment: 1} : null), call: function (t) {
                    var n = p.getParam("rcb");
                    n = n ? window.decodeURIComponent(n) : window.location.href;
                    var a = "/resume/" + t.data.id + "?rcb=" + window.encodeURIComponent(n);
                    0 < e && (a = a + "&jobId=" + t.data.jobId), window.location.href = a
                }, error: function (t) {
                    if (2 !== t.code) l.alert(t.msg); else {
                        var n = l.confirm(t.msg, function () {
                            window.location.href = "/profile/" + (window.globalInfo.ownerId || "") + "/resume"
                        });
                        n.getEl().find("a.confirm-btn").html("去修改")
                    }
                }
            })
        }, bind: function I(t, n, a) {
            var e = this, o = d(document);
            a && o.on(t, n, function (t) {
                a && a.call(e, t)
            })
        }
    }
});
define("nowcoder/1.2.1261/javascripts/site/common/cpn/fixedBottom", ["nc"], function (o, t, e) {
    var n = o("nc"), a = n.$, d = (n.Dom, n.Time);
    e.exports = {
        init: function l() {
            var o = !!(window.globalInfo || {}).ownerId, s = a("div.js-fixed-foot");
            if (o || 0 === s.length) return;
            var t = (window.location.href || "").split("?")[0];
            if (!(/\/questionTerminal\/.*/.test(t) || /\/contestRoom/.test(t) || /\/courses\/\d+/.test(t) || /\/courses/.test(t) || /\/discuss\/\d+/.test(t))) return;
            var i = s.height() + 1, r = a(window), c = a(".js-nowcoder-footer");
            if (!c.hasClass("ft-wrap")) return;
            var e = d.frequency(15), f = 0;

            function n() {
                e(function () {
                    if (0 === f) {
                        var o = r.height(), t = c.position().top, e = r.scrollTop(), n = e + o - i;
                        f = t < n ? n - t : 0, s.css("bottom", f)
                    } else {
                        var o = r.height(), t = c.position().top, e = r.scrollTop(), n = e + o - i;
                        f = t < n ? n - t : 0, s.css("bottom", f)
                    }
                })
            }

            r.on("scroll", n), n(), window.setTimeout(n, 1200), r.on("resize", n), s.fadeIn(250)
        }
    }
});
define("nowcoder/1.2.1261/javascripts/site/common/cpn/slideBanner", ["nc"], function (n, i, o) {
    var e = n("nc"), v = e.$, w = e.Dom, T = e.Base;
    o.exports = {
        init: function g() {
            var n = v("#jsSideTopicList"), i = n.find("div.topic-slide-box"), t = i.find("ul.side-topic-list"),
                o = n.find("a.js-topic-mho-pre").attr("title", "下一页"),
                e = n.find("a.js-topic-mho-next").attr("title", "上一页"), c = t.children(), r = c.length, a = 3;
            if (r <= a) return o.hide(), e.hide(), void i.css("height", "auto");
            c = v(t.get(0).cloneNode(!0)).children();
            var d, f = 0, s = !1, u = 7500;

            function p(n) {
                window.clearTimeout(d), d = window.setTimeout(function () {
                    window.clearTimeout(d), l(!!n), d = window.setTimeout(arguments.callee, u)
                }, u)
            }

            function l(i) {
                if (!s) {
                    s = !0, h(f);
                    var n = f + (i ? 1 : -1), o = m(n), e = t.children()[0];
                    T[i ? "forEach" : "forReverse"](o, function (n) {
                        t[i ? "append" : "prepend"](n)
                    }), !i && t.css("marginTop", -1 * w.getPosTop(e, t)), t.animate({marginTop: i ? -1 * w.getPosTop(o[0], t) : 0}, function () {
                        f = n, s = !1
                    })
                }
            }

            function h(n) {
                t.html("").css("marginTop", 0);
                var i = m(n);
                T.forEach(i, function (n) {
                    t.append(n)
                })
            }

            function m(n) {
                var o = [], e = a * n;
                return T.forCount(a, function (n) {
                    var i = (e + n) % r;
                    i = 0 <= i ? i : i + r, o.push(c[i].cloneNode(!0))
                }), o
            }

            h(0), p(!0), T.forEach([o, e], function (n) {
                n.on("click", function () {
                    window.clearTimeout(d), l(n === o), p(n === o)
                })
            })
        }
    }
});
define("nowcoder/1.2.1261/javascripts/site/common/index", ["nc", "cpn", "ncpc", "./cpn/fixedBottom", "./cpn/slideBanner", "./cpn/action", "../../action/resume", "../../action/login", "../../action/admin"], function (i, n, t) {
    var e = i("nc"), o = (i("cpn"), i("ncpc")), c = (e.$, e.Sys), a = (e.Base, o.Env), s = o.Launch,
        d = i("./cpn/fixedBottom"), p = i("./cpn/slideBanner"), r = i("./cpn/action");
    s.initOAuth(), s.initInIframe(), s.initDocWrite(), c.ready({
        initialize: function f() {
            window.isLogin = a.isLogin(), window.isActive = a.isActive(), window.isCompleteInfo = a.isCompleteInfo(), s.initNavActiveEmail(), s.initNavLogin(), s.initNavSearch(), s.initAction(), s.initRightNav(), s.initLiveTips(), s.initContentShowHalf(), p.init(), r.init(), window.setTimeout(function () {
                s.initCheckLogin(), s.initCheckMessage(), s.initTips(), s.initCopy(), s.initHijack(), s.initProfileCard(), s.initCopyRight({
                    need: function (i) {
                        return /\/questionTerminal\/.*/.test(i) || /\/discuss\/\d+/.test(i)
                    }
                }), d.init()
            }, 500)
        }
    })
});