angular.module('app')

  .controller('AppCtrl', function($scope, $compile, $http, $timeout) {

    var scope = this;

    $scope.isTagOneActive = true;
    $scope.score = 0;

    $http.get('http://localhost:8080/questions')
      .then(function successCallback(data) {
        scope.questions = data.data;
      });

    this.emptyEl = function() {
      var myEl = angular.element(document.getElementById('overlay'));
      myEl.empty();
    };

    this.hideTag1 = function() {
      console.log('Dont touch me');
      $scope.isTagOneActive = false;
    };

    this.submitAnswer = function() {
      if (this.input === scope.questions[0].answer) {
        console.log('Correct answer');
        $scope.score += scope.questions[0].price;
        var correctAnswer = '<div>You answered correctly!</div>';
        var temp = $compile(correctAnswer)($scope);
        angular.element(document.getElementById('overlay')).append(temp);
      } else {
        console.log('Wrong answer');
        $scope.score -= scope.questions[0].price;
        $scope.answer = scope.questions[0].answer;
        var wrongAnswer = '<div>The correct answer is: {{answer}}</div>';
        var temp = $compile(wrongAnswer)($scope);
        angular.element(document.getElementById('overlay')).append(temp);
      }

      this.input = null;

      $timeout(scope.emptyEl, 2500);
    };

    this.displayOverlay = function() {
      console.log('I was clicked');

      $scope.question = scope.questions[0].question;
      var overlay = '<div class="overlay"><div>{{question}}</div><div><input ng-model="$ctrl.input" type="text" ng-keydown="$event.keyCode === 13 && $ctrl.submitAnswer()" /></div></div>';
      var temp = $compile(overlay)($scope);
      angular.element(document.getElementById('overlay')).append(temp);
    };

    // this.questionList = function(data) {
    //   scope.questions = data;
    //   scope.currentQ = scope.questions[0].answer;
    // };


      // .catch(function ({data}) {
      //   // callback(data.error);
      //   data.error.errors.forEach(function(err) {
      //     console.error(err);
      //   });
      // });

  })

  .component('app', {
    controller: 'AppCtrl',
    templateUrl: '../templates/app.html'
  })

