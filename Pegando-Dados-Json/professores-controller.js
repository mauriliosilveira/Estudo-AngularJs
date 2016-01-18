(function() {
    'use strict';

    angular
        .module('listaPofessores')
        .controller('ProfessoresCtrl', ProfessoresCtrl);

     ProfessoresCtrl.$inject = ['$scope','$http']

   	function ProfessoresCtrl($scope,$http) {

      $scope.app = "Professores";

      //Pegando Dados do Json Teste
      $http.get('mocks/professores.json').success(function(response){
          $scope.professores = response;
      });

   	}

})();