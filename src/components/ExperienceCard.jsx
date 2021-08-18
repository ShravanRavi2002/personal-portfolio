import React, {useState, createRef} from 'react';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardHeader,
    Button,
    Col
} from "reactstrap"; 

import ColorThief from "colorthief";

import { Fade } from 'react-reveal';

const ExperienceCard = ({data}) => {
    console.log(data.color)
    const [colorArrays, setColorArrays] = useState([]);
    const [moreInfo, changeInfo] = useState(false);
    const imgRef = createRef();
    function getColorArrays() {
        const colorThief = new ColorThief();
        setColorArrays(colorThief.getColor(imgRef.current));
        if(data.color != undefined){
            setColorArrays(data.color)
        }
    }

    function rgb(values) {
        return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
    }

    return ( 
        <Col lg="4">
        <Fade left duration={1000} distance="20px">
            <Card style={{position: "relative", flexBasis: "auto", top: "100%", marginBottom: "2rem"}} className="shadow-lg--hover shadow border-0 text-center rounded">
                <CardHeader style={{background: data.color === undefined ? rgb(colorArrays)  : colorArrays, marginBottom: 0}} >
                    <h5 className="text-white">{data.company}</h5>
                </CardHeader>
                <CardBody className="py-5">
                    <a href={data.link} target="_blank" rel="noopener noreferrer" style={{width: "max-content", height: "max-content"}}>
                        <img ref={imgRef} href={data.link}  className="bg rounded-circle mb-3 img-center img-fluid shadow-lg--hover " src={data.companylogo} style={{ width: "110px", height: "110px" }} onLoad={() => getColorArrays()} alt=""/>
                    </a>
                    
                    <CardTitle tag="h5">{data.role}</CardTitle>
                    <CardSubtitle className="text-black" style={{paddingBottom: 15}}>{data.date}</CardSubtitle>
                    {moreInfo ? null : <Button onClick={() => changeInfo(!moreInfo)} style={{marginTop: "10px", marginBottom: 0}}>More Info</Button>}
                     
                    { 
                    moreInfo ? 
                    <div>
                        <hr style={{width: "80%", justifyContent: "center", margin: "auto"}}></hr>
                        <CardText className="description my-3 text-center text-black" style={{color: "black", justifyContent: "center", margin: "auto",}}>
                            {data.desc}
                        </CardText>
                        <CardText className="my-4 text-left text-black" style={{color: "black", justifyContent: "center", margin: "auto", paddingLeft: "20px", fontSize: "14px"}}>
                            <ul>
                                {
                                    data.descBullets ? 
                                    data.descBullets.map((desc) => {
                                        return <li key={desc}>{desc}</li>
                                    }) : null
                                }
                            </ul>
                        </CardText>
                        <Button onClick={() => changeInfo(!moreInfo)}>Less Info</Button>
                    </div>
                    : <div></div>
                }
                    
                    <div>
                    </div>
                </CardBody>
            </Card>
            </Fade>
        </Col>
     );
}
 
export default ExperienceCard;