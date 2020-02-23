   // add both warnings 
    const span1 = document.querySelector('.warning_msg_budget')  
    const span2 = document.querySelector('.warning_msg_expense')


  

 // add input values of budget and expenses
const budget_value  = document.querySelector('.budget-input')
const expense_text  = document.querySelector('.expense-input')
const expense_value = document.querySelector('#expense-input')



 // add budget and expense button
const calculate_btn = document.querySelector('.calculate_btn')
const expense_btn   = document.querySelector('.expense_btn')

 
  // add all three prices 
const budget_price  = document.querySelector('.budget_value')
const expense_price = document.querySelector('.expense_value')
const balance_price = document.querySelector('.balance_value')


   // get the list
    var mylist = document.querySelector('.list-group')
    
    var data = []
  
     var isDointEdit
     var myindex

  calculate_btn.addEventListener("click",function(){
       if(budget_value.value.length > 0)
       {
        span1.removeAttribute('id', 'show')
        budget_value.removeAttribute('id', 'red')
    
          budget_price.innerHTML = Number(budget_value.value)
          balance_price.innerHTML = Number(budget_price.innerHTML) - Number(expense_price.innerHTML)
          budget_value.value = ''
       }
       else
       {
          span1.setAttribute('id', 'show')
          budget_value.setAttribute('id', 'red')
       }
  })


     expense_btn.addEventListener("click", function(){
     if(expense_text.value.length > 0 && expense_value.value.length > 0)
        {
            
         if(isDointEdit)
         {    
               var total = 0 
              data[myindex].title= expense_text.value
              data[myindex].price= expense_value.value
    

                 mylist.innerHTML = null
                 for(var i=0 ; i<data.length ; i++)
                 {
                  var newelement = document.createElement('li')
                  newelement.setAttribute('class', 'list-group-item active')
                  newelement.innerHTML =  
                 `<div class="row">
                  <div class="col-md-6">${data[i].title}</div> 
                  <div class="col-md-6">$ ${data[i].price} 
                  <button class="edit-btn" onclick=edit(this) title="${data[i].title}" price="${data[i].price}">
                  <i class="fas fa-edit"></i>
                  </button>
                  <button class="delete-btn" onclick=del(this) title="${data[i].title}" price="${data[i].price}">
                  <i class="fas fa-trash-alt"></i>
                  </button>
                  </div>
                  </div>`
                  mylist.append(newelement)
                  total += Number(data[i].price)
                 }
                 expense_price.innerHTML = total
                 balance_price.innerHTML = Number(budget_price.innerHTML) - Number( expense_price.innerHTML)

                   expense_text.value = ''
                   expense_value.value = ''

              isDointEdit= false
              index   = null
         }
         else
         {
        span2.removeAttribute('id', 'show')
        expense_value.removeAttribute('id', 'red')
        expense_text.removeAttribute('id', 'red')

         mylist.innerHTML = null

         expense_price.innerHTML = Number(expense_price.innerHTML) + Number(expense_value.value)
         balance_price.innerHTML = Number(budget_price.innerHTML) - Number(expense_price.innerHTML)
      
           var obj = {
               title: expense_text.value,
               price: expense_value.value
                     }
  
                data.push(obj)
 
                 for(var i=0 ; i<data.length ; i++)
                 {
                  var newelement = document.createElement('li')
                  newelement.setAttribute('class', 'list-group-item active')
                  newelement.innerHTML =  
                 `<div class="row">
                  <div class="col-md-6">${data[i].title}</div> 
                  <div class="col-md-6">$ ${data[i].price} 
                  <button class="edit-btn" onclick=edit(this) title="${data[i].title}" price="${data[i].price}">
                  <i class="fas fa-edit"></i>
                  </button>
                  <button class="delete-btn" onclick=del(this) title="${data[i].title}" price="${data[i].price}">
                  <i class="fas fa-trash-alt"></i>
                  </button>
                  </div>
                  </div>`
                  mylist.append(newelement)
                 }
            

                expense_text.value = ''
                expense_value.value= ''
               }
           
    }
   else
    {
        span2.setAttribute('id', 'show')
        expense_value.setAttribute('id', 'red')
        expense_text.setAttribute('id', 'red')
    }
})



    function edit(e)
    {

     var title = e.getAttribute('title')
     var price = e.getAttribute('price')


     expense_text.value  =   title
     expense_value.value =   price

       isDointEdit = true

   //   balance_price.innerHTML = Number( balance_price.innerHTML) +   Number(price)
   //   expense_price.innerHTML = Number(expense_price.innerHTML)  - Number(price) 

       myindex = data.findIndex((element)=>{
              return element.title === title
     })         
     
      //        data.splice(index,1)

      //      mylist.innerHTML = null
      //      for(var i=0 ; i<data.length ; i++)
      //      {
      //       var newelement = document.createElement('li')
      //       newelement.setAttribute('class', 'list-group-item active')
      //       newelement.innerHTML =  
      // `<div class="row">
      // <div class="col-md-6">${data[i].title}</div> 
      // <div class="col-md-6">$ ${data[i].price} 
      // <button class="edit-btn" onclick=edit(this) value="${data[i].title}">
      // <i class="fas fa-edit"></i>
      // </button>
      // <button class="delete-btn" onclick=del(this) title="${data[i].title}" price="${data[i].price}">
      // <i class="fas fa-trash-alt"></i>
      // </button>
      // </div>
      // </div>`
      //       mylist.append(newelement)
      //    }

   }
            
    function del(e)
    {
       mylist.innerHTML = null
      var title = e.getAttribute('title')
      var price = Number(e.getAttribute('price'))
 
       balance_price.innerHTML = Number( balance_price.innerHTML) + price
       expense_price.innerHTML = Number(expense_price.innerHTML)  - price
      
           var index = data.findIndex((element)=>{
                return element.title === title
                   })

 
              data.splice(index,1)
              for(var i=0 ; i<data.length ; i++)
               {
                var newelement = document.createElement('li')
                newelement.setAttribute('class', 'list-group-item active')
                newelement.innerHTML =  
          `<div class="row">
          <div class="col-md-6">${data[i].title}</div> 
          <div class="col-md-6">$ ${data[i].price} 
          <button class="edit-btn" onclick=edit(this) title="${data[i].title}" price="${data[i].price}">
          <i class="fas fa-edit"></i>
          </button>
          <button class="delete-btn" onclick=del(this) title="${data[i].title}" price="${data[i].price}">
          <i class="fas fa-trash-alt"></i>
          </button>
          </div>
          </div>`
                mylist.append(newelement)
             }
    } 
 