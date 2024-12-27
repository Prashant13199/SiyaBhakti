import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import ReactPlayer from 'react-player'

export default function HanumanChalisa() {
    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='chalisa'>
            <div className='top_buttons'>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Back to Home</Button>
                <Button onClick={() => history.push('/aarti/hanuman')} className='back_button' variant='warning'>Go to Aarti</Button>
            </div>
            <div className='chalisa_body'>
                <ReactPlayer controls={true} className="react_player" url='https://youtu.be/AETFvQonfV8?si=8E-IR2chCKM7wG-W' />
                <h2 className='chalisa_title'>Shri Hanuman Chalisa</h2>
                <table className='chalisa_table'>
                    <tr>
                        <td><b>॥दोहा॥</b></td>
                    </tr>
                    <tr>
                        <td><b><i>श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>बरनउँ रघुवर बिमल जसु जो दायकु फल चारि ॥</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>बुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार । </i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>बल बुधि विद्या देहु मोहिं हरहु कलेस विकार ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b>॥चौपाई॥</b></td>
                    </tr>
                    <tr>
                        <td><b><i>जय हनुमान ज्ञान गुन सागर ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>जय कपीस तिहुँ लोक उजागर ॥१॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>राम दूत अतुलित बल धामा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>अंजनी-पुत्र पवनसुत नामा ॥२॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>महावीर विक्रम बजरंगी ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>कुमति निवार सुमति के सङ्गी ॥३॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>कंचन वरन विराज सुवेसा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>कानन कुण्डल कुंचित केसा ॥४॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>हाथ वज्र औ ध्वजा विराजे ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>काँधे मूँज जनेउ साजै ॥५॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>शंकर सुवन केसरीनन्दन ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>तेज प्रताप महा जग बंधन ॥६॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>विद्यावान गुनी अति चातुर ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>राम काज करिबे को आतुर ॥७॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>प्रभु चरित्र सुनिबे को रसिया ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>राम लखन सीता मन बसिया ॥८॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>सूक्ष्म रूप धरि सियहिं दिखावा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>विकत रूप धरि लंक जरावा ॥९॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>भीम रूप धरि असुर सँहारे ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>रामचन्द्र के काज सँवारे ॥१०॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>लाय संजीवन लखन जियाये ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>श्रीरघुवीर हरषि उर लाये ॥११॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>रघुपति कीन्ही बहुत बड़ाई ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>तुम मम प्रिय भरतहि सम भाई ॥१२॥
                        </i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>सहस बदन तुह्मारो जस गावैं ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>अस कहि श्रीपति कण्ठ लगावैं ॥१३॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>सनकादिक ब्रह्मादि मुनीसा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>नारद सारद सहित अहीसा ॥१४॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>यम कुबेर दिगपाल जहाँ ते ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>कवि कोविद कहि सके कहाँ ते ॥१५॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>तुम उपकार सुग्रीवहिं कीन्हा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>राम मिलाय राज पद दीह्ना ॥१६॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>तुम्हारो मन्त्र विभीषण माना ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>लंकेश्वर भए सब जग जाना ॥१७॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>जुग सहस्र जोजन पर भानु । </i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>लील्यो ताहि मधुर फल जानू ॥१८॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>प्रभु मुद्रिका मेलि मुख माहीं ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>जलधि लाँघि गये अचरज नाहीं ॥१९॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>दुर्गम काज जगत के जेते ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>सुगम अनुग्रह तुम्हारे तेते ॥२०॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>राम दुआरे तुम रखवारे ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>होत न आज्ञा बिनु पैसारे ॥२१॥
                        </i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>सब सुख लहै तुम्हारी सरना ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>तुम रक्षक काहू को डर ना ॥२२॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>आपन तेज सम्हारो आपै ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>तीनों लोक हाँक तें काँपै ॥२३॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>भूत पिशाच निकट नहिं आवै ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>महावीर जब नाम सुनावै ॥२४॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>नासै रोग हरै सब पीड़ा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>जपत निरन्तर हनुमत बीरा ॥२५॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>संकट तें हनुमान छुड़ावै ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>मन क्रम वचन ध्यान जो लावै ॥२६॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>सब पर राम तपस्वी राजा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>तिन के काज सकल तुम साजा ॥२७॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>और मनोरथ जो कोई लावै ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>सोई अमित जीवन फल पावै ॥२८॥
                        </i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>चारों जुग परताप तुम्हारा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>है परसिद्ध जगत उजियारा ॥२९॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>साधु सन्त के तुम रखवारे ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>असुर निकन्दन राम दुलारे ॥३०॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>अष्टसिद्धि नौ निधि के दाता ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>अस वर दीन जानकी माता ॥३१॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>राम रसायन तुम्हारे पासा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>सदा रहो रघुपति के दासा ॥३२॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>तुम्हारे भजन राम को पावै ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>जनम जनम के दुख बिसरावै ॥३३॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>अन्त काल रघुवर पुर जाई ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>जहाँ जन्म हरिभक्त कहाई ॥३४॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>और देवता चित्त न धरई ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>हनुमत सेइ सर्व सुख करई ॥३५॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>संकट कटै मिटै सब पीड़ा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>जो सुमिरै हनुमत बलबीरा ॥३६॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>जय जय जय हनुमान गोसाईं ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>कृपा करहु गुरुदेव की नाईं ॥३७॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>जो शत बार पाठ कर कोई ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>छूटहि बन्दि महा सुख होई ॥३८॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>जो यह पढ़ै हनुमान चालीसा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>होय सिद्धि साखी गौरीसा ॥३९॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>तुलसीदास सदा हरि चेरा ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>कीजै नाथ हृदय महँ डेरा ॥४०॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b>॥दोहा॥</b></td>
                    </tr>
                    <tr>
                        <td><b><i>पवनतनय संकट हरन</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>मंगल मूरति रूप ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>राम लखन सीता सहित</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>हृदय बसहु सुर भूप ॥</i></b></td>
                    </tr>
                </table>
            </div>
            <div className='bottom_buttons'>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Back to Home</Button>
                <Button onClick={() => history.push('/aarti/hanuman')} className='back_button' variant='warning'>Go to Aarti</Button>
            </div>
        </div>
    )
}
