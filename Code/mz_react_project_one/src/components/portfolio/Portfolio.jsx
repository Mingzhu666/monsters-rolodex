import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useState , useEffect } from 'react';
// import { useEffect } from "react";
import {
    bagPortfolio,
    clothPortfolio,
    suppliesPortfolio,
  } from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "bag",
            title: "Bag",
        },
        {
            id: "cloth",
            title: "Cloth",
        },
        {
            id: "supplies",
            title: "Supplies",
        },
        // {
        //     id: "design",
        //     title: "Design",
        // },
        // {
        //     id: "content",
        //     title: "Content",
        // },
    ];

    useEffect(() => {
        switch (selected) {
            case "bag":
                setData(bagPortfolio);
                break;
            case "cloth":
                setData(clothPortfolio);
                break;
            case "supplies":
                setData(suppliesPortfolio);
                break;
            // case "design":
            //     setData(designPortfolio);
            //     break;
            // case "content":
            //     setData(contentPortfolio);
            //     break;
            default:
                setData(bagPortfolio); 
        }

    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Merchandise</h1>
            <ul>
                {list.map((item) =>(
                    <PortfolioList 
                        key={item.id} 
                        id={item.id}
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div key={d.id} className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
