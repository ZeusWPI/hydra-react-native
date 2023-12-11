export declare type UrgentStatus = {
  meta: {
    name: string;
    description: string;
    image: string;
  };
  name: string;
  url: string;
  validUntil: Date;
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

export declare type UGentArticle = {
  content: string,
  link: string,
  summary: string,
  title: string,
  updated: string
}