import Envs from "@/configs/env";

const { FAKE_ORIGIN } = Envs;

const PostApis = {
  getPosts: (): Promise<Response> => {
    return fetch(`${FAKE_ORIGIN}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  getSinglePosts: ({ id }: { id: number }): Promise<Response> => {
    return fetch(`${FAKE_ORIGIN}/posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default PostApis;
