import { Schema, model } from 'mongoose';

const nodeSchema = new Schema({
  isParent: Boolean,
  label: { type: String, required: true },
  icon: String,
  children: [{ type: Schema.Types.ObjectId, ref: 'Node', required: false }],
  data: { type: Schema.Types.Mixed },
});

const nodeModel = model('Node', nodeSchema);

export { nodeModel };
