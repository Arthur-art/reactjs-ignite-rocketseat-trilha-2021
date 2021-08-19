import Prismic from "@prismicio/client"

export function getPrismiClient(req?: unknown) {

    const prismic = Prismic.client(
        process.env.PRISMIC_END_POINT,
        {
            req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return prismic;
}