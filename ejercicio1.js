// Consigna
// 1. Que problemas detectas en la operación y razona la respuesta
// 2. Propón una solución alternativa (también en pseudocódigo del mismo
//     estilo) que corrija los problemas de la
//     operación getTotal de RegisteredUser que has detectado en la
//     pregunta anterior. Realiza todos los cambios que consideres necesarios
//     en cualquiera de las clases del modelo del enunciado.

/* class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;

    this.services.forEach((service, index) => {
      let multimediaContent = service.getMultimediaContent();

      if (typeof service == StreamingService) {
        total += multimediaContent.streamingPrice;
      } else if (typeof service == DownloadService) {
        total += multimediaContent.downloadPrice;
      }

      if (typeof multimediaContent == PremiumContent) {
        total += multimediaContent.additionalFee;
      }
    });
    return total;
  }
} */

// El principal problema detectado como se encuentra originalmente, es que no es un modelo escalable, ya que cualquier cambio que se quiera realizar,
// por ej, agregar un nuevo tipo de servicio, se deberia agregar dentro de un else if, esto, no respeta el principio de open close de los principios SOLID
// por lo cual se procede a realizar cambios para que el modelo sea abierto para la extensión, pero cerrado a la modificación

// La solución planteada, es crear una clase abstracta Service para declarar la existencia del metodo getMultimediaPrice, y que dicho metodo,
// sea implementado en cada una de sus clases hijas, (sustitución de Liskov) para obtener los valores, en este caso, StreamingService y DowloadService, 
// con posibilidad de agregar nuevos servicios y solo extender de la clase Service, ademas, en cuanto al additionalFee si el servicio es premium siempre    
// se va sumar a al total pero, se agrega un metodo, el cual retorna 0 a no ser, que el servicio sea premium, en dicho caso, retorna el valor del fee.

class RegistedUser {
    constructor(public service = []) {}
  
    getTotal() {
      let total = 0;
      this.service.forEach((service) => {
        total += service.getMultimediaPrice();
        total += service.getMultimediaContent().getAdditionalFee();
      });
  
      return total;
    }
  }
  
  abstract class Service {
    getMultimediaContent(){};
  
    abstract getMultimediaPrice();
  }
  
  class StreamingService extends Service {
    constructor(){
      super()
    }
    getMultimediaPrice() {
      return this.getMultimediaContent().streamingPrice;
    }
  }

  class DowloadService extends Service {
    constructor(){
      super()
    }
    getMultimediaPrice() {
      return this.getMultimediaContent().dowloadPrice;
    }
  }

  class MultimediaContent {
    getAdditionalFee() {
      return 0;
    }
  }

  class PremiumContent {
    getAdditionalFee() {
      return this.additionalFee;
    }
  }
  