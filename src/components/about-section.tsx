import { Card } from './ui/card';
import React from 'react';

export function AboutSection() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="mb-4">Background</h3>
            <p className="text-muted-foreground mb-4">
              As a self-taught QA Automation Engineer with 3 years of experience, my journey into technology began 
              through curiosity and hands-on learning. I've built my expertise through dedicated practice, online 
              courses, and real-world projects, proving that passion and determination can create meaningful careers.
            </p>
            <p className="text-muted-foreground">
              My self-taught background has taught me to be resourceful, adaptable, and constantly eager to learn. 
              I believe in continuous improvement and staying current with evolving technologies.
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="mb-4">What I Do</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Web and mobile application testing automation</li>
              <li>• API testing and validation</li>
              <li>• Test framework design and implementation</li>
              <li>• CI/CD pipeline integration</li>
              <li>• Performance and load testing</li>
              <li>• Quality assurance best practices</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}