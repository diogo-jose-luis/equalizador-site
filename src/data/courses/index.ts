import type { Course } from "@/types/course";
import { ccna200301 } from "./ccna-200-301";
import { ccnp } from "./ccnp-enterprise";
import { vmware } from "./vmware";

// À medida que fores criando os ficheiros, vais importando aqui:
export const courses: Course[] = [
  ccna200301,
  ccnp,
  vmware,
  // securityPlus,
  // lpic1,
  // lpic2,
  // ...
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
