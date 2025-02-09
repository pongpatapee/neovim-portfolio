import localFont from "next/font/local";

export const jetBrainMonoNF = localFont({
  src: [
    {
      path: "../../public/fonts/JetBrainsMonoNLNerdFont-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/JetBrainsMonoNLNerdFont-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains",
});
