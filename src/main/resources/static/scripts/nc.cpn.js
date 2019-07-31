define("/nc/1.03.04/nc", ["./lib/jquery", "./lib/clipboard", "./base/base", "./base/browser", "./base/str", "./base/clazz", "./base/cookie", "./base/data", "./base/db", "./base/event", "./base/nav", "./base/node", "./base/num", "./base/tick", "./base/time", "./base/uri", "./base/ws", "./extend/ajax", "./extend/component", "./extend/limit", "./extend/mathJax", "./extend/dom", "./extend/sys", "./extend/dragdrop", "./extend/fullscreen", "./extend/html", "./extend/shortcut", "./extend/sound", "./extend/keyboard", "./extend/upload", "./extend/share", "./extend/route", "./bll/codeLang", "./bll/codeSubmit", "./lib/caret"], function (e, a, n) {
    var t = e("./lib/jquery"), d = e("./lib/clipboard"), r = e("./base/base"), o = e("./base/browser"),
        s = e("./base/clazz"), b = e("./base/cookie"), i = e("./base/data"), x = e("./base/db"), l = e("./base/event"),
        u = e("./base/nav"), c = e("./base/node"), m = e("./base/num"), w = e("./base/str"), p = e("./base/tick"),
        h = e("./base/time"), f = e("./base/uri"), S = e("./base/ws"), g = e("./extend/ajax"),
        v = e("./extend/component"), k = e("./extend/limit"), y = e("./extend/mathJax"), C = e("./extend/dom"),
        D = e("./extend/sys"), z = e("./extend/dragdrop"), j = e("./extend/fullscreen"), L = e("./extend/html"),
        B = e("./extend/shortcut"), J = e("./extend/sound"), N = e("./extend/keyboard"), V = e("./extend/upload"),
        q = e("./extend/share"), E = e("./extend/route"), T = e("./bll/codeLang"), U = e("./bll/codeSubmit");
    if (e("./lib/caret"), v.mixinVue(), o.safari()) {
        var A = window.Date, F = function (e, a, n, t, d, o, s) {
            var b = arguments.length;
            return r.isString(e) && (e = e.replace(/-/g, "/")), 0 === b ? new A : 1 === b ? new A(e) : 2 === b ? new A(e, a) : 3 === b ? new A(e, a, n) : 4 === b ? new A(e, a, n, t) : 5 === b ? new A(e, a, n, t, d) : 6 === b ? new A(e, a, n, t, d, o) : new A(e, a, n, t, d, o, s)
        };
        r.forEach(["now"], function (e) {
            F[e] = function () {
                return A[e]()
            }
        }), window.Date = F
    }
    n.exports = {
        $: t,
        Vue: window.Vue,
        Clipboard: d,
        Base: r,
        Browser: o,
        Clazz: s,
        Cookie: b,
        Data: i,
        Db: x,
        Event: l,
        Nav: u,
        Node: c,
        Num: m,
        Str: w,
        Tick: p,
        Time: h,
        Uri: f,
        Ws: S,
        Ajax: g,
        Component: v,
        Limit: k,
        MathJax: y,
        Dom: C,
        Sys: D,
        DragDrop: z,
        FullScreen: j,
        Html: L,
        ShortCut: B,
        Sound: J,
        KeyBoard: N,
        Upload: V,
        Share: q,
        Route: E,
        CodeLang: T,
        CodeSubmit: U
    }
});
define("/nc/1.03.04/bll/codeLang", ["../lib/jquery", "../base/base"], function (t, e, a) {
    var r = t("../lib/jquery"), d = t("../base/base"), p = [{
        id: "1",
        name: "C(clang 3.9)",
        template: "cTemplate",
        cm: {plugin: "clike", name: "text/x-csrc"}
    }, {
        id: "2",
        name: "C++11(clang++ 3.9)",
        template: "cppTemplate",
        tplId: "cTpl",
        cm: {plugin: "clike", name: "text/x-c++hdr"}
    }, {
        id: "22",
        name: "C++14(g++5.4)",
        template: "cpp14Template",
        tplId: "cpp14Tpl",
        cm: {plugin: "clike", name: "text/x-c++hdr"}
    }, {
        id: "3",
        name: "Pascal(fpc 3.0.2)",
        template: "pascalTemplate",
        tplId: "pascalTpl",
        cm: {plugin: "pascal", name: "text/x-pascal"}
    }, {
        id: "4",
        name: "Java(javac 1.8)",
        template: "javaTemplate",
        tplId: "javaTpl",
        cm: {plugin: "clike", name: "text/x-java"}
    }, {
        id: "5",
        name: "Python(2.7.3)",
        template: "pythonTemplate",
        tplId: "pythonTpl",
        cm: {plugin: "python", name: "text/x-python"}
    }, {id: "6", name: "perl"}, {id: "7", name: "scheme"}, {
        id: "8",
        name: "PHP(7.1)",
        template: "phpTemplate",
        tplId: "phpTpl",
        cm: {plugin: "php", name: "application/x-httpd-php"}
    }, {
        id: "9",
        name: "C#(mcs 5.4)",
        template: "csharpTemplate",
        tplId: "cSharpTpl",
        cm: {plugin: "clike", name: "text/x-csharp"}
    }, {
        id: "10",
        name: "ObjC(gcc 5.4)",
        template: "objCTemplate",
        tplId: "objCTpl",
        cm: {plugin: "clike", name: "text/x-c++hdr"}
    }, {
        id: "11",
        name: "Python3(3.5.2)",
        template: "python3Template",
        tplId: "python3Tpl",
        cm: {plugin: "python", name: "text/x-python"}
    }, {id: "12", name: "Frontend", cm: {plugin: "clike", name: "text/x-csrc"}}, {
        id: "13",
        name: "JavaScript(Node 6.11.4)",
        template: "jsTemplate",
        tplId: "jsTpl",
        cm: {plugin: "javascript", name: "text/javascript"}
    }, {
        id: "14",
        name: "JavaScript (V8 6.0.0)",
        template: "jsV8Template",
        tplId: "jsV8Tpl",
        cm: {plugin: "javascript", name: "text/javascript"}
    }, {
        id: "15",
        name: "Sql(3.7.9)",
        template: "sqlTemplate",
        tplId: "sqlTpl",
        cm: {plugin: "sql", name: "text/x-mysql"}
    }, {
        id: "16",
        name: "R(2.14.1)",
        template: "rTemplate",
        tplId: "rTpl",
        cm: {plugin: "r", name: "text/x-rsrc"}
    }, {
        id: "17",
        name: "Go(1.9.1)",
        template: "goTemplate",
        tplId: "goTpl",
        cm: {plugin: "go", name: "text/x-go"}
    }, {
        id: "18",
        name: "TCL(TestCase L)",
        template: "tclTemplate",
        tplId: "tclTpl",
        cm: {plugin: "clike", name: "text/x-c++hdr"}
    }, {
        id: "19",
        name: "Ruby(2.4.2)",
        template: "rubyTemplate",
        tplId: "rubyTpl",
        cm: {plugin: "ruby", name: "text/x-ruby"}
    }, {
        id: "20",
        name: "Swift(4.0)",
        template: "swiftTemplate",
        tplId: "swiftTpl",
        cm: {plugin: "swift", name: "text/x-swift"}
    }, {
        id: "21",
        name: "matlab(Octave 4.0.0)",
        template: "matlabTemplate",
        tplId: "matlabTpl",
        cm: {plugin: "clike", name: "text/x-csrc"}
    }, {id: "101", name: "Python3", cm: {plugin: "python", name: "text/x-python"}}, {
        id: "102",
        name: "Swift",
        cm: {plugin: "swift", name: "text/x-swift"}
    }, {id: "103", name: "Lua(luac 5.2)", cm: {plugin: "lua", name: "text/x-lua"}}, {
        id: "104",
        name: "Go(go 1.1.1)",
        cm: {plugin: "go", name: "text/x-go"}
    }], l = {};
    d.forEach(p, function (t) {
        l[t.id] = t
    });
    var i = ["2", "22", "4", "1", "5", "11", "9", "8", "14", "13", "16", "17", "19", "20", "10", "3", "15", "18", "21"],
        n = ["1", "2", "4", "5", "8", "9", "11", "13", "14"], m = ["1", "2", "4", "5", "11", "8", "9", "13", "14"];
    a.exports = {
        langCpp: "2",
        langJava: "4",
        langSql: "15",
        langTCL: "18",
        langFE: "12",
        getQuestionLang: function c(t) {
            return t ? i.slice(0) : d.without(i, this.langTCL)
        },
        getHintLang: function u() {
            return n.slice(0)
        },
        getPreTplLang: function s() {
            return m.slice(0)
        },
        getItemById: function g(t) {
            return t = r.trim(t), l[t]
        },
        getNameById: function o(t) {
            return (this.getItemById(t) || {}).name || ""
        },
        getCMById: function h(t) {
            return (this.getItemById(t) || {}).cm
        },
        getTemplateById: function T(t) {
            return (this.getItemById(t) || {}).template
        },
        getExample: function x() {
            return d.map(r(".js-sample-io"), function (t) {
                var e = (t = r(t)).find("textarea[data-type=input]"), a = t.find("textarea[data-type=output]");
                return {input: e.val() || "", output: a.val() || ""}
            })
        },
        getTpl: function f(p) {
            var l = this, n = [];
            return p = p || {}, d.forEach(i, function (t) {
                var e = l.getItemById(t);
                if (e) {
                    var a = p[t] || e.tplId || "";
                    n.push({id: t, tpl: r("#" + a)})
                }
            }), n
        },
        getTplByData: function v(a, l, t) {
            l = l || {}, a = d.id(a);
            var n = 0 === (t || []).length ? null : d.toMap(t, function (t) {
                return {key: t, value: !0}
            }), i = d.toMap(p, function (t) {
                return {key: t.id, value: t.template}
            }), m = [], c = [];
            return d.forEach(["2", "22", "4", "1", "5", "11", "9", "8", "14", "13", "16", "17", "19", "20", "10", "3", "21"], function (t) {
                var e = {2: !0, 4: !0}[t];
                if (n) {
                    p = u(l[i[t]]);
                    var a = e ? u(l[i[t]], !0) : p;
                    p && n[t] && m.push({id: t, tpl: p}), a && c.push({id: t, tpl: a})
                } else {
                    var p;
                    (p = u(l[i[t]], e)) && m.push({id: t, tpl: p})
                }
            }), 0 === m.length && (m = c), m.push({id: "15", tpl: u(l[i[15]], "4" === a)}), m.push({
                id: "18",
                tpl: u(l[i[18]], "5" === a)
            }), m;

            function u(t, e) {
                if (e || "0" === a || "1" === a && t) return r("<textarea>" + (t || "") + "</textarea>")
            }
        },
        getTplFE: function y(t) {
            return [{id: "html", tpl: r("#" + ((t = t || {}).html || "htmlTpl"))}, {
                id: "css",
                tpl: r("#" + (t.css || "cssTpl"))
            }, {id: "javascript", tpl: r("#" + (t.javascript || "javascriptTpl"))}]
        },
        getTplFEByData: function I(t) {
            return [{id: "html", tpl: e((t = t || {}).cppTemplate)}, {
                id: "css",
                tpl: e(t.cTemplate)
            }, {id: "javascript", tpl: e(t.javaTemplate)}];

            function e(t) {
                return r("<textarea>" + (t || "") + "</textarea>")
            }
        },
        checkTpl: function j(p, t) {
            p = d.id(p);
            var l = [], e = d.toMap(t, function (t) {
                return {key: t.id, value: t}
            });
            "4" === p ? l.push(e[this.langSql]) : "5" === p ? l.push(e[this.langTCL]) : d.forEach(t, function (t) {
                var e = t.id;
                if ("15" !== e && "18" !== e) {
                    var a = {2: !0, 4: !0}[e];
                    (a = (a = a || "0" === p) || "1" === p && t.tpl && 0 < r(t.tpl).length) && l.push(t)
                }
            });
            return l
        }
    }
});
define("/nc/1.03.04/bll/codeSubmit", ["../lib/jquery", "../base/base", "../base/clazz", "../extend/ajax", "../base/str", "../base/uri"], function (e, t, a) {
    e("../lib/jquery");
    var r = e("../base/base"), s = e("../base/clazz"), l = e("../extend/ajax"), d = a.exports = s.create();
    r.extend(d.prototype, {
        submitDiyCode: function u(e) {
            var t = e.data || e, a = r.extend({
                selfType: t.selfType || t.tagId,
                tagId: t.tagId,
                subTagId: t.subTagId,
                problemId: t.problemId || undefined,
                questionId: t.questionId || undefined,
                selfInput: t.input,
                selfOutput: t.output,
                content: t.content,
                language: t.language
            }, e.extCodeParam), s = r.extend({}, e, {body: a});
            this.submitCode(s, !0)
        }, submitSelfCode: function n(e) {
            var t = e.data || e, a = r.extend({
                questionId: t.questionId,
                tagId: t.tagId,
                subTagId: t.subTagId,
                content: t.content,
                language: t.language
            }, e.extCodeParam), s = r.extend({}, e, {body: a});
            this.submitCode(s)
        }, submitTestCode: function o(e) {
            var t = e.data || e, a = r.extend({
                pid: t.pid,
                tid: t.tid,
                qid: t.qid,
                tagId: t.tagId,
                subTagId: t.subTagId,
                content: t.content,
                language: t.language
            }, e.extCodeParam), s = r.extend({}, e, {body: a});
            this.submitCode(s)
        }, getCodeStatus: function m(s, e) {
            var d = this, u = d.submissionId = s.submissionId, t = s.body || {}, n = t.tagId, o = t.subTagId,
                i = e ? "" : "您的代码已保存", c = 1e3;

            function b() {
                d.callback(s, "cbStatusCodeBefore"), l.request({
                    $: s.$,
                    url: s.urlGetCodeStatus,
                    query: r.extend({submissionId: u, tagId: n, subTagId: o, selfType: t.selfType}, s.extStatusParam),
                    call: function (e) {
                        if (d.submissionId === u) if (0 === e.status || 1 === e.status || 2 === e.status) c > Math.max(+s.maxStatusDelay || 0, 7e4) && (d.feedback(s, i + "\n查询超时，请重试", !0), d.callback(s, "cbStatusCodeError")), d.runTimer = setTimeout(b, c), c *= 2; else {
                            e.submissionId = u;
                            var t = 5 === e.status, a = i + "\n" + (e.desc || "") + "\n" + (e.memo || "");
                            !e.isComplete && (a += '<div><a class="js-show-result link-green" target="_blank" href="//nowcoder.com/completeSubmissionInfo?submissionId=' + u + "&tagId=" + n + "&subTagId=" + o + '">查看全部</a></div>'), d.feedback(s, a, !t, e), d.callback(s, t ? "cbStatusCodeSuccess" : "cbStatusCodeFail", e)
                        }
                    },
                    error: function (e) {
                        e.submissionId = u, d.feedback(s, i + "\n" + (e.msg || "代码运行失败"), !0), d.callback(s, "cbStatusCodeError", e)
                    }
                })
            }

            d.runTimer = setTimeout(function () {
                b(d.submissionId)
            }, 500)
        }, submitCode: function i(a, s) {
            var d = this, u = s ? "" : "您的代码已保存";
            if (window.clearTimeout(d.runTimer), d.submissionId = null, !a || !a.urlSubmitCode || !a.body) return d.feedback(a, "参数错误", !0), d.callback(a, "cbSubmitCodeError", {
                code: -1,
                msg: "参数错误"
            });
            {
                if (d.reqCaptcha) return d.feedback(a, "请输入验证码..."), d.callback(a, "cbGetCaptcha", function (e) {
                    d.reqCaptcha = !1, e && t(e), e || (d.callback(a, "cbGetCaptchaError"), d.feedback(a, "验证码错误", !0))
                });
                t()
            }

            function t(e) {
                d.feedback(a, "正在提交代码..."), d.callback(a, "cbSubmitCodeBefore"), l.request({
                    $: a.$,
                    url: a.urlSubmitCode,
                    query: r.extend(a.query || {}, a.query, e),
                    body: a.body,
                    call: function (e) {
                        d.callback(a, "cbSubmitCodeComplete", e);
                        var t = a.getSubmissionId ? a.getSubmissionId(e) : e.submissionId;
                        r.id(t) && 0 <= t ? (d.feedback(a, u + "\n" + r.lang("正在查询结果...")), d.callback(a, "cbSubmitCodeSuccess", e), d.getCodeStatus(r.extend({submissionId: t}, a), s)) : (d.feedback(a, e.msg || "代码提交失败，请再次运行", !0), d.callback(a, "cbSubmitCodeError", e))
                    },
                    error: function (e) {
                        1125 === e.code ? (d.reqCaptcha = !0, d.submitCode(a)) : (d.feedback(a, e.msg || "代码提交失败，请再次运行", !0), d.callback(a, "cbSubmitCodeError", e))
                    }
                })
            }
        }, feedback: function c(e) {
            return e && e.feedback && e.feedback.apply(this, [].slice.call(arguments, 1))
        }, callback: function b(e, t) {
            return e && e[t] && e[t].apply(this, [].slice.call(arguments, 2))
        }
    })
});
define("/nc/1.03.04/base/base", [], function (n, r, t) {
    for (var i = Math.pow(2, 53) - 1, e = 0, o = window._ncLangAnalyze = {
        hit: {},
        lack: {}
    }, u = t.exports = {
        BREAK: {}, forEach: function h(n, r) {
            var t = this;
            if (!n || !t.isFunction(r)) return;
            if (t.isLikeArray(n)) for (var i = 0, e = n.length; i < e && r(n[i], i, n) !== t.BREAK; i++) ; else if (t.isLikeObject(n)) {
                for (var u in n) if (n.hasOwnProperty(u) && r(n[u], u, n) === t.BREAK) break
            } else if ("object" == typeof n) try {
                for (var u in n) if (n.hasOwnProperty(u) && r(n[u], u, n) === t.BREAK) break
            } catch (s) {
            }
        }, forReverse: function l(n, r) {
            if (!this.isFunction(r)) return;
            if (this.isLikeArray(n)) for (var t = n.length - 1; 0 <= t && r(n[t], t, n) !== this.BREAK; t--) ; else this.forEach(n, r)
        }, forCount: function v(n, r) {
            if (n = +n, !this.isFunction(r) || !this.isNumber(n) || n < 1) return;
            for (var t = 0; t < n && r(t) !== this.BREAK; t++) ;
        }, filter: function g(n, r) {
            var t = [];
            if (!this.isLikeArray(n)) return t;
            if (!this.isFunction(r)) return n;
            for (var i = 0, e = n.length; i < e; i++) r(n[i], i, n) && t.push(n[i]);
            return t
        }, some: function d(n, r) {
            if (!this.isLikeArray(n)) return !1;
            for (var t = 0, i = n.length; t < i; t++) if (r ? r(n[t], t, n) : n[t]) return !0;
            return !1
        }, every: function y(n, r) {
            if (!this.isLikeArray(n)) return !0;
            if (!this.isFunction(r)) return !1;
            for (var t = 0, i = n.length; t < i; t++) if (!r(n[t], t, n)) return !1;
            return !0
        }, range: function p(n, r, t) {
            null !== r && r !== undefined || (r = n || 0, n = 0);
            t || (t = r < n ? -1 : 1);
            for (var i = Math.max(Math.ceil((r - n) / t), 0), e = new Array(i), u = 0; u < i; u++, n += t) e[u] = n;
            return e
        }, map: function b(n, r) {
            var t = [];
            if (!this.isLikeArray(n)) return t;
            if (!this.isFunction(r)) return n;
            for (var i = 0, e = n.length; i < e; i++) t.push(r(n[i], i, n));
            return t
        }, toMap: function k(n, i) {
            var e = {};
            return this.forEach(n, function (n, r) {
                var t = i ? i(n, r) || {} : {key: n};
                t.key && (e[t.key] = !("value" in t) || t.value)
            }), e
        }, contains: function A(n, r) {
            if (arguments.length < 2 || !this.isLikeArray(n)) return !1;
            for (var t = 0, i = n.length; t < i; t++) if (n[t] === r) return !0;
            return !1
        }, without: function w(n) {
            for (var r = this.isLikeArray(n) ? [].slice.call(n, 0) : [], t = r.length - 1; 0 <= t; t--) for (var i = 1, e = arguments.length; i < e; i++) if (r[t] === arguments[i]) {
                r.splice(t, 1);
                break
            }
            return r
        }, uniq: function O(n) {
            for (var r = this.isLikeArray(n) ? [].slice.call(n, 0) : [], t = 0; t < r.length; t++) for (var i = r.length - 1; t < i; i--) r[t] === r[i] && r.splice(i, 1);
            return r
        }, uniqPush: function E(n, r, t) {
            var i = [], e = this.toMap(n, function (n, r) {
                return i.push(n), {key: t(n), value: r}
            });
            return this.forEach(r, function (n) {
                var r = t(n);
                r in e ? i[e[r]] = n : i.push(n)
            }), i
        }, indexOf: function L(n, r) {
            if (!this.isLikeArray(n)) return -1;
            for (var t = 0, i = n.length; t < i; t++) if (n[t] === r) return t;
            return -1
        }, result: function j(n, r, t) {
            if (!this.isLikeObject(n) || !this.isString(r)) return t;
            var i = n[r];
            this.isFunction(i) && (i = i.call(n));
            return i === undefined ? t : i
        }, find: function F(r, n, t) {
            var i = this.findIndex(r, n, t);
            i = t ? i : [i];
            var e = this.map(i, function (n) {
                return -1 === n ? undefined : r[n]
            });
            return t ? e : e[0]
        }, findIndex: function m(n, t, i) {
            var e = this;
            if (!e.isFunction(t)) return;
            var u = [], s = !1;
            return e.forEach(n, function (n, r) {
                if (!i && s) return e.BREAK;
                t.apply(null, arguments) && (u.push(r), s = !0)
            }), i ? u : 0 === u.length ? -1 : u[0]
        }, forEachAsync: function S(n, t, i) {
            var e = 0, u = [], s = [];
            if (0 === (e = this.size(n)) || !t) return i && i({complete: u, error: s});
            this.forEach(n, function (n, r) {
                t(n, function (n) {
                    n && s.push(r), !n && u.push(r), u.length + s.length >= e && i && (i({
                        complete: u,
                        error: s
                    }), i = null)
                })
            })
        }, extend: function x(n) {
            var r;
            if (!this.isLikeObject(n)) return;
            for (var t = 1, i = arguments.length; t < i; t++) if (r = arguments[t], this.isObject(r)) if (Object.assign) Object.assign(n, r); else for (var e in r) r.hasOwnProperty(e) && (n[e] = r[e]);
            return n
        }, clone: function B(n) {
            {
                if (this.isArray(n)) return [].slice.call(n, 0);
                if (this.isObject(n)) return this.extend({}, n)
            }
            return n
        }, values: function R(n) {
            var r = [];
            try {
                for (var t in n) n.hasOwnProperty(t) && r.push(n[t])
            } catch (i) {
            }
            return r
        }, keys: function K(n) {
            var r = [];
            try {
                for (var t in n) n.hasOwnProperty(t) && r.push(t)
            } catch (i) {
            }
            return r
        }, size: function N(n) {
            if (!n) return 0;
            if (this.isLikeArray(n)) return n.length;
            return this.keys(n).length
        }, copy: function P(t, i, n) {
            var e = this;
            e.isArray(n) || (n = [n]);
            e.forEach(n, function (n) {
                try {
                    n in i && i[n] !== undefined && null !== i[n] && (t[n] = e.clone(i[n]), i[n] = null)
                } catch (r) {
                }
            })
        }, isLikeArray: function M(n) {
            return n && (this.isArray(n) || this.isNumber(n.length) && !this.isFunction(n)) && 0 <= n.length && n.length <= i
        }, isLikeObject: function C(n) {
            return this.isObject(n) || this.isFunction(n)
        }, bind: function I(e, u) {
            for (var s = [], n = 2, r = arguments.length; n < r; n++) s.push(arguments[n]);
            return function () {
                for (var n = s.slice(0), r = 0, t = arguments.length; r < t; r++) n.push(arguments[r]);
                var i = e.apply(u, n);
                return i
            }
        }, json: function z(n, r) {
            r = r || null;
            try {
                return n ? window.JSON.parse(n) : r
            } catch (s) {
                try {
                    var t = /^[\],:{}\s]*$/, i = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                        e = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
                        u = /(?:^|:|,)(?:\s*\[)+/g;
                    if (t.test(n.replace(i, "@").replace(e, "]").replace(u, ""))) return new window.Function("return " + n)()
                } catch (o) {
                }
            }
            return r
        }, lang: function _(n, t, r) {
            if (!n) return "";
            var i = arguments.length, e = 2 < i;
            2 === i && ((e = this.isObject(t)) || (r = t, t = null));
            !r && (r = "pageNCLang");
            var u = window[r], s = u && u[n];
            if (o[s ? "hit" : "lack"][n] = 1, e) return s = (s || n).replace(/#{(.*?)}/g, function (n, r) {
                return t[r] || ""
            });
            return s || n
        }, id: function q(n) {
            if (0 === arguments.length || n === undefined || null === n || !n && isNaN(n)) return undefined;
            if (this.isNumber(n)) return n + "";
            if (this.isObject(n)) return this.id(n.id);
            var r = this.isString(n) ? n : undefined;
            return r = r && /^(-|\+)?\d*\.?\d+$/.test(r) ? +r + "" : undefined
        }, ascId: function $() {
            return ++e + ""
        }, key: c, primaryKey: c, property: function D(o) {
            var f = this;
            if (Object.defineProperty) {
                var a = o.target, c = f.extend({}, o.db), h = !1 !== o.get, l = !1 !== o.set, v = f.isFunction(o.get),
                    g = f.isFunction(o.set);
                f.forEach(o.attr, function (n) {
                    f.isString(n) && (n = {name: n});
                    var t = n.name, r = f.isFunction(n.get), i = f.isFunction(n.set), e = {};
                    if (h || n.get) {
                        var u = r ? n.get : v ? o.get : function (n, r) {
                            return n[r]
                        };
                        e.get = function () {
                            return u.call(a, c, t)
                        }
                    }
                    if (l || n.set) {
                        var s = i ? n.set : g ? o.set : function (n, r, t) {
                            n[t] = r
                        };
                        e.set = function (n) {
                            var r = a.beforeSet && a.beforeSet(c, n, t);
                            s.call(a, c, n, t), a.afterSet && a.afterSet(c, n, t, r)
                        }
                    }
                    Object.defineProperty(a, t, e)
                })
            }
        }, out: function J(n, r) {
            try {
                n = n.stack || n, (window.console || {})[r || "log"] && (window.console || {})[r || "log"](n)
            } catch (t) {
            }
        }, outColor: function T(n, r) {
            try {
                n = n.stack || n, window.console.log("%c " + n, "color:" + (r || "#00BC9B"))
            } catch (t) {
            }
        }
    }, s = ["Array", "Object", "Function", "String", "Number", "RegExp"], f = 0, a = s.length; f < a; f++) !function (r) {
        u["is" + r] = function (n) {
            return null !== n && n !== undefined && {}.toString.call(n) === "[object " + r + "]"
        }
    }(s[f]);

    function c() {
        return this.ascId() + "_" + (new Date).getTime() + "_" + Math.floor(10001 * Math.random())
    }
});
define("/nc/1.03.04/base/browser", ["./str", "./base"], function (e, i, o) {
    var s = e("./str"), r = o.exports = {
        _init: function p() {
            var e = this;
            if (o.exports._inited) return;
            o.exports._inited = !0;
            var i = window.navigator.userAgent, r = e.getOs(i);
            o.exports._os = r.os, o.exports._system = r.system;
            var t = e.getBrowser(i) || {};
            o.exports._appName = s.trim(t.appName).toLowerCase(), o.exports._version = s.trim(t.version).toLowerCase();
            var n = e.getShell(i);
            o.exports._shell = s.trim(n).toLowerCase(), o.exports._screenWidth = window.screen.width, o.exports._screenHeight = window.screen.height;
            var a = e.getFlash();
            o.exports._hasFlash = !!a, o.exports._flashVersion = a
        }, getOs: function t(e) {
            var i, r;
            e = e || window.navigator.userAgent || "", /windows|win32/i.test(e) ? (i = "windows", r = (e.match(/Windows\sNT\s(\d+\.\d+)/) || [])[1]) : /ipad|iphone|ipod/i.test(e) ? (i = "iOS", r = (r = (e.match(/OS[^\d]*?(\d+[\._]\d+)/) || [])[1] || "").split("_").join(".")) : /android/i.test(e) ? (i = "Android", r = (e.match(/Android[^\d]*?(\d+\.\d+)/) || [])[1]) : /linux/i.test(e) ? (i = "linux", r = (e.match(/Linux\s([^;]+)/) || [])[1]) : /macintosh/i.test(e) ? (i = "macintosh", r = (r = (e.match(/Mac\sOS\sX\s(\d+[\._]\d+)/) || [])[1] || "").split("_").join(".")) : i = /rhino/i.test(e) ? "rhino" : /adobeair/i.test(e) ? "Adobeair" : (navigator.platform || "").toLowerCase();
            return {os: i || "", system: r || ""}
        }, getBrowser: function n(e) {
            var i;
            if (e = e || window.navigator.userAgent || "", (i = e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (i[1] || i[2])) return {
                appName: "MSIE",
                version: i[1] || i[2]
            };
            if ((i = e.match(/Edge\/(\d+).(\d+)$/)) && (i[1] || i[2])) return {appName: "Edge", version: i[2] || i[1]};
            if ((i = e.match(/Firefox\/([^\s]*)/)) && i[1]) return {appName: "Firefox", version: i[1]};
            if ((i = e.match(/Chrome\/([^\s]*)/)) && i[1]) return {appName: "Chrome", version: i[1]};
            if ((i = e.match(/Version\/([^\s]*).+Safari/)) && i[1]) return {appName: "Safari", version: i[1]};
            if ((i = e.match(/Opera.+Version[\s\/]([^\s]*)/)) && i[1]) {
                return (i = e.match(/Opera Mini[^;]*/)) && i[0], {appName: "Opera", version: i[1]}
            }
            if ((i = e.match(/AppleWebKit\/([^\s]*)/)) && i[1]) return {appName: "AppleWebKit", version: i[1]};
            return {appName: "", version: ""}
        }, getShell: function a(e) {
            e = e || window.navigator.userAgent || "";
            for (var i = [[/MetaSr/i, "Sogou"], [/Maxthon/i, "Maxthon"], [/TencentTraveler/i, "TencentTraveler"], [/QQBrowser/i, "QQBrowser"], [/TheWorld/i, "TheWorld"], [/360[S|E]E/i, "360"]], r = 0, t = i.length; r < t; r++) {
                var n = e.match(i[r][0]);
                if (n) return i[r][1]
            }
            return ""
        }, getFlash: function m(e) {
            var i;
            e = e || window.navigator.userAgent || "";
            var r = this.getBrowser().appName, t = "";
            try {
                if ("MSIE" === r) (i = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) && (t = i.getVariable("$version").split(" ")[1]); else if (navigator.plugins && 0 < navigator.plugins.length && (i = navigator.plugins["Shockwave Flash"])) for (var n = i.description.split(" "), a = 0, o = n.length; a < o; a++) if (0 < Math.floor(n[a])) {
                    t = n[a];
                    break
                }
            } catch (s) {
            }
            return t
        }, version: function c() {
            return r._init(), window.parseInt(r._version || "", 10) || 0
        }, ie: function d() {
            r._init();
            var e = r._version, i = r._appName;
            return "msie" === i || "edge" === i ? e : undefined
        }, firefox: function l() {
            r._init();
            var e = r._version;
            return "firefox" === r._appName ? e : undefined
        }, chrome: function h() {
            r._init();
            var e = r._version;
            return "chrome" === r._appName ? e : undefined
        }, safari: function v() {
            r._init();
            var e = r._version;
            return "safari" === r._appName ? e : undefined
        }, opera: function w() {
            r._init();
            var e = r._version;
            return "opera" === r._appName ? e : undefined
        }, wechat: function u(e) {
            return /MicroMessenger/gi.test(e || window.navigator.userAgent)
        }, mobile: function g(e) {
            return e = e || window.navigator.userAgent || window.navigator.vendor || window.opera || "", /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
        }, flash: function f() {
            return r._init(), r._flashVersion ? r._flashVersion : undefined
        }
    }
});
define("/nc/1.03.04/base/clazz", ["./base"], function (t, r, i) {
    var s = t("./base");
    i.exports = {
        create: function o() {
            var i = function () {
                var t = this.constructor === i ? this : arguments.callee, r = [];
                t.initialize && r.push(t.initialize);
                for (var o, n = t; n && n.constructor && n.constructor.superClass;) {
                    if (o = n.constructor.superClass.initialize) {
                        for (var e = r.length - 1; 0 <= e; e--) r[e] === o && r.splice(e, 1);
                        r.unshift(o)
                    }
                    n = n.constructor.superClass
                }
                for (var e = r.length - 1; 0 <= e; e--) r[e].apply(t, arguments)
            };
            return i
        }, mix: function p(n, t, r, o) {
            if (!n || !t) return;
            var e = n.superClass = n.superClass || {};
            s.forEach(t, function (t, r) {
                if (s.isFunction(t)) {
                    var o = e[r];
                    e[r] = o ? function () {
                        o.apply(this, arguments), t.apply(this, arguments)
                    } : t
                } else e[r] = t;
                n[r] = n[r] || t
            }), s.extend(n, r), t.toString != t.constructor.prototype.toString && (e.toString = function () {
                t.toString.apply(n, arguments)
            });
            o && n.prototype && t.prototype && i.exports.inherit(n, t, o);
            return n
        }, inherit: function c(t, r, o) {
            var n = function () {
            };
            n.prototype = r.prototype, t.prototype = new n, (t.prototype.constructor = t).superConstructor = r, t.superClass = r.prototype;
            try {
                r._onInherit && r._onInherit(t)
            } catch (e) {
            }
            s.extend(t.prototype, o)
        }, one: function e(t, r) {
            var o = this.create(), n = s.isArray(t) ? t : [t];
            return n.unshift(o.prototype), s.extend.apply(s, n), new o(r || {})
        }
    }
});
define("/nc/1.03.04/base/cookie", ["./base"], function (e, n, t) {
    var o = e("./base");
    t.exports = {
        get: function p(e, n) {
            for (var t, i, r, o = this, s = n ? o._raw : o._decoded, c = document.cookie.split("; "), a = e ? "" : {}, d = 0, u = c.length; d < u; d++) if (t = c[d].split("="), i = s(t.shift()), r = s(t.join("=")), e) {
                if (e === i) return o._converted(r)
            } else a[i] = o._converted(r);
            return a
        }, set: function s(e, n, t) {
            if (t = t || {}, o.isNumber(t.expires)) {
                var i = t.expires, r = t.expires = new Date;
                r.setDate(r.getDate() + i)
            }
            return n += "", document.cookie = [window.escape(e), "=", window.escape(n), t.expires ? "; expires=" + t.expires.toUTCString() : "", t.path ? "; path=" + t.path : "", t.domain ? "; domain=" + t.domain : "", t.secure ? "; secure" : ""].join("")
        }, remove: function i(e, n) {
            n = n || {};
            var t = !1;
            this.get(e) !== undefined && (n.expires = -1, this.set(e, "", n), t = !0);
            return t
        }, _raw: function r(e) {
            return e
        }, _decoded: function c(e) {
            return window.unescape(e.replace(/\+/g, " "))
        }, _converted: function a(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            return e
        }
    }
});
define("/nc/1.03.04/base/data", ["./base", "./clazz"], function (t, e, n) {
    var p = t("./base"), a = t("./clazz"), r = n.exports = a.create();

    function w(t) {
        throw new Error(t)
    }

    var o = a.create();
    p.extend(o.prototype, {
        initialize: function i(t) {
            var e = this;
            e.value = t.value, e.cb = t.cb, e.getter = t.getter, e.uid = p.ascId(), e.update()
        }, update: function d(t) {
            var e = this, n = e.get();
            e.value !== n && (((t = t || {}).watcher = e).cb && e.cb(n, e.value, t), e.value = n)
        }, get: function f() {
            var t = this;
            c.watch.push(t);
            var e = t.getter ? t.getter() : "";
            return c.watch.pop(), e
        }
    });
    var c = a.create();
    c.watch = [], p.extend(c.prototype, {
        initialize: function l() {
            this.data = {}, this.key = []
        }, addSub: function s(t) {
            var e = t.length;
            if (0 < e) {
                var n = t[e - 1], a = this.data, i = n.uid;
                a[i] || (this.key.push(i), a[i] = n)
            }
        }, removeSub: function v(t) {
            var e = this, n = e.data;
            e.key;
            n[t] && (delete n[t], e.key = p.without(e.key, t))
        }, notify: function h(t, e) {
            var n = this.data;
            p.forEach(this.key, function (t) {
                n[t].update(e)
            })
        }
    });
    var u = a.create();
    p.extend(u.prototype, {
        initialize: function m(t, e) {
            var n = this;
            e = !!e || !p.isObject(t), n.isEnd = e, n.value = e ? t : {}, e || (n.result = {}, p.forEach(t, function (t, e) {
                /\./.test(e) && w("data中的" + e + '属性存在非法字符"."'), n.add({name: e, val: t})
            }))
        }, get: function y(t, e) {
            !this.exist(t) && w("不存在属性" + t);
            var n = this.value[t];
            return n.dep.addSub(c.watch), e ? n.raw() : n
        }, set: function E(t, e, n) {
            var a = n && !!n.end;
            if (this.get(t, !0) !== e) {
                var i = new u(e, a);
                this.update(t, i);
                var r = i.dep;
                r.notify(e, n)
            }
        }, raw: function g() {
            var t = this, n = t.isEnd ? t.value : t.result;
            t.isEnd || (p.forEach(n, function (t, e) {
                delete n[e]
            }), p.forEach(t.value, function (t, e) {
                n[e] = t.raw()
            }));
            return n
        }, add: function x(t) {
            var e = t.name, n = t.val, a = !!t.end, i = new u(n, a);
            i.dep = new c, i.uid = t.uid, this.update(e, i)
        }, update: function b(t, e) {
            if (this.exist(t)) {
                var n = this.value[t];
                e.dep = n.dep, e.uid = n.uid, delete n.dep
            }
            this.value[t] = e
        }, exist: function z(t) {
            var e = !this.isEnd;
            if (e) {
                var n = this;
                p.forEach(t.split(/[\s\.]+/), function (t) {
                    if (t) return (n = n.value[t]) ? null : p.BREAK
                }), e = !!n
            }
            return e
        }, compressDep: function j() {
            var n = {}, a = [];
            p.forEach(this.value, function (t) {
                var e = t.uid;
                e && (n[t.uid] = t), !e && a.push(t)
            }), p.forEach(a, function (t) {
                !function r(n, t, a) {
                    a = a || {};
                    var i = t.dep;
                    p.forEach(i.key, function (t) {
                        var e = n[t];
                        e && (a[t] && a[t](), a[t] = function () {
                            i.removeSub(t)
                        }, r(n, e, a))
                    })
                }(n, t)
            })
        }
    }), p.extend(r, {
        create: function O(e) {
            var n = a.create(), i = {context: null, data: null, computed: e.computed, watch: e.watch, useProperty: !1};
            return n.prototype.initialize = function (t) {
                var n = this;
                i.context = n, i.data = e.data.call(this, t);
                var a = new r(i);
                Object.defineProperty && e.useProperty && p.forEach(i.data, function (t, e) {
                    Object.defineProperty(n, e, {
                        get: function () {
                            return a.val(e)
                        }, set: function (t) {
                            return a.val(e, t)
                        }
                    })
                }), n.val = function () {
                    return a.val.apply(a, arguments)
                }, e.initialize && e.initialize.apply(n, arguments)
            }, p.forEach(e, function (t, e) {
                !(e in i) && "initialize" !== e && (n.prototype[e] = t)
            }), n
        }
    }), p.extend(r.prototype, {
        initialize: function _(t) {
            var n = this;
            if (!p.isObject(t.data)) throw new Error("配置参数data必须为Object对象");
            n.data = {
                context: t.context || n,
                computed: t.computed,
                watch: t.watch,
                model: new u(t.data),
                valId: [],
                _computed: {}
            }, p.forEach(t.watch, function (t, e) {
                n.watch(e, t)
            }), Object.defineProperty && t.useProperty && p.forEach(t.data, function (t, e) {
                Object.defineProperty(n, e, {
                    get: function () {
                        return n.val(e)
                    }, set: function (t) {
                        return n.val(e, t)
                    }
                })
            })
        }, val: function k(t, n, e) {
            var a = this, i = arguments.length, r = a.data, c = r.computed, o = r.model;
            if (0 === i) return o.raw();
            if (p.isObject(t)) return p.forEach(t, function (t, e) {
                a.val(e, t, n)
            });
            var u = 1 === i, d = r.valId, f = u ? 1 : 2, l = (u ? "get:" : "set:") + t;
            if (d.push(l), d.length > f) {
                var s = 0;
                p.forEach(d, function (t) {
                    t === l && s++
                }), f < s && w("出现循环引用，引用路径：" + d.join("->"))
            }
            var v = "";
            if (p.forEach(t.split(/[\s\.]+/), function (t) {
                t && (v && (o = o.get(v)), v = t)
            }), u) {
                c && c[t] && !r._computed[t] && a._initComputed(c[t], t);
                var h = o.get(v, !0);
                return d.pop(), h
            }
            c && v in c && w("不能设置computed属性" + t), e && delete e.end, o.set(v, n, e), d.pop()
        }, watch: function P(t, a) {
            var n = this, i = n.data, e = i.computed, r = arguments.length;
            if (0 === r) return p.forEach(i.watch, function (t, e) {
                n.watch(e)
            });
            if (e && e[t] && !i._computed[t] && n._initComputed(e[t], t), !i.model.exist(t) && w("不存在属性" + t), 1 === r) {
                var c = n.val(t);
                a = (i.watch || {})[t], (a = p.isString(a) ? i.context[a] : a) && a.call(i.context, c, c)
            } else a = p.isString(a) ? i.context[a] : a, new o({
                name: t, value: n.val(t), getter: function () {
                    return n.val(t)
                }, cb: function (t, e, n) {
                    a.call(i.context, t, e, n)
                }
            })
        }, _initComputed: function S(t, i) {
            var r = this.data;
            if (!r._computed[i]) {
                r._computed[i] = !0;
                var c = r.model;
                c.exist(i) && w("属性" + i + "同时存在于data和computed中"), /\./.test(i) && w("属性" + i + '存在非法字符"."'), t = p.isString(t) ? r.context[t] : t, new o({
                    value: null,
                    getter: function () {
                        return t.apply(r.context, arguments)
                    },
                    cb: function (t, e, n) {
                        var a = n.watcher;
                        !c.exist(i) && c.add({
                            name: i,
                            val: t,
                            uid: a.uid,
                            end: !0
                        }), c.set(i, t, {end: !0}), r.model.compressDep()
                    }
                })
            }
        }
    })
});
define("/nc/1.03.04/base/db", ["./base", "./clazz"], function (e, t, i) {
    var c = e("./base"), n = e("./clazz"), a = i.exports = n.create(), r = {}, o = !1;
    try {
        o = !!window.localStorage
    } catch (m) {
    }
    c.extend(a.prototype, {
        initialize: function v(e, t) {
            t = t || {}, e = (a.prefix || "") + (!1 === t.needPrefix ? "" : "ncDb_") + (e || "noNameTmp");
            this.name = e, r[e] || (r[e] = o ? c.json((window.localStorage || {})[e], {}) : {});
            this.cache = r[e]
        }, set: d, get: h, del: l, remove: l, reset: function w() {
            o && (window.localStorage[this.name] = JSON.stringify(this.cache))
        }, refresh: f
    });
    var s = new a;

    function d(e, t, i) {
        var n = this;
        if (e) {
            n.remove(e);
            var a = (new Date).getTime(), r = {val: t, createdAt: a};
            c.id(i) && (r.expires = +i + a), n.cache[e] = r, n.reset()
        }
    }

    function h(e) {
        if (e) {
            var t = this.cache[e];
            if (t && c.id(t.expires)) +t.expires < (new Date).getTime() && (this.remove(e), t = null);
            return (t || {}).val
        }
    }

    function l(e) {
        var t = this, i = t.name;
        e ? (delete t.cache[e], t.reset()) : (o && window.localStorage.removeItem(i), r[i] = t.cache = {})
    }

    function f() {
        var e = this.name;
        this.cache = r[e] = o ? c.json((window.localStorage || {})[e], {}) : {}
    }

    c.extend(a, {
        prefix: "", isSupport: o, create: function u(e, t) {
            return new a(e, t)
        }, set: c.bind(d, s), get: c.bind(h, s), del: c.bind(l, s), remove: c.bind(l, s), refresh: c.bind(f, s)
    })
});
define("/nc/1.03.04/base/event", ["./base"], function (e, n, t) {
    var r = e("./base"), i = {};
    t.exports = {
        listen: function s(e, n) {
            if (!r.isString(e) || !r.isFunction(n)) return;
            var t = this.__getCep();
            !t[e] && (t[e] = []), t[e].push(n)
        }, listenCount: function u(e) {
            var n = this.__getCep();
            return e && n[e] ? (n[e] || []).length : 0
        }, one: function c(e, n) {
            var t = this;
            if (!r.isString(e) || !r.isFunction(n)) return;
            var i = function () {
                n.apply(t, arguments), t.unlisten(e, i)
            };
            t.listen(e, i)
        }, fire: function l(e) {
            var n = this, t = n.__getCep();
            if (!t[e]) return;
            var i = [].slice.call(arguments, 1);
            t[e] && r.forEach(t[e].slice(0), function (e) {
                e.apply(n, i)
            })
        }, unlisten: function f(e, n) {
            var t = this.__getCep();
            if (!e || !t[e]) return;
            if (1 === arguments.length) return t[e].length = 0, void delete t[e];
            for (var i = t[e].length - 1; 0 <= i; i--) t[e][i] === n && t[e].splice(i, 1);
            0 === t[e].length && delete t[e]
        }, unlistenAll: function o() {
            var t = this.__getCep();
            r.forEach(t, function (e, n) {
                delete t[n]
            })
        }, __getCep: function a() {
            var e = this;
            if (e === t.exports) return i;
            e.__cep || (e.__cep = {});
            return e.__cep
        }
    }
});
define("/nc/1.03.04/base/nav", ["./base", "./event"], function (t, e, i) {
    var s = t("./base"), n = t("./event"), r = /\((.*?)\)/g, a = /(\(\?)?:\w+/g, o = /\*\w+/g,
        c = /[\-{}\[\]+?.,\\\^$|#\s]/g, h = /^[#\/]|\s+$/g, u = /^\/+|\/+$/g, l = /#.*$/;

    function f(t) {
        var e = this;
        (t = t || {}).routes && (e.routes = t.routes), e._bindRoutes(), e.initialize.apply(e, arguments)
    }

    function p() {
        var t = this;
        t.handlers = [], t.checkUrl = s.bind(t.checkUrl, t), "undefined" != typeof window && (t.location = window.location, t.history = window.history)
    }

    p.started = !1, i.exports = {
        Util: {
            forbidBack: function d() {
                var e = "lock", n = !0, r = new (f.extend({
                    routes: {"": "nav", "/": "nav", "*error": "nav"}, nav: function () {
                        var t = (window.location.hash || "").trim().replace(/^#+/, "");
                        t !== e && (n && window.setTimeout(function () {
                            n = !1, r.navigate(e, {trigger: !0})
                        }, 500), !n && r.navigate(e, {trigger: !0}))
                    }
                }));
                i.exports.history.start(), r.navigate("wait", {trigger: !0})
            }
        }, Router: f, History: p
    }, s.extend(f.prototype, n, {
        initialize: function g() {
        }, route: function m(n, r, a) {
            var o = this;
            n = s.isRegExp(n) ? n : o._routeToRegExp(n), s.isFunction(r) && (a = r, r = "");
            return a = a || o[r], i.exports.history.route(n, function (t) {
                var e = o._extractParameters(n, t);
                !1 !== o.execute(a, e, r) && (o.fire.apply(o, ["route:" + r].concat(e)), o.fire("route", r, e), i.exports.history.fire("route", o, r, e))
            }), o
        }, execute: function v(t, e, n) {
            t && t.apply(this, e)
        }, navigate: function w(t, e) {
            return i.exports.history.navigate(t, e), this
        }, _bindRoutes: function _() {
            var t = this;
            if (!t.routes) return;
            t.routes = s.result(t, "routes");
            var e = s.keys(t.routes), n = e.pop();
            for (; null !== n && n !== undefined;) t.route(n, t.routes[n]), n = e.pop()
        }, _routeToRegExp: function y(t) {
            return t = t.replace(c, "\\$&").replace(r, "(?:$1)?").replace(a, function (t, e) {
                return e ? t : "([^/?]+)"
            }).replace(o, "([^?]*?)"), new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
        }, _extractParameters: function x(t, e) {
            var n = t.exec(e).slice(1), r = n.length - 1;
            return s.map(n, function (t, e) {
                return e === r ? t || null : t ? decodeURIComponent(t) : null
            })
        }
    }), s.extend(p.prototype, n, {
        interval: 50, atRoot: function H() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
        }, matchRoot: function S() {
            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
        }, decodeFragment: function P(t) {
            return decodeURI(t.replace(/%25/g, "%2525"))
        }, getSearch: function U() {
            var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return t ? t[0] : ""
        }, getHash: function C(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : ""
        }, getPath: function k() {
            var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === t.charAt(0) ? t.slice(1) : t
        }, getFragment: function R(t) {
            null !== t && t !== undefined || (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash());
            return t.replace(h, "")
        }, start: function b(t) {
            var e = this;
            if (p.started) return;
            if (p.started = !0, e.options = s.extend({root: "/"}, e.options, t), e.root = e.options.root, e._wantsHashChange = !1 !== e.options.hashChange, e._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || 7 < document.documentMode), e._useHashChange = e._wantsHashChange && e._hasHashChange, e._wantsPushState = !!e.options.pushState, e._hasPushState = !(!e.history || !e.history.pushState), e._usePushState = e._wantsPushState && e._hasPushState, e.fragment = e.getFragment(), e.root = ("/" + e.root + "/").replace(u, "/"), e._wantsHashChange && e._wantsPushState) {
                if (!e._hasPushState && !e.atRoot()) {
                    var n = e.root.slice(0, -1) || "/";
                    return e.location.replace(n + "#" + e.getPath()), !0
                }
                e._hasPushState && e.atRoot() && e.navigate(e.getHash(), {replace: !0})
            }
            if (!e._hasHashChange && e._wantsHashChange && !e._usePushState) {
                e.iframe = document.createElement("iframe"), e.iframe.src = "javascript:0", e.iframe.style.display = "none", e.iframe.tabIndex = -1;
                var r = document.body, a = r.insertBefore(e.iframe, r.firstChild).contentWindow;
                a.document.open(), a.document.close(), a.location.hash = "#" + e.fragment
            }
            var o = window.addEventListener || function (t, e) {
                return window.attachEvent("on" + t, e)
            };
            e._usePushState ? o("popstate", e.checkUrl, !1) : e._useHashChange && !e.iframe ? o("hashchange", e.checkUrl, !1) : e._wantsHashChange && (e._checkUrlInterval = setInterval(e.checkUrl, e.interval));
            if (!e.options.silent) return e.loadUrl()
        }, stop: function F() {
            var t = this, e = window.removeEventListener || function (t, e) {
                return window.detachEvent("on" + t, e)
            };
            t._usePushState ? e("popstate", t.checkUrl, !1) : t._useHashChange && !t.iframe && e("hashchange", t.checkUrl, !1);
            t.iframe && (document.body.removeChild(t.iframe), t.iframe = null);
            t._checkUrlInterval && clearInterval(t._checkUrlInterval);
            p.started = !1
        }, route: function $(t, e) {
            this.handlers.unshift({route: t, callback: e})
        }, checkUrl: function E() {
            var t = this, e = t.decodeFragment(t.getFragment());
            e === t.fragment && t.iframe && (e = t.getHash(t.iframe.contentWindow));
            if (e === t.fragment) return !1;
            t.iframe && t.navigate(e);
            t.loadUrl()
        }, loadUrl: function I(e) {
            return !!this.matchRoot() && (e = this.fragment = this.getFragment(e), s.some(this.handlers, function (t) {
                if (t.route.test(e)) return t.callback(e), !0
            }))
        }, navigate: function W(t, e) {
            var n = this;
            if (!p.started) return !1;
            e = e && !0 !== e ? e : {trigger: !!e}, t = n.getFragment(t || "");
            var r = n.root, a = (r = "" === t || "?" === t.charAt(0) ? r.slice(0, -1) || "/" : r) + t;
            if (t = n.decodeFragment(t.replace(l, "")), n.fragment === t) return;
            if (n.fragment = t, n._usePushState) n.history[e.replace ? "replaceState" : "pushState"]({}, document.title, a); else {
                if (!n._wantsHashChange) return n.location.assign(a);
                if (n._updateHash(n.location, t, e.replace), n.iframe && t !== n.getHash(n.iframe.contentWindow)) {
                    var o = n.iframe.contentWindow;
                    e.replace || (o.document.open(), o.document.close()), n._updateHash(o.location, t, e.replace)
                }
            }
            if (e.trigger) return n.loadUrl(t)
        }, _updateHash: function T(t, e, n) {
            if (n) {
                var r = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(r + "#" + e)
            } else t.hash = "#" + e
        }
    }), i.exports.history = new p, f.extend = p.extend = function (t, e) {
        var n = this, r = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return n.apply(this, arguments)
        };
        s.extend(r, n, e);
        var a = function () {
        };
        return a.prototype = n.prototype, r.prototype = new a, a.prototype = null, s.extend(r.prototype, t), (r.prototype.constructor = r).__super__ = n.prototype, r
    }
});
define("/nc/1.03.04/base/node", ["./clazz", "./base", "./str"], function (e, t, s) {
    var r = e("./clazz"), m = e("./base"), a = e("./str"), w = s.exports = r.create(), x = function (e) {
        return "scope."
    };

    function i() {
        var l = {};
        m.forEach(arguments, function (e) {
            var t = null;
            if (m.isString(e)) {
                t = {};
                for (var s, r = /\s*([\w\-]+)\s*:([^;]*)(;|$)/g; s = r.exec(e);) {
                    var i = a.trim(s[1]), n = a.trim(s[2]);
                    t[i] = n
                }
            } else m.isObject(e) && (t = e);
            m.extend(l, t)
        });
        var s = "";
        return m.forEach(l, function (e, t) {
            ("display" !== (t = t.replace(/[A-Z]/, function (e) {
                return "-" + e.toLowerCase()
            })) || "ignore" !== e) && (s += t + ":" + e + ";")
        }), s
    }

    function n(e) {
        if (e) {
            var t = m.isArray(e) ? e : e.split(/\s+/);
            return (t = m.uniq(t)).join(" ")
        }
        return ""
    }

    m.extend(w, {
        execTpl: function l(e, t) {
            var s = this, r = s._pool = s._pool || {}, e = m.isArray(e) ? e.join("") : e, i = r[e];
            i || (i = s.parseNode(e), r[e] = i);
            var n = "";
            return m.forEach(i, function (e) {
                n += e.render(t)
            }), n
        }, parseNode: function u(e) {
            e = e.replace(/\\/g, "\\\\");
            var t = this._split(e, /<[^<>]*>/g), a = [];
            return m.forEach(t, function (e) {
                if ("" !== e) {
                    var t, s = /<\s*\/\s*([\w-]+)>/.exec(e), r = s ? null : r = /<\s*([\w-]+)(\s*|\s+[^<>]+)>/.exec(e);
                    if (s) {
                        var i = s[1], n = function l(e, t) {
                            for (var s, r = []; 0 < e.length;) if (s = e.pop(), r.push(s), !s.isClose && s.tag === t) return r.reverse(), r;
                            return null
                        }(a, i);
                        if (!n || 0 === n.length) throw new Error("标签不匹配");
                        (t = n.shift()).children = n, t.isClose = !0, a.push(t)
                    } else t = new w(r ? {tag: r[1], attr: r[2]} : {text: e}), a.push(t)
                }
            }), a
        }, _split: function o(e, t) {
            var s = "_____node_____";
            return e.replace(t, function (e) {
                return s + e + s
            }).split(s)
        }
    }), m.extend(w.prototype, {
        initialize: function c(e) {
            var t = this;
            e = e || {}, t.tag = a.trim(e.tag), t.isText = !t.tag, t.text = t.isText && e.text || "", t.isSingle = /^(?:area|base|basefont|br|col|command|dialog|embed|hr|img|input|isindex|keygen|link|meta|param|source|track|wbr)$/gi.test(e.tag), t.isClose = t.isText || t.isSingle, t.initAttr(e.attr)
        }, initAttr: function f(e) {
            var t = this, s = {};
            if (!t.isText) for (var r, i = /\s+(?:([\w\-:]+)|(?:([\w\-:]+)=([^\s"'<>]+))|(?:([\w\-:"]+)="([^"]*)")|(?:([\w\-:"]+)='([^']*)'))(?=(?:\s|\/|>)+)/g, n = "<div " + e + ">"; r = i.exec(n);) {
                var l = (r[1] || r[2] || r[4] || r[6]).toLowerCase(), a = (r[2] ? r[3] : r[4] ? r[5] : r[7]) || "",
                    u = 0 === l.indexOf(":"), o = u ? l.slice(1) : l;
                (o in s || ":" + o in s) && t.error("重复定义的属性值：" + o + "\n" + e), s[l] = a || "v-else" === l
            }
            t.attr = s
        }, getStyle: i, getClass: n, render: function p(e) {
            return this.getFunc()(e, {getStyle: i, getClass: n})
        }, getFunc: function y(r) {
            var i = this, e = i.attr, n = [], l = r || null;
            if (i._fFunc) return i._fFunc;
            if (n.push('var __sHtml = "";'), i.isText) {
                var t = w._split(i.text || "", /(#{[^}]*})/g);
                m.forEach(t, function (e) {
                    if ("" !== e) {
                        var t = /#{([^}]*)}/.exec(e);
                        t ? n.push("__sTemp = (" + d(t[1]) + ')(scope, util);\n__sHtml += __sTemp === undefined || __sTemp === null ? "" : __sTemp') : n.push('__sHtml += "' + e + '";')
                    }
                })
            } else {
                var s = e["v-for"], a = "";
                if (s) {
                    var u = /^([A-Za-z_$\w$\s\(\)\,]+)\s+in\s+([A-Za-z_$][\w\.$]*)$/.exec(s);
                    !u && i.error("错误的v-for语法");
                    var o = /\(?([A-Za-z_$][\w$]*)\s*,?\s*([A-Za-z_$][\w\.$]*)?\)?/.exec(u[1]), c = o[1] || "",
                        f = o[2] || "", p = u[2], _ = (l || x)(p);
                    n.push("(function () {"), n.push("for (var i = 0; i < (" + _ + p + " || []).length; i++) {"), n.push("(function (scope" + (f ? ", " + f : "") + ") {"), n.push("var " + c + " = " + _ + p + "[i];"), a = "})(scope, i)\n}\n})()", l = function (e) {
                        var t = e.split(".")[0].split("[")[0], s = t === c || f && t === f;
                        return s ? "" : r ? r(e) : "scope."
                    }
                }
                e["v-if"] && n.push("if ((" + d(e["v-if"]) + ")(scope, util)) {"), n.push('__sHtml += "<' + i.tag + '";');
                var v = {"v-if": 1, "v-else-if": 1, "v-else": 1, "v-for": 1};
                n.push('var __sStyle = ""; var __oStyle = ""; var __sCls = "";');
                if (m.forEach(e, function (e, t) {
                    v[t] || ("class" === t ? n.push('__sCls = "' + e + '";') : ":class" === t ? n.push("__sCls = (" + d(e) + ")(scope, util);") : "style" === t ? n.push('__oStyle = "' + e + '";') : ":style" === t ? n.push("__oStyle = (" + d(e) + ")(scope, util);") : "v-show" === t ? n.push("__sStyle += !!(" + d(e) + ')(scope, util) ? "display:ignore" : "display:none;";') : 0 === t.indexOf(":") ? (t = t.slice(1), e = "(" + d(e) + ")(scope, util)", n.push('__sHtml += " ' + t + '=\\"" + ' + e + ' + "\\"";')) : n.push('__sHtml += " ' + t + '=\\"' + e + '\\"";'))
                }), n.push('__sHtml += !__sCls ? "" : " class=\\"" + util.getClass(__sCls) + "\\"";'), n.push('__sHtml += !__oStyle && !__sStyle ? "" : " style=\\"" + util.getStyle(__oStyle, __sStyle) + "\\"";'), n.push('__sHtml += "' + (i.isSingle ? "/>" : ">") + '";'), !i.isSingle) {
                    var h = "";
                    m.forEach(i.children, function (e) {
                        var t = e.attr, s = !t["v-for"] && t["v-if"] || t["v-else-if"] || t["v-else"];
                        !t["v-for"] && t["v-if"] ? n.push("if ((" + d(t["v-if"]) + ")(scope, util)) {") : t["v-else-if"] ? ("if" !== h && "else-if" !== h && i.error("v-else-if需要在v-if或者v-else-if后面"), n.push("else if ((" + d(t["v-else-if"]) + ")(scope, util)) {")) : t["v-else"] && ("if" !== h && "else-if" !== h && i.error("v-else需要在v-if或者v-else-if后面"), n.push("else {")), h = t["v-if"] ? "if" : t["v-else-if"] ? "else-if" : t["else"] ? "else" : "", n.push("__sHtml += (" + e.getFunc(l).toString() + ")(scope, util);"), s && n.push("}")
                    }), n.push('__sHtml += "</' + i.tag + '>"')
                }
                e["v-if"] && n.push("}"), a && n.push(a)
            }
            n.push("return __sHtml;");
            var g = n.join("\n");
            return i._fFunc = new Function("scope", "util", g), i._fFunc;

            function d(e) {
                return i.parseExp(e, l).toString()
            }
        }, parseExp: function _(e, t) {
            t = t || x, e = a.trim(e);
            var s = this.isSimplePath(e) && e.indexOf("[") < 0 ? t(e) + e : this.makeGetterBody(e, t);
            return this.makeGetterFn(s)
        }, makeGetterBody: function v(e, r) {
            var i = /\n/g, n = /"(\d+)"/g,
                l = new RegExp("^(" + "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat".replace(/,/g, "\\b|") + "\\b)"),
                a = [],
                t = e.replace(/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g, function (e, t) {
                    var s = a.length;
                    return a[s] = t ? e.replace(i, "\\n") : e, '"' + s + '"'
                }).replace(/\s/g, "");
            return r = r || x, t = (" " + t).replace(/[^\w$\.](?:[A-Za-z_$][\w$]*)/g, function (e) {
                var t = e.charAt(0), s = e.slice(1);
                return l.test(s) ? e : (s = -1 < s.indexOf('"') ? s.replace(n, u) : s, t + r(s) + s)
            }).replace(n, u);

            function u(e, t) {
                return a[t]
            }
        }, makeGetterFn: function h(e) {
            try {
                return new Function("scope", "return " + e + ";")
            } catch (t) {
                return function () {
                }
            }
        }, isSimplePath: function g(e) {
            return /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/.test(e) && !/^(?:true|false|null|undefined|Infinity|NaN)$/.test(e) && "Math." !== e.slice(0, 5)
        }, error: function d(e) {
            throw new Error(e)
        }
    })
});
define("/nc/1.03.04/base/num", ["./base", "./str"], function (r, n, e) {
    var c = r("./base"), u = r("./str");
    e.exports = {
        random: function t(r, n) {
            return Math.floor(Math.random() * (n - r + 1) + r)
        }, randomSeed: function o(t, r) {
            var n = [], e = {};
            r = Math.max(r, 1);
            for (; n.length < r;) {
                var a = Math.round(u(0, r - 1)), i = a + "";
                e[i] || (n.push(a), e[i] = 1)
            }
            return n;

            function u(r, n) {
                var e = (t = (9301 * t + 49297) % 233280) / 233280;
                return r + e * (n - r)
            }
        }, byte2Size: function h(r, n, e) {
            if ((r = +r || 0) < 0) return "0MB";
            n = n || 2;
            var t, a = Math.pow(10, n), i = ["B", "KB", "MB", "GB", "TB", "PB", "EB"], u = c.map(i, function (r, n) {
                return Math.pow(1024, n)
            }), o = "";
            if (0 === r) o = "0" + (e || i[0]); else for (var f = 0, l = u.length; f < l; f++) {
                t = u[f];
                var n = r / t;
                if (e === i[f] || !e && n < 1024 || f + 1 === u.length) {
                    o = Math.round(n * a) / a + i[f];
                    break
                }
            }
            return o
        }, form: function a(r) {
            return c.isNumber(r) ? r < 10 ? "0" + r : r + "" : ""
        }, fix: function f(r, n) {
            if (c.isString(r) || c.isNumber(r)) {
                if (!(r = u.trim(r))) return "";
                if (n) return r.replace(/[^\d]/gi, "").replace(/^0+/, "");
                r = ("0" + r).replace(/[^\d\.]/gi, "");
                var e = c.filter(r.split("."), function (r) {
                    return r
                }), t = 1 < e.length;
                if (r = e.join(""), t) {
                    var a = e[e.length - 1];
                    e.pop();
                    var i = e.join("").replace(/^0+/, "");
                    i = (0 === i.length ? "0" : "") + i, r = i + "." + a
                } else r = r.replace(/^0+/, "");
                return "0" === r ? "" : r
            }
            return ""
        }, page: function i(r, n) {
            return Math.floor((r - 1) / n) + 1
        }
    }
});
define("/nc/1.03.04/base/str", ["./base"], function (t, r, e) {
    var u = t("./base"),
        n = ["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&yen;", "¥", "&ldquo;", "“", "&rdquo;", "”", "&amp;", "&"],
        g = n.slice(0).reverse();
    e.exports = {
        trim: function i(t, r) {
            if ("" === (t = this.str(t))) return "";
            if (window.String.prototype.trim && !r) return window.String.prototype.trim.call(t);
            var e = r ? /(?:^[\s\t\n\r]+)|(?:[\s\t\n\r]+$)/g : /^\s+|\s+$/g;
            return t.replace(e, "")
        }, execTpl: function s(t, a, e) {
            var c = this;
            if (!t) return "";
            a = a || {};
            var r = t.replace(/#{{(.*?)}}/g, function (t, r) {
                return n(t, r, !0)
            });
            return r = r.replace(/#{(.*?)}/g, function (t, r) {
                return n(t, r, e)
            });

            function n(t, r, e) {
                var n = r.split("||"), i = n[1] ? c.trim(n[1]) : "", s = function o(t) {
                    if (t.indexOf(".") < 0) return a[t];
                    for (var r = t.split("."), e = a, n = 0, i = r.length; n < i; n++) r[n] && (e = (e || {})[r[n]]);
                    return e
                }(r = c.trim(n[0]));
                if (s === undefined || null === s) s = i; else if (s = s + "" || i, e) for (var u = 0, f = g.length; u < f; u += 2) " " !== g[u] && (s = s.replace(new RegExp(g[u], "g"), g[u + 1]));
                return s
            }
        }, encodeHTML: function f(t) {
            t = this.str(t);
            for (var r = 0, e = g.length; r < e; r += 2) t = t.replace(new RegExp(g[r], "g"), g[r + 1]);
            return t
        }, decodeHTML: function o(t) {
            t = this.str(t);
            for (var r = 0, e = n.length; r < e; r += 2) t = t.replace(new RegExp(n[r], "g"), n[r + 1]);
            return t
        }, isEmail: function a(t) {
            return !!(t && u.isString(t) && /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t))
        }, isPhone: function c(t) {
            return !!((t = this.str(t)) && u.isString(t) && /^[\d-]+$/g.test(t) && 11 === t.length)
        }, isTel: function l(t) {
            return !!((t = this.str(t)) && u.isString(t) && /^[\d\(\)\+-]+$/.test(t))
        }, isIdentity: function h(t) {
            if (!t || !/^\d{17}\w$|^\d{14}\w$/gi.test(t)) return !1;
            var r = t.substr(6, 15 === t.length ? 6 : 8), e = +(r = (6 === r.length ? "00" : "") + r).substr(4, 2) || 0,
                n = +r.substr(6, 2) || 0;
            return !!(0 < e && e <= 12 && 0 < n && n <= [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e])
        }, isPassport: function p(t) {
            return t && /^(\d|\w|\(|\)|\（|\）)+$/.test(t)
        }, isJsHref: function d(t) {
            if (!(t = this.trim(t))) return !1;
            if (/^javascript:/gi.test(t) || /^#+$/.test(t)) return !0;
            var r = window.location.href, e = document.createElement("A");
            e.href = t;
            var n = e.href.split("#"), i = r.split("#");
            return n[0] === i[0] && n[1] === i[1]
        }, isHttps: function v(t) {
            if (!(t = this.trim(t || ""))) return !1;
            if (!/^http:/.test(t) && !/^https:/.test(t)) {
                var r = document.createElement("A");
                r.href = t, t = r.href
            }
            return /^https:/.test(t)
        }, split: function w(t, r) {
            var e = this, n = e.searchRegExp(r), i = e.str(t).split(n), s = [];
            return u.forEach(i, function (t) {
                (t = e.trim(t)) && s.push(t)
            }), s
        }, getTagAttr: function m(t) {
            t = this.trim(t);
            var r, e, n = {},
                i = /\s+(?:([\w\-:]+)|(?:([\w\-:]+)=([^\s"'<>]+))|(?:([\w\-:"]+)="([^"]*)")|(?:([\w\-:"]+)='([^']*)'))(?=(?:\s|\/|>)+)/g;
            for (; r = i.exec(t);) e = (r[1] || r[2] || r[4] || r[6]).toLowerCase(), n[e] = (r[2] ? r[3] : r[4] ? r[5] : r[7]) || "";
            return n
        }, len: function x(t, r) {
            for (var e = 0, n = 0, i = t.length; n < i; n++) e += 255 < t.charCodeAt(n) && !r ? 2 : 1;
            return e
        }, left: function E(t, r, e) {
            if ("" === (t = this.str(t))) return "";
            if (!r && 0 !== r || this.len(t) <= r) return t;
            var n = 0, i = 0;
            r -= e = !1 === e ? 0 : +e || 3;
            for (; i < r;) i += 255 < t.charCodeAt(n) ? 2 : 1, n++;
            return t = t.substring(0, n) + new Array(e + 1).join(".")
        }, searchRegExp: function A(t) {
            var r = this.trim(t);
            if (!r) {
                var e = t.length;
                return 0 === e ? /(?:)/gi : 1 === e ? /\s/gi : new RegExp("\\s{" + e + "}", "gi")
            }
            for (var n, i = "", s = 0, u = r.length; s < u; s++) n = r.charAt(s).replace("\\", "\\\\").replace(new RegExp("[$ ( [ { ^ | ) ? * + .]", "gi"), function (t) {
                return "\\" + t
            }), i += n + (s + 1 === u ? "" : ".*?");
            return new RegExp(i, "gi")
        }, str: function $(t) {
            return t === undefined || null === t ? "" : t + ""
        }
    }
});
define("/nc/1.03.04/base/tick", ["./base", "./clazz", "./time", "./num", "./str", "./event"], function (t, n, i) {
    var s = t("./base"), e = t("./clazz"), a = t("./time"), r = t("./num"), o = t("./event"),
        f = i.exports = e.create();

    function c(t, n) {
        return n ? t + "" : r.form(Math.floor(t / 60)) + ":" + r.form(Math.floor(t % 60))
    }

    s.extend(f, {
        list: [], create: function u(t, n) {
            0 === arguments.length && (n = {});
            s.isObject(t) && (n = t, t = "");
            n.id = t;
            var i = this.list, e = new f(n);
            return i.push(e), e.start(), e
        }, clear: function l(i) {
            var e = this.list;
            0 === arguments.length ? (s.forReverse(e, function (t) {
                t && t.stop()
            }), this.list.length = 0) : s.forReverse(e, function (t, n) {
                t && t.id === i && (t.stop(), e.splice(n, 1))
            })
        }, fix: c, m2s: function d(t) {
            return Math.round((+t || 0) / 1e3)
        }
    }), s.extend(f.prototype, o, {
        initialize: function h(t) {
            var n = this;
            n.rawConfig = t || {}, n.initData(n.rawConfig)
        }, initData: function v(t) {
            var n = this, i = n.isUp = !t.isDown;
            n.id = n.id || t.id || s.key(), n.key = s.key(), n.second = +t.second || (i ? Infinity : 0), n.left = i ? 0 : n.second, n.isRuning = !1, n.isEnd = !1
        }, val: function p() {
            var t = this, n = t.isUp, i = t.second, e = t.left, s = Math.max(i - e, 0);
            return {duration: i, use: n ? e : s, left: n ? s : e}
        }, start: function g() {
            var e = this;
            if (e.isRuning || e.isEnd) return;
            var s = e.rawConfig, r = e.key, t = e.isUp;
            e.isRuning = !0, a.countDown({
                isDown: !t,
                isMs: s.isMs,
                duration: s.duration,
                second: t ? e.second : e.left,
                start: t ? e.left : 0,
                fix: s.fix,
                call: function (t) {
                    var n = r !== e.key;
                    return n || (e.left = t, s.call && s.call.call(e, t), e.fire("call", t)), n
                },
                end: function (t, n, i) {
                    r === e.key && (e.isEnd = e.isEnd || n, s.end && s.end.call(e), e.fire("end"))
                }
            })
        }, stop: function y() {
            this.initData(this.rawConfig)
        }, pause: function k() {
            this.key = s.key(), this.isRuning = !1
        }, restart: function m() {
            this.stop(), this.start()
        }, fix: c
    })
});
define("/nc/1.03.04/base/time", ["./base", "./num", "./str"], function (t, e, r) {
    t("./base");
    var u = t("./num"), s = t("./str");
    r.exports = {
        waitUtil: function f(t) {
            var e = t.condition, r = t.call, n = t.error, i = t.times, u = t.duration || 250;
            if (e()) return r && r();
            var a = 0;
            setTimeout(function o() {
                if (e()) return r && r();
                a++;
                var t = !i || a < i;
                t && setTimeout(o, u);
                !t && n && n()
            }, u)
        }, frequency: function a(n, t) {
            var i = t ? (new Date).getTime() : 0, u = null;
            return n = +n || 0, function (e) {
                if (0 === n) return e && e(0, e);
                u && clearTimeout(u), u = null;
                var t = (new Date).getTime();
                if (0 === i || n + i < t) {
                    var r = i;
                    return i = t, void(e && e(0 === r ? 0 : i - r, e))
                }
                u = setTimeout(function () {
                    var t = i;
                    i = (new Date).getTime(), e && e(i - t, e)
                }, Math.max(0, n + i - t))
            }
        }, timeout: function n(e) {
            var r;
            return e = +e || 0, function (t) {
                clearTimeout(r), r = setTimeout(t, e)
            }
        }, countDown: function d(i) {
            var u = !!i.isMs, a = !1 === i.isDown, o = u ? 1 : 1e3, s = a ? (+i.second || Infinity) * o : 0,
                f = a ? +(i.start || 0) * o : (+i.second || 0) * o, t = (+i.duration || (u ? 1e3 : 1)) * o,
                c = this.frequency(t), g = -1, l = !1;
            c(function (t, e) {
                f += (a ? 1 : -1) * t, g++;
                var r = a ? s <= f : f <= 0, n = Math.max(0, u ? f : Math.round(f / 1e3));
                i.call && (l = !0 === i.call(n)), i.fix && i.fix(g, function (t) {
                    f = (+t || 0) * o
                }), (r || l) && i.end && i.end(n, r, l), !r && !l && c(e)
            })
        }, form: function i(t, e) {
            var r = {
                yyyy: t.getFullYear(),
                yy: (t.getFullYear() + "").slice(-2),
                MM: u.form(t.getMonth() + 1),
                M: t.getMonth() + 1,
                dd: u.form(t.getDate()),
                d: t.getDate(),
                HH: u.form(t.getHours()),
                H: t.getHours(),
                hh: u.form(12 < t.getHours() ? t.getHours() - 12 : t.getHours()),
                h: 12 < t.getHours() ? t.getHours() - 12 : t.getHours(),
                mm: u.form(t.getMinutes()),
                m: t.getMinutes(),
                ss: u.form(t.getSeconds()),
                s: t.getSeconds() + "",
                w: this.getWeek(t)
            };
            return (e || "yyyy-MM-dd HH:mm:ss").replace(/y+|m+|d+|h+|s+|H+|M+|w+/g, function (t) {
                return r[t] || t
            })
        }, relate: function o(t, e) {
            var r = new Date, n = new Date(r.getTime() - 864e5), i = (e = e || "yyyy-MM-dd HH:mm:ss").split(" ")[1];
            {
                if (u(t, r)) return "今天" + (i ? " " + this.form(t, i) : "");
                if (u(t, n)) return "昨天" + (i ? " " + this.form(t, i) : "")
            }
            return this.form(t, e);

            function u(t, e) {
                return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
            }
        }, second: function c(t) {
            t = Math.round(Math.max(+t || 0, 0));
            var e = this.second2data(t), r = u.form(e.hour) + ":" + u.form(e.min) + ":" + u.form(e.second);
            return 0 < e.day && (r = e.day + "天" + r), r
        }, second2data: function g(t) {
            return t = Math.round(+t || 0), {
                day: Math.floor(t / 86400),
                hour: Math.floor(t / 3600) % 24,
                min: Math.floor(t / 60) % 60,
                second: t % 60
            }
        }, getWeek: function l(t, e) {
            var r = t.getDay();
            return e && (r = (r + e % 7 + 7) % 7), ["日", "一", "二", "三", "四", "五", "六"][r]
        }, fixDate: function m(t) {
            t = s.trim(t).replace(/\s/gi, "-").replace(/\./gi, "-").replace(/-+/gi, "-"), /^\d{4}$/.test(t) ? t += "-01-01" : /^\d{4}-\d+$/.test(t) && (t += "-01");
            if (/^\d{4}-\d+-\d+$/.test(t)) {
                var e = t.split("-"), r = +e[0], n = +e[1], i = +e[2];
                n = n <= 0 ? 1 : 12 < n ? 12 : n, i = this.fixDay(r, n, i), t = [r, u.form(n), u.form(i)].join("-")
            }
            return t
        }, fixTime: function h(t) {
            t = s.trim(t).replace(/\s+/gi, ":").replace(/：/gi, ":"), /^\d+$/.test(t) ? t += ":00:00" : /^\d+:\d+$/.test(t) && (t += ":00");
            if (/^\d+:\d+:\d+$/.test(t)) {
                var e = t.split(":"), r = +e[0], n = +e[1], i = +e[2],
                    u = r <= 0 || 24 <= r ? "00" : r < 10 ? "0" + r : r + "",
                    a = n <= 0 || 60 <= n ? "00" : n < 10 ? "0" + n : n + "",
                    o = i <= 0 || 60 <= i ? "00" : i < 10 ? "0" + i : i + "";
                t = [u, a, o].join(":")
            }
            return t
        }, fixDay: function y(t, e, r) {
            if ((r = +r || 1) <= 0) return 1;
            var n = this.getDayCount(t, e);
            return n < r ? n : r <= 0 ? 1 : r
        }, getDayCount: function v(t, e) {
            var e = +e || 0;
            return (t = +t || 0) && e && [0, 31, this.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e] || 0
        }, isLeapYear: function D(t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        }, isSameDate: function M(t, e) {
            return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
        }, checkDate: function p(t) {
            if (/^\d{4}-\d+-\d+$/.test(t = t || "")) {
                var e = t.split("-"), r = +e[0], n = +e[1], i = +e[2];
                return 1 <= n && n <= 12 && i === this.fixDay(r, n, i)
            }
            return !1
        }, checkTime: function H(t) {
            if (/^\d+:\d+:\d+$/.test(t = t || "")) {
                var e = t.split(":"), r = +e[0], n = +e[1], i = +e[2];
                return 0 <= r && r < 24 && 0 <= n && n < 60 && 0 <= i && i < 60
            }
            return !1
        }, checkDateTime: function T(t, e, r, n, i, u) {
            t = +t || 0, e = +e || 0, r = +r || 0, n = +n || 0, i = +i || 0, u = +u || 0;
            var a = this.getDayCount(t, e);
            if (e < 1 || 12 < e || r < 1 || a < r || n < 0 || 24 <= n || i < 0 || 60 <= i || u < 0 || 60 <= u) return !1;
            return !0
        }, getDateItem: function w(t, e, r) {
            var n = [];
            if (e = (+e || 0) - 1, !(t = +t || 0) || e < 0 || 11 < e) return n;
            r = r = (r = +r || 0) < 0 || 6 < r ? 0 : r;
            for (var i = this.getDayCount(t, e + 1), u = !1, a = 1, o = new Array((7 - r) % 7), s = 0; s < 7 && !(u || i < a); s++) for (var f = 0; f < 7; f++) {
                var c = new Date(t, e, a), g = c.getMonth() === e, l = c.getDay() === f;
                u = !g, (g || 0 !== f) && (o.push(g && l ? a : null), g && l && a++)
            }
            for (var d = !0, m = null, h = [], s = 0, y = 7 * Math.ceil(o.length / 7); s < y; s++) m = +o[s] || null, d = d && null === m, h.push(m), 7 === h.length && (!d && n.push(h), h = [], d = !0);
            return n
        }
    }
});
define("/nc/1.03.04/base/uri", ["./base", "./str"], function (n, t, r) {
    var u = n("./base"), o = n("./str");
    r.exports = {
        addParam: function c(n, t, r) {
            t = t || window.location.href;
            var e = this, i = t.split("#"), a = i[0];
            u.isString(n) && (n = e.getParams(n));
            var o = e.getParams(a);
            n = u.extend({}, r ? n : o, r ? o : n);
            var s = e.getQuery(n);
            return a = a.split("?")[0] + "?" + s.replace(/&+/g, "&"), i[0] = a, i.join("#")
        }, getParams: function e(n) {
            var t = (n = (n || window.location.href).split("#")[0]).split("?"), i = {};
            return u.forEach(t, function (n) {
                var t = n ? n.split("&") : [];
                u.forEach(t, function (n) {
                    var t = /([^=]+)=([^=]*)/.exec(n);
                    if (t) {
                        var r = t[1], e = window.decodeURIComponent(t[2]);
                        r in i ? (u.isArray(i[r]) || (i[r] = [i[r]]), i[r].push(e)) : i[r] = e
                    }
                })
            }), i
        }, getParam: function i(n, t) {
            return n && this.getParams(t)[n] || null
        }, removeParam: function s(n, t) {
            t = t || window.location.href;
            var r = o.split(n, ",");
            if (0 === r.length) return t;
            var e = this.getParams(t);
            u.forEach(r, function (n) {
                delete e[n]
            });
            var i = t.split("#"), a = this.addParam(e, i[0].split("?")[0]);
            return i[0] = a, i.join("#")
        }, getQuery: function a(n) {
            var i = [];
            return u.forEach(n, function (n, t) {
                var r = function e(t, n) {
                    if (u.isArray(n)) {
                        var r = u.map(u.filter(n, function (n) {
                            return n !== undefined && null !== n
                        }), function (n) {
                            return t + "=" + window.encodeURIComponent(n)
                        });
                        return 0 === r.length ? "" : r.join("&")
                    }
                    return n === undefined || null === n ? "" : t + "=" + window.encodeURIComponent(n)
                }(t, n);
                r && i.push(r)
            }), i.join("&")
        }, hash: function f(n) {
            {
                if (0 === arguments.length) {
                    window.location.hash;
                    return (window.location.hash || "").replace(/^#+/, "")
                }
                window.location.hash = (n || "").replace(/^#+/, "")
            }
        }, isHttps: function l(n) {
            return n = n || window.location.href, /^https:/.test(n) || /^wss:/.test(n)
        }
    }
});
define("/nc/1.03.04/base/ws", ["./base", "./clazz", "./event"], function (e, n, t) {
    var c = e("./base"), o = e("./clazz"), i = e("./event"), r = t.exports = o.create(), s = !!window.WebSocket;
    c.extend(r, {isSupport: s}), c.extend(r.prototype, i, {
        initialize: function a(e) {
            var t = this;
            t.rawConfig = e || {}, t.url = e.url || "", 0 === (window.location.protocol || "").indexOf("https") && (t.url = "wss://" + t.url.replace(/^wss?:\/\//, ""));
            c.forEach(e.listeners, function (e, n) {
                n && e && t.listen(n, e)
            }), t.sendData = [], t.needReConnect = !0, t.connectCount = 0
        }, connect: function u() {
            var t = this;
            if (window.clearTimeout(t.connectTimer), !s) return;
            var e = t.getStatus();
            if (1 === e || 0 === e) return;
            var n = t.socket = new window.WebSocket(t.url);
            n.onopen = function () {
                t.needReConnect = !1, t.fire("open")
            }, n.onmessage = function (e) {
                t.needReConnect = !1;
                var n = c.json(e.data || {});
                t.fire("message", n, e)
            }, n.onerror = function (e) {
                if (t.needReConnect = t.needReConnect && t.connectCount < 10, t.needReConnect) return t.connectCount++, window.clearTimeout(t.connectTimer), void(t.connectTimer = window.setTimeout(c.bind(t.connect, t), 250));
                t.fire("error", e)
            }, n.onclose = function () {
                t.fire("close")
            }
        }, close: function d() {
            var e = this;
            try {
                e.socket && e.socket.close && e.socket.close()
            } catch (n) {
            }
            window.clearTimeout(e.connectTimer), window.clearTimeout(e.sendTimer), e.socket = null
        }, send: function l(e) {
            var t = this, o = t.sendData;
            c.isObject(e) && (e = window.JSON.stringify(e));
            if (!s || !t.socket || !c.isString(e)) return;
            var n = t.getStatus();
            1 === n ? (i(), e && t.socket.send(e)) : 0 === n && (e && o.push(e), window.clearTimeout(t.sendTimer), t.sendTimer = window.setTimeout(function () {
                i(), t.socket && 0 < o.length && (t.sendTimer = window.setTimeout(arguments.callee, 100))
            }, 100));

            function i() {
                var e = t.getStatus();
                if (1 === e && 0 < o.length) {
                    var n = t.socket;
                    c.forEach(o, function (e) {
                        n.send(e)
                    }), o.length = 0
                }
            }
        }, getStatus: function f() {
            return this.socket ? this.socket.readyState : -1
        }, clearSendList: function w() {
            this.sendData.length = 0
        }
    })
});
define("/nc/1.03.04/extend/ajax", ["../base/base", "../base/str", "../base/uri", "../lib/jquery"], function (e, r, a) {
    var l = e("../base/base"), n = e("../base/str"), o = e("../base/uri"), t = e("../lib/jquery");
    a.exports = {
        requestIdMap: {}, request: function i(s) {
            var u = this, d = u._getRequestId(s.methodName, !0), e = s.url, r = s.dataType || "text", c = "jsonp" === r,
                a = u.getRequestType(s);
            return s.params && (e = n.execTpl(e, s.params)), s.query && (e = o.addParam(s.query, e)), (s.$ || t).ajax(e, {
                type: a,
                timeout: s.timeout || 2e4,
                cache: !!s.cache,
                data: o.getQuery(s.body),
                dataType: r,
                contentType: s.contentType || ("POST" === a ? "application/x-www-form-urlencoded; charset=UTF-8" : "") || undefined,
                async: !s.sync,
                jsonp: c ? s.jsonp || "cb" : "",
                jsonpCallback: s.jsonpCallback,
                xhrFields: {withCredentials: !0},
                error: function (e, r, a) {
                    l.out("Ajax请求发送失败" + a)
                },
                beforeSend: function (e) {
                    e.withCredentials = !0, s.beforeSend && s.beforeSend(e)
                },
                complete: s.complete
            }).then(function (e, r, a) {
                var t = c ? e : {};
                if (!(c || (e = window.decodeURIComponent(window.encodeURIComponent(e || "").replace(/(%1A)/g, "")).replace(/\r\n/g, "\n"), t = l.json(e)))) {
                    var n = "Ajax 数据解析失败: " + e;
                    return l.out(n), s.error && s.error({code: -1, msg: n})
                }
                u._dealResult(t, d, s);
                var o = 0 != +t.code ? "error" : "call";
                !1 !== (!s.callCode || s.callCode(t, a)) && s[o] && s[o](t, a), s.always && s.always()
            }, function (e, r, a) {
                var t = l.json(e.responseText, {msg: "网络异常，请稍后重试"});
                u._dealResult(t, d, s), !1 !== (!s.callCode || s.callCode(t, e)) && s.error && s.error(t, e), s.always && s.always()
            })
        }, getRequestType: function s(e) {
            return e.type || (e.query && !e.body ? "GET" : "POST")
        }, getConfParam: function u(e, r, a) {
            return (e = e || {}).methodName = a, e.url = r, e
        }, getConfUrl: function d(e, r, a) {
            var t = (e = e || {}).params ? n.execTpl(r, e.params) : r;
            return e.query && (t = o.addParam(e.query, t)), t
        }, _dealResult: function c(e, r, a) {
            var t = this._getRequestId(a.methodName), n = e.code;
            return e.request = {
                id: r,
                currentId: t
            }, e.isOrder = r === t, e.msg = e.msg || (0 !== n ? "出现错误，请稍后重试" : ""), 0 !== n && l.out("ajax后端验证错误:" + e.msg), e
        }, _getRequestId: function p(e, r) {
            var a = 0;
            e && (a = this.requestIdMap[e] || 0, r && (a++, this.requestIdMap[e] = a));
            return a
        }
    }
});
define("/nc/1.03.04/extend/component", ["../lib/jquery", "../base/base", "../base/clazz", "../base/str", "../base/event"], function (e, t, n) {
    var l = e("../lib/jquery"), c = e("../base/base"), i = e("../base/clazz"), o = e("../base/str"),
        r = e("../base/event"), s = window.Vue, a = n.exports = i.create(), d = [];
    c.extend(a, {
        xtype: "component", _template: '<div class=""></div>', getItem: function u(e) {
            var e = (l(e).get(0) || {}).id;
            if (c.isString(e)) return a._items[e]
        }, html: function f(e) {
            return new this(e).html()
        }, setEvents: function h() {
            var e, t = a._queue, n = [];
            for (; t.length;) {
                var i = (e = t.shift()).$el || l("#" + e.domId);
                i && 0 !== i.length && 0 !== i.parent().length ? (e._setDomEventListeners(), e.fire("render")) : n.push(e)
            }
            c.forEach(n, function (e) {
                t.push(e)
            })
        }, transform: function v(e, t) {
            e = l(e);
            t && (t.$bind || t.$event || t.listeners) || (t = {listeners: t});
            var n = c.extend({
                placeholder: e.attr("placeholder"),
                domId: e.attr("id"),
                $bind: t.$bind,
                $event: t.$event,
                listeners: t.listeners
            }, this.transformConf(e)), i = new this(n);
            return e.attr("id", i.domId), i.$el = e, i.el = e.get(0), i._setDomEventListeners(), i.fire("render"), i
        }, recycle: function m(e, t) {
            e = l(e);
            var n = c.map(e.find("[id]"), function (e) {
                return l(e).attr("id")
            });
            (t = !1 !== t) && n.push(l(e).attr("id")), c.forEach(n, function (e) {
                var t = (e = l.trim(e)) ? a._items[e] : null;
                t && t.destroy()
            }), t ? e.remove() : e.html("")
        }, transformConf: function p(e) {
            return {}
        }, hideOverflow: function _(e) {
            var t = l(document.body), n = +t.attr("data-of-count") || 0;
            n += !1 === e ? -1 : 1, t.attr("data-of-count", n), !1 === e ? n <= 0 && (t.hasClass("nk-body") && t.removeClass("nk-body"), t.removeAttr("data-of-count")) : !t.hasClass("nk-body") && t.addClass("nk-body")
        }, mixinVue: function b() {
            if (this._mixedVue || !s) return;
            this._mixedVue = !0, s.use({
                install: function (e) {
                    e.prototype.$ncPushChild = function (e) {
                        !this._$ncSubCpn && (this._$ncSubCpn = []), e && this._$ncSubCpn.push(e)
                    }, e.mixin({
                        mounted: function () {
                            d.push(this)
                        }, destroyed: function () {
                            var n = this;
                            c.forReverse(d, function (e, t) {
                                e === n && d.splice(t, 1)
                            }), c.forEach(n._$ncSubCpn, function (e) {
                                e && (e.$destroy ? e.$destroy() : e.destroy && e.destroy())
                            }), n._$ncSubCpn && (n._$ncSubCpn.length = 0), a.recycle(this.$el, !0)
                        }
                    })
                }
            })
        }, _index: 0, _items: {}, _queue: [], _onInherit: function y(e) {
            e._items = {}, e._index = 0
        }
    }), c.extend(a.prototype, r, {
        initialize: function $(e) {
            e = e || {};
            var t = this, n = t.constructor;
            n.xtype = n.xtype || c.key(), t.rawConfig = e, t.hidden = !0, t.domId = e.domId || ["jsCpn", a._index++, n.xtype, n._index++].join("_"), t._index = a._index, t._data = {
                status: {},
                child: [],
                unbindDom: []
            }, t._setCustomEventListeners(), a._queue.push(t), e.renderTo && !e.noRender && t.render(), a._items[t.domId] = t
        }, render: function g(e, t) {
            var n = this;
            if (!n.rendered) {
                var i = n.rawConfig;
                n.hidden = !!i.hidden, e = l(e || i.renderTo);
                var r = n.$el || n.getEl();
                e.get(0) && e[t || i.renderBy || "append"](r), n._setDomEventListeners(), n.fire("render");
                var s = (n.rawConfig || {}).render;
                c.isFunction(s) && s.call(n)
            }
        }, destroy: function E() {
            var e = this;
            if (e.__destroy) return;
            e.__destroy = !0;
            try {
                e.fire("destroy")
            } catch (n) {
                c.out(n.stack || n.message || n)
            }
            if (!e.rendered) return;
            var t = e.getEl();
            c.forEach(d.slice(0), function (e) {
                e && e.$el && l.contains(t, e.$el) && e.$destroy()
            }), c.forEach(e._data.unbindDom, function (e) {
                e && e()
            }), e._data.unbindDom.length = 0, t.unbind(), e.recycle(), t.remove(), e.unlistenAll()
        }, recycle: function C() {
            var e = this;
            if (e.rendered) {
                var t = e.getEl();
                c.forEach(e._data.child, function (e) {
                    e && e.destroy && e.destroy()
                }), a.recycle(t, !1)
            }
        }, getEl: function w(e) {
            var t = this;
            if (e = e ? l.trim(e) : null, t.$el) return e ? t.$el.find(e) : t.$el;
            var n = l("#" + t.domId);
            if (n.get(0)) return t.$el = n, t.el = n.get(0), n;
            var i = t.html();
            return t.$el = l(i), t.el = t.$el.get(0), e ? t.$el.find(e) : t.$el
        }, html: function x() {
            var e, t = this, n = t.rawConfig;
            if (n.html) e = n.html; else {
                var i = t.constructor, r = t._getData(t.rawConfig), s = 0;
                for (e = n.tpl || i._template || a._template; s < 10 && /#{.*?}/.test(e);) e = o.execTpl(e, r), s++
            }
            return e = (e = e.replace(/^(\<\w+)([ \>])/, "$1" + (n.hidden ? ' style="display:none"' : "") + ' id="' + t.domId + '"$2')).replace('class="', 'class="' + (t.rawConfig.cls || "") + " ")
        }, fire: function D(e) {
            if ("render" === e) {
                if (this.rendered) return;
                var t = this.getEl();
                if (!t || 0 === t.parent().length) return;
                this.rendered = !0
            }
            r.fire.apply(this, arguments)
        }, show: function L(e) {
            var t = this;
            e = e ? l.trim(e) : null, t.rendered && (e ? t.getEl().find(e).show() : (t.getEl().show(), t.hidden = !1, t.fire("show")))
        }, hide: function S(e) {
            var t = this;
            e = e ? l.trim(e) : null, t.rendered && (e ? t.getEl().find(e).hide() : (t.getEl().hide(), t.hidden = !0, t.fire("hide")))
        }, pushChild: function I(e) {
            e && this._data.child.push(e)
        }, callback: function k(e) {
            var t = this.rawConfig[e];
            if (e && t && c.isFunction(t)) {
                var n = [].slice.call(arguments, 1);
                t.apply(this, n)
            }
        }, _setDomEventListeners: function q() {
            var n = this;
            if (!n._data.status.isSetDomEventListeners) {
                n._data.status.isSetDomEventListeners = !0;
                var e = n.rawConfig, t = e.listeners, i = n._getAllListeners(), r = n.getEl();
                c.forEach(i, function (e) {
                    "custom" !== e.type && n._bindDomEvent(r, e.name, e.type, e.handler)
                }), c.forEach(t, function (e, t) {
                    !c.isFunction(e) && n._bindDomEvent(r, t, e.type, e.handler)
                }), c.forEach(e.$bind, function (e, t) {
                    n._bindDomEvent(r, t, null, e)
                });
                var s = c.indexOf(a._queue, n);
                0 <= s && a._queue.splice(s, 1)
            }
        }, _bindDomEvent: function z(e, t, n, i) {
            var e = this.getEl(), r = {document: document, body: document.body, window: window},
                a = this._data.unbindDom;
            if (t && c.isFunction(i)) {
                var s = t.match(/^(\S+)\s*(.*)$/), o = s[1], d = s[2];
                i = c.bind(i, this), "bind" !== n ? u(e, o, d || null, i) : u(d ? r[d] || e.find(d) : e, o, null, i)
            }

            function u(e, t, n, i) {
                e = l(e);
                var r = /\bstop\b/.test(t), s = /\bprevent\b/.test(t);
                t = t.split(".")[0];
                var o = function (e) {
                    r && e.stopPropagation(), s && e.preventDefault(), i.call(this, e)
                };
                n ? (e.on(t, n, o), a.push(function () {
                    e.unbind(t, n, o)
                })) : (e.on(t, o), a.push(function () {
                    e.unbind(t, o)
                }))
            }
        }, _setCustomEventListeners: function A() {
            var n = this;
            if (!n._data.status.isSetCustomEventListeners) {
                n._data.status.isSetCustomEventListeners = !0;
                var e = n.rawConfig;
                c.forEach(n._getAllListeners(), function (e, t) {
                    "custom" === e.type && n.listen(e.name, e.handler)
                }), c.forEach(e.listeners, function (e, t) {
                    c.isFunction(e) && n.listen(t, e)
                }), c.forEach(e.$event, function (e, t) {
                    n.listen(t, e)
                })
            }
        }, _getAllListeners: function F() {
            var n = this._data.allListeners;
            n || (n = [], this._forSuper(function (e, t) {
                !e.listeners || t && e.listeners === t.listeners || (n = n.concat(e.listeners.slice(0).reverse())), !e.$event || t && e.$event === t.$event || c.forEach(e.$event, function (e, t) {
                    n.push({name: t, type: "custom", handler: e})
                }), !e.$bind || t && e.$bind === t.$bind || c.forEach(e.$bind, function (e, t) {
                    n.push({name: t, handler: e})
                })
            }), n.reverse(), this._data.allListeners = n);
            return n
        }, _forSuper: function j(e) {
            if (e) {
                for (var t = this.constructor, n = null; t && t !== a;) e(t, n), t = (n = t).superClass.constructor;
                e(a, n)
            }
        }, _getData: function V() {
            return {}
        }
    })
});
define("/nc/1.03.04/extend/dom", ["../lib/jquery", "../lib/clipboard", "../base/base", "../base/time", "../base/num", "../base/str", "../base/browser"], function (e, t, o) {
    var p = e("../lib/jquery"), r = e("../lib/clipboard"), d = e("../base/base"), u = e("../base/time"),
        a = e("../base/browser");
    o.exports = {
        bind: function n(e, t, l) {
            var i = {document: document, body: document.body, window: window};
            d.forEach(e, function (t, e) {
                var o = e.match(/^(\S+)\s*(.*)$/), n = o[1], r = o[2];
                t = d.isString(t) ? l[t] : t, p(i[r] || r).on(n, function (e) {
                    t.call(l, e, p(e.target))
                })
            }), d.forEach(t, function (o, e) {
                var t = e.match(/^(\S+)\s*(.*)$/), n = t[1], r = t[2];
                o = d.isString(o) ? l[o] : o;
                var i = function (e) {
                    var t = d.isFunction(o) ? o : d.isObject(o) ? o.handler : null;
                    t && t.call(l, e, p(e.currentTarget))
                };
                d.isFunction(o) ? p(document).on(n, r, i) : d.isObject(o) && o.el && o.handler && p(o.el).on(n, r, i)
            })
        }, copy: function i(o) {
            var e = p(o.el), n = o.content;
            d.forEach(e, function (e) {
                var t = new r(e, n ? {
                    text: function () {
                        return n
                    }
                } : undefined);
                o.call && t.on("success", o.call), o.error && t.on("error", o.error)
            })
        }, scrollTo: function s(e) {
            var t = p((e = e || {}).scrollEl || window), o = e.top || 0, n = t.scrollTop();
            if (n === o) return;
            if (!e.animation || a.ie() && !(8 <= a.ie())) return t.scrollTop(o + (e.ext || 0));
            var r = n < o, i = r ? 1 : -1, l = 1, c = function () {
                n = Math[r ? "min" : "max"](n + l * i, o), t.scrollTop(n), n !== o && (setTimeout(c, 12), l += 8)
            };
            setTimeout(c, 0)
        }, scrollToEl: function l(e) {
            var t = p((e = e || {}).el);
            if (t.get(0)) {
                var o = this.getPosTop(t, e.scrollEl);
                this.scrollTo({scrollEl: e.scrollEl, top: o + (e.ext || 0), animation: !!e.animation})
            }
        }, scrollToElBottom: function c(e) {
            e = p(e);
            var t = e.height(), o = 0;
            d.forEach(e.children(), function (e) {
                o += p(e).outerHeight()
            }), e.scrollTop(t < o ? o - t : 0)
        }, scrollTop: function f(e, t, o) {
            var n, r = 0, i = !1;
            if (1 === arguments.length && d.isObject(e)) {
                var l = e;
                r = +l.duration || 0, e = +l.left || 1, t = p(l.scrollEl || window), o = l.call, i = !!l.noFirst
            } else 2 === arguments.length && (o = t, t = p(window));
            return e = Math.max(+e || 0, 1), t.on("scroll", c), !i && a(), s;

            function c() {
                window.clearTimeout(n), n = window.setTimeout(a, r)
            }

            function a() {
                t.scrollTop() <= e && o && o(c, s)
            }

            function s() {
                window.clearTimeout(n), t.unbind("scroll", c)
            }
        }, scrollBottom: function h(n, r, i, l) {
            var e, t = 0, o = !1;
            if (1 === arguments.length && d.isObject(n)) {
                var c = n;
                t = +c.duration || 0, n = +c.left || 1, r = p(c.scrollEl || window), i = p(c.totalEl || document), l = c.call, o = !!c.noFirst
            } else 2 === arguments.length && (l = r, r = p(window), i = p(document));
            return n = Math.max(+n || 0, 1), t = d.id(t) ? t : 50, r.on("scroll", a), !o && s(), u;

            function a() {
                window.clearTimeout(e), e = window.setTimeout(s, t)
            }

            function s() {
                var e = i.height(), t = r.height(), o = r.scrollTop();
                l && e - o - t <= n && l(a, u)
            }

            function u() {
                window.clearTimeout(e), r.unbind("scroll", a)
            }
        }, getPosLeft: function g(e, t) {
            return this._getOnePos(e, t, !0)
        }, getPosTop: function v(e, t) {
            return this._getOnePos(e, t, !1)
        }, getCursorPos: function m(e) {
            var t = e.el && e.el.get ? e.el.get(0) : e.el, o = +e.index || 0,
                n = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"],
                r = null !== window.mozInnerScreenX && window.mozInnerScreenX !== undefined,
                i = document.createElement("div");
            document.body.appendChild(i);
            var l, c = i.style, a = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                s = "INPUT" === t.nodeName;
            c.whiteSpace = "pre-wrap", !s && (c.wordWrap = "break-word"), c.position = "absolute", c.visibility = "hidden";
            for (var u = 0, d = n.length; u < d; u++) c[l = n[u]] = a[s && "lineHeight" === l ? "height" : l];
            c.overflow = r ? t.scrollHeight > parseFloat(a.height) ? "scroll" : c.overflow : "hidden", i.textContent = t.value.substring(0, o), s && (i.textContent = i.textContent.replace(/\s/g, " "));
            var f = document.createElement("span");
            f.textContent = t.value.substring(o) || ".", i.appendChild(f);
            var h = {
                top: f.offsetTop + (parseFloat(a.borderTopWidth) || 0),
                left: f.offsetLeft + (parseFloat(a.borderLeftWidth) || 0)
            };
            return e.beforeRemove && e.beforeRemove(i, f), document.body.removeChild(i), h
        }, highLight: function w(e) {
            var n = p(e.el), t = e.times || 4, r = e.background || "#fcf8e3";
            if (!n.get(0)) return;
            var i = "data-high-light";
            if (n.attr(i)) return void n.attr(i, t);
            n.attr(i, t);
            var l = n.css("backgroundColor");
            setTimeout(function () {
                var o = arguments.callee;
                n.css("backgroundColor", r), setTimeout(function () {
                    n.css("backgroundColor", l);
                    var e = (+n.attr(i) || 0) - 1, t = 0 < e;
                    t && n.attr(i, e), !t && n.removeAttr(i), t && setTimeout(o, 300)
                }, 300)
            }, 0)
        }, txtAutoHeight: function b(e) {
            var n, r = p(e.el), i = r.get(0);
            if (!i) return;
            var l = e.extra || 0, c = e.maxHeight, a = r.height();
            r.css("resize", "none");
            var t = function () {
                var e = r.val().length;
                if (n !== e) {
                    n = e;
                    var t, o = parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom"));
                    if (r.height(a), i.scrollHeight > a) c && i.scrollHeight > c ? (t = c - o, r.css("overflowY", "auto")) : (t = i.scrollHeight - o, r.css("overflowY", "hidden")), r.height(t + l)
                }
            };
            r.on("propertychange", t), r.on("input", t), r.on("click", t), r.on("change", t), t()
        }, bindChange: function T(e, t) {
            (e = p(e)).get(0) && t && (e.on("propertychange", t), e.on("input", t))
        }, bindPaste: function x(e, n, r) {
            var t = arguments.length;
            if (0 === t) return;
            1 === t ? (r = e, e = document, n = null) : 2 === t && (r = n, n = null);
            d.isFunction(r) && (n = p(n).get(0), p(e).on("paste", o));
            return function () {
                p(e).unbind("paste", o)
            };

            function o(e) {
                if (!n || n === e.target || p.contains(n, e.target)) {
                    var t = e.originalEvent, o = t.clipboardData || {};
                    r(o.items, e)
                }
            }
        }, getScrollParent: function y(e) {
            var t, o = !1, n = [document.body, document.body.parentNode, document];
            if (!(e = p(e).get(0)) || d.contains(n, e)) return null;
            for (; t = p(e).css("overflowY") || p(e).css("overflow"), e = (o = "auto" === t || "scroll" === t) ? e : e.parentNode, e && e !== document.body && !o;) ;
            return e === document.body ? null : e
        }, tab: function C(n) {
            var r = n.cls || "selected", i = p(n.el);
            i.length;
            d.forEach(i, function (t) {
                var o = (t = p(t)).parent();
                t.on("click", function (e) {
                    e.preventDefault(), n.noChangeCls || (d.forEach(i, function (e) {
                        (e = p(e)).parent().get(0) === o.get(0) && e.removeClass(r)
                    }), t.addClass(r)), n.change && n.change(e)
                })
            })
        }, toggleClick: function E(n) {
            var e = p(n.el);
            e.get(0) && e.on("click", function (e) {
                e.preventDefault();
                var t = p(e.currentTarget), o = !!n.checked && n.checked(t);
                n.call && n.call(t, !o)
            })
        }, hover: function S(e, t, o) {
            (e = p(e)).get(0) && (t && e.mouseenter(t), o && e.mouseleave(o))
        }, hoverToggle: function P(o) {
            var n, e = this, r = !!o.move, i = +o.duration || 100, l = +o.moveDuration || 2e3, c = u.frequency(250),
                a = !1;

            function s(e, t) {
                window.clearTimeout(n), n = window.setTimeout(function () {
                    o.leave && o.leave(t)
                }, e)
            }

            d.forEach(o.el, function (t) {
                e.hover(t, function () {
                    a = !1, window.clearTimeout(n), o.enter && o.enter(t)
                }, function () {
                    a = !0, s(i, t)
                }), r && t.on("mousemove", function (e) {
                    a = !1, s(l, t), c(function () {
                        !a && o.enter && o.enter(t)
                    })
                })
            }), r && s(l)
        }, cls: function z(r, e) {
            r = p(r), d.forEach(e, function (t, e) {
                if (e) {
                    var o = (t = !!t) ? "addClass" : "removeClass", n = e.split(/\s+/);
                    d.forEach(n, function (e) {
                        e && t === !r.hasClass(e) && r[o](e)
                    })
                }
            })
        }, fixScrollPos: function k(e, t) {
            if (e = p(e), t = p(t), 0 === e.length || 0 === t.length) return;
            var o = e.scrollTop();
            e.scrollTop(0);
            var n = e.height(), r = t.outerHeight(), i = this.getPosTop(t, e);
            i < o ? e.scrollTop(i) : n + o < r + i ? e.scrollTop(r + i - n) : e.scrollTop(o)
        }, fixedPos: function H(t, o) {
            var n, r = p(window);
            t = p(t);
            var e = function () {
                window.clearTimeout(n);
                var e = t.height();
                n = window.setTimeout(function () {
                    o(t, e, r.height())
                }, 0)
            };
            return e(), r.resize(e), e
        }, attachTo: function L(e) {
            var t = p(e.el), o = p(e.parent).get(0) || document.body;
            "static" === p(o).css("position") && p(o).css("position", "relative"), t.css("position", "absolute");
            var n = p(o).width(), r = p(o).height();
            o === document.body && "hidden" !== p(o).css("overflow") && (r = Math.max(p(document).height(), r));
            var i = t.outerWidth(), l = t.outerHeight(), c = p(e.target), a = !!e.horz, s = e.reverse, u = e.verReverse,
                d = c.get(0), f = d.offsetWidth, h = d.offsetHeight, g = this.getPosLeft(d, o),
                v = this.getPosTop(d, o);
            a ? (u = !1 !== u && (u || r < v + l && l < v), g = (s = !1 !== s && (s || n < g + f + i && i < g)) ? g - i - 1 : g + f + 1, e.center ? v -= (l - h) / 2 : u && (v = v + h - l - 1)) : (u = !1 !== u && (u || r < v + h + l && l < v), g = (s = s || n < g + i) ? g - i + f - 1 : g + 1, e.center && (g += (s ? 1 : -1) * (i - f) / 2), v = u ? v - l - 1 : v + h + 1);
            var m = e.extOffset || {};
            return g += m.left || 0, v += m.top || 0, t.css("left", e.minLeft ? Math.max(e.minLeft, g) : g), t.css("top", e.minTop ? Math.max(e.minTop, v) : v), t.css("zIndex", +e.zIndex || 9999), {
                reverse: s,
                verReverse: u
            }
        }, bindWinBlur: function W(e, t, o) {
            var n, r = p(window);

            function i() {
                window.clearTimeout(n), o && o()
            }

            r.on("focus", i), r.on("blur", function l() {
                window.clearTimeout(n), n = window.setTimeout(function () {
                    t && t()
                }, +e || 250)
            }), p(document).on("click", function () {
                i(), window.setTimeout(i, 0)
            })
        }, _getOnePos: function F(e, t, o) {
            if (e = p(e).get(0), t = p(t).get(0), 0 === e) return;
            var n = e.ownerDocument || e.document || e, r = n.defaultView || n.parentWindow;
            if (!t || t === n || t === n.body || t === r) {
                var i = e.getBoundingClientRect();
                return (i[o ? "left" : "top"] || 0) + (r[o ? "pageXOffset" : "pageYOffset"] || (n.documentElement || {})[o ? "scrollLeft" : "scrollTop"] || n.body[o ? "scrollLeft" : "scrollTop"])
            }
            var l = e.getBoundingClientRect()[o ? "left" : "top"] || 0,
                c = t.getBoundingClientRect()[o ? "left" : "top"] || 0, a = l - c;
            for (; e && (e = e.parentNode, a += e && e[o ? "scrollLeft" : "scrollTop"] || 0, e && e !== t);) ;
            return a
        }
    }
});
define("/nc/1.03.04/extend/dragdrop", ["../lib/jquery", "../base/base", "../base/clazz", "../base/browser", "../base/str"], function (e, t, n) {
    var i = e("../lib/jquery"), s = e("../base/base"), o = e("../base/clazz"), _ = e("../base/browser"),
        r = n.exports = o.create();
    s.extend(r.prototype, {
        _dragItem: null,
        _triggerItem: null,
        _doc: window.document,
        _win: window,
        _downX: 0,
        _downY: 0,
        _start: !0,
        _move: !1,
        _mouseDown: function u(e) {
            var t = this, n = t._doc, o = t._win, s = e.clientX, r = e.clientY;
            t._downX = s, t._downY = r, t._runEvent("mousedown"), i(n).on("mouseup", t._mouseUp), t._start && (i(n).on("mousemove", t._mouseMove), n.onselectstart = t._selectEvent, _.ie() ? i(n).on("selectstart", t._selectEvent) : _.firefox() || i(o).on("mousedown", t._selectEvent))
        },
        _mouseMove: function m(e) {
            var t = this, n = t._doc;
            t._dragItem;
            t._moveX = e.clientX, t._moveY = e.clientY, !t._move && (Math.abs(t._moveX - t._downX) > t.triggerOffset || Math.abs(t._moveY - t._downY) > t.triggerOffset) && (t._runEvent("start"), t._move = !0);
            if (!t._move) return;
            if (!e.which) return void i(n).trigger("mouseup");
            t._runEvent("drag")
        },
        _mouseUp: function c(e) {
            var t = this, n = t._doc, o = t._win;
            i(n).unbind("mousemove", t._mouseMove), i(n).unbind("mouseup", t._mouseUp), n.onselectstart = null, _.ie() ? i(n).unbind("selectstart", t._selectEvent) : _.firefox() || i(o).unbind("mousedown", t._selectEvent);
            t._move && t._runEvent("drop");
            delete t._moveX, delete t._moveY, t._move = !1
        },
        _runEvent: function a(e) {
            var t = this;
            if (t._customEvents[e]) try {
                t._customEvents[e].call(t)
            } catch (n) {
                s.out(n)
            }
        },
        _selectEvent: function v() {
            return !1
        },
        triggerOffset: 0,
        initialize: function d(e) {
            var o = this;
            o._dragItem = e.drag, o._triggerItem = e.trigger || e.drag, o._customEvents = {}, s.forEach(["_mouseMove", "_mouseUp", "_mouseDown", "_selectEvent"], function (e) {
                o[e] = s.bind(o[e], o)
            }), e.listeners && s.forEach(e.listeners, function (e) {
                var t = e.name, n = e.handler;
                o._customEvents[t] = n
            });
            e.win && (o._win = e.win, o._doc = e.win.document);
            o.triggerOffset = e.triggerOffset || 0, o._setupListeners()
        },
        _setupListeners: function l() {
            i(this._triggerItem).on("mousedown", this._mouseDown)
        }
    })
});
define("/nc/1.03.04/extend/fullscreen", ["../base/base", "../base/clazz", "../base/event", "../lib/jquery"], function (e, n, u) {
    var r = e("../base/base"), c = e("../base/clazz"), l = e("../base/event"), i = e("../lib/jquery"), t = c.create();
    r.extend(t.prototype, l, {
        initialize: function s() {
            var n = this;
            r.forEach(["fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "mozfullscreenchange"], function (e) {
                "on" + e in document && i(document).on(e, function () {
                    n.fire("change", n.isFull())
                })
            })
        }, full: function a(e, n) {
            var u = this;
            (e = !1 !== e) !== u.isFull() && (e && u.run("RequestFullScreen", n), !e && u.run("CancelFullScreen"))
        }, isFull: function o() {
            return !(!this.run("FullScreen") && !this.run("IsFullScreen"))
        }, run: function f(c, l) {
            var t;
            return l = i(l).get(0) || document, r.forEach(["webkit", "moz", "ms", "o", ""], function (e) {
                if (!t) {
                    !e && (c = c.slice(0, 1).toLowerCase() + c.slice(1));
                    var n = e + c, u = typeof l[n];
                    t = "function" == u ? l[n]() : "undefined" != u && l[n]
                }
            }), t
        }
    }), u.exports = new t
});
define("/nc/1.03.04/extend/html", ["../lib/jquery", "../base/base", "../base/str"], function (e, t, n) {
    var u = e("../lib/jquery"), d = e("../base/base"), g = e("../base/str");
    n.exports = {
        replaceLink: function a(e) {
            var o = !1, p = (e || "").split(/(<\s*\/?\s*?\w+\s*[^>]*?>)/), c = [];
            return d.forEach(p, function (e, t) {
                if (e) {
                    var n = /<\s*(\/)?\s*?(\w+)\s*[^>]*?>/i.exec(e) || [], a = (n[2] || "").toLowerCase(),
                        r = "/" === n[1];
                    if (!r && a && c.push(a), r && a && c.pop(), !a && !l("a") && !l("pre") && s(e)) {
                        e = g.decodeHTML(e);
                        var i = d.map(e.split(/((?:(?:(?:http|https|ftp):\/\/)|(?:www\.))[a-z0-9-\.]+\.[a-z]+[a-z0-9-\/\.:\?_=&#%]*)/gi), f);
                        p[t] = i.join(""), o = !0
                    }
                }
            }), o ? p.join("") : e;

            function l(e) {
                return e = (e || "").toLowerCase(), d.contains(c, e)
            }

            function s(e) {
                return /(((http|https|ftp):\/\/)|(www\.))[a-zA-Z0-9-\.]+\.[a-zA-Z]+[a-zA-Z0-9-\/\.:\?=&]*/.test(e || "")
            }

            function f(e) {
                if (!s(e)) return e ? g.encodeHTML(e) : "";
                var t = u.trim(e);
                return '<a href="' + (t = t.indexOf("://") < 0 ? "http://" + t : t) + '" target="_blank">' + g.encodeHTML(e) + "</a>"
            }
        }, txt2html: function r(e) {
            return e = (e = (e || "").replace(/\n/gi, "<br />")).replace(/\s+([^<>]+)(?=<)|\s+([^<>]+)$/g, function (e) {
                return e.replace(/\s/g, "&nbsp;")
            })
        }, html2txt: function i(e) {
            return e = (e = (e = (e = (e = (e = e.replace(/&nbsp;/gi, " ")).replace(/\n\s*\n/g, "\n")).replace(/<br[^>]*>/gi, "\n")).replace(/<\/p><p[^>]*>/gi, "\n")).replace(/<\/div><div[^>]*>/gi, "\n")).replace(/<[^>]+>/g, "")
        }, copy: function o(l) {
            if (!(l = l || {}).dealContent) return;
            if (window.getSelection && window.getSelection()) {
                var e = d.isArray(l.el) ? l.el : [l.el];
                d.forEach(e, function (e) {
                    e && u(e).on("copy", t)
                })
            }

            function t(e) {
                var t = u(e.target), n = e.originalEvent.clipboardData;
                if (n && n.setData) {
                    var a = t.prop("tagName").toLowerCase();
                    if (!{input: 1, textarea: 1, iframe: 1}[a] && !t.closest("input,textarea,iframe").get(0)) {
                        var r = window.getSelection(), i = r.toString();
                        if (!(i.length < (+l.max || 0))) {
                            i = d.map(i.split(""), function (e) {
                                return 160 === e.charCodeAt(0) ? " " : e
                            }).join("");
                            var o = r.getRangeAt(0).cloneContents(), p = u("<div></div>").append(o), c = p.html();
                            l.canCopy && !l.canCopy(t, c, i) || (l.dealContent && (i = l.dealContent(t, i)), l.dealContent && (c = l.dealContent(t, c, !0)), n.setData("text/plain", i || ""), n.setData("text/html", c || ""), e.preventDefault())
                        }
                    }
                }
            }
        }
    }
});
define("/nc/1.03.04/extend/keyboard", ["../lib/jquery", "../base/base", "../base/clazz", "../base/event"], function (e, n, i) {
    var t = e("../lib/jquery"), r = e("../base/base"), a = e("../base/clazz"), l = e("../base/event"),
        d = i.exports = a.create();
    r.extend(d, {
        preventCode: {37: "left", 38: "up", 39: "right", 40: "down"}, mix: function o(e) {
            var n = new d(e);
            return n.bind(), n
        }
    }), r.extend(d.prototype, l, {
        initialize: function f(e) {
            var n = this;
            n.rawConfig = e, n.el = t(e.el), n.inForm = !!n.el.closest("form").get(0), n.items = e.items, n.index = e.index || -1
        }, bind: function s() {
            var l = this, o = l.rawConfig;
            l.clear(!0), l.el.on("keydown", function (e) {
                var n = e.keyCode + "", i = !o.canFire || o.canFire();
                if (l.keydownHandler = arguments.callee, i) {
                    var t = d.preventCode[n];
                    (t && o[t] || "13" == n && l.inForm && 0 <= l.index) && e.preventDefault()
                }
            }), l.el.on("keyup", function (e) {
                var n = e.keyCode + "", i = !o.canFire || o.canFire(), t = l.index, r = l.index;
                if (l.keyupHandler = arguments.callee, i) if (e.stopPropagation(), e.preventDefault(), "38" == n) {
                    var a = l.getItem(!0);
                    (t = r - 1) < 0 && (t = a.length - 1), l.fireEvent("up", t, r, a), l.index = t
                } else if ("40" == n) {
                    var a = l.getItem(!0);
                    (t = l.index + 1) >= a.length && (t = 0), l.fireEvent("down", t, r, a), l.index = t
                } else "37" == n ? l.fireEvent("left") : "39" == n ? l.fireEvent("right") : "13" == n && l.fireEvent("selected", t, r, l.getItem(!0));
                l.fireEvent("keyup" + n, e, i, t, r)
            })
        }, clear: function c(e) {
            var n = this, i = n.rawConfig;
            n.index = i.index || -1, n._items = null, n.keyupHandler && e && n.el.unbind("keyup", n.keyupHandler);
            n.keydownHandler && e && n.el.unbind("keydown", n.keydownHandler)
        }, clearCache: function u() {
            this._items = null, this.index = -1
        }, fireEvent: function v(e) {
            var n = this, i = n.rawConfig;
            n.fire && n.fire.apply(n, arguments), i[e] && i[e].apply(n, [].slice.call(arguments, 1))
        }, getItem: function p(e) {
            var n = this, i = n.rawConfig;
            return n._items && 0 < n._items.length && !e || (n._items = i.getItem && i.getItem() || []), n._items
        }
    })
});
define("/nc/1.03.04/extend/limit", ["../lib/jquery"], function (t, e, r) {
    var a = t("../lib/jquery");
    r.exports = {
        mark: function n(t) {
            var e = (t = a(t)).attr("data-reset");
            if ("1" === e || "2" === e) return !0;
            t.attr("data-reset", 2)
        }, pause: function i(t) {
            (t = a(t)).attr("data-reset", 1), setTimeout(function () {
                t.removeAttr("data-reset")
            }, 500)
        }, clear: function u(t) {
            a(t).removeAttr("data-reset")
        }
    }
});
define("/nc/1.03.04/extend/mathJax", ["../lib/jquery", "../base/base", "../base/uri", "../base/str"], function (e, a, n) {
    var r = e("../lib/jquery"), f = e("../base/base"), h = e("../base/uri");
    n.exports = {
        form: function d(n, a) {
            ((n = n || {}) instanceof r || n.nodeType && n.nodeName) && (n = {el: n, call: a});
            var e = r(n.el), o = n.src, t = [];
            if (!o && f.forEach(e, function (e) {
                t.push(function (a) {
                    var n = window.MathJax;
                    n.Hub.Queue(["Typeset", n.Hub, e, a])
                })
            }), o) {
                var s = [], c = [];
                f.forEach(e.find("img"), function (a) {
                    a = r(a);
                    var n = r.trim(a.attr("src")), e = h.getParam(o, n);
                    if (e) {
                        var t = /^\s*?\\\[/.test(e) ? e : "$" + e.replace(/\$/g, "\\$") + "$",
                            i = r('<span style="display:none;">' + t + "</span>");
                        a.after(i), s.push(a), c.push(i.get(0))
                    }
                });
                var i = s.length;
                0 < i && t.push(function (a) {
                    var n = window.MathJax;
                    n.Hub.Queue(["Typeset", n.Hub, c, function () {
                        f.forCount(i, function (a) {
                            s[a].remove(), r(c[a]).show()
                        }), a && a()
                    }])
                })
            }
            var l = t.length, u = 0;
            0 === l && n.call && n.call(), 0 < l && this.load({
                conf: n.conf, call: function () {
                    f.forEach(t, function (a) {
                        a && a(function () {
                            l <= ++u && n.call && n.call()
                        })
                    })
                }
            })
        }, image: function t(a, n) {
            ((a = a || {}) instanceof r || a.nodeType && a.nodeName) && (a = {
                el: a,
                call: n
            }), !a.src && (a.src = "tex"), this.form(a)
        }, load: function i(a) {
            a = a || {};
            var n = this;
            f.isFunction(a) && (a = {call: a});
            if (n.isLoad()) return a.call && a.call();
            window.MathJax && window.MathJax.tex2jax || (window.MathJax = {
                extensions: ["tex2jax.js"],
                tex2jax: {
                    inlineMath: [["$", "$"], ["\\(", "\\)"]],
                    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
                    processEscapes: !0
                },
                asciimath2jax: {delimiters: []},
                "HTML-CSS": {availableFonts: [], styles: {".MathJax_Preview": {visibility: "hidden"}}},
                displayAlign: "left",
                showMathMenu: !1,
                showMathMenuMSIE: !1,
                skipStartupTypeset: !0
            }, a.conf && f.extend(window.MathJax, a.conf));
            e.async("//static.nowcoder.com/nc/jslib/MathJax-2.7.5/MathJax.js?config=TeX-MML-AM_CHTML-full", function () {
                n.isLoad() && a.call && a.call(window.MathJax)
            })
        }, isLoad: function o() {
            var a = window.MathJax;
            return a && a.Hub && a.Hub.Queue
        }
    }
});
define("/nc/1.03.04/extend/route", ["../lib/jquery", "../base/base", "../base/clazz", "../base/nav", "../base/event"], function (e, t, a) {
    var r = e("../lib/jquery"), p = e("../base/base"), n = e("../base/clazz"), i = e("../base/nav"),
        o = a.exports = n.create();
    p.extend(o.prototype, {
        initialize: function s(e) {
            var t = this;
            t.rawConfig = e, t._data = {name: "", steps: []}, t.initRoute()
        }, initRoute: function u() {
            var a = this;
            if (!a.router) {
                var e = i.Router.extend({
                    routes: {
                        "": "navStep",
                        "/": "navStep",
                        ":module": "navStep",
                        ":module/:param": "navStep",
                        "*error": "navError"
                    }, navStep: function (e, t) {
                        e = r.trim(e), t = t ? window.decodeURIComponent(r.trim(t)) : "", a._entryStep(e, p.json(t, {}))
                    }, navError: function () {
                        a._entryStep()
                    }
                });
                a.router = new e
            }
        }, start: function l() {
            i.history.start()
        }, nav: function d(e, a, t) {
            e = r.trim(e), a = a || {}, p.forEach(a, function (e, t) {
                (null === e || e === undefined) && delete a[t]
            });
            var n = a && 0 < p.size(a) ? window.encodeURIComponent(JSON.stringify(a)) : "";
            n = n ? "/" + n : "", this.router.navigate(e + n, p.extend({trigger: !0}, t))
        }, refresh: function c() {
            var e = this, t = e._getLastStep();
            t && t.name && (e.router.navigate("", {trigger: !1}), e.nav(t.name, t.param))
        }, getParam: function f(e) {
            var t = this._getStepByName(e), a = (t || {}).param || {};
            return t && (t.param = a), a
        }, addParam: function m(e, t, a) {
            var n = this, r = n._getStepByName(e);
            if (!r || !t) return;
            var i = r.param || {};
            t === i && (t = p.clone(t)), p.extend(i, t), p.forEach(i, function (e, t) {
                (e === undefined || null === e) && delete i[t]
            }), r.param = i, n._data.name === e && n.nav(e, i, {
                trigger: !1,
                replace: !(a && "replace" in a) || !!a.replace
            })
        }, resetParam: function v(e, t) {
            var a = this.getParam(e);
            p.forEach(a, function (e, t) {
                a[t] = null
            }), p.extend(a, t), this.addParam(e, a)
        }, _entryStep: function S(n, r) {
            var i = this, o = i.rawConfig, e = o.modules;
            if (!(n = e && p.isArray(e) && !p.contains(e, n) ? null : n) || o.dealStep) {
                var t = (o.dealStep ? o.dealStep(n, r) : {step: n, param: r}) || {};
                if (!t.step) return;
                if (t.step !== n || t.param !== r) return i.nav(t.step, t.param)
            }
            var s = i._getLastStep();
            if (s && s.name === n) {
                if (JSON.stringify(s.param) === JSON.stringify(r)) return s.module.show();
                s.isDestroy = !0, s.module.destroy()
            }
            i._willEntryStep = n;
            var a = i._getStepByName(n);
            a && !a.isDestroy ? u(a.module, a.clazz) : o.getModule({
                name: n, param: r, call: function (e, t) {
                    (t = t || {}).noRender = !0;
                    var a = new e(t);
                    u(a, e)
                }
            });

            function u(e, t) {
                if (e && i._willEntryStep === n) {
                    i._willEntryStep = null, i._data.name = n, i._cacheStep({
                        name: n,
                        module: e,
                        param: p.clone(r || {}),
                        clazz: t
                    });
                    var a = (s || {}).module;
                    a && (a.fire("leaveStep"), o.cacheModule ? a.hide() : (s.isDestroy = !0, a.destroy()), o.delModule && o.delModule(a, s.clazz)), e.render(), e.show(), e.fire("entryStep")
                }
            }
        }, _getLastStep: function h() {
            var e = this._data.steps;
            return e[e.length - 1]
        }, _getStepByName: function g(t) {
            this.rawConfig;
            return p.find(this._data.steps, function (e) {
                return e.name === t
            })
        }, _cacheStep: function y(e) {
            var a = this._data.steps, n = e.name;
            return p.forReverse(a, function (e, t) {
                e.name === n && a.splice(t, 1)
            }), a.push(e), e
        }
    })
});
define("/nc/1.03.04/extend/share", ["../lib/jquery", "../base/base"], function (e, i, t) {
    var a = e("../lib/jquery"), g = e("../base/base"), k = {
        weibo: {
            url: "http://service.weibo.com/share/share.php",
            param: {url: "", appkey: "", title: "", pic: "", ralateUid: "", language: "zh_cn"}
        },
        t163: {
            url: "http://t.163.com/article/user/checkLogin.do",
            param: {info: "", images: "", picSep: ",", togImg: !0}
        },
        qzone: {
            url: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
            param: {desc: "", title: "", summary: "", url: "", site: "", pics: "", picSep: "|"}
        },
        tqq: {
            url: "http://share.v.t.qq.com/index.php",
            param: {c: "share", a: "index", site: "", url: "", title: "", pic: "", picSep: "|"}
        },
        renren: {
            url: "http://widget.renren.com/dialog/share",
            param: {resourceUrl: "", pic: "", title: "", description: ""}
        },
        kaixin: {
            url: "http://www.kaixin001.com/rest/records.php",
            param: {content: "", url: "", starid: "0", aid: "0", pic: "", style: "11", picSep: ","}
        },
        douban: {url: "http://www.douban.com/recommend/", param: {title: "", url: "", v: "1"}},
        yixin: {
            url: "http://open.yixin.im/share",
            param: {appkey: "", type: "webpage", title: "1", desc: "", userdesc: "", pic: "", url: ""}
        }
    };
    t.exports = {
        bind: function c(t) {
            var r = this, n = t.attrName || "data-share";
            g.forEach(t.el, function (e) {
                var i = (e = a(e)).attr(n);
                if ("weixin" === i) return t.clickWx && t.clickWx();
                ({
                    weibo: 1,
                    t163: 1,
                    qzone: 1,
                    tqq: 1,
                    renren: 1,
                    kaixin: 1,
                    douban: 1,
                    yixin: 1
                })[i] && e.click(function () {
                    r.share({
                        target: i,
                        title: t.title,
                        desc: t.desc || "",
                        pic: t.image || null,
                        pics: t.image ? [t.image] : null,
                        link: t.link || window.location.href,
                        site: t.account ? "@" + t.account.replace(/^@/, "") : "@牛客网"
                    })
                })
            })
        }, share: function n(e) {
            var i = this.shareLink(e), t = "", r = e.target;
            "douban" === r ? t = "toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330,left=" + (window.screen.width - 450) / 2 + ",top=" + (window.screen.height - 330) / 2 : "yixin" === r && (t = "toolbar=0,resizable=1,scrollbars=yes,status=1,width=650,height=460,left=" + (window.screen.width - 650) / 2 + ",top=" + (window.screen.height - 460) / 2);
            t ? window.open(i, r, t) : window.open(i, "_blank")
        }, shareLink: function y(e) {
            var i = e.target, t = e.pics || [], r = e.desc || "", n = e.title || "", a = e.link || "", c = e.site || "",
                p = e.appkey || "", s = e.userdesc || "", o = e.type || "", l = k[i], u = l.url, h = l.param || {},
                d = c ? " 分享来自 " + c : "", w = n === r ? "" : r;
            /^\/\//.test(a) && (a = "http:" + a);
            var m = {
                weibo: {appkey: p || "3023520088", url: a, title: n + w + d, pic: t[0] || ""},
                t163: {info: n + w + a + d, images: t.join(h.picSep)},
                qq: {appkey: p || "101003590", title: n + w, url: a, site: c, pic: t.join(h.picSep)},
                qzone: {url: a, desc: r, title: n, pics: t.join(h.picSep), site: c, images: t.join(h.picSep)},
                renren: {resourceUrl: a, description: r + d, title: n, pic: t[0] || ""},
                kaixin: {url: a, content: n + w + d, pic: t.join(h.picSep)},
                douban: {url: a, title: n + w + d},
                yixin: {appkey: p, type: o || "webpage", title: n, desc: r, userdesc: s, pic: t[0] || "", url: a}
            }[i];
            g.extend(h, m);
            var b = [];
            return g.forEach(h, function (e, i) {
                b.push(i + "=" + window.encodeURIComponent(e || ""))
            }), u + "?" + b.join("&")
        }
    }
});
define("/nc/1.03.04/extend/shortcut", ["../lib/jquery", "../base/base"], function (t, e, r) {
    var n, a = t("../lib/jquery"), i = t("../base/base"),
        u = {ctrl: "@", shift: "#", alt: "$", space: "%", enter: "&", up: "+", down: "-", left: "[", right: "]"}, o = {
            0: 48,
            1: 49,
            2: 50,
            3: 51,
            4: 52,
            5: 53,
            6: 54,
            7: 55,
            8: 56,
            9: 57,
            a: 65,
            b: 66,
            c: 67,
            d: 68,
            e: 69,
            f: 70,
            g: 71,
            h: 72,
            i: 73,
            j: 74,
            k: 75,
            l: 76,
            m: 77,
            n: 78,
            o: 79,
            p: 80,
            q: 81,
            r: 82,
            s: 83,
            t: 84,
            u: 85,
            v: 86,
            w: 87,
            x: 88,
            y: 89,
            z: 90,
            "@": 17,
            ctrl: 17,
            "#": 16,
            shift: 16,
            $: 18,
            alt: 18,
            "%": 32,
            space: 32,
            "&": 13,
            enter: 13,
            "+": 38,
            up: 38,
            "-": 40,
            down: 40,
            "[": 37,
            left: 37,
            "]": 39,
            right: 39
        }, s = {};
    i.forEach(o, function (t, e) {
        ({ctrl: 1, shift: 1, alt: 1, space: 1, enter: 1, up: 1, down: 1, left: 1, right: 1})[e] || (s[t] = e)
    }), r.exports = {
        keys: [], data: {}, action: function c(e) {
            var t = this, a = "", r = e.keyCode + "";
            if (!s[r]) return !0;
            r != o.ctrl && r != o.shift && r != o.alt && (a += e.ctrlKey ? u.ctrl : "", a += e.shiftKey ? u.shift : "", a += e.altKey ? u.alt : "");
            a += s[r];
            var n = t.keys.join("") + s[r];
            {
                if (t.data[a]) return i.forEach(t.data[a], function (t) {
                    t(e)
                }), !0;
                if (t.data[n]) return i.forEach(t.data[n], function (t) {
                    t(e)
                }), !0
            }
            return !1
        }, add: function h(t, e) {
            var a, r = this, n = (t || "").toLowerCase().replace(/\s+/g, "").split("+"), i = "", o = "", s = "", c = !1;
            if (t = "", 0 === n.length) return;
            for (var f = 0, l = n.length; f < l; f++) {
                if (a = n[f], !/[a-z0-9]/.test(a) && !u[a]) return;
                c || "ctrl" !== a && "shift" !== a && "alt" !== a ? (c = !0, t += u[a] || a) : "ctrl" === a ? i += u.ctrl : "shift" === a ? o += u.shift : s += u.alt
            }
            t = i + o + s + t, r.data[t] || (r.data[t] = []);
            r.data[t].push(e)
        }
    }, a(document).on("keydown", function (t) {
        var e = r.exports, a = (t.target.tagName || "").toLowerCase();
        "input" !== a && "textarea" !== a && (n && window.clearTimeout(n), n = window.setTimeout(function () {
            e.keys.length = 0
        }, 500), e.action(t) ? (e.keys.length = 0, window.clearTimeout(n)) : e.keys.push(s[t.keyCode]))
    })
});
define("/nc/1.03.04/extend/sound", ["../base/base", "../base/clazz", "../base/event", "../base/str"], function (t, e, a) {
    var n = t("../base/base"), i = t("../base/clazz"), o = t("../base/event"), l = t("../base/str"),
        r = a.exports = i.create();
    n.extend(r.prototype, o, {
        initialize: function s(t) {
            var e = this;
            if (!window.Audio) return;
            e.completed = !1, e.waitList = [];
            e.player = new window.Audio;
            e.initEvent(), e.playedCount = 0, e.playTotal = 0, e.load(t)
        }, initEvent: function d() {
            var a = this;
            n.forEach("loadstart,progress,suspend,abort,error,stalled,play,pause,loadedmetadata,loadeddata,waiting,playing,canplay,canplaythrough,seeking,seeked,timeupdate,ended,ratechange,durationchange,volumechange".split(","), function (t) {
                if (t = l.trim(t)) {
                    var e = "sound" + t[0].toUpperCase() + t.substr(1);
                    a.player.addEventListener(t, function () {
                        a.fire(e)
                    })
                }
            }), a.listen("soundCanplaythrough", function () {
                a.completed = !0, n.forEach(a.waitList, function (t) {
                    t && t()
                }), a.waitList.length = 0
            }), a.listen("soundEnded", function () {
                a.playedCount++, a.playTotal <= a.playedCount ? a.stop() : (a.player.currentTime = 0, a._play())
            })
        }, load: function p(t) {
            var e = this;
            if (!t || !e.player) return;
            e.completed = !1, e.player.src = t, e.player.volume = 1, e.player.loop = !1
        }, play: function u(t) {
            var e = this;
            t = 0 === arguments.length ? 1 : +t || 0, e.waitLoaded(function () {
                e.stop(), 0 < t && (e.playedCount = 0, e.playTotal = t, e._play())
            })
        }, stop: function c() {
            var t = this;
            t.waitLoaded(function () {
                t.player.pause(), t.player.currentTime = 0, t.playedCount = window.Infinity
            })
        }, waitLoaded: function y(t) {
            if (this.completed) return t && t();
            this.waitList.push(t)
        }, _play: function f() {
            var t = this.player.play();
            t !== undefined && t.then && t["catch"] && t.then(function () {
            })["catch"](function (t) {
                n.out("声音播放被浏览器禁止 /(ㄒoㄒ)/~~")
            })
        }
    })
});
define("/nc/1.03.04/extend/sys", ["../base/base", "../base/clazz", "../base/time", "../base/num", "../base/str", "./dom", "../lib/jquery", "../lib/clipboard", "../base/browser"], function (t, e, n) {
    var i = t("../base/base"), o = t("../base/clazz"), r = t("../base/time"), a = t("./dom"),
        s = {cb: [], result: undefined};
    n.exports = {
        out: function u(t, e) {
            i.out.apply(i, arguments)
        }, ready: function c(t) {
            var e = o.create(), n = i.clone(window.globalInfo) || {};
            return i.extend(e, {
                isUserLogin: function () {
                    return !!n.ownerId
                }, isUserActive: function () {
                    return 0 == +n.status
                }
            }, t), e.initialize && e.initialize.call(e), a.bind(e.binds, e.events, e), e
        }, closeWin: function l(t) {
            try {
                window.close()
            } catch (e) {
            }
            window.setTimeout(function () {
                window.location.href = t || "/"
            }, 500)
        }, rqUrl: function d(t, e) {
            return "https://www.nowcoder.com/qr/to?url=" + window.encodeURIComponent(t || window.location.href) + (e ? "&size=" + e : "")
        }, checkAdBlock: function f(t) {
            if (!0 === s.result || !1 === s.result) return t && t(s.result);
            if (s.cb.push(t), 1 < s.cb.length) return;
            var n = document.createElement("div");

            function e(e) {
                s.result = e, i.forEach(s.cb, function (t) {
                    t && t(e)
                }), s.cb.length = 0;
                try {
                    document.body.removeChild(n)
                } catch (t) {
                }
            }

            n.setAttribute("class", "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links"), n.setAttribute("style", "width:1px !important; height:1px !important; position:absolute !important; left:-10000px !important; top:-1000px !important;"), document.body.appendChild(n), r.waitUtil({
                duration: 50,
                times: 5,
                condition: function () {
                    var t = null === n.offsetParent || 0 === n.offsetHeight || 0 === n.offsetLeft || 0 === n.offsetTop || 0 === n.offsetWidth || 0 === n.clientHeight || 0 === n.clientWidth;
                    if (!t && window.getComputedStyle) {
                        var e = window.getComputedStyle(n, null);
                        e && e.getPropertyValue && (t = "none" === e.getPropertyValue("display") || "hidden" === e.getPropertyValue("visibility"))
                    }
                    return t
                },
                call: function () {
                    e(!0)
                },
                error: function () {
                    e(!1)
                }
            })
        }
    }
});
define("/nc/1.03.04/extend/upload", ["../lib/jquery", "../base/base", "../base/clazz"], function (e, t, n) {
    e("../lib/jquery");
    var p = e("../base/base"), r = e("../base/clazz"), f = window.FormData, a = n.exports = r.create();
    p.extend(a, {support: !!(f && window.XMLHttpRequest && window.JSON && window.addEventListener)}), p.extend(a.prototype, {
        initialize: function o(e) {
            this.rawConfig = e || {}
        }, uploadFile: function c(t, e) {
            var a, o = this, i = o.rawConfig, s = t.size, n = i.name || "file", p = 0, l = 0;
            if (!t || 0 === s) return;
            var d = 256e3;
            if (!e || s <= d) {
                var r = new f;
                r.append(n, t), o.uploadForm(r)
            } else u();

            function u() {
                if (l = 0, p < s) {
                    t.slice(p, d);
                    var e = new f;
                    e.append(n, e), function r(n) {
                        o.upload({
                            data: n,
                            url: i.url,
                            extData: i.extData,
                            XMLHttpRequest: i.XMLHttpRequest,
                            beforeSend: i.beforeSend,
                            noSupport: i.noSupport,
                            call: function (e) {
                                a = e, p += d, u()
                            },
                            error: function (e) {
                                var t = ++l < 3;
                                t && r(n), !t && i.error && i.error.call(o, e)
                            },
                            progress: function (e, t, n) {
                                t += p, i.progress && i.progress(+(100 * t / s).toFixed(2), t, s)
                            }
                        })
                    }(e)
                } else i.call && i.call.call(o, a)
            }
        }, uploadBlob: function i(e, t) {
            var n = this.rawConfig, r = new f;
            r.append(n.name || "file", e, t), this.uploadForm(r, n)
        }, uploadForm: function s(e) {
            return this.upload(p.extend({}, this.rawConfig, {data: e}))
        }, upload: function l(o) {
            var i = this, n = (o = o || {}).data;
            if (!n) return;
            if (!a.support) return o.noSupport && o.noSupport.call(i);
            p.forEach(o.extData, function (e, t) {
                t && e && n.append(t, e)
            });
            var s = new (o.XMLHttpRequest || window.XMLHttpRequest);
            s.upload.addEventListener("progress", function (e) {
                var t = e.loaded, n = e.total || 1, r = +(100 * t / n).toFixed(2);
                o.progress && o.progress.call(i, r, t, n)
            }, !1), s.onreadystatechange = function (e) {
                if (4 === s.readyState) {
                    var t = p.json(s.responseText, {msg: "出现错误，请重试"}), n = p.id(t.code), r = "0" === n;
                    t.msg = "999" === n ? "上传失败，请重新登录" : t.msg;
                    var a = r ? "call" : "error";
                    o[a] && o[a].call(i, t)
                }
            }, s.open("POST", o.url, !0), o.beforeSend && o.beforeSend(s), s.send(n)
        }
    })
});
define("/nc/1.03.04/lib/caret", ["../lib/jquery"], function (e, t, n) {
    var g = e("../lib/jquery"), r = document.createElement("input"),
        a = "setSelectionRange" in r || "selectionStart" in r, i = "createTextRange" in r || "selection" in document,
        c = /\r\n/g, o = /\r/g, s = function (e) {
            return "undefined" != typeof e.value ? e.value : g(e).text()
        }, u = function (e, t) {
            var n = s(e).replace(o, "").length;
            return void 0 === t && (t = n), (t = Math.floor(t)) < 0 && (t = n + t), t < 0 && (t = 0), n < t && (t = n), t
        }, f = function (e, t, n, r) {
            this.start = e || 0, this.end = t || 0, this.length = n || 0, this.text = r || ""
        };
    f.prototype.toString = function () {
        return JSON.stringify(this, null, "    ")
    };
    var l = function (e) {
        return e ? a ? function (e) {
            return e.selectionStart
        }(e) : i ? function (e) {
            var t, n, r, a, i;
            return e.focus(), e.focus(), (t = document.selection.createRange()) && t.parentElement() === e ? (a = (r = s(e)).length, (n = e.createTextRange()).moveToBookmark(t.getBookmark()), (i = e.createTextRange()).collapse(!1), -1 < n.compareEndPoints("StartToEnd", i) ? r.replace(c, "\n").length : -n.moveStart("character", -a)) : 0
        }(e) : undefined : undefined
    }, d = function (e, t) {
        e.focus(), t = u(e, t), a ? function (e, t) {
            e.setSelectionRange(t, t)
        }(e, t) : i && function (e, t) {
            var n = e.createTextRange();
            n.move("character", t), n.select()
        }(e, t)
    }, h = function (e, t) {
        var n = l(e), r = s(e).replace(o, ""), a = +(n + t.length + (r.length - n)), i = +e.getAttribute("maxlength");
        if (function (e, t) {
            return e.hasAttribute ? e.hasAttribute(t) : "undefined" != typeof e[t]
        }(e, "maxlength") && i < a) {
            var c = t.length - (a - i);
            t = t.substr(0, c)
        }
        !function (e, t) {
            "undefined" != typeof e.value ? e.value = t : g(e).text(t)
        }(e, r.substr(0, n) + t + r.substr(n)), d(e, n + t.length)
    }, v = function (e) {
        return e ? a ? function (e) {
            var t = new f;
            t.start = e.selectionStart, t.end = e.selectionEnd;
            var n = Math.min(t.start, t.end), r = Math.max(t.start, t.end);
            return t.length = r - n, t.text = s(e).substring(n, r), t
        }(e) : i ? function (e) {
            var t = new f;
            e.focus();
            var n = document.selection.createRange();
            if (n && n.parentElement() === e) {
                var r, a, i, c, o = 0, u = 0, l = s(e);
                r = l.length, a = l.replace(/\r\n/g, "\n"), (i = e.createTextRange()).moveToBookmark(n.getBookmark()), (c = e.createTextRange()).collapse(!1), -1 < i.compareEndPoints("StartToEnd", c) ? o = u = r : (o = -i.moveStart("character", -r), o += a.slice(0, o).split("\n").length - 1, -1 < i.compareEndPoints("EndToEnd", c) ? u = r : (u = -i.moveEnd("character", -r), u += a.slice(0, u).split("\n").length - 1)), o -= l.substring(0, o).split("\r\n").length - 1, u -= l.substring(0, u).split("\r\n").length - 1, t.start = o, t.end = u, t.length = t.end - t.start, t.text = a.substr(t.start, t.length)
            }
            return t
        }(e) : undefined : undefined
    }, m = function (e, t, n) {
        t = u(e, t), n = u(e, n), a ? function (e, t, n) {
            e.setSelectionRange(t, n)
        }(e, t, n) : i && function (e, t, n) {
            var r = e.createTextRange();
            r.moveEnd("textedit", -1), r.moveStart("character", t), r.moveEnd("character", n - t), r.select()
        }(e, t, n)
    }, p = function (e) {
        var t = g(e);
        t.is("input, textarea") || e.select ? t.select() : a ? function (e) {
            var t = window.getSelection(), n = document.createRange();
            n.selectNodeContents(e), t.removeAllRanges(), t.addRange(n)
        }(e) : i && function (e) {
            var t = document.body.createTextRange();
            t.moveToElementText(e), t.select()
        }(e)
    };
    g.extend(g.fn, {
        caret: function () {
            var e = this.filter("input, textarea");
            if (0 === arguments.length) {
                var t = e.get(0);
                return l(t)
            }
            if ("number" == typeof arguments[0]) {
                var n = arguments[0];
                e.each(function (e, t) {
                    d(t, n)
                })
            } else {
                var r = arguments[0];
                e.each(function (e, t) {
                    h(t, r)
                })
            }
            return this
        }, range: function () {
            var e = this.filter("input, textarea");
            if (0 === arguments.length) {
                var t = e.get(0);
                return v(t)
            }
            if ("number" == typeof arguments[0]) {
                var n = arguments[0], r = arguments[1];
                e.each(function (e, t) {
                    m(t, n, r)
                })
            } else {
                var a = arguments[0];
                e.each(function (e, t) {
                    !function (e, t) {
                        var n = g(e), r = n.val(), a = v(e), i = +(a.start + t.length + (r.length - a.end)),
                            c = +n.attr("maxlength");
                        if (n.is("[maxlength]") && c < i) {
                            var o = t.length - (i - c);
                            t = t.substr(0, o)
                        }
                        var u = r.substr(0, a.start), l = r.substr(a.end);
                        n.val(u + t + l);
                        var s = a.start, f = s + t.length;
                        m(e, a.length ? s : f, f)
                    }(t, a)
                })
            }
            return this
        }, selectAll: function () {
            return this.each(function (e, t) {
                p(t)
            })
        }
    }), g.extend(g, {
        deselectAll: function () {
            return document.selection ? document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges(), this
        }
    })
});
define("/nc/1.03.04/lib/clipboard", [], function (t, r, o) {
    !function (t, e) {
        try {
            "object" == typeof r && "object" == typeof o ? o.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof r ? r.ClipboardJS = e() : t.ClipboardJS = e()
        } catch (n) {
            o.exports = {}
        }
    }(this, function () {
        return function (n) {
            var r = {};

            function o(t) {
                if (r[t]) return r[t].exports;
                var e = r[t] = {i: t, l: !1, exports: {}};
                return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
            }

            return o.m = n, o.c = r, o.d = function (t, e, n) {
                o.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
            }, o.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
            }, o.t = function (e, t) {
                if (1 & t && (e = o(e)), 8 & t) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e) for (var r in e) o.d(n, r, function (t) {
                    return e[t]
                }.bind(null, r));
                return n
            }, o.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t["default"]
                } : function () {
                    return t
                };
                return o.d(e, "a", e), e
            }, o.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, o.p = "", o(o.s = 0)
        }([function (t, e, n) {
            "use strict";
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, o = function () {
                function r(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                return function (t, e, n) {
                    return e && r(t.prototype, e), n && r(t, n), t
                }
            }(), a = i(n(1)), c = i(n(3)), u = i(n(4));

            function i(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            var l = function (t) {
                function i(t, e) {
                    !function r(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i);
                    var n = function o(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                    return n.resolveOptions(e), n.listenClick(t), n
                }

                return function n(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(i, c["default"]), o(i, [{
                    key: "resolveOptions", value: function () {
                        var t = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === r(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick", value: function (t) {
                        var e = this;
                        this.listener = (0, u["default"])(t, "click", function (t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick", value: function (t) {
                        var e = t.delegateTarget || t.currentTarget;
                        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a["default"]({
                            action: this.action(e),
                            target: this.target(e),
                            text: this.text(e),
                            container: this.container,
                            trigger: e,
                            emitter: this
                        })
                    }
                }, {
                    key: "defaultAction", value: function (t) {
                        return s("action", t)
                    }
                }, {
                    key: "defaultTarget", value: function (t) {
                        var e = s("target", t);
                        if (e) return document.querySelector(e)
                    }
                }, {
                    key: "defaultText", value: function (t) {
                        return s("text", t)
                    }
                }, {
                    key: "destroy", value: function () {
                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                    }
                }], [{
                    key: "isSupported", value: function () {
                        var t = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : ["copy", "cut"],
                            e = "string" == typeof t ? [t] : t, n = !!document.queryCommandSupported;
                        return e.forEach(function (t) {
                            n = n && !!document.queryCommandSupported(t)
                        }), n
                    }
                }]), i
            }();

            function s(t, e) {
                var n = "data-clipboard-" + t;
                if (e.hasAttribute(n)) return e.getAttribute(n)
            }

            t.exports = l
        }, function (t, e, n) {
            "use strict";
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, o = function () {
                function r(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                return function (t, e, n) {
                    return e && r(t.prototype, e), n && r(t, n), t
                }
            }(), i = function c(t) {
                return t && t.__esModule ? t : {"default": t}
            }(n(2));
            var a = function () {
                function e(t) {
                    !function n(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.resolveOptions(t), this.initSelection()
                }

                return o(e, [{
                    key: "resolveOptions", value: function () {
                        var t = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
                        this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                    }
                }, {
                    key: "initSelection", value: function () {
                        this.text ? this.selectFake() : this.target && this.selectTarget()
                    }
                }, {
                    key: "selectFake", value: function () {
                        var t = this, e = "rtl" == document.documentElement.getAttribute("dir");
                        this.removeFake(), this.fakeHandlerCallback = function () {
                            return t.removeFake()
                        }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                        var n = window.pageYOffset || document.documentElement.scrollTop;
                        this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, i["default"])(this.fakeElem), this.copyText()
                    }
                }, {
                    key: "removeFake", value: function () {
                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                    }
                }, {
                    key: "selectTarget", value: function () {
                        this.selectedText = (0, i["default"])(this.target), this.copyText()
                    }
                }, {
                    key: "copyText", value: function () {
                        var t = void 0;
                        try {
                            t = document.execCommand(this.action)
                        } catch (e) {
                            t = !1
                        }
                        this.handleResult(t)
                    }
                }, {
                    key: "handleResult", value: function (t) {
                        this.emitter.emit(t ? "success" : "error", {
                            action: this.action,
                            text: this.selectedText,
                            trigger: this.trigger,
                            clearSelection: this.clearSelection.bind(this)
                        })
                    }
                }, {
                    key: "clearSelection", value: function () {
                        this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                    }
                }, {
                    key: "destroy", value: function () {
                        this.removeFake()
                    }
                }, {
                    key: "action", set: function () {
                        var t = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : "copy";
                        if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    }, get: function () {
                        return this._action
                    }
                }, {
                    key: "target", set: function (t) {
                        if (t !== undefined) {
                            if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                            if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                            this._target = t
                        }
                    }, get: function () {
                        return this._target
                    }
                }]), e
            }();
            t.exports = a
        }, function (t, e) {
            t.exports = function i(t) {
                var e;
                if ("SELECT" === t.nodeName) t.focus(), e = t.value; else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var n = t.hasAttribute("readonly");
                    n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
                } else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var r = window.getSelection(), o = document.createRange();
                    o.selectNodeContents(t), r.removeAllRanges(), r.addRange(o), e = r.toString()
                }
                return e
            }
        }, function (t, e) {
            function n() {
            }

            n.prototype = {
                on: function (t, e, n) {
                    var r = this.e || (this.e = {});
                    return (r[t] || (r[t] = [])).push({fn: e, ctx: n}), this
                }, once: function (t, e, n) {
                    var r = this;

                    function o() {
                        r.off(t, o), e.apply(n, arguments)
                    }

                    return o._ = e, this.on(t, o, n)
                }, emit: function (t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, o = n.length; r < o; r++) n[r].fn.apply(n[r].ctx, e);
                    return this
                }, off: function (t, e) {
                    var n = this.e || (this.e = {}), r = n[t], o = [];
                    if (r && e) for (var i = 0, a = r.length; i < a; i++) r[i].fn !== e && r[i].fn._ !== e && o.push(r[i]);
                    return o.length ? n[t] = o : delete n[t], this
                }
            }, t.exports = n
        }, function (t, e, n) {
            var a = n(5), c = n(6);
            t.exports = function u(t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!a.string(e)) throw new TypeError("Second argument must be a String");
                if (!a.fn(n)) throw new TypeError("Third argument must be a Function");
                if (a.node(t)) return function r(t, e, n) {
                    return t.addEventListener(e, n), {
                        destroy: function () {
                            t.removeEventListener(e, n)
                        }
                    }
                }(t, e, n);
                if (a.nodeList(t)) return function o(t, e, n) {
                    return Array.prototype.forEach.call(t, function (t) {
                        t.addEventListener(e, n)
                    }), {
                        destroy: function () {
                            Array.prototype.forEach.call(t, function (t) {
                                t.removeEventListener(e, n)
                            })
                        }
                    }
                }(t, e, n);
                if (a.string(t)) return function i(t, e, n) {
                    return c(document.body, t, e, n)
                }(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
        }, function (t, n) {
            n.node = function (t) {
                return t !== undefined && t instanceof HTMLElement && 1 === t.nodeType
            }, n.nodeList = function (t) {
                var e = Object.prototype.toString.call(t);
                return t !== undefined && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            }, n.string = function (t) {
                return "string" == typeof t || t instanceof String
            }, n.fn = function (t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        }, function (t, e, n) {
            var c = n(7);

            function i(t, e, n, r, o) {
                var i = function a(e, n, t, r) {
                    return function (t) {
                        t.delegateTarget = c(t.target, n), t.delegateTarget && r.call(e, t)
                    }
                }.apply(this, arguments);
                return t.addEventListener(n, i, o), {
                    destroy: function () {
                        t.removeEventListener(n, i, o)
                    }
                }
            }

            t.exports = function a(t, e, n, r, o) {
                return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
                    return i(t, e, n, r, o)
                }))
            }
        }, function (t, e) {
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var n = Element.prototype;
                n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
            }
            t.exports = function r(t, e) {
                for (; t && 9 !== t.nodeType;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
        }])
    })
});
!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (N, e) {
    var f = [], g = N.document, c = f.slice, m = f.concat, s = f.push, i = f.indexOf, n = {}, t = n.toString,
        y = n.hasOwnProperty, v = {}, r = "1.12.4", k = function (e, t) {
            return new k.fn.init(e, t)
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, a = /^-ms-/, u = /-([\da-z])/gi, l = function (e, t) {
            return t.toUpperCase()
        };

    function d(e) {
        var t = !!e && "length" in e && e.length, n = k.type(e);
        return "function" !== n && !k.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    k.fn = k.prototype = {
        jquery: r, constructor: k, selector: "", length: 0, toArray: function () {
            return c.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
        }, pushStack: function (e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return k.each(this, e)
        }, map: function (n) {
            return this.pushStack(k.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(c.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: s, sort: f.sort, splice: f.splice
    }, k.extend = k.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || k.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (i = arguments[s])) for (r in i) e = a[r], a !== (n = i[r]) && (l && n && (k.isPlainObject(n) || (t = k.isArray(n))) ? (o = t ? (t = !1, e && k.isArray(e) ? e : []) : e && k.isPlainObject(e) ? e : {}, a[r] = k.extend(l, o, n)) : n !== undefined && (a[r] = n));
        return a
    }, k.extend({
        expando: "jQuery" + (r + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === k.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === k.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !k.isArray(e) && 0 <= t - parseFloat(t) + 1
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== k.type(e) || e.nodeType || k.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!v.ownFirst) for (t in e) return y.call(e, t);
            for (t in e) ;
            return t === undefined || y.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[t.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            e && k.trim(e) && (N.execScript || function (e) {
                N.eval.call(N, e)
            })(e)
        }, camelCase: function (e) {
            return e.replace(a, "ms-").replace(u, l)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var n, r = 0;
            if (d(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(o, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (i) return i.call(t, e, n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
            if (n != n) for (; t[r] !== undefined;) e[i++] = t[r++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
            return r
        }, map: function (e, t, n) {
            var r, i, o = 0, a = [];
            if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return m.apply([], a)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), k.isFunction(e) ? (n = c.call(arguments, 2), (r = function () {
                return e.apply(t || this, n.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || k.guid++, r) : undefined
        }, now: function () {
            return +new Date
        }, support: v
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = f[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function (n) {
        var e, g, b, o, i, m, f, y, w, u, l, T, C, a, E, v, s, c, x, N = "sizzle" + 1 * new Date, k = n.document, S = 0,
            r = 0, d = ie(), p = ie(), A = ie(), h = function (e, t) {
                return e === t && (l = !0), 0
            }, D = {}.hasOwnProperty, t = [], j = t.pop, L = t.push, H = t.push, q = t.slice, _ = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            R = "\\[" + M + "*(" + O + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            P = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"), W = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            I = new RegExp("^" + M + "*," + M + "*"), $ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(P),
            U = new RegExp("^" + O + "$"), V = {
                ID: new RegExp("^#(" + O + ")"),
                CLASS: new RegExp("^\\.(" + O + ")"),
                TAG: new RegExp("^(" + O + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + F + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/,
            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = /'|\\/g,
            ee = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), te = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, ne = function () {
                T()
            };
        try {
            H.apply(t = q.call(k.childNodes), k.childNodes), t[k.childNodes.length].nodeType
        } catch (be) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, q.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }

        function re(e, t, n, r) {
            var i, o, a, s, u, l, c, f, d = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : k) !== C && T(t), t = t || C, E)) {
                if (11 !== p && (l = Q.exec(e))) if (i = l[1]) {
                    if (9 === p) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (d && (a = d.getElementById(i)) && x(t, a) && a.id === i) return n.push(a), n
                } else {
                    if (l[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = l[3]) && g.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(i)), n
                }
                if (g.qsa && !A[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) d = t, f = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(Z, "\\$&") : t.setAttribute("id", s = N), o = (c = m(e)).length, u = U.test(s) ? "#" + s : "[id='" + s + "']"; o--;) c[o] = u + " " + he(c[o]);
                        f = c.join(","), d = K.test(e) && de(t.parentNode) || t
                    }
                    if (f) try {
                        return H.apply(n, d.querySelectorAll(f)), n
                    } catch (h) {
                    } finally {
                        s === N && t.removeAttribute("id")
                    }
                }
            }
            return y(e.replace(W, "$1"), t, n, r)
        }

        function ie() {
            var n = [];
            return function r(e, t) {
                return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
            }
        }

        function oe(e) {
            return e[N] = !0, e
        }

        function ae(e) {
            var t = C.createElement("div");
            try {
                return !!e(t)
            } catch (be) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function se(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function ue(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function le(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ce(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function fe(a) {
            return oe(function (o) {
                return o = +o, oe(function (e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function de(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        for (e in g = re.support = {}, i = re.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, T = re.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : k;
            return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ne, !1) : n.attachEvent && n.attachEvent("onunload", ne)), g.attributes = ae(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), g.getElementsByTagName = ae(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), g.getElementsByClassName = G.test(C.getElementsByClassName), g.getById = ae(function (e) {
                return a.appendChild(e).id = N, !C.getElementsByName || !C.getElementsByName(N).length
            }), g.getById ? (b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, b.filter.ID = function (e) {
                var t = e.replace(ee, te);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete b.find.ID, b.filter.ID = function (e) {
                var n = e.replace(ee, te);
                return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }), b.find.TAG = g.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : g.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                return r
            }, b.find.CLASS = g.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
            }, s = [], v = [], (g.qsa = G.test(C.querySelectorAll)) && (ae(function (e) {
                a.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + N + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || v.push(".#.+[+~]")
            }), ae(function (e) {
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
            })), (g.matchesSelector = G.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ae(function (e) {
                g.disconnectedMatch = c.call(e, "div"), c.call(e, "[s!='']:x"), s.push("!=", P)
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = G.test(a.compareDocumentPosition), x = t || G.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, h = t ? function (e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !g.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === k && x(k, e) ? -1 : t === C || t.ownerDocument === k && x(k, t) ? 1 : u ? _(u, e) - _(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? _(u, e) - _(u, t) : 0;
                if (i === o) return ue(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[r] === s[r];) r++;
                return r ? ue(a[r], s[r]) : a[r] === k ? -1 : s[r] === k ? 1 : 0
            }), C
        }, re.matches = function (e, t) {
            return re(e, null, null, t)
        }, re.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== C && T(e), t = t.replace(z, "='$1']"), g.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (be) {
            }
            return 0 < re(t, C, null, [e]).length
        }, re.contains = function (e, t) {
            return (e.ownerDocument || e) !== C && T(e), x(e, t)
        }, re.attr = function (e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : undefined;
            return r !== undefined ? r : g.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, re.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, re.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (l = !g.detectDuplicates, u = !g.sortStable && e.slice(0), e.sort(h), l) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return u = null, e
        }, o = re.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += o(t);
            return n
        }, (b = re.selectors = {
            cacheLength: 50,
            createPseudo: oe,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ee, te).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = d[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && d(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, r, i) {
                    return function (e) {
                        var t = re.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (h, e, t, g, m) {
                    var y = "nth" !== h.slice(0, 3), v = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === m ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, i, o, a, s, u, l = y != v ? "nextSibling" : "previousSibling", c = e.parentNode,
                            f = x && e.nodeName.toLowerCase(), d = !n && !x, p = !1;
                        if (c) {
                            if (y) {
                                for (; l;) {
                                    for (a = e; a = a[l];) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [v ? c.firstChild : c.lastChild], v && d) {
                                for (p = (s = (r = (i = (o = (a = c)[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || u.pop();) if (1 === a.nodeType && ++p && a === e) {
                                    i[h] = [S, s, p];
                                    break
                                }
                            } else if (d && (p = s = (r = (i = (o = (a = e)[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === p) for (; (a = ++s && a && a[l] || (p = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++p || (d && ((i = (o = a[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, p]), a !== e));) ;
                            return (p -= m) === g || p % g == 0 && 0 <= p / g
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                    return a[N] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function (e, t) {
                        for (var n, r = a(e, o), i = r.length; i--;) e[n = _(e, r[i])] = !(t[n] = r[i])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: oe(function (e) {
                    var r = [], i = [], s = f(e.replace(W, "$1"));
                    return s[N] ? oe(function (e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--;) (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                    }
                }), has: oe(function (t) {
                    return function (e) {
                        return 0 < re(t, e).length
                    }
                }), contains: oe(function (t) {
                    return t = t.replace(ee, te), function (e) {
                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                    }
                }), lang: oe(function (n) {
                    return U.test(n || "") || re.error("unsupported lang: " + n), n = n.replace(ee, te).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === a
                }, focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return J.test(e.nodeName)
                }, input: function (e) {
                    return Y.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: fe(function () {
                    return [0]
                }), last: fe(function (e, t) {
                    return [t - 1]
                }), eq: fe(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: fe(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: fe(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: fe(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                    return e
                }), gt: fe(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = le(e);
        for (e in{submit: !0, reset: !0}) b.pseudos[e] = ce(e);

        function pe() {
        }

        function he(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ge(s, e, t) {
            var u = e.dir, l = t && "parentNode" === u, c = r++;
            return e.first ? function (e, t, n) {
                for (; e = e[u];) if (1 === e.nodeType || l) return s(e, t, n)
            } : function (e, t, n) {
                var r, i, o, a = [S, c];
                if (n) {
                    for (; e = e[u];) if ((1 === e.nodeType || l) && s(e, t, n)) return !0
                } else for (; e = e[u];) if (1 === e.nodeType || l) {
                    if ((r = (i = (o = e[N] || (e[N] = {}))[e.uniqueID] || (o[e.uniqueID] = {}))[u]) && r[0] === S && r[1] === c) return a[2] = r[2];
                    if ((i[u] = a)[2] = s(e, t, n)) return !0
                }
            }
        }

        function me(i) {
            return 1 < i.length ? function (e, t, n) {
                for (var r = i.length; r--;) if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function ye(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function ve(h, g, m, y, v, e) {
            return y && !y[N] && (y = ve(y)), v && !v[N] && (v = ve(v, e)), oe(function (e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function p(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) re(e, t[r], n);
                        return n
                    }(g || "*", n.nodeType ? [n] : n, []), f = !h || !e && g ? c : ye(c, s, h, n, r),
                    d = m ? v || (e ? h : l || y) ? [] : t : f;
                if (m && m(f, d, n, r), y) for (i = ye(d, u), y(i, [], n, r), o = i.length; o--;) (a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (i = [], o = d.length; o--;) (a = d[o]) && i.push(f[o] = a);
                            v(null, d = [], i, r)
                        }
                        for (o = d.length; o--;) (a = d[o]) && -1 < (i = v ? _(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else d = ye(d === t ? d.splice(l, d.length) : d), v ? v(null, t, d, r) : H.apply(t, d)
            })
        }

        function xe(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = ge(function (e) {
                return e === i
            }, a, !0), l = ge(function (e) {
                return -1 < _(i, e)
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r
            }]; s < r; s++) if (t = b.relative[e[s].type]) c = [ge(me(c), t)]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[N]) {
                    for (n = ++s; n < r && !b.relative[e[n].type]; n++) ;
                    return ve(1 < s && me(c), 1 < s && he(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(W, "$1"), t, s < n && xe(e.slice(s, n)), n < r && xe(e = e.slice(n)), n < r && he(e))
                }
                c.push(t)
            }
            return me(c)
        }

        return pe.prototype = b.filters = b.pseudos, b.setFilters = new pe, m = re.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = p[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], u = b.preFilter; a;) {
                for (o in n && !(r = I.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = $.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }), a = a.slice(n.length)), b.filter) !(r = V[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? re.error(e) : p(e, s).slice(0)
        }, f = re.compile = function (e, t) {
            var n, r = [], i = [], o = A[e + " "];
            if (!o) {
                for (t || (t = m(e)), n = t.length; n--;) (o = xe(t[n]))[N] ? r.push(o) : i.push(o);
                (o = A(e, function a(m, y) {
                    var v = 0 < y.length, x = 0 < m.length, e = function (e, t, n, r, i) {
                        var o, a, s, u = 0, l = "0", c = e && [], f = [], d = w, p = e || x && b.find.TAG("*", i),
                            h = S += null == d ? 1 : Math.random() || .1, g = p.length;
                        for (i && (w = t === C || t || i); l !== g && null != (o = p[l]); l++) {
                            if (x && o) {
                                for (a = 0, t || o.ownerDocument === C || (T(o), n = !E); s = m[a++];) if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                                i && (S = h)
                            }
                            v && ((o = !s && o) && u--, e && c.push(o))
                        }
                        if (u += l, v && l !== u) {
                            for (a = 0; s = y[a++];) s(c, f, t, n);
                            if (e) {
                                if (0 < u) for (; l--;) c[l] || f[l] || (f[l] = j.call(r));
                                f = ye(f)
                            }
                            H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && re.uniqueSort(r)
                        }
                        return i && (S = h, w = d), c
                    };
                    return v ? oe(e) : e
                }(i, r))).selector = e
            }
            return o
        }, y = re.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && m(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && g.getById && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(ee, te), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = V.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);) if ((u = b.find[s]) && (r = u(a.matches[0].replace(ee, te), K.test(o[0].type) && de(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && he(o))) return H.apply(n, r), n;
                    break
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || K.test(e) && de(t.parentNode) || t), n
        }, g.sortStable = N.split("").sort(h).join("") === N, g.detectDuplicates = !!l, T(), g.sortDetached = ae(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("div"))
        }), ae(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || se("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), g.attributes && ae(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || se("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ae(function (e) {
            return null == e.getAttribute("disabled")
        }) || se(F, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), re
    }(N);
    k.find = p, k.expr = p.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = p.uniqueSort, k.text = p.getText, k.isXMLDoc = p.isXML, k.contains = p.contains;
    var h = function (e, t, n) {
        for (var r = [], i = n !== undefined; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (i && k(e).is(n)) break;
            r.push(e)
        }
        return r
    }, x = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, b = k.expr.match.needsContext, w = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, T = /^.[^:#\[\.,]*$/;

    function C(e, n, r) {
        if (k.isFunction(n)) return k.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        });
        if (n.nodeType) return k.grep(e, function (e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (T.test(n)) return k.filter(n, e, r);
            n = k.filter(n, e)
        }
        return k.grep(e, function (e) {
            return -1 < k.inArray(e, n) !== r
        })
    }

    k.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
                for (t = 0; t < i; t++) if (k.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) k.find(e, r[t], n);
            return (n = this.pushStack(1 < i ? k.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(C(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(C(this, e || [], !0))
        }, is: function (e) {
            return !!C(this, "string" == typeof e && b.test(e) ? k(e) : e || [], !1).length
        }
    });
    var E, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (k.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || E, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : k.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(k) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), k.makeArray(e, this));
        if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), w.test(r[1]) && k.isPlainObject(t)) for (r in t) k.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        if ((i = g.getElementById(r[2])) && i.parentNode) {
            if (i.id !== r[2]) return E.find(e);
            this.length = 1, this[0] = i
        }
        return this.context = g, this.selector = e, this
    }).prototype = k.fn, E = k(g);
    var A = /^(?:parents|prev(?:Until|All))/, D = {children: !0, contents: !0, next: !0, prev: !0};

    function j(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    k.fn.extend({
        has: function (e) {
            var t, n = k(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++) if (k.contains(this, n[t])) return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = b.test(e) || "string" != typeof e ? k(e, t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? k.inArray(this[0], k(e)) : k.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return h(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        }, next: function (e) {
            return j(e, "nextSibling")
        }, prev: function (e) {
            return j(e, "previousSibling")
        }, nextAll: function (e) {
            return h(e, "nextSibling")
        }, prevAll: function (e) {
            return h(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        }, siblings: function (e) {
            return x((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return x(e.firstChild)
        }, contents: function (e) {
            return k.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : k.merge([], e.childNodes)
        }
    }, function (r, i) {
        k.fn[r] = function (e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (D[r] || (n = k.uniqueSort(n)), A.test(r) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var L, H, q = /\S+/g;

    function _() {
        g.addEventListener ? (g.removeEventListener("DOMContentLoaded", F), N.removeEventListener("load", F)) : (g.detachEvent("onreadystatechange", F), N.detachEvent("onload", F))
    }

    function F() {
        (g.addEventListener || "load" === N.event.type || "complete" === g.readyState) && (_(), k.ready())
    }

    for (H in k.Callbacks = function (r) {
        r = "string" == typeof r ? function c(e) {
            var n = {};
            return k.each(e.match(q) || [], function (e, t) {
                n[t] = !0
            }), n
        }(r) : k.extend({}, r);
        var i, e, t, n, o = [], a = [], s = -1, u = function () {
            for (n = r.once, t = i = !0; a.length; s = -1) for (e = a.shift(); ++s < o.length;) !1 === o[s].apply(e[0], e[1]) && r.stopOnFalse && (s = o.length, e = !1);
            r.memory || (e = !1), i = !1, n && (o = e ? [] : "")
        }, l = {
            add: function () {
                return o && (e && !i && (s = o.length - 1, a.push(e)), function n(e) {
                    k.each(e, function (e, t) {
                        k.isFunction(t) ? r.unique && l.has(t) || o.push(t) : t && t.length && "string" !== k.type(t) && n(t)
                    })
                }(arguments), e && !i && u()), this
            }, remove: function () {
                return k.each(arguments, function (e, t) {
                    for (var n; -1 < (n = k.inArray(t, o, n));) o.splice(n, 1), n <= s && s--
                }), this
            }, has: function (e) {
                return e ? -1 < k.inArray(e, o) : 0 < o.length
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return n = a = [], o = e = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return n = !0, e || l.disable(), this
            }, locked: function () {
                return !!n
            }, fireWith: function (e, t) {
                return n || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), i || u()), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!t
            }
        };
        return l
    }, k.extend({
        Deferred: function (e) {
            var o = [["resolve", "done", k.Callbacks("once memory"), "resolved"], ["reject", "fail", k.Callbacks("once memory"), "rejected"], ["notify", "progress", k.Callbacks("memory")]],
                i = "pending", a = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, then: function () {
                        var i = arguments;
                        return k.Deferred(function (r) {
                            k.each(o, function (e, t) {
                                var n = k.isFunction(i[e]) && i[e];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && k.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this === a ? r.promise() : this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? k.extend(e, a) : a
                    }
                }, s = {};
            return a.pipe = a.then, k.each(o, function (e, t) {
                var n = t[2], r = t[3];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? a : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var i, t, n, r = 0, o = c.call(arguments), a = o.length,
                s = 1 !== a || e && k.isFunction(e.promise) ? a : 0, u = 1 === s ? e : k.Deferred(),
                l = function (t, n, r) {
                    return function (e) {
                        n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (1 < a) for (i = new Array(a), t = new Array(a), n = new Array(a); r < a; r++) o[r] && k.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, i)).done(l(r, n, o)).fail(u.reject) : --s;
            return s || u.resolveWith(n, o), u.promise()
        }
    }), k.fn.ready = function (e) {
        return k.ready.promise().done(e), this
    }, k.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? k.readyWait++ : k.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || (L.resolveWith(g, [k]), k.fn.triggerHandler && (k(g).triggerHandler("ready"), k(g).off("ready")))
        }
    }), k.ready.promise = function (e) {
        if (!L) if (L = k.Deferred(), "complete" === g.readyState || "loading" !== g.readyState && !g.documentElement.doScroll) N.setTimeout(k.ready); else if (g.addEventListener) g.addEventListener("DOMContentLoaded", F), N.addEventListener("load", F); else {
            g.attachEvent("onreadystatechange", F), N.attachEvent("onload", F);
            var t = !1;
            try {
                t = null == N.frameElement && g.documentElement
            } catch (n) {
            }
            t && t.doScroll && !function r() {
                if (!k.isReady) {
                    try {
                        t.doScroll("left")
                    } catch (n) {
                        return N.setTimeout(r, 50)
                    }
                    _(), k.ready()
                }
            }()
        }
        return L.promise(e)
    }, k.ready.promise(), k(v)) break;
    v.ownFirst = "0" === H, v.inlineBlockNeedsLayout = !1, k(function () {
        var e, t, n, r;
        (n = g.getElementsByTagName("body")[0]) && n.style && (t = g.createElement("div"), (r = g.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", v.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }), function () {
        var e = g.createElement("div");
        v.deleteExpando = !0;
        try {
            delete e.test
        } catch (t) {
            v.deleteExpando = !1
        }
        e = null
    }();
    var M, O = function (e) {
        var t = k.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }, R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, P = /([A-Z])/g;

    function B(e, t, n) {
        if (n === undefined && 1 === e.nodeType) {
            var r = "data-" + t.replace(P, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : R.test(n) ? k.parseJSON(n) : n)
                } catch (i) {
                }
                k.data(e, t, n)
            } else n = undefined
        }
        return n
    }

    function W(e) {
        var t;
        for (t in e) if (("data" !== t || !k.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function I(e, t, n, r) {
        if (O(e)) {
            var i, o, a = k.expando, s = e.nodeType, u = s ? k.cache : e, l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || n !== undefined || "string" != typeof t) return l || (l = s ? e[a] = f.pop() || k.guid++ : a), u[l] || (u[l] = s ? {} : {toJSON: k.noop}), "object" != typeof t && "function" != typeof t || (r ? u[l] = k.extend(u[l], t) : u[l].data = k.extend(u[l].data, t)), o = u[l], r || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[k.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[k.camelCase(t)]) : i = o, i
        }
    }

    function $(e, t, n) {
        if (O(e)) {
            var r, i, o = e.nodeType, a = o ? k.cache : e, s = o ? e[k.expando] : k.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    i = (t = k.isArray(t) ? t.concat(k.map(t, k.camelCase)) : t in r ? [t] : (t = k.camelCase(t)) in r ? [t] : t.split(" ")).length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !W(r) : !k.isEmptyObject(r)) return
                }
                (n || (delete a[s].data, W(a[s]))) && (o ? k.cleanData([e], !0) : v.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
            }
        }
    }

    k.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return !!(e = e.nodeType ? k.cache[e[k.expando]] : e[k.expando]) && !W(e)
        },
        data: function (e, t, n) {
            return I(e, t, n)
        },
        removeData: function (e, t) {
            return $(e, t)
        },
        _data: function (e, t, n) {
            return I(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return $(e, t, !0)
        }
    }), k.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (e !== undefined) return "object" == typeof e ? this.each(function () {
                k.data(this, e)
            }) : 1 < arguments.length ? this.each(function () {
                k.data(this, e, t)
            }) : o ? B(o, e, k.data(o, e)) : undefined;
            if (this.length && (i = k.data(o), 1 === o.nodeType && !k._data(o, "parsedAttrs"))) {
                for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && B(o, r = k.camelCase(r.slice(5)), i[r]);
                k._data(o, "parsedAttrs", !0)
            }
            return i
        }, removeData: function (e) {
            return this.each(function () {
                k.removeData(this, e)
            })
        }
    }), k.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = k._data(e, t), n && (!r || k.isArray(n) ? r = k._data(e, t, k.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return k._data(e, n) || k._data(e, n, {
                empty: k.Callbacks("once memory").add(function () {
                    k._removeData(e, t + "queue"), k._removeData(e, n)
                })
            })
        }
    }), k.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : n === undefined ? this : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                k.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;) (n = k._data(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    }), v.shrinkWrapBlocks = function () {
        return null != M ? M : (M = !1, (t = g.getElementsByTagName("body")[0]) && t.style ? (e = g.createElement("div"), (n = g.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(g.createElement("div")).style.width = "5px", M = 3 !== e.offsetWidth), t.removeChild(n), M) : void 0);
        var e, t, n
    };
    var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, X = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"], V = function (e, t) {
            return e = t || e, "none" === k.css(e, "display") || !k.contains(e.ownerDocument, e)
        };

    function Y(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function () {
                return r.cur()
            } : function () {
                return k.css(e, t, "")
            }, u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = (k.cssNumber[t] || "px" !== l && +u) && X.exec(k.css(e, t));
        if (c && c[3] !== l) for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", k.style(e, t, c + l), o !== (o = s() / u) && 1 !== o && --a;) ;
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var J, G, Q, K = function (e, t, n, r, i, o, a) {
            var s = 0, u = e.length, l = null == n;
            if ("object" === k.type(n)) for (s in i = !0, n) K(e, t, s, n[s], !0, o, a); else if (r !== undefined && (i = !0, k.isFunction(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function (e, t, n) {
                return l.call(k(e), n)
            })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        }, Z = /^(?:checkbox|radio)$/i, ee = /<([\w:-]+)/, te = /^$|\/(?:java|ecma)script/i, ne = /^\s+/,
        re = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ie(e) {
        var t = re.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }

    J = g.createElement("div"), G = g.createDocumentFragment(), Q = g.createElement("input"), J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", v.leadingWhitespace = 3 === J.firstChild.nodeType, v.tbody = !J.getElementsByTagName("tbody").length, v.htmlSerialize = !!J.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !== g.createElement("nav").cloneNode(!0).outerHTML, Q.type = "checkbox", Q.checked = !0, G.appendChild(Q), v.appendChecked = Q.checked, J.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!J.cloneNode(!0).lastChild.defaultValue, G.appendChild(J), (Q = g.createElement("input")).setAttribute("type", "radio"), Q.setAttribute("checked", "checked"), Q.setAttribute("name", "t"), J.appendChild(Q), v.checkClone = J.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !!J.addEventListener, J[k.expando] = 1, v.attributes = !J.getAttribute(k.expando);
    var oe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

    function ae(e, t) {
        var n, r, i = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
        if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || k.nodeName(r, t) ? o.push(r) : k.merge(o, ae(r, t));
        return t === undefined || t && k.nodeName(e, t) ? k.merge([e], o) : o
    }

    function se(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) k._data(n, "globalEval", !t || k._data(t[r], "globalEval"))
    }

    oe.optgroup = oe.option, oe.tbody = oe.tfoot = oe.colgroup = oe.caption = oe.thead, oe.th = oe.td;
    var ue = /<|&#?\w+;/, le = /<tbody/i;

    function ce(e) {
        Z.test(e.type) && (e.defaultChecked = e.checked)
    }

    function fe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f, d = e.length, p = ie(t), h = [], g = 0; g < d; g++) if ((a = e[g]) || 0 === a) if ("object" === k.type(a)) k.merge(h, a.nodeType ? [a] : a); else if (ue.test(a)) {
            for (u = u || p.appendChild(t.createElement("div")), l = (ee.exec(a) || ["", ""])[1].toLowerCase(), f = oe[l] || oe._default, u.innerHTML = f[1] + k.htmlPrefilter(a) + f[2], o = f[0]; o--;) u = u.lastChild;
            if (!v.leadingWhitespace && ne.test(a) && h.push(t.createTextNode(ne.exec(a)[0])), !v.tbody) for (o = (a = "table" !== l || le.test(a) ? "<table>" !== f[1] || le.test(a) ? 0 : u : u.firstChild) && a.childNodes.length; o--;) k.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (k.merge(h, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
            u = p.lastChild
        } else h.push(t.createTextNode(a));
        for (u && p.removeChild(u), v.appendChecked || k.grep(ae(h, "input"), ce), g = 0; a = h[g++];) if (r && -1 < k.inArray(a, r)) i && i.push(a); else if (s = k.contains(a.ownerDocument, a), u = ae(p.appendChild(a), "script"), s && se(u), n) for (o = 0; a = u[o++];) te.test(a.type || "") && n.push(a);
        return u = null, p
    }

    !function () {
        var e, t, n = g.createElement("div");
        for (e in{
            submit: !0,
            change: !0,
            focusin: !0
        }) t = "on" + e, (v[e] = t in N) || (n.setAttribute(t, "t"), v[e] = !1 === n.attributes[t].expando);
        n = null
    }();
    var de = /^(?:input|select|textarea)$/i, pe = /^key/, he = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ge = /^(?:focusinfocus|focusoutblur)$/, me = /^([^.]*)(?:\.(.+)|)/;

    function ye() {
        return !0
    }

    function ve() {
        return !1
    }

    function xe() {
        try {
            return g.activeElement
        } catch (e) {
        }
    }

    function be(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in"string" != typeof n && (r = r || n, n = undefined), t) be(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, r = undefined) : (i = r, r = n, n = undefined)), !1 === i) i = ve; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
            k.event.add(this, t, i, r, n)
        })
    }

    k.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = k._data(e);
            if (m) {
                for (n.handler && (n = (u = n).handler, i = u.selector), n.guid || (n.guid = k.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || ((c = m.handle = function (e) {
                    return void 0 === k || e && k.event.triggered === e.type ? undefined : k.event.dispatch.apply(c.elem, arguments)
                }).elem = e), s = (t = (t || "").match(q) || [""]).length; s--;) p = g = (o = me.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), p && (l = k.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, l = k.event.special[p] || {}, f = k.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (d = a[p]) || ((d = a[p] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), k.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = k.hasData(e) && k._data(e);
            if (m && (c = m.events)) {
                for (l = (t = (t || "").match(q) || [""]).length; l--;) if (p = g = (s = me.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                    for (f = k.event.special[p] || {}, d = c[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || k.removeEvent(e, p, m.handle), delete c[p])
                } else for (p in c) k.event.remove(e, p + t[l], n, r, !0);
                k.isEmptyObject(c) && (delete m.handle, k._removeData(e, "events"))
            }
        },
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f = [n || g], d = y.call(e, "type") ? e.type : e,
                p = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = l = n = n || g, 3 !== n.nodeType && 8 !== n.nodeType && !ge.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), o = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), u = k.event.special[d] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!r && !u.noBubble && !k.isWindow(n)) {
                    for (s = u.delegateType || d, ge.test(s + d) || (a = a.parentNode); a; a = a.parentNode) f.push(a), l = a;
                    l === (n.ownerDocument || g) && f.push(l.defaultView || l.parentWindow || N)
                }
                for (c = 0; (a = f[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? s : u.bindType || d, (i = (k._data(a, "events") || {})[e.type] && k._data(a, "handle")) && i.apply(a, t), (i = o && a[o]) && i.apply && O(a) && (e.result = i.apply(a, t), !1 === e.result && e.preventDefault());
                if (e.type = d, !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(f.pop(), t)) && O(n) && o && n[d] && !k.isWindow(n)) {
                    (l = n[o]) && (n[o] = null), k.event.triggered = d;
                    try {
                        n[d]()
                    } catch (h) {
                    }
                    k.event.triggered = undefined, l && (n[o] = l)
                }
                return e.result
            }
        },
        dispatch: function (e) {
            e = k.event.fix(e);
            var t, n, r, i, o, a, s = c.call(arguments), u = (k._data(this, "events") || {})[e.type] || [],
                l = k.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = k.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) !== undefined && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                for (r = [], n = 0; n < s; n++) r[i = (o = t[n]).selector + " "] === undefined && (r[i] = o.needsContext ? -1 < k(i, this).index(u) : k.find(i, this, null, [u]).length), r[i] && r.push(o);
                r.length && a.push({elem: u, handlers: r})
            }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        fix: function (e) {
            if (e[k.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = he.test(i) ? this.mouseHooks : pe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new k.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = o.srcElement || g), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || g).documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== xe() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === xe() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (k.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                }, _default: function (e) {
                    return k.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n) {
            var r = k.extend(new k.Event, n, {type: e, isSimulated: !0});
            k.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
        }
    }, k.removeEvent = g.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
    }, k.Event = function (e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? ye : ve) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || k.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: ve,
        isPropagationStopped: ve,
        isImmediatePropagationStopped: ve,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ye, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ye, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ye, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        k.event.special[e] = {
            delegateType: i, bindType: i, handle: function (e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), v.submit || (k.event.special.submit = {
        setup: function () {
            if (k.nodeName(this, "form")) return !1;
            k.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, n = k.nodeName(t, "input") || k.nodeName(t, "button") ? k.prop(t, "form") : undefined;
                n && !k._data(n, "submit") && (k.event.add(n, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), k._data(n, "submit", !0))
            })
        }, postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && k.event.simulate("submit", this.parentNode, e))
        }, teardown: function () {
            if (k.nodeName(this, "form")) return !1;
            k.event.remove(this, "._submit")
        }
    }), v.change || (k.event.special.change = {
        setup: function () {
            if (de.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (k.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), k.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), k.event.simulate("change", this, e)
            })), !1;
            k.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                de.test(t.nodeName) && !k._data(t, "change") && (k.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || k.event.simulate("change", this.parentNode, e)
                }), k._data(t, "change", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return k.event.remove(this, "._change"), !de.test(this.nodeName)
        }
    }), v.focusin || k.each({focus: "focusin", blur: "focusout"}, function (n, r) {
        var i = function (e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this, t = k._data(e, r);
                t || e.addEventListener(n, i, !0), k._data(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, t = k._data(e, r) - 1;
                t ? k._data(e, r, t) : (e.removeEventListener(n, i, !0), k._removeData(e, r))
            }
        }
    }), k.fn.extend({
        on: function (e, t, n, r) {
            return be(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return be(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = ve), this.each(function () {
                k.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }, trigger: function (e, t) {
            return this.each(function () {
                k.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    });
    var we = / jQuery\d+="(?:null|\d+)"/g, Te = new RegExp("<(?:" + re + ")[\\s/>]", "i"),
        Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ee = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i, ke = /^true\/(.*)/, Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ae = ie(g).appendChild(g.createElement("div"));

    function De(e, t) {
        return k.nodeName(e, "table") && k.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function je(e) {
        return e.type = (null !== k.find.attr(e, "type")) + "/" + e.type, e
    }

    function Le(e) {
        var t = ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function He(e, t) {
        if (1 === t.nodeType && k.hasData(e)) {
            var n, r, i, o = k._data(e), a = k._data(t, o), s = o.events;
            if (s) for (n in delete a.handle, a.events = {}, s) for (r = 0, i = s[n].length; r < i; r++) k.event.add(t, n, s[n][r]);
            a.data && (a.data = k.extend({}, a.data))
        }
    }

    function qe(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !v.noCloneEvent && t[k.expando]) {
                for (r in(i = k._data(t)).events) k.removeEvent(t, r, i.handle);
                t.removeAttribute(k.expando)
            }
            "script" === n && t.text !== e.text ? (je(t).text = e.text, Le(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), v.html5Clone && e.innerHTML && !k.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Z.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function _e(n, r, i, o) {
        r = m.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, d = f - 1, p = r[0], h = k.isFunction(p);
        if (h || 1 < f && "string" == typeof p && !v.checkClone && Ne.test(p)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = p.call(this, e, t.html())), _e(t, r, i, o)
        });
        if (f && (e = (l = fe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === l.childNodes.length && (l = e), e || o)) {
            for (a = (s = k.map(ae(l, "script"), je)).length; c < f; c++) t = l, c !== d && (t = k.clone(t, !0, !0), a && k.merge(s, ae(t, "script"))), i.call(n[c], t, c);
            if (a) for (u = s[s.length - 1].ownerDocument, k.map(s, Le), c = 0; c < a; c++) t = s[c], te.test(t.type || "") && !k._data(t, "globalEval") && k.contains(u, t) && (t.src ? k._evalUrl && k._evalUrl(t.src) : k.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Se, "")));
            l = e = null
        }
        return n
    }

    function Fe(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ae(r)), r.parentNode && (n && k.contains(r.ownerDocument, r) && se(ae(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    k.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ce, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s, u = k.contains(e.ownerDocument, e);
            if (v.html5Clone || k.isXMLDoc(e) || !Te.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Ae.innerHTML = e.outerHTML, Ae.removeChild(o = Ae.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (r = ae(o), s = ae(e), a = 0; null != (i = s[a]); ++a) r[a] && qe(i, r[a]);
            if (t) if (n) for (s = s || ae(e), r = r || ae(o), a = 0; null != (i = s[a]); a++) He(i, r[a]); else He(e, o);
            return 0 < (r = ae(o, "script")).length && se(r, !u && ae(e, "script")), r = s = i = null, o
        }, cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = k.expando, u = k.cache, l = v.attributes, c = k.event.special; null != (n = e[a]); a++) if ((t || O(n)) && (o = (i = n[s]) && u[i])) {
                if (o.events) for (r in o.events) c[r] ? k.event.remove(n, r) : k.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), f.push(i))
            }
        }
    }), k.fn.extend({
        domManip: _e, detach: function (e) {
            return Fe(this, e, !0)
        }, remove: function (e) {
            return Fe(this, e)
        }, text: function (e) {
            return K(this, function (e) {
                return e === undefined ? k.text(this) : this.empty().append((this[0] && this[0].ownerDocument || g).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return _e(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
            })
        }, prepend: function () {
            return _e(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return _e(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return _e(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && k.cleanData(ae(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && k.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return k.clone(this, e, t)
            })
        }, html: function (e) {
            return K(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(we, "") : undefined;
                if ("string" == typeof e && !Ee.test(e) && (v.htmlSerialize || !Te.test(e)) && (v.leadingWhitespace || !ne.test(e)) && !oe[(ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ae(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return _e(this, arguments, function (e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ae(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        k.fn[e] = function (e) {
            for (var t, n = 0, r = [], i = k(e), o = i.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), k(i[n])[a](t), s.apply(r, t.get());
            return this.pushStack(r)
        }
    });
    var Me, Oe = {HTML: "block", BODY: "block"};

    function Re(e, t) {
        var n = k(t.createElement(e)).appendTo(t.body), r = k.css(n[0], "display");
        return n.detach(), r
    }

    function Pe(e) {
        var t = g, n = Oe[e];
        return n || ("none" !== (n = Re(e, t)) && n || ((t = ((Me = (Me || k("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Me[0].contentDocument).document).write(), t.close(), n = Re(e, t), Me.detach()), Oe[e] = n), n
    }

    var Be = /^margin/, We = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i"), Ie = function (e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
        return i
    }, $e = g.documentElement;
    !function () {
        var r, i, o, a, s, u, l = g.createElement("div"), c = g.createElement("div");

        function e() {
            var e, t, n = g.documentElement;
            n.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r = o = u = !1, i = s = !0, N.getComputedStyle && (t = N.getComputedStyle(c), r = "1%" !== (t || {}).top, u = "2px" === (t || {}).marginLeft, o = "4px" === (t || {width: "4px"}).width, c.style.marginRight = "50%", i = "4px" === (t || {marginRight: "4px"}).marginRight, (e = c.appendChild(g.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", s = !parseFloat((N.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", (a = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (e = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", a = 0 === e[0].offsetHeight)), n.removeChild(l)
        }

        c.style && (c.style.cssText = "float:left;opacity:.5", v.opacity = "0.5" === c.style.opacity, v.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, (l = g.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), v.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, k.extend(v, {
            reliableHiddenOffsets: function () {
                return null == r && e(), a
            }, boxSizingReliable: function () {
                return null == r && e(), o
            }, pixelMarginRight: function () {
                return null == r && e(), i
            }, pixelPosition: function () {
                return null == r && e(), r
            }, reliableMarginRight: function () {
                return null == r && e(), s
            }, reliableMarginLeft: function () {
                return null == r && e(), u
            }
        }))
    }();
    var ze, Xe, Ue = /^(top|right|bottom|left)$/;

    function Ve(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    N.getComputedStyle ? (ze = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = N), t.getComputedStyle(e)
    }, Xe = function (e, t, n) {
        var r, i, o, a, s = e.style;
        return "" !== (a = (n = n || ze(e)) ? n.getPropertyValue(t) || n[t] : undefined) && a !== undefined || k.contains(e.ownerDocument, e) || (a = k.style(e, t)), n && !v.pixelMarginRight() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), a === undefined ? a : a + ""
    }) : $e.currentStyle && (ze = function (e) {
        return e.currentStyle
    }, Xe = function (e, t, n) {
        var r, i, o, a, s = e.style;
        return null == (a = (n = n || ze(e)) ? n[t] : undefined) && s && s[t] && (a = s[t]), We.test(a) && !Ue.test(t) && (r = s.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), a === undefined ? a : a + "" || "auto"
    });
    var Ye = /alpha\([^)]*\)/i, Je = /opacity\s*=\s*([^)]*)/i, Ge = /^(none|table(?!-c[ea]).+)/,
        Qe = new RegExp("^(" + z + ")(.*)$", "i"), Ke = {position: "absolute", visibility: "hidden", display: "block"},
        Ze = {letterSpacing: "0", fontWeight: "400"}, et = ["Webkit", "O", "Moz", "ms"],
        tt = g.createElement("div").style;

    function nt(e) {
        if (e in tt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = et.length; n--;) if ((e = et[n] + t) in tt) return e
    }

    function rt(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) (r = e[a]).style && (o[a] = k._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && V(r) && (o[a] = k._data(r, "olddisplay", Pe(r.nodeName)))) : (i = V(r), (n && "none" !== n || !i) && k._data(r, "olddisplay", i ? n : k.css(r, "display"))));
        for (a = 0; a < s; a++) (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function it(e, t, n) {
        var r = Qe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function ot(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += k.css(e, n + U[o], !0, i)), r ? ("content" === n && (a -= k.css(e, "padding" + U[o], !0, i)), "margin" !== n && (a -= k.css(e, "border" + U[o] + "Width", !0, i))) : (a += k.css(e, "padding" + U[o], !0, i), "padding" !== n && (a += k.css(e, "border" + U[o] + "Width", !0, i)));
        return a
    }

    function at(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = ze(e),
            a = v.boxSizing && "border-box" === k.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = Xe(e, t, o)) < 0 || null == i) && (i = e.style[t]), We.test(i)) return i;
            r = a && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + ot(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function st(e, t, n, r, i) {
        return new st.prototype.init(e, t, n, r, i)
    }

    k.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Xe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": v.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = k.camelCase(t), u = e.style;
                if (t = k.cssProps[s] || (k.cssProps[s] = nt(s) || s), a = k.cssHooks[t] || k.cssHooks[s], n === undefined) return a && "get" in a && (i = a.get(e, !1, r)) !== undefined ? i : u[t];
                if ("string" === (o = typeof n) && (i = X.exec(n)) && i[1] && (n = Y(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && (n = a.set(e, n, r)) === undefined))) try {
                    u[t] = n
                } catch (l) {
                }
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = k.camelCase(t);
            return t = k.cssProps[s] || (k.cssProps[s] = nt(s) || s), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), o === undefined && (o = Xe(e, t, r)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), k.each(["height", "width"], function (e, i) {
        k.cssHooks[i] = {
            get: function (e, t, n) {
                if (t) return Ge.test(k.css(e, "display")) && 0 === e.offsetWidth ? Ie(e, Ke, function () {
                    return at(e, i, n)
                }) : at(e, i, n)
            }, set: function (e, t, n) {
                var r = n && ze(e);
                return it(0, t, n ? ot(e, i, n, v.boxSizing && "border-box" === k.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), v.opacity || (k.cssHooks.opacity = {
        get: function (e, t) {
            return Je.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = k.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === k.trim(o.replace(Ye, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Ye.test(o) ? o.replace(Ye, i) : o + " " + i)
        }
    }), k.cssHooks.marginRight = Ve(v.reliableMarginRight, function (e, t) {
        if (t) return Ie(e, {display: "inline-block"}, Xe, [e, "marginRight"])
    }), k.cssHooks.marginLeft = Ve(v.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Xe(e, "marginLeft")) || (k.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Ie(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), k.each({margin: "", padding: "", border: "Width"}, function (i, o) {
        k.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + U[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, Be.test(i) || (k.cssHooks[i + o].set = it)
    }), k.fn.extend({
        css: function (e, t) {
            return K(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (k.isArray(t)) {
                    for (r = ze(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return n !== undefined ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }, show: function () {
            return rt(this, !0)
        }, hide: function () {
            return rt(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                V(this) ? k(this).show() : k(this).hide()
            })
        }
    }), ((k.Tween = st).prototype = {
        constructor: st, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = st.propHooks[this.prop];
            return e && e.get ? e.get(this) : st.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = st.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : st.propHooks._default.set(this), this
        }
    }).init.prototype = st.prototype, (st.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = st.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, k.fx = st.prototype.init, k.fx.step = {};
    var ut, lt, ct, ft, dt, pt, ht, gt = /^(?:toggle|show|hide)$/, mt = /queueHooks$/;

    function yt() {
        return N.setTimeout(function () {
            ut = undefined
        }), ut = k.now()
    }

    function vt(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = U[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function xt(e, t, n) {
        for (var r, i = (bt.tweeners[t] || []).concat(bt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function bt(o, e, t) {
        var n, a, r = 0, i = bt.prefilters.length, s = k.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a) return !1;
            for (var e = ut || yt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (s.resolveWith(o, [l]), !1)
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: ut || yt(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
            }
        }), c = l.props;
        for (!function f(e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = k.camelCase(n)], o = e[n], k.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
        }(c, l.opts.specialEasing); r < i; r++) if (n = bt.prefilters[r].call(l, o, c, l.opts)) return k.isFunction(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = k.proxy(n.stop, n)), n;
        return k.map(c, xt, l), k.isFunction(l.opts.start) && l.opts.start.call(o, l), k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    k.Animation = k.extend(bt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return Y(n.elem, e, X.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            for (var n, r = 0, i = (e = k.isFunction(e) ? (t = e, ["*"]) : e.match(q)).length; r < i; r++) n = e[r], bt.tweeners[n] = bt.tweeners[n] || [], bt.tweeners[n].unshift(t)
        }, prefilters: [function gn(t, e, n) {
            var r, i, o, a, s, u, l, c = this, f = {}, d = t.style, p = t.nodeType && V(t), h = k._data(t, "fxshow");
            for (r in n.queue || (null == (s = k._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
                s.unqueued || u()
            }), s.unqueued++, c.always(function () {
                c.always(function () {
                    s.unqueued--, k.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (l = k.css(t, "display")) ? k._data(t, "olddisplay") || Pe(t.nodeName) : l) && "none" === k.css(t, "float") && (v.inlineBlockNeedsLayout && "inline" !== Pe(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", v.shrinkWrapBlocks() || c.always(function () {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            })), e) if (i = e[r], gt.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !h || h[r] === undefined) continue;
                    p = !0
                }
                f[r] = h && h[r] || k.style(t, r)
            } else l = undefined;
            if (k.isEmptyObject(f)) "inline" === ("none" === l ? Pe(t.nodeName) : l) && (d.display = l); else for (r in h ? "hidden" in h && (p = h.hidden) : h = k._data(t, "fxshow", {}), o && (h.hidden = !p), p ? k(t).show() : c.done(function () {
                k(t).hide()
            }), c.done(function () {
                var e;
                for (e in k._removeData(t, "fxshow"), f) k.style(t, e, f[e])
            }), f) a = xt(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }], prefilter: function (e, t) {
            t ? bt.prefilters.unshift(e) : bt.prefilters.push(e)
        }
    }), k.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || k.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !k.isFunction(t) && t
        };
        return r.duration = k.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in k.fx.speeds ? k.fx.speeds[r.duration] : k.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            k.isFunction(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(V).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function () {
                var e = bt(this, k.extend({}, t), o);
                (i || k._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = undefined), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = k.timers, r = k._data(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && mt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = k._data(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function (e, r) {
        var i = k.fn[r];
        k.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(vt(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: vt("show"),
        slideUp: vt("hide"),
        slideToggle: vt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, r) {
        k.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function () {
        var e, t = k.timers, n = 0;
        for (ut = k.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || k.fx.stop(), ut = undefined
    }, k.fx.timer = function (e) {
        k.timers.push(e), e() ? k.fx.start() : k.timers.pop()
    }, k.fx.interval = 13, k.fx.start = function () {
        lt || (lt = N.setInterval(k.fx.tick, k.fx.interval))
    }, k.fx.stop = function () {
        N.clearInterval(lt), lt = null
    }, k.fx.speeds = {slow: 600, fast: 200, _default: 400}, k.fn.delay = function (r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = N.setTimeout(e, r);
            t.stop = function () {
                N.clearTimeout(n)
            }
        })
    }, ft = g.createElement("input"), dt = g.createElement("div"), pt = g.createElement("select"), ht = pt.appendChild(g.createElement("option")), (dt = g.createElement("div")).setAttribute("className", "t"), dt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ct = dt.getElementsByTagName("a")[0], ft.setAttribute("type", "checkbox"), dt.appendChild(ft), (ct = dt.getElementsByTagName("a")[0]).style.cssText = "top:1px", v.getSetAttribute = "t" !== dt.className, v.style = /top/.test(ct.getAttribute("style")), v.hrefNormalized = "/a" === ct.getAttribute("href"), v.checkOn = !!ft.value, v.optSelected = ht.selected, v.enctype = !!g.createElement("form").enctype, pt.disabled = !0, v.optDisabled = !ht.disabled, (ft = g.createElement("input")).setAttribute("value", ""), v.input = "" === ft.getAttribute("value"), ft.value = "t", ft.setAttribute("type", "radio"), v.radioValue = "t" === ft.value;
    var wt = /\r/g, Tt = /[\x20\t\r\n\f]+/g;
    k.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = k.isFunction(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : k.isArray(t) && (t = k.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, t, "value") !== undefined || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && (e = r.get(t, "value")) !== undefined ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : k.trim(k.text(e)).replace(Tt, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++) if (((n = r[u]).selected || u === i) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !k.nodeName(n.parentNode, "optgroup"))) {
                        if (t = k(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = k.makeArray(t), a = i.length; a--;) if (r = i[a], -1 < k.inArray(k.valHooks.option.get(r), o)) try {
                        r.selected = n = !0
                    } catch (s) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = {
            set: function (e, t) {
                if (k.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, v.checkOn || (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ct, Et, Nt = k.expr.attrHandle, kt = /^(?:checked|selected)$/i, St = v.getSetAttribute, At = v.input;
    k.fn.extend({
        attr: function (e, t) {
            return K(this, k.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (t = t.toLowerCase(), i = k.attrHooks[t] || (k.expr.match.bool.test(t) ? Et : Ct)), n !== undefined ? null === n ? void k.removeAttr(e, t) : i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? undefined : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!v.radioValue && "radio" === t && k.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(q);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = k.propFix[n] || n, k.expr.match.bool.test(n) ? At && St || !kt.test(n) ? e[r] = !1 : e[k.camelCase("default-" + n)] = e[r] = !1 : k.attr(e, n, ""), e.removeAttribute(St ? n : r)
        }
    }), Et = {
        set: function (e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : At && St || !kt.test(n) ? e.setAttribute(!St && k.propFix[n] || n, n) : e[k.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var o = Nt[t] || k.find.attr;
        At && St || !kt.test(t) ? Nt[t] = function (e, t, n) {
            var r, i;
            return n || (i = Nt[t], Nt[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, Nt[t] = i), r
        } : Nt[t] = function (e, t, n) {
            if (!n) return e[k.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), At && St || (k.attrHooks.value = {
        set: function (e, t, n) {
            if (!k.nodeName(e, "input")) return Ct && Ct.set(e, t, n);
            e.defaultValue = t
        }
    }), St || (Ct = {
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, Nt.id = Nt.name = Nt.coords = function (e, t, n) {
        var r;
        if (!n) return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, k.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        }, set: Ct.set
    }, k.attrHooks.contenteditable = {
        set: function (e, t, n) {
            Ct.set(e, "" !== t && t, n)
        }
    }, k.each(["width", "height"], function (e, n) {
        k.attrHooks[n] = {
            set: function (e, t) {
                if ("" === t) return e.setAttribute(n, "auto"), t
            }
        }
    })), v.style || (k.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || undefined
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Dt = /^(?:input|select|textarea|button|object)$/i, jt = /^(?:a|area)$/i;
    k.fn.extend({
        prop: function (e, t) {
            return K(this, k.prop, e, t, 1 < arguments.length)
        }, removeProp: function (t) {
            return t = k.propFix[t] || t, this.each(function () {
                try {
                    this[t] = undefined, delete this[t]
                } catch (e) {
                }
            })
        }
    }), k.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Dt.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), v.hrefNormalized || k.each(["href", "src"], function (e, t) {
        k.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), v.optSelected || (k.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        k.propFix[this.toLowerCase()] = this
    }), v.enctype || (k.propFix.enctype = "encoding");
    var Lt = /[\t\r\n\f]/g;

    function Ht(e) {
        return k.attr(e, "class") || ""
    }

    k.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (k.isFunction(t)) return this.each(function (e) {
                k(this).addClass(t.call(this, e, Ht(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(q) || []; n = this[u++];) if (i = Ht(n), r = 1 === n.nodeType && (" " + i + " ").replace(Lt, " ")) {
                for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = k.trim(r)) && k.attr(n, "class", s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (k.isFunction(t)) return this.each(function (e) {
                k(this).removeClass(t.call(this, e, Ht(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(q) || []; n = this[u++];) if (i = Ht(n), r = 1 === n.nodeType && (" " + i + " ").replace(Lt, " ")) {
                for (a = 0; o = e[a++];) for (; -1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                i !== (s = k.trim(r)) && k.attr(n, "class", s)
            }
            return this
        }, toggleClass: function (i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) : k.isFunction(i) ? this.each(function (e) {
                k(this).toggleClass(i.call(this, e, Ht(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if ("string" == o) for (t = 0, n = k(this), r = i.match(q) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else i !== undefined && "boolean" != o || ((e = Ht(this)) && k._data(this, "__className__", e), k.attr(this, "class", e || !1 === i ? "" : k._data(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && -1 < (" " + Ht(n) + " ").replace(Lt, " ").indexOf(t)) return !0;
            return !1
        }
    }), k.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, n) {
        k.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var qt = N.location, _t = k.now(), Ft = /\?/,
        Mt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    k.parseJSON = function (e) {
        if (N.JSON && N.JSON.parse) return N.JSON.parse(e + "");
        var i, o = null, t = k.trim(e + "");
        return t && !k.trim(t.replace(Mt, function (e, t, n, r) {
            return i && t && (o = 0), 0 === o ? e : (i = n || t, o += !r - !n, "")
        })) ? Function("return " + t)() : k.error("Invalid JSON: " + e)
    }, k.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            N.DOMParser ? t = (new N.DOMParser).parseFromString(e, "text/xml") : ((t = new N.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (n) {
            t = undefined
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var Ot = /#.*$/, Rt = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Bt = /^(?:GET|HEAD)$/, Wt = /^\/\//,
        It = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, $t = {}, zt = {}, Xt = "*/".concat("*"),
        Ut = qt.href, Vt = It.exec(Ut.toLowerCase()) || [];

    function Yt(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(q) || [];
            if (k.isFunction(t)) for (; n = i[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Jt(t, i, o, a) {
        var s = {}, u = t === zt;

        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }

        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Gt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && k.extend(!0, e, n), e
    }

    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ut,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Vt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": k.parseJSON, "text xml": k.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Gt(Gt(e, k.ajaxSettings), t) : Gt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Yt($t),
        ajaxTransport: Yt(zt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = undefined), t = t || {};
            var n, r, f, p, h, g, m, i, y = k.ajaxSetup({}, t), v = y.context || y,
                x = y.context && (v.nodeType || v.jquery) ? k(v) : k.event, b = k.Deferred(),
                w = k.Callbacks("once memory"), T = y.statusCode || {}, o = {}, a = {}, C = 0, s = "canceled", E = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === C) {
                            if (!i) for (i = {}; t = Pt.exec(p);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === C ? p : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return C || (e = a[n] = a[n] || e, o[e] = t), this
                    }, overrideMimeType: function (e) {
                        return C || (y.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (C < 2) for (t in e) T[t] = [T[t], e[t]]; else E.always(e[E.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || s;
                        return m && m.abort(t), u(0, t), this
                    }
                };
            if (b.promise(E).complete = w.add, E.success = E.done, E.error = E.fail, y.url = ((e || y.url || Ut) + "").replace(Ot, "").replace(Wt, Vt[1] + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = k.trim(y.dataType || "*").toLowerCase().match(q) || [""], null == y.crossDomain && (n = It.exec(y.url.toLowerCase()), y.crossDomain = !(!n || n[1] === Vt[1] && n[2] === Vt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Vt[3] || ("http:" === Vt[1] ? "80" : "443")))), y.data && y.processData && "string" != typeof y.data && (y.data = k.param(y.data, y.traditional)), Jt($t, y, t, E), 2 === C) return E;
            for (r in(g = k.event && y.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Bt.test(y.type), f = y.url, y.hasContent || (y.data && (f = y.url += (Ft.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (y.url = Rt.test(f) ? f.replace(Rt, "$1_=" + _t++) : f + (Ft.test(f) ? "&" : "?") + "_=" + _t++)), y.ifModified && (k.lastModified[f] && E.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && E.setRequestHeader("If-None-Match", k.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && E.setRequestHeader("Content-Type", y.contentType), E.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : y.accepts["*"]), y.headers) E.setRequestHeader(r, y.headers[r]);
            if (y.beforeSend && (!1 === y.beforeSend.call(v, E, y) || 2 === C)) return E.abort();
            for (r in s = "abort", {success: 1, error: 1, complete: 1}) E[r](y[r]);
            if (m = Jt(zt, y, t, E)) {
                if (E.readyState = 1, g && x.trigger("ajaxSend", [E, y]), 2 === C) return E;
                y.async && 0 < y.timeout && (h = N.setTimeout(function () {
                    E.abort("timeout")
                }, y.timeout));
                try {
                    C = 1, m.send(o, u)
                } catch (l) {
                    if (!(C < 2)) throw l;
                    u(-1, l)
                }
            } else u(-1, "No Transport");

            function u(e, t, n, r) {
                var i, o, a, s, u, l = t;
                2 !== C && (C = 2, h && N.clearTimeout(h), m = undefined, p = r || "", E.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function c(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (a in s) if (s[a] && s[a].test(i)) {
                        u.unshift(a);
                        break
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (a in n) {
                            if (!u[0] || e.converters[a + " " + u[0]]) {
                                o = a;
                                break
                            }
                            r || (r = a)
                        }
                        o = o || r
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(y, E, n)), s = function d(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break
                        }
                        if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                            t = a(t)
                        } catch (f) {
                            return {state: "parsererror", error: a ? f : "No conversion from " + u + " to " + o}
                        }
                    }
                    return {state: "success", data: t}
                }(y, s, E, i), i ? (y.ifModified && ((u = E.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = E.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || l) + "", i ? b.resolveWith(v, [o, l, E]) : b.rejectWith(v, [E, l, a]), E.statusCode(T), T = undefined, g && x.trigger(i ? "ajaxSuccess" : "ajaxError", [E, y, i ? o : a]), w.fireWith(v, [E, l]), g && (x.trigger("ajaxComplete", [E, y]), --k.active || k.event.trigger("ajaxStop")))
            }

            return E
        },
        getJSON: function (e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return k.get(e, undefined, t, "script")
        }
    }), k.each(["get", "post"], function (e, i) {
        k[i] = function (e, t, n, r) {
            return k.isFunction(t) && (r = r || n, n = t, t = undefined), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function (e) {
        return k.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, k.fn.extend({
        wrapAll: function (t) {
            if (k.isFunction(t)) return this.each(function (e) {
                k(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = k(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (n) {
            return k.isFunction(n) ? this.each(function (e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = k(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = k.isFunction(t);
            return this.each(function (e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                k.nodeName(this, "body") || k(this).replaceWith(this.childNodes)
            }).end()
        }
    }), k.expr.filters.hidden = function (e) {
        return v.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function n(e) {
            if (!k.contains(e.ownerDocument || g, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === ((t = e).style && t.style.display || k.css(t, "display")) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            var t;
            return !1
        }(e)
    }, k.expr.filters.visible = function (e) {
        return !k.expr.filters.hidden(e)
    };
    var Qt = /%20/g, Kt = /\[\]$/, Zt = /\r?\n/g, en = /^(?:submit|button|image|reset|file)$/i,
        tn = /^(?:input|select|textarea|keygen)/i;

    function nn(n, e, r, i) {
        var t;
        if (k.isArray(e)) k.each(e, function (e, t) {
            r || Kt.test(n) ? i(n, t) : nn(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        }); else if (r || "object" !== k.type(e)) i(n, e); else for (t in e) nn(n + "[" + t + "]", e[t], r, i)
    }

    k.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = k.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = k.ajaxSettings && k.ajaxSettings.traditional), k.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) nn(n, e[n], t, i);
        return r.join("&").replace(Qt, "+")
    }, k.fn.extend({
        serialize: function () {
            return k.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && tn.test(this.nodeName) && !en.test(e) && (this.checked || !Z.test(e))
            }).map(function (e, t) {
                var n = k(this).val();
                return null == n ? null : k.isArray(n) ? k.map(n, function (e) {
                    return {name: t.name, value: e.replace(Zt, "\r\n")}
                }) : {name: t.name, value: n.replace(Zt, "\r\n")}
            }).get()
        }
    }), k.ajaxSettings.xhr = N.ActiveXObject !== undefined ? function () {
        return this.isLocal ? un() : 8 < g.documentMode ? sn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && sn() || un()
    } : sn;
    var rn = 0, on = {}, an = k.ajaxSettings.xhr();

    function sn() {
        try {
            return new N.XMLHttpRequest
        } catch (e) {
        }
    }

    function un() {
        try {
            return new N.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    N.attachEvent && N.attachEvent("onunload", function () {
        for (var e in on) on[e](undefined, !0)
    }), v.cors = !!an && "withCredentials" in an, (an = v.ajax = !!an) && k.ajaxTransport(function (l) {
        var c;
        if (!l.crossDomain || v.cors) return {
            send: function (e, a) {
                var t, s = l.xhr(), u = ++rn;
                if (s.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields) for (t in l.xhrFields) s[t] = l.xhrFields[t];
                for (t in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) e[t] !== undefined && s.setRequestHeader(t, e[t] + "");
                s.send(l.hasContent && l.data || null), c = function (e, t) {
                    var n, r, i;
                    if (c && (t || 4 === s.readyState)) if (delete on[u], c = undefined, s.onreadystatechange = k.noop, t) 4 !== s.readyState && s.abort(); else {
                        i = {}, n = s.status, "string" == typeof s.responseText && (i.text = s.responseText);
                        try {
                            r = s.statusText
                        } catch (o) {
                            r = ""
                        }
                        n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                    }
                    i && a(n, r, i, s.getAllResponseHeaders())
                }, l.async ? 4 === s.readyState ? N.setTimeout(c) : s.onreadystatechange = on[u] = c : c()
            }, abort: function () {
                c && c(undefined, !0)
            }
        }
    }), k.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), k.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var r, i = g.head || k("head")[0] || g.documentElement;
            return {
                send: function (e, n) {
                    (r = g.createElement("script")).async = !0, t.scriptCharset && (r.charset = t.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange = function (e, t) {
                        (t || !r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), r = null, t || n(200, "success"))
                    }, i.insertBefore(r, i.firstChild)
                }, abort: function () {
                    r && r.onload(undefined, !0)
                }
            }
        }
    });
    var ln = [], cn = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = ln.pop() || k.expando + "_" + _t++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o,
            a = !1 !== e.jsonp && (cn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = k.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(cn, "$1" + r) : !1 !== e.jsonp && (e.url += (Ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = N[r], N[r] = function () {
            o = arguments
        }, n.always(function () {
            i === undefined ? k(N).removeProp(r) : N[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, ln.push(r)), o && k.isFunction(i) && i(o[0]), o = i = undefined
        }), "script"
    }), k.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || g;
        var r = w.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = fe([e], t, i), i && i.length && k(i).remove(), k.merge([], r.childNodes))
    };
    var fn = k.fn.load;

    function dn(e) {
        return k.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    k.fn.load = function (e, t, n) {
        if ("string" != typeof e && fn) return fn.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = k.trim(e.slice(s, e.length)), e = e.slice(0, s)), k.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        k.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), k.expr.filters.animated = function (t) {
        return k.grep(k.timers, function (e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), i = ("absolute" === l || "fixed" === l) && -1 < k.inArray("auto", [o, u]) ? (a = (r = c.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(u) || 0), k.isFunction(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function (t) {
            if (arguments.length) return t === undefined ? this : this.each(function (e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r = {top: 0, left: 0}, i = this[0], o = i && i.ownerDocument;
            return o ? (e = o.documentElement, k.contains(e, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = dn(o), {
                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : r) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === k.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), k.nodeName(e[0], "html") || (n = e.offset()), n.top += k.css(e[0], "borderTopWidth", !0), n.left += k.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - k.css(r, "marginTop", !0),
                    left: t.left - n.left - k.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !k.nodeName(e, "html") && "static" === k.css(e, "position");) e = e.offsetParent;
                return e || $e
            })
        }
    }), k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var o = /Y/.test(i);
        k.fn[t] = function (e) {
            return K(this, function (e, t, n) {
                var r = dn(e);
                if (n === undefined) return r ? i in r ? r[i] : r.document.documentElement[t] : e[t];
                r ? r.scrollTo(o ? k(r).scrollLeft() : n, o ? n : k(r).scrollTop()) : e[t] = n
            }, t, e, arguments.length, null)
        }
    }), k.each(["top", "left"], function (e, n) {
        k.cssHooks[n] = Ve(v.pixelPosition, function (e, t) {
            if (t) return t = Xe(e, n), We.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({Height: "height", Width: "width"}, function (o, a) {
        k.each({padding: "inner" + o, content: a, "": "outer" + o}, function (r, e) {
            k.fn[e] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return K(this, function (e, t, n) {
                    var r;
                    return k.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o], r["scroll" + o], e.body["offset" + o], r["offset" + o], r["client" + o])) : n === undefined ? k.css(e, t, i) : k.style(e, t, n, i)
                }, a, n ? e : undefined, n, null)
            }
        })
    }), k.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.fn.size = function () {
        return this.length
    }, k.fn.andSelf = k.fn.addBack;
    var pn = N.jQuery, hn = N.$;
    return k.noConflict = function (e) {
        return N.$ === k && (N.$ = hn), e && N.jQuery === k && (N.jQuery = pn), k
    }, e || (N.jQuery = N.$ = k), "function" == typeof define && define("/nc/1.03.04/lib/jquery", [], function (e, t, n) {
        n.exports = k
    }), k
});
define("/cpn/1.03.04/attach", ["nc"], function (e, t, n) {
    var i = e("nc"), H = i.$, o = i.Component, r = i.Clazz, T = i.Base, y = i.Dom, a = n.exports = r.create();
    r.mix(a, o, {
        _template: '<div style="display:none;">#{content}</div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, t = e.rawConfig, n = e.getEl();
                t.width && n.outerWidth(t.width), t.height && n.outerHeight(t.height), e.initAttach(), e.resize()
            }
        }],
        wrap: function c(e, t) {
            if (!e || !t) return;
            var n = new a(t);
            return e.attach = n, o.setEvents(), n.listen("destroy", function () {
                e.destroy()
            }), e.listen("destroy", function () {
                n.destroy()
            }), n
        }
    }, {
        initialize: function u(e) {
            if (e.renderTo = e.attachRenderTo, !e.renderTo) {
                var t = H(e.target), n = y.getScrollParent(t);
                e.renderTo = H(n || document.body)
            }
        }, initAttach: function S() {
            var t, e, n, i = this, o = i.rawConfig, r = H(o.target), a = i.getEl(), c = 100, u = !1;
            if (0 === r.length) return;
            if (i._initAttached) return;
            i._initAttached = !0, o.noHover || (r.on("focus", f), (o.targetHover || r).on("mouseenter", f).on("mouseleave", h));

            function s() {
                window.clearTimeout(t), window.clearTimeout(e), window.clearTimeout(n)
            }

            function d() {
                if (u || o.noHover) {
                    var e = "none" === a.css("display");
                    e && i.forceShow(), !e && i.forceHide(), u = !0
                }
            }

            function f() {
                s(), e = window.setTimeout(l, c)
            }

            function h(e) {
                s(), t = window.setTimeout(function () {
                    w(e)
                }, c)
            }

            function l() {
                o.canShow && !o.canShow() || (window.clearTimeout(n), n = window.setTimeout(function () {
                    u = !0
                }, 500), a.show(), v(), i.fire("attachShow"), o.attachShow && o.attachShow.call(i))
            }

            function w(e) {
                u = !1, window.clearTimeout(n);
                var t = !o.canHide || o.canHide();
                t && "none" !== a.css("display") && (o.attachHide && o.attachHide.call(i), a.hide(), i.fire("attachHide", e))
            }

            function v() {
                var e = o.attach || {};
                y.attachTo(T.extend({}, e, {
                    el: a,
                    parent: o.renderTo,
                    target: r,
                    verReverse: !!e.verReverse,
                    center: !!e.center,
                    horz: !!e.horz,
                    zIndex: o.zIndex
                }))
            }

            !o.noEnterLeave && a.on("mouseenter", function m() {
                i.isMouseEnter = !0, s()
            }), !o.noEnterLeave && !o.noLeave && a.on("mouseleave", function g() {
                i.isMouseEnter = !1, h({attachLeave: !0})
            }), o.needClick && r.on("click", d), i.listen("forceHide", function (e) {
                s(), w(e)
            }), i.listen("forceShow", function () {
                s(), l()
            }), i.listen("destroy", function () {
                r.unbind("mouseenter", f).unbind("focus", f), r.unbind("mouseleave", h), r.unbind("click", d), o.targetHover && o.targetHover.unbind("mouseenter", f).unbind("focus", f).unbind("mouseleave", h), a.unbind()
            }), i.listen("jsFixPosition", function () {
                v()
            })
        }, fixPosition: function s() {
            this.fire("jsFixPosition")
        }, forceHide: function d(e) {
            this.fire("forceHide", e)
        }, forceShow: function f() {
            this.fire("forceShow")
        }, isShow: function h() {
            return "none" !== this.getEl().css("display")
        }, resize: function l() {
            var i = this, e = i.rawConfig;
            if (e.needReWidth && !i._isInitResize) {
                i._isInitResize = !0;
                var o = H(e.target), r = i.getEl(), a = !0;
                i.listen("attachShow", function c() {
                    var e = o.outerWidth(), t = r.outerWidth(), n = r.width("auto").width();
                    (a || t !== n) && i.fire("widthChange", e);
                    a = !1
                })
            }
        }, _getData: function w(e) {
            return {content: e.content}
        }
    })
});
define("/cpn/1.03.04/checkbox", ["nc"], function (e, a, n) {
    var t = e("nc"), c = t.$, i = (t.Base, t.Component), s = t.Clazz, l = (t.Dom, n.exports = s.create());
    s.mix(l, i, {
        xtype: "checkbox",
        _template: ['<label class="#{chbCls}">', '<span class="icons"></span>', '<input type="#{chbType}" #{isChecked} data-toggle="#{chbToggle}" value="#{val}" name="#{name}" />#{text}', "</label>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, a = e.rawConfig, n = e.getEl();
                e.iconEl = n.find("span"), e.valIpt = n.find("input"), e._val = a.val || 0 === a.val ? a.val : e.valIpt.val() || "", a.checked && e.checked()
            }
        }, {
            name: "click", type: "bind", handler: function (e) {
                e.stopPropagation(), e.preventDefault(), this.fire("click")
            }
        }, {
            name: "click", type: "custom", handler: function () {
                var e = this, a = e.rawConfig;
                e.getEl();
                e.isDisabled() || a.canChange && !1 === a.canChange.call(e) || (e.checked(!e.isChecked()), e.fire("change"), a.change && a.change.call(e))
            }
        }],
        transformConf: function d(e) {
            var a = {
                checked: !!e.hasClass("checked"),
                disabled: !!e.hasClass("disabled"),
                radio: !!e.hasClass("radio"),
                val: e.find("input").val(),
                text: c.trim(e.text())
            };
            e.addClass(a.radio ? "radio" : "checkbox"), 0 === e.find("span.icons").length && e.prepend('<span class="icons"></span>');
            0 === e.find("input").length && e.prepend('<input value="' + (a.val || "") + '" type="' + (a.radio ? "radio" : "checkbox") + '" />');
            return a
        }
    }, {
        val: function o(e) {
            var a = this;
            a.getEl();
            {
                if (0 === arguments.length) return a._val;
                a._val = e, a.valIpt.val(e)
            }
        }, text: function h() {
            return this.rawConfig.text
        }, disabled: function r(e) {
            this.getEl()[!1 === e ? "removeClass" : "addClass"]("disabled")
        }, isDisabled: function p() {
            return this.getEl().hasClass("disabled")
        }, checked: function v(e) {
            var a = this, n = a.rawConfig, t = a.getEl(), c = n.checkedCls;
            (e = !1 !== e) ? (t.addClass("checked"), a.valIpt.attr("checked", 1), c && t.addClass(c)) : (t.removeClass("checked"), a.valIpt.removeAttr("checked"), c && t.removeClass(c))
        }, isChecked: function u() {
            return this.getEl().hasClass("checked")
        }, isRadio: function f() {
            return !!this.rawConfig.radio
        }, _getData: function g(e) {
            var a = this.isRadio(), n = [a ? "radio" : "checkbox"];
            return e.disabled && n.push("disabled"), e.checked && n.push("checked"), {
                chbType: a ? "radio" : "checkbox",
                chbToggle: a ? "radio" : "checkbox",
                chbCls: n.join(" "),
                text: e.text,
                val: e.val,
                name: e.name
            }
        }
    })
});
define("/cpn/1.03.04/checkgroup", ["nc", "./checkbox"], function (e, n, i) {
    var t = e("nc"), c = t.$, a = t.Base, o = t.Event, r = t.Clazz, h = e("./checkbox"), d = i.exports = r.create();
    a.extend(d, {
        mix: function f(e) {
            return new d(e)
        }
    }), a.extend(d.prototype, o, {
        initialize: function u(e) {
            var i = this;
            i.rawConfig = e, i.option = [], i._lastChecked = null, a.forEach(e.listeners, function (e, n) {
                i.listen(n, e)
            }), e.el ? a.forEach(e.el, function (e) {
                i.addItemEl(e)
            }) : e.items && a.forEach(e.items, function (e) {
                i.addItem(e)
            });
            i.radio = !!i.option[0] && i.option[0].isRadio()
        }, checked: function l() {
            var e = a.filter(this.option, function (e) {
                return e.isChecked()
            });
            return this.radio ? e[0] : e
        }, isAllChecked: function s() {
            for (var e = this.option, n = 0, i = e.length; n < i; n++) if (!e[n].isChecked()) return !1;
            return !0
        }, val: function p(n, i) {
            var e = this;
            {
                if (n === undefined || null === n) {
                    var t = e.checked();
                    return e.radio ? t && t.val() : a.map(t, function (e) {
                        return e.val()
                    })
                }
                if (e.radio || !a.isArray(n)) return void a.forEach(e.option, function (e) {
                    e.checked(!1), e.val() === n && (e.checked(!0), i && e.fire("change"))
                });
                var c = e.array2Map(n);
                a.forEach(e.option, function (e) {
                    e.checked(!1), c[e.val()] && (e.checked(!0), i && e.fire("change"))
                })
            }
        }, addItemEl: function v(e) {
            e = c(e);
            var n = h.transform(e);
            this.addItem(n)
        }, addItem: function k(e) {
            var n = this, i = n.isDisabled();
            e.listen("change", function () {
                n._change(e)
            }), n.option.push(e), e.disabled(i)
        }, isDisabled: function g() {
            var e = this.option || [];
            return 0 < e.length && a.every(e, function (e) {
                return e.isDisabled()
            })
        }, disabled: function m() {
            var n = arguments;
            a.forEach(this.option, function (e) {
                e.disabled.apply(e, n)
            })
        }, array2Map: function E(e) {
            return a.toMap(e, function (e) {
                return {key: e}
            })
        }, _change: function C(e) {
            var n = this, i = n.rawConfig;
            if (n.radio) {
                if (n._lastChecked === e) return void e.checked(!0);
                n._lastChecked = e, a.forEach(n.option, function (e) {
                    e.checked(!1)
                }), e.checked(!0), n.fire("change", e), i.change && i.change.call(n, e)
            } else n.fire("change", e), i.change && i.change.call(n, e)
        }
    })
});
define("/cpn/1.03.04/cpn", ["./attach", "nc", "./checkbox", "./checkgroup", "./input", "./layer", "./pager", "./popup", "./select", "./attachSub/attachSel", "./selectMult", "./attachSub/attachSelMult", "./switch", "./tab", "./tag", "./tips", "./uploadFlash", "./attachSub/attachSuggest", "./attachSub/attachDate", "./attachSub/attachUpload", "./popupSub/popupUploadTips", "./attachSub/attachUploadFlash", "./popupSub/popupFormula", "./popupSub/popupImage", "./popupSub/popupQrCode", "./vue/input", "./vue/ncTag", "./vue/pager"], function (a, t, p) {
    var u = a("./attach"), c = a("./checkbox"), e = a("./checkgroup"), o = a("./input"), h = a("./layer"),
        l = a("./pager"), S = a("./popup"), b = a("./select"), s = a("./selectMult"), g = a("./switch"), r = a("./tab"),
        d = a("./tag"), i = a("./tips"), n = a("./uploadFlash"), U = a("./attachSub/attachSel"),
        F = a("./attachSub/attachSelMult"), A = a("./attachSub/attachSuggest"), P = a("./attachSub/attachDate"),
        T = a("./attachSub/attachUpload"), k = a("./attachSub/attachUploadFlash"), m = a("./popupSub/popupFormula"),
        v = a("./popupSub/popupUploadTips"), M = a("./popupSub/popupImage"), C = a("./popupSub/popupQrCode"),
        I = a("./vue/input"), x = a("./vue/pager");
    p.exports = {
        Attach: u,
        CheckBox: c,
        CheckGroup: e,
        Input: o,
        Layer: h,
        Pager: l,
        Popup: S,
        Select: b,
        SelectMult: s,
        Switch: g,
        Tab: r,
        Tag: d,
        Tips: i,
        UploadFlash: n,
        AttachSel: U,
        AttachSelMult: F,
        AttachSuggest: A,
        AttachDate: P,
        AttachUpload: T,
        AttachUploadFlash: k,
        PopupFormula: m,
        PopupUploadTips: v,
        PopupImage: M,
        PopupQrCode: C,
        VueInput: I,
        VuePager: x
    }
});
define("/cpn/1.03.04/input", ["nc"], function (e, n, t) {
    var i = e("nc"), r = i.$, s = i.Base, a = i.Component, l = i.Clazz, o = (s = i.Base, i.Str), u = i.Dom,
        c = t.exports = l.create();

    function p(e, n) {
        var t = this, i = t.inputEl;
        return 0 === arguments.length ? i.val() : (i.val() !== e && (i.val(e), !n && t.fire("change"), i.trigger("change")), t.setNone(), t)
    }

    function d(e) {
        var n = this, t = n.getEl();
        return n.none(), n[!1 === e ? "removeClass" : "addClass"](t, "success"), n.errorTipsEl.hide(), n
    }

    function f(e) {
        var n = this, t = n.getEl();
        return n.none(), n[!1 === e ? "removeClass" : "addClass"](t, "error"), !1 === e && n.errorTipsEl.hide(), n
    }

    function h(e) {
        var n = this;
        e ? (n.error(), n.errorTipsEl.html(e).show()) : (n.error(!1), n.errorTipsEl.html("").hide())
    }

    function v() {
        var e = this, n = e.getEl();
        return e.removeClass(n, "success"), e.removeClass(n, "error"), e.errorTipsEl.html("").hide(), e
    }

    l.mix(c, a, {
        _template: ['<#{tag} class="control-group">', "#{inputStr}", '<i class="input-icon fui-cross"></i>', '<i class="input-icon fui-check-inverted"></i>', '<span class="input-tip"></span>', "</#{tag}>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, n = (e.rawConfig, e.getEl());
                e.errorTipsEl = n.find("span.input-tip"), e.inputEl = e.isTextarea ? n.find("textarea") : n.find("input"), e.initAction()
            }
        }],
        transformConf: function m(e) {
            e.addClass("control-group");
            var n = e.find("input").length, t = e.find("textarea").length;
            0 === n && 0 === t && e.append('<input type="text" />');
            0 === e.find("i.fui-cross").length && e.append('<i class="input-icon fui-cross"></i>');
            0 === e.find("i.fui-check-inverted").length && e.append('<i class="input-icon fui-check-inverted"></i>');
            0 === e.find("span.input-tip").length && e.append('<span class="input-tip"></span>');
            return {type: 0 < t ? "textarea" : "text"}
        }
    }, {
        initialize: function g(e) {
            this.isTextarea = "textarea" === e.type, e.value = o.decodeHTML(e.value || "")
        }, initAction: function E() {
            var n = this, e = n.inputEl;
            u.bindChange(e, function () {
                n.fire("change")
            }), e.on("blur", function () {
                n.fire("blur")
            }), e.on("focus", function () {
                n.none(), n.fire("focus")
            }), e.on("keydown", function (e) {
                "13" === s.id(e.keyCode) && n.fire("pressEnter")
            })
        }, focus: function C() {
            this.inputEl.focus()
        }, blur: function x() {
            this.inputEl.blur(), this.fire("blur")
        }, val: p, success: d, error: f, errorTips: h, none: v, _getData: function y(e) {
            var n = '<input class="#{cls}" ' + (e.id ? ' id="#{id}" ' : " ") + (e.name ? ' name="#{name}" ' : " ") + ' type="#{type}" placeholder="#{placeholder}" value="#{value}"/>';
            return this.isTextarea && (n = '<textarea class="#{cls}" ' + (e.id ? ' id="#{id}" ' : " ") + (e.name ? ' name="#{name}" ' : " ") + ' placeholder="#{placeholder}" style="resize:none;">#{value}</textarea>'), {
                _execAgain: !0,
                tag: e.tag || "div",
                cls: e.clsIpt,
                placeholder: e.placeholder || "",
                value: e.value || "",
                type: e.type || "text",
                name: e.name || 0 === e.name ? e.name : "",
                id: e.id || "",
                inputStr: n
            }
        }, readonly: function T(e) {
            this.inputEl[!1 === e ? "removeAttr" : "attr"]("readonly", 1)
        }, disabled: function b(e) {
            this.inputEl[!1 === e ? "removeAttr" : "attr"]("disabled", 1)
        }, isDisabled: function k() {
            return this.inputEl.prop("disabled")
        }, addClass: function A(e, n) {
            !(e = r(e)).hasClass(n) && e.addClass(n)
        }, removeClass: function z(e, n) {
            (e = r(e)).hasClass(n) && e.removeClass(n)
        }, getValue: function S(e) {
            return e ? r.trim(this.val()) : this.val()
        }, setValue: p, setSuccess: d, setError: f, setErrorTips: h, setNone: v
    })
});
define("/cpn/1.03.04/layer", ["nc"], function (e, n, i) {
    var t = e("nc"), o = t.$, r = t.Base, c = t.Component, s = t.Clazz, a = t.Time, d = i.exports = s.create();
    s.mix(d, c, {
        xtype: "layer",
        _template: ['<div class="layer-container">', '<div class="layer-container-bg"></div>', '<div class="layer-container-content" #{style}></div>', "</div>"].join(""),
        _layers: {},
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, n = (e.rawConfig, e.getEl());
                e.win = o(window), e.doc = o(document.body), e.contentEl = n.find("div.layer-container-content"), e.fixPosition(), d.hideOverflow(), e.win.resize(t), e.win.on("scroll", t), e.resizeCb = t;
                var i = a.frequency(250);

                function t() {
                    i(function () {
                        e.fire("winresize"), e.fixPosition()
                    })
                }
            }
        }, {
            name: "destroy", type: "custom", handler: function () {
                var e = this;
                o(window).unbind("resize", e.resizeCb), o(window).unbind("scroll", e.resizeCb), delete d._layers[e.indexKey], d.hideOverflow(!1)
            }
        }, {
            name: "click", handler: function (e) {
                var n = this, i = n.rawConfig;
                (i.clickToHide || i.clickToHideCb) && (o.contains(n.contentEl.get(0), e.target) || (i.clickToHideCb ? i.clickToHideCb() : n.hide()))
            }
        }],
        show: function l(e) {
            return new d(e)
        },
        hide: function h() {
            r.forEach(d._layers, function (e) {
                e.destroy()
            }), d._layers = {}
        },
        hasLayer: function f() {
            return 0 < r.size(d._layers)
        }
    }, {
        initialize: function y(e) {
            var n = this;
            e.renderTo = document.body, n.indexKey = d._index, d._layers[n.indexKey] = n
        }, hide: function u() {
            this.fire("hide"), this.destroy()
        }, fixPosition: function w() {
            var e = this, n = e.getEl(), i = e.win, t = e.doc, o = i.height();
            n.css({
                width: "100%",
                height: o,
                zIndex: e.rawConfig.zIndex || 1e3 + d._index,
                top: Math.max(i.scrollTop() || t.scrollTop())
            })
        }, append: function g(e) {
            this.contentEl.append(e).show()
        }, center: function v(e) {
            var n = this.getEl(), i = e.width(), t = e.height(), o = n.width(), r = n.height();
            e.css({marginLeft: i < o ? (o - i) / 2 : 0, marginTop: t < r ? (r - t) / 2 : 0})
        }, _getData: function p() {
            return {style: this.rawConfig.showContent ? "" : 'style="display:none;"'}
        }
    })
});
define("/cpn/1.03.04/pager", ["nc"], function (e, a, r) {
    var t = e("nc"), l = t.$, i = t.Base, n = t.Component, s = t.Clazz, g = t.Uri, d = r.exports = s.create();
    s.mix(d, n, {
        _template: '<div class="pagination"><ul></ul></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, a = e.getEl();
                e.pageEl = a.find("ul"), e.renderPage()
            }
        }, {
            name: "click ul a", handler: function (e) {
                var a = +l(e.currentTarget).attr("data-page");
                a && this.jump2page(a)
            }
        }]
    }, {
        initialize: function p(e) {
            var a = this;
            a.current = +e.current || 1, a.total = +e.total || 1, a.interval = +e.interval || 8
        }, jump2page: function f(e, a) {
            var r = this, t = r.rawConfig, i = r.total;
            if ((e = i <= (e = +e || 1) ? i : e <= 1 ? 1 : e) === r.current) return;
            if (!a) {
                var l = t.pageChange && t.pageChange(e);
                if (!0 === l) return
            }
            r.current = e, r.renderPage()
        }, refresh: function o(e, a, r) {
            var t = this;
            e = i.id(e) ? e : t.current, a = i.id(a) ? a : t.total, r = i.id(r) ? r : t.interval, (e !== t.current || a !== t.total || r !== t.interval) && (t.current = e, t.total = a, t.interval = r, t.renderPage())
        }, renderPage: function c() {
            var e = this.rawConfig;
            this[e.noExt ? "renderSimple" : "renderFull"]()
        }, renderSimple: function v() {
            var e = this, a = e.getEl(), r = e.pageEl, t = e.total;
            if (t <= 1) return a.hide(), void r.html("");
            var i = e.getPageInfo(e.current, t, e.interval), l = i.current, n = (i.pre, i.next, i.first), s = i.last,
                g = "";
            1 < n && (g += e._getSimpleItem(1), 3 === n && (g += e._getSimpleItem(2)), 3 < n && (g += '<li><a href="javascript:void(0);">...</a></li>'));
            for (var d = n; d <= s; d++) g += e._getSimpleItem(d);
            s !== t && (s + 2 === t && (g += e._getSimpleItem(s + 1)), s + 2 < t && (g += '<li><a href="javascript:void(0);">...</a></li>'), g += e._getSimpleItem(t));
            r.html(g), r.find("li.active").removeClass("active"), r.find("li.js-pager-" + l).addClass("active"), a.show()
        }, renderFull: function u() {
            var e = this, a = e.getEl(), r = e.pageEl, t = e.total;
            if (t <= 1) return a.hide(), void r.html("");
            var i = e.getPageInfo(e.current, t, e.interval), l = i.current, n = i.pre, s = i.next, g = i.first,
                d = i.last,
                p = '<li class="txt-pager js-pager-first"><a data-page="1" href="' + e.pageUrl(1) + '">首页</a></li>';
            p += '<li class="txt-pager js-pager-pre"><a data-page="' + n + '" href="' + e.pageUrl(n) + '">上一页</a></li>';
            for (var f = g; f <= d; f++) p += '<li class="js-pager-' + f + '"><a href="' + e.pageUrl(f) + '" data-page="' + f + '">' + f + "</a></li>";
            p += '<li class="txt-pager js-pager-next"><a data-page="' + s + '" href="' + e.pageUrl(s) + '">下一页</a></li>', p += '<li class="txt-pager js-pager-last"><a data-page="' + t + '" href="' + e.pageUrl(t) + '">末页</a></li>', r.html(p), r.find("li.active").removeClass("active"), r.find("li.js-pager-" + l).addClass("active"), r.find(".js-pager-first")[l <= 1 ? "addClass" : "removeClass"]("disabled"), r.find(".js-pager-pre")[l <= 1 ? "addClass" : "removeClass"]("disabled"), r.find(".js-pager-next")[t <= l ? "addClass" : "removeClass"]("disabled"), r.find(".js-pager-last")[t <= l ? "addClass" : "removeClass"]("disabled"), a.show()
        }, pageUrl: function m(e) {
            var a = this.rawConfig, r = l.trim(a.url), t = l.trim(a.key);
            if (!r || !t) return "javascript:void(0);";
            var i = {};
            return i[t] = e, g.addParam(i, r)
        }, getPageInfo: function h(e, a, r) {
            e = a <= e ? a : e <= 1 ? 1 : e;
            var t, i = Math.max(e - 1, 1), l = Math.min(e + 1, a), n = e <= r / 2 ? 1 : e - Math.floor(r / 2);
            a < n + r - 1 ? n = r < (t = a) ? a - r + 1 : 1 : t = n + r - 1;
            return {current: e, pre: i, next: l, first: n, last: t}
        }, _getSimpleItem: function C(e) {
            return '<li class="js-pager-' + e + '"><a href="' + this.pageUrl(e) + '" data-page="' + e + '">' + e + "</a></li>"
        }
    })
});
define("/cpn/1.03.04/popup", ["nc", "./layer"], function (t, n, e) {
    var o = t("nc"), i = o.$, a = o.Base, c = o.Component, r = o.Clazz, s = (o.Browser, o.DragDrop), l = t("./layer"),
        p = e.exports = r.create(),
        d = ['<div class="pop-title">', '<a href="javascript:void(0);" class="pop-close" title="关闭"></a>', '<span class="pop-error-tip" style="display:none;"></span>', "<h1>#{title}</h1>", "</div>"].join(""),
        h = ['<div class="pop-footer clearfix">', '<a class="btn btn-primary confirm-btn" href="javascript:void(0);">#{okTxt}</a>', '<a class="btn btn-default cancle-btn" href="javascript:void(0);">#{cancelTxt}</a>', "</div>"].join("");
    r.mix(p, c, {
        xtype: "popup",
        _popup: {},
        _template: ['<div class="pop-box #{animatedCls}">', "#{popTitle}", '<div class="pop-content" #{bodyStyle}>#{content}</div>', "#{popFooter}", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var n = this, t = n.rawConfig, e = n.getEl();
                n.popupTitle = e.find("div.pop-title"), n.popupContent = e.find("div.pop-content"), n.popupFooter = e.find("div.pop-footer"), n.okBtn = n.popupFooter.find("a.confirm-btn"), n.cancelBtn = n.popupFooter.find("a.cancle-btn"), n.headTips = e.find("span.pop-error-tip"), !t.ok && !t.okTxt && n.okBtn.remove(), !t.cancel && !t.cancelTxt && n.cancelBtn.remove(), (p._popup[n._index] = n).titleEl = e.find("h1"), e.css({width: t.width || 520}), t.height && e.find("div.pop-content").height(t.height), n.fixPosition();
                var o = t.duration && window.parseInt(t.duration, 10) || 0;
                0 < o && window.setTimeout(function () {
                    try {
                        n.close()
                    } catch (t) {
                    }
                }, o)
            }
        }, {
            name: "render", type: "custom", handler: function () {
                var t = this, n = t.rawConfig;
                n.hasNoTitle || n.hasNoMove || t.initDrag(t.getEl("div.pop-title"))
            }
        }, {
            name: "destroy", type: "custom", handler: function () {
                var t = this;
                delete p._popup[t._index], delete t.drag, t.layer.hide()
            }
        }, {
            name: "click a.pop-close", handler: function (t) {
                var n = this, e = n.rawConfig;
                e.cancel && e.cancel.call(n), n.close()
            }
        }, {
            name: "click .cancle-btn", handler: function () {
                var t, n = this, e = n.rawConfig;
                e.cancel && (t = e.cancel.call(n)), n.fire("cancel"), !0 !== t && n.close()
            }
        }, {
            name: "click .confirm-btn", handler: function () {
                this.ok()
            }
        }, {
            name: "click .js-close-popup", handler: function () {
                this.fire("cancel"), this.close()
            }
        }, {
            name: "keyup", handler: function (t) {
                var n = t.keyCode + "", e = t.ctrlKey, o = t.shiftKey, i = t.altKey;
                "13" == n && (e || o || i) && this.ok()
            }
        }],
        wrap: function u(t, n) {
            if (!t || !n) return;
            var e = new p(n);
            return t.popup = e, c.setEvents(), e.listen("destroy", function () {
                t.destroy && t.destroy()
            }), e
        },
        hide: function f() {
            a.forEach(this._popup, function (t) {
                try {
                    t.close(!0)
                } catch (n) {
                    a.out(n)
                }
            })
        },
        show: function v(t) {
            return new p({
                noUnique: t.noUnique,
                hasNoTitle: !0,
                hasNoMove: !0,
                hasNoFooter: t.hasNoFooter,
                content: ['<div class="confirm-content">', '<div class="poptip-word">', '<span class="', "ok" === t.type ? "succeed-ico" : "warning-ico", '"></span>', '<span class="warning-word">' + t.content + "</span>", "</div>", "</div>"].join(""),
                width: 500,
                clickToHide: t.clickToHide,
                ok: t.ok,
                okTxt: t.okTxt,
                cancel: t.cancel,
                cancelTxt: t.cancelTxt,
                close: t.close,
                duration: t.duration,
                listeners: t.listeners
            })
        },
        alert: function y(t, n, e) {
            var o = this;
            2 === arguments.length && a.isFunction(n) && (e = n, n = 0);
            return o._alert && o._alert.destroy(), o._alert = o.show({
                noUnique: !0,
                content: t,
                clickToHide: !1,
                duration: n,
                ok: function () {
                },
                close: o._wrapDelay(e)
            }), o._alert
        },
        ok: function m(t, n, e) {
            var o = this;
            2 === arguments.length && a.isFunction(n) && (e = n, n = 0);
            o._alert && o._alert.destroy();
            return o._alert = o.show({
                noUnique: !0, content: t, clickToHide: !0, duration: n, ok: function () {
                }, type: "ok", close: o._wrapDelay(e)
            }), o._alert
        },
        confirm: function w(t, n, e) {
            var o = this;
            o._confirm && o._confirm.destroy();
            return o._confirm = o.show({
                noUnique: !0, content: t, type: "confirm", ok: o._wrapDelay(n) || function () {
                }, cancel: o._wrapDelay(e) || function () {
                }
            }), o._confirm
        },
        tips: function g(t, n, e) {
            var o = this;
            a.isFunction(n) && (e = n, n = 750);
            return n = n || 750, o._tips && o._tips.destroy(), o._tips = o.show({
                noUnique: !0,
                content: t,
                duration: n,
                close: o._wrapDelay(e),
                type: "ok"
            }), o._tips
        },
        error: function k(t, n, e) {
            new p({
                noUnique: !0,
                hasNoTitle: !0,
                hasNoFooter: !0,
                hasNoMove: !0,
                content: '<div class="pop-msg-tip" style="text-align:center;"><span class="fail-ico"></span><span class="">' + t + "</span></div>",
                width: e,
                hasNoMask: !1,
                duration: n || 2e3
            })
        },
        mask: function T(t) {
            return new p({
                noUnique: !0,
                hasNoTitle: !0,
                hasNoMove: !0,
                hasNoFooter: !0,
                width: 500,
                content: ['<div style="font-size:16px;text-align:center;padding:20px;">', t || "", "</div>"].join(""),
                clickToHide: !1
            })
        },
        _wrapDelay: function _(t) {
            return t ? function () {
                window.setTimeout(t, 0)
            } : t
        }
    }, {
        initialize: function x(t) {
            var n = this;
            t.noUnique || p.hide();
            n.layer = new l({
                showContent: !0, clickToHideCb: t.clickToHide ? function () {
                    try {
                        n.close()
                    } catch (t) {
                        a.out(t)
                    }
                } : null
            }), t.renderTo = n.layer.contentEl
        }, initDrag: function b(t) {
            var i = this.getEl();
            this.drag = new s({
                drag: t, listeners: [{
                    name: "start", handler: function () {
                        this.offset = {left: parseInt(i.css("marginLeft"), 10), top: parseInt(i.css("marginTop"), 10)}
                    }
                }, {
                    name: "drag", handler: function () {
                        var t = this, n = t.offset, e = n.left + t._moveX - t._downX, o = n.top + t._moveY - t._downY;
                        e < 2 && (e = 1), o < 1 && (o = 1), i.css({marginLeft: e, marginTop: o})
                    }
                }, {
                    name: "drop", handler: function () {
                        delete this.offset
                    }
                }]
            })
        }, close: function N() {
            var t = this.rawConfig;
            try {
                this.fire("close"), t.close && t.close()
            } catch (e) {
                a.out(e)
            }
            var n = this.getEl().find("object").parent();
            0 < n.length && (n.hide(), i(document.body).append(n), window.setTimeout(function () {
                try {
                    n.remove()
                } catch (e) {
                }
            }, 1e3));
            this.destroy()
        }, ok: function C() {
            var t, n = this.rawConfig;
            n.ok && (t = n.ok.call(this)), this.fire("ok"), !0 !== t && this.close()
        }, fixPosition: function F() {
            this.layer.center(this.getEl())
        }, changeTitle: function D(t) {
            this.titleEl.html(t)
        }, setTips: function j(t) {
            this.headTips.html(t || "")[t ? "show" : "hide"]()
        }, _getData: function E(t) {
            var n = h;
            !t.hasNoFooter && (t.ok || t.cancel || t.okTxt || t.cancelTxt) || (n = "");
            return {
                bodyStyle: t.hasNoMargin ? ' style="padding:0" ' : "",
                animatedCls: "",
                title: t.title || "",
                content: t.content || "",
                popTitle: t.hasNoTitle ? "" : d,
                popFooter: n,
                okTxt: t.okTxt || a.lang("确定"),
                cancelTxt: t.cancelTxt || a.lang("取消"),
                _execAgain: !0
            }
        }
    })
});
define("/cpn/1.03.04/select", ["nc", "./attachSub/attachSel", "./attach", "./input"], function (t, e, a) {
    var n = t("nc"), s = n.$, i = n.Component, o = n.Clazz, l = n.Base, r = (n.Str, n.Dom, t("./attachSub/attachSel")),
        c = a.exports = o.create();
    o.mix(c, i, {
        _template: ['<div class="btn-group">', '<button class="btn btn-default dropdown-toggle">', '<span class="js-txt #{txtCls}">#{text}</span>', '<span class="caret"></span>', "</button>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, e = t.getEl(), a = t.rawConfig;
                t.btnEl = e.find("button.dropdown-toggle"), t.txtEl = e.find("span.js-txt"), t.size(a.size), t.initSel(), t.updateText();
                var n = t.btnEl.width();
                !a.autoWidth && 20 < n && t.txtEl.outerWidth(n), t.isDisabled = !!a.disabled, t.disabled(t.isDisabled)
            }
        }, {
            name: "destroy", type: "custom", handler: function () {
                this.attachSel && this.attachSel.destroy()
            }
        }],
        transformConf: function d(t) {
            var e = t.find("ul.dropdown-menu li"), n = [], i = "";
            return l.forEach(e, function (t, e) {
                var a = (t = s(t)).hasClass("selected");
                n.push({
                    text: s.trim(t.text()),
                    value: t.attr("data-val") || e,
                    checked: a
                }), a && (i = s.trim(t.text()))
            }), i && t.find("button.dropdown-toggle .dropdown-value").html(i), {text: i, options: n}
        }
    }, {
        initSel: function h() {
            var t = this, e = t.rawConfig, a = t.getEl(), n = (t.attachSel = r.show({
                target: t.getEl(),
                options: e.options,
                zIndex: e.zIndex,
                noHover: !!e.noHover,
                needSearch: !!e.needSearch,
                clickItemNoHide: e.clickItemNoHide,
                needClick: !0,
                needReWidth: !0,
                needKeyboard: !0,
                attach: {extOffset: {left: -1, top: -2}},
                canShow: function () {
                    return !t.isDisabled
                },
                listeners: {
                    select: function () {
                        t.error(!1)
                    }, change: function () {
                        t.fire("change"), t.updateText(), e.change && e.change.call(t)
                    }
                }
            })).attach;
            n.listen("attachShow", function () {
                a.addClass("open")
            }), n.listen("attachHide", function () {
                a.removeClass("open")
            })
        }, isOpen: function u() {
            return this.getEl().hasClass("open")
        }, open: function f(t) {
            this.getEl();
            this.attachSel.attach[!1 === t ? "forceHide" : "forceShow"]()
        }, select: function p(t, e) {
            var a = this, n = (a.rawConfig, a.attachSel);
            if (0 === arguments.length) return n.index();
            n.index(t, !e), a.updateText()
        }, val: function g(t, e) {
            var a = this.rawConfig, n = this.attachSel;
            a.options;
            if (0 === arguments.length) return n.val();
            n.val(t, !e), this.updateText()
        }, text: function x() {
            this.rawConfig;
            var t = this.attachSel.getSelectedItem();
            return t && (t.text || s(t.html).text()) || ""
        }, updateText: function m() {
            var t = this.rawConfig, e = this.attachSel.getSelectedItem(), a = s.trim(e ? e.text : t.text || "请选择");
            this.txtEl.html(a), this.txtEl.attr("title", a.replace(/<[^>]+>/g, ""))
        }, error: function v(t) {
            this.getEl()[!1 === t ? "removeClass" : "addClass"]("error")
        }, size: function b(t) {
            var e = this.getEl(), a = {xsmall: "btn-group-xs", small: "btn-group-sm", large: "btn-group-lg"}[t || ""];
            e.removeClass("btn-group-sm btn-group-lg"), a && e.addClass(a)
        }, clear: function S(t) {
            this.rawConfig;
            this.txtEl.html(t), this.attachSel.clear()
        }, disabled: function C(t) {
            this.isDisabled = !1 !== t, this.getEl()[this.isDisabled ? "addClass" : "removeClass"]("disabled")
        }, _getData: function w(t) {
            return {
                text: t.text,
                txtCls: t.autoWidth ? "" : "dropdown-value",
                menuCls: t.autoWidth ? "dropdown-auto" : ""
            }
        }, replaceOptions: function E(t) {
            var e = this;
            e.rawConfig.options = t, e.attachSel && e.attachSel.destroy(), e.initSel(), e.updateText()
        }
    })
});
define("/cpn/1.03.04/selectMult", ["nc", "./attachSub/attachSelMult", "./attach", "./checkbox", "./input"], function (t, e, a) {
    var n = t("nc"), i = n.$, l = n.Component, o = n.Clazz, s = n.Base,
        r = (n.Str, n.Dom, t("./attachSub/attachSelMult")), c = a.exports = o.create();
    o.mix(c, l, {
        _template: ['<div class="btn-group">', '<button class="btn btn-default dropdown-toggle">', '<span class="js-txt #{txtCls}">#{text}</span>', '<span class="caret"></span>', "</button>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, e = t.getEl(), a = t.rawConfig;
                t.btnEl = e.find("button.dropdown-toggle"), t.txtEl = e.find("span.js-txt"), t.size(a.size), t.initSel(), t.updateText();
                var n = t.btnEl.width();
                !a.autoWidth && 20 < n && t.txtEl.outerWidth(n), t.isDisabled = !!a.disabled, t.disabled(t.isDisabled)
            }
        }, {
            name: "destroy", type: "custom", handler: function () {
                this.attachSel && this.attachSel.destroy()
            }
        }],
        transformConf: function h(t) {
            var e = t.find("ul.dropdown-menu li"), n = [], l = "";
            return s.forEach(e, function (t, e) {
                var a = (t = i(t)).hasClass("selected");
                n.push({
                    text: i.trim(t.text()),
                    value: t.attr("data-val") || e,
                    checked: a
                }), a && (l = i.trim(t.text()))
            }), l && t.find("button.dropdown-toggle .dropdown-value").html(l), {text: l, options: n}
        }
    }, {
        initSel: function u() {
            var t = this, e = t.rawConfig, a = t.getEl();
            t.attachSel = r.show({
                target: t.getEl(),
                options: e.options,
                zIndex: e.zIndex,
                needSearch: e.needSearch,
                placeholder: e.placeholder,
                noHover: !!e.noHover,
                noSelectAll: !!e.noSelectAll,
                needClick: !0,
                needReWidth: !0,
                attach: {extOffset: {left: -1, top: -2}},
                canShow: function () {
                    return !t.isDisabled
                },
                listeners: {
                    change: function () {
                        t.error(!1), t.fire("change"), t.updateText(), e.change && e.change.call(t)
                    }, ok: function () {
                        t.fire("ok"), t.updateText(), e.ok && e.ok.call(t)
                    }
                }
            });
            var n = t.attachSel.attach;
            n.listen("attachShow", function () {
                a.addClass("open")
            }), n.listen("attachHide", function () {
                a.removeClass("open")
            })
        }, isOpen: function d() {
            return this.getEl().hasClass("open")
        }, open: function f(t) {
            this.getEl();
            this.attachSel.attach[!1 === t ? "forceHide" : "forceShow"]()
        }, select: function p(t, e) {
            var a = this, n = a.rawConfig.options, l = a.attachSel;
            if (0 === arguments.length) {
                var i = l.val(), o = {};
                return s.forEach(n, function (t, e) {
                    o[t.value] = e
                }), s.map(i, function (t) {
                    return o[t]
                })
            }
            var i = s.map(s.isArray(t) ? t : [t], function (t) {
                return n[t].value
            });
            l.val(i, !e), a.updateText()
        }, val: function g(t, e) {
            this.rawConfig;
            var a = this.attachSel;
            if (0 === arguments.length) return a.val();
            a.val(t, !e), this.updateText()
        }, valText: function v() {
            return this.attachSel.valText()
        }, text: function x() {
            return this.attachSel.valText().join(",") || ""
        }, updateText: function S() {
            var t = this.rawConfig, e = i.trim(this.attachSel.valText().join(",") || t.text || "请选择");
            this.txtEl.html(e), this.txtEl.attr("title", e.replace(/<[^>]+>/g, ""))
        }, error: function m(t) {
            this.getEl()[!1 === t ? "removeClass" : "addClass"]("error")
        }, size: function b(t) {
            var e = this.getEl(), a = {xsmall: "btn-group-xs", small: "btn-group-sm", large: "btn-group-lg"}[t || ""];
            e.removeClass("btn-group-sm btn-group-lg"), a && e.addClass(a)
        }, clear: function C(t) {
            this.rawConfig;
            this.txtEl.html(t), this.attachSel.clear()
        }, disabled: function w(t) {
            this.isDisabled = !1 !== t, this.getEl()[this.isDisabled ? "addClass" : "removeClass"]("disabled")
        }, _getData: function E(t) {
            return {
                text: t.text,
                txtCls: t.autoWidth ? "" : "dropdown-value",
                menuCls: t.autoWidth ? "dropdown-auto" : ""
            }
        }, replaceOptions: function T(t) {
            var e = this;
            e.rawConfig.options = t, e.attachSel && e.attachSel.destroy(), e.initSel(), e.updateText()
        }
    })
});
define("/cpn/1.03.04/switch", ["nc"], function (a, e, n) {
    var s = a("nc"), t = s.$, c = (s.Base, s.Component), l = s.Clazz, i = n.exports = l.create();
    l.mix(i, c, {
        _template: ['<label class="#{switchCls}">', '<span class="nk-switch switch-mini">', '<input type="checkbox" #{checked} name="#{name}" val="#{val}">', '<span class="track"><span class="handle"></span>#{text}</span>', "</span>", "</label>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var a = this, e = a.rawConfig, n = a.getEl();
                n.find("span.nk-switch").addClass("switch-mini"), a.valIpt = n.find("input"), a._val = e.val || 0 === e.val ? e.val : a.valIpt.val() || "", e.checked && a.checked()
            }
        }, {
            name: "click", type: "bind", handler: function (a) {
                a.stopPropagation(), a.preventDefault(), this.fire("click")
            }
        }, {
            name: "click", type: "custom", handler: function () {
                var a = this, e = a.rawConfig;
                a.getEl();
                a.isDisabled() || e.canChange && !1 === e.canChange.call(a) || (a.checked(!a.isChecked()), a.fire("change"), e.change && e.change.call(a))
            }
        }],
        transformConf: function d(a) {
            var e = {
                checked: !!a.find("input[type=checkbox]").prop("checked"),
                disabled: !!a.hasClass("disabled"),
                val: a.find("input").val(),
                text: t.trim(a.text())
            };
            0 === a.find("span.nk-switch").length && a.html(['<span class="nk-switch">', '<input type="checkbox" />', '<span class="track"><span class="handle"></span></span>', "</span>"].join(""));
            var n = a.find("span.nk-switch");
            0 === n.find("input[type=checkbox]").length && n.append('<input type="checkbox" />');
            0 === n.find("span.track").length && n.append('<span class="track"><span class="handle"></span></span>');
            0 === n.find("span.track span.handle").length && n.find("span.track").append('<span class="handle"></span>');
            return e
        }
    }, {
        val: function p(a) {
            var e = this;
            e.getEl();
            {
                if (0 === arguments.length) return e._val;
                e._val = a, e.valIpt.val(a)
            }
        }, text: function h() {
            return this.rawConfig.text
        }, disabled: function r(a) {
            this.getEl()[!1 === a ? "removeClass" : "addClass"]("disabled")
        }, isDisabled: function o() {
            return this.getEl().hasClass("disabled")
        }, checked: function k(a) {
            var e = this, n = e.rawConfig, s = e.getEl(), t = e.valIpt, c = n.checkedCls;
            !1 === a ? (t.prop("checked", !1), c && s.removeClass(c)) : (t.prop("checked", !0), c && s.addClass(c))
        }, isChecked: function f() {
            return !!this.valIpt.prop("checked")
        }, _getData: function v(a) {
            var e = [];
            return a.disabled && e.push("disabled"), a.checked && e.push("checked"), {
                switchCls: a.disabled ? "disabled" : "",
                checked: a.checked ? "checked" : "",
                text: a.text,
                val: a.val,
                name: a.name
            }
        }
    })
});
define("/cpn/1.03.04/tab", ["nc"], function (e, n, t) {
    var i = e("nc"), s = i.$, l = i.Base, a = i.Component, c = i.Str, r = i.Clazz, d = t.exports = r.create();
    r.mix(d, a, {
        _template: '<div class="menu-box #{cls}"><ul class="menu clearfix">#{list}</ul></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, n = e.rawConfig;
                e.getEl();
                n.noFireChangeOnRender || (n.change && n.change.call(e), e.fire("change"))
            }
        }, {
            name: "click .js-tab-item", handler: function (e) {
                var n = s(e.currentTarget).index();
                this.index(n)
            }
        }]
    }, {
        initialize: function f(e) {
            var n = e.items || [], t = !1;
            l.forEach(n, function (e) {
                e.checked && t && (e.checked = !1), t = t || e.checked
            }), !t && 0 < n.length && (n[0].checked = !0)
        }, val: function u(t, i) {
            var a = this, e = a.rawConfig.items;
            if (0 === arguments.length) {
                var n = a.index();
                return -1 === n ? null : e[n].value
            }
            l.forEach(e, function (e, n) {
                if (e.value === t) return a.index(n, i), l.BREAK
            })
        }, index: function h(e, n) {
            var t = this, i = t.rawConfig, a = t.getEl(), c = a.find("li.js-tab-item"),
                l = a.find("li.js-tab-item.selected"), r = 0 === l.length ? -1 : l.index(), r = l.index();
            if (0 === arguments.length) return r;
            e !== r && (c.removeClass("selected"), s(c[e]).addClass("selected"), !1 !== n && (i.change && i.change.call(t), t.fire("change")))
        }, updateText: function o(n, e) {
            var t = this.getEl(), i = this.rawConfig.items, a = l.findIndex(i, function (e) {
                return e.value === n
            });
            if (0 <= a) {
                i[a];
                var c = s(t.find("li.js-tab-item")[a]).find("a");
                c.html(s.trim(e))
            }
        }, _getData: function m(e) {
            var n = l.map(e.items, function (e) {
                return c.execTpl('<li class="#{cls} js-tab-item"><a href="javascript:void(0)">#{text}</a></li>', {
                    cls: e.checked ? "selected" : "",
                    text: e.text
                })
            }).join("");
            return {cls: "line" === e.type ? "menu-line-box" : "", list: n}
        }
    })
});
define("/cpn/1.03.04/tag", ["nc"], function (e, t, s) {
    var n = e("nc"), a = (n.$, n.Base, n.Clazz), l = n.Component, i = s.exports = a.create();
    a.mix(i, l, {
        _template: ['<#{tag} class="tag-label">', '<span class="js-text"></span>', "</#{tag}>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, t = e.rawConfig;
                "span" !== t.tag && e.getEl().attr("href", "javascript:void(0);"), t.text && e.text(t.text), t.checked && e.checked(), t.needDel && e.needDel(), t.disabled && e.disabled()
            }
        }, {
            name: "click", handler: function () {
                var e = this;
                e.rawConfig.needToggle && e.checked(!e.isChecked()), !e.isDisabled() && e.fire("click")
            }
        }, {
            name: "click.stop .js-del", handler: function () {
                this.fire("del")
            }
        }]
    }, {
        text: function d(e) {
            var t = this.getEl(".js-text");
            if (0 === arguments.length) return t.text();
            t.text(e)
        }, val: function c() {
            return this.rawConfig.value
        }, checked: function r(e) {
            var t = this, s = t.getEl();
            t.isChecked() !== (e = !1 !== e) && (s[e ? "addClass" : "removeClass"]("selected"), t.fire("toggle"))
        }, isChecked: function o() {
            return this.getEl().hasClass("selected")
        }, disabled: function g(e) {
            var t = this;
            e = !1 !== e, t.getEl()[e ? "addClass" : "removeClass"]("disabled"), t.needDel(!e && t.rawConfig.needDel)
        }, isDisabled: function h() {
            return this.getEl().hasClass("disabled")
        }, needDel: function f(e) {
            var t = this.getEl(".js-del");
            (e = !1 !== e) && !t.get(0) && this.getEl().append('<span class="del-tag js-del">x</span>'), !e && t.get(0) && t.remove()
        }, showDel: function u(e) {
            return this.getEl(".js-del").css("display", !1 === e ? "none" : "")
        }, _getData: function p(e) {
            return {tag: "span" === e.tag ? "span" : "a"}
        }
    })
});
define("/cpn/1.03.04/tips", ["nc"], function (t, e, n) {
    var i = t("nc"), m = i.$, o = i.Component, r = i.Clazz, h = i.Base, d = i.Dom, w = n.exports = r.create();
    r.mix(w, o, {
        _showTips: [],
        _template: ['<div class="tooltip top">', '<div class="tooltip-arrow"></div>', '<div class="tooltip-inner"></div>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, e = t.rawConfig, n = t.getEl();
                t.contentEl = n.find("div.tooltip-inner");
                var i = h.id(e.width);
                i && n.outerWidth(i), !i && !e.autoWidth && n.css("max-width", 250), t.val(e.content, !0), e.noCenter && t.contentEl.css("textAlign", "left"), t.theme(e.theme)
            }
        }, {
            name: "destroy", type: "custom", handler: function () {
                var n = this, i = w._showTips;
                h.forReverse(i, function (t, e) {
                    t._index === n._index && i.splice(e, 1)
                })
            }
        }],
        index: 1,
        wrap: function a(t, e) {
            if (!t || !e) return;
            e.content = t.html();
            var n = this.show(e);
            return (t.tips = n).listen("render", function () {
                o.setEvents()
            }), n.listen("destroy", function () {
                t.destroy && t.destroy()
            }), t.listen("destroy", function () {
                n.destroy && n.destroy()
            }), n
        },
        show: function l(t) {
            var e, n = m(t.target), i = new w(h.extend({}, t, {noRender: !0})), o = 500, r = 100, a = !!t.noEnterLeave;
            return n.on("mouseenter", s).on("mouseleave", u).on("click", u), !a && i.listen("render", function () {
                i.getEl().on("mouseenter", s).on("mouseleave", u)
            }), i.listen("destroy", function () {
                window.clearTimeout(e), n.unbind("mouseenter", s).unbind("mouseleave", u).unbind("click", u), i.getEl().unbind("mouseenter", s).on("mouseleave", u)
            }), i.listen("forceUniqHide", function () {
                window.clearTimeout(e), i.hide()
            }), w._showTips.push(i), i;

            function s() {
                window.clearTimeout(e), e = window.setTimeout(function () {
                    c(), e = window.setTimeout(function () {
                        if (!i.__destroy) {
                            if (document.contains && !document.contains(n.get(0))) return u();
                            c(), e = window.setTimeout(arguments.callee, o)
                        }
                    }, o)
                }, r)
            }

            function c() {
                h.forEach(w._showTips, function (t) {
                    t !== i && t.fire("forceUniqHide")
                }), i.render(), i.show(), i.attachTo(n, t.attach)
            }

            function u() {
                window.clearTimeout(e), a && i.hide(), !a && (e = window.setTimeout(function () {
                    i.hide()
                }, r))
            }
        },
        title: function v(a, s) {
            s = s || {};
            var c = this, u = {}, d = w._commonTips = w._commonTips || new w(h.extend({}, s.initConf, {noRender: !0})),
                l = 500;
            if (a = m.trim(a), s = s || {}, !a) return;
            if (a = a.replace(/^\.+/, ""), n(), s.keep) {
                var t, e = function () {
                    window.clearTimeout(t), t = window.setTimeout(n, 250)
                };
                return m(document).on("mousemove", e), function () {
                    m(document).unbind("mousemove", e), window.clearTimeout(t)
                }
            }

            function n() {
                var t = m("." + a);
                0 !== t.length && h.forEach(t, function (e) {
                    var n;
                    e = m(e);
                    var t = m.trim(e.attr("data-tips-index")),
                        i = m.trim(e.attr("data-title")) || m.trim(e.attr("title")),
                        o = "white" === e.attr("data-theme");
                    if (!(!i || t && u[t])) {
                        e.removeAttr("title"), e.attr("data-title", i);
                        var r = m.trim(c.index++);
                        e.attr("data-tips-index", r), u[r] = !0, !s.keepCls && e.removeClass(a), e.on("mouseenter", function (t) {
                            window.clearTimeout(n), d._updateTxt(e, s.attachConf), d.theme(o), n = window.setTimeout(function () {
                                if (document.contains && !document.contains(e.get(0))) return f(d, n);
                                d._updateTxt(e, s.attachConf), n = window.setTimeout(arguments.callee, l)
                            }, l)
                        }).on("mouseleave", function () {
                            f(d, n)
                        }), e.on("click", function () {
                            f(d, n)
                        })
                    }
                })
            }

            function f(t, e) {
                window.clearTimeout(e), t.hide()
            }
        },
        titleEl: function c(t, r, a) {
            2 === arguments.length && h.isFunction(r) && (a = r);

            function s(t, e) {
                window.clearTimeout(e), t.hide()
            }

            h.forEach(t, function (e) {
                e = m(e);
                var n, i = new w({noRender: !0}), o = "white" === e.attr("data-theme");
                e.on("mouseenter", function (t) {
                    window.clearTimeout(n), i.theme(o), i._updateTxt(e, r), n = window.setTimeout(function () {
                        if (document.contains && !document.contains(e.get(0))) return s(i, n);
                        i._updateTxt(e, r), n = window.setTimeout(arguments.callee, 500)
                    }, 500)
                }).on("mouseleave", function () {
                    s(i, n)
                }), e.on("click", function () {
                    s(i, n)
                }), a && a(i)
            })
        }
    }, {
        initialize: function s(t) {
            t.renderTo = t.renderTo || m(document.body)
        }, topArrow: function u(t) {
            this.getEl().removeClass("top bottom").addClass(!1 === t ? "bottom" : "top")
        }, val: function f(t, e) {
            if (t = (t = m.trim(t)).replace(/(\n)+|(\\n)+/g, "<br />"), !this.rendered) return;
            this.contentEl.html(t || "&nbsp;"), !0 === e && this.fixPosition()
        }, attachTo: function p(t, e) {
            var n = this.getEl();
            if (!(t = m(t)).get(0)) return;
            var i = d.attachTo(h.extend({zIndex: 1e4}, e, {el: this.getEl(), target: t}));
            this.topArrow(!!i.verReverse);
            var o = n.find("div.tooltip-arrow"), r = t.outerWidth(), a = n.outerWidth(),
                s = parseInt(n.css("left"), 10), c = 0;
            if (!e || !e.horz) if (i.reverse) {
                o.css("left", "50%"), c = 1 + (a - r) / 2;
                var u = parseInt(o.css("left"), 10);
                o.css("left", Math.min(u + c, a - 13))
            } else if ((s -= (a - r) / 2) < 1 && (c = 1 - s, s = 1), n.css("left", s), o.css("left", "50%"), 0 < c) {
                var u = parseInt(o.css("left"), 10);
                o.css("left", Math.max(u - c, 13))
            }
        }, fixPosition: function T() {
            var t = this.rawConfig;
            this.attachTo(t.target, t.attach)
        }, theme: function x(t) {
            var e = this.getEl();
            t = !!t, this.isWhite !== t && (e[t ? "addClass" : "removeClass"]("tooltip-info"), e.find(".tooltip-arrow").html(t ? "<i></i>" : ""), this.isWhite = t)
        }, _updateTxt: function g(t, e) {
            if (!(t = m(t)).get(0)) return;
            var n = m.trim(t.attr("title")) || m.trim(t.attr("data-title")), i = m.trim(t.attr("data-title"));
            if (t.removeAttr("title"), n !== i && t.attr("data-title", n), !n) return;
            this.render(), this.show(), this.val(n), this.attachTo(t, e)
        }
    })
});
define("/cpn/1.03.04/uploadFlash", ["nc", "./popup", "./layer"], function (e, a, l) {
    var i = e("nc"), o = i.$, s = i.Clazz, t = i.Sys, r = i.Base, p = i.Cookie, n = i.Num, d = i.Uri,
        u = l.exports = s.create(), c = e("./popup");
    r.extend(u.prototype, {
        initialize: function f(l) {
            var i = this;
            e.async("//static.nowcoder.com/nc/flash/upload/swfupload.min.js", function () {
                l.fileSizeLimit = l.fileSizeLimit || 5, l.fileQueueLimit = l.fileQueueLimit || 1, (i.rawConfig = l).btn = l.btn || {};
                var e = r.clone(p.get()) || {};
                e.type = l.type || 1;
                var a = {
                    upload_url: d.addParam({type: e.type}, l.url || "/upload_images"),
                    flash_url: "//static.nowcoder.com/nc/flash/upload/swfupload.swf",
                    flash9_url: "//static.nowcoder.com/nc/flash/upload/swfupload_fp9.swf",
                    post_params: e,
                    file_post_name: l.postName || "file",
                    file_size_limit: l.fileSizeLimit + "MB",
                    file_types: l.fileType || "*.doc;*.docx;*.pdf;",
                    file_types_description: "文件上传",
                    file_queue_limit: l.fileQueueLimit,
                    debug: !1,
                    prevent_swf_caching: !1,
                    button_image_url: l.btn.image || "//uploadfiles.nowcoder.com/images/20160520/56_1463728821615_B856A5CA00C64BEA1A77436F8FE39D5E",
                    button_width: l.btn.width || "220",
                    button_height: l.btn.height || "45",
                    button_placeholder: o(l.holderEl).get(0),
                    button_cursor: SWFUpload.CURSOR.HAND,
                    button_window_mode: "transparent",
                    swfupload_preload_handler: r.bind(i.callback, i, "preload"),
                    swfupload_load_failed_handler: r.bind(i.loadFailed, i),
                    file_queued_handler: r.bind(i.callback, i, "fileQueued"),
                    file_queue_error_handler: r.bind(i.fileQueueError, i),
                    file_dialog_start_handler: r.bind(i.callback, i, "fileDialogStart"),
                    file_dialog_complete_handler: r.bind(i.fileDialogComplete, i),
                    upload_start_handler: r.bind(i.uploadStart, i),
                    upload_progress_handler: r.bind(i.uploadProgress, i),
                    upload_error_handler: r.bind(i.uploadError, i),
                    upload_success_handler: r.bind(i.uploadSuccess, i),
                    upload_complete_handler: r.bind(i.callback, i, "uploadComplete"),
                    queue_complete_handler: r.bind(i.callback, i, "queueComplete")
                };
                i.swfUpload = new SWFUpload(a)
            })
        }, callback: function _(e) {
            var a = this.rawConfig, l = [].slice.call(arguments, 1);
            if (a[e]) return a[e].apply(a.target || this, l)
        }, loadFailed: function h() {
            if (!1 === this.callback("loadFailed")) return;
            c.alert("flash 加载失败，请检查您的浏览器是否支持 flash")
        }, fileQueueError: function m(e, a, l) {
            var i = this.rawConfig,
                o = a === SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED ? "一次只能选择" + i.fileQueueLimit + "个文件" : a === SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT ? "上传的文件不能超过" + i.fileSizeLimit + "M" : a === SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE ? "不能上传空文件" : a === SWFUpload.QUEUE_ERROR.INVALID_FILETYPE ? "上传的文件格式不正确" : l || "抱歉，上传发生错误，请稍后";
            if (!1 === this.callback("fileQueueError", e, a, o)) return;
            c.alert(o)
        }, fileDialogComplete: function b(e, a) {
            if (!1 === this.callback("fileDialogComplete", e, a)) return;
            try {
                this.swfUpload.startUpload()
            } catch (l) {
            }
        }, uploadStart: function g(e) {
            return this.callback("uploadStart", e), !0
        }, uploadProgress: function E(e, a, l) {
            var i = this, o = i.popup;
            if (t.out(a), !1 === i.callback("uploadProgress", e, a, l)) return;
            var s = (100 * a / (l || 1)).toFixed(2);
            o ? (o.getEl().find("#jsPopupProgressTips").html('<div class="upload-progress-bar"><span class="progress-txt">正在上传：' + s + '%</span><div class="progressing" style="width:' + s + '%;"></div></div>'), a === l && (i.saveTipsTimer = window.setTimeout(function () {
                o.getEl().find("#jsPopupProgressTips").html('<div class="upload-progress-bar"><span class="progress-txt">正在保存，请稍后</span><div class="progressing" style="width:100%;"></div></div>')
            }, 100))) : i.popup = new c({
                title: "",
                width: 540,
                noUnique: !0,
                hasNoTitle: !0,
                hasNoMove: !0,
                hasNoMargin: !0,
                content: '<div id="jsPopupProgressTips" class="subject-upload-inner" style="margin:0"><div class="upload-progress-bar"><span class="progress-txt">正在上传：' + s + '%</span><div class="progressing" style="width:' + s + '%;"></div></div></div>'
            })
        }, uploadError: function v(e, a, l) {
            var i = this;
            if (window.clearTimeout(i.saveTipsTimer), !1 === i.callback("uploadError", e, a, l)) return;
            l = l || 999 == +a ? "上传失败，请重新登录" : "出现错误，请重试", i.popup ? (i.popup.getEl().find("#jsPopupProgressTips").html('<a href="javascript:void(0);" class="btn btn-block btn-default"><span class="upload-rusult-ico"><span class="fui-cross"></span></span>' + l + "</a>"), o(document).one("click", function () {
                i.popup.close(), i.popup = null
            })) : c.alert(l)
        }, uploadSuccess: function w(e, a) {
            var l = this;
            window.clearTimeout(l.saveTipsTimer);
            var i = r.json(a, {});
            if (0 !== i.code) return void l.uploadError(e, i.code, i.msg);
            var o = {
                tmpId: (new Date).getTime(),
                url: i.data,
                fileName: (i.data || "").split("_").pop() || i.data,
                fileSize: n.byte2Size(e.size)
            };
            l.popup && (l.popup.getEl().find("#jsPopupProgressTips").html('<a href="javascript:void(0);" class="btn btn-block btn-primary"><span class="upload-rusult-ico"><span class="fui-check"></span></span>上传完成</a>'), setTimeout(function () {
                l.popup.close(), l.popup = null
            }, 1500));
            l.callback("uploadSuccess", e, o)
        }
    })
});
define("/cpn/1.03.04/attachSub/attachDate", ["nc", "../attach", "../checkbox", "../input"], function (e, t, a) {
    var i = e("nc"), s = i.$, l = i.Component, n = i.Clazz, f = i.Base, r = i.Str, y = i.Dom, c = i.Time, u = i.Num,
        h = i.Browser, o = e("../attach"), d = (e("../checkbox"), e("../input"), a.exports = n.create()), m = "date",
        v = "dateNoDay", p = "time", g = "datetime";
    n.mix(d, l, {
        _template: '<div style="position:relative"></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, t = e.rawConfig;
                e.value = e.str2data(t.val || ""), e.initIpt(), e.initHtml(), e.refresh()
            }
        }, {
            name: "click .js-toggle", handler: function () {
                var e = this;
                e.changeMinType(), e.resize(), e.fixPostion()
            }
        }, {
            name: "click .js-quick", handler: function (e) {
                this.rawConfig;
                var t = +s(e.currentTarget).attr("data-ext") || 0, a = new Date((new Date).getTime() + 864e5 * t);
                this.val(c.form(a, "yyyy-MM-dd HH:mm:ss"))
            }
        }, {
            name: "click li.js-item", handler: function (e) {
                var t = this, a = s(e.currentTarget);
                if (!a.hasClass("selected") && !a.hasClass("disabled")) {
                    var i = t.value, l = a.closest("div.js-part"), n = (t.type, l.attr("data-type")),
                        r = a.attr("data-val");
                    if (r && n && {year: 1, month: 1, day: 1, hour: 1, min: 1}[n]) {
                        var o = +r || 0;
                        if (a.closest("div").find(".js-item.selected").removeClass("selected"), a.addClass("selected"), t.value[n] = o, "year" === n) (!f.id(i.month) || !t.canSelectDate(o, t.value.month)) && (t.value.month = null), (!f.id(i.month) || !f.id(i.day) || !t.canSelectDate(o, t.value.month, t.value.day)) && (t.value.day = null), t.renderMonth(), t.renderDay(), t.renderHour(), t.renderMin(); else if ("month" === n) (!f.id(i.day) || !t.canSelectDate(t.value.year, o, t.value.day)) && (t.value.day = null), t.renderDay(), t.renderHour(), t.renderMin(); else if ("day" === n) {
                            var d = f.id(i.min) ? [i.hour, i.min] : [i.hour];
                            f.id(i.hour) && t.canSelectTime.apply(t, d) || (t.value.hour = null, t.value.min = null), t.renderHour(), t.renderMin()
                        } else "hour" === n && (!f.id(i.min) && (t.value.min = 0), !t.canSelectTime(t.value.hour, t.value.min) && (t.value.min = null), t.renderMin());
                        t.resize(), t.fixQuick(), t.fixPostion("year" === n, "hour" === n), t.callback()
                    }
                }
            }
        }],
        show: function D(e) {
            var t = new d(e = e || {});
            return o.wrap(t, {
                target: e.target,
                attach: e.attach,
                content: t.html(),
                zIndex: e.zIndex,
                noHover: e.noHover,
                needClick: e.needClick,
                canShow: e.canShow
            }), t
        },
        yearDiff: function j(e) {
            return e = +e || 0, (new Date).getFullYear() + e
        }
    }, {
        initialize: function x(e) {
            var t = this;
            t.type = f.contains([m, v, g, p], e.type) ? e.type : g, t.quickTool = !!e.quickTool && t.type !== v && t.type !== p, "time" === t.type && (e.startDate = e.startDate || "00:00", e.endDate = e.endDate || "23:59");
            t.endDate = t.getDateConf(e.endDate), t.startDate = t.getDateConf(e.startDate, !0)
        }, initHtml: function T() {
            var e = this, t = e.getEl(), a = e.type,
                i = a === p ? "" : ['<div class="js-date date-picker" style="position:absolute;">', '<div class="js-part first-column" data-type="year"></div>', '<div class="js-part js-tile second-column" data-type="month" style="overflow:hidden;"></div>', a === v ? "" : '<div class="js-part js-tile third-column" data-type="day" style="overflow:hidden;"></div>', "</div>"].join(""),
                l = a === m || a === v ? "" : ['<div class="js-time date-picker" style="position:absolute;">', '<div class="js-part first-column" data-type="hour"></div>', '<div class="js-part js-tile third-column" data-type="min" style="left:71px;width:262px;overflow:hidden;position:relative;">', '<div class="js-list" style="padding:0 0 40px;"></div>', '<div style="padding:5px 0;text-align:right;background:#fff;position:absolute;bottom:0;left:0;width:100%;">', '<a href="javascript:void(0);" class="js-toggle link-green">更多时间&gt;</a>&nbsp;&nbsp;', "</div>", "</div>", "</div>"].join(""),
                n = e.quickTool ? ['<ul class="date-days js-quicktool">', '<li class="js-quick" data-ext="0"><a href="javascript:void(0);"><i class="day-spot"></i>今天</a></li>', '<li class="js-quick" data-ext="1"><a href="javascript:void(0);"><i class="day-spot"></i>明天</a></li>', '<li class="js-quick" data-ext="2"><a href="javascript:void(0);"><i class="day-spot"></i>后天</a></li>', "</ul>"].join("") : "";
            t.html(i + l + n), e.dateEl = t.find("div.js-date"), e.timeEl = t.find("div.js-time");
            e.elMap = {
                year: e.dateEl.find(".js-part.first-column"),
                month: e.dateEl.find(".js-part.second-column"),
                day: e.dateEl.find(".js-part.third-column"),
                hour: e.timeEl.find(".js-part.first-column"),
                min: e.timeEl.find(".js-part.third-column"),
                minList: e.timeEl.find(".js-list"),
                minToggle: e.timeEl.find(".js-toggle"),
                quickTool: t.find(".js-quicktool")
            }
        }, initIpt: function M() {
            var t = this, a = t.rawConfig, i = t.ipt = s(a.ipt);
            0 < i.length && (s(a.ipt).attr("readonly", 1), t.attach.listen("attachShow", function () {
                var e = i.val();
                e = a.transformIptVal ? a.transformIptVal(e) : e, t.val(e)
            }))
        }, val: function w(e) {
            var t = this, a = t.type, i = t.str2data(e), l = t.canSelectDate(i.year, i.month, i.day),
                n = t.canSelectTime(i.hour, i.min);
            ((a === m || a === v) && l || a === g && l && n || a === p && n) && (t.value = i);
            t.refresh(), t.callback()
        }, resize: function k() {
            var e = this, t = e.getEl(), a = e.elMap, i = e.dateEl, l = e.timeEl, n = a.year, r = a.month, o = a.day,
                d = a.hour, s = a.min, c = a.quickTool, u = Math.max(e.lastMaxHeight || 0, e.type === p ? 180 : 186);
            f.forEach([r, o, s], function (e) {
                e.height(1);
                var t = e.get(0) ? e.get(0).scrollHeight : 0;
                e.height(t), u = Math.max(u, e.outerHeight())
            }), e.lastMaxHeight = u;
            var h = 0, m = 0;
            f.forEach([[n, r, o], [d, s]], function (e, t) {
                var a = 0 === t;
                f.forEach(e, function (e) {
                    var t = e.outerWidth() - (e.get(0) ? 1 : 0);
                    e.outerHeight(u), a && (h += t), !a && (m += t)
                })
            }), r.css("left", n.outerWidth() - 1), o.css("left", n.outerWidth() + r.outerWidth() - 2), s.css("left", d.outerWidth() - 1), i.outerWidth(h).outerHeight(u), l.outerWidth(m).outerHeight(u).css("left", h - 1);
            var v = (l.get(0) ? y.getPosLeft(l, t) + l.outerWidth() : h) + 1;
            c.outerWidth(v).css("top", u - 1), t.outerWidth(v).outerHeight(c.outerHeight() + u - 1)
        }, fixPostion: function b(e, t) {
            var a = this, i = (a.getEl(), a.elMap.year);
            if (!e && 0 < i.length) {
                var l = i.find("li.selected");
                (l = l.get(0) ? l : i.find("li[data-val=" + (new Date).getFullYear() + "]")).get(0) && a.scrollCenter(l, i)
            }
            var n = a.elMap.hour;
            if (!t && 0 < n.length) {
                var l = n.find("li.selected");
                l = l.get(0) ? l : n.find("li[data-val=12]"), a.scrollCenter(l, n)
            }
        }, fixQuick: function C() {
            var e = this, t = e.value;
            if (e.quickTool) {
                var a = new Date, i = new Date(a.getTime() + 864e5), l = new Date(a.getTime() + 1728e5),
                    n = e.isSameDate(a.getFullYear(), a.getMonth() + 1, a.getDate(), t.year, t.month, t.day),
                    r = e.isSameDate(i.getFullYear(), i.getMonth() + 1, i.getDate(), t.year, t.month, t.day),
                    o = e.isSameDate(l.getFullYear(), l.getMonth() + 1, l.getDate(), t.year, t.month, t.day),
                    d = n ? 0 : r ? 1 : o ? 2 : null, s = e.elMap.quickTool;
                s.find("li a").removeClass("selected"), f.id(d) && s.find("li[data-ext=" + d + "] a").addClass("selected")
            }
        }, callback: function H() {
            var e = this, t = e.rawConfig, a = e.type, i = e.value;
            if (!t.call) return;
            var l = f.id(i.year), n = f.id(i.month), r = f.id(i.day), o = f.id(i.hour), d = f.id(i.min), s = "";
            a === g && l && n && r && o && d ? s = [i.year, u.form(i.month), u.form(i.day)].join("-") + " " + [u.form(i.hour), u.form(i.min), "00"].join(":") : a === m && l && n && r ? s = [i.year, u.form(i.month), u.form(i.day)].join("-") : a === v && l && n ? s = [i.year, u.form(i.month)].join("-") : a === p && o && d && (s = [u.form(i.hour), u.form(i.min), "00"].join(":"));
            s && s !== e._lastCallbackVal && (e._lastCallbackVal = s, t.call.call(e, i, s), h.mobile() && e.attach.forceHide())
        }, refresh: function S() {
            var e = this;
            e.renderYear(), e.renderMonth(), e.renderDay(), e.renderHour(), e.renderMin(), e.fixQuick(), e.resize(), e.fixPostion()
        }, renderYear: function E() {
            var t = this;
            if (t.type !== p) {
                var a = "", e = t.endDate.year, i = t.startDate.year;
                f.forCount(e - i + 1, function (e) {
                    e = i + e, a += r.execTpl('<li class="js-item #{selected}" data-val="#{val}">#{val}</li>', {
                        val: e,
                        selected: e === t.value.year ? "selected" : ""
                    })
                }), t.elMap.year.html("<ul>" + a + "</ul>")
            }
        }, renderMonth: function q() {
            var t = this;
            if (t.type !== p) {
                var a = t.value.year,
                    i = a ? "" : '<div style="text-align:center;margin:10px 0;color:#999;">请先选择年份</div>';
                i || (f.forCount(12, function (e) {
                    e++, i += r.execTpl('<li class="js-item #{disabled} #{selected}" data-val="#{val}">#{month}月</li>', {
                        disabled: t.canSelectDate(a, e) ? "" : "disabled",
                        selected: e == t.value.month ? "selected" : "",
                        val: e,
                        month: u.form(e)
                    })
                }), i = '<ul class="clearfix">' + i + "</ul>"), t.elMap.month.html(i)
            }
        }, renderDay: function W() {
            var t = this;
            if (t.type !== p && t.type !== v) {
                var a = t.value.year, i = t.value.month,
                    l = a && i ? "" : '<div style="text-align:center;margin:10px 0;color:#999;">请先选择年份和月份</div>';
                if (!l) {
                    l = '<ul class="no-hover clearfix"><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li><li>日</li></ul>';
                    var e = c.getDateItem(a, i, 1);
                    f.forEach(e, function (e) {
                        l += '<ul class="clearfix">', f.forEach(e, function (e) {
                            l += r.execTpl('<li class="js-item #{selected} #{nohover} #{disabled}" data-val="#{val}">#{val}</li>', {
                                disabled: t.canSelectDate(a, i, e) ? "" : "disabled",
                                nohover: e ? "" : "no-hover",
                                selected: e && e === t.value.day ? "selected" : "",
                                val: e || ""
                            })
                        }), l += "</ul>"
                    })
                }
                t.elMap.day.html(l)
            }
        }, renderHour: function z() {
            var t = this;
            if (t.type === p || t.type === g) {
                var a = "";
                f.forCount(24, function (e) {
                    a += r.execTpl('<li class="js-item #{selected} #{disabled}" data-val="#{val}">#{hour}</li>', {
                        disabled: t.canSelectTime(e) ? "" : "disabled",
                        selected: e === t.value.hour ? "selected" : "",
                        val: e,
                        hour: u.form(e)
                    })
                }), t.elMap.hour.html("<ul>" + a + "</ul>")
            }
        }, renderMin: function Y() {
            var t = this;
            if (t.type === p || t.type === g) {
                var a = "";
                f.forCount(60, function (e) {
                    a += r.execTpl('<li class="js-item #{selected} #{disabled}" data-val="#{val}">#{min}</li>', {
                        disabled: t.canSelectTime(t.value.hour, e) ? "" : "disabled",
                        selected: e === t.value.min ? "selected" : "",
                        val: e,
                        min: u.form(e)
                    })
                }), t.elMap.minList.html('<ul class="clearfix">' + a + "</ul>"), t.changeMinType((t.value.min || 0) % 5 != 0)
            }
        }, changeMinType: function F(a) {
            var e = this.minType;
            e = !0 === a ? "full" : !1 === a ? "tiny" : {full: "tiny", tiny: "full"}[e] || "tiny";
            var a = "full" === (this.minType = e);
            f.forEach(this.elMap.minList.find(".js-item"), function (e, t) {
                s(e)[a || t % 5 == 0 ? "show" : "hide"]()
            }), this.elMap.minToggle.html(a ? "常用时间&gt;" : "更多时间&gt;")
        }, canSelectDate: function I(e, t, a) {
            var i = Math.min(3, arguments.length);
            if (0 < i) {
                var l = this.startDate, n = this.endDate,
                    r = new Date(l.year, 1 < i ? l.month - 1 : 0, 2 < i ? l.day : 1),
                    o = new Date(n.year, 1 < i ? n.month - 1 : 0, 2 < i ? n.day : 1),
                    d = new Date(e, 1 < i ? t - 1 : 0, 2 < i ? a : 1);
                return d.getTime() >= r.getTime() && d.getTime() <= o.getTime()
            }
        }, canSelectTime: function P(e, t) {
            var a = this.type, i = this.value, l = this.startDate, n = this.endDate, r = arguments.length;
            if (r <= 0) return !1;
            if (a === m || a === v) return !1;
            if (1 < r && (!f.id(e) || !f.id(t))) return !0;
            {
                if (a === g) {
                    if (f.id(i.year) && f.id(i.month) && f.id(i.day)) {
                        var o = new Date(l.year, l.month - 1, l.day, l.hour, 1 < r ? l.min : 0),
                            d = new Date(n.year, n.month - 1, n.day, n.hour, 1 < r ? n.min : 0),
                            s = new Date(i.year, i.month - 1, i.day, e, 1 < r ? t : 0);
                        return s.getTime() >= o.getTime() && s.getTime() <= d.getTime()
                    }
                    return !0
                }
                if (a === p) {
                    var c = 1 === r ? e : 60 * e + t, u = 1 === r ? l.hour : 60 * l.hour + l.min,
                        h = 1 === r ? n.hour : 60 * n.hour + n.min;
                    return u <= c && c <= h
                }
            }
            return !1
        }, getDateConf: function L(e, t) {
            if ("now" === e) {
                var a = new Date;
                return {
                    year: a.getFullYear(),
                    month: a.getMonth() + 1,
                    day: a.getDate(),
                    hour: a.getHours(),
                    min: a.getMinutes()
                }
            }
            var a = t ? new Date(1900, 0, 1, 0, 0, 0) : new Date, i = /(\d{4})-(\d{2})-(\d{2})/.exec(e || "") || [],
                l = /(\d{2}):(\d{2})/.exec(e || "") || [], n = f.id(i[1]) ? +i[1] : a.getFullYear(),
                r = f.id(i[2]) ? +i[2] : a.getMonth() + 1, o = f.id(i[3]) ? +i[3] : a.getDate(),
                d = f.id(l[1]) ? +l[1] : a.getHours(), s = f.id(l[2]) ? +l[2] : a.getMinutes();
            return n = n <= 0 ? 1900 : n, r = Math.min(12, Math.max(1, r)), o = o <= 0 || o > c.getDayCount(n, r) ? 1 : o, {
                year: n,
                month: r,
                day: o,
                hour: d = d < 0 || 24 <= d ? 0 : d,
                min: s = s < 0 || 60 <= s ? 0 : s
            }
        }, scrollCenter: function V(e, t) {
            e.parent().outerHeight();
            var a = y.getPosTop(e, t);
            t.scrollTop(a - t.outerHeight() / 2 + e.height() / 2)
        }, isSameDate: function Q(e, t, a, i, l, n) {
            return f.id(e) === f.id(i) && f.id(t) === f.id(l) && f.id(a) === f.id(n)
        }, str2data: function _(e) {
            var t = /(\d{4})-(\d{1,})-(\d{1,})/.exec(e || "") || [], a = /(\d{1,}):(\d{1,})/.exec(e || "") || [],
                i = +t[1], l = +t[2], n = +t[3], r = +a[1], o = +a[2];
            return {
                year: f.id(i) ? i : null,
                month: f.id(l) ? l : null,
                day: f.id(n) ? n : null,
                hour: f.id(r) ? r : null,
                min: f.id(o) ? o : null
            }
        }
    })
});
define("/cpn/1.03.04/attachSub/attachSel", ["nc", "../attach", "../input"], function (e, t, n) {
    var a = e("nc"), u = a.$, i = a.Component, o = a.Clazz, f = a.Base, l = a.Str, r = a.Dom, s = a.KeyBoard,
        c = e("../attach"), d = (e("../input"), n.exports = o.create());
    o.mix(d, i, {
        _template: ['<div class="btn-group open" style="display:block;">', '<ul class="dropdown-menu" style="position:static;float:none;border-bottom:0;overflow-x:hidden;"></ul>', '<div style="padding:20px 0;text-align:center;font-size:14px;display:none;background:#fff;border:1px solid #d4d4d4;" class="js-none">没有结果</div>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, t = e.rawConfig, n = e.getEl();
                e.ulEl = n.find("ul.dropdown-menu"), e.noneEl = n.find("div.js-none"), e.hasSub() && n.addClass("with-multi-list"), f.id(t.width) && n.outerWidth(t.width), e.initResize()
            }
        }, {
            name: "change", type: "custom", handler: function () {
                var e = this.rawConfig;
                e.change && e.change.call(this)
            }
        }, {
            name: "click li.js-option", handler: function (e) {
                var t = u(e.currentTarget).index();
                !this.hasSub(t) && this.selectIndex(t)
            }
        }],
        show: function h(e) {
            var t = new d(e = e || {});
            c.wrap(t, {
                attachRenderTo: e.attachRenderTo,
                target: e.target,
                attach: e.attach,
                content: t.html(),
                zIndex: e.zIndex,
                noHover: e.noHover,
                needClick: e.needClick,
                canShow: e.canShow,
                canHide: e.canHide,
                needReWidth: e.needReWidth,
                attachShow: function () {
                    t.renderItems()
                },
                attachHide: function () {
                    t.searchIpt && (t.searchIpt.val(""), t.search(""))
                }
            });
            return t
        }
    }, {
        initialize: function p(e) {
            var n = this.cache = {listRendered: !1, li: [], hasSub: !1, subAttachSel: {}}, t = e.options,
                a = function r(e, t, n) {
                    var a = [];
                    for (var i = 0; i < t.length; i++) {
                        var o = t[i];
                        if (o.parent === e && (o.subDeep = n, a.push(o), t.splice(i, 1), i--, o.value !== undefined && null !== o.value)) {
                            var c = r(o.value, t.slice(0), n + 1);
                            a = a.concat(c)
                        }
                    }
                    return a
                }(undefined, t, 0);
            t.length = 0, f.forEach(a, function (e) {
                t.push(e)
            }), f.forEach(e.options, function (e) {
                var t = 0 < (e.options || []).length;
                n.hasSub = n.hasSub || t, !t && delete e.options
            }), e.needKeyboard = e.needKeyboard && !n.hasSub
        }, initResize: function v() {
            var a = this, e = a.attach;
            if (e) {
                var i = a.getEl();
                e.listen("widthChange", function (e) {
                    a.renderItems();
                    var t = a.searchIpt;
                    t && t.hide();
                    var n = i.width("auto").outerWidth();
                    i.outerWidth(Math.max(n, e)), t && t.outerWidth(i.width()).show()
                })
            }
        }, initSearch: function g() {
            var e = this, t = e.rawConfig, n = e.getEl();
            if (!t.needSearch) return;
            var a = e.searchIpt = u('<input style="display:block;border-radius:0;" type="text" placeholder="输入关键词搜索" />');
            n.prepend(e.searchIpt), r.bindChange(a, function () {
                e.search(u.trim(a.val())), e.hideAttach(!0)
            }), a.outerWidth(n.width())
        }, initKeyboard: function b() {
            var o = this;
            if (!o.rawConfig.needKeyboard) return;
            var c = "data-temp-show", e = o.attach, t = o.getEl();
            if (!(n = o.searchIpt)) {
                var n = u('<input type="text" style="position:absolute;width:0;height:0;display:block;overflow:hidden;z-index:0;left:-9999px;top:0" />');
                t.append(n)
            }
            var a = o.ulEl.find("li.js-option");
            o.keyboardItem = s.mix({
                el: n, getItem: function () {
                    return f.filter(a, function (e) {
                        return "none" !== u(e).css("display")
                    })
                }, up: function (e, t, n) {
                    var a = u(n[t]), i = u(n[e]);
                    a.hasClass("selected") && "1" === a.attr(c) && a.removeClass("selected"), i.hasClass("selected") || (i.addClass("selected"), i.attr(c, "1")), r.fixScrollPos(o.ulEl, i)
                }, down: function (e, t, n) {
                    var a = u(n[t]), i = u(n[e]);
                    a.hasClass("selected") && "1" === a.attr(c) && a.removeClass("selected"), i.hasClass("selected") || (i.addClass("selected"), i.attr(c, "1")), r.fixScrollPos(o.ulEl, i)
                }, selected: function (e, t, n) {
                    var a = u(n[e]);
                    a.attr(c);
                    f.forEach(n, function (e) {
                        u(e).removeClass("selected").removeAttr(c)
                    }), e = a.index(), o.selectIndex(e)
                }
            }), e.listen("attachShow", function () {
                n.focus(), window.setTimeout(f.bind(n.focus, n), 0)
            }), e.listen("attachHide", function () {
                n.blur(), o.keyboardItem.clear()
            }), o.keyboardItem.clear = function () {
                o.ulEl.find("li.js-option[" + c + "=1]").removeClass("selected").removeAttr(c), s.prototype.clear.apply(o.keyboardItem)
            }
        }, initSubSel: function w() {
            var n = this;
            f.forEach(n.cache.li, function (e, t) {
                r.hoverToggle({
                    el: u(e), enter: function () {
                        n.openSub(t)
                    }, leave: function () {
                        n.openSub(t, !1)
                    }
                })
            });
            var e = n.attach, t = e.rawConfig, a = t.canHide;
            t.canHide = function () {
                var t = !a || a();
                return f.forEach(n.cache.subAttachSel, function (e) {
                    return (t = t && !e.attach.isMouseEnter) ? null : f.BREAK
                }), t && !e.isMouseEnter
            }
        }, renderItems: function m() {
            var e = this, t = e.rawConfig;
            if (!e.cache.listRendered) {
                e.cache.listRendered = !0;
                var i = "";
                f.forEach(t.options, function (e, t) {
                    var n = 0 < (e.options || []).length, a = e.subDeep;
                    i += l.execTpl('<li class="js-option #{cls}" style="#{position}#{padding}#{background}"><a href="javascript:void(0);">#{text}#{ext}</a></li>', {
                        cls: e.checked ? "selected" : "",
                        text: e.text,
                        position: n ? "position: relative;" : "",
                        padding: 0 < a ? "padding-left:" + (10 + 10 * a) + "px;" : "",
                        background: 1 === a ? "background:#f7f7f7;" : 1 < a ? "background:#eeeeee;" : "",
                        ext: n ? '<i class="icon-angle-right"></i><i class="icon-angle-left" style="display:none;"></i>' : ""
                    })
                }), e.ulEl.html(i), e.cache.li = e.ulEl.find("li.js-option"), e.initSearch(), e.initKeyboard(), e.initSubSel()
            }
        }, val: function C(e, t) {
            var n = this.rawConfig;
            this.hasSub(), n.options;
            if (0 === arguments.length) {
                var a = this.getSelectedItem();
                return a ? a.value : ""
            }
            var i = function o(e, a, i) {
                i = i || [];
                f.forEach(e, function (e, t) {
                    if (i.push(t), e.value === a) return f.BREAK;
                    var n = i.length;
                    o(e.options, a, i), i.length === n && i.pop()
                });
                return i
            }(n.options, e);
            this.index(i, t)
        }, index: function S(e, t) {
            var n = this, a = n.rawConfig.options, i = n.hasSub();
            if (0 === arguments.length) {
                var o = function l(e) {
                    var t = [];
                    var n = f.findIndex(e, function (e) {
                        return e.checked
                    });
                    if (0 <= n) {
                        t.push(n);
                        var a = e[n].options;
                        if (a) {
                            var i = l(a);
                            t = t.concat(i), 0 === i.length && (t.length = 0)
                        }
                    }
                    return t
                }(a), c = o[0];
                return i ? o : c || 0 === c ? c : -1
            }
            var o = n.index(), r = f.isArray(e) ? e : [e], s = (o = f.isArray(o) ? o : [o]).join("|") === r.join("|");
            s || (!function h(e, a) {
                if (e) {
                    var i = a.shift();
                    f.forEach(e, function (e, t) {
                        var n = t === i;
                        e.checked = n, h(e.options, n ? a : [])
                    })
                }
            }(a, r.slice(0)), function d(e, n) {
                if (e && e.cache.listRendered) {
                    var a = n.shift();
                    e.cache.li.removeClass("selected"), u(e.cache.li[a]).addClass("selected"), f.forEach(e.cache.subAttachSel, function (e, t) {
                        d(e, +t === a ? n : [])
                    })
                }
            }(n, r.slice(0)));
            !s && !0 !== t && n.fire("change")
        }, clear: function E() {
            var e = this.rawConfig;
            this.ulEl.find("li.js-option.selected").removeClass("selected"), f.forEach(e.options, function (e) {
                e.checked = !1
            })
        }, search: function x(e) {
            var t = this, n = t.rawConfig, a = t.ulEl, c = t.cache.li;
            if (a.scrollTop(0).show(), t.noneEl.hide(), e) {
                var r = l.searchRegExp(e), s = 0;
                f.forEach(n.options, function (e, t) {
                    try {
                        r.lastIndex = 0
                    } catch (o) {
                    }
                    var n = e.text, a = u(c[t]), i = r.test(n);
                    a[i ? "show" : "hide"](), s += i ? 1 : 0
                }), a[0 < s ? "show" : "hide"](), t.noneEl[0 < s ? "hide" : "show"](), t.keyboardItem && t.keyboardItem.clear()
            } else c.show()
        }, selectIndex: function y(e) {
            var t = this, n = t.rawConfig, a = u(t.cache.li[e]), i = t.parent || t;
            t.hasSub(e) || (i.fire("select"), a.hasClass("selected") ? n.canCancel && i.val(null) : i.val(n.options[e].value), !i.rawConfig.clickItemNoHide && i.hideAttach())
        }, hideAttach: function I(e) {
            f.forEach(this.cache.subAttachSel, function (e) {
                e.hideAttach()
            }), e || (this.attach.isMouseEnter = !1, this.attach.forceHide())
        }, getSelectedItem: function k() {
            var e = this.getAllItem();
            return f.find(e, function (e) {
                return e.checked
            })
        }, getAllItem: function A() {
            return function a(e) {
                var n = [];
                f.forEach(e, function (e) {
                    var t = e.options;
                    t && (n = n.concat(a(t))), !t && n.push(e)
                });
                return n
            }(this.rawConfig.options)
        }, hasSub: function R(e) {
            var t = this.rawConfig;
            return 0 === arguments.length ? this.cache.hasSub : !!t.options[e].options
        }, openSub: function H(e, t) {
            var n = this, a = n.rawConfig, i = (n.getEl(), a.options[e].options), o = n.cache.subAttachSel, c = o[e];
            if ((t = !1 !== t) && i && !c) {
                var r = u(n.cache.li[e]), s = (c = o[e] = d.show({
                    attachRenderTo: n.attach.getEl().parent(),
                    target: r,
                    options: i,
                    canCancel: a.canCancel,
                    needReWidth: !0,
                    attach: {horz: !0, extOffset: {left: -1}},
                    canHide: function () {
                        return !c.attach.isMouseEnter
                    }
                })).attach, l = n.parent || n;
                c.parent = l, s.listen("attachHide", function (e) {
                    h(r), e && e.attachLeave && n.attach.forceHide(e)
                }), s.listen("attachShow", function () {
                    h(r, !0)
                }), s.forceShow(), n.pushChild(c)
            } else !t && c && c.attach.forceHide();

            function h(e, t) {
                var n = e.find(".icon-angle-left"), a = e.find(".icon-angle-right");
                n[t ? "show" : "hide"](), a[t ? "hide" : "show"]()
            }
        }
    })
});
define("/cpn/1.03.04/attachSub/attachSelMult", ["nc", "../attach", "../checkbox", "../input"], function (e, t, n) {
    var i = e("nc"), d = i.$, c = i.Component, a = i.Clazz, l = i.Base, s = i.Str, o = i.Dom, h = e("../attach"),
        u = e("../checkbox"), f = (e("../input"), n.exports = a.create());
    a.mix(f, c, {
        _template: ['<div class="btn-group open" style="display:block;">', '<ul class="dropdown-menu js-select" style="position:static;float:none;display:none;border-bottom:0;overflow-x:hidden;"></ul>', '<ul class="dropdown-menu js-list" style="position:static;float:none;border-bottom:0;overflow-x:hidden;"></ul>', '<ul class="dropdown-menu js-search" style="position:static;float:none;border-bottom:0;overflow-x:hidden;display:none;"></ul>', '<div style="padding:20px 0;text-align:center;font-size:14px;display:none;background:#fff;border:1px solid #d4d4d4;" class="js-none">没有结果</div>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, t = e.getEl(), n = e.rawConfig;
                e.ulEl = t.find("ul.js-list"), e.searchUlEl = t.find("ul.js-search"), e.selectUlEl = t.find("ul.js-select"), e.noneEl = t.find("div.js-none"), e.cache.hasSub && t.addClass("with-multi-list"), l.id(n.width) && t.outerWidth(n.width), e.initResize()
            }
        }],
        show: function r(t) {
            var n = this, i = new f(t = t || {});
            h.wrap(i, {
                attachRenderTo: t.attachRenderTo,
                target: t.target,
                attach: t.attach,
                content: i.html(),
                zIndex: t.zIndex,
                noHover: t.noHover,
                needClick: t.needClick,
                canShow: t.canShow,
                canHide: t.canHide,
                needReWidth: t.needReWidth,
                attachShow: function () {
                    i.renderItems(), i.ulEl.scrollTop(0)
                },
                attachHide: function () {
                    i.searchIpt && (i.searchIpt.val(""), i.search(""));
                    var e = i.val();
                    i._same(e, n._lastVal) || (i._lastVal = e, t.ok && t.ok.call(n), i.fire("ok"))
                }
            });
            return i._lastVal = i.val(), i
        }
    }, {
        initialize: function p(e) {
            this.cache = {
                allChk: null,
                search: {chk: [], chkLi: []},
                listRendered: !1,
                chk: [],
                chkLi: [],
                subAttachSel: {}
            }, this.initConf(e)
        }, initConf: function v(e) {
            var n = this.cache, t = e.options, i = function h(e, t, n) {
                var i = [];
                for (var c = 0; c < t.length; c++) {
                    var a = t[c];
                    if (a.parent === e && (a.subDeep = n, i.push(a), t.splice(c, 1), c--, a.value !== undefined && null !== a.value)) {
                        var o = h(a.value, t.slice(0), n + 1);
                        i = i.concat(o)
                    }
                }
                return i
            }(undefined, t, 0);
            t.length = 0, l.forEach(i, function (e) {
                t.push(e)
            }), l.forEach(e.options, function (e) {
                var t = 0 < (e.options || []).length;
                n.hasSub = n.hasSub || t, !t && delete e.options
            })
        }, initResize: function g() {
            var i = this, e = i.attach, c = i.getEl();
            e.listen("widthChange", function (e) {
                i.renderItems();
                var t = i.searchIpt;
                t && t.hide();
                var n = c.width("auto").outerWidth();
                c.outerWidth(Math.max(n, e)), t && t.outerWidth(c.width()).show()
            })
        }, initSearch: function k() {
            var i = this, e = i.rawConfig;
            if (!e.needSearch) return;
            var t = i.getEl(), c = i.cache, a = !1,
                n = i.searchIpt = d('<input style="display:block;border-radius:0;" type="text" placeholder="' + (e.placeholder || "输入关键词搜索") + '" />');
            t.prepend(i.searchIpt), o.bindChange(n, function () {
                !function t() {
                    if (!a) {
                        a = !0;
                        var n = i.searchUlEl, e = (i.parent || i).getAllItem();
                        l.forEach(e, function (e) {
                            var t = i._createLi(e, !0);
                            n.append(t.li), c.search.chk.push(t.chk), c.search.chkLi.push(t.li)
                        })
                    }
                }(), i.search(d.trim(n.val())), i.hideAttach(!0)
            }), n.outerWidth(t.width())
        }, initSelectAll: function w() {
            var n = this, e = (n.getEl(), n.rawConfig);
            if (!e.noSelectAll) {
                var t = n.selectUlEl, i = d("<li></li>");
                n.cache.allChk = new u({
                    renderTo: i, text: "全选", checked: !1, change: function () {
                        var t = !!this.isChecked();
                        l.forEach(e.options, function (e) {
                            n.fixOption(e, t)
                        }), n.fixChk(), e.change && e.change.call(n), (n.parent || n).fire("change")
                    }
                }), t.append(i), t.show()
            }
        }, initSubSel: function E() {
            var n = this;
            l.forEach(n.cache.chkLi, function (e, t) {
                o.hoverToggle({
                    el: d(e), enter: function () {
                        n.openSub(t)
                    }, leave: function () {
                        n.openSub(t, !1)
                    }
                })
            });
            var e = n.attach, t = e.rawConfig, i = t.canHide;
            t.canHide = function () {
                var t = !i || i();
                return l.forEach(n.cache.subAttachSel, function (e) {
                    return (t = t && !e.attach.isMouseEnter) ? null : l.BREAK
                }), t && !e.isMouseEnter
            }
        }, renderItems: function C() {
            var e = this, t = e.rawConfig;
            e.cache.listRendered || (e.cache.listRendered = !0, e.createItems(t.options), e.initSearch(), e.initSelectAll(), e.initSubSel(), e.fixChk())
        }, val: function b(t, e) {
            var n = this, i = n.rawConfig;
            i.options, n.cache.chk;
            if (0 === arguments.length) {
                var c = n.getSelectedItem();
                return l.map(c, function (e) {
                    return e.value
                })
            }
            t = l.isArray(t) ? t : [t];
            var a = n.val();
            n._same(t, a) || (l.forEach(n.getAllItem(), function (e) {
                e.checked = l.contains(t, e.value)
            }), n.fixChk(), !0 !== e && (i.change && i.change.call(n), n.fire("change")))
        }, valText: function m() {
            var e = this.getSelectedItem();
            return l.map(e, function (e) {
                return e.text
            })
        }, clear: function x() {
            var e = this.rawConfig;
            l.forEach(this.cache.chk, function (e) {
                e.checked(!1)
            }), l.forEach(e.options, function (e) {
                e.checked = !1
            })
        }, search: function S(e) {
            var t = this, n = t.cache;
            if (!n.listRendered) return;
            if (t.searchUlEl.scrollTop(0).show(), t.ulEl.scrollTop(0).hide(), t.noneEl.hide(), !e) return t.ulEl.show(), t.searchUlEl.hide(), void t.showAllChk();
            var o = n.search.chkLi, h = s.searchRegExp(e), r = 0;
            l.forEach(n.search.chk, function (e, t) {
                try {
                    h.lastIndex = 0
                } catch (a) {
                }
                var n = e.rawConfig.text, i = h.test(n), c = o[t];
                c[i ? "show" : "hide"](), i && r++
            }), t.searchUlEl[0 < r ? "show" : "hide"](), t.noneEl[0 < r ? "hide" : "show"](), t.showAllChk(!1)
        }, isSelectAll: function A() {
            var e = this.rawConfig.options;
            return l.every(e, function (e) {
                return e.checked
            })
        }, showAllChk: function y(e) {
            this.cache.allChk && (e = !1 !== e, this.cache.allChk[e ? "show" : "hide"](), this.selectUlEl[e ? "show" : "hide"]())
        }, createItems: function I(e) {
            var c = this, a = c.ulEl.html(""), o = c.cache.chk, h = c.cache.chkLi;
            l.forEach(e, function (e) {
                var t = c._createLi(e), n = t.chk, i = t.li;
                o.push(n), h.push(i), a.append(i)
            })
        }, fixChk: function R(e) {
            var t = this.parent || this;
            (function i(e) {
                var n = !1;
                l.forEach(e, function (e, t) {
                    e.options && (e.checked = i(e.options)), n = !(!n && !e.checked)
                });
                return n
            })(e = t.rawConfig.options), function o(e, i) {
                var c = e ? e.cache : null;
                if (e && c.listRendered) {
                    var a = !0;
                    l.forEach(c.chk, function (e, t) {
                        var n = !!i[t].checked;
                        a = a && n, e.checked(n), l.forEach(c.subAttachSel, function (e, t) {
                            o(e, i[+t].options)
                        })
                    }), c.allChk && c.allChk.checked(a)
                }
            }(t, e), function c(e) {
                var n = e.getAllItem();
                l.forEach(e.cache.search.chk, function (e, t) {
                    e.checked(!!n[t].checked)
                })
            }(t)
        }, fixOption: function H(e, t) {
            var n = this;
            e.checked = t, l.forEach(e.options, function (e) {
                e.checked = !!t, n.fixOption(e, t)
            })
        }, hideAttach: function j(e) {
            l.forEach(this.cache.subAttachSel, function (e) {
                e.hideAttach()
            }), e || (this.attach.isMouseEnter = !1, this.attach.forceHide())
        }, getSelectedItem: function L() {
            var e = this.getAllItem();
            return l.filter(e, function (e) {
                return e.checked
            })
        }, getAllItem: function T() {
            return function i(e) {
                var n = [];
                l.forEach(e, function (e) {
                    var t = e.options;
                    t && (n = n.concat(i(t))), !t && n.push(e)
                });
                return n
            }(this.rawConfig.options)
        }, openSub: function _(e, t) {
            var n = this, i = n.rawConfig, c = (n.getEl(), i.options[e].options), a = n.cache.subAttachSel, o = a[e];
            if ((t = !1 !== t) && c && !o) {
                var h = d(n.cache.chkLi[e]), r = (o = a[e] = f.show({
                    attachRenderTo: n.attach.getEl().parent(),
                    target: h,
                    options: c,
                    noSelectAll: i.noSelectAll,
                    needReWidth: !0,
                    attach: {horz: !0, extOffset: {left: -1}},
                    canHide: function () {
                        return !o.attach.isMouseEnter
                    }
                })).attach, l = n.parent || n;
                o.parent = l, r.listen("attachHide", function (e) {
                    s(h), e && e.attachLeave && n.attach.forceHide(e)
                }), r.listen("attachShow", function () {
                    s(h, !0)
                }), r.forceShow(), n.pushChild(o)
            } else !t && o && o.attach.forceHide();

            function s(e, t) {
                var n = e.find(".icon-angle-left"), i = e.find(".icon-angle-right");
                n[t ? "show" : "hide"](), i[t ? "hide" : "show"]()
            }
        }, _same: function z(e, t) {
            var n = function (e, t) {
                return e - t
            }, i = (e || []).sort(n).join("|"), c = (t || []).sort(n).join("|");
            return i === c
        }, _createLi: function U(e, t) {
            var n = this, i = n.parent || n, c = i.rawConfig, a = !!e.options, o = e.subDeep,
                h = s.execTpl(a ? '<li style="position:relative;#{padding}#{background}"><i class="icon-angle-right"></i><i class="icon-angle-left" style="display:none;"></i></li>' : '<li style="#{padding}#{background}"></li>', {
                    padding: t ? "" : 0 < o ? "padding-left:" + (10 + 10 * o) + "px;" : "",
                    background: t ? "" : 1 === o ? "background:#f7f7f7;" : 1 < o ? "background:#eeeeee;" : ""
                }), r = d(h);
            return {
                chk: new u({
                    renderTo: r,
                    renderBy: "prepend",
                    text: e.text,
                    val: e.value,
                    checked: !!e.checked,
                    disabled: !!e.disabled,
                    change: function () {
                        n.fixOption(e, this.isChecked()), n.fixChk(), c.change && c.change.call(i), i.fire("change")
                    }
                }), li: r
            }
        }, _getData: function W() {
        }
    })
});
define("/cpn/1.03.04/attachSub/attachSuggest", ["nc", "../attach", "../checkbox", "../input"], function (e, t, i) {
    var n = e("nc"), l = n.$, s = n.Component, a = n.Clazz, c = n.Base, r = n.Str, o = n.KeyBoard, d = n.Dom,
        u = e("../attach"), h = (e("../checkbox"), e("../input"), i.exports = a.create());
    a.mix(h, s, {
        _template: ['<div class="btn-group" style="display:block;">', '<ul class="dropdown-menu js-menu" style="position:static;float:none;border-bottom:0;overflow-x:hidden;"></ul>', '<div style="padding:20px 0;text-align:center;font-size:14px;display:none;background:#fff;border:1px solid #d4d4d4;" class="js-none">没有结果</div>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, t = (e.rawConfig, e.getEl());
                e.ulEl = t.find("ul.js-menu"), e.noneEl = t.find("div.js-none"), e.initIpt(), e.initKeyboard()
            }
        }, {
            name: "click ul.js-menu li.js-item", handler: function (e) {
                var t = l(e.currentTarget);
                this.selectItem(t)
            }
        }],
        show: function f(e) {
            var t = this, i = new h(e = e || {});
            u.wrap(i, {
                target: e.input,
                targetHover: e.targetHover,
                attach: e.attach,
                content: i.html(),
                needReWidth: e.needReWidth,
                noHover: e.noHover,
                noEnterLeave: e.noEnterLeave,
                noLeave: e.noLeave,
                zIndex: e.zIndex,
                attachShow: function () {
                    i.refreshList()
                },
                attachHide: function () {
                    window.clearTimeout(t._refreshListTimer), i.clear()
                }
            });
            return i
        }
    }, {
        initialize: function m(e) {
            var t = this;
            t.isHide = !0, t.selectCls = e.selectCls || "selected", t.ipt = l(e.input), t.cache = {}
        }, initIpt: function v() {
            var t = this;
            t.ipt.on("keyup", function (e) {
                t.refreshList()
            })
        }, initKeyboard: function p() {
            var n = this, s = n.rawConfig;
            n.getEl();
            n.keyboardItem = o.mix({
                el: 0 < l(s.focusIpt).length ? s.focusIpt : n.ipt, canFire: function () {
                    return !n.isHide
                }, getItem: function () {
                    return n.ulEl.find("li.js-item")
                }, up: function (e, t, i) {
                    l(i[t]).removeClass(n.selectCls), l(i[e]).addClass(n.selectCls), d.fixScrollPos(n.ulEl, i[e])
                }, down: function (e, t, i) {
                    l(i[t]).removeClass(n.selectCls), l(i[e]).addClass(n.selectCls), d.fixScrollPos(n.ulEl, i[e])
                }, selected: function (e, t, i) {
                    0 <= e && n.selectItem(i[e])
                }, keyup13: function (e, t, i, n) {
                    (!t || i < 0) && s.okNone && s.okNone()
                }
            })
        }, refreshList: function g() {
            var i = this, n = i.ipt, s = i.rawConfig, a = l.trim(n.val());
            if (window.clearTimeout(i._refreshListTimer), a === i._lastVal) return;
            i.clear(), i._lastVal = a;
            var e = i.cache[a];
            if (e) return s.dealList && (e = s.dealList(e.slice(0))), i.renderList(e, a);
            i._refreshListTimer = window.setTimeout(function () {
                s.reqList(a, function (e) {
                    e && !s.noCache && (i.cache[a] = e);
                    var t = l.trim(n.val());
                    t === a && (s.dealList && e && (e = s.dealList(e.slice(0))), i.renderList(e || [], t))
                })
            }, 100)
        }, renderList: function C(e, n) {
            var s = this, t = s.rawConfig, a = !!t.needSame, r = "", o = {};
            c.forEach(e, function (e) {
                var t = s.getId(), i = s.getItem(e);
                i._sid = t, o[t] = i, (a || i.text !== n) && (r += s.getItemStr(i))
            }), s._itemMap = o, s.ulEl.html(r), t.showNone ? (s.ulEl[r ? "show" : "hide"](), s.noneEl[r ? "hide" : "show"](), r && s.hideList(!1), s.isHide = !r) : s.hideList(!r);
            if (r) {
                var i = Math.max(-1, +t.defaultIndex || 0);
                0 <= i && l(s.ulEl.find("li.js-item")[i]).addClass(s.selectCls), s.keyboardItem && (s.keyboardItem.index = i)
            }
            (t.rePositionInList || t.attach && t.attach.verReverse) && s.attach.fixPosition()
        }, clear: function I() {
            var e = this;
            e.ulEl.scrollTop(0), e.ulEl.find("." + e.selectCls).removeClass(e.selectCls), e.keyboardItem.clear(), e._lastVal = null
        }, getItem: function w(e) {
            var t = this.rawConfig;
            return t.getItem ? t.getItem(e) : e
        }, getItemStr: function L(e) {
            var t = this.rawConfig;
            if (t.getItemStr) return t.getItemStr(e);
            return r.execTpl('<li class="js-item" data-id="#{_sid}"><a href="javascript:void(0);">#{text}</a></li>', e)
        }, selectItem: function x(e) {
            var t = this.rawConfig, i = l(e).attr("data-id"), n = i ? this._itemMap[i] : null;
            n && (t.ok && t.ok(n), this.clear(), this.hideList())
        }, hideList: function E(e) {
            this.rawConfig;
            var t = this.getEl();
            e = !1 !== e, this.isHide = e, t[e ? "removeClass" : "addClass"]("open"), this.fire("hideList", e)
        }, getId: function b() {
            return this.id = (this.id || 0) + 1, c.id(this.id)
        }
    })
});
define("/cpn/1.03.04/attachSub/attachUpload", ["nc", "../attach", "../popup", "../layer", "../popupSub/popupUploadTips"], function (e, t, r) {
    var i = e("nc"), n = i.$, o = i.Component, a = i.Clazz, u = i.Base, c = (i.Dom, i.Num), p = i.Upload,
        l = e("../attach"), s = e("../popup"), f = e("../popupSub/popupUploadTips"), h = r.exports = a.create();
    a.mix(h, o, {
        _template: ['<div style="overflow:hidden;cursor:pointer;">', '<input class="js-upload" #{multiple} #{accept} type="file" style="display:block;opacity:0;cursor:pointer;" />', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var e = this, t = (e.rawConfig, e.getEl());
                e.fileEl = t.find("input.js-upload"), e.resize(), e.initIpt()
            }
        }],
        show: function g(e) {
            e = e || {}, this.file = null;
            var t = (e.attach || {}).extOffset || {}, r = u.extend({}, e.attach, {
                extOffset: {
                    left: t.left,
                    top: -1 * n(e.target).outerHeight() + (+t.top || 0)
                }
            }), i = new h(e);
            l.wrap(i, {
                target: e.target,
                attach: r,
                content: i.html(),
                zIndex: e.zIndex,
                noHover: e.noHover,
                needClick: e.needClick,
                canShow: e.canShow,
                attachShow: function () {
                    try {
                        i.resize()
                    } catch (e) {
                    }
                }
            });
            return i
        }
    }, {
        initialize: function d(e) {
            var t = this, r = e.fileType || "";
            t.isMultiple = !!e.isMultiple, t.needShowProgress = !e.noProgress, t.needShowError = !e.noError, t.types = "*" === r ? [] : u.filter(r.replace(/\*\./gi, "").split(";"), function (e) {
                return n.trim(e).toLowerCase()
            })
        }, initIpt: function w() {
            var i = this, o = i.rawConfig, n = i.fileEl;
            n.on("change", function (e) {
                var t = u.filter(n.get(0).files || [], function (e) {
                    return !!e
                });
                if (0 === t.length) return i.clear();
                var r = i.isMultiple ? t : t[0];
                i.file = r, !o.manual && i.start(), o.manual && i.fire("loaded", r)
            })
        }, start: function v(a) {
            var l = this, p = l.rawConfig, e = l.isMultiple ? l.file : [l.file], s = l.types;
            u.forEach(e, function (e) {
                if (!e) return l.error({msg: "上传文件不存在"}, e);
                var t = e.size;
                if (0 === t) return l.error({msg: "文件大小为0"}, e);
                if (0 < s.length) {
                    var r = (e.name || "").split(".").pop().toLowerCase();
                    if (!u.contains(s, r)) {
                        var i = p.getFileTypeTips ? p.getFileTypeTips(s) : "";
                        return i = i || "文件类型不正确，支持的类型：" + s.join(","), l.error({msg: i}, e)
                    }
                }
                var o = +p.fileSize || 0;
                if (0 < o && 1024 * o * 1024 < t) return l.error({msg: "上传的文件不能超过" + o + "MB，当前文件" + c.byte2Size(t)}, e);
                var n = p.checkFile ? p.checkFile(e, t, r) : null;
                if (n && !n.right) return l.error({msg: n.msg || "出现错误，请检查上传文件是否正确"}, e);
                l.upload(e, a)
            }), l.clear()
        }, upload: function m(e, t) {
            var r = this.rawConfig, i = r.getUpload ? r.getUpload.call(this, e, t) : null;
            (i = i || this.getUpload(e, t)).uploadFile(e)
        }, getUpload: function T(n, e) {
            var a = this, l = a.rawConfig;
            return new p(u.extend({}, l, {
                extData: u.extend({}, l.extData, e), progress: function (e, t, r) {
                    if (l.progress && l.progress.call(a, e, t, r, n), a.needShowProgress) {
                        var i = a.getPopupTips();
                        i.showProgress("正在上传：" + e + "%", e), t === r && i.showProgress("正在保存文件，请稍等...", 100)
                    }
                }, call: function (e) {
                    var t = a.getPopupTips();
                    t.close(), l.call && l.call.call(a, e, n)
                }, error: function (e) {
                    var t = ((e = e || {}) || {}).code, r = 999 === t;
                    if (l.error && l.error.call(a, e, n), a.needShowError) {
                        var i = r ? "上传失败，请重新登录" : e.msg || "出现错误，请重试", o = a.getPopupTips();
                        o.showError(i)
                    }
                    r && (l.goLogin && l.goLogin(), !l.goLogin && window.setTimeout(u.bind(window.location.reload, window.location), 2e3))
                }
            }))
        }, getPopupTips: function y() {
            var e = this;
            if (!e._popupTips) {
                var t = e._popupTips = f.show({});
                t.popup.listen("close", function () {
                    e._popupTips = null
                })
            }
            return e._popupTips
        }, error: function C(e, t) {
            var r = this.rawConfig;
            this.clear(), this.needShowError && s.alert(e.msg || "出现错误，请重试"), r.error && r.error.call(this, e, t)
        }, clear: function E() {
            this.fileEl.val("")
        }, resize: function S() {
            var e = this.getEl(), t = this.rawConfig, r = n(t.target), i = r.outerWidth(), o = r.outerHeight();
            i && (e.outerWidth(i), this.fileEl.outerWidth(i));
            o && (e.outerHeight(o), this.fileEl.outerHeight(o))
        }, _getData: function x(e) {
            var t = this.types;
            return {
                multiple: e.isMultiple ? 'multiple="1"' : "",
                accept: 0 === t.length ? "" : 'accept="' + u.map(t, function (e) {
                    return "." + e
                }).join(",") + '"'
            }
        }
    })
});
define("/cpn/1.03.04/attachSub/attachUploadFlash", ["nc", "../attach", "../popup", "../layer", "../uploadFlash"], function (t, e, a) {
    var n = t("nc"), r = n.$, o = n.Component, i = n.Clazz, l = n.Base, h = (n.Dom, n.Upload, t("../attach")),
        d = (t("../popup"), t("../uploadFlash")), s = a.exports = i.create();
    i.mix(s, o, {
        _template: ['<div style="overflow:hidden;cursor:pointer;position:relative;">', '<div class="js-flash-wrap"></div>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, e = t.rawConfig, a = t.getEl(), n = r(e.target);
                t.fileEl = a.find("input.js-upload");
                var o = n.outerWidth(), i = n.outerHeight();
                a.outerWidth(o).outerHeight(i), t.initFlash(o, i)
            }
        }],
        show: function c(t) {
            var e = ((t = t || {}).attach || {}).extOffset || {}, a = l.extend({}, t.attach, {
                extOffset: {
                    left: e.left,
                    top: -1 * r(t.target).outerHeight() + (+e.top || 0)
                }
            }), n = new s(t);
            h.wrap(n, {
                target: t.target,
                attach: a,
                content: n.html(),
                zIndex: t.zIndex,
                noHover: t.noHover,
                needClick: t.needClick,
                canShow: t.canShow,
                canHide: function () {
                    return !1
                }
            });
            return n
        }
    }, {
        initFlash: function p(t, e) {
            var a = this.getEl(), n = this.rawConfig;
            new d(l.extend({}, n.upload, {btn: {width: t, height: e}, holderEl: a.find(".js-flash-wrap")}))
        }
    })
});
define("/cpn/1.03.04/popupSub/popupFormula", ["nc", "../popup", "../layer", "../tab"], function (a, t, e) {
    var i = a("nc"), o = i.$, r = i.Component, n = i.Clazz, u = i.Base, l = i.Dom, s = (i.Uri, a("../popup")),
        c = a("../tab"), p = e.exports = n.create(), f = /\$\$([^\$]*?)\$\$|\$([^\$]*?)\$/g, m = {
            1: ["\\alpha", "\\beta", "\\gamma", "\\delta", "\\epsilon", "\\varepsilon", "\\zeta", "\\eta", "\\theta", "\\vartheta", "\\iota", "\\kappa", "\\lambda", "\\mu", "\\nu", "\\xi", "\\pi", "\\varpi", "\\rho", "\\varrho", "\\sigma", "\\varsigma", "\\tau", "\\upsilon", "\\phi", "\\varphi", "\\chi", "\\psi", "\\omega", "\\Gamma", "\\Delta", "\\Theta", "\\Lambda", "\\Xi", "\\Pi", "\\Sigma", "\\Upsilon", "\\Phi", "\\Psi", "\\Omega"],
            2: ["\\times", "\\div", "\\cdot", "\\pm", "\\mp", "\\ast", "\\star", "\\circ", "\\bullet", "\\oplus", "\\ominus", "\\oslash", "\\otimes", "\\odot", "\\dagger", "\\ddagger", "\\vee", "\\wedge", "\\cap", "\\cup", "\\aleph", "\\Re", "\\Im", "\\top", "\\bot", "\\infty", "\\partial", "\\forall", "\\exists", "\\neg", "\\angle", "\\triangle", "\\diamond"],
            3: ["\\leq", "\\geq", "\\prec", "\\succ", "\\preceq", "\\succeq", "\\ll", "\\gg", "\\equiv", "\\sim", "\\simeq", "\\asymp", "\\approx", "\\ne", "\\subset", "\\supset", "\\subseteq", "\\supseteq", "\\in", "\\ni", "\\notin"],
            4: ["x_{a}", "x^{b}", "x_{a}^{b}", "\\bar{x}", "\\tilde{x}", "\\frac{a}{b}", "\\sqrt{x}", "\\sqrt[n]{x}", "\\bigcap_{a}^{b}", "\\bigcup_{a}^{b}", "\\prod_{a}^{b}", "\\coprod_{a}^{b}", "\\left( x \\right)", "\\left[ x \\right]", "\\left\\{ x \\right\\}", "\\left| x \\right|", "\\int_{a}^{b}", "\\oint_{a}^{b}", "\\sum_{a}^{b}{x}", "\\lim_{a \\rightarrow b}{x}", "\\left[ \\begin{matrix}\n     0 & 1 \\\\\n     1 & 0 \\\\\n\\end{matrix} \\right]"],
            5: ["\\leftarrow", "\\rightarrow", "\\leftrightarrow", "\\Leftarrow", "\\Rightarrow", "\\Leftrightarrow", "\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow"]
        };
    n.mix(p, r, {
        _template: '<div class="pop-formula"><div style="font-size:14px;text-align:center;padding:20px;">加载中...</div></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var t = this, e = t.rawConfig;
                a.async("//static.nowcoder.com/nc/style/0.0.05/fontcustom/latex/latex.css", function () {
                    t.initContainer(e), t.initData(), t.initFormult(e), t.initLatex(e), t.popup.fixPosition(), t[e.useLaTex ? "latex" : "formult"].ipt.focus()
                })
            }
        }, {
            name: "click ul.js-formula-list li", handler: function (t) {
                var e = o(t.currentTarget), a = this.formult.ipt, i = e.attr("data-type"), r = e.attr("data-index"),
                    n = m[i][r];
                i && r && n && (a.range(n), a.caret(a.range().end), this.refreshFormultImage())
            }
        }],
        show: function x(t) {
            var e = new p(t = t || {});
            s.wrap(e, {
                content: e.html(), title: "插入公式", noUnique: !0, width: 720, ok: function () {
                    return e.submit()
                }, cancel: function () {
                }
            });
            return e
        }
    }, {
        initialize: function v(t) {
            this.useLaTex = !!t.useLaTex
        }, initContainer: function d(t) {
            var e = this, a = e.getEl(), i = !!e.useLaTex,
                r = ['<div class="pop-formula js-formula">', '<div class="pop-formula-panel">', '<section class="clearfix"><ul class="js-formula-list"></ul></section>', '<section class="pop-formula-txt"><textarea class="js-formula-ipt"></textarea></section>', '<section class="pop-formula-review js-formula-preview">预览</section>', "</div>", "</div>"].join("");
            if (!i) return a.html(r);
            var n = ['<div class="pop-formula js-latex" style="display:none;">', '<section class="pop-formula-txt" style="border:0;padding:0;"><textarea class="js-latex-ipt" style="height:180px;" placeholder="输入带有LaTeX公式(公式分隔符: $)的内容，将自动解析"></textarea></section>', '<section class="pop-formula-review js-latex-preview">预览</section>', "</div>"].join("");
            a.html(r + n);
            var l = a.find(".js-formula"), o = a.find(".js-latex"), s = u.id(t.type);
            e.tabType = new c({
                renderTo: a,
                renderBy: "prepend",
                type: "line",
                items: [{text: "LaTex", value: "2", checked: "2" === s}, {
                    text: "数学公式",
                    value: "1",
                    checked: "1" === s
                }],
                listeners: {
                    render: function () {
                        this.getEl().css("marginBottom", "20px")
                    }, change: function () {
                        var t = this.val();
                        l["1" === t ? "show" : "hide"](), o["2" === t ? "show" : "hide"]()
                    }
                }
            })
        }, initData: function h() {
            var t = this.getEl();
            this.latex = {
                el: t.find(".js-latex"),
                ipt: t.find(".js-latex-ipt"),
                preview: t.find(".js-latex-preview")
            }, this.formult = {
                el: t.find(".js-formula"),
                ipt: t.find(".js-formula-ipt"),
                list: t.find(".js-formula-list"),
                preview: t.find(".js-formula-preview")
            }
        }, initLatex: function g(t) {
            var e = this;
            if (e.useLaTex) {
                l.bindChange(e.latex.ipt, u.bind(e.refreshLatexContent, e));
                var a = o.trim(t.valueLaTex);
                a && e.valLatexText(a)
            }
        }, initFormult: function w(t) {
            var e = this;
            e.initFormultTab(), l.bindChange(e.formult.ipt, u.bind(e.refreshFormultImage, e));
            var a = o.trim(t.value);
            e.valText(a)
        }, initFormultTab: function T() {
            var r = this, n = (r.getEl(), {}),
                t = [{text: "特殊字符", value: "1"}, {text: "运算符号", value: "2"}, {text: "关系符号", value: "3"}, {
                    text: "函数符号",
                    value: "4"
                }, {text: "箭头符号", value: "5"}], l = o('<div class="pop-formula-sub"></div>'),
                e = u.map(t, function (t) {
                    return '<a href="javascript:void(0);" class="js-formult-item" data-id="' + t.value + '">' + t.text + "</a>"
                }).join("");

            function i(t) {
                var e = l.find(".js-formult-item[data-id=" + t + "]"), a = function i(e) {
                    if (!n[e]) {
                        var t = {1: 40, 2: 33, 3: 21, 4: 21, 5: 12}[e], a = [];
                        u.forCount(t, function (t) {
                            a.push('<li data-type="' + e + '" data-index="' + t + '"><i class="icon-latex-symbol' + e + "-" + (t + 1) + '"></i></li>')
                        }), n[e] = a.join("")
                    }
                    return n[e]
                }(t);
                l.find(".js-formult-item").removeClass("selected"), e.addClass("selected"), r.formult.list.html(a)
            }

            l.html(e), r.formult.el.prepend(l), i(t[0].value), l.on("click", ".js-formult-item", function (t) {
                var e = o(t.currentTarget), a = o.trim(e.attr("data-id"));
                i(a)
            })
        }, refreshLatexContent: function b() {
            var t = this, e = t.latex.preview, a = t._lastLatexVal, i = t.valLatexText();
            if (t._lastLatexVal = i) {
                if (i !== a) {
                    var r = t.valLatexHtml(!0);
                    e.html('<div style="text-align:left;">' + r + "</div>")
                }
            } else e.html("预览")
        }, refreshFormultImage: function L() {
            var e = this, a = e.formult.preview, i = (e.formult.ipt, e.valText()), t = e.valSrc(!0);
            if (t) {
                var r = document.createElement("img");
                r.onload = function () {
                    if (e.valText() === i) {
                        var t = a.find("img");
                        t.get(0) && t.replaceWith(r), !t.get(0) && a.html(r)
                    }
                }, r.onerror = function () {
                    e.valText() === i && a.html("加载出错，请重试")
                }, o(r).attr("src", t).attr("alt", i)
            } else a.html("预览")
        }, valType: function j() {
            this.rawConfig;
            return this.useLaTex && this.tabType ? this.tabType.val() : "1"
        }, valLatexText: function y(t) {
            var e = this.latex.ipt;
            if (0 === arguments.length) return o.trim(e.val());
            e.val(o.trim(t)), this.refreshLatexContent()
        }, valLatexHtml: function C(n) {
            var l = this;
            return l.valLatexText().replace(f, function (t, e, a) {
                var i = l.fixTex(e || a), r = i.content;
                return i.isTex ? '<img src="' + l.getSrc(r, n) + '" alt="' + r + '" />' : r
            }).replace(/\n/g, "<br />")
        }, valText: function q(t) {
            var e = this.formult.ipt;
            if (0 === arguments.length) return o.trim(e.val());
            e.val(o.trim(t)), this.refreshFormultImage()
        }, valSrc: function _(t) {
            return this.getSrc(this.valText(), t)
        }, submit: function F() {
            var l = this, e = l.rawConfig;
            if ("1" === l.valType()) {
                var t = l.valSrc(), a = l.valText();
                return !t && s.alert("公式不能为空"), !t || (e.upload && e.upload.call(l, a, t, function () {
                    l.popup.close()
                }), !e.upload && e.call && e.call.call(l, a, t), !!e.upload)
            }
            if (!(a = l.valLatexText())) return s.alert("内容不能为空"), !0;
            if (e.uploadBatch) {
                var n = [], o = [];
                if (a.replace(f, function (t, e, a) {
                    var i = l.fixTex(e || a), r = i.content;
                    i.isTex && (r && n.push(r), r && o.push(l.getSrc(r)))
                }), n = u.uniq(n), o = u.uniq(o), 0 < n.length) return e.uploadBatch.call(l, n, o, function (n) {
                    var t = a.replace(f, function (t, e, a) {
                        var i = l.fixTex(e || a), r = i.content;
                        return i.isTex ? '<img src="' + (n[r] || l.getSrc(r)) + '" alt="' + r + '" />' : r
                    }).replace(/\n/g, "<br />");
                    e.callLaTex && e.callLaTex(t), l.popup.close()
                }), !0
            }
            e.callLaTex && e.callLaTex(l.valLatexHtml())
        }, getSrc: function S(t, e) {
            return (t = o.trim(t)) ? "https://www.nowcoder.com/equation?tex=" + window.encodeURIComponent(t) + (e ? "&preview=true" : "") : ""
        }, fixTex: function $(t) {
            var e = t = o.trim(t);
            0;
            var a = this.isRightTex(e);
            return {isTex: a, content: a ? t : e.replace(/\\\{/gi, "{").replace(/\\\}/gi, "}")}
        }, isRightTex: function U(t) {
            return t && /\\|_|\^|\{|\}/.test(t.replace(/\\\{/gi, "").replace(/\\\}/gi, ""))
        }, showLoad: function k() {
            return new s({
                hasNoTitle: !0,
                hasNoFooter: !0,
                noUnique: !0,
                content: '<div style="font-size:14px;text-align:center;">图片上传中...</div>'
            })
        }
    })
});
define("/cpn/1.03.04/popupSub/popupImage", ["nc", "../layer"], function (e, i, t) {
    var o = e("nc"), s = o.$, n = o.Sys, a = o.Base, c = o.Component, r = (o.Limit, o.Clazz), u = e("../layer"),
        l = t.exports = r.create();
    r.mix(l, c, {
        _popup: {},
        _template: ['<div class="popup-image-container" style="padding:20px 0;text-align:center;cursor:-moz-zoom-out;cursor: -webkit-zoom-out;cursor: zoom-out;cursor: url(//static.zhihu.com/static/img/zoom-out.cur)">', '<div style="color:#fff;font-size:20px;">图片加载中...</div>', "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var o = this, i = o.rawConfig, n = o.getEl();
                l._popup[o._index] = o, i.images && 0 !== i.images.length ? (o.fixPosition(), window.setTimeout(function () {
                    var e = document.createElement("IMG");
                    o.image = s(e), o.image.css("background", "#fff"), e.onload = function () {
                        n.html("");
                        var e = this.width, i = this.height, t = n.width();
                        e && i && t < e && (o.image.width(t - 60), o.image.height(i * (t - 60) / e)), n.append(o.image), o.fixPosition()
                    }, e.src = i.images[0]
                }, 250)) : o.close()
            }
        }, {
            name: "destroy", type: "custom", handler: function () {
                delete l._popup[this._index]
            }
        }, {
            name: "click", handler: function (e) {
                this.close()
            }
        }],
        show: function m(e) {
            return (e = a.isString(e) ? s.trim(e) : a.isArray(e) ? e : null) ? new l({images: e}) : void 0
        },
        hide: function h() {
            a.forEach(this._popup, function (e) {
                try {
                    e.close()
                } catch (i) {
                    n.out(i)
                }
            })
        }
    }, {
        initialize: function p(e) {
            var i = this;
            e.images = e.images ? a.isArray(e.images) ? e.images : [e.images] : [], e.items = null, l.hide(), i.layer = new u({
                showContent: !0,
                clickToHideCb: function () {
                    i.close()
                }
            }), e.renderTo = i.layer.contentEl
        }, close: function d() {
            var e = this, i = e.rawConfig;
            try {
                e.fire("close"), i.close && i.close()
            } catch (t) {
                n.out(t)
            }
            e.layer.hide(), e.destroy()
        }, fixPosition: function f() {
            this.layer.center(this.getEl())
        }
    })
});
define("/cpn/1.03.04/popupSub/popupQrCode", ["nc", "../popup", "../layer"], function (o, e, s) {
    var i = o("nc"), p = (i.$, i.Component), t = i.Clazz, n = (i.Base, o("../popup")), c = s.exports = t.create();
    t.mix(c, p, {
        _template: ['<div class="pop-label">', '<a href="javascript:void(0);" class="pop-ico-close js-close-popup"></a>', '<div class="pop-label-tips js-tips">', '<div class="icon-ok-sign"></div>', "<p>#{tips}</p>", "</div>", '<div class="pop-jobs-tips">', '<div class="pop-jobs-qrcode"><img src="#{qrCode}" /></div>', '<div class="pop-jobs-txt">', "#{content}", "</div>", "</div>", "</div>"].join(""),
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var o = this.rawConfig, e = this.getEl();
                o.noTips && e.find(".js-tips").remove()
            }
        }],
        show: function a(o) {
            var e = new c(o = o || {});
            n.wrap(e, {
                content: e.html(),
                width: o.width || 420,
                hasNoTitle: !0,
                hasNoMove: !0,
                listeners: {
                    close: function () {
                        o.call && o.call()
                    }
                }
            });
            return e
        }
    }, {
        _getData: function r(o) {
            return {
                tips: o.tips || "操作成功",
                qrCode: o.qrCode || "//www.nowcoder.com/qr/to?url=" + window.encodeURIComponent(o.qrUrl || "") + "&size=250",
                content: o.content
            }
        }
    })
});
define("/cpn/1.03.04/popupSub/popupUploadTips", ["nc", "../popup", "../layer"], function (s, o, n) {
    var t = s("nc"), c = t.$, e = t.Component, i = t.Clazz, p = (t.Base, s("../popup")), a = n.exports = i.create();
    i.mix(a, e, {
        _template: '<div class="subject-upload-inner" style="margin:0"></div>',
        listeners: [{
            name: "render", type: "custom", handler: function () {
                var s = this;
                s.docClick = function () {
                    s.popup && s.popup.close()
                }, s.showProgress()
            }
        }, {
            name: "destroy", type: "custom", handler: function () {
                c(document).unbind("click", this.docClick)
            }
        }],
        show: function l(s) {
            var o = new a(s = s || {});
            p.wrap(o, {content: o.html(), width: 540, hasNoTitle: !0, hasNoMove: !0, hasNoMargin: !0, noUnique: !0});
            return o
        }
    }, {
        showProgress: function r(s, o) {
            var n = this.getEl();
            s = c.trim(s) || " ", o = o || 0, n.html('<div class="upload-progress-bar"><span class="progress-txt" style="color:#ccc;">' + s + '</span><div class="progressing" style="width:' + o + '%;"></div></div>'), c(document).unbind("click", this.docClick)
        }, showError: function u(s) {
            this.getEl().html('<a href="javascript:void(0);" class="btn btn-block btn-default"><span class="upload-rusult-ico"><span class="fui-cross"></span></span>' + s + "</a>"), c(document).one("click", this.docClick)
        }, close: function d() {
            this.popup && this.popup.close()
        }
    })
});
define("/cpn/1.03.04/vue/input", ["nc", "./ncTag"], function (e, t, s) {
    var i = e("nc"), n = i.$, o = (i.Base, i.Vue), a = e("./ncTag");
    s.exports = o.extend({
        template: ["<NCTag :tagName=\"tagName\" class=\"control-group\" :class=\"isError ? 'error' : isSuccess ? 'success' : ''\">", '<input v-if="isText" ref="input" @keydown.enter="$emit(\'enter\')" @focus="actionFocus" :disabled="isDisabled" :readonly="isReadonly" :class="iptCls" :type="type || \'text\'" v-model="value" :placeholder="placeholder" :style="iptStyle" />', '<textarea v-else ref="input" @keydown.enter="$emit(\'enter\')" @focus="actionFocus" :disabled="isDisabled" :readonly="isReadonly" :class="iptCls" v-model="value" :placeholder="placeholder" style="resize:none;" :style="iptStyle"></textarea>', '<i v-if="!noShowMark" class="input-icon fui-cross"></i>', '<i v-if="!noShowMark" class="input-icon fui-check-inverted"></i>', '<span class="input-tip" v-html="tips"></span>', "</NCTag>"].join(""),
        props: ["tagName", "isDisabled", "isReadonly", "type", "placeholder", "iptCls", "iptStyle", "content", "noShowMark"],
        model: {prop: "content", event: "change"},
        components: {NCTag: a},
        data: function () {
            return {value: this.content || "", isError: "", isSuccess: "", tips: ""}
        },
        methods: {
            focus: function c() {
                n(this.$refs.input).focus()
            }, blur: function r() {
                n(this.$refs.input).blur()
            }, setSuccess: function l(e) {
                var t = this;
                t.setNone(), !1 !== e && (t.isSuccess = !0, t.tips = n.trim(e))
            }, setError: function u(e) {
                var t = this;
                t.setNone(), !1 !== e && (t.isError = !0, t.tips = n.trim(e))
            }, setNone: function p() {
                var e = this;
                e.isSuccess = "", e.isError = "", e.tips = ""
            }, actionFocus: function d() {
                this.setNone()
            }
        },
        computed: {
            isText: function f() {
                return "textarea" !== this.type
            }
        },
        watch: {
            value: function h() {
                this.$emit("change", this.value)
            }
        }
    })
});
define("/cpn/1.03.04/vue/ncTag", ["nc"], function (e, n, t) {
    var a = e("nc").Vue;
    t.exports = a.extend({
        props: ["tagName"], render: function (e) {
            return e(this.tagName || "div", this.$slots["default"])
        }
    })
});
define("/cpn/1.03.04/vue/pager", ["nc"], function (t, a, r) {
    var i = t("nc"), e = i.$, l = i.Vue, c = i.Uri;
    i.Base;
    r.exports = l.extend({
        template: ['<div class="pagination" v-if="total > 1">', "<ul>", '<template v-if="noExt">', '<li :class="current === 1 ? \'active\' : \'\'"><a @click="jump2page(1)" :href="pageUrl(1)">1</a></li>', '<li v-if="first === 3"><a @click="jump2page(2)" :href="pageUrl(2)">2</a></li>', '<li v-if="first > 3"><a href="javascript:void(0);">...</a></li>', '<li v-for="i in range" v-if="i !== 1 && i !== total" :key="i" :class="i === current ? \'active\' : \'\'">', '<a @click="jump2page(i)" :href="pageUrl(i)">{{i}}</a>', "</li>", '<li v-if="last + 2 === total"><a @click="jump2page(last + 1)" :href="pageUrl(last + 1)">{{last + 1}}</a></li>', '<li v-if="last + 2 < total"><a href="javascript:void(0);">...</a></li>', '<li :class="current === total ? \'active\' : \'\'"><a @click="jump2page(total)" :href="pageUrl(total)">{{total}}</a></li>', "</template>", "<template v-else>", "<li class=\"txt-pager\" :class=\"current === 1 ? 'disabled' : ''\">", '<a @click="jump2page(1)" :href="current === 1 ? \'javascript:void(0);\' : pageUrl(1)">首页</a>', "</li>", "<li class=\"txt-pager\" :class=\"current === 1 ? 'disabled' : ''\">", '<a @click="jump2page(prev)" :href="current === 1 ? \'javascript:void(0);\' : pageUrl(1)">上一页</a>', "</li>", '<li v-for="i in range" :key="i" :class="i === current ? \'active\' : \'\'">', '<a @click="jump2page(i)" :href="pageUrl(i)">{{i}}</a>', "</li>", "<li class=\"txt-pager\" :class=\"current === total ? 'disabled' : ''\">", '<a @click="jump2page(next)" :href="current === total ? \'javascript:void(0);\' : pageUrl(total)">下一页</a>', "</li>", "<li class=\"txt-pager\" :class=\"current === total ? 'disabled' : ''\">", '<a @click="jump2page(total)" :href="current === total ? \'javascript:void(0);\' : pageUrl(total)">尾页</a>', "</li>", "</template>", "</ul>", "</div>"].join(""),
        props: {
            total: {"default": 1},
            interval: {"default": 8},
            url: String,
            value: Number,
            pageQuery: String,
            noExt: {"default": !1}
        },
        data: function () {
            var t = +this.value, a = +this.total;
            return {current: 0 < t && t < a ? t : 1}
        },
        methods: {
            pageUrl: function n(t) {
                var a = e.trim(this.url), r = e.trim(this.pageQuery);
                if (!a || !r) return "javascript:void(0);";
                var i = {};
                return i[r] = t, c.addParam(i, a)
            }, jump2page: function s(t, a) {
                var r = this, i = r.total;
                (t = i <= (t = +t || 1) ? i : t <= 1 ? 1 : t) !== r.current && (r.current = t, !a && r.$emit("change", r.current))
            }
        },
        watch: {
            current: function u(t) {
                this.$emit("input", t)
            }
        },
        computed: {
            prev: function p() {
                return Math.max(this.current - 1, 1)
            }, next: function o() {
                return Math.min(this.current + 1, +this.total || 0)
            }, first: function v() {
                var t = this, a = t.current, r = t.total, i = t.interval, e = a <= i / 2 ? 1 : a - Math.floor(i / 2);
                r < e + i - 1 && (e = i < r ? r - i + 1 : 1);
                return e
            }, last: function f() {
                var t = this, a = t.first + t.interval - 1;
                return a > t.total ? t.total : a
            }, range: function g() {
                for (var t = [], a = this.first, r = this.last; a <= r; a++) t.push(a);
                return t
            }
        }
    })
});