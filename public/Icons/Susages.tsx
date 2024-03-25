import { FC } from "react"
import { SvgProps } from "@/global"

export const Susages: FC<SvgProps> = ({className}) => {

    return (
        <svg className={className} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <rect width="72" height="72" fill="url(#pattern18)" />
            <defs>
                <pattern id="pattern18" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_8_21059" transform="scale(0.0138889)" />
                </pattern>
                <image id="image0_8_21059" width="72" height="72" xlinkHref="data:image/png;base64,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" />
            </defs>
        </svg>

    )
}