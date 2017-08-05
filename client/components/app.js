angular.module('app')

  .controller('AppCtrl', function($scope, $compile, $http) {

    var scope = this;

    $http.get('http://localhost:8080/questions')
      .then(function successCallback(data) {
        console.log('line 9', data.data[0]);
        scope.questions = data.data;
      })

    this.displayOverlay = function() {
      console.log('I was clicked');
      console.log(scope.questions[0].question);
      $scope.question = scope.questions[0].question;
      var overlay = '<div>{{question}}</div>';
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

