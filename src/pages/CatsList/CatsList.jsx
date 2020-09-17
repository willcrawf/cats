import React  from 'react'
import CatCard from '../../components/CatCard/CatCard'

const CatList = (props, user) => {
    return (
        <>
        <div>
        {props.cats.map(cat =>
          <CatCard 
              key={cat._id}
              cat={cat}
              handleDeleteCat={props.handleDeleteCat}
              user={props.user}
              />
        )}
      </div>
      </>
   );
}

export default CatList;