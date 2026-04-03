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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
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
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* 🌌 Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-28">
          <h2 className="text-6xl font-extrabold flex justify-center gap-4 ">
            <span className="text-sm text-primary font-medium w-4 h-4 text-primary">
              <Code2 className="w-full h-full" />
            </span>
            <span className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Tech Stack
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Building scalable and high-performance applications with modern technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl"
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
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-primary/10 to-transparent rounded-3xl"></div>

                {/* Header */}
                <div className="flex items-center gap-3 mb-10">
                  <Icon className="text-primary w-6 h-6" />
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
                            <skill.icon className="w-4 h-4 text-primary" />
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
                                "linear-gradient(to right, #8DFF69, #22C55E, #06B6D4)",
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