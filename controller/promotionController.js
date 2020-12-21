const promotionManager = require('../manager/promotionManager');

async function getPromotions(req,res) {
    const promotions = await promotionManager.getPromotions(req.params.restaurantId);
    res.json(await promotions);
}

async function addPromotion(req,res) {
    const confirmation = await promotionManager.addPromotion(req.body);
    res.json(await confirmation);
}

async function deletePromotion(req,res) {
    const confirmation = await promotionManager.deletePromotion(req.params.promotionId);
    res.json(await confirmation);
}

async function getPromotion(req,res) {
    const promotion = await promotionManager.getPromotion(req.params.promotionId);
    res.json(await promotion);
}

async function updatePromotion(req,res) {
    const confirmation = await promotionManager.updatePromotion(req.body, req.params.promotionId);
    res.json(await confirmation);
}

module.exports = {
    getPromotions,
    addPromotion,
    deletePromotion,
    getPromotion,
    updatePromotion
}
