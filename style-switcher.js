
/* style switcher */ 

/* style switcher */

const styleSwitcherToggle = () => {
    const styleSwitcher = document.querySelector(".js-style-switcher");
    const styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

    if (styleSwitcherToggler) {
        styleSwitcherToggler.addEventListener("click", function () {
            styleSwitcher.classList.toggle("open");

            const icon = this.querySelector("i");

            if (icon.classList.contains("fa-gear")) {
                icon.className = "fa-solid fa-xmark";
            } else {
                icon.className = "fa-solid fa-gear";
            }
        });
    }
};

styleSwitcherToggle();


/* theme color */ 

const themeColor = () => {
    const hueSlider = document.querySelector(".js-hue-slider");
    const html = document.querySelector("html");

    const setHue = (value) => {
        html.style.setProperty("--hue", value);
        document.querySelector(".js-hue").innerHTML = value;
    }

    hueSlider.addEventListener("input", function() {
        setHue(this.value);
        localStorage.setItem("--hue", this.value);
    });

    const slider = (value) => {
        hueSlider.value = value;
    }

    if(localStorage.getItem("--hue") !== null){
        setHue(localStorage.getItem("--hue"));
        slider(localStorage.getItem("--hue"));
    }
    else{
        const hue = getComputedStyle(html).getPropertyValue("--hue");
        setHue(hue);
        slider(hue.trim());
    }
}

themeColor();


// theme light & dark mode
const themeLightDark = () => {
    const darkModeCheckbox = document.querySelector(".js-dark-mode");

    if(!darkModeCheckbox) return;

    const themeMode = () => {
        if(localStorage.getItem("theme-dark") === "true"){
            document.body.classList.add("t-dark");
        }
        else{
            document.body.classList.remove("t-dark");
        }
    }

    darkModeCheckbox.addEventListener("click", function() {
        localStorage.setItem("theme-dark", this.checked);
        themeMode();
    });

    if(localStorage.getItem("theme-dark") !== null){
        themeMode();
    }

    if(document.body.classList.contains("t-dark")){
        darkModeCheckbox.checked = true;
    }
}

themeLightDark();