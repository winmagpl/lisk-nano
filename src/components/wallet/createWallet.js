
app.component('createWallet', {
  template: require('./createWallet.pug')(),
  /**
   * The createWallet component constructor class
   *
   * @class createWallet
   * @constructor
   */
  controller: class createWallet {
    constructor($mdDialog, Account, dialog) {
      this.$mdDialog = $mdDialog;
      this.account = Account;
      this.dialog = dialog;
      this.storePassphrase = true;
      this.autologin = true;
    }

    cancel() {
      this.$mdDialog.hide();
    }

  },
});
