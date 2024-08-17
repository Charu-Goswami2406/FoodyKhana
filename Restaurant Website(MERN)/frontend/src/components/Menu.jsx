import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Discover the culinary masterpieces that have made FoodyKhana a favorite among food enthusiasts. Our popular dishes showcase a blend of classic flavors and innovative twists, meticulously crafted by our talented chefs. From the sizzling Spiced Lamb Chops with a fragrant herb crust to the decadent Truffle Mushroom Risotto, each dish is designed to tantalize your taste buds. Enjoy our signature FoodyKhana Burger, layered with gourmet ingredients, or savor the fresh and vibrant Mediterranean Seafood Salad. Every dish on our menu is a celebration of taste and quality, bringing you the finest dining experience with every bite.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
