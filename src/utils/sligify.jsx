export const slugify = (name) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special chars
    .replace(/[\s_-]+/g, "-") // Replace spaces with hyphens
    .replace(/^-+|-+$/g, ""); // Remove trailing hyphens
};
