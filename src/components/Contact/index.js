import Loader from 'react-loaders'
import './index.scss'
import AnimatadLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const Contact = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()


    useEffect(() =>{
     setTimeout(() =>{
     return (setLetterClass('text-animate-hover'))
    }, 4000)
    }, [])

    const sendEmail = () => {

       emailjs
         .sendForm(
            'service_cygt78t',
            'template_qcr7ews',
            refForm.current,
            'WbsrCBj5NN4wbOMGa'
        )
        .then(
            () =>{
                alert('Message Successfully Sent!!')
                window.location.reload(false)
            },
            () =>{
                alert('Failed to send message, please try again')
            }
        )
    }

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatadLetters 
                    letterClass={letterClass }
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text' placeholder='Message' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND"/>
                            </li>
                            
                        </ul>
                    </form>
                </div>
            </div> 
            <div className="info-map">
                Slayer,
                <br />
                Nigeria,
                <br />
                No 5, Taiwo isalae <br />
                Ilorin <br />
                <br />
                <span>mustaphas902@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[44.96366, 19.61045]}>
                        <Popup>Slayer lives here, come over for a cup of coffe ;)</Popup>
                    </Marker>
                </MapContainer>
            </div>

        </div>
        <Loader type='pacman' />
    </>
    )
}

export default Contact