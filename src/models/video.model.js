import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongooshAggregatePaginate from "mongoosh-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, // cloudinary url
      required: true,
    },
    title: {
      type: String, // cloudinary url
      required: true,
    },
    description: {
      type: String, // cloudinary url
      required: true,
    },
    duration: {
      type: String, // cloudinary url
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: mongoose.Types.ObjectId, // cloudinary url
      ref: "User",
    },
  },
  { timestamps: true }
);

videoSchema.plugin(mongooshAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
