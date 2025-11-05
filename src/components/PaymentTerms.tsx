import { DollarSign } from "lucide-react";

export const PaymentTerms = () => {
  const terms = [
    { stage: "Advance", percentage: "50%" },
    { stage: "On delivery of materials", percentage: "40%" },
    { stage: "After installation completion", percentage: "10%" }
  ];

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-primary mb-4 border-b-2 border-accent pb-2">
        Payment Terms
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        {terms.map((term, index) => (
          <div key={index} className="bg-muted/50 rounded-lg p-5 border border-border text-center">
            <div className="flex justify-center mb-2">
              <DollarSign className="w-6 h-6 text-accent" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">{term.percentage}</div>
            <div className="text-sm text-muted-foreground">{term.stage}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
