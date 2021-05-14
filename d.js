

// Get all of the emails in a given list or segment.
KlaviyoClient.lists.getAllMembers({
    groupId: 'mySegmentOrListId',
    marker: 'myMarkerFromPreviousResponse'
});

// Adds a member to a list regardless of opt-in settings.
KlaviyoClient.lists.addMembersToList({
    listId: 'myListId',
    profiles: [
        {
            email: 'pizza.dave@mailinator.com',
            pizzaSubscriptionType: 'Premium'
        },
        {
            email: 'salami.sam@mailinator.com',
            phone_number: '+12223334444',
            sms_consent: true
        },
        {
            email: 'lasagna.larry@mailinator.com',
            push_token: 'myPushToken'
        }
    ]
});