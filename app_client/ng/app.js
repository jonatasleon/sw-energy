angular.module('plugTech', []);

var chartService = [function( ) {
  var ctx = $('#jumbotron-line-chart');

  var options = {
    showScale: false,
    scaleShowGridLines: false,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 0,
    scaleShowHorizontalLines: false,
    scaleShowVerticalLines: false,
    bezierCurve: false,
    bezierCurveTension: 0.4,
    pointDot: false,
    pointDotRadius: 0,
    pointDotStrokeWidth: 2,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 4,
    datasetFill: true,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
  };

  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: options
  });
  return myChart;
}];

var IndexController = ['$scope', '$interval', 'dashService', function($scope, $interval, dashService) {
  $interval(function() {
    dashService.getLastLeitura()
      .then(function(res) {
        $scope.ma = res.data.corrente;
      });
  }, 3000);
}];

var dashService = ['$http', function($http) {
  var base = '/api';

  return {
    getLastLeitura: function() {
      return $http({
        url: base + '/leituras/last',
        method: 'GET'
      });
    }
  };
}]

angular.module('plugTech')
  .controller('IndexController', IndexController)
  .service('dashService', dashService)
  .service('chartService', chartService);
