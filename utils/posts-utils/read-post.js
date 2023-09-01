import matter from "gray-matter";
import path from "path";
import { getPostsDirectoryPath } from "./get-post-directory-path";
import { removeFilenameExtension } from "./remove-filename-extension";

export const readPost = (filenameOrSlug) => {
  const postsDirectoryPath = getPostsDirectoryPath();
  const fileName = removeFilenameExtension(filenameOrSlug) + ".md";

  const { content, data } = matter.read(
    path.join(postsDirectoryPath, fileName)
  );

  return {
    slug: removeFilenameExtension(fileName),
    content,
    ...data,
  };
};
