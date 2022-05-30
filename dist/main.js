var $kmlXY$jquery = require("jquery");
var $kmlXY$ethers = require("ethers");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

var /**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */ $25ca25a01869a4ab$export$2e2bcd8739ae039 = (str)=>`${str.charAt(0).toLowerCase()}${str.replace(/[\W_]/g, "|").split("|").map((part)=>`${part.charAt(0).toUpperCase()}${part.slice(1)}`).join("").slice(1)}`;


/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */ class $e0feaa0b459d85a8$var$Router {
    /**
   * Create a new Router
   * @param {Object} routes
   */ constructor(routes){
        this.routes = routes;
    }
    /**
   * Fire Router events
   * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
   * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
   * @param {string} [arg] Any custom argument to be passed to the event.
   */ fire(route, event = "init", arg) {
        document.dispatchEvent(new CustomEvent("routed", {
            bubbles: true,
            detail: {
                route: route,
                fn: event
            }
        }));
        const fire = route !== "" && this.routes[route] && typeof this.routes[route][event] === "function";
        if (fire) this.routes[route][event](arg);
    }
    /**
   * Automatically load and fire Router events
   *
   * Events are fired in the following order:
   *  * common init
   *  * page-specific init
   *  * page-specific finalize
   *  * common finalize
   */ loadEvents() {
        // Fire common init JS
        this.fire("common"); // Fire page-specific init JS, and then finalize JS
        document.location.pathname.replace("/webflow/", "") // remove for proxy server
        // document.body.className
        .toLowerCase().replace(/-/g, "_").split(/\s+/) // .map(camelCase)
        .forEach((className)=>{
            console.log(className);
            this.fire(className);
            this.fire(className, "finalize");
        }); // Fire common finalize JS
        this.fire("common", "finalize");
    }
}
var $e0feaa0b459d85a8$export$2e2bcd8739ae039 = $e0feaa0b459d85a8$var$Router;


var $27b22993631c5303$export$2e2bcd8739ae039 = {
    init () {},
    finalize () {}
};



class $34f5a28c4d82e13b$var$SteppedForm {
    constructor(screens){
        this.screens = screens;
        this.handlers = [];
    }
    init() {
        $(`${this.screens.join(",")}`).hide(); // attached listens
        this.setStep(0);
    }
    hideStep(step) {
        $(`${this.screens[step]}`).hide();
    }
    setStep(screenNumber) {
        this.step = screenNumber;
        $(this.screens[screenNumber]).show();
        this.initHandler(screenNumber);
    }
    goToNextStep() {
        this.hideStep(this.step);
        this.setStep(this.step + 1);
    }
    goToPreviousStep() {
        this.hideStep(this.step);
        this.setStep(this.step - 1);
    }
    initHandler(step) {
        if (typeof this.handlers[step] == "function") this.handlers[step]();
    }
    addHandlers(step, func) {
        this.handlers[step] = func;
    }
}
var $34f5a28c4d82e13b$export$2e2bcd8739ae039 = $34f5a28c4d82e13b$var$SteppedForm;


var $6a1ea1583bdff0e4$exports = {};
$6a1ea1583bdff0e4$exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');


var $f6d935393cca4637$export$2e2bcd8739ae039 = {
    init () {
        console.log("Exchange page");
        const sdk = new window.FlexConnect("flex-xyz", {
            env: "development"
        });
        window.sdk = sdk; // Exchange
        const screens1 = [
            ".exchange-connect-wallet",
            ".exchange-wallet-connected",
            ".exchange-waiting-for-wallet",
            ".exchange-mining-transaction",
            ".exchange-transaction-successfull"
        ];
        class Exchange extends (0, $34f5a28c4d82e13b$export$2e2bcd8739ae039) {
            constructor(screens){
                super(screens);
                this.handlers = [];
            }
        }
        const ex = new Exchange(screens1);
        ex.addHandlers(0, ()=>{
            // handler for connect wallet
            console.log("handler for connect wallet");
            $(".login").on("click", async ()=>{
                try {
                    // const url = await sdk.auth.login();
                    const provider = await sdk.web3Modal().connect();
                    ex.provider = provider;
                    ex.ethers = new (0, $kmlXY$ethers.ethers).providers.Web3Provider(ex.provider);
                    ex.state = {
                        account: await ex.ethers.getSigner().getAddress()
                    };
                    ex.goToNextStep();
                } catch (e) {
                    console.error(e);
                }
            });
        });
        ex.addHandlers(1, ()=>{
            // handler for connect wallet
            console.log(".exchange-wallet-connected", ex); // data
            $(".wallet-connect---button .text-block-2").html(ex.state?.account); // address button
            // bind
            $("#email-form").submit(function(event) {
                event.preventDefault();
                return false;
            }); // on topup game wallet
            $(".exchange---form input[value='Top Up']").on("click", async ()=>{
                console.log("ddemodmo");
                const send_token_amount = $("#email-form input[type='number']").val();
                console.log("send_token_amount", send_token_amount); // const send_token_amount = "0.05";
                const to_address = "0x1f2Ad5182b2F2398643b1Aa9187185d223905A0d";
                const contract_address = "0xb625bD4B866DA272f8D3d0827E101dFcDd198667"; // const currentGasPrice = ex.ethers.getGasPrice();
                // const gas_price = ethers.utils.hexlify(parseInt(currentGasPrice));
                // console.log(`gas_price: ${gas_price}`);
                // general token send
                let contract = new (0, $kmlXY$ethers.ethers).Contract(contract_address, (0, (/*@__PURE__*/$parcel$interopDefault($6a1ea1583bdff0e4$exports))), ex.ethers.getSigner()); // How many tokens?
                let numberOfTokens = (0, $kmlXY$ethers.ethers).utils.parseUnits(send_token_amount, 18);
                console.log(`numberOfTokens: ${numberOfTokens}`); // Send tokens
                contract.transfer(to_address, numberOfTokens).then((transferResult)=>{
                    console.dir(transferResult);
                    alert("sent token");
                });
            }); // on disconnect
            $(".wallet-connect .text---small").on("click", async ()=>{
                // disconnect wallet
                await sdk.web3Modal().clearCachedProvider();
                ex.goToPreviousStep();
            }); // discount button
        });
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


/** Populate Router instance with DOM routes */ const $89e00d958f6c7b59$var$routes = new (0, $e0feaa0b459d85a8$export$2e2bcd8739ae039)({
    common: // All pages
    $27b22993631c5303$export$2e2bcd8739ae039,
    exchange: // Home page
    $f6d935393cca4637$export$2e2bcd8739ae039
}); // Load Events
(0, ($parcel$interopDefault($kmlXY$jquery)))(document).ready(()=>$89e00d958f6c7b59$var$routes.loadEvents());


//# sourceMappingURL=main.js.map
