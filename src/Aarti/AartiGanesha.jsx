import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function AartiGanesha() {
    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='chalisa'>
            <div className='top_buttons'>
                <Button onClick={() => history.push('/chalisa/ganesha')} className='back_button' variant='warning'>Back to Chalisa</Button>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Go to home</Button>
            </div>
            <div className='chalisa_body'>
                <ReactPlayer controls={true} className="react_player" url='https://youtu.be/Yuex2EnsGiY?si=1m0JNckV3rrkJT0a' />
                <h2 className='chalisa_title'>Shri Ganesha Aarti</h2>
                <table className='chalisa_table'>
                    <tr>
                        <td><b><i>जय गणेश जय गणेश,
                            जय गणेश देवा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>माता जाकी पार्वती,
                            पिता महादेवा ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>एक दंत दयावंत,
                            चार भुजा धारी ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>माथे सिंदूर सोहे,
                            मूसे की सवारी ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>जय गणेश जय गणेश,
                            जय गणेश देवा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>माता जाकी पार्वती,
                            पिता महादेवा ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>पान चढ़े फल चढ़े,
                            और चढ़े मेवा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>लड्डुअन का भोग लगे,
                            संत करें सेवा ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>जय गणेश जय गणेश,
                            जय गणेश देवा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>माता जाकी पार्वती,
                            पिता महादेवा ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>अंधन को आंख देत,
                            कोढ़िन को काया ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>बांझन को पुत्र देत,
                            निर्धन को माया ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>जय गणेश जय गणेश,
                            जय गणेश देवा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>माता जाकी पार्वती,
                            पिता महादेवा ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>'सूर' श्याम शरण आए,
                            सफल कीजे सेवा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>माता जाकी पार्वती,
                            पिता महादेवा ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>जय गणेश जय गणेश,
                            जय गणेश देवा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>माता जाकी पार्वती,
                            पिता महादेवा ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>दीनन की लाज रखो,
                            शंभु सुतकारी ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>कामना को पूर्ण करो,
                            जाऊं बलिहारी ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>जय गणेश जय गणेश,
                            जय गणेश देवा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>माता जाकी पार्वती,
                            पिता महादेवा ॥</i></b></td>
                    </tr>
                </table>
            </div>
            <div className='bottom_buttons'>
                <Button onClick={() => history.push('/chalisa/ganesha')} className='back_button' variant='warning'>Back to Chalisa</Button>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Go to home</Button>
            </div>
        </div>
    )
}
