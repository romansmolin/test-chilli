import { FC } from "react"
import { SvgProps } from "@/global"

 
export const Milk: FC<SvgProps> = ({className}) => {

    return (
        <svg className={className} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <rect width="72" height="72" fill="url(#pattern21)" />
            <defs>
                <pattern id="pattern21" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_9_25030" transform="scale(0.0138889)" />
                </pattern>
                <image id="image0_9_25030" width="72" height="72" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>
    )
}