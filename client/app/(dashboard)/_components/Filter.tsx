'use client'
import { Chip } from "@nextui-org/react"

export default function FilterCourses() {
    return (
        <div className="p-7 w-full flex items-center px-5 space-x-2">
            <Chip color="default" variant="faded" size="lg">Mathématiques</Chip>
            <Chip color="default" variant="faded" size="lg">Développement</Chip>
            <Chip color="default" variant="faded" size="lg">Design</Chip>
            <Chip color="default" variant="faded" size="lg">Photgraphie</Chip>
            <Chip color="default" variant="faded" size="lg">Marketing</Chip>
            <Chip color="default" variant="faded" size="lg">Musique</Chip>
            <Chip color="default" variant="faded" size="lg">Cuisine</Chip>
            <Chip color="default" variant="faded" size="lg">Sport</Chip>
            <Chip color="default" variant="faded" size="lg">Langues</Chip>
        </div>
    )
}