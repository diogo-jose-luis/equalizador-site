// src/app/layout.tsx
import "./globals.css";
import { lexendDeca, hind } from "./fonts";

import JivoChat from "@/components/chat/JivoChat";

export const metadata = {
  title: "EQUALIZADOR CONSULTORIA E TREINAMENTOS",
  description:
    "A EQUALIZADOR CONSULTORIA & TREINAMENTO está focada em Consultoria e Treinamento na área de Tecnologias de Informação, tendo como público alvo profissionais da área de tecnologia de informação e estudantes universitários, pequenas, médias e grandes empresas no sector.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body
        className={`${lexendDeca.variable} ${hind.variable} bg-white text-neutral-900`}
      >
        {children}

        
      <JivoChat widgetId="7sTBTw6sFY" />
      </body>
    </html>
  );
}
