import { ethers } from "ethers";

import SteppedForm from "../libs/SteppedForm";
import ERC20Interface from "../contracts/ERC20.json";

export default {
  init() {
    console.log("Exchange page");

    const sdk = new window.FlexConnect("flex-xyz", {
      env: "development",
    });

    window.sdk = sdk;

    // Exchange
    const screens = [
      ".exchange-connect-wallet",
      ".exchange-wallet-connected",
      ".exchange-waiting-for-wallet",
      ".exchange-mining-transaction",
      ".exchange-transaction-successfull",
    ];

    class Exchange extends SteppedForm {
      constructor(screens) {
        super(screens);
        this.handlers = [];
      }
    }

    const ex = new Exchange(screens);

    ex.addHandlers(0, () => {
      // handler for connect wallet
      console.log("handler for connect wallet");

      $(".login").on("click", async () => {
        try {
          // const url = await sdk.auth.login();
          const provider = await sdk.web3Modal().connect();
          ex.provider = provider;
          ex.ethers = new ethers.providers.Web3Provider(ex.provider);
          ex.state = {
            account: await ex.ethers.getSigner().getAddress(),
          };
          ex.goToNextStep();
        } catch (e) {
          console.error(e);
        }
      });
    });

    ex.addHandlers(1, () => {
      // handler for connect wallet
      console.log(".exchange-wallet-connected", ex);

      // data
      $(".wallet-connect---button .text-block-2").html(ex.state?.account); // address button

      // bind
      $("#email-form").submit(function (event) {
        event.preventDefault();
        return false;
      });

      // on topup game wallet
      $(".exchange---form input[value='Top Up']").on("click", async () => {
        console.log("ddemodmo");

        const send_token_amount = $("#email-form input[type='number']").val();
        console.log("send_token_amount", send_token_amount);
        // const send_token_amount = "0.05";
        const to_address = "0x1f2Ad5182b2F2398643b1Aa9187185d223905A0d";
        const contract_address = "0xb625bD4B866DA272f8D3d0827E101dFcDd198667";

        // const currentGasPrice = ex.ethers.getGasPrice();
        // const gas_price = ethers.utils.hexlify(parseInt(currentGasPrice));
        // console.log(`gas_price: ${gas_price}`);

        // general token send
        let contract = new ethers.Contract(
          contract_address,
          ERC20Interface,
          ex.ethers.getSigner()
        );

        // How many tokens?
        let numberOfTokens = ethers.utils.parseUnits(send_token_amount, 18);
        console.log(`numberOfTokens: ${numberOfTokens}`);

        // Send tokens
        contract.transfer(to_address, numberOfTokens).then((transferResult) => {
          console.dir(transferResult);
          alert("sent token");
        });
      });

      // on disconnect
      $(".wallet-connect .text---small").on("click", async () => {
        // disconnect wallet
        await sdk.web3Modal().clearCachedProvider();
        ex.goToPreviousStep();
      }); // discount button
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
  },
};