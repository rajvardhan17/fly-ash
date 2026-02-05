import { Card, CardContent } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Configure company and website settings</p>
      </div>

      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Settings className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Settings management coming soon.</p>
          <p className="text-sm text-muted-foreground">Update company details, contact info, social links, and SEO settings.</p>
        </CardContent>
      </Card>
    </div>
  );
}
