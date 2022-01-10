const items = new Map()
exports.get_item= function(itemId) {
    return items.get(itemId)
}
exports.delete_item= function(itemId) {
    return items.delete(itemId)
}
exports.add_item = function(item) {
    itemId = Math.floor(Math.random() * 100000)
    items.set(itemId,item)
}
exports.searchOne = function(user_id, keywords, lat, lon, radius, date_from, date_to) {
    result = []
    items.forEach (function(item){
    isValid= true

        if(item["user_id"] !=user_id && user_id != undefined) {
            isValid= false
        }
        if(item["keywords"] !=keywords && keywords != undefined) {
            isValid= false
        }
        if(item["lat"] !=lat && lat != undefined) {
            isValid= false
        }
        if(item["lon"] !=lon && lon != undefined) {
            isValid= false
        }
        if(item["radius"] !=radius && radius != undefined) {
            isValid= false
        }
        if(item["date_from"] !=date_from && date_from != undefined) {
            isValid= false
        }
        if(item["date_to"] !=date_to && date_to != undefined) {
            isValid= false
        }
        if (isValid) {
            result.push(item)
        }
    })
    return result
}
