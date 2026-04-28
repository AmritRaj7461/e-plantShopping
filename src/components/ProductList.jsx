import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const plants = [

    // Indoor (6)
    { id: 1, name: "Aloe Vera", price: 200, category: "Indoor", img: "https://images.unsplash.com/photo-1587502537104-2c9a8a3c2d6b" },
    { id: 2, name: "Snake Plant", price: 300, category: "Indoor", img: "https://images.unsplash.com/photo-1593482892290-f54927ae9cfe" },
    { id: 3, name: "Peace Lily", price: 250, category: "Indoor", img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },
    { id: 4, name: "Spider Plant", price: 180, category: "Indoor", img: "https://images.unsplash.com/photo-1589927986089-35812388d1f4" },
    { id: 5, name: "ZZ Plant", price: 350, category: "Indoor", img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a" },
    { id: 6, name: "Areca Palm", price: 400, category: "Indoor", img: "https://images.unsplash.com/photo-1616627988035-7a7c7d9a5c43" },

    // Outdoor (6)
    { id: 7, name: "Rose", price: 150, category: "Outdoor", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { id: 8, name: "Tulip", price: 180, category: "Outdoor", img: "https://images.unsplash.com/photo-1524593119771-f3c3f6aab54b" },
    { id: 9, name: "Sunflower", price: 220, category: "Outdoor", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
    { id: 10, name: "Hibiscus", price: 200, category: "Outdoor", img: "https://images.unsplash.com/photo-1597848212624-64caa4d7a8db" },
    { id: 11, name: "Marigold", price: 120, category: "Outdoor", img: "https://images.unsplash.com/photo-1508747703725-719777637510" },
    { id: 12, name: "Jasmine", price: 250, category: "Outdoor", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8f6" },

    // Succulent (6)
    { id: 13, name: "Cactus", price: 120, category: "Succulent", img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514" },
    { id: 14, name: "Jade Plant", price: 210, category: "Succulent", img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a" },
    { id: 15, name: "Echeveria", price: 190, category: "Succulent", img: "https://images.unsplash.com/photo-1509423350716-97f2360af2e4" },
    { id: 16, name: "Aloe Juvenna", price: 170, category: "Succulent", img: "https://images.unsplash.com/photo-1524593119771-f3c3f6aab54b" },
    { id: 17, name: "Haworthia", price: 160, category: "Succulent", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8f6" },
    { id: 18, name: "Sedum", price: 140, category: "Succulent", img: "https://images.unsplash.com/photo-1508747703725-719777637510" }
];

export default function ProductList() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);

    const categories = ["Indoor", "Outdoor", "Succulent"];

    return (
        <div className="product-page">
            <h2>🌿 Our Plants</h2>

            {categories.map(category => (
                <div key={category}>
                    <h3 className="category-title">{category}</h3>

                    <div className="product-grid">
                        {plants
                            .filter(p => p.category === category)
                            .map(p => {
                                const inCart = cart.find(i => i.id === p.id);

                                return (
                                    <div className="card" key={p.id}>
                                        <img src={p.img} alt={p.name} />
                                        <h4>{p.name}</h4>
                                        <p>₹{p.price}</p>

                                        <button
                                            disabled={inCart}
                                            onClick={() => dispatch(addItem(p))}
                                        >
                                            {inCart ? "Added ✅" : "Add to Cart"}
                                        </button>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            ))}
        </div>
    );
}