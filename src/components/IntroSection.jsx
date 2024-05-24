import React from 'react'
import { Icon } from '@iconify/react';
import SocialLinks from './subComponents/SocialLinks';
function IntroSection() {
    return (
        <>
            <div className='nameAndPhoto'>
                <div className='profilePhoto'>
                    <div></div>
                </div>
                <div className='nameAndJobDesc'>
                    <div className='myName'>HRUSHIKESH H S</div>
                    <div className="jobProfile">Software Engineer</div>
                    {/* <div className='resumeDownloadButtom'>
                        <a target={'_blank'} href="https://drive.google.com/open?id=1zHioH76rAoqzCZTRJOjzJGzVftOdnaa-&authuser=hrushikeshkaranth%40gmail.com&usp=drive_fs">
                            <Icon icon="material-symbols:arrow-downward-rounded" />
                        </a>
                    </div> */}
                </div>
                <div className='socialLinksDesktop'>
                    <SocialLinks />
                </div>
            </div>
            <p className='bio'>
                - A Creative Engineer, Fast learner, Consistent worker with around 2 years of
                experience 😇 in Software Engineering.<br />
                - My objective is to be a part of an organization where I can utilize my knowledge and skills and at the same time enhance my knowledge and skills as per the requirement of the organization and also develop managerial and interpersonal skills. I will put my full effort to lead the company in a successful path.
            </p>
            <div className='socialLinks'>
                <SocialLinks />
            </div>
        </>
    )
}

export default IntroSection