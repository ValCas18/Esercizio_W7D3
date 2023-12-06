fetch("https://striveschool-api.herokuapp.com/books")
	.then((responseObj) => {
		if (responseObj.ok) {
			return responseObj.json();
		}
	})

	.then((booksObj) => {
		const row = document.querySelector(".row");
		console.log(booksObj);
		booksObj.forEach((book) => {
			const divCard = document.createElement("div");
			divCard.classList.add("col-12", "col-md-6", "col-lg-3");
			const card = document.createElement("div");
			card.classList.add("card");
			const cardImg = document.createElement("img");
			cardImg.src = book.img;
			const cardBody = document.createElement("div");
			cardBody.classList.add("card-body");
			const h5 = document.createElement("h5");
			h5.innerText = book.title;
			const span = document.createElement("span");
			span.innerText = book.price;
			const button = document.createElement("a");
			button.classList.add("btn", "btn-danger");
			button.innerText = "Scarta";
			cardBody.appendChild(h5);
			cardBody.appendChild(span);
			cardBody.appendChild(button);
			card.appendChild(cardImg);
			card.appendChild(cardBody);
			divCard.appendChild(card);
			row.appendChild(divCard);

			button.onclick = function (e) {
				e.target.closest(".col-12").remove();
			};
		});
	});
