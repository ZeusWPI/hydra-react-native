
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

export declare type LibraryRequest = {
  libraries: Library[];
};

export declare type Library = {
  name_en: string;
  has_hours: boolean;
  lat: number;
  image_url: string;
  telephone: string[];
  reading_room: string;
  link_nl: string;
  created_at: string;
  door_number: string;
  email: string;
  department: string;
  contact: string;
  pickup_locations: string[];
  updated_at: string;
  link_en: string;
  active: boolean;
  email_acquisition: string;
  cubee_id: string;
  link: string;
  sap_id: string;
  shipment_library_code: string;
  name: string;
  faculty: string;
  code: string;
  thumbnail_url: string;
  address: string[];
  name_nl: string;
  campus: string;
  long: number;
};
