import { ContentSection, Module } from "@/lib/trail-loader";

interface ModuleContentProps {
  module: Module;
}

function ContentSectionComponent({ section }: { section: ContentSection }) {
  switch (section.type) {
    case 'heading':
      return (
        <h3 className="text-xl font-bold text-custom-title mb-4 mt-6 first:mt-0">
          {section.content}
        </h3>
      );
    
    case 'text':
      return (
        <div 
          className="prose max-w-none text-custom-text mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      );
    
    case 'image':
      return (
        <div className="my-6">
          <img 
            src={section.content} 
            alt={section.alt || 'Imagem do módulo'} 
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
          />
          {section.caption && (
            <p className="text-sm text-custom-text text-center mt-2 italic">
              {section.caption}
            </p>
          )}
        </div>
      );
    
    case 'list':
      return (
        <ul className="list-disc list-inside text-custom-text mb-4 space-y-2">
          {section.items.map((item, index) => (
            <li key={index} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    
    default:
      return null;
  }
}

export function ModuleContent({ module }: ModuleContentProps) {
  // Use new sections format if available, otherwise fall back to legacy content
  if (module.sections && module.sections.length > 0) {
    return (
      <div className="space-y-4">
        {module.sections.map((section, index) => (
          <ContentSectionComponent key={index} section={section} />
        ))}
      </div>
    );
  }
  
  // Legacy content format (HTML string)
  return (
    <div 
      className="prose max-w-none text-custom-text"
      dangerouslySetInnerHTML={{ __html: module.content }}
    />
  );
}