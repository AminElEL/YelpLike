const apiKey='Z6EYhTV5fkvCf4aDbj08ot-ySd6RLZNueijvxBb5SoBVnY-OKxQpI0tZua91av9jpshn2OE-RMhqS3jLlsEvPPpP3ODKZIgspFe4cwImidipF1k0tVapxa8HpWC9XnYx';



let Yelp={
search(term,location,sortBy){

return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{headers: {Authorization:`Bearer ${apiKey}`}}).then(response=>{

return response.json();

}).then(jsonResponse=>{
    
    if(jsonResponse.businesses){

     
return jsonResponse.businesses.map(business=>({

id:business.id,
imageSrc:business.image_url,
name:business.name,
address:business.location.adress1,
city:business.location.city,
state:business.location.country,
zipCode:business.location.zip_code,
category:business.categories.title,
rating:business.rating,
reviewCount:business.review_count


     }));


    }
    else{return 'Nista nije pronadzeno!!!'}
});

}

};
export default Yelp;