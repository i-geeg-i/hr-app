import Link from "next/link";
import "./header.css";
import { useState } from "react";
export default function Header(){
    return(
    <header>
        <h1>QHR</h1>
        <nav>
            <div>
                <Link href="/" className="link"><span>Main</span></Link>
            </div>
            <div>
                <Link href="/quize" className="link"><span>Quize</span></Link>
            </div>
        </nav>
    </header>
    );
}