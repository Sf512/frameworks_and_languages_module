const items = new Map();
exports.get_item= function(itemId) {
    return items.get(itemId); 
}
exports.add_item = function(item) {
    itemId = Math.floor(Math.random() * 100000);
    items.set(itemId,item)

    



}