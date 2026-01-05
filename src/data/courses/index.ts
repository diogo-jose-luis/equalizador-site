import type { Course } from "@/types/course";
import { ccna200301 } from "./ccna-200-301";
import { ccnp } from "./ccnp-enterprise";
import { vmware } from "./vmware";
import { mcsaWindowsServer2012 } from "./mcsaWindowsServer2012";
import { lpic1102500 } from "./lpic1102500";
import { lpic2202450 } from "./lpic2202450";
import { comptiaSecurityPlus701 } from "./comptiaSecurityPlus701";
import { bst } from "./bst";
import { breathingApparatus } from "./breathingApparatus";
import { espacosConfinados } from "./espacosConfinados";
import { gasDetonation } from "./gasDetonation";
import { cobit2019Foundation } from "./cobit2019Foundation";
import { cobitDesignAndImplementation } from "./cobitDesignAndImplementation";
import { excelAvancado } from "./excelAvancado";
import { microsoftOffice } from "./microsoftOffice";
import { powerBI } from "./powerBI";
import { azureFundamentals } from "./azureFundamentals";
import { isoIec27001 } from "./isoIec27001";
import { itil4Foundation } from "./itil4Foundation";
import { leanSixSigmaWhiteBelt } from "./leanSixSigmaWhiteBelt";
import { pmpProjectManagementProfessional } from "./pmpProjectManagementProfessional";
import { prince2Foundation } from "./prince2Foundation";

// À medida que fores criando os ficheiros, vais importando aqui:
export const courses: Course[] = [
  ccna200301,
  ccnp,
  vmware,
  mcsaWindowsServer2012,
  lpic1102500,
  lpic2202450,
  comptiaSecurityPlus701,
  bst,
  breathingApparatus,
  espacosConfinados,
  gasDetonation,
  cobit2019Foundation,
  cobitDesignAndImplementation,
  excelAvancado,
  microsoftOffice,
  powerBI,
  azureFundamentals,
  isoIec27001,
  itil4Foundation,
  leanSixSigmaWhiteBelt,
  pmpProjectManagementProfessional,
  prince2Foundation
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
