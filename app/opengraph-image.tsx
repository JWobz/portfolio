import { ImageResponse } from "next/og";
import { NAME, ROLES } from "@/data/site";

import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = `${NAME}, software developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const archivoBlack = await readFile(
  join(process.cwd(), "assets/fonts/ArchivoBlack-Regular.ttf"),
);

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#0E0F11",
        color: "#EDEDED",
      }}
    >
      <div style={{ fontSize: 28, letterSpacing: 6, color: "#00E58F" }}>
        HELLO, I’M
      </div>
      <div
        style={{ fontSize: 110, fontFamily: "Archivo Black", marginTop: 12 }}
      >
        {NAME}
      </div>
      <div style={{ fontSize: 28, color: "#A3A8B0", marginTop: 24 }}>
        {ROLES.join(" · ")}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Archivo Black",
          data: archivoBlack,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
