import { redirect } from "next/navigation"

export default async function CourseIdPage({ params }: {
    params: {
        courseId: string
    }
}) {
    const course = await fetch(`https://api.learniak.com/courses/${params.courseId}`).then(res => res.json())

    if (!course) return redirect('/')

    return redirect(`/courses/${course.id}/chapter/${course.chapters[0].id}`)
}