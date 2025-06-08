import { env } from "process";

const Envs = {
  FAKE_ORIGIN: env.NEXT_FAKE_API,
};

export default Envs;
