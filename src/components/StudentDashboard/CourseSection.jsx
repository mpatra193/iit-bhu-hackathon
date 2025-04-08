import CourseCard from "./CourseCard"

export default function CourseSection({ title, courses ,isFirst }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={`text-lg font-medium ${isFirst?"text-white":"text-black"}`}>{title}</h2>
        <a href="#" className="text-sm text-gray-400 hover:text-gray-800 flex items-center">
          See all <span className="ml-1">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto pb-2">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  )
}

