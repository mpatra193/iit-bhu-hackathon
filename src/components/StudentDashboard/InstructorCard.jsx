import StarRating from "./StarRating"

export default function InstructorCard({ instructor }) {
  return (
    <div className="bg-[#262525] h-90 rounded-lg overflow-hidden text-center">
      <div className="relative">
        <img src={instructor.image || "/placeholder.svg"} alt={instructor.name} className="w-full h-60 object-cover" />
        <div className="absolute bottom-2 right-2">
          <StarRating rating={instructor.rating} />
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-medium text-gray-400">{instructor.name}</h3>
        <p className="text-sm text-gray-400">{instructor.role}</p>
        <p className="text-xs text-gray-500 mt-1">{instructor.courseCount} Courses</p>
      </div>
    </div>
  )
}

