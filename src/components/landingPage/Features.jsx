function Features() {
    return (
        <section className="flex justify-center space-x-8 py-6 bg-purple-50">
        <div className="bg-white rounded-full px-4 py-2 flex items-center">
          <div className="flex -space-x-2 mr-4">
            <img src="/api/placeholder/32/32" alt="Instructor" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="/api/placeholder/32/32" alt="Instructor" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="/api/placeholder/32/32" alt="Instructor" className="w-8 h-8 rounded-full border-2 border-white" />
          </div>
          <div>
            <p className="font-bold">20+</p>
            <p className="text-xs text-gray-500">Instructors</p>
          </div>
        </div>
        
        <div className="bg-white rounded-full px-4 py-2 flex items-center">
          <div className="bg-gray-100 p-2 rounded-full mr-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <div>
            <p className="font-bold">50+ Courses</p>
            <p className="text-xs text-gray-500">Multiple category</p>
          </div>
        </div>
        
        <div className="bg-white rounded-full px-4 py-2 flex items-center">
          <img src="/api/placeholder/32/32" alt="Jane" className="w-10 h-10 rounded-full mr-4" />
          <div>
            <p className="font-bold">Jane</p>
            <p className="text-xs text-gray-500">Amazing cyber security courses for beginners</p>
          </div>
        </div>
      </section>
    );
}

export default Features;