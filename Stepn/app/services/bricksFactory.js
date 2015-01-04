angular.module('BrickInventoryApp.factories', [])
  .factory("bricksFactory", function(colorsService, wedoLoaderService) {

    var brickList = []

    var itemList = wedoLoaderService.load()

    brickList = itemList.map( function(item) {
        var colorName = colorsService.getColorName(item.colorId)
        var showGroupButton = item.quantity > 1
        return { item: item, colorName: colorName, count: 0,
                 colorFilter: true, shapeFilter: true,
                 show: true }
    })

    function compareByQuantityDesc (a, b) {
        return b.item.quantity - a.item.quantity
    }

    brickList.sort(compareByQuantityDesc)

    return brickList;
});

