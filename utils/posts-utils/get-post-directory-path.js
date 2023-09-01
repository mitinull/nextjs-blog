import path from "path";

export const getPostsDirectoryPath = () =>
  path.join(process.cwd(), "posts");
