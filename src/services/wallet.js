app.factory('wallet', function ($mdDialog, $mdMedia) {
  this.openCreateWalletDialog = () => $mdDialog.show({
    template:
          '<md-dialog flex="80" >' +
            '<create-wallet></create-wallet>' +
          '</md-dialog>',
    fullscreen: ($mdMedia('sm') || $mdMedia('xs')),
  });

  this.openManageWalletDialog = () => $mdDialog.show({
    template:
          '<md-dialog flex="80" >' +
            '<wallet></wallet>' +
          '</md-dialog>',
    fullscreen: ($mdMedia('sm') || $mdMedia('xs')),
  });

  return this;
});

