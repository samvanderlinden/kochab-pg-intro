app.service('ShoesService',['$http', function($http) {
    console.log('ShoesService is loaded');
    var self = this;
    self.shoesArray = [
        {name: 'Red Wing', cost: 100},
        {name: 'Puma', cost: 50},
        {name: 'space boots', cost: 150},
        {name: 'Adidas Superstar', cost: 100}
    ];

    self.getShoes = function () {
        $http({
            method: 'GET',
            url: '/shoes'
        })
        .then(function(response) {
            self.shoesArray = response.data;
            console.log(response);
        })
        .catch(function(error) {
            console.log('error on /shoes GET', error)
        })
    }

    self.getShoes();

}])