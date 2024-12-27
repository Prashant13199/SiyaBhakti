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
                <div className='chalisa_table'>
                    <b>॥ श्री हनुमंत स्तुति ॥</b>
                    <br />

                    मनोजवं मारुत तुल्यवेगं,
                    <br />

                    जितेन्द्रियं, बुद्धिमतां वरिष्ठम् ॥
                    <br />

                    वातात्मजं वानरयुथ मुख्यं,
                    <br />

                    श्रीरामदुतं शरणम प्रपद्धे ॥
                    <br />
                    <br />
                    <b>॥ आरती ॥</b>
                    <br />

                    आरती कीजै हनुमान लला की ।
                    <br />

                    दुष्ट दलन रघुनाथ कला की ॥
                    <br />
                    <br />
                    <b>जाके बल से गिरवर काँपे ।</b>
                    <br />
                    <b>रोग-दोष जाके निकट न झाँके ॥</b>
                    <br />
                    <b>अंजनि पुत्र महा बलदाई ।</b>
                    <br />
                    <b>संतन के प्रभु सदा सहाई ॥<br />
                    </b>
                    <em>आरती कीजै हनुमान लला की ॥</em>
                    <br />
                    <br />

                    दे वीरा रघुनाथ पठाए ।
                    <br />

                    लंका जारि सिया सुधि लाये ॥
                    <br />

                    लंका सो कोट समुद्र सी खाई ।
                    <br />

                    जात पवनसुत बार न लाई ॥
                    <b><br />
                    </b>
                    <em>आरती कीजै हनुमान लला की ॥</em>
                    <br />
                    <br />
                    <b>लंका जारि असुर संहारे ।</b>
                    <br />
                    <b>सियाराम जी के काज सँवारे ॥</b>
                    <br />
                    <b>लक्ष्मण मुर्छित पड़े सकारे ।</b>
                    <br />
                    <b>लाये संजिवन प्राण उबारे ॥</b>
                    <b><br />
                    </b>
                    <em>आरती कीजै हनुमान लला की ॥</em>
                    <br />
                    <br />

                    पैठि पताल तोरि जमकारे ।
                    <br />

                    अहिरावण की भुजा उखारे ॥
                    <br />

                    बाईं भुजा असुर दल मारे ।
                    <br />

                    दाहिने भुजा संतजन तारे ॥
                    <b><br />
                    </b>
                    <em>आरती कीजै हनुमान लला की ॥</em>
                    <br />
                    <br />
                    <b>सुर-नर-मुनि जन आरती उतरें ।</b>
                    <br />
                    <b>जय जय जय हनुमान उचारें ॥</b>
                    <br />
                    <b>कंचन थार कपूर लौ छाई ।</b>
                    <br />
                    <b>आरती करत अंजना माई ॥</b>
                    <b><br />
                    </b>
                    <em>आरती कीजै हनुमान लला की ॥</em>
                    <br />
                    <br />

                    जो हनुमानजी की आरती गावे ।
                    <br />

                    बसहिं बैकुंठ परम पद पावे ॥
                    <br />

                    लंक विध्वंस किये रघुराई ।
                    <br />

                    तुलसीदास स्वामी कीर्ति गाई ॥
                    <br />
                    <br />

                    आरती कीजै हनुमान लला की ।
                    <br />

                    दुष्ट दलन रघुनाथ कला की ॥
                    <br />
                    <em>॥ इति संपूर्णंम् ॥</em>
                </div>
            </div>
            <div className='bottom_buttons'>
                <Button onClick={() => history.push('/chalisa/hanuman')} className='back_button' variant='warning'>Back to Chalisa</Button>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Go to Home</Button>
            </div>
        </div>
    )
}
