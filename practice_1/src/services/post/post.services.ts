import PostApis from "@/apis/post/post";
import { IPost } from "@/interfaces/post";

const { getPosts, getSinglePosts } = PostApis;

const PostServices = {
  processGetPost: async (): Promise<IPost[]> => {
    try {
      const res = await getPosts();
      return res.json();
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new Error("Unknown Error Occurred In Get Post Service");
    }
  },
  processGetSinglePost: async ({ id }: { id: number }): Promise<IPost> => {
    try {
      const res = await getSinglePosts({ id });
      return res.json();
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new Error("Unknown Error Occurred In Get Post Service");
    }
  },
};

export default PostServices;
