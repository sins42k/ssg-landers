const newsImages = Array.from(
  { length: 50 },
  (_, index) => `/assets/news/news${String(index + 1).padStart(2, "0")}.jpeg`
);

export default newsImages;
