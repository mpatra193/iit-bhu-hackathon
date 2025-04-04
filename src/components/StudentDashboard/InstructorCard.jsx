import StarRating from "./StarRating"

export default function InstructorCard({ instructor }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="relative">
        <img src={instructor.image || "/placeholder.svg"} alt={instructor.name} className="w-full h-40 object-cover" />
        <div className="absolute bottom-2 right-2">
          <StarRating rating={instructor.rating} />
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-medium">{instructor.name}</h3>
        <p className="text-sm text-gray-400">{instructor.role}</p>
        <p className="text-xs text-gray-500 mt-1">{instructor.courseCount} Courses</p>
      </div>
    </div>
  )
}

