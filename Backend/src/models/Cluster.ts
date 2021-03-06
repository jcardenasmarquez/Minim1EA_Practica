import { Schema, model, Document, Types, Mongoose } from "mongoose";

const ClusterSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  reportdate: { type: Date, default: Date.now },
});

export default model("Cluster", ClusterSchema);
