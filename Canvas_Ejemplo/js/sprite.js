function Sprite(img){
	//Atributos ****************
	this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;
	
	//Origen para capturar la imagen cuando esta exibida 
	this.srcX = this.srcY = 0;
	//Posicion en canvas donde la figura sera exibida
	this.posX = this.posY = 0;
	this.width = 24;
	this.height = 32;
	this.speed = 1;
	this.img = img;
	this.countAnim = 0;

	//Métodos *****************
	//Diseña la figura
	this.draw = function(ctx){
		ctx.drawImage(	this.img,	//Imagen de origen
						//Captura de imagen
						this.srcX,	//Origen de captura en el eje X
						this.srcY,	//Origen de captura en el eje Y
						this.width,	//Ancho de imagen que será capturada
						this.height,//Altura de imagen que será capturada
						//Exibicion de la imagen
						this.posX,	//Posicion en el eje X donde la imagen será exibida 
						this.posY,	//Posicion en el eje Y donde la imagen será exibida 
						this.width,	//Ancho de imagen a ser exibida 
						this.height	//Altura de imagen a ser exibida 
					);
		this.animation();
	}

	//Movimiento de la figura
	this.move = function(){
		if(this.mvRight){
			this.posX += this.speed;
			this.srcY = this.height * 3; 
		} else
		if(this.mvLeft){
			this.posX -= this.speed;
			this.srcY = this.height * 2; 
		} else
		if(this.mvUp){
			this.posY -= this.speed;
			this.srcY = this.height * 1; 
		} else
		if(this.mvDown){
			this.posY += this.speed;
			this.srcY = this.height * 0; 
		}
	}
	
	//Animacion de la figura
	this.animation = function(){
		if(this.mvLeft || this.mvUp || this.mvRight || this.mvDown){
			//Caso que cualquier tecla sea presionada el contador de animacion ira incrementando
			this.countAnim++;
			if(this.countAnim >= 40){
				this.countAnim = 0;
			}
			this.srcX = Math.floor(this.countAnim / 5) * this.width;
		} else {
			//Caso que ninguna tecla sea presionada el contador de animacion se detendra y mostrara la imagen
			this.srcX = 0;
			this.countAnim = 0;
		}
	}
}
