import { ReactNode } from 'react';

export default function PageSection({ title, content, children }: { title: string; content?: string; children?: ReactNode }) {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-gray-700">
          {content}
        </p>
        {children}
      </div>
    </section>
  );
}