const mockProductArray = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 13,
        "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "price": 599,
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "rating": {
            "rate": 2.9,
            "count": 250
        }
    },
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 12.99,
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "rating": {
            "rate": 3.6,
            "count": 145
        }
    }
]

const mockCart = mockProductArray.map( (product, index) => {
    //I'm actually too lazy to write a mock array by Hand
    if (index === 2) {
        return {
            product: product,
            quantity: 3
        }
    } else {
        return {
            product: product,
            quantity: 1
        }
    }
})

export { mockProductArray, mockCart}