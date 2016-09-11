angular.module('routerApp')
    .component('diagnosticModal', {

        templateUrl: './template/content_modal/diagnostic.modal.html',
        controller: diagnosticModaCtrl,
        controllerAs: 'dm',
        bindings: {
            hash: '<',
            type: '<',
            message: '<',
            curId: '<', /*当前item的id*/
            items: '<',/*我的目的只是给个类型名:)*/
            editModal: '<',
            onClickHandle: '&'
        },
    }
    );

// diagnosticModaCtrl.$inject = []
function diagnosticModaCtrl() {
    this.$onInit = function () {
        /*默认都禁止添加框*/
        this.itemNameDisabled = true;
        this.soundName = '';
        this.soundInstruction = '';
    }
    this.$onChanges = function (cur, pre, isfirst) {
        if (this.type == 'add') {
            /*添加框*/
            this.soundName = '';
            this.soundInstruction = '';
        } else if (this.type == 'edit') {
            /*修改框*/
            this.itemNameDisabled = true;
            this.soundName = this.editModal.soundName;
            this.soundInstruction = this.editModal.soundInstruction;
        }

    }

}
