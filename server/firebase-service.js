const admin = require('firebase-admin');

admin.initializeApp({
    apiKey: "AIzaSyAkQnhQQv3GKB5udpYR9VnOdFJrgXj7aQE",
    authDomain: "auth-client-lecture.firebaseapp.com",
    projectId: "auth-client-lecture",
    storageBucket: "auth-client-lecture.appspot.com",
    messagingSenderId: "183310347435",
    appId: "1:183310347435:web:20ea7551680a44577adbee",
    measurementId: "G-ZF2J0X1SV0"
});

const verifyToken = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        admin.auth().verifyIdToken(token).then((res) => {
            console.log(res);
            next();
        }).catch(err => {
            res.send({ data: 'unable to log in' });
        })
    } else {
        res.send({ data: 'unable to log in' });
    }
}

module.exports = {
    verifyToken
}

