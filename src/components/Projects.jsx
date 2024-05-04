import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import workdata from './data/data.json'

function Projects() {
    let item = useRef()
    const [data, setData] = useState(workdata.projects)
    console.log(data);
    const [showProjects, setShowProjects] = useState(true)
    useEffect(() => {
        try {
            showProjects ? item.current.style = 'transform:rotate(-180deg)' : item.current.style = 'transform:rotate(0deg)'
        } catch (error) { }
    }, [showProjects])
    // const [showDesc, setShowDesc] = useState(false)
    return (
        <>
            <div className='headerProject' onClick={() => { setShowProjects(!showProjects) }}>
                <span>PROJECTS</span>
                {
                    // showProjects ?
                    <Icon className='icon' ref={item} icon="material-symbols:keyboard-arrow-down-rounded" />
                    // :
                    // <Icon className='icon' icon="material-symbols:keyboard-arrow-down-rounded" />
                }
            </div>
            <div className='companies' style={showProjects ? { display: 'flex' } : { display: 'none' }}>
                <>
                    {
                        data.map((data) => {
                            return (
                                <div className='company' key={data.id}>
                                    <div className='companyName'>
                                        <div className='companyLogo'>{
                                        data.logo ? <img src={data.logo} alt={data.name} />: 
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/120px-React-icon.svg.png" alt="no Logo" /> }</div>
                                        <>
                                            <span className='nameAndLinkedin'>
                                                <span>{data.name}</span>
                                            </span>
                                            <div className='projectDescription'>
                                                <p>- {data.description}{' '} <text style={data.working == 'Completed'?{color:'#5ca56f'}:{color:'#f36b5f'}}>({data.working})</text> </p>
                                            </div>
                                        </>
                                    </div>
                                    <div className='screenshot hide'>
                                        <img src={require(`../images/${data.screenshot}`)} alt="" />
                                    </div>
                                    <div className='description'>
                                        <span className='hide'>Features:</span>
                                        <ul className='hide'>
                                            {
                                                data.notes.map((list, i) => {
                                                    return (
                                                        <li className='hide' key={i}>{list}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    {data.link && <div className='websiteUrl'>
                                        <a target={'_blank'} href={data.link}><Icon className='icon breath' icon="material-symbols:arrow-forward-rounded" /></a>
                                    </div>}
                                </div>
                            )
                        })}
                </>
            </div>
        </>
    )
}

export default Projects