let currentLang = 'en';

// Complete Menu Data with Images
const menu = {
  "Pizza (VEG)": {
    icon: "🍕",
    items: [
      {name: "Veg Overloaded Pizza", desc: "Capsicum, Onion, Corn, Mushroom", reg: 149, mid: 249, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400"},
      {name: "Onion Pizza", desc: "Fresh onions with cheese", reg: 149, mid: 199, type: "veg", available: true, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"},
      {name: "Capsicum Pizza", desc: "Onion & Capsicum", reg: 149, mid: 199, type: "veg", available: true, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400"},
      {name: "Mushroom Pizza", desc: "Onion & Mushroom", reg: 149, mid: 249, type: "veg", available: true, img: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?w=400"},
      {name: "Margherita Pizza", desc: "Classic cheese pizza", reg: 199, mid: 299, type: "veg", available: true, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400"},
      {name: "Paneer Tikka Pizza", desc: "Onion, Capsicum, Paneer Tikka", reg: 199, mid: 299, type: "veg", available: true, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400"},
      {name: "Makhani Paneer Pizza", desc: "Onion, Capsicum, Paneer", reg: 199, mid: 299, type: "veg", available: true, img: "https://images.unsplash.com/photo-1564128442383-9201fcc740eb?w=400"}
    ]
  },
  "Pizza (NON-VEG)": {
    icon: "🍕",
    items: [
      {name: "Tandoori Chicken Tikka Pizza", desc: "Onion, Capsicum, Chicken Tikka", reg: 199, mid: 299, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400"},
      {name: "Chicken Sausage Pizza", desc: "Chicken Sausage & Cheese", reg: 199, mid: 299, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400"},
      {name: "Chicken Keema Pizza", desc: "Keema & Mozzarella", reg: 219, mid: 319, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400"},
      {name: "Masala Murgh Pizza", desc: "Onion, Capsicum, Tikka Masala", reg: 219, mid: 319, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400"},
      {name: "Mutton Keema Pizza", desc: "Mutton Keema & Cheese", reg: 249, mid: 349, type: "non-veg", available: false, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400"}
    ]
  },
  "Burger (VEG)":{
    icon: "🍔",
    items: [
      {name: "Maharaja Paneer Patty Burger", desc: "Premium paneer patty", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400"},
      {name: "Veg Patty Burger", desc: "Crispy veg patty", reg: 79, type: "veg", available: true, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"},
      {name: "Aloo Patty Burger", desc: "Potato patty burger", reg: 69, type: "veg", available: true, img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400"}
    ]
  },
  "Burger (NOV-VEG)": {
    icon: "🍔",
    items: [
      {name: "Maharaja Chicken Patty Burger", desc: "Premium chicken patty", reg: 179, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400"},
      {name: "Chicken Patty Burger", desc: "Classic chicken patty", reg: 120, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"},
      {name: "Chicken Patty Burger With Cheese", desc: "Stuffing a burger with cheese", reg: 149, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400"}
    ]
  },
  "Sandwich (VEG)": {
    icon:"🥪",
    items: [
      {name: "Veg Coleslaw Sandwich", desc: "Fresh veggies with mayo", reg: 99, type: "veg", available: true, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400"},
      {name: "Veg Grilled Sandwich", desc: "Grilled vegetables", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400"},
      {name: "Veg Club Sandwich", desc: "Triple layer veg", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=400"},
      {name: "Paneer Grilled Sandwich", desc: "Grilled paneer special", reg: 159, type: "veg", available: true, img: "https://images.unsplash.com/photo-1619740455993-8a0d8c3a4e0b?w=400"},
      {name: "Double Cheese Sandwich", desc: "Extra cheesy", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400"},
    ]
  },
  "Sandwich (NON-VEG)": {
    icon: "🥪",
    items: [
      {name: "Chicken Coleslaw Sandwich", desc: "Chicken with coleslaw", reg: 149, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400"},
      {name: "Chicken Grilled Sandwich", desc: "Grilled chicken", reg: 179, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=400"},
      {name: "Chicken Tikka Sandwich", desc: "Tikka chicken special", reg: 199, type: "non-veg", available: false, img: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400"}
    ]
  },
  "Hot Dog (VEG)": {
    icon: "🌭",
    items: [
        {name: "Veg Hot Dog", desc: "Classic veg hot dog", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400"},
    ]
  },
  "Hot Dog (NON-VEG)": {
    icon: "🌭",
    items:[
        {name: "Chicken Hot Dog", desc: "Classic chicken hot dog", reg: 159, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400"},
    ]
  },
  "Fries & Snacks": {
    icon: "🍟",
    items: [
      {name: "French Fries", desc: "Crispy fried potatoes", reg: 99, type: "veg", available: true, img: "https://images.unsplash.com/photo-1630384082687-8f423f2a55b8?w=400"},
      {name: "Peri-Peri Fries", desc: "Spicy seasoned", reg: 119, type: "veg", available: false, img: "https://images.unsplash.com/photo-1585108434521-2416a38e2bdb?w=400"},
      {name: "Cheese French Fries", desc: "Loaded with cheese", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400"},
      {name: "Cheese Doritos", desc: "Cheesy nachos", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400"},
      {name: "Peanut Masala", desc: "Spicy roasted peanuts", reg: 99, type: "veg", available: true, img: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400"}
    ]
  },
  "Momos": {
    icon: "🥟",
    items: [
      {name: "Veg Momos (Steamed)", desc: "8 pieces steamed", reg: 80, type: "veg", available: true, img: "https://images.unsplash.com/photo-1626776876729-bab4eda639ef?w=400"},
      {name: "Veg Momos (Fried)", desc: "8 pieces fried", reg: 90, type: "veg", available: true, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400"},
      {name: "Paneer Momos", desc: "8 pieces paneer", reg: 120, type: "veg", available: true, img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400"},
      {name: "Chicken Momos (Steamed)", desc: "8 pieces steamed", reg: 100, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400"},
      {name: "Chicken Momos (Fried)", desc: "8 pieces fried", reg: 120, type: "non-veg", available: false, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"}
    ]
  },
  "Pasta & Noodles": {
    icon: "🍝",
    items: [
      {name: "White Pasta", desc: "Creamy white sauce", reg: 100, type: "veg", available: true, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400"},
      {name: "Red Pasta", desc: "Tangy red sauce", reg: 100, type: "veg", available: true, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400"},
      {name: "Mix Pasta", desc: "Mixed sauces", reg: 120, type: "veg", available: true, img: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=400"},
      {name: "Veg Maggie", desc: "Classic maggi", reg: 50, type: "veg", available: true, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400"},
      {name: "Cheese Maggie", desc: "Cheese topped", reg: 70, type: "veg", available: true, img: "https://images.unsplash.com/photo-1612182062422-f7e0e52a42e3?w=400"}
    ]
  },
  "Beverages": {
    icon: "🥤",
    items: [
      {name: "Cold Coffee", desc: "Chilled coffee", reg: 99, type: "veg", available: true, img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400"},
      {name: "Oreo Shake", desc: "Cookies & cream", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400"},
      {name: "Strawberry Shake", desc: "Fresh strawberry", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400"},
      {name: "Chocolate Shake", desc: "Rich chocolate", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400"},
      {name: "Lemon Iced Tea", desc: "Refreshing lemon tea", reg: 79, type: "veg", available: true, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400"}
    ]
  },
  "Kolkata Kathi Rolls (VEG)": {
    icon: "🌯",
    items: [
      {name: "Mix Veg. Roll", desc: "Mixed veg with sauces", reg: 79, type: "veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Soyabeen Roll", desc: "Spiced soyabeen filling", reg: 79, type: "veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Mushroom Roll", desc: "Sautéed mushrooms", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Corn Roll", desc: "Spiced corn filling", reg: 89, type: "veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Corn 'n' Cheese Roll", desc: "Corn with melted cheese", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Cheese Roll", desc: "Loaded with cheese", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Soya Chaap Roll", desc: "Spiced soya chaap", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Paneer Roll", desc: "Spiced paneer filling", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Kathi Paneer Tikka Roll", desc: "Paneer tikka filling", reg: 179, type: "veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Kathi Soya Chaap Roll", desc: "Soya chaap filling", reg: 199, type: "veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Chilli Paneer Roll", desc: "Spicy chilli paneer", reg: 199, type: "veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Chilli Mushroom Roll", desc: "Spicy chilli mushroom", reg: 159, type: "veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Chilli Potato Roll", desc: "Spicy chilli potato", reg: 109, type: "veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Veg. Manchurian Roll", desc: "Veg manchurian filling", reg: 109, type: "veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Veg. Momos Roll", desc: "Veg momos filling", reg: 109, type: "veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Veg. Chowmin Roll", desc: "Veg chowmin filling", reg: 99, type: "veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Veg. Soya Chaap Roasted Roll", desc: "Roasted soya chaap", reg: 179, type: "veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"}
      
    ]
  },
  "Kolkata Kathi Rolls (NON-VEG)": {
    icon: "🌯",
    items: [
      {name: "Egg Roll", desc: "Classic egg roll", reg: 79, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Egg Bhurji Roll", desc: "Spiced egg bhurji", reg: 89, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Chicken Roll", desc: "Spiced chicken filling", reg: 119, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Egg Chicken Roll", desc: "Egg & chicken combo", reg: 129, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Chicken Keema Roll", desc: "Minced chicken filling", reg: 139, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Chicken Kabab Roll", desc: "Grilled chicken kabab", reg: 129, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Mutton Kabab Roll", desc: "Grilled mutton kabab", reg: 149, type: "non-veg", available: false, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Mutton Keema Roll", desc: "Minced mutton filling", reg: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Chilli Chicken Roll", desc: "Spicy chilli chicken", reg: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Honey Chicken Roll", desc: "Sweet honey chicken", reg: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Chicken Tikka Roll", desc: "Spiced chicken tikka", reg: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Chicken Malai Roll", desc: "Creamy chicken filling", reg: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Chicken Momos Roll", desc: "Chicken momos filling", reg: 159, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Chicken Chowmin Roll", desc: "Chicken chowmin filling", reg: 159, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Chicken Manchurian Roll", desc: "Chicken manchurian filling", reg: 200, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"}
    ]
  },
  "ADD-ONS": {
    icon: "➕",
    items: [
      {name: "Egg", desc: " Egg", reg: 20, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1571047399553-3f5ec3d3f4f4?w=400"},
      {name: "Mayonnaise", desc: " Mayonnaise", reg: 20, type: "veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Cheese", desc: " Cheese", reg: 70, type: "veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Tandoori Delight", desc: " Tandoori Delight", reg: 40, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"}
    ]
  },
  "Pasta - VEG (White/ Red/ Mixed/ Sauce)": {
    icon: "🍝",
    items: [
      {name: "Veg. Pasta", desc: "Veg. Pasta (White/ Red/ Mixed/ Sauce)", reg: 199, type: "veg", available: true, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400"}
    ]
  },
  "Pasta - NON-VEG (White/ Red/ Mixed/ Sauce)": {
    icon: "🍝",
    items: [
      {name: "Non-Veg. Pasta", desc: "Non-Veg. Pasta (White/ Red/ Mixed/ Sauce)", reg: 249, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400"}
    ]
  },
  "Maggie Noodle (VEG)": {
    icon: "🍜",
    items: [
      {name: "Double Masala Maggie Noodles", desc: "Double Masala Maggie Noodles", reg: 69, type: "veg", available: true, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400"},
      {name: "Butter Masala Maggie Noodle", desc: "Butter Masala Maggie Noodle", reg: 89, type: "veg", available: true, img: "https://images.unsplash.com/photo-1612182062422-f7e0e52a42e3?w=400"},
      {name: "Cheese Maggie Noodles", desc: "Cheese Maggie Noodles", reg: 89, type: "veg", available: true, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400"},
      {name: "Tandoori Cheese Maggie Noodles", desc: "Tandoori Cheese Maggie Noodles", reg: 99, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?w=400"},
      {name: "Pasta Maggie Noodles", desc: "Pasta Maggie Noodles", reg: 129, type: "veg", available: true, img: "https://images.unsplash.com/photo-1612182062422-f7e0e52a42e3?w=400"}
      
    ]
  },
  "Maggie Noodle (NON-VEG)": {
    icon: "🍜",
    items: [
      {name: "Chicken Maggie Noodles", desc: "Chicken Maggie Noodles", reg: 99, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"},
    ]
  },
  "Hot Tea & Coffee": {
    icon: "☕",
    items: [
      {name: "Espresso Coffee", desc: "Strong espresso", reg: 50, type: "veg", available: true, img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400"},
      {name: "Black Coffee", desc: "Classic black coffee", reg: 50, type: "veg", available: true, img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400"},
      {name: "Masala Tea", desc: "Spiced masala tea", reg: 30, type: "veg", available: true, img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400"},
      {name: "Ginger Tea", desc: "Refreshing ginger tea", reg: 30, type: "veg", available: true, img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400"},
      {name: "Cademon Tea", desc: "Classic cademon tea", reg: 30, type: "veg", available: true, img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400"}
    ]
  },
  "Tandoori Snacks (VEG)": {
    icon: "🍢",
    items: [
      {name: "Veg. Tandoori Momos", desc: "8 pieces tandoori veg momos", reg: 129, type: "veg", available: true, img: "https://images.unsplash.com/photo-1626776876729-bab4eda639ef?w=400"},
      {name: "Paneer Tandoori Momos", desc: "8 pieces tandoori paneer momos", reg: 179, type: "veg", available: true, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400"},
      {name: "Panner afghani Momos", desc: "8 pieces afghani paneer momos", reg: 199, type: "veg", available: true, img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400"},
      {name: "Veg. Afghani Momos", desc: "8 pieces afghani veg momos", reg: 159, type: "veg", available: true, img: "https://images.unsplash.com/photo-1626776876729-bab4eda639ef?w=400"},
      {name: "Veg. Seekh  Kabab", desc: "2 pieces veg seekh kabab", reg: 159, type: "veg", available: true, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400"},
      {name: "SOya Chaap Tandoori", desc: "2 pieces soya chaap tandoori", reg: 199, type: "veg", available: true, img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400"},
      {name: "Malai Soya Chaap", desc: "2 pieces malai soya chaap", reg: 249, type: "veg", available: true, img: "https://images.unsplash.com/photo-1626776876729-bab4eda639ef?w=400"},
      {name: "Paneer Tikka", desc: "2 pieces paneer tikka", reg: 249, type: "veg", available: true, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400"},
      {name: "Paneer Malai Tikka", desc: "2 pieces paneer malai tikka", reg: 279, type: "veg", available: true, img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400"},
      {name: "Paneer Kalimirch Tikka", desc: "2 pieces paneer kalimirch tikka", reg: 279, type: "veg", available: true, img: "https://images.unsplash.com/photo-1626776876729-bab4eda639ef?w=400"}
    ]
  },
  "Tandoori Snacks (NON-VEG)": {
    icon: "🍢",
    items: [
      {name: "Chicken Tandoori Momos", desc: "8 pieces tandoori chicken momos", reg: 149, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400"},
      {name: "Chicken Afghani Momos", desc: "8 pieces afghani chicken momos", reg: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"},
      {name: "Chicken Tikka", desc: "chicken tikka", reg: 249, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400"},
      {name: "Chicken Murgh Malai Tikka", desc: "chicken murgh malai tikka", reg: 279, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"},
      {name: "Chicken Kalimirch Tikka", desc: "chicken kalimirch tikka", reg: 269, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400"},
      {name: "Chicken Seekh Kabab", desc: "2 pieces chicken seekh kabab", reg: 219, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"},
      {name: "Mutton Seekh Kabab", desc: "2 pieces mutton seekh kabab", reg: 299, type: "non-veg", available: false, img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400"},
      {name: "Tandoori Chicken", desc: "Half tandoori chicken", reg: 550, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"}
    ]
  },
  "Chinese Snacks (VEG)": {
    icon: "🥡",
    items: [
      {name: "Chilli Paneer", desc: "Spicy chilli paneer", half: 129, full: 399, type: "veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Honey Chilli Potato", desc: "Sweet honey chilli potato", half: 149, full: 249, type: "veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Chilli Potato", desc: "Spicy chilli potato", half: 129, full: 199, type: "veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Cihlli Mushroom", desc: "Spicy chilli mushroom", half: 159, full: 319, type: "veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Veg. Manchurian", desc: "Veg. manchurian", half: 139, full: 259, type: "veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Veg. Spring Roll", desc: "Veg. spring roll", half: 79, full: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"}
    ]
  },
  "Chinese Snacks (NON-VEG)": {
    icon: "🥡",
    items: [
      {name: "Chilli Chicken (Dry/Gravy)", desc: "Spicy chilli chicken (Dry/Gravy)", half: 229, full: 399, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"},
      {name: "Honey Chilli Chicken", desc: "Sweet honey chilli chicken", half: 259, full: 449, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"},
      {name: "Chicken Manchurian", desc: "Chicken manchurian", half: 259, full: 449, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"},
      {name: "Chicken Spring Roll", desc: "Chicken spring roll", half: 89, full: 159, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"}
    ]
  },
  "Momos (VEG)": {
    icon: "🥟",
    items: [
      {name: "Paneer Cheese Curry Momos", desc: "pieces paneer cheese curry momos", reg: 219, type: "veg", available: true, img: "https://images.unsplash.com/photo-1626776876729-bab4eda639ef?w=400"},
      {name: "Paneer Momos Steamed", desc: "pieces paneer momos steamed", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400"},
      {name: "Paneer Momos Fried", desc: "pieces paneer momos fried", reg: 169, type: "veg", available: true, img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400"},
      {name: "Paneer Momos Pan Fried", desc: "pieces paneer momos pan fried", reg: 179, type: "veg", available: true, img: "https://images.unsplash.com/photo-1626776876729-bab4eda639ef?w=400"},
      {name: "Veg. Momos Steamed", desc: "pieces veg momos steamed", reg: 69, type: "veg", available: true, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400"},
      {name: "Veg. Momos Fried", desc: "pieces veg momos fried", reg: 89, type: "veg", available: true, img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=400"},
      {name: "Veg. Momos Pan Fried", desc: "pieces veg momos pan fried", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1626776876729-bab4eda639ef?w=400"},
      {name: "Veg. Cheese Curry Momos", desc: "pieces veg cheese curry momos", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400"}
    ]
  },
  "Momos (NON-VEG)": {
    icon: "🥟",
    items: [
      {name: "Chicken Steamed Momos", desc: "pieces chicken steamed momos", reg: 99, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"},
      {name: "Chicken Fried Momos", desc: "pieces chicken fried momos", reg: 119, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"},
      {name: "Chicken Pan Fried Momos", desc: "pieces chicken pan fried momos", reg: 139, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"},
      {name: "Chicken Cheese Curry Momos", desc: "pieces chicken cheese curry momos", reg: 219, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"}
    ]
  },
  "Noodles (VEG)": {
    icon: "🍜",
    items: [
      {name: "Veg. Noodles", desc: "Veg. Noodles", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400"},
      {name: "Veg. Hakka Noodles", desc: "Veg. Hakka Noodles", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1612182062422-f7e0e52a42e3?w=400"},
      {name: "Veg. Chilli Garlic Noodles", desc: "Veg. Chilli Garlic Noodles", reg: 169, type: "veg", available: true, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400"},
      {name: "Paneer Noodles", desc: "Paneer Noodles", reg: 219, type: "veg", available: true, img: "https://images.unsplash.com/photo-1612182062422-f7e0e52a42e3?w=400"},
      {name: "SIngapuri Noodles", desc: "SIngapuri Noodles", reg: 219, type: "veg", available: true, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400"}
    ]
  },
  "Noodles (NON-VEG)": {
    icon: "🍜",
    items: [
      {name: "Egg Hakka Noodles", desc: "Egg Hakka Noodles", reg: 169, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"},
      {name: "Egg Chilli Garlic Noodles", desc: "Egg Chilli Garlic Noodles", reg: 179, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"},
      {name: "Chicken  Noodles", desc: "Chicken Noodles", reg: 189, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"},
      {name: "Chicken Garlic Noodles", desc: "Chicken Garlic Noodles", reg: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"},
      {name: "Chicken Chilli Garlic Noodles", desc: "Chicken Chilli Garlic Noodles", reg: 219, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"}
    ]
  },
  "Fried Rice (VEG)": {
    icon: "🍚",
    items: [
      {name: "Paneer Garlic Fried Rice", desc: "Paneer Garlic Fried Rice", reg: 199, type: "veg", available: true, img: "https://images.unsplash.com/photo-1612182062422-f7e0e52a42e3?w=400"},
      {name: "Mushroom Fried Rice", desc: "Mushroom Fried Rice", reg: 169, type: "veg", available: true, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400"},
      {name: "Veg. Chilli Garlic Fried Rice", desc: "Veg. Chilli Garlic Fried Rice", reg: 159, type: "veg", available: true, img: "https://images.unsplash.com/photo-1612182062422-f7e0e52a42e3?w=400"},
      {name: "Veg. Fried Rice", desc: "Veg. Fried Rice", reg: 129, type: "veg", available: true, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400"}
    ]
  },
  "Fried Rice (NON-VEG)": {
    icon: "🍚",
    items: [
      {name: "Chicken Chilli Garlic Fried Rice", desc: "Chicken Chilli Garlic Fried Rice", reg: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"},
      {name: "Chicken Fried Rice", desc: "Chicken Fried Rice", reg: 179, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"},
      {name: "Egg Chilli Garlic Fried Rice", desc: "Egg Chilli Garlic Fried Rice", reg: 169, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"},
      {name: "Egg Fried Rice", desc: "Egg Fried Rice", reg: 149, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"}
    ]
  },
  "Chinese Combo (VEG)": {
    icon: "🍱",
    items: [
      {name: "Chilli Paneer (Noodles/ Rice)", desc: "Chilli Paneer with Noodles or Rice", reg: 199, type: "veg", available: true, img: "https://images.unsplash.com/photo-1601924582975-3f3b1f6b5f4b?w=400"},
      {name: "Chilli Potato (Noodles/ Rice)", desc: "Chilli Potato with Noodles or Rice", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
      {name: "Veg. Manchurian (Noodles/ Rice)", desc: "Veg. Manchurian with Noodles or Rice", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"}
    ]
  },
  "Chinese Combo (NON-VEG)": {
    icon: "🍱",
    items: [
      {name: "Chilli Chicken (Noodles/ Rice)", desc: "Chilli Chicken with Noodles or Rice", reg: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"},
      {name: "Chicken Manchurian (Noodles/ Rice)", desc: "Chicken Manchurian with Noodles or Rice", reg: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"},
      {name: "Honey Chilli Chicken (Noodles/ Rice)", desc: "Honey Chilli Chicken with Noodles or Rice", reg: 219, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1617191511973-4c3f1b8e6f5e?w=400"}
    ]
  },
  "Indian Main Course (VEG)": {
    icon: "🍛",
    items: [
      {name: "Rajma", desc: "Rajma Curry", qtr: 99, half: 199, full: 399, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Chhole", desc: "Chhole Curry", qtr: 99, half: 199, full: 399, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Dal Makhani", desc: "Dal Makhani Curry", qtr: 99, half: 199, full: 399, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Yellow Dal", desc: "Yellow Dal Curry", qtr: 79, half: 159, full: 249, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Shahi Paneer", desc: "Shahi Paneer Curry", qtr: 99, half: 199, full: 399, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Kadai Paneer", desc: "Kadai Paneer Curry", qtr: 99, half: 199, full: 399, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Matar Paneer", desc: "Matar Paneer Curry", qtr: 99, half: 199, full: 399, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Aloo Gobi", desc: "Aloo Gobi Curry", qtr: 99, half: 199, full: 399, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Baigan Bharta", desc: "Baigan Bharta Curry", qtr: 99, half: 199, full: 399, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Bhindi Do Pyaza", desc: "Bhindi Do Pyaza Curry", qtr: 99, half: 199, full: 399, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"}
    ]
  },
  "Indian Main Course (NON-VEG)": {
    icon: "🍛",
    items: [
      {name: "Butter Chicken", desc: "Butter Chicken Curry", half: 259, full: 499, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1559561853-6f6f3f6f3f6f?w=400"},
      {name: "Kadhai Chicken", desc: "Kadhai Chicken Curry", half: 239, full: 499, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1559561853-6f6f3f6f3f6f?w=400"},
      {name: "Chicken Masala", desc: "Chicken Masala Curry", half: 239, full: 499, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1559561853-6f6f3f6f3f6f?w=400"},
      {name: "Chicken Dahiwala", desc: "Chicken Dahiwala Curry", half: 239, full: 499, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1559561853-6f6f3f6f3f6f?w=400"},
      {name: "Chicken Keema Mattar", desc: "Chicken Keema Mattar Curry", half: 259, full: 499, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1559561853-6f6f3f6f3f6f?w=400"},
      {name: "Chicken Curry", desc: "Chicken Curry", half: 239, full: 499, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1559561853-6f6f3f6f3f6f?w=400"},
      {name: "Chicken Do Pyaza", desc: "Chicken Do Pyaza Curry", half: 239, full: 499, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1559561853-6f6f3f6f3f6f?w=400"},
      {name: "Egg Curry", desc: "Egg Curry", half: 109, full: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1559561853-6f6f3f6f3f6f?w=400"}
    ]
  },
  "Thali (VEG)": {
    icon: "🍽️",
    items: [
      {name: "Paneer Labadbar + Dal Makhani + Jeera Rice + Tawa Roti + Mini Sauce & Onion Salad", desc: "Veg Thali", reg: 179, type: "veg", available: true, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400"},
    ]
  },
  "Thali (NON-VEG)": {
    icon: "🍽️",
    items: [
      {name: "Chichen Curry + Dal Makhani + Jeera Rice + Tawa Roti + Mini Sauce & Onion Salad", desc: "Non-Veg Thali", reg: 199, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"}
    ]
  },
  "Indian Breads - VEG (₹10/- Extra for AMUL BUTTER)": {
    icon: "🍞",
    items: [
      {name: "Tawa Roti", desc: "Tawa Roti", reg: 10, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Tawa Butter Roti", desc: "Tawa Butter Roti", reg: 15, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Plain Roti (Tandoori)", desc: "Plain Roti (Tandoori)", reg: 15, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Butter Roti (Tandoori)", desc: "Butter Roti (Tandoori)", reg: 20, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Plain Naan", desc: "Plain Naan", reg: 40, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Butter Naan", desc: "Butter Naan", reg: 50, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Aloo Stuff Naan", desc: "Aloo Stuff Naan", reg: 60, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Onion Naan", desc: "Onion Naan", reg: 60, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Paneer Naan", desc: "Paneer Naan", reg: 80, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Gobhi Naan", desc: "Ghobi Naan", reg: 60, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Aloo Pyaz Paratha", desc: "Aloo Pyaz Paratha", reg: 50, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Paneer Paratha", desc: "Paneer Paratha", reg: 100, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Gobhi Paratha", desc: "Gobhi Paratha", reg: 70, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Pyaz Paratha", desc: "Pyaz Paratha", reg: 50, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Plain Paratha", desc: "Plain Paratha", reg: 30, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Cheese Paratha", desc: "Cheese Paratha", reg: 100, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Garlic Naan", desc: "Garlic Naan", reg: 70, type: "veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"}
    ]
  },
  "Indian Breads - NON-VEG (₹10/- Extra for AMUL BUTTER)": {
    icon: "🍞",
    items: [
      {name: "Chicken Keema Paratha", desc: "Chicken Keema Paratha", reg: 100, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
      {name: "Mutton Keema Paratha", desc: "Mutton Keema Paratha", reg: 130, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400"},
    ]
  },
  "Rice Combos (VEG)": {
    icon: "🍚",
    items: [
      {name: "Rice", desc: "Jeera Rice + Dal Makhani + Tawa Roti", reg: 69, type: "veg", available: true, img: "https://images.unsplash.com/photo-1612182062422-f7e0e52a42e3?w=400"},
      {name: "Zeera Rice", desc: "Jeera Rice", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1612182062422-f7e0e52a42e3?w=400"},
      {name: "Matar Pulao", desc: "Matar Pulao", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1612182062422-f7e0e52a42e3?w=400"},
      {name: "Rajma + Rice", desc: "Rajma Curry + Rice", reg: 99, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Chhola + Rice", desc: "Chhole Curry + Rice", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Dal Makhani + Rice", desc: "Dal Makhani Curry + Rice", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Yellow Dal + Rice", desc: "Yellow Dal Curry + Rice", reg: 89, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Shahi Paneer + Rice", desc: "Shahi Paneer Curry + Rice", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Matar Paneer + Rice", desc: "Matar Paneer Curry + Rice", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1604908177523-3f4e4f4e4f4f?w=400"},
      {name: "Veg. Biryani", desc: "Veg. Biryani + Raita + Tawa Roti", reg: 129, type: "veg", available: true, img: "https://images.unsplash.com/photo-1612182062422-f7e0e52a42e3?w=400"},
    ]
  },
  "Rice Combos (NON-VEG)": {
    icon: "🍚",
    items: [
      {name: "Chicken Biryani", desc: "Chicken Biryani + Raita + Tawa Roti", half: 179, full: 359, type: "non-veg", available: true, img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400"},
    ]
  },
  "Coolers": {
    icon: "🥤",
    items: [
      {name: "Virgin Mojito", desc: "Fresh lime with mint leaves", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Watermelon Juice", desc: "Fresh watermelon juice", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Green Apple Juice", desc: "Fresh green apple juice", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Blue Curacoa" , desc: "Blue Curacao with lemon", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Masala Lemonode Soda", desc: "Masala Lemonade with soda", reg: 79, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Kala Khatta", desc: "Kala Khatta", reg: 99, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Peach Iced Tea", desc: "Peach flavored iced tea", reg: 99, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Lemon Iced Tea", desc: "Lemon flavored iced tea", reg: 99, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Tangy Mango Twist", desc: "Mango drink with a tangy twist", reg: 99, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"}
    ]
  },
  "Shakes": {
    icon: "🥤",
    items: [
      {name: "Oreo Shake", desc: "Oreo cookies with vanilla ice cream", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Butter Scotch", desc: "Butterscotch flavor with ice cream", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Strawberry", desc: "Fresh strawberry with ice cream", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Rasbhari Rasmalai", desc: "Rasmalai flavor with ice cream", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Chocoalate", desc: "Rich chocolate with ice cream", reg: 119, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Red Velvet", desc: "Red velvet flavor with ice cream", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Blueberry", desc: "Fresh blueberry with ice cream", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Rich Mango", desc: "Rich mango flavor with ice cream", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Cold Coffee", desc: "Cold coffee with ice cream", reg: 99, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Chunky Banana Caramel Shake", desc: "Banana caramel with ice cream", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"}
    ]
  },
  "Smoothies": {
    icon: "🥤",
    items: [
      {name: "Blueberry", desc: "Fresh blueberry smoothie", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Strawberry", desc: "Fresh strawberry smoothie", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Peanut Butter Banana", desc: "Peanut butter banana smoothie", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"},
      {name: "Cotton Candy", desc: "Cotton candy flavored smoothie", reg: 149, type: "veg", available: true, img: "https://images.unsplash.com/photo-1571091718767-18b6f6f6f6f6?w=400"}
    ]
  }
};

const translations = {
  en: {
    mainTitle: "Welcome Point",
    tagline: "Rolls / Momos / Indian / Chinese / Continental",
    deliveryBanner: "🚚 Free Home Delivery upto 2 Kms | Min. Order ₹200/-",
    totalItemsLabel: "Total Items",
    totalCatsLabel: "Categories",
    showingLabel: "Showing",
    searchPlaceholder: "🔍 Search dishes...",
    allItems: "All Items",
    vegOnly: "Veg Only",
    nonVegOnly: "Non-Veg",
    allCats: "All Categories",
    items: "Items",
    footerContact: "📞 Contact",
    footerTimings: "⏰ Timings",
    footerTimingsText: "Open Daily\n11:00 AM - 11:00 PM",
    footerPayment: "💳 Payment",
    footerServices: "🍴 Services",
    footerServicesText: "Dine In • Takeaway\nHome Delivery",
    notAvailable: "Not Available",
    notAvailableMsg: "This item is currently not available",
    description: "📝 DESCRIPTION",
    availability: "✅ AVAILABILITY",
    availableNow: "Available Now",
    regular: "REGULAR",
    mid: "MEDIUM",
    qtr: "QTR.",
    half: "HALF",
    full: "FULL"
  },
  hi: {
    mainTitle: "वेलकम पॉइंट",
    tagline: "रोल्स / मोमोज / इंडियन / चाइनीज / कॉन्टिनेंटल",
    deliveryBanner: "🚚 2 किमी तक फ्री होम डिलीवरी | न्यूनतम ऑर्डर ₹200/-",
    totalItemsLabel: "कुल आइटम",
    totalCatsLabel: "श्रेणियाँ",
    showingLabel: "दिखाया जा रहा",
    searchPlaceholder: "🔍 व्यंजन खोजें...",
    allItems: "सभी आइटम",
    vegOnly: "केवल शाकाहारी",
    nonVegOnly: "केवल मांसाहारी",
    allCats: "सभी श्रेणियाँ",
    items: "आइटम",
    footerContact: "📞 संपर्क करें",
    footerTimings: "⏰ समय",
    footerTimingsText: "रोज खुला\n11:00 AM - 11:00 PM",
    footerPayment: "💳 भुगतान",
    footerServices: "🍴 सेवाएं",
    footerServicesText: "डाइन इन • टेकअवे\nहोम डिलीवरी",
    notAvailable: "उपलब्ध नहीं",
    notAvailableMsg: "यह आइटम वर्तमान में उपलब्ध नहीं है",
    description: "📝 विवरण",
    availability: "✅ उपलब्धता",
    availableNow: "अभी उपलब्ध",
    regular: "रेगुलर",
    mid: "मिडियम",
    qtr: "क्वार्टर",
    half: "हाफ",
    full: "फुल"
  }
};

function switchLang(lang) {
  currentLang = lang;
  
  // Update button states
  document.getElementById('langEn').classList.toggle('active', lang === 'en');
  document.getElementById('langHi').classList.toggle('active', lang === 'hi');
  
  // Update all text elements
  const t = translations[lang];
  document.getElementById('mainTitle').textContent = t.mainTitle;
  document.getElementById('tagline').textContent = t.tagline;
  document.getElementById('deliveryBanner').textContent = t.deliveryBanner;
  document.getElementById('totalItemsLabel').textContent = t.totalItemsLabel;
  document.getElementById('totalCatsLabel').textContent = t.totalCatsLabel;
  document.getElementById('showingLabel').textContent = t.showingLabel;
  document.getElementById('search').placeholder = t.searchPlaceholder;
  document.getElementById('allItems').textContent = t.allItems;
  document.getElementById('vegOnly').textContent = t.vegOnly;
  document.getElementById('nonVegOnly').textContent = t.nonVegOnly;
  document.getElementById('allCats').textContent = t.allCats;
  document.getElementById('footerContact').textContent = t.footerContact;
  document.getElementById('footerTimings').textContent = t.footerTimings;
  document.getElementById('footerTimingsText').innerHTML = t.footerTimingsText.replace('\n', '<br>');
  document.getElementById('footerPayment').textContent = t.footerPayment;
  document.getElementById('footerServices').textContent = t.footerServices;
  document.getElementById('footerServicesText').innerHTML = t.footerServicesText.replace('\n', '<br>');
  
  // Re-render menu with new language
  render();
}

function render() {
  const s = document.getElementById('search').value.toLowerCase();
    const c = document.getElementById('catFilter').value;
  const t = translations[currentLang];
  
  let html = '';
  let cnt = 0;
  let totalCats = 0;
  let totalItems = 0;
  
  // Count total items in all categories
  Object.keys(menu).forEach(cat => {
    totalItems += menu[cat].items.length;
  });
  
  // Count categories
  totalCats = Object.keys(menu).length;
  
  Object.keys(menu).forEach(cat => {
    if(c !== 'all' && c !== cat) return;
    
    const items = menu[cat].items.filter(i => {
      const ms = !s || i.name.toLowerCase().includes(s) || i.desc.toLowerCase().includes(s);
      return ms;
    });
    
    if(items.length === 0) return;
    cnt += items.length;
    
    html += `
      <div class="menu-section">
        <div class="section-header">
          <div class="section-icon">${menu[cat].icon}</div>
          <div class="section-title">${cat}</div>
          <div class="section-count">${items.length} ${t.items}</div>
        </div>
        <div class="grid">
          ${items.map(i => `
            <div class="card ${!i.available?'unavailable':''}" onclick='showItem(${JSON.stringify(i)},"${cat}")'>
              <div class="card-image-wrapper">
                <img class="thumb" src="${i.img}" alt="${i.name}">
                <div class="veg-badge ${i.type}">●</div>
              </div>
              <div class="card-content">
                <div class="row">
                  <div class="name">${i.name}</div>
                  <div class="price-section">
                    ${i.reg?`<div><div class="price-label">${t.regular}</div><div class="price">₹${i.reg}</div></div>`:''}
                    ${i.mid?`<div><div class="price-label">${t.mid}</div><div class="price">₹${i.mid}</div></div>`:''}
                    ${i.qtr?`<div><div class="price-label">${t.qtr}</div><div class="price">₹${i.qtr}</div></div>`:''}
                    ${i.half?`<div><div class="price-label">${t.half}</div><div class="price">₹${i.half}</div></div>`:''}
                    ${i.full?`<div><div class="price-label">${t.full}</div><div class="price">₹${i.full}</div></div>`:''}

                  </div>
                </div>
                <div class="desc">${i.desc}</div>
                <div class="card-footer">
                  <div class="category-tag">${menu[cat].icon} ${cat}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
  
  document.getElementById('totalItems').textContent = totalItems;
  document.getElementById('totalCats').textContent = totalCats;
  document.getElementById('showing').textContent = cnt;
  document.getElementById('menu').innerHTML = html || `<div style="text-align:center;padding:60px;color:#94a3b8;">${currentLang === 'hi' ? 'कोई आइटम नहीं मिला' : 'No items found'}</div>`;
}

function showItem(item, cat) {
  const t = translations[currentLang];
  
  if(!item.available) {
    document.getElementById('mh').innerHTML = `
      <button class="modal-close" onclick="closeModal()">✕</button>
      <img src="${item.img}">
    `;
    document.getElementById('mb').innerHTML = `
      <div style="text-align:center;padding:40px;">
        <div style="font-size:60px;margin-bottom:20px;">❌</div>
        <h2 style="color:#ff6b6b;margin-bottom:16px;">${t.notAvailable}</h2>
        <p style="font-size:18px;color:#cbd5e1;"><strong>${item.name}</strong><br><br>${t.notAvailableMsg}</p>
      </div>
    `;
  } else {
    document.getElementById('mh').innerHTML = `
      <button class="modal-close" onclick="closeModal()">✕</button>
      <img src="${item.img}">
    `;
    document.getElementById('mb').innerHTML = `
      <div class="veg-badge ${item.type}" style="position:absolute;top:-50px;right:32px;width:36px;height:36px;font-size:24px;">●</div>
      <h2 class="modal-title">${item.name}</h2>
      <div style="color:#cbd5e1;margin-bottom:16px;">${cat}</div>
      <div class="modal-prices">
        ${item.reg?`<div class="modal-price"><div class="modal-price-label">${t.regular.toUpperCase()}</div><div class="modal-price-value">₹${item.reg}</div></div>`:''}
        ${item.mid?`<div class="modal-price"><div class="modal-price-label">${t.mid.toUpperCase()}</div><div class="modal-price-value">₹${item.mid}</div></div>`:''}
        ${item.qtr?`<div class="modal-price"><div class="modal-price-label">${t.qtr.toUpperCase()}</div><div class="modal-price-value">₹${item.qtr}</div></div>`:''}
        ${item.half?`<div class="modal-price"><div class="modal-price-label">${t.half.toUpperCase()}</div><div class="modal-price-value">₹${item.half}</div></div>`:''}
        ${item.full?`<div class="modal-price"><div class="modal-price-label">${t.full.toUpperCase()}</div><div class="modal-price-value">₹${item.full}</div></div>`:''}
      </div>
      <div style="margin:24px 0;">
        <div style="font-size:16px;font-weight:800;color:#ffd93d;margin-bottom:12px;">${t.description}</div>
        <div style="color:#cbd5e1;">${item.desc}</div>
      </div>
      <div>
        <div style="font-size:16px;font-weight:800;color:#ffd93d;margin-bottom:12px;">${t.availability}</div>
        <div style="color:#4ade80;font-weight:700;">${t.availableNow}</div>
      </div>
    `;
  }
  document.getElementById('modal').classList.add('show');
}

function closeModal() {
  document.getElementById('modal').classList.remove('show');
}

// Initialize
const cats = Object.keys(menu);
const t = translations[currentLang];

document.getElementById('catFilter').innerHTML = `<option value="all">${t.allCats}</option>` + 
  cats.map(c => `<option value="${c}">${c}</option>`).join('');

document.getElementById('tabs').innerHTML = `<div class="cat-tab active" onclick="filterCat('all')">🍴 ${currentLang === 'en' ? 'All' : 'सभी'}</div>` +
  cats.map(c => `<div class="cat-tab" onclick="filterCat('${c}')">${menu[c].icon} ${c}</div>`).join('');

function filterCat(c) {
  document.getElementById('catFilter').value = c;
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  render();
}

document.getElementById('search').oninput = render;
document.getElementById('catFilter').onchange = () => {
  const val = document.getElementById('catFilter').value;
  document.querySelectorAll('.cat-tab').forEach((tab, i) => {
    if(i === 0 && val === 'all') tab.classList.add('active');
    else if(tab.textContent.includes(val)) tab.classList.add('active');
    else tab.classList.remove('active');
  });
  render();
};

// QR Code button
document.getElementById('qrBtn').onclick = (e) => {
  e.preventDefault();
  const url = location.href.split('?')[0];
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}`;
  
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.style.display = 'flex';
  modal.onclick = (e) => {
    if(e.target === modal) modal.remove();
  };
  
  modal.innerHTML = `
    <div style="background:linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 100%);backdrop-filter:blur(40px);border-radius:24px;border:1px solid rgba(255,255,255,0.15);padding:40px;text-align:center;max-width:400px;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
      <h2 style="color:#ffd93d;margin-bottom:20px;font-size:24px;font-weight:900;">📱 Scan Menu</h2>
      <img src="${qrUrl}" style="width:250px;height:250px;border-radius:12px;margin-bottom:20px;border:2px solid rgba(255,255,255,0.1);"/>
      <div style="color:#cbd5e1;margin-bottom:20px;font-size:14px;">Scan with your phone to view menu</div>
      <button onclick="this.closest('.modal-overlay').remove()" style="background:linear-gradient(135deg, #ff6b35, #f7931e);color:white;border:none;padding:12px 32px;border-radius:10px;font-weight:700;cursor:pointer;font-size:16px;transition:all 0.3s;">
        Close
      </button>
    </div>
  `;
  
  document.body.appendChild(modal);
};

render();