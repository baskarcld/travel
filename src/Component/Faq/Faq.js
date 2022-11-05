import React, { useState } from 'react';
import './Faq.css';
import { TiArrowRightThick, TiArrowDownThick } from 'react-icons/ti';
import data from './Faq.json';
function Faq ()
{

  const item = data.data;

  console.log( item );


  // const [ item, setitem ] = useState( data );

  // console.log( item );

  const [ isActive, setActive ] = useState( "false" );
  const [ selectedFaq, setSelectedFaq ] = useState( -1 );


  // let selectedState = -1;

  function ToggleClass ( index ) 
  {
    if ( selectedFaq === index )
    {
      setSelectedFaq( -1 );
    } else
      setSelectedFaq( index );
    console.log( index, selectedFaq );
    // const TabButtons = [ ...item ];
    // setActive( TabButtons[ index ].isActive );
    setActive( !isActive );
  };

  return (
    <>
      <div className='faq-section container-fluid py-5'>
        <h1 className='h1 fw-bold text-center'>FAQs</h1>

        {
          item.map( ( items, index ) =>
          (
            <div className='faq-content-div mt-sm-4 mt-3' index={index}>
              <div className='faq-card' key={items.id} onClick={() => ToggleClass( index )}>
                <div>
                  <h2 className={index !== selectedFaq ? 'h1 faq-edit-h1' : 'h1  faq-edit-h1 faq-h1'}><span className='me-4'><i>{index !== selectedFaq ? <TiArrowRightThick /> : <TiArrowDownThick />}</i></span>{items.head}</h2>
                </div>

                <p className={index !== selectedFaq ? 'hide-p h6 px-5' : 'h6 show-p px-5'}>
                  {items.body}
                </p>
              </div>
            </div>
          ) )
        }

        <div></div>
        {/* <div className='faq-content-div'>
          <div className='faq-card' onClick={ToggleClass}>
            <div>
              <h2 className={isActive ? 'h1' : 'h1 faq-h1'}><span className='me-4'><i>{isActive ? <TiArrowRightThick /> : <TiArrowDownThick />}</i></span>What is Travelerse’s main competitive advantage?</h2>
            </div>

            <p className={isActive ? 'hide-p h6 px-5' : 'h6 show-p px-5'}>
              Unlike other coins that pump and dump, causing massive losses to investors, Travelerse has the world’s best anti-dump features, which means constant growth in the chart, making it impossible to ever experience an overnight crash on the chart.
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Faq;