import { NextPage } from "next";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { URLShortenerService } from "../services/URLShortener";

const HashRedirectionPage: NextPage = () => {
    const router = useRouter();
    const { hash } = router.query;

    useEffect(() => {
        if (!!hash) {
            const service = new URLShortenerService()
            service.getShortenedURLDetail({
                hash: hash as string
            }).then((data) => {
                location.replace(data.full_url || "")
            }).catch((e) => {
                console.error(e)
                location.replace("/404")
            })
        }

    }, [hash])

    return (
        <div className="text-center">Redirecting...</div>
    )
}


export default HashRedirectionPage;