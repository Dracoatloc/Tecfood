const promotionDAO = require('../DAO/promotionDAO');

async function getPromotions(restaurantId) {
    try {
        const promotions = await promotionDAO.findPromotionsByRestaurant(restaurantId);
        return promotions;
    } catch (err) {
        return err;
    }
}

async function addPromotion(promotion) {
    try {
        const confirmation = await promotionDAO.addPromotion(promotion);
        return confirmation;
    } catch (err) {
        return err;
    }
}

async function deletePromotion(promotionId) {
    try {
        const confirmation = await promotionDAO.deletePromotion(promotionId);
        return confirmation;
    } catch (err) {
        return err;
    }
}

async function getPromotion(promotionId) {
    try {
        const promotion = await promotionDAO.getPromotion(promotionId);
        return promotion;
    } catch (err) {
        return err;
    }
}

async function updatePromotion(promotion, promotionId) {
    try {
        const confirmation = await promotionDAO.updatePromotion(promotion, promotionId);
        return confirmation;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getPromotions,
    addPromotion,
    deletePromotion,
    getPromotion,
    updatePromotion
}
