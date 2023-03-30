// import messaging from '@react-native-firebase/messaging';
// import notifee from '@notifee/react-native';
// async function onAppBootstrap() {
//   // Register the device with FCM
//   await messaging().registerDeviceForRemoteMessages();
//   // Get the token
//   const token = await messaging().getToken();
//   console.log('>>>>>fcm Token', token);
// }

// async function onMessageReceived(message: any) {
//   console.log('>>>>>', message.notification);
//   notifee.displayNotification({
//     title: message?.notification?.title,
//     body: message?.notification?.body,
//     android: {
//       channelId: 'default',
//     },
//   });
// }

// const test = async (e: any) => {
//   console.log({e});
// };

// notifee.onBackgroundEvent(test);

// onAppBootstrap();
// messaging().onMessage(onMessageReceived);
// messaging().setBackgroundMessageHandler(onMessageReceived);
