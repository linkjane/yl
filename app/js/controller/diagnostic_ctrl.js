var routerApp = angular.module('routerApp');
routerApp.controller('diagnosticCtrl', ['$scope', '$timeout', function ($scope, $timeout) {


    var deleteModal = 'delete',
        addModal = 'add',
        editModal = 'edit';


    function promptMessage(message) {
        $scope.message = message;
        $('#promptModal').modal('show');
    }
    // 模仿 json 可以直接复制到


    var items = [
        {
            "id": 1,
            "itemName": "心音",
            "itemArray": [
                {
                    "soundName": '听诊点1',
                    "soundInstruction": "随意说说了1"
                },
                {
                    "soundName": '听诊点2',
                    "soundInstruction": "随意说说了2"
                },
                {
                    "soundName": '听诊点3',
                    "soundInstruction": "随意说说了3"
                }
            ]
        },
        {
            "id": 2,
            "itemName": "呼吸音",
            "itemArray": [
                {
                    "soundName": '听诊点11',
                    "soundInstruction": "随意说说了11"
                },
                {
                    "soundName": '听诊点22',
                    "soundInstruction": "随意说说了22"
                },
                {
                    "soundName": '听诊点33',
                    "soundInstruction": "随意说说了33"
                }
            ]
        }
    ]
    $scope.items = items;

    $scope.currentItem = items[0];

    $scope.currentItemIndex = 0;

    $scope.currentId = 1;

    /*默认弹出框是增加框*/
    $scope.modalType = addModal;

    /*显示隐藏后面的编辑和删除按钮*/
    $scope.itemClickHandle = function (e) {
        var currentTarget = e.currentTarget;
        $('.treeView ul ul li span:nth-of-type(2)').removeClass('show-inline').removeClass('hide-none');
        $('span:nth-of-type(2)', currentTarget).addClass('show-inline');
    }


    /*显示添加modal*/
    $scope.addClickHandle = function (e) {
        $scope.cTimestamp = new Date().getTime();
        $scope.modalType = addModal;
        $scope.currentId = this.item.id;
        $scope.currentItem = this.item;
        $('#diagnosticModal').modal('show');
    }


    /*显示编辑modal*/
    $scope.editClickHandle = function (e, index) {
        var item = this.$parent.item;
        $scope.currentId = item.id;
        $scope.modalType = editModal;
        $scope.editModal = {
            soundName: this.v.soundName,
            soundInstruction: this.v.soundInstruction
        };
        $scope.currentItem = item;
        $scope.currentItemIndex = index;
        $('#diagnosticModal').modal('show');

    }

    $scope.deleteClickHandle = function (e, index) {

        /*可以给后台发送 当前item 和 删除对象的数组下标*/
        $scope.modalType = deleteModal;
        $scope.deleteMessage = {
            title: '确认删除吗?'
        };
        $scope.currentItemIndex = index;
        $('#diagnosticModal').modal('show');

    }

    $scope.onClickHandle = function (soundName, soundInstruction, modalType) {
        /*隐藏modal 显示loading*/

        /*先判断是添加还是修改*/
        if (modalType == addModal) {
            /*添加*/
            /*发送http  应该只有soundName, soundInstruction, modalType(修改类型) currentItem.id(音源)*/
            if (false) {
                $scope.currentItem.itemArray.push({
                    soundName: soundName,
                    soundInstruction: soundInstruction
                });
                promptMessage({
                    title: '添加成功'
                });

            } else {
                promptMessage({
                    title: '添加失败'
                });
            }
        } else if (modalType == editModal){
            /*修改*/
            /*发送http请求接受promise对象*/
            if (true) {
                $scope.currentItem.itemArray[$scope.currentItemIndex] = {
                    soundName: soundName,
                    soundInstruction: soundInstruction
                };
                promptMessage({
                    title: '修改成功'
                });
            } else {
                promptMessage({
                    title: '修改失败'
                });
            }
        } else if (modalType == deleteModal) {
            /*如果修改成功*/
            if (true) {
                $scope.currentItem.itemArray.splice($scope.currentItemIndex, 1);
                promptMessage({
                    title: '删除成功'
                });
            }
            else {
                promptMessage({
                    title: '删除失败'
                });
            }

        }

    }



}])