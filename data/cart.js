export const cart = [];

export function addToCard(productId, quantity){
    let matchigItem;
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchigItem = cartItem;
      }
    });
    
    if(matchigItem){
      matchigItem.quantity += quantity;
    } else{
      cart.push({
      productId,
      quantity
    });
    }
}

