// ============================
//  Puerto
// ============================

process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimiento del token
// ============================
/* 60s 60m 24m 24h, 30 DÍAS*/

//process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.CADUCIDAD_TOKEN = '48h';

// ============================
//  Seed de autentificación
// ============================
/* En heroku utilizamos process.env.SEED */
/*Mantenemos el mismo entorno en ambas producciones*/
process.env.SEED = process.env.SEED || 'seed-de-desarrollo';

// ============================
//  Base de datos
// ============================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/BD1';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;


// ============================
//  Google Client ID
// ============================

process.env.CLIENT_ID = process.env.CLIENT_ID || '625729518729-8igisn3rdrt07jpc23n1spfuvmtb8afc.apps.googleusercontent.com';