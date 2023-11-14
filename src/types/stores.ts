export declare type DSAEvent = {
  id: number;
};

export declare type Article = {
  title: string;
  author: string;
  // The full article in a html body
  body: string;
  category: string;
  category_color: string;
  image: string;
  // Array of images, was unused in hydra-android app
  images: { caption: string; url: string }[];
  intro: string;
  link: string;
  // ISO date string
  pub_date: string;
};
