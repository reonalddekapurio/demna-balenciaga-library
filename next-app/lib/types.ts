export type Collection = {
  id: string;
  name: string;
  year: number;
  season: string;
  coverImage: string;
};

export type Look = {
  id: string;
  collectionId: string;
  lookNumber: number;
  image: string;
}