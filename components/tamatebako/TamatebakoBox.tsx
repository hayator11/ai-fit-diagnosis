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
        "group relative min-h-[390px] overflow-hidden rounded-lg border p-5 text-left shadow-sm transition duration-300",
        "hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300",
        selected ? "border-amber-300 shadow-[0_26px_70px_rgba(245,158,11,0.25)]" : "border-line",
        level.id === "beginner" && "bg-gradient-to-br from-white via-amber-50/45 to-sky-50",
        level.id === "intermediate" && "bg-gradient-to-br from-white via-indigo-50 to-slate-50",
        level.id === "advanced" && "bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950"
      )}
      aria-pressed={selected}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-60",
          level.id === "beginner" && "bg-[radial-gradient(circle_at_18%_18%,rgba(125,211,252,0.24),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(253,224,71,0.24),transparent_20%)]",
          level.id === "intermediate" && "bg-[radial-gradient(circle_at_50%_22%,rgba(129,140,248,0.18),transparent_26%),linear-gradient(135deg,transparent_0_42%,rgba(245,158,11,0.09)_42%_43%,transparent_43%_100%)]",
          level.id === "advanced" && "bg-[radial-gradient(circle_at_50%_28%,rgba(250,204,21,0.2),transparent_26%),linear-gradient(135deg,rgba(250,204,21,0.08)_0_1px,transparent_1px_18px)] bg-[length:auto,22px_22px]"
        )}
      />
      <div className="relative z-10 flex h-full flex-col">
        <div>
          <div className="flex items-start justify-between gap-3">
            <p className={cn("text-xs font-semibold uppercase tracking-[0.2em]", level.id === "advanced" ? "text-amber-200" : "text-muted")}>
              {level.boxName}
            </p>
            {selected ? (
              <span className={cn("rounded-full px-2.5 py-1 text-xs font-semibold", level.id === "advanced" ? "bg-amber-300 text-slate-950" : "bg-amber-100 text-amber-800")}>
                選択中
              </span>
            ) : null}
          </div>
          <h2 className={cn("mt-3 text-xl font-bold", level.id === "advanced" ? "text-white" : "text-ink")}>{level.title}</h2>
          <p className={cn("mt-3 text-sm leading-7", level.id === "advanced" ? "text-slate-200" : "text-muted")}>{level.description}</p>
        </div>
        <BoxVisual levelId={level.id} selected={selected} Icon={Icon} />
        <p className={cn("mt-auto pt-5 text-xs leading-6", level.id === "advanced" ? "text-slate-300" : "text-muted")}>{level.detail}</p>
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
      <div className="relative mx-auto my-8 h-40 w-52 transition duration-300 group-hover:scale-[1.02]">
        <span className="absolute bottom-1 left-1/2 h-5 w-36 -translate-x-1/2 rounded-full bg-slate-300/35 blur-md" />
        <div className={cn("absolute left-10 top-4 h-9 w-32 rounded-[24px] border border-amber-200 bg-gradient-to-br from-white via-amber-50 to-sky-50 shadow-sm transition duration-300", selected && "-translate-y-3 rotate-[-3deg] shadow-lg")} />
        <div className="absolute left-6 top-14 h-[5.5rem] w-40 rounded-[30px] border border-amber-200 bg-gradient-to-br from-white via-amber-50 to-sky-50 shadow-[0_18px_35px_rgba(148,163,184,0.22)]">
          <div className="absolute inset-x-6 top-5 h-px bg-amber-200" />
          <div className="absolute left-1/2 top-1 h-4 w-[4.5rem] -translate-x-1/2 rounded-b-full bg-white/70" />
          <Leaf className="absolute bottom-4 left-5 h-5 w-5 text-emerald-300" />
          <Icon className="absolute right-6 top-7 h-5 w-5 text-amber-400" />
        </div>
        <Sparkles className={cn("absolute right-7 top-1 h-5 w-5 text-sky-300 transition", selected && "scale-125 text-amber-300")} />
        <span className={cn("absolute left-[3.75rem] top-12 h-3 w-24 rounded-full bg-amber-200/60 blur-md transition duration-300", selected && "h-7 bg-amber-300/80")} />
        <span className="absolute left-9 top-8 h-1.5 w-1.5 rounded-full bg-sky-200" />
        <span className="absolute right-12 top-12 h-1 w-1 rounded-full bg-amber-300" />
      </div>
    );
  }

  if (levelId === "intermediate") {
    return (
      <div className="relative mx-auto my-8 h-[10.5rem] w-64 transition duration-300 group-hover:scale-[1.02]">
        <span className="absolute bottom-1 left-1/2 h-6 w-48 -translate-x-1/2 rounded-full bg-indigo-950/20 blur-md" />
        <div className={cn("absolute left-8 top-4 h-11 w-48 rounded-t-xl border border-amber-300 bg-gradient-to-r from-indigo-950 via-indigo-800 to-violet-700 shadow-lg transition duration-300", selected && "-translate-y-3 rotate-[1deg]")} />
        <div className="absolute left-3 top-[3.75rem] h-[6.5rem] w-[14.5rem] rounded-xl border border-amber-300 bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-100 shadow-[0_24px_42px_rgba(30,41,59,0.28)]">
          <div className="absolute inset-x-6 top-5 h-px bg-amber-300" />
          <div className="absolute inset-y-6 left-7 w-px bg-amber-300/50" />
          <div className="absolute inset-y-6 right-7 w-px bg-amber-300/50" />
          <div className="absolute left-1/2 top-9 flex h-[3.25rem] w-[3.25rem] -translate-x-1/2 items-center justify-center rounded-full border border-amber-300 bg-white/90 shadow-inner">
            <Gem className="h-6 w-6 text-indigo-700" />
          </div>
          <Icon className="absolute bottom-5 right-8 h-5 w-5 text-amber-300" />
        </div>
        <span className={cn("absolute left-[3.25rem] top-[3.25rem] h-4 w-[9.5rem] rounded-full bg-violet-300/50 blur-lg transition duration-300", selected && "h-8 bg-amber-200/80")} />
        <span className="absolute left-10 top-10 h-2 w-2 rounded-full bg-amber-200" />
        <span className="absolute right-12 top-9 h-1.5 w-1.5 rounded-full bg-violet-200" />
      </div>
    );
  }

  return (
    <div className="relative mx-auto my-8 h-48 w-72 transition duration-300 group-hover:scale-[1.02]">
      <span className="absolute bottom-1 left-1/2 h-8 w-56 -translate-x-1/2 rounded-full bg-black/40 blur-lg" />
      <div className={cn("absolute left-8 top-0 h-14 w-56 rounded-t-xl border border-amber-300 bg-gradient-to-r from-slate-950 via-violet-950 to-indigo-950 shadow-xl transition duration-300", selected && "-translate-y-3")} />
      <div className="absolute left-3 top-12 h-36 w-[16.5rem] rounded-xl border border-amber-300 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 shadow-2xl">
        <div className="absolute inset-x-5 top-5 h-px bg-amber-300" />
        <div className="absolute inset-x-7 top-[3.25rem] h-px bg-violet-300/50" />
        <div className="absolute inset-x-8 top-[5.5rem] h-px bg-amber-300/60" />
        <div className="absolute inset-x-10 bottom-7 h-px bg-sky-200/30" />
        <div className="absolute left-5 top-8 h-[4.5rem] w-[4.5rem] rounded-full border border-amber-300/70 bg-[radial-gradient(circle,rgba(250,204,21,0.48),transparent_62%)]" />
        <ScrollText className="absolute left-11 top-[3.25rem] h-6 w-6 text-amber-200" />
        <Icon className="absolute bottom-6 right-8 h-7 w-7 text-amber-300" />
        <div className="absolute right-8 top-8 grid grid-cols-3 gap-1 opacity-75">
          {Array.from({ length: 9 }).map((_, index) => <span key={index} className="h-1.5 w-1.5 rounded-full bg-sky-200" />)}
        </div>
        <div className="absolute right-[5.5rem] bottom-8 h-12 w-10 rounded-b-lg border border-amber-300/50 border-t-0" />
      </div>
      <span className={cn("absolute left-10 top-[3.25rem] h-8 w-52 rounded-full bg-amber-300/30 blur-xl transition duration-300", selected && "h-14 bg-amber-300/70")} />
      <span className="absolute left-10 top-4 h-2 w-2 rounded-full bg-amber-200" />
      <span className="absolute right-10 top-16 h-1.5 w-1.5 rounded-full bg-sky-200" />
    </div>
  );
}
