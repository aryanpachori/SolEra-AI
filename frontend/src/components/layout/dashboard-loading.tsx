import { Skeleton } from "@/components/ui/skeleton";

export function DashboardLoading() {
  return (
    <div className="space-y-6">
      {/* Portfolio Summary Skeletons */}
      <div className="grid md:grid-cols-3 gap-6">
        <Skeleton className="h-24 rounded-xl bg-white/5" />
        <Skeleton className="h-24 rounded-xl bg-white/5" />
        <Skeleton className="h-24 rounded-xl bg-white/5" />
      </div>

      {/* Charts Skeletons */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Skeleton className="h-80 rounded-xl bg-white/5" />
        </div>
        <div>
          <Skeleton className="h-80 rounded-xl bg-white/5" />
        </div>
      </div>

      {/* Table Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-12 w-full rounded-xl bg-white/5" />
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full rounded-lg bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}
