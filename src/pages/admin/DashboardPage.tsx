import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquare, Package, Image, TrendingUp, Users, Eye } from "lucide-react";

interface DashboardStats {
  totalInquiries: number;
  pendingInquiries: number;
  totalProducts: number;
  totalGalleryItems: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalInquiries: 0,
    pendingInquiries: 0,
    totalProducts: 0,
    totalGalleryItems: 0,
  });
  const [recentInquiries, setRecentInquiries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch inquiries count
        const { count: totalInquiries } = await supabase
          .from("inquiries")
          .select("*", { count: "exact", head: true });

        const { count: pendingInquiries } = await supabase
          .from("inquiries")
          .select("*", { count: "exact", head: true })
          .eq("status", "pending");

        // Fetch products count
        const { count: totalProducts } = await supabase
          .from("products")
          .select("*", { count: "exact", head: true });

        // Fetch gallery count
        const { count: totalGalleryItems } = await supabase
          .from("gallery")
          .select("*", { count: "exact", head: true });

        // Fetch recent inquiries
        const { data: inquiries } = await supabase
          .from("inquiries")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(5);

        setStats({
          totalInquiries: totalInquiries || 0,
          pendingInquiries: pendingInquiries || 0,
          totalProducts: totalProducts || 0,
          totalGalleryItems: totalGalleryItems || 0,
        });

        setRecentInquiries(inquiries || []);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Inquiries",
      value: stats.totalInquiries,
      icon: MessageSquare,
      color: "bg-blue-500",
    },
    {
      title: "Pending Inquiries",
      value: stats.pendingInquiries,
      icon: TrendingUp,
      color: "bg-orange-500",
    },
    {
      title: "Products",
      value: stats.totalProducts,
      icon: Package,
      color: "bg-green-500",
    },
    {
      title: "Gallery Items",
      value: stats.totalGalleryItems,
      icon: Image,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="font-heading text-3xl font-bold text-foreground mt-1">
                    {isLoading ? "..." : stat.value}
                  </p>
                </div>
                <div className={`h-12 w-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Inquiries */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Recent Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : recentInquiries.length === 0 ? (
            <p className="text-muted-foreground">No inquiries yet.</p>
          ) : (
            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <div 
                  key={inquiry.id} 
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-foreground">{inquiry.name}</p>
                    <p className="text-sm text-muted-foreground">{inquiry.email}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      inquiry.status === "pending" 
                        ? "bg-orange-100 text-orange-700" 
                        : inquiry.status === "contacted"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}>
                      {inquiry.status}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(inquiry.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
