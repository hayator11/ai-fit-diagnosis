import { Compass, Database, Gem, KeyRound, Leaf, ScrollText, Sparkles } from "lucide-react";
import type { ExperienceLevel, ExperienceLevelId } from "@/src/data/ai-tamatebako/experienceLevels";
import { cn } from "@/lib/utils/cn";

type TamatebakoBoxProps = {
  level: ExperienceLevel;
  selected: boolean;
  onSelect: (id: ExperienceLevelId) => void;
};

const iconMap = {
  "small-key": KeyRound,
  "light-key": Compass,
  "gold-key": Database
};

export function TamatebakoBox({ level, selected, onSelect }: TamatebakoBoxProps) {
  const Icon = iconMap[level.icon as keyof typeof iconMap] ?? Sparkles;

  return (
    <button
      type="button"
      onClick={() => onSelect(level.id)}
      className={cn(
        "group relative min-h-[360px] overflow-hidden rounded-lg border bg-white p-5 text-left shadow-sm transition duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
        selected ? "border-amber-300 shadow-[0_22px_60px_rgba(245,158,11,0.22)]" : "border-line"
      )}
      aria-pressed={selected}
    >
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{level.boxName}</p>
          <h2 className="mt-3 text-xl font-bold text-ink">{level.title}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{level.description}</p>
        </div>
        <BoxVisual levelId={level.id} selected={selected} Icon={Icon} />
        <p className="mt-5 text-xs leading-6 text-muted">{level.detail}</p>
      </div>
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition duration-300",
          selected && "opacity-100",
          level.id === "beginner" && "bg-[radial-gradient(circle_at_50%_48%,rgba(253,224,71,0.26),transparent_34%)]",
          level.id === "intermediate" && "bg-[radial-gradient(circle_at_50%_52%,rgba(129,140,248,0.26),transparent_38%)]",
          level.id === "advanced" && "bg-[radial-gradient(circle_at_50%_55%,rgba(250,204,21,0.28),transparent_42%)]"
        )}
      />
    </button>
  );
}

function BoxVisual({
  levelId,
  selected,
  Icon
}: {
  levelId: ExperienceLevelId;
  selected: boolean;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  if (levelId === "beginner") {
    return (
      <div className="relative mx-auto mt-7 h-32 w-44">
        <div className={cn("absolute left-8 top-2 h-8 w-28 rounded-[22px] border border-amber-200 bg-gradient-to-br from-white to-sky-50 shadow-sm transition", selected && "-translate-y-2 rotate-[-2deg] shadow-lg")} />
        <div className="absolute left-5 top-10 h-20 w-[8.5rem] rounded-[28px] border border-amber-200 bg-gradient-to-br from-white via-amber-50 to-sky-50 shadow-md">
          <div className="absolute inset-x-5 top-4 h-px bg-amber-200" />
          <Leaf className="absolute bottom-4 left-5 h-5 w-5 text-emerald-300" />
          <Icon className="absolute right-5 top-5 h-5 w-5 text-amber-400" />
        </div>
        <Sparkles className={cn("absolute right-6 top-0 h-5 w-5 text-sky-300 transition", selected && "scale-125 text-amber-300")} />
        <span className={cn("absolute left-14 top-9 h-3 w-20 rounded-full bg-amber-200/60 blur-md transition", selected && "h-5 bg-amber-300/70")} />
      </div>
    );
  }

  if (levelId === "intermediate") {
    return (
      <div className="relative mx-auto mt-7 h-36 w-56">
        <div className={cn("absolute left-6 top-3 h-10 w-44 rounded-t-lg border border-amber-300 bg-gradient-to-r from-indigo-950 via-indigo-800 to-violet-700 shadow-md transition", selected && "-translate-y-2 rotate-[1deg]")} />
        <div className="absolute left-3 top-12 h-24 w-[12.5rem] rounded-lg border border-amber-300 bg-gradient-to-br from-indigo-950 via-indigo-900 to-white shadow-xl">
          <div className="absolute inset-x-5 top-4 h-px bg-amber-300" />
          <div className="absolute left-1/2 top-8 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-amber-300 bg-white/90">
            <Gem className="h-6 w-6 text-indigo-700" />
          </div>
          <Icon className="absolute bottom-4 right-5 h-5 w-5 text-amber-300" />
        </div>
        <span className={cn("absolute left-11 top-11 h-4 w-36 rounded-full bg-violet-300/50 blur-lg transition", selected && "h-7 bg-amber-200/70")} />
      </div>
    );
  }

  return (
    <div className="relative mx-auto mt-7 h-40 w-60">
      <div className={cn("absolute left-5 top-0 h-12 w-[12.5rem] rounded-t-lg border border-amber-300 bg-gradient-to-r from-slate-950 via-violet-950 to-indigo-950 shadow-lg transition", selected && "-translate-y-2")} />
      <div className="absolute left-2 top-10 h-32 w-56 rounded-lg border border-amber-300 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 shadow-2xl">
        <div className="absolute inset-x-4 top-5 h-px bg-amber-300" />
        <div className="absolute inset-x-5 top-12 h-px bg-violet-300/50" />
        <div className="absolute inset-x-7 top-20 h-px bg-amber-300/60" />
        <div className="absolute left-5 top-7 h-16 w-16 rounded-full border border-amber-300/70 bg-[radial-gradient(circle,rgba(250,204,21,0.42),transparent_60%)]" />
        <ScrollText className="absolute left-10 top-11 h-6 w-6 text-amber-200" />
        <Icon className="absolute bottom-5 right-7 h-6 w-6 text-amber-300" />
        <div className="absolute right-7 top-7 grid grid-cols-3 gap-1 opacity-70">
          {Array.from({ length: 9 }).map((_, index) => <span key={index} className="h-1.5 w-1.5 rounded-full bg-sky-200" />)}
        </div>
      </div>
      <span className={cn("absolute left-8 top-12 h-8 w-44 rounded-full bg-amber-300/30 blur-xl transition", selected && "h-12 bg-amber-300/60")} />
    </div>
  );
}
