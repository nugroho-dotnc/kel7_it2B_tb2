import React from "react";
import { useState, useEffect } from "react";
import "../../../App.css"
import "../../style/home.css"
import MuseumCard from "../../components/museum-card";
const Home = () => {
    const [museum, setMuseum] = useState([])
    const fetchMuseum = async () =>{
        const response = await fetch("/data/museum.json")
        const data = await response.json()
        setMuseum(data);
    }
    useEffect(() => {
        fetchMuseum()
    }, [])
    
    return (
        <>
        <div className="flex flex-col gap-16" style={{ scrollBehavior:"smooth" }}>
                <section className="h-screen w-full flex items-center justify-center bg-hero overflow-hidden">
                    <div className="flex flex-col gap-16">
                        <h1 className="text-primary-100 text-center headline" >
                            Bienvenue au <br></br>Sanctuaire des Arts
                        </h1>
                        <p className="text-primary-100 text-content text-center">
                            Là où le passé respire encore
                        </p>
                        <div className="w-full flex justify-center">
                            <a className="text-secondary bg-primary px-16 py-8 rounded-full btn" href="#more">
                                Readmore
                            </a>
                        </div>
                    </div>
                </section>
                {/* WELCOME SECTION */}
                <section  className=" w-full flex items-center justify-center bg-white overflow-hidden" id="more" style={{ minHeight: "100vh" }}>
                        <div className="welcome">
                            <div className="flex flex-col gap-8 welcome-left">
                                <h1 className="text-secondary headline" >
                                    Welcome to the ArtExplorer
                                </h1>
                                <p className="text-secondary-100 text-content">
                                    A timeless sanctuary of art, history, and human spirit.
                                </p>
                                <hr className="text-secondary bg-secondary-100"></hr>
                                <div className="p-16 text-secondary-100 text-content" >
                                    <p className="text-justify">
                                        Situs ini hadir sebagai panduan kurasi untuk museum-museum terbaik di Jabodetabek — tempat di mana setiap ruang menyimpan kisah, dan setiap karya mengundang rasa kagum. Baik Anda pecinta seni, penikmat sejarah, maupun pencari inspirasi akhir pekan, di sinilah perjalanan budaya Anda bermula. Dari museum megah berskala nasional hingga galeri tersembunyi yang memesona, kami hadirkan rekomendasi yang layak Anda kunjungi. Karena masa lalu layak untuk dilihat, dan Anda pantas untuk terinspirasi.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end welcome-right">
                               <img src="/images/HEAD.png" className="kepala">
                               </img>
                            </div>
                        </div>
                </section>
                 <section className="bg-recomend">
                    <div  className=" w-full flex items-center justify-center  overflow-hidden" style={{ minHeight: "100vh", backgroundColor: "#00000099" }}>
                        <div className="recomend items-center">
                            <div className="flex flex-col gap-8 leftRec">
                                <h1 className="text-primary-100 headline" >
                                    Our <br/> Recommendation & Best Place
                                </h1>
                                <p className="text-primary-100 text-content">
                                    All the best museum in jabodetabek, will gives u best experience of arts and history
                                </p>
                                <hr className="text-primary-100 bg-secondary-100"></hr>
                            </div>
                            <div className="flex start rightRec">
                               <div className="flex justify-start gap-8">
                                    {
                                        museum.map((data, index)=>{
                                            return <a href={`/museum/${data.id}`}>
                                                    <MuseumCard key={index} image={data.gambar} title={data.nama} desc={data.deskripsi}/>
                                                    </a>
                                        })
                                    }
                               </div>
                            </div>
                        </div>
                </div>
                 </section>
        </div>
           
        </>
    )
}
export default Home;