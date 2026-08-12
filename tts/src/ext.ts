import { AUTHOR, NAME, VERSION } from "./meta";

export const ext: seal.ExtInfo = (() => {
  const existing = seal.ext.find(NAME);
  if (existing) {
    existing.author = AUTHOR;
    existing.version = VERSION;
    return existing;
  }
  const created = seal.ext.new(NAME, AUTHOR, VERSION);
  seal.ext.register(created);
  return created;
})();
