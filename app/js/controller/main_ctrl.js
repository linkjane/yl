/**
 * Created by Axiny on 2016/7/29.
 */
'use strict'//严格模式

angular.module('routerApp')
    .controller('mainCtrl',[
        '$scope',
        '$state',
        function($scope,$state){
            var dom_count = $('#count');
            var dom_count_list = $('#count_list');
            var dom_user = $('#user');
            var dom_user_list = $('#user_list');
            var dom_content = $('#content');
            var dom_content_list = $('#content_list');
            var dom_systemSetting = $('#systemSetting');
            var dom_sytemSetting_list = $('#systemSetting_list');

            dom_user.click(function(){
                dom_user_list.toggle(500);
            });

            dom_content.click(function(){
                dom_content_list.toggle(500);
            });

            dom_systemSetting.click(function(){
                dom_sytemSetting_list.toggle(500);
            });

            dom_count.click(function(){
                dom_count_list.toggle(500);
            });
        }
    ]
);
