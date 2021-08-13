import { signIn, useSession } from "next-auth/client";
import React from "react";
import { api } from "../../service/api";
import { getStripeJs } from "../../service/stripe-js";
import styles from "./styles.module.scss"

type Props = {
    priceId: string;
}

export function SubscribeButton({ priceId }: Props) {

    const [session] = useSession()

    async function handleSubscribe() {
        if (!session) {
            signIn("github");
            return;
        }

        try {
          
            const response = await api.post("/subscribe")
            
            const { sessionId } = response.data

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({ sessionId })
        } catch (error) {
            console.warn("handleSubscribe", error)
        }

    }

    return (
        <>
            <button onClick={handleSubscribe} className={styles.subscribeButton}>
                Subscribe now
            </button>
        </>
    )
}