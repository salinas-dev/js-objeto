
const destruir_objetos = () =>{
  //CRear objeto anidado
  const datosTesji ={
    nombre: "TESJI",
    //anidado
    link:{
      web1:"www.tesjilotepec.gob.mx",
      web2:"www.tesji.mx"
    },
    redesSociales:{
      facebook:"Tecnologico de Jilotepec Oficial",
      instragram:"TESJI ofcial"
    },
    //anidaciones mas complejas
    correo:"tesjilotepec@jilotepec.tecnm.mx",
    carreras:{
      ISIC:{
        especialidad:"Cloud Computing",
        asignatura:{
          asignatura1:"Ciberseguridad",
          asignatura2:"Programación Reactiva",
          asignatura3:"Inteligencia Artificial(AI)",
          asignatura4:"Desarrollo de Apps Móviles"    
        }
      }
    }
  }
  console.log(`Nombre Escuela ${datosTesji.nombre}`)
  console.log(`Link web ${datosTesji.link.web1}`)
  console.log(`Especialidad ${datosTesji.carreras.ISIC.especialidad}`)


  //const para no modificar
  //let para modificar
  //los saca en variables y se puede usar la variable en elcodigo
  let{facebook,instragram} = datosTesji.redesSociales
  console.log(`Redes sociales:\n1. Facebook:${facebook} \n2. Instragram:${instragram}`)

  
  /*
  
    let asignaturas = datosTesji.carreras.ISIC.asignatura;
    Object.values(asignaturas).map((asignatura, index) => (
      console.log(`Asignatura ${index + 1}: ${asignatura}`)
    ));
  };

destruir_objetos();


  */
  let asignaturas = datosTesji.carreras.ISIC.asignatura;
    console.log(`Asignatura ${asignaturas.asignatura1} ${asignaturas.asignatura3} ${asignaturas.asignatura3} ${asignaturas.asignatura4}`);
};

destruir_objetos();