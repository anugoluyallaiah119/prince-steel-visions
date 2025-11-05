import { Clock } from "lucide-react";

export const DeliveryTimeline = () => {
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-primary mb-4 border-b-2 border-accent pb-2">
        Delivery Timeline
      </h3>
      <div className="bg-muted/50 rounded-lg p-5 border border-border flex items-center gap-4">
        <Clock className="w-8 h-8 text-primary flex-shrink-0" />
        <div>
          <p className="font-semibold text-lg">Total duration: 3 months 15 days</p>
          <p className="text-muted-foreground text-sm">
            After approval, advance payment & site readiness
          </p>
        </div>
      </div>
    </section>
  );
};
