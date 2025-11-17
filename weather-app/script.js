const api_key = "5950298585fc4c769c3150028251711";
const weather_url = "http://api.weatherapi.com/v1/current.json";

// access the button from the html
const search_btn = document.getElementById("search_btn");

search_btn.addEventListener("click", () => {
  // access the user input from html
  const location = document.getElementById("current_location");
  const cur_loc = location.value;
  fetchWeather(cur_loc);
  location.value = "";
});

// asynchronous function to fetch weather

const fetchWeather = async (loc) => {
  // exception handeling
  try {
    // to call the api --> fetch
    const res = await fetch(`${weather_url}?key=${api_key}&q=${loc}&aqi=yes`);
    const data = await res.json();
    const { current, location } = data;
    const { name = "", region = "", country = "" } = location;

    // ab dikhayenge
    const loc_wrapper = document.getElementById("location-wrapper"); // parent

    // child banayenge
    const child = document.createElement("h3");
    child.innerHTML = `${name}-${region}-${country}`;

    // parent ke andar dal denge
    loc_wrapper.appendChild(child);

    // ab weather dikhayenge
    const { temp_c, temp_f } = current;

    const wea_wrapper = document.getElementById("weather-wrapper"); // parent

    const celcius = document.createElement("h3");
    celcius.innerHTML = `Temp (in C) - ${temp_c}`;
    celcius.setAttribute("id", "celcius");

    const fah = document.createElement("h3");
    fah.innerHTML = `Temp (in F) - ${temp_f}`;
    fah.setAttribute("id", "fah");

    wea_wrapper.appendChild(celcius);
    wea_wrapper.appendChild(fah);
  } catch (error) {
    console.log("error occured-->", error);
  }
};
