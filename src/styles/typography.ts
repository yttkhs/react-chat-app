import {TypographyOptions} from "@material-ui/core/styles/createTypography"

export const typography = (baseSize: number = 12) => {
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"] as const

  const headingsSize = headings.map((h, i) => {
    const index = i + 1
    const size = (headings.length - index) * 2 + baseSize

    return {
      [h]: {
        fontSize: size + "px"
      }
    }
  })

  const headingSizeOptions = Object.assign({}, ...headingsSize)

  return {
    fontFamily: "",
    fontSize: baseSize,
    ...headingSizeOptions
  } as TypographyOptions
}
