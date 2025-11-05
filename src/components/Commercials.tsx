export const Commercials = () => {
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-primary mb-4 border-b-2 border-accent pb-2">
        Commercials
      </h3>
      <div className="bg-accent/5 rounded-lg p-6 border-2 border-accent/30">
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Total Railing:</span>
              <span className="font-bold text-lg">614 meters</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Price per Meter:</span>
              <span className="font-bold text-lg text-primary">65 KD</span>
            </div>
          </div>
          
          <div className="bg-primary text-primary-foreground rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Total Amount:</span>
              <span className="text-3xl font-bold">39,910 KD</span>
            </div>
            <p className="text-sm opacity-90 mt-2">
              (Includes materials, fittings, labour & installation)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
