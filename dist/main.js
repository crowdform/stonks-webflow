require("jquery");
var $ibzUb$swchelperslib_class_call_checkjs = require("@swc/helpers/lib/_class_call_check.js");
var $ibzUb$swchelperslib_create_classjs = require("@swc/helpers/lib/_create_class.js");
var $ibzUb$swchelperslib_async_to_generatorjs = require("@swc/helpers/lib/_async_to_generator.js");
var $ibzUb$swchelperslib_inheritsjs = require("@swc/helpers/lib/_inherits.js");
var $ibzUb$swchelperslib_create_superjs = require("@swc/helpers/lib/_create_super.js");
var $ibzUb$regeneratorruntime = require("regenerator-runtime");
var $ibzUb$ethers = require("ethers");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



var /**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */ $8459d0188da8f78b$export$2e2bcd8739ae039 = function(str) {
    return "".concat(str.charAt(0).toLowerCase()).concat(str.replace(/[\W_]/g, "|").split("|").map(function(part) {
        return "".concat(part.charAt(0).toUpperCase()).concat(part.slice(1));
    }).join("").slice(1));
};


/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */ var $a51683145d388625$var$Router = /*#__PURE__*/ function() {
    "use strict";
    function Router(routes) {
        (0, ($parcel$interopDefault($ibzUb$swchelperslib_class_call_checkjs)))(this, Router);
        this.routes = routes;
    }
    (0, ($parcel$interopDefault($ibzUb$swchelperslib_create_classjs)))(Router, [
        {
            /**
   * Fire Router events
   * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
   * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
   * @param {string} [arg] Any custom argument to be passed to the event.
   */ key: "fire",
            value: function fire(route) {
                var event = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "init", arg = arguments.length > 2 ? arguments[2] : void 0;
                document.dispatchEvent(new CustomEvent("routed", {
                    bubbles: true,
                    detail: {
                        route: route,
                        fn: event
                    }
                }));
                var fire1 = route !== "" && this.routes[route] && typeof this.routes[route][event] === "function";
                if (fire1) this.routes[route][event](arg);
            }
        },
        {
            /**
   * Automatically load and fire Router events
   *
   * Events are fired in the following order:
   *  * common init
   *  * page-specific init
   *  * page-specific finalize
   *  * common finalize
   */ key: "loadEvents",
            value: function loadEvents() {
                var _this = this;
                // Fire common init JS
                this.fire("common");
                // Fire page-specific init JS, and then finalize JS
                document.location.pathname.replace("/webflow/", "") // remove for proxy server
                // document.body.className
                .toLowerCase().replace(/-/g, "_").split(/\s+/)// .map(camelCase)
                .forEach(function(className) {
                    console.log(className);
                    _this.fire(className);
                    _this.fire(className, "finalize");
                });
                // Fire common finalize JS
                this.fire("common", "finalize");
            }
        }
    ]);
    return Router;
}();
var $a51683145d388625$export$2e2bcd8739ae039 = $a51683145d388625$var$Router;


var $137d24ed57e88209$export$2e2bcd8739ae039 = {
    init: function() {
    // JavaScript to be fired on all pages
    },
    finalize: function() {
    // JavaScript to be fired on all pages, after page specific JS is fired
    }
};










var $3d8782475f5a8c5d$var$SteppedForm = /*#__PURE__*/ function() {
    "use strict";
    function SteppedForm(screens) {
        (0, ($parcel$interopDefault($ibzUb$swchelperslib_class_call_checkjs)))(this, SteppedForm);
        this.screens = screens;
        this.handlers = [];
    }
    (0, ($parcel$interopDefault($ibzUb$swchelperslib_create_classjs)))(SteppedForm, [
        {
            key: "init",
            value: function init() {
                $("".concat(this.screens.join(","))).hide();
                // attached listens
                this.setStep(0);
            }
        },
        {
            key: "hideStep",
            value: function hideStep(step) {
                $("".concat(this.screens[step])).hide();
            }
        },
        {
            key: "setStep",
            value: function setStep(screenNumber) {
                this.step = screenNumber;
                $(this.screens[screenNumber]).show();
                this.initHandler(screenNumber);
            }
        },
        {
            key: "goToNextStep",
            value: function goToNextStep() {
                this.hideStep(this.step);
                this.setStep(this.step + 1);
            }
        },
        {
            key: "goToPreviousStep",
            value: function goToPreviousStep() {
                this.hideStep(this.step);
                this.setStep(this.step - 1);
            }
        },
        {
            key: "initHandler",
            value: function initHandler(step) {
                if (typeof this.handlers[step] == "function") this.handlers[step]();
            }
        },
        {
            key: "addHandlers",
            value: function addHandlers(step, func) {
                this.handlers[step] = func;
            }
        }
    ]);
    return SteppedForm;
}();
var $3d8782475f5a8c5d$export$2e2bcd8739ae039 = $3d8782475f5a8c5d$var$SteppedForm;


var $44dbe34ca1125d49$exports = {};
$44dbe34ca1125d49$exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');


var $211070c77c6a9cde$export$2e2bcd8739ae039 = {
    init: function() {
        console.log("Exchange page");
        var sdk = new window.FlexConnect("flex-xyz", {
            env: "development"
        });
        window.sdk = sdk;
        // Exchange
        var screens1 = [
            ".exchange-connect-wallet",
            ".exchange-wallet-connected",
            ".exchange-waiting-for-wallet",
            ".exchange-mining-transaction",
            ".exchange-transaction-successfull", 
        ];
        var Exchange1 = /*#__PURE__*/ function(SteppedForm1) {
            "use strict";
            (0, ($parcel$interopDefault($ibzUb$swchelperslib_inheritsjs)))(Exchange, SteppedForm1);
            var _super = (0, ($parcel$interopDefault($ibzUb$swchelperslib_create_superjs)))(Exchange);
            function Exchange(screens) {
                (0, ($parcel$interopDefault($ibzUb$swchelperslib_class_call_checkjs)))(this, Exchange);
                var _this;
                _this = _super.call(this, screens);
                _this.handlers = [];
                return _this;
            }
            return Exchange;
        }((0, $3d8782475f5a8c5d$export$2e2bcd8739ae039));
        var ex = new Exchange1(screens1);
        ex.addHandlers(0, function() {
            // handler for connect wallet
            console.log("handler for connect wallet");
            $(".login").on("click", (0, ($parcel$interopDefault($ibzUb$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($ibzUb$regeneratorruntime))).mark(function _callee() {
                var provider;
                return (0, ($parcel$interopDefault($ibzUb$regeneratorruntime))).wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            _ctx.prev = 0;
                            _ctx.next = 3;
                            return sdk.web3Modal().connect();
                        case 3:
                            provider = _ctx.sent;
                            ex.provider = provider;
                            ex.ethers = new (0, $ibzUb$ethers.ethers).providers.Web3Provider(ex.provider);
                            _ctx.next = 8;
                            return ex.ethers.getSigner().getAddress();
                        case 8:
                            _ctx.t0 = _ctx.sent;
                            ex.state = {
                                account: _ctx.t0
                            };
                            ex.goToNextStep();
                            _ctx.next = 16;
                            break;
                        case 13:
                            _ctx.prev = 13;
                            _ctx.t1 = _ctx["catch"](0);
                            console.error(_ctx.t1);
                        case 16:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee, null, [
                    [
                        0,
                        13
                    ]
                ]);
            })));
        });
        ex.addHandlers(1, function() {
            var ref;
            // handler for connect wallet
            console.log(".exchange-wallet-connected", ex);
            // data
            $(".wallet-connect---button .text-block-2").html((ref = ex.state) === null || ref === void 0 ? void 0 : ref.account); // address button
            // bind
            $("#email-form").submit(function(event) {
                event.preventDefault();
                return false;
            });
            // on topup game wallet
            $(".exchange---form input[value='Top Up']").on("click", (0, ($parcel$interopDefault($ibzUb$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($ibzUb$regeneratorruntime))).mark(function _callee() {
                var send_token_amount, to_address, contract_address, contract, numberOfTokens;
                return (0, ($parcel$interopDefault($ibzUb$regeneratorruntime))).wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            console.log("ddemodmo");
                            send_token_amount = $("#email-form input[type='number']").val();
                            console.log("send_token_amount", send_token_amount);
                            to_address = "0x1f2Ad5182b2F2398643b1Aa9187185d223905A0d";
                            contract_address = "0xb625bD4B866DA272f8D3d0827E101dFcDd198667";
                            contract = new (0, $ibzUb$ethers.ethers).Contract(contract_address, (0, (/*@__PURE__*/$parcel$interopDefault($44dbe34ca1125d49$exports))), ex.ethers.getSigner());
                            numberOfTokens = (0, $ibzUb$ethers.ethers).utils.parseUnits(send_token_amount, 18);
                            console.log("numberOfTokens: ".concat(numberOfTokens));
                            // Send tokens
                            contract.transfer(to_address, numberOfTokens).then(function(transferResult) {
                                console.dir(transferResult);
                                alert("sent token");
                            });
                        case 9:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            })));
            // on disconnect
            $(".wallet-connect .text---small").on("click", (0, ($parcel$interopDefault($ibzUb$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($ibzUb$regeneratorruntime))).mark(function _callee() {
                return (0, ($parcel$interopDefault($ibzUb$regeneratorruntime))).wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            _ctx.next = 2;
                            return sdk.web3Modal().clearCachedProvider();
                        case 2:
                            ex.goToPreviousStep();
                        case 3:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee);
            }))); // discount button
        });
        ex.init();
        console.log(ex);
    // // must init the package
    // sdk.init();
    // // create button with class .login
    // $(".login").on("click", async () => {
    //   try {
    //     const url = await sdk.auth.login();
    //   } catch (e) {
    //     console.error(e);
    //   }
    // });
    // // create button with class .logout
    // $(".logout").on("click", async () => {
    //   try {
    //     const url = await sdk.auth.logout();
    //   } catch (e) {
    //     console.error(e);
    //   }
    // });
    // // add a <div class="profile"></div>
    // document.addEventListener("onAuthSuccess", (event) => {
    //   console.log("user is logged in", event.detail.user);
    //   // do something with user data
    //   const profile = JSON.stringify(event.detail.user, null, 2);
    //   $(".profile").text(profile);
    //   $(".login").hide();
    // });
    }
};


/** Populate Router instance with DOM routes */ var $f92bb0ee751616dc$var$routes = new (0, $a51683145d388625$export$2e2bcd8739ae039)({
    // All pages
    common: (0, $137d24ed57e88209$export$2e2bcd8739ae039),
    // Home page
    exchange: (0, $211070c77c6a9cde$export$2e2bcd8739ae039)
});
// Load Events
jQuery(document).ready(function() {
    return $f92bb0ee751616dc$var$routes.loadEvents();
});


//# sourceMappingURL=main.js.map
