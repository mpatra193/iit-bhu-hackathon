export default function UserCount({ count }) {
    return (
      <div className="flex items-center text-xs text-gray-400 mt-1">
        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
        {count}
      </div>
    )
  }
  
  