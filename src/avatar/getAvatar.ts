import { randBool } from "../utils/randomBoolean";
import { randInt } from "../utils/randomInt";

export type GetAvatarProps = {
   sex?: "male" | "female";
};

export const getAvatar = (options?: GetAvatarProps): string => {
   if (options?.sex === "male") {
      return `https://api-all-in-one.vercel.app/images/male/${randInt(
         1,
         41
      )}.jpg`;
   } else if (options?.sex === "female")
      return `https://api-all-in-one.vercel.app/images/female/${randInt(
         1,
         51
      )}.jpg`;
   else {
      const randSex = randBool() ? "male" : "female";
      const randId = randSex === "male" ? randInt(1, 41) : randInt(1, 51);
      return `https://api-all-in-one.vercel.app/images/${randSex}/${randId}.jpg`;
   }
};
