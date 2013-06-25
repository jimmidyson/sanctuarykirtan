!function (a, b, c) {
  'use strict';
  function d(a) {
    return a && 'number' == typeof a.length ? 'function' != typeof a.hasOwnProperty && 'function' != typeof a.constructor ? !0 : a instanceof fb || Vc && a instanceof Vc || '[object Object]' !== _c.call(a) || 'function' == typeof a.callee : !1;
  }
  function e(a, b, c) {
    var f;
    if (a)
      if (x(a))
        for (f in a)
          'prototype' != f && 'length' != f && 'name' != f && a.hasOwnProperty(f) && b.call(c, a[f], f);
      else if (a.forEach && a.forEach !== e)
        a.forEach(b, c);
      else if (d(a))
        for (f = 0; f < a.length; f++)
          b.call(c, a[f], f);
      else
        for (f in a)
          a.hasOwnProperty(f) && b.call(c, a[f], f);
    return a;
  }
  function f(a) {
    var b = [];
    for (var c in a)
      a.hasOwnProperty(c) && b.push(c);
    return b.sort();
  }
  function g(a, b, c) {
    for (var d = f(a), e = 0; e < d.length; e++)
      b.call(c, a[d[e]], d[e]);
    return d;
  }
  function h(a) {
    return function (b, c) {
      a(c, b);
    };
  }
  function i() {
    for (var a, b = bd.length; b;) {
      if (b--, a = bd[b].charCodeAt(0), 57 == a)
        return bd[b] = 'A', bd.join('');
      if (90 != a)
        return bd[b] = String.fromCharCode(a + 1), bd.join('');
      bd[b] = '0';
    }
    return bd.unshift('0'), bd.join('');
  }
  function j(a, b) {
    b ? a.$$hashKey = b : delete a.$$hashKey;
  }
  function k(a) {
    var b = a.$$hashKey;
    return e(arguments, function (b) {
      b !== a && e(b, function (b, c) {
        a[c] = b;
      });
    }), j(a, b), a;
  }
  function l(a) {
    return parseInt(a, 10);
  }
  function m(a, b) {
    return k(new (k(function () {
    }, { prototype: a }))(), b);
  }
  function n() {
  }
  function o(a) {
    return a;
  }
  function p(a) {
    return function () {
      return a;
    };
  }
  function q(a) {
    return 'undefined' == typeof a;
  }
  function r(a) {
    return 'undefined' != typeof a;
  }
  function s(a) {
    return null != a && 'object' == typeof a;
  }
  function t(a) {
    return 'string' == typeof a;
  }
  function u(a) {
    return 'number' == typeof a;
  }
  function v(a) {
    return '[object Date]' == _c.apply(a);
  }
  function w(a) {
    return '[object Array]' == _c.apply(a);
  }
  function x(a) {
    return 'function' == typeof a;
  }
  function y(a) {
    return a && a.document && a.location && a.alert && a.setInterval;
  }
  function z(a) {
    return a && a.$evalAsync && a.$watch;
  }
  function A(a) {
    return '[object File]' === _c.apply(a);
  }
  function B(a) {
    return t(a) ? a.replace(/^\s*/, '').replace(/\s*$/, '') : a;
  }
  function C(a) {
    return a && (a.nodeName || a.bind && a.find);
  }
  function D(a, b, c) {
    var d = [];
    return e(a, function (a, e, f) {
      d.push(b.call(c, a, e, f));
    }), d;
  }
  function E(a, b) {
    return -1 != F(a, b);
  }
  function F(a, b) {
    if (a.indexOf)
      return a.indexOf(b);
    for (var c = 0; c < a.length; c++)
      if (b === a[c])
        return c;
    return -1;
  }
  function G(a, b) {
    var c = F(a, b);
    return c >= 0 && a.splice(c, 1), b;
  }
  function H(a, b) {
    if (y(a) || z(a))
      throw Error('Can\'t copy Window or Scope');
    if (b) {
      if (a === b)
        throw Error('Can\'t copy equivalent objects or arrays');
      if (w(a)) {
        b.length = 0;
        for (var c = 0; c < a.length; c++)
          b.push(H(a[c]));
      } else {
        var d = b.$$hashKey;
        e(b, function (a, c) {
          delete b[c];
        });
        for (var f in a)
          b[f] = H(a[f]);
        j(b, d);
      }
    } else
      b = a, a && (w(a) ? b = H(a, []) : v(a) ? b = new Date(a.getTime()) : s(a) && (b = H(a, {})));
    return b;
  }
  function I(a, b) {
    b = b || {};
    for (var c in a)
      a.hasOwnProperty(c) && '$$' !== c.substr(0, 2) && (b[c] = a[c]);
    return b;
  }
  function J(a, b) {
    if (a === b)
      return !0;
    if (null === a || null === b)
      return !1;
    if (a !== a && b !== b)
      return !0;
    var d, e, f, g = typeof a, h = typeof b;
    if (g == h && 'object' == g) {
      if (!w(a)) {
        if (v(a))
          return v(b) && a.getTime() == b.getTime();
        if (z(a) || z(b) || y(a) || y(b))
          return !1;
        f = {};
        for (e in a)
          if ('$' !== e.charAt(0) && !x(a[e])) {
            if (!J(a[e], b[e]))
              return !1;
            f[e] = !0;
          }
        for (e in b)
          if (!f[e] && '$' !== e.charAt(0) && b[e] !== c && !x(b[e]))
            return !1;
        return !0;
      }
      if ((d = a.length) == b.length) {
        for (e = 0; d > e; e++)
          if (!J(a[e], b[e]))
            return !1;
        return !0;
      }
    }
    return !1;
  }
  function K(a, b, c) {
    return a.concat(Zc.call(b, c));
  }
  function L(a, b) {
    return Zc.call(a, b || 0);
  }
  function M(a, b) {
    var c = arguments.length > 2 ? L(arguments, 2) : [];
    return !x(b) || b instanceof RegExp ? b : c.length ? function () {
      return arguments.length ? b.apply(a, c.concat(Zc.call(arguments, 0))) : b.apply(a, c);
    } : function () {
      return arguments.length ? b.apply(a, arguments) : b.call(a);
    };
  }
  function N(a, d) {
    var e = d;
    return /^\$+/.test(a) ? e = c : y(d) ? e = '$WINDOW' : d && b === d ? e = '$DOCUMENT' : z(d) && (e = '$SCOPE'), e;
  }
  function O(a, b) {
    return JSON.stringify(a, N, b ? '  ' : null);
  }
  function P(a) {
    return t(a) ? JSON.parse(a) : a;
  }
  function Q(a) {
    if (a && 0 !== a.length) {
      var b = Qc('' + a);
      a = !('f' == b || '0' == b || 'false' == b || 'no' == b || 'n' == b || '[]' == b);
    } else
      a = !1;
    return a;
  }
  function R(a) {
    a = Uc(a).clone();
    try {
      a.html('');
    } catch (b) {
    }
    var c = 3, d = Uc('<div>').append(a).html();
    try {
      return a[0].nodeType === c ? Qc(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return '<' + Qc(b);
      });
    } catch (b) {
      return Qc(d);
    }
  }
  function S(a) {
    var b, c, d = {};
    return e((a || '').split('&'), function (a) {
      a && (b = a.split('='), c = decodeURIComponent(b[0]), d[c] = r(b[1]) ? decodeURIComponent(b[1]) : !0);
    }), d;
  }
  function T(a) {
    var b = [];
    return e(a, function (a, c) {
      b.push(V(c, !0) + (a === !0 ? '' : '=' + V(a, !0)));
    }), b.length ? b.join('&') : '';
  }
  function U(a) {
    return V(a, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function V(a, b) {
    return encodeURIComponent(a).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, b ? '%20' : '+');
  }
  function W(a, c) {
    function d(a) {
      a && h.push(a);
    }
    var f, g, h = [a], i = [
        'ng:app',
        'ng-app',
        'x-ng-app',
        'data-ng-app'
      ], j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    e(i, function (c) {
      i[c] = !0, d(b.getElementById(c)), c = c.replace(':', '\\:'), a.querySelectorAll && (e(a.querySelectorAll('.' + c), d), e(a.querySelectorAll('.' + c + '\\:'), d), e(a.querySelectorAll('[' + c + ']'), d));
    }), e(h, function (a) {
      if (!f) {
        var b = ' ' + a.className + ' ', c = j.exec(b);
        c ? (f = a, g = (c[2] || '').replace(/\s+/g, ',')) : e(a.attributes, function (b) {
          !f && i[b.name] && (f = a, g = b.value);
        });
      }
    }), f && c(f, g ? [g] : []);
  }
  function X(b, c) {
    var d = function () {
        b = Uc(b), c = c || [], c.unshift([
          '$provide',
          function (a) {
            a.value('$rootElement', b);
          }
        ]), c.unshift('ng');
        var a = yb(c);
        return a.invoke([
          '$rootScope',
          '$rootElement',
          '$compile',
          '$injector',
          function (a, b, c, d) {
            a.$apply(function () {
              b.data('$injector', d), c(b)(a);
            });
          }
        ]), a;
      }, f = /^NG_DEFER_BOOTSTRAP!/;
    return a && !f.test(a.name) ? d() : (a.name = a.name.replace(f, ''), ad.resumeBootstrap = function (a) {
      e(a, function (a) {
        c.push(a);
      }), d();
    }, void 0);
  }
  function Y(a, b) {
    return b = b || '_', a.replace(cd, function (a, c) {
      return (c ? b : '') + a.toLowerCase();
    });
  }
  function Z() {
    Vc = a.jQuery, Vc ? (Uc = Vc, k(Vc.fn, {
      scope: ld.scope,
      controller: ld.controller,
      injector: ld.injector,
      inheritedData: ld.inheritedData
    }), eb('remove', !0), eb('empty'), eb('html')) : Uc = fb, ad.element = Uc;
  }
  function $(a, b, c) {
    if (!a)
      throw new Error('Argument \'' + (b || '?') + '\' is ' + (c || 'required'));
    return a;
  }
  function _(a, b, c) {
    return c && w(a) && (a = a[a.length - 1]), $(x(a), b, 'not a function, got ' + (a && 'object' == typeof a ? a.constructor.name || 'Object' : typeof a)), a;
  }
  function ab(a) {
    function b(a, b, c) {
      return a[b] || (a[b] = c());
    }
    return b(b(a, 'angular', Object), 'module', function () {
      var a = {};
      return function (c, d, e) {
        return d && a.hasOwnProperty(c) && (a[c] = null), b(a, c, function () {
          function a(a, c, d) {
            return function () {
              return b[d || 'push']([
                a,
                c,
                arguments
              ]), h;
            };
          }
          if (!d)
            throw Error('No module: ' + c);
          var b = [], f = [], g = a('$injector', 'invoke'), h = {
              _invokeQueue: b,
              _runBlocks: f,
              requires: d,
              name: c,
              provider: a('$provide', 'provider'),
              factory: a('$provide', 'factory'),
              service: a('$provide', 'service'),
              value: a('$provide', 'value'),
              constant: a('$provide', 'constant', 'unshift'),
              filter: a('$filterProvider', 'register'),
              controller: a('$controllerProvider', 'register'),
              directive: a('$compileProvider', 'directive'),
              config: g,
              run: function (a) {
                return f.push(a), this;
              }
            };
          return e && g(e), h;
        });
      };
    });
  }
  function bb(b) {
    k(b, {
      bootstrap: X,
      copy: H,
      extend: k,
      equals: J,
      element: Uc,
      forEach: e,
      injector: yb,
      noop: n,
      bind: M,
      toJson: O,
      fromJson: P,
      identity: o,
      isUndefined: q,
      isDefined: r,
      isString: t,
      isFunction: x,
      isObject: s,
      isNumber: u,
      isElement: C,
      isArray: w,
      version: dd,
      isDate: v,
      lowercase: Qc,
      uppercase: Rc,
      callbacks: { counter: 0 }
    }), Wc = ab(a);
    try {
      Wc('ngLocale');
    } catch (c) {
      Wc('ngLocale', []).provider('$locale', qc);
    }
    Wc('ng', ['ngLocale'], [
      '$provide',
      function (a) {
        a.provider('$compile', Eb).directive({
          a: Id,
          input: Sd,
          textarea: Sd,
          form: Md,
          script: Ae,
          select: Ce,
          style: Ee,
          option: De,
          ngBind: ce,
          ngBindHtmlUnsafe: ee,
          ngBindTemplate: de,
          ngClass: fe,
          ngClassEven: he,
          ngClassOdd: ge,
          ngCsp: ke,
          ngCloak: ie,
          ngController: je,
          ngForm: Nd,
          ngHide: te,
          ngInclude: ne,
          ngInit: oe,
          ngNonBindable: pe,
          ngPluralize: qe,
          ngRepeat: re,
          ngShow: se,
          ngSubmit: me,
          ngStyle: ue,
          ngSwitch: ve,
          ngSwitchWhen: we,
          ngSwitchDefault: xe,
          ngOptions: Be,
          ngView: ze,
          ngTransclude: ye,
          ngModel: Yd,
          ngList: _d,
          ngChange: Zd,
          required: $d,
          ngRequired: $d,
          ngValue: be
        }).directive(Jd).directive(le), a.provider({
          $anchorScroll: zb,
          $browser: Bb,
          $cacheFactory: Cb,
          $controller: Gb,
          $document: Hb,
          $exceptionHandler: Ib,
          $filter: sc,
          $interpolate: Jb,
          $http: nc,
          $httpBackend: oc,
          $location: Vb,
          $log: Wb,
          $parse: bc,
          $route: ec,
          $routeParams: fc,
          $rootScope: gc,
          $q: cc,
          $sniffer: hc,
          $templateCache: Db,
          $timeout: rc,
          $window: ic
        });
      }
    ]);
  }
  function cb() {
    return ++gd;
  }
  function db(a) {
    return a.replace(jd, function (a, b, c, d) {
      return d ? c.toUpperCase() : c;
    }).replace(kd, 'Moz$1');
  }
  function eb(a, b) {
    function c() {
      for (var a, c, e, f, g, h, i, j = [this], k = b; j.length;)
        for (a = j.shift(), c = 0, e = a.length; e > c; c++)
          for (f = Uc(a[c]), k ? f.triggerHandler('$destroy') : k = !k, g = 0, h = (i = f.children()).length; h > g; g++)
            j.push(Vc(i[g]));
      return d.apply(this, arguments);
    }
    var d = Vc.fn[a];
    d = d.$original || d, c.$original = d, Vc.fn[a] = c;
  }
  function fb(a) {
    if (a instanceof fb)
      return a;
    if (!(this instanceof fb)) {
      if (t(a) && '<' != a.charAt(0))
        throw Error('selectors not implemented');
      return new fb(a);
    }
    if (t(a)) {
      var c = b.createElement('div');
      c.innerHTML = '<div>&#160;</div>' + a, c.removeChild(c.firstChild), pb(this, c.childNodes), this.remove();
    } else
      pb(this, a);
  }
  function gb(a) {
    return a.cloneNode(!0);
  }
  function hb(a) {
    jb(a);
    for (var b = 0, c = a.childNodes || []; b < c.length; b++)
      hb(c[b]);
  }
  function ib(a, b, c) {
    var d = kb(a, 'events'), f = kb(a, 'handle');
    f && (q(b) ? e(d, function (b, c) {
      id(a, c, b), delete d[c];
    }) : q(c) ? (id(a, b, d[b]), delete d[b]) : G(d[b], c));
  }
  function jb(a) {
    var b = a[fd], d = ed[b];
    d && (d.handle && (d.events.$destroy && d.handle({}, '$destroy'), ib(a)), delete ed[b], a[fd] = c);
  }
  function kb(a, b, c) {
    var d = a[fd], e = ed[d || -1];
    return r(c) ? (e || (a[fd] = d = cb(), e = ed[d] = {}), e[b] = c, void 0) : e && e[b];
  }
  function lb(a, b, c) {
    var d = kb(a, 'data'), e = r(c), f = !e && r(b), g = f && !s(b);
    if (d || g || kb(a, 'data', d = {}), e)
      d[b] = c;
    else {
      if (!f)
        return d;
      if (g)
        return d && d[b];
      k(d, b);
    }
  }
  function mb(a, b) {
    return (' ' + a.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + b + ' ') > -1;
  }
  function nb(a, b) {
    b && e(b.split(' '), function (b) {
      a.className = B((' ' + a.className + ' ').replace(/[\n\t]/g, ' ').replace(' ' + B(b) + ' ', ' '));
    });
  }
  function ob(a, b) {
    b && e(b.split(' '), function (b) {
      mb(a, b) || (a.className = B(a.className + ' ' + B(b)));
    });
  }
  function pb(a, b) {
    if (b) {
      b = b.nodeName || !r(b.length) || y(b) ? [b] : b;
      for (var c = 0; c < b.length; c++)
        a.push(b[c]);
    }
  }
  function qb(a, b) {
    return rb(a, '$' + (b || 'ngController') + 'Controller');
  }
  function rb(a, b, c) {
    for (a = Uc(a), 9 == a[0].nodeType && (a = a.find('html')); a.length;) {
      if (c = a.data(b))
        return c;
      a = a.parent();
    }
  }
  function sb(a, b) {
    var c = md[b.toLowerCase()];
    return c && nd[a.nodeName] && c;
  }
  function tb(a, c) {
    var d = function (d, f) {
      if (d.preventDefault || (d.preventDefault = function () {
          d.returnValue = !1;
        }), d.stopPropagation || (d.stopPropagation = function () {
          d.cancelBubble = !0;
        }), d.target || (d.target = d.srcElement || b), q(d.defaultPrevented)) {
        var g = d.preventDefault;
        d.preventDefault = function () {
          d.defaultPrevented = !0, g.call(d);
        }, d.defaultPrevented = !1;
      }
      d.isDefaultPrevented = function () {
        return d.defaultPrevented;
      }, e(c[f || d.type], function (b) {
        b.call(a, d);
      }), 8 >= Yc ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, delete d.stopPropagation, delete d.isDefaultPrevented);
    };
    return d.elem = a, d;
  }
  function ub(a) {
    var b, d = typeof a;
    return 'object' == d && null !== a ? 'function' == typeof (b = a.$$hashKey) ? b = a.$$hashKey() : b === c && (b = a.$$hashKey = i()) : b = a, d + ':' + b;
  }
  function vb(a) {
    e(a, this.put, this);
  }
  function wb() {
  }
  function xb(a) {
    var b, c, d, f;
    return 'function' == typeof a ? (b = a.$inject) || (b = [], c = a.toString().replace(rd, ''), d = c.match(od), e(d[1].split(pd), function (a) {
      a.replace(qd, function (a, c, d) {
        b.push(d);
      });
    }), a.$inject = b) : w(a) ? (f = a.length - 1, _(a[f], 'fn'), b = a.slice(0, f)) : _(a, 'fn', !0), b;
  }
  function yb(a) {
    function b(a) {
      return function (b, c) {
        return s(b) ? (e(b, h(a)), void 0) : a(b, c);
      };
    }
    function c(a, b) {
      if ((x(b) || w(b)) && (b = v.instantiate(b)), !b.$get)
        throw Error('Provider ' + a + ' must define $get factory method.');
      return u[a + o] = b;
    }
    function d(a, b) {
      return c(a, { $get: b });
    }
    function f(a, b) {
      return d(a, [
        '$injector',
        function (a) {
          return a.instantiate(b);
        }
      ]);
    }
    function g(a, b) {
      return d(a, p(b));
    }
    function i(a, b) {
      u[a] = b, y[a] = b;
    }
    function j(a, b) {
      var c = v.get(a + o), d = c.$get;
      c.$get = function () {
        var a = z.invoke(d, c);
        return z.invoke(b, null, { $delegate: a });
      };
    }
    function k(a) {
      var b = [];
      return e(a, function (a) {
        if (!r.get(a))
          if (r.put(a, !0), t(a)) {
            var c = Wc(a);
            b = b.concat(k(c.requires)).concat(c._runBlocks);
            try {
              for (var d = c._invokeQueue, e = 0, f = d.length; f > e; e++) {
                var g = d[e], h = '$injector' == g[0] ? v : v.get(g[0]);
                h[g[1]].apply(h, g[2]);
              }
            } catch (i) {
              throw i.message && (i.message += ' from ' + a), i;
            }
          } else if (x(a))
            try {
              b.push(v.invoke(a));
            } catch (i) {
              throw i.message && (i.message += ' from ' + a), i;
            }
          else if (w(a))
            try {
              b.push(v.invoke(a));
            } catch (i) {
              throw i.message && (i.message += ' from ' + String(a[a.length - 1])), i;
            }
          else
            _(a, 'module');
      }), b;
    }
    function l(a, b) {
      function c(c) {
        if ('string' != typeof c)
          throw Error('Service name expected');
        if (a.hasOwnProperty(c)) {
          if (a[c] === m)
            throw Error('Circular dependency: ' + q.join(' <- '));
          return a[c];
        }
        try {
          return q.unshift(c), a[c] = m, a[c] = b(c);
        } finally {
          q.shift();
        }
      }
      function d(a, b, d) {
        var e, f, g, h = [], i = xb(a);
        for (f = 0, e = i.length; e > f; f++)
          g = i[f], h.push(d && d.hasOwnProperty(g) ? d[g] : c(g));
        switch (a.$inject || (a = a[e]), b ? -1 : h.length) {
        case 0:
          return a();
        case 1:
          return a(h[0]);
        case 2:
          return a(h[0], h[1]);
        case 3:
          return a(h[0], h[1], h[2]);
        case 4:
          return a(h[0], h[1], h[2], h[3]);
        case 5:
          return a(h[0], h[1], h[2], h[3], h[4]);
        case 6:
          return a(h[0], h[1], h[2], h[3], h[4], h[5]);
        case 7:
          return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6]);
        case 8:
          return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]);
        case 9:
          return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8]);
        case 10:
          return a(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9]);
        default:
          return a.apply(b, h);
        }
      }
      function e(a, b) {
        var c, e, f = function () {
          };
        return f.prototype = (w(a) ? a[a.length - 1] : a).prototype, c = new f(), e = d(a, c, b), s(e) ? e : c;
      }
      return {
        invoke: d,
        instantiate: e,
        get: c,
        annotate: xb
      };
    }
    var m = {}, o = 'Provider', q = [], r = new vb(), u = {
        $provide: {
          provider: b(c),
          factory: b(d),
          service: b(f),
          value: b(g),
          constant: b(i),
          decorator: j
        }
      }, v = l(u, function () {
        throw Error('Unknown provider: ' + q.join(' <- '));
      }), y = {}, z = y.$injector = l(y, function (a) {
        var b = v.get(a + o);
        return z.invoke(b.$get, b);
      });
    return e(k(a), function (a) {
      z.invoke(a || n);
    }), z;
  }
  function zb() {
    var a = !0;
    this.disableAutoScrolling = function () {
      a = !1;
    }, this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (b, c, d) {
        function f(a) {
          var b = null;
          return e(a, function (a) {
            b || 'a' !== Qc(a.nodeName) || (b = a);
          }), b;
        }
        function g() {
          var a, d = c.hash();
          d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = f(h.getElementsByName(d))) ? a.scrollIntoView() : 'top' === d && b.scrollTo(0, 0) : b.scrollTo(0, 0);
        }
        var h = b.document;
        return a && d.$watch(function () {
          return c.hash();
        }, function () {
          d.$evalAsync(g);
        }), g;
      }
    ];
  }
  function Ab(a, b, d, f) {
    function g(a) {
      try {
        a.apply(null, L(arguments, 1));
      } finally {
        if (s--, 0 === s)
          for (; u.length;)
            try {
              u.pop()();
            } catch (b) {
              d.error(b);
            }
      }
    }
    function h(a, b) {
      !function c() {
        e(w, function (a) {
          a();
        }), v = b(c, a);
      }();
    }
    function i() {
      x != j.url() && (x = j.url(), e(z, function (a) {
        a(j.url());
      }));
    }
    var j = this, k = b[0], l = a.location, m = a.history, o = a.setTimeout, p = a.clearTimeout, r = {};
    j.isMock = !1;
    var s = 0, u = [];
    j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function () {
      s++;
    }, j.notifyWhenNoOutstandingRequests = function (a) {
      e(w, function (a) {
        a();
      }), 0 === s ? a() : u.push(a);
    };
    var v, w = [];
    j.addPollFn = function (a) {
      return q(v) && h(100, o), w.push(a), a;
    };
    var x = l.href, y = b.find('base');
    j.url = function (a, b) {
      if (a) {
        if (x == a)
          return;
        return x = a, f.history ? b ? m.replaceState(null, '', a) : (m.pushState(null, '', a), y.attr('href', y.attr('href'))) : b ? l.replace(a) : l.href = a, j;
      }
      return l.href.replace(/%27/g, '\'');
    };
    var z = [], A = !1;
    j.onUrlChange = function (b) {
      return A || (f.history && Uc(a).bind('popstate', i), f.hashchange ? Uc(a).bind('hashchange', i) : j.addPollFn(i), A = !0), z.push(b), b;
    }, j.baseHref = function () {
      var a = y.attr('href');
      return a ? a.replace(/^https?\:\/\/[^\/]*/, '') : '';
    };
    var B = {}, C = '', D = j.baseHref();
    j.cookies = function (a, b) {
      var e, f, g, h, i;
      if (!a) {
        if (k.cookie !== C)
          for (C = k.cookie, f = C.split('; '), B = {}, h = 0; h < f.length; h++)
            if (g = f[h], i = g.indexOf('='), i > 0) {
              var a = unescape(g.substring(0, i));
              B[a] === c && (B[a] = unescape(g.substring(i + 1)));
            }
        return B;
      }
      b === c ? k.cookie = escape(a) + '=;path=' + D + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : t(b) && (e = (k.cookie = escape(a) + '=' + escape(b) + ';path=' + D).length + 1, e > 4096 && d.warn('Cookie \'' + a + '\' possibly not set or overflowed because it was too large (' + e + ' > 4096 bytes)!'));
    }, j.defer = function (a, b) {
      var c;
      return s++, c = o(function () {
        delete r[c], g(a);
      }, b || 0), r[c] = !0, c;
    }, j.defer.cancel = function (a) {
      return r[a] ? (delete r[a], p(a), g(n), !0) : !1;
    };
  }
  function Bb() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (a, b, c, d) {
        return new Ab(a, d, b, c);
      }
    ];
  }
  function Cb() {
    this.$get = function () {
      function a(a, c) {
        function d(a) {
          a != l && (m ? m == a && (m = a.n) : m = a, e(a.n, a.p), e(a, l), l = a, l.n = null);
        }
        function e(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }
        if (a in b)
          throw Error('cacheId ' + a + ' taken');
        var f = 0, g = k({}, c, { id: a }), h = {}, i = c && c.capacity || Number.MAX_VALUE, j = {}, l = null, m = null;
        return b[a] = {
          put: function (a, b) {
            var c = j[a] || (j[a] = { key: a });
            d(c), q(b) || (a in h || f++, h[a] = b, f > i && this.remove(m.key));
          },
          get: function (a) {
            var b = j[a];
            return b ? (d(b), h[a]) : void 0;
          },
          remove: function (a) {
            var b = j[a];
            b && (b == l && (l = b.p), b == m && (m = b.n), e(b.n, b.p), delete j[a], delete h[a], f--);
          },
          removeAll: function () {
            h = {}, f = 0, j = {}, l = m = null;
          },
          destroy: function () {
            h = null, g = null, j = null, delete b[a];
          },
          info: function () {
            return k({}, g, { size: f });
          }
        };
      }
      var b = {};
      return a.info = function () {
        var a = {};
        return e(b, function (b, c) {
          a[c] = b.info();
        }), a;
      }, a.get = function (a) {
        return b[a];
      }, a;
    };
  }
  function Db() {
    this.$get = [
      '$cacheFactory',
      function (a) {
        return a('templates');
      }
    ];
  }
  function Eb(a) {
    var d = {}, f = 'Directive', g = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, i = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, j = 'Template must have exactly one root element. was: ', l = /^\s*(https?|ftp|mailto|file):/;
    this.directive = function m(b, c) {
      return t(b) ? ($(c, 'directive'), d.hasOwnProperty(b) || (d[b] = [], a.factory(b + f, [
        '$injector',
        '$exceptionHandler',
        function (a, c) {
          var f = [];
          return e(d[b], function (d) {
            try {
              var e = a.invoke(d);
              x(e) ? e = { compile: p(e) } : !e.compile && e.link && (e.compile = p(e.link)), e.priority = e.priority || 0, e.name = e.name || b, e.require = e.require || e.controller && e.name, e.restrict = e.restrict || 'A', f.push(e);
            } catch (g) {
              c(g);
            }
          }), f;
        }
      ])), d[b].push(c)) : e(b, h(m)), this;
    }, this.urlSanitizationWhitelist = function (a) {
      return r(a) ? (l = a, this) : l;
    }, this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$http',
      '$templateCache',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      function (a, h, m, n, q, r, u, v, y) {
        function z(a, b, c) {
          a instanceof Uc || (a = Uc(a)), e(a, function (b, c) {
            3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = Uc(b).wrap('<span></span>').parent()[0]);
          });
          var d = C(a, b, a, c);
          return function (b, c) {
            $(b, 'scope');
            for (var e = c ? ld.clone.call(a) : a, f = 0, g = e.length; g > f; f++) {
              var h = e[f];
              (1 == h.nodeType || 9 == h.nodeType) && e.eq(f).data('$scope', b);
            }
            return A(e, 'ng-scope'), c && c(e, b), d && d(b, e, e), e;
          };
        }
        function A(a, b) {
          try {
            a.addClass(b);
          } catch (c) {
          }
        }
        function C(a, b, d, e) {
          function f(a, d, e, f) {
            var g, h, i, j, k, m, n, o, p = [];
            for (m = 0, n = d.length; n > m; m++)
              p.push(d[m]);
            for (m = 0, o = 0, n = l.length; n > m; o++)
              i = p[o], g = l[m++], h = l[m++], g ? (g.scope ? (j = a.$new(s(g.scope)), Uc(i).data('$scope', j)) : j = a, k = g.transclude, k || !f && b ? g(h, j, i, e, function (b) {
                return function (c) {
                  var d = a.$new();
                  return d.$$transcluded = !0, b(d, c).bind('$destroy', M(d, d.$destroy));
                };
              }(k || b)) : g(h, j, i, c, f)) : h && h(a, i.childNodes, c, f);
          }
          for (var g, h, i, j, k, l = [], m = 0; m < a.length; m++)
            j = new P(), i = D(a[m], [], j, e), g = i.length ? E(i, a[m], j, b, d) : null, h = g && g.terminal || !a[m].childNodes || !a[m].childNodes.length ? null : C(a[m].childNodes, g ? g.transclude : b), l.push(g), l.push(h), k = k || g || h;
          return k ? f : null;
        }
        function D(a, b, c, d) {
          var e, f, h = a.nodeType, j = c.$attr;
          switch (h) {
          case 1:
            F(b, Fb(Xc(a).toLowerCase()), 'E', d);
            for (var k, l, m, n, o = a.attributes, p = 0, q = o && o.length; q > p; p++)
              k = o[p], k.specified && (l = k.name, m = Fb(l.toLowerCase()), j[m] = l, c[m] = n = B(Yc && 'href' == l ? decodeURIComponent(a.getAttribute(l, 2)) : k.value), sb(a, m) && (c[m] = !0), N(a, b, n, m), F(b, m, 'A', d));
            if (f = a.className, t(f) && '' !== f)
              for (; e = i.exec(f);)
                m = Fb(e[2]), F(b, m, 'C', d) && (c[m] = B(e[3])), f = f.substr(e.index + e[0].length);
            break;
          case 3:
            L(b, a.nodeValue);
            break;
          case 8:
            try {
              e = g.exec(a.nodeValue), e && (m = Fb(e[1]), F(b, m, 'M', d) && (c[m] = B(e[2])));
            } catch (r) {
            }
          }
          return b.sort(J), b;
        }
        function E(a, d, f, g, h) {
          function i(a, b) {
            a && (a.require = n.require, F.push(a)), b && (b.require = n.require, J.push(b));
          }
          function k(a, b) {
            var c, d = 'data', f = !1;
            if (t(a)) {
              for (; '^' == (c = a.charAt(0)) || '?' == c;)
                a = a.substr(1), '^' == c && (d = 'inheritedData'), f = f || '?' == c;
              if (c = b[d]('$' + a + 'Controller'), !c && !f)
                throw Error('No controller: ' + a);
              return c;
            }
            return w(a) && (c = [], e(a, function (a) {
              c.push(k(a, b));
            })), c;
          }
          function l(a, b, g, h, i) {
            var j, l, n, o, p, q;
            if (j = d === g ? f : I(f, new P(Uc(g), f.$attr)), l = j.$$element, M) {
              var s = /^\s*([@=&])\s*(\w*)\s*$/, t = b.$parent || b;
              e(M.scope, function (a, c) {
                var d, e, f, g = a.match(s) || [], h = g[2] || c, i = g[1];
                switch (b.$$isolateBindings[c] = i + h, i) {
                case '@':
                  j.$observe(h, function (a) {
                    b[c] = a;
                  }), j.$$observers[h].$$scope = t;
                  break;
                case '=':
                  e = r(j[h]), f = e.assign || function () {
                    throw d = b[c] = e(t), Error(sd + j[h] + ' (directive: ' + M.name + ')');
                  }, d = b[c] = e(t), b.$watch(function () {
                    var a = e(t);
                    return a !== b[c] && (a !== d ? d = b[c] = a : f(t, a = d = b[c])), a;
                  });
                  break;
                case '&':
                  e = r(j[h]), b[c] = function (a) {
                    return e(t, a);
                  };
                  break;
                default:
                  throw Error('Invalid isolate scope definition for directive ' + M.name + ': ' + a);
                }
              });
            }
            for (v && e(v, function (a) {
                var c = {
                    $scope: b,
                    $element: l,
                    $attrs: j,
                    $transclude: i
                  };
                q = a.controller, '@' == q && (q = j[a.name]), l.data('$' + a.name + 'Controller', u(q, c));
              }), n = 0, o = F.length; o > n; n++)
              try {
                p = F[n], p(b, l, j, p.require && k(p.require, l));
              } catch (w) {
                m(w, R(l));
              }
            for (a && a(b, g.childNodes, c, i), n = 0, o = J.length; o > n; n++)
              try {
                p = J[n], p(b, l, j, p.require && k(p.require, l));
              } catch (w) {
                m(w, R(l));
              }
          }
          for (var n, o, p, q, v, y, C, E = -Number.MAX_VALUE, F = [], J = [], L = null, M = null, N = null, Q = f.$$element = Uc(d), S = g, T = 0, V = a.length; V > T && (n = a[T], p = c, !(E > n.priority)); T++) {
            if ((C = n.scope) && (K('isolated scope', M, n, Q), s(C) && (A(Q, 'ng-isolate-scope'), M = n), A(Q, 'ng-scope'), L = L || n), o = n.name, (C = n.controller) && (v = v || {}, K('\'' + o + '\' controller', v[o], n, Q), v[o] = n), (C = n.transclude) && (K('transclusion', q, n, Q), q = n, E = n.priority, 'element' == C ? (p = Uc(d), Q = f.$$element = Uc(b.createComment(' ' + o + ': ' + f[o] + ' ')), d = Q[0], O(h, Uc(p[0]), d), S = z(p, g, E)) : (p = Uc(gb(d)).contents(), Q.html(''), S = z(p, g))), C = n.template)
              if (K('template', N, n, Q), N = n, C = U(C), n.replace) {
                if (p = Uc('<div>' + B(C) + '</div>').contents(), d = p[0], 1 != p.length || 1 !== d.nodeType)
                  throw new Error(j + C);
                O(h, Q, d);
                var W = { $attr: {} };
                a = a.concat(D(d, a.splice(T + 1, a.length - (T + 1)), W)), G(f, W), V = a.length;
              } else
                Q.html(C);
            if (n.templateUrl)
              K('template', N, n, Q), N = n, l = H(a.splice(T, a.length - T), l, Q, f, h, n.replace, S), V = a.length;
            else if (n.compile)
              try {
                y = n.compile(Q, f, S), x(y) ? i(null, y) : y && i(y.pre, y.post);
              } catch (X) {
                m(X, R(Q));
              }
            n.terminal && (l.terminal = !0, E = Math.max(E, n.priority));
          }
          return l.scope = L && L.scope, l.transclude = q && S, l;
        }
        function F(b, e, g, h) {
          var i = !1;
          if (d.hasOwnProperty(e))
            for (var j, k = a.get(e + f), l = 0, n = k.length; n > l; l++)
              try {
                j = k[l], (h === c || h > j.priority) && -1 != j.restrict.indexOf(g) && (b.push(j), i = !0);
              } catch (o) {
                m(o);
              }
          return i;
        }
        function G(a, b) {
          var c = b.$attr, d = a.$attr, f = a.$$element;
          e(a, function (d, e) {
            '$' != e.charAt(0) && (b[e] && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]));
          }), e(b, function (b, e) {
            'class' == e ? (A(f, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b) : 'style' == e ? f.attr('style', f.attr('style') + ';' + b) : '$' == e.charAt(0) || a.hasOwnProperty(e) || (a[e] = b, d[e] = c[e]);
          });
        }
        function H(a, b, c, d, e, f, g) {
          var h, i, l = [], m = c[0], o = a.shift(), p = k({}, o, {
              controller: null,
              templateUrl: null,
              transclude: null,
              scope: null
            });
          return c.html(''), n.get(o.templateUrl, { cache: q }).success(function (k) {
            var n, o, q;
            if (k = U(k), f) {
              if (q = Uc('<div>' + B(k) + '</div>').contents(), n = q[0], 1 != q.length || 1 !== n.nodeType)
                throw new Error(j + k);
              o = { $attr: {} }, O(e, c, n), D(n, a, o), G(d, o);
            } else
              n = m, c.html(k);
            for (a.unshift(p), h = E(a, n, d, g), i = C(c[0].childNodes, g); l.length;) {
              var r = l.pop(), s = l.pop(), t = l.pop(), u = l.pop(), v = n;
              t !== m && (v = gb(n), O(s, Uc(t), v)), h(function () {
                b(i, u, v, e, r);
              }, u, v, e, r);
            }
            l = null;
          }).error(function (a, b, c, d) {
            throw Error('Failed to load template: ' + d.url);
          }), function (a, c, d, e, f) {
            l ? (l.push(c), l.push(d), l.push(e), l.push(f)) : h(function () {
              b(i, c, d, e, f);
            }, c, d, e, f);
          };
        }
        function J(a, b) {
          return b.priority - a.priority;
        }
        function K(a, b, c, d) {
          if (b)
            throw Error('Multiple directives [' + b.name + ', ' + c.name + '] asking for ' + a + ' on: ' + R(d));
        }
        function L(a, b) {
          var c = h(b, !0);
          c && a.push({
            priority: 0,
            compile: p(function (a, b) {
              var d = b.parent(), e = d.data('$binding') || [];
              e.push(c), A(d.data('$binding', e), 'ng-binding'), a.$watch(c, function (a) {
                b[0].nodeValue = a;
              });
            })
          });
        }
        function N(a, b, d, e) {
          var f = h(d, !0);
          f && b.push({
            priority: 100,
            compile: p(function (a, b, d) {
              var g = d.$$observers || (d.$$observers = {});
              'class' === e && (f = h(d[e], !0)), d[e] = c, (g[e] || (g[e] = [])).$$inter = !0, (d.$$observers && d.$$observers[e].$$scope || a).$watch(f, function (a) {
                d.$set(e, a);
              });
            })
          });
        }
        function O(a, b, c) {
          var d, e, f = b[0], g = f.parentNode;
          if (a)
            for (d = 0, e = a.length; e > d; d++)
              if (a[d] == f) {
                a[d] = c;
                break;
              }
          g && g.replaceChild(c, f), c[Uc.expando] = f[Uc.expando], b[0] = c;
        }
        var P = function (a, b) {
          this.$$element = a, this.$attr = b || {};
        };
        P.prototype = {
          $normalize: Fb,
          $set: function (a, b, d, f) {
            var g, h = sb(this.$$element[0], a), i = this.$$observers;
            h && (this.$$element.prop(a, b), f = h), this[a] = b, f ? this.$attr[a] = f : (f = this.$attr[a], f || (this.$attr[a] = f = Y(a, '-'))), 'A' === Xc(this.$$element[0]) && 'href' === a && (Q.setAttribute('href', b), g = Q.href, g.match(l) || (this[a] = b = 'unsafe:' + g)), d !== !1 && (null === b || b === c ? this.$$element.removeAttr(f) : this.$$element.attr(f, b)), i && e(i[a], function (a) {
              try {
                a(b);
              } catch (c) {
                m(c);
              }
            });
          },
          $observe: function (a, b) {
            var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
            return e.push(b), v.$evalAsync(function () {
              e.$$inter || b(c[a]);
            }), b;
          }
        };
        var Q = y[0].createElement('a'), S = h.startSymbol(), T = h.endSymbol(), U = '{{' == S || '}}' == T ? o : function (a) {
            return a.replace(/\{\{/g, S).replace(/}}/g, T);
          };
        return z;
      }
    ];
  }
  function Fb(a) {
    return db(a.replace(td, ''));
  }
  function Gb() {
    var a = {};
    this.register = function (b, c) {
      s(b) ? k(a, b) : a[b] = c;
    }, this.$get = [
      '$injector',
      '$window',
      function (b, c) {
        return function (d, e) {
          if (t(d)) {
            var f = d;
            d = a.hasOwnProperty(f) ? a[f] : $b(e.$scope, f, !0) || $b(c, f, !0), _(d, f, !0);
          }
          return b.instantiate(d, e);
        };
      }
    ];
  }
  function Hb() {
    this.$get = [
      '$window',
      function (a) {
        return Uc(a.document);
      }
    ];
  }
  function Ib() {
    this.$get = [
      '$log',
      function (a) {
        return function () {
          a.error.apply(a, arguments);
        };
      }
    ];
  }
  function Jb() {
    var a = '{{', b = '}}';
    this.startSymbol = function (b) {
      return b ? (a = b, this) : a;
    }, this.endSymbol = function (a) {
      return a ? (b = a, this) : b;
    }, this.$get = [
      '$parse',
      function (d) {
        function e(e, h) {
          for (var i, j, k, l, m = 0, n = [], o = e.length, p = !1, q = []; o > m;)
            -1 != (i = e.indexOf(a, m)) && -1 != (j = e.indexOf(b, i + f)) ? (m != i && n.push(e.substring(m, i)), n.push(k = d(l = e.substring(i + f, j))), k.exp = l, m = j + g, p = !0) : (m != o && n.push(e.substring(m)), m = o);
          return (o = n.length) || (n.push(''), o = 1), !h || p ? (q.length = o, k = function (a) {
            for (var b, d = 0, e = o; e > d; d++)
              'function' == typeof (b = n[d]) && (b = b(a), null == b || b == c ? b = '' : 'string' != typeof b && (b = O(b))), q[d] = b;
            return q.join('');
          }, k.exp = e, k.parts = n, k) : void 0;
        }
        var f = a.length, g = b.length;
        return e.startSymbol = function () {
          return a;
        }, e.endSymbol = function () {
          return b;
        }, e;
      }
    ];
  }
  function Kb(a) {
    for (var b = a.split('/'), c = b.length; c--;)
      b[c] = U(b[c]);
    return b.join('/');
  }
  function Lb(a, b) {
    var c = ud.exec(a);
    return c = {
      protocol: c[1],
      host: c[3],
      port: l(c[5]) || xd[c[1]] || null,
      path: c[6] || '/',
      search: c[8],
      hash: c[10]
    }, b && (b.$$protocol = c.protocol, b.$$host = c.host, b.$$port = c.port), c;
  }
  function Mb(a, b, c) {
    return a + '://' + b + (c == xd[a] ? '' : ':' + c);
  }
  function Nb(a) {
    return a.substr(0, a.lastIndexOf('/'));
  }
  function Ob(a, b, c) {
    var d = Lb(a);
    return decodeURIComponent(d.path) != b || q(d.hash) || 0 !== d.hash.indexOf(c) ? a : Mb(d.protocol, d.host, d.port) + Nb(b) + d.hash.substr(c.length);
  }
  function Pb(a, b, c) {
    var d = Lb(a);
    if (decodeURIComponent(d.path) != b || q(d.hash) || 0 !== d.hash.indexOf(c)) {
      var e = d.search && '?' + d.search || '', f = d.hash && '#' + d.hash || '', g = Nb(b), h = d.path.substr(g.length);
      if (0 !== d.path.indexOf(g))
        throw Error('Invalid url "' + a + '", missing path prefix "' + g + '" !');
      return Mb(d.protocol, d.host, d.port) + b + '#' + c + h + e + f;
    }
    return a;
  }
  function Qb(a, b, c) {
    b = b || '', this.$$parse = function (a) {
      var c = Lb(a, this);
      if (0 !== c.path.indexOf(b))
        throw Error('Invalid url "' + a + '", missing path prefix "' + b + '" !');
      this.$$path = decodeURIComponent(c.path.substr(b.length)), this.$$search = S(c.search), this.$$hash = c.hash && decodeURIComponent(c.hash) || '', this.$$compose();
    }, this.$$compose = function () {
      var a = T(this.$$search), c = this.$$hash ? '#' + U(this.$$hash) : '';
      this.$$url = Kb(this.$$path) + (a ? '?' + a : '') + c, this.$$absUrl = Mb(this.$$protocol, this.$$host, this.$$port) + b + this.$$url;
    }, this.$$rewriteAppUrl = function (a) {
      return 0 == a.indexOf(c) ? a : void 0;
    }, this.$$parse(a);
  }
  function Rb(a, b, c) {
    var d;
    this.$$parse = function (a) {
      var c = Lb(a, this);
      if (c.hash && 0 !== c.hash.indexOf(b))
        throw Error('Invalid url "' + a + '", missing hash prefix "' + b + '" !');
      d = c.path + (c.search ? '?' + c.search : ''), c = wd.exec((c.hash || '').substr(b.length)), this.$$path = c[1] ? ('/' == c[1].charAt(0) ? '' : '/') + decodeURIComponent(c[1]) : '', this.$$search = S(c[3]), this.$$hash = c[5] && decodeURIComponent(c[5]) || '', this.$$compose();
    }, this.$$compose = function () {
      var a = T(this.$$search), c = this.$$hash ? '#' + U(this.$$hash) : '';
      this.$$url = Kb(this.$$path) + (a ? '?' + a : '') + c, this.$$absUrl = Mb(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? '#' + b + this.$$url : '');
    }, this.$$rewriteAppUrl = function (a) {
      return 0 == a.indexOf(c) ? a : void 0;
    }, this.$$parse(a);
  }
  function Sb(a, b, c, d) {
    Rb.apply(this, arguments), this.$$rewriteAppUrl = function (a) {
      return 0 == a.indexOf(c) ? c + d + '#' + b + a.substr(c.length) : void 0;
    };
  }
  function Tb(a) {
    return function () {
      return this[a];
    };
  }
  function Ub(a, b) {
    return function (c) {
      return q(c) ? this[a] : (this[a] = b(c), this.$$compose(), this);
    };
  }
  function Vb() {
    var b = '', c = !1;
    this.hashPrefix = function (a) {
      return r(a) ? (b = a, this) : b;
    }, this.html5Mode = function (a) {
      return r(a) ? (c = a, this) : c;
    }, this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function (d, e, f, g) {
        function h(a) {
          d.$broadcast('$locationChangeSuccess', i.absUrl(), a);
        }
        var i, j, k, l, m = e.url(), n = Lb(m);
        c ? (j = e.baseHref() || '/', k = Nb(j), l = Mb(n.protocol, n.host, n.port) + k + '/', i = f.history ? new Qb(Ob(m, j, b), k, l) : new Sb(Pb(m, j, b), b, l, j.substr(k.length + 1))) : (l = Mb(n.protocol, n.host, n.port) + (n.path || '') + (n.search ? '?' + n.search : '') + '#' + b + '/', i = new Rb(m, b, l)), g.bind('click', function (b) {
          if (!b.ctrlKey && !b.metaKey && 2 != b.which) {
            for (var c = Uc(b.target); 'a' !== Qc(c[0].nodeName);)
              if (c[0] === g[0] || !(c = c.parent())[0])
                return;
            var e = c.prop('href'), f = i.$$rewriteAppUrl(e);
            e && !c.attr('target') && f && (i.$$parse(f), d.$apply(), b.preventDefault(), a.angular['ff-684208-preventDefault'] = !0);
          }
        }), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function (a) {
          if (i.absUrl() != a) {
            if (d.$broadcast('$locationChangeStart', a, i.absUrl()).defaultPrevented)
              return e.url(i.absUrl()), void 0;
            d.$evalAsync(function () {
              var b = i.absUrl();
              i.$$parse(a), h(b);
            }), d.$$phase || d.$digest();
          }
        });
        var o = 0;
        return d.$watch(function () {
          var a = e.url(), b = i.$$replace;
          return o && a == i.absUrl() || (o++, d.$evalAsync(function () {
            d.$broadcast('$locationChangeStart', i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), h(a));
          })), i.$$replace = !1, o;
        }), i;
      }
    ];
  }
  function Wb() {
    this.$get = [
      '$window',
      function (a) {
        function b(a) {
          return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line)), a;
        }
        function c(c) {
          var d = a.console || {}, f = d[c] || d.log || n;
          return f.apply ? function () {
            var a = [];
            return e(arguments, function (c) {
              a.push(b(c));
            }), f.apply(d, a);
          } : function (a, b) {
            f(a, b);
          };
        }
        return {
          log: c('log'),
          warn: c('warn'),
          info: c('info'),
          error: c('error')
        };
      }
    ];
  }
  function Xb(a, b) {
    function c(a) {
      return -1 != a.indexOf(p);
    }
    function d(a) {
      return -1 != a.indexOf(u);
    }
    function e() {
      return s + 1 < a.length ? a.charAt(s + 1) : !1;
    }
    function f(a) {
      return a >= '0' && '9' >= a;
    }
    function g(a) {
      return ' ' == a || '\r' == a || '\t' == a || '\n' == a || '\x0B' == a || '\xa0' == a;
    }
    function h(a) {
      return a >= 'a' && 'z' >= a || a >= 'A' && 'Z' >= a || '_' == a || '$' == a;
    }
    function i(a) {
      return '-' == a || '+' == a || f(a);
    }
    function j(b, c, d) {
      throw d = d || s, Error('Lexer Error: ' + b + ' at column' + (r(c) ? 's ' + c + '-' + s + ' [' + a.substring(c, d) + ']' : ' ' + d) + ' in expression [' + a + '].');
    }
    function l() {
      for (var b = '', c = s; s < a.length;) {
        var d = Qc(a.charAt(s));
        if ('.' == d || f(d))
          b += d;
        else {
          var g = e();
          if ('e' == d && i(g))
            b += d;
          else if (i(d) && g && f(g) && 'e' == b.charAt(b.length - 1))
            b += d;
          else {
            if (!i(d) || g && f(g) || 'e' != b.charAt(b.length - 1))
              break;
            j('Invalid exponent');
          }
        }
        s++;
      }
      b = 1 * b, q.push({
        index: c,
        text: b,
        json: !0,
        fn: function () {
          return b;
        }
      });
    }
    function m() {
      for (var c, d, e, i, j = '', l = s; s < a.length && (i = a.charAt(s), '.' == i || h(i) || f(i));)
        '.' == i && (c = s), j += i, s++;
      if (c)
        for (d = s; d < a.length;) {
          if (i = a.charAt(d), '(' == i) {
            e = j.substr(c - l + 1), j = j.substr(0, c - l), s = d;
            break;
          }
          if (!g(i))
            break;
          d++;
        }
      var m = {
          index: l,
          text: j
        };
      if (yd.hasOwnProperty(j))
        m.fn = m.json = yd[j];
      else {
        var n = ac(j, b);
        m.fn = k(function (a, b) {
          return n(a, b);
        }, {
          assign: function (a, b) {
            return Zb(a, j, b);
          }
        });
      }
      q.push(m), e && (q.push({
        index: c,
        text: '.',
        json: !1
      }), q.push({
        index: c + 1,
        text: e,
        json: !1
      }));
    }
    function n(b) {
      var c = s;
      s++;
      for (var d = '', e = b, f = !1; s < a.length;) {
        var g = a.charAt(s);
        if (e += g, f) {
          if ('u' == g) {
            var h = a.substring(s + 1, s + 5);
            h.match(/[\da-f]{4}/i) || j('Invalid unicode escape [\\u' + h + ']'), s += 4, d += String.fromCharCode(parseInt(h, 16));
          } else {
            var i = zd[g];
            d += i ? i : g;
          }
          f = !1;
        } else if ('\\' == g)
          f = !0;
        else {
          if (g == b)
            return s++, q.push({
              index: c,
              text: e,
              string: d,
              json: !0,
              fn: function () {
                return d;
              }
            }), void 0;
          d += g;
        }
        s++;
      }
      j('Unterminated quote', c);
    }
    for (var o, p, q = [], s = 0, t = [], u = ':'; s < a.length;) {
      if (p = a.charAt(s), c('"\''))
        n(p);
      else if (f(p) || c('.') && f(e()))
        l();
      else if (h(p))
        m(), d('{,') && '{' == t[0] && (o = q[q.length - 1]) && (o.json = -1 == o.text.indexOf('.'));
      else if (c('(){}[].,;:'))
        q.push({
          index: s,
          text: p,
          json: d(':[,') && c('{[') || c('}]:,')
        }), c('{[') && t.unshift(p), c('}]') && t.shift(), s++;
      else {
        if (g(p)) {
          s++;
          continue;
        }
        var v = p + e(), w = yd[p], x = yd[v];
        x ? (q.push({
          index: s,
          text: v,
          fn: x
        }), s += 2) : w ? (q.push({
          index: s,
          text: p,
          fn: w,
          json: d('[,:') && c('+-')
        }), s += 1) : j('Unexpected next character ', s, s + 1);
      }
      u = p;
    }
    return q;
  }
  function Yb(a, b, d, e) {
    function f(b, c) {
      throw Error('Syntax Error: Token \'' + c.text + '\' ' + b + ' at column ' + (c.index + 1) + ' of the expression [' + a + '] starting at [' + a.substring(c.index) + '].');
    }
    function g() {
      if (0 === J.length)
        throw Error('Unexpected end of expression: ' + a);
      return J[0];
    }
    function h(a, b, c, d) {
      if (J.length > 0) {
        var e = J[0], f = e.text;
        if (f == a || f == b || f == c || f == d || !a && !b && !c && !d)
          return e;
      }
      return !1;
    }
    function i(a, c, d, e) {
      var g = h(a, c, d, e);
      return g ? (b && !g.json && f('is not valid json', g), J.shift(), g) : !1;
    }
    function j(a) {
      i(a) || f('is unexpected, expecting [' + a + ']', h());
    }
    function l(a, b) {
      return function (c, d) {
        return a(c, d, b);
      };
    }
    function m(a, b, c) {
      return function (d, e) {
        return b(d, e, a, c);
      };
    }
    function o() {
      for (var a = [];;)
        if (J.length > 0 && !h('}', ')', ';', ']') && a.push(O()), !i(';'))
          return 1 == a.length ? a[0] : function (b, c) {
            for (var d, e = 0; e < a.length; e++) {
              var f = a[e];
              f && (d = f(b, c));
            }
            return d;
          };
    }
    function q() {
      for (var a, b = s();;) {
        if (!(a = i('|')))
          return b;
        b = m(b, a.fn, r());
      }
    }
    function r() {
      for (var a = i(), b = d(a.text), c = [];;) {
        if (!(a = i(':'))) {
          var e = function (a, d, e) {
            for (var f = [e], g = 0; g < c.length; g++)
              f.push(c[g](a, d));
            return b.apply(a, f);
          };
          return function () {
            return e;
          };
        }
        c.push(s());
      }
    }
    function s() {
      return K();
    }
    function t() {
      var b, c, d = u();
      return (c = i('=')) ? (d.assign || f('implies assignment but [' + a.substring(0, c.index) + '] can not be assigned to', c), b = u(), function (a, c) {
        return d.assign(a, b(a, c), c);
      }) : d;
    }
    function u() {
      for (var a, b = v();;) {
        if (!(a = i('||')))
          return b;
        b = m(b, a.fn, v());
      }
    }
    function v() {
      var a, b = w();
      return (a = i('&&')) && (b = m(b, a.fn, v())), b;
    }
    function w() {
      var a, b = x();
      return (a = i('==', '!=')) && (b = m(b, a.fn, w())), b;
    }
    function x() {
      var a, b = y();
      return (a = i('<', '>', '<=', '>=')) && (b = m(b, a.fn, x())), b;
    }
    function y() {
      for (var a, b = z(); a = i('+', '-');)
        b = m(b, a.fn, z());
      return b;
    }
    function z() {
      for (var a, b = A(); a = i('*', '/', '%');)
        b = m(b, a.fn, A());
      return b;
    }
    function A() {
      var a;
      return i('+') ? B() : (a = i('-')) ? m(I, a.fn, A()) : (a = i('!')) ? l(a.fn, A()) : B();
    }
    function B() {
      var a;
      if (i('('))
        a = O(), j(')');
      else if (i('['))
        a = F();
      else if (i('{'))
        a = G();
      else {
        var b = i();
        a = b.fn, a || f('not a primary expression', b);
      }
      for (var c, d; c = i('(', '[', '.');)
        '(' === c.text ? (a = L(a, d), d = null) : '[' === c.text ? (d = a, a = N(a)) : '.' === c.text ? (d = a, a = M(a)) : f('IMPOSSIBLE');
      return a;
    }
    function C(a) {
      var b = i().text, c = ac(b, e);
      return k(function (b, d, e) {
        return c(e || a(b, d), d);
      }, {
        assign: function (c, d, e) {
          return Zb(a(c, e), b, d);
        }
      });
    }
    function D(a) {
      var b = s();
      return j(']'), k(function (d, e) {
        var f, g, h = a(d, e), i = b(d, e);
        return h ? (f = h[i], f && f.then && (g = f, '$$v' in f || (g.$$v = c, g.then(function (a) {
          g.$$v = a;
        })), f = f.$$v), f) : c;
      }, {
        assign: function (c, d, e) {
          return a(c, e)[b(c, e)] = d;
        }
      });
    }
    function E(a, b) {
      var c = [];
      if (')' != g().text)
        do
          c.push(s());
        while (i(','));
      return j(')'), function (d, e) {
        for (var f = [], g = b ? b(d, e) : d, h = 0; h < c.length; h++)
          f.push(c[h](d, e));
        var i = a(d, e, g) || n;
        return i.apply ? i.apply(g, f) : i(f[0], f[1], f[2], f[3], f[4]);
      };
    }
    function F() {
      var a = [];
      if (']' != g().text)
        do
          a.push(s());
        while (i(','));
      return j(']'), function (b, c) {
        for (var d = [], e = 0; e < a.length; e++)
          d.push(a[e](b, c));
        return d;
      };
    }
    function G() {
      var a = [];
      if ('}' != g().text)
        do {
          var b = i(), c = b.string || b.text;
          j(':');
          var d = s();
          a.push({
            key: c,
            value: d
          });
        } while (i(','));
      return j('}'), function (b, c) {
        for (var d = {}, e = 0; e < a.length; e++) {
          var f = a[e];
          d[f.key] = f.value(b, c);
        }
        return d;
      };
    }
    var H, I = p(0), J = Xb(a, e), K = t, L = E, M = C, N = D, O = q;
    return b ? (K = u, L = M = N = O = function () {
      f('is not valid json', {
        text: a,
        index: 0
      });
    }, H = B()) : H = o(), 0 !== J.length && f('is an unexpected token', J[0]), H;
  }
  function Zb(a, b, c) {
    for (var d = b.split('.'), e = 0; d.length > 1; e++) {
      var f = d.shift(), g = a[f];
      g || (g = {}, a[f] = g), a = g;
    }
    return a[d.shift()] = c, c;
  }
  function $b(a, b, c) {
    if (!b)
      return a;
    for (var d, e = b.split('.'), f = a, g = e.length, h = 0; g > h; h++)
      d = e[h], a && (a = (f = a)[d]);
    return !c && x(a) ? M(f, a) : a;
  }
  function _b(a, b, d, e, f) {
    return function (g, h) {
      var i, j = h && h.hasOwnProperty(a) ? h : g;
      return null === j || j === c ? j : (j = j[a], j && j.then && ('$$v' in j || (i = j, i.$$v = c, i.then(function (a) {
        i.$$v = a;
      })), j = j.$$v), b && null !== j && j !== c ? (j = j[b], j && j.then && ('$$v' in j || (i = j, i.$$v = c, i.then(function (a) {
        i.$$v = a;
      })), j = j.$$v), d && null !== j && j !== c ? (j = j[d], j && j.then && ('$$v' in j || (i = j, i.$$v = c, i.then(function (a) {
        i.$$v = a;
      })), j = j.$$v), e && null !== j && j !== c ? (j = j[e], j && j.then && ('$$v' in j || (i = j, i.$$v = c, i.then(function (a) {
        i.$$v = a;
      })), j = j.$$v), f && null !== j && j !== c ? (j = j[f], j && j.then && ('$$v' in j || (i = j, i.$$v = c, i.then(function (a) {
        i.$$v = a;
      })), j = j.$$v), j) : j) : j) : j) : j);
    };
  }
  function ac(a, b) {
    if (Ad.hasOwnProperty(a))
      return Ad[a];
    var d, f = a.split('.'), g = f.length;
    if (b)
      d = 6 > g ? _b(f[0], f[1], f[2], f[3], f[4]) : function (a, b) {
        var d, e = 0;
        do
          d = _b(f[e++], f[e++], f[e++], f[e++], f[e++])(a, b), b = c, a = d;
        while (g > e);
        return d;
      };
    else {
      var h = 'var l, fn, p;\n';
      e(f, function (a, b) {
        h += 'if(s === null || s === undefined) return s;\nl=s;\ns=' + (b ? 's' : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"]' + ';\n' + 'if (s && s.then) {\n' + ' if (!("$$v" in s)) {\n' + ' p=s;\n' + ' p.$$v = undefined;\n' + ' p.then(function(v) {p.$$v=v;});\n' + '}\n' + ' s=s.$$v\n' + '}\n';
      }), h += 'return s;', d = Function('s', 'k', h), d.toString = function () {
        return h;
      };
    }
    return Ad[a] = d;
  }
  function bc() {
    var a = {};
    this.$get = [
      '$filter',
      '$sniffer',
      function (b, c) {
        return function (d) {
          switch (typeof d) {
          case 'string':
            return a.hasOwnProperty(d) ? a[d] : a[d] = Yb(d, !1, b, c.csp);
          case 'function':
            return d;
          default:
            return n;
          }
        };
      }
    ];
  }
  function cc() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (a, b) {
        return dc(function (b) {
          a.$evalAsync(b);
        }, b);
      }
    ];
  }
  function dc(a, b) {
    function d(a) {
      return a;
    }
    function f(a) {
      return j(a);
    }
    function g(a) {
      var b = h(), c = a.length, d = [];
      return c ? e(a, function (a, e) {
        i(a).then(function (a) {
          e in d || (d[e] = a, --c || b.resolve(d));
        }, function (a) {
          e in d || b.reject(a);
        });
      }) : b.resolve(d), b.promise;
    }
    var h = function () {
        var e, g, k = [];
        return g = {
          resolve: function (b) {
            if (k) {
              var d = k;
              k = c, e = i(b), d.length && a(function () {
                for (var a, b = 0, c = d.length; c > b; b++)
                  a = d[b], e.then(a[0], a[1]);
              });
            }
          },
          reject: function (a) {
            g.resolve(j(a));
          },
          promise: {
            then: function (a, c) {
              var g = h(), i = function (c) {
                  try {
                    g.resolve((a || d)(c));
                  } catch (e) {
                    b(e), g.reject(e);
                  }
                }, j = function (a) {
                  try {
                    g.resolve((c || f)(a));
                  } catch (d) {
                    b(d), g.reject(d);
                  }
                };
              return k ? k.push([
                i,
                j
              ]) : e.then(i, j), g.promise;
            }
          }
        };
      }, i = function (b) {
        return b && b.then ? b : {
          then: function (c) {
            var d = h();
            return a(function () {
              d.resolve(c(b));
            }), d.promise;
          }
        };
      }, j = function (b) {
        return {
          then: function (c, d) {
            var e = h();
            return a(function () {
              e.resolve((d || f)(b));
            }), e.promise;
          }
        };
      }, k = function (c, e, g) {
        var k, l = h(), m = function (a) {
            try {
              return (e || d)(a);
            } catch (c) {
              return b(c), j(c);
            }
          }, n = function (a) {
            try {
              return (g || f)(a);
            } catch (c) {
              return b(c), j(c);
            }
          };
        return a(function () {
          i(c).then(function (a) {
            k || (k = !0, l.resolve(i(a).then(m, n)));
          }, function (a) {
            k || (k = !0, l.resolve(n(a)));
          });
        }), l.promise;
      };
    return {
      defer: h,
      reject: j,
      when: k,
      all: g
    };
  }
  function ec() {
    var a = {};
    this.when = function (b, c) {
      if (a[b] = k({ reloadOnSearch: !0 }, c), b) {
        var d = '/' == b[b.length - 1] ? b.substr(0, b.length - 1) : b + '/';
        a[d] = { redirectTo: b };
      }
      return this;
    }, this.otherwise = function (a) {
      return this.when(null, a), this;
    }, this.$get = [
      '$rootScope',
      '$location',
      '$routeParams',
      '$q',
      '$injector',
      '$http',
      '$templateCache',
      function (b, c, d, f, g, h, i) {
        function j(a, b) {
          b = '^' + b.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '$';
          for (var c, d = '', f = [], g = {}, h = /:(\w+)/g, i = 0; null !== (c = h.exec(b));)
            d += b.slice(i, c.index), d += '([^\\/]*)', f.push(c[1]), i = h.lastIndex;
          d += b.substr(i);
          var j = a.match(new RegExp(d));
          return j && e(f, function (a, b) {
            g[a] = j[b + 1];
          }), j ? g : null;
        }
        function l() {
          var a = n(), j = q.current;
          a && j && a.$$route === j.$$route && J(a.pathParams, j.pathParams) && !a.reloadOnSearch && !p ? (j.params = a.params, H(j.params, d), b.$broadcast('$routeUpdate', j)) : (a || j) && (p = !1, b.$broadcast('$routeChangeStart', a, j), q.current = a, a && a.redirectTo && (t(a.redirectTo) ? c.path(o(a.redirectTo, a.params)).search(a.params).replace() : c.url(a.redirectTo(a.pathParams, c.path(), c.search())).replace()), f.when(a).then(function () {
            if (a) {
              var b, c = [], d = [];
              return e(a.resolve || {}, function (a, b) {
                c.push(b), d.push(t(a) ? g.get(a) : g.invoke(a));
              }), r(b = a.template) || r(b = a.templateUrl) && (b = h.get(b, { cache: i }).then(function (a) {
                return a.data;
              })), r(b) && (c.push('$template'), d.push(b)), f.all(d).then(function (a) {
                var b = {};
                return e(a, function (a, d) {
                  b[c[d]] = a;
                }), b;
              });
            }
          }).then(function (c) {
            a == q.current && (a && (a.locals = c, H(a.params, d)), b.$broadcast('$routeChangeSuccess', a, j));
          }, function (c) {
            a == q.current && b.$broadcast('$routeChangeError', a, j, c);
          }));
        }
        function n() {
          var b, d;
          return e(a, function (a, e) {
            !d && (b = j(c.path(), e)) && (d = m(a, {
              params: k({}, c.search(), b),
              pathParams: b
            }), d.$$route = a);
          }), d || a[null] && m(a[null], {
            params: {},
            pathParams: {}
          });
        }
        function o(a, b) {
          var c = [];
          return e((a || '').split(':'), function (a, d) {
            if (0 == d)
              c.push(a);
            else {
              var e = a.match(/(\w+)(.*)/), f = e[1];
              c.push(b[f]), c.push(e[2] || ''), delete b[f];
            }
          }), c.join('');
        }
        var p = !1, q = {
            routes: a,
            reload: function () {
              p = !0, b.$evalAsync(l);
            }
          };
        return b.$on('$locationChangeSuccess', l), q;
      }
    ];
  }
  function fc() {
    this.$get = p({});
  }
  function gc() {
    var a = 10;
    this.digestTtl = function (b) {
      return arguments.length && (a = b), a;
    }, this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      function (b, c, d) {
        function e() {
          this.$id = i(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this['this'] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$listeners = {}, this.$$isolateBindings = {};
        }
        function f(a) {
          if (k.$$phase)
            throw Error(k.$$phase + ' already in progress');
          k.$$phase = a;
        }
        function g() {
          k.$$phase = null;
        }
        function h(a, b) {
          var c = d(a);
          return _(c, b), c;
        }
        function j() {
        }
        e.prototype = {
          $new: function (a) {
            var b, c;
            if (x(a))
              throw Error('API-CHANGE: Use $controller to instantiate controllers.');
            return a ? (c = new e(), c.$root = this.$root) : (b = function () {
            }, b.prototype = this, c = new b(), c.$id = i()), c['this'] = c, c.$$listeners = {}, c.$parent = this, c.$$asyncQueue = [], c.$$watchers = c.$$nextSibling = c.$$childHead = c.$$childTail = null, c.$$prevSibling = this.$$childTail, this.$$childHead ? (this.$$childTail.$$nextSibling = c, this.$$childTail = c) : this.$$childHead = this.$$childTail = c, c;
          },
          $watch: function (a, b, c) {
            var d = this, e = h(a, 'watch'), f = d.$$watchers, g = {
                fn: b,
                last: j,
                get: e,
                exp: a,
                eq: !!c
              };
            if (!x(b)) {
              var i = h(b || n, 'listener');
              g.fn = function (a, b, c) {
                i(c);
              };
            }
            return f || (f = d.$$watchers = []), f.unshift(g), function () {
              G(f, g);
            };
          },
          $digest: function () {
            var b, d, e, h, i, k, l, m, n, o, p, q = a, r = this, s = [];
            f('$digest');
            do {
              l = !1, n = r;
              do {
                for (i = n.$$asyncQueue; i.length;)
                  try {
                    n.$eval(i.shift());
                  } catch (t) {
                    c(t);
                  }
                if (h = n.$$watchers)
                  for (k = h.length; k--;)
                    try {
                      b = h[k], (d = b.get(n)) === (e = b.last) || (b.eq ? J(d, e) : 'number' == typeof d && 'number' == typeof e && isNaN(d) && isNaN(e)) || (l = !0, b.last = b.eq ? H(d) : d, b.fn(d, e === j ? d : e, n), 5 > q && (o = 4 - q, s[o] || (s[o] = []), p = x(b.exp) ? 'fn: ' + (b.exp.name || b.exp.toString()) : b.exp, p += '; newVal: ' + O(d) + '; oldVal: ' + O(e), s[o].push(p)));
                    } catch (t) {
                      c(t);
                    }
                if (!(m = n.$$childHead || n !== r && n.$$nextSibling))
                  for (; n !== r && !(m = n.$$nextSibling);)
                    n = n.$parent;
              } while (n = m);
              if (l && !q--)
                throw g(), Error(a + ' $digest() iterations reached. Aborting!\n' + 'Watchers fired in the last 5 iterations: ' + O(s));
            } while (l || i.length);
            g();
          },
          $destroy: function () {
            if (k != this && !this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast('$destroy'), this.$$destroyed = !0, a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
            }
          },
          $eval: function (a, b) {
            return d(a)(this, b);
          },
          $evalAsync: function (a) {
            this.$$asyncQueue.push(a);
          },
          $apply: function (a) {
            try {
              return f('$apply'), this.$eval(a);
            } catch (b) {
              c(b);
            } finally {
              g();
              try {
                k.$digest();
              } catch (b) {
                throw c(b), b;
              }
            }
          },
          $on: function (a, b) {
            var c = this.$$listeners[a];
            return c || (this.$$listeners[a] = c = []), c.push(b), function () {
              c[F(c, b)] = null;
            };
          },
          $emit: function (a) {
            var b, d, e, f = [], g = this, h = !1, i = {
                name: a,
                targetScope: g,
                stopPropagation: function () {
                  h = !0;
                },
                preventDefault: function () {
                  i.defaultPrevented = !0;
                },
                defaultPrevented: !1
              }, j = K([i], arguments, 1);
            do {
              for (b = g.$$listeners[a] || f, i.currentScope = g, d = 0, e = b.length; e > d; d++)
                if (b[d])
                  try {
                    if (b[d].apply(null, j), h)
                      return i;
                  } catch (k) {
                    c(k);
                  }
                else
                  b.splice(d, 1), d--, e--;
              g = g.$parent;
            } while (g);
            return i;
          },
          $broadcast: function (a) {
            var b, d, e, f = this, g = f, h = f, i = {
                name: a,
                targetScope: f,
                preventDefault: function () {
                  i.defaultPrevented = !0;
                },
                defaultPrevented: !1
              }, j = K([i], arguments, 1);
            do {
              for (g = h, i.currentScope = g, b = g.$$listeners[a] || [], d = 0, e = b.length; e > d; d++)
                if (b[d])
                  try {
                    b[d].apply(null, j);
                  } catch (k) {
                    c(k);
                  }
                else
                  b.splice(d, 1), d--, e--;
              if (!(h = g.$$childHead || g !== f && g.$$nextSibling))
                for (; g !== f && !(h = g.$$nextSibling);)
                  g = g.$parent;
            } while (g = h);
            return i;
          }
        };
        var k = new e();
        return k;
      }
    ];
  }
  function hc() {
    this.$get = [
      '$window',
      function (a) {
        var b = {}, c = l((/android (\d+)/.exec(Qc(a.navigator.userAgent)) || [])[1]);
        return {
          history: !(!a.history || !a.history.pushState || 4 > c),
          hashchange: 'onhashchange' in a && (!a.document.documentMode || a.document.documentMode > 7),
          hasEvent: function (c) {
            if ('input' == c && 9 == Yc)
              return !1;
            if (q(b[c])) {
              var d = a.document.createElement('div');
              b[c] = 'on' + c in d;
            }
            return b[c];
          },
          csp: !1
        };
      }
    ];
  }
  function ic() {
    this.$get = p(a);
  }
  function jc(a) {
    var b, c, d, f = {};
    return a ? (e(a.split('\n'), function (a) {
      d = a.indexOf(':'), b = Qc(B(a.substr(0, d))), c = B(a.substr(d + 1)), b && (f[b] ? f[b] += ', ' + c : f[b] = c);
    }), f) : f;
  }
  function kc(a) {
    var b = s(a) ? a : c;
    return function (c) {
      return b || (b = jc(a)), c ? b[Qc(c)] || null : b;
    };
  }
  function lc(a, b, c) {
    return x(c) ? c(a, b) : (e(c, function (c) {
      a = c(a, b);
    }), a);
  }
  function mc(a) {
    return a >= 200 && 300 > a;
  }
  function nc() {
    var a = /^\s*(\[|\{[^\{])/, b = /[\}\]]\s*$/, d = /^\)\]\}',?\n/, f = this.defaults = {
        transformResponse: [function (c) {
            return t(c) && (c = c.replace(d, ''), a.test(c) && b.test(c) && (c = P(c, !0))), c;
          }],
        transformRequest: [function (a) {
            return s(a) && !A(a) ? O(a) : a;
          }],
        headers: {
          common: {
            Accept: 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
          },
          post: { 'Content-Type': 'application/json;charset=utf-8' },
          put: { 'Content-Type': 'application/json;charset=utf-8' }
        }
      }, h = this.responseInterceptors = [];
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function (a, b, d, i, j, l) {
        function m(a) {
          function c(a) {
            var b = k({}, a, { data: lc(a.data, a.headers, h) });
            return mc(a.status) ? b : j.reject(b);
          }
          a.method = Rc(a.method);
          var d, g = a.transformRequest || f.transformRequest, h = a.transformResponse || f.transformResponse, i = f.headers, l = k({ 'X-XSRF-TOKEN': b.cookies()['XSRF-TOKEN'] }, i.common, i[Qc(a.method)], a.headers), m = lc(a.data, kc(l), g);
          return q(a.data) && delete l['Content-Type'], d = p(a, m, l), d = d.then(c, c), e(v, function (a) {
            d = a(d);
          }), d.success = function (b) {
            return d.then(function (c) {
              b(c.data, c.status, c.headers, a);
            }), d;
          }, d.error = function (b) {
            return d.then(null, function (c) {
              b(c.data, c.status, c.headers, a);
            }), d;
          }, d;
        }
        function n() {
          e(arguments, function (a) {
            m[a] = function (b, c) {
              return m(k(c || {}, {
                method: a,
                url: b
              }));
            };
          });
        }
        function o() {
          e(arguments, function (a) {
            m[a] = function (b, c, d) {
              return m(k(d || {}, {
                method: a,
                url: b,
                data: c
              }));
            };
          });
        }
        function p(b, c, d) {
          function e(a, b, c) {
            h && (mc(a) ? h.put(o, [
              a,
              b,
              jc(c)
            ]) : h.remove(o)), f(b, a, c), i.$apply();
          }
          function f(a, c, d) {
            c = Math.max(c, 0), (mc(c) ? l.resolve : l.reject)({
              data: a,
              status: c,
              headers: kc(d),
              config: b
            });
          }
          function g() {
            var a = F(m.pendingRequests, b);
            -1 !== a && m.pendingRequests.splice(a, 1);
          }
          var h, k, l = j.defer(), n = l.promise, o = r(b.url, b.params);
          if (m.pendingRequests.push(b), n.then(g, g), b.cache && 'GET' == b.method && (h = s(b.cache) ? b.cache : u), h)
            if (k = h.get(o)) {
              if (k.then)
                return k.then(g, g), k;
              w(k) ? f(k[1], k[0], H(k[2])) : f(k, 200, {});
            } else
              h.put(o, n);
          return k || a(b.method, o, c, e, d, b.timeout, b.withCredentials), n;
        }
        function r(a, b) {
          if (!b)
            return a;
          var d = [];
          return g(b, function (a, b) {
            null != a && a != c && (s(a) && (a = O(a)), d.push(encodeURIComponent(b) + '=' + encodeURIComponent(a)));
          }), a + (-1 == a.indexOf('?') ? '?' : '&') + d.join('&');
        }
        var u = d('$http'), v = [];
        return e(h, function (a) {
          v.push(t(a) ? l.get(a) : l.invoke(a));
        }), m.pendingRequests = [], n('get', 'delete', 'head', 'jsonp'), o('post', 'put'), m.defaults = f, m;
      }
    ];
  }
  function oc() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function (a, b, c) {
        return pc(a, Bd, a.defer, b.angular.callbacks, c[0], b.location.protocol.replace(':', ''));
      }
    ];
  }
  function pc(a, b, c, d, f, g) {
    function h(a, b) {
      var c = f.createElement('script'), d = function () {
          f.body.removeChild(c), b && b();
        };
      c.type = 'text/javascript', c.src = a, Yc ? c.onreadystatechange = function () {
        /loaded|complete/.test(c.readyState) && d();
      } : c.onload = c.onerror = d, f.body.appendChild(c);
    }
    return function (f, i, j, k, l, m, o) {
      function p(b, c, d, e) {
        var f = (i.match(ud) || [
            '',
            g
          ])[1];
        c = 'file' == f ? d ? 200 : 404 : c, c = 1223 == c ? 204 : c, b(c, d, e), a.$$completeOutstandingRequest(n);
      }
      if (a.$$incOutstandingRequestCount(), i = i || a.url(), 'jsonp' == Qc(f)) {
        var q = '_' + (d.counter++).toString(36);
        d[q] = function (a) {
          d[q].data = a;
        }, h(i.replace('JSON_CALLBACK', 'angular.callbacks.' + q), function () {
          d[q].data ? p(k, 200, d[q].data) : p(k, -2), delete d[q];
        });
      } else {
        var r = new b();
        r.open(f, i, !0), e(l, function (a, b) {
          a && r.setRequestHeader(b, a);
        });
        var s;
        r.onreadystatechange = function () {
          if (4 == r.readyState) {
            var a = r.getAllResponseHeaders(), b = [
                'Cache-Control',
                'Content-Language',
                'Content-Type',
                'Expires',
                'Last-Modified',
                'Pragma'
              ];
            a || (a = '', e(b, function (b) {
              var c = r.getResponseHeader(b);
              c && (a += b + ': ' + c + '\n');
            })), p(k, s || r.status, r.responseText, a);
          }
        }, o && (r.withCredentials = !0), r.send(j || ''), m > 0 && c(function () {
          s = -1, r.abort();
        }, m);
      }
    };
  }
  function qc() {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '\xa4',
              posSuf: '',
              negPre: '(\xa4',
              negSuf: ')',
              gSize: 3,
              lgSize: 3
            }
          ],
          CURRENCY_SYM: '$'
        },
        DATETIME_FORMATS: {
          MONTH: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
          SHORTMONTH: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
          DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
          SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
          AMPMS: [
            'AM',
            'PM'
          ],
          medium: 'MMM d, y h:mm:ss a',
          'short': 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a'
        },
        pluralCat: function (a) {
          return 1 === a ? 'one' : 'other';
        }
      };
    };
  }
  function rc() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$exceptionHandler',
      function (a, b, c, d) {
        function e(e, g, h) {
          var i, j, k = c.defer(), l = k.promise, m = r(h) && !h;
          return i = b.defer(function () {
            try {
              k.resolve(e());
            } catch (b) {
              k.reject(b), d(b);
            }
            m || a.$apply();
          }, g), j = function () {
            delete f[l.$$timeoutId];
          }, l.$$timeoutId = i, f[i] = k, l.then(j, j), l;
        }
        var f = {};
        return e.cancel = function (a) {
          return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject('canceled'), b.defer.cancel(a.$$timeoutId)) : !1;
        }, e;
      }
    ];
  }
  function sc(a) {
    function b(b, d) {
      return a.factory(b + c, d);
    }
    var c = 'Filter';
    this.register = b, this.$get = [
      '$injector',
      function (a) {
        return function (b) {
          return a.get(b + c);
        };
      }
    ], b('currency', uc), b('date', Cc), b('filter', tc), b('json', Dc), b('limitTo', Ec), b('lowercase', Gd), b('number', vc), b('orderBy', Fc), b('uppercase', Hd);
  }
  function tc() {
    return function (a, b) {
      if (!w(a))
        return a;
      var c = [];
      c.check = function (a) {
        for (var b = 0; b < c.length; b++)
          if (!c[b](a))
            return !1;
        return !0;
      };
      var d = function (a, b) {
        if ('!' === b.charAt(0))
          return !d(a, b.substr(1));
        switch (typeof a) {
        case 'boolean':
        case 'number':
        case 'string':
          return ('' + a).toLowerCase().indexOf(b) > -1;
        case 'object':
          for (var c in a)
            if ('$' !== c.charAt(0) && d(a[c], b))
              return !0;
          return !1;
        case 'array':
          for (var e = 0; e < a.length; e++)
            if (d(a[e], b))
              return !0;
          return !1;
        default:
          return !1;
        }
      };
      switch (typeof b) {
      case 'boolean':
      case 'number':
      case 'string':
        b = { $: b };
      case 'object':
        for (var e in b)
          '$' == e ? function () {
            var a = ('' + b[e]).toLowerCase();
            a && c.push(function (b) {
              return d(b, a);
            });
          }() : function () {
            var a = e, f = ('' + b[e]).toLowerCase();
            f && c.push(function (b) {
              return d($b(b, a), f);
            });
          }();
        break;
      case 'function':
        c.push(b);
        break;
      default:
        return a;
      }
      for (var f = [], g = 0; g < a.length; g++) {
        var h = a[g];
        c.check(h) && f.push(h);
      }
      return f;
    };
  }
  function uc(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c) {
      return q(c) && (c = b.CURRENCY_SYM), wc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c);
    };
  }
  function vc(a) {
    var b = a.NUMBER_FORMATS;
    return function (a, c) {
      return wc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
    };
  }
  function wc(a, b, c, d, e) {
    if (isNaN(a) || !isFinite(a))
      return '';
    var f = 0 > a;
    a = Math.abs(a);
    var g = a + '', h = '', i = [], j = !1;
    if (-1 !== g.indexOf('e')) {
      var k = g.match(/([\d\.]+)e(-?)(\d+)/);
      k && '-' == k[2] && k[3] > e + 1 ? g = '0' : (h = g, j = !0);
    }
    if (!j) {
      var l = (g.split(Cd)[1] || '').length;
      q(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac));
      var m = Math.pow(10, e);
      a = Math.round(a * m) / m;
      var n = ('' + a).split(Cd), o = n[0];
      n = n[1] || '';
      var p = 0, r = b.lgSize, s = b.gSize;
      if (o.length >= r + s) {
        p = o.length - r;
        for (var t = 0; p > t; t++)
          0 === (p - t) % s && 0 !== t && (h += c), h += o.charAt(t);
      }
      for (t = p; t < o.length; t++)
        0 === (o.length - t) % r && 0 !== t && (h += c), h += o.charAt(t);
      for (; n.length < e;)
        n += '0';
      e && '0' !== e && (h += d + n.substr(0, e));
    }
    return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), i.join('');
  }
  function xc(a, b, c) {
    var d = '';
    for (0 > a && (d = '-', a = -a), a = '' + a; a.length < b;)
      a = '0' + a;
    return c && (a = a.substr(a.length - b)), d + a;
  }
  function yc(a, b, c, d) {
    return c = c || 0, function (e) {
      var f = e['get' + a]();
      return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), xc(f, b, d);
    };
  }
  function zc(a, b) {
    return function (c, d) {
      var e = c['get' + a](), f = Rc(b ? 'SHORT' + a : a);
      return d[f][e];
    };
  }
  function Ac(a) {
    var b = -1 * a.getTimezoneOffset(), c = b >= 0 ? '+' : '';
    return c += xc(Math[b > 0 ? 'floor' : 'ceil'](b / 60), 2) + xc(Math.abs(b % 60), 2);
  }
  function Bc(a, b) {
    return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1];
  }
  function Cc(a) {
    function b(a) {
      var b;
      if (b = a.match(c)) {
        var d = new Date(0), e = 0, f = 0;
        return b[9] && (e = l(b[9] + b[10]), f = l(b[9] + b[11])), d.setUTCFullYear(l(b[1]), l(b[2]) - 1, l(b[3])), d.setUTCHours(l(b[4] || 0) - e, l(b[5] || 0) - f, l(b[6] || 0), l(b[7] || 0)), d;
      }
      return a;
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, d) {
      var f, g, h = '', i = [];
      if (d = d || 'mediumDate', d = a.DATETIME_FORMATS[d] || d, t(c) && (c = Fd.test(c) ? l(c) : b(c)), u(c) && (c = new Date(c)), !v(c))
        return c;
      for (; d;)
        g = Ed.exec(d), g ? (i = K(i, g, 1), d = i.pop()) : (i.push(d), d = null);
      return e(i, function (b) {
        f = Dd[b], h += f ? f(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      }), h;
    };
  }
  function Dc() {
    return function (a) {
      return O(a, !0);
    };
  }
  function Ec() {
    return function (a, b) {
      if (!(a instanceof Array))
        return a;
      b = l(b);
      var c, d, e = [];
      if (!(a && a instanceof Array))
        return e;
      for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, d = b) : (c = a.length + b, d = a.length); d > c; c++)
        e.push(a[c]);
      return e;
    };
  }
  function Fc(a) {
    return function (b, c, d) {
      function e(a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)
            return e;
        }
        return 0;
      }
      function f(a, b) {
        return Q(b) ? function (b, c) {
          return a(c, b);
        } : a;
      }
      function g(a, b) {
        var c = typeof a, d = typeof b;
        return c == d ? ('string' == c && (a = a.toLowerCase()), 'string' == c && (b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1;
      }
      if (!w(b))
        return b;
      if (!c)
        return b;
      c = w(c) ? c : [c], c = D(c, function (b) {
        var c = !1, d = b || o;
        return t(b) && (('+' == b.charAt(0) || '-' == b.charAt(0)) && (c = '-' == b.charAt(0), b = b.substring(1)), d = a(b)), f(function (a, b) {
          return g(d(a), d(b));
        }, c);
      });
      for (var h = [], i = 0; i < b.length; i++)
        h.push(b[i]);
      return h.sort(f(e, d));
    };
  }
  function Gc(a) {
    return x(a) && (a = { link: a }), a.restrict = a.restrict || 'AC', p(a);
  }
  function Hc(a, b) {
    function c(b, c) {
      c = c ? '-' + Y(c, '-') : '', a.removeClass((b ? Ud : Td) + c).addClass((b ? Td : Ud) + c);
    }
    var d = this, f = a.parent().controller('form') || Kd, g = 0, h = d.$error = {};
    d.$name = b.name, d.$dirty = !1, d.$pristine = !0, d.$valid = !0, d.$invalid = !1, f.$addControl(d), a.addClass(Vd), c(!0), d.$addControl = function (a) {
      a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a);
    }, d.$removeControl = function (a) {
      a.$name && d[a.$name] === a && delete d[a.$name], e(h, function (b, c) {
        d.$setValidity(c, !0, a);
      });
    }, d.$setValidity = function (a, b, e) {
      var i = h[a];
      if (b)
        i && (G(i, e), i.length || (g--, g || (c(b), d.$valid = !0, d.$invalid = !1), h[a] = !1, c(!0, a), f.$setValidity(a, !0, d)));
      else {
        if (g || c(b), i) {
          if (E(i, e))
            return;
        } else
          h[a] = i = [], g++, c(!1, a), f.$setValidity(a, !1, d);
        i.push(e), d.$valid = !1, d.$invalid = !0;
      }
    }, d.$setDirty = function () {
      a.removeClass(Vd).addClass(Wd), d.$dirty = !0, d.$pristine = !1, f.$setDirty();
    };
  }
  function Ic(a) {
    return q(a) || '' === a || null === a || a !== a;
  }
  function Jc(a, b, d, e, f, g) {
    var h = function () {
      var c = B(b.val());
      e.$viewValue !== c && a.$apply(function () {
        e.$setViewValue(c);
      });
    };
    if (f.hasEvent('input'))
      b.bind('input', h);
    else {
      var i, j = function () {
          i || (i = g.defer(function () {
            h(), i = null;
          }));
        };
      b.bind('keydown', function (a) {
        var b = a.keyCode;
        91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || j();
      }), b.bind('change', h), f.hasEvent('paste') && b.bind('paste cut', j);
    }
    e.$render = function () {
      b.val(Ic(e.$viewValue) ? '' : e.$viewValue);
    };
    var k, m = d.ngPattern, n = function (a, b) {
        return Ic(b) || a.test(b) ? (e.$setValidity('pattern', !0), b) : (e.$setValidity('pattern', !1), c);
      };
    if (m && (m.match(/^\/(.*)\/$/) ? (m = new RegExp(m.substr(1, m.length - 2)), k = function (a) {
        return n(m, a);
      }) : k = function (b) {
        var c = a.$eval(m);
        if (!c || !c.test)
          throw new Error('Expected ' + m + ' to be a RegExp but was ' + c);
        return n(c, b);
      }, e.$formatters.push(k), e.$parsers.push(k)), d.ngMinlength) {
      var o = l(d.ngMinlength), p = function (a) {
          return !Ic(a) && a.length < o ? (e.$setValidity('minlength', !1), c) : (e.$setValidity('minlength', !0), a);
        };
      e.$parsers.push(p), e.$formatters.push(p);
    }
    if (d.ngMaxlength) {
      var q = l(d.ngMaxlength), r = function (a) {
          return !Ic(a) && a.length > q ? (e.$setValidity('maxlength', !1), c) : (e.$setValidity('maxlength', !0), a);
        };
      e.$parsers.push(r), e.$formatters.push(r);
    }
  }
  function Kc(a, b, d, e, f, g) {
    if (Jc(a, b, d, e, f, g), e.$parsers.push(function (a) {
        var b = Ic(a);
        return b || Qd.test(a) ? (e.$setValidity('number', !0), '' === a ? null : b ? a : parseFloat(a)) : (e.$setValidity('number', !1), c);
      }), e.$formatters.push(function (a) {
        return Ic(a) ? '' : '' + a;
      }), d.min) {
      var h = parseFloat(d.min), i = function (a) {
          return !Ic(a) && h > a ? (e.$setValidity('min', !1), c) : (e.$setValidity('min', !0), a);
        };
      e.$parsers.push(i), e.$formatters.push(i);
    }
    if (d.max) {
      var j = parseFloat(d.max), k = function (a) {
          return !Ic(a) && a > j ? (e.$setValidity('max', !1), c) : (e.$setValidity('max', !0), a);
        };
      e.$parsers.push(k), e.$formatters.push(k);
    }
    e.$formatters.push(function (a) {
      return Ic(a) || u(a) ? (e.$setValidity('number', !0), a) : (e.$setValidity('number', !1), c);
    });
  }
  function Lc(a, b, d, e, f, g) {
    Jc(a, b, d, e, f, g);
    var h = function (a) {
      return Ic(a) || Od.test(a) ? (e.$setValidity('url', !0), a) : (e.$setValidity('url', !1), c);
    };
    e.$formatters.push(h), e.$parsers.push(h);
  }
  function Mc(a, b, d, e, f, g) {
    Jc(a, b, d, e, f, g);
    var h = function (a) {
      return Ic(a) || Pd.test(a) ? (e.$setValidity('email', !0), a) : (e.$setValidity('email', !1), c);
    };
    e.$formatters.push(h), e.$parsers.push(h);
  }
  function Nc(a, b, c, d) {
    q(c.name) && b.attr('name', i()), b.bind('click', function () {
      b[0].checked && a.$apply(function () {
        d.$setViewValue(c.value);
      });
    }), d.$render = function () {
      var a = c.value;
      b[0].checked = a == d.$viewValue;
    }, c.$observe('value', d.$render);
  }
  function Oc(a, b, c, d) {
    var e = c.ngTrueValue, f = c.ngFalseValue;
    t(e) || (e = !0), t(f) || (f = !1), b.bind('click', function () {
      a.$apply(function () {
        d.$setViewValue(b[0].checked);
      });
    }), d.$render = function () {
      b[0].checked = d.$viewValue;
    }, d.$formatters.push(function (a) {
      return a === e;
    }), d.$parsers.push(function (a) {
      return a ? e : f;
    });
  }
  function Pc(a, b) {
    return a = 'ngClass' + a, Gc(function (d, e, f) {
      function g(a) {
        (b === !0 || d.$index % 2 === b) && (j && !J(a, j) && h(j), i(a)), j = H(a);
      }
      function h(a) {
        s(a) && !w(a) && (a = D(a, function (a, b) {
          return a ? b : void 0;
        })), e.removeClass(w(a) ? a.join(' ') : a);
      }
      function i(a) {
        s(a) && !w(a) && (a = D(a, function (a, b) {
          return a ? b : void 0;
        })), a && e.addClass(w(a) ? a.join(' ') : a);
      }
      var j = c;
      d.$watch(f[a], g, !0), f.$observe('class', function () {
        var b = d.$eval(f[a]);
        g(b, b);
      }), 'ngClass' !== a && d.$watch('$index', function (c, e) {
        var g = 1 & c;
        1 & g !== e && (g === b ? i(d.$eval(f[a])) : h(d.$eval(f[a])));
      });
    });
  }
  var Qc = function (a) {
      return t(a) ? a.toLowerCase() : a;
    }, Rc = function (a) {
      return t(a) ? a.toUpperCase() : a;
    }, Sc = function (a) {
      return t(a) ? a.replace(/[A-Z]/g, function (a) {
        return String.fromCharCode(32 | a.charCodeAt(0));
      }) : a;
    }, Tc = function (a) {
      return t(a) ? a.replace(/[a-z]/g, function (a) {
        return String.fromCharCode(-33 & a.charCodeAt(0));
      }) : a;
    };
  'i' !== 'I'.toLowerCase() && (Qc = Sc, Rc = Tc);
  var Uc, Vc, Wc, Xc, Yc = l((/msie (\d+)/.exec(Qc(navigator.userAgent)) || [])[1]), Zc = [].slice, $c = [].push, _c = Object.prototype.toString, ad = a.angular || (a.angular = {}), bd = [
      '0',
      '0',
      '0'
    ];
  n.$inject = [], o.$inject = [], Xc = 9 > Yc ? function (a) {
    return a = a.nodeName ? a : a[0], a.scopeName && 'HTML' != a.scopeName ? Rc(a.scopeName + ':' + a.nodeName) : a.nodeName;
  } : function (a) {
    return a.nodeName ? a.nodeName : a[0].nodeName;
  };
  var cd = /[A-Z]/g, dd = {
      full: '1.0.7',
      major: 1,
      minor: 0,
      dot: 7,
      codeName: 'monochromatic-rainbow'
    }, ed = fb.cache = {}, fd = fb.expando = 'ng-' + new Date().getTime(), gd = 1, hd = a.document.addEventListener ? function (a, b, c) {
      a.addEventListener(b, c, !1);
    } : function (a, b, c) {
      a.attachEvent('on' + b, c);
    }, id = a.document.removeEventListener ? function (a, b, c) {
      a.removeEventListener(b, c, !1);
    } : function (a, b, c) {
      a.detachEvent('on' + b, c);
    }, jd = /([\:\-\_]+(.))/g, kd = /^moz([A-Z])/, ld = fb.prototype = {
      ready: function (b) {
        function c() {
          d || (d = !0, b());
        }
        var d = !1;
        this.bind('DOMContentLoaded', c), fb(a).bind('load', c);
      },
      toString: function () {
        var a = [];
        return e(this, function (b) {
          a.push('' + b);
        }), '[' + a.join(', ') + ']';
      },
      eq: function (a) {
        return a >= 0 ? Uc(this[a]) : Uc(this[this.length + a]);
      },
      length: 0,
      push: $c,
      sort: [].sort,
      splice: [].splice
    }, md = {};
  e('multiple,selected,checked,disabled,readOnly,required'.split(','), function (a) {
    md[Qc(a)] = a;
  });
  var nd = {};
  e('input,select,option,textarea,button,form'.split(','), function (a) {
    nd[Rc(a)] = !0;
  }), e({
    data: lb,
    inheritedData: rb,
    scope: function (a) {
      return rb(a, '$scope');
    },
    controller: qb,
    injector: function (a) {
      return rb(a, '$injector');
    },
    removeAttr: function (a, b) {
      a.removeAttribute(b);
    },
    hasClass: mb,
    css: function (a, b, d) {
      if (b = db(b), !r(d)) {
        var e;
        return 8 >= Yc && (e = a.currentStyle && a.currentStyle[b], '' === e && (e = 'auto')), e = e || a.style[b], 8 >= Yc && (e = '' === e ? c : e), e;
      }
      a.style[b] = d;
    },
    attr: function (a, b, d) {
      var e = Qc(b);
      if (md[e]) {
        if (!r(d))
          return a[b] || (a.attributes.getNamedItem(b) || n).specified ? e : c;
        d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e));
      } else if (r(d))
        a.setAttribute(b, d);
      else if (a.getAttribute) {
        var f = a.getAttribute(b, 2);
        return null === f ? c : f;
      }
    },
    prop: function (a, b, c) {
      return r(c) ? (a[b] = c, void 0) : a[b];
    },
    text: k(9 > Yc ? function (a, b) {
      if (1 == a.nodeType) {
        if (q(b))
          return a.innerText;
        a.innerText = b;
      } else {
        if (q(b))
          return a.nodeValue;
        a.nodeValue = b;
      }
    } : function (a, b) {
      return q(b) ? a.textContent : (a.textContent = b, void 0);
    }, { $dv: '' }),
    val: function (a, b) {
      return q(b) ? a.value : (a.value = b, void 0);
    },
    html: function (a, b) {
      if (q(b))
        return a.innerHTML;
      for (var c = 0, d = a.childNodes; c < d.length; c++)
        hb(d[c]);
      a.innerHTML = b;
    }
  }, function (a, b) {
    fb.prototype[b] = function (b, d) {
      var e, f;
      if ((2 == a.length && a !== mb && a !== qb ? b : d) !== c) {
        for (e = 0; e < this.length; e++)
          a(this[e], b, d);
        return this;
      }
      if (s(b)) {
        for (e = 0; e < this.length; e++)
          if (a === lb)
            a(this[e], b);
          else
            for (f in b)
              a(this[e], f, b[f]);
        return this;
      }
      return this.length ? a(this[0], b, d) : a.$dv;
    };
  }), e({
    removeData: jb,
    dealoc: hb,
    bind: function Fe(a, c, d) {
      var f = kb(a, 'events'), g = kb(a, 'handle');
      f || kb(a, 'events', f = {}), g || kb(a, 'handle', g = tb(a, f)), e(c.split(' '), function (c) {
        var e = f[c];
        if (!e) {
          if ('mouseenter' == c || 'mouseleave' == c) {
            var h = b.body.contains || b.body.compareDocumentPosition ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
              } : function (a, b) {
                if (b)
                  for (; b = b.parentNode;)
                    if (b === a)
                      return !0;
                return !1;
              };
            f[c] = [];
            var i = {
                mouseleave: 'mouseout',
                mouseenter: 'mouseover'
              };
            Fe(a, i[c], function (a) {
              var b = this, d = a.relatedTarget;
              (!d || d !== b && !h(b, d)) && g(a, c);
            });
          } else
            hd(a, c, g), f[c] = [];
          e = f[c];
        }
        e.push(d);
      });
    },
    unbind: ib,
    replaceWith: function (a, b) {
      var c, d = a.parentNode;
      hb(a), e(new fb(b), function (b) {
        c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b;
      });
    },
    children: function (a) {
      var b = [];
      return e(a.childNodes, function (a) {
        1 === a.nodeType && b.push(a);
      }), b;
    },
    contents: function (a) {
      return a.childNodes || [];
    },
    append: function (a, b) {
      e(new fb(b), function (b) {
        1 === a.nodeType && a.appendChild(b);
      });
    },
    prepend: function (a, b) {
      if (1 === a.nodeType) {
        var c = a.firstChild;
        e(new fb(b), function (b) {
          c ? a.insertBefore(b, c) : (a.appendChild(b), c = b);
        });
      }
    },
    wrap: function (a, b) {
      b = Uc(b)[0];
      var c = a.parentNode;
      c && c.replaceChild(b, a), b.appendChild(a);
    },
    remove: function (a) {
      hb(a);
      var b = a.parentNode;
      b && b.removeChild(a);
    },
    after: function (a, b) {
      var c = a, d = a.parentNode;
      e(new fb(b), function (a) {
        d.insertBefore(a, c.nextSibling), c = a;
      });
    },
    addClass: ob,
    removeClass: nb,
    toggleClass: function (a, b, c) {
      q(c) && (c = !mb(a, b)), (c ? ob : nb)(a, b);
    },
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    next: function (a) {
      if (a.nextElementSibling)
        return a.nextElementSibling;
      for (var b = a.nextSibling; null != b && 1 !== b.nodeType;)
        b = b.nextSibling;
      return b;
    },
    find: function (a, b) {
      return a.getElementsByTagName(b);
    },
    clone: gb,
    triggerHandler: function (a, b) {
      var c = (kb(a, 'events') || {})[b];
      e(c, function (b) {
        b.call(a, null);
      });
    }
  }, function (a, b) {
    fb.prototype[b] = function (b, d) {
      for (var e, f = 0; f < this.length; f++)
        e == c ? (e = a(this[f], b, d), e !== c && (e = Uc(e))) : pb(e, a(this[f], b, d));
      return e == c ? this : e;
    };
  }), vb.prototype = {
    put: function (a, b) {
      this[ub(a)] = b;
    },
    get: function (a) {
      return this[ub(a)];
    },
    remove: function (a) {
      var b = this[a = ub(a)];
      return delete this[a], b;
    }
  }, wb.prototype = {
    push: function (a, b) {
      var c = this[a = ub(a)];
      c ? c.push(b) : this[a] = [b];
    },
    shift: function (a) {
      var b = this[a = ub(a)];
      return b ? 1 == b.length ? (delete this[a], b[0]) : b.shift() : void 0;
    },
    peek: function (a) {
      var b = this[ub(a)];
      return b ? b[0] : void 0;
    }
  };
  var od = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, pd = /,/, qd = /^\s*(_?)(\S+?)\1\s*$/, rd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, sd = 'Non-assignable model expression: ';
  Eb.$inject = ['$provide'];
  var td = /^(x[\:\-_]|data[\:\-_])/i, ud = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/, vd = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/, wd = vd, xd = {
      http: 80,
      https: 443,
      ftp: 21
    };
  Qb.prototype = {
    $$replace: !1,
    absUrl: Tb('$$absUrl'),
    url: function (a, b) {
      if (q(a))
        return this.$$url;
      var c = vd.exec(a);
      return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ''), this.hash(c[5] || '', b), this;
    },
    protocol: Tb('$$protocol'),
    host: Tb('$$host'),
    port: Tb('$$port'),
    path: Ub('$$path', function (a) {
      return '/' == a.charAt(0) ? a : '/' + a;
    }),
    search: function (a, b) {
      return q(a) ? this.$$search : (r(b) ? null === b ? delete this.$$search[a] : this.$$search[a] = b : this.$$search = t(a) ? S(a) : a, this.$$compose(), this);
    },
    hash: Ub('$$hash', o),
    replace: function () {
      return this.$$replace = !0, this;
    }
  }, Rb.prototype = m(Qb.prototype), Sb.prototype = m(Rb.prototype);
  var yd = {
      'null': function () {
        return null;
      },
      'true': function () {
        return !0;
      },
      'false': function () {
        return !1;
      },
      undefined: n,
      '+': function (a, b, d, e) {
        return d = d(a, b), e = e(a, b), r(d) ? r(e) ? d + e : d : r(e) ? e : c;
      },
      '-': function (a, b, c, d) {
        return c = c(a, b), d = d(a, b), (r(c) ? c : 0) - (r(d) ? d : 0);
      },
      '*': function (a, b, c, d) {
        return c(a, b) * d(a, b);
      },
      '/': function (a, b, c, d) {
        return c(a, b) / d(a, b);
      },
      '%': function (a, b, c, d) {
        return c(a, b) % d(a, b);
      },
      '^': function (a, b, c, d) {
        return c(a, b) ^ d(a, b);
      },
      '=': n,
      '==': function (a, b, c, d) {
        return c(a, b) == d(a, b);
      },
      '!=': function (a, b, c, d) {
        return c(a, b) != d(a, b);
      },
      '<': function (a, b, c, d) {
        return c(a, b) < d(a, b);
      },
      '>': function (a, b, c, d) {
        return c(a, b) > d(a, b);
      },
      '<=': function (a, b, c, d) {
        return c(a, b) <= d(a, b);
      },
      '>=': function (a, b, c, d) {
        return c(a, b) >= d(a, b);
      },
      '&&': function (a, b, c, d) {
        return c(a, b) && d(a, b);
      },
      '||': function (a, b, c, d) {
        return c(a, b) || d(a, b);
      },
      '&': function (a, b, c, d) {
        return c(a, b) & d(a, b);
      },
      '|': function (a, b, c, d) {
        return d(a, b)(a, b, c(a, b));
      },
      '!': function (a, b, c) {
        return !c(a, b);
      }
    }, zd = {
      n: '\n',
      f: '\f',
      r: '\r',
      t: '\t',
      v: '\x0B',
      '\'': '\'',
      '"': '"'
    }, Ad = {}, Bd = a.XMLHttpRequest || function () {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.6.0');
      } catch (a) {
      }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      } catch (b) {
      }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP');
      } catch (c) {
      }
      throw new Error('This browser does not support XMLHttpRequest.');
    };
  sc.$inject = ['$provide'], uc.$inject = ['$locale'], vc.$inject = ['$locale'];
  var Cd = '.', Dd = {
      yyyy: yc('FullYear', 4),
      yy: yc('FullYear', 2, 0, !0),
      y: yc('FullYear', 1),
      MMMM: zc('Month'),
      MMM: zc('Month', !0),
      MM: yc('Month', 2, 1),
      M: yc('Month', 1, 1),
      dd: yc('Date', 2),
      d: yc('Date', 1),
      HH: yc('Hours', 2),
      H: yc('Hours', 1),
      hh: yc('Hours', 2, -12),
      h: yc('Hours', 1, -12),
      mm: yc('Minutes', 2),
      m: yc('Minutes', 1),
      ss: yc('Seconds', 2),
      s: yc('Seconds', 1),
      EEEE: zc('Day'),
      EEE: zc('Day', !0),
      a: Bc,
      Z: Ac
    }, Ed = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Fd = /^\d+$/;
  Cc.$inject = ['$locale'];
  var Gd = p(Qc), Hd = p(Rc);
  Fc.$inject = ['$parse'];
  var Id = p({
      restrict: 'E',
      compile: function (a, c) {
        return 8 >= Yc && (c.href || c.name || c.$set('href', ''), a.append(b.createComment('IE fix'))), function (a, b) {
          b.bind('click', function (a) {
            b.attr('href') || a.preventDefault();
          });
        };
      }
    }), Jd = {};
  e(md, function (a, b) {
    var c = Fb('ng-' + b);
    Jd[c] = function () {
      return {
        priority: 100,
        compile: function () {
          return function (a, d, e) {
            a.$watch(e[c], function (a) {
              e.$set(b, !!a);
            });
          };
        }
      };
    };
  }), e([
    'src',
    'href'
  ], function (a) {
    var b = Fb('ng-' + a);
    Jd[b] = function () {
      return {
        priority: 99,
        link: function (c, d, e) {
          e.$observe(b, function (b) {
            b && (e.$set(a, b), Yc && d.prop(a, e[a]));
          });
        }
      };
    };
  });
  var Kd = {
      $addControl: n,
      $removeControl: n,
      $setValidity: n,
      $setDirty: n
    };
  Hc.$inject = [
    '$element',
    '$attrs',
    '$scope'
  ];
  var Ld = function (a) {
      return [
        '$timeout',
        function (b) {
          var d = {
              name: 'form',
              restrict: 'E',
              controller: Hc,
              compile: function () {
                return {
                  pre: function (a, d, e, f) {
                    if (!e.action) {
                      var g = function (a) {
                        a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                      };
                      hd(d[0], 'submit', g), d.bind('$destroy', function () {
                        b(function () {
                          id(d[0], 'submit', g);
                        }, 0, !1);
                      });
                    }
                    var h = d.parent().controller('form'), i = e.name || e.ngForm;
                    i && (a[i] = f), h && d.bind('$destroy', function () {
                      h.$removeControl(f), i && (a[i] = c), k(f, Kd);
                    });
                  }
                };
              }
            };
          return a ? k(H(d), { restrict: 'EAC' }) : d;
        }
      ];
    }, Md = Ld(), Nd = Ld(!0), Od = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Pd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, Qd = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Rd = {
      text: Jc,
      number: Kc,
      url: Lc,
      email: Mc,
      radio: Nc,
      checkbox: Oc,
      hidden: n,
      button: n,
      submit: n,
      reset: n
    }, Sd = [
      '$browser',
      '$sniffer',
      function (a, b) {
        return {
          restrict: 'E',
          require: '?ngModel',
          link: function (c, d, e, f) {
            f && (Rd[Qc(e.type)] || Rd.text)(c, d, e, f, b, a);
          }
        };
      }
    ], Td = 'ng-valid', Ud = 'ng-invalid', Vd = 'ng-pristine', Wd = 'ng-dirty', Xd = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      function (a, b, c, d, f) {
        function g(a, b) {
          b = b ? '-' + Y(b, '-') : '', d.removeClass((a ? Ud : Td) + b).addClass((a ? Td : Ud) + b);
        }
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = c.name;
        var h = f(c.ngModel), i = h.assign;
        if (!i)
          throw Error(sd + c.ngModel + ' (' + R(d) + ')');
        this.$render = n;
        var j = d.inheritedData('$formController') || Kd, k = 0, l = this.$error = {};
        d.addClass(Vd), g(!0), this.$setValidity = function (a, b) {
          l[a] !== !b && (b ? (l[a] && k--, k || (g(!0), this.$valid = !0, this.$invalid = !1)) : (g(!1), this.$invalid = !0, this.$valid = !1, k++), l[a] = !b, g(b, a), j.$setValidity(a, b, this));
        }, this.$setViewValue = function (c) {
          this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, d.removeClass(Vd).addClass(Wd), j.$setDirty()), e(this.$parsers, function (a) {
            c = a(c);
          }), this.$modelValue !== c && (this.$modelValue = c, i(a, c), e(this.$viewChangeListeners, function (a) {
            try {
              a();
            } catch (c) {
              b(c);
            }
          }));
        };
        var m = this;
        a.$watch(function () {
          var b = h(a);
          if (m.$modelValue !== b) {
            var c = m.$formatters, d = c.length;
            for (m.$modelValue = b; d--;)
              b = c[d](b);
            m.$viewValue !== b && (m.$viewValue = b, m.$render());
          }
        });
      }
    ], Yd = function () {
      return {
        require: [
          'ngModel',
          '^?form'
        ],
        controller: Xd,
        link: function (a, b, c, d) {
          var e = d[0], f = d[1] || Kd;
          f.$addControl(e), b.bind('$destroy', function () {
            f.$removeControl(e);
          });
        }
      };
    }, Zd = p({
      require: 'ngModel',
      link: function (a, b, c, d) {
        d.$viewChangeListeners.push(function () {
          a.$eval(c.ngChange);
        });
      }
    }), $d = function () {
      return {
        require: '?ngModel',
        link: function (a, b, c, d) {
          if (d) {
            c.required = !0;
            var e = function (a) {
              return c.required && (Ic(a) || a === !1) ? (d.$setValidity('required', !1), void 0) : (d.$setValidity('required', !0), a);
            };
            d.$formatters.push(e), d.$parsers.unshift(e), c.$observe('required', function () {
              e(d.$viewValue);
            });
          }
        }
      };
    }, _d = function () {
      return {
        require: 'ngModel',
        link: function (a, b, d, f) {
          var g = /\/(.*)\//.exec(d.ngList), h = g && new RegExp(g[1]) || d.ngList || ',', i = function (a) {
              var b = [];
              return a && e(a.split(h), function (a) {
                a && b.push(B(a));
              }), b;
            };
          f.$parsers.push(i), f.$formatters.push(function (a) {
            return w(a) ? a.join(', ') : c;
          });
        }
      };
    }, ae = /^(true|false|\d+)$/, be = function () {
      return {
        priority: 100,
        compile: function (a, b) {
          return ae.test(b.ngValue) ? function (a, b, c) {
            c.$set('value', a.$eval(c.ngValue));
          } : function (a, b, c) {
            a.$watch(c.ngValue, function (a) {
              c.$set('value', a, !1);
            });
          };
        }
      };
    }, ce = Gc(function (a, b, d) {
      b.addClass('ng-binding').data('$binding', d.ngBind), a.$watch(d.ngBind, function (a) {
        b.text(a == c ? '' : a);
      });
    }), de = [
      '$interpolate',
      function (a) {
        return function (b, c, d) {
          var e = a(c.attr(d.$attr.ngBindTemplate));
          c.addClass('ng-binding').data('$binding', e), d.$observe('ngBindTemplate', function (a) {
            c.text(a);
          });
        };
      }
    ], ee = [function () {
        return function (a, b, c) {
          b.addClass('ng-binding').data('$binding', c.ngBindHtmlUnsafe), a.$watch(c.ngBindHtmlUnsafe, function (a) {
            b.html(a || '');
          });
        };
      }], fe = Pc('', !0), ge = Pc('Odd', 0), he = Pc('Even', 1), ie = Gc({
      compile: function (a, b) {
        b.$set('ngCloak', c), a.removeClass('ng-cloak');
      }
    }), je = [function () {
        return {
          scope: !0,
          controller: '@'
        };
      }], ke = [
      '$sniffer',
      function (a) {
        return {
          priority: 1000,
          compile: function () {
            a.csp = !0;
          }
        };
      }
    ], le = {};
  e('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave'.split(' '), function (a) {
    var b = Fb('ng-' + a);
    le[b] = [
      '$parse',
      function (c) {
        return function (d, e, f) {
          var g = c(f[b]);
          e.bind(Qc(a), function (a) {
            d.$apply(function () {
              g(d, { $event: a });
            });
          });
        };
      }
    ];
  });
  var me = Gc(function (a, b, c) {
      b.bind('submit', function () {
        a.$apply(c.ngSubmit);
      });
    }), ne = [
      '$http',
      '$templateCache',
      '$anchorScroll',
      '$compile',
      function (a, b, c, d) {
        return {
          restrict: 'ECA',
          terminal: !0,
          compile: function (e, f) {
            var g = f.ngInclude || f.src, h = f.onload || '', i = f.autoscroll;
            return function (e, f) {
              var j, k = 0, l = function () {
                  j && (j.$destroy(), j = null), f.html('');
                };
              e.$watch(g, function (g) {
                var m = ++k;
                g ? a.get(g, { cache: b }).success(function (a) {
                  m === k && (j && j.$destroy(), j = e.$new(), f.html(a), d(f.contents())(j), !r(i) || i && !e.$eval(i) || c(), j.$emit('$includeContentLoaded'), e.$eval(h));
                }).error(function () {
                  m === k && l();
                }) : l();
              });
            };
          }
        };
      }
    ], oe = Gc({
      compile: function () {
        return {
          pre: function (a, b, c) {
            a.$eval(c.ngInit);
          }
        };
      }
    }), pe = Gc({
      terminal: !0,
      priority: 1000
    }), qe = [
      '$locale',
      '$interpolate',
      function (a, b) {
        var c = /{}/g;
        return {
          restrict: 'EA',
          link: function (d, f, g) {
            var h = g.count, i = f.attr(g.$attr.when), j = g.offset || 0, k = d.$eval(i), l = {}, m = b.startSymbol(), n = b.endSymbol();
            e(k, function (a, d) {
              l[d] = b(a.replace(c, m + h + '-' + j + n));
            }), d.$watch(function () {
              var b = parseFloat(d.$eval(h));
              return isNaN(b) ? '' : (b in k || (b = a.pluralCat(b - j)), l[b](d, f, !0));
            }, function (a) {
              f.text(a);
            });
          }
        };
      }
    ], re = Gc({
      transclude: 'element',
      priority: 1000,
      terminal: !0,
      compile: function (a, b, c) {
        return function (a, b, d) {
          var e, f, g, h, i = d.ngRepeat, j = i.match(/^\s*(.+)\s+in\s+(.*)\s*$/);
          if (!j)
            throw Error('Expected ngRepeat in form of \'_item_ in _collection_\' but got \'' + i + '\'.');
          if (e = j[1], f = j[2], j = e.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !j)
            throw Error('\'item\' in \'item in collection\' should be identifier or (key, value) but got \'' + e + '\'.');
          g = j[3] || j[1], h = j[2];
          var k = new wb();
          a.$watch(function (a) {
            var d, e, i, j, l, m, n, o, p = a.$eval(f), q = b, r = new wb();
            if (w(p))
              n = p || [];
            else {
              n = [];
              for (l in p)
                p.hasOwnProperty(l) && '$' != l.charAt(0) && n.push(l);
              n.sort();
            }
            for (i = n.length - 1, d = 0, e = n.length; e > d; d++)
              l = p === n ? d : n[d], m = p[l], o = k.shift(m), o ? (j = o.scope, r.push(m, o), d === o.index ? q = o.element : (o.index = d, q.after(o.element), q = o.element)) : j = a.$new(), j[g] = m, h && (j[h] = l), j.$index = d, j.$first = 0 === d, j.$last = d === i, j.$middle = !(j.$first || j.$last), o || c(j, function (a) {
                q.after(a), o = {
                  scope: j,
                  element: q = a,
                  index: d
                }, r.push(m, o);
              });
            for (l in k)
              if (k.hasOwnProperty(l))
                for (n = k[l]; n.length;)
                  m = n.pop(), m.element.remove(), m.scope.$destroy();
            k = r;
          });
        };
      }
    }), se = Gc(function (a, b, c) {
      a.$watch(c.ngShow, function (a) {
        b.css('display', Q(a) ? '' : 'none');
      });
    }), te = Gc(function (a, b, c) {
      a.$watch(c.ngHide, function (a) {
        b.css('display', Q(a) ? 'none' : '');
      });
    }), ue = Gc(function (a, b, c) {
      a.$watch(c.ngStyle, function (a, c) {
        c && a !== c && e(c, function (a, c) {
          b.css(c, '');
        }), a && b.css(a);
      }, !0);
    }), ve = p({
      restrict: 'EA',
      require: 'ngSwitch',
      controller: [
        '$scope',
        function () {
          this.cases = {};
        }
      ],
      link: function (a, b, c, d) {
        var e, f, g, h = c.ngSwitch || c.on;
        a.$watch(h, function (h) {
          f && (g.$destroy(), f.remove(), f = g = null), (e = d.cases['!' + h] || d.cases['?']) && (a.$eval(c.change), g = a.$new(), e(g, function (a) {
            f = a, b.append(a);
          }));
        });
      }
    }), we = Gc({
      transclude: 'element',
      priority: 500,
      require: '^ngSwitch',
      compile: function (a, b, c) {
        return function (a, d, e, f) {
          f.cases['!' + b.ngSwitchWhen] = c;
        };
      }
    }), xe = Gc({
      transclude: 'element',
      priority: 500,
      require: '^ngSwitch',
      compile: function (a, b, c) {
        return function (a, b, d, e) {
          e.cases['?'] = c;
        };
      }
    }), ye = Gc({
      controller: [
        '$transclude',
        '$element',
        function (a, b) {
          a(function (a) {
            b.append(a);
          });
        }
      ]
    }), ze = [
      '$http',
      '$templateCache',
      '$route',
      '$anchorScroll',
      '$compile',
      '$controller',
      function (a, b, c, d, e, f) {
        return {
          restrict: 'ECA',
          terminal: !0,
          link: function (a, b, g) {
            function h() {
              k && (k.$destroy(), k = null);
            }
            function i() {
              b.html(''), h();
            }
            function j() {
              var g = c.current && c.current.locals, j = g && g.$template;
              if (j) {
                b.html(j), h();
                var m, n = e(b.contents()), o = c.current;
                k = o.scope = a.$new(), o.controller && (g.$scope = k, m = f(o.controller, g), b.children().data('$ngControllerController', m)), n(k), k.$emit('$viewContentLoaded'), k.$eval(l), d();
              } else
                i();
            }
            var k, l = g.onload || '';
            a.$on('$routeChangeSuccess', j), j();
          }
        };
      }
    ], Ae = [
      '$templateCache',
      function (a) {
        return {
          restrict: 'E',
          terminal: !0,
          compile: function (b, c) {
            if ('text/ng-template' == c.type) {
              var d = c.id, e = b[0].text;
              a.put(d, e);
            }
          }
        };
      }
    ], Be = p({ terminal: !0 }), Ce = [
      '$compile',
      '$parse',
      function (a, d) {
        var g = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/, h = { $setViewValue: n };
        return {
          restrict: 'E',
          require: [
            'select',
            '?ngModel'
          ],
          controller: [
            '$element',
            '$scope',
            '$attrs',
            function (a, b, c) {
              var d, e, f = this, g = {}, i = h;
              f.databound = c.ngModel, f.init = function (a, b, c) {
                i = a, d = b, e = c;
              }, f.addOption = function (b) {
                g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove());
              }, f.removeOption = function (a) {
                this.hasOption(a) && (delete g[a], i.$viewValue == a && this.renderUnknownOption(a));
              }, f.renderUnknownOption = function (b) {
                var c = '? ' + ub(b) + ' ?';
                e.val(c), a.prepend(e), a.val(c), e.prop('selected', !0);
              }, f.hasOption = function (a) {
                return g.hasOwnProperty(a);
              }, b.$on('$destroy', function () {
                f.renderUnknownOption = n;
              });
            }
          ],
          link: function (h, i, j, k) {
            function l(a, b, c, d) {
              c.$render = function () {
                var a = c.$viewValue;
                d.hasOption(a) ? (y.parent() && y.remove(), b.val(a), '' === a && o.prop('selected', !0)) : q(a) && o ? b.val('') : d.renderUnknownOption(a);
              }, b.bind('change', function () {
                a.$apply(function () {
                  y.parent() && y.remove(), c.$setViewValue(b.val());
                });
              });
            }
            function m(a, b, c) {
              var d;
              c.$render = function () {
                var a = new vb(c.$viewValue);
                e(b.find('option'), function (b) {
                  b.selected = r(a.get(b.value));
                });
              }, a.$watch(function () {
                J(d, c.$viewValue) || (d = H(c.$viewValue), c.$render());
              }), b.bind('change', function () {
                a.$apply(function () {
                  var a = [];
                  e(b.find('option'), function (b) {
                    b.selected && a.push(b.value);
                  }), c.$setViewValue(a);
                });
              });
            }
            function n(b, e, h) {
              function i() {
                var a, d, g, i, j, r, s, u, y, z, A, B, C, D, E = { '': [] }, F = [''], G = h.$modelValue, H = p(b) || [], I = m ? f(H) : H, J = {}, K = !1;
                for (t && (K = new vb(G)), z = 0; u = I.length, u > z; z++)
                  J[l] = H[m ? J[m] = I[z] : z], a = n(b, J) || '', (d = E[a]) || (d = E[a] = [], F.push(a)), t ? A = K.remove(o(b, J)) != c : (A = G === o(b, J), K = K || A), D = k(b, J), D = D === c ? '' : D, d.push({
                    id: m ? I[z] : z,
                    label: D,
                    selected: A
                  });
                for (t || (v || null === G ? E[''].unshift({
                    id: '',
                    label: '',
                    selected: !K
                  }) : K || E[''].unshift({
                    id: '?',
                    label: '',
                    selected: !0
                  })), y = 0, s = F.length; s > y; y++) {
                  for (a = F[y], d = E[a], q.length <= y ? (i = {
                      element: x.clone().attr('label', a),
                      label: d.label
                    }, j = [i], q.push(j), e.append(i.element)) : (j = q[y], i = j[0], i.label != a && i.element.attr('label', i.label = a)), B = null, z = 0, u = d.length; u > z; z++)
                    g = d[z], (r = j[z + 1]) ? (B = r.element, r.label !== g.label && B.text(r.label = g.label), r.id !== g.id && B.val(r.id = g.id), B[0].selected !== g.selected && B.prop('selected', r.selected = g.selected)) : ('' === g.id && v ? C = v : (C = w.clone()).val(g.id).attr('selected', g.selected).text(g.label), j.push(r = {
                      element: C,
                      label: g.label,
                      id: g.id,
                      selected: g.selected
                    }), B ? B.after(C) : i.element.append(C), B = C);
                  for (z++; j.length > z;)
                    j.pop().element.remove();
                }
                for (; q.length > y;)
                  q.pop()[0].element.remove();
              }
              var j;
              if (!(j = u.match(g)))
                throw Error('Expected ngOptions in form of \'_select_ (as _label_)? for (_key_,)?_value_ in _collection_\' but got \'' + u + '\'.');
              var k = d(j[2] || j[1]), l = j[4] || j[6], m = j[5], n = d(j[3] || ''), o = d(j[2] ? j[1] : l), p = d(j[7]), q = [[{
                      element: e,
                      label: ''
                    }]];
              v && (a(v)(b), v.removeClass('ng-scope'), v.remove()), e.html(''), e.bind('change', function () {
                b.$apply(function () {
                  var a, d, f, g, i, j, k, n, r = p(b) || [], s = {};
                  if (t)
                    for (f = [], j = 0, n = q.length; n > j; j++)
                      for (a = q[j], i = 1, k = a.length; k > i; i++)
                        (g = a[i].element)[0].selected && (d = g.val(), m && (s[m] = d), s[l] = r[d], f.push(o(b, s)));
                  else
                    d = e.val(), '?' == d ? f = c : '' == d ? f = null : (s[l] = r[d], m && (s[m] = d), f = o(b, s));
                  h.$setViewValue(f);
                });
              }), h.$render = i, b.$watch(i);
            }
            if (k[1]) {
              for (var o, p = k[0], s = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = Uc(b.createElement('option')), x = Uc(b.createElement('optgroup')), y = w.clone(), z = 0, A = i.children(), B = A.length; B > z; z++)
                if ('' == A[z].value) {
                  o = v = A.eq(z);
                  break;
                }
              if (p.init(s, v, y), t && (j.required || j.ngRequired)) {
                var C = function (a) {
                  return s.$setValidity('required', !j.required || a && a.length), a;
                };
                s.$parsers.push(C), s.$formatters.unshift(C), j.$observe('required', function () {
                  C(s.$viewValue);
                });
              }
              u ? n(h, i, s) : t ? m(h, i, s) : l(h, i, s, p);
            }
          }
        };
      }
    ], De = [
      '$interpolate',
      function (a) {
        var b = {
            addOption: n,
            removeOption: n
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (c, d) {
            if (q(d.value)) {
              var e = a(c.text(), !0);
              e || d.$set('value', c.text());
            }
            return function (a, c, d) {
              var f = '$selectController', g = c.parent(), h = g.data(f) || g.parent().data(f);
              h && h.databound ? c.prop('selected', !1) : h = b, e ? a.$watch(e, function (a, b) {
                d.$set('value', a), a !== b && h.removeOption(b), h.addOption(a);
              }) : h.addOption(d.value), c.bind('$destroy', function () {
                h.removeOption(d.value);
              });
            };
          }
        };
      }
    ], Ee = p({
      restrict: 'E',
      terminal: !0
    });
  Z(), bb(ad), Uc(b).ready(function () {
    W(b, X);
  });
}(window, document), angular.element(document).find('head').append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>'), function (a, b, c) {
  'use strict';
  b.module('ngResource', ['ng']).factory('$resource', [
    '$http',
    '$parse',
    function (a, d) {
      function e(a) {
        return f(a, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
      }
      function f(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, b ? '%20' : '+');
      }
      function g(a, b) {
        this.template = a += '#', this.defaults = b || {};
        var c = this.urlParams = {};
        k(a.split(/\W/), function (b) {
          b && new RegExp('(^|[^\\\\]):' + b + '\\W').test(a) && (c[b] = !0);
        }), this.template = a.replace(/\\:/g, ':');
      }
      function h(d, e, f) {
        function p(a, b) {
          var c = {};
          return b = l({}, e, b), k(b, function (b, d) {
            c[d] = b.charAt && '@' == b.charAt(0) ? o(a, b.substr(1)) : b;
          }), c;
        }
        function q(a) {
          m(a || {}, this);
        }
        var r = new g(d);
        return f = l({}, i, f), k(f, function (d, e) {
          d.method = b.uppercase(d.method);
          var f = 'POST' == d.method || 'PUT' == d.method || 'PATCH' == d.method;
          q[e] = function (b, c, e, g) {
            var h, i = {}, o = j, s = null;
            switch (arguments.length) {
            case 4:
              s = g, o = e;
            case 3:
            case 2:
              if (!n(c)) {
                i = b, h = c, o = e;
                break;
              }
              if (n(b)) {
                o = b, s = c;
                break;
              }
              o = c, s = e;
            case 1:
              n(b) ? o = b : f ? h = b : i = b;
              break;
            case 0:
              break;
            default:
              throw 'Expected between 0-4 arguments [params, data, success, error], got ' + arguments.length + ' arguments.';
            }
            var t = this instanceof q ? this : d.isArray ? [] : new q(h);
            return a({
              method: d.method,
              url: r.url(l({}, p(h, d.params || {}), i)),
              data: h
            }).then(function (a) {
              var b = a.data;
              b && (d.isArray ? (t.length = 0, k(b, function (a) {
                t.push(new q(a));
              })) : m(b, t)), (o || j)(t, a.headers);
            }, s), t;
          }, q.prototype['$' + e] = function (a, b, d) {
            var g, h = p(this), i = j;
            switch (arguments.length) {
            case 3:
              h = a, i = b, g = d;
              break;
            case 2:
            case 1:
              n(a) ? (i = a, g = b) : (h = a, i = b || j);
            case 0:
              break;
            default:
              throw 'Expected between 1-3 arguments [params, success, error], got ' + arguments.length + ' arguments.';
            }
            var k = f ? this : c;
            q[e].call(this, h, k, i, g);
          };
        }), q.bind = function (a) {
          return h(d, l({}, e, a), f);
        }, q;
      }
      var i = {
          get: { method: 'GET' },
          save: { method: 'POST' },
          query: {
            method: 'GET',
            isArray: !0
          },
          remove: { method: 'DELETE' },
          'delete': { method: 'DELETE' }
        }, j = b.noop, k = b.forEach, l = b.extend, m = b.copy, n = b.isFunction, o = function (a, b) {
          return d(b)(a);
        };
      return g.prototype = {
        url: function (a) {
          var c, d, g = this, h = this.template;
          a = a || {}, k(this.urlParams, function (f, i) {
            c = a.hasOwnProperty(i) ? a[i] : g.defaults[i], b.isDefined(c) && null !== c ? (d = e(c), h = h.replace(new RegExp(':' + i + '(\\W)', 'g'), d + '$1')) : h = h.replace(new RegExp('(/?):' + i + '(\\W)', 'g'), function (a, b, c) {
              return '/' == c.charAt(0) ? c : b + c;
            });
          }), h = h.replace(/\/?#$/, '');
          var i = [];
          return k(a, function (a, b) {
            g.urlParams[b] || i.push(f(b) + '=' + f(a));
          }), i.sort(), h = h.replace(/\/*$/, ''), h + (i.length ? '?' + i.join('&') : '');
        }
      }, h;
    }
  ]);
}(window, window.angular), function (a, b, c) {
  'use strict';
  b.module('ngCookies', ['ng']).factory('$cookies', [
    '$rootScope',
    '$browser',
    function (a, d) {
      function e() {
        var a, e, f, i;
        for (a in h)
          k(g[a]) && d.cookies(a, c);
        for (a in g)
          e = g[a], b.isString(e) ? e !== h[a] && (d.cookies(a, e), i = !0) : b.isDefined(h[a]) ? g[a] = h[a] : delete g[a];
        if (i) {
          i = !1, f = d.cookies();
          for (a in g)
            g[a] !== f[a] && (k(f[a]) ? delete g[a] : g[a] = f[a], i = !0);
        }
      }
      var f, g = {}, h = {}, i = !1, j = b.copy, k = b.isUndefined;
      return d.addPollFn(function () {
        var b = d.cookies();
        f != b && (f = b, j(b, h), j(b, g), i && a.$apply());
      })(), i = !0, a.$watch(e), g;
    }
  ]).factory('$cookieStore', [
    '$cookies',
    function (a) {
      return {
        get: function (c) {
          var d = a[c];
          return d ? b.fromJson(d) : d;
        },
        put: function (c, d) {
          a[c] = b.toJson(d);
        },
        remove: function (b) {
          delete a[b];
        }
      };
    }
  ]);
}(window, window.angular), function (a, b) {
  'use strict';
  function c(a) {
    var b, c = {}, d = a.split(',');
    for (b = 0; b < d.length; b++)
      c[d[b]] = !0;
    return c;
  }
  function d(a, c) {
    function d(a, d, g, h) {
      if (d = b.lowercase(d), v[d])
        for (; q.last() && w[q.last()];)
          f('', q.last());
      u[d] && q.last() == d && f('', d), h = r[d] || !!h, h || q.push(d);
      var i = {};
      g.replace(k, function (a, b, c, d, f) {
        var g = c || d || f || '';
        i[b] = e(g);
      }), c.start && c.start(d, i, h);
    }
    function f(a, d) {
      var e, f = 0;
      if (d = b.lowercase(d))
        for (f = q.length - 1; f >= 0 && q[f] != d; f--);
      if (f >= 0) {
        for (e = q.length - 1; e >= f; e--)
          c.end && c.end(q[e]);
        q.length = f;
      }
    }
    var g, h, p, q = [], s = a;
    for (q.last = function () {
        return q[q.length - 1];
      }; a;) {
      if (h = !0, q.last() && x[q.last()])
        a = a.replace(new RegExp('(.*)<\\s*\\/\\s*' + q.last() + '[^>]*>', 'i'), function (a, b) {
          return b = b.replace(n, '$1').replace(o, '$1'), c.chars && c.chars(e(b)), '';
        }), f('', q.last());
      else if (0 === a.indexOf('<!--') ? (g = a.indexOf('-->'), g >= 0 && (c.comment && c.comment(a.substring(4, g)), a = a.substring(g + 3), h = !1)) : m.test(a) ? (p = a.match(j), p && (a = a.substring(p[0].length), p[0].replace(j, f), h = !1)) : l.test(a) && (p = a.match(i), p && (a = a.substring(p[0].length), p[0].replace(i, d), h = !1)), h) {
        g = a.indexOf('<');
        var t = 0 > g ? a : a.substring(0, g);
        a = 0 > g ? '' : a.substring(g), c.chars && c.chars(e(t));
      }
      if (a == s)
        throw 'Parse Error: ' + a;
      s = a;
    }
    f();
  }
  function e(a) {
    return B.innerHTML = a.replace(/</g, '&lt;'), B.innerText || B.textContent || '';
  }
  function f(a) {
    return a.replace(/&/g, '&amp;').replace(q, function (a) {
      return '&#' + a.charCodeAt(0) + ';';
    }).replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function g(a) {
    var c = !1, d = b.bind(a, a.push);
    return {
      start: function (a, e, g) {
        a = b.lowercase(a), !c && x[a] && (c = a), c || 1 != y[a] || (d('<'), d(a), b.forEach(e, function (a, c) {
          var e = b.lowercase(c);
          1 != A[e] || z[e] === !0 && !a.match(p) || (d(' '), d(c), d('="'), d(f(a)), d('"'));
        }), d(g ? '/>' : '>'));
      },
      end: function (a) {
        a = b.lowercase(a), c || 1 != y[a] || (d('</'), d(a), d('>')), a == c && (c = !1);
      },
      chars: function (a) {
        c || d(f(a));
      }
    };
  }
  var h = function (a) {
      var b = [];
      return d(a, g(b)), b.join('');
    }, i = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/, j = /^<\s*\/\s*([\w:-]+)[^>]*>/, k = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, l = /^</, m = /^<\s*\//, n = /<!--(.*?)-->/g, o = /<!\[CDATA\[(.*?)]]>/g, p = /^((ftp|https?):\/\/|mailto:|#)/, q = /([^\#-~| |!])/g, r = c('area,br,col,hr,img,wbr'), s = c('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'), t = c('rp,rt'), u = b.extend({}, t, s), v = b.extend({}, s, c('address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul')), w = b.extend({}, t, c('a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var')), x = c('script,style'), y = b.extend({}, r, v, w, u), z = c('background,cite,href,longdesc,src,usemap'), A = b.extend({}, z, c('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width')), B = document.createElement('pre');
  b.module('ngSanitize', []).value('$sanitize', h), b.module('ngSanitize').directive('ngBindHtml', [
    '$sanitize',
    function (a) {
      return function (b, c, d) {
        c.addClass('ng-binding').data('$binding', d.ngBindHtml), b.$watch(d.ngBindHtml, function (b) {
          b = a(b), c.html(b || '');
        });
      };
    }
  ]), b.module('ngSanitize').filter('linky', function () {
    var a = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s\.\;\,\(\)\{\}\<\>]/, b = /^mailto:/;
    return function (c) {
      if (!c)
        return c;
      for (var d, e, f, h = c, i = [], j = g(i); d = h.match(a);)
        e = d[0], d[2] == d[3] && (e = 'mailto:' + e), f = d.index, j.chars(h.substr(0, f)), j.start('a', { href: e }), j.chars(d[0].replace(b, '')), j.end('a'), h = h.substring(f + d[0].length);
      return j.chars(h), i.join('');
    };
  });
}(window, window.angular), angular.module('kirtanApp', [
  'kirtanApp.routes',
  'kirtanApp.login',
  'kirtanApp.watch'
]);
var routesModule = angular.module('kirtanApp.routes', ['kirtanApp.home']);
routesModule.controller('MainCtl', [
  '$scope',
  '$route',
  '$routeParams',
  '$location',
  function (a, b, c, d) {
    a.$route = b, a.$location = d, a.$routeParams = c, a.$on('$viewContentLoaded', function () {
      $(document).foundation();
    });
  }
]), routesModule.config([
  '$routeProvider',
  '$locationProvider',
  function (a, b) {
    b.html5Mode(!0), a.when('/', {
      templateUrl: '/views/main.html',
      controller: 'HomeCtl',
      title: 'Welcome'
    }).when('/watch/:uploadHref', {
      templateUrl: '/views/watch.html',
      controller: 'WatchCtl',
      title: 'Watch'
    }).otherwise({
      templateUrl: '404',
      title: 'Not found'
    });
  }
]), routesModule.run([
  '$rootScope',
  function (a) {
    a.pageTitle = 'Welcome', a.$on('$routeChangeSuccess', function (b, c) {
      a.pageTitle = c.title;
    });
  }
]);
var loginModule = angular.module('kirtanApp.login', []);
loginModule.controller('LoginCtl', [
  '$scope',
  '$http',
  '$rootScope',
  function (a, b, c) {
    a.user = {}, a.method = 'POST', a.url = '/login', a.login = function () {
      b({
        method: a.method,
        url: a.url,
        data: 'login=' + angular.toJson(a.user),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).success(function (a) {
        c.user = angular.fromJson(a);
      }).error(function (a) {
        console.log(a);
      });
    };
  }
]), loginModule.controller('LogoutCtl', [
  '$scope',
  '$http',
  '$rootScope',
  '$location',
  function (a, b, c, d) {
    a.method = 'POST', a.url = '/logout', a.logout = function () {
      b({
        method: a.method,
        url: a.url
      }).success(function () {
        c.user = null, d.path('/');
      }).error(function (a) {
        console.log(a);
      });
    };
  }
]), angular.module('kirtanApp.home', []).controller('HomeCtl', [
  '$scope',
  function (a) {
    a.name = 'HomeCtl', a.params = a.$routeParams, a.latestUploads = [
      {
        id: 'dCXENBX38qE',
        name: 'Hare Krishna',
        href: 'hare-krishna'
      },
      {
        id: 'dCXENBX38qE',
        name: 'Hare Krishna 2',
        href: 'hare-krishna-1'
      },
      {
        id: 'dCXENBX38qE',
        name: 'Hare Krishna 3',
        href: 'hare-krishna-2'
      }
    ];
  }
]), angular.module('kirtanApp.watch', []).controller('WatchCtl', [
  '$scope',
  '$rootScope',
  function (a, b) {
    a.name = 'WatchCtl', a.params = a.$routeParams, a.upload = {
      id: 'dCXENBX38qE',
      name: 'Hare Krishna',
      href: 'hare-krishna'
    }, b.pageTitle = 'Watch ' + a.upload.name;
  }
]);