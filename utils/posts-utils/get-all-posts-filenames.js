import fs from "fs";
import { getPostsDirectoryPath } from "./get-post-directory-path";

export const getAllPostsFilenames = () => {
  const postsDirectoryPath = getPostsDirectoryPath();
  const postsFileNamesArray = fs.readdirSync(postsDirectoryPath);
  return postsFileNamesArray;
};
