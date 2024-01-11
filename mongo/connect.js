import { connect } from 'mongoose';
const uri = `mongodb+srv://taha:YG6v4ncOYLBQgVLZ@city-shob.cbl5j2w.mongodb.net/`;

const mongoConnect = async () => {
  try {
    await connect(uri, );
    console.log('DATABASE CONNECTED');
  } catch (err) {
    console.error('ERROR CONNECTING TO THE DB...', err);
  }
};

export default mongoConnect;
