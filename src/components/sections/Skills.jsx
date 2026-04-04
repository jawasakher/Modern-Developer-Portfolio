import React, { useEffect, useState, useRef } from "react";
import { skills } from "../../data/skills";
import { Code2, Server, Wrench } from "lucide-react";

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);
    return () => currentSection && observer.unobserve(currentSection);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: skills.filter((s) =>
        ["React.js", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"].includes(s.name)
      ),
    },
    {
      title: "Backend",
      icon: Server,
      skills: skills.filter((s) => ["Node.js", "MongoDB"].includes(s.name)),
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: skills.filter((s) => ["Git & GitHub", "Figma"].includes(s.name)),
    },
  ];

  const getLevel = (level) => {
    const levels = { Expert: 95, Advanced: 80, Intermediate: 65 };
    return levels[level] || 50;
  };

  // 🎯 Count Up Animation
  const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 800;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value]);

    return <span>{count}%</span>;
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* 🌌 Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-28 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#6FE047]/20 blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="flex justify-center gap-4 text-6xl font-extrabold">
            <span className="h-4 w-4 text-sm font-medium text-[#6FE047]">
              <Code2 className="w-full h-full" />
            </span>
            <span className="mb-4 text-4xl font-semibold text-white lg:text-5xl">
              Tech Stack
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-gray-400">
            Building scalable and high-performance applications with modern technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#6FE047]/45 hover:shadow-[0_26px_90px_rgba(111,224,71,0.14)]"
                style={{
                  transform: visible ? "translateY(0)" : "translateY(80px)",
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${index * 150}ms`,
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const rotateX = (y / rect.height - 0.5) * 10;
                  const rotateY = (x / rect.width - 0.5) * -10;

                  e.currentTarget.style.transform = `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.05)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
                }}
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6FE047]/10 to-transparent opacity-0 transition group-hover:opacity-100"></div>

                {/* Header */}
                <div className="flex items-center gap-3 mb-10">
                  <Icon className="h-6 w-6 text-[#6FE047]" />
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-7">
                  {category.skills.map((skill) => {
                    const level = getLevel(skill.level);

                    return (
                      <div key={skill.id}>
                        <div className="flex justify-between mb-2 text-sm">
                          <span className="flex items-center gap-2 text-white/80">
                            <skill.icon className="h-4 w-4 text-[#6FE047]" />
                            {skill.name}
                          </span>

                          <span className="text-xs text-gray-400">
                            <Counter value={level} />
                          </span>
                        </div>

                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: visible ? `${level}%` : "0%",
                              background:
                                "linear-gradient(to right, #6FE047, #8ef57a, #c8ffbb)",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;