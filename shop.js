let allCards = document.querySelectorAll('.all-cards');
allCards.forEach(allCard => {
  let products = allCard.querySelectorAll('.p-card');
  
  products.forEach(product => {
    product.addEventListener('click', ()=> {
      window.location.href = 'sproduct.html'
    })
  })
})