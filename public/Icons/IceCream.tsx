import { FC } from "react"
import { SvgProps } from "@/global"

export const IceCream: FC<SvgProps> = ({className}) => {

    return (
        <svg className={className} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <rect width="72" height="72" fill="url(#pattern11)" />
            <defs>
                <pattern id="pattern11" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_9_25012" transform="scale(0.0138889)" />
                </pattern>
                <image id="image0_9_25012" width="72" height="72" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    )
}