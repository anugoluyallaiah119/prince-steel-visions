export const TechnicalSpecifications = () => {
  const specifications = [
    {
      title: "Stainless Steel Pipe (Handrail & Posts)",
      details: [
        { label: "Size", value: "2 inch (5 cm)" },
        { label: "Thickness", value: "2 mm" },
        { label: "Material/Finish", value: "Stainless Steel (Mirror/Brushed as approved)" },
        { label: "Origin", value: "Thivan" }
      ]
    },
    {
      title: "Glass Brackets / Clamps",
      details: [
        { label: "Size", value: "4.5 x 5.5 cm" },
        { label: "Material", value: "Stainless Steel" },
        { label: "Finish", value: "Mirror" },
        { label: "Origin", value: "Thivan" }
      ]
    },
    {
      title: "Clear Glass Panels",
      details: [
        { label: "Thickness", value: "12 mm" },
        { label: "Type", value: "Tempered, Polished Edges" },
        { label: "Origin", value: "Saudi Arabia" }
      ]
    }
  ];

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-primary mb-4 border-b-2 border-accent pb-2">
        Technical Specifications
      </h3>
      <div className="space-y-6">
        {specifications.map((spec, index) => (
          <div key={index} className="bg-muted/50 rounded-lg p-5 border border-border">
            <h4 className="font-bold text-lg mb-3 text-primary">{index + 1}) {spec.title}</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {spec.details.map((detail, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-muted-foreground min-w-[120px]">{detail.label}:</span>
                  <span className="font-medium text-foreground">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
