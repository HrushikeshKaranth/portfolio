import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import workdata from './data/data.json'

function SkillsV2() {
    let item = useRef()
    const [data, setData] = useState(workdata.skillsv2)
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
            <br />
            <span><b>Operating Systems:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].OS.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <span><b>Programming Languages:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].languages.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <span><b>Frameworks/Libraries:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].frameworks.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <span><b>Bug Tracking Tools:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].bugTracking.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <span><b>Cloud Services:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].cloudService.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <span><b>Build Tools:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].buildTools.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <span><b>Continuous Integration Tools:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].cicd.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <span><b>Automation Tools:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].automation.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <span><b>Databases:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].db.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <span><b>Servers:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].servers.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <span><b>SCM/Version Control:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].scmvc.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <br />
            <span><b>Containerization:</b></span>
            <div className='skillSection' style={showSkills ? { display: 'flex' } : { display: 'none' }}>
                {
                    data[0].containerization.map((data) => {
                        return (
                            <div className='skill'>
                                {data.icon ? <Icon className='skillIcon' icon={data.icon} /> : <Icon className='skillIcon' icon="ph:wifi-none-thin" />}
                                <span>{data.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SkillsV2