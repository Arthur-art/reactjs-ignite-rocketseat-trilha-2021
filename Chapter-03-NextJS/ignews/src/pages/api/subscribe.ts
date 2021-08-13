import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/client"
import { stripe } from "../../service/stripe"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    
    if (req.method === "POST") {

        // Resgatando dados dos cookies
        const session = await getSession({ req })
        
        //Criando conta no stripe com os dados dos usuarios 
        const striperCustomer = await stripe.customers.create({
            email: session.user.email,
            //metadata

        })
        
        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: striperCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection: "required",
            line_items: [
                { price: "price_1JLWW4HvuE7HOtwv0D29ZgPn", quantity: 1 }
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        })
        
        return res.status(200).json({ sessionId: stripeCheckoutSession.id })

    } else {
        res.setHeader("Allow", "POST")
        res.status(405).end("Method not allowed")
    }
}