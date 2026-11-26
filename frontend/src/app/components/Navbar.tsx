import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex gap-6">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/catalog">Catalog</Link>
            <Link href="/plan-maker">Plan Maker</Link>
            <Link href="/current-plan">Current Plan</Link>
        </nav>
    )
}
