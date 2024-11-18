const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let cartItems = [
    { id: 1, name: 'Product A', price: 20, quantity: 2, image: '/images/product-a.jpg' },
    { id: 2, name: 'Product B', price: 15, quantity: 1, image: '/images/product-b.jpg' },
];

// Get all cart items
app.get('/api/cart', (req, res) => {
    res.json(cartItems);
});

// Update cart item quantity
app.put('/api/cart/:id', (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    cartItems = cartItems.map((item) =>
        item.id === parseInt(id) ? { ...item, quantity } : item
    );

    res.json(cartItems);
});

// Serve images (optional)
app.use('/images', express.static('images'));

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
