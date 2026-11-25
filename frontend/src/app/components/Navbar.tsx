import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/catalog">Catalog</Link>
            <Link href="/plan-maker">Plan Maker</Link>
            <Link href="/current-plan">Current Plan</Link>
        </nav>
    )
}