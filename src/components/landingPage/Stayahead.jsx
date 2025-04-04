import { ArrowRight } from "lucide-react";

function Stayahead() {
    return (
        <section className="flex items-center py-16 px-10 bg-purple-50">
        <div className="w-1/2">
          <img 
            src="/api/placeholder/400/400" 
            alt="Student pointing" 
            className="w-full"
          />
        </div>
        <div className="w-1/2 pl-16">
          <h2 className="text-4xl font-bold text-gray-800">
            STAY AHEAD <span className="border-b-4 border-indigo-600">of the curve</span>
          </h2>
          <p className="mt-6 text-gray-600">
            Stay ahead of the curve with our latest in tech courses on <span className="text-indigo-600">Ulearnix</span>. 
            Explore cutting-edge topics and master the skills demanded by 
            today's dynamic tech industry.
          </p>
          <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium flex items-center">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    );
      
}

export default Stayahead;