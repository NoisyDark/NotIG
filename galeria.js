const gallery = document.getElementById("gallery");
        const addImageBtn = document.getElementById("addImage");

        // Función para agregar una nueva imagen
        function addImage() {
            const imageURL = prompt("Introduce la URL de la imagen:(por ejemplo, 'C:/Users/Administrador/Pictures/imagen.jpg') IMPORTANTE QUE SEA EN FORMATO .JPG:");
            if (imageURL) {
                const imageContainer = document.createElement('div');
                imageContainer.className = "imageContainer";

                const image = document.createElement('img');
                image.src = imageURL;
                image.className = "image";

                const imageTitle = document.createElement('p');
                imageTitle.className = "imageTitle";
                imageTitle.textContent = "Título de la imagen";

                imageContainer.appendChild(imageTitle); // Mover el título arriba de la imagen
                imageContainer.appendChild(image);

                gallery.appendChild(imageContainer);

                // Agregar eventos para editar y eliminar
                imageContainer.addEventListener("click", editImage);
                imageContainer.addEventListener("contextmenu", deleteImage);
            }
        }

        // Función para editar una imagen
        function editImage(event) {
            const imageContainer = event.currentTarget;
            const image = imageContainer.querySelector(".image");
            const imageTitle = imageContainer.querySelector(".imageTitle");

            const newTitle = prompt("Introduce un nuevo título para la imagen:", imageTitle.textContent);
            if (newTitle !== null) {
                imageTitle.textContent = newTitle;
            }

            const newSize = prompt("Introduce el nuevo tamaño (ejemplo: '300px'):", image.style.width);
            if (newSize !== null) {
                image.style.width = newSize;
            }

            const newBackgroundColor = prompt("Introduce el nuevo color de fondo (ejemplo: 'red'):", imageContainer.style.backgroundColor);
            if (newBackgroundColor !== null) {
                imageContainer.style.backgroundColor = newBackgroundColor;
            }
        }

        // Función para eliminar una imagen
        function deleteImage(event) {
            if (confirm("¿Seguro que deseas eliminar esta imagen?")) {
                gallery.removeChild(event.currentTarget);
            }
        }

        addImageBtn.addEventListener("click", addImage);

        // Incluir imágenes iniciales
        const initialImages = [
            "imagenAct3-1.jpg",
            "imagenAct3-2.jpg",
            "imagenAct3-3.jpg"
        ];

        for (const imageURL of initialImages) {
            const imageContainer = document.createElement('div');
            imageContainer.className = "imageContainer";

            const image = document.createElement('img');
            image.src = imageURL;
            image.style.width = "400px";
            image.className = "image";

            const imageTitle = document.createElement('p');
            imageTitle.className = "imageTitle";
            imageTitle.textContent = "Título de la imagen";

            imageContainer.appendChild(imageTitle);
            imageContainer.appendChild(image);

            gallery.appendChild(imageContainer);

            
            imageContainer.addEventListener("click", editImage);
            imageContainer.addEventListener("contextmenu", deleteImage);
        }