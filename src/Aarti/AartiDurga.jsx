import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function AartiDurga() {
    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='chalisa'>
            <div className='top_buttons'>
                <Button onClick={() => history.push('/chalisa/durga')} className='back_button' variant='warning'>Back to Chalisa</Button>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Go to Home</Button>
            </div>
            <div className='chalisa_body'>
                <ReactPlayer controls={true} className="react_player" url='https://youtu.be/Kw6J7e8lTDM?si=NWCID1EGRypb1XSZ' />
                <h2 className='chalisa_title'>Shri Durga Aarti</h2>
                <div className='chalisa_table'>
                    जय अम्बे गौरी,
                    <br />

                    मैया जय श्यामा गौरी ।
                    <br />

                    तुमको निशदिन ध्यावत,
                    <br />

                    हरि ब्रह्मा शिवरी ॥
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />
                    <b>मांग सिंदूर विराजत,</b>
                    <br />
                    <b>टीको मृगमद को ।</b>
                    <br />
                    <b>उज्ज्वल से दोउ नैना,</b>
                    <br />
                    <b>चंद्रवदन नीको ॥</b>
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />

                    कनक समान कलेवर,
                    <br />

                    रक्ताम्बर राजै ।
                    <br />

                    रक्तपुष्प गल माला,
                    <br />

                    कंठन पर साजै ॥
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />
                    <b>केहरि वाहन राजत,</b>
                    <br />
                    <b>खड्ग खप्पर धारी ।</b>
                    <br />
                    <b>सुर-नर-मुनिजन सेवत,</b>
                    <br />
                    <b>तिनके दुखहारी ॥</b>
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />

                    कानन कुण्डल शोभित,
                    <br />

                    नासाग्रे मोती ।
                    <br />

                    कोटिक चंद्र दिवाकर,
                    <br />

                    सम राजत ज्योती ॥
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />
                    <b>शुंभ-निशुंभ बिदारे,</b>
                    <br />
                    <b>महिषासुर घाती ।</b>
                    <br />
                    <b>धूम्र विलोचन नैना,</b>
                    <br />
                    <b>निशदिन मदमाती ॥</b>
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />

                    चण्ड-मुण्ड संहारे,
                    <br />

                    शोणित बीज हरे ।
                    <br />

                    मधु-कैटभ दोउ मारे,
                    <br />

                    सुर भयहीन करे ॥
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />
                    <b>ब्रह्माणी, रूद्राणी,</b>
                    <br />
                    <b>तुम कमला रानी ।</b>
                    <br />
                    <b>आगम निगम बखानी,</b>
                    <br />
                    <b>तुम शिव पटरानी ॥</b>
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />

                    चौंसठ योगिनी मंगल गावत,
                    <br />

                    नृत्य करत भैरों ।
                    <br />

                    बाजत ताल मृदंगा,
                    <br />

                    अरू बाजत डमरू ॥
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />
                    <b>तुम ही जग की माता,</b>
                    <br />
                    <b>तुम ही हो भरता,</b>
                    <br />
                    <b>भक्तन की दुख हरता ।</b>
                    <br />
                    <b>सुख संपति करता ॥</b>
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />

                    भुजा चार अति शोभित,
                    <br />

                    वर मुद्रा धारी ।
                    <em>[खड्ग खप्पर धारी]</em>
                    <br />

                    मनवांछित फल पावत,
                    <br />

                    सेवत नर नारी ॥
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />
                    <b>कंचन थाल विराजत,</b>
                    <br />
                    <b>अगर कपूर बाती ।</b>
                    <br />
                    <b>श्रीमालकेतु में राजत,</b>
                    <br />
                    <b>कोटि रतन ज्योती ॥</b>
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />

                    श्री अंबेजी की आरति,
                    <br />

                    जो कोइ नर गावे ।
                    <br />

                    कहत शिवानंद स्वामी,
                    <br />

                    सुख-संपति पावे ॥
                    <br />
                    <em>ॐ जय अम्बे गौरी..॥</em>
                    <br />
                    <br />
                    <b>जय अम्बे गौरी,</b>
                    <br />
                    <b>मैया जय श्यामा गौरी ।</b>
                </div>
            </div>
            <div className='bottom_buttons'>
                <Button onClick={() => history.push('/chalisa/durga')} className='back_button' variant='warning'>Back to Chalisa</Button>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Go to Home</Button>
            </div>
        </div>
    )
}
