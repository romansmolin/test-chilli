import { FC } from "react"
import { SvgProps } from "@/global"

export const Salmon: FC<SvgProps> = ({className}) => {

    return (
        <svg className={className} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <rect width="72" height="72" fill="url(#pattern17)" />
            <defs>
                <pattern id="pattern17" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_14_895" transform="scale(0.0138889)" />
                </pattern>
                <image id="image0_14_895" width="72" height="72" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    )
}