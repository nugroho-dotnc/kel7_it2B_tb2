import { useState, useEffect } from "react";
import React from "react";
import "../../../App.css";
import "../../style/gallery.css";
import GalleryCard from "../../components/gallery-card";

const Gallery = () => {
    const [data, setData] = useState([])
    const fetchData = async ()  => {
        const response = await fetch('/data/museum.json')
        const data = await response.json()
        setData(data)
    }
    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <>
            <div className="flex justify-center items-start h-screen w-full">
            <div className="gap-16 mt-96 mb-32 gallery-container p-8">
                <div className="w-full gallery-image">
                    <div className="overlay">
                        <h1>
                            All Museum Galleries
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col gap-16 mt-16">
                    {
                        data.map((value, index)=> {
                            return <div className="flex flex-col gap-8" key={index}>
                                        <h1 className="text-secondary">
                                            {value.nama}
                                        </h1>
                                        <hr/>
                                        <div className="daftar-koleksi">
                                            {
                                                value.koleksi.map((item, index)=>{
                                                    return <GalleryCard data={item} key={index} />
                                                })
                                            }
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}
export default Gallery;