import Link from "next/link";
import MainLayout from "../components/MainLayout";

export default function ErrorPage() {
    return (
        <MainLayout title={"Error "}>
        <h2>Error 404</h2>
        <p>Please <Link href={"/"}><a>go back</a></Link> to Home </p>
        </MainLayout>
    )
}