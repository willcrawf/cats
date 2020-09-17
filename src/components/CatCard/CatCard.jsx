import React from 'react';
import { Link } from 'react-router-dom';

function CatCard({ user, cat, handleDeleteCat }) {
    return (
        <>
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img alt="cat" className="activator" src={cat.image ? cat.image : "https://www.cebodtelecom.com/wp-content/uploads/2014/09/related_post_no_available_image.png"} onClick={()=> {}}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{cat.name}<i className="material-icons right"></i></span>
                    <p>{cat.description}</p>
                </div>
                <div className="card-reveal">
                    <h6>Added By:  {user.name}</h6>
                    <h6>Breed: {cat.breed}</h6>
                    <div>Age:  {cat.age}</div>
                    <div>Gender: {cat.gender}</div>
                    <>
                    <button type="submit" className="btn red" onClick={() => handleDeleteCat(cat._id)}>
                        Delete Cat
                    </button>

                    <Link 
                        className="btn yellow black-text"
                        to={{
                            pathname: '/edit',
                            state: {cat}
                        }}
                    > <br></br>
                        Edit Cat
                    </Link>
                    </>
                </div>
            </div>
        </>
    )
}

export default CatCard;