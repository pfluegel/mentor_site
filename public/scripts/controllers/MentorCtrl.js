(function(){
	function MentorCtrl($scope, Fixtures){
		$scope.software = Fixtures.getMentor();
		
		
		
		
	}
	angular
		.module('mentorSite')
		.controller('MentorCtrl',MentorCtrl)
	
})();