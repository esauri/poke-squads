import { Card } from "@shared/ui/card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <Card title="Card" href="https://www.google.com">
        <p>Card</p>
      </Card>
    </div>
  );
}
