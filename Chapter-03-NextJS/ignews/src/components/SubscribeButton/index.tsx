import { signIn, useSession } from "next-auth/client";
import React from "react";
import styles from "./styles.module.scss"

type Props = {
    priceId: string;
}

export function SubscribeButton({ priceId }: Props) {

    const [session] = useSession()

    if (!session) {
        signIn("github");
        return;
    }


    function handleSubscribe() {
    }

    return (
        <>
            <button onClick={handleSubscribe} className={styles.subscribeButton}>
                Subscribe now
            </button>
        </>
    )
}