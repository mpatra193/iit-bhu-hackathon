import StarRating from "./StarRating"
import TagBadge from "./TagBadge"
import UserCount from "./UserCount"

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full p-5 justify-center item-start gap-[16px]" style={{
      borderRadius: "12px",
      border: "1px solid #DCDCDC",

      boxShadow: "0px 4px 34px 0px rgba(57, 57, 57, 0.15)"
    }}>
      <div className="relative">
        <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-32 object-cover" style={{borderRadius:"12px"}} />
        <div className="absolute bottom-2 right-2">
          <StarRating rating={course.rating} />
        </div>
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <div className="flex gap-2 mb-2">
          <TagBadge />
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

