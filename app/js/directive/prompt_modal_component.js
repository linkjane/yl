angular.module('routerApp')
    .component('promptModal', {
        templateUrl: '../components/model/prompt_modal.html',
        controller: promptModalCtrl,
        bindings: {
            id: '@pmid',
            message: '<',
        }
    });

function promptModalCtrl() {

}