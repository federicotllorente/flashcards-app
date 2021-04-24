import db from 'mongoose';

db.Promise = global.Promise;

async function connect(uri: string) {
    await db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`[db] Database successfully connected`))
        .catch((error: string | {}) => console.error(`[db] ${error}`));
}

export default connect;