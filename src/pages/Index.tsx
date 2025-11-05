import { Button } from "@/components/ui/button";
import { QuotationHeader } from "@/components/QuotationHeader";
import { QuotationTitle } from "@/components/QuotationTitle";
import { QuotationIntro } from "@/components/QuotationIntro";
import { ScopeOfWork } from "@/components/ScopeOfWork";
import { TechnicalSpecifications } from "@/components/TechnicalSpecifications";
import { Commercials } from "@/components/Commercials";
import { DeliveryTimeline } from "@/components/DeliveryTimeline";
import { PaymentTerms } from "@/components/PaymentTerms";
import { InclusionsExclusions } from "@/components/InclusionsExclusions";
import { QuotationClosing } from "@/components/QuotationClosing";
import { Printer, Download } from "lucide-react";

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Print/Download buttons - hidden during print */}
      <div className="print:hidden fixed top-4 right-4 flex gap-2 z-10">
        <Button onClick={handlePrint} className="gap-2">
          <Printer className="w-4 h-4" />
          Print to PDF
        </Button>
      </div>

      {/* Quotation Document */}
      <div className="max-w-5xl mx-auto p-8 md:p-12 bg-card shadow-lg print:shadow-none">
        <QuotationHeader />
        <QuotationTitle />
        <QuotationIntro />
        <ScopeOfWork />
        <TechnicalSpecifications />
        <Commercials />
        <DeliveryTimeline />
        <PaymentTerms />
        <InclusionsExclusions />
        <QuotationClosing />
      </div>

      <style>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          @page {
            margin: 1cm;
            size: A4;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
