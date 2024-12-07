const foodData =[
            {
              "id": 1,
              "name": "Grilled Chicken",
              "details": "Juicy grilled chicken breast with herbs",
              "price": 12.99,
              "discount": true,
              "discount_price": 10.99,
              "category": "Dinner",
               "photo":"https://tinyurl.com/2dea8d8b",
            },
            {
              "id": 2,
              "name": "Veggie Wrap",
              "details": "Whole wheat wrap with fresh vegetables and hummus",
              "price": 8.99,
              "discount_price": null,
              "discount": false,
              "category": "Lunch",
              "photo":"https://tinyurl.com/mrynmj4e",

            },
            {
              "id": 3,
              "name": "Spaghetti Bolognese",
              "details": "Classic Italian pasta with rich tomato meat sauce",
              "price": 14.99,
              "discount_price": 8.99,
              "discount": true,
              "category": "Dinner",
              "photo":"https://plus.unsplash.com/premium_photo-1677000666761-ff476a65c8ba?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

          
            },
            {
              "id": 4,
              "name": "Caesar Salad",
              "details": "Crisp romaine lettuce with creamy Caesar dressing",
              "price": 9.99,
              "discount_price": 5.00,
              "discount": true,
              "category": "Lunch",
              "photo":"https://plus.unsplash.com/premium_photo-1700089483464-4f76cc3d360b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            },
            {
              "id": 5,
              "name": "BBQ Ribs",
              "details": "Slow-cooked ribs with tangy BBQ sauce",
              "price": 18.99,
              "discount_price": null,
              "discount": false,
              "category": "Dinner",
              "photo":"https://images.unsplash.com/photo-1622665632960-aba7ac089541?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            },
            {
              "id": 6,
              "name": "Chicken Alfredo",
              "details": "Creamy pasta with grilled chicken and Alfredo sauce",
              "price": 13.99,
              "discount_price": 9.90,
              "discount": true,
              "category": "Dinner",
              "photo":"https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            },
            {
              "id": 7,
              "name": "Tuna Sandwich",
              "details": "Fresh tuna salad on whole-grain bread",
              "price": 7.49,
              "discount_price": null,
              "discount": false,
              "category": "Lunch",
              "photo":"https://plus.unsplash.com/premium_photo-1695304030158-281aa6a8204c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFR1bmElMjBTYW5kd2ljaHxlbnwwfHwwfHx8MA%3D%3D",

            },
            {
              "id": 8,
              "name": "Beef Stir Fry",
              "details": "Tender beef with mixed vegetables in savory sauce",
              "price": 11.99,
              "discount_price": 9.00,
              "discount": true,
              "category": "Dinner",
              "photo":"https://images.unsplash.com/photo-1548869206-93b036288d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJlZWYlMjBTdGlyJTIwRnJ5fGVufDB8fDB8fHww",

            },
            {
              "id": 9,
              "name": "Greek Salad",
              "details": "Tomatoes, cucumbers, olives, and feta cheese",
              "price": 8.49,
              "discount_price": 5.00,
              "discount": true,
              "category": "Lunch",
              "photo":"https://plus.unsplash.com/premium_photo-1690561082636-06237f98bfab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            },
            {
              "id": 10,
              "name": "Shrimp Tacos",
              "details": "Soft tacos filled with spicy shrimp and fresh salsa",
              "price": 12.49,
              "discount_price": null,
              "discount": false,
              "category": "Dinner",
              "photo":"https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            },
            {
                    "id": 11,
                    "name": "Margarita Pizza",
                    "details": "Classic pizza with fresh tomato sauce, mozzarella, and basil",
                    "price": 10.99,
                    "discount": false,
                    "discount_price": null,
                    "category": "Dinner",
                    "photo":"https://images.unsplash.com/photo-1589187151053-5ec8818e661b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                },
                {
                    "id": 12,
                    "name": "Falafel Wrap",
                    "details": "Spiced chickpea patties with tahini sauce and vegetables",
                    "price": 7.99,
                    "discount": true,
                    "discount_price": 6.49,
                    "category": "Lunch",
               "photo":"https://plus.unsplash.com/premium_photo-1666662655178-14d8c6a099b0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                },
                {
                    "id": 13,
                    "name": "Tom Yum Soup",
                    "details": "Spicy and tangy Thai soup with shrimp, mushrooms, and lemongrass",
                    "price": 6.99,
                    "discount": false,
                    "discount_price": null,
                    "category": "appetizer",
               "photo":"https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                },
                {
                    "id": 14,
                    "name": "Grilled Salmon",
                    "details": "Perfectly grilled salmon served with lemon and dill",
                    "price": 16.99,
                    "discount": true,
                    "discount_price": 14.49,
                    "category": "Dinner",
               "photo":"https://images.unsplash.com/photo-1691201090878-1b9eab935bdd?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                },
                {
                    "id": 15,
                    "name": "Caprese Salad",
                    "details": "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
                    "price": 9.49,
                    "discount": false,
                    "discount_price": null,
                    "category": "Lunch",
               "photo":"https://images.unsplash.com/photo-1570197571499-166b36435e9f?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                },
                {
                    "id": 16,
                    "name": "Buffalo Wings",
                    "details": "Spicy chicken wings served with blue cheese dipping sauce",
                    "price": 11.49,
                    "discount": true,
                    "discount_price": 9.99,
                    "category": "appetizer",
               "photo":"https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                },
                {
                    "id": 17,
                    "name": "Pork Schnitzel",
                    "details": "Crispy breaded pork cutlet served with a side of mashed potatoes",
                    "price": 15.99,
                    "discount": false,
                    "discount_price": null,
                    "category": "Dinner",
               "photo":"https://images.unsplash.com/photo-1667819576336-e78d61b5f2e2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                },
                {
                    "id": 18,
                    "name": "Vegetable Stir-Fry",
                    "details": "Assorted fresh vegetables stir-fried in soy-ginger sauce",
                    "price": 8.49,
                    "discount": true,
                    "discount_price": 7.49,
                    "category": "Lunch",
               "photo":"https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                },
                {
                    "id": 19,
                    "name": "Cheeseburger",
                    "details": "Juicy beef patty with melted cheese, lettuce, tomato, and pickles",
                    "price": 9.99,
                    "discount": false,
                    "discount_price": null,
                    "category": "Dinner",
               "photo":"https://plus.unsplash.com/premium_photo-1675864532183-8f37e8834db5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                },
                {
                    "id": 20,
                    "name": "Spinach and Feta Pie",
                    "details": "Flaky pastry filled with spinach, feta cheese, and herbs",
                    "price": 6.49,
                    "discount": true,
                    "discount_price": 5.49,
                    "category": "Lunch",
               "photo":"https://images.unsplash.com/photo-1601000938181-925c9bc969fa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                }
          ]
          export default foodData