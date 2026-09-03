import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
];

function Track() {
  return (
    <div className="flex items-center gap-10 pr-10 shrink-0">
      {skills.map(({ name, icon: Icon }) => (
        <div key={name} className="flex items-center gap-3 shrink-0">
          <Icon className="w-7 h-7 text-white" />
          <span className="font-mono text-lg sm:text-xl uppercase tracking-tight text-white">
            {name}
          </span>
          <span className="text-flame text-2xl">✦</span>
        </div>
      ))}
    </div>
  );
}

export default function SkillTicker() {
  return (
    <div className="w-full overflow-hidden bg-ink border-y-[3px] border-ink dark:border-white py-4">
      <div className="flex animate-marquee w-max no-scrollbar">
        <Track />
        <Track />
      </div>
    </div>
  );
}
