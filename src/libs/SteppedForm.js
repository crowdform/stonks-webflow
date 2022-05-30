class SteppedForm {
  constructor(screens) {
    this.screens = screens;
    this.handlers = [];
  }
  init() {
    $(`${this.screens.join(",")}`).hide();

    $(".step-title").hide();

    // attached listens
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
    if (typeof this.handlers[step] == "function") {
      this.handlers[step]();
    }
  }

  addHandlers(step, func) {
    this.handlers[step] = func;
  }
}

export default SteppedForm;
