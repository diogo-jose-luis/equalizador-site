import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://equalizador.ao";

  const routes = ["/", "/sobre-nos", "/treinamentos", "/pacotes", "/contacto"];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
