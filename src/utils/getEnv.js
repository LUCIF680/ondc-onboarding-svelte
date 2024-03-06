import locals from "./locals";

export const getEnv = (name) => {
  const val = process.env[name];
  if (val === undefined || val === null) {
    throw locals.error_env.concat(name);
  }

  return val;
};
