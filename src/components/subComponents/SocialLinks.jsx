import React from 'react'
import { Icon } from '@iconify/react'
function SocialLinks() {
    return (
        <>
            <div>
                <Icon className='icon' icon="logos:google-gmail" />
                <a target={'_blank'} href="mailto:hrushikeshkaranth@gmail.com">hrushikeshkaranth@gmail.com</a>
            </div>
            <div>
                <Icon className='icon' icon="logos:google-maps" />
                <a target={'_blank'} href='https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9544595,77.4660551,46505m/data=!3m1!1e3!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc'>Bengaluru, India</a>
            </div>
            <div>
                <Icon className='icon' icon="mdi:github" style={{ color: 'white' }} />
                <a target={'_blank'} href='https://github.com/HrushikeshKaranth'>GitHub Profile</a>
                <Icon className='icon2' icon="material-symbols:arrow-forward-rounded" />
            </div>
            <div>
                <Icon className='icon' icon="logos:linkedin-icon" />
                <a target={'_blank'} href='https://www.linkedin.com/in/hrushikesh-h-s-25b78018b/'>LinkedIn Profile</a>
                <Icon className='icon2' icon="material-symbols:arrow-forward-rounded" />
            </div>
            <div>
                <Icon className='icon' icon="logos:google-drive" />
                <a target={'_blank'} href='https://drive.google.com/file/d/1zIG6sqc--arAZ_48SaqVQVOUc_vH37X7/view'>Resume</a>
                <Icon className='icon2' icon="material-symbols:arrow-forward-rounded" />
            </div>
        </>
    )
}

export default SocialLinks