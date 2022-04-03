import React, { useState } from 'react'
import Categories from './Categories';

const Category = () => {

    const [data, setData] = useState(Categories);
    const filterResult = (catItem) => {
        const result = Categories.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    }

    return (
        <>
            <h1 className="text-center text-info">Let's shop</h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Men')}>Men</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Women')}>Women</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Children')}>Children</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('Black')}>Black</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => filterResult('White')}>White</button>
                        <button className="btn btn-warning w-100 mb-4" onClick={() => setData(Categories)}>All</button>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {data.map((values) => {
                                const { id, title, price, image } = values;
                                return (
                                    <>
                                        <div className="col-md-4 mb-4" key={id}>
                                            <div className="card" >
                                                <img src={image} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">{title}</h5>
                                                    <p>price:{price}</p>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <a href="#" className="btn btn-primary">buy now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;
