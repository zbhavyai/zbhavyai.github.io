export function copyToClipboard(rawData, callback) {
  let formattedText = callback(rawData);
  return navigator.clipboard.writeText(formattedText);
}

export function getSkills(data) {
  if (!data || data.length === 0) {
    return "";
  } else {
    return data
      ?.map((skillgroup) => `${skillgroup["list"] ? skillgroup["list"].join(", ") : ""}`)
      .join(", ")
      .concat("\n");
  }
}

export function getExperienceResponsibilities(data) {
  if (!data["responsibities"] || data["responsibities"].length === 0) {
    return "";
  } else {
    return data["responsibities"]
      ?.map((responsibility) => `-> ${responsibility["keyword"]}: ${responsibility["description"]}`)
      .join("\n")
      .concat("\n");
  }
}
