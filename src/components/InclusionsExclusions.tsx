import { CheckCircle2, XCircle } from "lucide-react";

export const InclusionsExclusions = () => {
  return (
    <section className="mb-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6" />
            Inclusions
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Stainless steel handrails, posts, 12 mm tempered glass panels, clamps, fasteners</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Fabrication, cutting, drilling, installation, alignment, finishing</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-destructive mb-4 flex items-center gap-2">
            <XCircle className="w-6 h-6" />
            Exclusions
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-destructive">•</span>
              <span>Civil works, core cutting, scaffolding beyond standard height, electrical works</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
