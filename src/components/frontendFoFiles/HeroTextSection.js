import React from 'react'
import Button from '../commonfiles/Button'
import Modal from '../commonfiles/Modal';



const HeroTextSection =()=>{
    return <div className="container-fluid herotext">
        <div className="row mx-5 mt-5 ">
            <div className="col">
            <p>Providing a basis for a variety of careers in business, government and academia, our MSc Economics is designed to equip you with tools and techniques for investigating important economic issues. It provides a grounding in mathematical and econometric techniques:</p>

<ul>
    <li>
Looking at the foundations of microeconomics and macroeconomics and their application to new economic problems
    </li>

    <li> 
familiarising you with advanced concepts and techniques used in economic analysis, and enabling you to access and evaluate current research output in academic journals and in the public and commercial domain
    </li>

    <li>
providing you with the ability to use methods of economic analysis and related techniques in practical and professional contexts
    </li>

    <li>
examining the issues behind current controversies in economics and finance
    </li>

    <li>
training you in quantitative skills
    </li>

    <li>
requiring you to combine your theoretical and quantitative understanding in an original piece of applied work.
    </li>
</ul>

<p>This course is demanding and challenging. We expect you to be competent in intermediate microeconomics and macroeconomics, multivariable calculus, linear algebra and statistics and to understand the basic concepts in economics, so we can focus on developing your ability to do original applied work using advanced methods. You will learn to express original ideas in academic papers and to test them with the use of econometrics (covering linear and dynamic linear regression models, a wide variety of hypothesis tests and techniques for estimating systems of equations). Techniques will be illustrated with economic examples, such as models with rational expectations, as well as consumption, production and money demand functions.</p>
<p>Prospective students without the necessary prerequisites should apply for our Graduate Diploma in Economics, as it prepares you for the MSc.</p>

<h4><strong>Highlight</strong></h4>

<ul>
    <li>Since we started teaching this course, we have taught generations of economists, who have gone on to work at the Bank of England, the Treasury, the Civil Service, consultancy and in academia.</li>

    <li>Birkbeck graduates are well respected by employers, who value the dedication and ability required to balance evening study with daytime occupations.</li>

    <li>This course is recognised as a research training programme by the Economic and Social Research Council (ESRC). For UK and EU applicants intending to pursue research, ESRC studentships (one year for the Master’s course followed by three years of funding for research) may be available for candidates with a strong academic background.</li>

    <li>In the most recent Research Excellence Framework (REF), more than half of our research outputs in Economics were ranked world-leading or internationally excellent.</li>
</ul>

<Button 
                link='/'
                class="btn btn-blue border-white btn-color"
                btnName="Download Propectus"
                />

       <Modal />

    </div>

        </div>

    </div>
}

export default HeroTextSection;