// model imports
import StoryModel from "../models/Story.js";
import UserModel from "../models/User.js";

export const addStory = async (req, res) => {
  const userID = req.params.userID;
  const { description, story } = req.body;
  try {
    if (!userID || story.length < 1) {
      return res.status(400).json({ msg: "Please fill in all fields." });
    }
    const newStory = new StoryModel({
      userID,
      description,
      story,
    });

    await newStory.save();
    return res.status(200).json({ msg: "New story successfully added." });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getAllStoriesbyPublicProfile = async (req, res) => {
  try {
    const storyArray = [];

    const storyGroupByUser = await StoryModel.aggregate([
      { $group: { _id: "$userID" } },
    ]);
    for (const group of storyGroupByUser) {
      const data = await StoryModel.find({ userID: group._id });
      const userInfo = await UserModel.findOne({ _id: group._id });
      const { username, profilePhoto } = userInfo;
      storyArray.push({ data: data, user: { username, profilePhoto } });
    }

    return res.status(200).json(storyArray);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
