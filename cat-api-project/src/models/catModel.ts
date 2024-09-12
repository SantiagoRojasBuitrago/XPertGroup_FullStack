import mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  temperament: { type: String, required: true },
  origin: { type: String, required: true },
});

export default mongoose.model('Cat', catSchema);
