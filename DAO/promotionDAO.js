const Promotion = require('../models/promotion');

async function findPromotionsByRestaurant(newRestaurantId) {
    const promotions = await Promotion.find({ restaurantId: newRestaurantId });
    return promotions;
}

async function addPromotion(promotion) {
    const newPromotion = new Promotion({
        name: promotion.name,
        items: promotion.items,
        restaurantId: promotion.restaurantId,
        price: promotion.price 
    });
    await newPromotion.save();
    return 'Promotion Added';
}

async function deletePromotion(promotionId) {
    await Promotion.findByIdAndDelete(promotionId);
    return 'Promotion Deleted';
}

async function getPromotion(promotionId) {
    const promotion = await Promotion.findById(promotionId);
    return promotion;
}

async function updatePromotion(promotion, promotionId) {
    await Promotion.findByIdAndUpdate(promotionId, { $set: { 
                                         name : promotion.name,
                                         items: promotion.items,
                                         restaurantId: promotion.restaurantId,
                                         price: promotion.price }});
    return 'Promotion Updated';
}

module.exports = {
    findPromotionsByRestaurant,
    addPromotion,
    deletePromotion,
    getPromotion,
    updatePromotion
}
