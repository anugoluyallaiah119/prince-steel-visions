import { Calendar } from "lucide-react";

export const QuotationTitle = () => {
  return (
    <div className="mb-8">
      <div className="bg-primary text-primary-foreground py-4 px-6 rounded-lg mb-4">
        <h2 className="text-3xl font-bold">Technical Proposal</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          <span className="text-muted-foreground">Date:</span>
          <span className="font-semibold">05/11/2025</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">To:</span>
          <span className="font-semibold">Kuwait Police Club</span>
        </div>
      </div>
    </div>
  );
};
