interface SectionLabelProps {
  mainText: string;
  subText?: string;
}

export default function SectionLabel({ mainText, subText }: SectionLabelProps) {
  return (
    <div className="border-slate-light flex items-center justify-between border-b bg-slate-medium/10 px-6 py-4">
      <div className="flex items-center gap-4">
        <span className="bg-matte-red h-1 w-12" />
        <span className="font-mono text-[10px] font-bold tracking-[0.5em] text-white uppercase">
          {mainText}
        </span>
      </div>
      {subText && (
        <div className="hidden md:block">
          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
            {subText}
          </span>
        </div>
      )}
    </div>
  );
}
