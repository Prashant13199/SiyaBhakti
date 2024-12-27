import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function AartiHanuman() {
    const history = useHistory()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='chalisa'>
            <div className='top_buttons'>
                <Button onClick={() => history.push('/chalisa/hanuman')} className='back_button' variant='warning'>Back to Chalisa</Button>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Go to Home</Button>
            </div>
            <div className='chalisa_body'>
                <ReactPlayer controls={true} className="react_player" url='https://youtu.be/gbYXo2Xqlmk?si=qOzvw8HbJg6p7rxU' />
                <h2 className='chalisa_title'>Shri Hanuman Aarti</h2>
                <table className='chalisa_table'>
                    <tr>
                        <td><b>॥ श्री हनुमंत स्तुति ॥</b></td>
                    </tr>
                    <tr>
                        <td><b><i>मनोजवं मारुत तुल्यवेगं,
                            जितेन्द्रियं, बुद्धिमतां वरिष्ठम् ॥</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>वातात्मजं वानरयुथ मुख्यं,
                            श्रीरामदुतं शरणम प्रपद्धे ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b>॥ आरती ॥</b></td>
                    </tr>
                    <tr>
                        <td><b><i>आरती कीजै हनुमान लला की ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>दुष्ट दलन रघुनाथ कला की ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>जाके बल से गिरवर काँपे ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>रोग-दोष जाके निकट न झाँके ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>अंजनि पुत्र महा बलदाई ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>संतन के प्रभु सदा सहाई ॥</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>आरती कीजै हनुमान लला की ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>दे वीरा रघुनाथ पठाए ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>लंका जारि सिया सुधि लाये ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>लंका सो कोट समुद्र सी खाई ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>जात पवनसुत बार न लाई ॥</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>आरती कीजै हनुमान लला की ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>लंका जारि असुर संहारे ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>सियाराम जी के काज सँवारे ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>लक्ष्मण मुर्छित पड़े सकारे ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>लाये संजिवन प्राण उबारे ॥</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>आरती कीजै हनुमान लला की ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>पैठि पताल तोरि जमकारे ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>अहिरावण की भुजा उखारे ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>बाईं भुजा असुर दल मारे ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>दाहिने भुजा संतजन तारे ॥</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>आरती कीजै हनुमान लला की ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>सुर-नर-मुनि जन आरती उतरें ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>जय जय जय हनुमान उचारें ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>कंचन थार कपूर लौ छाई ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>आरती करत अंजना माई ॥</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>आरती कीजै हनुमान लला की ॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>जो हनुमानजी की आरती गावे ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>बसहिं बैकुंठ परम पद पावे ॥
                        </i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>अति प्रसन्न हवै तुम वर दीन्हा।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>मातु पुत्र हित जो तप कीन्हा॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>लंक विध्वंस किये रघुराई ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>तुलसीदास स्वामी कीर्ति गाई ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>आरती कीजै हनुमान लला की ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>दुष्ट दलन रघुनाथ कला की ॥</i></b></td>
                    </tr>
                </table>
            </div>
            <div className='bottom_buttons'>
                <Button onClick={() => history.push('/chalisa/hanuman')} className='back_button' variant='warning'>Back to Chalisa</Button>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Go to Home</Button>
            </div>
        </div>
    )
}
