import React from 'react'
import MainSolution from './MainSolution'
import IndustrySolution from './IndustrySolution'


const Solution = ({ solutions, iSolutions }) => {
    return (
        <>
            <MainSolution solutions={solutions} />
            <IndustrySolution iSolutions={iSolutions} />
        </>
    )
}

export default Solution