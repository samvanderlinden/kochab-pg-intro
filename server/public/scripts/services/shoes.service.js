app.service('ShoesService',['$http', function($http) {
    console.log('ShoesService is loaded');
    var self = this;
    self.shoesArray = [
        
    ];

    // self.shoesArray = {
    //     shoesCollection : []
    // }

    self.getShoes = function () {
        $http({
            method: 'GET',
            url: '/shoes'
        })
        .then(function(response) {
            self.shoesArray = response.data;
            console.log(response);
            // self.shoesArray.shoesCollection.splice(0,1);
            // self.shoesArray.shoesCollection.push(response.data[0]);
        })
        .catch(function(error) {
            console.log('error on /shoes GET', error)
        })
    }

    self.getShoes();

}])