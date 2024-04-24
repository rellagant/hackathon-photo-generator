console.log("Hello world");

// const apiKey = "TBD";

// const apiKey = new HackathonSiteApi(
// 	"api_key=TBD"
// );

// async function getRandomPhoto(apiKey) {
// 	try {
// 		const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=TBDs&count=1`;

// 		const response = await axios.get(apiUrl);

// 		const randomPhoto = {
// 			imageUrl: response.data[0].hdurl, //can also be just .Url <- there are two options for photo url
// 			title: response.data[0].title,
// 			date: response.data[0].date,
// 			explanation: response.data[0].explanation,
// 		};
// 		return randomPhoto;
// 	} catch {
// 		(error) => {
// 			console.error("Error getting random photo:", error);
// 		};
// 	}
// }

// button.addEventListener('click', function()) {

// }

const imageContainer = document.querySelector(".main__image");

async function getRandomPhoto() {
	const randomPhoto =
		"https://api.nasa.gov/planetary/apod?api_key=TBD&count=1";

	try {
		const { data } = await axios.get(randomPhotoUrl);
		const imageUrl = data[0].url;
		// randomPhoto.src = data.url;
		titleElement.textContent = data[0].title;
		dateElement.textContent = data[0].date;
		explanationElement.textContent = data[0].explanation;

		// console.log(data);
		imageContainer.src = imageUrl;
	} catch (error) {
		console.error("Error grabbing jpeg:", error);
	}
}

getRandomPhoto();

const button = document.querySelector(".main__button");
const titleElement = document.querySelector(".main__title");
const dateElement = document.querySelector(".main__date");
const explanationElement = document.querySelector(".main__explanation");

button.addEventListener("click", function () {
	getRandomPhoto();
});

const todayDate = document.querySelector(".header__date");

const currentDate = {
	date: new Date().toDateString(),
};

todayDate.textContent = currentDate.date;
