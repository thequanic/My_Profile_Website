import React, { useState, useEffect } from 'react'
export default function Skills(props)
{
    return(
        <>
        <h3>My SKills</h3>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            
            <div class="accordion-item skill-item">
                <h2 class="accordion-header " id="flush-heading1">
                <button class="accordion-button collapsed skill-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
                    Programming Languages
                </button>
                </h2>
                <div id="flush-collapse1" class="accordion-collapse collapse" aria-labelledby="flush-heading1" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Python (proficient) || C/C++ (advance) || Java (intermediate) </div>
                </div>
            </div>

            <div class="accordion-item skill-item">
                <h2 class="accordion-header " id="flush-headingTwo">
                <button class="accordion-button collapsed skill-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    AI and ML Skills
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Deep Learning || Machine Learning || Neural Networks || CNNs || Computer Vision || Generative AI || GAN || TensorFlow || Keras || Pytorch || Sci-Kit Learn || Matplotlib</div>
                </div>
            </div>

            <div class="accordion-item skill-item">
                <h2 class="accordion-header " id="flush-headingThree">
                <button class="accordion-button collapsed skill-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Full Stack Web Development Skills
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">MERN-Mongo DB, Express js, React js, Node js || Flask || HTML || CSS || JavaScript || FrontEnd Design || Databsse Management </div>
                </div>
            </div>

            <div class="accordion-item skill-item">
                <h2 class="accordion-header " id="flush-headingFour">
                <button class="accordion-button collapsed skill-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Cloud Computing Skills
                </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">AWS || Google Cloud || Web Hosting || Microservices || Deployment || Networking </div>
                </div>
            </div>

            <div class="accordion-item skill-item">
                <h2 class="accordion-header " id="flush-headingFive">
                <button class="accordion-button collapsed skill-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    Others
                </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Data Structures || Algorithms || Operating System </div>
                </div>
            </div>
        </div>
        </>
    )
}