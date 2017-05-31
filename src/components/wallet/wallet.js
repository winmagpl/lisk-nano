app.component('wallet', {
  template: require('./wallet.pug')(),
  /**
   * The wallet component constructor class
   *
   * @class wallet
   * @constructor
   */
  controller: class wallet {
    constructor($mdDialog, Account, dialog) {
      this.$mdDialog = $mdDialog;
      this.account = Account;
      this.dialog = dialog;
      this.accounts = [
        this.account.get(),
        {
          address: '537318935439898807L',
          balance: 12000000000,
        },
      ];
    }

    cancel() {
      this.$mdDialog.hide();
    }

  },
});

