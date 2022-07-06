var $jczNP$jquery = require("jquery");
var $jczNP$swchelperslib_class_call_checkjs = require("@swc/helpers/lib/_class_call_check.js");
var $jczNP$swchelperslib_create_classjs = require("@swc/helpers/lib/_create_class.js");
var $jczNP$swchelperslib_async_to_generatorjs = require("@swc/helpers/lib/_async_to_generator.js");
var $jczNP$swchelperslib_inheritsjs = require("@swc/helpers/lib/_inherits.js");
var $jczNP$swchelperslib_create_superjs = require("@swc/helpers/lib/_create_super.js");
var $jczNP$regeneratorruntime = require("regenerator-runtime");
var $jczNP$ethers = require("ethers");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



var /**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */ $566749d5dbad7bba$export$2e2bcd8739ae039 = function(str) {
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
 */ var $08c2c54937623424$var$Router = /*#__PURE__*/ function() {
    "use strict";
    function Router(routes) {
        (0, ($parcel$interopDefault($jczNP$swchelperslib_class_call_checkjs)))(this, Router);
        this.routes = routes;
    }
    (0, ($parcel$interopDefault($jczNP$swchelperslib_create_classjs)))(Router, [
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
                this.fire("common"); // Fire page-specific init JS, and then finalize JS
                document.location.pathname.replace("/webflow/", "").replace("/", "") // remove for proxy server
                // document.body.className
                .toLowerCase().replace(/-/g, "_").split(/\s+/) // .map(camelCase)
                .forEach(function(className) {
                    console.log(className);
                    _this.fire(className);
                    _this.fire(className, "finalize");
                }); // Fire common finalize JS
                this.fire("common", "finalize");
            }
        }
    ]);
    return Router;
}();
var $08c2c54937623424$export$2e2bcd8739ae039 = $08c2c54937623424$var$Router;


var $19b8f7b3a8443d39$export$2e2bcd8739ae039 = {
    init: function() {},
    finalize: function() {}
};










var $eaf7e6bc0a214987$var$SteppedForm = /*#__PURE__*/ function() {
    "use strict";
    function SteppedForm(screens) {
        (0, ($parcel$interopDefault($jczNP$swchelperslib_class_call_checkjs)))(this, SteppedForm);
        this.screens = screens;
        this.handlers = [];
    }
    (0, ($parcel$interopDefault($jczNP$swchelperslib_create_classjs)))(SteppedForm, [
        {
            key: "init",
            value: function init() {
                $("".concat(this.screens.join(","))).hide();
                $(".step-title").hide(); // attached listens
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
var $eaf7e6bc0a214987$export$2e2bcd8739ae039 = $eaf7e6bc0a214987$var$SteppedForm;


var $2a47c65b10640bef$exports = {};
$2a47c65b10640bef$exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');


function $89748dfdce2d7bc9$var$truncate(fullStr) {
    var strLen = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 8, separator = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "...", frontChars = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 3, backChars = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 4;
    if (fullStr.length <= strLen) return fullStr;
    return fullStr.substr(0, frontChars) + separator + fullStr.substr(fullStr.length - backChars);
}
var $89748dfdce2d7bc9$export$2e2bcd8739ae039 = {
    init: function() {
        console.log("Exchange page");
        var sdk = new window.FlexConnect("flex-xyz", {
            env: "development"
        });
        sdk.init();
        window.sdk = sdk; // Exchange
        var screens1 = [
            ".exchange-connect-wallet",
            ".exchange-wallet-connected",
            ".exchange-waiting-for-wallet",
            ".exchange-mining-transaction",
            ".exchange-transaction-successfull"
        ];
        var Exchange1 = /*#__PURE__*/ function(SteppedForm1) {
            "use strict";
            (0, ($parcel$interopDefault($jczNP$swchelperslib_inheritsjs)))(Exchange, SteppedForm1);
            var _super = (0, ($parcel$interopDefault($jczNP$swchelperslib_create_superjs)))(Exchange);
            function Exchange(screens) {
                (0, ($parcel$interopDefault($jczNP$swchelperslib_class_call_checkjs)))(this, Exchange);
                var _this;
                _this = _super.call(this, screens);
                _this.handlers = [];
                return _this;
            }
            return Exchange;
        }((0, $eaf7e6bc0a214987$export$2e2bcd8739ae039));
        var ex = new Exchange1(screens1);
        ex.addHandlers(0, function() {
            // handler for connect wallet
            console.log("handler for connect wallet");
            $(".login").on("click", (0, ($parcel$interopDefault($jczNP$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($jczNP$regeneratorruntime))).mark(function _callee() {
                var provider;
                return (0, ($parcel$interopDefault($jczNP$regeneratorruntime))).wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            _ctx.prev = 0;
                            _ctx.next = 3;
                            return sdk.web3().modal.connect();
                        case 3:
                            provider = _ctx.sent;
                            ex.provider = provider;
                            console.log("ex.provider ", ex.provider);
                            ex.ethers = new (0, $jczNP$ethers.ethers).providers.Web3Provider(ex.provider);
                            _ctx.next = 9;
                            return ex.ethers.getSigner().getAddress();
                        case 9:
                            _ctx.t0 = _ctx.sent;
                            ex.state = {
                                account: _ctx.t0
                            };
                            ex.goToNextStep();
                            _ctx.next = 17;
                            break;
                        case 14:
                            _ctx.prev = 14;
                            _ctx.t1 = _ctx["catch"](0);
                            console.error(_ctx.t1);
                        case 17:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee, null, [
                    [
                        0,
                        14
                    ]
                ]);
            })));
        });
        ex.addHandlers(1, function() {
            var ref;
            // handler for connect wallet
            console.log(".exchange-wallet-connected", ex); // data
            $(".wallet-connect---button .text-block-2").html($89748dfdce2d7bc9$var$truncate((ref = ex.state) === null || ref === void 0 ? void 0 : ref.account)); // address button
            // bind
            $("#email-form").submit(function(event) {
                event.preventDefault();
                return false;
            }); // on topup game wallet
            $(".exchange---form input[value='Top Up']").on("click", (0, ($parcel$interopDefault($jczNP$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($jczNP$regeneratorruntime))).mark(function _callee() {
                var send_token_amount, to_address, contract_address, contract, numberOfTokens, transferResult;
                return (0, ($parcel$interopDefault($jczNP$regeneratorruntime))).wrap(function _callee$(_ctx) {
                    while(1)switch(_ctx.prev = _ctx.next){
                        case 0:
                            send_token_amount = $("#email-form input[type='number']").val();
                            console.log("send_token_amount", send_token_amount);
                            ex.state.send_token_amount = send_token_amount; // const send_token_amount = "0.05";
                            to_address = "0x1f2Ad5182b2F2398643b1Aa9187185d223905A0d";
                            contract_address = "0xb625bD4B866DA272f8D3d0827E101dFcDd198667"; // const currentGasPrice = ex.ethers.getGasPrice();
                            contract = new (0, $jczNP$ethers.ethers).Contract(contract_address, (0, (/*@__PURE__*/$parcel$interopDefault($2a47c65b10640bef$exports))), ex.ethers.getSigner()); // How many tokens?
                            numberOfTokens = (0, $jczNP$ethers.ethers).utils.parseUnits(send_token_amount, 18);
                            console.log("numberOfTokens: ".concat(numberOfTokens));
                            _ctx.prev = 8;
                            // open waiting for wallet
                            ex.goToNextStep(); // Send tokens
                            _ctx.next = 12;
                            return contract.transfer(to_address, numberOfTokens);
                        case 12:
                            transferResult = _ctx.sent;
                            ex.state.transaction = transferResult; // mining transaction waiting for wallet
                            ex.goToNextStep();
                            _ctx.next = 21;
                            break;
                        case 17:
                            _ctx.prev = 17;
                            _ctx.t0 = _ctx["catch"](8);
                            console.error(_ctx.t0);
                            ex.goToPreviousStep();
                        case 21:
                        case "end":
                            return _ctx.stop();
                    }
                }, _callee, null, [
                    [
                        8,
                        17
                    ]
                ]);
            }))); // on disconnect
            $(".wallet-connect .text---small").on("click", (0, ($parcel$interopDefault($jczNP$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($jczNP$regeneratorruntime))).mark(function _callee() {
                return (0, ($parcel$interopDefault($jczNP$regeneratorruntime))).wrap(function _callee$(_ctx) {
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
        ex.addHandlers(3, (0, ($parcel$interopDefault($jczNP$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($jczNP$regeneratorruntime))).mark(function _callee() {
            var ref, ref1, ref2, ref3, ref4, ref5, receipt;
            return (0, ($parcel$interopDefault($jczNP$regeneratorruntime))).wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        ;
                        //  data hash
                        $(".exchange-mining-transaction .link---small").html($89748dfdce2d7bc9$var$truncate((ref = ex.state) === null || ref === void 0 ? void 0 : (ref1 = ref.transaction) === null || ref1 === void 0 ? void 0 : ref1.hash)).attr("href", "https://rinkeby.etherscan.io/tx/".concat((ref2 = ex.state) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.transaction) === null || ref3 === void 0 ? void 0 : ref3.hash)).attr("target", "_blank"); // address button
                        _ctx.prev = 2;
                        ;
                        _ctx.next = 6;
                        return (ref4 = ex.state) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.transaction) === null || ref5 === void 0 ? void 0 : ref5.wait();
                    case 6:
                        receipt = _ctx.sent;
                        console.log("receipt", receipt);
                        ex.goToNextStep();
                        _ctx.next = 15;
                        break;
                    case 11:
                        _ctx.prev = 11;
                        _ctx.t0 = _ctx["catch"](2);
                        console.error(_ctx.t0);
                        ex.goToPreviousStep();
                    case 15:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee, null, [
                [
                    2,
                    11
                ]
            ]);
        })));
        ex.addHandlers(4, (0, ($parcel$interopDefault($jczNP$swchelperslib_async_to_generatorjs)))((0, ($parcel$interopDefault($jczNP$regeneratorruntime))).mark(function _callee() {
            var ref, ref6, ref7, ref8;
            return (0, ($parcel$interopDefault($jczNP$regeneratorruntime))).wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        ;
                        //  data hash
                        $(".exchange-transaction-successfull .link---small .link---small").html($89748dfdce2d7bc9$var$truncate((ref = ex.state) === null || ref === void 0 ? void 0 : (ref6 = ref.transaction) === null || ref6 === void 0 ? void 0 : ref6.hash)).attr("href", "https://rinkeby.etherscan.io/tx/".concat((ref7 = ex.state) === null || ref7 === void 0 ? void 0 : (ref8 = ref7.transaction) === null || ref8 === void 0 ? void 0 : ref8.hash)).attr("target", "_blank"); // address button
                        $(".exchange-transaction-successfull .w-button").on("click", function(e) {
                            e.preventDefault();
                            location.reload();
                        }); // $(".exchange-transaction-successfull").html(ex.state.send_token_amount);
                    case 3:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        })));
        ex.init();
        console.log(ex); // // must init the package
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


/** Populate Router instance with DOM routes */ var $b805db72ceeb7d45$var$routes = new (0, $08c2c54937623424$export$2e2bcd8739ae039)({
    // All pages
    common: (0, $19b8f7b3a8443d39$export$2e2bcd8739ae039),
    // Home page
    exchange: (0, $89748dfdce2d7bc9$export$2e2bcd8739ae039)
}); // Load Events
(0, ($parcel$interopDefault($jczNP$jquery)))(document).ready(function() {
    return $b805db72ceeb7d45$var$routes.loadEvents();
});


//# sourceMappingURL=main.js.map
