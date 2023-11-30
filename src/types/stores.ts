
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

export declare type DSAEvent = {
  id: string;

  title: string;
  description: string;

  association: string; // human readable association abbreviation
  address: string;
  location: string;
  type: string;

  start_time: string; // ISO date string
  end_time: string; // ISO date string
  
  infolink: string;
}
