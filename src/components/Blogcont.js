import React from 'react'
import IMG from '../images/unsplash_wawEfYdpkag.png'
import './Blogcont.css'
import RE from './RE'

const thing=[
   {
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
},
{
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
},
   {
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
},
   {
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
},
   {
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
},
   {
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
},
   {
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
},
   {
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
},
{
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
},
   {
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
},
   {
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
},
   {
    faq:'5 Commonly Asked Questions about Co-working',
    faqans:'Curious about Workspaces? Heres the 5 most commonly asked questions about Co...',
    img:IMG
}
]
const gr= (p,index) =>{
    return <RE 
    key={index}
    faq={p.faq}
    faqans={p.faqans}
    img={p.img}
    
    
    />
}
function Blogcont(props) {
  return (
    <div className='civ'>
        <h1 className='h1'>Our Blog</h1>
        <div className='grids'>
          {thing.map(gr)}
            {/* <div className='grid'>
                <img src={IMG} alt='' className='immg'/>
                <h3>5 Commonly Asked Questions about Co-working</h3>
                <h5>Curious about Workspaces? Here's the 5 most commonly asked questions about Co...</h5>
            </div> */}
            
        </div>
        <div className='buts'>
            <button type='button' className='bt'> &#8592;Previous </button>
            <button type='button' className='bet'>Next&#x2192; </button>
        </div>
    </div>
  )
}

export default Blogcont
