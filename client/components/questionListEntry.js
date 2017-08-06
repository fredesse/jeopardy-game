angular.module('app')
  .component('questionListEntry', {
    controller: 'AppCtrl',
    bindings: {
      question: '<',
      onClick: '<'
    },

    template: `
      <li>
        <div class="question-box" ng-click="$ctrl.onClick($ctrl.question)">
          {{'$'+$ctrl.question.price}}
        </div>
      </li>
    `
  });