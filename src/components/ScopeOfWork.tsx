import { CheckCircle } from "lucide-react";

export const ScopeOfWork = () => {
  const workItems = [
    "Design, supply, and installation of a complete stainless-steel railing system suitable for balconies/staircases/walkways.",
    "Fixing of clear tempered glass infill panels with polished edges using stainless-steel clamps/brackets.",
    "All materials, consumables, accessories, and skilled labour included."
  ];

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-primary mb-4 border-b-2 border-accent pb-2">
        Scope of Work
      </h3>
      <ul className="space-y-3">
        {workItems.map((item, index) => (
          <li key={index} className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
