const items = new Map();
function get_item(itemId) {
    return items.get(itemId); 
}
function set_item(item) {
    itemId = Math.floor(Math.random() * 100000);
    items.set(itemId,item)

}