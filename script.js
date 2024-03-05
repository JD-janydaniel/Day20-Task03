 //function to create a header
 function create_header(tagname,attrname,attrvalue,content){
    let header = document.createElement(tagname);
    header.setAttribute(attrname,attrvalue);
    header.innerText = content;
    return header;
}
//function to create a paragraph
function create_para(tagname,attrname,attrvalue,content){
    let para = document.createElement(tagname);
    para.setAttribute(attrname,attrvalue);
    para.innerText = content;
    return para;
}
//function to create a label
function create_label(tagname,attrname,attrvalue,attrname1,attrvalue1,content){
    let label = document.createElement(tagname);
    label.setAttribute(attrname,attrvalue);
    label.setAttribute(attrname1,attrvalue1);
    label.innerText = content;
    return label;
}
//function to create break
function create_break(){
    let breake1 = document.createElement("br");
    return breake1;
}
//function to create input
function create_input(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    let input = document.createElement(tagname);
    input.setAttribute(attrname,attrvalue);
    input.setAttribute(attrname1,attrvalue1);
    input.setAttribute(attrname2,attrvalue2);
    input.setAttribute(attrname3,attrvalue3);
    return input;
}
//function to create button
function create_button(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,content){
    let butt = document.createElement(tagname);
    butt.setAttribute(attrname,attrvalue);
    butt.setAttribute(attrname1,attrvalue1);
    butt.setAttribute(attrname2,attrvalue2);
    butt.innerText = content;
    return butt;
}
//function to create div
function create_div(tagname,attrname,attrvalue){
    let div = document.createElement(tagname);
    div.setAttribute(attrname,attrvalue);
    return div;
}
 //function call to create a heading 
let heading = create_header("h1","class","heading","This website shows some interesting facts and details about BEERS");
document.body.append(heading)
//function call to create a div(box1)
let box1 = create_div("div","class","flexbox");
//function to create a div(box2)
let box2 = create_div("div","class","boxmain");
let paragraph1 = create_para("p","class","paragraph","Before 6000 BCE, beer was made from barley in Sumer and Babylonia. Reliefs on Egyptian tombs dating from 2400 BCE show that barley or partly germinated barley was crushed, mixed with water, and dried into cakes. When broken up and mixed with water, the cakes gave an extract that was fermented by microorganisms accumulated on the surfaces of fermenting vessels");
box2.append(paragraph1);
//function to create a div (box3)
let box3 = create_div("div","class","boxmain1");
let paragraph2 = create_para("p","class","paragraph","Beer production involves malting, milling, mashing, extract separation, hop addition and boiling, removal of hops and precipitates, cooling and aeration, fermentation, separation of yeast from young beer, aging, maturing, and packaging. The object of the entire process is to convert grain starches to sugar, extract the sugar with water, and then ferment it with yeast to produce the alcoholic, lightly carbonated beverage.");
box3.append(paragraph2);
box1.append(box2,box3)
document.body.append(box1);
//function to create a div(box4)
let box4 = create_div("div","class","boxmain2");
let label1 = create_label("label","for","search","class","label","Enter the id: (enter the id number between 1 to 325)");
let break1 = create_break();
let input1 = create_input("input","type","text","id","search","class","input","placeholder","Enter the number between 1 to 325");
let break2 = create_break();
let button = create_button("button","type","button","class","button","onclick","button_click()","Click Me");

box4.append(label1,break1,input1,break2,button);
document.body.append(box4);
//Async, await function to fetch the data
async function button_click(){
    try//try it is the test block
    {
        var get_input = document.querySelector(".input").value;
        var get_input1 = document.querySelector(".input").value = "";
    
    let res =  await fetch(`https://api.punkapi.com/v2/beers/${get_input}`) 
    let res1 = await res.json()
    //console.log(res1);
    let brew = res1[0];
    //console.log(brew);
    // Remove any existing card elements
    let existingCard = document.querySelector(".cardbox");
    if (existingCard) {
        existingCard.remove();
    }
    //code to remove the exsiting error element
    let existing_error = document.querySelector(".span")
        if(existing_error){
            existing_error.remove();
        }
    let card = document.createElement("div");
    card.className = "cardbox"
    card.innerHTML =`<div class="card" style="width: 40rem;">
    <div class="card-body">
    <p class="card-text">Name: ${brew.name}</p>
    <p class="card-text">First Brewed: ${brew.first_brewed}</p>
    <p class="card-text">Id: ${brew.id}</p>
    <p class="card-text">Ibu: ${brew.ibu}</p>
    <p class="card-text">Ph: ${brew.ph}</p>
    <p class="card-text">Srm: ${brew.srm}</p>
    <p class="card-text">Contributed By: ${brew.contributed_by}</p>
    <p class="card-text">Abv: ${brew.abv}</p>
    <p class="card-text"> Attenuation Level: ${brew.attenuation_level}</p>
    <p class="card-text">Ebc: ${brew.ebc}</p>
    <p class="card-text">Yeast: ${brew.ingredients.yeast}</p>
    <p class="card-text">Tagline: ${brew.tagline}</p>
    <p class="card-text">Food Pairing1: ${brew.food_pairing[0]}</p>
    <p class="card-text">Food Pairing2: ${brew.food_pairing[1]}</p>
    <p class="card-text">Food Pairing3: ${brew.food_pairing[2]}</p>
    <p class="card-text">Description: ${brew.description}</p>
    <p class="card-text"></p>
  </div>
</div>`
document.body.append(card);//card is appended to the body

    }catch(error)//catch block to handle the error
    {
        let span = document.createElement("span");
        span.className = "span"
        span.innerHTML = "Oops!! Data Not Found"
        //code to remove the existing error element
        let existing_error = document.querySelector(".span")
        if(existing_error){
            existing_error.remove();
        }
        //code to remove the existing card element
        let existingCard = document.querySelector(".cardbox");
        if (existingCard) {
        existingCard.remove();
        }
        document.body.append(span)
   }
   
  }
 
  




