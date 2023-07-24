function showMenu(){
    document.querySelector('.nav_options').classList.toggle('active');
    document.querySelector('.menu-button').classList.toggle('hide');
    document.querySelector('.x-icon').classList.toggle('show');
<<<<<<< HEAD
}
=======

    /* document.querySelectorAll('.about-imgs-cont img').forEach(image =>{
        image.onclick = () =>{
            document.querySelector('.popup-image').style.display = 'block';
            document.querySelector('.popup-image img').src = image.getAttribute('src');

            document.querySelector('.popup-image span').onclick = () =>{
                document.querySelector('.popup-image').style.display = 'none';
            }
        }
    }) */
}

document.querySelector('.back-video').play();


const gallery = document.querySelectorAll('.about-imgs-cont .image'),
    previewBox = document.querySelector('.preview-box'),
    previewImg = previewBox.querySelector('.image'),
    totalImg = previewBox.querySelector('.current-img'),
    currentImg = previewBox.querySelector('.total-img'),
    shadow = document.querySelector('.shadow'),
    closeIcon = previewBox.querySelector('.icon');

    window.onload = () => {
        for (let i = 0; i < gallery.length; i++){
            totalImg.textContent = gallery.length;
            let newIndex = i;
            let clickImgIndex;
            gallery[i].onclick = ()=> {
                clickImgIndex = newIndex;
                console.log(i);
                function preview(){
                    currentImg.textContent = newIndex + 1;
                    let selectedImgUrl = gallery[newIndex].querySelector('img').src;
                    previewImg.src = selectedImgUrl;
                    console.log(selectedImgUrl);
                }

                const prevBtn = document.querySelector('.prev');
                const nextBtn = document.querySelector('.next');
                
                if (newIndex == 0){
                    prevBtn.style.display = "none";
                }
            
                if (newIndex >= gallery.length - 1) {
                    nextBtn.style.display = "none";
                }
                if (newIndex != 0){
                    prevBtn.style.display = "block";
                }
            
                if (newIndex != gallery.length - 1) {
                    nextBtn.style.display = "block";
                }


                prevBtn.onclick = () => {
                    newIndex--;
                    if(newIndex == 0){
                        preview();
                        prevBtn.style.display = "none";
                    }else {
                        preview();
                        nextBtn.style.display = "block";
                    }
                    preview();
                }

                nextBtn.onclick = ()=>{
                    newIndex++;
                    if(newIndex >= gallery.length - 1){
                        preview();
                        nextBtn.style.display = "none";
                    }
                    else {
                        preview();
                        prevBtn.style.display = "block";
                    }
                    preview();
                }

                preview();
                previewBox.classList.add('show');
                shadow.style.display  = "block";
                document.querySelector("body").style.overflow = "hidden";

                closeIcon.onclick = ()=>{
                    newIndex = clickImgIndex;
                    prevBtn.style.display = "block";
                    nextBtn.style.display = "block";
                    previewBox.classList.remove('show');
                    shadow.style.display  = "none";
                    document.querySelector("body").style.overflow = "auto";
                }
            }
        }
    }
>>>>>>> b07fda00f4155a6e9bbab724f87d45a15598ddef
