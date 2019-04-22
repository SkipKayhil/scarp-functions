const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.addAdminClaim = functions.firestore
  .document('/admins/{uid}')
  .onCreate((snap, context) => {
    return admin
      .auth()
      .setCustomUserClaims(context.params.uid, { userType: 'admin' });
  });

exports.addEmployeeClaim = functions.firestore
  .document('/employees/{uid}')
  .onCreate((snap, context) => {
    return admin
      .auth()
      .setCustomUserClaims(context.params.uid, { userType: 'employee' });
  });
