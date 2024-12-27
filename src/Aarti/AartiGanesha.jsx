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
                <div className='chalisa_table'>
                    जय गणेश जय गणेश,
                    <br />

                    जय गणेश देवा ।
                    <br />

                    माता जाकी पार्वती,
                    <br />

                    पिता महादेवा ॥
                    <br />
                    <br />
                    <b>एक दंत दयावंत,</b>
                    <br />
                    <b>चार भुजा धारी ।</b>
                    <br />
                    <b>माथे सिंदूर सोहे,</b>
                    <br />
                    <b>मूसे की सवारी ॥</b>
                    <br />
                    <br />

                    जय गणेश जय गणेश,
                    <br />

                    जय गणेश देवा ।
                    <br />

                    माता जाकी पार्वती,
                    <br />

                    पिता महादेवा ॥
                    <br />
                    <br />
                    <b>पान चढ़े फल चढ़े,</b>
                    <br />
                    <b>और चढ़े मेवा ।</b>
                    <br />
                    <b>लड्डुअन का भोग लगे,</b>
                    <br />
                    <b>संत करें सेवा ॥</b>
                    <br />
                    <br />

                    जय गणेश जय गणेश,
                    <br />

                    जय गणेश देवा ।
                    <br />

                    माता जाकी पार्वती,
                    <br />

                    पिता महादेवा ॥
                    <br />
                    <br />
                    <b>अंधन को आंख देत,</b>
                    <br />
                    <b>कोढ़िन को काया ।</b>
                    <br />
                    <b>बांझन को पुत्र देत,</b>
                    <br />
                    <b>निर्धन को माया ॥</b>
                    <br />
                    <br />

                    जय गणेश जय गणेश,
                    <br />

                    जय गणेश देवा ।
                    <br />

                    माता जाकी पार्वती,
                    <br />

                    पिता महादेवा ॥
                    <br />
                    <br />
                    <b>'सूर' श्याम शरण आए,</b>
                    <br />
                    <b>सफल कीजे सेवा ।</b>
                    <br />
                    <b>माता जाकी पार्वती,</b>
                    <br />
                    <b>पिता महादेवा ॥</b>
                    <br />
                    <br />

                    जय गणेश जय गणेश,
                    <br />

                    जय गणेश देवा ।
                    <br />

                    माता जाकी पार्वती,
                    <br />

                    पिता महादेवा ॥
                    <br />
                    <br />

                    ----- Additional -----
                    <br />
                    <b>दीनन की लाज रखो,</b>
                    <br />
                    <b>शंभु सुतकारी ।</b>
                    <br />
                    <b>कामना को पूर्ण करो,</b>
                    <br />
                    <b>जाऊं बलिहारी ॥</b>
                    <br />
                    <br />

                    जय गणेश जय गणेश,
                    <br />

                    जय गणेश देवा ।
                    <br />

                    माता जाकी पार्वती,
                    <br />

                    पिता महादेवा ॥
                </div>
            </div>
            <div className='bottom_buttons'>
                <Button onClick={() => history.push('/chalisa/ganesha')} className='back_button' variant='warning'>Back to Chalisa</Button>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Go to home</Button>
            </div>
        </div>
    )
}
