import { Button } from "@/components/ui/button";
import { Printer, Phone, Calendar, Clock, DollarSign } from "lucide-react";

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Print button - hidden during print */}
      <div className="print:hidden fixed top-4 right-4 z-10">
        <Button onClick={handlePrint} className="gap-2">
          <Printer className="w-4 h-4" />
          Print to PDF
        </Button>
      </div>

      {/* Single Page Quotation */}
      <div className="max-w-[210mm] mx-auto p-6 bg-card print:p-4" style={{ minHeight: '297mm' }}>
        
        {/* Header */}
        <div className="border-b-4 border-primary pb-2 mb-3">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-primary mb-1">
                House of Princes Aluminum Factory
              </h1>
              <p className="text-sm text-muted-foreground mb-1">
                Windows – Doors – Kitchens – Aluminum Works
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-3 h-3" />
                <span>Tel: 60006119</span>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded">
                <p className="text-lg font-bold">QUOTATION</p>
              </div>
            </div>
          </div>
        </div>

        {/* Document Info */}
        <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-semibold">Date:</span>
            <span>05/11/2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">To:</span>
            <span>Kuwait Police Club</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Prepared by:</span>
            <span>Renu</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-3 text-sm">
          <p className="leading-snug">
            We are pleased to submit our technical proposal for stainless steel and glass railing works at the Police Club. 
            Our company specializes in high-quality aluminum and stainless steel works, delivering durable and elegant solutions 
            that meet the highest standards of safety and design.
          </p>
        </div>

        {/* Scope of Work */}
        <div className="mb-3">
          <h2 className="text-base font-bold bg-primary text-primary-foreground px-3 py-1 mb-1.5">SCOPE OF WORK</h2>
          <ul className="list-disc list-inside text-sm space-y-0.5 ml-2">
            <li>Design, supply, and installation of complete stainless-steel railing system for balconies/staircases/walkways</li>
            <li>Fixing of clear tempered glass infill panels with polished edges using stainless-steel clamps/brackets</li>
            <li>All materials, consumables, accessories, and skilled labour included</li>
          </ul>
        </div>

        {/* Technical Specifications Table */}
        <div className="mb-3">
          <h2 className="text-base font-bold bg-primary text-primary-foreground px-3 py-1 mb-1.5">TECHNICAL SPECIFICATIONS</h2>
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr className="bg-primary/10">
                <th className="border border-border p-1.5 text-left font-semibold">Item</th>
                <th className="border border-border p-1.5 text-left font-semibold">Specification</th>
                <th className="border border-border p-1.5 text-left font-semibold">Origin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-1.5 font-medium">Stainless Steel Pipe (Handrail & Posts)</td>
                <td className="border border-border p-1.5">2 inch (5 cm), 2 mm thickness, Mirror/Brushed finish</td>
                <td className="border border-border p-1.5">Thivan</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="border border-border p-1.5 font-medium">Glass Brackets / Clamps</td>
                <td className="border border-border p-1.5">4.5 x 5.5 cm, Stainless Steel, Mirror finish</td>
                <td className="border border-border p-1.5">Thivan</td>
              </tr>
              <tr>
                <td className="border border-border p-1.5 font-medium">Clear Glass Panels</td>
                <td className="border border-border p-1.5">12 mm thickness, Tempered, Polished Edges</td>
                <td className="border border-border p-1.5">Saudi Arabia</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pricing Table */}
        <div className="mb-3">
          <h2 className="text-base font-bold bg-primary text-primary-foreground px-3 py-1 mb-1.5">COMMERCIALS</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-primary/10">
                <th className="border border-border p-1.5 text-left font-semibold">Description</th>
                <th className="border border-border p-1.5 text-center font-semibold">Quantity</th>
                <th className="border border-border p-1.5 text-center font-semibold">Unit</th>
                <th className="border border-border p-1.5 text-right font-semibold">Rate (KD)</th>
                <th className="border border-border p-1.5 text-right font-semibold">Amount (KD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border p-1.5">Stainless Steel & Glass Railing System (Complete)</td>
                <td className="border border-border p-1.5 text-center">614</td>
                <td className="border border-border p-1.5 text-center">Meters</td>
                <td className="border border-border p-1.5 text-right">65.00</td>
                <td className="border border-border p-1.5 text-right font-semibold">39,910.00</td>
              </tr>
              <tr className="bg-primary text-primary-foreground font-bold">
                <td colSpan={4} className="border border-border p-1.5 text-right">TOTAL AMOUNT:</td>
                <td className="border border-border p-1.5 text-right text-lg">39,910 KD</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-muted-foreground mt-1 italic">
            * Includes all materials, fittings, labour & installation
          </p>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Delivery Timeline */}
          <div>
            <h3 className="text-sm font-bold bg-accent/20 px-2 py-1 mb-1 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              DELIVERY TIMELINE
            </h3>
            <p className="text-xs">
              <span className="font-semibold">Duration:</span> 3 months 15 days after approval, advance payment & site readiness
            </p>
          </div>

          {/* Payment Terms */}
          <div>
            <h3 className="text-sm font-bold bg-accent/20 px-2 py-1 mb-1 flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              PAYMENT TERMS
            </h3>
            <div className="text-xs space-y-0.5">
              <p><span className="font-semibold">50%</span> - Advance</p>
              <p><span className="font-semibold">40%</span> - On delivery of materials</p>
              <p><span className="font-semibold">10%</span> - After installation completion</p>
            </div>
          </div>
        </div>

        {/* Inclusions & Exclusions */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <h3 className="text-sm font-bold bg-muted px-2 py-1 mb-1">✓ INCLUSIONS</h3>
            <ul className="text-xs list-disc list-inside space-y-0.5">
              <li>Stainless steel handrails, posts, glass panels, clamps, fasteners</li>
              <li>Fabrication, cutting, drilling, installation, alignment, finishing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold bg-muted px-2 py-1 mb-1">✗ EXCLUSIONS</h3>
            <ul className="text-xs list-disc list-inside space-y-0.5">
              <li>Civil works, core cutting, scaffolding beyond standard height</li>
              <li>Electrical works</li>
            </ul>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-muted/50 p-2 rounded mb-3 border-l-4 border-primary">
          <p className="text-xs leading-snug">
            <span className="font-semibold">Quality Assurance:</span> All materials used will be of premium quality, with precise 
            workmanship and finishing according to international standards. Our team will execute the work with professionalism, 
            ensuring both durability and aesthetic appeal suitable for the Police Club facilities.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-border pt-2 mt-auto">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm font-semibold mb-0.5">Sincerely,</p>
              <p className="text-base font-bold text-primary">House of Princes Aluminum Factory</p>
              <p className="text-xs text-muted-foreground">Authorized Signatory</p>
            </div>
            <div className="text-center">
              <div className="border-t-2 border-border pt-1.5 w-48">
                <p className="text-xs text-muted-foreground">Signature & Stamp</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          @page {
            margin: 10mm;
            size: A4 portrait;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
