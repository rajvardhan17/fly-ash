import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function UsersManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">User Management</h1>
        <p className="text-muted-foreground">Manage admin users and roles</p>
      </div>

      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Users className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground">User management coming soon.</p>
          <p className="text-sm text-muted-foreground">Create admin users and assign roles (Admin, Manager, Staff).</p>
        </CardContent>
      </Card>
    </div>
  );
}
