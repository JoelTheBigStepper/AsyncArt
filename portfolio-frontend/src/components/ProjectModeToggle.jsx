export default function ProjectModeToggle({ mode, setMode }) {
  const options = [
    { key: "demo", label: "Client & Demo Work" },
    { key: "real", label: "Real-World Products" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mb-12 sm:inline-flex">
      {options.map((opt) => {
        const active = mode === opt.key;
        return (
          <button
            key={opt.key}
            onClick={() => setMode(opt.key)}
            className={`press min-w-0 font-mono text-sm sm:text-base uppercase tracking-tight px-3 sm:px-5 py-3 border-brut font-bold
              ${
                active
                  ? "bg-flame text-white shadow-brut"
                  : "bg-transparent text-ink dark:text-white shadow-brut-sm hover:shadow-brut"
              }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
