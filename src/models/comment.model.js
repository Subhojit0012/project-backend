import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongooshAggregatePaginate from "mongoosh-aggregate-paginate-v2";

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

commentSchema.plugin(mongooshAggregatePaginate);

export const Comment = mongoose.model("Comment", commentSchema);
