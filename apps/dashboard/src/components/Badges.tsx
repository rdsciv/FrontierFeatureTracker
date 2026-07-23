export function PriorityBadge({ priority }: { priority: string }) {
  const cls =
    priority === "high"
      ? "badge-high"
      : priority === "medium"
        ? "badge-medium"
        : "badge-low";
  return <span className={`badge ${cls}`}>{priority}</span>;
}

export function SeverityBadge({ severity }: { severity: string }) {
  const cls =
    severity === "critical"
      ? "badge-critical"
      : severity === "notable"
        ? "badge-notable"
        : "badge-info";
  return <span className={`badge ${cls}`}>{severity}</span>;
}

export function ReliabilityBadge({ reliability }: { reliability: string }) {
  const cls =
    reliability === "official"
      ? "badge-official"
      : reliability === "reputable_press"
        ? "badge-press"
        : "badge-estimate";
  return <span className={`badge ${cls}`}>{reliability.replace("_", " ")}</span>;
}

export function SupportCell({ level, notes }: { level: string; notes?: string | null }) {
  const cls = `cell cell-${level}`;
  return (
    <span className={cls} title={notes ?? level}>
      {level}
    </span>
  );
}
