export default function PreviewBanner() {
  return (
    <div className="fixed top-0 left-0 z-[60] pointer-events-none">
      <div className="absolute w-[320px] bg-amber text-deep-space text-center text-sm font-bold font-mono uppercase tracking-widest py-2.5 rotate-[-45deg] top-10 -left-20 shadow-lg">
        Preview Build
      </div>
    </div>
  );
}
