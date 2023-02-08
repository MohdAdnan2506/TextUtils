import React from 'react'

export default function About(props) {

    let myStyle = {
        backgroundColor: props.mode === 'dark' ? '#00112a' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'
    }

    return (
        <>

            <div className='container rounded' style={myStyle}>
                <h1 className='my-3'>About Us</h1>
                <div className="accordion-body" >
                    <strong>TextUtils</strong> is a utility which can be used to manipulate text the way you want. As a beginner in ReactJS, I made this project while learning the ReactJS library. The concepts I learned while making this project includes functional components, props, propTypes, state, handling events. Made custom Dark Mode button which works well.
                </div>
                {/* <div className="accordion" id="accordionExample" >
                    <div className="accordion-item" style={{backgroundColor: props.mode=== 'dark'?'#00112a':'white', color:props.mode=== 'dark'?'white':'black' }}>
                        <h2 className="accordion-header" id="headingOne" style={{backgroundColor: props.mode=== 'dark'?'#00112a':'white', color:props.mode=== 'dark'?'white':'black' }}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode=== 'dark'?'#00112a':'white', color:props.mode=== 'dark'?'white':'black' }} >
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{backgroundColor: props.mode=== 'dark'?'#00112a':'white', color:props.mode=== 'dark'?'white':'black' }} >
                        <h2 className="accordion-header" id="headingTwo" style={{backgroundColor: props.mode=== 'dark'?'#00112a':'white', color:props.mode=== 'dark'?'white':'black' }}  >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode=== 'dark'?'#00112a':'white', color:props.mode=== 'dark'?'white':'black' }} >
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{backgroundColor: props.mode=== 'dark'?'#00112a':'white', color:props.mode=== 'dark'?'white':'black' }} >
                        <h2 className="accordion-header" id="headingThree" style={{backgroundColor: props.mode=== 'dark'?'#00112a':'white', color:props.mode=== 'dark'?'white':'black' }}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container" >
                    <button style={btnColor} onClick={toggleStyle} type="button" className="btn btn-dark my-3">{btnText}</button>
                </div> */}
            </div>
        </>
    )
}
