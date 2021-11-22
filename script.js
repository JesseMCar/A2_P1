const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]



function cleanUpIndex() {
    var div = document.querySelector("div");
    var first = div.firstElementChild;
    while (first) {
        first.remove();
        first = div.firstElementChild;
    }
}


function createSingleIndex(contactList) {
    let index = `<a href="page3.html"><div class="contact"><p> ${contactList.name} </p></div></a>`
	return index
}

function renderindex(contactLists) {
    let main = document.querySelector('.main')
    for (x in contactList) {
        main.insertAdjacentHTML('beforeend', createSingleIndex(contactList[x]))
    }
}

function cleanUpView() {
    var div = document.querySelector("div");
    var first = div.firstElementChild;
    while (first) {
        first.remove();
        first = div.firstElementChild;
    }
}

function createSingleView(contactList){
	let main = `<div class="main">
	<div class="contactinfo">
		<div class="contactname">
			${contactList.name}
			<img src="./img/profile.jpg" class="profilepic" alt="Profile picture">
		</div>
		<div class="contactemail">${contactList.email}</div>
		<div class="contactphone">${contactList.phone}</div>
		<div class="contactaddress">${contactList.address}</div>
		<div class="buttons">
			<button class="button edit" value="Edit">Edit</button>
			<button class="button close" value="Close">Close</button>
		</div>
	</div>
</div>`
return main
}

function renderView(Lists) {
	let viewmain = document.querySelector('.main')
	for (x in Lists) {
        viewmain.insertAdjacentHTML('beforeend', createSingleView(Lists[x]))
    }
}


