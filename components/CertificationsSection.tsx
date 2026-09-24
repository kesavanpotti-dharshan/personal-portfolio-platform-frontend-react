import React from "react";
import { Award, GraduationCap, Code2 } from "lucide-react";
import { CERTIFICATIONS, EDUCATION } from "../data";
import { CERT_DELAYS } from "../constants";

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-blueprint-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Certifications */}
          <div className="reveal">
            <div className="flex items-center gap-5 mb-12">
              <div className="p-4 border border-accent/50 rounded-lg text-accent">
                <Award size={36} />
              </div>
              <h3 className="font-mono uppercase text-4xl font-bold tracking-tight text-ink">
                Certifications
              </h3>
            </div>
            <div className="space-y-8">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={cert.number}
                  className={`reveal ${CERT_DELAYS[idx % CERT_DELAYS.length]} p-8 bg-raised border border-line rounded-lg hover:border-cool transition-colors duration-300 group`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-accent font-sans">
                      {cert.name}
                    </h4>
                    <span className="font-mono text-xs text-muted-3 border border-line px-3 py-1 rounded-sm">
                      {cert.year}
                    </span>
                  </div>
                  <p className="font-mono text-muted-3 uppercase tracking-widest text-xs">
                    Credential: {cert.number}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="reveal delay-300">
            <div className="flex items-center gap-5 mb-12">
              <div className="p-4 border border-cool/50 rounded-lg text-cool">
                <GraduationCap size={36} />
              </div>
              <h3 className="font-mono uppercase text-4xl font-bold tracking-tight text-ink">
                Education
              </h3>
            </div>
            <div className="p-10 bg-raised border border-line rounded-lg relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity text-cool">
                <GraduationCap size={180} />
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-cool mb-2 leading-tight font-sans">
                      {EDUCATION.course}
                    </h4>
                    <p className="text-xl text-ink font-semibold font-sans">
                      {EDUCATION.university}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-3 border border-line px-4 py-1.5 rounded-sm">
                    {EDUCATION.year}
                  </span>
                </div>
                <p className="text-muted-1 text-lg mb-10 font-medium font-sans">
                  {EDUCATION.location}
                </p>
                <div className="pt-8 border-t border-line">
                  <div className="flex items-center gap-3 text-accent font-mono text-sm uppercase tracking-widest">
                    <div className="w-10 h-10 border border-accent/40 rounded-full flex items-center justify-center">
                      <Code2 size={20} />
                    </div>
                    Computer Science and Information Technology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
