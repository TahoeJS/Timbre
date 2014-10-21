'use strict';

Timbre.controller('PageController', ['$state', '$scope', '$famous', '$timeline',
    function ($state, $scope, $famous, $timeline) {
        var self = this;
        var isToggled = false;

        var Transform = $famous['famous/core/Transform'];
        var FastClick = $famous['famous/inputs/FastClick'];

        var Transitionable = $famous['famous/transitions/Transitionable'];
        var Easing = $famous['famous/transitions/Easing'];

        $scope.transition = new Transitionable(0);

        $scope.bkgdSurface = {
            properties: {
                backgroundColor: 'black',
                size: [undefined, 44]
            }
        };

        $scope.headerComponents = [
            {
                size: [44, 44],
                content: 'img/hamburger.png',
                origin: [0, 0.5],
                align : [0, 0.5]
            },
            {
                size: [232, 44],
                content: 'img/search.png',
                origin: [0.5, 0.5],
                align : [0.5, 0.5]
            },
            {
                size: [44, 44],
                content: 'img/icon.png',
                origin: [1, 0.5],
                align : [1, 0.5]
            }
        ];

        $scope.content = {
            size: [undefined, true],
            content: 'img/body.png'
        };

        //Animations
        $scope.t = new Transitionable(0);

        $scope.enter = function($done) {
            $scope.t.set(1, {
                duration: 1000,
                curve: 'easeOut'
            }, $done);
        };

        $scope.leave = function() {
            $scope.t.set(0, {
                duration: 1000,
                curve: 'easeOut'
            });
        };

        $scope.translate = $timeline([
            [0, [276, 0, .1]],
            [1, [0, 0, .1]]
        ]);

        $scope.toggleMenu = function () {
//            $scope.$emit('toggleMenu');

            if(!isToggled) {
                $state.go('menu');
            } else {
                $state.go('page');
            }

            isToggled = !isToggled;
        };
    }]);
