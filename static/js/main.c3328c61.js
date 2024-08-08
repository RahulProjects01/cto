/*! For license information please see main.c3328c61.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      144: (e, t, n) => {
        var a = n(60),
          r = n(724);
        function s(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function o(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          m = {},
          p = {};
        function h(e, t, n, a, r, s, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = a),
            (this.attributeNamespace = r),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = s),
            (this.removeEmptyString = l);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, n, a) {
          var r = g.hasOwnProperty(t) ? g[t] : null;
          (null !== r
            ? 0 !== r.type
            : a ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, a) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, a) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !a &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, a)
              )
                return !0;
              if (a) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, r, a) && (n = null),
            a || null === r
              ? (function (e) {
                  return (
                    !!d.call(p, e) ||
                    (!d.call(m, e) &&
                      (f.test(e) ? (p[e] = !0) : ((m[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : r.mustUseProperty
              ? (e[r.propertyName] = null === n ? 3 !== r.type && "" : n)
              : ((t = r.attributeName),
                (a = r.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (r = r.type) || (4 === r && !0 === n)
                        ? ""
                        : "" + n),
                    a ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, b);
            g[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, b);
              g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, b);
            g[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          w = Symbol.for("react.portal"),
          j = Symbol.for("react.fragment"),
          N = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          z = Symbol.for("react.provider"),
          E = Symbol.for("react.context"),
          C = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          P = Symbol.for("react.suspense_list"),
          T = Symbol.for("react.memo"),
          L = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var M = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function O(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var q,
          D = Object.assign;
        function F(e) {
          if (void 0 === q)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              q = (t && t[1]) || "";
            }
          return "\n" + q + e;
        }
        var I = !1;
        function U(e, t) {
          if (!e || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var a = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  a = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                a = c;
              }
              e();
            }
          } catch (c) {
            if (c && a && "string" === typeof c.stack) {
              for (
                var r = c.stack.split("\n"),
                  s = a.stack.split("\n"),
                  l = r.length - 1,
                  i = s.length - 1;
                1 <= l && 0 <= i && r[l] !== s[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (r[l] !== s[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || r[l] !== s[i])) {
                        var o = "\n" + r[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            o.includes("<anonymous>") &&
                            (o = o.replace("<anonymous>", e.displayName)),
                          o
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function A(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case j:
              return "Fragment";
            case w:
              return "Portal";
            case S:
              return "Profiler";
            case N:
              return "StrictMode";
            case _:
              return "Suspense";
            case P:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case E:
                return (e.displayName || "Context") + ".Consumer";
              case z:
                return (e._context.displayName || "Context") + ".Provider";
              case C:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case T:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function $(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === N ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function H(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                a = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var r = n.get,
                  s = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return r.call(this);
                    },
                    set: function (e) {
                      (a = "" + e), s.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return a;
                    },
                    setValue: function (e) {
                      a = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            a = "";
          return (
            e && (a = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = a) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            a = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: a,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && y(e, "checked", t, !1);
        }
        function Z(e, t) {
          G(e, t);
          var n = V(t.value),
            a = t.type;
          if (null != n)
            "number" === a
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === a || "reset" === a)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var a = t.type;
            if (
              !(
                ("submit" !== a && "reset" !== a) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, a) {
          if (((e = e.options), t)) {
            t = {};
            for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
            for (n = 0; n < e.length; n++)
              (r = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== r && (e[n].selected = r),
                r && a && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, r = 0; r < e.length; r++) {
              if (e[r].value === n)
                return (
                  (e[r].selected = !0), void (a && (e[r].defaultSelected = !0))
                );
              null !== t || e[r].disabled || (t = e[r]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ae(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(s(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function re(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(s(92));
              if (te(n)) {
                if (1 < n.length) throw Error(s(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function se(e, t) {
          var n = V(t.value),
            a = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != a && (e.defaultValue = "" + a);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function oe(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, a) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var me = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          pe = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (me.hasOwnProperty(e) && me[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var a = 0 === n.indexOf("--"),
                r = he(n, t[n], a);
              "float" === n && (n = "cssFloat"),
                a ? e.setProperty(n, r) : (e[n] = r);
            }
        }
        Object.keys(me).forEach(function (e) {
          pe.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (me[t] = me[e]);
          });
        });
        var ve = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function be(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(s(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(s(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(s(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(s(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          je = null,
          Ne = null;
        function Se(e) {
          if ((e = yr(e))) {
            if ("function" !== typeof we) throw Error(s(280));
            var t = e.stateNode;
            t && ((t = kr(t)), we(e.stateNode, e.type, t));
          }
        }
        function ze(e) {
          je ? (Ne ? Ne.push(e) : (Ne = [e])) : (je = e);
        }
        function Ee() {
          if (je) {
            var e = je,
              t = Ne;
            if (((Ne = je = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function Ce(e, t) {
          return e(t);
        }
        function _e() {}
        var Pe = !1;
        function Te(e, t, n) {
          if (Pe) return e(t, n);
          Pe = !0;
          try {
            return Ce(e, t, n);
          } finally {
            (Pe = !1), (null !== je || null !== Ne) && (_e(), Ee());
          }
        }
        function Le(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var a = kr(n);
          if (null === a) return null;
          n = a[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (a = !a.disabled) ||
                (a = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !a);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(s(231, t, typeof n));
          return n;
        }
        var Me = !1;
        if (u)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ue) {
            Me = !1;
          }
        function Oe(e, t, n, a, r, s, l, i, o) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var qe = !1,
          De = null,
          Fe = !1,
          Ie = null,
          Ue = {
            onError: function (e) {
              (qe = !0), (De = e);
            },
          };
        function Ae(e, t, n, a, r, s, l, i, o) {
          (qe = !1), (De = null), Oe.apply(Ue, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function $e(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (Be(e) !== e) throw Error(s(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(s(188));
                return t !== e ? null : e;
              }
              for (var n = e, a = t; ; ) {
                var r = n.return;
                if (null === r) break;
                var l = r.alternate;
                if (null === l) {
                  if (null !== (a = r.return)) {
                    n = a;
                    continue;
                  }
                  break;
                }
                if (r.child === l.child) {
                  for (l = r.child; l; ) {
                    if (l === n) return Ve(r), e;
                    if (l === a) return Ve(r), t;
                    l = l.sibling;
                  }
                  throw Error(s(188));
                }
                if (n.return !== a.return) (n = r), (a = l);
                else {
                  for (var i = !1, o = r.child; o; ) {
                    if (o === n) {
                      (i = !0), (n = r), (a = l);
                      break;
                    }
                    if (o === a) {
                      (i = !0), (a = r), (n = l);
                      break;
                    }
                    o = o.sibling;
                  }
                  if (!i) {
                    for (o = l.child; o; ) {
                      if (o === n) {
                        (i = !0), (n = l), (a = r);
                        break;
                      }
                      if (o === a) {
                        (i = !0), (a = l), (n = r);
                        break;
                      }
                      o = o.sibling;
                    }
                    if (!i) throw Error(s(189));
                  }
                }
                if (n.alternate !== a) throw Error(s(190));
              }
              if (3 !== n.tag) throw Error(s(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? He(e)
            : null;
        }
        function He(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = He(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = r.unstable_scheduleCallback,
          Ye = r.unstable_cancelCallback,
          Xe = r.unstable_shouldYield,
          Ke = r.unstable_requestPaint,
          Ge = r.unstable_now,
          Ze = r.unstable_getCurrentPriorityLevel,
          Je = r.unstable_ImmediatePriority,
          et = r.unstable_UserBlockingPriority,
          tt = r.unstable_NormalPriority,
          nt = r.unstable_LowPriority,
          at = r.unstable_IdlePriority,
          rt = null,
          st = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((it(e) / ot) | 0)) | 0;
              },
          it = Math.log,
          ot = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var a = 0,
            r = e.suspendedLanes,
            s = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~r;
            0 !== i ? (a = dt(i)) : 0 !== (s &= l) && (a = dt(s));
          } else 0 !== (l = n & ~r) ? (a = dt(l)) : 0 !== s && (a = dt(s));
          if (0 === a) return 0;
          if (
            0 !== t &&
            t !== a &&
            0 === (t & r) &&
            ((r = a & -a) >= (s = t & -t) || (16 === r && 0 !== (4194240 & s)))
          )
            return t;
          if ((0 !== (4 & a) && (a |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= a; 0 < t; )
              (r = 1 << (n = 31 - lt(t))), (a |= e[n]), (t &= ~r);
          return a;
        }
        function mt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function pt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function bt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var a = 31 - lt(n),
              r = 1 << a;
            (r & t) | (e[a] & t) && (e[a] |= t), (n &= ~r);
          }
        }
        var yt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          wt,
          jt,
          Nt,
          St,
          zt = !1,
          Et = [],
          Ct = null,
          _t = null,
          Pt = null,
          Tt = new Map(),
          Lt = new Map(),
          Mt = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Ot(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Ct = null;
              break;
            case "dragenter":
            case "dragleave":
              _t = null;
              break;
            case "mouseover":
            case "mouseout":
              Pt = null;
              break;
            case "pointerover":
            case "pointerout":
              Tt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Lt.delete(t.pointerId);
          }
        }
        function qt(e, t, n, a, r, s) {
          return null === e || e.nativeEvent !== s
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: a,
                nativeEvent: s,
                targetContainers: [r],
              }),
              null !== t && null !== (t = yr(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= a),
              (t = e.targetContainers),
              null !== r && -1 === t.indexOf(r) && t.push(r),
              e);
        }
        function Dt(e) {
          var t = br(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = $e(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      jt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = yr(n)) && wt(t), (e.blockedOn = n), !1;
            var a = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = a), n.target.dispatchEvent(a), (xe = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Ut() {
          (zt = !1),
            null !== Ct && Ft(Ct) && (Ct = null),
            null !== _t && Ft(_t) && (_t = null),
            null !== Pt && Ft(Pt) && (Pt = null),
            Tt.forEach(It),
            Lt.forEach(It);
        }
        function At(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            zt ||
              ((zt = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, Ut)));
        }
        function Bt(e) {
          function t(t) {
            return At(t, e);
          }
          if (0 < Et.length) {
            At(Et[0], e);
            for (var n = 1; n < Et.length; n++) {
              var a = Et[n];
              a.blockedOn === e && (a.blockedOn = null);
            }
          }
          for (
            null !== Ct && At(Ct, e),
              null !== _t && At(_t, e),
              null !== Pt && At(Pt, e),
              Tt.forEach(t),
              Lt.forEach(t),
              n = 0;
            n < Mt.length;
            n++
          )
            (a = Mt[n]).blockedOn === e && (a.blockedOn = null);
          for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn; )
            Dt(n), null === n.blockedOn && Mt.shift();
        }
        var $t = x.ReactCurrentBatchConfig,
          Vt = !0;
        function Wt(e, t, n, a) {
          var r = yt,
            s = $t.transition;
          $t.transition = null;
          try {
            (yt = 1), Qt(e, t, n, a);
          } finally {
            (yt = r), ($t.transition = s);
          }
        }
        function Ht(e, t, n, a) {
          var r = yt,
            s = $t.transition;
          $t.transition = null;
          try {
            (yt = 4), Qt(e, t, n, a);
          } finally {
            (yt = r), ($t.transition = s);
          }
        }
        function Qt(e, t, n, a) {
          if (Vt) {
            var r = Xt(e, t, n, a);
            if (null === r) Va(e, t, a, Yt, n), Ot(e, a);
            else if (
              (function (e, t, n, a, r) {
                switch (t) {
                  case "focusin":
                    return (Ct = qt(Ct, e, t, n, a, r)), !0;
                  case "dragenter":
                    return (_t = qt(_t, e, t, n, a, r)), !0;
                  case "mouseover":
                    return (Pt = qt(Pt, e, t, n, a, r)), !0;
                  case "pointerover":
                    var s = r.pointerId;
                    return Tt.set(s, qt(Tt.get(s) || null, e, t, n, a, r)), !0;
                  case "gotpointercapture":
                    return (
                      (s = r.pointerId),
                      Lt.set(s, qt(Lt.get(s) || null, e, t, n, a, r)),
                      !0
                    );
                }
                return !1;
              })(r, e, t, n, a)
            )
              a.stopPropagation();
            else if ((Ot(e, a), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== r; ) {
                var s = yr(r);
                if (
                  (null !== s && kt(s),
                  null === (s = Xt(e, t, n, a)) && Va(e, t, a, Yt, n),
                  s === r)
                )
                  break;
                r = s;
              }
              null !== r && a.stopPropagation();
            } else Va(e, t, a, null, n);
          }
        }
        var Yt = null;
        function Xt(e, t, n, a) {
          if (((Yt = null), null !== (e = br((e = ke(a))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = $e(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Kt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case at:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            a = n.length,
            r = "value" in Gt ? Gt.value : Gt.textContent,
            s = r.length;
          for (e = 0; e < a && n[e] === r[e]; e++);
          var l = a - e;
          for (t = 1; t <= l && n[a - t] === r[s - t]; t++);
          return (Jt = r.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function an() {
          return !1;
        }
        function rn(e) {
          function t(t, n, a, r, s) {
            for (var l in ((this._reactName = t),
            (this._targetInst = a),
            (this.type = n),
            (this.nativeEvent = r),
            (this.target = s),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(r) : r[l]));
            return (
              (this.isDefaultPrevented = (
                null != r.defaultPrevented
                  ? r.defaultPrevented
                  : !1 === r.returnValue
              )
                ? nn
                : an),
              (this.isPropagationStopped = an),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var sn,
          ln,
          on,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = rn(cn),
          dn = D({}, cn, { view: 0, detail: 0 }),
          fn = rn(dn),
          mn = D({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== on &&
                    (on && "mousemove" === e.type
                      ? ((sn = e.screenX - on.screenX),
                        (ln = e.screenY - on.screenY))
                      : (ln = sn = 0),
                    (on = e)),
                  sn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          pn = rn(mn),
          hn = rn(D({}, mn, { dataTransfer: 0 })),
          gn = rn(D({}, dn, { relatedTarget: 0 })),
          vn = rn(
            D({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          bn = D({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          yn = rn(bn),
          xn = rn(D({}, cn, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          wn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          jn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Nn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = jn[e]) && !!t[e];
        }
        function Sn() {
          return Nn;
        }
        var zn = D({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? wn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          En = rn(zn),
          Cn = rn(
            D({}, mn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          _n = rn(
            D({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn,
            })
          ),
          Pn = rn(
            D({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tn = D({}, mn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = rn(Tn),
          Mn = [9, 13, 27, 32],
          Rn = u && "CompositionEvent" in window,
          On = null;
        u && "documentMode" in document && (On = document.documentMode);
        var qn = u && "TextEvent" in window && !On,
          Dn = u && (!Rn || (On && 8 < On && 11 >= On)),
          Fn = String.fromCharCode(32),
          In = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function An(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var $n = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!$n[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, a) {
          ze(a),
            0 < (t = Ha(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, a)),
              e.push({ event: n, listeners: t }));
        }
        var Hn = null,
          Qn = null;
        function Yn(e) {
          Fa(e, 0);
        }
        function Xn(e) {
          if (Q(xr(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (u) {
          var Zn;
          if (u) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var ea = document.createElement("div");
              ea.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof ea.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Gn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function ta() {
          Hn && (Hn.detachEvent("onpropertychange", na), (Qn = Hn = null));
        }
        function na(e) {
          if ("value" === e.propertyName && Xn(Qn)) {
            var t = [];
            Wn(t, Qn, e, ke(e)), Te(Yn, t);
          }
        }
        function aa(e, t, n) {
          "focusin" === e
            ? (ta(), (Qn = n), (Hn = t).attachEvent("onpropertychange", na))
            : "focusout" === e && ta();
        }
        function ra(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Qn);
        }
        function sa(e, t) {
          if ("click" === e) return Xn(t);
        }
        function la(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var ia =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function oa(e, t) {
          if (ia(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            a = Object.keys(t);
          if (n.length !== a.length) return !1;
          for (a = 0; a < n.length; a++) {
            var r = n[a];
            if (!d.call(t, r) || !ia(e[r], t[r])) return !1;
          }
          return !0;
        }
        function ca(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ua(e, t) {
          var n,
            a = ca(e);
          for (e = 0; a; ) {
            if (3 === a.nodeType) {
              if (((n = e + a.textContent.length), e <= t && n >= t))
                return { node: a, offset: t - e };
              e = n;
            }
            e: {
              for (; a; ) {
                if (a.nextSibling) {
                  a = a.nextSibling;
                  break e;
                }
                a = a.parentNode;
              }
              a = void 0;
            }
            a = ca(a);
          }
        }
        function da(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? da(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fa() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (a) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function ma(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function pa(e) {
          var t = fa(),
            n = e.focusedElem,
            a = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            da(n.ownerDocument.documentElement, n)
          ) {
            if (null !== a && ma(n))
              if (
                ((t = a.start),
                void 0 === (e = a.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var r = n.textContent.length,
                  s = Math.min(a.start, r);
                (a = void 0 === a.end ? s : Math.min(a.end, r)),
                  !e.extend && s > a && ((r = a), (a = s), (s = r)),
                  (r = ua(n, s));
                var l = ua(n, a);
                r &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== r.node ||
                    e.anchorOffset !== r.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(r.node, r.offset),
                  e.removeAllRanges(),
                  s > a
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var ha = u && "documentMode" in document && 11 >= document.documentMode,
          ga = null,
          va = null,
          ba = null,
          ya = !1;
        function xa(e, t, n) {
          var a =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          ya ||
            null == ga ||
            ga !== Y(a) ||
            ("selectionStart" in (a = ga) && ma(a)
              ? (a = { start: a.selectionStart, end: a.selectionEnd })
              : (a = {
                  anchorNode: (a = (
                    (a.ownerDocument && a.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: a.anchorOffset,
                  focusNode: a.focusNode,
                  focusOffset: a.focusOffset,
                }),
            (ba && oa(ba, a)) ||
              ((ba = a),
              0 < (a = Ha(va, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: a }),
                (t.target = ga))));
        }
        function ka(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var wa = {
            animationend: ka("Animation", "AnimationEnd"),
            animationiteration: ka("Animation", "AnimationIteration"),
            animationstart: ka("Animation", "AnimationStart"),
            transitionend: ka("Transition", "TransitionEnd"),
          },
          ja = {},
          Na = {};
        function Sa(e) {
          if (ja[e]) return ja[e];
          if (!wa[e]) return e;
          var t,
            n = wa[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Na) return (ja[e] = n[t]);
          return e;
        }
        u &&
          ((Na = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete wa.animationend.animation,
            delete wa.animationiteration.animation,
            delete wa.animationstart.animation),
          "TransitionEvent" in window || delete wa.transitionend.transition);
        var za = Sa("animationend"),
          Ea = Sa("animationiteration"),
          Ca = Sa("animationstart"),
          _a = Sa("transitionend"),
          Pa = new Map(),
          Ta =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function La(e, t) {
          Pa.set(e, t), o(t, [e]);
        }
        for (var Ma = 0; Ma < Ta.length; Ma++) {
          var Ra = Ta[Ma];
          La(Ra.toLowerCase(), "on" + (Ra[0].toUpperCase() + Ra.slice(1)));
        }
        La(za, "onAnimationEnd"),
          La(Ea, "onAnimationIteration"),
          La(Ca, "onAnimationStart"),
          La("dblclick", "onDoubleClick"),
          La("focusin", "onFocus"),
          La("focusout", "onBlur"),
          La(_a, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          o(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          o(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          o("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          o(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          o(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          o(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Oa =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          qa = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Oa)
          );
        function Da(e, t, n) {
          var a = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, a, r, l, i, o, c) {
              if ((Ae.apply(this, arguments), qe)) {
                if (!qe) throw Error(s(198));
                var u = De;
                (qe = !1), (De = null), Fe || ((Fe = !0), (Ie = u));
              }
            })(a, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fa(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var a = e[n],
              r = a.event;
            a = a.listeners;
            e: {
              var s = void 0;
              if (t)
                for (var l = a.length - 1; 0 <= l; l--) {
                  var i = a[l],
                    o = i.instance,
                    c = i.currentTarget;
                  if (((i = i.listener), o !== s && r.isPropagationStopped()))
                    break e;
                  Da(r, i, c), (s = o);
                }
              else
                for (l = 0; l < a.length; l++) {
                  if (
                    ((o = (i = a[l]).instance),
                    (c = i.currentTarget),
                    (i = i.listener),
                    o !== s && r.isPropagationStopped())
                  )
                    break e;
                  Da(r, i, c), (s = o);
                }
            }
          }
          if (Fe) throw ((e = Ie), (Fe = !1), (Ie = null), e);
        }
        function Ia(e, t) {
          var n = t[hr];
          void 0 === n && (n = t[hr] = new Set());
          var a = e + "__bubble";
          n.has(a) || ($a(t, e, 2, !1), n.add(a));
        }
        function Ua(e, t, n) {
          var a = 0;
          t && (a |= 4), $a(n, e, a, t);
        }
        var Aa = "_reactListening" + Math.random().toString(36).slice(2);
        function Ba(e) {
          if (!e[Aa]) {
            (e[Aa] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (qa.has(t) || Ua(t, !1, e), Ua(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Aa] || ((t[Aa] = !0), Ua("selectionchange", !1, t));
          }
        }
        function $a(e, t, n, a) {
          switch (Kt(t)) {
            case 1:
              var r = Wt;
              break;
            case 4:
              r = Ht;
              break;
            default:
              r = Qt;
          }
          (n = r.bind(null, t, n, e)),
            (r = void 0),
            !Me ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (r = !0),
            a
              ? void 0 !== r
                ? e.addEventListener(t, n, { capture: !0, passive: r })
                : e.addEventListener(t, n, !0)
              : void 0 !== r
              ? e.addEventListener(t, n, { passive: r })
              : e.addEventListener(t, n, !1);
        }
        function Va(e, t, n, a, r) {
          var s = a;
          if (0 === (1 & t) && 0 === (2 & t) && null !== a)
            e: for (;;) {
              if (null === a) return;
              var l = a.tag;
              if (3 === l || 4 === l) {
                var i = a.stateNode.containerInfo;
                if (i === r || (8 === i.nodeType && i.parentNode === r)) break;
                if (4 === l)
                  for (l = a.return; null !== l; ) {
                    var o = l.tag;
                    if (
                      (3 === o || 4 === o) &&
                      ((o = l.stateNode.containerInfo) === r ||
                        (8 === o.nodeType && o.parentNode === r))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = br(i))) return;
                  if (5 === (o = l.tag) || 6 === o) {
                    a = s = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              a = a.return;
            }
          Te(function () {
            var a = s,
              r = ke(n),
              l = [];
            e: {
              var i = Pa.get(e);
              if (void 0 !== i) {
                var o = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    o = En;
                    break;
                  case "focusin":
                    (c = "focus"), (o = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (o = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    o = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    o = pn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    o = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    o = _n;
                    break;
                  case za:
                  case Ea:
                  case Ca:
                    o = vn;
                    break;
                  case _a:
                    o = Pn;
                    break;
                  case "scroll":
                    o = fn;
                    break;
                  case "wheel":
                    o = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    o = yn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    o = Cn;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== i ? i + "Capture" : null) : i;
                u = [];
                for (var m, p = a; null !== p; ) {
                  var h = (m = p).stateNode;
                  if (
                    (5 === m.tag &&
                      null !== h &&
                      ((m = h),
                      null !== f &&
                        null != (h = Le(p, f)) &&
                        u.push(Wa(p, h, m))),
                    d)
                  )
                    break;
                  p = p.return;
                }
                0 < u.length &&
                  ((i = new o(i, c, null, n, r)),
                  l.push({ event: i, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((o = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!br(c) && !c[pr])) &&
                  (o || i) &&
                  ((i =
                    r.window === r
                      ? r
                      : (i = r.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  o
                    ? ((o = a),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? br(c)
                          : null) &&
                        (c !== (d = Be(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((o = null), (c = a)),
                  o !== c))
              ) {
                if (
                  ((u = pn),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Cn),
                    (h = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (p = "pointer")),
                  (d = null == o ? i : xr(o)),
                  (m = null == c ? i : xr(c)),
                  ((i = new u(h, p + "leave", o, n, r)).target = d),
                  (i.relatedTarget = m),
                  (h = null),
                  br(r) === a &&
                    (((u = new u(f, p + "enter", c, n, r)).target = m),
                    (u.relatedTarget = d),
                    (h = u)),
                  (d = h),
                  o && c)
                )
                  e: {
                    for (f = c, p = 0, m = u = o; m; m = Qa(m)) p++;
                    for (m = 0, h = f; h; h = Qa(h)) m++;
                    for (; 0 < p - m; ) (u = Qa(u)), p--;
                    for (; 0 < m - p; ) (f = Qa(f)), m--;
                    for (; p--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = Qa(u)), (f = Qa(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== o && Ya(l, i, o, u, !1),
                  null !== c && null !== d && Ya(l, d, c, u, !0);
              }
              if (
                "select" ===
                  (o =
                    (i = a ? xr(a) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === o && "file" === i.type)
              )
                var g = Kn;
              else if (Vn(i))
                if (Gn) g = la;
                else {
                  g = ra;
                  var v = aa;
                }
              else
                (o = i.nodeName) &&
                  "input" === o.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (g = sa);
              switch (
                (g && (g = g(e, a))
                  ? Wn(l, g, n, r)
                  : (v && v(e, i, a),
                    "focusout" === e &&
                      (v = i._wrapperState) &&
                      v.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (v = a ? xr(a) : window),
                e)
              ) {
                case "focusin":
                  (Vn(v) || "true" === v.contentEditable) &&
                    ((ga = v), (va = a), (ba = null));
                  break;
                case "focusout":
                  ba = va = ga = null;
                  break;
                case "mousedown":
                  ya = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (ya = !1), xa(l, n, r);
                  break;
                case "selectionchange":
                  if (ha) break;
                case "keydown":
                case "keyup":
                  xa(l, n, r);
              }
              var b;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var y = "onCompositionStart";
                      break e;
                    case "compositionend":
                      y = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      y = "onCompositionUpdate";
                      break e;
                  }
                  y = void 0;
                }
              else
                Bn
                  ? Un(e, n) && (y = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (y = "onCompositionStart");
              y &&
                (Dn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== y
                    ? "onCompositionEnd" === y && Bn && (b = en())
                    : ((Zt = "value" in (Gt = r) ? Gt.value : Gt.textContent),
                      (Bn = !0))),
                0 < (v = Ha(a, y)).length &&
                  ((y = new xn(y, e, null, n, r)),
                  l.push({ event: y, listeners: v }),
                  b ? (y.data = b) : null !== (b = An(n)) && (y.data = b))),
                (b = qn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return An(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!Rn && Un(e, t))
                          ? ((e = en()), (Jt = Zt = Gt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (a = Ha(a, "onBeforeInput")).length &&
                  ((r = new xn("onBeforeInput", "beforeinput", null, n, r)),
                  l.push({ event: r, listeners: a }),
                  (r.data = b));
            }
            Fa(l, t);
          });
        }
        function Wa(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Ha(e, t) {
          for (var n = t + "Capture", a = []; null !== e; ) {
            var r = e,
              s = r.stateNode;
            5 === r.tag &&
              null !== s &&
              ((r = s),
              null != (s = Le(e, n)) && a.unshift(Wa(e, s, r)),
              null != (s = Le(e, t)) && a.push(Wa(e, s, r))),
              (e = e.return);
          }
          return a;
        }
        function Qa(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Ya(e, t, n, a, r) {
          for (var s = t._reactName, l = []; null !== n && n !== a; ) {
            var i = n,
              o = i.alternate,
              c = i.stateNode;
            if (null !== o && o === a) break;
            5 === i.tag &&
              null !== c &&
              ((i = c),
              r
                ? null != (o = Le(n, s)) && l.unshift(Wa(n, o, i))
                : r || (null != (o = Le(n, s)) && l.push(Wa(n, o, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Xa = /\r\n?/g,
          Ka = /\u0000|\uFFFD/g;
        function Ga(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xa, "\n")
            .replace(Ka, "");
        }
        function Za(e, t, n) {
          if (((t = Ga(t)), Ga(e) !== t && n)) throw Error(s(425));
        }
        function Ja() {}
        var er = null,
          tr = null;
        function nr(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ar = "function" === typeof setTimeout ? setTimeout : void 0,
          rr = "function" === typeof clearTimeout ? clearTimeout : void 0,
          sr = "function" === typeof Promise ? Promise : void 0,
          lr =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof sr
              ? function (e) {
                  return sr.resolve(null).then(e).catch(ir);
                }
              : ar;
        function ir(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function or(e, t) {
          var n = t,
            a = 0;
          do {
            var r = n.nextSibling;
            if ((e.removeChild(n), r && 8 === r.nodeType))
              if ("/$" === (n = r.data)) {
                if (0 === a) return e.removeChild(r), void Bt(t);
                a--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || a++;
            n = r;
          } while (n);
          Bt(t);
        }
        function cr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ur(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var dr = Math.random().toString(36).slice(2),
          fr = "__reactFiber$" + dr,
          mr = "__reactProps$" + dr,
          pr = "__reactContainer$" + dr,
          hr = "__reactEvents$" + dr,
          gr = "__reactListeners$" + dr,
          vr = "__reactHandles$" + dr;
        function br(e) {
          var t = e[fr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[pr] || n[fr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ur(e); null !== e; ) {
                  if ((n = e[fr])) return n;
                  e = ur(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function yr(e) {
          return !(e = e[fr] || e[pr]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xr(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(s(33));
        }
        function kr(e) {
          return e[mr] || null;
        }
        var wr = [],
          jr = -1;
        function Nr(e) {
          return { current: e };
        }
        function Sr(e) {
          0 > jr || ((e.current = wr[jr]), (wr[jr] = null), jr--);
        }
        function zr(e, t) {
          jr++, (wr[jr] = e.current), (e.current = t);
        }
        var Er = {},
          Cr = Nr(Er),
          _r = Nr(!1),
          Pr = Er;
        function Tr(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Er;
          var a = e.stateNode;
          if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
            return a.__reactInternalMemoizedMaskedChildContext;
          var r,
            s = {};
          for (r in n) s[r] = t[r];
          return (
            a &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = s)),
            s
          );
        }
        function Lr(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Mr() {
          Sr(_r), Sr(Cr);
        }
        function Rr(e, t, n) {
          if (Cr.current !== Er) throw Error(s(168));
          zr(Cr, t), zr(_r, n);
        }
        function Or(e, t, n) {
          var a = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof a.getChildContext)
          )
            return n;
          for (var r in (a = a.getChildContext()))
            if (!(r in t)) throw Error(s(108, $(e) || "Unknown", r));
          return D({}, n, a);
        }
        function qr(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Er),
            (Pr = Cr.current),
            zr(Cr, e),
            zr(_r, _r.current),
            !0
          );
        }
        function Dr(e, t, n) {
          var a = e.stateNode;
          if (!a) throw Error(s(169));
          n
            ? ((e = Or(e, t, Pr)),
              (a.__reactInternalMemoizedMergedChildContext = e),
              Sr(_r),
              Sr(Cr),
              zr(Cr, e))
            : Sr(_r),
            zr(_r, n);
        }
        var Fr = null,
          Ir = !1,
          Ur = !1;
        function Ar(e) {
          null === Fr ? (Fr = [e]) : Fr.push(e);
        }
        function Br() {
          if (!Ur && null !== Fr) {
            Ur = !0;
            var e = 0,
              t = yt;
            try {
              var n = Fr;
              for (yt = 1; e < n.length; e++) {
                var a = n[e];
                do {
                  a = a(!0);
                } while (null !== a);
              }
              (Fr = null), (Ir = !1);
            } catch (r) {
              throw (null !== Fr && (Fr = Fr.slice(e + 1)), Qe(Je, Br), r);
            } finally {
              (yt = t), (Ur = !1);
            }
          }
          return null;
        }
        var $r = [],
          Vr = 0,
          Wr = null,
          Hr = 0,
          Qr = [],
          Yr = 0,
          Xr = null,
          Kr = 1,
          Gr = "";
        function Zr(e, t) {
          ($r[Vr++] = Hr), ($r[Vr++] = Wr), (Wr = e), (Hr = t);
        }
        function Jr(e, t, n) {
          (Qr[Yr++] = Kr), (Qr[Yr++] = Gr), (Qr[Yr++] = Xr), (Xr = e);
          var a = Kr;
          e = Gr;
          var r = 32 - lt(a) - 1;
          (a &= ~(1 << r)), (n += 1);
          var s = 32 - lt(t) + r;
          if (30 < s) {
            var l = r - (r % 5);
            (s = (a & ((1 << l) - 1)).toString(32)),
              (a >>= l),
              (r -= l),
              (Kr = (1 << (32 - lt(t) + r)) | (n << r) | a),
              (Gr = s + e);
          } else (Kr = (1 << s) | (n << r) | a), (Gr = e);
        }
        function es(e) {
          null !== e.return && (Zr(e, 1), Jr(e, 1, 0));
        }
        function ts(e) {
          for (; e === Wr; )
            (Wr = $r[--Vr]), ($r[Vr] = null), (Hr = $r[--Vr]), ($r[Vr] = null);
          for (; e === Xr; )
            (Xr = Qr[--Yr]),
              (Qr[Yr] = null),
              (Gr = Qr[--Yr]),
              (Qr[Yr] = null),
              (Kr = Qr[--Yr]),
              (Qr[Yr] = null);
        }
        var ns = null,
          as = null,
          rs = !1,
          ss = null;
        function ls(e, t) {
          var n = Lc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function is(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ns = e), (as = cr(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ns = e), (as = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xr ? { id: Kr, overflow: Gr } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ns = e),
                (as = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function os(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function cs(e) {
          if (rs) {
            var t = as;
            if (t) {
              var n = t;
              if (!is(e, t)) {
                if (os(e)) throw Error(s(418));
                t = cr(n.nextSibling);
                var a = ns;
                t && is(e, t)
                  ? ls(a, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (rs = !1), (ns = e));
              }
            } else {
              if (os(e)) throw Error(s(418));
              (e.flags = (-4097 & e.flags) | 2), (rs = !1), (ns = e);
            }
          }
        }
        function us(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ns = e;
        }
        function ds(e) {
          if (e !== ns) return !1;
          if (!rs) return us(e), (rs = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !nr(e.type, e.memoizedProps)),
            t && (t = as))
          ) {
            if (os(e)) throw (fs(), Error(s(418)));
            for (; t; ) ls(e, t), (t = cr(t.nextSibling));
          }
          if ((us(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(s(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      as = cr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              as = null;
            }
          } else as = ns ? cr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fs() {
          for (var e = as; e; ) e = cr(e.nextSibling);
        }
        function ms() {
          (as = ns = null), (rs = !1);
        }
        function ps(e) {
          null === ss ? (ss = [e]) : ss.push(e);
        }
        var hs = x.ReactCurrentBatchConfig;
        function gs(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vs = Nr(null),
          bs = null,
          ys = null,
          xs = null;
        function ks() {
          xs = ys = bs = null;
        }
        function ws(e) {
          var t = vs.current;
          Sr(vs), (e._currentValue = t);
        }
        function js(e, t, n) {
          for (; null !== e; ) {
            var a = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== a && (a.childLanes |= t))
                : null !== a && (a.childLanes & t) !== t && (a.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ns(e, t) {
          (bs = e),
            (xs = ys = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (yi = !0), (e.firstContext = null));
        }
        function Ss(e) {
          var t = e._currentValue;
          if (xs !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === ys)
            ) {
              if (null === bs) throw Error(s(308));
              (ys = e), (bs.dependencies = { lanes: 0, firstContext: e });
            } else ys = ys.next = e;
          return t;
        }
        var zs = null;
        function Es(e) {
          null === zs ? (zs = [e]) : zs.push(e);
        }
        function Cs(e, t, n, a) {
          var r = t.interleaved;
          return (
            null === r
              ? ((n.next = n), Es(t))
              : ((n.next = r.next), (r.next = n)),
            (t.interleaved = n),
            _s(e, a)
          );
        }
        function _s(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ps = !1;
        function Ts(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ls(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ms(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Rs(e, t, n) {
          var a = e.updateQueue;
          if (null === a) return null;
          if (((a = a.shared), 0 !== (2 & _o))) {
            var r = a.pending;
            return (
              null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
              (a.pending = t),
              _s(e, n)
            );
          }
          return (
            null === (r = a.interleaved)
              ? ((t.next = t), Es(a))
              : ((t.next = r.next), (r.next = t)),
            (a.interleaved = t),
            _s(e, n)
          );
        }
        function Os(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var a = t.lanes;
            (n |= a &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        function qs(e, t) {
          var n = e.updateQueue,
            a = e.alternate;
          if (null !== a && n === (a = a.updateQueue)) {
            var r = null,
              s = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === s ? (r = s = l) : (s = s.next = l), (n = n.next);
              } while (null !== n);
              null === s ? (r = s = t) : (s = s.next = t);
            } else r = s = t;
            return (
              (n = {
                baseState: a.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: s,
                shared: a.shared,
                effects: a.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ds(e, t, n, a) {
          var r = e.updateQueue;
          Ps = !1;
          var s = r.firstBaseUpdate,
            l = r.lastBaseUpdate,
            i = r.shared.pending;
          if (null !== i) {
            r.shared.pending = null;
            var o = i,
              c = o.next;
            (o.next = null), null === l ? (s = c) : (l.next = c), (l = o);
            var u = e.alternate;
            null !== u &&
              (i = (u = u.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (u.firstBaseUpdate = c) : (i.next = c),
              (u.lastBaseUpdate = o));
          }
          if (null !== s) {
            var d = r.baseState;
            for (l = 0, u = c = o = null, i = s; ; ) {
              var f = i.lane,
                m = i.eventTime;
              if ((a & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: m,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var p = e,
                    h = i;
                  switch (((f = t), (m = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (p = h.payload)) {
                        d = p.call(m, d, f);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-65537 & p.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (p = h.payload)
                              ? p.call(m, d, f)
                              : p) ||
                        void 0 === f
                      )
                        break e;
                      d = D({}, d, f);
                      break e;
                    case 2:
                      Ps = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = r.effects) ? (r.effects = [i]) : f.push(i));
              } else
                (m = {
                  eventTime: m,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === u ? ((c = u = m), (o = d)) : (u = u.next = m),
                  (l |= f);
              if (null === (i = i.next)) {
                if (null === (i = r.shared.pending)) break;
                (i = (f = i).next),
                  (f.next = null),
                  (r.lastBaseUpdate = f),
                  (r.shared.pending = null);
              }
            }
            if (
              (null === u && (o = d),
              (r.baseState = o),
              (r.firstBaseUpdate = c),
              (r.lastBaseUpdate = u),
              null !== (t = r.shared.interleaved))
            ) {
              r = t;
              do {
                (l |= r.lane), (r = r.next);
              } while (r !== t);
            } else null === s && (r.shared.lanes = 0);
            (Do |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function Fs(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var a = e[t],
                r = a.callback;
              if (null !== r) {
                if (((a.callback = null), (a = n), "function" !== typeof r))
                  throw Error(s(191, r));
                r.call(a);
              }
            }
        }
        var Is = new a.Component().refs;
        function Us(e, t, n, a) {
          (n =
            null === (n = n(a, (t = e.memoizedState))) || void 0 === n
              ? t
              : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var As = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var a = tc(),
              r = nc(e),
              s = Ms(a, r);
            (s.payload = t),
              void 0 !== n && null !== n && (s.callback = n),
              null !== (t = Rs(e, s, r)) && (ac(t, e, r, a), Os(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var a = tc(),
              r = nc(e),
              s = Ms(a, r);
            (s.tag = 1),
              (s.payload = t),
              void 0 !== n && null !== n && (s.callback = n),
              null !== (t = Rs(e, s, r)) && (ac(t, e, r, a), Os(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tc(),
              a = nc(e),
              r = Ms(n, a);
            (r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = Rs(e, r, a)) && (ac(t, e, a, n), Os(t, e, a));
          },
        };
        function Bs(e, t, n, a, r, s, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(a, s, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !oa(n, a) ||
                !oa(r, s);
        }
        function $s(e, t, n) {
          var a = !1,
            r = Er,
            s = t.contextType;
          return (
            "object" === typeof s && null !== s
              ? (s = Ss(s))
              : ((r = Lr(t) ? Pr : Cr.current),
                (s = (a = null !== (a = t.contextTypes) && void 0 !== a)
                  ? Tr(e, r)
                  : Er)),
            (t = new t(n, s)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = As),
            (e.stateNode = t),
            (t._reactInternals = e),
            a &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                r),
              (e.__reactInternalMemoizedMaskedChildContext = s)),
            t
          );
        }
        function Vs(e, t, n, a) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, a),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, a),
            t.state !== e && As.enqueueReplaceState(t, t.state, null);
        }
        function Ws(e, t, n, a) {
          var r = e.stateNode;
          (r.props = n), (r.state = e.memoizedState), (r.refs = Is), Ts(e);
          var s = t.contextType;
          "object" === typeof s && null !== s
            ? (r.context = Ss(s))
            : ((s = Lr(t) ? Pr : Cr.current), (r.context = Tr(e, s))),
            (r.state = e.memoizedState),
            "function" === typeof (s = t.getDerivedStateFromProps) &&
              (Us(e, t, s, n), (r.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof r.getSnapshotBeforeUpdate ||
              ("function" !== typeof r.UNSAFE_componentWillMount &&
                "function" !== typeof r.componentWillMount) ||
              ((t = r.state),
              "function" === typeof r.componentWillMount &&
                r.componentWillMount(),
              "function" === typeof r.UNSAFE_componentWillMount &&
                r.UNSAFE_componentWillMount(),
              t !== r.state && As.enqueueReplaceState(r, r.state, null),
              Ds(e, n, r, a),
              (r.state = e.memoizedState)),
            "function" === typeof r.componentDidMount && (e.flags |= 4194308);
        }
        function Hs(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(s(309));
                var a = n.stateNode;
              }
              if (!a) throw Error(s(147, e));
              var r = a,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === Is && (t = r.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(s(284));
            if (!n._owner) throw Error(s(290, e));
          }
          return e;
        }
        function Qs(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              s(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Ys(e) {
          return (0, e._init)(e._payload);
        }
        function Xs(e) {
          function t(t, n) {
            if (e) {
              var a = t.deletions;
              null === a ? ((t.deletions = [n]), (t.flags |= 16)) : a.push(n);
            }
          }
          function n(n, a) {
            if (!e) return null;
            for (; null !== a; ) t(n, a), (a = a.sibling);
            return null;
          }
          function a(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function r(e, t) {
            return ((e = Rc(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, a) {
            return (
              (t.index = a),
              e
                ? null !== (a = t.alternate)
                  ? (a = a.index) < n
                    ? ((t.flags |= 2), n)
                    : a
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function o(e, t, n, a) {
            return null === t || 6 !== t.tag
              ? (((t = Fc(n, e.mode, a)).return = e), t)
              : (((t = r(t, n)).return = e), t);
          }
          function c(e, t, n, a) {
            var s = n.type;
            return s === j
              ? d(e, t, n.props.children, a, n.key)
              : null !== t &&
                (t.elementType === s ||
                  ("object" === typeof s &&
                    null !== s &&
                    s.$$typeof === L &&
                    Ys(s) === t.type))
              ? (((a = r(t, n.props)).ref = Hs(e, t, n)), (a.return = e), a)
              : (((a = Oc(n.type, n.key, n.props, null, e.mode, a)).ref = Hs(
                  e,
                  t,
                  n
                )),
                (a.return = e),
                a);
          }
          function u(e, t, n, a) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ic(n, e.mode, a)).return = e), t)
              : (((t = r(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, a, s) {
            return null === t || 7 !== t.tag
              ? (((t = qc(n, e.mode, a, s)).return = e), t)
              : (((t = r(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Oc(t.type, t.key, t.props, null, e.mode, n)).ref = Hs(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case w:
                  return ((t = Ic(t, e.mode, n)).return = e), t;
                case L:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || O(t))
                return ((t = qc(t, e.mode, n, null)).return = e), t;
              Qs(e, t);
            }
            return null;
          }
          function m(e, t, n, a) {
            var r = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== r ? null : o(e, t, "" + n, a);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === r ? c(e, t, n, a) : null;
                case w:
                  return n.key === r ? u(e, t, n, a) : null;
                case L:
                  return m(e, t, (r = n._init)(n._payload), a);
              }
              if (te(n) || O(n)) return null !== r ? null : d(e, t, n, a, null);
              Qs(e, n);
            }
            return null;
          }
          function p(e, t, n, a, r) {
            if (("string" === typeof a && "" !== a) || "number" === typeof a)
              return o(t, (e = e.get(n) || null), "" + a, r);
            if ("object" === typeof a && null !== a) {
              switch (a.$$typeof) {
                case k:
                  return c(
                    t,
                    (e = e.get(null === a.key ? n : a.key) || null),
                    a,
                    r
                  );
                case w:
                  return u(
                    t,
                    (e = e.get(null === a.key ? n : a.key) || null),
                    a,
                    r
                  );
                case L:
                  return p(e, t, n, (0, a._init)(a._payload), r);
              }
              if (te(a) || O(a))
                return d(t, (e = e.get(n) || null), a, r, null);
              Qs(t, a);
            }
            return null;
          }
          function h(r, s, i, o) {
            for (
              var c = null, u = null, d = s, h = (s = 0), g = null;
              null !== d && h < i.length;
              h++
            ) {
              d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
              var v = m(r, d, i[h], o);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              e && d && null === v.alternate && t(r, d),
                (s = l(v, s, h)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v),
                (d = g);
            }
            if (h === i.length) return n(r, d), rs && Zr(r, h), c;
            if (null === d) {
              for (; h < i.length; h++)
                null !== (d = f(r, i[h], o)) &&
                  ((s = l(d, s, h)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return rs && Zr(r, h), c;
            }
            for (d = a(r, d); h < i.length; h++)
              null !== (g = p(d, r, h, i[h], o)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? h : g.key),
                (s = l(g, s, h)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(r, e);
                }),
              rs && Zr(r, h),
              c
            );
          }
          function g(r, i, o, c) {
            var u = O(o);
            if ("function" !== typeof u) throw Error(s(150));
            if (null == (o = u.call(o))) throw Error(s(151));
            for (
              var d = (u = null), h = i, g = (i = 0), v = null, b = o.next();
              null !== h && !b.done;
              g++, b = o.next()
            ) {
              h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
              var y = m(r, h, b.value, c);
              if (null === y) {
                null === h && (h = v);
                break;
              }
              e && h && null === y.alternate && t(r, h),
                (i = l(y, i, g)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y),
                (h = v);
            }
            if (b.done) return n(r, h), rs && Zr(r, g), u;
            if (null === h) {
              for (; !b.done; g++, b = o.next())
                null !== (b = f(r, b.value, c)) &&
                  ((i = l(b, i, g)),
                  null === d ? (u = b) : (d.sibling = b),
                  (d = b));
              return rs && Zr(r, g), u;
            }
            for (h = a(r, h); !b.done; g++, b = o.next())
              null !== (b = p(h, r, g, b.value, c)) &&
                (e &&
                  null !== b.alternate &&
                  h.delete(null === b.key ? g : b.key),
                (i = l(b, i, g)),
                null === d ? (u = b) : (d.sibling = b),
                (d = b));
            return (
              e &&
                h.forEach(function (e) {
                  return t(r, e);
                }),
              rs && Zr(r, g),
              u
            );
          }
          return function e(a, s, l, o) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === j &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case k:
                  e: {
                    for (var c = l.key, u = s; null !== u; ) {
                      if (u.key === c) {
                        if ((c = l.type) === j) {
                          if (7 === u.tag) {
                            n(a, u.sibling),
                              ((s = r(u, l.props.children)).return = a),
                              (a = s);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === L &&
                            Ys(c) === u.type)
                        ) {
                          n(a, u.sibling),
                            ((s = r(u, l.props)).ref = Hs(a, u, l)),
                            (s.return = a),
                            (a = s);
                          break e;
                        }
                        n(a, u);
                        break;
                      }
                      t(a, u), (u = u.sibling);
                    }
                    l.type === j
                      ? (((s = qc(l.props.children, a.mode, o, l.key)).return =
                          a),
                        (a = s))
                      : (((o = Oc(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          a.mode,
                          o
                        )).ref = Hs(a, s, l)),
                        (o.return = a),
                        (a = o));
                  }
                  return i(a);
                case w:
                  e: {
                    for (u = l.key; null !== s; ) {
                      if (s.key === u) {
                        if (
                          4 === s.tag &&
                          s.stateNode.containerInfo === l.containerInfo &&
                          s.stateNode.implementation === l.implementation
                        ) {
                          n(a, s.sibling),
                            ((s = r(s, l.children || [])).return = a),
                            (a = s);
                          break e;
                        }
                        n(a, s);
                        break;
                      }
                      t(a, s), (s = s.sibling);
                    }
                    ((s = Ic(l, a.mode, o)).return = a), (a = s);
                  }
                  return i(a);
                case L:
                  return e(a, s, (u = l._init)(l._payload), o);
              }
              if (te(l)) return h(a, s, l, o);
              if (O(l)) return g(a, s, l, o);
              Qs(a, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== s && 6 === s.tag
                  ? (n(a, s.sibling), ((s = r(s, l)).return = a), (a = s))
                  : (n(a, s), ((s = Fc(l, a.mode, o)).return = a), (a = s)),
                i(a))
              : n(a, s);
          };
        }
        var Ks = Xs(!0),
          Gs = Xs(!1),
          Zs = {},
          Js = Nr(Zs),
          el = Nr(Zs),
          tl = Nr(Zs);
        function nl(e) {
          if (e === Zs) throw Error(s(174));
          return e;
        }
        function al(e, t) {
          switch ((zr(tl, t), zr(el, e), zr(Js, Zs), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : oe(null, "");
              break;
            default:
              t = oe(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Sr(Js), zr(Js, t);
        }
        function rl() {
          Sr(Js), Sr(el), Sr(tl);
        }
        function sl(e) {
          nl(tl.current);
          var t = nl(Js.current),
            n = oe(t, e.type);
          t !== n && (zr(el, e), zr(Js, n));
        }
        function ll(e) {
          el.current === e && (Sr(Js), Sr(el));
        }
        var il = Nr(0);
        function ol(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var cl = [];
        function ul() {
          for (var e = 0; e < cl.length; e++)
            cl[e]._workInProgressVersionPrimary = null;
          cl.length = 0;
        }
        var dl = x.ReactCurrentDispatcher,
          fl = x.ReactCurrentBatchConfig,
          ml = 0,
          pl = null,
          hl = null,
          gl = null,
          vl = !1,
          bl = !1,
          yl = 0,
          xl = 0;
        function kl() {
          throw Error(s(321));
        }
        function wl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ia(e[n], t[n])) return !1;
          return !0;
        }
        function jl(e, t, n, a, r, l) {
          if (
            ((ml = l),
            (pl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (dl.current = null === e || null === e.memoizedState ? li : ii),
            (e = n(a, r)),
            bl)
          ) {
            l = 0;
            do {
              if (((bl = !1), (yl = 0), 25 <= l)) throw Error(s(301));
              (l += 1),
                (gl = hl = null),
                (t.updateQueue = null),
                (dl.current = oi),
                (e = n(a, r));
            } while (bl);
          }
          if (
            ((dl.current = si),
            (t = null !== hl && null !== hl.next),
            (ml = 0),
            (gl = hl = pl = null),
            (vl = !1),
            t)
          )
            throw Error(s(300));
          return e;
        }
        function Nl() {
          var e = 0 !== yl;
          return (yl = 0), e;
        }
        function Sl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gl ? (pl.memoizedState = gl = e) : (gl = gl.next = e), gl
          );
        }
        function zl() {
          if (null === hl) {
            var e = pl.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = hl.next;
          var t = null === gl ? pl.memoizedState : gl.next;
          if (null !== t) (gl = t), (hl = e);
          else {
            if (null === e) throw Error(s(310));
            (e = {
              memoizedState: (hl = e).memoizedState,
              baseState: hl.baseState,
              baseQueue: hl.baseQueue,
              queue: hl.queue,
              next: null,
            }),
              null === gl ? (pl.memoizedState = gl = e) : (gl = gl.next = e);
          }
          return gl;
        }
        function El(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Cl(e) {
          var t = zl(),
            n = t.queue;
          if (null === n) throw Error(s(311));
          n.lastRenderedReducer = e;
          var a = hl,
            r = a.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== r) {
              var i = r.next;
              (r.next = l.next), (l.next = i);
            }
            (a.baseQueue = r = l), (n.pending = null);
          }
          if (null !== r) {
            (l = r.next), (a = a.baseState);
            var o = (i = null),
              c = null,
              u = l;
            do {
              var d = u.lane;
              if ((ml & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (a = u.hasEagerState ? u.eagerState : e(a, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((o = c = f), (i = a)) : (c = c.next = f),
                  (pl.lanes |= d),
                  (Do |= d);
              }
              u = u.next;
            } while (null !== u && u !== l);
            null === c ? (i = a) : (c.next = o),
              ia(a, t.memoizedState) || (yi = !0),
              (t.memoizedState = a),
              (t.baseState = i),
              (t.baseQueue = c),
              (n.lastRenderedState = a);
          }
          if (null !== (e = n.interleaved)) {
            r = e;
            do {
              (l = r.lane), (pl.lanes |= l), (Do |= l), (r = r.next);
            } while (r !== e);
          } else null === r && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function _l(e) {
          var t = zl(),
            n = t.queue;
          if (null === n) throw Error(s(311));
          n.lastRenderedReducer = e;
          var a = n.dispatch,
            r = n.pending,
            l = t.memoizedState;
          if (null !== r) {
            n.pending = null;
            var i = (r = r.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== r);
            ia(l, t.memoizedState) || (yi = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, a];
        }
        function Pl() {}
        function Tl(e, t) {
          var n = pl,
            a = zl(),
            r = t(),
            l = !ia(a.memoizedState, r);
          if (
            (l && ((a.memoizedState = r), (yi = !0)),
            (a = a.queue),
            $l(Rl.bind(null, n, a, e), [e]),
            a.getSnapshot !== t ||
              l ||
              (null !== gl && 1 & gl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fl(9, Ml.bind(null, n, a, r, t), void 0, null),
              null === Po)
            )
              throw Error(s(349));
            0 !== (30 & ml) || Ll(n, t, r);
          }
          return r;
        }
        function Ll(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = pl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (pl.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ml(e, t, n, a) {
          (t.value = n), (t.getSnapshot = a), Ol(t) && ql(e);
        }
        function Rl(e, t, n) {
          return n(function () {
            Ol(t) && ql(e);
          });
        }
        function Ol(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ia(e, n);
          } catch (a) {
            return !0;
          }
        }
        function ql(e) {
          var t = _s(e, 1);
          null !== t && ac(t, e, 1, -1);
        }
        function Dl(e) {
          var t = Sl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: El,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ti.bind(null, pl, e)),
            [t.memoizedState, e]
          );
        }
        function Fl(e, t, n, a) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: a, next: null }),
            null === (t = pl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (pl.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
            e
          );
        }
        function Il() {
          return zl().memoizedState;
        }
        function Ul(e, t, n, a) {
          var r = Sl();
          (pl.flags |= e),
            (r.memoizedState = Fl(1 | t, n, void 0, void 0 === a ? null : a));
        }
        function Al(e, t, n, a) {
          var r = zl();
          a = void 0 === a ? null : a;
          var s = void 0;
          if (null !== hl) {
            var l = hl.memoizedState;
            if (((s = l.destroy), null !== a && wl(a, l.deps)))
              return void (r.memoizedState = Fl(t, n, s, a));
          }
          (pl.flags |= e), (r.memoizedState = Fl(1 | t, n, s, a));
        }
        function Bl(e, t) {
          return Ul(8390656, 8, e, t);
        }
        function $l(e, t) {
          return Al(2048, 8, e, t);
        }
        function Vl(e, t) {
          return Al(4, 2, e, t);
        }
        function Wl(e, t) {
          return Al(4, 4, e, t);
        }
        function Hl(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ql(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Al(4, 4, Hl.bind(null, t, e), n)
          );
        }
        function Yl() {}
        function Xl(e, t) {
          var n = zl();
          t = void 0 === t ? null : t;
          var a = n.memoizedState;
          return null !== a && null !== t && wl(t, a[1])
            ? a[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Kl(e, t) {
          var n = zl();
          t = void 0 === t ? null : t;
          var a = n.memoizedState;
          return null !== a && null !== t && wl(t, a[1])
            ? a[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Gl(e, t, n) {
          return 0 === (21 & ml)
            ? (e.baseState && ((e.baseState = !1), (yi = !0)),
              (e.memoizedState = n))
            : (ia(n, t) ||
                ((n = ht()), (pl.lanes |= n), (Do |= n), (e.baseState = !0)),
              t);
        }
        function Zl(e, t) {
          var n = yt;
          (yt = 0 !== n && 4 > n ? n : 4), e(!0);
          var a = fl.transition;
          fl.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = n), (fl.transition = a);
          }
        }
        function Jl() {
          return zl().memoizedState;
        }
        function ei(e, t, n) {
          var a = nc(e);
          if (
            ((n = {
              lane: a,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ni(e))
          )
            ai(t, n);
          else if (null !== (n = Cs(e, t, n, a))) {
            ac(n, e, a, tc()), ri(n, t, a);
          }
        }
        function ti(e, t, n) {
          var a = nc(e),
            r = {
              lane: a,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (ni(e)) ai(t, r);
          else {
            var s = e.alternate;
            if (
              0 === e.lanes &&
              (null === s || 0 === s.lanes) &&
              null !== (s = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = s(l, n);
                if (((r.hasEagerState = !0), (r.eagerState = i), ia(i, l))) {
                  var o = t.interleaved;
                  return (
                    null === o
                      ? ((r.next = r), Es(t))
                      : ((r.next = o.next), (o.next = r)),
                    void (t.interleaved = r)
                  );
                }
              } catch (c) {}
            null !== (n = Cs(e, t, r, a)) &&
              (ac(n, e, a, (r = tc())), ri(n, t, a));
          }
        }
        function ni(e) {
          var t = e.alternate;
          return e === pl || (null !== t && t === pl);
        }
        function ai(e, t) {
          bl = vl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ri(e, t, n) {
          if (0 !== (4194240 & n)) {
            var a = t.lanes;
            (n |= a &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        var si = {
            readContext: Ss,
            useCallback: kl,
            useContext: kl,
            useEffect: kl,
            useImperativeHandle: kl,
            useInsertionEffect: kl,
            useLayoutEffect: kl,
            useMemo: kl,
            useReducer: kl,
            useRef: kl,
            useState: kl,
            useDebugValue: kl,
            useDeferredValue: kl,
            useTransition: kl,
            useMutableSource: kl,
            useSyncExternalStore: kl,
            useId: kl,
            unstable_isNewReconciler: !1,
          },
          li = {
            readContext: Ss,
            useCallback: function (e, t) {
              return (Sl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ss,
            useEffect: Bl,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ul(4194308, 4, Hl.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ul(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ul(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Sl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var a = Sl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (a.memoizedState = a.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (a.queue = e),
                (e = e.dispatch = ei.bind(null, pl, e)),
                [a.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Sl().memoizedState = e);
            },
            useState: Dl,
            useDebugValue: Yl,
            useDeferredValue: function (e) {
              return (Sl().memoizedState = e);
            },
            useTransition: function () {
              var e = Dl(!1),
                t = e[0];
              return (
                (e = Zl.bind(null, e[1])), (Sl().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var a = pl,
                r = Sl();
              if (rs) {
                if (void 0 === n) throw Error(s(407));
                n = n();
              } else {
                if (((n = t()), null === Po)) throw Error(s(349));
                0 !== (30 & ml) || Ll(a, t, n);
              }
              r.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (r.queue = l),
                Bl(Rl.bind(null, a, l, e), [e]),
                (a.flags |= 2048),
                Fl(9, Ml.bind(null, a, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Sl(),
                t = Po.identifierPrefix;
              if (rs) {
                var n = Gr;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Kr & ~(1 << (32 - lt(Kr) - 1))).toString(32) + n)),
                  0 < (n = yl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: Ss,
            useCallback: Xl,
            useContext: Ss,
            useEffect: $l,
            useImperativeHandle: Ql,
            useInsertionEffect: Vl,
            useLayoutEffect: Wl,
            useMemo: Kl,
            useReducer: Cl,
            useRef: Il,
            useState: function () {
              return Cl(El);
            },
            useDebugValue: Yl,
            useDeferredValue: function (e) {
              return Gl(zl(), hl.memoizedState, e);
            },
            useTransition: function () {
              return [Cl(El)[0], zl().memoizedState];
            },
            useMutableSource: Pl,
            useSyncExternalStore: Tl,
            useId: Jl,
            unstable_isNewReconciler: !1,
          },
          oi = {
            readContext: Ss,
            useCallback: Xl,
            useContext: Ss,
            useEffect: $l,
            useImperativeHandle: Ql,
            useInsertionEffect: Vl,
            useLayoutEffect: Wl,
            useMemo: Kl,
            useReducer: _l,
            useRef: Il,
            useState: function () {
              return _l(El);
            },
            useDebugValue: Yl,
            useDeferredValue: function (e) {
              var t = zl();
              return null === hl
                ? (t.memoizedState = e)
                : Gl(t, hl.memoizedState, e);
            },
            useTransition: function () {
              return [_l(El)[0], zl().memoizedState];
            },
            useMutableSource: Pl,
            useSyncExternalStore: Tl,
            useId: Jl,
            unstable_isNewReconciler: !1,
          };
        function ci(e, t) {
          try {
            var n = "",
              a = t;
            do {
              (n += A(a)), (a = a.return);
            } while (a);
            var r = n;
          } catch (s) {
            r = "\nError generating stack: " + s.message + "\n" + s.stack;
          }
          return { value: e, source: t, stack: r, digest: null };
        }
        function ui(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function di(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fi = "function" === typeof WeakMap ? WeakMap : Map;
        function mi(e, t, n) {
          ((n = Ms(-1, n)).tag = 3), (n.payload = { element: null });
          var a = t.value;
          return (
            (n.callback = function () {
              Wo || ((Wo = !0), (Ho = a)), di(0, t);
            }),
            n
          );
        }
        function pi(e, t, n) {
          (n = Ms(-1, n)).tag = 3;
          var a = e.type.getDerivedStateFromError;
          if ("function" === typeof a) {
            var r = t.value;
            (n.payload = function () {
              return a(r);
            }),
              (n.callback = function () {
                di(0, t);
              });
          }
          var s = e.stateNode;
          return (
            null !== s &&
              "function" === typeof s.componentDidCatch &&
              (n.callback = function () {
                di(0, t),
                  "function" !== typeof a &&
                    (null === Qo ? (Qo = new Set([this])) : Qo.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function hi(e, t, n) {
          var a = e.pingCache;
          if (null === a) {
            a = e.pingCache = new fi();
            var r = new Set();
            a.set(t, r);
          } else void 0 === (r = a.get(t)) && ((r = new Set()), a.set(t, r));
          r.has(n) || (r.add(n), (e = zc.bind(null, e, t, n)), t.then(e, e));
        }
        function gi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vi(e, t, n, a, r) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ms(-1, 1)).tag = 2), Rs(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = r), e);
        }
        var bi = x.ReactCurrentOwner,
          yi = !1;
        function xi(e, t, n, a) {
          t.child = null === e ? Gs(t, null, n, a) : Ks(t, e.child, n, a);
        }
        function ki(e, t, n, a, r) {
          n = n.render;
          var s = t.ref;
          return (
            Ns(t, r),
            (a = jl(e, t, n, a, s, r)),
            (n = Nl()),
            null === e || yi
              ? (rs && n && es(t), (t.flags |= 1), xi(e, t, a, r), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~r),
                Vi(e, t, r))
          );
        }
        function wi(e, t, n, a, r) {
          if (null === e) {
            var s = n.type;
            return "function" !== typeof s ||
              Mc(s) ||
              void 0 !== s.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Oc(n.type, null, a, t, t.mode, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = s), ji(e, t, s, a, r));
          }
          if (((s = e.child), 0 === (e.lanes & r))) {
            var l = s.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : oa)(l, a) &&
              e.ref === t.ref
            )
              return Vi(e, t, r);
          }
          return (
            (t.flags |= 1),
            ((e = Rc(s, a)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function ji(e, t, n, a, r) {
          if (null !== e) {
            var s = e.memoizedProps;
            if (oa(s, a) && e.ref === t.ref) {
              if (((yi = !1), (t.pendingProps = a = s), 0 === (e.lanes & r)))
                return (t.lanes = e.lanes), Vi(e, t, r);
              0 !== (131072 & e.flags) && (yi = !0);
            }
          }
          return zi(e, t, n, a, r);
        }
        function Ni(e, t, n) {
          var a = t.pendingProps,
            r = a.children,
            s = null !== e ? e.memoizedState : null;
          if ("hidden" === a.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                zr(Ro, Mo),
                (Mo |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== s ? s.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  zr(Ro, Mo),
                  (Mo |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (a = null !== s ? s.baseLanes : n),
                zr(Ro, Mo),
                (Mo |= a);
            }
          else
            null !== s
              ? ((a = s.baseLanes | n), (t.memoizedState = null))
              : (a = n),
              zr(Ro, Mo),
              (Mo |= a);
          return xi(e, t, r, n), t.child;
        }
        function Si(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function zi(e, t, n, a, r) {
          var s = Lr(n) ? Pr : Cr.current;
          return (
            (s = Tr(t, s)),
            Ns(t, r),
            (n = jl(e, t, n, a, s, r)),
            (a = Nl()),
            null === e || yi
              ? (rs && a && es(t), (t.flags |= 1), xi(e, t, n, r), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~r),
                Vi(e, t, r))
          );
        }
        function Ei(e, t, n, a, r) {
          if (Lr(n)) {
            var s = !0;
            qr(t);
          } else s = !1;
          if ((Ns(t, r), null === t.stateNode))
            $i(e, t), $s(t, n, a), Ws(t, n, a, r), (a = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var o = l.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Ss(c))
              : (c = Tr(t, (c = Lr(n) ? Pr : Cr.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== a || o !== c) && Vs(t, l, a, c)),
              (Ps = !1);
            var f = t.memoizedState;
            (l.state = f),
              Ds(t, a, l, r),
              (o = t.memoizedState),
              i !== a || f !== o || _r.current || Ps
                ? ("function" === typeof u &&
                    (Us(t, n, u, a), (o = t.memoizedState)),
                  (i = Ps || Bs(t, n, i, a, f, o, c))
                    ? (d ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = a),
                      (t.memoizedState = o)),
                  (l.props = a),
                  (l.state = o),
                  (l.context = c),
                  (a = i))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (a = !1));
          } else {
            (l = t.stateNode),
              Ls(e, t),
              (i = t.memoizedProps),
              (c = t.type === t.elementType ? i : gs(t.type, i)),
              (l.props = c),
              (d = t.pendingProps),
              (f = l.context),
              "object" === typeof (o = n.contextType) && null !== o
                ? (o = Ss(o))
                : (o = Tr(t, (o = Lr(n) ? Pr : Cr.current)));
            var m = n.getDerivedStateFromProps;
            (u =
              "function" === typeof m ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== d || f !== o) && Vs(t, l, a, o)),
              (Ps = !1),
              (f = t.memoizedState),
              (l.state = f),
              Ds(t, a, l, r);
            var p = t.memoizedState;
            i !== d || f !== p || _r.current || Ps
              ? ("function" === typeof m &&
                  (Us(t, n, m, a), (p = t.memoizedState)),
                (c = Ps || Bs(t, n, c, a, f, p, o) || !1)
                  ? (u ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(a, p, o),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(a, p, o)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = a),
                    (t.memoizedState = p)),
                (l.props = a),
                (l.state = p),
                (l.context = o),
                (a = c))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (a = !1));
          }
          return Ci(e, t, n, a, s, r);
        }
        function Ci(e, t, n, a, r, s) {
          Si(e, t);
          var l = 0 !== (128 & t.flags);
          if (!a && !l) return r && Dr(t, n, !1), Vi(e, t, s);
          (a = t.stateNode), (bi.current = t);
          var i =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : a.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Ks(t, e.child, null, s)),
                (t.child = Ks(t, null, i, s)))
              : xi(e, t, i, s),
            (t.memoizedState = a.state),
            r && Dr(t, n, !0),
            t.child
          );
        }
        function _i(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Rr(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Rr(0, t.context, !1),
            al(e, t.containerInfo);
        }
        function Pi(e, t, n, a, r) {
          return ms(), ps(r), (t.flags |= 256), xi(e, t, n, a), t.child;
        }
        var Ti,
          Li,
          Mi,
          Ri,
          Oi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function qi(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Di(e, t, n) {
          var a,
            r = t.pendingProps,
            l = il.current,
            i = !1,
            o = 0 !== (128 & t.flags);
          if (
            ((a = o) ||
              (a = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            a
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            zr(il, 1 & l),
            null === e)
          )
            return (
              cs(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((o = r.children),
                  (e = r.fallback),
                  i
                    ? ((r = t.mode),
                      (i = t.child),
                      (o = { mode: "hidden", children: o }),
                      0 === (1 & r) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = o))
                        : (i = Dc(o, r, 0, null)),
                      (e = qc(e, r, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = qi(n)),
                      (t.memoizedState = Oi),
                      e)
                    : Fi(t, o))
            );
          if (null !== (l = e.memoizedState) && null !== (a = l.dehydrated))
            return (function (e, t, n, a, r, l, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ii(e, t, i, (a = ui(Error(s(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((l = a.fallback),
                    (r = t.mode),
                    (a = Dc(
                      { mode: "visible", children: a.children },
                      r,
                      0,
                      null
                    )),
                    ((l = qc(l, r, i, null)).flags |= 2),
                    (a.return = t),
                    (l.return = t),
                    (a.sibling = l),
                    (t.child = a),
                    0 !== (1 & t.mode) && Ks(t, e.child, null, i),
                    (t.child.memoizedState = qi(i)),
                    (t.memoizedState = Oi),
                    l);
              if (0 === (1 & t.mode)) return Ii(e, t, i, null);
              if ("$!" === r.data) {
                if ((a = r.nextSibling && r.nextSibling.dataset))
                  var o = a.dgst;
                return (
                  (a = o), Ii(e, t, i, (a = ui((l = Error(s(419))), a, void 0)))
                );
              }
              if (((o = 0 !== (i & e.childLanes)), yi || o)) {
                if (null !== (a = Po)) {
                  switch (i & -i) {
                    case 4:
                      r = 2;
                      break;
                    case 16:
                      r = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      r = 32;
                      break;
                    case 536870912:
                      r = 268435456;
                      break;
                    default:
                      r = 0;
                  }
                  0 !== (r = 0 !== (r & (a.suspendedLanes | i)) ? 0 : r) &&
                    r !== l.retryLane &&
                    ((l.retryLane = r), _s(e, r), ac(a, e, r, -1));
                }
                return gc(), Ii(e, t, i, (a = ui(Error(s(421)))));
              }
              return "$?" === r.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cc.bind(null, e)),
                  (r._reactRetry = t),
                  null)
                : ((e = l.treeContext),
                  (as = cr(r.nextSibling)),
                  (ns = t),
                  (rs = !0),
                  (ss = null),
                  null !== e &&
                    ((Qr[Yr++] = Kr),
                    (Qr[Yr++] = Gr),
                    (Qr[Yr++] = Xr),
                    (Kr = e.id),
                    (Gr = e.overflow),
                    (Xr = t)),
                  (t = Fi(t, a.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, o, r, a, l, n);
          if (i) {
            (i = r.fallback), (o = t.mode), (a = (l = e.child).sibling);
            var c = { mode: "hidden", children: r.children };
            return (
              0 === (1 & o) && t.child !== l
                ? (((r = t.child).childLanes = 0),
                  (r.pendingProps = c),
                  (t.deletions = null))
                : ((r = Rc(l, c)).subtreeFlags = 14680064 & l.subtreeFlags),
              null !== a
                ? (i = Rc(a, i))
                : ((i = qc(i, o, n, null)).flags |= 2),
              (i.return = t),
              (r.return = t),
              (r.sibling = i),
              (t.child = r),
              (r = i),
              (i = t.child),
              (o =
                null === (o = e.child.memoizedState)
                  ? qi(n)
                  : {
                      baseLanes: o.baseLanes | n,
                      cachePool: null,
                      transitions: o.transitions,
                    }),
              (i.memoizedState = o),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Oi),
              r
            );
          }
          return (
            (e = (i = e.child).sibling),
            (r = Rc(i, { mode: "visible", children: r.children })),
            0 === (1 & t.mode) && (r.lanes = n),
            (r.return = t),
            (r.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = r),
            (t.memoizedState = null),
            r
          );
        }
        function Fi(e, t) {
          return (
            ((t = Dc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ii(e, t, n, a) {
          return (
            null !== a && ps(a),
            Ks(t, e.child, null, n),
            ((e = Fi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ui(e, t, n) {
          e.lanes |= t;
          var a = e.alternate;
          null !== a && (a.lanes |= t), js(e.return, t, n);
        }
        function Ai(e, t, n, a, r) {
          var s = e.memoizedState;
          null === s
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: n,
                tailMode: r,
              })
            : ((s.isBackwards = t),
              (s.rendering = null),
              (s.renderingStartTime = 0),
              (s.last = a),
              (s.tail = n),
              (s.tailMode = r));
        }
        function Bi(e, t, n) {
          var a = t.pendingProps,
            r = a.revealOrder,
            s = a.tail;
          if ((xi(e, t, a.children, n), 0 !== (2 & (a = il.current))))
            (a = (1 & a) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ui(e, n, t);
                else if (19 === e.tag) Ui(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            a &= 1;
          }
          if ((zr(il, a), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (r) {
              case "forwards":
                for (n = t.child, r = null; null !== n; )
                  null !== (e = n.alternate) && null === ol(e) && (r = n),
                    (n = n.sibling);
                null === (n = r)
                  ? ((r = t.child), (t.child = null))
                  : ((r = n.sibling), (n.sibling = null)),
                  Ai(t, !1, r, n, s);
                break;
              case "backwards":
                for (n = null, r = t.child, t.child = null; null !== r; ) {
                  if (null !== (e = r.alternate) && null === ol(e)) {
                    t.child = r;
                    break;
                  }
                  (e = r.sibling), (r.sibling = n), (n = r), (r = e);
                }
                Ai(t, !0, n, null, s);
                break;
              case "together":
                Ai(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $i(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Do |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(s(153));
          if (null !== t.child) {
            for (
              n = Rc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Rc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wi(e, t) {
          if (!rs)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var a = null; null !== n; )
                  null !== n.alternate && (a = n), (n = n.sibling);
                null === a
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (a.sibling = null);
            }
        }
        function Hi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            a = 0;
          if (t)
            for (var r = e.child; null !== r; )
              (n |= r.lanes | r.childLanes),
                (a |= 14680064 & r.subtreeFlags),
                (a |= 14680064 & r.flags),
                (r.return = e),
                (r = r.sibling);
          else
            for (r = e.child; null !== r; )
              (n |= r.lanes | r.childLanes),
                (a |= r.subtreeFlags),
                (a |= r.flags),
                (r.return = e),
                (r = r.sibling);
          return (e.subtreeFlags |= a), (e.childLanes = n), t;
        }
        function Qi(e, t, n) {
          var a = t.pendingProps;
          switch ((ts(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Hi(t), null;
            case 1:
            case 17:
              return Lr(t.type) && Mr(), Hi(t), null;
            case 3:
              return (
                (a = t.stateNode),
                rl(),
                Sr(_r),
                Sr(Cr),
                ul(),
                a.pendingContext &&
                  ((a.context = a.pendingContext), (a.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ds(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ss && (ic(ss), (ss = null)))),
                Li(e, t),
                Hi(t),
                null
              );
            case 5:
              ll(t);
              var r = nl(tl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Mi(e, t, n, a, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!a) {
                  if (null === t.stateNode) throw Error(s(166));
                  return Hi(t), null;
                }
                if (((e = nl(Js.current)), ds(t))) {
                  (a = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((a[fr] = t), (a[mr] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ia("cancel", a), Ia("close", a);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ia("load", a);
                      break;
                    case "video":
                    case "audio":
                      for (r = 0; r < Oa.length; r++) Ia(Oa[r], a);
                      break;
                    case "source":
                      Ia("error", a);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ia("error", a), Ia("load", a);
                      break;
                    case "details":
                      Ia("toggle", a);
                      break;
                    case "input":
                      K(a, l), Ia("invalid", a);
                      break;
                    case "select":
                      (a._wrapperState = { wasMultiple: !!l.multiple }),
                        Ia("invalid", a);
                      break;
                    case "textarea":
                      re(a, l), Ia("invalid", a);
                  }
                  for (var o in (be(n, l), (r = null), l))
                    if (l.hasOwnProperty(o)) {
                      var c = l[o];
                      "children" === o
                        ? "string" === typeof c
                          ? a.textContent !== c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Za(a.textContent, c, e),
                            (r = ["children", c]))
                          : "number" === typeof c &&
                            a.textContent !== "" + c &&
                            (!0 !== l.suppressHydrationWarning &&
                              Za(a.textContent, c, e),
                            (r = ["children", "" + c]))
                        : i.hasOwnProperty(o) &&
                          null != c &&
                          "onScroll" === o &&
                          Ia("scroll", a);
                    }
                  switch (n) {
                    case "input":
                      H(a), J(a, l, !0);
                      break;
                    case "textarea":
                      H(a), le(a);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (a.onclick = Ja);
                  }
                  (a = r), (t.updateQueue = a), null !== a && (t.flags |= 4);
                } else {
                  (o = 9 === r.nodeType ? r : r.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = o.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof a.is
                        ? (e = o.createElement(n, { is: a.is }))
                        : ((e = o.createElement(n)),
                          "select" === n &&
                            ((o = e),
                            a.multiple
                              ? (o.multiple = !0)
                              : a.size && (o.size = a.size)))
                      : (e = o.createElementNS(e, n)),
                    (e[fr] = t),
                    (e[mr] = a),
                    Ti(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((o = ye(n, a)), n)) {
                      case "dialog":
                        Ia("cancel", e), Ia("close", e), (r = a);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ia("load", e), (r = a);
                        break;
                      case "video":
                      case "audio":
                        for (r = 0; r < Oa.length; r++) Ia(Oa[r], e);
                        r = a;
                        break;
                      case "source":
                        Ia("error", e), (r = a);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ia("error", e), Ia("load", e), (r = a);
                        break;
                      case "details":
                        Ia("toggle", e), (r = a);
                        break;
                      case "input":
                        K(e, a), (r = X(e, a)), Ia("invalid", e);
                        break;
                      case "option":
                      default:
                        r = a;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!a.multiple }),
                          (r = D({}, a, { value: void 0 })),
                          Ia("invalid", e);
                        break;
                      case "textarea":
                        re(e, a), (r = ae(e, a)), Ia("invalid", e);
                    }
                    for (l in (be(n, r), (c = r)))
                      if (c.hasOwnProperty(l)) {
                        var u = c[l];
                        "style" === l
                          ? ge(e, u)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === l
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && fe(e, u)
                            : "number" === typeof u && fe(e, "" + u)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != u && "onScroll" === l && Ia("scroll", e)
                              : null != u && y(e, l, u, o));
                      }
                    switch (n) {
                      case "input":
                        H(e), J(e, a, !1);
                        break;
                      case "textarea":
                        H(e), le(e);
                        break;
                      case "option":
                        null != a.value &&
                          e.setAttribute("value", "" + V(a.value));
                        break;
                      case "select":
                        (e.multiple = !!a.multiple),
                          null != (l = a.value)
                            ? ne(e, !!a.multiple, l, !1)
                            : null != a.defaultValue &&
                              ne(e, !!a.multiple, a.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof r.onClick && (e.onclick = Ja);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        a = !!a.autoFocus;
                        break e;
                      case "img":
                        a = !0;
                        break e;
                      default:
                        a = !1;
                    }
                  }
                  a && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Hi(t), null;
            case 6:
              if (e && null != t.stateNode) Ri(e, t, e.memoizedProps, a);
              else {
                if ("string" !== typeof a && null === t.stateNode)
                  throw Error(s(166));
                if (((n = nl(tl.current)), nl(Js.current), ds(t))) {
                  if (
                    ((a = t.stateNode),
                    (n = t.memoizedProps),
                    (a[fr] = t),
                    (l = a.nodeValue !== n) && null !== (e = ns))
                  )
                    switch (e.tag) {
                      case 3:
                        Za(a.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Za(a.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((a = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    a
                  ))[fr] = t),
                    (t.stateNode = a);
              }
              return Hi(t), null;
            case 13:
              if (
                (Sr(il),
                (a = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  rs &&
                  null !== as &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fs(), ms(), (t.flags |= 98560), (l = !1);
                else if (((l = ds(t)), null !== a && null !== a.dehydrated)) {
                  if (null === e) {
                    if (!l) throw Error(s(318));
                    if (
                      !(l =
                        null !== (l = t.memoizedState) ? l.dehydrated : null)
                    )
                      throw Error(s(317));
                    l[fr] = t;
                  } else
                    ms(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Hi(t), (l = !1);
                } else null !== ss && (ic(ss), (ss = null)), (l = !0);
                if (!l) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((a = null !== a) !==
                    (null !== e && null !== e.memoizedState) &&
                    a &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & il.current)
                        ? 0 === Oo && (Oo = 3)
                        : gc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Hi(t),
                  null);
            case 4:
              return (
                rl(),
                Li(e, t),
                null === e && Ba(t.stateNode.containerInfo),
                Hi(t),
                null
              );
            case 10:
              return ws(t.type._context), Hi(t), null;
            case 19:
              if ((Sr(il), null === (l = t.memoizedState))) return Hi(t), null;
              if (((a = 0 !== (128 & t.flags)), null === (o = l.rendering)))
                if (a) Wi(l, !1);
                else {
                  if (0 !== Oo || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (o = ol(e))) {
                        for (
                          t.flags |= 128,
                            Wi(l, !1),
                            null !== (a = o.updateQueue) &&
                              ((t.updateQueue = a), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            a = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = a),
                            ((l = n).flags &= 14680066),
                            null === (o = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = o.childLanes),
                                (l.lanes = o.lanes),
                                (l.child = o.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = o.memoizedProps),
                                (l.memoizedState = o.memoizedState),
                                (l.updateQueue = o.updateQueue),
                                (l.type = o.type),
                                (e = o.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return zr(il, (1 & il.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Ge() > $o &&
                    ((t.flags |= 128),
                    (a = !0),
                    Wi(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!a)
                  if (null !== (e = ol(o))) {
                    if (
                      ((t.flags |= 128),
                      (a = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Wi(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !o.alternate &&
                        !rs)
                    )
                      return Hi(t), null;
                  } else
                    2 * Ge() - l.renderingStartTime > $o &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (a = !0),
                      Wi(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((o.sibling = t.child), (t.child = o))
                  : (null !== (n = l.last) ? (n.sibling = o) : (t.child = o),
                    (l.last = o));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = il.current),
                  zr(il, a ? (1 & n) | 2 : 1 & n),
                  t)
                : (Hi(t), null);
            case 22:
            case 23:
              return (
                fc(),
                (a = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== a &&
                  (t.flags |= 8192),
                a && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Mo) &&
                    (Hi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Hi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(s(156, t.tag));
        }
        function Yi(e, t) {
          switch ((ts(t), t.tag)) {
            case 1:
              return (
                Lr(t.type) && Mr(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                rl(),
                Sr(_r),
                Sr(Cr),
                ul(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ll(t), null;
            case 13:
              if (
                (Sr(il),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(s(340));
                ms();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Sr(il), null;
            case 4:
              return rl(), null;
            case 10:
              return ws(t.type._context), null;
            case 22:
            case 23:
              return fc(), null;
            default:
              return null;
          }
        }
        (Ti = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Li = function () {}),
          (Mi = function (e, t, n, a) {
            var r = e.memoizedProps;
            if (r !== a) {
              (e = t.stateNode), nl(Js.current);
              var s,
                l = null;
              switch (n) {
                case "input":
                  (r = X(e, r)), (a = X(e, a)), (l = []);
                  break;
                case "select":
                  (r = D({}, r, { value: void 0 })),
                    (a = D({}, a, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (r = ae(e, r)), (a = ae(e, a)), (l = []);
                  break;
                default:
                  "function" !== typeof r.onClick &&
                    "function" === typeof a.onClick &&
                    (e.onclick = Ja);
              }
              for (u in (be(n, a), (n = null), r))
                if (!a.hasOwnProperty(u) && r.hasOwnProperty(u) && null != r[u])
                  if ("style" === u) {
                    var o = r[u];
                    for (s in o)
                      o.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (i.hasOwnProperty(u)
                        ? l || (l = [])
                        : (l = l || []).push(u, null));
              for (u in a) {
                var c = a[u];
                if (
                  ((o = null != r ? r[u] : void 0),
                  a.hasOwnProperty(u) && c !== o && (null != c || null != o))
                )
                  if ("style" === u)
                    if (o) {
                      for (s in o)
                        !o.hasOwnProperty(s) ||
                          (c && c.hasOwnProperty(s)) ||
                          (n || (n = {}), (n[s] = ""));
                      for (s in c)
                        c.hasOwnProperty(s) &&
                          o[s] !== c[s] &&
                          (n || (n = {}), (n[s] = c[s]));
                    } else n || (l || (l = []), l.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (o = o ? o.__html : void 0),
                        null != c && o !== c && (l = l || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (l = l || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (i.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Ia("scroll", e),
                            l || o === c || (l = []))
                          : (l = l || []).push(u, c));
              }
              n && (l = l || []).push("style", n);
              var u = l;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Ri = function (e, t, n, a) {
            n !== a && (t.flags |= 4);
          });
        var Xi = !1,
          Ki = !1,
          Gi = "function" === typeof WeakSet ? WeakSet : Set,
          Zi = null;
        function Ji(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (a) {
                Sc(e, t, a);
              }
            else n.current = null;
        }
        function eo(e, t, n) {
          try {
            n();
          } catch (a) {
            Sc(e, t, a);
          }
        }
        var to = !1;
        function no(e, t, n) {
          var a = t.updateQueue;
          if (null !== (a = null !== a ? a.lastEffect : null)) {
            var r = (a = a.next);
            do {
              if ((r.tag & e) === e) {
                var s = r.destroy;
                (r.destroy = void 0), void 0 !== s && eo(t, n, s);
              }
              r = r.next;
            } while (r !== a);
          }
        }
        function ao(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var a = n.create;
                n.destroy = a();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ro(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function so(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), so(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fr],
              delete t[mr],
              delete t[hr],
              delete t[gr],
              delete t[vr]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lo(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function io(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lo(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function oo(e, t, n) {
          var a = e.tag;
          if (5 === a || 6 === a)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Ja));
          else if (4 !== a && null !== (e = e.child))
            for (oo(e, t, n), e = e.sibling; null !== e; )
              oo(e, t, n), (e = e.sibling);
        }
        function co(e, t, n) {
          var a = e.tag;
          if (5 === a || 6 === a)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== a && null !== (e = e.child))
            for (co(e, t, n), e = e.sibling; null !== e; )
              co(e, t, n), (e = e.sibling);
        }
        var uo = null,
          fo = !1;
        function mo(e, t, n) {
          for (n = n.child; null !== n; ) po(e, t, n), (n = n.sibling);
        }
        function po(e, t, n) {
          if (st && "function" === typeof st.onCommitFiberUnmount)
            try {
              st.onCommitFiberUnmount(rt, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Ki || Ji(n, t);
            case 6:
              var a = uo,
                r = fo;
              (uo = null),
                mo(e, t, n),
                (fo = r),
                null !== (uo = a) &&
                  (fo
                    ? ((e = uo),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : uo.removeChild(n.stateNode));
              break;
            case 18:
              null !== uo &&
                (fo
                  ? ((e = uo),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? or(e.parentNode, n)
                      : 1 === e.nodeType && or(e, n),
                    Bt(e))
                  : or(uo, n.stateNode));
              break;
            case 4:
              (a = uo),
                (r = fo),
                (uo = n.stateNode.containerInfo),
                (fo = !0),
                mo(e, t, n),
                (uo = a),
                (fo = r);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ki &&
                null !== (a = n.updateQueue) &&
                null !== (a = a.lastEffect)
              ) {
                r = a = a.next;
                do {
                  var s = r,
                    l = s.destroy;
                  (s = s.tag),
                    void 0 !== l &&
                      (0 !== (2 & s) || 0 !== (4 & s)) &&
                      eo(n, t, l),
                    (r = r.next);
                } while (r !== a);
              }
              mo(e, t, n);
              break;
            case 1:
              if (
                !Ki &&
                (Ji(n, t),
                "function" === typeof (a = n.stateNode).componentWillUnmount)
              )
                try {
                  (a.props = n.memoizedProps),
                    (a.state = n.memoizedState),
                    a.componentWillUnmount();
                } catch (i) {
                  Sc(n, t, i);
                }
              mo(e, t, n);
              break;
            case 21:
              mo(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ki = (a = Ki) || null !== n.memoizedState),
                  mo(e, t, n),
                  (Ki = a))
                : mo(e, t, n);
              break;
            default:
              mo(e, t, n);
          }
        }
        function ho(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gi()),
              t.forEach(function (t) {
                var a = _c.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(a, a));
              });
          }
        }
        function go(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var a = 0; a < n.length; a++) {
              var r = n[a];
              try {
                var l = e,
                  i = t,
                  o = i;
                e: for (; null !== o; ) {
                  switch (o.tag) {
                    case 5:
                      (uo = o.stateNode), (fo = !1);
                      break e;
                    case 3:
                    case 4:
                      (uo = o.stateNode.containerInfo), (fo = !0);
                      break e;
                  }
                  o = o.return;
                }
                if (null === uo) throw Error(s(160));
                po(l, i, r), (uo = null), (fo = !1);
                var c = r.alternate;
                null !== c && (c.return = null), (r.return = null);
              } catch (u) {
                Sc(r, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vo(t, e), (t = t.sibling);
        }
        function vo(e, t) {
          var n = e.alternate,
            a = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((go(t, e), bo(e), 4 & a)) {
                try {
                  no(3, e, e.return), ao(3, e);
                } catch (g) {
                  Sc(e, e.return, g);
                }
                try {
                  no(5, e, e.return);
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              break;
            case 1:
              go(t, e), bo(e), 512 & a && null !== n && Ji(n, n.return);
              break;
            case 5:
              if (
                (go(t, e),
                bo(e),
                512 & a && null !== n && Ji(n, n.return),
                32 & e.flags)
              ) {
                var r = e.stateNode;
                try {
                  fe(r, "");
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              if (4 & a && null != (r = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  o = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === o &&
                      "radio" === l.type &&
                      null != l.name &&
                      G(r, l),
                      ye(o, i);
                    var u = ye(o, l);
                    for (i = 0; i < c.length; i += 2) {
                      var d = c[i],
                        f = c[i + 1];
                      "style" === d
                        ? ge(r, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(r, f)
                        : "children" === d
                        ? fe(r, f)
                        : y(r, d, f, u);
                    }
                    switch (o) {
                      case "input":
                        Z(r, l);
                        break;
                      case "textarea":
                        se(r, l);
                        break;
                      case "select":
                        var m = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!l.multiple;
                        var p = l.value;
                        null != p
                          ? ne(r, !!l.multiple, p, !1)
                          : m !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(r, !!l.multiple, l.defaultValue, !0)
                              : ne(r, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    r[mr] = l;
                  } catch (g) {
                    Sc(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((go(t, e), bo(e), 4 & a)) {
                if (null === e.stateNode) throw Error(s(162));
                (r = e.stateNode), (l = e.memoizedProps);
                try {
                  r.nodeValue = l;
                } catch (g) {
                  Sc(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (go(t, e),
                bo(e),
                4 & a && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (g) {
                  Sc(e, e.return, g);
                }
              break;
            case 4:
            default:
              go(t, e), bo(e);
              break;
            case 13:
              go(t, e),
                bo(e),
                8192 & (r = e.child).flags &&
                  ((l = null !== r.memoizedState),
                  (r.stateNode.isHidden = l),
                  !l ||
                    (null !== r.alternate &&
                      null !== r.alternate.memoizedState) ||
                    (Bo = Ge())),
                4 & a && ho(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ki = (u = Ki) || d), go(t, e), (Ki = u))
                  : go(t, e),
                bo(e),
                8192 & a)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Zi = e, d = e.child; null !== d; ) {
                    for (f = Zi = d; null !== Zi; ) {
                      switch (((p = (m = Zi).child), m.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          no(4, m, m.return);
                          break;
                        case 1:
                          Ji(m, m.return);
                          var h = m.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (a = m), (n = m.return);
                            try {
                              (t = a),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (g) {
                              Sc(a, n, g);
                            }
                          }
                          break;
                        case 5:
                          Ji(m, m.return);
                          break;
                        case 22:
                          if (null !== m.memoizedState) {
                            wo(f);
                            continue;
                          }
                      }
                      null !== p ? ((p.return = m), (Zi = p)) : wo(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (r = f.stateNode),
                          u
                            ? "function" === typeof (l = r.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((o = f.stateNode),
                              (i =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (o.style.display = he("display", i)));
                      } catch (g) {
                        Sc(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (g) {
                        Sc(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              go(t, e), bo(e), 4 & a && ho(e);
            case 21:
          }
        }
        function bo(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (lo(n)) {
                    var a = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(s(160));
              }
              switch (a.tag) {
                case 5:
                  var r = a.stateNode;
                  32 & a.flags && (fe(r, ""), (a.flags &= -33)),
                    co(e, io(e), r);
                  break;
                case 3:
                case 4:
                  var l = a.stateNode.containerInfo;
                  oo(e, io(e), l);
                  break;
                default:
                  throw Error(s(161));
              }
            } catch (i) {
              Sc(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yo(e, t, n) {
          (Zi = e), xo(e, t, n);
        }
        function xo(e, t, n) {
          for (var a = 0 !== (1 & e.mode); null !== Zi; ) {
            var r = Zi,
              s = r.child;
            if (22 === r.tag && a) {
              var l = null !== r.memoizedState || Xi;
              if (!l) {
                var i = r.alternate,
                  o = (null !== i && null !== i.memoizedState) || Ki;
                i = Xi;
                var c = Ki;
                if (((Xi = l), (Ki = o) && !c))
                  for (Zi = r; null !== Zi; )
                    (o = (l = Zi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? jo(r)
                        : null !== o
                        ? ((o.return = l), (Zi = o))
                        : jo(r);
                for (; null !== s; ) (Zi = s), xo(s, t, n), (s = s.sibling);
                (Zi = r), (Xi = i), (Ki = c);
              }
              ko(e);
            } else
              0 !== (8772 & r.subtreeFlags) && null !== s
                ? ((s.return = r), (Zi = s))
                : ko(e);
          }
        }
        function ko(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ki || ao(5, t);
                      break;
                    case 1:
                      var a = t.stateNode;
                      if (4 & t.flags && !Ki)
                        if (null === n) a.componentDidMount();
                        else {
                          var r =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gs(t.type, n.memoizedProps);
                          a.componentDidUpdate(
                            r,
                            n.memoizedState,
                            a.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Fs(t, l, a);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Fs(t, i, n);
                      }
                      break;
                    case 5:
                      var o = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = o;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Bt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(s(163));
                  }
                Ki || (512 & t.flags && ro(t));
              } catch (m) {
                Sc(t, t.return, m);
              }
            }
            if (t === e) {
              Zi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function wo(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            if (t === e) {
              Zi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zi = n);
              break;
            }
            Zi = t.return;
          }
        }
        function jo(e) {
          for (; null !== Zi; ) {
            var t = Zi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ao(4, t);
                  } catch (o) {
                    Sc(t, n, o);
                  }
                  break;
                case 1:
                  var a = t.stateNode;
                  if ("function" === typeof a.componentDidMount) {
                    var r = t.return;
                    try {
                      a.componentDidMount();
                    } catch (o) {
                      Sc(t, r, o);
                    }
                  }
                  var s = t.return;
                  try {
                    ro(t);
                  } catch (o) {
                    Sc(t, s, o);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    ro(t);
                  } catch (o) {
                    Sc(t, l, o);
                  }
              }
            } catch (o) {
              Sc(t, t.return, o);
            }
            if (t === e) {
              Zi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (Zi = i);
              break;
            }
            Zi = t.return;
          }
        }
        var No,
          So = Math.ceil,
          zo = x.ReactCurrentDispatcher,
          Eo = x.ReactCurrentOwner,
          Co = x.ReactCurrentBatchConfig,
          _o = 0,
          Po = null,
          To = null,
          Lo = 0,
          Mo = 0,
          Ro = Nr(0),
          Oo = 0,
          qo = null,
          Do = 0,
          Fo = 0,
          Io = 0,
          Uo = null,
          Ao = null,
          Bo = 0,
          $o = 1 / 0,
          Vo = null,
          Wo = !1,
          Ho = null,
          Qo = null,
          Yo = !1,
          Xo = null,
          Ko = 0,
          Go = 0,
          Zo = null,
          Jo = -1,
          ec = 0;
        function tc() {
          return 0 !== (6 & _o) ? Ge() : -1 !== Jo ? Jo : (Jo = Ge());
        }
        function nc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _o) && 0 !== Lo
            ? Lo & -Lo
            : null !== hs.transition
            ? (0 === ec && (ec = ht()), ec)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function ac(e, t, n, a) {
          if (50 < Go) throw ((Go = 0), (Zo = null), Error(s(185)));
          vt(e, n, a),
            (0 !== (2 & _o) && e === Po) ||
              (e === Po && (0 === (2 & _o) && (Fo |= n), 4 === Oo && oc(e, Lo)),
              rc(e, a),
              1 === n &&
                0 === _o &&
                0 === (1 & t.mode) &&
                (($o = Ge() + 500), Ir && Br()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                a = e.pingedLanes,
                r = e.expirationTimes,
                s = e.pendingLanes;
              0 < s;

            ) {
              var l = 31 - lt(s),
                i = 1 << l,
                o = r[l];
              -1 === o
                ? (0 !== (i & n) && 0 === (i & a)) || (r[l] = mt(i, t))
                : o <= t && (e.expiredLanes |= i),
                (s &= ~i);
            }
          })(e, t);
          var a = ft(e, e === Po ? Lo : 0);
          if (0 === a)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = a & -a), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ir = !0), Ar(e);
                  })(cc.bind(null, e))
                : Ar(cc.bind(null, e)),
                lr(function () {
                  0 === (6 & _o) && Br();
                }),
                (n = null);
            else {
              switch (xt(a)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = at;
              }
              n = Pc(n, sc.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function sc(e, t) {
          if (((Jo = -1), (ec = 0), 0 !== (6 & _o))) throw Error(s(327));
          var n = e.callbackNode;
          if (jc() && e.callbackNode !== n) return null;
          var a = ft(e, e === Po ? Lo : 0);
          if (0 === a) return null;
          if (0 !== (30 & a) || 0 !== (a & e.expiredLanes) || t) t = vc(e, a);
          else {
            t = a;
            var r = _o;
            _o |= 2;
            var l = hc();
            for (
              (Po === e && Lo === t) ||
              ((Vo = null), ($o = Ge() + 500), mc(e, t));
              ;

            )
              try {
                yc();
                break;
              } catch (o) {
                pc(e, o);
              }
            ks(),
              (zo.current = l),
              (_o = r),
              null !== To ? (t = 0) : ((Po = null), (Lo = 0), (t = Oo));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (r = pt(e)) && ((a = r), (t = lc(e, r))),
              1 === t)
            )
              throw ((n = qo), mc(e, 0), oc(e, a), rc(e, Ge()), n);
            if (6 === t) oc(e, a);
            else {
              if (
                ((r = e.current.alternate),
                0 === (30 & a) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var a = 0; a < n.length; a++) {
                            var r = n[a],
                              s = r.getSnapshot;
                            r = r.value;
                            try {
                              if (!ia(s(), r)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(r) &&
                  (2 === (t = vc(e, a)) &&
                    0 !== (l = pt(e)) &&
                    ((a = l), (t = lc(e, l))),
                  1 === t))
              )
                throw ((n = qo), mc(e, 0), oc(e, a), rc(e, Ge()), n);
              switch (((e.finishedWork = r), (e.finishedLanes = a), t)) {
                case 0:
                case 1:
                  throw Error(s(345));
                case 2:
                case 5:
                  wc(e, Ao, Vo);
                  break;
                case 3:
                  if (
                    (oc(e, a),
                    (130023424 & a) === a && 10 < (t = Bo + 500 - Ge()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((r = e.suspendedLanes) & a) !== a) {
                      tc(), (e.pingedLanes |= e.suspendedLanes & r);
                      break;
                    }
                    e.timeoutHandle = ar(wc.bind(null, e, Ao, Vo), t);
                    break;
                  }
                  wc(e, Ao, Vo);
                  break;
                case 4:
                  if ((oc(e, a), (4194240 & a) === a)) break;
                  for (t = e.eventTimes, r = -1; 0 < a; ) {
                    var i = 31 - lt(a);
                    (l = 1 << i), (i = t[i]) > r && (r = i), (a &= ~l);
                  }
                  if (
                    ((a = r),
                    10 <
                      (a =
                        (120 > (a = Ge() - a)
                          ? 120
                          : 480 > a
                          ? 480
                          : 1080 > a
                          ? 1080
                          : 1920 > a
                          ? 1920
                          : 3e3 > a
                          ? 3e3
                          : 4320 > a
                          ? 4320
                          : 1960 * So(a / 1960)) - a))
                  ) {
                    e.timeoutHandle = ar(wc.bind(null, e, Ao, Vo), a);
                    break;
                  }
                  wc(e, Ao, Vo);
                  break;
                default:
                  throw Error(s(329));
              }
            }
          }
          return rc(e, Ge()), e.callbackNode === n ? sc.bind(null, e) : null;
        }
        function lc(e, t) {
          var n = Uo;
          return (
            e.current.memoizedState.isDehydrated && (mc(e, t).flags |= 256),
            2 !== (e = vc(e, t)) && ((t = Ao), (Ao = n), null !== t && ic(t)),
            e
          );
        }
        function ic(e) {
          null === Ao ? (Ao = e) : Ao.push.apply(Ao, e);
        }
        function oc(e, t) {
          for (
            t &= ~Io,
              t &= ~Fo,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              a = 1 << n;
            (e[n] = -1), (t &= ~a);
          }
        }
        function cc(e) {
          if (0 !== (6 & _o)) throw Error(s(327));
          jc();
          var t = ft(e, 0);
          if (0 === (1 & t)) return rc(e, Ge()), null;
          var n = vc(e, t);
          if (0 !== e.tag && 2 === n) {
            var a = pt(e);
            0 !== a && ((t = a), (n = lc(e, a)));
          }
          if (1 === n) throw ((n = qo), mc(e, 0), oc(e, t), rc(e, Ge()), n);
          if (6 === n) throw Error(s(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wc(e, Ao, Vo),
            rc(e, Ge()),
            null
          );
        }
        function uc(e, t) {
          var n = _o;
          _o |= 1;
          try {
            return e(t);
          } finally {
            0 === (_o = n) && (($o = Ge() + 500), Ir && Br());
          }
        }
        function dc(e) {
          null !== Xo && 0 === Xo.tag && 0 === (6 & _o) && jc();
          var t = _o;
          _o |= 1;
          var n = Co.transition,
            a = yt;
          try {
            if (((Co.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = a), (Co.transition = n), 0 === (6 & (_o = t)) && Br();
          }
        }
        function fc() {
          (Mo = Ro.current), Sr(Ro);
        }
        function mc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), rr(n)), null !== To))
            for (n = To.return; null !== n; ) {
              var a = n;
              switch ((ts(a), a.tag)) {
                case 1:
                  null !== (a = a.type.childContextTypes) &&
                    void 0 !== a &&
                    Mr();
                  break;
                case 3:
                  rl(), Sr(_r), Sr(Cr), ul();
                  break;
                case 5:
                  ll(a);
                  break;
                case 4:
                  rl();
                  break;
                case 13:
                case 19:
                  Sr(il);
                  break;
                case 10:
                  ws(a.type._context);
                  break;
                case 22:
                case 23:
                  fc();
              }
              n = n.return;
            }
          if (
            ((Po = e),
            (To = e = Rc(e.current, null)),
            (Lo = Mo = t),
            (Oo = 0),
            (qo = null),
            (Io = Fo = Do = 0),
            (Ao = Uo = null),
            null !== zs)
          ) {
            for (t = 0; t < zs.length; t++)
              if (null !== (a = (n = zs[t]).interleaved)) {
                n.interleaved = null;
                var r = a.next,
                  s = n.pending;
                if (null !== s) {
                  var l = s.next;
                  (s.next = r), (a.next = l);
                }
                n.pending = a;
              }
            zs = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = To;
            try {
              if ((ks(), (dl.current = si), vl)) {
                for (var a = pl.memoizedState; null !== a; ) {
                  var r = a.queue;
                  null !== r && (r.pending = null), (a = a.next);
                }
                vl = !1;
              }
              if (
                ((ml = 0),
                (gl = hl = pl = null),
                (bl = !1),
                (yl = 0),
                (Eo.current = null),
                null === n || null === n.return)
              ) {
                (Oo = 1), (qo = t), (To = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  o = n,
                  c = t;
                if (
                  ((t = Lo),
                  (o.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = o,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var m = d.alternate;
                    m
                      ? ((d.updateQueue = m.updateQueue),
                        (d.memoizedState = m.memoizedState),
                        (d.lanes = m.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var p = gi(i);
                  if (null !== p) {
                    (p.flags &= -257),
                      vi(p, i, o, 0, t),
                      1 & p.mode && hi(l, u, t),
                      (c = u);
                    var h = (t = p).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else h.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    hi(l, u, t), gc();
                    break e;
                  }
                  c = Error(s(426));
                } else if (rs && 1 & o.mode) {
                  var v = gi(i);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      vi(v, i, o, 0, t),
                      ps(ci(c, o));
                    break e;
                  }
                }
                (l = c = ci(c, o)),
                  4 !== Oo && (Oo = 2),
                  null === Uo ? (Uo = [l]) : Uo.push(l),
                  (l = i);
                do {
                  switch (l.tag) {
                    case 3:
                      (l.flags |= 65536),
                        (t &= -t),
                        (l.lanes |= t),
                        qs(l, mi(0, c, t));
                      break e;
                    case 1:
                      o = c;
                      var b = l.type,
                        y = l.stateNode;
                      if (
                        0 === (128 & l.flags) &&
                        ("function" === typeof b.getDerivedStateFromError ||
                          (null !== y &&
                            "function" === typeof y.componentDidCatch &&
                            (null === Qo || !Qo.has(y))))
                      ) {
                        (l.flags |= 65536),
                          (t &= -t),
                          (l.lanes |= t),
                          qs(l, pi(l, o, t));
                        break e;
                      }
                  }
                  l = l.return;
                } while (null !== l);
              }
              kc(n);
            } catch (x) {
              (t = x), To === n && null !== n && (To = n = n.return);
              continue;
            }
            break;
          }
        }
        function hc() {
          var e = zo.current;
          return (zo.current = si), null === e ? si : e;
        }
        function gc() {
          (0 !== Oo && 3 !== Oo && 2 !== Oo) || (Oo = 4),
            null === Po ||
              (0 === (268435455 & Do) && 0 === (268435455 & Fo)) ||
              oc(Po, Lo);
        }
        function vc(e, t) {
          var n = _o;
          _o |= 2;
          var a = hc();
          for ((Po === e && Lo === t) || ((Vo = null), mc(e, t)); ; )
            try {
              bc();
              break;
            } catch (r) {
              pc(e, r);
            }
          if ((ks(), (_o = n), (zo.current = a), null !== To))
            throw Error(s(261));
          return (Po = null), (Lo = 0), Oo;
        }
        function bc() {
          for (; null !== To; ) xc(To);
        }
        function yc() {
          for (; null !== To && !Xe(); ) xc(To);
        }
        function xc(e) {
          var t = No(e.alternate, e, Mo);
          (e.memoizedProps = e.pendingProps),
            null === t ? kc(e) : (To = t),
            (Eo.current = null);
        }
        function kc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qi(n, t, Mo))) return void (To = n);
            } else {
              if (null !== (n = Yi(n, t)))
                return (n.flags &= 32767), void (To = n);
              if (null === e) return (Oo = 6), void (To = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (To = t);
            To = t = e;
          } while (null !== t);
          0 === Oo && (Oo = 5);
        }
        function wc(e, t, n) {
          var a = yt,
            r = Co.transition;
          try {
            (Co.transition = null),
              (yt = 1),
              (function (e, t, n, a) {
                do {
                  jc();
                } while (null !== Xo);
                if (0 !== (6 & _o)) throw Error(s(327));
                n = e.finishedWork;
                var r = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(s(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var a = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var r = 31 - lt(n),
                        s = 1 << r;
                      (t[r] = 0), (a[r] = -1), (e[r] = -1), (n &= ~s);
                    }
                  })(e, l),
                  e === Po && ((To = Po = null), (Lo = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Yo ||
                    ((Yo = !0),
                    Pc(tt, function () {
                      return jc(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Co.transition), (Co.transition = null);
                  var i = yt;
                  yt = 1;
                  var o = _o;
                  (_o |= 4),
                    (Eo.current = null),
                    (function (e, t) {
                      if (((er = Vt), ma((e = fa())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var a =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (a && 0 !== a.rangeCount) {
                              n = a.anchorNode;
                              var r = a.anchorOffset,
                                l = a.focusNode;
                              a = a.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                o = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                m = null;
                              t: for (;;) {
                                for (
                                  var p;
                                  f !== n ||
                                    (0 !== r && 3 !== f.nodeType) ||
                                    (o = i + r),
                                    f !== l ||
                                      (0 !== a && 3 !== f.nodeType) ||
                                      (c = i + a),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (p = f.firstChild);

                                )
                                  (m = f), (f = p);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (m === n && ++u === r && (o = i),
                                    m === l && ++d === a && (c = i),
                                    null !== (p = f.nextSibling))
                                  )
                                    break;
                                  m = (f = m).parentNode;
                                }
                                f = p;
                              }
                              n =
                                -1 === o || -1 === c
                                  ? null
                                  : { start: o, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        tr = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Zi = t;
                        null !== Zi;

                      )
                        if (
                          ((e = (t = Zi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zi = e);
                        else
                          for (; null !== Zi; ) {
                            t = Zi;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        v = h.memoizedState,
                                        b = t.stateNode,
                                        y = b.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gs(t.type, g),
                                          v
                                        );
                                      b.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(s(163));
                                }
                            } catch (k) {
                              Sc(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zi = e);
                              break;
                            }
                            Zi = t.return;
                          }
                      (h = to), (to = !1);
                    })(e, n),
                    vo(n, e),
                    pa(tr),
                    (Vt = !!er),
                    (tr = er = null),
                    (e.current = n),
                    yo(n, e, r),
                    Ke(),
                    (_o = o),
                    (yt = i),
                    (Co.transition = l);
                } else e.current = n;
                if (
                  (Yo && ((Yo = !1), (Xo = e), (Ko = r)),
                  (l = e.pendingLanes),
                  0 === l && (Qo = null),
                  (function (e) {
                    if (st && "function" === typeof st.onCommitFiberRoot)
                      try {
                        st.onCommitFiberRoot(
                          rt,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Ge()),
                  null !== t)
                )
                  for (a = e.onRecoverableError, n = 0; n < t.length; n++)
                    (r = t[n]),
                      a(r.value, { componentStack: r.stack, digest: r.digest });
                if (Wo) throw ((Wo = !1), (e = Ho), (Ho = null), e);
                0 !== (1 & Ko) && 0 !== e.tag && jc(),
                  (l = e.pendingLanes),
                  0 !== (1 & l)
                    ? e === Zo
                      ? Go++
                      : ((Go = 0), (Zo = e))
                    : (Go = 0),
                  Br();
              })(e, t, n, a);
          } finally {
            (Co.transition = r), (yt = a);
          }
          return null;
        }
        function jc() {
          if (null !== Xo) {
            var e = xt(Ko),
              t = Co.transition,
              n = yt;
            try {
              if (((Co.transition = null), (yt = 16 > e ? 16 : e), null === Xo))
                var a = !1;
              else {
                if (((e = Xo), (Xo = null), (Ko = 0), 0 !== (6 & _o)))
                  throw Error(s(331));
                var r = _o;
                for (_o |= 4, Zi = e.current; null !== Zi; ) {
                  var l = Zi,
                    i = l.child;
                  if (0 !== (16 & Zi.flags)) {
                    var o = l.deletions;
                    if (null !== o) {
                      for (var c = 0; c < o.length; c++) {
                        var u = o[c];
                        for (Zi = u; null !== Zi; ) {
                          var d = Zi;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              no(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zi = f);
                          else
                            for (; null !== Zi; ) {
                              var m = (d = Zi).sibling,
                                p = d.return;
                              if ((so(d), d === u)) {
                                Zi = null;
                                break;
                              }
                              if (null !== m) {
                                (m.return = p), (Zi = m);
                                break;
                              }
                              Zi = p;
                            }
                        }
                      }
                      var h = l.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Zi = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (Zi = i);
                  else
                    e: for (; null !== Zi; ) {
                      if (0 !== (2048 & (l = Zi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            no(9, l, l.return);
                        }
                      var b = l.sibling;
                      if (null !== b) {
                        (b.return = l.return), (Zi = b);
                        break e;
                      }
                      Zi = l.return;
                    }
                }
                var y = e.current;
                for (Zi = y; null !== Zi; ) {
                  var x = (i = Zi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== x)
                    (x.return = i), (Zi = x);
                  else
                    e: for (i = y; null !== Zi; ) {
                      if (0 !== (2048 & (o = Zi).flags))
                        try {
                          switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ao(9, o);
                          }
                        } catch (w) {
                          Sc(o, o.return, w);
                        }
                      if (o === i) {
                        Zi = null;
                        break e;
                      }
                      var k = o.sibling;
                      if (null !== k) {
                        (k.return = o.return), (Zi = k);
                        break e;
                      }
                      Zi = o.return;
                    }
                }
                if (
                  ((_o = r),
                  Br(),
                  st && "function" === typeof st.onPostCommitFiberRoot)
                )
                  try {
                    st.onPostCommitFiberRoot(rt, e);
                  } catch (w) {}
                a = !0;
              }
              return a;
            } finally {
              (yt = n), (Co.transition = t);
            }
          }
          return !1;
        }
        function Nc(e, t, n) {
          (e = Rs(e, (t = mi(0, (t = ci(n, t)), 1)), 1)),
            (t = tc()),
            null !== e && (vt(e, 1, t), rc(e, t));
        }
        function Sc(e, t, n) {
          if (3 === e.tag) Nc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Nc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var a = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof a.componentDidCatch &&
                    (null === Qo || !Qo.has(a)))
                ) {
                  (t = Rs(t, (e = pi(t, (e = ci(n, e)), 1)), 1)),
                    (e = tc()),
                    null !== t && (vt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function zc(e, t, n) {
          var a = e.pingCache;
          null !== a && a.delete(t),
            (t = tc()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Po === e &&
              (Lo & n) === n &&
              (4 === Oo ||
              (3 === Oo && (130023424 & Lo) === Lo && 500 > Ge() - Bo)
                ? mc(e, 0)
                : (Io |= n)),
            rc(e, t);
        }
        function Ec(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = tc();
          null !== (e = _s(e, t)) && (vt(e, t, n), rc(e, n));
        }
        function Cc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ec(e, n);
        }
        function _c(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var a = e.stateNode,
                r = e.memoizedState;
              null !== r && (n = r.retryLane);
              break;
            case 19:
              a = e.stateNode;
              break;
            default:
              throw Error(s(314));
          }
          null !== a && a.delete(t), Ec(e, n);
        }
        function Pc(e, t) {
          return Qe(e, t);
        }
        function Tc(e, t, n, a) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = a),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lc(e, t, n, a) {
          return new Tc(e, t, n, a);
        }
        function Mc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Rc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Oc(e, t, n, a, r, l) {
          var i = 2;
          if (((a = e), "function" === typeof e)) Mc(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case j:
                return qc(n.children, r, l, t);
              case N:
                (i = 8), (r |= 8);
                break;
              case S:
                return (
                  ((e = Lc(12, n, t, 2 | r)).elementType = S), (e.lanes = l), e
                );
              case _:
                return (
                  ((e = Lc(13, n, t, r)).elementType = _), (e.lanes = l), e
                );
              case P:
                return (
                  ((e = Lc(19, n, t, r)).elementType = P), (e.lanes = l), e
                );
              case M:
                return Dc(n, r, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case z:
                      i = 10;
                      break e;
                    case E:
                      i = 9;
                      break e;
                    case C:
                      i = 11;
                      break e;
                    case T:
                      i = 14;
                      break e;
                    case L:
                      (i = 16), (a = null);
                      break e;
                  }
                throw Error(s(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lc(i, n, t, r)).elementType = e),
            (t.type = a),
            (t.lanes = l),
            t
          );
        }
        function qc(e, t, n, a) {
          return ((e = Lc(7, e, a, t)).lanes = n), e;
        }
        function Dc(e, t, n, a) {
          return (
            ((e = Lc(22, e, a, t)).elementType = M),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fc(e, t, n) {
          return ((e = Lc(6, e, null, t)).lanes = n), e;
        }
        function Ic(e, t, n) {
          return (
            ((t = Lc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Uc(e, t, n, a, r) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = a),
            (this.onRecoverableError = r),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ac(e, t, n, a, r, s, l, i, o) {
          return (
            (e = new Uc(e, t, n, i, o)),
            1 === t ? ((t = 1), !0 === s && (t |= 8)) : (t = 0),
            (s = Lc(3, null, null, t)),
            (e.current = s),
            (s.stateNode = e),
            (s.memoizedState = {
              element: a,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ts(s),
            e
          );
        }
        function Bc(e) {
          if (!e) return Er;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(s(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Lr(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(s(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Lr(n)) return Or(e, n, t);
          }
          return t;
        }
        function $c(e, t, n, a, r, s, l, i, o) {
          return (
            ((e = Ac(n, a, !0, e, 0, s, 0, i, o)).context = Bc(null)),
            (n = e.current),
            ((s = Ms((a = tc()), (r = nc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Rs(n, s, r),
            (e.current.lanes = r),
            vt(e, r, a),
            rc(e, a),
            e
          );
        }
        function Vc(e, t, n, a) {
          var r = t.current,
            s = tc(),
            l = nc(r);
          return (
            (n = Bc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ms(s, l)).payload = { element: e }),
            null !== (a = void 0 === a ? null : a) && (t.callback = a),
            null !== (e = Rs(r, t, l)) && (ac(e, r, l, s), Os(e, r, l)),
            l
          );
        }
        function Wc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Hc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qc(e, t) {
          Hc(e, t), (e = e.alternate) && Hc(e, t);
        }
        No = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || _r.current) yi = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (yi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        _i(t), ms();
                        break;
                      case 5:
                        sl(t);
                        break;
                      case 1:
                        Lr(t.type) && qr(t);
                        break;
                      case 4:
                        al(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var a = t.type._context,
                          r = t.memoizedProps.value;
                        zr(vs, a._currentValue), (a._currentValue = r);
                        break;
                      case 13:
                        if (null !== (a = t.memoizedState))
                          return null !== a.dehydrated
                            ? (zr(il, 1 & il.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Di(e, t, n)
                            : (zr(il, 1 & il.current),
                              null !== (e = Vi(e, t, n)) ? e.sibling : null);
                        zr(il, 1 & il.current);
                        break;
                      case 19:
                        if (
                          ((a = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (a) return Bi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (r = t.memoizedState) &&
                            ((r.rendering = null),
                            (r.tail = null),
                            (r.lastEffect = null)),
                          zr(il, il.current),
                          a)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ni(e, t, n);
                    }
                    return Vi(e, t, n);
                  })(e, t, n)
                );
              yi = 0 !== (131072 & e.flags);
            }
          else (yi = !1), rs && 0 !== (1048576 & t.flags) && Jr(t, Hr, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var a = t.type;
              $i(e, t), (e = t.pendingProps);
              var r = Tr(t, Cr.current);
              Ns(t, n), (r = jl(null, t, a, e, r, n));
              var l = Nl();
              return (
                (t.flags |= 1),
                "object" === typeof r &&
                null !== r &&
                "function" === typeof r.render &&
                void 0 === r.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Lr(a) ? ((l = !0), qr(t)) : (l = !1),
                    (t.memoizedState =
                      null !== r.state && void 0 !== r.state ? r.state : null),
                    Ts(t),
                    (r.updater = As),
                    (t.stateNode = r),
                    (r._reactInternals = t),
                    Ws(t, a, e, n),
                    (t = Ci(null, t, a, !0, l, n)))
                  : ((t.tag = 0),
                    rs && l && es(t),
                    xi(null, t, r, n),
                    (t = t.child)),
                t
              );
            case 16:
              a = t.elementType;
              e: {
                switch (
                  ($i(e, t),
                  (e = t.pendingProps),
                  (a = (r = a._init)(a._payload)),
                  (t.type = a),
                  (r = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Mc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === C) return 11;
                        if (e === T) return 14;
                      }
                      return 2;
                    })(a)),
                  (e = gs(a, e)),
                  r)
                ) {
                  case 0:
                    t = zi(null, t, a, e, n);
                    break e;
                  case 1:
                    t = Ei(null, t, a, e, n);
                    break e;
                  case 11:
                    t = ki(null, t, a, e, n);
                    break e;
                  case 14:
                    t = wi(null, t, a, gs(a.type, e), n);
                    break e;
                }
                throw Error(s(306, a, ""));
              }
              return t;
            case 0:
              return (
                (a = t.type),
                (r = t.pendingProps),
                zi(e, t, a, (r = t.elementType === a ? r : gs(a, r)), n)
              );
            case 1:
              return (
                (a = t.type),
                (r = t.pendingProps),
                Ei(e, t, a, (r = t.elementType === a ? r : gs(a, r)), n)
              );
            case 3:
              e: {
                if ((_i(t), null === e)) throw Error(s(387));
                (a = t.pendingProps),
                  (r = (l = t.memoizedState).element),
                  Ls(e, t),
                  Ds(t, a, null, n);
                var i = t.memoizedState;
                if (((a = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: a,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Pi(e, t, a, n, (r = ci(Error(s(423)), t)));
                    break e;
                  }
                  if (a !== r) {
                    t = Pi(e, t, a, n, (r = ci(Error(s(424)), t)));
                    break e;
                  }
                  for (
                    as = cr(t.stateNode.containerInfo.firstChild),
                      ns = t,
                      rs = !0,
                      ss = null,
                      n = Gs(t, null, a, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ms(), a === r)) {
                    t = Vi(e, t, n);
                    break e;
                  }
                  xi(e, t, a, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                sl(t),
                null === e && cs(t),
                (a = t.type),
                (r = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = r.children),
                nr(a, r)
                  ? (i = null)
                  : null !== l && nr(a, l) && (t.flags |= 32),
                Si(e, t),
                xi(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && cs(t), null;
            case 13:
              return Di(e, t, n);
            case 4:
              return (
                al(t, t.stateNode.containerInfo),
                (a = t.pendingProps),
                null === e ? (t.child = Ks(t, null, a, n)) : xi(e, t, a, n),
                t.child
              );
            case 11:
              return (
                (a = t.type),
                (r = t.pendingProps),
                ki(e, t, a, (r = t.elementType === a ? r : gs(a, r)), n)
              );
            case 7:
              return xi(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xi(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((a = t.type._context),
                  (r = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = r.value),
                  zr(vs, a._currentValue),
                  (a._currentValue = i),
                  null !== l)
                )
                  if (ia(l.value, i)) {
                    if (l.children === r.children && !_r.current) {
                      t = Vi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var o = l.dependencies;
                      if (null !== o) {
                        i = l.child;
                        for (var c = o.firstContext; null !== c; ) {
                          if (c.context === a) {
                            if (1 === l.tag) {
                              (c = Ms(-1, n & -n)).tag = 2;
                              var u = l.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (l.lanes |= n),
                              null !== (c = l.alternate) && (c.lanes |= n),
                              js(l.return, n, t),
                              (o.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(s(341));
                        (i.lanes |= n),
                          null !== (o = i.alternate) && (o.lanes |= n),
                          js(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                xi(e, t, r.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (r = t.type),
                (a = t.pendingProps.children),
                Ns(t, n),
                (a = a((r = Ss(r)))),
                (t.flags |= 1),
                xi(e, t, a, n),
                t.child
              );
            case 14:
              return (
                (r = gs((a = t.type), t.pendingProps)),
                wi(e, t, a, (r = gs(a.type, r)), n)
              );
            case 15:
              return ji(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (a = t.type),
                (r = t.pendingProps),
                (r = t.elementType === a ? r : gs(a, r)),
                $i(e, t),
                (t.tag = 1),
                Lr(a) ? ((e = !0), qr(t)) : (e = !1),
                Ns(t, n),
                $s(t, a, r),
                Ws(t, a, r, n),
                Ci(null, t, a, !0, e, n)
              );
            case 19:
              return Bi(e, t, n);
            case 22:
              return Ni(e, t, n);
          }
          throw Error(s(156, t.tag));
        };
        var Yc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xc(e) {
          this._internalRoot = e;
        }
        function Kc(e) {
          this._internalRoot = e;
        }
        function Gc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jc() {}
        function eu(e, t, n, a, r) {
          var s = n._reactRootContainer;
          if (s) {
            var l = s;
            if ("function" === typeof r) {
              var i = r;
              r = function () {
                var e = Wc(l);
                i.call(e);
              };
            }
            Vc(t, l, e, r);
          } else
            l = (function (e, t, n, a, r) {
              if (r) {
                if ("function" === typeof a) {
                  var s = a;
                  a = function () {
                    var e = Wc(l);
                    s.call(e);
                  };
                }
                var l = $c(t, a, e, 0, null, !1, 0, "", Jc);
                return (
                  (e._reactRootContainer = l),
                  (e[pr] = l.current),
                  Ba(8 === e.nodeType ? e.parentNode : e),
                  dc(),
                  l
                );
              }
              for (; (r = e.lastChild); ) e.removeChild(r);
              if ("function" === typeof a) {
                var i = a;
                a = function () {
                  var e = Wc(o);
                  i.call(e);
                };
              }
              var o = Ac(e, 0, !1, null, 0, !1, 0, "", Jc);
              return (
                (e._reactRootContainer = o),
                (e[pr] = o.current),
                Ba(8 === e.nodeType ? e.parentNode : e),
                dc(function () {
                  Vc(t, o, n, a);
                }),
                o
              );
            })(n, t, e, r, a);
          return Wc(l);
        }
        (Kc.prototype.render = Xc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(s(409));
            Vc(e, t, null, null);
          }),
          (Kc.prototype.unmount = Xc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                dc(function () {
                  Vc(null, e, null, null);
                }),
                  (t[pr] = null);
              }
            }),
          (Kc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Nt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Mt.length && 0 !== t && t < Mt[n].priority;
                n++
              );
              Mt.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (bt(t, 1 | n),
                    rc(t, Ge()),
                    0 === (6 & _o) && (($o = Ge() + 500), Br()));
                }
                break;
              case 13:
                dc(function () {
                  var t = _s(e, 1);
                  if (null !== t) {
                    var n = tc();
                    ac(t, e, 1, n);
                  }
                }),
                  Qc(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = _s(e, 134217728);
              if (null !== t) ac(t, e, 134217728, tc());
              Qc(e, 134217728);
            }
          }),
          (jt = function (e) {
            if (13 === e.tag) {
              var t = nc(e),
                n = _s(e, t);
              if (null !== n) ac(n, e, t, tc());
              Qc(e, t);
            }
          }),
          (Nt = function () {
            return yt;
          }),
          (St = function (e, t) {
            var n = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = n;
            }
          }),
          (we = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var a = n[t];
                    if (a !== e && a.form === e.form) {
                      var r = kr(a);
                      if (!r) throw Error(s(90));
                      Q(a), Z(a, r);
                    }
                  }
                }
                break;
              case "textarea":
                se(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ce = uc),
          (_e = dc);
        var tu = {
            usingClientEntryPoint: !1,
            Events: [yr, xr, kr, ze, Ee, uc],
          },
          nu = {
            findFiberByHostInstance: br,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          au = {
            bundleType: nu.bundleType,
            version: nu.version,
            rendererPackageName: nu.rendererPackageName,
            rendererConfig: nu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              (rt = ru.inject(au)), (st = ru);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gc(t)) throw Error(s(200));
            return (function (e, t, n) {
              var a =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: w,
                key: null == a ? null : "" + a,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gc(e)) throw Error(s(299));
            var n = !1,
              a = "",
              r = Yc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (r = t.onRecoverableError)),
              (t = Ac(e, 1, !1, null, 0, n, 0, a, r)),
              (e[pr] = t.current),
              Ba(8 === e.nodeType ? e.parentNode : e),
              new Xc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(s(188));
              throw ((e = Object.keys(e).join(",")), Error(s(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return dc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zc(t)) throw Error(s(200));
            return eu(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gc(e)) throw Error(s(405));
            var a = (null != n && n.hydratedSources) || null,
              r = !1,
              l = "",
              i = Yc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = $c(t, null, e, 1, null != n ? n : null, r, 0, l, i)),
              (e[pr] = t.current),
              Ba(e),
              a)
            )
              for (e = 0; e < a.length; e++)
                (r = (r = (n = a[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, r])
                    : t.mutableSourceEagerHydrationData.push(n, r);
            return new Kc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zc(t)) throw Error(s(200));
            return eu(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zc(e)) throw Error(s(40));
            return (
              !!e._reactRootContainer &&
              (dc(function () {
                eu(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[pr] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, a) {
            if (!Zc(n)) throw Error(s(200));
            if (null == e || void 0 === e._reactInternals) throw Error(s(38));
            return eu(e, t, n, !1, a);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      180: (e, t, n) => {
        var a = n(292);
        (t.createRoot = a.createRoot), (t.hydrateRoot = a.hydrateRoot);
      },
      292: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(144));
      },
      36: (e, t, n) => {
        var a = n(60),
          r = Symbol.for("react.element"),
          s = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i =
            a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          o = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var a,
            s = {},
            c = null,
            u = null;
          for (a in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            l.call(t, a) && !o.hasOwnProperty(a) && (s[a] = t[a]);
          if (e && e.defaultProps)
            for (a in (t = e.defaultProps)) void 0 === s[a] && (s[a] = t[a]);
          return {
            $$typeof: r,
            type: e,
            key: c,
            ref: u,
            props: s,
            _owner: i.current,
          };
        }
        (t.jsx = c), (t.jsxs = c);
      },
      564: (e, t) => {
        var n = Symbol.for("react.element"),
          a = Symbol.for("react.portal"),
          r = Symbol.for("react.fragment"),
          s = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          o = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          m = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        function b() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || p);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = v.prototype);
        var x = (y.prototype = new b());
        (x.constructor = y), h(x, v.prototype), (x.isPureReactComponent = !0);
        var k = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          j = { current: null },
          N = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, a) {
          var r,
            s = {},
            l = null,
            i = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              w.call(t, r) && !N.hasOwnProperty(r) && (s[r] = t[r]);
          var o = arguments.length - 2;
          if (1 === o) s.children = a;
          else if (1 < o) {
            for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
            s.children = c;
          }
          if (e && e.defaultProps)
            for (r in (o = e.defaultProps)) void 0 === s[r] && (s[r] = o[r]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: s,
            _owner: j.current,
          };
        }
        function z(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var E = /\/+/g;
        function C(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function _(e, t, r, s, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var o = !1;
          if (null === e) o = !0;
          else
            switch (i) {
              case "string":
              case "number":
                o = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case a:
                    o = !0;
                }
            }
          if (o)
            return (
              (l = l((o = e))),
              (e = "" === s ? "." + C(o, 0) : s),
              k(l)
                ? ((r = ""),
                  null != e && (r = e.replace(E, "$&/") + "/"),
                  _(l, t, r, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (z(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      r +
                        (!l.key || (o && o.key === l.key)
                          ? ""
                          : ("" + l.key).replace(E, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((o = 0), (s = "" === s ? "." : s + ":"), k(e)))
            for (var c = 0; c < e.length; c++) {
              var u = s + C((i = e[c]), c);
              o += _(i, t, r, u, l);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (m && e[m]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(i = e.next()).done; )
              o += _((i = i.value), t, r, (u = s + C(i, c++)), l);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return o;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var a = [],
            r = 0;
          return (
            _(e, a, "", "", function (e) {
              return t.call(n, e, r++);
            }),
            a
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          M = { transition: null },
          R = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: j,
          };
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!z(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = r),
          (t.Profiler = l),
          (t.PureComponent = y),
          (t.StrictMode = s),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, a) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = h({}, e.props),
              s = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = j.current)),
                void 0 !== t.key && (s = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var o = e.type.defaultProps;
              for (c in t)
                w.call(t, c) &&
                  !N.hasOwnProperty(c) &&
                  (r[c] = void 0 === t[c] && void 0 !== o ? o[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) r.children = a;
            else if (1 < c) {
              o = Array(c);
              for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
              r.children = o;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: s,
              ref: l,
              props: r,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: o,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = z),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return L.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return L.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (t.useState = function (e) {
            return L.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return L.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return L.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      60: (e, t, n) => {
        e.exports = n(564);
      },
      496: (e, t, n) => {
        e.exports = n(36);
      },
      692: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var a = (n - 1) >>> 1,
              r = e[a];
            if (!(0 < s(r, t))) break e;
            (e[a] = t), (e[n] = r), (n = a);
          }
        }
        function a(e) {
          return 0 === e.length ? null : e[0];
        }
        function r(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var a = 0, r = e.length, l = r >>> 1; a < l; ) {
              var i = 2 * (a + 1) - 1,
                o = e[i],
                c = i + 1,
                u = e[c];
              if (0 > s(o, n))
                c < r && 0 > s(u, o)
                  ? ((e[a] = u), (e[c] = n), (a = c))
                  : ((e[a] = o), (e[i] = n), (a = i));
              else {
                if (!(c < r && 0 > s(u, n))) break e;
                (e[a] = u), (e[c] = n), (a = c);
              }
            }
          }
          return t;
        }
        function s(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            o = i.now();
          t.unstable_now = function () {
            return i.now() - o;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          m = 3,
          p = !1,
          h = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          b = "function" === typeof clearTimeout ? clearTimeout : null,
          y = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = a(u); null !== t; ) {
            if (null === t.callback) r(u);
            else {
              if (!(t.startTime <= e)) break;
              r(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = a(u);
          }
        }
        function k(e) {
          if (((g = !1), x(e), !h))
            if (null !== a(c)) (h = !0), M(w);
            else {
              var t = a(u);
              null !== t && R(k, t.startTime - e);
            }
        }
        function w(e, n) {
          (h = !1), g && ((g = !1), b(z), (z = -1)), (p = !0);
          var s = m;
          try {
            for (
              x(n), f = a(c);
              null !== f && (!(f.expirationTime > n) || (e && !_()));

            ) {
              var l = f.callback;
              if ("function" === typeof l) {
                (f.callback = null), (m = f.priorityLevel);
                var i = l(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (f.callback = i)
                    : f === a(c) && r(c),
                  x(n);
              } else r(c);
              f = a(c);
            }
            if (null !== f) var o = !0;
            else {
              var d = a(u);
              null !== d && R(k, d.startTime - n), (o = !1);
            }
            return o;
          } finally {
            (f = null), (m = s), (p = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var j,
          N = !1,
          S = null,
          z = -1,
          E = 5,
          C = -1;
        function _() {
          return !(t.unstable_now() - C < E);
        }
        function P() {
          if (null !== S) {
            var e = t.unstable_now();
            C = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? j() : ((N = !1), (S = null));
            }
          } else N = !1;
        }
        if ("function" === typeof y)
          j = function () {
            y(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var T = new MessageChannel(),
            L = T.port2;
          (T.port1.onmessage = P),
            (j = function () {
              L.postMessage(null);
            });
        } else
          j = function () {
            v(P, 0);
          };
        function M(e) {
          (S = e), N || ((N = !0), j());
        }
        function R(e, n) {
          z = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || p || ((h = !0), M(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return m;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return a(c);
          }),
          (t.unstable_next = function (e) {
            switch (m) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = m;
            }
            var n = m;
            m = t;
            try {
              return e();
            } finally {
              m = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = m;
            m = e;
            try {
              return t();
            } finally {
              m = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, r, s) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof s && null !== s
                ? (s = "number" === typeof (s = s.delay) && 0 < s ? l + s : l)
                : (s = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: r,
                priorityLevel: e,
                startTime: s,
                expirationTime: (i = s + i),
                sortIndex: -1,
              }),
              s > l
                ? ((e.sortIndex = s),
                  n(u, e),
                  null === a(c) &&
                    e === a(u) &&
                    (g ? (b(z), (z = -1)) : (g = !0), R(k, s - l)))
                : ((e.sortIndex = i), n(c, e), h || p || ((h = !0), M(w))),
              e
            );
          }),
          (t.unstable_shouldYield = _),
          (t.unstable_wrapCallback = function (e) {
            var t = m;
            return function () {
              var n = m;
              m = t;
              try {
                return e.apply(this, arguments);
              } finally {
                m = n;
              }
            };
          });
      },
      724: (e, t, n) => {
        e.exports = n(692);
      },
    },
    t = {};
  function n(a) {
    var r = t[a];
    if (void 0 !== r) return r.exports;
    var s = (t[a] = { exports: {} });
    return e[a](s, s.exports, n), s.exports;
  }
  (() => {
    var e = n(60),
      t = n(180),
      a = n(496);
    const r = () =>
        (0, a.jsxs)("div", {
          className: "Home",
          children: [
            "Home",
            (0, a.jsx)("img", {
              className: "home-img-1",
              src: "https://st4.depositphotos.com/13349494/23275/i/450/depositphotos_232755656-stock-photo-grey-shabby-wooden-material-black.jpg",
              alt: "",
            }),
            (0, a.jsx)("div", {
              className: "home-style-txt",
              children: "Meet New",
            }),
            (0, a.jsxs)("div", {
              className: "home-txt-container",
              children: [
                (0, a.jsx)("p", { children: "ANTI \xa0 \xa0" }),
                (0, a.jsx)("p", {
                  className: "h-txt-c-span",
                  children: "AI",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "home-desc-txt",
              children: (0, a.jsx)("p", {
                children:
                  "We're building innovative solutions to protect humanity from threats possessed by AI Systems.",
              }),
            }),
          ],
        }),
      s = () => {
        const [t, n] = e.useState(1);
        return (0, a.jsxs)("div", {
          className: "Prob",
          onMouseEnter: () => {},
          children: [
            (0, a.jsx)("div", {
              className: "prob-heading-txt",
              children: (0, a.jsx)("p", { children: "INNOVATIONS" }),
            }),
            (0, a.jsxs)("div", {
              className: "prob-image-div",
              children: [
                (0, a.jsx)("img", {
                  className: "prob-img-1",
                  style: {
                    transform: 2 === t || 3 === t ? "translateX(-300%)" : "",
                  },
                  src: "https://i.postimg.cc/sDj9p9yK/possessed-photography-YKW0-Jj-P7rl-U-unsplash.png",
                  alt: "",
                }),
                (0, a.jsx)("img", {
                  className: "prob-img-2",
                  style: { opacity: 2 === t && "1" },
                  src: "https://i.ibb.co/NjL94yZ/depositphotos-31159279-stock-photo-young-man-silhouette-telephone.png",
                  alt: "",
                }),
                (0, a.jsx)("img", {
                  className: "prob-img-3",
                  style: { transform: 3 === t && "translateX(-0)" },
                  src: "https://i.postimg.cc/5tf6G1NV/alex-knight-2-EJCSULRw-C8-unsplash.png",
                  alt: "",
                }),
              ],
            }),

            (0, a.jsxs)("div", {
              className: "prob-content-div",
              style: {
                transform:
                  1 === t
                    ? "translateX(0%)scale(1)"
                    : 2 === t
                    ? "translateX(0%)scale(0.5)"
                    : "translateX(100%)scale(0.8)",
                opacity: 2 === t || 3 === t ? "0" : "1",
                transition: 1 === t ? "1s ease-out" : "0",
              },
              children: [
                (0, a.jsx)("p", {
                  className: "prob-con-para-1",
                  children: "ANTI 0",
                }),
                (0, a.jsx)("div", {
                  className: "prob-con-para-2",
                  children: (0, a.jsx)("p", {
                    children:
                      "What's going to protect Humanity when AI becomes a Threat? Noone. Safe AI Does Excatly that with the power and capability this concept model will save humanity from any AI generated threats.",
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "prob-content-div",
              style: {
                transform:
                  2 === t
                    ? "translateX(0%)scale(1)"
                    : 3 === t
                    ? "translateX(0%)scale(0.5)"
                    : "translateX(100%)scale(0.8)",
                opacity: 3 === t ? "0" : "1",
                transition: 2 === t ? "1s ease-out" : "0",
              },
              children: [
                (0, a.jsx)("p", {
                  className: "prob-con-para-1",
                  children: "ANTI.Q",
                }),
                (0, a.jsx)("div", {
                  className: "prob-con-para-2",
                  children: (0, a.jsx)("p", {
                    children:
                      "Our world and choices have been shaped by Artificial Intelligence & Recommendation Algorithms, even our music taste, ANTI Q is the exact product for people who don't like interruptions and have a rich taste of music.",
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "prob-content-div",
              style: {
                transform:
                  3 === t
                    ? "translateX(0%)scale(1)"
                    : 1 === t
                    ? "translateX(100%)scale(0.5)"
                    : "translateX(100%)scale(0.8)",
                opacity: 1 === t ? "0" : "1",
                transition: 2 === t ? "1s ease-out" : "0",
              },
              children: [
                (0, a.jsx)("p", {
                  className: "prob-con-para-1",
                  children: "Safe AI",
                }),
                (0, a.jsx)("div", {
                  className: "prob-con-para-2",
                  children: (0, a.jsx)("p", {
                    children:
                      "The AI Space demands a product that doesn't steals user data, is not always looking for more data points, to extract more from users, to make this demand come true Safe AI fits right into the need of users.",
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "prob-num-div",
              style: { opacity: 1 === t ? "1" : "0" },
              children: "1.",
            }),
            (0, a.jsx)("div", {
              className: "prob-num-div",
              style: { opacity: 2 === t ? "1" : "0" },
              children: "2.",
            }),
            (0, a.jsx)("div", {
              className: "prob-num-div",
              style: { opacity: 3 === t ? "1" : "0" },
              children: "3.",
            }),
            (0, a.jsxs)("div", {
              className: "prob-nav-div",
              children: [
                (0, a.jsx)("img", {
                  className: "prob-arrow-1",
                  src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/prob-arrow-1.png",
                  alt: "",
                  onClick: () => n((e) => (1 === e ? 3 : e - 1)),
                }),
                (0, a.jsx)("div", {
                  className: "prob-nav-dot-1",
                  style: {
                    scale: 2 === t && "1.8",
                    backgroundColor: 2 === t && "#164aa2",
                  },
                }),
                (0, a.jsx)("div", {
                  className: "prob-nav-dot-2",
                  style: {
                    scale: 1 === t && "1.8",
                    backgroundColor: 1 === t && "#164aa2",
                  },
                }),
                (0, a.jsx)("div", {
                  className: "prob-nav-dot-3",
                  style: {
                    scale: 3 === t && "1.8",
                    backgroundColor: 3 === t && "#164aa2",
                  },
                }),
                (0, a.jsx)("img", {
                  className: "prob-arrow-2",
                  src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/prob-arrow-2.png",
                  alt: "",
                  onClick: () => n((e) => (3 === e ? 1 : e + 1)),
                }),
              ],
            }),
          ],
        });
      },
      l = () => {
        const [t, n] = e.useState(1);
        return (0, a.jsxs)("div", {
          className: "Look",
          children: [
            (0, a.jsx)("img", {
              className: "look-main-img",
              src: "https://st4.depositphotos.com/13349494/23275/i/450/depositphotos_232755656-stock-photo-grey-shabby-wooden-material-black.jpg",
              alt: "",
            }),
            (0, a.jsx)("img", {
              className: "look-left-button",
              src: "../images/look-left-bttn.png",
              alt: "",
              onClick: () => {
                n((e) => (1 === e ? 3 : e - 1));
              },
            }),
            (0, a.jsx)("img", {
              className: "look-right-button",
              src: "../images/look-right-bttn.png",
              alt: "",
              onClick: () => {
                n((e) => (3 === e ? 1 : e + 1));
              },
            }),
            (0, a.jsxs)("div", {
              className: "look-caro-div",
              children: [
                (0, a.jsxs)("div", {
                  className: "look-content-div",
                  style: {
                    transform:
                      1 === t
                        ? "translateX(0%) scale(1)"
                        : 2 === t
                        ? "translateX(-80%) scale(0.7)"
                        : "translateX(80%) scale(0.7)",
                    zIndex: 1 === t ? 3 : 1,
                    transition: "1s ease-out",
                  },
                  children: [
                    (0, a.jsx)("img", {
                      className: "look-content-div-img",
                      src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1887&auto=format&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                      alt: "",
                    }),
                    (0, a.jsxs)("div", {
                      className: "look-content-txt-div",
                      children: [
                        (0, a.jsx)("p", {
                          className: "look-content-para-1",
                          children: "Our Mission",
                        }),
                        (0, a.jsx)("p", {
                          className: "look-content-para-2",
                          style: { left: "12%" },
                          children:
                            "Our mission is to protect humanity from AI threats by our one of a kind innovative products.",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "look-content-div",
                  style: {
                    transform:
                      2 === t
                        ? "translateX(0%) scale(1)"
                        : 3 === t
                        ? "translateX(-80%) scale(0.7)"
                        : "translateX(80%) scale(0.7)",
                    zIndex: 2 === t ? 3 : 1,
                    transition: "1s ease-out",
                  },
                  children: [
                    (0, a.jsx)("img", {
                      className: "look-content-div-img",
                      src: "https://wallpaperaccess.com/full/4524259.jpg",
                      alt: "",
                    }),
                    (0, a.jsxs)("div", {
                      className: "look-content-txt-div",
                      children: [
                        (0, a.jsx)("p", {
                          className: "look-content-para-1",
                          children: "Our Motto",
                        }),
                        (0, a.jsx)("p", {
                          className: "look-content-para-2",
                          children: "अन्ते सत्यं विजयते।",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "look-content-div",
                  style: {
                    transform:
                      3 === t
                        ? "translateX(0%) scale(1)"
                        : 1 === t
                        ? "translateX(-80%) scale(0.7)"
                        : "translateX(80%) scale(0.7)",
                    zIndex: 3 === t ? 3 : 1,
                    transition: "1s ease-out",
                  },
                  children: [
                    (0, a.jsx)("img", {
                      className: "look-content-div-img",
                      src: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXBhbnl8ZW58MHx8MHx8fDA%3D",
                      alt: "",
                    }),
                    (0, a.jsxs)("div", {
                      className: "look-content-txt-div",
                      children: [
                        (0, a.jsx)("p", {
                          className: "look-content-para-1",
                          children: "Our Values",
                        }),
                        (0, a.jsx)("p", {
                          className: "look-content-para-2",
                          style: { left: "12%" },
                          children: "Discipline, Innovation & Integrity",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "look-bottom-div",
              style: { opacity: 1 === t ? "1" : "0" },
              children: [
                (0, a.jsx)("p", {
                  className: "look-bottom-p-1",
                  children: "Our Mission",
                }),
                (0, a.jsx)("p", {
                  className: "look-bottom-p-2",
                  children:
                    "We aim to introduce Anti-AI software to the world, ensuring the safety and security of individuals against the potential dangers of AI.",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "look-bottom-div",
              style: { opacity: 2 === t ? "1" : "0" },
              children: [
                (0, a.jsx)("p", {
                  className: "look-bottom-p-1",
                  children: "Our Motto",
                }),
                (0, a.jsx)("p", {
                  className: "look-bottom-p-2",
                  children:
                    "This is well reflected in the company's design policy and decision making. We value our ethics more than immediate results and benifits thus making the world a better place.",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "look-bottom-div",
              style: { opacity: 3 === t ? "1" : "0" },
              children: [
                (0, a.jsx)("p", {
                  className: "look-bottom-p-1",
                  children: "Our Values",
                }),
                (0, a.jsx)("p", {
                  className: "look-bottom-p-2",
                  children:
                    "Pushing the boundaries of innovation in AI Space through our revolutionary products & development.",
                }),
              ],
            }),
          ],
        });
      };
    const i = function () {
      const [t, n] = e.useState(0),
        r = (e) => {
          n(e);
        };
      return (0, a.jsxs)("div", {
        className: "Team",
        children: [
          (0, a.jsxs)("div", {
            className: "team-heading",
            children: [
              (0, a.jsx)("p", {
                className: "team-head-txt-1",
                children: "FOUNDER",
              }),
              (0, a.jsx)("p", {
                className: "team-head-txt-2",
                children: "Building The Future Together.",
              }),
            ],
          }),
          (0, a.jsxs)("div", {
            className: "team-center-div",
            children: [
              (0, a.jsxs)("div", {
                className: "team-c-content-1",
                onClick: () => r(1),
                onMouseLeave: () => r(0),
                children: [
                  (0, a.jsxs)("div", {
                    className: "team-c-person-img-container",
                    style: {
                      height: 1 === t ? "60%" : "",
                      transition: 1 === t && "height 1.5s ease-out",
                    },
                    children: [
                      (0, a.jsx)("img", {
                        className: "team-c-person-img",
                        src: "https://media.licdn.com/dms/image/D5635AQFQUFICZ63Ygg/profile-framedphoto-shrink_800_800/0/1719436905851?e=1723276800&v=beta&t=rBr2GYHaJb_vk3jGosvnML3WnQqkm_xmbobKXBEqur0",
                        alt: "",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "team-c-person-name",
                    style: {
                      transform: 1 === t && "translateY(-650%)",
                      transition: 1 === t && "transform 1.5s ease-out",
                    },
                    children: (0, a.jsx)("p", {
                      children: "Tanishq Sharma",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "team-c-person-profile-0",
                    style: { transition: 1 === t && "transform 0s ease-out" },
                    children: (0, a.jsx)("p", { children: "CEO" }),
                  }),
                  (0, a.jsx)("div", {
                    className: "team-c-person-profile-1",
                    style: {
                      transition: 1 === t && " 0.2s ease-out ",
                      opacity: 1 === t ? 0 : "",
                    },
                    children: (0, a.jsx)("p", { children: "CEO" }),
                  }),
                  (0, a.jsx)("div", {
                    className: "team-c-person-details",
                    style: { opacity: 1 === t ? 0.5 : 0 },
                    children: (0, a.jsxs)("ul", {
                      children: [
                        (0, a.jsx)("li", {
                          children: "Business Head",
                        }),
                        (0, a.jsx)("li", {
                          children:
                            "Experience in Managing Multiple Businesses",
                        }),
                        (0, a.jsx)("li", {
                          children: "Visionary CEO",
                        }),
                        (0, a.jsx)("li", {
                          children: "AI Researcher",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
    const o = function () {};
    var c = Object.defineProperty,
      u = Object.defineProperties,
      d = Object.getOwnPropertyDescriptors,
      f = Object.getOwnPropertySymbols,
      m = Object.prototype.hasOwnProperty,
      p = Object.prototype.propertyIsEnumerable,
      h = (e, t, n) =>
        t in e
          ? c(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n),
      g = (e, t) => {
        for (var n in t || (t = {})) m.call(t, n) && h(e, n, t[n]);
        if (f) for (var n of f(t)) p.call(t, n) && h(e, n, t[n]);
        return e;
      },
      v = (e, t) => u(e, d(t)),
      b = class extends e.Component {
        constructor(t) {
          super(t), (this.ref = e.createRef()), (this.state = { style: {} });
          (this.width = null),
            (this.height = null),
            (this.left = null),
            (this.top = null),
            (this.transitionTimeout = null),
            (this.updateCall = null),
            (this.element = null),
            (this.settings = Object.assign(
              {},
              {
                reverse: !1,
                max: 35,
                perspective: 1e3,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                scale: "1.1",
                speed: "1000",
                transition: !0,
                axis: null,
                reset: !0,
              },
              this.props.options
            )),
            (this.reverse = this.settings.reverse ? -1 : 1),
            (this.onMouseEnter = this.onMouseEnter.bind(
              this,
              this.props.onMouseEnter
            )),
            (this.onMouseMove = this.onMouseMove.bind(
              this,
              this.props.onMouseMove
            )),
            (this.onMouseLeave = this.onMouseLeave.bind(
              this,
              this.props.onMouseLeave
            ));
        }
        componentDidMount() {
          (this.element = this.ref.current),
            setTimeout(() => {
              this.element.parentElement.querySelector(":hover") ===
                this.element && this.onMouseEnter();
            }, 0);
        }
        componentWillUnmount() {
          clearTimeout(this.transitionTimeout),
            cancelAnimationFrame(this.updateCall);
        }
        onMouseEnter() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : () => {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return (
            this.updateElementPosition(),
            this.setState(
              Object.assign({}, this.state, {
                style: v(g({}, this.state.style), { willChange: "transform" }),
              })
            ),
            this.setTransition(),
            e(t)
          );
        }
        reset() {
          window.requestAnimationFrame(() => {
            this.setState(
              Object.assign({}, this.state, {
                style: v(g({}, this.state.style), {
                  transform: "perspective(".concat(
                    this.settings.perspective,
                    "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
                  ),
                }),
              })
            );
          });
        }
        onMouseMove() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : () => {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return (
            t.persist(),
            null !== this.updateCall &&
              window.cancelAnimationFrame(this.updateCall),
            (this.event = t),
            (this.updateCall = requestAnimationFrame(
              this.update.bind(this, t)
            )),
            e(t)
          );
        }
        setTransition() {
          clearTimeout(this.transitionTimeout),
            this.setState(
              Object.assign({}, this.state, {
                style: v(g({}, this.state.style), {
                  transition: ""
                    .concat(this.settings.speed, "ms ")
                    .concat(this.settings.easing),
                }),
              })
            ),
            (this.transitionTimeout = setTimeout(() => {
              this.setState(
                Object.assign({}, this.state, {
                  style: v(g({}, this.state.style), { transition: "" }),
                })
              );
            }, this.settings.speed));
        }
        onMouseLeave() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : () => {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          return (
            this.setTransition(), this.settings.reset && this.reset(), e(t)
          );
        }
        getValues(e) {
          const t = (e.nativeEvent.clientX - this.left) / this.width,
            n = (e.nativeEvent.clientY - this.top) / this.height,
            a = Math.min(Math.max(t, 0), 1),
            r = Math.min(Math.max(n, 0), 1);
          return {
            tiltX: (
              this.reverse *
              (this.settings.max / 2 - a * this.settings.max)
            ).toFixed(2),
            tiltY: (
              this.reverse *
              (r * this.settings.max - this.settings.max / 2)
            ).toFixed(2),
            percentageX: 100 * a,
            percentageY: 100 * r,
          };
        }
        updateElementPosition() {
          const e = this.element.getBoundingClientRect();
          (this.width = this.element.offsetWidth),
            (this.height = this.element.offsetHeight),
            (this.left = e.left),
            (this.top = e.top);
        }
        update(e) {
          const t = this.getValues(e);
          this.setState(
            Object.assign({}, this.state, {
              style: v(g({}, this.state.style), {
                transform: "perspective("
                  .concat(this.settings.perspective, "px) rotateX(")
                  .concat(
                    "x" === this.settings.axis ? 0 : t.tiltY,
                    "deg) rotateY("
                  )
                  .concat(
                    "y" === this.settings.axis ? 0 : t.tiltX,
                    "deg) scale3d("
                  )
                  .concat(this.settings.scale, ", ")
                  .concat(this.settings.scale, ", ")
                  .concat(this.settings.scale, ")"),
              }),
            })
          ),
            (this.updateCall = null);
        }
        render() {
          const e = Object.assign({}, this.props.style, this.state.style);
          return (0, a.jsx)("div", {
            style: e,
            ref: this.ref,
            className: this.props.className,
            onMouseEnter: this.onMouseEnter,
            onMouseMove: this.onMouseMove,
            onMouseLeave: this.onMouseLeave,
            children: this.props.children,
          });
        }
      };
    const y = (t) => {
        let { clickState: n } = t;
        const [r, s] = (0, e.useState)(!1);
        return (0, a.jsxs)("div", {
          className: "Usp",
          onMouseEnter: () => {
            s(!0);
          },
          children: [
            (0, a.jsx)("img", {
              className: "usp-main-img",
              src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/usp-main-img.png",
              alt: "",
            }),
            (0, a.jsxs)("div", {
              className: "usp-heading",
              children: [
                "Our ",
                (0, a.jsx)("span", {
                  style: { color: "#BD1643" },
                  children: "\xa0USP",
                }),
              ],
            }),
            (0, a.jsx)(b, {
              className: "Tilt1",
              options: {
                max: 25,
                scale: 1.1,
                speed: 300,
                glare: !0,
                "max-glare": 0.5,
              },
              children: (0, a.jsx)("img", {
                className: "usp-main-img-1",
                src: "./today.png",
                alt: "",
              }),
            }),
            (0, a.jsx)(b, {
              className: "Tilt2",
              options: {
                max: 25,
                scale: 1.1,
                speed: 300,
                glare: !0,
                "max-glare": 0.5,
              },
              children: (0, a.jsx)("img", {
                className: "usp-main-img-2",
                src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/usp-main-img-2.png",
                alt: "",
              }),
            }),
            (0, a.jsx)(b, {
              className: "Tilt3",
              options: {
                max: 25,
                scale: 1.1,
                speed: 300,
                glare: !0,
                "max-glare": 0.5,
              },
              children: (0, a.jsx)("img", {
                className: "usp-main-img-3",
                src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/usp-main-img-3.png",
                alt: "",
              }),
            }),
          ],
        });
      },
      x = () => {
        const [t, n] = e.useState(1),
          [r, s] = e.useState(!1);
        return (
          (0, e.useEffect)(() => {
            setTimeout(() => {
              r && n(t + 1);
            }, 800),
              clearTimeout();
          }),
          (0, a.jsxs)("div", {
            className: "GTM",
            onMouseEnter: () => {
              s(!0);
            },
            children: [
              (0, a.jsxs)("div", {
                className: "gtm-heading-div",
                children: [
                  (0, a.jsx)("p", {
                    className: "gtm-heading",
                    children: "Traction & Validation",
                  }),
                  (0, a.jsx)("p", {
                    className: "gtm-heading-txt",
                    children: "",
                  }),
                ],
              }),
              (0, a.jsx)("img", {
                className: "gtm-image-1",
                src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/gtm-image-1.png",
                alt: "",
                style: { opacity: t >= 1 ? 1 : 0 },
              }),
              (0, a.jsx)("img", {
                className: "gtm-image-2",
                src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/gtm-image-2.png",
                alt: "",
                style: { opacity: t >= 2 ? 1 : 0 },
              }),
              (0, a.jsx)("img", {
                className: "gtm-image-3",
                src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/gtm-image-3.png",
                alt: "",
                style: { opacity: t >= 3 ? 1 : 0 },
              }),

              (0, a.jsx)("div", {
                className: "gtm-image-txt-div",
                style: { top: "23.5%", opacity: t >= 1 ? 1 : 0 },
                children: (0, a.jsxs)("div", {
                  className: "gtm-box-div",
                  children: [
                    (0, a.jsx)("p", {
                      className: "gtm-box-text",
                      children: "New Entrant to market",
                    }),
                    (0, a.jsxs)("ul", {
                      className: "gtm-box-list",
                      children: [
                        (0, a.jsx)("li", {
                          children:
                            "Anti.AI Is bringing new innovative solutions to threats possesed by AI.",
                        }),
                        (0, a.jsx)("li", {
                          children:
                            "We are providing nostalgic entertainment solutions to these problems.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, a.jsx)("div", {
                className: "gtm-image-txt-div",
                style: { top: "41.5%", left: "21%", opacity: t >= 2 ? 1 : 0 },
                children: (0, a.jsx)("div", {
                  children: (0, a.jsxs)("div", {
                    className: "gtm-box-div",
                    children: [
                      (0, a.jsx)("p", {
                        className: "gtm-box-text",
                        children: "Unique Value Proposition",
                      }),
                      (0, a.jsxs)("ul", {
                        className: "gtm-box-list",
                        children: [
                          (0, a.jsx)("li", {
                            children:
                              "We have significant interest & validation from industry experts, constantly improving our R&D",
                          }),
                          (0, a.jsx)("li", {
                            children: "Our compnay's unique value propostion.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "gtm-image-txt-div",
                style: { top: "59.5%", opacity: t >= 3 ? 1 : 0 },
                children: (0, a.jsx)("div", {
                  children: (0, a.jsxs)("div", {
                    className: "gtm-box-div",
                    children: [
                      (0, a.jsx)("p", {
                        className: "gtm-box-text",
                        children: "Extensive Market Research",
                      }),
                      (0, a.jsxs)("ul", {
                        className: "gtm-box-list",
                        children: [
                          (0, a.jsx)("li", {
                            children:
                              "We have conducted extensive market research for our target audience.",
                          }),
                          (0, a.jsx)("li", {
                            children:
                              "Our products are at the intersection of value and demand.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      },
      k = (t) => {
        let { clickState: n } = t;
        const [r, s] = (0, e.useState)(!1);
        return (0, a.jsxs)("div", {
          className: "Score",
          onMouseEnter: () => {
            return 1 === (e = 1) && s(!0), void (0 === e && s(!1));
            var e;
          },
          children: [
            (0, a.jsx)("div", {
              className: "score-heading",
              children: (0, a.jsx)("p", {
                style: { fontSize: "3vw" },
                children: (0, a.jsx)("span", {
                  style: { color: "white" },
                  children: "Foriegn Monopoly in Generative AI Market",
                }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: "score-detail-box",
              children: [
                (0, a.jsxs)("div", {
                  className: "score-detail-div-1",
                  children: [
                    (0, a.jsx)("p", {
                      className: "score-detail-txt-1",
                      children: "OpenAI",
                    }),
                    (0, a.jsx)("p", {
                      className: "score-small-txt-1",
                      children: "39%",
                    }),
                    (0, a.jsx)("div", {
                      className: "score-prog-child-1",
                      style: { width: r ? "39%" : "" },
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "score-detail-div-2",
                  children: [
                    (0, a.jsx)("p", {
                      className: "score-detail-txt-2",
                      children: "Microsoft",
                    }),
                    (0, a.jsx)("p", {
                      className: "score-small-txt-2",
                      children: "30 %",
                    }),
                    (0, a.jsx)("div", {
                      className: "score-prog-child-2",
                      style: { width: r && "30%" },
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "score-detail-div-3",
                  children: [
                    (0, a.jsx)("p", {
                      className: "score-detail-txt-3",
                      children: "AWS",
                    }),
                    (0, a.jsx)("p", {
                      className: "score-small-txt-3",
                      children: "8%",
                    }),
                    (0, a.jsx)("div", {
                      className: "score-prog-child-3",
                      style: { width: r && "8%" },
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "score-detail-div-4",
                  children: [
                    (0, a.jsx)("p", {
                      className: "score-detail-txt-4",
                      children: "Google ",
                    }),
                    (0, a.jsx)("p", {
                      className: "score-small-txt-4",
                      children: "7 %",
                    }),
                    (0, a.jsx)("div", {
                      className: "score-prog-child-4",
                      style: { width: r && "7%" },
                    }),
                  ],
                }),
                (0, a.jsx)("img", {
                  className: "s-circle-1",
                  src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-1.png",
                  alt: "",
                }),
                (0, a.jsx)("img", {
                  className: "s-circle-2",
                  src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-2.png",
                  alt: "",
                  style: { transform: r ? "scale(1)" : "scale(0.8)" },
                }),
                (0, a.jsx)("img", {
                  className: "s-circle-3",
                  src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-3.png",
                  alt: "",
                  style: {
                    transform: r ? "scale(1)" : "translate(20%,20%)scale(0.6)",
                  },
                }),
                (0, a.jsx)("img", {
                  className: "s-circle-3",
                  src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-3.png",
                  alt: "",
                  style: {
                    transform: r ? "scale(1)" : "translate(20%,20%)scale(0.6)",
                  },
                }),
                (0, a.jsx)("img", {
                  className: "s-circle-4",
                  src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-4.png",
                  alt: "",
                  style: {
                    transform: r ? "scale(1)" : "translate(20%,30%)scale(0.6)",
                  },
                }),
                (0, a.jsx)("img", {
                  className: "s-circle-5",
                  src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-5.png",
                  alt: "",
                  style: {
                    transform: r ? "scale(1)" : "translate(20%,35%)scale(0.6)",
                  },
                }),
                (0, a.jsx)("img", {
                  className: "s-circle-6",
                  src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/s-circle-6.png",
                  alt: "",
                  style: {
                    transform: r ? "scale(1)" : "translate(20%,35%)scale(0.6)",
                  },
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "score-line-detail-box-tam",
              style: { opacity: r && "1" },
              children: [
                (0, a.jsx)("p", {
                  style: {
                    position: "absolute",
                    fontSize: "2.2vw",
                    top: "-62%",
                    right: "17%",
                    fontWeight: "1000",
                  },
                  children: "AI Market",
                }),
                (0, a.jsxs)("p", {
                  style: { position: "absolute", left: "6.5%", top: "10%" },
                  children: [
                    "",
                    (0, a.jsx)("span", {
                      style: { color: "white" },
                      children: " ",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "scroll-tam-money",
                  style: {
                    position: "absolute",
                    height: "50%",
                    width: "35%",
                    left: "36%",
                    top: "43%",
                    overflow: "hidden",
                  },
                  children: (0, a.jsxs)("div", {
                    style: {
                      position: "absolute",
                      fontSize: "1.5vw",
                      right: "3%",
                      bottom: "10%",
                      transition: "3s ease-out 1s",
                      transform: r ? "translateY(0%)" : "translateY(79%)",
                    },
                    children: [
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "$621.19" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "$196.6" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "$196.6" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "$196.6" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "$196.6" }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("p", {
                  style: {
                    color: "white",
                    right: "16%",
                    position: "absolute",
                    fontSize: "1.7vw",
                    fontWeight: "100",
                    top: "44%",
                  },
                  children: "Bn",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "score-line-detail-box-sam",
              style: { opacity: r && "1" },
              children: [
                (0, a.jsx)("p", {
                  style: {
                    position: "absolute",
                    fontSize: "2.2vw",
                    top: "-70%",
                    right: "17%",
                    fontWeight: "1000",
                  },
                  children: "NLP Market",
                }),
                (0, a.jsxs)("p", {
                  style: {
                    position: "absolute",
                    left: "2.5%",
                    top: "3%",
                    textAlign: "right",
                    width: "80%",
                  },
                  children: ["AI", (0, a.jsx)("span", { children: "MARKET" })],
                }),
                (0, a.jsx)("div", {
                  className: "scroll-tam-money",
                  style: {
                    position: "absolute",
                    height: "50%",
                    width: "35%",
                    left: "36%",
                    top: "54%",
                    overflow: "hidden",
                  },
                  children: (0, a.jsxs)("div", {
                    style: {
                      position: "absolute",
                      fontSize: "1.5vw",
                      right: "3%",
                      bottom: "10%",
                      transition: "3s ease-out 1s",
                      transform: r ? "translateY(0%)" : "translateY(79%)",
                    },
                    children: [
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "$27" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "$27" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "$27" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "$27" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "$27" }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("p", {
                  style: {
                    right: "18%",
                    position: "absolute",
                    fontSize: "1.7vw",
                    fontWeight: "100",
                    top: "51%",
                  },
                  children: "Bn",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "score-line-detail-box-som",
              style: { opacity: r && "1" },
              children: [
                (0, a.jsx)("p", {
                  style: {
                    position: "absolute",
                    fontSize: "2.2vw",
                    top: "-68%",
                    right: "17%",
                    fontWeight: "1000",
                  },
                  children: "CAGR",
                }),
                (0, a.jsxs)("p", {
                  style: {
                    position: "absolute",
                    left: "3.5%",
                    top: "3%",
                    textAlign: "right",
                    width: "80%",
                  },
                  children: [
                    "",
                    (0, a.jsx)("span", {
                      style: { color: "white" },
                      children: "",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "scroll-tam-money",
                  style: {
                    position: "absolute",
                    height: "50%",
                    width: "35%",
                    left: "36%",
                    top: "56%",
                    overflow: "hidden",
                  },
                  children: (0, a.jsxs)("div", {
                    style: {
                      position: "absolute",
                      fontSize: "1.5vw",
                      right: "3%",
                      bottom: "10%",
                      transition: "3s ease-out 1s",
                      transform: r ? "translateY(0%)" : "translateY(79%)",
                    },
                    children: [
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "34.6" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "34.6" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "34.6" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "34.6" }),
                      }),
                      (0, a.jsx)("div", {
                        className: "bm-m-s-money",
                        children: (0, a.jsx)("p", { children: "34.6" }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)("p", {
                  style: {
                    color: "white",
                    right: "18%",
                    position: "absolute",
                    fontSize: "1.7vw",
                    fontWeight: "100",
                    top: "55%",
                  },
                  children: "%",
                }),
              ],
            }),
          ],
        });
      },
      w = () => {
        const [t, n] = (0, e.useState)(0),
          r = [
            {
              id: 1,
              name: "Billboard Marketing",
              vid: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/videos/marketing-vid-1.mp4",
              img1: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-1.png",
              img2: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-2.png",
              img3: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-3.png",
            },
            {
              id: 2,
              name: "Digital Marketing",
              vid: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/videos/marketing-vid-2.mp4",
              img1: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-1.png",
              img2: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-2.png",
              img3: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-2.png",
            },
            {
              id: 3,
              name: "Video Marketing",
              vid: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/videos/marketing-vid-1.mp4",
              img1: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-1.png",
              img2: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-2.png",
              img3: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-1-img-3.png",
            },
            {
              id: 4,
              name: "NewsPaper Marketing",
              vid: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/videos/marketing-vid-2.mp4",
              img1: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-1.png",
              img2: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-2.png",
              img3: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/mar-screen-2-img-2.png",
            },
          ],
          s = (e) => {
            n(e);
          };
        return (0, a.jsxs)("div", {
          className: "Market",
          children: [
            (0, a.jsx)("div", {
              className: "mar-heading",
              children: (0, a.jsx)("p", { children: "Marketing" }),
            }),
            (0, a.jsx)("div", {
              className: "mar-video-div",
              children: (0, a.jsx)(
                "video",
                {
                  className: 1 === t || 3 === t ? "mar-video-2" : "mar-video-1",
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  children: (0, a.jsx)("source", {
                    src: r[t].vid,
                    type: "video/mp4",
                  }),
                },
                r[t].id
              ),
            }),
            (0, a.jsx)("div", {
              className: "mar-image-1-div",
              children: (0, a.jsx)(
                "img",
                { className: "mar-img-1", src: r[t].img1, alt: "img1" },
                r[t].id
              ),
            }),
            (0, a.jsx)("div", {
              className: "mar-image-2-div",
              children: (0, a.jsx)(
                "img",
                { className: "mar-img-2", src: r[t].img2, alt: "img2" },
                r[t].id
              ),
            }),
            (0, a.jsx)("div", {
              className: "mar-image-3-div",
              children: (0, a.jsx)(
                "img",
                { className: "mar-img-3", src: r[t].img3, alt: "img3" },
                r[t].id
              ),
            }),
            (0, a.jsx)("div", { className: "mar-vertical-div" }),
            (0, a.jsx)("div", {
              className: "mar-circular-dot",
              style: { backgroundColor: 0 === t && "#BD1643" },
            }),
            (0, a.jsx)("div", {
              className: "mar-circular-dot",
              style: { top: "50%", backgroundColor: 1 === t && "#BD1643" },
            }),
            (0, a.jsx)("div", {
              className: "mar-circular-dot",
              style: { top: "70%", backgroundColor: 2 === t && "#BD1643" },
            }),
            (0, a.jsx)("div", {
              className: "mar-circular-dot",
              style: { top: "90%", backgroundColor: 3 === t && "#BD1643" },
            }),
            (0, a.jsxs)("div", {
              className: "mar-menu-flow",
              children: [
                (0, a.jsx)("div", {
                  className: "mar-menu-1",
                  onClick: () => s(0),
                  style: { backgroundColor: 0 === t ? "#BD1643" : "" },
                  children: "Billboard Marketing",
                }),
                (0, a.jsx)("div", {
                  className: "mar-menu-1",
                  onClick: () => s(1),
                  style: { backgroundColor: 1 === t ? "#BD1643" : "" },
                  children: "Digital Marketing",
                }),
                (0, a.jsx)("div", {
                  className: "mar-menu-1",
                  onClick: () => s(2),
                  style: { backgroundColor: 2 === t ? "#BD1643" : "" },
                  children: "Video Marketing",
                }),
                (0, a.jsx)("div", {
                  className: "mar-menu-1",
                  onClick: () => s(3),
                  style: { backgroundColor: 3 === t ? "#BD1643" : "" },
                  children: "NewsPaper Marketing",
                }),
              ],
            }),
            (0, a.jsx)("img", {
              className: "mar-cursor",
              src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png",
              alt: "",
              style: { opacity: 1 === t || 2 === t || 3 === t ? "0" : "" },
            }),
            (0, a.jsx)("img", {
              className: "mar-cursor",
              src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png",
              alt: "",
              style: {
                top: "70%",
                opacity: 1 === t || 2 === t || 3 === t ? "0" : "",
              },
            }),
            (0, a.jsx)("img", {
              className: "mar-cursor",
              src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/cursor-icon.png",
              alt: "",
              style: {
                top: "90%",
                opacity: 1 === t || 2 === t || 3 === t ? "0" : "",
              },
            }),
          ],
        });
      },
      j = () => {
        const [t, n] = e.useState(!1);
        return (0, a.jsxs)("div", {
          className: "Ask",
          onMouseEnter: () => {
            n(!0);
          },
          children: [
            (0, a.jsx)("div", {
              className: "ask-main-heading",
              children: (0, a.jsx)("p", { children: "Our Ask" }),
            }),
            (0, a.jsxs)("div", {
              className: "ask-left-div",
              children: [
                (0, a.jsx)("p", {
                  className: "ask-left-div-txt-1",
                  children: "funding request",
                }),
                (0, a.jsxs)("p", {
                  className: "ask-left-div-txt-2",
                  children: [
                    "Seeking Fund: ",
                    (0, a.jsx)("span", {
                      style: { fontSize: "2.7vw", fontWeight: "700" },
                      children: "$3M",
                    }),
                  ],
                }),
                (0, a.jsx)("p", {
                  className: "ask-left-div-txt-3",
                  children: "",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "ask-right-div",
              children: [
                (0, a.jsx)("img", {
                  className: "ask-right-img-1",
                  src: "https://i.ibb.co/hCYh2WK/Untitled-design-2.png",
                  alt: "",
                  style: {
                    transform: t ? "translate(0)" : "translate(0%,-158%)",
                  },
                }),
                // (0, a.jsx)("img", {
                //   className: "ask-right-img-2",
                //   src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-right-img-2.png",
                //   alt: "",
                //   style: {
                //     transform: t ? "translate(0)" : "translate(60%,180%)",
                //   },
                // }),
                // (0, a.jsx)("img", {
                //   className: "ask-right-img-3",
                //   src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-right-img-3.png",
                //   alt: "",
                //   style: {
                //     transform: t ? "translate(0)" : "translate(-60%,225%)",
                //   },
                // }),
                // (0, a.jsx)("img", {
                //   className: "ask-right-center-img",
                //   src: "",
                //   alt: "",
                //   style: { opacity: t ? "1" : "0" },
                // }),
                // (0, a.jsx)("img", {
                //   className: "ask-right-img-mask",
                //   src: "",
                //   alt: "",
                // }),
                // (0, a.jsx)("p", {
                //   className: "ask-mask-txt",
                //   children: "USE OF FUNDS",
                // }),
                (0, a.jsxs)("div", {
                  className: "ask-vector-tags",
                  style: { opacity: t ? "1" : "0" },
                  // children: [
                  //   (0, a.jsx)("p", {
                  //     style: { position: "absolute", top: "11vw" },
                  //     children: "Salary",
                  //   }),
                  //   (0, a.jsx)("p", {
                  //     style: {
                  //       position: "absolute",
                  //       top: "32.5vw",
                  //       left: "22%",
                  //     },
                  //     children: "Miscellanious",
                  //   }),
                  //   (0, a.jsx)("p", {
                  //     style: {
                  //       position: "absolute",
                  //       top: "30vw",
                  //       left: "37vw",
                  //     },
                  //     children: "Office Rent",
                  //   }),
                  // ],
                }),
              ],
            }),
            // (0, a.jsx)("img", {
            //   className: "ask-vector-1",
            //   src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-vector-1.png",
            //   alt: "",
            //   style: { opacity: t ? "1" : "0" },
            // }),
            // (0, a.jsx)("img", {
            //   className: "ask-vector-2",
            //   src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-vector-2.png",
            //   alt: "",
            //   style: { opacity: t ? "1" : "0" },
            // }),
            // (0, a.jsx)("img", {
            //   className: "ask-vector-3",
            //   src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ask-vector-3.png",
            //   alt: "",
            //   style: { opacity: t ? "1" : "0" },
            // }),
          ],
        });
      };
    const N = function () {
      return (0, a.jsxs)("div", {
        className: "Compete",
        onMouseEnter: () => {
          const e = setTimeout(() => {
            n(!0);
          }, 2e3);
          return () => clearTimeout(e);
        },
      });
    };
    const S = function () {
        const e = [
          {
            id: 1,
            img: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/fe-img-1.png",
          },
          {
            id: 2,
            img: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/fe-img-2.png",
          },
          {
            id: 3,
            img: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/fe-img-3.png",
          },
          {
            id: 4,
            img: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/fe-img-4.png",
          },
        ];
        return (0, a.jsxs)("div", {
          className: "FE",
          children: [
            (0, a.jsxs)("div", {
              className: "fe-top-div",
              children: [
                (0, a.jsx)("p", {
                  className: "fe-top-left-txt-1",
                  children: "entertainment",
                }),
                (0, a.jsx)("p", {
                  className: "fe-top-left-txt-2",
                  children: "presents",
                }),
                (0, a.jsx)("p", {
                  className: "fe-top-right-txt-1",
                  children: "saturday",
                }),
                (0, a.jsx)("p", {
                  className: "fe-top-right-txt-2",
                  children: "23/04",
                }),
              ],
            }),
            // (0, a.jsxs)("div", {
            //   className: "fe-center-div-main",
            //   children: [
            //     (0, a.jsx)("div", {
            //       className: "fe-center-div",
            //       children: e.map((e) =>
            //         (0, a.jsx)(
            //           "div",
            //           {
            //             className: "img-slider",
            //             children: (0, a.jsx)(b, {
            //               className: "Tilt1",
            //               options: {
            //                 max: 25,
            //                 scale: 1.01,
            //                 speed: 300,
            //                 glare: !0,
            //                 "max-glare": 0.5,
            //               },
            //               children: (0, a.jsx)("img", { src: e.img, alt: "" }),
            //             }),
            //           },
            //           e.id
            //         )
            //       ),
            //     }),
            //     (0, a.jsx)("div", {
            //       className: "fe-center-div",
            //       children: e.map((e) =>
            //         (0, a.jsx)(
            //           "div",
            //           {
            //             className: "img-slider",
            //             children: (0, a.jsx)(b, {
            //               className: "Tilt1",
            //               options: {
            //                 max: 25,
            //                 scale: 1.01,
            //                 speed: 300,
            //                 glare: !0,
            //                 "max-glare": 0.5,
            //                 transition: "0.5s ease-out",
            //               },
            //               children: (0, a.jsx)("img", { src: e.img, alt: "" }),
            //             }),
            //           },
            //           e.id
            //         )
            //       ),
            //     }),
            //   ],
            // }),
            (0, a.jsxs)("div", {
              className: "fe-bottom-div",
              children: [
                (0, a.jsx)("p", {
                  className: "fe-bottom-txt-0",
                  children: "fashion",
                }),
                (0, a.jsx)("p", {
                  className: "fe-bottom-txt-1",
                  children: "event",
                }),
                (0, a.jsx)("p", {
                  className: "fe-bottom-txt-2",
                  children: "at central park",
                }),
                (0, a.jsx)("div", {
                  className: "fe-bottom-txt-3",
                  children:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                }),
              ],
            }),
          ],
        });
      },
      z = (t) => {
        let { setDataToParent: n, clickState: r } = t;
        const s = (e) => {
            n(e);
          },
          [l, i] = (0, e.useState)(!1);
        return (0, a.jsxs)("div", {
          className: "navbar",
          onMouseEnter: () => {
            i(!0);
          },
          onMouseLeave: () => {
            i(!1);
          },
          style: {
            transform: l ? "translateY(0%)" : "translateY(100%)",
            transition: !l && "1s ease-out 1s",
          },
          children: [
            (0, a.jsxs)("div", {
              className: "nav-top-bar",
              children: [
                (0, a.jsx)("div", { className: "nav-top-bar-line1" }),
                (0, a.jsx)("p", { children: "Swipe up" }),
                (0, a.jsx)("div", { className: "nav-top-bar-line2" }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "nav-button-parent",
              onClick: () => {
                0 === 0 && i(!l);
              },
              style: { transform: "" },
              children: [
                (0, a.jsxs)("div", {
                  className: "navButton",
                  style: {
                    borderRadius: 1 === r ? "24px" : "",
                    width: 1 === r ? "180%" : "",
                    padding: 1 === r ? "2px 24px" : "",
                  },
                  onClick: () => {
                    s(1);
                  },
                  children: [
                    (0, a.jsx)("img", {
                      className: "nav-logo",
                      src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/home-logo-1.png",
                      alt: "",
                    }),
                    1 === r
                      ? (0, a.jsx)("h2", { children: "\xa0HOME\xa0 " })
                      : (0, a.jsx)("p", {}),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "navButton",
                  style: {
                    borderRadius: 2 === r ? "24px" : "",
                    width: 2 === r ? "180%" : "",
                    padding: 2 === r ? "2px 24px" : "",
                  },
                  onClick: () => {
                    s(2);
                  },
                  children: [
                    2 === r
                      ? (0, a.jsx)("h2", { children: "Prob" })
                      : (0, a.jsx)("p", {}),
                    (0, a.jsx)("img", {
                      className: "nav-logo",
                      src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/prob-logo.png",
                      alt: "",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "navButton",
                  style: {
                    borderRadius: 3 === r ? "24px" : "",
                    width: 3 === r ? "180%" : "",
                    padding: 3 === r ? "2px 24px" : "",
                  },
                  onClick: () => {
                    s(3);
                  },
                  children: [
                    3 === r
                      ? (0, a.jsx)("h2", { children: "\xa0LOOK\xa0 " })
                      : (0, a.jsx)("p", {}),
                    (0, a.jsx)("img", {
                      className: "nav-logo",
                      src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/sol-logo.png",
                      alt: "",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "navButton",
                  style: {
                    borderRadius: 4 === r ? "24px" : "",
                    width: 4 === r ? "180%" : "",
                    padding: 4 === r ? "2px 24px" : "",
                  },
                  onClick: () => {
                    s(4);
                  },
                  children: [
                    (0, a.jsx)("img", {
                      className: "nav-logo",
                      src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/team-logo.png",
                      alt: "",
                    }),
                    4 === r
                      ? (0, a.jsx)("h2", { children: "\xa0TEAM\xa0 " })
                      : (0, a.jsx)("p", {}),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "navButton",
                  style: {
                    borderRadius: 6 === r ? "24px" : "",
                    width: 6 === r ? "180%" : "",
                    padding: 6 === r ? "2px 24px" : "",
                  },
                  onClick: () => {
                    s(6);
                  },
                  children: [
                    (0, a.jsx)("img", {
                      className: "nav-logo",
                      src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/market-logo.png",
                      alt: "",
                    }),
                    6 === r
                      ? (0, a.jsx)("h2", { children: "\xa0SCORE\xa0 " })
                      : (0, a.jsx)("p", {}),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "navButton",
                  style: {
                    borderRadius: 7 === r ? "24px" : "",
                    width: 7 === r ? "180%" : "",
                    padding: 7 === r ? "2px 24px" : "",
                  },
                  onClick: () => {
                    s(7);
                  },
                  children: [
                    (0, a.jsx)("img", {
                      className: "nav-logo",
                      src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/marketing-logo.png",
                      alt: "",
                    }),
                    7 === r
                      ? (0, a.jsx)("h2", { children: "\xa0ASK\xa0 " })
                      : (0, a.jsx)("p", {}),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "navButton",
                  style: {
                    borderRadius: 10 === r ? "24px" : "",
                    width: 10 === r ? "180%" : "",
                    padding: 10 === r ? "2px 24px" : "",
                  },
                  onClick: () => {
                    s(10);
                  },
                  children: [
                    (0, a.jsx)("img", {
                      className: "nav-logo",
                      src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/gtm-logo.png",
                      alt: "",
                    }),
                    10 === r
                      ? (0, a.jsx)("h2", { children: "\xa0GTM\xa0 " })
                      : (0, a.jsx)("p", {}),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "navButton",
                  style: {
                    borderRadius: 11 === r ? "24px" : "",
                    width: 11 === r ? "180%" : "",
                    padding: 11 === r ? "2px 24px" : "",
                  },
                  onClick: () => {
                    s(11);
                  },
                  children: [
                    (0, a.jsx)("img", {
                      className: "nav-logo",
                      src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/bm-logo.png",
                      alt: "",
                    }),
                    11 === r
                      ? (0, a.jsx)("h2", { children: "\xa0BM\xa0 " })
                      : (0, a.jsx)("p", {}),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "navButton",
                  style: {
                    borderRadius: 14 === r ? "24px" : "",
                    width: 14 === r ? "180%" : "",
                    padding: 14 === r ? "2px 24px" : "",
                  },
                  onClick: () => {
                    s(14);
                  },
                  children: [
                    (0, a.jsx)("img", {
                      className: "nav-logo",
                      src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ty-logo.png",
                      alt: "",
                    }),
                    14 === r
                      ? (0, a.jsx)("h2", { children: "\xa0CONTACT\xa0 " })
                      : (0, a.jsx)("p", {}),
                  ],
                }),
              ],
            }),
          ],
        });
      },
      E = {
        position: "sticky",
        top: 0,
        right: 0,
        left: 0,
        minHeight: "var(--100vh, 100vh)",
      },
      C = {
        height: "--Stickyroll_height",
        pages: "--Stickyroll_pages",
        factor: "--Stickyroll_factor",
        progress: "--Stickyroll_progress",
        page: "--Stickyroll_page",
      },
      _ = {
        root: "Stickyroll_root",
        above: "Stickyroll_above",
        below: "Stickyroll_below",
        sticky: "Stickyroll_sticky",
        nonSticky: "Stickyroll_nonSticky",
        page: (e) => "Stickyroll_page_".concat(e),
      };
    function P(e, t) {
      let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      e.classList.remove(
        ...t.map((e) => _[e]),
        ...Array.from({ length: n ? n + 1 : 0 }, (e, t) => _.page(t - 1))
      );
    }
    function T(e, t, n) {
      e.classList.add(...t.map((e) => _[e])),
        void 0 !== n && e.classList.add(_.page(n));
    }
    function L(e, t) {
      Object.entries(t).forEach((t) => {
        let [n, a] = t;
        e.style.setProperty(C[n], a.toString());
      });
    }
    function M(t, n) {
      let {
        pages: r,
        factor: s,
        onPage: l,
        onProgress: i,
        onStart: o,
        onEnd: c,
        children: u,
        className: d,
        style: f = {},
        ...m
      } = t;
      const p = (0, e.useRef)(null);
      return (
        (function (t, n) {
          let {
            pages: a,
            factor: r = 1,
            onPage: s,
            onProgress: l,
            onStart: i,
            onEnd: o,
          } = n;
          const c = (0, e.useRef)({
            onPage: s,
            onProgress: l,
            onStart: i,
            onEnd: o,
          });
          (0, e.useEffect)(() => {
            let e = !1,
              n = !1,
              s = -1;
            function l() {
              const { innerHeight: l } = window,
                i = l * (a * r) * -1,
                { top: o } = t.current.getBoundingClientRect();
              if (
                (o > 0 &&
                  e &&
                  ((e = !1),
                  (s = -1),
                  c.current.onProgress && c.current.onProgress(0, 0, -1)),
                o > 0 && !e)
              ) {
                const e = Math.max(-1, (o / l) * -1);
                L(t.current, { progress: e, page: -1 }),
                  P(t.current, ["sticky", "below"], a),
                  T(t.current, ["nonSticky", "above"], -1);
              } else if (o <= 0 && o >= i) {
                const i = !e,
                  u = (o / l / r) * -1,
                  d = Math.abs(Math.floor(u)),
                  f = u - d,
                  m = s !== d;
                (n = !1),
                  (e = !0),
                  (s = d),
                  L(t.current, { progress: f, page: d }),
                  P(t.current, ["nonSticky", "above", "below"], a),
                  T(t.current, ["sticky"], d),
                  i && c.current.onStart && c.current.onStart(),
                  m && c.current.onPage && c.current.onPage(d + 1, d),
                  c.current.onProgress &&
                    f < 1 &&
                    f > 0 &&
                    c.current.onProgress(f, d + 1, d);
              } else
                o < i &&
                  !n &&
                  ((n = !0),
                  (s = a),
                  L(t.current, { progress: 1, page: a - 1 }),
                  P(t.current, ["sticky", "above"], a),
                  T(t.current, ["nonSticky", "below"], a - 1),
                  c.current.onEnd && c.current.onEnd(),
                  c.current.onProgress && c.current.onProgress(1, a, a - 1));
            }
            return (
              L(t.current, {
                height: "calc(".concat(a * r + 1, " * var(--100vh, 100vh))"),
                pages: a,
                factor: r,
                progress: 0,
                page: -1,
              }),
              T(t.current, ["root"]),
              l(),
              window.addEventListener("scroll", l, { passive: !0 }),
              window.addEventListener("resize", l, { passive: !0 }),
              window.addEventListener("orientationchange", l, { passive: !0 }),
              () => {
                window.removeEventListener("scroll", l),
                  window.removeEventListener("resize", l),
                  window.removeEventListener("orientationchange", l);
              }
            );
          }, [t, a, r, c]);
        })(null !== n && void 0 !== n ? n : p, {
          pages: r,
          factor: s,
          onPage: l,
          onProgress: i,
          onStart: o,
          onEnd: c,
        }),
        (0, a.jsx)("div", {
          ref: null !== n && void 0 !== n ? n : p,
          ...m,
          className: [_.root, d].filter(Boolean).join(" "),
          style: {
            ...f,
            minHeight: "var(--100vh, 100vh)",
            height: "var(".concat(C.height, ", var(--100vh, 100vh))"),
          },
          children: (0, a.jsx)("div", { style: E, children: u }),
        })
      );
    }
    const R = (0, e.forwardRef)(M),
      O = () => {
        const [t, n] = e.useState(0),
          [r, s] = e.useState(0),
          [l, i] = e.useState(0),
          o = (e) => {
            0 === e && n((e) => (0 === e ? 0 : e - 1)),
              1 === e && n((e) => (2 === e ? 2 : e + 1));
          },
          c = (e) => {
            s(e);
          };
        return (0, a.jsx)("div", {
          className: "bm-sr-cover",
          children: (0, a.jsx)(R, {
            className: "bm-stickyroll",
            pages: 1,
            factor: 3,
            onProgress: (e) => {
              let { progress: t } = e;
              console.log(t), i(t);
            },
            children: (0, a.jsxs)("div", {
              className: "BM",
              children: [
                (0, a.jsx)("div", {
                  className: "bm-heading",
                  children: (0, a.jsx)("p", {
                    children: "Business Model & Revenue",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "bm-anim-bttns",
                  children: [
                    (0, a.jsx)("div", {
                      onClick: () => o(0),
                      children: (0, a.jsx)("img", {
                        className: "bm-anim-bttn-img",
                        src: "../images/look-left-bttn.png",
                        alt: "",
                        style: { left: "0%" },
                      }),
                    }),
                    (0, a.jsx)("div", {
                      onClick: () => o(1),
                      children: (0, a.jsx)("img", {
                        className: "bm-anim-bttn-img",
                        src: "../images/look-right-bttn.png",
                        alt: "",
                        style: { right: "0%" },
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "bm-anim-btn-bars",
                      children: [
                        (0, a.jsx)("div", {
                          className: "bm-anim-btn-bar-1",
                          style: {
                            width: 0 === t ? "40%" : "",
                            backgroundColor:
                              0 === t && "rgba(255, 255, 255, 0.72)",
                          },
                        }),
                        (0, a.jsx)("div", {
                          className: "bm-anim-btn-bar-2",
                          style: {
                            width: 1 === t ? "40%" : "",
                            backgroundColor:
                              1 === t && "rgba(255, 255, 255, 0.72)",
                          },
                        }),
                        (0, a.jsx)("div", {
                          className: "bm-anim-btn-bar-3",
                          style: {
                            width: 2 === t ? "40%" : "",
                            backgroundColor:
                              2 === t && "rgba(255, 255, 255, 0.72)",
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "bm-menu-design",
                  style: {
                    transform:
                      1 === t
                        ? "rotate(-23deg)"
                        : 2 === t
                        ? "rotate(-41deg)"
                        : "",
                  },
                  children: [
                    (0, a.jsx)("div", { className: "bm-menu-dot1" }),
                    (0, a.jsx)("div", { className: "bm-menu-dot2" }),
                    (0, a.jsx)("div", { className: "bm-menu-dot3" }),
                    (0, a.jsx)("div", { className: "bm-menu-dot4" }),
                    (0, a.jsx)("div", { className: "bm-menu-dot5" }),
                    (0, a.jsx)("div", { className: "bm-menu-dot6" }),
                    (0, a.jsx)("div", { className: "bm-menu-dot7" }),
                  ],
                }),
                (0, a.jsx)("div", { className: "bm-menu-red-dot" }),
                (0, a.jsxs)("div", {
                  className: "bm-main-div",
                  style: {
                    transform: t >= 1 && "translateY(-106%) rotate(-27deg)",
                  },
                  onMouseEnter: () => c(1),
                  children: [
                    (0, a.jsxs)("div", {
                      className: "bm-main-left-div",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "bm-main-l-top",
                          children: [
                            (0, a.jsx)("p", {
                              className: "bm-main-l-t-text-1",
                              children: "ANTI AI Software Subscription Model",
                            }),
                            (0, a.jsx)("p", {
                              className: "bm-main-l-t-text-2",
                              children:
                                "We are Introducing our ANTI AI Software Subscription Model, which are like other anti-virus subscription companies include out of the box pre-installed.",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", { className: "bm-main-l-bottom" }),
                      ],
                    }),

                    (0, a.jsxs)("div", {
                      className: "bm-button-i-div-2",
                      children: [
                        (0, a.jsx)("p", {
                          className: "bm-bttn-txt",
                          children: "Monthly",
                        }),
                        (0, a.jsxs)("div", {
                          className: "bm-money",
                          style: { transform: 1 === r && "translateY(-45%)" },
                          children: [
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", { children: "$9" }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", { children: "$9" }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", { children: "$9" }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", { children: "$9" }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", { children: "$9" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "bm-button-i-div-3",
                      children: [
                        (0, a.jsx)("p", {
                          className: "bm-bttn-txt",
                          children: "Yearly",
                        }),
                        (0, a.jsxs)("div", {
                          className: "bm-money",
                          style: { transform: 1 === r && "translateY(-45%)" },
                          children: [
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", { children: "$99" }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", { children: "$99" }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", { children: "$99" }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", { children: "$99" }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", { children: "$99" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "bm-main-div-2",
                  style: {
                    transform:
                      t >= 2
                        ? "translateY(-106%)rotate(-27deg)"
                        : t >= 1
                        ? "translate(0%,0)rotate(0deg)"
                        : "translateY(110%) rotate(27deg)",
                  },
                  onMouseEnter: () => c(2),
                  children: [
                    (0, a.jsxs)("div", {
                      className: "bm-main-left-div",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "bm-main-l-top",
                          children: [
                            (0, a.jsx)("p", {
                              className: "bm-main-l-t-text-1",
                              children: "ANTI.Q Walkman Sales",
                            }),
                            (0, a.jsx)("p", {
                              className: "bm-main-l-t-text-2",
                              children:
                                "ANTI Q Is out flagship music player, cutting the need to be connected to internet, a simple, plug and play device. A million songs, right in your pocket",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", { className: "bm-main-l-bottom" }),
                      ],
                    }),

                    (0, a.jsxs)("div", {
                      className: "bm-button-i-div-2",
                      children: [
                        (0, a.jsx)("p", {
                          className: "bm-bttn-txt",
                          children: "Price",
                        }),
                        (0, a.jsxs)("div", {
                          className: "bm-money",
                          style: { transform: 2 === r && "translateY(-45%)" },
                          children: [
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", {
                                children: "3500 INR",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", {
                                children: "3500 INR",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", {
                                children: "3500 INR",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", {
                                children: "3500 INR",
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "bm-m-s-money",
                              children: (0, a.jsx)("p", {
                                children: "3500 INR",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      },
      q = () => {
        const [t, n] = (0, e.useState)({ name: "", email: "", message: "" }),
          r = (e) => {
            const { name: a, value: r } = e.target;
            n({ ...t, [a]: r });
          };
        return (0, a.jsxs)("div", {
          className: "TY",
          children: [
            (0, a.jsx)("div", {
              className: "ty-heading",
              children: (0, a.jsx)("p", { children: "Contact Us" }),
            }),

            
            (0, a.jsx)("img", {
              className: "ty-image-1",
              src: "https://media.licdn.com/dms/image/D560BAQG3wfgFnEmzYg/company-logo_200_200/0/1719256718868?e=1730937600&v=beta&t=szzfzva8QIiCcRBHSVINO_iX7uMJaJ8gDf42kNXoavw",
              alt: "",
            }),
            (0, a.jsx)("div", {
              className: "ty-details-div",
              children: (0, a.jsxs)("form", {
                onSubmit: (e) => {
                  e.preventDefault(), console.log(t);
                },
              }),
            }),

            (0, a.jsxs)("div", {
              className: "ty-bar-details",
              children: [
                (0, a.jsx)("p", {
                  style: { position: "absolute", top: "5%", color: "white" },
                  children: "Tanishq Sharma",
                }),
                (0, a.jsx)("div", {
                  className: "ty-d-profile",
                  children: (0, a.jsx)("p", { children: "FOUNDER" }),
                }),
                (1, a.jsx)("p", {
                  style: { position: "absolute", top: "5%", right:"-70%", color: "white" },
                  children: "Divya Sharma",
                }),
                (1, a.jsx)("div", {
                  className: "ty-d-profile",
                   style: { position: "absolute", top: "50%", left:"110%", color: "white" },
                  children: (0, a.jsx)("p", { children: "Manager" }),
                }),


                (0, a.jsx)("p", {
                  style: { position: "absolute", top: "5%", right:"-180%", color: "white" },
                  children: "Tanishq Sharma",
                }),
                (0, a.jsx)("div", {
                  className: "ty-d-profile",
                  style: { position: "absolute", top: "50%", left:"210%", color: "white" },
                  children: (0, a.jsx)("p", { children: "FOUNDER" }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "ty-social-handles",
              children: [
                (0, a.jsx)("img", {
                  className: "ty-social-handles-img",
                  src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ty-linkedin.png",
                  href: "https://www.linkedin.com/company/anti-ai/",
                  alt: "",
                }),
                (0, a.jsx)("img", {
                  className: "ty-social-handles-img",
                  src: "https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/ty-insta.png",
                  href: "https://www.instagram.com/antiai.ltd/",
                  alt: "",
                }),
              
                (0, a.jsx)("img", {
                  className: "ty-social-handles-img",
                  src: "https://static.vecteezy.com/system/resources/previews/027/395/710/original/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png",
                  href: "https://www.instagram.com/antiai.ltd/",
                  alt: "",
                }),

                (0, a.jsx)("img", {
                  className: "ty-social-handles-img",
                  src: "https://media.licdn.com/dms/image/D560BAQG3wfgFnEmzYg/company-logo_200_200/0/1719256718868?e=1730937600&v=beta&t=szzfzva8QIiCcRBHSVINO_iX7uMJaJ8gDf42kNXoavw",
                  href: "https://www.antiai.ltd/",
                  alt: "",
                }),

                (0, a.jsx)("img", {
                  className: "ty-social-handles-img", 
                  src: "https://www.freepnglogos.com/uploads/facebook-logo-16.png",
                  href: "https://www.instagram.com/antiai.ltd/",
                  alt: "",
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "ty-social-txt",
              children: (0, a.jsx)("p", { children: "Our Handle: " }),
            }),
            (0, a.jsx)("div", {
              className: "ty-email-div",
              children: (0, a.jsxs)("p", {
                style: { fontSize: "1vw", color: "grey" },
                children: [
                  "Email: ",
                  (0, a.jsx)("span", {
                    style: { fontStyle: "italic", color: "white" },
                    children: "founder@antiai.ltd",
                  }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: "ty-phone-div",
              children: (0, a.jsxs)("p", {
                style: { fontSize: "0.9vw", color: "grey" },
                children: [
                  "Phone No: ",
                  (0, a.jsx)("span", {
                    style: { color: "white" },
                    children: "7023870359",
                  }),
                ],
              }),
            }),
          ],
        });
      },
      D = () => {
        let [t, n] = (0, e.useState)(1);
        const c = (0, e.useRef)(null),
          u = (0, e.useRef)(null),
          d = (0, e.useRef)(null),
          f = (0, e.useRef)(null),
          m = (0, e.useRef)(null),
          p = (0, e.useRef)(null),
          h = (0, e.useRef)(null),
          g = (0, e.useRef)(null),
          v = (0, e.useRef)(null),
          b = (0, e.useRef)(null),
          E = (0, e.useRef)(null),
          C = (0, e.useRef)(null),
          _ = (0, e.useRef)(null),
          P = (0, e.useRef)(null),
          T = (e) => {
              1 === e && c.current.scrollIntoView({ behavior: "smooth" }),
              2 === e && u.current.scrollIntoView({ behavior: "smooth" }),
              3 === e && d.current.scrollIntoView({ behavior: "smooth" }),
              4 === e && f.current.scrollIntoView({ behavior: "smooth" }),
              5 === e && m.current.scrollIntoView({ behavior: "smooth" }),
              6 === e && p.current.scrollIntoView({ behavior: "smooth" }),
              7 === e && h.current.scrollIntoView({ behavior: "smooth" }),
              8 === e && g.current.scrollIntoView({ behavior: "smooth" }),
              9 === e && v.current.scrollIntoView({ behavior: "smooth" }),
              10 === e && b.current.scrollIntoView({ behavior: "smooth" }),
              11 === e && E.current.scrollIntoView({ behavior: "smooth" }),
              12 === e && C.current.scrollIntoView({ behavior: "smooth" }),
              13 === e && _.current.scrollIntoView({ behavior: "smooth" }),
              14 === e && P.current.scrollIntoView({ behavior: "smooth" }),
              n(e);
          };
        return (0, a.jsxs)("div", {
          className: "App",
          children: [    
            (0, a.jsx)("div", {
              children: (0, a.jsx)(z, { setDataToParent: T, clickState: t }),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: c,
              children: (0, a.jsx)(r, {}),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: u,
              children: (0, a.jsx)(s, {}),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: d,
              children: (0, a.jsx)(l, {}),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: f,
              children: (0, a.jsx)(i, {}),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: m,
              children: (0, a.jsx)(o, {}),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: p,
              children: (0, a.jsx)(k, { clickState: t }),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: h,
              children: (0, a.jsx)(j, {}),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: v,
              children: (0, a.jsx)(w, {}),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: b,
              children: (0, a.jsx)(x, {}),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: E,
              children: (0, a.jsx)(O, {}),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: C,
              children: (0, a.jsx)(y, { clickState: t }),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: _,
              children: (0, a.jsx)(S, {}),
            }),
            (0, a.jsx)("div", {
              style: { minWidth: "100%" },
              ref: P,
              children: (0, a.jsx)(q, {}),
            }),
            // (0, a.jsx)("div", {
            //   className: "nextButton",
            //   onClick: () => {
            //     t >= 1 && t < 15 && n((t += 1)), T(t);
            //   },
            //   children: "Next",
            // }),
            // (0, a.jsx)("div", {
            //   className: "backButton",
            //   onClick: () => {
            //     t <= 15 && t > 1 && n((t -= 1)), T(t);
            //   },
            //   children: "Back",
            // }),
          ],
        });
      };
    t.createRoot(document.getElementById("root")).render(
      (0, a.jsx)(e.StrictMode, { children: (0, a.jsx)(D, {}) })
    );
  })();
})();
//# sourceMappingURL=main.c3328c61.js.map
// this code made by shubham 
