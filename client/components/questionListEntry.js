angular.module('app')
  .component('questionListEntry', {
    controller: 'AppCtrl',
    bindings: {
      question: '<',
      onClick: '<'
    },

    template: `
      <li>
        <div class="question-box" ng-click="$ctrl.onClick($ctrl.question)" onclick="this.parentNode.style.color = '#1739c1'">
          {{'$'+$ctrl.question.price}}
        </div>
      </li>
    `
  });