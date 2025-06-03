import React from "react";
import "../../style/about.css";
const About = () => {
    return (
        <>
            <div className="h-screen">
                <div className="about h-screen mt-64 bg-primary-100">
                    <div className="w-full flex" style={{height: "50%"}}>
                        <div className="w-1/2 h-full flex justify-center items-center">
                            <div className="foto-nugi bg-black-90" style={{height: "75%", width: "75%"}}></div>
                        </div>
                        <div className="w-1/2 h-full flex justify-center items-center">
                            <div className="text-secondary-100" style={{height: "75%", width: "75%"}}>
                                <h1 className="text-center">Nugroho Nur Cahyo</h1>
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi officia vitae reprehenderit saepe sint sunt fugit distinctio odit doloremque? Veritatis quasi animi ipsa maxime molestiae saepe eligendi, voluptas perferendis optio tempora laboriosam explicabo nam. Ex nemo odit impedit iure labore. Facilis repellendus nesciunt optio minima, iure possimus atque qui praesentium dolor suscipit nemo quis voluptatum soluta quas dolores culpa. Iste iure tempora accusantium autem dolore molestias ex officia similique, enim voluptas ducimus qui aspernatur voluptates eum nam quaerat vitae sit quidem quae, labore molestiae. Fugiat, numquam dolorum quia nisi quos similique voluptatum temporibus minus quasi a inventore harum nulla!</p>
                                <div className="mt-8">
                                    <a href="https://www.instagram.com/nugroho.nc/" target="_blank">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="35"
                                            height="35"
                                            viewBox="0,0,256,256"
                                            >
                                            <g
                                                fill="#847253"
                                                fillRule="nonzero"
                                                stroke="none"
                                                strokeWidth="1"
                                                strokeLinecap="butt"
                                                strokeLinejoin="miter"
                                                strokeMiterlimit="10"
                                                strokeDasharray=""
                                                strokeDashoffset="0"
                                                fontFamily="none"
                                                fontWeight="none"
                                                fontSize="none"
                                                textAnchor="none"
                                                style={{ mixBlendMode: "normal" }}
                                            >
                                                <g transform="scale(5.12,5.12)">
                                                <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                    <a href="https://github.com/nugroho-dotnc" target="_blank">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 256 256"
                                            >
                                            <g
                                                fill="#847253"
                                                fillRule="nonzero"
                                                stroke="none"
                                                strokeWidth="1"
                                                strokeLinecap="butt"
                                                strokeLinejoin="miter"
                                                strokeMiterlimit="10"
                                                strokeDasharray=""
                                                strokeDashoffset="0"
                                                fontFamily="none"
                                                fontWeight="none"
                                                fontSize="none"
                                                textAnchor="none"
                                                style={{ mixBlendMode: "normal" }}
                                            >
                                                <g transform="scale(8.53333,8.53333)">
                                                <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex" style={{height: "50%"}}>
                        <div className="w-1/2 h-full flex justify-center items-center">
                            <div className="text-secondary-100" style={{height: "75%", width: "75%"}}>
                                <h1 className="text-center">Naufal Bintang Pradana Himawan</h1>
                                <p className="text-justify">"Halo semuanya, perkenalkan namaku Naufal Bintang Pradana Himawan. Aku adalah seorang mahasiswa semester 2 yang berkuliah di Politeknik Negeri Jakarta. Ini adalah project pertamaku yang menggunakan framework JavaScript, yaitu ReactJS. Dalam project ini, aku membantu teman satu kelompokku, Nugroho, dalam aspek membuat desain di beberapa halaman dan mengimplementasikanya juga ka dalam kode. Kalo mau kenalan, hit me up di sosmed yang udah aku cantumin di bawah yaa 👋👋"</p>
                                <div className="mt-8">
                                    <a href="https://www.instagram.com/_naufalbintang_/" target="_blank">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="35"
                                            height="35"
                                            viewBox="0,0,256,256"
                                            >
                                            <g
                                                fill="#847253"
                                                fillRule="nonzero"
                                                stroke="none"
                                                strokeWidth="1"
                                                strokeLinecap="butt"
                                                strokeLinejoin="miter"
                                                strokeMiterlimit="10"
                                                strokeDasharray=""
                                                strokeDashoffset="0"
                                                fontFamily="none"
                                                fontWeight="none"
                                                fontSize="none"
                                                textAnchor="none"
                                                style={{ mixBlendMode: "normal" }}
                                            >
                                                <g transform="scale(5.12,5.12)">
                                                <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                    <a href="https://x.com/_arixa" target="_blank">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 256 256"
                                            >
                                            <g
                                                fill="#847253"
                                                fillRule="nonzero"
                                                stroke="none"
                                                strokeWidth="1"
                                                strokeLinecap="butt"
                                                strokeLinejoin="miter"
                                                strokeMiterlimit="10"
                                                strokeDasharray=""
                                                strokeDashoffset="0"
                                                fontFamily="none"
                                                fontWeight="none"
                                                fontSize="none"
                                                textAnchor="none"
                                                style={{ mixBlendMode: "normal" }}
                                            >
                                                <g transform="scale(5.12,5.12)">
                                                <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                    <a href="https://github.com/naufalbintang" target="_blank">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            width="35"
                                            height="35"
                                            viewBox="0 0 256 256"
                                            >
                                            <g
                                                fill="#847253"
                                                fillRule="nonzero"
                                                stroke="none"
                                                strokeWidth="1"
                                                strokeLinecap="butt"
                                                strokeLinejoin="miter"
                                                strokeMiterlimit="10"
                                                strokeDasharray=""
                                                strokeDashoffset="0"
                                                fontFamily="none"
                                                fontWeight="none"
                                                fontSize="none"
                                                textAnchor="none"
                                                style={{ mixBlendMode: "normal" }}
                                            >
                                                <g transform="scale(8.53333,8.53333)">
                                                <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 h-full flex justify-center items-center">
                            <div className="foto-nopal bg-black-90" style={{height: "75%", width: "75%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;