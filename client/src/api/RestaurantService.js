export async function getAllRestaurants() {
    
    const response = await fetch("http:localhost:3000/api/v1/restaurants");
    return response.json();
}