import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import React from "react";

export function CVSection() {
  const experiences = [
    {
      title: "QA Automation Engineer",
      company: "Zunzun Solutions LLC",
      period: "2021 - Present",
      description:
        "Developed comprehensive test automation frameworks for web, mobile, and API testing. Implemented CI/CD integration, mentored team members on testing best practices, and ensured high-quality software delivery in Agile environments.",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "Docker",
    "Git",
    "Figma",
    "C#",
    "Selenium",
    "Appium",
    "Playwright",
    "Postman",
    "Azure",
    "xUnit + RestSharp",
    "NUnit",
    "MSTest",
    "DynamoDB",
    "SQL",
  ];

  const education = [
    {
      degree: "Self-Taught QA Automation Engineer",
      year: "2021 - Present",
    },
    {
      degree: "Online Courses & Certifications",
      school:
        "Various Platforms (Udemy, Coursera, Pluralsight)",
      year: "2021 - Present",
    },
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12">
          Experience & Skills
        </h2>

        <div className="space-y-8">
          {/* Experience */}
          <Card className="p-6">
            <h3 className="mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4>{exp.title}</h4>
                    <span className="text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground">
                    {exp.description}
                  </p>
                  {index < experiences.length - 1 && (
                    <Separator className="mt-6" />
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-6">
            <h3 className="mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Education */}
          <Card className="p-6">
            <h3 className="mb-6">Learning Journey</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <h4>{edu.degree}</h4>
                  <p className="text-muted-foreground">
                    {edu.school ? `${edu.school} • ${edu.year}` : edu.year}
                  </p>

                  {/* Show separator only if not last item */}
                  {index < education.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}