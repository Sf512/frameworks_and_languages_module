const items = new Map();
export function get_item(itemId) {
    return items.get(itemId); 
}
export function add_item(item) {
    itemId = Math.floor(Math.random() * 100000);
    items.set(itemId,item)

    



}