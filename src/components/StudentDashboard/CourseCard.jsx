import StarRating from "./StarRating"
import TagBadge from "./TagBadge"
import UserCount from "./UserCount"

export default function CourseCard({ course }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-32 object-cover" />
        <div className="absolute bottom-2 right-2">
          <StarRating rating={course.rating} />
        </div>
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <div className="flex gap-2 mb-2">
          <TagBadge type="cloud" />
          <TagBadge type="intermediate" />
        </div>

        <h3 className="text-sm font-medium mb-1 line-clamp-2">{course.title}</h3>

        <UserCount count={course.userCount} />

        <div className="mt-auto pt-2 flex items-center">
          <span className="text-purple-500 font-bold">₹ {course.currentPrice}</span>
          <span className="ml-2 text-gray-400 line-through text-sm">₹ {course.originalPrice}</span>
        </div>
      </div>
    </div>
  )
}

