(() => {
  "use strict";
  var e = {
      748: (e, t, n) => {
        function i(e) {
          return (
            (i =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            i(e)
          );
        }
        function s(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, o(i.key), i));
          }
        }
        function o(e) {
          var t = (function (e, t) {
            if ("object" != i(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var s = n.call(e, t || "default");
              if ("object" != i(s)) return s;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == i(t) ? t : t + "";
        }
        n.d(t, { m: () => M });
        var r = (function () {
          return (
            (e = function e(t) {
              var n,
                i,
                s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.parent = t),
                (this.params = s),
                (this.isAutoPausing = !0),
                (this.types = s.types ||
                  (null === (n = this.parent.settings) ||
                  void 0 === n ||
                  null === (i = n.ads) ||
                  void 0 === i
                    ? void 0
                    : i.types) || {
                    initial: {
                      enabled: !1,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                    },
                    interstitial: {
                      enabled: !0,
                      cooldown: 60,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                      ready: !1,
                    },
                    rewarded: {
                      enabled: !0,
                      preload: 500,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                      reward: !0,
                      ready: !1,
                    },
                    banner: {
                      enabled: !1,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                    },
                  }),
                (this.callbacks = {
                  onRewardedAdAvailabilityChange: null,
                  onInterstitialAdAvailabilityChange: null,
                  onOffsetChange: null,
                }),
                (this.states = {
                  OFF: 0,
                  IDLE: 1,
                  PRELOADING: 2,
                  READY: 3,
                  PLAYING: 4,
                  CLOSED: 5,
                  0: "OFF",
                  1: "IDLE",
                  2: "PRELOADING",
                  3: "READY",
                  4: "PLAYING",
                  5: "CLOSED",
                }),
                (this.offsets = { top: 0, right: 0, bottom: 0, left: 0 }),
                (this.cooldownPassive = 10),
                (this.skipValidation = { rewarded: !1, interstitial: !1 }),
                this.isInterstitialAdReadyResult,
                this.isRewardedAdReadyResult,
                (this.info = {
                  interstitial: { checked: [], called: [] },
                  rewarded: { checked: [], called: [] },
                }));
            }),
            (t = [
              {
                key: "init",
                value: function () {
                  var e,
                    t,
                    n,
                    i,
                    s,
                    o,
                    r = this;
                  (this.parent.console.log("[ads] init..."),
                    (this.isAutoPausing =
                      void 0 !==
                      (null === (e = this.params) || void 0 === e
                        ? void 0
                        : e.isAutoPausing)
                        ? null === (t = this.params) || void 0 === t
                          ? void 0
                          : t.isAutoPausing
                        : void 0 !==
                            (null === (n = this.parent.settings) ||
                            void 0 === n ||
                            null === (i = n.ads) ||
                            void 0 === i
                              ? void 0
                              : i.isAutoPausing)
                          ? null === (s = this.parent.settings) ||
                            void 0 === s ||
                            null === (o = s.ads) ||
                            void 0 === o
                            ? void 0
                            : o.isAutoPausing
                          : this.isAutoPausing),
                    ["interstitial", "rewarded"].forEach(function (e) {
                      var t;
                      ((r.types[e].eventIds =
                        (null === (t = r.parent.settings[e]) || void 0 === t
                          ? void 0
                          : t.eventIds) || []),
                        r.parent.console.log(
                          "[ads] %s eventIds",
                          e,
                          r.types[e].eventIds,
                        ));
                    }),
                    ["interstitial", "rewarded"].forEach(function (e) {
                      var t, n, i;
                      ((r.types[e].allowlist =
                        (null === (t = r.parent.settings[e]) || void 0 === t
                          ? void 0
                          : t.allowlist) || []),
                        (r.types[e].blocklist =
                          (null === (n = r.parent.settings[e]) || void 0 === n
                            ? void 0
                            : n.blocklist) || []),
                        (r.types[e].allowEmpty =
                          !0 ===
                          (null === (i = r.parent.settings[e]) || void 0 === i
                            ? void 0
                            : i.allowEmpty)),
                        r.parent.console.log(
                          "[ads] %s allowlist",
                          e,
                          r.types[e].allowlist,
                        ),
                        r.parent.console.log(
                          "[ads] %s blocklist",
                          e,
                          r.types[e].blocklist,
                        ),
                        r.parent.console.log(
                          "[ads] %s allowEmpty: %s",
                          e,
                          !0 === r.types[e].allowEmpty ? "true" : "false",
                        ));
                    }));
                  var a = { interstitial: [], rewarded: [] };
                  return (
                    ["interstitial", "rewarded"].forEach(function (e) {
                      var t;
                      ((r.types[e].eventIds =
                        (null === (t = r.parent.settings[e]) || void 0 === t
                          ? void 0
                          : t.eventIds) || []),
                        r.types[e].eventIds.forEach(function (t) {
                          r.isValid(t, e) && a[e].push(t);
                        }));
                    }),
                    ["interstitial", "rewarded"].forEach(function (e) {
                      ((r.types[e].eventIds = a[e]),
                        r.parent.console.log(
                          "[ads] %s valid eventIds",
                          e,
                          r.types[e].eventIds,
                        ));
                    }),
                    new Promise(function (e) {
                      (Object.keys(r.types).forEach(function (e) {
                        r.types[e].enabled &&
                          (setInterval(function () {
                            r.types[e].ready !==
                              (r.types[e].state === r.states.READY) &&
                              ((r.types[e].ready =
                                r.types[e].state === r.states.READY),
                              "interstitial" === e
                                ? "function" ==
                                    typeof r.callbacks
                                      .onInterstitialAdAvailabilityChange &&
                                  r.types[e].eventIds.forEach(function (t) {
                                    r.callbacks.onInterstitialAdAvailabilityChange(
                                      t,
                                      r.types[e].ready,
                                    );
                                  })
                                : "rewarded" === e &&
                                  "function" ==
                                    typeof r.callbacks
                                      .onRewardedAdAvailabilityChange &&
                                  r.types[e].eventIds.forEach(function (t) {
                                    r.callbacks.onRewardedAdAvailabilityChange(
                                      t,
                                      r.types[e].ready,
                                    );
                                  }));
                          }, 250),
                          r.setState(e, r.states.IDLE),
                          r.types[e].preload > 0 &&
                            setInterval(function () {
                              r.types[e].enabled &&
                                !0 !== r.types[e].skip &&
                                r.preload(e);
                            }, r.types[e].preload));
                      }),
                        e());
                    })
                  );
                },
              },
              {
                key: "setState",
                value: function (e, t) {
                  (this.parent.console.log("[ads] setState", e, this.states[t]),
                    (this.types[e].state = t),
                    (this.types[e].isLandscape =
                      window.innerWidth > window.innerHeight));
                },
              },
              {
                key: "preload",
                value: function (e) {
                  var t = this;
                  Object.keys(this.types).includes(e) &&
                    this.types[e].state === this.states.IDLE &&
                    ((this.types[e].fails = this.types[e].fails || 0),
                    (this.types[e].attempts = this.types[e].attempts || 0),
                    (this.types[e].attempts > 0 &&
                      this.types[e].fails >= this.types[e].attempts) ||
                      (this.setState(e, this.states.PRELOADING),
                      this.parent
                        ._preloadAd(e)
                        .then(
                          function () {
                            ((t.types[e].fails = 0),
                              t.parent.console.log(
                                "[ads] [%s] preloading... OK",
                                e,
                              ),
                              t.setState(e, t.states.READY));
                          },
                          function () {
                            (t.types[e].fails++,
                              t.parent.console.log(
                                "[ads] [%s] preloading... FAILED (attempt: %s)",
                                e,
                                t.types[e].fails,
                              ),
                              t.setState(e, t.states.CLOSED),
                              setTimeout(function () {
                                t.setState(e, t.states.IDLE);
                              }, t.types[e].retry));
                          },
                        )
                        .catch(function (e) {
                          t.parent.console.error("[ads] _preloadAd", e);
                        })));
                },
              },
              {
                key: "hasCooledDown",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = this.types[e];
                  if (void 0 === n) return !0;
                  if (!(n.last && n.cooldown >= 0)) return !0;
                  var i = n.cooldown,
                    s = Math.round((Date.now() - n.last) / 1e3);
                  return s < i
                    ? (!0 !== t &&
                        this.parent.console.log(
                          "[ads] [%s/cooldown]: %s seconds left",
                          e,
                          i - s,
                        ),
                      !1)
                    : !(
                        "interstitial" === e &&
                        this.cooldownPassive > 0 &&
                        (s = Math.round(
                          (Date.now() - this.types.rewarded.last) / 1e3,
                        )) < this.cooldownPassive &&
                        (!0 !== t &&
                          this.parent.console.log(
                            "[ads] [%s/(passive) cooldown]: %s seconds left",
                            e,
                            this.cooldownPassive - s,
                          ),
                        1)
                      );
                },
              },
              {
                key: "hasRewardedAd",
                value: function (e) {
                  return (
                    this.info.rewarded.checked.includes(e) ||
                      this.info.rewarded.checked.push(e),
                    Promise.resolve(this.isRewardedAdReady(e))
                  );
                },
              },
              {
                key: "hasInterstitialAd",
                value: function (e) {
                  return (
                    this.info.interstitial.checked.includes(e) ||
                      this.info.interstitial.checked.push(e),
                    Promise.resolve(this.isInterstitialAdReady(e))
                  );
                },
              },
              {
                key: "onRewardedAdAvailabilityChange",
                value: function (e) {
                  var t = this;
                  (this.parent.console.log(
                    "[ads] listener 'onRewardedAdAvailabilityChange' added",
                  ),
                    (this.callbacks.onRewardedAdAvailabilityChange = e),
                    "function" ==
                      typeof this.callbacks.onRewardedAdAvailabilityChange &&
                      this.types.rewarded.eventIds.forEach(function (e) {
                        t.callbacks.onRewardedAdAvailabilityChange(
                          e,
                          t.types.rewarded.ready,
                        );
                      }));
                },
              },
              {
                key: "onInterstitialAdAvailabilityChange",
                value: function (e) {
                  var t = this;
                  (this.parent.console.log(
                    "[ads] listener 'onInterstitialAdAvailabilityChange' added",
                  ),
                    (this.callbacks.onInterstitialAdAvailabilityChange = e),
                    "function" ==
                      typeof this.callbacks
                        .onInterstitialAdAvailabilityChange &&
                      this.types.interstitial.eventIds.forEach(function (e) {
                        t.callbacks.onInterstitialAdAvailabilityChange(
                          e,
                          t.types.interstitial.ready,
                        );
                      }));
                },
              },
              {
                key: "isRewardedAdAvailable",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  return (
                    this.info.rewarded.checked.includes(e) ||
                      this.info.rewarded.checked.push(e),
                    this.isRewardedAdReady(e)
                  );
                },
              },
              {
                key: "isInterstitialAdAvailable",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  return (
                    this.info.interstitial.checked.includes(e) ||
                      this.info.interstitial.checked.push(e),
                    this.isInterstitialAdReady(e)
                  );
                },
              },
              {
                key: "isAdReady",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "interstitial",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "";
                  return "interstitial" === e
                    ? this.isInterstitialAdReady(t)
                    : "rewarded" === e && this.isRewardedAdReady(t);
                },
              },
              {
                key: "isRewardedAdReady",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t = this.isValid(e, "rewarded"),
                    n = this.parent._hasRewardedAd(e),
                    i = this.types.rewarded.state === this.states.READY,
                    s = this.hasCooledDown("rewarded", !0),
                    o = t && n && i && s,
                    r = {
                      eventId: e,
                      isValid: t,
                      _hasRewardedAd: n,
                      isReady: i,
                      hasCooledDown: s,
                      result: o,
                    };
                  return (
                    o ||
                      this.isRewardedAdReadyResult === JSON.stringify(r) ||
                      ((this.isRewardedAdReadyResult = JSON.stringify(r)),
                      this.parent.console.log(
                        "[ads] isRewardedAdReady has changed",
                        r,
                      )),
                    o
                  );
                },
              },
              {
                key: "isInterstitialAdReady",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t = this.isValid(e),
                    n = this.parent._hasInterstitialAd(e),
                    i = this.types.interstitial.state === this.states.READY,
                    s = this.hasCooledDown("interstitial", !0),
                    o = t && n && i && s,
                    r = {
                      eventId: e,
                      isValid: t,
                      _hasInterstitialAd: n,
                      isReady: i,
                      hasCooledDown: s,
                      result: o,
                    };
                  return (
                    o ||
                      this.isInterstitialAdReadyResult === JSON.stringify(r) ||
                      ((this.isInterstitialAdReadyResult = JSON.stringify(r)),
                      this.parent.console.log(
                        "[ads] isInterstitialAdReady has changed",
                        r,
                      )),
                    o
                  );
                },
              },
              {
                key: "setOffsets",
                value: function (e, t, n, s) {
                  ("object" === i(e)
                    ? ((this.offsets.top =
                        void 0 !== e.top ? e.top : this.offsets.top),
                      (this.offsets.right =
                        void 0 !== e.right ? e.right : this.offsets.right),
                      (this.offsets.bottom =
                        void 0 !== e.bottom ? e.bottom : this.offsets.bottom),
                      (this.offsets.left =
                        void 0 !== e.left ? e.left : this.offsets.left))
                    : ((this.offsets.top = void 0 !== e ? e : this.offsets.top),
                      (this.offsets.right =
                        void 0 !== t ? t : this.offsets.right),
                      (this.offsets.bottom =
                        void 0 !== n ? n : this.offsets.bottom),
                      (this.offsets.left =
                        void 0 !== s ? s : this.offsets.left)),
                    "function" == typeof this.callbacks.onOffsetChange &&
                      this.callbacks.onOffsetChange(this.offsets));
                },
              },
              {
                key: "onOffsetChange",
                value: function (e) {
                  ((this.callbacks.onOffsetChange = e),
                    "function" == typeof this.callbacks.onOffsetChange &&
                      this.callbacks.onOffsetChange(this.offsets));
                },
              },
              {
                key: "getOffsets",
                value: function () {
                  return this.offsets;
                },
              },
              {
                key: "show",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "interstitial",
                    n = !1;
                  return new Promise(function (i) {
                    if (void 0 === e.types[t])
                      return (
                        e.parent.console.log(
                          "[ads] type '%s' is undefined!",
                          t,
                        ),
                        i()
                      );
                    if (e.types[t].state !== e.states.READY)
                      return (
                        e.parent.console.log(
                          "[ads] [%s] skipped (state: %s)",
                          t,
                          e.states[e.types[t].state],
                        ),
                        "rewarded" === t ? i({ isRewardGranted: n }) : i()
                      );
                    if (!e.hasCooledDown(t))
                      return (
                        e.parent.console.log(
                          "[ads] [%s] skipped (cooldown)",
                          t,
                        ),
                        "rewarded" === t ? i({ isRewardGranted: n }) : i()
                      );
                    (e.setState(t, e.states.PLAYING),
                      e.isAutoPausing &&
                        (e.parent.gameStates.mute(!0, !0),
                        e.parent.gameStates.pause(!0, !0)),
                      e.parent.gameStates.stopGameplay());
                    var s = function (t) {
                      ((e.types[t].last = Date.now()),
                        setTimeout(function () {
                          (i("rewarded" === t ? { isRewardGranted: n } : {}),
                            e.isAutoPausing &&
                              (e.parent.gameStates.pause(!1, !0),
                              e.parent.gameStates.mute(!1, !0)),
                            e.parent.gameStates.startGameplay());
                        }, e.types[t].timeout),
                        e.setState(t, e.states.CLOSED),
                        setTimeout(function () {
                          e.setState(t, e.states.IDLE);
                        }, 250));
                    };
                    switch (t) {
                      case "interstitial":
                        return e.parent
                          ._showAd(t)
                          .then(function () {
                            s(t);
                          })
                          .catch(function (e) {
                            s(t);
                          });
                      case "rewarded":
                        return e.parent
                          ._showAd(t)
                          .then(function (e) {
                            ((n = e), s(t));
                          })
                          .catch(function (e) {
                            s(t);
                          });
                      default:
                        return;
                    }
                  });
                },
              },
              {
                key: "testAd",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "interstitial";
                  return new Promise(function (t, n) {
                    var i = !1,
                      s = function () {
                        t({ type: e, args: { success: i } });
                      };
                    return "interstitial" === e
                      ? "undefined" != typeof Swal
                        ? Swal.fire({
                            title: "<strong>[INTERSTITIAL AD]</strong>",
                            html: "<i>This dialog represents an interstitial ad.</i><br /><br /><b>Important:</b> In any case, the game should now be muted!",
                            confirmButtonText: "Close",
                            didDestroy: function () {
                              s();
                            },
                          })
                        : (alert(
                            "[INTERSTITIAL AD]\nThis dialog represents an interstitial ad.\nIMPORTANT: In any case, the game should now be muted!",
                          ),
                          s())
                      : "rewarded" === e
                        ? "undefined" != typeof Swal
                          ? Swal.fire({
                              title: "<strong>[REWARDED AD]</strong>",
                              html: "<i>This dialog represents a rewarded ad.</i><br /><br /><b>Important:</b> In any case, the game should now be muted!",
                              showDenyButton: !0,
                              confirmButtonText: "Grant reward",
                              denyButtonText: "Deny reward",
                              didDestroy: function () {
                                s();
                              },
                            }).then(function (e) {
                              i = e.isConfirmed;
                            })
                          : (confirm(
                              "[REWARDED AD]\nThis dialog represents a rewarded ad.\nIMPORTANT: In any case, the game should now be muted!\n\nShould a reward be granted?",
                            ) && (i = !0),
                            s())
                        : void s();
                  });
                },
              },
              {
                key: "getPlacementType",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    n = (function (e, t) {
                      var n = [
                        "preroll",
                        "start",
                        "pause",
                        "resume",
                        "quit",
                        "browse",
                        "next",
                        "break",
                      ];
                      if (
                        ((e = "string" == typeof e ? e.toLowerCase() : ""),
                        (t = "string" == typeof t ? t.toLowerCase() : ""),
                        n.includes(t))
                      )
                        return t;
                      var i = e.toLowerCase().split(":");
                      if (i.length) {
                        if ("break" === i[0]) return "break";
                        if (n.includes(i[i.length - 1])) return i[i.length - 1];
                      }
                      return "browse";
                    })(e, t);
                  return (
                    this.parent.console.log(
                      "[ads] placementType: %s ('%s', '%s')",
                      n,
                      e || "n/a",
                      t || "n/a",
                    ),
                    n
                  );
                },
              },
              {
                key: "isValid",
                value: function () {
                  var e,
                    t,
                    n,
                    i,
                    s,
                    o =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "interstitial";
                  if (!0 === this.skipValidation[r]) return !0;
                  if (
                    !0 !==
                      (null === (e = this.types[r]) || void 0 === e
                        ? void 0
                        : e.allowEmpty) &&
                    ("string" != typeof o || !o.length)
                  )
                    return !1;
                  if (
                    0 ===
                      (null === (t = this.types[r]) || void 0 === t
                        ? void 0
                        : t.allowlist.length) &&
                    0 ===
                      (null === (n = this.types[r]) || void 0 === n
                        ? void 0
                        : n.blocklist.length)
                  )
                    return !0;
                  var a = function (e, t) {
                      var n = t.filter(function (t) {
                        return (function (e, t) {
                          var n = t.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&");
                          return new RegExp(
                            "^".concat(n.replace(/\*/g, ".*"), "$"),
                          ).test(e);
                        })(e, t);
                      });
                      return (
                        n.length,
                        n.sort(function (e, t) {
                          return t.length - e.length;
                        })[0]
                      );
                    },
                    l = a(
                      o,
                      null === (i = this.types[r]) || void 0 === i
                        ? void 0
                        : i.allowlist,
                    ),
                    u = a(
                      o,
                      null === (s = this.types[r]) || void 0 === s
                        ? void 0
                        : s.blocklist,
                    );
                  return !(!l && !u) && (l && u ? l.length > u.length : !!l);
                },
              },
              {
                key: "innerWidth",
                get: function () {
                  return window.innerWidth;
                },
              },
              {
                key: "innerHeight",
                get: function () {
                  return window.innerHeight;
                },
              },
            ]),
            t && s(e.prototype, t),
            n && s(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, n;
        })();
        function a(e) {
          return (
            (a =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            a(e)
          );
        }
        function l(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, u(i.key), i));
          }
        }
        function u(e) {
          var t = (function (e, t) {
            if ("object" != a(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || "default");
              if ("object" != a(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == a(t) ? t : t + "";
        }
        var c = (function () {
          function e(t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.parent = t),
              (this.params = n),
              (this.url =
                "//download.gameanalytics.com/js/GameAnalytics-4.4.5.min.js"),
              (this.build = ""),
              (this.game_key = ""),
              (this.secret_key = ""),
              (this.isEnabled = !1),
              (this.setEnabledInfoLog = !1),
              (this.setEnabledEventSubmission = !1),
              (this.parent.settings = this.parent.settings || {}),
              (this.parent.settings.gameanalytics =
                this.parent.settings.gameanalytics || {}));
          }
          return (
            (t = e),
            (n = [
              {
                key: "init",
                value: function () {
                  var t,
                    n,
                    i,
                    s,
                    o,
                    r,
                    a,
                    l,
                    u = this;
                  return (
                    (this.url =
                      this.params.url ||
                      (null === (t = this.parent.settings) ||
                      void 0 === t ||
                      null === (n = t.gameanalytics) ||
                      void 0 === n
                        ? void 0
                        : n.url) ||
                      this.url),
                    (this.build =
                      this.params.build ||
                      (null === (i = this.parent.settings) ||
                      void 0 === i ||
                      null === (s = i.gameanalytics) ||
                      void 0 === s
                        ? void 0
                        : s.build) ||
                      this.build),
                    (this.game_key =
                      this.params.game_key ||
                      (null === (o = this.parent.settings) ||
                      void 0 === o ||
                      null === (r = o.gameanalytics) ||
                      void 0 === r
                        ? void 0
                        : r.game_key) ||
                      this.game_key),
                    (this.secret_key =
                      this.params.secret_key ||
                      (null === (a = this.parent.settings) ||
                      void 0 === a ||
                      null === (l = a.gameanalytics) ||
                      void 0 === l
                        ? void 0
                        : l.secret_key) ||
                      this.secret_key),
                    (this.parent.settings = this.parent.settings || {}),
                    (this.parent.settings.gameanalytics =
                      this.parent.settings.gameanalytics || {}),
                    [
                      "isEnabled",
                      "setEnabledInfoLog",
                      "setEnabledEventSubmission",
                    ].forEach(function (e) {
                      u[e] =
                        void 0 !== u.params[e]
                          ? u.params[e]
                          : void 0 !== u.parent.settings.gameanalytics[e]
                            ? u.parent.settings.gameanalytics[e]
                            : u[e];
                    }),
                    this.parent.console.log("[analytics] init..."),
                    this.isEnabled
                      ? this.build.length &&
                        this.game_key.length &&
                        this.secret_key.length
                        ? new Promise(function (t) {
                            return u.parent.helpers
                              .loadFiles(u.url)
                              .then(function () {
                                (void 0 !== e &&
                                  (e("setEnabledInfoLog", u.setEnabledInfoLog),
                                  e(
                                    "setEnabledEventSubmission",
                                    u.setEnabledEventSubmission,
                                  ),
                                  e("configureBuild", u.build),
                                  e("initialize", u.game_key, u.secret_key),
                                  t()),
                                  t());
                              })
                              .catch(function (e) {
                                u.parent.console.error(e);
                              });
                          })
                        : (this.parent.console.warn(
                            "[analytics] One or more parameter values were invalid: Build: '%s', Game key: '%s' & Secret key: '%s' -> Initialization aborted!",
                            this.build,
                            this.game_key,
                            this.secret_key,
                          ),
                          Promise.resolve())
                      : (this.parent.console.info(
                          "[analytics] isEnabled: false -> Initialization aborted!",
                        ),
                        Promise.resolve())
                  );
                },
              },
              {
                key: "track",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  if (
                    ((window.gameanalytics = window.gameanalytics || {}),
                    void 0 !== window.gameanalytics.GameAnalytics)
                  )
                    switch (
                      ("string" == typeof e
                        ? (e = e.toLowerCase())
                        : ((t.eventType = t.eventType || ""),
                          (e = t.eventType.toLowerCase())),
                      e)
                    ) {
                      case "ga:business":
                        gameanalytics.GameAnalytics.addBusinessEvent(
                          t.cartType,
                          t.itemType,
                          t.itemId,
                          t.amount,
                          t.currency,
                        );
                        break;
                      case "ga:resource":
                        gameanalytics.GameAnalytics.addResourceEvent(
                          t.flowType,
                          t.itemType,
                          t.itemId,
                          t.amount,
                          t.resourceCurrency,
                        );
                        break;
                      case "ga:progression":
                        gameanalytics.GameAnalytics.addProgressionEvent(
                          t.progressionStatus,
                          t.progression01,
                          t.progression02,
                          t.progression03,
                          t.value,
                        );
                        break;
                      case "ga:error":
                        gameanalytics.GameAnalytics.addErrorEvent(
                          t.severity,
                          t.message,
                        );
                        break;
                      case "ga:design":
                        gameanalytics.GameAnalytics.addDesignEvent(
                          t.eventId,
                          t.value,
                        );
                    }
                },
              },
            ]),
            n && l(t.prototype, n),
            i && l(t, i),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, n, i;
        })();
        function d(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            (t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, i));
          }
          return n;
        }
        function h(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? d(Object(n), !0).forEach(function (t) {
                  p(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : d(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function f(e) {
          return (
            (f =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            f(e)
          );
        }
        function y(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, v(i.key), i));
          }
        }
        function p(e, t, n) {
          return (
            (t = v(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function v(e) {
          var t = (function (e, t) {
            if ("object" != f(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || "default");
              if ("object" != f(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == f(t) ? t : t + "";
        }
        var g = (function () {
          return (
            (e = function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                p(this, "getCacheKey", function () {
                  return Math.floor(new Date().getTime() / 6e5);
                }),
                (this.parent = t),
                (this.params = n),
                (this.urlSearchParams = []));
              try {
                ((this.urlSearchParams = new URLSearchParams(
                  window.location.search || "",
                )),
                  this.parent.console.debug(
                    "urlSearchParams",
                    this.urlSearchParams,
                  ));
              } catch (e) {
                this.parent.console.error(e);
              }
              ((this.imagesBaseURL = "images/"),
                (this.imagesSizes = {
                  small: "64x64",
                  medium: "128x128",
                  large: "256x256",
                  xlarge: "512x512",
                }),
                (this.icons = {
                  flame: 128293,
                  robot: 129302,
                  handshake: 129309,
                  rocket: 128640,
                  muted: 128263,
                  unmuted: 128265,
                  finish: 127937,
                  coffee: 9749,
                  noentry: 9940,
                  party: 127881,
                  trophy: 127942,
                  skull: 128128,
                  biceps: 128170,
                  clapper: 127916,
                  satellite: 128225,
                  scream: 128561,
                  warning: 9888,
                  error: 128683,
                  pause: 9208,
                  resume: 9199,
                  stop: 9209,
                  menu: 9776,
                  flag: 128681,
                  gear: 9881,
                  joystick: 128377,
                  hourglass: 9203,
                  bellhop: 128718,
                  sleep: 128164,
                  ladder: 129692,
                  tornado: 127786,
                  pill: 128138,
                  toy: 129528,
                  restart: 8634,
                  door: 55357,
                  house: 8962,
                  next: 9197,
                  level: 9167,
                }),
                (this.isLocalhost =
                  "localhost" === location.hostname ||
                  "127.0.0.1" === location.hostname ||
                  "::1" === location.hostname),
                (this.pressTimer = null));
            }),
            (t = [
              {
                key: "getLocale",
                value: function () {
                  var e = this;
                  return (
                    ["locale", "lang"].forEach(function (t) {
                      if (null === e.parent.settings[t])
                        try {
                          e.parent.settings[t] = new URL(
                            window.location.href,
                          ).searchParams.get(t);
                        } catch (e) {}
                    }),
                    this.parent.settings.lang ||
                      this.parent.settings.locale ||
                      (navigator.language || navigator.userLanguage).substr(
                        0,
                        2,
                      )
                  );
                },
              },
              {
                key: "getIcon",
                value: function (e) {
                  return e in this.icons
                    ? String.fromCodePoint(this.icons[e])
                    : null;
                },
              },
              {
                key: "getImageURL",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "logo.png";
                  return (
                    (e = "string" == typeof e && e.length ? e + "/" : ""),
                    (t =
                      "string" == typeof t && t in this.imagesSizes
                        ? this.imagesSizes[t] + "/"
                        : ""),
                    (n = "string" == typeof n && n.length ? n : "logo.png"),
                    this.imagesBaseURL + e + t + n
                  );
                },
              },
              {
                key: "initEruda",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1e3;
                  "undefined" != typeof eruda &&
                    "function" == typeof eruda.init &&
                    (document.addEventListener("contextmenu", function (e) {
                      e.preventDefault();
                    }),
                    document.addEventListener("touchstart", function (n) {
                      var i = n.touches[0];
                      i.clientX > 0.9 * window.innerWidth &&
                        i.clientY > 0.9 * window.innerHeight &&
                        (e.pressTimer = setTimeout(function () {
                          (eruda.init(),
                            console.log("[eruda] activated by longpress"));
                        }, t || 5e3));
                    }),
                    document.addEventListener("touchend", function () {
                      clearTimeout(e.pressTimer);
                    }));
                },
              },
              {
                key: "loadFiles",
                value: function (e) {
                  var t,
                    n = this,
                    i = document.getElementsByTagName("head")[0];
                  return (
                    "string" == typeof e && (e = [e]),
                    new Promise(function (s, o) {
                      Array.isArray(e)
                        ? (e.push(function () {
                            s();
                          }),
                          e.reduce(function (e, s) {
                            return e.then(function () {
                              return new Promise(function (e, o) {
                                var r = document.createElement("script");
                                if ("function" == typeof s) return (s(), e());
                                switch (s.split(".").pop()) {
                                  case "js":
                                  default:
                                    ((r.src = s),
                                      n.parent.console.log(
                                        "[intern] Loading %s...",
                                        s,
                                      ),
                                      i.appendChild(r),
                                      (r.onload = function () {
                                        e();
                                      }),
                                      (r.onerror = function () {
                                        e();
                                      }));
                                    break;
                                  case "css":
                                    (((t = document.createElement("link")).rel =
                                      "stylesheet"),
                                      (t.type = "text/css"),
                                      (t.href = s),
                                      i.appendChild(t),
                                      e());
                                }
                              });
                            });
                          }, Promise.resolve()))
                        : s({ info: "no files" });
                    })
                  );
                },
              },
              {
                key: "getArray",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return Array.isArray(e) ? e : "string" == typeof e ? [e] : [];
                },
              },
              {
                key: "getURLSearchParam",
                value: function (e) {
                  return "object" === f(this.urlSearchParams) &&
                    "function" == typeof this.urlSearchParams.get
                    ? this.urlSearchParams.get(e)
                    : null;
                },
              },
              {
                key: "updateSettings",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  return new Promise(function (n) {
                    return e.readTextFile("famobi.json", function (i) {
                      ((t = e.mergeObjects(t, i)),
                        (t = e.mergeObjects(t, e.parent.params)),
                        [
                          "locale",
                          "lang",
                          "mock",
                          "isVerboseLoggingEnabled",
                          "delay",
                          "isMuted",
                        ].forEach(function (n) {
                          null !== f(e.getURLSearchParam(n)) &&
                            (t[n] = e.getURLSearchParam(n));
                        }),
                        (t.GAME_ID =
                          t.GAME_ID ||
                          t.gameId ||
                          t.gameID ||
                          t.GAMEID ||
                          e.retrieveGameId() ||
                          null),
                        ["1", "true"].includes(t.isVerboseLoggingEnabled) &&
                          ((t.console = t.console || {}),
                          (t.console.isVerboseLoggingEnabled = !0)),
                        delete t.gameId,
                        delete t.gameID,
                        delete t.GAMEID,
                        n(t));
                    });
                  });
                },
              },
              {
                key: "mergeObjects",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  for (var n in t)
                    "object" !== f(t[n]) || Array.isArray(t[n])
                      ? (e[n] = t[n])
                      : e.hasOwnProperty(n)
                        ? (e[n] = h(h({}, e[n]), t[n]))
                        : (e[n] = t[n]);
                  return e;
                },
              },
              {
                key: "readTextFile",
                value: function (e, t) {
                  var n = new XMLHttpRequest();
                  (n.overrideMimeType("application/json"),
                    n.open("GET", e, !0),
                    (n.onload = function () {
                      if (4 === n.readyState && "200" == n.status)
                        try {
                          var e = JSON.parse(n.responseText);
                          t(e);
                        } catch (e) {
                          t({});
                        }
                      else t({});
                    }),
                    (n.onerror = function () {
                      t({});
                    }),
                    n.send(null));
                },
              },
              {
                key: "loadTemplate",
                value: function (e) {
                  return fetch(e).then(function (t) {
                    return (
                      t.ok || console.error("Failed to load template: %s", e),
                      t.text()
                    );
                  });
                },
              },
              {
                key: "retrieveGameId",
                value: function () {
                  for (
                    var e = null,
                      t = document.getElementsByTagName("script"),
                      n = null,
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    var s = t[i].getAttribute("src");
                    if (s && s.includes("game-interface.js")) {
                      n = t[i];
                      break;
                    }
                  }
                  if (n) {
                    var o = n.getAttribute("src");
                    "string" == typeof o &&
                      (o.startsWith("http") || (o = "http:" + o));
                    try {
                      e = new URL(o).searchParams.get("gameId");
                    } catch (e) {}
                  }
                  return e;
                },
              },
              {
                key: "showPauseOverlay",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = document.getElementById("GameInterfacePauseOverlay");
                  if (null === t) {
                    ((t = document.createElement("div")).setAttribute(
                      "id",
                      "GameInterfacePauseOverlay",
                    ),
                      (t.style.position = "absolute"),
                      (t.style.top = "0"),
                      (t.style.left = "0"),
                      (t.style.width = "100%"),
                      (t.style.height = "100%"),
                      (t.style.background = "rgba(0, 0, 0, 0.8)"),
                      (t.style.pointerEvents = "none"),
                      (t.style.display = "none"),
                      [
                        "pointerdown",
                        "MSPointerDown",
                        "touchstart",
                        "mousedown",
                      ].forEach(function (e) {
                        t.addEventListener(e, function (e) {
                          e.stopPropagation();
                        });
                      }));
                    var n = document.querySelector("canvas");
                    n && n.parentNode.insertBefore(t, n.nextSibling);
                  }
                  t &&
                    ((t.style.display = e ? "block" : "none"),
                    (t.style.pointerEvents = e ? "auto" : "none"));
                },
              },
              {
                key: "getLevel",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0;
                  if (!Number.isInteger(e))
                    try {
                      e = parseInt(
                        "string" == typeof e ? e.replace(/\D/g, "") : e,
                      );
                    } catch (e) {}
                  return Number.isInteger(e) ? e : t;
                },
              },
              {
                key: "disablePause",
                value: function () {
                  var e = this,
                    t = setInterval(function () {
                      if ("undefined" != typeof pc) {
                        var e = pc.AppBase || pc.Application;
                        e && e.getApplication() && n();
                      }
                    }, 100),
                    n = function () {
                      (clearInterval(t),
                        e.parent.console.log("Injecting do-not-pause hack..."));
                      var n = pc.AppBase || pc.Application,
                        i = n.getApplication(),
                        s = pc.platform.browser,
                        o = "hidden",
                        r = void 0,
                        a = function () {
                          document[o]
                            ? ((pc.platform.browser = !1),
                              (i.autoRender = !1),
                              (function () {
                                if (r)
                                  e.parent.console.warn(
                                    "manual render is already active!",
                                  );
                                else {
                                  var t =
                                    (i.stats &&
                                      i.stats.frame &&
                                      i.stats.frame.fps) ||
                                    60;
                                  r = setInterval(
                                    function () {
                                      return i.tick();
                                    },
                                    1e3 / Math.max(t, 60),
                                  );
                                }
                              })())
                            : (r &&
                                ((pc.platform.browser = s),
                                (i.autoRender = !0),
                                i.tick()),
                              r && clearInterval(r),
                              (r = void 0));
                        };
                      (i.on("destroy", function () {
                        "undefined" != typeof document &&
                          (document.removeEventListener(
                            "visibilitychange",
                            a,
                            !1,
                          ),
                          document.removeEventListener(
                            "mozvisibilitychange",
                            a,
                            !1,
                          ),
                          document.removeEventListener(
                            "msvisibilitychange",
                            a,
                            !1,
                          ),
                          document.removeEventListener(
                            "webkitvisibilitychange",
                            a,
                            !1,
                          ));
                      }),
                        (n.prototype.isHidden = function () {
                          return !1;
                        }),
                        (n.prototype.onVisibilityChange = function () {}),
                        "undefined" != typeof document &&
                          (void 0 !== document.hidden
                            ? ((o = "hidden"),
                              document.addEventListener(
                                "visibilitychange",
                                a,
                                !1,
                              ))
                            : void 0 !== document.mozHidden
                              ? ((o = "mozHidden"),
                                document.addEventListener(
                                  "mozvisibilitychange",
                                  a,
                                  !1,
                                ))
                              : void 0 !== document.msHidden
                                ? ((o = "msHidden"),
                                  document.addEventListener(
                                    "msvisibilitychange",
                                    a,
                                    !1,
                                  ))
                                : void 0 !== document.webkitHidden &&
                                  (console.warn("webkitHidden"),
                                  (o = "webkitHidden"),
                                  document.addEventListener(
                                    "webkitvisibilitychange",
                                    a,
                                    !1,
                                  ))));
                    };
                },
              },
            ]),
            t && y(e.prototype, t),
            n && y(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, n;
        })();
        function m(e) {
          return (
            (m =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            m(e)
          );
        }
        function b(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, w(i.key), i));
          }
        }
        function w(e) {
          var t = (function (e, t) {
            if ("object" != m(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || "default");
              if ("object" != m(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == m(t) ? t : t + "";
        }
        var k = (function () {
          return (
            (e = function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.parent = t),
                (this.params = n),
                (this.type = "log"),
                (this.isVerboseLoggingEnabled = !1),
                (this.isForced = !1),
                (this.prefix = "GameInterface"),
                (this.scopes = {
                  "[ads]": { name: "ADS", color: "#3b88c3" },
                  "[analytics]": { name: "ANALYTICS", color: "#9b59b6" },
                  "[storage]": { name: "STORAGE", color: "#03fc2c" },
                  "[gameStates]": { name: "GAMESTATES", color: "#f1c40f" },
                  "[intern]": { name: "INTERN", color: "#253342" },
                  "[console]": { name: "CONSOLE", color: "#F07857" },
                  "[mock]": { name: "MOCK", color: "#32a0a8" },
                  "[leaderboard]": { name: "LDRBRD", color: "#544680" },
                  "[game]": { name: "GAME", color: "#2ecc71" },
                  "[scoring]": { name: "SCORING", color: "#581845" },
                }));
            }),
            (t = [
              {
                key: "init",
                value: function () {
                  var e, t, n, i, s, o, r, a, l;
                  return (
                    (this.isVerboseLoggingEnabled =
                      void 0 !==
                      (null === (e = this.params) || void 0 === e
                        ? void 0
                        : e.isVerboseLoggingEnabled)
                        ? null === (t = this.params) || void 0 === t
                          ? void 0
                          : t.isVerboseLoggingEnabled
                        : void 0 !==
                            (null === (n = this.parent.settings) ||
                            void 0 === n ||
                            null === (i = n.console) ||
                            void 0 === i
                              ? void 0
                              : i.isVerboseLoggingEnabled)
                          ? null === (s = this.parent.settings) ||
                            void 0 === s ||
                            null === (o = s.console) ||
                            void 0 === o
                            ? void 0
                            : o.isVerboseLoggingEnabled
                          : this.isVerboseLoggingEnabled),
                    (this.prefix =
                      (null === (r = this.params) || void 0 === r
                        ? void 0
                        : r.prefix) ||
                      (null === (a = this.parent.settings) ||
                      void 0 === a ||
                      null === (l = a.console) ||
                      void 0 === l
                        ? void 0
                        : l.prefix) ||
                      this.prefix),
                    this.parent.console.log("[console] init..."),
                    new Promise(function (e) {
                      e();
                    })
                  );
                },
              },
              {
                key: "log",
                value: function () {
                  return (
                    (this.type = "log"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "debug",
                value: function () {
                  return (
                    (this.type = "debug"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "warn",
                value: function () {
                  return (
                    (this.type = "warn"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "info",
                value: function () {
                  return (
                    (this.type = "info"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "error",
                value: function () {
                  return (
                    (this.type = "error"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "table",
                value: function () {
                  return (
                    (this.type = "table"),
                    (this.isForced = !1),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "force",
                value: function () {
                  return (
                    (this.type = "log"),
                    (this.isForced = !0),
                    this.print.apply(this, arguments)
                  );
                },
              },
              {
                key: "print",
                value: function () {
                  var e;
                  if (
                    this.isForced ||
                    this.isVerboseLoggingEnabled ||
                    !0 === window.isVerboseLoggingEnabled
                  ) {
                    for (
                      var t = arguments.length, n = new Array(t), i = 0;
                      i < t;
                      i++
                    )
                      n[i] = arguments[i];
                    var s = n[0].split(" ")[0];
                    (s in this.scopes
                      ? ((n[0] = n[0].replace(s + " ", "")),
                        (n[0] = n[0].replace(s, "")),
                        (n[0] =
                          "%c"
                            .concat(this.prefix, "%c %c")
                            .concat(this.scopes[s].name, "%c ") + n[0]),
                        n.splice(
                          1,
                          0,
                          "display: inline-block; color: #fff; background: #e74c3c; padding: 1px 4px; border-radius: 3px;",
                        ),
                        n.splice(2, 0, ""),
                        n.splice(
                          3,
                          0,
                          "display: inline-block; color: #fff; background: " +
                            this.scopes[s].color +
                            "; padding: 1px 4px; border-radius: 3px;",
                        ),
                        n.splice(4, 0, ""))
                      : ((n[0] = "%c".concat(this.prefix, "%c ") + n[0]),
                        n.splice(
                          1,
                          0,
                          "display: inline-block; color: #fff; background: #e74c3c; padding: 1px 4px; border-radius: 3px;",
                        ),
                        n.splice(2, 0, "")),
                      (e = console)[this.type].apply(e, n));
                  }
                },
              },
            ]),
            t && b(e.prototype, t),
            n && b(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, n;
        })();
        function A(e) {
          return (
            (A =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            A(e)
          );
        }
        function S(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, P(i.key), i));
          }
        }
        function P(e) {
          var t = (function (e, t) {
            if ("object" != A(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || "default");
              if ("object" != A(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == A(t) ? t : t + "";
        }
        var I = (function () {
          return (
            (e = function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.parent = t),
                (this.params = n),
                (this.savegame = {}),
                (this.key = "savegame"),
                (this.prefix = ""),
                (this.timeout = null),
                (this.hasChanged = !1),
                (this.isAutoSaving = !0),
                (this.delay = 0));
            }),
            (t = [
              {
                key: "init",
                value: function () {
                  var e,
                    t,
                    n,
                    i,
                    s,
                    o,
                    r,
                    a,
                    l,
                    u,
                    c,
                    d,
                    h,
                    f,
                    y,
                    p,
                    v,
                    g = this;
                  return (
                    (this.key =
                      (null === (e = this.params) || void 0 === e
                        ? void 0
                        : e.key) ||
                      (null === (t = this.parent.settings) ||
                      void 0 === t ||
                      null === (n = t.storage) ||
                      void 0 === n
                        ? void 0
                        : n.key) ||
                      this.key),
                    (this.prefix =
                      (null === (i = this.params) || void 0 === i
                        ? void 0
                        : i.prefix) ||
                      (null === (s = this.parent.settings) ||
                      void 0 === s ||
                      null === (o = s.storage) ||
                      void 0 === o
                        ? void 0
                        : o.prefix) ||
                      (null === (r = this.parent.settings) || void 0 === r
                        ? void 0
                        : r.GAME_ID) ||
                      this.prefix),
                    (this.delay =
                      null !==
                        (a =
                          null !==
                            (l =
                              null === (u = this.params) || void 0 === u
                                ? void 0
                                : u.delay) && void 0 !== l
                            ? l
                            : null === (c = this.parent.settings) ||
                                void 0 === c ||
                                null === (d = c.storage) ||
                                void 0 === d
                              ? void 0
                              : d.delay) && void 0 !== a
                        ? a
                        : this.delay),
                    (this.isAutoSaving =
                      null !==
                        (h =
                          null !==
                            (f =
                              null === (y = this.params) || void 0 === y
                                ? void 0
                                : y.isAutoSaving) && void 0 !== f
                            ? f
                            : null === (p = this.parent.settings) ||
                                void 0 === p ||
                                null === (v = p.storage) ||
                                void 0 === v
                              ? void 0
                              : v.isAutoSaving) && void 0 !== h
                        ? h
                        : this.isAutoSaving),
                    this.prefix.length &&
                      !this.prefix.endsWith(":") &&
                      (this.prefix += ":"),
                    this.parent.console.log(
                      "[storage] init... (prefix: '%s', key: '%s', delay: %s, isAutoSaving: %s)",
                      this.prefix,
                      this.key,
                      this.delay,
                      this.isAutoSaving,
                    ),
                    this.isAutoSaving &&
                      (document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (g.parent.console.debug(
                              "[storage] forced saving (triggered by 'visibilitychange' event)",
                            ),
                            g.save(!0));
                        },
                      ),
                      window.addEventListener("beforeunload", function (e) {
                        (g.parent.console.debug(
                          "[storage] forced saving (triggered by 'beforeunload' event)",
                        ),
                          g.save(!0));
                      })),
                    new Promise(function (e) {
                      g.parent._storage
                        .getItem(g.prefix + g.key)
                        .then(function (t) {
                          try {
                            (g.parent.console.debug(
                              "[storage] retrieving data...",
                              t,
                            ),
                              (g.savegame = JSON.parse(t) || {}),
                              g.parent.console.debug(
                                "[storage] data parsed!",
                                g.savegame,
                              ));
                          } catch (e) {
                            (g.parent.console.error(
                              "[storage] retrieving/parsing data failed...",
                              e,
                            ),
                              (g.savegame = {}));
                          }
                          e();
                        });
                    })
                  );
                },
              },
              {
                key: "setItem",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  (!0 !==
                    (arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      arguments[3]) &&
                    this.parent.isPreview &&
                    this.parent.console.force("[storage] setItem('%s')", e),
                    (this.savegame[e] = t),
                    (this.hasChanged = !0),
                    this.save(n));
                },
              },
              {
                key: "getItem",
                value: function (e) {
                  return (
                    !0 !==
                      (arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1]) &&
                      this.parent.isPreview &&
                      this.parent.console.force("[storage] getItem('%s')", e),
                    void 0 !== this.savegame[e] ? this.savegame[e] : null
                  );
                },
              },
              {
                key: "removeItem",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  (delete this.savegame[e],
                    (this.hasChanged = !0),
                    this.save(t));
                },
              },
              {
                key: "clear",
                value: function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  ((this.savegame = {}), (this.hasChanged = !0), this.save(e));
                },
              },
              {
                key: "save",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  (this.hasChanged || !0 === t) &&
                    (!0 !== t
                      ? this.isAutoSaving &&
                        !this.timeout &&
                        (this.timeout = setTimeout(function () {
                          ((e.timeout = null), e._save());
                        }, this.delay))
                      : this._save());
                },
              },
              {
                key: "_save",
                value: function () {
                  var e = JSON.stringify(this.savegame);
                  (this.parent.console.debug(
                    "[storage] saving data to '%s'...",
                    this.prefix + this.key,
                    e,
                  ),
                    this.parent._storage.setItem(this.prefix + this.key, e),
                    (this.hasChanged = !1));
                },
              },
            ]),
            t && S(e.prototype, t),
            n && S(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, n;
        })();
        function E(e) {
          return (
            (E =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            E(e)
          );
        }
        function O(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, R(i.key), i));
          }
        }
        function R(e) {
          var t = (function (e, t) {
            if ("object" != E(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || "default");
              if ("object" != E(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == E(t) ? t : t + "";
        }
        var G = (function () {
          return (
            (e = function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.parent = t),
                (this.params = n),
                (this.muted = !1),
                (this.paused = !1),
                (this._muted = !1),
                (this._paused = !1),
                (this.isGameplay = !1),
                (this.isGameplayStarted = !1),
                (this.isGameplayStopped = !1),
                (this.callbacks = {
                  onAudioStateChange: null,
                  onPauseStateChange: null,
                  onMuteStateChange: null,
                  onGoToHome: null,
                  onGoToNextLevel: null,
                  onGoToLevel: null,
                  onRestartGame: null,
                  onQuitGame: null,
                  onGameplayStart: null,
                  onGameplayStop: null,
                  onResize: null,
                }),
                (this.isLandscape = window.innerWidth > window.innerHeight),
                (this.resizeTimeout = null));
            }),
            (t = [
              {
                key: "init",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    (e.parent.console.log("[gameStates] init..."),
                      (!0 === e.parent.settings.isMuted ||
                        ["1", "true"].includes(e.parent.settings.isMuted)) &&
                        (e.parent.console.log(
                          "[gameStates] forcing initial muting...",
                        ),
                        (e.muted = e._muted = !0)),
                      t());
                  });
                },
              },
              {
                key: "startGameplay",
                value: function () {
                  (arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0] &&
                    (this.isGameplay = !0),
                    this.isGameplay &&
                      !this.isGameplayStarted &&
                      ((this.isGameplayStarted = !0),
                      (this.isGameplayStopped = !1),
                      this.parent.console.log("[gameStates] startGameplay"),
                      "function" == typeof this.callbacks.onGameplayStart &&
                        this.callbacks.onGameplayStart()));
                },
              },
              {
                key: "stopGameplay",
                value: function () {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  (this.isGameplay &&
                    !this.isGameplayStopped &&
                    ((this.isGameplayStopped = !0),
                    (this.isGameplayStarted = !1),
                    this.parent.console.log("[gameStates] stopGameplay"),
                    "function" == typeof this.callbacks.onGameplayStop &&
                      this.callbacks.onGameplayStop()),
                    e && (this.isGameplay = !1));
                },
              },
              {
                key: "mute",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  (this.parent.console.log(
                    "[gameStates] %s%s...",
                    e ? "muting" : "unmuting",
                    t ? " (triggered by ad)" : "",
                  ),
                    this.parent.console.debug(
                      "[gameStates] mute()",
                      e,
                      this.muted,
                      this._muted,
                    ));
                  var n = this.muted;
                  (t
                    ? (e = this.muted = e || this._muted)
                    : (this._muted = this.muted = e),
                    this.muted !== n &&
                      "function" == typeof this.callbacks.onAudioStateChange &&
                      this.callbacks.onAudioStateChange(e),
                    this.muted !== n &&
                      "function" == typeof this.callbacks.onMuteStateChange &&
                      this.callbacks.onMuteStateChange(e));
                },
              },
              {
                key: "pause",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  this.parent.console.log(
                    "[gameStates] %s%s...",
                    e ? "pausing" : "resuming",
                    t ? " (triggered by ad)" : "",
                  );
                  var n = this.paused;
                  (t
                    ? (e = this.paused = e || this._paused)
                    : (this._paused = this.paused = e),
                    this.paused !== n &&
                      "function" == typeof this.callbacks.onPauseStateChange &&
                      this.callbacks.onPauseStateChange(e));
                },
              },
              {
                key: "onPauseStateChange",
                value: function (e) {
                  this.callbacks.onPauseStateChange = e;
                },
              },
              {
                key: "onAudioStateChange",
                value: function (e) {
                  this.callbacks.onAudioStateChange = e;
                },
              },
              {
                key: "onMuteStateChange",
                value: function (e) {
                  this.callbacks.onMuteStateChange = e;
                },
              },
              {
                key: "onGoToHome",
                value: function (e) {
                  this.callbacks.onGoToHome = e;
                },
              },
              {
                key: "onGoToNextLevel",
                value: function (e) {
                  this.callbacks.onGoToNextLevel = e;
                },
              },
              {
                key: "onGoToLevel",
                value: function (e) {
                  this.callbacks.onGoToLevel = e;
                },
              },
              {
                key: "onRestartGame",
                value: function (e) {
                  this.callbacks.onRestartGame = e;
                },
              },
              {
                key: "onQuitGame",
                value: function (e) {
                  this.callbacks.onQuitGame = e;
                },
              },
              {
                key: "goToHome",
                value: function () {
                  "function" == typeof this.callbacks.onGoToHome &&
                    this.callbacks.onGoToHome();
                },
              },
              {
                key: "goToNextLevel",
                value: function () {
                  "function" == typeof this.callbacks.onGoToNextLevel &&
                    this.callbacks.onGoToNextLevel();
                },
              },
              {
                key: "goToLevel",
                value: function (e) {
                  "function" == typeof this.callbacks.onGoToLevel &&
                    this.callbacks.onGoToLevel(e);
                },
              },
              {
                key: "restartGame",
                value: function () {
                  "function" == typeof this.callbacks.onRestartGame &&
                    this.callbacks.onRestartGame();
                },
              },
              {
                key: "quitGame",
                value: function () {
                  "function" == typeof this.callbacks.onQuitGame &&
                    this.callbacks.onQuitGame();
                },
              },
              {
                key: "isMuted",
                value: function () {
                  return this.muted;
                },
              },
              {
                key: "isPaused",
                value: function () {
                  return this.paused;
                },
              },
              {
                key: "onGameplayStart",
                value: function (e) {
                  this.callbacks.onGameplayStart = e;
                },
              },
              {
                key: "onGameplayStop",
                value: function (e) {
                  this.callbacks.onGameplayStop = e;
                },
              },
              {
                key: "onResize",
                value: function (e) {
                  this.callbacks.onResize = e;
                },
              },
            ]),
            t && O(e.prototype, t),
            n && O(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, n;
        })();
        function L(e) {
          return (
            (L =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            L(e)
          );
        }
        function C(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, T(i.key), i));
          }
        }
        function T(e) {
          var t = (function (e, t) {
            if ("object" != L(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || "default");
              if ("object" != L(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == L(t) ? t : t + "";
        }
        var j = (function () {
          return (
            (e = function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.parent = t),
                (this.params = n),
                (this.scores = { current: {}, best: {} }),
                (this.isAutoSaving = !1),
                (this.key = "scoring"));
            }),
            (t = [
              {
                key: "init",
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    var n, i, s, o, r, a, l, u, c;
                    ((e.key =
                      (null === (n = e.params) || void 0 === n
                        ? void 0
                        : n.key) ||
                      (null === (i = e.parent.settings) ||
                      void 0 === i ||
                      null === (s = i.scoring) ||
                      void 0 === s
                        ? void 0
                        : s.key) ||
                      e.key),
                      (e.isAutoSaving =
                        void 0 !==
                        (null === (o = e.params) || void 0 === o
                          ? void 0
                          : o.isAutoSaving)
                          ? null === (r = e.params) || void 0 === r
                            ? void 0
                            : r.isAutoSaving
                          : void 0 !==
                              (null === (a = e.parent.settings) ||
                              void 0 === a ||
                              null === (l = a.scoring) ||
                              void 0 === l
                                ? void 0
                                : l.isAutoSaving)
                            ? null === (u = e.parent.settings) ||
                              void 0 === u ||
                              null === (c = u.scoring) ||
                              void 0 === c
                              ? void 0
                              : c.isAutoSaving
                            : e.isAutoSaving),
                      e.parent.console.log(
                        "[scoring] init... (key: '%s', isAutoSaving: %s)",
                        e.key,
                        e.isAutoSaving ? "true" : "false",
                      ));
                    try {
                      e.parent.console.debug("[scoring] retrieving scores...");
                      var d = e.parent.storage.getItem(e.key, !0) || "{}";
                      ((e.scores.best = JSON.parse(d)),
                        e.parent.console.debug(
                          "[scoring] scores parsed!",
                          e.scores,
                        ));
                    } catch (t) {
                      (e.parent.console.error(
                        "[scoring] retrieving/parsing scores failed...",
                        t,
                      ),
                        (e.scores.best = {}));
                    }
                    t();
                  });
                },
              },
              {
                key: "set",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  (Number.isInteger(t) || (t = "endless"),
                    (this.scores.current = this.scores.current || {}),
                    (this.scores.best = this.scores.best || {}),
                    (this.scores.current[t] = e),
                    (this.scores.best[t] = this.scores.best[t] || 0),
                    e > this.scores.best[t] &&
                      ((this.scores.best[t] = e),
                      (!0 === n || this.isAutoSaving) && this.save()));
                },
              },
              {
                key: "get",
                value: function (e) {
                  return (
                    Number.isInteger(e) || (e = "endless"),
                    (this.scores.current = this.scores.current || {}),
                    (this.scores.best = this.scores.best || {}),
                    e in this.scores.current || (this.scores.current[e] = 0),
                    e in this.scores.best || (this.scores.best[e] = 0),
                    {
                      current: this.scores.current[e],
                      best: this.scores.best[e],
                    }
                  );
                },
              },
              {
                key: "save",
                value: function () {
                  var e = JSON.stringify(this.scores.best);
                  (this.parent.console.log(
                    "[scoring] saving '%s'...",
                    this.key,
                    e,
                  ),
                    this.parent.storage.setItem(this.key, e, !1, !0));
                },
              },
              {
                key: "reset",
                value: function () {
                  ((this.scores.current = {}),
                    (this.scores.best = {}),
                    this.save());
                },
              },
            ]),
            t && C(e.prototype, t),
            n && C(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, n;
        })();
        function D(e) {
          return (
            (D =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            D(e)
          );
        }
        function _(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, N(i.key), i));
          }
        }
        function x(e, t, n) {
          return (
            (t = N(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function N(e) {
          var t = (function (e, t) {
            if ("object" != D(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || "default");
              if ("object" != D(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == D(t) ? t : t + "";
        }
        var M = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              x(this, "_storage", {
                setItem: function (e, t) {
                  return Promise.resolve(window.localStorage.setItem(e, t));
                },
                getItem: function (e) {
                  return Promise.resolve(window.localStorage.getItem(e));
                },
              }),
              (this.gameFiles = t),
              (this.params = n),
              (this.settings = {
                gameID: null,
                locale: "en",
                files: [],
                features: {
                  audio: !0,
                  pause: !0,
                  score: !0,
                  progress: !0,
                  copyright: !0,
                  credits: !0,
                  version: !0,
                  rewarded: !0,
                  tutorial: !0,
                  visibilitychange: !0,
                },
                ads: {
                  types: {
                    initial: {
                      enabled: !1,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                    },
                    interstitial: {
                      enabled: !0,
                      cooldown: 60,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                    },
                    rewarded: {
                      enabled: !0,
                      preload: 500,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                      reward: !0,
                    },
                    banner: {
                      enabled: !1,
                      preload: 250,
                      retry: 2e3,
                      timeout: 250,
                      state: 0,
                    },
                  },
                },
                gameanalytics: {
                  isEnabled: !1,
                  url: "//download.gameanalytics.com/js/GameAnalytics-4.4.5.min.js",
                  build: "",
                  game_key: "",
                  secret_key: "",
                  setEnabledInfoLog: !0,
                  setEnabledEventSubmission: !0,
                },
                console: { isVerboseLoggingEnabled: !1 },
                storage: { key: "savegame", prefix: "" },
              }));
          }
          return (
            (t = e),
            (n = [
              {
                key: "init",
                value: function () {
                  var t = this;
                  return (
                    (this.console = new k(this)),
                    (this.ads = new r(this)),
                    (this.gameAnalytics = new c(this)),
                    (this.helpers = new g(this)),
                    (this.storage = new I(this)),
                    (this.gameStates = new G(this)),
                    (this.scoring = new j(this)),
                    this.console.log("[intern] init..."),
                    new Promise(function (n) {
                      t.helpers.updateSettings(t.settings).then(function (i) {
                        ((t.settings = i),
                          t.console.init().then(function () {
                            t.helpers
                              .loadFiles(t.settings.files || [])
                              .then(function () {
                                t._initSDK()
                                  .then(function () {
                                    t.ads.init().then(function () {
                                      t.storage.init().then(function () {
                                        t.scoring.init().then(function () {
                                          t.gameAnalytics
                                            .init()
                                            .then(function () {
                                              t.gameStates
                                                .init()
                                                .then(function () {
                                                  t.helpers
                                                    .loadFiles(t.gameFiles)
                                                    .then(function () {
                                                      (console.log(
                                                        "%cPortalIF: %c"
                                                          .concat(
                                                            t.constructor
                                                              .version,
                                                            " %c| MainGameIF: %c",
                                                          )
                                                          .concat(
                                                            e.version,
                                                            " %c| Game: %c",
                                                          )
                                                          .concat(
                                                            t.settings
                                                              .version || "n/a",
                                                          ),
                                                        "color: #3498db; font-weight: bold;",
                                                        "color: #2ecc71;",
                                                        "color: #95a5a6;",
                                                        "color: #e74c3c; font-weight: bold;",
                                                        "color: #f1c40f;",
                                                        "color: #9b59b6; font-weight: bold;",
                                                      ),
                                                        n());
                                                    });
                                                });
                                            });
                                        });
                                      });
                                    });
                                  })
                                  .catch(function (e) {
                                    t.console.error("[intern]", e);
                                  });
                              });
                          }));
                      });
                    })
                  );
                },
              },
              {
                key: "hasFeature",
                value: function (e) {
                  return !!this.settings.features[e];
                },
              },
              { key: "sendPreloadProgress", value: function (e) {} },
              {
                key: "gameReady",
                value: function () {
                  this.console.log("[game] gameReady()");
                },
              },
              {
                key: "gameStart",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return (
                    (this.gameStates.level = e),
                    this.console.log("[game] gameStart(%s)", e),
                    this.track("ga:progression", {
                      progressionStatus: "Start",
                      progression01: e,
                    }),
                    Promise.resolve()
                  );
                },
              },
              { key: "sendProgress", value: function (e) {} },
              {
                key: "sendScore",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  this.gameStates.score = e;
                },
              },
              {
                key: "gameComplete",
                value: function () {
                  return (
                    this.console.log("[game] gameComplete()"),
                    this.track("ga:progression", {
                      progressionStatus: "Complete",
                      progression01: this.gameStates.level,
                    }),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "gameOver",
                value: function () {
                  return (
                    this.console.log("[game] gameOver()"),
                    this.track("ga:progression", {
                      progressionStatus: "Fail",
                      progression01: this.gameStates.level,
                      progression02: "gameover",
                    }),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "gameQuit",
                value: function () {
                  return (
                    this.console.log("[game] gameQuit()"),
                    this.track("ga:progression", {
                      progressionStatus: "Fail",
                      progression01: this.gameStates.level,
                      progression02: "quit",
                    }),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "gamePause",
                value: function () {
                  return (
                    this.console.log("[game] gamePause()"),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "gameResume",
                value: function () {
                  return (
                    this.console.log("[game] gameResume()"),
                    Promise.resolve()
                  );
                },
              },
              {
                key: "onGoToHome",
                value: function (e) {
                  return this.gameStates.onGoToHome(e);
                },
              },
              {
                key: "onGoToNextLevel",
                value: function (e) {
                  return this.gameStates.onGoToNextLevel(e);
                },
              },
              {
                key: "onGoToLevel",
                value: function (e) {
                  return this.gameStates.onGoToLevel(e);
                },
              },
              {
                key: "onRestartGame",
                value: function (e) {
                  return this.gameStates.onRestartGame(e);
                },
              },
              {
                key: "onQuitGame",
                value: function (e) {
                  return this.gameStates.onQuitGame(e);
                },
              },
              {
                key: "onAudioStateChange",
                value: function (e) {
                  return this.gameStates.onAudioStateChange(e);
                },
              },
              {
                key: "onMuteStateChange",
                value: function (e) {
                  return this.gameStates.onMuteStateChange(e);
                },
              },
              {
                key: "isMuted",
                value: function () {
                  return this.gameStates.isMuted();
                },
              },
              {
                key: "onPauseStateChange",
                value: function (e) {
                  return this.gameStates.onPauseStateChange(e);
                },
              },
              {
                key: "isPaused",
                value: function () {
                  return this.gameStates.isPaused();
                },
              },
              {
                key: "isInterstitialAdAvailable",
                value: function (e) {
                  return this.ads.isInterstitialAdAvailable(e);
                },
              },
              {
                key: "showInterstitialAd",
                value: function (e, t) {
                  var n = this;
                  return new Promise(function (i) {
                    n._showInterstitialAd(e, t)
                      .then(function () {
                        (n.console.debug(
                          "[ads] _showInterstitialAd('%s', '%s') %cresolved",
                          e,
                          t,
                          "color: green",
                        ),
                          n.ads.show("interstitial").then(function () {
                            i();
                          }));
                      })
                      .catch(function (s) {
                        (n.console.debug(
                          "[ads] _showInterstitialAd('%s', '%s') %crejected",
                          e,
                          t,
                          "color: red",
                        ),
                          i());
                      });
                  });
                },
              },
              {
                key: "hasRewardedAd",
                value: function (e) {
                  return this.ads.hasRewardedAd(e);
                },
              },
              {
                key: "hasInterstitialAd",
                value: function (e) {
                  return this.ads.hasInterstitialAd(e);
                },
              },
              {
                key: "isRewardedAdAvailable",
                value: function (e) {
                  return this.ads.isRewardedAdAvailable(e);
                },
              },
              {
                key: "showRewardedAd",
                value: function (e) {
                  var t = this;
                  return new Promise(function (n) {
                    t._showRewardedAd(e)
                      .then(function () {
                        (t.console.debug(
                          "[ads] _showRewardedAd('%s') %cresolved",
                          e,
                          "color: green",
                        ),
                          t.ads.show("rewarded").then(function (e) {
                            n(e);
                          }));
                      })
                      .catch(function (i) {
                        (t.console.debug(
                          "[ads] _showRewardedAd('%s') %crejected",
                          e,
                          "color: red",
                        ),
                          n());
                      });
                  });
                },
              },
              {
                key: "onRewardedAdAvailabilityChange",
                value: function (e) {
                  return this.ads.onRewardedAdAvailabilityChange(e);
                },
              },
              {
                key: "onInterstitialAdAvailabilityChange",
                value: function (e) {
                  return this.ads.onInterstitialAdAvailabilityChange(e);
                },
              },
              {
                key: "onOffsetChange",
                value: function (e) {
                  return this.ads.onOffsetChange(e);
                },
              },
              {
                key: "getOffsets",
                value: function () {
                  return this.ads.getOffsets();
                },
              },
              {
                key: "getCurrentLanguage",
                value: function () {
                  return this.helpers.getLocale();
                },
              },
              {
                key: "innerWidth",
                get: function () {
                  return this.ads.innerWidth;
                },
              },
              {
                key: "innerHeight",
                get: function () {
                  return this.ads.innerHeight;
                },
              },
              {
                key: "track",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  this.gameAnalytics.track(e, t);
                },
              },
              { key: "log", value: function () {} },
              {
                key: "_initSDK",
                value: function () {
                  return Promise.resolve();
                },
              },
              {
                key: "_preloadAd",
                value: function () {
                  return Promise.resolve();
                },
              },
              {
                key: "_hasRewardedAd",
                value: function (e) {
                  return !0;
                },
              },
              {
                key: "_hasInterstitialAd",
                value: function (e) {
                  return !0;
                },
              },
              {
                key: "_showInterstitialAd",
                value: function () {
                  return Promise.resolve();
                },
              },
              {
                key: "_showRewardedAd",
                value: function () {
                  return Promise.resolve();
                },
              },
              {
                key: "_showAd",
                value: function (e) {
                  return "rewarded" === e
                    ? Promise.resolve(!0)
                    : Promise.resolve();
                },
              },
              {
                key: "getCopyrightLogoURL",
                value: function (e, t) {
                  var n =
                    "copyright" +
                    ("light" ===
                    (t = ["dark", "light"].includes(t) ? t : "dark")
                      ? "/light"
                      : "");
                  return this.helpers.getImageURL(n, e, "logo.png");
                },
              },
              {
                key: "info",
                value: function () {
                  return { ads: this.ads.info };
                },
              },
            ]),
            n && _(t.prototype, n),
            i && _(t, i),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
          var t, n, i;
        })();
        x(M, "version", "1.9.0");
      },
      716: (e, t, n) => {
        n.d(t, { C: () => k });
        var i = n(748);
        function s(e) {
          return (
            (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            s(e)
          );
        }
        function o(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            (t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, i));
          }
          return n;
        }
        function r(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  l(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : o(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function a(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, u(i.key), i));
          }
        }
        function l(e, t, n) {
          return (
            (t = u(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function u(e) {
          var t = (function (e, t) {
            if ("object" != s(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || "default");
              if ("object" != s(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == s(t) ? t : t + "";
        }
        var c = (function () {
          return (
            (e = function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (!(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                l(this, "iap", {
                  parent: null,
                  purchaseAsync: function (e) {
                    return (
                      this.parent.console.log("[mock] iap.purchaseAsync()", e),
                      Promise.resolve()
                    );
                  },
                  consumeAsync: function (e) {
                    return (
                      this.parent.console.log("[mock] iap.consumeAsync()", e),
                      Promise.resolve()
                    );
                  },
                  getAddOnAsync: function (e) {
                    return (
                      this.parent.console.log("[mock] iap.getAddOnAsync()", e),
                      Promise.resolve()
                    );
                  },
                }),
                (this.parent = t),
                (this.params = n),
                this.parent.helpers
                  .loadFiles("//cdn.jsdelivr.net/npm/sweetalert2@11")
                  .then(function () {}),
                (this.ShareGameData = { title: "", text: "", image: "" }),
                (this.EntryPointInfo = {
                  entryPointId: "",
                  entryPointName: "",
                }),
                (this.PlayerInfo = { playerId: "" }),
                (this.LoadAdOptions = { isRewardedAd: !1, canBackfill: !1 }),
                (this.AdInstance = {
                  instanceId: "",
                  showAdsCompletedAsync: function () {
                    return Promise.resolve();
                  },
                }),
                (this.SwitchGameData = { id: "", payloadData: {} }),
                (this.iap.parent = this.parent),
                this.parent.console.info("[mock] $msstart mocked!"));
            }),
            (t = [
              {
                key: "isInMicrosoftStart",
                value: function () {
                  return !0;
                },
              },
              {
                key: "pingAsync",
                value: function () {
                  return Promise.resolve("");
                },
              },
              {
                key: "getEntryPointInfo",
                value: function () {
                  return this.EntryPointInfo;
                },
              },
              {
                key: "promptInstallAsync",
                value: function () {
                  return Promise.resolve("");
                },
              },
              {
                key: "getLocale",
                value: function () {
                  return "en-us";
                },
              },
              {
                key: "getSourceShareId",
                value: function () {
                  return "";
                },
              },
              {
                key: "getConsentStringAsync",
                value: function () {
                  return Promise.resolve("");
                },
              },
              {
                key: "signInAsync",
                value: function () {
                  return Promise.resolve(this.PlayerInfo);
                },
              },
              {
                key: "getSignedInUserAsync",
                value: function () {
                  return Promise.resolve(this.PlayerInfo);
                },
              },
              {
                key: "scheduleNotificationAsync",
                value: function () {
                  return Promise.resolve("");
                },
              },
              {
                key: "shareAsync",
                value: function (e) {
                  return Promise.resolve("");
                },
              },
              {
                key: "switchGameAsync",
                value: function (e) {
                  return (
                    (e = e || {}),
                    new Promise(function (t, n) {
                      var i = function () {
                        if (
                          !(arguments.length > 0 && void 0 !== arguments[0]) ||
                          arguments[0]
                        )
                          return t({});
                        n({
                          code: "SWITCH_GAME_DISMISSED",
                          description:
                            "The user dismissed the switch game prompt.",
                        });
                      };
                      if ("undefined" != typeof Swal)
                        return Swal.fire({
                          title:
                            "<strong>" +
                            ("string" == typeof e.id
                              ? e.id
                              : "Microsoft Casual Games") +
                            "</strong>",
                          html:
                            "string" == typeof e.id
                              ? "You may also enjoy this game. Would you like to switch to it?"
                              : "You may also enjoy our other games. Would you like to switch to our page?",
                          showDenyButton: !0,
                          confirmButtonText: "Switch",
                          denyButtonText: "Dismiss",
                          didDestroy: function () {
                            i();
                          },
                        }).then(function (e) {
                          i(e.isConfirmed || !1);
                        });
                      i(
                        confirm(
                          "[Microsoft Casual Games] You may also enjoy our other games. Would you like to switch to our page?",
                        ),
                      );
                    })
                  );
                },
              },
              {
                key: "switchGamePayload",
                value: function () {
                  console.warn("In development");
                },
              },
              {
                key: "submitGameResultsAsync",
                value: function (e) {
                  return Promise.resolve(!0);
                },
              },
              {
                key: "showDisplayAdsAsync",
                value: function (e) {
                  return Promise.resolve("");
                },
              },
              {
                key: "hideDisplayAdsAsync",
                value: function () {
                  return Promise.resolve("");
                },
              },
              {
                key: "loadAdsAsync",
                value: function (e) {
                  return (
                    this.parent.console.debug("[mock] loadAdsAsync", e),
                    new Promise(function (t, n) {
                      if (Math.random() > 0.3)
                        return t({
                          instanceId: Math.random()
                            .toString(36)
                            .replace(/[^a-z]+/g, "")
                            .substr(2, 10),
                          rewarded: !!e,
                          showAdsCompletedAsync: Promise.resolve(),
                        });
                      n({
                        code: "LOAD_ADS_CLIENT_FAILURE",
                        description: "Loading In-Game Ads Failed.",
                        extra: {
                          isRewardedAd: !!e,
                          canBackfill: !1,
                          error: e
                            ? "Ads is being loaded."
                            : "Ads already loaded.",
                        },
                      });
                    })
                  );
                },
              },
              {
                key: "showAdsAsync",
                value: function (e) {
                  var t = this;
                  return new Promise(function (n, i) {
                    return (t.parent.ads.adInstances.rewarded.instanceId ||
                      null) === e
                      ? t.parent.ads.testAd("rewarded").then(function (e) {
                          var s, o, a;
                          ((o =
                            !0 ===
                            (null == e || null === (s = e.args) || void 0 === s
                              ? void 0
                              : s.success)),
                            (a = r({}, t.parent.ads.adInstances.rewarded)),
                            (t.parent.ads.adInstances.rewarded = {}),
                            o
                              ? n(a)
                              : i({
                                  code: "SHOW_ADS_COMPLETED_FAILURE",
                                  description:
                                    "User closed rewarded ad before completion.",
                                  extra: {
                                    error:
                                      "No loaded ads with the given id found.",
                                  },
                                }));
                        })
                      : (t.parent.ads.adInstances.interstitial.instanceId ||
                            null) === e
                        ? t.parent.ads.testAd().then(function (e) {
                            var i;
                            ((i = r({}, t.parent.ads.adInstances.interstitial)),
                              (t.parent.ads.adInstances.interstitial = {}),
                              n(i));
                          })
                        : i({
                            code: "LOAD_ADS_CLIENT_FAILURE",
                            description: "Loading In-Game Ads Failed.",
                            extra: {
                              error: "No loaded ads with the given id found.",
                            },
                          });
                  });
                },
              },
              {
                key: "showAdsCompletedAsync",
                value: function (e) {
                  return Promise.resolve(e);
                },
              },
              {
                key: "notifyGameMuted",
                value: function () {
                  this.parent.console.log("[mock] notifyGameMuted()");
                },
              },
              {
                key: "notifyGameUnmuted",
                value: function () {
                  this.parent.console.log("[mock] notifyGameUnmuted()");
                },
              },
            ]),
            t && a(e.prototype, t),
            n && a(e, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
          var e, t, n;
        })();
        function d(e) {
          return (
            (d =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            d(e)
          );
        }
        function h(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, g(i.key), i));
          }
        }
        function f(e, t, n) {
          return (
            (t = p(t)),
            (function (e, t) {
              if (t && ("object" == d(t) || "function" == typeof t)) return t;
              if (void 0 !== t)
                throw new TypeError(
                  "Derived constructors may only return object or undefined",
                );
              return (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return e;
              })(e);
            })(
              e,
              y()
                ? Reflect.construct(t, n || [], p(e).constructor)
                : t.apply(e, n),
            )
          );
        }
        function y() {
          try {
            var e = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (e) {}
          return (y = function () {
            return !!e;
          })();
        }
        function p(e) {
          return (
            (p = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            p(e)
          );
        }
        function v(e, t) {
          return (
            (v = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return ((e.__proto__ = t), e);
                }),
            v(e, t)
          );
        }
        function g(e) {
          var t = (function (e, t) {
            if ("object" != d(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var i = n.call(e, t || "default");
              if ("object" != d(i)) return i;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == d(t) ? t : t + "";
        }
        var m,
          b,
          w,
          k = (function (e) {
            function t() {
              var e,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t),
                ((e = f(this, t, [n, i])).settings.console =
                  e.settings.console || {}),
                (e.settings.console.isVerboseLoggingEnabled = !1),
                (e.settings.features = e.settings.features || {}),
                (e.settings.features.version = !1),
                (e.settings.ads = e.settings.ads || {}),
                (e.settings.ads.types = e.settings.ads.types || {}),
                (e.settings.ads.types.interstitial =
                  e.settings.ads.types.interstitial || {}),
                (e.settings.ads.types.interstitial.cooldown = 60),
                (e.settings.ads.types.interstitial.last = Date.now()),
                e
              );
            }
            return (
              (function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                ((e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  t && v(e, t));
              })(t, e),
              (n = t),
              (i = [
                {
                  key: "_initSDK",
                  value: function () {
                    var e = this;
                    return new Promise(function (t, n) {
                      e.helpers
                        .loadFiles([
                          "msstart-v1.0.0-rc.19.min.js",
                          "migrateStorage.js?v=" + e.helpers.getCacheKey(),
                        ])
                        .then(function () {
                          ((e.ads.adInstances = {
                            interstitial: null,
                            rewarded: null,
                          }),
                            (e.ads.isLocked = !0),
                            (e.gameStates.score = 0),
                            ["1", "true"].includes(e.settings.mock) &&
                              (window.$msstart = new c(e)));
                          var n = setInterval(function () {
                            (e.console.info("[intern] waiting for $msstart..."),
                              "undefined" != typeof $msstart &&
                                "undefined" != typeof migrateStorage &&
                                (clearInterval(n),
                                e.console.info(
                                  "[intern] $msstart available! isInMicrosoftStart(): %s",
                                  $msstart.isInMicrosoftStart()
                                    ? "true"
                                    : "false",
                                ),
                                migrateStorage()
                                  .then(t)
                                  .catch(function (e) {
                                    t();
                                  })));
                          }, 250);
                        });
                    });
                  },
                },
                {
                  key: "_preloadAd",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "interstitial";
                    return new Promise(function (n, i) {
                      return $msstart.isInMicrosoftStart()
                        ? "interstitial" === t
                          ? $msstart
                              .loadAdsAsync()
                              .then(function (i) {
                                (e.console.log(
                                  "[ads] interstitial:adInstance",
                                  i,
                                ),
                                  (e.ads.adInstances[t] = i),
                                  n());
                              })
                              .catch(function (t) {
                                (e.console.error(
                                  "[ads] interstitial:loadAdsAsync",
                                  t,
                                ),
                                  "LOAD_ADS_CLIENT_FAILURE" === t.code &&
                                  t.extra &&
                                  "Ads already loaded." === t.extra.error
                                    ? n()
                                    : i());
                              })
                          : "rewarded" === t
                            ? $msstart
                                .loadAdsAsync(!0)
                                .then(function (i) {
                                  (e.console.log(
                                    "[ads] rewarded:adInstance",
                                    i,
                                  ),
                                    (e.ads.adInstances[t] = i),
                                    n());
                                })
                                .catch(function (t) {
                                  (e.console.error(
                                    "[ads] interstitial:loadAdsAsync",
                                    t,
                                  ),
                                    "LOAD_ADS_CLIENT_FAILURE" === t.code &&
                                    t.extra &&
                                    "Ads already loaded." === t.extra.error
                                      ? n()
                                      : i());
                                })
                            : void n()
                        : ((e.ads.types[t].attempts = 1),
                          e.console.warn(
                            "[ads] $msstart.isInMicrosoftStart() returned 'false': preloading paused!",
                          ),
                          i());
                    });
                  },
                },
                {
                  key: "_showInterstitialAd",
                  value: function (e, t) {
                    return !0 === this.ads.isLocked
                      ? (this.console.debug(
                          "[intern] interstitial ads locked!",
                        ),
                        Promise.reject())
                      : Promise.resolve();
                  },
                },
                {
                  key: "_showRewardedAd",
                  value: function (e) {
                    return Promise.resolve();
                  },
                },
                {
                  key: "_showAd",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "interstitial";
                    return new Promise(function (n, i) {
                      return $msstart.isInMicrosoftStart()
                        ? "interstitial" === t
                          ? (e.console.debug(
                              "[ads] interstitial:showAdsAsync",
                              e.ads.adInstances[t].instanceId,
                            ),
                            $msstart
                              .showAdsAsync(e.ads.adInstances[t].instanceId)
                              .then(function (t) {
                                t.showAdsCompletedAsync
                                  .then(function () {
                                    n();
                                  })
                                  .catch(function (t) {
                                    (e.console.error(
                                      "[ads] showAdsCompletedAsync",
                                      t,
                                    ),
                                      n());
                                  });
                              })
                              .catch(function (t) {
                                (e.console.error("[ads] showAdsAsync", t), n());
                              }))
                          : "rewarded" === t
                            ? (e.console.debug(
                                "[ads] rewarded:showAdsAsync",
                                e.ads.adInstances[t].instanceId,
                              ),
                              $msstart
                                .showAdsAsync(e.ads.adInstances[t].instanceId)
                                .then(function (t) {
                                  t.showAdsCompletedAsync
                                    .then(function () {
                                      n(!0);
                                    })
                                    .catch(function (t) {
                                      (e.console.error(
                                        "[ads] showAdsCompletedAsync",
                                        t,
                                      ),
                                        n(!1));
                                    });
                                })
                                .catch(function (t) {
                                  (e.console.error("[ads] showAdsAsync", t),
                                    n(!1));
                                }))
                            : void n()
                        : (e.console.warn(
                            "[ads] $msstart.isInMicrosoftStart() returned 'false': showAd skipped!",
                          ),
                          i());
                    });
                  },
                },
                { key: "gameReady", value: function () {} },
                {
                  key: "sendScore",
                  value: function (e) {
                    this.gameStates.score = e;
                  },
                },
                {
                  key: "gameComplete",
                  value: function () {
                    var e = this;
                    return new Promise(function (t) {
                      ((e.ads.isLocked = !1), e.submitGameResultsAsync(), t());
                    });
                  },
                },
                {
                  key: "gameOver",
                  value: function () {
                    return (
                      (this.ads.isLocked = !1),
                      this.submitGameResultsAsync(),
                      Promise.resolve()
                    );
                  },
                },
                {
                  key: "gameQuit",
                  value: function () {
                    return (
                      (this.ads.isLocked = !1),
                      this.submitGameResultsAsync(),
                      Promise.resolve()
                    );
                  },
                },
                {
                  key: "submitGameResultsAsync",
                  value: function () {
                    var e = this,
                      t = this.gameStates.score;
                    if (Number.isInteger(t) && !(t <= 0))
                      return $msstart
                        .submitGameResultsAsync(t)
                        .then(function (n) {
                          n &&
                            e.console.info(
                              "[intern] score %s submitted successfully!",
                              t,
                            );
                        })
                        .catch(function (n) {
                          e.console.error(
                            "[intern] submitGameResultsAsync(%s)",
                            t,
                            n,
                          );
                        });
                  },
                },
              ]),
              i && h(n.prototype, i),
              s && h(n, s),
              Object.defineProperty(n, "prototype", { writable: !1 }),
              n
            );
            var n, i, s;
          })(i.m);
        ((m = k),
          (w = "1.0.6"),
          (b = g((b = "version"))) in m
            ? Object.defineProperty(m, b, {
                value: w,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (m[b] = w));
      },
    },
    t = {};
  function n(i) {
    var s = t[i];
    if (void 0 !== s) return s.exports;
    var o = (t[i] = { exports: {} });
    return (e[i](o, o.exports, n), o.exports);
  }
  ((n.d = (e, t) => {
    for (var i in t)
      n.o(t, i) &&
        !n.o(e, i) &&
        Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)));
  var i;
  n(748);
  ((i = n(716).C),
    (window.GameInterface = {
      init: function (e, t) {
        return new Promise(function (n) {
          ((window.GameInterface = new i(e, t)),
            window.GameInterface.init().then(function () {
              n();
            }));
        });
      },
    }));
})();
