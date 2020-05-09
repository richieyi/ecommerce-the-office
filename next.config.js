require('dotenv').config();

module.exports = {
  env: {
    FIREBASE_API_KEY: process.env.API_KEY,
    FIREBASE_APP_ID: process.env.APP_ID,
    FIREBASE_DATABASE_URL: process.env.DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.MEASUREMENT_ID
  }
};
