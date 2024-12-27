import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function DurgaChalisa() {
    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='chalisa'>
            <div className='top_buttons'>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Back to Home</Button>
                <Button onClick={() => history.push('/aarti/ganesha')} className='back_button' variant='warning'>Go to Aarti</Button>
            </div>
            <div className='chalisa_body'>
                <ReactPlayer controls={true} className="react_player" url='https://youtu.be/AXvmt88JLWg?si=Vib2uWCwOA1sFtfj' />
                <h2 className='chalisa_title'>Shri Durga Chalisa</h2>
                <div className='chalisa_table'>
                    <b>नमो नमो दुर्गे सुख करनी ।</b>
                    <br />
                    <b>नमो नमो दुर्गे दुःख हरनी ॥</b>
                    <br /><br />
                    निरंकार है ज्योति तुम्हारी ।
                    <br />
                    तिहूँ लोक फैली उजियारी ॥
                    <br /><br />
                    <b>शशि ललाट मुख महाविशाला ।</b>
                    <br />
                    <b>नेत्र लाल भृकुटि विकराला ॥</b>
                    <br />
                    <br />
                    रूप मातु को अधिक सुहावे ।
                    <br />
                    दरश करत जन अति सुख पावे ॥
                    <br />
                    <br />
                    <b>तुम संसार शक्ति लै कीना ।</b>
                    <br />
                    <b>पालन हेतु अन्न धन दीना ॥</b>
                    <br />
                    <br />

                    अन्नपूर्णा हुई जग पाला ।
                    <br />

                    तुम ही आदि सुन्दरी बाला ॥
                    <br />
                    <br />
                    <b>प्रलयकाल सब नाशन हारी ।</b>
                    <br />
                    <b>तुम गौरी शिवशंकर प्यारी ॥</b>
                    <br />
                    <br />

                    शिव योगी तुम्हरे गुण गावें ।
                    <br />

                    ब्रह्मा विष्णु तुम्हें नित ध्यावें ॥
                    <br />
                    <br />
                    <b>रूप सरस्वती को तुम धारा ।</b>
                    <br />
                    <b>दे सुबुद्धि ऋषि मुनिन उबारा ॥</b>
                    <br />
                    <br />

                    धरयो रूप नरसिंह को अम्बा ।
                    <br />

                    परगट भई फाड़कर खम्बा ॥10॥
                    <br />
                    <br />
                    <b>रक्षा करि प्रह्लाद बचायो ।</b>
                    <br />
                    <b>हिरण्याक्ष को स्वर्ग पठायो ॥</b>
                    <br />
                    <br />

                    लक्ष्मी रूप धरो जग माहीं ।
                    <br />

                    श्री नारायण अंग समाहीं ॥
                    <br />
                    <br />
                    <b>क्षीरसिन्धु में करत विलासा ।</b>
                    <br />
                    <b>दयासिन्धु दीजै मन आसा ॥</b>
                    <br />
                    <br />

                    हिंगलाज में तुम्हीं भवानी ।
                    <br />

                    महिमा अमित न जात बखानी ॥
                    <br />
                    <br />
                    <b>मातंगी अरु धूमावति माता ।</b>
                    <br />
                    <b>भुवनेश्वरी बगला सुख दाता ॥</b>
                    <br />
                    <br />

                    श्री भैरव तारा जग तारिणी ।
                    <br />

                    छिन्न भाल भव दुःख निवारिणी ॥
                    <br />
                    <br />
                    <b>केहरि वाहन सोह भवानी ।</b>
                    <br />
                    <b>लांगुर वीर चलत अगवानी ॥</b>
                    <br />
                    <br />

                    कर में खप्पर खड्ग विराजै ।
                    <br />

                    जाको देख काल डर भाजै ॥
                    <br />
                    <br />
                    <b>सोहै अस्त्र और त्रिशूला ।</b>
                    <br />
                    <b>जाते उठत शत्रु हिय शूला ॥</b>
                    <br />
                    <br />

                    नगरकोट में तुम्हीं विराजत ।
                    <br />

                    तिहुँलोक में डंका बाजत ॥20॥
                    <br />
                    <br />
                    <b>शुम्भ निशुम्भ दानव तुम मारे ।</b>
                    <br />
                    <b>रक्तबीज शंखन संहारे ॥</b>
                    <br />
                    <br />

                    महिषासुर नृप अति अभिमानी ।
                    <br />

                    जेहि अघ भार मही अकुलानी ॥
                    <br />
                    <br />
                    <b>रूप कराल कालिका धारा ।</b>
                    <br />
                    <b>सेन सहित तुम तिहि संहारा ॥</b>
                    <br />
                    <br />

                    परी गाढ़ सन्तन पर जब जब ।
                    <br />

                    भई सहाय मातु तुम तब तब ॥
                    <br />
                    <br />
                    <b>अमरपुरी अरु बासव लोका ।</b>
                    <br />
                    <b>तब महिमा सब रहें अशोका ॥</b>
                    <br />
                    <br />

                    ज्वाला में है ज्योति तुम्हारी ।
                    <br />

                    तुम्हें सदा पूजें नरनारी ॥
                    <br />
                    <br />
                    <b>प्रेम भक्ति से जो यश गावें ।</b>
                    <br />
                    <b>दुःख दारिद्र निकट नहिं आवें ॥</b>
                    <br />
                    <br />

                    ध्यावे तुम्हें जो नर मन लाई ।
                    <br />

                    जन्ममरण ताकौ छुटि जाई ॥
                    <br />
                    <br />
                    <b>जोगी सुर मुनि कहत पुकारी ।</b>
                    <br />
                    <b>योग न हो बिन शक्ति तुम्हारी ॥</b>
                    <br />
                    <br />

                    शंकर आचारज तप कीनो ।
                    <br />

                    काम अरु क्रोध जीति सब लीनो ॥30
                    <br />
                    <br />
                    <b>निशिदिन ध्यान धरो शंकर को ।</b>
                    <br />
                    <b>काहु काल नहिं सुमिरो तुमको ॥</b>
                    <br />
                    <br />

                    शक्ति रूप का मरम न पायो ।
                    <br />

                    शक्ति गई तब मन पछितायो ॥
                    <br />
                    <br />
                    <b>शरणागत हुई कीर्ति बखानी ।</b>
                    <br />
                    <b>जय जय जय जगदम्ब भवानी ॥</b>
                    <br />
                    <br />

                    भई प्रसन्न आदि जगदम्बा ।
                    <br />

                    दई शक्ति नहिं कीन विलम्बा ॥
                    <br />
                    <br />
                    <b>मोको मातु कष्ट अति घेरो ।</b>
                    <br />
                    <b>तुम बिन कौन हरै दुःख मेरो ॥</b>
                    <br />
                    <br />

                    आशा तृष्णा निपट सतावें ।
                    <br />

                    मोह मदादिक सब बिनशावें ॥
                    <br />
                    <br />
                    <b>शत्रु नाश कीजै महारानी ।</b>
                    <br />
                    <b>सुमिरौं इकचित तुम्हें भवानी ॥</b>
                    <br />
                    <br />

                    करो कृपा हे मातु दयाला ।
                    <br />

                    ऋद्धिसिद्धि दै करहु निहाला ॥
                    <br />
                    <br />
                    <b>जब लगि जिऊँ दया फल पाऊँ ।</b>
                    <br />
                    <b>तुम्हरो यश मैं सदा सुनाऊँ ॥</b>
                    <br />
                    <br />

                    श्री दुर्गा चालीसा जो कोई गावै ।
                    <br />

                    सब सुख भोग परमपद पावै ॥40
                    <br />
                    <br />
                    <b>देवीदास शरण निज जानी ।</b>
                    <br />
                    <b>कहु कृपा जगदम्ब भवानी ॥</b>
                    <br />
                    <br />
                    <b>॥दोहा॥</b>
                    <br />
                    शरणागत रक्षा करे, भक्त रहे नि:शंक ।
                    <br />
                    मैं आया तेरी शरण में, मातु लिजिये अंक ॥
                    <br />
                    <br />
                    ॥ इति श्री दुर्गा चालीसा संपूर्ण ॥
                    <br />
                </div>
            </div>
            <div className='bottom_buttons'>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Back to Home</Button>
                <Button onClick={() => history.push('/aarti/ganesha')} className='back_button' variant='warning'>Go to Aarti</Button>
            </div>
        </div>
    )
}
