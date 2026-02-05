import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function ContentManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Content Management</h1>
        <p className="text-muted-foreground">Manage website content and pages</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              Homepage Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Edit hero section, features, and CTAs</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              About Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Edit company profile and story</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              Manufacturing Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Edit process steps and descriptions</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:border-primary transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              Why Choose Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Edit features and benefits</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground">
            Content management features are available. Select a section above to edit.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
