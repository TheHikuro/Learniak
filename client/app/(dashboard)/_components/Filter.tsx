'use client'
import { Chip } from "@nextui-org/react"

const categories = [
    "Mathématiques",
    "Développement",
    "Design",
    "Photgraphie",
    "Marketing",
    "Musique",
    "Cuisine",
    "Sport",
    "Langues",
]

export default function FilterCourses() {
    return (
        <div className="p-7 w-full flex items-center px-5 space-x-2">
            {categories.map((item, index) => (
                <Chip
                    key={index}
                    color="default"
                    variant="faded"
                    className="hover:bg-blue-500 hover:text-white cursor-pointer duration-150 ease-in-out"
                    size="lg"
                >
                    {item}
                </Chip>
            ))}
        </div>
    )
}
