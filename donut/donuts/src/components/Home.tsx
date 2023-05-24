import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react"
import { getDonuts } from "../services/DonutService"

export function Home() {

    const [donuts, setDonuts] = useState<any[]>();

    useEffect(() => {
        getDonuts().then((data:any) => setDonuts(data.results))
    }, [])





    return (
        <div>
            <h1>
                Donuts
            </h1>
            {donuts?.map(donuts =>
            <ul>
                <li>{donuts.name}</li>
            </ul>
                )}
        </div>
    )
}