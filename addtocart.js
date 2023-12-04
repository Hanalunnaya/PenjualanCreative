const product = [
    {
        id: 0,
        image: 'img1a.png',
        title: 'Marsha',
        price: 30000,
    },
    {
        id: 1,
        image: 'img2.png',
        title: 'Michie',
        price: 30000,
    },
    {
        id: 2,
        image: 'img3a.png',
        title: 'Chika',
        price: 30000,
    },
    {
        id: 3,
        image: 'img9.png',
        title: 'Ashel',
        price: 30000,
    },
    {
        id: 4,
        image: 'img5.png',
        title: 'Freya',
        price: 30000,
    },
    {
        id: 5,
        image: 'img6.png',
        title: 'Flora',
        price: 30000,
    },
    {
        id: 6,
        image: 'img7.png',
        title: 'Zee',
        price: 30000,
    },
    {
        id: 7,
        image: 'img8.png',
        title: 'Adel',
        price: 30000,
    }
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp. ${price}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rp. "+0+" ";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rp. "+total+" ";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rp. ${price}</h2>`+
                "<i class='fa-solid fa-trash fa-fade' style='color: #000000;' onclick='delElement("+ (j++) +")'></i></div>"
               
        
            );
        }).join('');
    }

    
}