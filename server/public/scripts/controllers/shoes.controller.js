app.controller('ShoesController',['ShoesService', '$http', function(ShoesService, http){
    console.log('ShoesController has been loaded');
    var self = this;
    self.message = 'Shoes List';
    self.shoeItems = ShoesService.shoesArray;
}])