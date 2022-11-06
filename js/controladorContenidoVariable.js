var planes, empresas, categorias, usuarios;


//PLANES
planes = [


    {
        nombrePlan: "Gratis",
        precio: "$ 0.00",
        promos: 10,
        almacenamiento: 2,
        soporte: true,
        centroDeAyuda: false,
        duracion: 1,
        panpallaPrincipal: false,



    },

    {
        nombrePlan: "Profesional",
        precio: "$ 15.00",


        promos: 20,
        almacenamiento: 10,
        soporte: true,
        centroDeAyuda: true,
        duracion: 12,
        panpallaPrincipal: false,



    },

    {
        nombrePlan: "ULTIMATE",
        precio: "$ 29.00",
        promos: 30,
        almacenamiento: 20,
        soporte: true,
        centroDeAyuda: true,
        duracion: 18,
        panpallaPrincipal: true


    },


];
///////////////////////////////////////////////////////////////////////////////

//CATEGORIAS
categorias = [

    "Electronicos",
    "Anime",
    "Mobiliario",
    "Vestimenta",
];

////////////////////////////////////////////////////////////////////////////

//USUARIOS
usuarios = [

    {
        nombreUsuario: "Denis Ordoñez",
        correo: "damarissevilla2005@gmail.com",
        contraseña: "cisco2019",
        telefono: "22465413",


        empresasFavoritas: [

            {
                nombreEmpresa: "Edmundo S.A",
                logo: "/images/LogosEmpresas/logo1.jpg",
                correo: "damarissevilla2005@gmail.com",
                contraseña: "cisco2019",
                descripcion: "Lorem ipsum dolor . . . ",
                mision: "Lorem ipsum dolor . . .",
                vision: "Lorem ipsum dolor . . .",
                telefono: "22465413",
                pais: "Honduras",
                ciudad: "Tegucigalpa",

                redesSociales: [

                    {
                        nombreRed1: "Facebook",
                        url1: "www.facebook.com",
                        banner1: "/images/banner-01.jpg",


                        nombreRed2: "Instagram",
                        url2: "www.instagram.com",
                        banner2: "/images/banner-02.jpg",


                        nombreRed3: "Twitter",
                        url3: "www.twitter.com",
                        banner3: "/images/banner-03.jpg",

                    },

                ],
            }

        ],


        carrito: [

            {
                categoria: "Anime",
                nombre: "Figura de Anime",
                precio: "$ 40.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-12.jpg",
                    "images/gallery-img-12.jpg",
                    "images/gallery-img-12.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
        ],


        promocionesFavoritas: [

            {

                nombre: "Figura de Anime",
                precio: "$ 30.00",
                porcentaje: "0.5",
                descripcion: "Lorem ipsum dolor  567. . . ",
                inicio: "12/12/2020",
                final: "11/11/2021",

                sucursales: [

                    {
                        nombreSucursal: "Variedades Darwin",
                        correo: "example123@gmail.com",
                        telefono: "2245-5689",
                        pais: "Honduras",
                        ciudad: "San Pedro Sula",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDarwin",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Peña",
                        latitud: "45",
                        longitud: "54",

                    },

                ],

                imagenes: [
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]
            }

        ]

    },


];

//////////////////////////////////////////////////////////////////////////

//EMPRESAS
empresas = [

    {
        nombreEmpresa: "Edmundo S.A",
        logo: "/images/LogosEmpresas/logo1.jpg",
        correo: "damarissevilla2005@gmail.com",
        contraseña: "cisco2019",
        descripcion: "Lorem ipsum dolor . . . ",
        mision: "Lorem ipsum dolor . . .",
        vision: "Lorem ipsum dolor . . .",
        telefono: "22465413",
        pais: "Honduras",
        ciudad: "Tegucigalpa",

        redesSociales: [

            {
                nombreRed1: "Facebook",
                url1: "www.facebook.com",
                banner1: "/images/banner-01.jpg",


                nombreRed2: "Instagram",
                url2: "www.instagram.com",
                banner2: "/images/banner-02.jpg",


                nombreRed3: "Twitter",
                url3: "www.twitter.com",
                banner3: "/images/banner-03.jpg",

            },

        ],

        direccion: "Col. La Cañada",
        latitud: "22",
        longitud: "45",

        formaDePago: "Credito",
        nombrePropietario: "Denis Ordoñez",
        numeroTarjeta: "505-405-5214-4512",
        vencimiento: "12/22",
        CCV: "180",
        plan: "ULTIMATE",

        sucursales: [

            {
                nombreSucursal: "Variedades Darwin",
                correo: "example123@gmail.com",
                telefono: "2245-5689",
                pais: "Honduras",
                ciudad: "San Pedro Sula",
                redSocial: "Facebook",
                url: "www.facebook.com/VariedadesDarwin",
                banner: "/images/all-bg-title.jpg",
                direccion: "Col. La Peña",
                latitud: "45",
                longitud: "54",

            },

            {
                nombreSucursal: "Variedades Isaac",
                correo: "example1243@gmail.com",
                telefono: "2245-5656",
                pais: "Honduras",
                ciudad: "Tegucigalpa",
                redSocial: "Facebook",
                url: "www.facebook.com/VariedadesIsaac",
                banner: "/images/all-bg-title.jpg",
                direccion: "Col. La Popular",
                latitud: "55",
                longitud: "64",

            },

            {
                nombreSucursal: "Variedades Denis",
                correo: "example12345@gmail.com",
                telefono: "2245-5646",
                pais: "Honduras",
                ciudad: "Comayagua",
                redSocial: "Facebook",
                url: "www.facebook.com/VariedadesDenis",
                banner: "/images/all-bg-title.jpg",
                direccion: "Col. La Cañada",
                latitud: "65",
                longitud: "74",

            }

        ],

        productos: [

            {
                categoria: "Anime",
                nombre: "Figura de Anime",
                precio: "$ 40.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-12.jpg",
                    "images/gallery-img-12.jpg",
                    "images/gallery-img-12.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
            {
                categoria: "Electronicos",
                nombre: "Celular",
                precio: "$ 400.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
            {
                categoria: "Mobiliario",
                nombre: "Mesa",
                precio: "$ 200.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-06.jpg",
                    "images/gallery-img-06.jpg",
                    "images/gallery-img-06.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
            {
                categoria: "Vestimenta",
                nombre: "Chaqueta",
                precio: "$ 40.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-09.jpg",
                    "images/gallery-img-09.jpg",
                    "images/gallery-img-09.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
        ],

        promociones: [

            {

                nombre: "Figura de Anime",
                precio: "$ 30.00",
                porcentaje: "0.5",
                descripcion: "Lorem ipsum dolor . . . ",
                inicio: "12/12/2020",
                final: "11/11/2021",

                sucursales: [

                    {
                        nombreSucursal: "Variedades Darwin",
                        correo: "example123@gmail.com",
                        telefono: "2245-5689",
                        pais: "Honduras",
                        ciudad: "San Pedro Sula",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDarwin",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Peña",
                        latitud: "45",
                        longitud: "54",

                    },

                ],

                imagenes: [
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]
            }

        ]

    },

    {
        nombreEmpresa: "Raymundo S.A",
        logo: "/images/LogosEmpresas/logo3.jpg",
        correo: "damarissevilla2005@gmail.com",
        contraseña: "cisco2019",
        descripcion: "Lorem ipsum dolor . . . ",
        mision: "Lorem ipsum dolor . . .",
        vision: "Lorem ipsum dolor . . .",
        telefono: "22465413",
        pais: "Honduras",
        ciudad: "Tegucigalpa",

        redesSociales: [

            {
                nombreRed1: "Facebook",
                url1: "www.facebook.com",
                banner1: "/images/banner-01.jpg",


                nombreRed2: "Instagram",
                url2: "www.instagram.com",
                banner2: "/images/banner-02.jpg",


                nombreRed3: "Twitter",
                url3: "www.twitter.com",
                banner3: "/images/banner-03.jpg",

            },

        ],

        direccion: "Col. La Cañada",
        latitud: "22",
        longitud: "45",

        formaDePago: "Credito",
        nombrePropietario: "Denis Ordoñez",
        numeroTarjeta: "505-405-5214-4512",
        vencimiento: "12/22",
        CCV: "180",
        plan: "ULTIMATE",

        sucursales: [

            {
                nombreSucursal: "Variedades Darwin",
                correo: "example123@gmail.com",
                telefono: "2245-5689",
                pais: "Honduras",
                ciudad: "San Pedro Sula",
                redSocial: "Facebook",
                url: "www.facebook.com/VariedadesDarwin",
                banner: "/images/all-bg-title.jpg",
                direccion: "Col. La Peña",
                latitud: "45",
                longitud: "54",

            },

            {
                nombreSucursal: "Variedades Isaac",
                correo: "example1243@gmail.com",
                telefono: "2245-5656",
                pais: "Honduras",
                ciudad: "Tegucigalpa",
                redSocial: "Facebook",
                url: "www.facebook.com/VariedadesIsaac",
                banner: "/images/all-bg-title.jpg",
                direccion: "Col. La Popular",
                latitud: "55",
                longitud: "64",

            },

            {
                nombreSucursal: "Variedades Denis",
                correo: "example12345@gmail.com",
                telefono: "2245-5646",
                pais: "Honduras",
                ciudad: "Comayagua",
                redSocial: "Facebook",
                url: "www.facebook.com/VariedadesDenis",
                banner: "/images/all-bg-title.jpg",
                direccion: "Col. La Cañada",
                latitud: "65",
                longitud: "74",

            }

        ],

        productos: [

            {
                categoria: "Anime",
                nombre: "Figura de Anime",
                precio: "$ 40.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-12.jpg",
                    "images/gallery-img-12.jpg",
                    "images/gallery-img-12.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
            {
                categoria: "Electronicos",
                nombre: "Celular",
                precio: "$ 400.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
            {
                categoria: "Mobiliario",
                nombre: "Mesa",
                precio: "$ 200.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-06.jpg",
                    "images/gallery-img-06.jpg",
                    "images/gallery-img-06.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
            {
                categoria: "Vestimenta",
                nombre: "Chaqueta",
                precio: "$ 40.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,

                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-09.jpg",
                    "images/gallery-img-09.jpg",
                    "images/gallery-img-09.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
        ],

        promociones: [

            {

                nombre: "Figura de Anime",
                precio: "$ 30.00",
                porcentaje: "0.5",
                descripcion: "Lorem ipsum dolor . . . ",
                inicio: "12/12/2020",
                final: "11/11/2021",

                sucursales: [

                    {
                        nombreSucursal: "Variedades Darwin",
                        correo: "example123@gmail.com",
                        telefono: "2245-5689",
                        pais: "Honduras",
                        ciudad: "San Pedro Sula",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDarwin",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Peña",
                        latitud: "45",
                        longitud: "54",

                    },

                ],

                imagenes: [
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]
            }

        ]

    },

    {
        nombreEmpresa: "Termundo S.A",
        logo: "/images/LogosEmpresas/logo2.jpg",
        correo: "damarissevilla2005@gmail.com",
        contraseña: "cisco2019",
        descripcion: "Lorem ipsum dolor . . . ",
        mision: "Lorem ipsum dolor . . .",
        vision: "Lorem ipsum dolor . . .",
        telefono: "22465413",
        pais: "Honduras",
        ciudad: "Tegucigalpa",

        redesSociales: [

            {
                nombreRed1: "Facebook",
                url1: "www.facebook.com",
                banner1: "/images/banner-01.jpg",


                nombreRed2: "Instagram",
                url2: "www.instagram.com",
                banner2: "/images/banner-02.jpg",


                nombreRed3: "Twitter",
                url3: "www.twitter.com",
                banner3: "/images/banner-03.jpg",

            },

        ],

        direccion: "Col. La Cañada",
        latitud: "22",
        longitud: "45",

        formaDePago: "Credito",
        nombrePropietario: "Denis Ordoñez",
        numeroTarjeta: "505-405-5214-4512",
        vencimiento: "12/22",
        CCV: "180",
        plan: "ULTIMATE",

        sucursales: [

            {
                nombreSucursal: "Variedades Darwin",
                correo: "example123@gmail.com",
                telefono: "2245-5689",
                pais: "Honduras",
                ciudad: "San Pedro Sula",
                redSocial: "Facebook",
                url: "www.facebook.com/VariedadesDarwin",
                banner: "/images/all-bg-title.jpg",
                direccion: "Col. La Peña",
                latitud: "45",
                longitud: "54",

            },

            {
                nombreSucursal: "Variedades Isaac",
                correo: "example1243@gmail.com",
                telefono: "2245-5656",
                pais: "Honduras",
                ciudad: "Tegucigalpa",
                redSocial: "Facebook",
                url: "www.facebook.com/VariedadesIsaac",
                banner: "/images/all-bg-title.jpg",
                direccion: "Col. La Popular",
                latitud: "55",
                longitud: "64",

            },

            {
                nombreSucursal: "Variedades Denis",
                correo: "example12345@gmail.com",
                telefono: "2245-5646",
                pais: "Honduras",
                ciudad: "Comayagua",
                redSocial: "Facebook",
                url: "www.facebook.com/VariedadesDenis",
                banner: "/images/all-bg-title.jpg",
                direccion: "Col. La Cañada",
                latitud: "65",
                longitud: "74",

            }

        ],

        productos: [

            {
                categoria: "Anime",
                nombre: "Figura de Anime",
                precio: "$ 40.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-12.jpg",
                    "images/gallery-img-12.jpg",
                    "images/gallery-img-12.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
            {
                categoria: "Electronicos",
                nombre: "Celular",
                precio: "$ 400.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
            {
                categoria: "Mobiliario",
                nombre: "Mesa",
                precio: "$ 200.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-06.jpg",
                    "images/gallery-img-06.jpg",
                    "images/gallery-img-06.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
            {
                categoria: "Vestimenta",
                nombre: "Chaqueta",
                precio: "$ 40.00",
                cantida: "24",
                descripcion: "Lorem ipsum dolor . . . ",
                calificacion: 2,
                ubicacion: [{
                    direccion: "Col. La Cañada",
                    latitud: "25",
                    longitud: "45",
                }],
                imagenes: [
                    "images/gallery-img-09.jpg",
                    "images/gallery-img-09.jpg",
                    "images/gallery-img-09.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]

            },
        ],

        promociones: [

            {

                nombre: "Figura de Anime",
                precio: "$ 30.00",
                porcentaje: "0.5",
                descripcion: "Lorem ipsum dolor . . . ",
                inicio: "12/12/2020",
                final: "11/11/2021",

                sucursales: [

                    {
                        nombreSucursal: "Variedades Darwin",
                        correo: "example123@gmail.com",
                        telefono: "2245-5689",
                        pais: "Honduras",
                        ciudad: "San Pedro Sula",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDarwin",
                        banner: "/images/all-bg-title.jpg",
                        direccion: "Col. La Peña",
                        latitud: "45",
                        longitud: "54",

                    },

                ],

                imagenes: [
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                    "images/gallery-img-01.jpg",
                ],

                Comentarios: [

                    {
                        usuario: "Denis Ordoñez",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Darwin Rodas",
                        calificacion: 3,
                        contenido: "Lorem ipsum dolor . . . "
                    },
                    {
                        usuario: "Isaac Ramirez",
                        calificacion: 4,
                        contenido: "Lorem ipsum dolor . . . "
                    }

                ]
            }

        ]

    },


];



//////////////////////////////////////////////////////////////

//////////////////////CONTROLADOR FICHA DE IMPRESAION////////////////////////

//FUNCION PARA GENERAR PDF

function getPDF() {

    var HTML_Width = $(".canvas_div_pdf").width();
    var HTML_Height = $(".canvas_div_pdf").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width;
    var PDF_Height = (PDF_Width * 1);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;


    html2canvas($(".canvas_div_pdf")[0], {
        allowTaint: true
    }).then(function(canvas) {
        canvas.getContext('2d');

        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);


        for (var i = 1; i <= totalPDFPages; i++) {
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i), canvas_image_width, canvas_image_height);
        }

        pdf.save("FichaPromocion.pdf");
    });
};

////////////////////////////////////////////////////////////////////

//FUNCIONES LOGIN USUARIO

function Admin() {
    var temp = document.getElementById('correo').value;
    var temp2 = document.getElementById('contraseña').value;
    // var contra = document.getElementById("contraseña").value;

    if (temp == "denis" && temp2 == "1234") {
        location.href = 'SuperAdministrador.html';
    } else {
        location.href = 'my-account.html';
    }
}

///////////////////////////////////////////////////////////////////

////////CONTROLADOR  DEL INDEX/////////////////////////

//Funcuon genera Categorias

function Categorias() {


    document.getElementById("categorias").innerHTML = ` `;

    for (let j = 0; j < 4; j++) {
        document.getElementById("categorias").innerHTML += ` 

     <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 col-xl-3">
    <div class="shop-cat-box">
        <img class="img-fluid" src="images/categories_img_01.jpg" />
        <a class="btn hvr-hover" href="#">Lorem ipsum dolor</a>
    </div>
</div>`;

    }



}

////////////////////////////////////////////////////////

//Funcion Genera los palnes

function Planes() {

    document.getElementById("planes").innerHTML = "";


    for (let k = 0; k < planes.length; k++) {


        document.getElementById("planes").innerHTML += `
    
        <div class="card mb-4 shadow-sm ">
        <div class="card-h">
            <p class="titulo ">${planes[k].nombrePlan}</p>
        </div>
        <div class="card-b">
            <p class="precio">${planes[k].precio} </p>
            <ul class="beneficios mt-1 mb-1">
                <li><i class="fa fa-lightbulb-o"></i> &nbsp;${planes[k].promos} espacios para promos.</li>
                <li><i class="fa fa-lightbulb-o"></i> &nbsp;${planes[k].almacenamiento} GB de Almacenamiento</li>
                <li><i class="fa fa-lightbulb-o"></i> &nbsp;Soporte por Email</li>
                <li><i class="fa fa-lightbulb-o"></i> &nbsp;Acceso al centro de ayuda</li>
                <li><i class="fa fa-lightbulb-o"></i> &nbsp;${planes[k].duracion} Mes de duracion.</li>
                <li><i class="fa fa-lightbulb-o"></i> &nbsp;Banners en pantalla principal</li>
               
            </ul>
            <a class=" ir btn hvr-hover" href="/loginEmpresa.html">INICIAR</a>
        </div>

    </div>
`;


    }



}

//////////////////////////////////////////////////////////////

//Funcion Generar Slider

function Slider() {

    document.getElementById("slider").innerHTML = "";

    document.getElementById("slider").innerHTML = `  <div class="carousel-item active">
    <img src="/images/banner-01.jpg" class="d-block w-100" alt="...">
</div>`;

    for (let m = 0; m < 3; m++) {

        document.getElementById("slider").innerHTML += `
        <div class="carousel-item ">
        <img src="/images/banner-01.jpg" class="d-block w-100" alt="...">
    </div>
`;

    }


    document.getElementById("slider").innerHTML += `
    
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
`;

}

//////////FUNCIONES DE CATALOGO/////////////////////////////////////

function Catalogo() {

    document.getElementById("catalogo").innerHTML = "";

    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
        <div class="col-lg-3 col-md-6 special-grid Electronicos">
        <div class="products-single fix">
            <div class="box-img-hover">
                <img src="images/gallery-img-01.jpg" class="img-fluid w-100" >
                <div class="mask-icon">
                    <ul>
                        <li><a href="#"  data-placement="right" title="Ver" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal();Carrusel();Comentarios();" ><i class="fas fa-eye"></i></a></li>

                        <li><a href="/login.html" data-toggle="tooltip" data-placement="right" title="Agregar al Carrito"><i class="far fa-heart"></i></a></li>
                    </ul>

                </div>
            </div>
        </div>
    </div>


        `;


    }

    //////////////////////////////////////////////

    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
    <div class="col-lg-3 col-md-6 special-grid Anime">
    <div class="products-single fix">
        <div class="box-img-hover">
            <img src="images/gallery-img-12.jpg" class="img-fluid w-100" >
            <div class="mask-icon">
                <ul>
                    <li><a href="#"  data-placement="right" title="Ver" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal();Carrusel();Comentarios();" ><i class="fas fa-eye"></i></a></li>

                    <li><a href="/login.html" data-toggle="tooltip" data-placement="right" title="Agregar al Carrito"><i class="far fa-heart"></i></a></li>
                </ul>

            </div>
        </div>
    </div>
</div>


    `;


    }

    ////////////////////////////////////////////


    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
        <div class="col-lg-3 col-md-6 special-grid Mobiliario">
        <div class="products-single fix">
            <div class="box-img-hover">
                <img src="images/gallery-img-05.jpg" class="img-fluid w-100" >
                <div class="mask-icon">
                    <ul>
                        <li><a href="#"  data-placement="right" title="Ver" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal();Carrusel();Comentarios();" ><i class="fas fa-eye"></i></a></li>

                        <li><a href="/login.html" data-toggle="tooltip" data-placement="right" title="Agregar al Carrito"><i class="far fa-heart"></i></a></li>
                    </ul>

                </div>
            </div>
        </div>
    </div>


        `;


    }

    ////////////////////////////////////////////////////////

    for (let c = 0; c < 3; c++) {

        document.getElementById("catalogo").innerHTML +=
            `
        <div class="col-lg-3 col-md-6 special-grid Vestimenta">
        <div class="products-single fix">
            <div class="box-img-hover">
                <img src="images/gallery-img-09.jpg" class="img-fluid w-100" >
                <div class="mask-icon">
                    <ul>
                        <li><a href="#"  data-placement="right" title="Ver" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal();Carrusel();Comentarios();" ><i class="fas fa-eye"></i></a></li>

                        <li><a href="/login.html" data-toggle="tooltip" data-placement="right" title="Agregar al Carrito"><i class="far fa-heart"></i></a></li>
                    </ul>

                </div>
            </div>
        </div>
    </div>


        `;


    }

}

////////////////////////////////////////////////////////////////////
//Funcion llenar Group Button
function generarButtons() {


    for (let i = 0; i < categorias.length; i++) {



        document.getElementById("filtro").innerHTML +=

            `  <button data-filter=".${categorias[i]}">${categorias[i]}</button>`;


    }
}

///////////////////////////////////////////////////////////////////////

//Funcion Modal

//generar la modal
function Modal() {


    document.getElementById("cuerpo").innerHTML =

        `      <div class="row" id="datos">
    
        <div class="col-4">
            <img src="/images/banner-01.jpg" class="w-100" alt="">
        </div>
    
        <div class="col-6">
            <h5>Nombre Categoria</h5>
            <h6>Nombre Producto</h6>
            <p>lorem iptsum dolor . . . </p>
        </div>
    
        <hr>
    
        <div class="col-12">
        <p class="text-center"><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star-o" style="color: green;"></i><i class="fa fa-star-o" style="color: green;"></i></p>
        </div>
    
        <hr>
    
    </div>
            
        <div class="modal-footer ml-auto">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      
        </div>
    
    
    </div>`;




}

////////////////////////////////////////////////////////////////////////
//Funcion que genra las imagenes
function Carrusel() {


    document.getElementById("img").innerHTML = `      
    <div class="carousel-item active">
        <img src="images/gallery-img-02.jpg" class="d-block w-100" >
    </div>
  

`


    for (let i = 1; i < 4; i++) {

        document.getElementById("img").innerHTML += `      
        <div class="carousel-item ">
            <img src="images/gallery-img-02.jpg" class="d-block w-100" >
        </div>
      
    
  `
    }

}

//////////////////////////////////////////////////////////////////////////

//Funcion que carga los comentarios
function Comentarios() {
    document.getElementById("comentarios").innerHTML = "";

    for (let i = 0; i < 4; i++) {

        document.getElementById("comentarios").innerHTML += `   <div class="row">
    
        
    <div class="col-2 my-2 ">
        <img src="images/user.png" class="w-100 img-thumbnail text-center m-auto">
    </div>

    <div class="col-10 my-2 text-rigth">
        <h6>Nombre Usuario</h6>
        <p>Lorem iptsum dolor . . . . </p>
    </div>
</div> `
    }

}

//////////////////////////////////////////////////////////

function generarSelect() {


    for (let i = 0; i < categorias.length; i++) {



        document.getElementById("cat").innerHTML +=

            `  <option value="${i}">${categorias[i].nombreCategoria}</option>`;


    }
}

//guardar Indices para acceder a los datos correxctos para la modal
function guardarIndices(ic, ia) {
    indiceCategoria = ic;
    indiceAplicacion = ia;
}


///////////////CONTROLADOR EMPRESAS///////////////////

///////////////////////////////////////////////////////////
function Celdas() {

    document.getElementById("celdas").innerHTML = "";

    for (let j = 0; j < empresas.length; j++) {

        document.getElementById("celdas").innerHTML += `

        <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div class="products-single fix">
            <div class="box-img-hover">
                <div class="type-lb">

                </div>
                <img src="
                ${empresas[j].logo}" class="img-fluid w-100" >
                <div class="mask-icon">
                    <ul>

                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Favoritos" onclick = "empFav(${j});"><i class="far fa-heart"></i></a></li>
                    </ul>
                    <a class="cart" href="#" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal(${j});Carrusel(${j});" >Ver Sucursales</a>
                </div>
            </div>
            <div class="why-text">
                <h4> ${empresas[j].nombreEmpresa}</h4>

            </div>
        </div>
    </div>
        
        
        `;


    }



}

////////////////////////////////////////////////////////////////////


//Crea la vista en filas de las empresas
function lista() {

    document.getElementById("list-view").innerHTML = "";

    for (var j = 0; j < empresas.length; j++) {


        document.getElementById("list-view").innerHTML += `

        <div class="list-view-box">

              <div class="row">

                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">

                         <div class="products-single fix">

                                 <div class="box-img-hover">

                                     <img src="${empresas[j].logo}" class="img-fluid" alt="Image">
                                
                                 </div>

                          </div>
                      
                     </div>
                                        

                     <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">

                            <div class="why-text full-width">

                                 <h4>${empresas[j].nombreEmpresa}</h4>

                                     <p>
                                     
                                     ${empresas[j].descripcion}
                                     
                                     </p>
                                                   
                                 <a class="btn hvr-hover" href="#" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="Modal(${j});Carrusel(${j});">Ver Sucursales</a>
                                 <a class="btn hvr-hover" href="#" onclick = "empFav(${j});" > Agregar a Favoritos</a>
                                               
                            </div>
                    
                     </div>


                 </div>

           </div>
        
        
        `;


    }



}

////////////////////////////////////

//generar la modal
function Modal(k) {


    document.getElementById("cuerpo").innerHTML =

        `      <div class="row" id="datos">
    
        <div class="col-4">
            <img src="${empresas[k].logo}" class="w-100" alt="">
        </div>
    
        <div class="col-6">
            <h5>Nombre Categoria</h5>
            <h6>Nombre Producto</h6>
            <p>lorem iptsum dolor . . . </p>
        </div>
    
        <hr>
    
        <div class="col-12">
        <p class="text-center"><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star" style="color: green;"></i><i class="fa fa-star-o" style="color: green;"></i><i class="fa fa-star-o" style="color: green;"></i></p>
        </div>
    
        <hr>
    
    </div>
            
        <div class="modal-footer ml-auto">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      
        </div>
    
    
    </div>`;




}

////////////////////////////////////////////////////////////////////////
//Funcion que genra las imagenes
function Carrusel(k) {


    document.getElementById("img").innerHTML = `      
    <div class="carousel-item active">
        <img src="images/gallery-img-02.jpg" class="d-block w-100" >
    </div>
  

`


    for (let i = 1; i < 4; i++) {

        document.getElementById("img").innerHTML += `      
        <div class="carousel-item ">
            <img src="images/gallery-img-02.jpg" class="d-block w-100" >
        </div>
      
    
  `
    }

}
///////////////////////////////////////////////////////////////////////

function empFav(l) {

    let empFav = {

        nombreEmpresa: empresas[l].nombreEmpresa,
        logo: empresas[l].logo,
        correo: empresas[l].correo,
        contraseña: empresas[l].contraseña,
        descripcion: empresas[l].descripcion,
        mision: empresas[l].mision,
        vision: empresas[l].vision,
        telefono: empresas[l].telefono,
        pais: empresas[l].pais,
        ciudad: empresas[l].ciudad,

        redesSociales: empresas[l].redesSociales,
    }
    usuarios[0].empresasFavoritas.push(empFav);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));



}


/////////////CONTROLADOR EMPRESAS FAVORITAS//////////////////////


//Funcion para generar laS Empresas Favoritas

function cargarEmpFav() {

    document.getElementById("EmpFav").innerHTML = ``;

    for (let c = 0; c < usuarios[0].empresasFavoritas.length; c++) {

        document.getElementById("EmpFav").innerHTML +=
            `
            <tr>
            <td class="thumbnail-img">
                <a href="#">
                    <img class="w-100" SRC = "${usuarios[0].empresasFavoritas[c].logo}" alt="" />
                </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${usuarios[0].empresasFavoritas[c].nombreEmpresa}
        </a>
            </td>
            <td class="price-pr">
                <p>${usuarios[0].empresasFavoritas[c].descripcion}</p>
            </td>
            <td class="quantity-box">
            Tegucigalpa
            </td>


        </tr>
    
    
    `;


    }

}



/////////////////////CONTROLADOR TIENDA////////////////////////////////

//Crea la vista en celdas de los productos
function CeldasTienda() {

    document.getElementById("celdas").innerHTML = "";

    for (let e = 0; e < empresas.length; e++) {

        for (let j = 0; j < empresas[e].promociones.length; j++) {

            let precio = empresas[e].promociones[j].precio;
            let rebaja = empresas[e].promociones[j].porcentaje;

            let promocion = precio - precio * rebaja;

            document.getElementById("celdas").innerHTML += `
    
            <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <div class="products-single fix">
                <div class="box-img-hover">
    
                    <img src="${empresas[e].promociones[j].imagenes[0]}" class="img-fluid" alt="Image">
                    <div class="mask-icon">
                        <ul>
    
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Favoritos" onclick = "promosFav(${e},${j});" ><i class="far fa-heart"></i></a></li>
                        </ul>
                        <a class="cart" href="#" onclick = "añadirCarrito(${e},${j});">Agregar al Carrito</a>
                    </div>
                </div>
                <div class="why-text ">
                    <h4>${empresas[e].promociones[j].nombre}</h4>
                    <h5>$ ${promocion}</h5>
                </div>
            </div>
        </div>
            
            
            
            `;


        }
    }





}

////////////////////////////////////////////////////////////////////

//Crea la vista en filas de los productos
function listaTienda() {

    document.getElementById("list-view").innerHTML = "";



    for (let e = 0; e < empresas.length; e++) {

        for (let j = 0; j < empresas[e].promociones.length; j++) {


            let precio = empresas[e].promociones[j].precio;
            let rebaja = empresas[e].promociones[j].porcentaje;

            let promocion = precio - precio * rebaja;

            document.getElementById("list-view").innerHTML += `
        
                <div class="list-view-box">
        
                <div class="row">
        
                    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-4">
        
                        <div class="products-single fix">
        
                            <div class="box-img-hover ">
        
                                <img src="${empresas[e].promociones[j].imagenes[0]}" alt="Image">
                                <div class="mask-icon">
                                    <ul>
        
        
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Favoritos" onclick = "promosFav(${e},${j});"><i class="far fa-heart"></i></a></li>
                                    </ul>
        
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div class="col-sm-6 col-md-6 col-lg-8 col-xl-8">
                        <div class="why-text full-width">
                            <h4>${empresas[e].promociones[j].nombre}</h4>
                            <h5> <del>$ ${empresas[e].promociones[j].precio}  </del>$ ${promocion}</h5>
                            <p>${empresas[e].promociones[j].descripcion} </p>
                            <a class="btn hvr-hover" href="#">Agregar al Carrito</a>
                        </div>
                    </div>
        
                </div>
        
            </div>
                
                
                `;





        }
    }







}

/////////////////////////////////////////////////////////////////////////

//Funcion que muestra las categorias


function MenuTienda() {


    document.getElementById("list-group-men").innerHTML = ``;

    for (let l = 0; l < categorias.length; l++) {
        document.getElementById("list-group-men").innerHTML +=
            `
            <div class="list-group-collapse sub-men">
            <a class="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse"  >${categorias[l]}
        </a>

         
            </div>
        </div>
        
        
        `;

    }

}


////////////////////////////////////////////////////////////////////////////

//Funcion que muestra los comentarios

function ComentariosTienda() {

    document.getElementById("comentarios").innerHTML = ``;

    for (let a = 0; a < 9; a++) {

        document.getElementById("comentarios").innerHTML +=
            `
            <div class="media mb-3">
            <div class="mr-2">
                <img class="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="Generic placeholder image">
            </div>
            <div class="media-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint
                    natus.
                </p>
                <small class="text-muted">Posted by Anonymous on 3/1/18</small>
            </div>
        </div>

        <hr>
    
    `;


    }

    document.getElementById("comentarios").innerHTML += ` <a href="#" class="btn hvr-hover">Comentar</a>`;

}


//fUNCION PARA AGREGAR A FAVORITOS las promos

function promosFav(j, l) {

    let promosFav = {

        nombre: empresas[j].promociones[l].nombre,
        precio: empresas[j].promociones[l].precio,
        porcentaje: empresas[j].promociones[l].porcentaje,
        descripcion: empresas[j].promociones[l].descripcion,
        inicio: empresas[j].promociones[l].inicio,
        final: empresas[j].promociones[l].final,

        sucursales: empresas[j].promociones[l].sucursales,

        imagenes: empresas[j].promociones[l].imagenes,


    }

    usuarios[0].promocionesFavoritas.push(promosFav);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));



}


///////////////////////////////////////////////

//funcion agregar al carrito
function añadirCarrito(j, l) {

    let carrito = {


        nombre: empresas[j].promociones[l].nombre,
        precio: empresas[j].promociones[l].precio,
        porcentaje: empresas[j].promociones[l].porcentaje,
        descripcion: empresas[j].promociones[l].descripcion,
        inicio: empresas[j].promociones[l].inicio,
        final: empresas[j].promociones[l].final,

        sucursales: empresas[j].promociones[l].sucursales,

        imagenes: empresas[j].promociones[l].imagenes,


    }

    usuarios[0].carrito.push(carrito);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));



}


////////////////////////CONTROLADOR PROMOCIONES FAVORITAS//////////////////////////////////////


function PromFav() {

    document.getElementById("PromFav").innerHTML = ``;

    for (let c = 0; c < usuarios[0].promocionesFavoritas.length; c++) {

        document.getElementById("PromFav").innerHTML +=
            `
            <tr>

              <td class="thumbnail-img">
                     <a href="#">
                   <img class="${usuarios[0].promocionesFavoritas[c].imagenes[0]}" alt="" />
                      </a>
              </td>

              <td class="name-pr">
                  <a href="#">
                  ${usuarios[0].promocionesFavoritas[c].descripcion}
                  </a>
              </td>

              <td class="price-pr">
              ${usuarios[0].promocionesFavoritas[c].precio}
              </td>

              <td class="quantity-box">
              ${usuarios[0].promocionesFavoritas[c].sucursales[0].nombreSucursal}
              </td>


             </tr>
    
    
    `;


    }

}

//////////////////////////////CONTROLADOR CARRITO////////////////////

//Funcion para generar la orden

function Carrito() {

    document.getElementById("cuerpo").innerHTML = ``;


    for (let m = 0; m < usuarios[0].carrito.length; m++) {



        document.getElementById("cuerpo").innerHTML +=
            `
        
                <tr>
                <td class="thumbnail-img">
                    <a href="#">
                        <img class="img-fluid" src="${usuarios[0].carrito[m].imagenes[0]}"  />
                    </a>
                </td>
                <td class="name-pr">
                    <a href="#">
                    ${usuarios[0].carrito[m].nombre}
            </a>
                </td>
                <td class="price-pr">
                    <p> $ ${usuarios[0].carrito[m].precio}</p>
                </td>
                <td class="quantity-box"><input type="number" size="4" value="1" min="0" step="1" class="c-input-text qty text"></td>
                <td class="total-pr">
                    <p>$ 80.0</p>
                </td>
                <td class="remove-pr">
                    <a href="#">
                        <i class="fas fa-times"></i>
                    </a>
                </td>
            </tr>
        
        
        `;




    }



}


////////////////////CONTROLADOR REGISTRO SUCURSAL////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////

function nuevaSucursal() {

    let sucursal = {


        nombreSucursal: document.getElementById('nombreSucursal').value,
        correo: document.getElementById('correoSucursal').value,
        telefono: document.getElementById('telefono').value,
        pais: document.getElementById('pais').value,
        ciudad: document.getElementById('ciudad').value,
        redSocial: document.getElementById('red').value,
        url: document.getElementById('url').value,
        banner: document.getElementById('logo').value,
        direccion: document.getElementById('direccionSucursal').value,
        latitud: document.getElementById('latitud').value,
        longitud: document.getElementById('longitud').value,
    };
    empresas[0].sucursales.push(sucursal);
    localStorage.setItem('empresas', JSON.stringify(empresas));

}


/////////CONTROLADOR REGISTRO PRODUCTO//////////////////////////////////

//////////////////////////////////////////////////////////////


function cargarCategorias() {


    for (let i = 0; i < categorias.length; i++) {



        document.getElementById("categorias").innerHTML +=

            `  <option value="${categorias[i]}">${categorias[i]}</option>`;


    }

}


/////////////////////////////////

function nuevoProducto() {

    let producto = {
        categoria: document.getElementById('categorias').value,
        nombre: document.getElementById('nombreProducto').value,
        precio: document.getElementById('precioproducto').value,
        cantida: document.getElementById('cantidad').value,
        descripcion: document.getElementById('descripcion').value,
        ubicacion: [{
            direccion: document.getElementById('direccion').value,
            latitud: document.getElementById('latitud').value,
            longitud: document.getElementById('longitud').value,
        }],
        imagenes: [
            document.getElementById('foto').value,
            document.getElementById('foto').value,
            document.getElementById('foto').value,
        ],

        Comentarios: []
    };
    empresas[0].productos.push(producto);
    localStorage.setItem('empresas', JSON.stringify(empresas));

}


//////////////////////CONTROLADOR REGISTRO PROMOCIONES///////////////////////////////

//////////////////////////////////////////////////////////////

//Funcion para cargar categorias
function cargarProductos() {


    for (let i = 0; i < empresas[0].productos.length; i++) {



        document.getElementById("productos").innerHTML +=

            `  <option value="${i}">${empresas[0].productos[i].nombre}</option>`;


    }

}



////////////////////////////////////////////////////////////////////////////////////////////////////

//Funcion Cargar Precio

function Precio() {

    document.getElementById("precioproducto").value = empresas[0].productos[document.getElementById("productos").value].precio;

    document.getElementById("img").innerHTML = `


    <div class="col-md-12 ">
    <img src="${empresas[0].productos[document.getElementById("productos").value].imagenes[0]}" class="w-100 ">
    </div>

`
}
/////////////////////////////////////////////////////////////

//Funcion Cargar Sucursales

function Sucursales() {

    document.getElementById("sucursales").innerHTML = ``;

    for (var s = 0; s < empresas[0].sucursales.length; s++) {
        document.getElementById("sucursales").innerHTML += `
    
    <div>
      <input id="Sucursal${s}"  type="checkbox" value="${empresas[0].sucursales[s]}">
      <label for="Sucursal${s}" style="background-color: white;">${empresas[0].sucursales[s].nombreSucursal}</label>
    </div>
    `;

    }
}




/////////////////////////////////

function nuevaPromocion() {



    var indice = document.getElementById("productos").value;
    var precio = document.getElementById("precioproducto").value;
    var promo = document.getElementById("promo").value;

    var descuento = precio * promo;

    let promocion = {


        nombre: empresas[0].productos[indice].nombre,
        precio: empresas[0].productos[indice].precio,
        porcentaje: promo,
        descripcion: empresas[0].productos[indice].descripcion,
        inicio: document.getElementById("fechainicio").value,
        final: document.getElementById("fechalimite").value,



        sucursales: [],

        imagenes: [
            empresas[0].productos[document.getElementById("productos").value].imagenes[0],
            empresas[0].productos[document.getElementById("productos").value].imagenes[1],
            empresas[0].productos[document.getElementById("productos").value].imagenes[2],
        ],

        Comentarios: []
    };
    empresas[0].promociones.push(promocion);
    localStorage.setItem('empresas', JSON.stringify(empresas));

}


///////////////////////////////////////////CONTROLADOR SUPERADMINISTRADOR//////////////////////////

//Funcion Caegar Empresas

function tablaEmpresas() {

    document.getElementById("empresas").innerHTML = ``;

    for (let c = 0; c < empresas.length; c++) {

        document.getElementById("empresas").innerHTML +=
            `
    
            <tr>

            <td class="thumbnail-img">
                <a href="#">
                    <img class="${empresas[c].logo}" alt="" />
                </a>
            </td>

            <td class="name-pr">
                <a href="#">
                ${empresas[c].nombreEmpresa}
        </a>
            </td>

            <td class="price-pr">
                <p>${empresas[c].correo}</p>
            </td>

            <td class="quantity-box">
                <input type="text" size="4" value="${empresas[c].contraseña}" min="0" step="1" class="c-input-text qty text">
            </td>


            <td class="total-pr">
                <p>${empresas[c].descripcion}</p>
            </td>

            <td class="name-pr">
                <a href="#">
                ${empresas[c].mision}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].vision}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].telefono}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].pais}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].ciudad}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].redesSociales[0].nombreRed1}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].redesSociales[0].nombreRed2}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].redesSociales[0].nombreRed3}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].direccion}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].latitud}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].longitud}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].formaDePago}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].nombrePropietario}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].numeroTarjeta}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].vencimiento}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].CCV}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${empresas[c].plan}
        </a>
            </td>



        </tr>
    
    
    `;
    }


}

//Funcion Cargar Planes

function tablaPlanes() {

    document.getElementById("planes").innerHTML = ``;

    for (let c = 0; c < planes.length; c++) {

        document.getElementById("planes").innerHTML +=
            `
    
            <tr>

            <td class="">
                <a href="#">
                   ${planes[c].nombrePlan}
                </a>
            </td>

            <td class="name-pr">
                <a href="#">
                ${planes[c].precio}
        </a>
            </td>

            <td class="price-pr">
                <p>${planes[c].promos}</p>
            </td>

            <td class="quantity-box">
                <input type="text" size="4" value="${planes[c].almacenamiento}" min="0" step="1" class="c-input-text qty text">
            </td>


            <td class="total-pr">
                <p>${planes[c].soporte}</p>
            </td>

            <td class="name-pr">
                <a href="#">
                ${planes[c].centroDeAyuda}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${planes[c].duracion}
        </a>
            </td>
            <td class="name-pr">
                <a href="#">
                ${planes[c].panpallaPrincipal}
        </a>
            </td>
         
            <td >
            <div class="col-md-4 text-center">
                <button type="button" class="btn btn-outline-danger" onclick = "Editar(${c});">Editar  </button>
            </div>
            </td>

            <td >
            <div class="col-md-4 text-center">
                <button type="button" class="btn btn-outline-danger" onclick = "eliminarPlan(${c});">Borrar  </button>
            </div>
            </td >



        </tr>
    
    
    `;
    }




}

//Funcion Guardar Planes

function guardarPlan() {


    let plan = {


        nombrePlan: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        promos: document.getElementById("promos").value,
        almacenamiento: document.getElementById("almacenamiento").value,
        soporte: document.getElementById("soporte").value,
        centroDeAyuda: document.getElementById("ayuda").value,
        duracion: document.getElementById("duracion").value,
        panpallaPrincipal: document.getElementById("principal").value,




    };
    planes.push(plan);
    localStorage.setItem('planes', JSON.stringify(planes));
    $('#exampleModal').modal('hide');
    alert("Plan añadido con exito");
    tablaPlanes()

}


////FUNCION ELIMINAR PLAN

function eliminarPlan(e) {

    planes.splice(e, 1)
    localStorage.setItem('planes', JSON.stringify(planes));
    alert("Plan eliminado con exito");
    tablaPlanes()
}


//FUNCION MOSTRAR DIALOGO EDITAR

function Editar(r) {
    $('#exampleModal2').modal('show');

    document.getElementById("nombre2").value = planes[r].nombrePlan
    document.getElementById("precio2").value = planes[r].precio
    document.getElementById("promos2").value = planes[r].promos
    document.getElementById("almacenamiento2").value = planes[r].almacenamiento
    document.getElementById("soporte2").value = planes[r].soporte
    document.getElementById("ayuda2").value = planes[r].centroDeAyuda
    document.getElementById("duracion2").value = planes[r].duracion
    document.getElementById("principal2").value = planes[r].panpallaPrincipal

    document.getElementById("botones").innerHTML =
        `
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    <button type="button" class="btn btn-danger" onclick=" editarPlan(${r})">Guardar Plan</button>
    
    `

}

///FUNCION EDITAR PLAN

function editarPlan(m) {


    let editado = {


        nombrePlan: document.getElementById("nombre2").value,
        precio: document.getElementById("precio2").value,
        promos: document.getElementById("promos2").value,
        almacenamiento: document.getElementById("almacenamiento2").value,
        soporte: document.getElementById("soporte2").value,
        centroDeAyuda: document.getElementById("ayuda2").value,
        duracion: document.getElementById("duracion2").value,
        panpallaPrincipal: document.getElementById("principal2").value,




    };
    planes.splice(m, 1, editado)
        // planes.push(editado);
    localStorage.setItem('planes', JSON.stringify(planes));
    $('#exampleModal2').modal('hide');
    alert("Plan editado con exito");
    tablaPlanes()

}



///////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////CONTROLADOR COMPRA/////////////////////////////

//Funcion que cargara los datso del pedido

function pedido() {

    document.getElementById("pedido").innerHTML = ``;

    for (let p = 0; p < 6; p++) {

        document.getElementById("pedido").innerHTML +=
            `
            <div class="media mb-2 border-bottom">

            <div class="media-body"> <a href="#"> Lorem ipsum dolor sit amet</a>
                <div class="small text-muted">Precio: $80.00 <span class="mx-2">|</span> Ctd: 1 <span class="mx-2">|</span> Subtotal: $80.00</div>
            </div>
        </div>
        
        `;


    }

}

/////////////////////////////////////////////////////////////////////////////////

//Funcion que carga los tipos de envio

function envio() {

    document.getElementById("envio").innerHTML = ``;

    for (let p = 0; p < 4; p++) {

        document.getElementById("envio").innerHTML +=
            `
            <div class="custom-control custom-radio">
                 <input id="shippingOption3" name="shipping-option" class="custom-control-input" type="radio">
                 <label class="custom-control-label" for="shippingOption3">Siguiente dia Habil</label> <span class="float-right font-weight-bold">$20.00</span>
            </div>
        
        `;


    }

}


/////////////////////////CONTROLADOR REGISTRO EMPRESAS/////////////////////////////

//FuncionCargarSelect

function CargarPlanes() {


    for (let i = 0; i < planes.length; i++) {



        document.getElementById("plan").innerHTML +=

            `  <option value="${planes[i].nombrePlan}">${planes[i].nombrePlan}</option>`;


    }

}



///////////////////////////////////////////////////////////////

function nuevaEmpresa() {

    let empresa = {

        nombreEmpresa: document.getElementById('nombre').value,
        logo: document.getElementById('logo').value,
        correo: document.getElementById('correo').value,
        contraseña: document.getElementById('contraseña').value,
        descripcion: document.getElementById('descripcion').value,
        mision: document.getElementById('mision').value,
        vision: document.getElementById('vision').value,
        telefono: document.getElementById('telefono').value,
        pais: document.getElementById('pais').value,
        ciudad: document.getElementById('ciudad').value,
        redesSociales: [{
            nombreRed1: document.getElementById('red1').value,
            url1: document.getElementById('url1').value,
            banner1: document.getElementById('logo1').value,
            nombreRed2: document.getElementById('red2').value,
            url2: document.getElementById('url2').value,
            banner2: document.getElementById('logo2').value,
            nombreRed3: document.getElementById('red3').value,
            url3: document.getElementById('url3').value,
            banner3: document.getElementById('logo3').value,
        }],
        direccion: document.getElementById('direccion').value,
        latitud: document.getElementById('latitud').value,
        longitud: document.getElementById('longitud').value,
        formaDePago: document.getElementById('formaPago').value,
        nombrePropietario: document.getElementById('propietario').value,
        numeroTarjeta: document.getElementById('numeroTarjeta').value,
        vencimiento: document.getElementById('Vencimiento').value,
        CCV: document.getElementById('CCV').value,
        plan: document.getElementById('plan').value,
        sucursales: [],
        productos: [],
        promociones: []
    };
    empresas.push(empresa);
    localStorage.setItem('empresas', JSON.stringify(empresas));

}

///////////////////////////////////////////////////////////////////////////

/////CONTROLADOR EDITAR USUARIO////////

function editarUsuario(u) {

    document.getElementById("nombre").value = usuarios[u].nombreUsuario
    document.getElementById("contraseña").value = usuarios[u].contraseña
    document.getElementById("email").value = usuarios[u].correo
    document.getElementById("telefono").value = usuarios[u].telefono


}