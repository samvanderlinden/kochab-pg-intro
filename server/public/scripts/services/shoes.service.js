app.service('ShoesService',['$http', function($http) {
    console.log('ShoesService is loaded');
    var self = this;

    self.shoes = {
        list : []
    }

    self.newShoe = {};

    self.getShoes = function () {
        $http({
            method: 'GET',
            url: '/shoes'
        })
        .then(function(response) {
            self.shoes.list = response.data;
            console.log(response);
        })
        .catch(function(error) {
            console.log('error on /shoes GET', error)
        })
    }

    self.getShoes();

    self.postShoes = function (newShoe) {
        console.log('post shoes working')
        $http({
            method: 'POST',
            url: '/shoes',
            data: newShoe
        })
        .then(function(response){
            self.getShoes();
        })
        self.getShoes();
    }

}])