'use client'

import { useSession, signOut } from 'next-auth/react'
import { motion } from 'framer-motion'
import { Card, CardBody, CardFooter, Image, Spacer } from '@nextui-org/react'
import { BsBook } from 'react-icons/bs'
import { Fragment } from 'react'
import FilterCourses from '@/(dashboard)/_components/Filter'

export default function Home() {

    const { data } = useSession()

    const list = [
        {
            title: "Orange",
            img: `https://source.unsplash.com/random/640x480?sig=${Math.random() * 100}`,
            price: "$5.50",
        },
        {
            title: "Tangerine",
            img: `https://source.unsplash.com/random/640x480?sig=${Math.random() * 100}`,
            price: "$3.00",
        },
        {
            title: "Raspberry",
            img: `https://source.unsplash.com/random/640x480?sig=${Math.random() * 100}`,
            price: "$10.00",
        },
        {
            title: "Lemon",
            img: `https://source.unsplash.com/random/640x480?sig=${Math.random() * 100}`,
            price: "$5.30",
        },
        {
            title: "Avocado",
            img: `https://source.unsplash.com/random/640x480?sig=${Math.random() * 100}`,
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            img: `https://source.unsplash.com/random/640x480?sig=${Math.random() * 100}`,
            price: "Gratuit",
        },
        {
            title: "Banana",
            img: `https://source.unsplash.com/random/640x480?sig=${Math.random() * 100}`,
            price: "$7.50",
        },
        {
            title: "Watermelon",
            img: `https://source.unsplash.com/random/640x480?sig=${Math.random() * 100}`,
            price: "$12.20",
        },
    ];

    return (
        <Fragment>
            <FilterCourses />
            <div className="gap-5 grid grid-cols-2 sm:grid-cols-4 px-5">
                {list.map((item, index) => (
                    <Card key={index} isPressable onPress={() => console.log("item pressed")} radius='sm' className='border'>
                        <CardBody className="overflow-visible p-3">
                            <Image
                                radius="sm"
                                width="100%"
                                alt={item.title}
                                className="w-full object-cover h-[160px]"
                                src={item.img}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between flex-col items-start space-y-2">
                            <b className='text-lg -mb-2'>{item.title}</b>
                            <p className='text-gray-400 text-xs'>John DOE</p>
                            <div >
                                <div className='flex items-center'>
                                    <div className='rounded-full border h-5 w-5 flex items-center justify-center p-0.5 border-sky-300 bg-blue-100'>
                                        <BsBook size={10} className='text-sky-500' />
                                    </div>
                                    <Spacer x={1} />
                                    <span className="mr-0.5 text-sm">5</span>
                                    <span className='text-sm'> Chapitres</span>
                                </div>
                            </div>
                            <p className="text-default-500">{item.price}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Fragment>
    )
}
