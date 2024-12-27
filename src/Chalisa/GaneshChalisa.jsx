import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function GaneshChalisa() {
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
                <ReactPlayer controls={true} className="react_player" url='https://youtu.be/WyHFSjN0miU?si=BgfwDP6gvRRRFjqn' />
                <h2 className='chalisa_title'>Shri Ganesh Chalisa</h2>
                <table className='chalisa_table'>
                    <tr>
                        <td><b>॥दोहा॥</b></td>
                    </tr>
                    <tr>
                        <td><b><i>जय गणपति सदगुण सदन, कविवर बदन कृपाल।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>विघ्न हरण मंगल करण, जय जय गिरिजालाल॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b>॥चौपाई॥</b></td>
                    </tr>
                    <tr>
                        <td><b><i>जय जय जय गणपति गणराजू।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>मंगल भरण करण शुभः काजू॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>जै गजबदन सदन सुखदाता।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>विश्व विनायका बुद्धि विधाता॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>वक्र तुण्ड शुची शुण्ड सुहावना।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>तिलक त्रिपुण्ड भाल मन भावन॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>राजत मणि मुक्तन उर माला।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>स्वर्ण मुकुट शिर नयन विशाला॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>पुस्तक पाणि कुठार त्रिशूलं।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>मोदक भोग सुगन्धित फूलं॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>सुन्दर पीताम्बर तन साजित।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>चरण पादुका मुनि मन राजित॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>धनि शिव सुवन षडानन भ्राता।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>गौरी लालन विश्व-विख्याता॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>ऋद्धि-सिद्धि तव चंवर सुधारे।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>मुषक वाहन सोहत द्वारे॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>कहौ जन्म शुभ कथा तुम्हारी।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>अति शुची पावन मंगलकारी॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>एक समय गिरिराज कुमारी।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>पुत्र हेतु तप कीन्हा भारी॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>भयो यज्ञ जब पूर्ण अनूपा।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>तब पहुंच्यो तुम धरी द्विज रूपा॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>अतिथि जानी के गौरी सुखारी।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>बहुविधि सेवा करी तुम्हारी॥
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
                        <td><b><i>मिलहि पुत्र तुहि, बुद्धि विशाला।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>बिना गर्भ धारण यहि काला॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>गणनायक गुण ज्ञान निधाना।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>पूजित प्रथम रूप भगवाना॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>अस कही अन्तर्धान रूप हवै।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>पालना पर बालक स्वरूप हवै॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>बनि शिशु रुदन जबहिं तुम ठाना।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>लखि मुख सुख नहिं गौरी समाना॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>सकल मगन, सुखमंगल गावहिं।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>नाभ ते सुरन, सुमन वर्षावहिं॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>शम्भु, उमा, बहुदान लुटावहिं।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>सुर मुनिजन, सुत देखन आवहिं॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>लखि अति आनन्द मंगल साजा।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>देखन भी आये शनि राजा॥20॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>निज अवगुण गुनि शनि मन माहीं।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>बालक, देखन चाहत नाहीं॥
                        </i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>गिरिजा कछु मन भेद बढायो।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>उत्सव मोर, न शनि तुही भायो॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>कहत लगे शनि, मन सकुचाई।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>का करिहौ, शिशु मोहि दिखाई॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>नहिं विश्वास, उमा उर भयऊ।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>शनि सों बालक देखन कहयऊ॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>पदतहिं शनि दृग कोण प्रकाशा।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>बालक सिर उड़ि गयो अकाशा॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>गिरिजा गिरी विकल हवै धरणी।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>सो दुःख दशा गयो नहीं वरणी॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>हाहाकार मच्यौ कैलाशा।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>शनि कीन्हों लखि सुत को नाशा॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>तुरत गरुड़ चढ़ि विष्णु सिधायो।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>काटी चक्र सो गज सिर लाये॥
                        </i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>बालक के धड़ ऊपर धारयो।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>प्राण मन्त्र पढ़ि शंकर डारयो॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>नाम गणेश शम्भु तब कीन्हे।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>प्रथम पूज्य बुद्धि निधि, वर दीन्हे॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>बुद्धि परीक्षा जब शिव कीन्हा।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>पृथ्वी कर प्रदक्षिणा लीन्हा॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>चले षडानन, भरमि भुलाई।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>रचे बैठ तुम बुद्धि उपाई॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>चरण मातु-पितु के धर लीन्हें।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>तिनके सात प्रदक्षिण कीन्हें॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>धनि गणेश कही शिव हिये हरषे।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>नभ ते सुरन सुमन बहु बरसे॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>तुम्हरी महिमा बुद्धि बड़ाई।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>शेष सहसमुख सके न गाई॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>मैं मतिहीन मलीन दुखारी।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>करहूं कौन विधि विनय तुम्हारी॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b><i>भजत रामसुन्दर प्रभुदासा।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>जग प्रयाग, ककरा, दुर्वासा॥</i></b></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td><b><i>अब प्रभु दया दीना पर कीजै।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>अपनी शक्ति भक्ति कुछ दीजै॥</i></b></td>
                    </tr>
                    <td>&nbsp;</td>
                    <tr>
                        <td><b>॥दोहा॥</b></td>
                    </tr>
                    <tr>
                        <td><b><i>श्री गणेश यह चालीसा, पाठ करै कर ध्यान।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>नित नव मंगल गृह बसै, लहे जगत सन्मान॥</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>सम्बन्ध अपने सहस्त्र दश, ऋषि पंचमी दिनेश।</i></b></td>
                    </tr>
                    <tr>
                        <td><b><i>पूरण चालीसा भयो, मंगल मूर्ती गणेश॥</i></b></td>
                    </tr>
                </table>
            </div>
            <div className='bottom_buttons'>
                <Button onClick={() => history.push('/')} className='back_button' variant='warning'>Back to Home</Button>
                <Button onClick={() => history.push('/aarti/ganesha')} className='back_button' variant='warning'>Go to Aarti</Button>
            </div>
        </div>
    )
}
