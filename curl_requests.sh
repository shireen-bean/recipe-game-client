curl --include --request POST http://localhost:3000/recipes \
  --header "Content-Type: application/json" \
  --data '{
    "recipe": {
      "title": "Steak",
      "level": 2,
      "time": 20,
      "image": "http://weeklygravy.com/wp-content/uploads/2014/01/steak.jpg",
      "ingredients": ["1lb Drumsticks","2 in Ginger", "3 Cloves Garlic","1/3 cup sugar","1/3 cup soy sauce","1/3 cup water"],
      "directions": ["Mix water soy sauce and sugar in crock pot", "Place drumsticks in the concoction", "Chop ginger and garlic and throw in pot","Slow cook on low for 6-8 hours"]
    }
}'
