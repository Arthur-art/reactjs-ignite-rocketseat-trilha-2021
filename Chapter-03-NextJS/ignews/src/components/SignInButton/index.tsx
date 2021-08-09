import React from "react";
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import styles from "./styles.module.scss"
import { signIn, signOut, useSession } from "next-auth/client"

export function SignInButton() {

    const [session] = useSession()
    console.log(session)

    return (
        <>
            {session ?
                <button onClick={() => signOut()} className={styles.signInButton}>
                    <FaGithub color={"#04d361"} />
                    Arthur-art
                    <FiX color={"#737380"} className={styles.closeIcon} />
                </button>
                : <button onClick={() => signIn("github")} className={styles.signInButton}>
                    <FaGithub color={"#eba417"} />
                    Sign in with Github
                </button>
            }
        </>
    )
}