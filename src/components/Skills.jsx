import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import workdata from './data/data.json'

function Skills() {
    let item = useRef()
    const [data, setData] = useState(workdata.skills)
    const [showSkills, setShowSkills] = useState(true)
    useEffect(() => {
        try {
            showSkills ? item.current.style = 'transform:rotate(-180deg)' : item.current.style = 'transform:rotate(0deg)'
        } catch (error) { }
    }, [showSkills])
    return (
        <>
            <div className='headerSkills' onClick={() => { setShowSkills(!showSkills) }}>
                <span>SKILLS</span>
                <Icon className='icon' ref={item} icon="material-symbols:keyboard-arrow-down-rounded" />
            </div>
                <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                    {
                        data.map((data) => {
                            return (
                                <div className='skill'>
                                    {data.icon ? <Icon className='skillIcon' icon={data.icon} /> :<Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                    <span>{data.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
        </>
    )
}

export default Skills