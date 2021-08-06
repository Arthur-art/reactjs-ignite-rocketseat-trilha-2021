import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
    const users = [
        { id: 1, name: "Arthur" },
        { id: 1, name: "Rick" },
        { id: 1, name: "Tesla" },
        { id: 1, name: "Spencer" },
    ]

    return res.json(users)
}