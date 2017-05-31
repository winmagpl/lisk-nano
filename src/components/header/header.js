import './header.less';

/**
 * The main header component
 *
 * @module app
 * @submodule header
 */
app.component('header', {
  template: require('./header.pug')(),
  controllerAs: '$ctrl',

  /**
   * The main header component constructor class
   *
   * @class header
   * @constructor
   */
  controller: class header {
    constructor($rootScope, Account, signVerify, wallet, $timeout) {
      this.$rootScope = $rootScope;
      this.account = Account;
      this.signVerify = signVerify;
      this.wallet = wallet;

      $timeout(() => {
        this.wallet.openManageWalletDialog();
      }, 1000);
    }
  },
});

