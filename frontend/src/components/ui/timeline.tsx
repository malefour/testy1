import React from 'react';

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start">
            {/* Timeline dot */}
            <div className="absolute left-2 top-2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
            
            {/* Content */}
            <div className="ml-12 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-inter font-bold text-lg text-navy-900 mb-4">
                {item.title}
              </h3>
              <div className="text-gray-700">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 