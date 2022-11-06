var planes, empresas, categorias, usuarios;
var localStorage = window.localStorage;

//Verifica si hay datos en el local storage 

if (localStorage.getItem("planes") == null) {
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
    localStorage.setItem("planes", JSON.stringify(planes));
} else {
    planes = JSON.parse(localStorage.getItem('planes'));
}

///////////////////////////////////////////////////////////////////////////////
//Verifica si hay datos en el local storage JSON empresas

if (localStorage.getItem("categorias") == null) {

    categorias = [

            "Electronicos",
            "Anime",
            "Mobiliario",
            "Vestimenta",
        ],


        localStorage.setItem("categorias", JSON.stringify(categorias));
} else {
    categorias = JSON.parse(localStorage.getItem('categorias'));
}

////////////////////////////////////////////////////////////////////////////

//Verifica si hay datos en el local storage JSON usuarios

if (localStorage.getItem("usuarios") == null) {

    usuarios = [

            {
                nombreUsuario: "Denis",
                correo: "damarissevilla2005@gmail.com",
                contraseña: "cisco2019",
                telefono: "22465413",


                empresasFavoritas: [

                    {
                        nombreEmpresa: "Edmundo S.A",
                        logo: "images/LogosEmpresas/logo1.jpg",
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
                                banner1: "images/banner-01.jpg",


                                nombreRed2: "Instagram",
                                url2: "www.instagram.com",
                                banner2: "images/banner-02.jpg",


                                nombreRed3: "Twitter",
                                url3: "www.twitter.com",
                                banner3: "images/banner-03.jpg",

                            },

                        ],
                    }

                ],


                carrito: [

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
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: "45",
                                longitud: "54",

                            },

                        ],

                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                        ],



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
                                banner: "images/all-bg-title.jpg",
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


                    }

                ]

            },

            {
                nombreUsuario: "Darwin",
                correo: "darwinRodas123@gmail.com",
                contraseña: "cisco2019",
                telefono: "22465413",


                empresasFavoritas: [

                    {
                        nombreEmpresa: "Edmundo S.A",
                        logo: "images/LogosEmpresas/logo1.jpg",
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
                                banner1: "images/banner-01.jpg",


                                nombreRed2: "Instagram",
                                url2: "www.instagram.com",
                                banner2: "images/banner-02.jpg",


                                nombreRed3: "Twitter",
                                url3: "www.twitter.com",
                                banner3: "images/banner-03.jpg",

                            },

                        ],
                    }

                ],


                carrito: [

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
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: "45",
                                longitud: "54",

                            },

                        ],

                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                        ],


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
                                banner: "images/all-bg-title.jpg",
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


                    }

                ]

            },

            {
                nombreUsuario: "Damaris",
                correo: "damaris2005@gmail.com",
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
                                banner1: "images/banner-01.jpg",


                                nombreRed2: "Instagram",
                                url2: "www.instagram.com",
                                banner2: "images/banner-02.jpg",


                                nombreRed3: "Twitter",
                                url3: "www.twitter.com",
                                banner3: "images/banner-03.jpg",

                            },

                        ],
                    }

                ],


                carrito: [

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
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: "45",
                                longitud: "54",

                            },

                        ],

                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                        ],



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
                                banner: "images/all-bg-title.jpg",
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


                    }

                ]

            },



        ],


        localStorage.setItem("usuarios", JSON.stringify(usuarios));
} else {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}

//////////////////////////////////////////////////////////////////////////

if (localStorage.getItem("empresas") == null) {

    empresas = [

            {
                nombreEmpresa: "Edmundo S.A",
                logo: "images/LogosEmpresas/logo1.jpg",
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
                        banner1: "images/banner-01.jpg",


                        nombreRed2: "Instagram",
                        url2: "www.instagram.com",
                        banner2: "images/banner-02.jpg",


                        nombreRed3: "Twitter",
                        url3: "www.twitter.com",
                        banner3: "images/banner-03.jpg",

                    },

                ],



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
                        banner: "images/all-bg-title.jpg",
                        direccion: "Col. La Peña",
                        latitud: 15.5079941,
                        longitud: -88.02167773,

                    },

                    {
                        nombreSucursal: "Variedades Isaac",
                        correo: "example1243@gmail.com",
                        telefono: "2245-5656",
                        pais: "Honduras",
                        ciudad: "Tegucigalpa",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesIsaac",
                        banner: "images/all-bg-title.jpg",
                        direccion: "Col. La Popular",
                        latitud: 14.08481023,
                        longitud: -87.1729061,

                    },

                    {
                        nombreSucursal: "Variedades Denis",
                        correo: "example12345@gmail.com",
                        telefono: "2245-5646",
                        pais: "Honduras",
                        ciudad: "Comayagua",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDenis",
                        banner: "images/all-bg-title.jpg",
                        direccion: "Col. La Cañada",
                        latitud: 14.44778701,
                        longitud: -87.63725817,

                    }

                ],

                productos: [

                    {
                        categoria: "Anime",
                        nombre: "Figura de Anime",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",
                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                        ],
                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],




                    },
                    {
                        categoria: "Electronicos",
                        nombre: "Celular",
                        precio: 400.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                        ],

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],

                    },
                    {
                        categoria: "Mobiliario",
                        nombre: "Mesa",
                        precio: 200.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                        ],

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],


                    },
                    {
                        categoria: "Vestimenta",
                        nombre: "Chaqueta",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                        ],

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],





                    },
                ],

                promociones: [

                    {
                        categoria: "Anime",
                        nombre: "Figura de Kimetsu no Yaiba",
                        precio: 30.00,
                        porcentaje: 0.5,
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
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                        ],

                        imagenes: [
                            "images/gallery-img-11.jpg",
                            "images/gallery-img-11.jpg",
                            "images/gallery-img-11.jpg",
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
                        categoria: "Anime",
                        nombre: "Figura de Naruto",
                        precio: 50.00,
                        porcentaje: 0.3,
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
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                        ],

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
                    }


                ]

            },

            {
                nombreEmpresa: "Raymundo S.A",
                logo: "images/LogosEmpresas/logo3.jpg",
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
                        banner1: "images/banner-01.jpg",


                        nombreRed2: "Instagram",
                        url2: "www.instagram.com",
                        banner2: "images/banner-02.jpg",


                        nombreRed3: "Twitter",
                        url3: "www.twitter.com",
                        banner3: "images/banner-03.jpg",

                    },

                ],


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
                        banner: "images/all-bg-title.jpg",
                        direccion: "Col. La Peña",
                        latitud: 15.5079941,
                        longitud: -88.02167773,

                    },

                    {
                        nombreSucursal: "Variedades Isaac",
                        correo: "example1243@gmail.com",
                        telefono: "2245-5656",
                        pais: "Honduras",
                        ciudad: "Tegucigalpa",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesIsaac",
                        banner: "images/all-bg-title.jpg",
                        direccion: "Col. La Popular",
                        latitud: 14.08481023,
                        longitud: -87.1729061,

                    },

                    {
                        nombreSucursal: "Variedades Denis",
                        correo: "example12345@gmail.com",
                        telefono: "2245-5646",
                        pais: "Honduras",
                        ciudad: "Comayagua",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDenis",
                        banner: "images/all-bg-title.jpg",
                        direccion: "Col. La Cañada",
                        latitud: 14.44778701,
                        longitud: -87.63725817,

                    }

                ],

                productos: [

                    {
                        categoria: "Anime",
                        nombre: "Figura de Anime",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",
                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                        ],
                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],




                    },
                    {
                        categoria: "Electronicos",
                        nombre: "Celular",
                        precio: 400.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                        ],

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],

                    },
                    {
                        categoria: "Mobiliario",
                        nombre: "Mesa",
                        precio: 200.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                        ],

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],


                    },
                    {
                        categoria: "Vestimenta",
                        nombre: "Chaqueta",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                        ],

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],





                    },
                ],

                promociones: [

                    {
                        categoria: "Electronicos",
                        nombre: "Telefono",
                        precio: 300.00,
                        porcentaje: 0.4,
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
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

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
                    },

                    {
                        categoria: "Electronicos",
                        nombre: "Laptop",
                        precio: 800.00,
                        porcentaje: 0.2,
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
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                        ],

                        imagenes: [
                            "images/gallery-img-02.jpg",
                            "images/gallery-img-02.jpg",
                            "images/gallery-img-02.jpg",
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
                logo: "images/LogosEmpresas/logo2.jpg",
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
                        banner1: "images/banner-01.jpg",


                        nombreRed2: "Instagram",
                        url2: "www.instagram.com",
                        banner2: "images/banner-02.jpg",


                        nombreRed3: "Twitter",
                        url3: "www.twitter.com",
                        banner3: "images/banner-03.jpg",

                    },

                ],

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
                        banner: "images/all-bg-title.jpg",
                        direccion: "Col. La Peña",
                        latitud: 15.5079941,
                        longitud: -88.02167773,

                    },

                    {
                        nombreSucursal: "Variedades Isaac",
                        correo: "example1243@gmail.com",
                        telefono: "2245-5656",
                        pais: "Honduras",
                        ciudad: "Tegucigalpa",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesIsaac",
                        banner: "images/all-bg-title.jpg",
                        direccion: "Col. La Popular",
                        latitud: 14.08481023,
                        longitud: -87.1729061,

                    },

                    {
                        nombreSucursal: "Variedades Denis",
                        correo: "example12345@gmail.com",
                        telefono: "2245-5646",
                        pais: "Honduras",
                        ciudad: "Comayagua",
                        redSocial: "Facebook",
                        url: "www.facebook.com/VariedadesDenis",
                        banner: "images/all-bg-title.jpg",
                        direccion: "Col. La Cañada",
                        latitud: 14.44778701,
                        longitud: -87.63725817,

                    }

                ],

                productos: [

                    {
                        categoria: "Anime",
                        nombre: "Figura de Anime",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",
                        imagenes: [
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                            "images/gallery-img-12.jpg",
                        ],
                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],




                    },
                    {
                        categoria: "Electronicos",
                        nombre: "Celular",
                        precio: 400.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                            "images/gallery-img-01.jpg",
                        ],

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],

                    },
                    {
                        categoria: "Mobiliario",
                        nombre: "Mesa",
                        precio: 200.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                            "images/gallery-img-06.jpg",
                        ],

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],


                    },
                    {
                        categoria: "Vestimenta",
                        nombre: "Chaqueta",
                        precio: 40.00,
                        cantida: 24,
                        descripcion: "Lorem ipsum dolor . . . ",

                        imagenes: [
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                            "images/gallery-img-09.jpg",
                        ],

                        sucursales: [

                            {
                                nombreSucursal: "Variedades Darwin",
                                correo: "example123@gmail.com",
                                telefono: "2245-5689",
                                pais: "Honduras",
                                ciudad: "San Pedro Sula",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDarwin",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,

                            },

                            {
                                nombreSucursal: "Variedades Isaac",
                                correo: "example1243@gmail.com",
                                telefono: "2245-5656",
                                pais: "Honduras",
                                ciudad: "Tegucigalpa",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesIsaac",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Popular",
                                latitud: 14.08481023,
                                longitud: -87.1729061,

                            },

                            {
                                nombreSucursal: "Variedades Denis",
                                correo: "example12345@gmail.com",
                                telefono: "2245-5646",
                                pais: "Honduras",
                                ciudad: "Comayagua",
                                redSocial: "Facebook",
                                url: "www.facebook.com/VariedadesDenis",
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Cañada",
                                latitud: 14.44778701,
                                longitud: -87.63725817,

                            }

                        ],





                    },
                ],


                promociones: [

                    {
                        categoria: "Mobiliario",
                        nombre: "Mueble de Oficina",
                        precio: 200.00,
                        porcentaje: 0.4,
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
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: 15.5079941,
                                longitud: -88.02167773,
                            },

                        ],

                        imagenes: [
                            "images/gallery-img-05.jpg",
                            "images/gallery-img-05.jpg",
                            "images/gallery-img-05.jpg",
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
                        nombre: "Silla de Oficina",
                        precio: 150.00,
                        porcentaje: 0.4,
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
                                banner: "images/all-bg-title.jpg",
                                direccion: "Col. La Peña",
                                latitud: "45",
                                longitud: "54",

                            },

                        ],

                        imagenes: [
                            "images/gallery-img-04.jpg",
                            "images/gallery-img-04.jpg",
                            "images/gallery-img-04.jpg",
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

        ],


        localStorage.setItem("empresas", JSON.stringify(empresas));
} else {
    empresas = JSON.parse(localStorage.getItem('empresas'));
}

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


var qrcode = function() {

    //---------------------------------------------------------------------
    // qrcode
    //---------------------------------------------------------------------

    /**
     * qrcode
     * @param typeNumber 1 to 10
     * @param errorCorrectLevel 'L','M','Q','H'
     */
    var qrcode = function(typeNumber, errorCorrectLevel) {

        var PAD0 = 0xEC;
        var PAD1 = 0x11;

        var _typeNumber = typeNumber;
        var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];
        var _modules = null;
        var _moduleCount = 0;
        var _dataCache = null;
        var _dataList = new Array();

        var _this = {};

        var makeImpl = function(test, maskPattern) {

            _moduleCount = _typeNumber * 4 + 17;
            _modules = function(moduleCount) {
                var modules = new Array(moduleCount);
                for (var row = 0; row < moduleCount; row += 1) {
                    modules[row] = new Array(moduleCount);
                    for (var col = 0; col < moduleCount; col += 1) {
                        modules[row][col] = null;
                    }
                }
                return modules;
            }(_moduleCount);

            setupPositionProbePattern(0, 0);
            setupPositionProbePattern(_moduleCount - 7, 0);
            setupPositionProbePattern(0, _moduleCount - 7);
            setupPositionAdjustPattern();
            setupTimingPattern();
            setupTypeInfo(test, maskPattern);

            if (_typeNumber >= 7) {
                setupTypeNumber(test);
            }

            if (_dataCache == null) {
                _dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);
            }

            mapData(_dataCache, maskPattern);
        };

        var setupPositionProbePattern = function(row, col) {

            for (var r = -1; r <= 7; r += 1) {

                if (row + r <= -1 || _moduleCount <= row + r) continue;

                for (var c = -1; c <= 7; c += 1) {

                    if (col + c <= -1 || _moduleCount <= col + c) continue;

                    if ((0 <= r && r <= 6 && (c == 0 || c == 6)) ||
                        (0 <= c && c <= 6 && (r == 0 || r == 6)) ||
                        (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
                        _modules[row + r][col + c] = true;
                    } else {
                        _modules[row + r][col + c] = false;
                    }
                }
            }
        };

        var getBestMaskPattern = function() {

            var minLostPoint = 0;
            var pattern = 0;

            for (var i = 0; i < 8; i += 1) {

                makeImpl(true, i);

                var lostPoint = QRUtil.getLostPoint(_this);

                if (i == 0 || minLostPoint > lostPoint) {
                    minLostPoint = lostPoint;
                    pattern = i;
                }
            }

            return pattern;
        };

        var setupTimingPattern = function() {

            for (var r = 8; r < _moduleCount - 8; r += 1) {
                if (_modules[r][6] != null) {
                    continue;
                }
                _modules[r][6] = (r % 2 == 0);
            }

            for (var c = 8; c < _moduleCount - 8; c += 1) {
                if (_modules[6][c] != null) {
                    continue;
                }
                _modules[6][c] = (c % 2 == 0);
            }
        };

        var setupPositionAdjustPattern = function() {

            var pos = QRUtil.getPatternPosition(_typeNumber);

            for (var i = 0; i < pos.length; i += 1) {

                for (var j = 0; j < pos.length; j += 1) {

                    var row = pos[i];
                    var col = pos[j];

                    if (_modules[row][col] != null) {
                        continue;
                    }

                    for (var r = -2; r <= 2; r += 1) {

                        for (var c = -2; c <= 2; c += 1) {

                            if (r == -2 || r == 2 || c == -2 || c == 2 ||
                                (r == 0 && c == 0)) {
                                _modules[row + r][col + c] = true;
                            } else {
                                _modules[row + r][col + c] = false;
                            }
                        }
                    }
                }
            }
        };

        var setupTypeNumber = function(test) {

            var bits = QRUtil.getBCHTypeNumber(_typeNumber);

            for (var i = 0; i < 18; i += 1) {
                var mod = (!test && ((bits >> i) & 1) == 1);
                _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
            }

            for (var i = 0; i < 18; i += 1) {
                var mod = (!test && ((bits >> i) & 1) == 1);
                _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
            }
        };

        var setupTypeInfo = function(test, maskPattern) {

            var data = (_errorCorrectLevel << 3) | maskPattern;
            var bits = QRUtil.getBCHTypeInfo(data);

            // vertical
            for (var i = 0; i < 15; i += 1) {

                var mod = (!test && ((bits >> i) & 1) == 1);

                if (i < 6) {
                    _modules[i][8] = mod;
                } else if (i < 8) {
                    _modules[i + 1][8] = mod;
                } else {
                    _modules[_moduleCount - 15 + i][8] = mod;
                }
            }

            // horizontal
            for (var i = 0; i < 15; i += 1) {

                var mod = (!test && ((bits >> i) & 1) == 1);

                if (i < 8) {
                    _modules[8][_moduleCount - i - 1] = mod;
                } else if (i < 9) {
                    _modules[8][15 - i - 1 + 1] = mod;
                } else {
                    _modules[8][15 - i - 1] = mod;
                }
            }

            // fixed module
            _modules[_moduleCount - 8][8] = (!test);
        };

        var mapData = function(data, maskPattern) {

            var inc = -1;
            var row = _moduleCount - 1;
            var bitIndex = 7;
            var byteIndex = 0;
            var maskFunc = QRUtil.getMaskFunction(maskPattern);

            for (var col = _moduleCount - 1; col > 0; col -= 2) {

                if (col == 6) col -= 1;

                while (true) {

                    for (var c = 0; c < 2; c += 1) {

                        if (_modules[row][col - c] == null) {

                            var dark = false;

                            if (byteIndex < data.length) {
                                dark = (((data[byteIndex] >>> bitIndex) & 1) == 1);
                            }

                            var mask = maskFunc(row, col - c);

                            if (mask) {
                                dark = !dark;
                            }

                            _modules[row][col - c] = dark;
                            bitIndex -= 1;

                            if (bitIndex == -1) {
                                byteIndex += 1;
                                bitIndex = 7;
                            }
                        }
                    }

                    row += inc;

                    if (row < 0 || _moduleCount <= row) {
                        row -= inc;
                        inc = -inc;
                        break;
                    }
                }
            }
        };

        var createBytes = function(buffer, rsBlocks) {

            var offset = 0;

            var maxDcCount = 0;
            var maxEcCount = 0;

            var dcdata = new Array(rsBlocks.length);
            var ecdata = new Array(rsBlocks.length);

            for (var r = 0; r < rsBlocks.length; r += 1) {

                var dcCount = rsBlocks[r].dataCount;
                var ecCount = rsBlocks[r].totalCount - dcCount;

                maxDcCount = Math.max(maxDcCount, dcCount);
                maxEcCount = Math.max(maxEcCount, ecCount);

                dcdata[r] = new Array(dcCount);

                for (var i = 0; i < dcdata[r].length; i += 1) {
                    dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
                }
                offset += dcCount;

                var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
                var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);

                var modPoly = rawPoly.mod(rsPoly);
                ecdata[r] = new Array(rsPoly.getLength() - 1);
                for (var i = 0; i < ecdata[r].length; i += 1) {
                    var modIndex = i + modPoly.getLength() - ecdata[r].length;
                    ecdata[r][i] = (modIndex >= 0) ? modPoly.getAt(modIndex) : 0;
                }
            }

            var totalCodeCount = 0;
            for (var i = 0; i < rsBlocks.length; i += 1) {
                totalCodeCount += rsBlocks[i].totalCount;
            }

            var data = new Array(totalCodeCount);
            var index = 0;

            for (var i = 0; i < maxDcCount; i += 1) {
                for (var r = 0; r < rsBlocks.length; r += 1) {
                    if (i < dcdata[r].length) {
                        data[index] = dcdata[r][i];
                        index += 1;
                    }
                }
            }

            for (var i = 0; i < maxEcCount; i += 1) {
                for (var r = 0; r < rsBlocks.length; r += 1) {
                    if (i < ecdata[r].length) {
                        data[index] = ecdata[r][i];
                        index += 1;
                    }
                }
            }

            return data;
        };

        var createData = function(typeNumber, errorCorrectLevel, dataList) {

            var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);

            var buffer = qrBitBuffer();

            for (var i = 0; i < dataList.length; i += 1) {
                var data = dataList[i];
                buffer.put(data.getMode(), 4);
                buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber));
                data.write(buffer);
            }

            // calc num max data.
            var totalDataCount = 0;
            for (var i = 0; i < rsBlocks.length; i += 1) {
                totalDataCount += rsBlocks[i].dataCount;
            }

            if (buffer.getLengthInBits() > totalDataCount * 8) {
                throw new Error('code length overflow. (' +
                    buffer.getLengthInBits() +
                    '>' +
                    totalDataCount * 8 +
                    ')');
            }

            // end code
            if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
                buffer.put(0, 4);
            }

            // padding
            while (buffer.getLengthInBits() % 8 != 0) {
                buffer.putBit(false);
            }

            // padding
            while (true) {

                if (buffer.getLengthInBits() >= totalDataCount * 8) {
                    break;
                }
                buffer.put(PAD0, 8);

                if (buffer.getLengthInBits() >= totalDataCount * 8) {
                    break;
                }
                buffer.put(PAD1, 8);
            }

            return createBytes(buffer, rsBlocks);
        };

        _this.addData = function(data) {
            var newData = qr8BitByte(data);
            _dataList.push(newData);
            _dataCache = null;
        };

        _this.isDark = function(row, col) {
            if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
                throw new Error(row + ',' + col);
            }
            return _modules[row][col];
        };

        _this.getModuleCount = function() {
            return _moduleCount;
        };

        _this.make = function() {
            makeImpl(false, getBestMaskPattern());
        };

        _this.createTableTag = function(cellSize, margin) {

            cellSize = cellSize || 2;
            margin = (typeof margin == 'undefined') ? cellSize * 4 : margin;

            var qrHtml = '';

            qrHtml += '<table style="';
            qrHtml += ' border-width: 0px; border-style: none;';
            qrHtml += ' border-collapse: collapse;';
            qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
            qrHtml += '">';
            qrHtml += '<tbody>';

            for (var r = 0; r < _this.getModuleCount(); r += 1) {

                qrHtml += '<tr>';

                for (var c = 0; c < _this.getModuleCount(); c += 1) {
                    qrHtml += '<td style="';
                    qrHtml += ' border-width: 0px; border-style: none;';
                    qrHtml += ' border-collapse: collapse;';
                    qrHtml += ' padding: 0px; margin: 0px;';
                    qrHtml += ' width: ' + cellSize + 'px;';
                    qrHtml += ' height: ' + cellSize + 'px;';
                    qrHtml += ' background-color: ';
                    qrHtml += _this.isDark(r, c) ? '#000000' : '#ffffff';
                    qrHtml += ';';
                    qrHtml += '"/>';
                }

                qrHtml += '</tr>';
            }

            qrHtml += '</tbody>';
            qrHtml += '</table>';

            return qrHtml;
        };

        _this.createImgTag = function(cellSize, margin) {
            //TAMA�O DE IMAGEN
            cellSize = cellSize || 2;
            margin = (typeof margin == 'undefined') ? cellSize * 4 : margin;

            var size = _this.getModuleCount() * cellSize + margin * 2;
            var min = margin;
            var max = size - margin;

            return createImgTag(size, size, function(x, y) {
                if (min <= x && x < max && min <= y && y < max) {
                    var c = Math.floor((x - min) / cellSize);
                    var r = Math.floor((y - min) / cellSize);
                    return _this.isDark(r, c) ? 0 : 1;
                } else {
                    return 1;
                }
            });
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // qrcode.stringToBytes
    //---------------------------------------------------------------------

    qrcode.stringToBytes = function(s) {
        var bytes = new Array();
        for (var i = 0; i < s.length; i += 1) {
            var c = s.charCodeAt(i);
            bytes.push(c & 0xff);
        }
        return bytes;
    };

    //---------------------------------------------------------------------
    // qrcode.createStringToBytes
    //---------------------------------------------------------------------

    /**
     * @param unicodeData base64 string of byte array.
     * [16bit Unicode],[16bit Bytes], ...
     * @param numChars
     */
    qrcode.createStringToBytes = function(unicodeData, numChars) {

        // create conversion map.

        var unicodeMap = function() {

            var bin = base64DecodeInputStream(unicodeData);
            var read = function() {
                var b = bin.read();
                if (b == -1) throw new Error();
                return b;
            };

            var count = 0;
            var unicodeMap = {};
            while (true) {
                var b0 = bin.read();
                if (b0 == -1) break;
                var b1 = read();
                var b2 = read();
                var b3 = read();
                var k = String.fromCharCode((b0 << 8) | b1);
                var v = (b2 << 8) | b3;
                unicodeMap[k] = v;
                count += 1;
            }
            if (count != numChars) {
                throw new Error(count + ' != ' + numChars);
            }

            return unicodeMap;
        }();

        var unknownChar = '?'.charCodeAt(0);

        return function(s) {
            var bytes = new Array();
            for (var i = 0; i < s.length; i += 1) {
                var c = s.charCodeAt(i);
                if (c < 128) {
                    bytes.push(c);
                } else {
                    var b = unicodeMap[s.charAt(i)];
                    if (typeof b == 'number') {
                        if ((b & 0xff) == b) {
                            // 1byte
                            bytes.push(b);
                        } else {
                            // 2bytes
                            bytes.push(b >>> 8);
                            bytes.push(b & 0xff);
                        }
                    } else {
                        bytes.push(unknownChar);
                    }
                }
            }
            return bytes;
        };
    };

    //---------------------------------------------------------------------
    // QRMode
    //---------------------------------------------------------------------

    var QRMode = {
        MODE_NUMBER: 1 << 0,
        MODE_ALPHA_NUM: 1 << 1,
        MODE_8BIT_BYTE: 1 << 2,
        MODE_KANJI: 1 << 3
    };

    //---------------------------------------------------------------------
    // QRErrorCorrectLevel
    //---------------------------------------------------------------------

    var QRErrorCorrectLevel = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    };

    //---------------------------------------------------------------------
    // QRMaskPattern
    //---------------------------------------------------------------------

    var QRMaskPattern = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };

    //---------------------------------------------------------------------
    // QRUtil
    //---------------------------------------------------------------------

    var QRUtil = function() {

        var PATTERN_POSITION_TABLE = [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
        ];
        var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
        var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
        var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

        var _this = {};

        var getBCHDigit = function(data) {
            var digit = 0;
            while (data != 0) {
                digit += 1;
                data >>>= 1;
            }
            return digit;
        };

        _this.getBCHTypeInfo = function(data) {
            var d = data << 10;
            while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
                d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15)));
            }
            return ((data << 10) | d) ^ G15_MASK;
        };

        _this.getBCHTypeNumber = function(data) {
            var d = data << 12;
            while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
                d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18)));
            }
            return (data << 12) | d;
        };

        _this.getPatternPosition = function(typeNumber) {
            return PATTERN_POSITION_TABLE[typeNumber - 1];
        };

        _this.getMaskFunction = function(maskPattern) {

            switch (maskPattern) {

                case QRMaskPattern.PATTERN000:
                    return function(i, j) { return (i + j) % 2 == 0; };
                case QRMaskPattern.PATTERN001:
                    return function(i, j) { return i % 2 == 0; };
                case QRMaskPattern.PATTERN010:
                    return function(i, j) { return j % 3 == 0; };
                case QRMaskPattern.PATTERN011:
                    return function(i, j) { return (i + j) % 3 == 0; };
                case QRMaskPattern.PATTERN100:
                    return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0; };
                case QRMaskPattern.PATTERN101:
                    return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
                case QRMaskPattern.PATTERN110:
                    return function(i, j) { return ((i * j) % 2 + (i * j) % 3) % 2 == 0; };
                case QRMaskPattern.PATTERN111:
                    return function(i, j) { return ((i * j) % 3 + (i + j) % 2) % 2 == 0; };

                default:
                    throw new Error('bad maskPattern:' + maskPattern);
            }
        };

        _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
            var a = qrPolynomial([1], 0);
            for (var i = 0; i < errorCorrectLength; i += 1) {
                a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0));
            }
            return a;
        };

        _this.getLengthInBits = function(mode, type) {

            if (1 <= type && type < 10) {

                // 1 - 9

                switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 10;
                    case QRMode.MODE_ALPHA_NUM:
                        return 9;
                    case QRMode.MODE_8BIT_BYTE:
                        return 8;
                    case QRMode.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error('mode:' + mode);
                }

            } else if (type < 27) {

                // 10 - 26

                switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 12;
                    case QRMode.MODE_ALPHA_NUM:
                        return 11;
                    case QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case QRMode.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error('mode:' + mode);
                }

            } else if (type < 41) {

                // 27 - 40

                switch (mode) {
                    case QRMode.MODE_NUMBER:
                        return 14;
                    case QRMode.MODE_ALPHA_NUM:
                        return 13;
                    case QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case QRMode.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error('mode:' + mode);
                }

            } else {
                throw new Error('type:' + type);
            }
        };

        _this.getLostPoint = function(qrcode) {

            var moduleCount = qrcode.getModuleCount();

            var lostPoint = 0;

            // LEVEL1

            for (var row = 0; row < moduleCount; row += 1) {
                for (var col = 0; col < moduleCount; col += 1) {

                    var sameCount = 0;
                    var dark = qrcode.isDark(row, col);

                    for (var r = -1; r <= 1; r += 1) {

                        if (row + r < 0 || moduleCount <= row + r) {
                            continue;
                        }

                        for (var c = -1; c <= 1; c += 1) {

                            if (col + c < 0 || moduleCount <= col + c) {
                                continue;
                            }

                            if (r == 0 && c == 0) {
                                continue;
                            }

                            if (dark == qrcode.isDark(row + r, col + c)) {
                                sameCount += 1;
                            }
                        }
                    }

                    if (sameCount > 5) {
                        lostPoint += (3 + sameCount - 5);
                    }
                }
            };

            // LEVEL2

            for (var row = 0; row < moduleCount - 1; row += 1) {
                for (var col = 0; col < moduleCount - 1; col += 1) {
                    var count = 0;
                    if (qrcode.isDark(row, col)) count += 1;
                    if (qrcode.isDark(row + 1, col)) count += 1;
                    if (qrcode.isDark(row, col + 1)) count += 1;
                    if (qrcode.isDark(row + 1, col + 1)) count += 1;
                    if (count == 0 || count == 4) {
                        lostPoint += 3;
                    }
                }
            }

            // LEVEL3

            for (var row = 0; row < moduleCount; row += 1) {
                for (var col = 0; col < moduleCount - 6; col += 1) {
                    if (qrcode.isDark(row, col) &&
                        !qrcode.isDark(row, col + 1) &&
                        qrcode.isDark(row, col + 2) &&
                        qrcode.isDark(row, col + 3) &&
                        qrcode.isDark(row, col + 4) &&
                        !qrcode.isDark(row, col + 5) &&
                        qrcode.isDark(row, col + 6)) {
                        lostPoint += 40;
                    }
                }
            }

            for (var col = 0; col < moduleCount; col += 1) {
                for (var row = 0; row < moduleCount - 6; row += 1) {
                    if (qrcode.isDark(row, col) &&
                        !qrcode.isDark(row + 1, col) &&
                        qrcode.isDark(row + 2, col) &&
                        qrcode.isDark(row + 3, col) &&
                        qrcode.isDark(row + 4, col) &&
                        !qrcode.isDark(row + 5, col) &&
                        qrcode.isDark(row + 6, col)) {
                        lostPoint += 40;
                    }
                }
            }

            // LEVEL4

            var darkCount = 0;

            for (var col = 0; col < moduleCount; col += 1) {
                for (var row = 0; row < moduleCount; row += 1) {
                    if (qrcode.isDark(row, col)) {
                        darkCount += 1;
                    }
                }
            }

            var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
            lostPoint += ratio * 10;

            return lostPoint;
        };

        return _this;
    }();

    //---------------------------------------------------------------------
    // QRMath
    //---------------------------------------------------------------------

    var QRMath = function() {

        var EXP_TABLE = new Array(256);
        var LOG_TABLE = new Array(256);

        // initialize tables
        for (var i = 0; i < 8; i += 1) {
            EXP_TABLE[i] = 1 << i;
        }
        for (var i = 8; i < 256; i += 1) {
            EXP_TABLE[i] = EXP_TABLE[i - 4] ^
                EXP_TABLE[i - 5] ^
                EXP_TABLE[i - 6] ^
                EXP_TABLE[i - 8];
        }
        for (var i = 0; i < 255; i += 1) {
            LOG_TABLE[EXP_TABLE[i]] = i;
        }

        var _this = {};

        _this.glog = function(n) {

            if (n < 1) {
                throw new Error('glog(' + n + ')');
            }

            return LOG_TABLE[n];
        };

        _this.gexp = function(n) {

            while (n < 0) {
                n += 255;
            }

            while (n >= 256) {
                n -= 255;
            }

            return EXP_TABLE[n];
        };

        return _this;
    }();

    //---------------------------------------------------------------------
    // qrPolynomial
    //---------------------------------------------------------------------

    function qrPolynomial(num, shift) {

        if (typeof num.length == 'undefined') {
            throw new Error(num.length + '/' + shift);
        }

        var _num = function() {
            var offset = 0;
            while (offset < num.length && num[offset] == 0) {
                offset += 1;
            }
            var _num = new Array(num.length - offset + shift);
            for (var i = 0; i < num.length - offset; i += 1) {
                _num[i] = num[i + offset];
            }
            return _num;
        }();

        var _this = {};

        _this.getAt = function(index) {
            return _num[index];
        };

        _this.getLength = function() {
            return _num.length;
        };

        _this.multiply = function(e) {

            var num = new Array(_this.getLength() + e.getLength() - 1);

            for (var i = 0; i < _this.getLength(); i += 1) {
                for (var j = 0; j < e.getLength(); j += 1) {
                    num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i)) + QRMath.glog(e.getAt(j)));
                }
            }

            return qrPolynomial(num, 0);
        };

        _this.mod = function(e) {

            if (_this.getLength() - e.getLength() < 0) {
                return _this;
            }

            var ratio = QRMath.glog(_this.getAt(0)) - QRMath.glog(e.getAt(0));

            var num = new Array(_this.getLength());
            for (var i = 0; i < _this.getLength(); i += 1) {
                num[i] = _this.getAt(i);
            }

            for (var i = 0; i < e.getLength(); i += 1) {
                num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i)) + ratio);
            }

            // recursive call
            return qrPolynomial(num, 0).mod(e);
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // QRRSBlock
    //---------------------------------------------------------------------

    var QRRSBlock = function() {

        var RS_BLOCK_TABLE = [

            // L
            // M
            // Q
            // H

            // 1
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],

            // 2
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],

            // 3
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],

            // 4
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],

            // 5
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],

            // 6
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],

            // 7
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],

            // 8
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],

            // 9
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],

            // 10
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16]
        ];

        var qrRSBlock = function(totalCount, dataCount) {
            var _this = {};
            _this.totalCount = totalCount;
            _this.dataCount = dataCount;
            return _this;
        };

        var _this = {};

        var getRsBlockTable = function(typeNumber, errorCorrectLevel) {

            switch (errorCorrectLevel) {
                case QRErrorCorrectLevel.L:
                    return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
                case QRErrorCorrectLevel.M:
                    return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
                case QRErrorCorrectLevel.Q:
                    return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
                case QRErrorCorrectLevel.H:
                    return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
                default:
                    return undefined;
            }
        };

        _this.getRSBlocks = function(typeNumber, errorCorrectLevel) {

            var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);

            if (typeof rsBlock == 'undefined') {
                throw new Error('bad rs block @ typeNumber:' + typeNumber +
                    '/errorCorrectLevel:' + errorCorrectLevel);
            }

            var length = rsBlock.length / 3;

            var list = new Array();

            for (var i = 0; i < length; i += 1) {

                var count = rsBlock[i * 3 + 0];
                var totalCount = rsBlock[i * 3 + 1];
                var dataCount = rsBlock[i * 3 + 2];

                for (var j = 0; j < count; j += 1) {
                    list.push(qrRSBlock(totalCount, dataCount));
                }
            }

            return list;
        };

        return _this;
    }();

    //---------------------------------------------------------------------
    // qrBitBuffer
    //---------------------------------------------------------------------

    var qrBitBuffer = function() {

        var _buffer = new Array();
        var _length = 0;

        var _this = {};

        _this.getBuffer = function() {
            return _buffer;
        };

        _this.getAt = function(index) {
            var bufIndex = Math.floor(index / 8);
            return ((_buffer[bufIndex] >>> (7 - index % 8)) & 1) == 1;
        };

        _this.put = function(num, length) {
            for (var i = 0; i < length; i += 1) {
                _this.putBit(((num >>> (length - i - 1)) & 1) == 1);
            }
        };

        _this.getLengthInBits = function() {
            return _length;
        };

        _this.putBit = function(bit) {

            var bufIndex = Math.floor(_length / 8);
            if (_buffer.length <= bufIndex) {
                _buffer.push(0);
            }

            if (bit) {
                _buffer[bufIndex] |= (0x80 >>> (_length % 8));
            }

            _length += 1;
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // qr8BitByte
    //---------------------------------------------------------------------

    var qr8BitByte = function(data) {

        var _mode = QRMode.MODE_8BIT_BYTE;
        var _data = data;
        var _bytes = qrcode.stringToBytes(data);

        var _this = {};

        _this.getMode = function() {
            return _mode;
        };

        _this.getLength = function(buffer) {
            return _bytes.length;
        };

        _this.write = function(buffer) {
            for (var i = 0; i < _bytes.length; i += 1) {
                buffer.put(_bytes[i], 8);
            }
        };

        return _this;
    };

    //=====================================================================
    // GIF Support etc.
    //

    //---------------------------------------------------------------------
    // byteArrayOutputStream
    //---------------------------------------------------------------------

    var byteArrayOutputStream = function() {

        var _bytes = new Array();

        var _this = {};

        _this.writeByte = function(b) {
            _bytes.push(b & 0xff);
        };

        _this.writeShort = function(i) {
            _this.writeByte(i);
            _this.writeByte(i >>> 8);
        };

        _this.writeBytes = function(b, off, len) {
            off = off || 0;
            len = len || b.length;
            for (var i = 0; i < len; i += 1) {
                _this.writeByte(b[i + off]);
            }
        };

        _this.writeString = function(s) {
            for (var i = 0; i < s.length; i += 1) {
                _this.writeByte(s.charCodeAt(i));
            }
        };

        _this.toByteArray = function() {
            return _bytes;
        };

        _this.toString = function() {
            var s = '';
            s += '[';
            for (var i = 0; i < _bytes.length; i += 1) {
                if (i > 0) {
                    s += ',';
                }
                s += _bytes[i];
            }
            s += ']';
            return s;
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // base64EncodeOutputStream
    //---------------------------------------------------------------------

    var base64EncodeOutputStream = function() {

        var _buffer = 0;
        var _buflen = 0;
        var _length = 0;
        var _base64 = '';

        var _this = {};

        var writeEncoded = function(b) {
            _base64 += String.fromCharCode(encode(b & 0x3f));
        };

        var encode = function(n) {
            if (n < 0) {
                // error.
            } else if (n < 26) {
                return 0x41 + n;
            } else if (n < 52) {
                return 0x61 + (n - 26);
            } else if (n < 62) {
                return 0x30 + (n - 52);
            } else if (n == 62) {
                return 0x2b;
            } else if (n == 63) {
                return 0x2f;
            }
            throw new Error('n:' + n);
        };

        _this.writeByte = function(n) {

            _buffer = (_buffer << 8) | (n & 0xff);
            _buflen += 8;
            _length += 1;

            while (_buflen >= 6) {
                writeEncoded(_buffer >>> (_buflen - 6));
                _buflen -= 6;
            }
        };

        _this.flush = function() {

            if (_buflen > 0) {
                writeEncoded(_buffer << (6 - _buflen));
                _buffer = 0;
                _buflen = 0;
            }

            if (_length % 3 != 0) {
                // padding
                var padlen = 3 - _length % 3;
                for (var i = 0; i < padlen; i += 1) {
                    _base64 += '=';
                }
            }
        };

        _this.toString = function() {
            return _base64;
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // base64DecodeInputStream
    //---------------------------------------------------------------------

    var base64DecodeInputStream = function(str) {

        var _str = str;
        var _pos = 0;
        var _buffer = 0;
        var _buflen = 0;

        var _this = {};

        _this.read = function() {

            while (_buflen < 8) {

                if (_pos >= _str.length) {
                    if (_buflen == 0) {
                        return -1;
                    }
                    throw new Error('unexpected end of file./' + _buflen);
                }

                var c = _str.charAt(_pos);
                _pos += 1;

                if (c == '=') {
                    _buflen = 0;
                    return -1;
                } else if (c.match(/^\s$/)) {
                    // ignore if whitespace.
                    continue;
                }

                _buffer = (_buffer << 6) | decode(c.charCodeAt(0));
                _buflen += 6;
            }

            var n = (_buffer >>> (_buflen - 8)) & 0xff;
            _buflen -= 8;
            return n;
        };

        var decode = function(c) {
            if (0x41 <= c && c <= 0x5a) {
                return c - 0x41;
            } else if (0x61 <= c && c <= 0x7a) {
                return c - 0x61 + 26;
            } else if (0x30 <= c && c <= 0x39) {
                return c - 0x30 + 52;
            } else if (c == 0x2b) {
                return 62;
            } else if (c == 0x2f) {
                return 63;
            } else {
                throw new Error('c:' + c);
            }
        };

        return _this;
    };

    //---------------------------------------------------------------------
    // gifImage (B/W)
    //---------------------------------------------------------------------

    var gifImage = function(width, height) {

        var _width = width;
        var _height = height;
        var _data = new Array(width * height);

        var _this = {};

        _this.setPixel = function(x, y, pixel) {
            _data[y * _width + x] = pixel;
        };

        _this.write = function(out) {

            //---------------------------------
            // GIF Signature

            out.writeString('GIF87a');

            //---------------------------------
            // Screen Descriptor

            out.writeShort(_width);
            out.writeShort(_height);

            out.writeByte(0x80); // 2bit
            out.writeByte(0);
            out.writeByte(0);

            //---------------------------------
            // Global Color Map

            // black
            out.writeByte(0x00);
            out.writeByte(0x00);
            out.writeByte(0x00);

            // white
            out.writeByte(0xff);
            out.writeByte(0xff);
            out.writeByte(0xff);

            //---------------------------------
            // Image Descriptor

            out.writeString(',');
            out.writeShort(0);
            out.writeShort(0);
            out.writeShort(_width);
            out.writeShort(_height);
            out.writeByte(0);

            //---------------------------------
            // Local Color Map

            //---------------------------------
            // Raster Data

            var lzwMinCodeSize = 2;
            var raster = getLZWRaster(lzwMinCodeSize);

            out.writeByte(lzwMinCodeSize);

            var offset = 0;

            while (raster.length - offset > 255) {
                out.writeByte(255);
                out.writeBytes(raster, offset, 255);
                offset += 255;
            }

            out.writeByte(raster.length - offset);
            out.writeBytes(raster, offset, raster.length - offset);
            out.writeByte(0x00);

            //---------------------------------
            // GIF Terminator
            out.writeString(';');
        };

        var bitOutputStream = function(out) {

            var _out = out;
            var _bitLength = 0;
            var _bitBuffer = 0;

            var _this = {};

            _this.write = function(data, length) {

                if ((data >>> length) != 0) {
                    throw new Error('length over');
                }

                while (_bitLength + length >= 8) {
                    _out.writeByte(0xff & ((data << _bitLength) | _bitBuffer));
                    length -= (8 - _bitLength);
                    data >>>= (8 - _bitLength);
                    _bitBuffer = 0;
                    _bitLength = 0;
                }

                _bitBuffer = (data << _bitLength) | _bitBuffer;
                _bitLength = _bitLength + length;
            };

            _this.flush = function() {
                if (_bitLength > 0) {
                    _out.writeByte(_bitBuffer);
                }
            };

            return _this;
        };

        var getLZWRaster = function(lzwMinCodeSize) {

            var clearCode = 1 << lzwMinCodeSize;
            var endCode = (1 << lzwMinCodeSize) + 1;
            var bitLength = lzwMinCodeSize + 1;

            // Setup LZWTable
            var table = lzwTable();

            for (var i = 0; i < clearCode; i += 1) {
                table.add(String.fromCharCode(i));
            }
            table.add(String.fromCharCode(clearCode));
            table.add(String.fromCharCode(endCode));

            var byteOut = byteArrayOutputStream();
            var bitOut = bitOutputStream(byteOut);

            // clear code
            bitOut.write(clearCode, bitLength);

            var dataIndex = 0;

            var s = String.fromCharCode(_data[dataIndex]);
            dataIndex += 1;

            while (dataIndex < _data.length) {

                var c = String.fromCharCode(_data[dataIndex]);
                dataIndex += 1;

                if (table.contains(s + c)) {

                    s = s + c;

                } else {

                    bitOut.write(table.indexOf(s), bitLength);

                    if (table.size() < 0xfff) {

                        if (table.size() == (1 << bitLength)) {
                            bitLength += 1;
                        }

                        table.add(s + c);
                    }

                    s = c;
                }
            }

            bitOut.write(table.indexOf(s), bitLength);

            // end code
            bitOut.write(endCode, bitLength);

            bitOut.flush();

            return byteOut.toByteArray();
        };

        var lzwTable = function() {

            var _map = {};
            var _size = 0;

            var _this = {};

            _this.add = function(key) {
                if (_this.contains(key)) {
                    throw new Error('dup key:' + key);
                }
                _map[key] = _size;
                _size += 1;
            };

            _this.size = function() {
                return _size;
            };

            _this.indexOf = function(key) {
                return _map[key];
            };

            _this.contains = function(key) {
                return typeof _map[key] != 'undefined';
            };

            return _this;
        };

        return _this;
    };

    var createImgTag = function(width, height, getPixel, alt) {

        var gif = gifImage(width, height);
        for (var y = 0; y < height; y += 1) {
            for (var x = 0; x < width; x += 1) {
                gif.setPixel(x, y, getPixel(x, y));
            }
        }

        var b = byteArrayOutputStream();
        gif.write(b);

        var base64 = base64EncodeOutputStream();
        var bytes = b.toByteArray();
        for (var i = 0; i < bytes.length; i += 1) {
            base64.writeByte(bytes[i]);
        }
        base64.flush();

        var img = '';
        img += '<img';
        img += '\u0020src="';
        img += 'data:image/gif;base64,';
        img += base64;
        img += '"';
        img += '\u0020width="';
        img += width;
        img += '"';
        img += '\u0020height="';
        img += height;
        img += '"';
        if (alt) {
            img += '\u0020alt="';
            img += alt;
            img += '"';
        }
        img += '/>';

        return img;
    };

    //---------------------------------------------------------------------
    // returns qrcode function.

    return qrcode;
}();



var draw_qrcode = function(text, typeNumber, errorCorrectLevel) {
    document.write(create_qrcode(text, typeNumber, errorCorrectLevel));
};

var create_qrcode = function(text, typeNumber, errorCorrectLevel, table) {

    var qr = qrcode(typeNumber || 4, errorCorrectLevel || 'M');
    qr.addData(text);
    qr.make();

    //	return qr.createTableTag();
    return qr.createImgTag();
};

var update_qrcode = function() {
    var text = "http://127.0.0.1:5500/detalleProducto.html";

    document.getElementById('qr').innerHTML = create_qrcode(text);
};

////////////////////////////////////////////////////////////////////

//FUNCIONES LOGIN USUARIO

function Admin() {
    var temp = document.getElementById('correo').value;
    var temp2 = document.getElementById('contraseña').value;

    for (let index = 0; index < usuarios.length; index++) {

        if (temp == "admin" && temp2 == "1234") {
            location.href = 'SuperAdministrador.html';

            break;
        } else if (temp == usuarios[index].nombreUsuario && temp2 == usuarios[index].contraseña) {
            location.href = 'my-account.html';
            alert(index);
            break;

        } else if (temp != usuarios[index].nombreUsuario && temp2 != usuarios[index].contraseña) {
            alert("Datos Incorrectos");

            break;
        }




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

/////////////////CONTROLADOR REGISTRO USUARIO///////


function nuevoUsuario() {

    let usuario = {
        nombreUsuario: document.getElementById('user').value,
        correo: document.getElementById('correo').value,
        contraseña: document.getElementById('contraseña').value,
        telefono: document.getElementById('telefono').value,


        empresasFavoritas: [],


        carrito: [],


        promocionesFavoritas: []

    };
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Usuario agregado con exito");
    location.href = 'login.html';


}


//////////////////////////////////////////////////////////////////////////////////////////

//VALIDACIONES/////


function campoVacio() {


    valor = document.getElementById("correo").value;
    valor2 = document.getElementById("contraseña").value;
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor) || valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
        alert("Debe Rellenar todos los campos");
        return false;
    } else {
        Admin();
    }

}


///////////////////////////////////////////////////////