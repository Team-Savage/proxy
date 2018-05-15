export function clickMenuItem(itemsArray) {
    return {
        type: 'CLICK_ITEM',
        payload: {
            items: itemsArray
        }
    }
}