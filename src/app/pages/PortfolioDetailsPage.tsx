import { useParams } from "react-router";
import { PortfolioDetailsFeature } from "@/features/portfolio";

export function PortfolioDetailsPage() {
  const { slug } = useParams<{ slug: string }>();

  return <PortfolioDetailsFeature slug={slug} />;
}
