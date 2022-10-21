const envVar = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`missing environment variable ${name}`);
  }
  return value;
};

export const FLY_API_TOKEN = envVar("FLY_API_TOKEN");
