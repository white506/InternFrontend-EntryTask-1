import { encoded, translations } from "./data.js";

function decodeFields(encoded, translations) {
  const decoded = [];
  const uniqueIds = new Set();

  for (const obj of encoded) {
    const decodedObj = {};

    for (const key in obj) {
      if (key.endsWith("Id")) {
        const translationKey = obj[key];
        const translation = translations[translationKey];

        if (translation) {
          decodedObj[key.slice(0, -2)] = translation;

          uniqueIds.add(translationKey);
        } else {
          decodedObj[key] = obj[key];
        }
      } else if (["groupId", "service", "formatSize", "ca"].includes(key)) {
        decodedObj[key] = obj[key];
      } else {
        decodedObj[key] = obj[key];
      }
    }

    decoded.push(decodedObj);
  }

  const uniqueIdsArray = [...uniqueIds];

  return { decoded, uniqueIds: uniqueIdsArray };
}

const { decoded, uniqueIds } = decodeFields(encoded, translations);
console.log("Let's rock");
console.log(decoded);
console.log(uniqueIds);
