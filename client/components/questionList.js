angular.module('app')
  .component('questionList', {
    controller: 'AppCtrl',
    bindings: {
      questions: '<',
      onClick: '<'
    },

    template: `
    <ul>
      <question-list-entry
        ng-repeat="question in $ctrl.questions"
        question="question"
        on-click="$ctrl.onClick"
      >
      </question-list-entry>
    </ul>`

  });