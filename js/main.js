const datos = {
  comp1: [
    {
      nombre: "Herramientas de uso común",
      uso: "Facilitan la respuesta rápida a emergencias y maniobras básicas."
    }
  ],
  comp2: [
    {
      nombre: "Extintor PQS",
      uso: "Apagar fuegos de líquidos, eléctricos y combustibles."
    },
    {
      nombre: "Extintor CO₂",
      uso:
        "Ideal para fuegos eléctricos y líquidos inflamables, no deja residuo."
    },
    {
      nombre: "Extintor de agua",
      uso: "Para fuegos de materiales sólidos, como madera y papel."
    },
    {
      nombre: "F500 (espuma)",
      uso: "Controla fuego de líquidos inflamables con mayor eficiencia."
    },
    {
      nombre: "Eductor de espuma",
      uso: "Mezcla agua y concentrado de espuma para generar espuma extintora."
    }
  ],
  comp3: [
    {
      nombre: "Cerrado",
      uso: "Cerrado."
    }
  ],
  comp4: [
    {
      nombre: "Extractor de humo",
      uso: "Evacúa humo de espacios cerrados, mejora visibilidad y ventilación."
    }
  ],
  comp5: [
    {
      nombre: "Mototrozadora",
      uso: "Corte de metal o puertas en rescates vehiculares."
    },
    {
      nombre: "Tacos de escalerilla y 4x4",
      uso: "Estabilización de vehículos o estructuras durante rescates."
    },
    {
      nombre: "Cuñas",
      uso: "Soporte seguro de objetos o víctimas durante rescates."
    }
  ],
  comp11: [
    {
      nombre: "Motor hidráulico y mangueras hidráulicas",
      uso: "Parte del equipo de corte y levantamiento hidráulico en rescates."
    },
    {
      nombre: "Detergentes",
      uso: "Limpieza de equipos, superficies o vehículos después de incidentes."
    }
  ],
  comp6: [
    {
      nombre: "COMBITOOL",
      uso:
        "Herramienta multifunción para rescates vehiculares (corte, expansión, compresión)."
    },
    {
      nombre: "RAM",
      uso:
        "Pistón hidráulico para separar, levantar o abrir estructuras atrapadas."
    }
  ],
  comp10: [
    { nombre: "Conos altos", uso: "Señalización de zona de emergencia." },
    {
      nombre: "Combustible",
      uso: "Para equipos móviles como motobombas o generadores."
    }
  ],
  comp9: [
    {
      nombre: "Tramos de 2.5''",
      uso: "Permite ataque de agua en incendios y conexión rápida entre tramos."
    },
    {
      nombre: "Conos medianos",
      uso: "Delimitación de zona de trabajo de menor altura."
    }
  ],
  comp8: [
    {
      nombre: "Tramos de 2.5''",
      uso: "Permite ataque de agua en incendios y conexión rápida entre tramos."
    },
    {
      nombre: "Conos medianos",
      uso: "Delimitación de zona de trabajo de menor altura."
    }
  ],
  comp7: [
    {
      nombre: "Herramientas de uso común (lado opuesto)",
      uso: "Facilitan la respuesta rápida a emergencias y maniobras básicas."
    }
  ]
};

const lista = document.getElementById("lista");
const compartimientos = document.querySelectorAll("#unidadU7 rect");

// Evento al hacer clic en cada compartimiento
compartimientos.forEach((comp) => {
  comp.addEventListener("click", () => {
    const id = comp.id;
    const herramientas = datos[id] || [];

    // Limpiar lista
    lista.innerHTML = herramientas.length
      ? herramientas
          .map((h) => `<li><b>${h.nombre}</b>: ${h.uso}</li>`)
          .join("")
      : "<li><i>Sin datos disponibles aún.</i></li>";

    // Resaltar compartimiento seleccionado
    compartimientos.forEach((c) => c.setAttribute("fill", "#d32f2f"));
    comp.setAttribute("fill", "#f57c00"); // naranja
  });
});
