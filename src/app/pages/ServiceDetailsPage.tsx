import { useParams } from "react-router";
import { ServiceDetailsFeature } from "@/features/services";

export function ServiceDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  return <ServiceDetailsFeature slug={slug} />;
}
