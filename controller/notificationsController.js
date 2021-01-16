const notificationsManager = require('../manager/notificationsManager');

async function getNotifications(req,res) {
    const notifications = await notificationsManager.getNotifications(req.params.restaurantId);
    res.json(await notifications);
}

async function addNotification(req,res) {
    const confirmation = await notificationsManager.addNotification(req.body);
    res.json(await confirmation);
}

async function deleteNotification(req,res) {
    const confirmation = await notificationsManager.deleteNotification(req.params.notificationId);
    res.json(await confirmation);
}

async function editNotification(req,res) {
    const confirmation = await notificationsManager.editNotification(req.body, req.params.notificationId);
    res.json(await confirmation);
}

module.exports = {
    getNotifications,
    addNotification,
    deleteNotification,
    editNotification
}
