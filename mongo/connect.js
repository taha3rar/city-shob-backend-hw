import { connect } from 'mongoose';
// should use dotenv here but for the sake of time didnt use it
const uri = `mongodb+srv://taha:YG6v4ncOYLBQgVLZ@city-shob.cbl5j2w.mongodb.net/city-shob`;

const mongoConnect = async () => {
  try {
    await connect(uri);
    console.log('DATABASE CONNECTED');
  } catch (err) {
    console.error('ERROR CONNECTING TO THE DB...', err);
  }
};

export default mongoConnect;
