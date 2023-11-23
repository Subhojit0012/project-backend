import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinery } from "../utils/fileUpload.js";
import { ApiResponse } from "../utils/apiResponse.js";

// get user details from frontend
// validations -- not empty
// check if user already exists: username,email
// check for images, check for avatar
// upload them to cloudinary, avatar
// create user object - create entry in db
// remove password and refresh token field from response
// check for user creation
// return res

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, userName, email, password } = req.body;
  console.log("email:", email);

  if (fullName == "") {
    throw new ApiError(400, "fullname is required");
  }

  const existedUser = User.findOne({
    $or: [{ userName }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "user already exists");
  }

  const avatraLocalPath = req.files?.avatar[0]?.path;
  const coverImagePath = req.files?.coverImage[0]?.path;

  if (!avatraLocalPath) {
    throw new ApiError(400, "avatra local path is required");
  }

  const avatar = await uploadOnCloudinery(avatraLocalPath);
  const coverImage = await uploadOnCloudinery(coverImagePath);

  if (!avatar) {
    throw new ApiError(400, "avatra local path is required");
  }

  const user = User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    userName: userName.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(400, "somthing went wrong while registering user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

export { registerUser };
