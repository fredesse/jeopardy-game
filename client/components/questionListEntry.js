angular.module('app')
  .component('questionListEntry', {
    controller: 'AppCtrl',
    bindings: {
      question: '<',
      onClick: '<'
    },

    template: `
      <li>
        <div ng-show="isTagOneActive" ng-click="$ctrl.onClick($ctrl.question)">
          {{$ctrl.question.price}}
        </div>
      </li>
    `
  });