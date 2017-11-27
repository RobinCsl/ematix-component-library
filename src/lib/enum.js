import { Map } from "immutable";

class Enum {
  constructor(data) {
    if (typeof data !== "object") {
      throw new Error("Not an object");
    }
    this.data = new Map(data);
  }

  getBy = (key) => {
    // normalize key
    let normalizedKey = key;
    if (typeof key !== "string") {
      try {
        normalizedKey = key.toString();
      } catch (e) {
        throw new Error("Key is not a string value ");
      }
    }

    return this.data.has(normalizedKey)
      ? this.data.get(normalizedKey)
      : "Unknown";
  };

  getById = () => this.getBy("id");
}

export default Enum;
