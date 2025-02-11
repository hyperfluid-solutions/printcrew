const sharp = require("sharp");

const sizeOpts = [
  { height: 16, width: 16 },
  { height: 32, width: 32 },
  { height: 48, width: 48 },
  { height: 128, width: 128 },
];
const sizeOptsDefaults = {
  fit: "contain",
  position: "centre",
};

printWithSizeOpts("print-active.svg", "active");
printWithSizeOpts("print-inactive.svg", "inactive");
printWithSizeOpts("print-unknown.svg", "unknown");

function printWithSizeOpts(file, iconName) {
  sizeOpts.forEach((sizeOpt) => {
    sharp(`./src/icons/${file}`)
      .png()
      .resize(Object.assign({}, sizeOptsDefaults, sizeOpt))
      .toFile(`./icons/${iconName}${sizeOpt.height}.png`);
  });
}

sharp(`./src/icons/icon.svg`)
  .png()
  .resize(Object.assign({}, sizeOptsDefaults, { height: 128, width: 128 }))
  .toFile(`./icons/storeicon.png`);
