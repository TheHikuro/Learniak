import { IconBase, IconBaseProps } from "react-icons"

type InfoCardProps = {
    numberOfCourses: number
    label: string
    Icon: (props: IconBaseProps) => JSX.Element;
    variant: 'inprogress' | 'completed'
}

export default function InfoCard({ numberOfCourses, label, Icon, variant }: InfoCardProps) {
    return (
        <div className="border rounded-md flex items-center gap-x-2 p-3">
            <div className={`rounded-full border flex items-center justify-center p-3 ${variant === 'inprogress' ? 'bg-blue-500/40' : 'bg-emerald-500/40'}`}>
                <Icon size={30} className={`${variant === 'inprogress' ? 'text-blue-800' : 'text-emerald-800'}`} />
            </div>
            <div>
                <p className="font-medium">{label}</p>
                <p className="text-gray-500 text-sm">
                    {numberOfCourses} {numberOfCourses > 1 ? 'cours' : 'cours'}
                </p>
            </div>
        </div>
    )
}