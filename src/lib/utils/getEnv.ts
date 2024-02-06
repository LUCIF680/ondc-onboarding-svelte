import locals from "./locals";

export const getEnv = (name: string): string => {
  const val: string | undefined = import.meta.env[name];
  if (val === undefined || val === null) {
    throw locals.error_env.concat(name);
  }

  return val;
};
