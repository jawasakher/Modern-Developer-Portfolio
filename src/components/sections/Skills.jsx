import React from "react";
import { skills } from "../../data/skills";
import FadeIn from "../animations/FadeIn";

const Skills = () => {
  const skillCategories = {
    "Frontend Development": skills.filter((s) =>
      [
        "React.js",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ].includes(s.name)
    ),

    "Backend & APIs": skills.filter((s) =>
      ["Node.js", "MongoDB"].includes(s.name)
    ),

    "Tools & Others": skills.filter((s) =>
      ["Git & GitHub", "Figma"].includes(s.name)
    ),
  };

  const getProficiencyLevel = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    };
    return levels[level] || 50;
  };

  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
      Advanced: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
      Intermediate: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
    };
    return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-10 text-center">
            My Skills
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, items]) => (
            <FadeIn key={category}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:scale-105 transition">
                <h3 className="text-xl font-semibold mb-6">
                  {category}
                </h3>

                <div className="space-y-5">
                  {items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div key={skill.id}>
                        <div className="flex justify-between mb-2">
                          <span className="flex items-center gap-2">
                            <Icon className="text-lg" />
                            {skill.name}
                          </span>

                          <span
                            className={`text-xs px-2 py-1 rounded border ${getLevelColor(
                              skill.level
                            )}`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress */}
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary transition-all duration-500"
                            style={{
                              width: `${getProficiencyLevel(skill.level)}%`,
                            }}
                          />
                        </div>

                        <span className="text-xs text-gray-400">
                          {skill.experience}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
