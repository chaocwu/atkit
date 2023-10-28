import { Loader } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex content-center justify-center min-h-screen">
      <Loader className="h-4 w-4 animate-spin self-center" />
    </div>
  )
}
