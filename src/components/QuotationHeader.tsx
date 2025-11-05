import { Phone } from "lucide-react";

export const QuotationHeader = () => {
  return (
    <header className="border-b-4 border-primary pb-6 mb-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">
            House of Princes Aluminum Factory
          </h1>
          <p className="text-lg text-muted-foreground mb-1">
            Windows – Doors – Kitchens – Aluminum Works
          </p>
          <div className="flex items-center gap-2 text-foreground">
            <Phone className="w-4 h-4" />
            <span className="font-medium">Tel: 60006119</span>
          </div>
        </div>
        <div className="text-right">
          <div className="bg-accent/10 px-4 py-2 rounded-md border border-accent/30">
            <p className="text-sm text-muted-foreground">Prepared by</p>
            <p className="font-semibold text-foreground">Renu</p>
          </div>
        </div>
      </div>
    </header>
  );
};
