const Notification = require('../models/notification');

async function findNotificationsByRestaurant(RestaurantId) {
    const notifications = await Notification.find( { restaurantId: RestaurantId } );
    return notifications;
}

async function addNotification(notification) {
    const  newNotification = new Notification({
        text: notification.text,
        image: notification.image,
        restaurantId: notification.restaurantId,
        timeInterval: notification.timeInterval
    });
    await newNotification.save();
    return 'Notification Added';

}

async function deleteNotification(notificationId) {
    await Notification.findByIdAndDelete(notificationId);
    return 'Notification Deleted';
}

async function editNotification(notification, notificationId) {
    await Notification.findByIdAndUpdate(notificationId, { $set: {
        text : notification.text,
        image: notification.image,
        restaurantId: notification.restaurantId,
        timeInterval: notification.timeInterval
    }});

    return 'Notification Updated';

}

module.exports = {
    findNotificationsByRestaurant,
    addNotification,
    deleteNotification,
    editNotification
}
