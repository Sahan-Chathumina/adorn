import { asset } from "./img";
export const categories = [
  ["face-creams", "Face Creams"],
  ["face-wash", "Face Wash"],
  ["serums", "Serums"],
  ["cleansers", "Cleansers"],
  ["moisturiser", "Moisturiser"],
  ["toners", "Toners"],
  ["sunscreens", "Sunscreens"],
  ["masks", "Masks"],
  ["sets", "Skincare Sets"],
  ["essentials", "Beauty Essentials"],
].map(([id, name]) => ({ id, name, image: asset("categories", id) }));

