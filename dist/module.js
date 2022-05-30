import $gvVY1$jquery from "jquery";
import {ethers as $gvVY1$ethers} from "ethers";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

var /**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */ $a49114d3c59c4053$export$2e2bcd8739ae039 = (str)=>`${str.charAt(0).toLowerCase()}${str.replace(/[\W_]/g, "|").split("|").map((part)=>`${part.charAt(0).toUpperCase()}${part.slice(1)}`).join("").slice(1)}`;


/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */ class $e6f2ef58f16c7d90$var$Router {
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
    /**
   * Create a new Router
   * @param {Object} routes
   */ constructor(routes){
        this.routes = routes;
    }
}
var $e6f2ef58f16c7d90$export$2e2bcd8739ae039 = $e6f2ef58f16c7d90$var$Router;


var $0fe9acc165655fa0$export$2e2bcd8739ae039 = {
    init () {},
    finalize () {}
};



class $0e7fea930c5ffc0a$var$SteppedForm {
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
    constructor(screens){
        this.screens = screens;
        this.handlers = [];
    }
}
var $0e7fea930c5ffc0a$export$2e2bcd8739ae039 = $0e7fea930c5ffc0a$var$SteppedForm;


var $da3fa6d5a2fe70a7$exports = {};
$da3fa6d5a2fe70a7$exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');


var $6f21399e79cd7f21$export$2e2bcd8739ae039 = {
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
        class Exchange extends (0, $0e7fea930c5ffc0a$export$2e2bcd8739ae039) {
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
                    ex.ethers = new (0, $gvVY1$ethers).providers.Web3Provider(ex.provider);
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
                let contract = new (0, $gvVY1$ethers).Contract(contract_address, (0, (/*@__PURE__*/$parcel$interopDefault($da3fa6d5a2fe70a7$exports))), ex.ethers.getSigner()); // How many tokens?
                let numberOfTokens = (0, $gvVY1$ethers).utils.parseUnits(send_token_amount, 18);
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


/** Populate Router instance with DOM routes */ const $6309bd15878bcd6e$var$routes = new (0, $e6f2ef58f16c7d90$export$2e2bcd8739ae039)({
    common: // All pages
    $0fe9acc165655fa0$export$2e2bcd8739ae039,
    exchange: // Home page
    $6f21399e79cd7f21$export$2e2bcd8739ae039
}); // Load Events
(0, $gvVY1$jquery)(document).ready(()=>$6309bd15878bcd6e$var$routes.loadEvents());


//# sourceMappingURL=module.js.map
