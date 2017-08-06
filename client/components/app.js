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

    this.submitAnswer = function(props) {
      if (this.input === props.answer) {
        console.log('Correct answer');
        $scope.score += props.price;
        var correctAnswer = '<div>You answered correctly!</div>';
        var temp = $compile(correctAnswer)($scope);
        angular.element(document.getElementById('overlay')).append(temp);
      } else {
        console.log('Wrong answer');
        $scope.score -= props.price;
        $scope.answer = props.answer;
        var wrongAnswer = '<div>The correct answer is: {{answer}}</div>';
        var temp = $compile(wrongAnswer)($scope);
        angular.element(document.getElementById('overlay')).append(temp);
      }

      this.input = null;

      $timeout(scope.emptyEl, 3000);
    };

    // this.selectQuestion = function(question) {
    //   scope.currentQuestion = question;
    // };

    this.displayOverlay = function(kvestion) {
      console.log('I was clicked');
      //console.log('this is a question', kvestion);

      // $scope.question = scope.questions[0].question;
      $scope.question = kvestion.question;
      $scope.props = kvestion;
      var overlay = '<div class="overlay"><div>{{question}}</div><div><input ng-model="$ctrl.input" type="text" ng-keydown="$event.keyCode === 13 && $ctrl.submitAnswer(props)" /></div></div>';
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

