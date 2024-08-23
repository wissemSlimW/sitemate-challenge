import mongoose from 'mongoose';

export async function startDB() {
  await mongoose.connect('mongodb://localhost:27017');
  console.log('DB connected.');
}
