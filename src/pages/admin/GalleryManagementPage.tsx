import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Image } from "lucide-react";

export default function GalleryManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Gallery Management</h1>
        <p className="text-muted-foreground">Manage factory and project images</p>
      </div>

      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Image className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">Gallery management coming soon.</p>
          <p className="text-sm text-muted-foreground">Upload and organize your factory, product, and project images.</p>
        </CardContent>
      </Card>
    </div>
  );
}
