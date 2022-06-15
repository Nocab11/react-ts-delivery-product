const dbMenu = {
	burger: [
        {
            "id": 1,
            "name": "JS Burger",
            "img": "/menu/js-burger.png",
            "price": 250,
            "toppings": ["Бекон", "Кетчуп", "Сыр Чеддер", "Огурцы", "Помидор", "Халапеньо"]
        },
		{
            "id": 2,
			"name": "Borsh Burger",
			"img": "/menu/borsh-burger.png",
			"price": 499.9,
			"toppings": ["Бекон", "Красный лук"]
		},
		{
            "id": 3,
			"name": "Freckles Burger",
			"img": "/menu/freckles-burger.png",
			"price": 350,
			"toppings": ["Ананас", "Майонец"]
		},
		{
            "id": 4,
			"name": "Timon Burger",
			"img": "/menu/black-burger.png",
			"price": 150
		},
		{
            "id": 5,
			"name": "React Burger",
			"img": "/menu/react-burger.png",
			"price": 299.9,
			"toppings": ["Кетчуп", "Сыр Чеддер"]
		},
		{
            "id": 6,
			"name": "Sun Burger",
			"img": "/menu/sun-burger.png",
			"price": 200,
			"toppings": ["Сыр Чеддер", "Красный лук"]
		},
	],
	other: [
		{
			name: "Coka",
			img: "/menu/soda.png",
			id: 1,
			price: 50,
			choices: ["Coca-cola", "Fanta", "Mirinda", "Sprite"],
		},
		{
			name: "Чайкофф",
			img: "/menu/tea.png",
			id: 2,
			price: 70,
			choices: ["Черный", "Зеленый"],
		},
		{
			name: "Лукошко Фри",
			img: "/menu/french-fries.png",
			id: 3,
			price: 75,
		},
		{
			name: "Нагиевцы",
			img: "/menu/nuggets.png",
			id: 4,
			price: 100,
			choices: ["Филе", "Крылья"],
		},
		{
			name: "Кофе",
			img: "/menu/coffee.png",
			id: 5,
			price: 150,
			choices: ["Эспрессо", "Капучино"],
		},
		{
			name: "Гринч",
			img: "/menu/green-coffee.png",
			id: 6,
			price: 175.25
		},
	]
};

export default dbMenu;


const dbMenu2 = {
    noodles: [
        {
            "id": 1,
            "name": "Шпинатная лапша вок с креветками в соусе Пекин или Том ям",
            "description": "Полезная шпинатная лапша и сочные креветки, приправленные свежим омлетом и овощным миксом (зеленая фасоль, морковь, цветная и белая капуста, болгарский перец) в устричном соусе или ароматном соусе том ям",
            "img": "/menu/img-id1.jpg",
            "priceStart": 384,
            "priceEnd": 384,
            "ingredients": [
                {
                    "name": "Жареный лук",
                    "value": 20
                },
                {
                    "name": "Острый Соус",
                    "value": 50
                },
                {
                    "name": "Брокколи",
                    "value": 50
                }
            ]
        },
        {
            "id": 2,
            "name": "Лапша № 2",
            "description": "Полезная шпинатная лапша и сочные креветки, приправленные свежим омлетом и овощным миксом (зеленая фасоль, морковь, цветная и белая капуста, болгарский перец) в устричном соусе или ароматном соусе том ям",
            "img": "/menu/img-id1.jpg",
            "priceStart": 500,
            "priceEnd": 500,
            "ingredients": [
                {
                    "name": "Жареный лук",
                    "value": 80
                },
                {
                    "name": "Острый Соус",
                    "value": 500
                },
                {
                    "name": "Брокколи",
                    "value": 10
                }
            ]
        },
        {
            "id": 3,
            "name": "Лапша № 3",
            "description": "В устричном соусе или ароматном соусе том ям",
            "img": "/menu/img-id1.jpg",
            "priceStart": 800,
            "priceEnd": 800,
            "ingredients": [
                {
                    "name": "Жареный лук",
                    "value": 80
                },
                {
                    "name": "Острый Соус",
                    "value": 500
                },
                {
                    "name": "Брокколи",
                    "value": 10
                }
            ]
        }
    ],
    beverages: [
        {
            "id": 1,
            "name": "Клюквенно-смородиновый напиток",
            "description": "Насыщенный ягодный напиток, приготовленный по домашнему рецепту из сочных плодов клюквы и черной смородины с добавлением сахара для приятной сладости и дольки лимона.",
            "img": "/menu/img-id1.png",
            "price": 150
        },
    ]
};



