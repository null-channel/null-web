import React from "react";
import { navLinks } from "../lib/nav-data";
import Link from "next/link";
import styles from './topright.module.css'
import Button from '@mui/material/Button'
import { useUser } from '@auth0/nextjs-auth0';


export default function TopRight() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>
    if (user == null) return (
        <div className={styles.topright}>
            <div className={styles.sign_in}>
                <Link href="/api/auth/login">
                    <Button variant="outlined">Sign In</Button>
                </Link>
            </div>
        </div>
    )

    return (
        <div>
            <Link href="/api/auth/logout">
                <Button variant="contained">Log Out</Button>
            </Link>
        </div>
    )
}