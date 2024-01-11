import { Schema, model } from 'mongoose';

const nodeSchema = new Schema({
  isParent: Boolean,
  label: { String, required: true },
  icon: String,
  children: [{ type: Schema.Types.ObjectId, ref: 'Node' }],
  data: { type: Schema.Types.Mixed },
});

const Node = model('Node', nodeSchema);
export default { Node };
