import React from "react";
import "../../style/contact.css"
import "../../../App.css"
import InputText from "../../components/input-text";
import InputTextArea from "../../components/input-textarea";
const Contact = () => {
    return (
        <>
        <div className="flex justify-center items-start h-screen w-full">
            <div className="container gap-16 mt-96 mb-32">
                <div className="w-full">
                    <h1 className="text-secondary">
                    Feedback & Contact
                    </h1>
                    <hr className="text-secondary bg-secondary"></hr>
                </div>
                <div className="contact-image">
                    
                </div>
                <div className="gap-32 inner-container w-full">
                    <div className="left flex flex-col gap-16 text-secondary">
                        <h1 className="headline">
                            We are always ready to help and answer your question
                        </h1>
                        <p>
                            lorem ipsum color sit de amet lorentz de amigos na munos de quarto de paso en pasa da la moda del gelato
                        </p>
                        <div className="grid grid-cols-2 gap-16 w-full">
                                <div className="colspan-1 w-full">
                                    <h2>
                                        Contact
                                    </h2>
                                    <p className="text-sm">Naufal - 085174071072</p>
                                    <p className="text-sm">Naufal - 085174071072</p>
                                </div>
                                <div className="colspan-1 w-full">
                                    <h2>
                                        Email
                                    </h2>
                                    <p>
                                        Naufal - naufalbintangpadana@gmail.com
                                    </p>
                                    <p>
                                       Nugroho - nuganuca17@gmail.com
                                    </p>
                                </div>
                                <div className="colspan-1 w-full">
                                    <h2>
                                        Location
                                    </h2>
                                    <p className="text-sm" style={{ width: "100% " }}>Universitas Indonesia, Jl. Prof. DR. G.A. Siwabessy, Kukusan, Beji, Depok City, West Java 16425</p>
                                </div>
                                <div className="colspan-1 w-full">
                                    <h2>
                                        Social
                                    </h2>
                                    <div className="flex gap-16">
                                        <a>
                                            <img style={{ width: "20px", height: "20px", objectFit: "cover" }}  src="/images/instagram.png"></img>
                                        </a>
                                        <a>
                                            <img style={{ width: "20px", height: "20px", objectFit: "cover" }} src="/images/X.png"></img>
                                        </a>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="right p-16 w-full bg-primary-100 rounded-md">
                        <div className="w-full flex flex-col justify-center gap-16 text-secondary">
                            <h2 style={{ textAlign: "center", fontWeight: "normal" }}>
                                Feedback
                            </h2>
                            <InputText placeholder={"Full Name"}/>
                            <InputText placeholder={"Email"}/>
                            <InputText placeholder={"Subject"}/>
                            <InputTextArea placeholder={"Text"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;