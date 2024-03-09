export async function importJson(filename) {
  const path = `@/assets/data/forms/${filename}.json`;

  try {
    const module = await import(path);
    return module.default;
  } catch (error) {
    console.error("Error importing JSON file:", error);
    return null;
  }
}
