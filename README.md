# @opsify/avatar

Generate AI-powered fake avatars for developers to use in their web applications. Easily retrieve unique and customizable avatar images to enhance user experience and add personality to your website.

## Installation

You can install `@opsify/avatar` via npm:

```bash
npm install @opsify/avatar
```

## Usage

```ts
import { getAvatar, GetAvatarProps } from "@opsify/avatar";

// Define optional properties
const options: GetAvatarProps = {
   sex: "male", // either "male" or "female"
};

const avatarUrl: string = getAvatar(options);

// use as a remote url
<img src={avatarUrl} />;
```

## Avatar Properties

`sex: "male" | "female"`

-  Optional property to specify the gender of the avatar. If not provided, a random gender will be chosen.

```ts
import { getAvatar } from "@opsify/avatar";

// Generate a random avatar URL
const avatarUrl: string = getAvatar();
```

## License

This project is licensed under the MIT License.
