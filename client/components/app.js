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

    this.appendToOverlay = function(element) {
      var temp = $compile(element)($scope);
      angular.element(document.getElementById('overlay')).append(temp);
    }

    this.submitAnswer = function(props) {
      if (this.input.toLowerCase() === props.answer.toLowerCase()) {
        console.log('Correct answer');
        $scope.score += props.price;
        var correctAnswer = '<div class="answer">You answered correctly!</div>';
        scope.appendToOverlay(correctAnswer);
      } else {
        console.log('Wrong answer');
        $scope.score -= props.price;
        $scope.answer = props.answer;
        var wrongAnswer = '<div class="answer">The correct answer is: {{answer}}</div>';
        scope.appendToOverlay(wrongAnswer);
      }

      this.input = null;

      $timeout(scope.emptyEl, 3000);
    };

    this.displayOverlay = function(kvestion) {
      console.log('I was clicked');
      $scope.question = kvestion.question;
      $scope.props = kvestion;
      var overlay = '<div class="overlay"><div class="question">{{question}}</div><div class="input"><input ng-model="$ctrl.input" type="text" ng-keydown="$event.keyCode === 13 && $ctrl.submitAnswer(props)" /></div></div>';
      scope.appendToOverlay(overlay);
    };

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

