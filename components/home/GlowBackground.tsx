export default function GlowBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* warm beige wash */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#F6F1E7] blur-3xl opacity-60" />

      {/* subtle green accent */}
      <div className="absolute top-[420px] right-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-500 blur-3xl opacity-[0.06]" />

      {/* second beige blob lower down */}
      <div className="absolute top-[900px] left-[-140px] h-[520px] w-[520px] rounded-full bg-[#FBF8F2] blur-3xl opacity-70" />
    </div>
  );
}
