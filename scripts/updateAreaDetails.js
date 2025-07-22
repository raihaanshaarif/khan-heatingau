import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const areaDir = path.join(__dirname, "..", "src", "Components", "AreaDetails");
const templateFile = path.join(areaDir, "seville.jsx");
const tpl = fs.readFileSync(templateFile, "utf8");

// PascalCase helper
function toPascal(name) {
  return name
    .split(/[-_ ]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

// Title Case with spaces helper
function toTitle(name) {
  return name
    .split(/[-_ ]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

fs.readdirSync(areaDir)
  .filter((f) => f.endsWith(".jsx") && f !== "seville.jsx")
  .forEach((file) => {
    const cityKey = path.basename(file, ".jsx"); // e.g. 'park-orchards'
    const CityName = toPascal(cityKey); // e.g. 'ParkOrchards'
    const DisplayName = toTitle(cityKey); // e.g. 'Park Orchards'

    const content = tpl
      // component declaration & export
      .replace(/const Seville/g, `const ${CityName}`)
      .replace(/export default Seville/g, `export default ${CityName}`)
      // all other "Seville" occurrences become DisplayName
      .replace(/Seville(?![A-Za-z])/g, DisplayName);

    fs.writeFileSync(path.join(areaDir, file), content, "utf8");
    console.log(`Updated ${file}`);
  });
