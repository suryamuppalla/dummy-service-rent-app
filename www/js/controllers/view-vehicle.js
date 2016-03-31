app.controller('ViewPropertiesCtrl', ['$scope', '$location', '$rootScope', '$auth', '$q','$ionicHistory', '$filter', '$timeout','$ionicModal',
	function ($scope, $location, $rootScope, $auth, $q,$ionicHistory, $filter, $timeout, $ionicModal) {

	var Vehicle = Parse.Object.extend("Vehicle");
	var query = new Parse.Query(Vehicle);
	query.equalTo('userPointer', Parse.User.current());
	query.find().then(function (list) {
		/* body... */
		console.log(list);
		$scope.carArray = JSON.parse(JSON.stringify(list));
    $scope.$apply()
	}, function (error) {
		 /* body... */
		 console.log(error);
	})

    // modal start code
    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function(car) {
        $scope.openCar = car;
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hidden', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });

			// for request-modal
			// modal start code
	    $ionicModal.fromTemplateUrl('request-modal.html', {
	        scope: $scope,
	        animation: 'slide-in-up'
	      }).then(function(modal) {
	        $scope.modal1 = modal;
	      });
	      $scope.requestModal = function(car) {
	        $scope.openCar = car;
	        $scope.modal1.show();
	      };
	      //Cleanup the modal when we're done with it!
	      $scope.$on('$destroy', function() {
	        $scope.modal1.remove();
	      });
}])

app.directive('tooltip', function () {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {
            if (attrs.title) {
                var $element = $(element);
                $element.attr("title", attrs.title)
                $element.tooltipster({
                    animation: attrs.animation,
                    trigger: "click",
                    position: "top",
                    positionTracker: true,
                    maxWidth: 500,
                    contentAsHTML: true
                });
            }
        }
    };
});
