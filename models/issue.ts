import mongoose, { model, Schema } from 'mongoose';
import { Issue } from '../types';

export interface IIssue extends Document {}

const issueSchema: Schema = new Schema<Issue>({
  firstName: {
    type: String,
    required: true,
    minlength: 3
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    minlength: 6
  },
  phone: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    minlength: 3
  },
  whenCreated: {
    type: Date,
    required: true
  }
});

issueSchema.set('toJSON', {
  transform: (_doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  }
});

issueSchema.statics = {
  valueExists(query) {
    return this.findOne(query).then((result: any) => result);
  }
};

export default mongoose.models.Issue || model<IIssue>('Issue', issueSchema);
