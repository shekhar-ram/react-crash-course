import { useState } from 'react';

const articleStyle = {
    width: '100%', border: '1px solid white', 'borderRadius': '8px', padding: '16px', textAlign: 'center'
};

export function ProductCard({product, background = 'slategray', onClick}) {
    const [count, setCount] = useState(product.count);
    function handleClick() {
        setCount((prevCount) => (prevCount - 1));
        onClick(product);
    }

    return (
        <article style={articleStyle}>
            <h2>{product.title}</h2>
            <img src={product.imageSrc} alt={product.title} width={128} height={128} />
            <p>Specifications:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {
                    product.spec.map(((sp, index) => <li key={index}>{sp}</li>))
                }
            </ul>

            <Counter count={product.count} />
            {
                product.count > 0 &&
                    (<button onClick={handleClick}>Buy (from ${product.price})</button>)
            }
        </article>
    );
}

function Counter({count}) {
    return count === 0 ?
       (<p style={{ fontSize: '14px', color: 'lightsalmono'}}>Product not available</p>) :
       (<p style={{ fontSize: '14px', color: 'lightgreen'}}>{count} items available</p>) 
}