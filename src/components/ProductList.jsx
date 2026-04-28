import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const plants = [
    { id: 1, name: "Aloe Vera", price: 200, category: "Indoor", img: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2025/04/aloe-vera-GettyImages-1473547826-Header-1024x575.jpg" },
    { id: 2, name: "Snake Plant", price: 300, category: "Indoor", img: "https://i0.wp.com/buygreen.in/wp-content/uploads/2022/09/bird-nest-snake-plant.gif?fit=960%2C960&ssl=1" },
    { id: 3, name: "Peace Lily", price: 250, category: "Indoor", img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b" },

    { id: 4, name: "Rose", price: 150, category: "Outdoor", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { id: 5, name: "Tulip", price: 180, category: "Outdoor", img: "https://m.media-amazon.com/images/I/61oocbMpQML._AC_UF1000,1000_QL80_.jpg" },
    { id: 6, name: "Sunflower", price: 220, category: "Outdoor", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },

    { id: 7, name: "Cactus", price: 120, category: "Succulent", img: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514" },
    { id: 8, name: "Jade Plant", price: 210, category: "Succulent", img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a" },
    { id: 9, name: "Echeveria", price: 190, category: "Succulent", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdg99t4SSzjAZTMNAxqWBRi8xgdmyQNsX3g&s" }
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
                                            onClick={() => dispatch(addToCart(p))}
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