import OBR from "@owlbear-rodeo/sdk";

const ID = "com.Svitky-Hrdinu-tools.SHtools";

function createTool() {
  OBR.tool.create({
    id: '${ID}/tool',
    icons: [
      {
        icon: "/stit.png",
        label: "Převaha",
      },
    ],
    defaultMetadata: {
      strokeColor: "red"
    },
  });
}

function createMode() {
  let interaction = null;
  OBR.tool.createMode({
    id: '${ID}/mode',
    icon: [
      {
        icon: "/prevaha.svg",
        label: "Jste v převaze!",
        filter: {
            activeTools: ["${ID}/Prevaha"],
        },
      },
    ],
  });
}

OBR.onReady(() => {
  createTool();
  createMode();
});


