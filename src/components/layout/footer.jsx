import React  from "react";

const today = new Date();
const today_year = today.getFullYear();
console.log(today_year);

export default function Footer() {
    return (
        <footer>
        <p>CopyRight ©   {today_year}  Keeper App </p>
        </footer>

    )
}