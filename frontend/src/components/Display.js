import React from 'react';
import styled from 'styled-components';
import ResultFadeIn from './ResultFadein';
import './style.css'

const Results = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 0px;
  opacity: 0;
  visibility: hidden;
  position: relative;
  top: 20px;
  color: white;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
`;

const Display=({data})=>{
    return(
        <div className="maintext" >
        <Results >

          { 
            data && data.map((d)=>{
               return(
                    <div className="container  mt-1 pl-4 pt-4" style={{ backgroundColor: "#08218c", borderRadius: "20px"}}>
                        <p><b>Tweet:</b> {d.text}</p> 
                        <p><b>Sentiment:</b> {d.type}s</p>

                    </div>
               )
           })
          }
        </Results>

        </div>
    )
}

export default Display;