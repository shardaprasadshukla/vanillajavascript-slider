function ready() {
    function createNode(element) {
        return document.createElement(element);
    }
    function append(parent, el) {
        return parent.appendChild(el);
    }

    for (j = 1; j <= 15; j++) {
        fetch('https://picsum.photos/id/' + j + '/1005/367')
            .then((response) => {
                var responseImages = document.getElementById("dynamic-img");
                var creatediv = createNode('div');
                var img = createNode('img');
                img.setAttribute('src', response.url);
                append(creatediv, img);
                append(responseImages, creatediv);
            })

    }
    setTimeout(function () {
        var slidesList = document.querySelector('.slider-items').children;
        var nextslide = document.querySelector(".next");
        var prevslide = document.querySelector(".prev");
        var index = 0;
        slidesList[index].classList.add("active");
        var TotalSlide = slidesList.length;

        nextslide.onclick = function () {
            next("next");
        }
        prevslide.onclick = function () {
            next("prev");
        }
        function next(direction) {

            if (direction == "next") {
                index++;
                if (index == TotalSlide) {
                    index = 0;
                }

            }
            else {
                if (index == 0) {
                    index = TotalSlide - 1;
                }
                else {
                    index--;
                }
            }
            for (let i = 0; i < TotalSlide; i++) {
                slidesList[i].classList.remove('active');
            }
            slidesList[index].classList.add("active");

        }

    }, 500);



}


document.addEventListener("readystatechange", ready);






