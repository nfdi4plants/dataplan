function flatten(t, e) {
    if ("string" == typeof t)
        return t;
    var n = [];
    for (e in t) {
        var a = flatten(t[e], e);
        a && n.push(a)
    }
    return n.join(" ")
}
function parseText() {
	let t = document.getElementById("doc3");
	
	t= t.innerText.replace(/(\r\n|\n|\r)/gm, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ")
    tags = {};
    var e = {},
    n = false;
    t.forEach(function (t) {
        discard.test(t) || (n || (t = t.replace(punctuation, "")), stopWords.test(t.toLowerCase()) || (t = t.substr(0, maxLength), e[t.toLowerCase()] = t, tags[t = t.toLowerCase()] = (tags[t] || 0) + 1))
    }),
    tags = d3.entries(tags).sort(function (t, e) {
        return e.value - t.value
    }),
    tags.forEach(function (t) {
        t.key = e[t.key]
    }),
    generate()
    

}
function generate() {
	
    layout.font("Impact").spiral("archimedean"),
    fontSize = d3.scale["log"]().range([10, 100]),
    tags.length && fontSize.domain([+tags[tags.length - 1].value || 1, +tags[0].value]),
    complete = 0,
    statusText.style("display", null),
    words = [],
    layout.stop().words(tags.slice(0, max = Math.min(tags.length, +250))).start();


	
}
function progress(t) {
    statusText.text(++complete + "/" + max)
}
function draw(t, e) {
    statusText.style("display", "none"),
    scale = e ? Math.min(w / Math.abs(e[1].x - w / 2), w / Math.abs(e[0].x - w / 2), h / Math.abs(e[1].y - h / 2), h / Math.abs(e[0].y - h / 2)) / 2 : 1,
    words = t;
    var n = vis.selectAll("text").data(words, function (t) {
        return t.text.toLowerCase()
    });
    n.transition().duration(0).attr("transform", function (t) {
        return "translate(" + [t.x, t.y] + ")rotate(" + t.rotate + ")"
    }).style("font-size", function (t) {
        return t.size + "px"
    }),
    n.enter().append("text").attr("text-anchor", "middle").attr("transform", function (t) {
        return "translate(" + [t.x, t.y] + ")rotate(" + t.rotate + ")"
    }).style("font-size", "1px").transition().duration(0).style("font-size", function (t) {
        return t.size + "px"
    }),
    n.style("font-family", function (t) {
        return t.font
    }).style("fill", function (t) {
        return fill(t.text.toLowerCase())
    }).text(function (t) {
        return t.text
    });
    var a = background.append("g").attr("transform", vis.attr("transform")),
    r = a.node();
    n.exit().each(function () {
        r.appendChild(this)
    }),
    a.transition().duration(0).style("opacity", 1e-6).remove(),
    vis.transition().delay(0).duration(0).attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")")
}
function downloadPNG() {
    d3.event.preventDefault();
    var t = document.createElement("canvas"),
    e = t.getContext("2d");
    t.width = w,
    t.height = h,
    e.translate(w >> 1, h >> 1),
    e.scale(scale, scale),
    words.forEach(function (t, n) {
        e.save(),
        e.translate(t.x, t.y),
        e.rotate(t.rotate * Math.PI / 180),
        e.textAlign = "center",
        e.fillStyle = fill(t.text.toLowerCase()),
        e.font = t.size + "px " + t.font,
        e.fillText(t.text, 0, 0),
        e.restore()
    }),
    echoContentType.attr("value", "image/png"),
    echoInput.attr("value", t.toDataURL("image/png")),
    echoForm.node().submit()
}
function downloadSVG() {
    d3.event.preventDefault(),
    echoContentType.attr("value", "image/svg+xml;charset=utf-8"),
    echoInput.attr("value", svg.attr("version", "1.1").attr("xmlns", "http://www.w3.org/2000/svg").node().parentNode.innerHTML),
    echoForm.node().submit()
}
!function (t) {
    function e() {
        function t(t, n, a) {
            for (var r, o, s, l = ([{
                            x: 0,
                            y: 0
                        }, {
                            x: e[0],
                            y: e[1]
                        }
                    ], n.x), i = n.y, d = Math.sqrt(e[0] * e[0] + e[1] * e[1]), h = m(e), f = Math.random() < .5 ? 1 : -1, p = -f; (r = h(p += f)) && (o = ~~r[0], s = ~~r[1], !(Math.min(o, s) > d)); )
                if (n.x = l + o, n.y = i + s, !(n.x + n.x0 < 0 || n.y + n.y0 < 0 || n.x + n.x1 > e[0] || n.y + n.y1 > e[1]) && (!a || !u(n, t, e[0])) && (!a || c(n, a))) {
                    for (var y, g = n.sprite, v = n.width >> 5, x = e[0] >> 5, w = n.x - (v << 4), M = 127 & w, b = 32 - M, z = n.y1 - n.y0, k = (n.y + n.y0) * x + (w >> 5), T = 0; z > T; T++) {
                        y = 0;
                        for (var A = 0; v >= A; A++)
                            t[k + A] |= y << b | (v > A ? (y = g[T * v + A]) >>> M : 0);
                        k += x
                    }
                    return delete n.sprite,
                    !0
                }
            return !1
        }
        var e = [256, 256],
        h = n,
        p = a,
        y = r,
        g = o,
        v = s,
        m = d,
        x = [],
        w = 1 / 0,
        b = d3.dispatch("word", "end"),
        z = null,
        k = {};
        return k.start = function () {
            function n() {
                for (var n, s = +new Date; +new Date - s < w && ++u < o && z; )
                    n = d[u], n.x = e[0] * (Math.random() + .5) >> 1, n.y = e[1] * (Math.random() + .5) >> 1, l(n, d, u), t(a, n, r) && (c.push(n), b.word(n), r ? i(r, n) : r = [{
                                x: n.x + n.x0,
                                y: n.y + n.y0
                            }, {
                                x: n.x + n.x1,
                                y: n.y + n.y1
                            }
                        ], n.x -= e[0] >> 1, n.y -= e[1] >> 1);
                u >= o && (k.stop(), b.end(c, r))
            }
            var a = f((e[0] >> 5) * e[1]),
            r = null,
            o = x.length,
            u = -1,
            c = [],
            d = x.map(function (t, e) {
                return {
                    text: h.call(this, t, e),
                    font: p.call(this, t, e),
                    rotate: g.call(this, t, e),
                    size: ~~y.call(this, t, e),
                    padding: s.call(this, t, e)
                }
            }).sort(function (t, e) {
                return e.size - t.size
            });
            return z && clearInterval(z),
            z = setInterval(n, 0),
            n(),
            k
        },
        k.stop = function () {
            return z && (clearInterval(z), z = null),
            k
        },
        k.timeInterval = function (t) {
            return arguments.length ? (w = null == t ? 1 / 0 : t, k) : w
        },
        k.words = function (t) {
            return arguments.length ? (x = t, k) : x
        },
        k.size = function (t) {
            return arguments.length ? (e = [+t[0], +t[1]], k) : e
        },
        k.font = function (t) {
            return arguments.length ? (p = d3.functor(t), k) : p
        },
        k.rotate = function (t) {
            return arguments.length ? (g = d3.functor(t), k) : g
        },
        k.text = function (t) {
            return arguments.length ? (h = d3.functor(t), k) : h
        },
        k.spiral = function (t) {
            return arguments.length ? (m = M[t + ""] || t, k) : m
        },
        k.fontSize = function (t) {
            return arguments.length ? (y = d3.functor(t), k) : y
        },
        k.padding = function (t) {
            return arguments.length ? (v = d3.functor(t), k) : v
        },
        d3.rebind(k, b, "on")
    }
    function n(t) {
        return t.text
    }
    function a() {
        return "serif"
    }
    function r(t) {
        return Math.sqrt(t.value)
    }
    function o() {
        return 30 * (~~(6 * Math.random()) - 3)
    }
    function s() {
        return 1
    }
    function l(t, e, n) {
        if (!t.sprite) {
            w.clearRect(0, 0, (g << 5) / m, v / m);
            var a = 0,
            r = 0,
            o = 0,
            s = e.length;
            for (n--; ++n < s; ) {
                t = e[n],
                w.save(),
                w.font = ~~((t.size + 1) / m) + "px " + t.font;
                var l = w.measureText(t.text + "m").width * m,
                u = t.size << 1;
                if (t.rotate) {
                    var i = Math.sin(t.rotate * y),
                    c = Math.cos(t.rotate * y),
                    d = l * c,
                    h = l * i,
                    f = u * c,
                    p = u * i;
                    l = Math.max(Math.abs(d + p), Math.abs(d - p)) + 31 >> 5 << 5,
                    u = ~~Math.max(Math.abs(h + f), Math.abs(h - f))
                } else
                    l = l + 31 >> 5 << 5;
                if (u > o && (o = u), a + l >= g << 5 && (a = 0, r += o, o = 0), r + u >= v)
                    break;
                w.translate((a + (l >> 1)) / m, (r + (u >> 1)) / m),
                t.rotate && w.rotate(t.rotate * y),
                w.fillText(t.text, 0, 0),
                w.restore(),
                t.width = l,
                t.height = u,
                t.xoff = a,
                t.yoff = r,
                t.x1 = l >> 1,
                t.y1 = u >> 1,
                t.x0 = -t.x1,
                t.y0 = -t.y1,
                a += l
            }
            for (var x = w.getImageData(0, 0, (g << 5) / m, v / m).data, M = []; --n >= 0; ) {
                t = e[n];
                for (var l = t.width, b = l >> 5, u = t.y1 - t.y0, z = t.padding, k = 0; u * b > k; k++)
                    M[k] = 0;
                if (a = t.xoff, null == a)
                    return;
                r = t.yoff;
                for (var T = 0, A = -1, C = 0; u > C; C++) {
                    for (var k = 0; l > k; k++) {
                        var S = b * C + (k >> 5),
                        I = x[(r + C) * (g << 5) + (a + k) << 2] ? 1 << 31 - k % 32 : 0;
                        z && (C && (M[S - b] |= I), l - 1 > C && (M[S + b] |= I), I |= I << 1 | I >> 1),
                        M[S] |= I,
                        T |= I
                    }
                    T ? A = C : (t.y0++, u--, C--, r++)
                }
                t.y1 = t.y0 + A,
                t.sprite = M.slice(0, (t.y1 - t.y0) * b)
            }
        }
    }
    function u(t, e, n) {
        n >>= 5;
        for (var a, r = t.sprite, o = t.width >> 5, s = t.x - (o << 4), l = 127 & s, u = 32 - l, i = t.y1 - t.y0, c = (t.y + t.y0) * n + (s >> 5), d = 0; i > d; d++) {
            a = 0;
            for (var h = 0; o >= h; h++)
                if ((a << u | (o > h ? (a = r[d * o + h]) >>> l : 0)) & e[c + h])
                    return !0;
            c += n
        }
        return !1
    }
    function i(t, e) {
        var n = t[0],
        a = t[1];
        e.x + e.x0 < n.x && (n.x = e.x + e.x0),
        e.y + e.y0 < n.y && (n.y = e.y + e.y0),
        e.x + e.x1 > a.x && (a.x = e.x + e.x1),
        e.y + e.y1 > a.y && (a.y = e.y + e.y1)
    }
    function c(t, e) {
        return t.x + t.x1 > e[0].x && t.x + t.x0 < e[1].x && t.y + t.y1 > e[0].y && t.y + t.y0 < e[1].y
    }
    function d(t) {
        var e = t[0] / t[1];
        return function (t) {
            return [e * (t *= .1) * Math.cos(t), t * Math.sin(t)]
        }
    }
    function h(t) {
        var e = 4,
        n = e * t[0] / t[1],
        a = 0,
        r = 0;
        return function (t) {
            var o = 0 > t ? -1 : 1;
            switch (Math.sqrt(1 + 4 * o * t) - o & 3) {
            case 0:
                a += n;
                break;
            case 1:
                r += e;
                break;
            case 2:
                a -= n;
                break;
            default:
                r -= e
            }
            return [a, r]
        }
    }
    function f(t) {
        for (var e = [], n = -1; ++n < t; )
            e[n] = 0;
        return e
    }
    var p,
    y = Math.PI / 180,
    g = 64,
    v = 2048,
    m = 1;
    if ("undefined" != typeof document)
        p = document.createElement("canvas"), p.width = 1, p.height = 1, m = Math.sqrt(p.getContext("2d").getImageData(0, 0, 1, 1).data.length >> 2), p.width = (g << 5) / m, p.height = v / m;
    else {
        var x = require("canvas");
        p = new x(g << 5, v)
    }
    var w = p.getContext("2d"),
    M = {
        archimedean: d,
        rectangular: h
    };
    w.fillStyle = "red",
    w.textAlign = "center",
    t.cloud = e
}
("undefined" == typeof exports ? d3.layout || (d3.layout = {}) : exports);
var unicodePunctuationRe = "!-#%-*,-/:;?@\\[-\\]_{}\xa1\xa7\xab\xb6\xb7\xbb\xbf\u037e\u0387\u055a-\u055f\u0589\u058a\u05be\u05c0\u05c3\u05c6\u05f3\u05f4\u0609\u060a\u060c\u060d\u061b\u061e\u061f\u066a-\u066d\u06d4\u0700-\u070d\u07f7-\u07f9\u0830-\u083e\u085e\u0964\u0965\u0970\u0af0\u0df4\u0e4f\u0e5a\u0e5b\u0f04-\u0f12\u0f14\u0f3a-\u0f3d\u0f85\u0fd0-\u0fd4\u0fd9\u0fda\u104a-\u104f\u10fb\u1360-\u1368\u1400\u166d\u166e\u169b\u169c\u16eb-\u16ed\u1735\u1736\u17d4-\u17d6\u17d8-\u17da\u1800-\u180a\u1944\u1945\u1a1e\u1a1f\u1aa0-\u1aa6\u1aa8-\u1aad\u1b5a-\u1b60\u1bfc-\u1bff\u1c3b-\u1c3f\u1c7e\u1c7f\u1cc0-\u1cc7\u1cd3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205e\u207d\u207e\u208d\u208e\u2329\u232a\u2768-\u2775\u27c5\u27c6\u27e6-\u27ef\u2983-\u2998\u29d8-\u29db\u29fc\u29fd\u2cf9-\u2cfc\u2cfe\u2cff\u2d70\u2e00-\u2e2e\u2e30-\u2e3b\u3001-\u3003\u3008-\u3011\u3014-\u301f\u3030\u303d\u30a0\u30fb\ua4fe\ua4ff\ua60d-\ua60f\ua673\ua67e\ua6f2-\ua6f7\ua874-\ua877\ua8ce\ua8cf\ua8f8-\ua8fa\ua92e\ua92f\ua95f\ua9c1-\ua9cd\ua9de\ua9df\uaa5c-\uaa5f\uaade\uaadf\uaaf0\uaaf1\uabeb\ufd3e\ufd3f\ufe10-\ufe19\ufe30-\ufe52\ufe54-\ufe61\ufe63\ufe68\ufe6a\ufe6b\uff01-\uff03\uff05-\uff0a\uff0c-\uff0f\uff1a\uff1b\uff1f\uff20\uff3b-\uff3d\uff3f\uff5b\uff5d\uff5f-\uff65", fill = d3.scale.category20b(), w = 600, h = 600, words = [], max, scale = 1, complete = 0, keyword = "", tags, fontSize, maxLength = 30, fetcher, statusText = d3.select("#status"), layout = d3.layout.cloud().timeInterval(1e-99).size([w, h]).fontSize(function (t) {
    return fontSize(+t.value)
}).text(function (t) {
    return t.key
}).on("word", progress).on("end", draw),  svg = d3.select("#vis").append("svg").attr("width", "600").attr("height", "600").attr("viewbox","0 0 600 600"), background = svg.append("g"), vis = svg.append("g").attr("transform", "translate(" + [w >> 1, h >> 1] + ")");




d3.select("#download-svg").on("click", downloadSVG), d3.select("#download-png").on("click", downloadPNG);
//var form = d3.select("#form").on("submit", function () {
//    parseText(d3.select("#text").property("value")),
//    d3.event.preventDefault()
//});
//form.selectAll("input").on("change", generate);

var stopWords = /^(will|and|the|eg|well|however|also|using|might|my|myself|we|us|our|ours|ourselves|you|your|yours|yourself|yourselves|he|him|his|himself|she|her|hers|herself|it|its|itself|they|them|their|theirs|themselves|what|which|who|whom|whose|this|that|these|those|am|is|are|was|were|be|been|being|have|has|had|having|do|does|did|doing|will|would|should|can|could|ought|i'm|you're|he's|she's|it's|we're|they're|i've|you've|we've|they've|i'd|you'd|he'd|she'd|we'd|they'd|i'll|you'll|he'll|she'll|we'll|they'll|isn't|aren't|wasn't|weren't|hasn't|haven't|hadn't|doesn't|don't|didn't|won't|wouldn't|shan't|shouldn't|can't|cannot|couldn't|mustn't|let's|that's|who's|what's|here's|there's|when's|where's|why's|how's|a|an|the|and|but|if|or|because|as|until|while|of|at|by|for|with|about|against|between|into|through|during|before|after|above|below|to|from|up|upon|down|in|out|on|off|over|under|again|further|then|once|here|there|when|where|why|how|all|any|both|each|few|more|most|other|some|such|no|nor|not|only|own|same|so|than|too|very|say|says|said|shall)$/, punctuation = new RegExp("[" + unicodePunctuationRe + "]", "g"), wordSeparators = /[ \f\n\r\t\v\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000\u3031-\u3035\u309b\u309c\u30a0\u30fc\uff70]+/g, discard = /^(@|https?:|\/\/)/, htmlTags = /(<[^>]*?>|<script.*?<\/script>|<style.*?<\/style>|<head.*?><\/head>)/g, matchTwitter = /^https?:\/\/([^\.]*\.)?twitter\.com/;
d3.select("#random-palette").on("click", function () {
    paletteJSON("http://www.colourlovers.com/api/palettes/random", {}, function (t) {
        fill.range(t[0].colors),
        vis.selectAll("text").style("fill", function (t) {
            return fill(t.text.toLowerCase())
        })
    }),
    d3.event.preventDefault()
}), function () {
    function t() {
        c = +5,
        u = Math.max(-90, Math.min(90, +-60)),
        i = Math.max(-90, Math.min(90, +60)),
        e()
    }
    function e() {
        h.domain([0, c - 1]).range([u, i]);
        var t = l.selectAll("path.angle").data([{
                        startAngle: u * d,
                        endAngle: i * d
                    }
                ]);
        t.enter().insert("path", "circle").attr("class", "angle").style("fill", "#fc0"),
        t.attr("d", f);
        var o = l.selectAll("line.angle").data(d3.range(c).map(h));
        o.enter().append("line").attr("class", "angle"),
        o.exit().remove(),
        o.attr("transform", function (t) {
            return "rotate(" + (90 + t) + ")"
        }).attr("x2", function (t, e) {
            return e && e !== c - 1 ? -r : -r - 5
        });
        var s = l.selectAll("path.drag").data([u, i]);
        s.enter().append("path").attr("class", "drag").attr("d", "M-9.5,0L-3,3.5L-3,-3.5Z").call(d3.behavior.drag().on("drag", function (t, o) {
                t = (o ? i : u) + 90;
                var s = [-r * Math.cos(t * d), -r * Math.sin(t * d)],
                l = [d3.event.x, d3.event.y],
                c = ~~(Math.atan2(n(s, l), a(s, l)) / d);
                t = Math.max(-90, Math.min(90, t + c - 90)),
                c = i - u,
                o ? (i = t, c > 360 ? u += c - 360 : 0 > c && (u = i)) : (u = t, c > 360 ? i += 360 - c : 0 > c && (i = u)),
                e()
            }).on("dragend", generate)),
        s.attr("transform", function (t) {
            return "rotate(" + (t + 90) + ")translate(-" + r + ")"
        }),
        layout.rotate(function () {
            return h(~~(Math.random() * c))
        })
        
    }
    function n(t, e) {
        return t[0] * e[1] - t[1] * e[0]
    }
    function a(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }
    var r = 40.5,
    o = 35,
    s = 20,
    l = d3.select("#angles").append("svg").attr("width", 2 * (r + o)).attr("height", r + 1.5 * s).append("g").attr("transform", "translate(" + [r + o, r + s] + ")");
    l.append("path").style("fill", "none").attr("d", ["M", -r, 0, "A", r, r, 0, 0, 1, r, 0].join(" ")),
    l.append("line").attr("x1", -r - 7).attr("x2", r + 7),
    l.append("line").attr("y2", -r - 7),
    l.selectAll("text").data([-90, 0, 90]).enter().append("text").attr("dy", function (t, e) {
        return 1 === e ? null : ".3em"
    }).attr("text-anchor", function (t, e) {
        return ["end", "middle", "start"][e]
    }).attr("transform", function (t) {
        return t += 90,
        "rotate(" + t + ")translate(" +  - (r + 10) + ")rotate(" + -t + ")translate(2)"
    }).text(function (t) {
        return t + "\xb0"
    });
    var u,
    i,
    c,
    d = Math.PI / 180,
    h = d3.scale.linear(),
    f = d3.svg.arc().innerRadius(0).outerRadius(r);
	
    t();

}
();
