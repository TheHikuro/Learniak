"use client";
import { Card, CardBody, CardFooter, Spacer, Image } from "@nextui-org/react";
import { BsBook } from "react-icons/bs";
import InfoCard from "../(root)/_components/info-card";
import { BiTimeFive } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";
import { list } from "../(root)/_mock";

export default function Dashboard() {
    return (
        <div className="px-5 space-y-5 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard
                    label="En cours d'apprentissage"
                    numberOfCourses={5}
                    Icon={BiTimeFive}
                    variant="inprogress"
                />
                <InfoCard
                    label="Terminés"
                    numberOfCourses={5}
                    Icon={BsCheck2Circle}
                    variant="completed"
                />
            </div>
            <div className="gap-5 grid grid-cols-2 sm:grid-cols-4">
                {list.map((item, index) => (
                    <Card key={index} isPressable onPress={() => console.log("item pressed")} radius='sm' className="border">
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
        </div>
    )
}