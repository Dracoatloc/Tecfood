const notificationDAO = require('../DAO/notificationsDAO');

async function getNotifications(restaurantId) {
    try {
        const notifications = await notificationDAO.findNotificationsByRestaurant(restaurantId);
        return notifications;
    } catch (err) {
        return err;
    }
}

async function addNotification(notification) {
    try {
        const confirmation = await notificationDAO.addNotification(notification);
        return confirmation;
    } catch (err) {
        return err;
    }
}

async function deleteNotification(notificationId) {
    try {
        const confirmation = await notificationDAO.deleteNotification(notificationId);
        return confirmation;
    } catch (err) {
        return err;
    }
}

async function editNotification(notification, notificationId) {
    try {
        const confirmation = await notificationDAO.editNotification(notification, notificationId);
        return confirmation;
    } catch (err) {
        return err;
    }
}

module.exports = {
    getNotifications,
    addNotification,
    deleteNotification,
    editNotification
}
